// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// Curated sidebar with humanised, capitalised labels — generated from the
// content tree by scripts/gen-sidebar.mjs (run after migration).
import sidebar from './src/sidebar.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  // POC deploy target: GitHub Pages project site (served under /cnr-kb-poc/).
  // For the real root-domain deploy later, set site to the final domain and
  // remove `base` (or set base: '/').
  site: 'https://alexanderdahlem-cnic.github.io',
  base: '/cnr-kb-poc',
  integrations: [
    starlight({
      title: 'CentralNic Reseller',
      description:
        'CentralNic Reseller Knowledge Base — guides, API reference and TLD information.',
      tagline: 'Knowledge Base',
      // Full-text search (Pagefind) ships with Starlight by default.
      social: [
        {
          icon: 'external',
          label: 'centralnicreseller.com',
          href: 'https://www.centralnicreseller.com',
        },
      ],
      sidebar,
      // Silence missing-favicon etc. during POC; safe defaults.
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
