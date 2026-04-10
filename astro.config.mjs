import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

const site = process.env.PUBLIC_SITE_URL || "https://example.com";

export default defineConfig({
  site,
  output: "server",
  adapter: vercel(),
});
