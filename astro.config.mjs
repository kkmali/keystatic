// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://mainlist-astro.vercel.app/",
  output: "server",
  adapter: vercel(),
  integrations: [mdx(), sitemap(), react(), keystatic()],

  image: {
    domains: ["parkingmd.com"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
