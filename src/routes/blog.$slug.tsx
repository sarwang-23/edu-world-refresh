// src/routes/blog.$slug.tsx
import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { useState, useEffect, useCallback } from "react";
import {
  MoreVertical,
  Facebook,
  Linkedin,
  Link2,
  Eye,
  MessageSquare,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import {
  getRelatedPosts,
  type BlogPost,
  blogPosts,
} from "@/data/blogPosts";
import { Footer } from "./index";
import logoImg from "@/assets/Logo png.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find(
      (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
    );
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
      `blog/${loaderData.slug}`
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

  const handleLike = () => {
    if (hasLiked) {
      setLikes(l => l - 1);
      setHasLiked(false);
    } else {
      setLikes(l => l + 1);
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
      {/* Top Outer Navigation Container matching Wix Page Structure */}
      <div className="mx-auto max-w-[760px] px-4 sm:px-6 pt-6 pb-3">
        {/* Category Filter Navigation Bar directly above Post Card */}
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

      {/* Main White Post Card Container (Matching Wix Ricos Template) */}
      <main className="mx-auto max-w-[760px] px-4 sm:px-6 mb-12">
        <article className="bg-white border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-10 md:p-12 rounded-xs">
          
          {/* Post Top Metadata Bar */}
          <div className="flex items-center justify-between text-[13.5px] text-[#555555] mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/10 overflow-hidden border border-forest/20">
                <img src={logoImg} alt={post.author} className="h-4.5 w-4.5 object-contain" loading="lazy" />
              </div>
              <span className="font-medium text-[#111111]">{post.author}</span>
              <span className="text-gray-400">·</span>
              <span>{post.date}</span>
              <span className="text-gray-400">·</span>
              <span>{post.readTime}</span>
            </div>

            <button className="text-neutral-400 hover:text-neutral-700 transition-colors p-1" title="More options">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-[36px] md:text-[40px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Updated Subline */}
          <p className="text-[13px] text-[#757575] font-normal mb-8">
            Updated: {post.date}
          </p>

          {/* Article Rendered Body */}
          <ArticleBlocksContent post={post} />

          {/* Social Share Icon Bar */}
          <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-5 text-gray-700">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>

              {/* X / Twitter Icon */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors font-bold text-sm"
                title="Share on X"
              >
                𝕏
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                <Heart className={`h-4 w-4 ${hasLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
              </button>
            </div>
          </div>

          {/* Comments Section Box */}
          <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#111111] mb-4">Comments</h3>
            <div className="w-full border border-[#D1D5DB] bg-[#FAFAFA] p-4 rounded-xs text-sm text-gray-400">
              Write a comment...
            </div>
          </div>

        </article>
      </main>

      {/* Recent Posts Section (Matching Wix 3-Column Footer Layout) */}
      {related.length > 0 && <RecentPostsGrid posts={related} />}

      {/* Let's Get In Touch CTA Banner */}
      <GetInTouchCTA />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

function ArticleBlocksContent({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-6">
      {post.cover && (
        <div className="my-6 overflow-hidden">
          <img src={post.cover} alt={post.title} className="w-full object-cover" loading="lazy" />
        </div>
      )}
      {post.content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-[16.5px] leading-[1.8] text-[#161616]">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="text-xl md:text-[22px] font-bold text-[#D89B27] mt-8 mb-4">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-6 border-l-4 border-[#111111] pl-6 italic text-[#111111]">
                <p className="text-lg leading-relaxed">{block.text}</p>
              </blockquote>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <img src={block.src} alt={block.caption ?? ""} className="w-full object-cover" loading="lazy" />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-neutral-500">
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
                className="my-6 w-full"
                dangerouslySetInnerHTML={{ __html: (block as any).content }}
              />
            );
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
                <img src={src} alt="Gallery" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => api?.scrollPrev()} className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-sm transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => api?.scrollNext()} className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-sm transition-colors">
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
            <img src={src} alt="Thumbnail" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel({ items }: { items: Array<{ name: string; role: string; quote: string; photo?: string }> }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="my-8 w-full">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              {/* Outer wrapper with Cambridge background */}
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: "url('/blog-images/inside-the-global-india-leadership-programme-redefining-leadership-in-the-ai-era_cover_7e2606_db3e1e7992fd4a529c58da1780816a16_mv2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  minHeight: "420px",
                }}
              >
                {/* Blur overlay on background */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />

                {/* White Card */}
                <div
                  className="relative z-10 mx-auto my-8 bg-white/95 rounded-2xl shadow-xl overflow-visible"
                  style={{ maxWidth: "88%", padding: "2rem 2rem 2rem 2.5rem" }}
                >
                  {/* Top section: name, role, divider */}
                  <div style={{ paddingLeft: item.photo ? "0" : "0" }}>
                    <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#1A3C2B] leading-tight mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] italic text-[#1A3C2B] font-medium leading-snug mb-3">
                      {item.role}
                    </p>
                    <div className="w-10 h-[3px] bg-[#1A3C2B] rounded-full mb-4" />
                  </div>

                  {/* Bottom section: quote left, photo right (or inline) */}
                  <div className="flex items-end gap-5">
                    {/* Quote text */}
                    <p className="flex-1 text-[14.5px] sm:text-[15px] leading-[1.75] text-[#1C1C1C]">
                      {item.quote}
                    </p>

                    {/* Circular Photo — bottom-right inside card */}
                    {item.photo && (
                      <div
                        className="flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg"
                        style={{ width: "140px", height: "140px" }}
                      >
                        <img src={item.photo}
                          alt={item.name}
                          className="w-full h-full object-cover object-top"
                        loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev/Next Buttons */}
        <div className="absolute inset-y-0 left-1 flex items-center z-20">
          <button
            onClick={() => api?.scrollPrev()}
            className="h-9 w-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#1A3C2B] rounded-full shadow-md transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-1 flex items-center z-20">
          <button
            onClick={() => api?.scrollNext()}
            className="h-9 w-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#1A3C2B] rounded-full shadow-md transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
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
        <Link to="/blog" className="text-sm font-medium text-neutral-700 hover:text-forest transition-colors">
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
                <img src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" />
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
                    <Heart className={`h-3.5 w-3.5 ${likesList[idx % 3] > 0 ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
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
      <p className="text-neutral-600 mb-6 max-w-md">The blog article you are looking for might have been moved or does not exist.</p>
      <Link to="/blog" className="rounded-full bg-forest px-6 py-3 text-white font-semibold text-sm hover:bg-forest-deep">
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
          Can't find what you're looking for? Please contact us and we'll get back to you as soon as possible.
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-md bg-[#F5D166] px-8 py-3.5 text-[#04341B] font-bold text-sm tracking-wide hover:bg-amber-300 transition-colors shadow-sm"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
