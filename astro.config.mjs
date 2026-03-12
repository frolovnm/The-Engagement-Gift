// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://theengagementgift.com',
  integrations: [mdx(), sitemap({
    filter: (page) => !page.includes('/thank-you') && !page.includes('/admin'),
  })],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: cloudflare(),
});