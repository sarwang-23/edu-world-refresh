import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
  Trophy,
  Rocket,
  Compass,
  Calendar,
  Globe2,
  Lightbulb,
  Zap,
  ChevronLeft,
  ChevronRight,
  Star,
  Target,
  FlaskConical,
  Sprout,
  Sparkles,
  Award,
  GraduationCap,
  User,
} from "lucide-react";
import { Footer } from "./index";
import { SharedTestimonials } from "@/components/SharedTestimonials";
import cambridgeImg from "../assets/cambridge_7.jpg";
import businessLeadersImg from "../assets/business-leaders.jpg";
import zeroToOneImg from "../assets/zero-to-one.png";
import foodAgriImg from "../assets/food-agri-theme.jpg";
import z21Gallery1 from "../assets/z21_gallery_1.jpg";
import z21Gallery2 from "../assets/z21_gallery_2.jpg";
import z21Gallery3 from "../assets/z21_gallery_3.jpg";
import z21Gallery4 from "../assets/z21_gallery_4.jpg";
import z21Gallery5 from "../assets/z21_gallery_5.jpg";
import z21Gallery6 from "../assets/z21_gallery_6.jpg";
import z21Gallery7 from "../assets/z21_gallery_7.jpg";
import z21Gallery8 from "../assets/z21_gallery_8.jpg";
import z21Gallery9 from "../assets/z21_gallery_9.jpg";
import z21Gallery10 from "../assets/z21_gallery_10.jpg";
import z21Gallery11 from "../assets/z21_gallery_11.jpg";
import z21Gallery12 from "../assets/z21_gallery_12.jpg";
import z21Gallery13 from "../assets/z21_gallery_13.jpg";
import z21Gallery14 from "../assets/z21_gallery_14.jpg";
import z21Gallery15 from "../assets/z21_gallery_15.jpg";
import { useState } from "react";
import logoJBS from "@/assets/cambridge_jbs_official.png";
import logoElab from "@/assets/logo-elab.png";
import foundersImg from "../assets/young_leaders_1.jpg";
import tendaiImg from "../assets/tendai.jpg";
import sydneyImg from "../assets/sydney.jpg";

export const Route = createFileRoute("/programmes/zero-to-one")({
  head: () => buildMeta("/programmes/zero-to-one"),
  component: ZeroToOne,
});

function ZeroToOne() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <StatsMarquee />
      <WhatIsZTO />
      <ThemeSection />
      <WhoShouldApply />
      <BeyondTheWeekend />
      <ProgrammeFormat />
      <CohortGallery />
      <ZeroToOneTestimonials />
      <BottomCTA />
      <Footer />

      {/* Floating Sign Up Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSemAO0dB2CXIv4uDhsOEdp-9k4cDijcyyPOsuRFYOcqRiP1_Q/viewform?usp=sharing&ouid=111821060941100572450"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-full bg-forest-deep px-6 md:px-8 py-4 text-[14px] md:text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-2xl shadow-forest/40 whitespace-nowrap hover:-translate-y-1"
        >
          Sign Up Now
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-0 pb-24 md:pt-0 md:pb-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-2 md:pt-2">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-6">
            {/* eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-gold">
                48-Hour Venture-Building Weekend
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[4rem] font-bold text-forest-deep leading-[1.04] tracking-tight">
              Zero-To-One.
              <br />
              <span className="font-serif italic text-gold">Idea to venture.</span>
            </h1>

            <p className="mt-3 text-[17px] font-bold text-forest-deep">
              In collaboration with King's E-Lab, University of Cambridge
            </p>

            <p className="mt-4 text-[15px] font-medium text-forest/90 leading-snug">
              From raw ideas to incubator-ready ventures in 48 hours.
            </p>
            <p className="mt-3 text-[15px] text-forest/80 leading-[1.75] max-w-lg">
              A practical, high-energy venture-building format hosted at Cambridge Judge Business
              School, in collaboration with King's E-Lab. Challenge your thinking, form a team, and
              leave with a validated direction.
            </p>

            {/* Institutional Co-Branding Badges */}
            <div className="mt-6 pt-5 border-t border-forest/10">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-forest/70 mb-3">
                Delivered in Collaboration With
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {/* Cambridge Judge Business School */}
                <div className="flex items-center justify-start h-28 md:h-40 -my-6 md:-my-12 -ml-3 md:-ml-6 mix-blend-multiply opacity-90">
                  <img
                    src={logoJBS}
                    alt="University of Cambridge Judge Business School"
                    className="w-auto h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* King's E-Lab */}
                <div className="flex items-center justify-start h-10 md:h-12 mb-2 md:mb-3 mix-blend-multiply opacity-90">
                  <img
                    src={logoElab}
                    alt="King's College E-Lab"
                    className="w-auto h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3.5 flex-wrap sm:flex-nowrap items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSemAO0dB2CXIv4uDhsOEdp-9k4cDijcyyPOsuRFYOcqRiP1_Q/viewform?usp=sharing&ouid=111821060941100572450"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 sm:px-8 py-4 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25 whitespace-nowrap shrink-0"
              >
                Sign Up Now
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#format"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 px-6 sm:px-7 py-4 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep backdrop-blur-sm hover:border-forest-deep hover:bg-white transition-all duration-300 whitespace-nowrap shrink-0"
              >
                See Format
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 bg-forest-deep">
              <video
                src="/zerotoone.mp4"
                poster={zeroToOneImg}
                className="w-full h-full object-cover contrast-[1.05] saturate-[1.1]"
                controls
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4 flex justify-end">
              {/* Next Cohort Theme Banner */}
              <a
                href="#theme"
                className="inline-flex items-center gap-3 rounded-xl border border-forest/10 bg-white/50 backdrop-blur-sm px-4 py-3 hover:bg-white hover:border-gold/40 hover:shadow-md transition-all duration-300 group shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(255,215,0,0.6)] shrink-0" />
                <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-3">
                  <div className="flex items-center gap-1.5 xl:border-r xl:border-forest/15 xl:pr-3 shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-forest/70 shrink-0" />
                    <span className="text-[12px] font-bold tracking-[0.15em] text-forest/80 uppercase whitespace-nowrap">
                      23-25 Oct, 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[13px] sm:text-[14px] font-bold text-forest-deep group-hover:text-gold transition-colors whitespace-nowrap">
                      Next Cohort Theme:
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-medium text-forest/80">
                      Food, Agriculture & Planetary Health &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Dot pattern */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 opacity-20 [background-image:radial-gradient(var(--forest)_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS MARQUEE ─────────────────────────────────────────────────────────── */
function StatsMarquee() {
  const stats = [
    { val: "48h", label: "Intensive Format", sub: "Idea to venture direction" },
    { val: "4", label: "Ideas Incubated", sub: "From inaugural cohort" },
    { val: "Spark", label: "Cambridge Incubator", sub: "Placement pipeline" },
    { val: "Food & Agri", label: "October Theme", sub: "Planetary Health Focus" },
    { val: "100%", label: "Form Real Teams", sub: "Across disciplines" },
  ];
  const repeated = [...stats, ...stats, ...stats];
  return (
    <section className="bg-white border-y border-forest/8 overflow-hidden relative z-20 -mt-12">
      <div className="py-10">
        <div className="flex gap-0 animate-marquee" style={{ animationDirection: "reverse" }}>
          {repeated.map((s, i) => (
            <div
              key={i}
              className="text-center px-10 flex-shrink-0 border-r border-forest/10 last:border-r-0 group cursor-default"
            >
              <p className="text-2xl md:text-3xl font-bold text-forest-deep group-hover:text-gold transition-colors duration-300">
                {s.val}
              </p>
              <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-gold mt-2 mb-1">
                {s.label}
              </p>
              <p className="text-[15px] text-forest/80 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT IS ZTO ────────────────────────────────────────────────────────────── */
function WhatIsZTO() {
  const pillars = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Who Participates",
      desc: "Researchers, business students, alumni, early-stage founders and curious builders across disciplines.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "What You Leave With",
      desc: "A validated venture direction, a team, and a pathway to formal incubation or accelerator support.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "How It Works",
      desc: "Fast-paced problem-framing bursts, team formation, AI prototyping, mentor clinics and validation.",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "The Principle",
      desc: "Not to start with the best idea, but to develop founder-thinking: how to find the 'how' inside any 'what'.",
    },
  ];
  return (
    <section className="bg-white py-32 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">
                About Zero-To-One
              </span>
            </div>
            <h2 className="text-[2.2rem] font-bold text-forest-deep mb-6 leading-[1.1]">
              Bridging the ideation gap.
            </h2>
            <p className="text-[15px] text-forest/70 leading-[1.7] mb-5">
              Most incubators and accelerators are designed for teams that already have a defined
              idea, a formed team, early validation and founder confidence.
            </p>
            <p className="text-[15px] font-bold text-forest-deep leading-[1.7] mb-5 p-4 bg-[#F4EFE6] rounded-xl border-l-2 border-gold">
              Zero-to-One fills the stage before that.
            </p>
            <p className="text-[15px] text-forest/70 leading-[1.7]">
              Participants find the hidden 'how' inside an early idea, challenge it through teamwork
              and mentoring, and begin turning uncertainty into validated 'yeses'.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-[1.75rem] p-8 border border-forest/8 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.08)] hover:-translate-y-1 transition-all duration-400 relative overflow-hidden shadow-sm"
                >
                  <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EFE6] text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="text-[15px] text-forest/80 leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── THEME SECTION ──────────────────────────────────────────────────────────── */
function ThemeSection() {
  const ventureAreas = [
    {
      title: "AI + PERSONALISED FOOD",
      desc: "AI for nutrition, personalised food and new consumer experiences.",
    },
    {
      title: "FOOD WASTE + CIRCULARITY",
      desc: "Waste reduction, circular supply chains and smarter use of resources.",
    },
    {
      title: "CLIMATE-SMART AGRICULTURE",
      desc: "Farm productivity, resilience, data and climate adaptation.",
    },
    {
      title: "REGENERATIVE SYSTEMS",
      desc: "Regenerative agriculture, biodiversity and soil health.",
    },
    {
      title: "NEW INGREDIENTS",
      desc: "Alternative proteins, sustainable ingredients and new food formats.",
    },
    {
      title: "BEHAVIOUR + HEALTH",
      desc: "Consumer health, behaviour change and healthier food choices.",
    },
    {
      title: "AGRITECH + PRECISION",
      desc: "AI, sensing, automation and data-enabled farming.",
    },
    {
      title: "PACKAGING + DISTRIBUTION",
      desc: "Sustainable packaging, logistics and distribution innovation.",
    },
  ];
  return (
    <section id="theme" className="pt-12 md:pt-16 pb-10 md:pb-12 bg-forest-deep relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-gold">
                October Theme
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cream/60 border border-white/15 bg-white/5 px-2.5 py-0.5 rounded-full">
                📅 23–25 October, 2026
              </span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white mb-4 leading-tight">
              Food, Agriculture &<br />
              Planetary Health
            </h2>
            <p className="text-[14.5px] text-cream/75 leading-[1.7] mb-6 max-w-lg">
              We are in the midst of a climate emergency, and our agrifood systems urgently need
              impactful innovations to mitigate and adapt to growing challenges. This venture-creation
              theme brings together health, climate, biology, food systems, sustainability, agriculture,
              AI, supply chains, behaviour change and commercial innovation to develop practical
              solutions with the potential for meaningful real-world impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ventureAreas.map((area, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] border-l-[3px] border-l-gold transition-all duration-300 p-3.5 cursor-default flex flex-col justify-center"
                >
                  <h4 className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-white">
                    {area.title}
                  </h4>
                  <p className="text-[12px] text-cream/75 leading-relaxed mt-1">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[440px]">
            <div className="h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/40 border border-white/10 relative group">
              <img
                src={foodAgriImg}
                alt="Theme"
                className="w-full h-full object-cover object-[80%_center] block opacity-80 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 mb-3 bg-gold/15 backdrop-blur-sm border border-gold/30 px-3 py-1 rounded-full">
                  <Sprout className="h-4 w-4 text-gold" />
                  <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold">
                    Why This Theme
                  </p>
                </div>
                <p className="text-white text-[14.5px] leading-[1.6] font-medium">
                  Global food systems are under pressure from climate change, population growth, and
                  shifting consumer expectations — creating the largest venture opportunity of the
                  decade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars / System Drivers */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] p-4.5 border-l-[4px] border-l-[#4CAF50] transition-all duration-300">
            <h4 className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#81C784] mb-1.5">
              System Pressure
            </h4>
            <p className="text-[13.5px] text-cream/80 leading-relaxed">
              Food systems face climate, health, and resource constraints and need to balance conservation of biodiversity.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] p-4.5 border-l-[4px] border-l-[#AB47BC] transition-all duration-300">
            <h4 className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#CE93D8] mb-1.5">
              Cambridge Talent
            </h4>
            <p className="text-[13.5px] text-cream/80 leading-relaxed">
              Research and entrepreneurial talent can generate scientific, commercial and social impact.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] p-4.5 border-l-[4px] border-l-[#4CAF50] transition-all duration-300">
            <h4 className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#81C784] mb-1.5">
              Real Problems
            </h4>
            <p className="text-[13.5px] text-cream/80 leading-relaxed">
              Industry challenges can help teams focus on relevant, deployable and impactful opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BEYOND THE WEEKEND ─────────────────────────────────────────────────────── */
function BeyondTheWeekend() {
  return (
    <section className="bg-white py-24 md:py-28 border-t border-forest/5 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-gold">
              Beyond The Weekend
            </span>
            <div className="h-px w-8 bg-gold md:hidden" />
          </div>
          <h2 className="text-[2.25rem] md:text-[3.25rem] font-bold text-forest-deep leading-[1.12] mb-5 max-w-4xl tracking-tight">
            A 48-hour programme designed to create a{" "}
            <span className="font-serif italic text-gold">beginning.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-forest/75 leading-[1.75] max-w-3xl">
            The strongest teams can leave Zero-to-One with a clearer route into mentoring, incubation,
            partnerships, pilots and further venture development.
          </p>
        </div>

        {/* 2 Opportunity Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: Accelerate Cambridge Mentoring */}
          <div className="group relative bg-white rounded-2xl p-7 md:p-8 border border-forest/10 border-t-4 border-t-emerald-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-[19px] md:text-[21px] font-bold text-forest-deep mb-3 leading-snug">
                Accelerate Cambridge mentoring
              </h3>
              <p className="text-[14.5px] text-forest/75 leading-[1.65] mb-5">
                The winning team will receive mentoring sessions from Accelerate Cambridge mentors to help develop a post-Venture Creation Action Plan.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#EDF5F0] border-l-2 border-emerald-600 text-[13px] font-semibold text-forest-deep">
              That plan may include applying to a future Accelerate cohort.
            </div>
          </div>

          {/* Card 2: King's E-Lab Spark Opportunity */}
          <div className="group relative bg-white rounded-2xl p-7 md:p-8 border border-forest/10 border-t-4 border-t-[#5B2068] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-[19px] md:text-[21px] font-bold text-forest-deep mb-3 leading-snug">
                King's E-Lab Spark opportunity
              </h3>
              <p className="text-[14.5px] text-forest/75 leading-[1.65] mb-5">
                A further award offers the chance to win a place on the King's E-Lab Spark Incubator, creating another pathway for a promising venture to continue after the weekend.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F5EDF7] border-l-2 border-[#5B2068] text-[13px] font-semibold text-forest-deep">
              Creating another pathway for a promising venture to continue after the weekend.
            </div>
          </div>
        </div>

        {/* Proven Pathway Stats Card */}
        <div className="mb-8">
          <div className="text-center md:text-left mb-3">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.22em] text-[#5B2068]">
              Proven Pathway From The Inaugural Zero-To-One
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
            {/* Col 1 */}
            <div className="bg-[#EDF5F0] p-6 md:p-8 text-center flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-forest/10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest-deep mb-2 font-normal">
                10
              </span>
              <p className="text-[13.5px] text-forest/80 font-medium leading-snug max-w-[200px]">
                venture ideas emerged
              </p>
            </div>
            {/* Col 2 */}
            <div className="bg-[#F5EDF7] p-6 md:p-8 text-center flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-forest/10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#5B2068] mb-2 font-normal">
                4
              </span>
              <p className="text-[13.5px] text-forest/80 font-medium leading-snug max-w-[200px]">
                offered places on the Spark Incubator
              </p>
            </div>
            {/* Col 3 */}
            <div className="bg-[#FCF8EE] p-6 md:p-8 text-center flex flex-col items-center justify-center border-t-2 md:border-t-0 border-[#D97706]/40">
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#92400E] mb-2 font-normal">
                2
              </span>
              <p className="text-[13.5px] text-forest/80 font-medium leading-snug max-w-[220px]">
                teams supported toward partnerships and pilots
              </p>
            </div>
          </div>
        </div>

        {/* The Weekend is the Starting Line Banner */}
        <div className="rounded-2xl bg-[#08180E] py-7 px-6 md:py-8 md:px-10 text-center text-white relative overflow-hidden shadow-lg border border-forest/25">
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-[15px] md:text-[17px] font-bold uppercase tracking-[0.2em] text-gold mb-2">
              The Weekend Is The Starting Line.
            </h3>
            <p className="text-[13.5px] md:text-[14.5px] text-white/85 leading-relaxed font-normal">
              Build something credible enough to know what the next experiment, mentor conversation or application should be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAMME FORMAT ───────────────────────────────────────────────────────── */
function ProgrammeFormat() {
  const schedule = [
    {
      day: "Day 1 · Friday",
      date: "Day 1",
      sessions: [
        {
          time: "Evening",
          title: "Arrival & Registration",
          desc: "Check-in at Cambridge Judge Business School. Opening reception with mentors and peers.",
        },
        {
          time: "Night",
          title: "Networking",
          desc: "Meet your cohort, mentors and Cambridge ecosystem leaders.",
        },
      ],
    },
    {
      day: "Day 2 · Saturday",
      date: "Day 2",
      sessions: [
        {
          time: "9:00am",
          title: "Problem-Finding Sprints",
          desc: "Facilitated sessions to surface real problems within the theme. Move from interest to insight.",
        },
        {
          time: "12:00pm",
          title: "Team Formation",
          desc: "Form interdisciplinary teams of 3–5. Chemistry over credentials.",
        },
        {
          time: "2:00pm",
          title: "AI Prototyping Workshop",
          desc: "Use AI tools to rapidly prototype product concepts, business models and user journeys.",
        },
        {
          time: "5:00pm",
          title: "Mentor Clinics",
          desc: "One-to-one and small group sessions with Cambridge academics and venture mentors.",
        },
        {
          time: "Evening",
          title: "Team Working Sessions",
          desc: "Open workshop space with facilitated support. Build your pitch narrative.",
        },
      ],
    },
    {
      day: "Day 3 · Sunday",
      date: "Day 3",
      sessions: [
        {
          time: "9:00am",
          title: "Final Preparation",
          desc: "Polish your venture story. Final mentor feedback rounds.",
        },
        {
          time: "11:00am",
          title: "Venture Pitches",
          desc: "Present your venture direction to a panel of investors, academics and ecosystem leaders.",
        },
        {
          time: "2:00pm",
          title: "Panel Feedback & Awards",
          desc: "Structured feedback from the panel. Recognition of standout ventures.",
        },
        {
          time: "3:30pm",
          title: "Ecosystem Introductions",
          desc: "Warm introductions to the Cambridge incubation ecosystem, including Spark Incubator.",
        },
        {
          time: "4:30pm",
          title: "Closing Celebration",
          desc: "Celebrate the work done and the relationships built.",
        },
      ],
    },
  ];
  const [activeDay, setActiveDay] = useState(0);
  const day = schedule[activeDay];
  return (
    <section
      id="format"
      className="bg-forest-deep py-24 md:py-32 relative overflow-hidden text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">
              Programme Format
            </span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
            48 hours — structured for <span className="font-serif italic text-gold">velocity.</span>
          </h2>
        </div>

        <div className="flex gap-4 mb-10 flex-wrap">
          {schedule.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={
                "rounded-full px-7 py-3.5 text-[14px] md:text-[15px] font-bold uppercase tracking-[0.15em] transition-all duration-300 " +
                (activeDay === i
                  ? "bg-gold text-forest-deep shadow-[0_8px_24px_rgba(197,160,89,0.3)] scale-[1.02]"
                  : "bg-white/5 border border-white/15 text-white/80 hover:border-gold/50 hover:bg-white/10 hover:text-white backdrop-blur-sm")
              }
            >
              {d.day.split(" · ")[0]}
            </button>
          ))}
        </div>

        <div className="bg-[#0c2014]/90 rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.35)] relative overflow-hidden backdrop-blur-md">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-[70px]" />

          <div className="mb-8 flex items-baseline gap-4 relative z-10">
            <h3 className="text-[22px] md:text-[24px] font-bold text-white">{day.day}</h3>
            <p className="text-[14px] md:text-[15px] text-gold font-bold uppercase tracking-widest">{day.date}</p>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {day.sessions.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row gap-4 md:gap-8 bg-white/[0.05] hover:bg-white/[0.09] rounded-2xl p-6 border border-white/10 hover:border-gold/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <div className="md:w-32 shrink-0 pt-0.5">
                  <p className="text-[14px] md:text-[15px] font-bold text-gold uppercase tracking-[0.15em]">
                    {s.time}
                  </p>
                </div>
                <div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h4>
                  <p className="text-[14.5px] text-cream/70 leading-[1.65] font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHO SHOULD APPLY ───────────────────────────────────────────────────────── */
function WhoShouldApply() {
  const profiles = [
    {
      title: "RESEARCHERS + SCIENTISTS",
      desc: "Explore how research insight or an important problem might translate into real-world impact.",
      border: "border-l-[#2E7D32]",
      titleColor: "text-[#2E7D32]",
    },
    {
      title: "STUDENTS + ALUMNI",
      desc: "Contribute fresh thinking, sector knowledge, research or business skills.",
      border: "border-l-[#7B1FA2]",
      titleColor: "text-[#7B1FA2]",
    },
    {
      title: "ASPIRING + EARLY-STAGE FOUNDERS",
      desc: "Challenge an early direction before investing heavily in it.",
      border: "border-l-[#2E7D32]",
      titleColor: "text-[#2E7D32]",
    },
    {
      title: "OPERATORS + INDUSTRY PROFESSIONALS",
      desc: "Bring real-world context, customer understanding and sector experience.",
      border: "border-l-[#7B1FA2]",
      titleColor: "text-[#7B1FA2]",
    },
    {
      title: "TECHNICAL BUILDERS + AI TALENT",
      desc: "Prototype quickly and test what technology can make possible.",
      border: "border-l-[#2E7D32]",
      titleColor: "text-[#2E7D32]",
    },
    {
      title: "DESIGN + COMMERCIAL TALENT",
      desc: "Shape users, value propositions, business models and compelling pitches.",
      border: "border-l-[#7B1FA2]",
      titleColor: "text-[#7B1FA2]",
    },
  ];

  return (
    <section className="bg-[#F4EFE6] py-20 md:py-24 relative overflow-hidden border-t border-forest/5">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-gold">
              Who Should Apply?
            </span>
            <div className="h-px w-8 bg-gold md:hidden" />
          </div>
          <h2 className="text-[2.2rem] md:text-[2.85rem] font-bold text-forest-deep leading-tight mb-5 max-w-3xl">
            Bring your expertise, curiosity or an important problem.
          </h2>
          <p className="text-[15px] md:text-[16px] text-forest/80 leading-[1.8] max-w-4xl">
            Zero-to-One is designed to bring together diverse disciplines, experiences and perspectives.
            Participants may arrive with an early interest, a research insight, lived experience of a challenge,
            or simply a desire to contribute to an emerging venture. The programme creates a collaborative
            space to explore, challenge and develop ambitious ideas with the potential to become
            game-changing solutions for the future of our agrifood system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {profiles.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-forest/8 bg-white hover:border-gold/30 hover:shadow-md shadow-sm p-6 border-l-[4px] ${p.border} transition-all duration-300 flex flex-col justify-center`}
            >
              <h3 className={`text-[13px] font-bold uppercase tracking-[0.08em] ${p.titleColor} mb-2`}>
                {p.title}
              </h3>
              <p className="text-[14px] text-forest/75 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────────── */
/* ─── COHORT GALLERY ─── */
function CohortGallery() {
  const images = [
    z21Gallery1,
    z21Gallery2,
    z21Gallery3,
    z21Gallery5,
    z21Gallery6,
    z21Gallery7,
    z21Gallery8,
    z21Gallery9,
    z21Gallery10,
    z21Gallery11,
    z21Gallery12,
    z21Gallery13,
    z21Gallery14,
    z21Gallery15,
  ];
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="bg-white py-24 border-t border-forest/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[0.24em] text-gold-deep bg-gold/10 px-4 py-1.5 rounded-full mb-3">
            Programme Gallery
          </span>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold text-forest-deep leading-tight">
            Moments from Zero-to-One Ideation Weekend
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, visibleCount).map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-forest/8 aspect-[4/3] bg-forest-deep/5"
            >
              <img
                src={img}
                alt={`Zero to One Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[13px] font-bold tracking-wider uppercase bg-gold/90 text-forest-deep px-3 py-1 rounded-full backdrop-blur-sm shadow">
                  Zero-to-One Ideation
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, images.length))}
              className="inline-flex items-center gap-2 bg-forest-deep text-white px-8 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-[0.15em] hover:bg-gold hover:text-forest-deep transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Load More Photos <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── BOTTOM CTA ─────────────────────────────────────────────────────────────── */
function BottomCTA() {
  return (
    <section className="bg-forest-deep py-32 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Sparkles key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">
            Join the Next Cohort
          </span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2.2rem] md:text-[3.2rem] font-bold text-white leading-[1.08] tracking-tight">
          Turn your curiosity into a venture.
        </h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-[1.75] max-w-xl mx-auto">
          Join Zero-to-One this June at Cambridge and build a venture from the ground up in 48
          hours.
        </p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSemAO0dB2CXIv4uDhsOEdp-9k4cDijcyyPOsuRFYOcqRiP1_Q/viewform?usp=sharing&ouid=111821060941100572450"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25"
          >
            Sign Up Now
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <Link
            to="/contact"
            search={{ source: "Zero-to-One Ideation Weekend (Bottom CTA)" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─────────────────────────────────────────────────────────── */
function ZeroToOneTestimonials() {
  const testimonials = [
    {
      q: "The 48 hours pushed me to think about a problem I knew scientifically from a completely different angle, as a market structure failure, not just a research gap. That reframe was th...",
      a: "Sydney Conner",
      r: "PhD in Biomedical...",
      tag: "ZERO-TO-ONE",
      img: sydneyImg,
    },
    {
      q: "What I liked most about GEL Zero-to-One was the ability to work with mentors as they really helped transform and learn new skills and ways of thinking. It helped me refine my idea by making me thin...",
      a: "Tendai Nzonzo",
      r: "Winning Team, Sana AI",
      tag: "ZERO-TO-ONE",
      img: tendaiImg,
    },
  ];

  return (
    <section className="bg-[#F4EFE6] py-24 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">
              What They Say
            </span>
            <div className="h-px w-8 bg-gold md:hidden" />
          </div>
          <h2 className="text-[2.75rem] md:text-[3.25rem] font-bold text-forest-deep leading-tight tracking-tight">
            Voices from Our <span className="italic font-serif text-forest">Community</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white p-10 border border-forest/8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[420px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="bg-forest-deep text-white text-[12px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full shadow-sm">
                    {t.tag}
                  </span>
                </div>
                <span className="block text-[5rem] text-gold/40 font-serif leading-none -mt-2 -ml-2 select-none group-hover:text-gold/60 transition-colors duration-300">
                  "
                </span>
                <p className="text-[18px] md:text-[19px] text-forest-deep/90 leading-[1.65] font-medium -mt-4 mb-8">
                  {t.q}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-forest/8 group-hover:bg-gold/30 transition-colors duration-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest-deep/10 border border-forest/15 overflow-hidden shrink-0">
                    <img
                      src={t.img}
                      alt={t.a}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-forest-deep">{t.a}</p>
                    <p className="text-[12px] text-forest/70 uppercase tracking-[0.15em] mt-0.5">
                      {t.r}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
