import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Footer } from "./index";

// ── Cambridge / Leadership
import cambridgeImg from "@/assets/cambridge.jpg";
import cambridge1 from "@/assets/cambridge_1.jpg";
import cambridge2 from "@/assets/cambridge_2.jpg";
import cambridge3 from "@/assets/cambridge_3.jpg";
import cambridge4 from "@/assets/cambridge_4.jpg";
import cambridge5 from "@/assets/cambridge_5.jpg";
import cambridge6 from "@/assets/cambridge_6.jpg";
import cambridge7 from "@/assets/cambridge_7.jpg";
import cambridge8 from "@/assets/cambridge_8.jpg";

// ── GILP / March
import gilpMarch1 from "@/assets/gilp-march-1.jpg";
import gilpMarch2 from "@/assets/gilp-march-2.jpg";
import gilpMarch3 from "@/assets/gilp-march-3.jpg";
import gilpMarch4 from "@/assets/gilp-march-4.jpg";
import gilpMarch5 from "@/assets/gilp-march-5.jpg";
import gilpMarch6 from "@/assets/gilp-march-6.jpg";
import gilpMarch7 from "@/assets/gilp-march-7.jpg";
import gilpMarch8 from "@/assets/gilp-march-8.jpg";
import gilpMarch9 from "@/assets/gilp-march-9.jpg";
import gilpMarch10 from "@/assets/gilp-march-10.jpg";

// ── STEM / Student
import yusufHImg from "@/assets/YusufH.jpg";
import stem1Img from "@/assets/STEM1.jpg";
import stemYvesImg from "@/assets/STEM Yves 2.jpg";
import stemAstroImg from "@/assets/STEM astrophysics.jpg";
import siteVisitImg from "@/assets/site visit.jpg";
import img0719 from "@/assets/IMG_0719.jpg";
import img4915 from "@/assets/IMG_4915.jpg";
import img4929 from "@/assets/IMG_4929.jpg";
import img5105 from "@/assets/IMG_5105.jpg";
import img5138 from "@/assets/IMG_5138_2.jpg";
import img5277 from "@/assets/IMG_5277.jpg";

// ── Finland
import finland1 from "@/assets/finland_1.jpg";
import finland2 from "@/assets/finland_2.jpg";
import finland3 from "@/assets/finland_3.jpg";
import finland4 from "@/assets/finland_4.jpg";
import finland5 from "@/assets/finland_5.jpg";
import finlandHelsinki from "@/assets/finland_helsinki.jpg";

// ── Bali
import bali1 from "@/assets/bali_new_1.jpg";
import bali2 from "@/assets/bali_new_2.jpg";
import bali3 from "@/assets/bali_new_3.jpg";
import bali4 from "@/assets/bali_new_4.jpg";

// ── Misc
import businessLeadersImg from "@/assets/business-leaders.jpg";
import impactNew1 from "@/assets/impact_new_1.jpg";
import impactNew2 from "@/assets/impact_new_2.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "The Visual Archive — Global Education Lab" },
      { name: "description", content: "A cinematic archive of leaders, educators and learners across our global programmes." },
    ],
  }),
});

/* ─── Reusable photo card ─── */
function Photo({
  src, alt, label, location, className = "",
}: {
  src: string; alt: string; label?: string; location?: string; className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      {/* dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {(label || location) && (
        <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {label && <p className="text-white font-semibold text-sm leading-snug">{label}</p>}
          {location && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <MapPin className="h-3 w-3 text-[#C19842]" />
              <span className="text-[#C19842] text-xs font-bold tracking-widest uppercase">{location}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Section header ─── */
function SectionHeader({ eyebrow, title, accent, desc }: { eyebrow: string; title: string; accent?: string; desc?: string }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-8 bg-[#C19842] block" />
        <span className="text-xs font-bold tracking-[0.3em] text-[#C19842] uppercase">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-[3.25rem] font-bold tracking-tight text-white leading-[1.08]">
        {title}{" "}
        {accent && <span className="font-serif italic text-[#C19842] font-normal">{accent}</span>}
      </h2>
      {desc && <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-lg">{desc}</p>}
    </div>
  );
}

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filters = ["All", "Cambridge", "India", "Finland", "Bali", "Students"];

  return (
    <div className="min-h-screen bg-[#080d07] font-sans text-white">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {/* background collage: 3-panel */}
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative overflow-hidden">
            <img src={cambridge1} alt="" className="h-full w-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" />
          </div>
          <div className="relative overflow-hidden">
            <img src={gilpMarch1} alt="" className="h-full w-full object-cover scale-[1.08] animate-[slowZoom_25s_ease-in-out_2s_infinite_alternate]" />
          </div>
          <div className="relative overflow-hidden">
            <img src={stem1Img} alt="" className="h-full w-full object-cover scale-105 animate-[slowZoom_22s_ease-in-out_4s_infinite_alternate]" />
          </div>
        </div>

        {/* unified overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d07]/70 via-[#080d07]/30 to-[#080d07]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d07]/60 via-transparent to-[#080d07]/60" />

        {/* content */}
        <div className="relative flex h-full flex-col justify-end pb-20 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <Camera className="h-4 w-4 text-[#C19842]" />
            <span className="text-xs font-bold tracking-[0.4em] text-[#C19842] uppercase">The Visual Archive · Vol. 01</span>
          </div>

          <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold leading-[0.95] tracking-tight">
            Rooms where<br />
            <span className="font-serif italic text-[#C19842] font-normal">futures</span><br />
            are drafted.
          </h1>

          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-white/65">
            A cinematic archive of leaders, educators and learners — delivered across Cambridge, Helsinki, Bali and India.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#cambridge" className="inline-flex items-center gap-2 rounded-full bg-[#C19842] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#080d07] transition-all hover:bg-white">
              View Archive <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/programmes" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:text-white">
              Explore Programmes
            </Link>
          </div>

          {/* stats row */}
          <div className="mt-16 flex items-center gap-12 border-t border-white/10 pt-8">
            {[["05", "Countries"], ["12+", "Programmes"], ["150+", "Leaders Trained"], ["5,000+", "Students"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white">{n}</p>
                <p className="text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FILTER BAR
      ══════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-[#080d07]/90 backdrop-blur-md border-b border-white/[0.06] py-4 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1500px] mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                active === f
                  ? "bg-[#C19842] text-[#080d07]"
                  : "border border-white/15 text-white/50 hover:border-white/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto shrink-0 flex items-center gap-2 text-white/30 text-xs font-bold tracking-widest uppercase">
            <Camera className="h-3.5 w-3.5" />
            <span>5 Collections</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          CH 01 — CAMBRIDGE
      ══════════════════════════════ */}
      <section id="cambridge" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <SectionHeader
          eyebrow="Chapter 01"
          title="Cambridge,"
          accent="reimagined."
          desc="Over 150 business leaders trained through advanced workshops in partnership with the University of Cambridge."
        />

        {/* 3-col editorial: big left, stacked right */}
        <div className="flex flex-col gap-3">
          {/* Row A */}
          <div className="grid grid-cols-12 gap-3 h-[480px]">
            <Photo src={cambridge1} alt="Cambridge" label="Leadership Forum" location="Cambridge, UK" className="col-span-8 h-full" />
            <div className="col-span-4 flex flex-col gap-3">
              <Photo src={cambridge2} alt="Cambridge" label="Judge Business School" location="Cambridge, UK" className="flex-1" />
              <Photo src={cambridge3} alt="Cambridge" location="Cambridge, UK" className="flex-1" />
            </div>
          </div>

          {/* Row B */}
          <div className="grid grid-cols-3 gap-3 h-[300px]">
            <Photo src={cambridge4} alt="Cambridge" location="Cambridge, UK" className="h-full" />
            <Photo src={cambridge5} alt="Cambridge" location="Cambridge, UK" className="h-full" />
            <Photo src={cambridge6} alt="Cambridge" location="Cambridge, UK" className="h-full" />
          </div>

          {/* Row C: wide panorama + portrait */}
          <div className="grid grid-cols-12 gap-3 h-[380px]">
            <Photo src={cambridge7} alt="Cambridge" label="Michaelmas '24" location="Cambridge, UK" className="col-span-5 h-full" />
            <Photo src={cambridge8} alt="Cambridge" location="Cambridge, UK" className="col-span-4 h-full" />
            <Photo src={cambridgeImg} alt="Cambridge" label="King's College" location="Cambridge, UK" className="col-span-3 h-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CINEMATIC DIVIDER — GILP
      ══════════════════════════════ */}
      <div className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img src={gilpMarch3} alt="GILP" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d07]/90 via-[#080d07]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-24 max-w-[1500px] mx-auto">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] text-[#C19842] uppercase mb-5">Global India Leadership Programme</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.0] tracking-tight text-white max-w-2xl">
              One programme.<br />
              <span className="font-serif italic text-[#C19842] font-normal">Two continents.</span>
            </h2>
            <p className="mt-6 text-white/60 text-[15px] max-w-sm leading-relaxed">
              Bringing India's emerging leaders to Cambridge and back with transformed perspectives.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          CH 02 — GILP / INDIA
      ══════════════════════════════ */}
      <section id="india" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <SectionHeader
          eyebrow="Chapter 02"
          title="India Leadership"
          accent="Summit."
          desc="Business leaders across India engaging with global faculty at landmark venues and campuses."
        />

        <div className="flex flex-col gap-3">
          {/* Row A: 3 equal */}
          <div className="grid grid-cols-3 gap-3 h-[320px]">
            {[gilpMarch2, gilpMarch4, gilpMarch5].map((img, i) => (
              <Photo key={i} src={img} alt="GILP India" location="India" className="h-full" />
            ))}
          </div>

          {/* Row B: small + panorama */}
          <div className="grid grid-cols-12 gap-3 h-[420px]">
            <Photo src={gilpMarch6} alt="GILP" label="Summit Plenary" location="New Delhi" className="col-span-4 h-full" />
            <Photo src={gilpMarch7} alt="GILP" location="India" className="col-span-8 h-full" />
          </div>

          {/* Row C: 4 equal */}
          <div className="grid grid-cols-4 gap-3 h-[240px]">
            {[gilpMarch8, gilpMarch9, gilpMarch10, impactNew1].map((img, i) => (
              <Photo key={i} src={img} alt="GILP" location="India" className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CINEMATIC DIVIDER — FINLAND
      ══════════════════════════════ */}
      <div className="relative h-[65vh] min-h-[460px] overflow-hidden">
        <img src={finlandHelsinki} alt="Finland Helsinki" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d07]/50 via-transparent to-[#080d07]" />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-24 pb-16 max-w-[1500px] mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] text-[#C19842] uppercase mb-4">Finland & Helsinki</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white max-w-2xl">
            Innovation at the<br />
            <span className="font-serif italic text-[#C19842] font-normal">edge of the world.</span>
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════
          CH 03 — FINLAND
      ══════════════════════════════ */}
      <section id="finland" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <SectionHeader
          eyebrow="Chapter 03"
          title="Finland,"
          accent="reimagined."
          desc="Executive education in one of the world's most innovative ecosystems — Scandinavia's frontier."
        />

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-12 gap-3 h-[420px]">
            <Photo src={finland1} alt="Finland" label="Helsinki Campus" location="Helsinki, Finland" className="col-span-7 h-full" />
            <div className="col-span-5 flex flex-col gap-3">
              <Photo src={finland2} alt="Finland" location="Finland" className="flex-1" />
              <Photo src={finland3} alt="Finland" location="Finland" className="flex-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 h-[300px]">
            <Photo src={finland4} alt="Finland" location="Finland" className="h-full" />
            <Photo src={finland5} alt="Finland" location="Finland" className="h-full" />
          </div>
        </div>

        {/* BALI sub-chapter */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-[#C19842] block" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#C19842] uppercase">Bali — Indonesia</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[260px]">
            {[bali1, bali2, bali3, bali4].map((img, i) => (
              <Photo key={i} src={img} alt="Bali" location="Bali, Indonesia" className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CINEMATIC DIVIDER — STUDENTS
      ══════════════════════════════ */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={impactNew2} alt="Students" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d07] via-[#080d07]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-24 pb-16 max-w-[1500px] mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] text-[#C19842] uppercase mb-4">Chapter 04 — Student Programmes</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white max-w-2xl">
            The next generation,<br />
            <span className="font-serif italic text-[#C19842] font-normal">at work.</span>
          </h2>
          <p className="mt-4 text-white/60 text-[15px] max-w-md">
            STEM and Entrepreneurship workshops & summer camps for 5,000+ students.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════
          CH 04 — STUDENTS
      ══════════════════════════════ */}
      <section id="students" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <SectionHeader
          eyebrow="STEM & Entrepreneurship"
          title="Young minds,"
          accent="sharp ideas."
          desc="From STEM research workshops to entrepreneurship boot camps, shaping the leaders of tomorrow."
        />

        <div className="flex flex-col gap-3">
          {/* Row A: big + 2 stacked */}
          <div className="grid grid-cols-12 gap-3 h-[440px]">
            <Photo src={stem1Img} alt="STEM" label="STEM Research Workshop" location="Cambridge, UK" className="col-span-8 h-full" />
            <div className="col-span-4 flex flex-col gap-3">
              <Photo src={yusufHImg} alt="Student" label="Young Leaders" location="India" className="flex-1" />
              <Photo src={stemYvesImg} alt="STEM Yves" location="Cambridge, UK" className="flex-1" />
            </div>
          </div>

          {/* Row B: 3 equal */}
          <div className="grid grid-cols-3 gap-3 h-[300px]">
            {[stemAstroImg, siteVisitImg, img0719].map((img, i) => (
              <Photo key={i} src={img} alt="Student programme" location="India / UK" className="h-full" />
            ))}
          </div>

          {/* Row C: 4 equal */}
          <div className="grid grid-cols-4 gap-3 h-[220px]">
            {[img4915, img4929, img5105, img5138].map((img, i) => (
              <Photo key={i} src={img} alt="Student programme" className="h-full" />
            ))}
          </div>

          {/* Row D: panorama */}
          <div className="h-[340px]">
            <Photo src={img5277} alt="Student programme" label="GEL Summer Programme" location="Cambridge, UK" className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PREMIUM CTA
      ══════════════════════════════ */}
      <section className="border-t border-white/[0.05] py-28 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-[#C19842] block" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C19842]">Be Part of the Story</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tight text-white leading-[1.0]">
              Let's build something<br />
              <span className="font-serif italic text-[#C19842]">impactful together.</span>
            </h2>
          </div>
          <div className="shrink-0 flex flex-col gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#C19842] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#080d07] transition-all hover:bg-white"
            >
              Start a Conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── slowZoom keyframe ── */}
      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.14); }
        }
      `}</style>
    </div>
  );
}
