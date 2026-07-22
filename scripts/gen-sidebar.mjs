/**
 * Generate a curated Starlight sidebar from the content tree.
 *
 * Why not `autogenerate`? It labels groups with the raw directory name
 * (kebab-case, lowercase — "api-command", "keydns"), which looks unprofessional.
 * This walks src/content/docs and emits explicit groups/items with humanised,
 * capitalised labels (with an acronym dictionary), written to src/sidebar.json
 * and imported by astro.config.mjs.
 *
 * Usage: node scripts/gen-sidebar.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS = join(process.cwd(), 'src/content/docs');

// Order + display names for the top-level sections.
const TOP_ORDER = [
  ['help', 'Help'],
  ['domains', 'Domains'],
  ['dns', 'DNS'],
  ['ssl', 'SSL'],
  ['services', 'Services'],
  ['api', 'API'],
];

const ACRONYMS = {
  api: 'API', epp: 'EPP', dns: 'DNS', dnssec: 'DNSSEC', ssl: 'SSL', tls: 'TLS',
  acl: 'ACL', icann: 'ICANN', tld: 'TLD', tlds: 'TLDs', gdpr: 'GDPR', tmch: 'TMCH',
  idn: 'IDN', whmcs: 'WHMCS', sms: 'SMS', errp: 'ERRP', keydns: 'KeyDNS', rds: 'RDS',
  crl: 'CRL', ocsp: 'OCSP', faq: 'FAQ', faqs: 'FAQs', dns: 'DNS', ip: 'IP', ns: 'NS',
  cctld: 'ccTLD', gtld: 'gTLD', foa: 'FOA', poll: 'Poll',
};

function humanize(name) {
  return name
    .split('-')
    .map((w) => ACRONYMS[w.toLowerCase()] || (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function titleOf(file) {
  const m = readFileSync(file, 'utf8').match(/^title:\s*"?(.*?)"?\s*$/m);
  let t = m ? m[1] : '';
  t = t.replace(/\\"/g, '"').trim();
  if (t && /^[a-z]/.test(t)) t = t[0].toUpperCase() + t.slice(1); // capitalise first letter
  return t;
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

/** Build sidebar items for a directory (recursively). */
function buildDir(dir) {
  const entries = readdirSync(dir).sort();
  const groups = [];
  const pages = [];
  let overview = null;

  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      groups.push({ name, full });
    } else if (/\.(md|mdx)$/.test(name)) {
      if (/^index\.(md|mdx)$/.test(name)) overview = full;
      else pages.push(full);
    }
  }

  const items = [];
  if (overview) items.push({ label: titleOf(overview) || 'Overview', link: slugOf(overview) });

  // Pages first (alpha by label), then sub-groups (alpha by label).
  const pageItems = pages
    .map((f) => ({ label: titleOf(f) || humanize(f), link: slugOf(f) }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const groupItems = groups
    .map((g) => ({ label: humanize(g.name), collapsed: true, items: buildDir(g.full) }))
    .filter((g) => g.items.length)
    .sort((a, b) => a.label.localeCompare(b.label));

  return [...items, ...pageItems, ...groupItems];
}

const sidebar = [{ label: 'Home', link: '/' }];
for (const [dirName, label] of TOP_ORDER) {
  const dir = join(DOCS, dirName);
  if (!existsSync(dir)) continue;
  sidebar.push({ label, collapsed: true, items: buildDir(dir) });
}

writeFileSync(join(process.cwd(), 'src/sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n');
const count = JSON.stringify(sidebar).match(/"link"/g)?.length || 0;
console.log(`Sidebar written -> src/sidebar.json (${count} links)`);
