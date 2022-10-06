import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: '../server/public',
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/]
    },
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  }
});
