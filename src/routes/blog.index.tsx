// src/routes/blog.tsx
import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react";
import { blogPosts, CATEGORIES } from "@/data/blogPosts";
import { Footer } from "./index";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Global Education Lab" },
      {
        name: "description",
        content:
          "Stories, school visits, programme recaps and reflections from Global Education Lab's work across India, Cambridge, Finland and beyond.",
      },
      { property: "og:title", content: "Blog | Global Education Lab" },
      {
        property: "og:description",
        content:
          "Stories, school visits, programme recaps and reflections from Global Education Lab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const PAGE_SIZE = 9;

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Posts");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All Posts") return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero featured={featured} />
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-forest/10 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-[13.5px] font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-forest-deep text-gold shadow-sm"
                    : "bg-white text-forest/70 border border-forest/10 hover:border-forest/25 hover:text-forest"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {paged.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-forest/60">
              No posts in this category yet.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`h-10 w-10 rounded-full text-[14px] font-bold transition-all ${
                    page === i + 1
                      ? "bg-forest-deep text-gold"
                      : "bg-white border border-forest/10 text-forest/70 hover:border-forest/30"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Hero({ featured }: { featured: (typeof blogPosts)[number] }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 md:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 items-start pt-6">
        {/* Text Content */}
        <div className="flex flex-col justify-center lg:col-span-7 pt-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-[15px] font-semibold uppercase tracking-[0.18em] text-forest/70 mb-8 w-fit">
            <BookOpen className="h-3.5 w-3.5 text-gold" />
            THE GEL BLOG
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-7xl lg:text-[5.5rem] leading-[1.05]">
            Stories from<br />
            <span className="font-serif italic text-gold relative inline-block">
              the field.
              <span className="absolute bottom-2 left-0 h-[3px] w-full bg-gold/30" />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground md:text-lg">
            School visits, programme recaps and reflections from <strong>Global Education Lab's</strong> work across India,
            Cambridge, Finland and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#blog-grid"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Browse All Posts
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
               to="/blog/$slug"
               params={{ slug: featured.slug }}
               className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
               Latest Story
            </Link>
            <Link
               to="/blog/$slug"
               params={{ slug: "global-india-leadership-programme-ai-era" }}
               className="ml-4 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
               GILP Story
            </Link>
          </div>
        </div>

        {/* Featured post image */}
        <div className="relative lg:col-span-5 lg:mt-14">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group relative block overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <div className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply z-10" />
            <img
              src={featured.cover}
              alt={featured.title}
              className="h-[480px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent">
              <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold mb-2">
                LATEST STORY
              </p>
              <p className="text-white font-bold text-xl leading-snug">
                {featured.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col rounded-2xl bg-white border border-forest/5 overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-forest-deep text-[12px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
          {post.category}
        </div>
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-4 text-[12.5px] font-bold uppercase tracking-widest text-forest/55 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-lg font-bold text-forest-deep mb-3 leading-snug group-hover:text-forest transition-colors">
          {post.title}
        </h3>
        <p className="text-[14.5px] text-forest/70 leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-forest/10 pt-4 mt-auto">
          <span className="text-[13px] font-semibold text-forest/60">
            {post.author}
          </span>
          <span className="text-[13px] font-bold uppercase tracking-widest text-forest-deep flex items-center gap-1 group-hover:text-gold transition-colors">
            READ <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// End of file
