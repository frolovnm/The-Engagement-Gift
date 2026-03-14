import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const rings = await getCollection('rings');

  // Generate sitemap entries for blog posts
  const blogEntries = blog.map((post) => ({
    url: `${context.site}blog/${post.id}/`,
    lastmod: post.data.updatedDate || post.data.pubDate,
  }));

  // Generate sitemap entries for rings collection
  const ringsEntries = rings.map((post) => ({
    url: `${context.site}blog/${post.id}/`,
    lastmod: post.data.updatedDate || post.data.pubDate,
  }));

  // Static pages with lastmod dates
  const staticPages = [
    { url: `${context.site}`, lastmod: '2026-03-14' },
    { url: `${context.site}about/`, lastmod: '2026-03-14' },
    { url: `${context.site}contact/`, lastmod: '2026-03-14' },
    { url: `${context.site}privacy-policy/`, lastmod: '2026-03-14' },
    { url: `${context.site}disclaimer/`, lastmod: '2026-03-14' },
  ];

  // Combine all entries
  const allEntries = [...blogEntries, ...ringsEntries, ...staticPages];

  // Sort by URL for consistency
  allEntries.sort((a, b) => a.url.localeCompare(b.url));

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod instanceof Date ? entry.lastmod.toISOString().split('T')[0] : entry.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
}
