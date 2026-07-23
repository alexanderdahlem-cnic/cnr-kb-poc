# CentralNic Reseller Knowledge Base

The CentralNic Reseller Knowledge Base, built on
[Astro Starlight](https://starlight.astro.build/) — a flat-file, static docs
platform. Content is plain Markdown migrated from the legacy Laravel KB.

## Why this stack

- **Flat file** — content is plain Markdown, versioned in Git.
- **Static output** — builds to plain HTML/CSS/JS; runs on any host, no PHP/DB.
- **Editor-friendly** — editors edit Markdown directly (see below); a Git-based
  CMS can sit on top later.
- **Search** — full-text search (Pagefind) ships out of the box.
- **Scales** — handles 1000+ pages comfortably.

## Editing content

You do **not** need to run anything to make a small change — see
[CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide. In short:

- **Quick edits:** use the GitHub web editor (pencil icon on any page under
  `src/content/docs/`). Commit; the deploy runs automatically.
- **Larger edits / live preview:** clone the repo and run `npm run dev` for a
  hot-reloading local preview that renders exactly like production.

Pages live under `src/content/docs/**` as Markdown (`.md`). Frontmatter controls
the title, sidebar order and label:

```yaml
---
title: "Account Settings"
sidebar:
  order: 20        # lower = higher in the sidebar
  label: "Setup"   # optional: overrides the sidebar text
---
```

## Local development

```bash
nvm use 22      # Node >= 18.20.8 / 20.3 / 22 (Astro requirement)
npm install
npm run dev     # http://localhost:4321/cnr-kb-poc
npm run build   # -> dist/
npm run preview # serve the built dist/ locally
```

## Content migration & generators

The migration and index generators re-run whenever the legacy source changes:

```bash
# 1. Convert legacy Blade/HTML -> Markdown (editorial sections + a TLD sample)
node scripts/migrate.mjs /path/to/gcus-cnr-kb-static
#    ...pull ALL ~1,300 TLDs instead of the sample:
MIGRATE_ALL_TLDS=1 node scripts/migrate.mjs /path/to/gcus-cnr-kb-static

# 2. Regenerate the horizontal-nav topics + per-section sidebar
node scripts/gen-sidebar.mjs

# 3. Regenerate the TLD search index (src/tlds.json)
node scripts/gen-tlds.mjs
```

What migration produces:

- **Editorial sections** (help, domains, dns, ssl, services, api, hosting).
- **TLD pages** under `domains/tlds/**` with a right-hand *TLD Specifications*
  panel, per-command Command/Exception boxes and a section button row. Multi-part
  TLDs keep their dotted legacy URL (`com_pt` → `/domains/tlds/com.pt`).
- **Clean-Markdown presentation directives** (`:::command` / `:::response` /
  `:::exception` / `:::gateways` / `:::commandlist`) rendered by
  `src/plugins/kb-directives.js`. The `.md` stays free of presentation HTML.
- **Self-hosted media** copied into `public/media/` and referenced locally.
- **Sidebar order** seeded from the legacy navigation into `sidebar.order` /
  `sidebar.label` frontmatter, so the tree mirrors the current live site.

> Re-running the migration overwrites `src/content/docs`. The hand-authored
> landings (`index.mdx`, `domains/tlds/index.mdx`) are not produced by the
> migration — preserve them when clearing the content directory. A pre-migration
> snapshot lives in `archive/pre-restructure/` (not built).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

> **Note on paths:** this deploys to a GitHub Pages *project* site under
> `/cnr-kb-poc/`, so `astro.config.mjs` sets `base: '/cnr-kb-poc'`. For the
> real deploy on a root domain, drop `base` and set `site` to the final URL.
