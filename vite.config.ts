import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      api: `${path.resolve(__dirname, "./src/api")}`,
      components: `${path.resolve(__dirname, "./src/components")}`,
      features: `${path.resolve(__dirname, "./src/features")}`,
      lib: `${path.resolve(__dirname, "./src/lib")}`,
      providers: `${path.resolve(__dirname, "./src/providers")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
    },
  },
  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        target: "http://www.cnb.cz",
      },
    },
  },
});
