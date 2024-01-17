import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const isDevMode = process.env.NODE_ENV === 'development';

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
    server: {
      proxy:  {
        '/api': {
          changeOrigin: true,
          rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
          target: isDevMode ? '/api' : 'http://www.cnb.cz',
        },
      },
    },
  };
});
