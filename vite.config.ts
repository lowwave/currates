import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      manifest: true,
      outDir: 'dist',
    },
    define: {
      __APP_ENV__: process.env,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5174,
    },
    test: {
      environment: 'jsdom',
      global: true,
      setupFiles: './src/test/setup-test.ts',
    },
  };
});
