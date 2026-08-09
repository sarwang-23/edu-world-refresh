// @ts-ignore
import { createAPIFileRoute } from '@tanstack/react-start/api';
import { seoConfig } from '@/lib/seo-config';
import { blogPosts } from '@/data/blogPosts';
import { VENTURES } from '../ventures.$slug';
import { SITE_URL } from '@/lib/seo';

export const Route = createAPIFileRoute('/api/sitemap.xml')({
  GET: async () => {
    const urls: string[] = [];

    // Static routes
    for (const [path, entry] of Object.entries(seoConfig)) {
      if (entry.indexable !== false) {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        urls.push(cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`);
      }
    }

    // Dynamic routes - blog posts
    for (const post of blogPosts) {
      urls.push(`${SITE_URL}/blog/${post.slug}`);
    }

    // Dynamic routes - ventures
    for (const slug of Object.keys(VENTURES)) {
      urls.push(`${SITE_URL}/ventures/${slug}`);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      },
    });
  },
});
