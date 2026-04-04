// @ts-check

import Biome from "@playform/format";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [Biome()],
  adapter: cloudflare(),
});