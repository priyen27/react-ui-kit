// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "ReactUiKit",
      fileName: (format) =>
        format === "es" ? "react-ui-kit.js" : "react-ui-kit.umd.cjs",
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: (id) =>
        [
          "react",
          "react-dom",
          "tailwindcss",
          "react-hook-form",
          "zod"
        ].includes(id) ||
        /^@radix-ui\//.test(id) ||
        /^@mui\//.test(id) ||
        /^@emotion\//.test(id) ||
        /^react-/.test(id),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom")
    }
  }
});
