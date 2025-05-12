import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AGXReactWindow",
      fileName: (format) => `@agx/react-window.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies || {}),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
