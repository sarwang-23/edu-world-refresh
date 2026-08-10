import { useState } from "react";
import { buildMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Footer } from "./index";

// ── Cambridge / Leadership
import cambridgeImg from "@/assets/cambridge_7.jpg";
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

// ── Misc
import businessLeadersImg from "@/assets/business-leaders.jpg";
import impactNew1 from "@/assets/impact_new_1.jpg";
import impactNew2 from "@/assets/impact_new_2.jpg";
import executiveEducation from "@/assets/executive-education.jpg";
import campusLife1 from "@/assets/campus-life-1.jpg";
import startupImg from "@/assets/startup.jpg";
import studentsGeneral from "@/assets/students.jpg";
import zeroToOneImg from "@/assets/zero-to-one.png";
import heroClassroom from "@/assets/hero-classroom.jpg";

// ── People
import jivikaVikamshi from '@/assets/people/jivika_vikamshi.jpg';
import amarjitSingh from '@/assets/people/amarjit_singh.jpg';
import lindaTang from '@/assets/people/linda_tang.jpg';

import { SharedTestimonials } from '@/components/SharedTestimonials';

const galleryTestimonials = [
  {
    q: "Sometimes life changes on a random Monday afternoon. Mine did - at THE UNIVERSITY OF CAMBRIDGE !!!!! What started as a quiet summer turned into a turning point I didn’t even know I needed. A place, a community, a classroom, conversations and souls that shifted my mind and my path, forever. If there’s one thing this journey taught me, it’s that opportunities like this don’t just appear - they are created by people who believe in the power of education to change lives.",
    a: "Jivika Vikamshi",
    r: "Co-Founder, Manashakti",
    tag: "Summer Immersion",
    img: jivikaVikamshi,
    featured: true,
  },
  {
    q: "Grateful for the practical insights, peer-to-peer learning, and collaborative spirit. Kudos to the Global Education Lab and team for delivering such an impactful programme!",
    a: "Amarjit Singh",
    r: "CEO, India Business Forum",
    tag: "GILP Delegate",
    img: amarjitSingh,
    featured: false,
  },
  {
    q: "Good team vibe, good organisation, like the short content inserts. There aren't many experiences where you can feel yourself changing and growing in real time, but I felt myself growing in confidence and expertise.",
    a: "Linda Tang",
    r: "Science Student",
    tag: "Cambridge",
    img: lindaTang,
    featured: false,
  },
];


export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => buildMeta("/gallery"),
});

/* ─── Reusable photo card ─── */
function Photo({
  src, alt, label, location, className = "",
}: {
  src: string; alt: string; label?: string; location?: string; className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white/5 ${className || ''}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      
      {/* subtle gradient overlay for better text contrast if label/location exist */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {(label || location) && (
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-[80%] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4 shadow-2xl">
            {label && <p className="text-white font-semibold text-[15px] leading-snug tracking-tight">{label}</p>}
            {location && (
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin className="h-3.5 w-3.5 text-[#C19842]" />
                <span className="text-[#C19842] text-[10px] font-bold tracking-[0.2em] uppercase">{location}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeader({ eyebrow, title, accent, desc }: { eyebrow: string; title: string; accent?: string; desc?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-gradient-to-r from-[#C19842] to-transparent block rounded-full" />
        <span className="text-[11px] font-bold tracking-[0.3em] text-[#C19842] uppercase">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-white/95 leading-[1.1]">
        {title}{" "}
        {accent && <span className="font-serif italic text-[#C19842] font-normal drop-shadow-[0_0_15px_rgba(193,152,66,0.25)]">{accent}</span>}
      </h2>
      {desc && <p className="mt-6 text-white/60 text-[16px] leading-relaxed font-light">{desc}</p>}
    </div>
  );
}

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filters = ["All", "Cambridge", "UK", "Students"];

  return (
    <div className="min-h-screen bg-[#080d07] font-sans text-white">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {/* background: single image */}
        <div className="absolute inset-0">
          <img src={cambridge4} alt="Gallery Hero" className="h-full w-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" loading="lazy" />
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
            {[["05", "Countries"], ["20+", "Programmes"], ["150+", "Leaders Trained"], ["5000+", "Learners Engaged"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white">{n}</p>
                <p className="text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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

        {/* Premium Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[300px]">
          <Photo src={cambridge3} alt="Executive Education" label="Executive Education" location="Cambridge, UK" className="col-span-1 md:col-span-2 lg:col-span-8 row-span-2" />
          <Photo src={cambridge2} alt="Cambridge" label="Judge Business School" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={cambridge6} alt="Business Leaders" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={cambridge4} alt="Cambridge" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={campusLife1} alt="Campus Life" location="Cambridge, UK" className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2" />
          <Photo src={cambridge5} alt="Cambridge" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={cambridge7} alt="Cambridge" label="Michaelmas '24" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={cambridge1} alt="Leadership Forum" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
        </div>
      </section>

      {/* ══════════════════════════════
          CINEMATIC DIVIDER — GILP
      ══════════════════════════════ */}
      <div className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img src={gilpMarch1} alt="GILP" className="h-full w-full object-cover" loading="lazy" />
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
          CH 02 — GILP / UK
      ══════════════════════════════ */}
      <section id="india" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <SectionHeader
          eyebrow="Chapter 02"
          title="UK Leadership"
          accent="Summit."
          desc="Business leaders across the UK engaging with global faculty at landmark venues and campuses."
        />

        {/* Premium Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[300px]">
          <Photo src={gilpMarch6} alt="GILP" label="Summit Plenary" location="UK" className="col-span-1 md:col-span-2 lg:col-span-8 row-span-2" />
          <Photo src={gilpMarch2} alt="GILP India" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={gilpMarch5} alt="GILP India" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={gilpMarch4} alt="GILP India" location="UK" className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2" />
          <Photo src={gilpMarch7} alt="GILP" location="UK" className="col-span-1 md:col-span-2 lg:col-span-8 row-span-1" />
          
          <Photo src={gilpMarch8} alt="GILP" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={gilpMarch9} alt="GILP" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
        </div>
      </section>

      {/* ══════════════════════════════
          CINEMATIC DIVIDER — STUDENTS
      ══════════════════════════════ */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={img4915} alt="Students" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d07] via-[#080d07]/40 to-transparent" />
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

        {/* Premium Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[300px]">
          <Photo src={siteVisitImg} alt="STEM Field Trip" label="Site Visit" location="Cambridge, UK" className="col-span-1 md:col-span-2 lg:col-span-8 row-span-2" />
          <Photo src={yusufHImg} alt="Student" label="Young Leaders" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={stemYvesImg} alt="STEM Yves" location="Cambridge, UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={stem1Img} alt="Student programme" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={img0719} alt="Student programme" location="UK" className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2" />
          <Photo src={stemAstroImg} alt="Student programme" location="UK" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={img4929} alt="Student programme" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          <Photo src={img5105} alt="Student programme" className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1" />
          
          <Photo src={img4915} alt="Student programme" className="col-span-1 md:col-span-1 lg:col-span-6 row-span-1" />
          <Photo src={img5138} alt="Student programme" className="col-span-1 md:col-span-1 lg:col-span-6 row-span-1" />
          
          <Photo src={img5277} alt="Student programme" label="GEL Summer Programme" location="Cambridge, UK" className="col-span-1 md:col-span-2 lg:col-span-12 row-span-1" />
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
              to="/contact" search={{ source: "Gallery" }}
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
