import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Update to root path since custom domain is working
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});