import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { siteConfig } from "./src/config";
import stories from "./src/data/stories.json";
export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/SGAI/" : "/",
  define: {
    "import.meta.env.VITE_CANONICAL_ORIGIN": JSON.stringify(
      mode === "github-pages"
        ? "https://project-second-voice.github.io/SGAI/"
        : siteConfig.canonicalOrigin,
    ),
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "sgai-indexing-policy",
      transformIndexHtml(html) {
        return html.replace(
          'content="noindex, nofollow"',
          `content="${siteConfig.reviewMode ? "noindex, nofollow" : "index, follow"}"`,
        );
      },
      writeBundle(options) {
        const out = options.dir || "dist";
        const origin =
          mode === "github-pages"
            ? "https://project-second-voice.github.io/SGAI/"
            : siteConfig.canonicalOrigin;
        const sitemap = !siteConfig.reviewMode && origin;
        writeFileSync(
          resolve(out, "robots.txt"),
          `User-agent: *\n${siteConfig.reviewMode ? "Disallow: /" : "Allow: /"}\n${sitemap ? `Sitemap: ${new URL("sitemap.xml", origin).href}\n` : ""}`,
        );
        writeFileSync(
          resolve(out, "_headers"),
          `/*\n${siteConfig.reviewMode ? "  X-Robots-Tag: noindex, nofollow\n" : ""}  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n`,
        );
        if (sitemap) {
          const paths = [
            "/",
            "/challenge",
            "/our-work",
            "/stories",
            "/about",
            "/partner-with-us",
            "/contact",
            "/privacy",
            ...stories.map((s) => `/stories/${s.slug}`),
          ];
          const escape = (s: string) =>
            s
              .replaceAll("&", "&amp;")
              .replaceAll("<", "&lt;")
              .replaceAll(">", "&gt;");
          writeFileSync(
            resolve(out, "sitemap.xml"),
            `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(new URL(path.replace(/^\//, ""), origin).href)}</loc></url>`).join("")}</urlset>`,
          );
        }
      },
    },
  ],
}));
