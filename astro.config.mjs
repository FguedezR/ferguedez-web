// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ferguedez.dev",
  output: "static",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  
  devToolbar: {
    enabled: false,
  },
});