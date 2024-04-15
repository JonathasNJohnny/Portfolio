import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom/dist/react-router-dom.esm.js'
    }
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
});
