export async function GET(context) {
  const sitemaps = [
    { url: `${context.site}sitemap-0.xml`, lastmod: '2026-03-14' },
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sm) => `  <sitemap>
    <loc>${sm.url}</loc>
    <lastmod>${sm.lastmod}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
}
