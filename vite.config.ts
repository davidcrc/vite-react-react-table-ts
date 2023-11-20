import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.url, "./src/"),

      routes: `${path.resolve(import.meta.url, "./src/routes/")}`,

      services: `${path.resolve(import.meta.url, "./src/services/")}`,
    },
  },
});
