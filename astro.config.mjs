import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

const site = process.env.PUBLIC_SITE_URL || "https://example.com";

export default defineConfig({
  site,
  output: "server",
  integrations: [
    icon({
      include: {
        mdi: ["linkedin", "github"],
        lucide: ["download"],
      },
    }),
  ],
  adapter: vercel(),
});
