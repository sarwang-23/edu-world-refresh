// src/routes/blog.$slug.tsx
import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
} from "lucide-react";
import {
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
  type BlogPost,
  blogPosts,
} from "@/data/blogPosts";
import { Footer } from "./index";

export const Route = createFileRoute("/blog/$slug")({
  // -------------------------------------------------------------
  //  Loader – fetch the post by slug and log what we receive
  // -------------------------------------------------------------
  loader: ({ params }) => {
    console.log("[BLOG LOADER] Received slug:", params.slug);   // <‑‑ debug
    // Use a case‑insensitive lookup (helps if the slug casing differs)
    const post = blogPosts.find(
      (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
    );
    console.log("[BLOG LOADER] Post found:", post?.title ?? "NONE");
    if (!post) throw notFound();
    return post as BlogPost;
  },

  // -------------------------------------------------------------
  //  SEO meta (unchanged)
  // -------------------------------------------------------------
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.title} | Global Education Lab` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:image", content: loaderData.cover },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ]
      : [],
  }),

  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const related = getRelatedPosts(post);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <ArticleHero post={post} />
      <ArticleBody blocks={post.content} />
      {/* Social Share & Tags */}
      <section className="mx-auto max-w-3xl px-6 py-8 border-t border-forest/10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-forest-deep">Share this post:</span>
            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest hover:bg-forest/10 hover:text-forest-deep transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest hover:bg-forest/10 hover:text-forest-deep transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest hover:bg-forest/10 hover:text-forest-deep transition-colors">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest hover:bg-forest/10 hover:text-forest-deep transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-forest-deep">Tags:</span>
            <div className="flex flex-wrap items-center gap-2">
              {['#GILP', '#Leadership', '#AI', '#Oxford', '#Cambridge'].map(tag => (
                <span key={tag} className="text-[14px] text-forest/70 hover:text-forest-deep cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && <RelatedPosts posts={related} />}
      <BottomCTA />
      <Footer />
    </div>
  );
}

function ArticleHero({ post }: { post: ReturnType<typeof Route.useLoaderData> }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-0">
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[13.5px] font-bold uppercase tracking-widest text-forest/70 hover:text-forest transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
        </Link>
        <span className="inline-block rounded-full bg-forest-deep px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-widest text-gold mb-6">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-forest-deep md:text-5xl lg:text-[3.4rem] leading-[1.12] mb-8">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-semibold text-forest/65 pb-10 border-b border-forest/10">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
      </div>
      {post.cover && (
        <div className="mx-auto max-w-6xl px-6 mt-10">
          <div className="overflow-hidden rounded-[1.75rem] shadow-xl">
            <img src={post.cover} alt={post.title} className="h-[320px] w-full object-cover md:h-[480px]" />
          </div>
        </div>
      )}
    </section>
  );
}

function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-7">
          {blocks.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={i} className="text-[17px] leading-[1.85] text-forest/85">
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold tracking-tight text-forest-deep mt-6">
                    {block.text}
                  </h2>
                );
              case "quote":
                return (
                  <blockquote key={i} className="my-4 rounded-2xl border border-forest/10 bg-white px-8 py-7 shadow-sm">
                    <p className="font-serif italic text-xl text-forest-deep leading-relaxed">{block.text}</p>
                    {block.attribution && (
                      <footer className="mt-4 text-[13.5px] font-bold uppercase tracking-widest text-gold">
                        {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                );
              case "image":
                return (
                  <figure key={i} className="my-2">
                    <div className="overflow-hidden rounded-2xl shadow-md">
                      <img src={block.src} alt={block.caption ?? ""} className="w-full object-cover" />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-3 text-center text-[13px] text-forest/55">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "delegate-quote":
                return (
                  <div key={i} className="my-10 rounded-[2rem] bg-[#E8F3EF] p-8 md:p-12 shadow-sm border border-forest/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.41 14.425C16.635 13.805 16.747 13.125 16.747 12.384V3H23V12.384C23 15.342 22.091 17.653 20.274 19.317C18.457 20.98 16.273 21.656 13.722 21.944L14.017 21ZM3.017 21L5.41 14.425C5.635 13.805 5.747 13.125 5.747 12.384V3H12V12.384C12 15.342 11.091 17.653 9.274 19.317C7.457 20.98 5.273 21.656 2.722 21.944L3.017 21Z" />
                      </svg>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="shrink-0">
                        <img src={block.image} alt={block.name} className="h-32 w-32 rounded-2xl object-cover shadow-md border-4 border-white" />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest mb-4">{block.title}</h3>
                        <p className="font-serif italic text-[1.4rem] md:text-2xl text-forest-deep leading-relaxed mb-6">"{block.quote}"</p>
                        <div className="flex flex-col mb-6">
                          <span className="font-bold text-forest-deep text-lg">{block.name}</span>
                          <span className="text-forest/70 text-sm">{block.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {block.avatars.map((av, idx) => (
                            <img key={idx} src={av} alt="Delegate" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedPosts({ posts }: { posts: ReturnType<typeof getRelatedPosts> }) {
  return (
    <section className="bg-white border-t border-forest/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-forest-deep md:text-4xl mb-10">
          Related Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl bg-cream border border-forest/5 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-[12px] font-bold uppercase tracking-widest text-gold mb-2">
                  {post.category}
                </p>
                <h3 className="text-[15.5px] font-bold text-forest-deep leading-snug group-hover:text-forest transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">Blog post not found</h1>
    </div>
  );
}

function BottomCTA() {
  return (
    <section className="bg-forest-deep text-primary-foreground py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to explore more?</h2>
      <p className="mb-6">Discover our programmes and join the journey.</p>
      <Link to="/programmes" className="inline-block rounded-full bg-gold px-6 py-3 text-forest-deep font-medium">
        View Programmes
      </Link>
    </section>
  );
}

function RecentPosts({ currentSlug }: { currentSlug: string }) {
  const recent = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);
  return (
    <section className="bg-[#F7F5F0] py-12 mt-10 border-t border-forest/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-forest-deep mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl bg-cream border border-forest/5 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase text-gold mb-1">{post.category}</p>
                <h3 className="text-sm font-semibold text-forest-deep group-hover:text-forest transition-colors">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

