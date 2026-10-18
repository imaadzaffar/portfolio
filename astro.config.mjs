import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://imaadzaffar.com',
  output: 'static',
  integrations: [sitemap()],
})
