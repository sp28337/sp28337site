import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sp28337.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Climate Crisis",
      cssVariable: "--font-climate-crisis",
      weights: [400],
      subsets: ["latin", "cyrillic"],
    },
    {
      provider: fontProviders.google(),
      name: "Dela Gothic One",
      cssVariable: "--font-dela-gothic",
      weights: [400],
      subsets: ["latin", "cyrillic"],
    }
  ]
});
