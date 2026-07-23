/**
 * CNR KB migration: legacy Laravel Blade (HTML) -> Starlight Markdown.
 *
 * Migrates the editorial content sections (INCLUDE) plus TLD pages
 * (domains/tlds). For the phase-1 checkpoint only a representative sample of
 * TLDs is migrated (TLD_SAMPLE); pass MIGRATE_ALL_TLDS=1 to pull every TLD.
 *
 * Presentation is emitted as clean Markdown container directives
 * (:::command / :::response / :::exception / :::gateways / :::commandlist /
 * :::tldnav) handled by src/plugins/kb-directives.js — the `.md` stays clean.
 * Images are copied into public/media and referenced locally.
 *
 * Usage: node scripts/migrate.mjs /path/to/gcus-cnr-kb-static
 */
import {
  readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync, copyFileSync,
} from 'node:fs';
import { join, dirname, relative, basename, posix } from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const SRC_REPO = process.argv[2];
if (!SRC_REPO) {
  console.error('Pass the path to the legacy repo as arg 1.');
  process.exit(1);
}
const KB_ROOT = join(SRC_REPO, 'resources/views/cnr/kb');
const SHARED_ROOT = join(SRC_REPO, 'resources/views/cnr/_shared');
const PUBLIC_SRC = join(SRC_REPO, 'public');
const OUT_ROOT = join(process.cwd(), 'src/content/docs');
const MEDIA_OUT = join(process.cwd(), 'public/media');

// GitHub Pages project-site base (matches astro.config.mjs `base`). Media is
// referenced root-absolute WITH the base so it resolves under the sub-path.
const BASE = '/cnr-kb-poc';

// Sections to migrate. `domains/tlds` is handled specially (see TLD section).
const INCLUDE = ['help', 'dns', 'ssl', 'services', 'domains', 'api', 'hosting'];
const TLDS_REL = 'domains/tlds';

// Phase-1 checkpoint: migrate only these representative TLDs (filenames without
// .blade.php). Covers gTLD/new-gTLD/ccTLD, 2nd-level (`_`->`.`), pages with
// Exception boxes + NIS2 + IDN + country flags. Set MIGRATE_ALL_TLDS=1 to pull all.
const TLD_SAMPLE = [
  'com',    // gTLD
  'careers',// new gTLD (layout reference)
  'xyz',    // new gTLD
  'de',     // ccTLD — Exception boxes + NIS2 + country flag (layout reference)
  'sk',     // ccTLD (layout reference)
  'us',     // ccTLD
  'io',     // ccTLD
  'ac',     // ccTLD
  'co_uk',  // dotted 2nd-level ccTLD (_ -> .)
  'com_pt', // dotted 2nd-level + NIS2 (_ -> .)
];
const MIGRATE_ALL_TLDS = process.env.MIGRATE_ALL_TLDS === '1';

const LEGACY_ORIGIN = 'https://kb.centralnicreseller.com';

// old-URL-path -> new-slug, populated before conversion (see run section).
let LINK_MAP = new Map();
// lowercased legacy path (no .html) -> { order, label } from the legacy nav.
let NAV_ORDER = new Map();

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});
td.use(gfm);
td.addRule('stripAnchors', {
  filter: (node) => node.nodeName === 'A' && !node.getAttribute('href'),
  replacement: (content) => content,
});

function listBladeFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...listBladeFiles(full));
    else if (entry.endsWith('.blade.php')) out.push(full);
  }
  return out;
}

function decodeEntities(s) {
  if (!s || !s.includes('&')) return s;
  return cheerio.load(`<x>${s}</x>`)('x').text();
}

function extractParam(header, key) {
  const re = new RegExp(`'${key}'\\s*=>\\s*'((?:[^'\\\\]|\\\\.)*)'`);
  const m = header.match(re);
  return m ? decodeEntities(m[1].replace(/\\'/g, "'")).trim() : '';
}

function frontmatterEscape(s) {
  return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

/** github-slugger-compatible heading id (matches Starlight autolink slugs). */
function slugifyHeading(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function sanitizeSegment(s) {
  if (s === 'index') return s;
  return (
    s
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'page'
  );
}

const isTldBlade = (bladePath) =>
  relative(KB_ROOT, bladePath).replace(/\\/g, '/').startsWith(TLDS_REL + '/');

/** Map legacy blade path -> Starlight markdown output path (sanitised slugs). */
function outPathFor(bladePath) {
  let rel = relative(KB_ROOT, bladePath).replace(/\.blade\.php$/, '');
  // TLD pages: keep the legacy slug, mapping `_` -> `.` (com_sg -> com.sg) and
  // never hyphen-sanitising, so /domains/tlds/com.sg matches the old URL.
  if (isTldBlade(bladePath)) {
    const tld = basename(rel).replace(/_/g, '.');
    return join(OUT_ROOT, TLDS_REL, tld + '.md');
  }
  const dirExistsForLeaf = (() => {
    try {
      return statSync(join(KB_ROOT, rel)).isDirectory();
    } catch {
      return false;
    }
  })();
  if (dirExistsForLeaf) rel = rel + '/index';
  const safe = rel.split('/').map(sanitizeSegment).join('/');
  return join(OUT_ROOT, safe + '.md');
}

function oldPathFor(bladePath) {
  return '/' + relative(KB_ROOT, bladePath).replace(/\.blade\.php$/, '').replace(/\\/g, '/');
}

function slugFor(bladePath) {
  return relative(OUT_ROOT, outPathFor(bladePath))
    .replace(/\\/g, '/')
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')
    .replace(/^index$/, '')
    .toLowerCase();
}

function resolveLink(pageOld, pageSlug, href) {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|data:)/i.test(href)) return href;
  if (href.startsWith('#')) return href;

  const hashIdx = href.indexOf('#');
  const frag = hashIdx >= 0 ? href.slice(hashIdx) : '';
  let pathPart = (hashIdx >= 0 ? href.slice(0, hashIdx) : href).split('?')[0];
  pathPart = pathPart.replace(/index\.html$/i, '').replace(/\.html$/i, '');

  let abs = pathPart.startsWith('/')
    ? posix.normalize(pathPart)
    : posix.normalize(posix.join(posix.dirname(pageOld), pathPart || '.'));
  abs = abs.replace(/\/+$/, '') || '/';

  const candidates = [abs, abs.toLowerCase()];
  if (abs.endsWith('/index')) candidates.push(abs.replace(/\/index$/, ''));
  if (abs === '/') candidates.push('/index');

  for (const c of candidates) {
    if (LINK_MAP.has(c)) {
      const targetSlug = LINK_MAP.get(c);
      let rel = posix.relative('/' + pageSlug, '/' + targetSlug);
      if (rel === '') rel = '.';
      return rel.replace(/\/?$/, '/') + frag;
    }
  }
  return LEGACY_ORIGIN + abs + frag;
}

// --- media self-hosting ---------------------------------------------------
const copiedMedia = new Set();
/** Copy a legacy public asset into public/media and return its local URL, or null. */
function localizeImg(src) {
  if (!src) return null;
  const m = src.match(/(imagetypes\/|images\/|dist\/img\/|files\/)(.+)$/);
  if (!m) return null;
  const rel = (m[1] + m[2]).split('?')[0].split('#')[0];
  const from = join(PUBLIC_SRC, rel);
  if (!existsSync(from)) return null;
  if (!copiedMedia.has(rel)) {
    const to = join(MEDIA_OUT, rel);
    mkdirSync(dirname(to), { recursive: true });
    copyFileSync(from, to);
    copiedMedia.add(rel);
  }
  return `${BASE}/media/${rel}`;
}

// --- directive builders ---------------------------------------------------
const kbBlocks = [];
function pushBlock(md) {
  const idx = kbBlocks.length;
  kbBlocks.push(md);
  return `\n\nKBBLOCK${idx}KBEND\n\n`;
}
function directiveBox(kind, label, codeText) {
  const safeLabel = String(label).replace(/[\[\]]/g, '').trim() || kind;
  const code = String(codeText).replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').replace(/^\n+|\n+$/g, '');
  return `:::${kind}[${safeLabel}]\n\n\`\`\`text\n${code}\n\`\`\`\n\n:::`;
}
function directiveLinkList(name, label, links) {
  // links: [{href, text}]
  const items = links.map((l) => `- [${l.text.replace(/[\[\]]/g, '')}](${l.href})`).join('\n');
  const head = label ? `:::${name}[${label.replace(/[\[\]]/g, '')}]` : `:::${name}`;
  return `${head}\n\n${items}\n\n:::`;
}

/**
 * Replace .cmd / .cmd.exception / .rsp / .gateways inside `scope` with directive
 * placeholders. Links inside were already rewritten. Returns nothing (mutates).
 */
function extractApiBlocks($, scope, pageOld, pageSlug) {
  scope.find('.cmd, .rsp').each((_, el) => {
    const $el = $(el);
    const kind = $el.hasClass('rsp') ? 'response' : $el.hasClass('exception') ? 'exception' : 'command';
    const defLabel = kind === 'response' ? 'Response' : kind === 'exception' ? 'Exception' : 'Command';
    const labelEl = $el.find('strong, h1, h2, h3, h4, h5').first();
    const label = (labelEl.text() || defLabel).trim() || defLabel;
    const codeEl = $el.find('pre code').first().length ? $el.find('pre code').first() : $el.find('pre').first();
    const code = (codeEl.length ? codeEl.text() : $el.text()) || '';
    $el.replaceWith(pushBlock(directiveBox(kind, label, code)));
  });

  scope.find('.gateways').each((_, el) => {
    const $el = $(el);
    const links = [];
    $el.find('li').each((_, li) => {
      const a = $(li).find('a[href]').first();
      const text = $(li).text().replace(/\s+/g, ' ').trim();
      if (!text) return;
      links.push({ href: a.attr('href') || '#', text });
    });
    if (!links.length) {
      $el.remove();
      return;
    }
    $el.replaceWith(pushBlock(directiveLinkList('gateways', 'Possible Gateways', links)));
  });
}

/** Build a :::commandlist placeholder from a <ul>/<nav> of links (mutates: removes source). */
function commandListFrom($, listEl, label, anchorMap) {
  const links = [];
  listEl.find('a[href]').each((_, a) => {
    const $a = $(a);
    let href = $a.attr('href') || '#';
    if (href.startsWith('#') && anchorMap && anchorMap.has(href)) href = anchorMap.get(href);
    const text = $a.text().replace(/\s+/g, ' ').trim();
    if (text) links.push({ href, text });
  });
  if (!links.length) return null;
  return directiveLinkList('commandlist', label || '', links);
}

// --- editorial page conversion --------------------------------------------
function convert(bladePath) {
  const pageOld = oldPathFor(bladePath);
  const pageSlug = slugFor(bladePath);
  const raw = readFileSync(bladePath, 'utf8');

  const header = raw.slice(0, raw.indexOf('@section') === -1 ? 400 : raw.indexOf('@section'));
  let title = extractParam(header, 'documentTitle');
  const description = extractParam(header, 'metaDescription');
  title = title
    .replace(/\s*[-–|]\s*CentralNic Reseller Knowledge Base\s*$/i, '')
    .replace(/\s*[-–|]\s*CentralNic Reseller\s*$/i, '')
    .replace(/\s*[-–|]\s*(API|EPP)\s+Command\s*$/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const secStart = raw.indexOf("@section('content')");
  if (secStart === -1) return null;
  let body = raw.slice(secStart + "@section('content')".length);
  body = body.replace(/@endsection[\s\S]*$|@stop[\s\S]*$/, '');
  body = stripBlade(body);

  const $ = cheerio.load(body, null, false);

  // nav.related lives in the <aside>, a sibling of .main — extract before scoping.
  let trailing = '';
  const relatedNav = $('nav.related').first();
  if (relatedNav.length) {
    relatedNav.find('a[href]').each((_, el) => {
      $(el).attr('href', resolveLink(pageOld, pageSlug, $(el).attr('href')));
    });
    const cat = (relatedNav.find('h4, h3, h2').first().text() || '').trim();
    const block = commandListFrom($, relatedNav, cat);
    if (block) trailing = '\n\n' + pushBlock(block).trim() + '\n';
  }

  // Remove page furniture + icons.
  $('.breadcrumb, aside, .box.help, nav, .rel_nav').remove();
  $('i.fa, i[class*="fa-"]').remove();
  let scope = $('.main').first();
  if (!scope.length) scope = $.root();
  scope.find('span.anchor').remove();

  normalizeTables($, scope);
  rewriteLinks($, scope, pageOld, pageSlug);
  rewriteImages($, scope);
  extractApiBlocks($, scope, pageOld, pageSlug);

  // Overview/teaser pages: ".box" link cards -> Starlight <LinkCard>s.
  const cards = collectCards($, scope);
  scope.find('.teaser, .boxes').remove();
  scope.find('.box').remove();

  const firstH1 = scope.find('h1').first();
  const h1Text = firstH1.text().trim();
  firstH1.remove();
  if (!title && h1Text) title = h1Text;

  let md = td.turndown(scope.html() || '').trim();
  md = md.replace(/\n{3,}/g, '\n\n');
  md = substituteBlocks(md);
  if (trailing) md += substituteBlocks(trailing);
  md = md.replace(/\n{3,}/g, '\n\n').trim();

  if (!title) title = basename(bladePath).replace(/\.blade\.php$/, '').replace(/[-_]/g, ' ');

  const fm = frontmatter(bladePath, title, description);

  if (cards.length) {
    const grid =
      '<CardGrid>\n' +
      cards
        .map(
          (c) =>
            `  <LinkCard title={${JSON.stringify(c.title)}} href={${JSON.stringify(c.href)}}` +
            (c.description ? ` description={${JSON.stringify(c.description)}}` : '') +
            ` />`
        )
        .join('\n') +
      '\n</CardGrid>';
    const imp = "import { CardGrid, LinkCard } from '@astrojs/starlight/components';\n\n";
    return { content: fm + imp + (md ? md + '\n\n' : '') + grid + '\n', ext: '.mdx' };
  }
  return { content: fm + md + '\n', ext: '.md' };
}

// --- TLD page conversion ---------------------------------------------------
function convertTld(bladePath) {
  const pageOld = oldPathFor(bladePath);
  const pageSlug = slugFor(bladePath);
  const raw = readFileSync(bladePath, 'utf8');

  const header = raw.slice(0, raw.indexOf('@section') === -1 ? 400 : raw.indexOf('@section'));
  const description = extractParam(header, 'metaDescription');

  const secStart = raw.indexOf("@section('content')");
  if (secStart === -1) return null;
  let body = raw.slice(secStart + "@section('content')".length);
  body = body.replace(/@endsection[\s\S]*$|@stop[\s\S]*$/, '');
  body = stripBlade(body);

  const $ = cheerio.load(body, null, false);
  $('i.fa, i[class*="fa-"]').remove();

  const title = ($('h1').first().text() || '.' + basename(bladePath).replace(/\.blade\.php$/, '').replace(/_/g, '.')).trim();

  // --- specs panel (right column) ---
  const specs = $('aside .tldspecs').first();
  let tldspecsHtml = '';
  if (specs.length) {
    specs.find('.box.userrating, form, script').remove();
    specs.find('a[href]').each((_, el) => {
      $(el).attr('href', resolveLink(pageOld, pageSlug, $(el).attr('href')));
    });
    specs.find('img[src]').each((_, el) => {
      const local = localizeImg($(el).attr('src') || '');
      if (local) $(el).attr('src', local);
      else $(el).remove();
    });
    specs.find('*').each((_, el) => {
      // Drop empty class attrs? keep classes for styling. Remove title spam kept.
    });
    tldspecsHtml = (specs.html() || '').replace(/\s+/g, ' ').trim();
  }

  const main = $('.main').first();
  if (!main.length) return null;
  main.find('.breadcrumb, .rel_nav, nav.related').remove();
  main.find('h1').first().remove();
  main.find('span.anchor').each((_, el) => $(el).remove()); // ids captured below first

  // Build anchor map from the command headings (id -> Starlight slug) BEFORE removing spans.
  // (span.anchor removed above, so re-derive from the raw body instead.)

  // Re-parse to capture anchor ids -> heading slug (spans were removed above; do it fresh).
  const anchorMap = buildAnchorMap(body);

  // Section tabs -> tldnav button row (omit "Related TLDs").
  const tabRow = main.find('.anchors.tldpage').first();
  const sections = []; // {label, id}
  if (tabRow.length) {
    tabRow.find('li a').each((_, a) => {
      const id = ($(a).attr('id') || '').trim();
      const label = $(a).text().replace(/\s+/g, ' ').trim();
      if (!id || /related/i.test(id) || /related/i.test(label)) return;
      sections.push({ label, id });
    });
  }
  tabRow.remove();

  // Omit the Related TLDs info block entirely.
  main.find('#related-t, .infos#related-t').remove();
  main.find('[id="related-t"]').remove();

  // Rewrite links/images in the main content.
  rewriteLinks($, main, pageOld, pageSlug);
  main.find('img[src]').each((_, el) => {
    const local = localizeImg($(el).attr('src') || '');
    if (local) $(el).attr('src', local);
    else $(el).remove();
  });

  // Convert the command anchor list (ul.anchors) -> :::commandlist, hrefs remapped.
  main.find('ul.anchors').each((_, ul) => {
    const block = commandListFrom($, $(ul), '', anchorMap);
    $(ul).replaceWith(block ? pushBlock(block) : '');
  });

  // Command / Exception / Response boxes + gateways -> directives.
  extractApiBlocks($, main, pageOld, pageSlug);

  normalizeTables($, main);

  // Determine per-section h2 text so the tldnav buttons link to real heading slugs.
  // Section info divs: id="<tabid>-t". Map tab id -> its <h2> text.
  const navLinks = [];
  for (const s of sections) {
    const info = main.find(`[id="${s.id}-t"]`).first();
    const h2 = info.length ? info.find('h2').first().text().trim() : '';
    const slug = h2 ? slugifyHeading(h2) : slugifyHeading(s.label);
    navLinks.push({ href: `#${slug}`, text: s.label });
  }
  const navBlock = navLinks.length ? pushBlock(directiveLinkList('tldnav', '', navLinks)) : '';

  let md = td.turndown(main.html() || '').trim();
  md = md.replace(/\n{3,}/g, '\n\n');
  md = substituteBlocks(md);
  const navMd = navBlock ? substituteBlocks(navBlock).trim() + '\n\n' : '';
  md = md.replace(/\n{3,}/g, '\n\n').trim();

  // Astro/Starlight strips dots from generated slugs; for multi-part TLDs set an
  // explicit slug so they keep the dotted legacy URL (com_pt -> /domains/tlds/com.pt).
  // Single-label TLDs already slug correctly, so leave them alone (an explicit
  // slug equal to the auto id would trip a duplicate-id warning).
  const stem = basename(bladePath).replace(/\.blade\.php$/, '');
  const extra = { tldspecsHtml };
  if (stem.includes('_')) extra.slug = TLDS_REL + '/' + stem.replace(/_/g, '.');
  const fm = frontmatter(bladePath, title, description, extra);
  return { content: fm + navMd + md + '\n', ext: '.md' };
}

/** Parse anchor ids from the raw blade body -> map '#Id' -> '#heading-slug'. */
function buildAnchorMap(body) {
  const $ = cheerio.load(body, null, false);
  $('i.fa, i[class*="fa-"]').remove();
  const map = new Map();
  $('h2, h3, h4, h5').each((_, h) => {
    const $h = $(h);
    const span = $h.find('span.anchor[id]').first();
    if (!span.length) return;
    const id = span.attr('id');
    const clone = $h.clone();
    clone.find('span.anchor').remove();
    const text = clone.text().trim();
    if (id && text) map.set('#' + id, '#' + slugifyHeading(text));
  });
  return map;
}

// --- shared helpers --------------------------------------------------------
function stripBlade(body) {
  return body
    .replace(/\{\{--[\s\S]*?--\}\}/g, '')
    .replace(/@php[\s\S]*?@endphp/g, '')
    .replace(
      /@(include|extends|section|endsection|stop|yield|component|endcomponent|slot|endslot|if|elseif|else|endif|foreach|endforeach|for|endfor|isset|endisset)\b[^\n]*/g,
      ''
    )
    .replace(/\{\{[^}]*\}\}/g, '')
    .replace(/<\/?x-[^>]*>/g, '');
}

function normalizeTables($, scope) {
  scope.find('table').each((_, table) => {
    const $t = $(table);
    $t.find('td span, th span').each((_, s) => $(s).replaceWith($(s).html() || ''));
    if ($t.find('th').length === 0) {
      const firstRow = $t.find('tr').first();
      firstRow.find('td').each((_, td) => {
        const $td = $(td);
        const th = $('<th>').html($td.html() || '');
        $td.replaceWith(th);
      });
    }
  });
}

function rewriteLinks($, scope, pageOld, pageSlug) {
  scope.find('a[href]').each((_, el) => {
    $(el).attr('href', resolveLink(pageOld, pageSlug, $(el).attr('href')));
  });
}

function rewriteImages($, scope) {
  scope.find('img[src]').each((_, el) => {
    const src = $(el).attr('src') || '';
    if (/^https?:/i.test(src) && !src.includes('kb.centralnicreseller.com')) return;
    const local = localizeImg(src);
    if (local) {
      $(el).attr('src', local);
      $(el).removeAttr('srcset').removeAttr('width').removeAttr('height');
    } else {
      // Unknown asset: point at the live origin so it still renders.
      const m = src.match(/(imagetypes\/|images\/|dist\/img\/|files\/)(.*)$/);
      if (m) $(el).attr('src', LEGACY_ORIGIN + '/' + m[1] + m[2]);
      else $(el).remove();
    }
  });
}

function collectCards($, scope) {
  const cards = [];
  scope.find('.box').each((_, box) => {
    const $box = $(box);
    const a = $box.find('a[href]').first();
    if (!a.length) return;
    const href = a.attr('href');
    const cardTitle = ($box.find('h2, h3, h4').first().text() || a.attr('title') || '').trim();
    const cardDesc = $box.find('em').first().text().trim();
    if (href && cardTitle) cards.push({ href, title: cardTitle, description: cardDesc });
  });
  return cards;
}

function substituteBlocks(md) {
  return md.replace(/KBBLOCK(\d+)KBEND/g, (_, i) => '\n\n' + kbBlocks[Number(i)] + '\n\n');
}

function frontmatter(bladePath, title, description, extra = {}) {
  const nav = NAV_ORDER.get(oldPathFor(bladePath).toLowerCase());
  const lines = ['---', `title: ${frontmatterEscape(title)}`];
  if (extra.slug) lines.push(`slug: ${extra.slug}`);
  if (description) lines.push(`description: ${frontmatterEscape(description.slice(0, 160))}`);
  if (nav) {
    lines.push('sidebar:');
    if (Number.isFinite(nav.order)) lines.push(`  order: ${nav.order}`);
    if (nav.label && nav.label !== title) lines.push(`  label: ${frontmatterEscape(nav.label)}`);
  }
  if (extra.tldspecsHtml) {
    // Block scalar keeps the HTML readable and quote-safe.
    const indented = extra.tldspecsHtml.replace(/\n/g, ' ').trim();
    lines.push('tldspecsHtml: ' + frontmatterEscape(indented));
  }
  lines.push('---');
  return lines.join('\n') + '\n\n';
}

// --- nav-order extraction --------------------------------------------------
function normalizeNavPath(href) {
  if (!href) return null;
  if (/^(https?:|mailto:|tel:)/i.test(href.replace(/^\//, ''))) return null;
  if (/^https?:/i.test(href)) return null;
  let p = href.split('#')[0].split('?')[0];
  p = p.replace(/\.html$/i, '').replace(/\/index$/i, '');
  if (!p.startsWith('/')) p = '/' + p;
  p = p.replace(/\/+$/, '') || '/';
  return p.toLowerCase();
}

function buildNavOrder() {
  const map = new Map();
  let counter = 0;
  // 1) mobile_nav.blade.php — the deep curated central tree.
  const mnav = join(SHARED_ROOT, 'mobile_nav.blade.php');
  if (existsSync(mnav)) {
    const $ = cheerio.load(readFileSync(mnav, 'utf8'), null, false);
    $('a[href]').each((_, a) => {
      const path = normalizeNavPath($(a).attr('href'));
      const label = $(a).text().replace(/\s+/g, ' ').trim();
      if (!path || path === '/') return;
      counter += 10;
      if (!map.has(path)) map.set(path, { order: counter, label });
    });
  }
  // 2) api-command-reference.blade.php — ordering for the ~345 API command pages.
  const apiRef = join(KB_ROOT, 'api/api-commands/api-command-reference.blade.php');
  if (existsSync(apiRef)) {
    const $ = cheerio.load(readFileSync(apiRef, 'utf8'), null, false);
    $('a[href*="api-command/"]').each((_, a) => {
      const href = $(a).attr('href') || '';
      const m = href.match(/api-command\/(.+?)(?:\.html)?(?:[#?]|$)/i);
      if (!m) return;
      const path = ('/api/api-command/' + decodeURIComponent(m[1])).toLowerCase();
      const label = $(a).text().replace(/\s+/g, ' ').trim();
      counter += 10;
      if (!map.has(path)) map.set(path, { order: counter, label });
    });
  }
  return map;
}

// --- run -------------------------------------------------------------------
let written = 0,
  skipped = 0,
  empty = 0,
  tldWritten = 0;

const sections = INCLUDE.filter((s) => {
  try {
    return statSync(join(KB_ROOT, s)).isDirectory() || statSync(join(KB_ROOT, s + '.blade.php')).isFile();
  } catch {
    return false;
  }
});

const files = [];
for (const s of sections) {
  const landing = join(KB_ROOT, s + '.blade.php');
  try {
    if (statSync(landing).isFile()) files.push(landing);
  } catch {}
  try {
    if (statSync(join(KB_ROOT, s)).isDirectory()) files.push(...listBladeFiles(join(KB_ROOT, s)));
  } catch {}
}

// Split editorial vs TLD. The TLD-list landing (domains/tlds.blade.php) is a
// generated table page — we provide a hand-authored landing (with the search
// widget) at domains/tlds/index.mdx instead, so skip the legacy landing.
const editorialFiles = files.filter(
  (f) => !isTldBlade(f) && relative(KB_ROOT, f).replace(/\\/g, '/') !== TLDS_REL + '.blade.php'
);
let tldFiles = files.filter((f) => isTldBlade(f));
if (!MIGRATE_ALL_TLDS) {
  const sample = new Set(TLD_SAMPLE.map((n) => n.toLowerCase()));
  tldFiles = tldFiles.filter((f) => sample.has(basename(f).replace(/\.blade\.php$/, '').toLowerCase()));
}

NAV_ORDER = buildNavOrder();

// Build the link map BEFORE converting (editorial + selected TLDs).
LINK_MAP = new Map();
for (const f of [...editorialFiles, ...tldFiles]) LINK_MAP.set(oldPathFor(f).toLowerCase(), slugFor(f));
LINK_MAP.set('/index', '');
LINK_MAP.set('/', '');

function write(bladePath, result) {
  if (!result) {
    skipped++;
    return;
  }
  if (result.content.replace(/---[\s\S]*?---/, '').trim().length < 8) empty++;
  const outPath = outPathFor(bladePath).replace(/\.md$/, result.ext);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, result.content, 'utf8');
}

for (const f of editorialFiles) {
  const r = convert(f);
  write(f, r);
  if (r) written++;
}
for (const f of tldFiles) {
  const r = convertTld(f);
  write(f, r);
  if (r) tldWritten++;
}

console.log(
  `Editorial: ${written} pages | TLDs: ${tldWritten}${MIGRATE_ALL_TLDS ? '' : ' (sample)'} | ` +
    `media: ${copiedMedia.size} files | skipped: ${skipped} | near-empty: ${empty}`
);
console.log(`Output -> ${OUT_ROOT}`);
