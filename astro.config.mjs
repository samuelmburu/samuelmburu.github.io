import { defineConfig } from "astro/config";
import icon from "astro-icon";

const site = process.env.PUBLIC_SITE_URL || "https://samuelmburu.github.io";
const isCustomDomain = process.env.PUBLIC_SITE_URL && !process.env.PUBLIC_SITE_URL.includes("github.io");

export default defineConfig({
  site,
  output: "static",
  base: isCustomDomain ? "/" : "/personal-site/",
  integrations: [
    icon({
      include: {
        mdi: ["linkedin", "github"],
        lucide: ["download"],
      },
    }),
  ],
});
