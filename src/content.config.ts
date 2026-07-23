import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // Extend the Starlight schema with the TLD-specifications HTML rendered in the
    // right column on TLD pages (see src/components/PageSidebar.astro).
    schema: docsSchema({
      extend: z.object({
        tldspecsHtml: z.string().optional(),
      }),
    }),
  }),
};
