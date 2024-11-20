import { defineConfig } from 'vite'

export default defineConfig({
  base: '/wheattoast11.github.io/', // Add your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})