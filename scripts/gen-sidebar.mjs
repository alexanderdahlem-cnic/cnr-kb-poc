/**
 * Generate the topic configuration for starlight-sidebar-topics from the
 * content tree. Each top-level section becomes a "topic" (horizontal nav item)
 * with its own sidebar `items`. Output -> src/topics.json (imported by
 * astro.config.mjs).
 *
 * Ordering mirrors the legacy live site: items are sorted by the frontmatter
 * `sidebar.order` seeded during migration (falling back to label), and use
 * `sidebar.label` when present. Editors can adjust either in frontmatter.
 *
 * The ~1,300 TLD pages under domains/tlds are intentionally NOT listed (they
 * would bloat the sidebar) — a single "TLDs" entry links to the TLD landing.
 *
 * Usage: node scripts/gen-sidebar.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS = join(process.cwd(), 'src/content/docs');

const TOPICS = [
  ['api', 'API'],
  ['domains', 'Domains'],
  ['hosting', 'Hosting'],
  ['ssl', 'SSL'],
  ['dns', 'DNS'],
  ['services', 'Services'],
  ['help', 'Help'],
];

const ACRONYMS = {
  api: 'API', epp: 'EPP', dns: 'DNS', dnssec: 'DNSSEC', ssl: 'SSL', tls: 'TLS',
  acl: 'ACL', icann: 'ICANN', tld: 'TLD', tlds: 'TLDs', gdpr: 'GDPR', tmch: 'TMCH',
  idn: 'IDN', whmcs: 'WHMCS', sms: 'SMS', errp: 'ERRP', keydns: 'KeyDNS', rds: 'RDS',
  crl: 'CRL', ocsp: 'OCSP', faq: 'FAQ', faqs: 'FAQs', ip: 'IP', ns: 'NS',
  cctld: 'ccTLD', gtld: 'gTLD', foa: 'FOA', cpanel: 'cPanel', vserver: 'vServer',
};

const HUGE = 1e9; // items without an order sort after ordered ones.

function humanize(name) {
  return name
    .split('-')
    .map((w) => ACRONYMS[w.toLowerCase()] || (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

/** Read the frontmatter block of a markdown file. */
function frontmatterOf(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}

function metaOf(file) {
  const fm = frontmatterOf(file);
  const titleM = fm.match(/^title:\s*"?(.*?)"?\s*$/m);
  let title = titleM ? titleM[1].replace(/\\"/g, '"').trim() : '';
  if (title && /^[a-z]/.test(title)) title = title[0].toUpperCase() + title.slice(1);
  // sidebar.order / sidebar.label live under a `sidebar:` block.
  const orderM = fm.match(/^\s+order:\s*(\d+)/m);
  const labelM = fm.match(/^\s+label:\s*"?(.*?)"?\s*$/m);
  const order = orderM ? Number(orderM[1]) : HUGE;
  const label = labelM ? labelM[1].replace(/\\"/g, '"').trim() : '';
  return { title, order, label };
}

function slugOf(file) {
  return (
    '/' +
    relative(DOCS, file)
      .replace(/\.(md|mdx)$/, '')
      .replace(/\/index$/, '')
      .replace(/^index$/, '')
      .toLowerCase() +
    '/'
  ).replace(/\/+/g, '/');
}

function byOrderThenLabel(a, b) {
  if (a.order !== b.order) return a.order - b.order;
  return a.label.localeCompare(b.label);
}

function buildDir(dir, topLevel = false) {
  const entries = readdirSync(dir).sort();
  const groups = [];
  const pages = [];
  let overview = null;

  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      // The mass TLD tree is represented by a single "TLDs" link, not listed.
      if (topLevel && name === 'tlds') continue;
      groups.push({ name, full });
    } else if (/\.(md|mdx)$/.test(name)) {
      if (/^index\.(md|mdx)$/.test(name)) overview = full;
      else pages.push(full);
    }
  }

  const items = [];
  if (overview) {
    const m = metaOf(overview);
    items.push({ label: m.label || m.title || 'Overview', link: slugOf(overview), order: -1 });
  }

  const pageItems = pages.map((f) => {
    const m = metaOf(f);
    return { label: m.label || m.title || humanize(f), link: slugOf(f), order: m.order };
  });

  const groupItems = groups
    .map((g) => {
      const idx = ['index.md', 'index.mdx'].map((n) => join(g.full, n)).find((p) => existsSync(p));
      const gm = idx ? metaOf(idx) : { order: HUGE, label: '' };
      return {
        label: gm.label || humanize(g.name),
        collapsed: true,
        items: buildDir(g.full),
        order: gm.order,
      };
    })
    .filter((g) => g.items.length);

  // Overview first, then pages and groups interleaved by curated order.
  const rest = [...pageItems, ...groupItems].sort(byOrderThenLabel);
  const ordered = [...items.filter((i) => i.order === -1), ...rest];

  // TLDs entry in the Domains sidebar (links to the TLD landing page).
  if (topLevel && dir.endsWith('domains') && existsSync(join(dir, 'tlds'))) {
    ordered.push({ label: 'TLDs', link: '/domains/tlds/' });
  }

  // Strip the internal `order` key from the emitted config.
  return ordered.map(({ order, ...rest }) => rest);
}

const topics = [];
for (const [dirName, label] of TOPICS) {
  const dir = join(DOCS, dirName);
  if (!existsSync(dir)) continue;
  topics.push({
    id: dirName,
    label,
    link: `/${dirName}/`,
    items: buildDir(dir, true),
  });
}

writeFileSync(join(process.cwd(), 'src/topics.json'), JSON.stringify(topics, null, 2) + '\n');
const links = JSON.stringify(topics).match(/"link"/g)?.length || 0;
console.log(`Topics written -> src/topics.json (${topics.length} topics, ${links} links)`);
