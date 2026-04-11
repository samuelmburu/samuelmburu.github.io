import { readFileSync, existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

const customDomain = existsSync("./public/CNAME")
  ? readFileSync("./public/CNAME", "utf-8").trim()
  : "";

const site = process.env.PUBLIC_SITE_URL
  || (customDomain ? `https://${customDomain}` : "https://samuelmburu.github.io");

export default defineConfig({
  site,
  output: "static",
  integrations: [
    icon({
      include: {
        mdi: ["linkedin", "github"],
        lucide: ["download"],
      },
    }),
  ],
});
