import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' → funguje na GitHub Pages (projektová podstránka) aj lokálne.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5180, open: false },
});
