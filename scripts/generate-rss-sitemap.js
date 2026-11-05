import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'https://example.com';
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// List of blog posts metadata
const posts = [
  {
    title: 'OverTheWire Bandit: İlk 7 Seviye Çözümü',
    slug: 'overthewire-bandit-ilk-7-seviye',
    date: '2026-06-10',
    pubDate: new Date('2026-06-10').toUTCString(),
    description: 'İlk 7 Bandit seviyesini kameranın önünde değil, offstream çözdüm — notlarım burada. OverTheWire Bandit wargame rehberi ve Linux güvenlik ipuçları.',
    tags: ['Security', 'Linux', 'OverTheWire']
  }
];

// Static site pages
const pages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/lab', changefreq: 'monthly', priority: '0.8' },
  { path: '/links', changefreq: 'weekly', priority: '0.8' }
];

// Add blog posts to pages for sitemap
posts.forEach(post => {
  pages.push({
    path: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: post.date
  });
});

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
  console.log(`[SEO] sitemap.xml generated successfully at ${sitemapPath}`);
}

function generateRssFeed() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Portfolio | Notes &amp; Insights</title>
  <link>${SITE_URL}/blog</link>
  <description>A collection of thoughts, technical deep-dives, and security research by Portfolio.</description>
  <language>tr-TR</language>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${posts
  .map(
    post => `  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
    <pubDate>${post.pubDate}</pubDate>
    <description><![CDATA[${post.description}]]></description>
    <author>Portfolio</author>
  </item>`
  )
  .join('\n')}
</channel>
</rss>
`;

  const rssPath = path.join(PUBLIC_DIR, 'rss.xml');
  fs.writeFileSync(rssPath, xmlContent, 'utf8');
  console.log(`[RSS] rss.xml generated successfully at ${rssPath}`);
}

// Run generators
console.log('🚀 Generating Sitemap & RSS feeds...');
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

generateSitemap();
generateRssFeed();
console.log('✅ Feeds generation complete.');
