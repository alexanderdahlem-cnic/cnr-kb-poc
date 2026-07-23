// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
// Topics power the horizontal main nav + per-section sidebar. Generated from
// the content tree by scripts/gen-sidebar.mjs (run after migration).
import topics from './src/topics.json' with { type: 'json' };

// Safety net: map any page under a section to its topic even if it is not
// explicitly listed in that topic's `items` (prevents build-time throws).
const topicGlobs = Object.fromEntries(
  topics.map((t) => [t.id, [`/${t.id}`, `/${t.id}/**`]]),
);

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
      // Brand logo (wordmark) top-left; replaces the text title to avoid duplication.
      logo: {
        src: './src/assets/logo-centralnicreseller.svg',
        replacesTitle: true,
      },
      // Sidebar is provided per-topic by the plugin below (no global `sidebar`).
      plugins: [
        starlightSidebarTopics(topics, {
          exclude: ['/'], // homepage is a topic-less landing
          topics: topicGlobs,
        }),
      ],
      components: {
        // Force dark mode + replace the theme toggle with account links.
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        // Horizontal topic nav in the header; sidebar shows only topic items.
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
