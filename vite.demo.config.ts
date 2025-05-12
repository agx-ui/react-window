import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src/playground"),
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "src/lib"),
      "@playground": path.resolve(__dirname, "src/playground"),
    },
  },
  server: {
    port: 9000,
    host: true,
  },
});
