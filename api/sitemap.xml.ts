const base = "https://www.ebnalarab.com";

export default function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${base}/sitemap-en.xml</loc></sitemap>
  <sitemap><loc>${base}/sitemap-ar.xml</loc></sitemap>
</sitemapindex>`);
}
