const fs = require("fs");
const path = require("path");

const MIGRATED_JSON_PATH = path.join(__dirname, "..", "src", "data", "migrated_posts.json");
const BLOG_POSTS_TS_PATH = path.join(__dirname, "..", "src", "data", "blogPosts.ts");
const SQL_INSERT_PATH = path.join(__dirname, "..", "scripts", "seed-data.sql");

function generateTypeScriptFile(posts) {
  const tsContent = `/* src/data/blogPosts.ts */
// ---------------------------------------------------------------------------
//  Blog data & helpers for the GEL blog feature (Migrated from Wix)
// ---------------------------------------------------------------------------

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "delegate-quote"; title: string; name: string; role: string; quote: string; image: string; avatars: string[] }
  | { type: "html"; content: string };

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: any[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  cover: string;
  date: string;
  rawDateIso?: string;
  readTime: string;
  author: string;
  featured?: boolean;
  content: BlogBlock[];
  rawHtml?: string;
  seo?: SeoMetadata;
}

export const CATEGORIES = [
  "All Posts",
  "Green School Bali",
  "India School programme",
  "Finland education",
  "Education tourism",
] as const;

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter(
      (p) =>
        p.slug !== currentPost.slug &&
        (p.category === currentPost.category ||
          p.tags?.some((t) => currentPost.tags?.includes(t)))
    )
    .slice(0, limit);
}
`;

  fs.writeFileSync(BLOG_POSTS_TS_PATH, tsContent);
  console.log(`✅ Updated ${BLOG_POSTS_TS_PATH} with ${posts.length} migrated posts.`);
}

function generateSqlInserts(posts) {
  let sql = `-- Seed Data for Blog Migration\n\n`;

  sql += `INSERT INTO authors (name, email) VALUES ('GEL Editorial Team', 'editorial@globaledulab.com') ON CONFLICT (name) DO NOTHING;\n\n`;

  const categories = new Set(posts.map((p) => p.category).filter(Boolean));
  categories.forEach((cat) => {
    const slug = cat
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    sql += `INSERT INTO categories (name, slug) VALUES ('${cat.replace(/'/g, "''")}', '${slug}') ON CONFLICT (slug) DO NOTHING;\n`;
  });
  sql += `\n`;

  posts.forEach((post) => {
    const titleEscaped = post.title.replace(/'/g, "''");
    const excerptEscaped = (post.excerpt || "").replace(/'/g, "''");
    const htmlEscaped = (post.rawHtml || "").replace(/'/g, "''");
    const coverEscaped = (post.cover || "").replace(/'/g, "''");
    const readTimeEscaped = (post.readTime || "").replace(/'/g, "''");

    sql += `INSERT INTO posts (slug, title, excerpt, raw_html, cover_image, read_time, featured) VALUES (\n`;
    sql += `  '${post.slug}',\n`;
    sql += `  '${titleEscaped}',\n`;
    sql += `  '${excerptEscaped}',\n`;
    sql += `  '${htmlEscaped}',\n`;
    sql += `  '${coverEscaped}',\n`;
    sql += `  '${readTimeEscaped}',\n`;
    sql += `  ${post.featured ? "TRUE" : "FALSE"}\n`;
    sql += `) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, raw_html = EXCLUDED.raw_html, cover_image = EXCLUDED.cover_image;\n\n`;
  });

  fs.writeFileSync(SQL_INSERT_PATH, sql);
  console.log(`💾 Generated SQL inserts at ${SQL_INSERT_PATH}`);
}

function main() {
  if (!fs.existsSync(MIGRATED_JSON_PATH)) {
    console.error("❌ Error: migrated_posts.json not found. Run scrape-blog.cjs first.");
    process.exit(1);
  }

  const posts = JSON.parse(fs.readFileSync(MIGRATED_JSON_PATH, "utf-8"));
  generateTypeScriptFile(posts);
  generateSqlInserts(posts);
  console.log("🎉 Data Import & Sync completed successfully!");
}

main();
