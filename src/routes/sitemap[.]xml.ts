import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories } from "@/data/products";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/about", "/products", "/industries", "/service", "/contact"];
        const productPaths = categories.flatMap((c) => [
          `/products/${c.slug}`,
          ...c.machines.map((m) => `/products/${c.slug}/${m.slug}`),
        ]);
        const urls = [...staticPaths, ...productPaths]
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
