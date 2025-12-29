import { copy } from "../src/i18n/copy";

const base = "https://www.ebnalarab.com";

const staticPaths = ["/", "/services", "/about-us", "/gallery", "/contact", "/faq", "/privacy", "/terms", "/cookies"];

export default function handler(req: any, res: any) {
  const servicePaths: string[] = Array.from(
    new Set(copy.en.services.map((service: { slug: string }) => `/services/${service.slug}`))
  );
  const urls: string[] = [...staticPaths, ...servicePaths];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((urlPath: string) => {
    const cleanPath = urlPath.replace(/[\\/]+/g, "/");
    const en = `${base}${cleanPath}?lang=en`;
    const ar = `${base}${cleanPath}?lang=ar`;
    return `<url>
  <loc>${en}</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${en}" />
  <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
