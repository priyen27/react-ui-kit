import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"), // your component exports
      name: "ReactUiKit",
      fileName: (format) =>
        format === "es" ? "react-ui-kit.js" : "react-ui-kit.umd.cjs",
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", "react-hook-form", "zod"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
