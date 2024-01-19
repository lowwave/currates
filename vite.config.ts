import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/currates',
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
      proxy: {
        '/api': {
          changeOrigin: true,
          rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
          secure: false,
          target: 'https://www.cnb.cz',
        },
      },
    },
    test: {
      environment: 'jsdom',
      global: true,
      setupFiles: './src/test/setup-test.ts',
    },
  };
});
