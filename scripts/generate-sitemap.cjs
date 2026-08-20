const fs = require("fs");
const path = require("path");

const workspaceRoot = path.join(__dirname, "..");
const seoConfigPath = path.join(workspaceRoot, "src", "lib", "seo-config.ts");
const publicSitemapPath = path.join(workspaceRoot, "public", "sitemap.xml");

const SITE_URL = "https://www.globaledulab.com";

// Read seoConfig
const seoConfigContent = fs.readFileSync(seoConfigPath, "utf-8");
const routeMatches = seoConfigContent.matchAll(/"(\/[^"]*)":\s*\{/g);

const urls = new Set();
for (const match of routeMatches) {
  const routePath = match[1];
  const fullUrl = routePath === "/" ? SITE_URL : `${SITE_URL}${routePath}`;
  urls.add(fullUrl);
}

// Add dynamic blog posts if any exist
const blogPostsPath = path.join(workspaceRoot, "src", "data", "blogPosts.ts");
if (fs.existsSync(blogPostsPath)) {
  const blogContent = fs.readFileSync(blogPostsPath, "utf-8");
  const slugMatches = blogContent.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const match of slugMatches) {
    urls.add(`${SITE_URL}/blog/${match[1]}`);
  }
}

// Add ventures
const venturesPath = path.join(workspaceRoot, "src", "routes", "ventures.$slug.tsx");
if (fs.existsSync(venturesPath)) {
  const venturesContent = fs.readFileSync(venturesPath, "utf-8");
  const slugMatches = venturesContent.matchAll(/'([a-z0-9-]+)':\s*\{/g);
  for (const match of slugMatches) {
    if (match[1] !== "kavach-ai" && match[1] !== "saivyy" && match[1] !== "carbonsynq") continue;
    urls.add(`${SITE_URL}/ventures/${match[1]}`);
  }
}

const urlList = Array.from(urls);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlList
  .map((url) => {
    const priority = url === SITE_URL ? "1.0" : url.includes("/programmes") ? "0.9" : "0.8";
    return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

fs.writeFileSync(publicSitemapPath, xml, "utf-8");
console.log(`Generated ${publicSitemapPath} with ${urlList.length} URLs!`);
