import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wheattoast11.github.io/', // Updated to match your repository name
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});