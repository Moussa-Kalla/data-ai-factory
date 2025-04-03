import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BayanAI/', // ← très important pour GitHub Pages
  build: {
    outDir: 'docs'   // ← pour générer le dossier docs/
  }
});