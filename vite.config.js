import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'three': ['three'],
          'animation': ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({ preset: 'default' })
      ]
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimizeDeps: {
    include: ['three', 'framer-motion'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' data: blob:;
        connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
      `.replace(/\s+/g, ' ').trim()
    }
  }
});