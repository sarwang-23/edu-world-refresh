// src/routes/blog.$slug.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { useState, useEffect, useCallback } from "react";
import {
  Facebook,
  Linkedin,
  Link2,
  Eye,
  MessageSquare,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getRelatedPosts, type BlogPost, blogPosts } from "@/data/blogPosts";
import { Footer } from "./index";
import logoImg from "@/assets/Logo png.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug.toLowerCase() === params.slug.toLowerCase());
    if (!post) throw notFound();
    return post as BlogPost;
  },

  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [], links: [] };

    let description = loaderData.excerpt || "";
    if (!description && loaderData.content) {
      const firstPara = loaderData.content.find((b: any) => b.type === "paragraph") as any;
      if (firstPara && firstPara.text) {
        description = firstPara.text.substring(0, 152) + "...";
      }
    }

    return buildMeta(
      {
        title: loaderData.title,
        description: description,
        image: loaderData.cover,
      },
      { ogType: "article" },
      `blog/${loaderData.slug}`,
    );
  },

  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const related = getRelatedPosts(post);
  const [likes, setLikes] = useState(1);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Always use the GEL logo as the author avatar (all posts authored by Global Education Lab)
  const authorAvatarSrc = post.authorImage || logoImg;

  const handleLike = () => {
    if (hasLiked) {
      setLikes((l) => l - 1);
      setHasLiked(false);
    } else {
      setLikes((l) => l + 1);
      setHasLiked(true);
    }
  };

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#111111]">
      {/* Top Outer Navigation Container */}
      <div className="mx-auto max-w-[780px] px-4 sm:px-6 pt-6 pb-3">
        {/* Category Filter Navigation Bar */}
        <div className="flex items-center gap-6 text-[14px] font-medium text-[#2D2D2D] overflow-x-auto no-scrollbar py-2">
          <Link to="/blog" className="hover:text-forest transition-colors whitespace-nowrap">
            All Posts
          </Link>
          <Link to="/blog" className="hover:text-forest transition-colors whitespace-nowrap">
            Green School Bali
          </Link>
          <Link to="/blog" className="hover:text-forest transition-colors whitespace-nowrap">
            India School programme
          </Link>
          <Link to="/blog" className="hover:text-forest transition-colors whitespace-nowrap">
            Finland education
          </Link>
          <Link to="/blog" className="hover:text-forest transition-colors whitespace-nowrap">
            Education tourism
          </Link>
        </div>
      </div>

      {/* Main Post Card Container */}
      <main className="mx-auto max-w-[780px] px-4 sm:px-6 mb-12">
        <article className="bg-white border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-10 md:p-12 rounded-lg">
          {/* Post Top Metadata Bar */}
          <div className="flex items-center text-[14px] text-[#555555] mb-5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex h-9 w-9 items-center justify-center rounded-full overflow-hidden border border-gray-200 bg-white shrink-0 p-1">
                <img
                  src={authorAvatarSrc}
                  alt={post.author}
                  className="h-full w-full object-contain mix-blend-multiply"
                  loading="lazy"
                />
              </div>
              <span className="font-semibold text-[#111111]">{post.author}</span>
              <span className="text-gray-400">·</span>
              <span>{post.date}</span>
              <span className="text-gray-400">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-[36px] md:text-[42px] font-extrabold text-[#111111] leading-[1.22] tracking-tight mb-3">
            {post.title}
          </h1>

          {/* Updated Subline */}
          <p className="text-[13px] text-[#757575] font-normal mb-8">
            Updated: {post.updatedDate || post.date}
          </p>

          {/* Article Rendered Body */}
          <ArticleBlocksContent post={post} />

          {/* Apply Now Banner inside Blog Article */}
          <div className="mt-10 mb-2 p-6 sm:p-8 rounded-2xl bg-[#04341B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-[#04341B]">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5D166]">
                Global Education Lab
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 leading-tight">
                Ready to Join Our Next Cohort?
              </h3>
              <p className="text-sm text-white/80 mt-1 max-w-md">
                Take the next step in global experiential education. Applications are open.
              </p>
            </div>
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5D166] px-8 py-3.5 text-[#04341B] font-bold text-sm hover:bg-amber-300 transition-all hover:scale-105 shrink-0 shadow-sm"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Social Share Icon Bar */}
          <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-5 text-gray-700">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>

              {/* X / Twitter Icon */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors font-bold text-sm"
                title="Share on X"
              >
                𝕏
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>

              <button
                onClick={handleCopy}
                className="hover:text-black transition-colors"
                title="Copy link"
              >
                <Link2 className="h-4.5 w-4.5" />
              </button>
              {copied && <span className="text-xs text-forest font-semibold">Link copied!</span>}
            </div>

            {/* Bottom Views, Comments, Likes Bar */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[14px] text-gray-500 font-normal">
              <div className="flex items-center gap-4">
                <span>65 views</span>
                <span>0 comments</span>
              </div>
              <button
                onClick={handleLike}
                className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
              >
                <span>{likes}</span>
                <Heart
                  className={`h-4 w-4 ${hasLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                />
              </button>
            </div>
          </div>

          {/* Comments Section Box */}
          <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#111111] mb-4">Comments</h3>
            <div className="w-full border border-[#D1D5DB] bg-[#FAFAFA] p-4 rounded-md text-sm text-gray-400">
              Write a comment...
            </div>
          </div>
        </article>
      </main>

      {/* Recent Posts Section */}
      {related.length > 0 && <RecentPostsGrid posts={related} />}

      {/* Let's Get In Touch CTA Banner */}
      <GetInTouchCTA />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  if (!text) return null;
  // Support **bold**, *italic*, and [link](url)
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
          return (
            <strong key={index} className="font-bold text-[#111111]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
          return (
            <em key={index} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={index}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A6AFF] underline hover:text-[#0047cc]"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

function ArticleBlocksContent({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-6 text-[#1a1a1a]">
      {post.cover && (
        <div className="my-4 overflow-hidden rounded-xl bg-black/5">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-auto max-h-[75vh] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      )}
      {post.content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-[17px] leading-[1.8] text-[#222222] font-normal">
                <FormattedText text={block.text} />
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className={`text-xl sm:text-[22px] md:text-[24px] font-bold text-[#111111] ${i === 0 ? "mt-0" : "mt-8"} mb-2 leading-snug`}>
                <FormattedText text={block.text} />
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-6 border-l-4 border-forest pl-6 py-2 italic text-[#111111] bg-forest/5 rounded-r-lg"
              >
                <p className="text-lg leading-relaxed"><FormattedText text={block.text} /></p>
                {block.attribution && (
                  <cite className="block mt-2 text-sm font-semibold not-italic text-forest">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            );
          case "image_with_text":
            return (
              <div key={i} className="my-6 overflow-hidden">
                <img
                  src={block.src}
                  alt={block.caption ?? ""}
                  className="float-left mr-6 mb-3 w-[45%] max-w-[300px] rounded-xl object-cover"
                  loading="lazy"
                />
                <p className="text-[17px] leading-[1.8] text-[#222222] font-normal">
                  <FormattedText text={(block as any).text} />
                </p>
                <div className="clear-both" />
              </div>
            );
          case "list":
            return (
              <ul key={i} className="my-2 list-disc pl-6 space-y-2 text-[17px] leading-[1.8] text-[#222222]">
                {(block as any).items.map((item: string, idx: number) => (
                  <li key={idx}>
                    <FormattedText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="my-6 w-full flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-xl bg-black/5">
                  <img
                    src={block.src}
                    alt={block.caption ?? ""}
                    className="w-full h-auto max-h-[75vh] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2.5 text-center text-sm text-[#666666] italic max-w-xl">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "testimonials_carousel":
            return <TestimonialsCarousel key={i} items={(block as any).items} />;
          case "gallery":
            return <ArticleGallery key={i} images={(block as any).images} />;
          case "html":
            return (
              <div
                key={i}
                className="my-6 w-full prose max-w-none text-[#222222]"
                dangerouslySetInnerHTML={{ __html: (block as any).content }}
              />
            );
          case "video": {
            const videoSrc = block.src || "";
            let embedUrl = videoSrc;
            if (videoSrc.includes("youtube.com/watch?v=")) {
              const id = videoSrc.split("watch?v=")[1]?.split("&")[0];
              embedUrl = `https://www.youtube.com/embed/${id}`;
            } else if (videoSrc.includes("youtube.com/shorts/")) {
              const id = videoSrc.split("/shorts/")[1]?.split("?")[0];
              embedUrl = `https://www.youtube.com/embed/${id}`;
            } else if (videoSrc.includes("youtu.be/")) {
              const id = videoSrc.split("youtu.be/")[1]?.split("?")[0];
              embedUrl = `https://www.youtube.com/embed/${id}`;
            }

            return (
              <figure key={i} className="my-8 w-full flex flex-col items-center">
                <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-md border border-black/5">
                  <iframe
                    src={embedUrl}
                    title={block.caption || "YouTube video"}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3.5 text-center text-sm sm:text-[15px] text-[#111111] font-medium leading-relaxed max-w-2xl">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

function ArticleGallery({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="my-8 w-full flex flex-col gap-2">
      <Carousel setApi={setApi} className="w-full relative group">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden bg-black/5 rounded-md">
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => api?.scrollPrev()}
            className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-sm transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-sm transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/70 hover:bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="h-4 w-4 text-black" />
        </button>
      </Carousel>

      <div className="grid grid-cols-5 md:grid-cols-8 gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-sm transition-all ${
              current === index ? "ring-2 ring-forest opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src={src} alt="Thumbnail" className="w-full h-full object-contain" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel({
  items,
}: {
  items: Array<{ name: string; role: string; quote: string; photo?: string }>;
}) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  const total = items.length;

  const goTo = (index: number) => {
    if (index === current) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrent(index);
      setIsFading(false);
    }, 150);
  };

  const prev = () => {
    goTo((current - 1 + total) % total);
  };

  const next = () => {
    goTo((current + 1) % total);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const item = items[current];
  if (!item) return null;

  return (
    <div className="my-8 w-full select-none">
      <div
        className="relative w-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Outer wrapper with Cambridge background */}
        <div
          className="relative w-full rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            backgroundImage:
              "url('/blog-images/inside-the-global-india-leadership-programme-redefining-leadership-in-the-ai-era_cover_7e2606_db3e1e7992fd4a529c58da1780816a16_mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          {/* Blur overlay on background */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />

          {/* White Card */}
          <div
            className={`relative z-10 mx-auto my-6 sm:my-8 bg-white/95 rounded-2xl shadow-xl overflow-visible transition-opacity duration-150 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            style={{ maxWidth: "88%", padding: "2rem 2rem 2rem 2.5rem" }}
          >
            {/* Top section: name, role, divider */}
            <div>
              <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#1A3C2B] leading-tight mb-1">
                {item.name}
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] italic text-[#1A3C2B] font-medium leading-snug mb-3">
                {item.role}
              </p>
              <div className="w-10 h-[3px] bg-[#1A3C2B] rounded-full mb-4" />
            </div>

            {/* Bottom section: quote left, photo right (or inline) */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-5">
              {/* Quote text */}
              <p className="flex-1 text-[14.5px] sm:text-[15px] leading-[1.75] text-[#1C1C1C]">
                {item.quote}
              </p>

              {/* Circular Photo — bottom-right inside card */}
              {item.photo && (
                <div
                  className="flex-shrink-0 self-center sm:self-end rounded-full overflow-hidden border-4 border-white shadow-lg"
                  style={{ width: "130px", height: "130px" }}
                >
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Prev/Next Buttons — positioned over the carousel */}
        <div className="absolute inset-y-0 left-1 flex items-center z-20">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-9 w-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#1A3C2B] rounded-full shadow-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-1 flex items-center z-20">
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="h-9 w-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#1A3C2B] rounded-full shadow-md transition-colors cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              current === index ? "bg-[#1A3C2B] w-6" : "bg-[#1A3C2B]/30 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function RecentPostsGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mx-auto max-w-[760px] px-4 sm:px-6 mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-[#111111]">Recent Posts</h2>
        <Link
          to="/blog"
          className="text-sm font-medium text-neutral-700 hover:text-forest transition-colors"
        >
          See All
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.slice(0, 3).map((post, idx) => {
          const viewsList = [57, 240, 24];
          const commentsList = [0, 1, 0];
          const likesList = [0, 6, 0];

          return (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col bg-white border border-[#E5E7EB] overflow-hidden shadow-xs hover:shadow-md transition-all rounded-xs"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[15px] font-bold text-[#111111] leading-snug group-hover:text-forest transition-colors line-clamp-3 mb-4">
                  {post.title}
                </h3>
                <div className="mt-auto pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-[12px] text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {viewsList[idx % 3]}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      {commentsList[idx % 3]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {likesList[idx % 3] > 0 && <span>{likesList[idx % 3]}</span>}
                    <Heart
                      className={`h-3.5 w-3.5 ${likesList[idx % 3] > 0 ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function BlogNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F9FA] px-6 text-center text-[#111111]">
      <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
      <p className="text-neutral-600 mb-6 max-w-md">
        The blog article you are looking for might have been moved or does not exist.
      </p>
      <Link
        to="/blog"
        className="rounded-full bg-forest px-6 py-3 text-white font-semibold text-sm hover:bg-forest-deep"
      >
        Return to Blog Index
      </Link>
    </div>
  );
}

function GetInTouchCTA() {
  return (
    <section className="bg-[#04341B] text-white py-16 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5D166] mb-4">
          Let's Get In Touch
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto font-normal leading-relaxed">
          Can't find what you're looking for? Please contact us and we'll get back to you as soon as
          possible.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/apply-now"
            className="inline-flex items-center gap-2 rounded-md bg-[#F5D166] px-8 py-3.5 text-[#04341B] font-bold text-sm tracking-wide hover:bg-amber-300 transition-colors shadow-sm"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-block rounded-md border border-[#F5D166]/40 px-8 py-3.5 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
