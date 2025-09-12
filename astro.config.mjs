// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://rcisas.com',
  integrations: [mdx(), sitemap(),icon()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
    image: {
    remotePatterns: [{ protocol: "https" }],
  }, 
  vite: {
        plugins: [tailwindcss()],
      },
});