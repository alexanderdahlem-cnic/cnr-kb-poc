# CentralNic Reseller Knowledge Base — POC

Proof of concept for rebuilding the CentralNic Reseller Knowledge Base on
[Astro Starlight](https://starlight.astro.build/) — a flat-file, static docs
platform. Content is migrated from the legacy Laravel KB into Markdown.

## Why this stack

- **Flat file** — content is plain Markdown, versioned in Git.
- **Static output** — builds to plain HTML/CSS/JS; runs on any host, no PHP/DB.
- **Editor-friendly** — a Git-based CMS (Pages CMS) can sit on top later.
- **Search** — full-text search (Pagefind) ships out of the box.
- **Scales** — handles 1000+ pages comfortably.

## Local development

```bash
nvm use 22      # Node >= 18.20.8 / 20.3 / 22
npm install
npm run dev     # http://localhost:4321
npm run build   # -> dist/
```

## Content migration

`scripts/migrate.mjs` converts the legacy Blade/HTML pages to Markdown:

```bash
node scripts/migrate.mjs /path/to/gcus-cnr-kb-static
```

POC scope: the editorial sections (help, domains, dns, ssl, services).
The ~1300 data-driven TLD pages are intentionally excluded (phase 2 —
generated from data). Images are referenced from the existing live KB for
the POC; phase 2 self-hosts them.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

> **Note on paths:** this POC deploys to a GitHub Pages *project* site under
> `/cnr-kb-poc/`, so `astro.config.mjs` sets `base: '/cnr-kb-poc'`. For the
> real deploy on a root domain, drop `base` and set `site` to the final URL.
