import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // let serverProxy: Record<string, ProxyOptions> | undefined;

  // if (process.env.NODE_ENV === 'development') {
  //   serverProxy = {
  //     '/api': {
  //       changeOrigin: true,
  //       rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
  //       target: 'http://www.cnb.cz',
  //     },
  //   };
  // }

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
    // server: {
    //   proxy: serverProxy,
    // },
  };
});
