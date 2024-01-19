import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env,
    },
    base: '/currates',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      global: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup-test.ts',
    },
    server: {
      proxy: {
        '/api': {
          changeOrigin: true,
          rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
          target: 'https://www.cnb.cz',
          secure: false,
        },
      },
    },
  };
});
