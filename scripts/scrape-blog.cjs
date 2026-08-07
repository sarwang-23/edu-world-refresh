const fs = require('fs');
const path = require('path');
const https = require('https');

const SITEMAP_URL = 'https://www.globaledulab.com/blog-posts-sitemap.xml';
const PUBLIC_IMAGE_DIR = path.join(__dirname, '..', 'public', 'blog-images');
const DATA_OUTPUT_JSON = path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json');

if (!fs.existsSync(PUBLIC_IMAGE_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGE_DIR, { recursive: true });
}

function cleanWixImageUrl(url) {
  if (!url) return '';
  const match = url.match(/(https:\/\/static\.wixstatic\.com\/media\/[^\/]+)/i);
  if (match) {
    return match[1];
  }
  return url.replace(/,blur_\d+/g, '').replace(/q_\d+/g, 'q_90');
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BlogMigrator/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ data, statusCode: res.statusCode, headers: res.headers }));
    }).on('error', reject);
  });
}

function downloadImage(rawUrl, filename) {
  return new Promise((resolve, reject) => {
    const url = cleanWixImageUrl(rawUrl);
    const destPath = path.join(PUBLIC_IMAGE_DIR, filename);

    // Overwrite to replace any previous blurry images with full crisp high-res image
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve(downloadImage(res.headers.location, filename));
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve(rawUrl);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(`/blog-images/${filename}`));
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      resolve(rawUrl);
    });
  });
}

function sanitizeFilename(url, defaultExt = '.jpg') {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    let basename = path.basename(pathname);
    if (!basename || basename.length < 3) {
      basename = 'img_' + Math.random().toString(36).substring(2, 9);
    }
    basename = basename.split('?')[0].split('#')[0];
    if (!path.extname(basename)) {
      basename += defaultExt;
    }
    return basename.replace(/[^a-zA-Z0-9_.-]/g, '_');
  } catch (e) {
    return 'img_' + Math.random().toString(36).substring(2, 9) + defaultExt;
  }
}

function decodeEntities(text) {
  if (!text) return '';
  return text
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMeta(html, tag, attr = 'content') {
  const reg1 = new RegExp(`<meta\\s+[^>]*name=["']${tag}["'][^>]*${attr}=["']([^"']*)["']`, 'i');
  const reg2 = new RegExp(`<meta\\s+[^>]*${attr}=["']([^"']*)["'][^>]*name=["']${tag}["']`, 'i');
  const reg3 = new RegExp(`<meta\\s+[^>]*property=["']${tag}["'][^>]*${attr}=["']([^"']*)["']`, 'i');
  const reg4 = new RegExp(`<meta\\s+[^>]*${attr}=["']([^"']*)["'][^>]*property=["']${tag}["']`, 'i');
  const match = html.match(reg1) || html.match(reg2) || html.match(reg3) || html.match(reg4);
  return match ? decodeEntities(match[1]) : '';
}

function extractTitle(html) {
  const ogTitle = extractMeta(html, 'og:title');
  if (ogTitle) return ogTitle;
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match ? decodeEntities(match[1].replace(/\s*\|\s*Global Education Lab/i, '').trim()) : '';
}

function extractCanonical(html) {
  const match = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  return match ? match[1] : '';
}

function extractJsonLd(html) {
  const matches = [...html.matchAll(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLds = [];
  for (const m of matches) {
    try {
      jsonLds.push(JSON.parse(m[1].trim()));
    } catch (e) {}
  }
  return jsonLds;
}

function formatDateShort(isoStr) {
  if (!isoStr) return 'Mar 15, 2024';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function extractReadTime(html, articleText) {
  const match = html.match(/data-hook=["']time-to-read["'][^>]*>([\s\S]*?)<\/(?:span|div|p|a)>/i);
  if (match) {
    const text = decodeEntities(match[1].replace(/<[^>]+>/g, '').trim());
    if (text) return text;
  }
  const words = articleText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapToWixCategory(rawSlug) {
  if (rawSlug.includes('greenschool') || rawSlug.includes('green-school') || rawSlug.includes('swadhaa')) {
    return 'Green School Bali';
  }
  if (rawSlug.includes('finland') || rawSlug.includes('estonia')) {
    return 'Finland education';
  }
  if (rawSlug.includes('cambridge') || rawSlug.includes('oxford') || rawSlug.includes('leadership') || rawSlug.includes('impact-tour')) {
    return 'Education tourism';
  }
  return 'India School programme';
}

function parseBlocksFromHtml(htmlContent) {
  const blocks = [];
  let clean = htmlContent.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  
  const elementReg = /<(h[1-6]|p|blockquote|li|figure|img)[^>]*>([\s\S]*?)<\/\1>|<img\s+[^>]*\/?>/gi;
  let match;

  while ((match = elementReg.exec(clean)) !== null) {
    const tag = match[1] ? match[1].toLowerCase() : 'img';
    const rawInner = match[2] || '';
    const textContent = decodeEntities(rawInner.replace(/<[^>]+>/g, '').trim());

    if (tag.startsWith('h')) {
      if (textContent) blocks.push({ type: 'heading', text: textContent });
    } else if (tag === 'p') {
      if (textContent) blocks.push({ type: 'paragraph', text: textContent });
    } else if (tag === 'blockquote') {
      if (textContent) blocks.push({ type: 'quote', text: textContent });
    } else if (tag === 'img' || tag === 'figure') {
      const srcMatch = match[0].match(/src=["']([^"']*)["']/i) || match[0].match(/data-src=["']([^"']*)["']/i);
      const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
      if (srcMatch && srcMatch[1]) {
        const cleanSrc = cleanWixImageUrl(srcMatch[1]);
        blocks.push({
          type: 'image',
          src: cleanSrc,
          caption: altMatch ? decodeEntities(altMatch[1]) : ''
        });
      }
    }
  }

  return blocks;
}

async function main() {
  console.log('🚀 Scraping & Downloading Crisp High-Resolution Images (Unblurred)...');

  const sitemapRes = await fetchUrl(SITEMAP_URL);
  const urlMatches = [...sitemapRes.data.matchAll(/<loc>(https:\/\/www\.globaledulab\.com\/post\/[^<]+)<\/loc>/g)];
  const postUrls = [...new Set(urlMatches.map(m => m[1]))];

  console.log(`Found ${postUrls.length} posts.`);

  const posts = [];

  for (let i = 0; i < postUrls.length; i++) {
    const url = postUrls[i];
    const rawSlug = url.split('/post/')[1];
    console.log(`\n[${i + 1}/${postUrls.length}] Scraping: ${rawSlug}`);

    try {
      const pageRes = await fetchUrl(url);
      const html = pageRes.data;

      const title = extractTitle(html) || rawSlug.replace(/-/g, ' ');
      const metaDescription = extractMeta(html, 'description') || extractMeta(html, 'og:description');
      const ogImage = extractMeta(html, 'og:image');
      const canonical = extractCanonical(html) || url;
      const jsonLds = extractJsonLd(html);

      const authorMatch = html.match(/<meta\s+property=["']article:author["']\s+content=["']([^"']*)["']/i) ||
                          html.match(/"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"([^"]+)"\s*\}/i);

      const pubMatch = html.match(/<meta\s+property=["']article:published_time["']\s+content=["']([^"']*)["']/i) ||
                       html.match(/"datePublished":\s*"([^"]+)"/i);

      const sitemapLastModMatch = sitemapRes.data.match(new RegExp(`<loc>${url}</loc>\\s*<lastmod>([^<]+)</lastmod>`));

      const rawDateIso = pubMatch ? pubMatch[1] : (sitemapLastModMatch ? sitemapLastModMatch[1] : '');
      const publishedDate = formatDateShort(rawDateIso);
      const author = authorMatch ? decodeEntities(authorMatch[1]) : 'Suyash Bhatt';

      const category = mapToWixCategory(rawSlug);
      const tags = ['Education', category];

      // Download Cover Image in crisp high resolution
      let coverLocalUrl = '';
      if (ogImage) {
        const coverFilename = `${rawSlug}_cover_${sanitizeFilename(ogImage)}`;
        coverLocalUrl = await downloadImage(ogImage, coverFilename);
        console.log(`  📸 High-Res Cover: ${coverLocalUrl}`);
      }

      let articleHtml = '';
      const descMatch = html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<\/article>/i) ||
                        html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<footer/i) ||
                        html.match(/<article[\s\S]*?<\/article>/i);

      if (descMatch) {
        articleHtml = descMatch[1] || descMatch[0];
      } else {
        articleHtml = html;
      }

      const inlineImgMatches = [...articleHtml.matchAll(/<img\s+[^>]*>/gi)];
      let updatedArticleHtml = articleHtml;
      const downloadedImages = [];
      const seenImageUrls = new Set();

      for (let j = 0; j < inlineImgMatches.length; j++) {
        const tag = inlineImgMatches[j][0];
        const srcMatch = tag.match(/src=["']([^"']*)["']/i) || tag.match(/data-src=["']([^"']*)["']/i);
        if (srcMatch && srcMatch[1] && srcMatch[1].startsWith('http')) {
          const rawImgSrc = srcMatch[1];
          const cleanImgSrc = cleanWixImageUrl(rawImgSrc);

          if (!seenImageUrls.has(cleanImgSrc)) {
            seenImageUrls.add(cleanImgSrc);
            const imgFilename = `${rawSlug}_inline_${j + 1}_${sanitizeFilename(cleanImgSrc)}`;
            const localPath = await downloadImage(cleanImgSrc, imgFilename);
            
            // Replace both blurry raw URL and clean URL inside HTML with local crisp image path
            updatedArticleHtml = updatedArticleHtml
              .replaceAll(rawImgSrc, localPath)
              .replaceAll(cleanImgSrc, localPath);

            downloadedImages.push({ original: cleanImgSrc, local: localPath });
          }
        }
      }

      // Convert internal links
      updatedArticleHtml = updatedArticleHtml
        .replaceAll('https://www.globaledulab.com/post/', '/blog/')
        .replaceAll('https://www.globaledulab.com/blog/', '/blog/');

      const plainText = decodeEntities(updatedArticleHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      const excerpt = decodeEntities(metaDescription) || (plainText.length > 160 ? plainText.substring(0, 157) + '...' : plainText);
      const readTime = extractReadTime(html, plainText);

      const blocks = parseBlocksFromHtml(updatedArticleHtml);

      const post = {
        slug: rawSlug,
        title: decodeEntities(title),
        excerpt,
        category,
        tags,
        cover: coverLocalUrl,
        date: publishedDate,
        rawDateIso: rawDateIso || new Date(publishedDate).toISOString(),
        readTime,
        author,
        featured: false,
        content: blocks.length > 0 ? blocks : [{ type: 'paragraph', text: plainText }],
        rawHtml: updatedArticleHtml,
        seo: {
          title: decodeEntities(title),
          description: excerpt,
          canonical,
          ogImage: coverLocalUrl || ogImage,
          jsonLd: jsonLds
        },
        images: downloadedImages
      };

      posts.push(post);
      console.log(`  ✅ Processed "${title}"`);

    } catch (err) {
      console.error(`  ❌ Error processing ${url}:`, err.message);
    }
  }

  posts.sort((a, b) => new Date(b.rawDateIso).getTime() - new Date(a.rawDateIso).getTime());

  if (posts.length > 0) {
    posts[0].featured = true;
  }

  console.log(`\n💾 Writing ${posts.length} posts with high-res crisp images to JSON...`);
  fs.writeFileSync(DATA_OUTPUT_JSON, JSON.stringify(posts, null, 2));

  console.log('✨ High-Resolution Unblurring Complete!');
}

main().catch(console.error);
