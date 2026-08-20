const fs = require("fs");
const path = require("path");

const JSON_PATH = path.join(__dirname, "..", "src", "data", "migrated_posts.json");
const BLOG_POSTS_TS_PATH = path.join(__dirname, "..", "src", "data", "blogPosts.ts");
const SQL_INSERT_PATH = path.join(__dirname, "..", "scripts", "seed-data.sql");

function formatDateShort(isoStr) {
  if (!isoStr) return "Mar 15, 2024";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function main() {
  const posts = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));

  posts.forEach((p) => {
    p.date = formatDateShort(p.rawDateIso);
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.rawDateIso).getTime() - new Date(a.rawDateIso).getTime());

  posts.forEach((p, idx) => {
    p.featured = idx === 0;
  });

  fs.writeFileSync(JSON_PATH, JSON.stringify(posts, null, 2));

  // Sync to blogPosts.ts
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
  console.log(
    "✅ Formatted dates to short month format (e.g. Mar 31, 2026) and updated blogPosts.ts!",
  );
}

main();
