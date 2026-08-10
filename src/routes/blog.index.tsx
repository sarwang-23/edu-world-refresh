// src/routes/blog.index.tsx
import { useState, useMemo } from "react";
import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Calendar, Clock, Search, Tag as TagIcon, X } from "lucide-react";
import { blogPosts, CATEGORIES } from "@/data/blogPosts";
import { Footer } from "./index";

export const Route = createFileRoute("/blog/")({
  head: () => buildMeta("/blog"),
  component: BlogPage,
});

const PAGE_SIZE = 9;

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach(p => p.tags?.forEach(t => set.add(t)));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCategory =
        activeCategory === "All Posts" || p.category === activeCategory;

      const matchesTag =
        !selectedTag || p.tags?.includes(selectedTag);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  function handleTagSelect(tag: string) {
    setSelectedTag(selectedTag === tag ? null : tag);
    setPage(1);
  }

  function clearFilters() {
    setActiveCategory("All Posts");
    setSearchQuery("");
    setSelectedTag(null);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero featured={featured} />
      <section id="blog-grid" className="bg-cream pb-24 pt-8">
        <div className="mx-auto max-w-7xl px-6">
          {/* Controls Bar: Search & Tag Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-forest/10 pb-6">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-forest/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full rounded-full border border-forest/15 bg-white py-2.5 pl-11 pr-10 text-[14px] text-forest placeholder:text-forest/40 focus:border-forest-deep focus:outline-none shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Active filter count / Clear */}
            {(activeCategory !== "All Posts" || searchQuery || selectedTag) && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-forest/70 font-medium">
                  Showing {filtered.length} of {blogPosts.length} posts
                </span>
                <button
                  onClick={clearFilters}
                  className="text-gold font-bold uppercase tracking-wider text-[12px] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
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

          {/* Tag Pills */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-forest/10 pb-6">
              <span className="text-[12px] font-bold uppercase tracking-wider text-forest/50 mr-2 flex items-center gap-1">
                <TagIcon className="h-3 w-3" /> Tags:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagSelect(tag)}
                  className={`rounded-md px-3 py-1 text-[12px] font-semibold transition-all ${
                    selectedTag === tag
                      ? "bg-forest text-white"
                      : "bg-forest/5 text-forest/70 hover:bg-forest/10"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          {paged.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-forest/60">
              <p className="text-lg font-bold">No posts match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-full bg-forest px-6 py-2 text-white font-medium text-sm"
              >
                Reset Search Filters
              </button>
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
  if (!featured) return null;
  return (
    <section className="relative overflow-hidden bg-cream pb-16 md:pb-24 pt-8">
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
            Cambridge, Oxford, Finland and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#blog-grid"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep shadow-sm"
            >
              Browse All Articles
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Featured Story
            </Link>
          </div>
        </div>

        {/* Featured post image */}
        <div className="relative lg:col-span-5 lg:mt-6">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group relative block overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <div className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply z-10" />
            <img src={featured.cover || "/src/assets/gilp-brochure-cover.jpg"}
              alt={featured.title}
              className="h-[440px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-forest-deep/95 via-forest-deep/50 to-transparent">
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold mb-2">
                FEATURED STORY
              </p>
              <p className="text-white font-bold text-xl leading-snug line-clamp-2">
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
      <div className="relative aspect-[4/3] overflow-hidden bg-forest/5">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-forest-deep text-[12px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-xs">
          {post.category}
        </div>
        <img src={post.cover || "/src/assets/gilp-brochure-cover.jpg"}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy" />
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
        <h3 className="text-lg font-bold text-forest-deep mb-3 leading-snug group-hover:text-forest transition-colors line-clamp-2">
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
