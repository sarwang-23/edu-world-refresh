import { createFileRoute } from "@tanstack/react-router";
import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Footer } from "./index";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: "The Visual Archive — Global Education Lab" }],
  }),
});

function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571260899304-42507611e121?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588196749597-9ff0464ac641?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans text-foreground">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream">
        {/* Grid overlay — same as homepage */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-gold/8 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/5 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold tracking-[0.25em] text-gold uppercase">The Visual Archive • Vol. 01</span>
            </div>

            <h1 className="text-[2.75rem] font-bold leading-[1.05] text-forest md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
              Rooms where <br />
              <span className="text-gold font-serif italic font-normal">futures</span><br />
              are drafted.
            </h1>

            <p className="max-w-xl text-[17px] leading-[1.65] text-forest/70">
              A cinematic archive of leaders, educators and learners across our programmes — delivered in the UK, India, Finland, Estonia and Indonesia.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
              >
                Explore Programmes <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-forest/10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-forest-deep mb-1">05</p>
                <p className="text-[13px] font-bold tracking-[0.2em] text-forest/50 uppercase">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest-deep mb-1">150+</p>
                <p className="text-[13px] font-bold tracking-[0.2em] text-forest/50 uppercase">Business Leaders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest-deep mb-1">5,000+</p>
                <p className="text-[13px] font-bold tracking-[0.2em] text-forest/50 uppercase">Students Engaged</p>
              </div>
            </div>
          </div>

          {/* Right — Main Image */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
              <img src={images[0]} alt="Cambridge Formal Hall" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase block mb-1">Cover</span>
                  <p className="text-white font-medium text-[15px]">Cambridge • Michaelmas '24</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="bg-white border-y border-forest/8 py-4 overflow-hidden relative flex">
        <div className="flex gap-8 items-center whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center shrink-0">
              {['CAMBRIDGE', 'LONDON', 'HELSINKI', 'TALLINN', 'BALI', 'NEW DELHI', 'MUMBAI', 'BENGALURU'].map((city, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-8">
                  <span className="text-[14px] font-bold tracking-[0.2em] text-forest/40 uppercase">{city}</span>
                  <span className="w-1.5 h-1.5 border border-gold/50 rounded-full flex items-center justify-center">
                    <span className="w-0.5 h-0.5 bg-gold rounded-full"></span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Chapter 01 — Corporate Leadership ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-gold" />
                <span className="text-[14px] font-bold tracking-[0.3em] text-gold uppercase">Chapter 01 — Corporate Leadership</span>
              </div>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-forest-deep tracking-tight leading-[1.1]">
                The Boardroom,<br />
                <span className="font-serif italic text-gold">reimagined.</span>
              </h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              Over 150 business leaders trained through advanced workshops delivered in partnership with the University of Cambridge and other trusted institutions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
              <div className="md:col-span-2 h-[300px] md:h-full rounded-[2rem] overflow-hidden">
                <img src={images[1]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-rows-2 gap-4 h-[500px] md:h-full">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src={images[2]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-[2rem] overflow-hidden">
                  <img src={images[3]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="h-[300px] rounded-[2rem] overflow-hidden">
                <img src={images[4]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="h-[300px] rounded-[2rem] overflow-hidden">
                <img src={images[5]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="h-[300px] rounded-[2rem] overflow-hidden">
                <img src={images[6]} alt="Corporate Leadership" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Width Divider ── */}
      <section className="relative h-[600px] md:h-[800px] w-full overflow-hidden">
        <img src={images[7]} alt="Past Programmes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-gold" />
            <span className="text-[14px] font-bold tracking-[0.3em] text-gold uppercase">Past Programmes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
            Five countries.{" "}
            <span className="font-serif italic text-gold font-normal">Hundreds of institutions.</span>{" "}
            One extended classroom.
          </h2>
          <p className="text-[14px] text-white/80 max-w-lg leading-relaxed">
            Highlights from previous programmes across the UK, India, Finland, Estonia and Indonesia.
          </p>
        </div>
      </section>

      {/* ── Chapter 02 — School Leadership ── */}
      <section className="py-24 md:py-32 bg-[#F7F5F0]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-gold" />
                <span className="text-[14px] font-bold tracking-[0.3em] text-gold uppercase">Chapter 02 — School Leadership</span>
              </div>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-forest-deep tracking-tight leading-[1.1]">
                Educators,{" "}
                <span className="font-serif italic text-gold">in dialogue.</span>
              </h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              L&D programmes delivered across five countries for over 100 educational organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square rounded-[2rem] overflow-hidden group">
                <img src={images[i % images.length]} alt="School Leadership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter 03 — Student Programmes ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-gold" />
                <span className="text-[14px] font-bold tracking-[0.3em] text-gold uppercase">Chapter 03 — Student Programmes</span>
              </div>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-forest-deep tracking-tight leading-[1.1] max-w-xl">
                The next generation,{" "}
                <span className="font-serif italic text-gold">at work.</span>
              </h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              STEM and Entrepreneurship workshops & summer camps for 5,000+ students — from young learners to undergraduates.
            </p>
          </div>

          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {[
              "aspect-[3/4]", "aspect-[4/3]", "aspect-[4/5]",
              "aspect-[2/3]", "aspect-square", "aspect-[3/4]",
              "aspect-square", "aspect-[3/2]", "aspect-square",
              "aspect-[4/5]", "aspect-[3/4]", "aspect-square"
            ].map((ratio, i) => (
              <div key={i} className={`rounded-[2rem] overflow-hidden relative break-inside-avoid group ${ratio}`}>
                <img src={images[(i + 3) % images.length]} alt="Student Programmes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA ── */}
      <section className="bg-[#051108] w-full py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-[#C19842]" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#C19842]">Be Part of the Story</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-0">
              Let's build something
            </h2>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-serif italic text-[#C19842] leading-[1.05] tracking-tight">
              impactful together.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C19842] px-8 py-4 text-[14px] font-bold uppercase tracking-[0.2em] text-[#051108] transition-all hover:bg-white"
            >
              Start a Conversation
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
