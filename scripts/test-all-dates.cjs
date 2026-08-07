const https = require('https');

const SITEMAP_URL = 'https://www.globaledulab.com/blog-posts-sitemap.xml';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function formatDate(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

async function main() {
  console.log('📡 Fetching sitemap...');
  const xml = await fetchUrl(SITEMAP_URL);
  const matches = [...xml.matchAll(/<loc>(https:\/\/www\.globaledulab\.com\/post\/[^<]+)<\/loc>/g)];
  const urls = [...new Set(matches.map(m => m[1]))];

  console.log(`Found ${urls.length} posts.\n`);

  for (const url of urls) {
    const slug = url.split('/post/')[1];
    const html = await fetchUrl(url);

    // Meta author
    const authorMatch = html.match(/<meta\s+property=["']article:author["']\s+content=["']([^"']*)["']/i) ||
                        html.match(/"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"([^"]+)"\s*\}/i);

    // Published date
    const pubMatch = html.match(/<meta\s+property=["']article:published_time["']\s+content=["']([^"']*)["']/i) ||
                     html.match(/"datePublished":\s*"([^"]+)"/i);

    // Sitemap lastmod fallback
    const lastModMatch = xml.match(new RegExp(`<loc>${url}</loc>\\s*<lastmod>([^<]+)</lastmod>`));

    const rawDate = pubMatch ? pubMatch[1] : (lastModMatch ? lastModMatch[1] : '');
    const author = authorMatch ? authorMatch[1] : 'Global Education Lab';
    const formattedDate = formatDate(rawDate);

    console.log(`📌 ${slug}`);
    console.log(`   Author: ${author}`);
    console.log(`   Raw Date: ${rawDate}`);
    console.log(`   Formatted Date: ${formattedDate}\n`);
  }
}

main().catch(console.error);
