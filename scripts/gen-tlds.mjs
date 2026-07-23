/**
 * Scan the migrated TLD pages (src/content/docs/domains/tlds/*.md) into
 * src/tlds.json — the index the homepage TLD search widget filters over.
 *
 * Each entry: { name, slug, url, type, flags }.
 *   name  – ".de"
 *   slug  – "de"           (route slug; legacy `_`->`.` already applied at migration)
 *   url   – "/domains/tlds/de/"
 *   type  – "gTLD" | "ccTLD" | "New gTLD" | ""   (from the specs panel)
 *   flags – { ipv6, dnssec, idn, trustee }       (from the "TLD supports" row)
 *
 * Capability flags are read from the page's `tldspecsHtml` frontmatter so this
 * step needs no access to the legacy repo. Usage: node scripts/gen-tlds.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const TLD_DIR = join(process.cwd(), 'src/content/docs/domains/tlds');
const OUT = join(process.cwd(), 'src/tlds.json');

function frontmatterOf(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}
function field(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'));
  return m ? m[1].replace(/\\"/g, '"') : '';
}

function typeFrom(specs) {
  if (/New gTLD/i.test(specs)) return 'New gTLD';
  if (/is a Country Code/i.test(specs) || />ccTLD</.test(specs)) return 'ccTLD';
  if (/>gTLD</.test(specs) || /Generic Top Level/i.test(specs)) return 'gTLD';
  return '';
}

const tlds = [];
if (existsSync(TLD_DIR)) {
  for (const file of readdirSync(TLD_DIR).sort()) {
    if (!file.endsWith('.md') || file === 'index.md') continue;
    const slug = file.replace(/\.md$/, '');
    const raw = readFileSync(join(TLD_DIR, file), 'utf8');
    const fm = frontmatterOf(raw);
    const specs = field(fm, 'tldspecsHtml');
    const name = field(fm, 'title') || '.' + slug;
    tlds.push({
      name,
      slug,
      url: `/domains/tlds/${slug}/`,
      type: typeFrom(specs),
      flags: {
        ipv6: /supports IPv6/i.test(specs),
        dnssec: /supports DNSsec/i.test(specs),
        idn: /supports IDN/i.test(specs),
        trustee: /supports Trustee/i.test(specs),
      },
    });
  }
}

tlds.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(OUT, JSON.stringify(tlds) + '\n');
console.log(`TLD index written -> src/tlds.json (${tlds.length} TLDs)`);
