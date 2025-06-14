import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Ensures that dynamic routes work
  },
  preview: {
    historyApiFallback: true, // Required for Vercel preview
  },
});
