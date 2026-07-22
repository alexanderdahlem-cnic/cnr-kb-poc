// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Help',
          autogenerate: { directory: 'help' },
          collapsed: true,
        },
        {
          label: 'Domains',
          autogenerate: { directory: 'domains' },
          collapsed: true,
        },
        {
          label: 'DNS',
          autogenerate: { directory: 'dns' },
          collapsed: true,
        },
        {
          label: 'SSL',
          autogenerate: { directory: 'ssl' },
          collapsed: true,
        },
        {
          label: 'Services',
          autogenerate: { directory: 'services' },
          collapsed: true,
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
          collapsed: true,
        },
      ],
      // Silence missing-favicon etc. during POC; safe defaults.
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
