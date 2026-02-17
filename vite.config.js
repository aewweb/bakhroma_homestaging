import { defineConfig } from 'vite'

export default defineConfig({
  base: './',          // ОБЯЗАТЕЛЬНО для GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
