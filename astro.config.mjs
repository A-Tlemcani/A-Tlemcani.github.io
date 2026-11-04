// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a-tlemcani.github.io',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
  // Never inline assets or scripts: the CSP only allows files from this origin.
  vite: { build: { assetsInlineLimit: 0, chunkSizeWarningLimit: 900 } },
});
