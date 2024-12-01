import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties']
        }
      }
    })
  ],
  server: {
    headers: {
      'Content-Security-Policy': process.env.NODE_ENV === 'development' 
        ? `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: blob:;
          connect-src 'self' ws: wss:;
          worker-src 'self' blob:;
          frame-src 'self';
          media-src 'self' data: blob: mediastream:;
          object-src 'none';
          base-uri 'self';
          form-action 'self';
        `.replace(/\s+/g, ' ').trim()
        : `
          default-src 'self';
          script-src 'self' 'unsafe-inline';
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: blob:;
          connect-src 'self';
          worker-src 'self' blob:;
          frame-src 'self';
          media-src 'self' data: blob: mediastream:;
          object-src 'none';
          base-uri 'self';
          form-action 'self';
        `.replace(/\s+/g, ' ').trim()
    }
  },
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react': ['react', 'react-dom'],
          'framer': ['framer-motion']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    assetsInlineLimit: 0
  },
  optimizeDeps: {
    include: ['three', 'framer-motion']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
});