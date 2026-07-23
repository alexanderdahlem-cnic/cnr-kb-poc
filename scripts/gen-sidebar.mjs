/**
 * Generate the topic configuration for starlight-sidebar-topics from the
 * content tree. Each top-level section becomes a "topic" (horizontal nav item)
 * with its own sidebar `items`. Output -> src/topics.json (imported by
 * astro.config.mjs).
 *
 * Usage: node scripts/gen-sidebar.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS = join(process.cwd(), 'src/content/docs');

// Topics in the order requested for the horizontal top navigation (no Home).
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
  if (t && /^[a-z]/.test(t)) t = t[0].toUpperCase() + t.slice(1);
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

function buildDir(dir) {
  const entries = readdirSync(dir).sort();
  const groups = [];
  const pages = [];
  let overview = null;

  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) groups.push({ name, full });
    else if (/\.(md|mdx)$/.test(name)) {
      if (/^index\.(md|mdx)$/.test(name)) overview = full;
      else pages.push(full);
    }
  }

  const items = [];
  if (overview) items.push({ label: titleOf(overview) || 'Overview', link: slugOf(overview) });

  const pageItems = pages
    .map((f) => ({ label: titleOf(f) || humanize(f), link: slugOf(f) }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const groupItems = groups
    .map((g) => ({ label: humanize(g.name), collapsed: true, items: buildDir(g.full) }))
    .filter((g) => g.items.length)
    .sort((a, b) => a.label.localeCompare(b.label));

  return [...items, ...pageItems, ...groupItems];
}

const topics = [];
for (const [dirName, label] of TOPICS) {
  const dir = join(DOCS, dirName);
  if (!existsSync(dir)) continue;
  topics.push({
    id: dirName,
    label,
    link: `/${dirName}/`,
    items: buildDir(dir),
  });
}

writeFileSync(join(process.cwd(), 'src/topics.json'), JSON.stringify(topics, null, 2) + '\n');
const links = JSON.stringify(topics).match(/"link"/g)?.length || 0;
console.log(`Topics written -> src/topics.json (${topics.length} topics, ${links} links)`);
