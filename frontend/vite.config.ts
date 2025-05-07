import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(join(__dirname, "/src")),
    },
  },
  server: {
    proxy: {
      "/new-users": {
        target: "https://localhost:3006",
        changeOrigin: true,
        secure: false,
      },
      "/new-posts": {
        target: "https://localhost:3006",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
