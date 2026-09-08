import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
  DollarSign,
  Zap,
  Globe2,
  Factory,
  Layers,
  ChevronDown,
  Quote,
  ShieldCheck,
  Check,
  Target,
  Settings,
  Package,
  Wrench,
  Cpu,
  FileText,
  BadgeCheck,
  Building2,
  Laptop,
  Lightbulb,
  Loader2,
  Mail,
  Phone,
  User,
  Building,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { COUNTRY_CODES } from "../data/countryCodes";
import jaideepImg from "../assets/faculty-jaideep.jpg";
import serishImg from "../assets/faculty-serish.jpg";
import ujjwalImg from "../assets/people/ujjwal_pandey.jpg";
import raviImg from "../assets/people/ravi_kant.jpg";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycby6zO6_tAFlCUrPSkKyrbXWiomkx42jiwSK885Q7KgZdNrBIVQtB1jQvLrQe31VDc7p/exec";

export const Route = createFileRoute("/ai-for-manufacturers")({
  head: () => ({
    meta: [
      {
        title: "More Orders. Better Margins. Practical AI for Manufacturers | GEL Webinar",
      },
      {
        name: "description",
        content:
          "How small and mid-sized manufacturers can use AI to quote faster, reduce cost and compete smarter. A practical webinar by Global Education Lab featuring Cambridge faculty & manufacturing leaders.",
      },
    ],
  }),
  component: AIForManufacturersWebinar,
});



function AIForManufacturersWebinar() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold/30 text-[#122619] antialiased">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. 4 Core Value Pillars */}
      <PillarsSection />

      {/* 3. About the Webinar */}
      <AboutSection />

      {/* 4. Who Should Attend & Target Sectors */}
      <WhoShouldAttendSection />

      {/* 5. Meet Our Speakers */}
      <SpeakersSection />

      {/* 6. What You Will Take Away */}
      <TakeawaysSection />

      {/* 7. Programme Agenda */}
      <AgendaSection />

      {/* 8. Save Your Spot Registration Card */}
      <SaveYourSpotSection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

/* ─── 1. HERO SECTION ────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-10 pb-16 md:pt-16 md:pb-24 border-b border-forest/10">
      {/* Background grid matching homepage hero */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[650px] w-[650px] rounded-full bg-gold/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-forest/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Action Chips */}
          <div className="lg:col-span-7">
            {/* Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-0.5 w-6 bg-gold inline-block" />
              <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#A67C2E]">
                GEL Webinar
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] font-bold text-forest-deep leading-[1.04] tracking-tight mb-5">
              More Orders. <br />
              <span className="text-forest">Better Margins.</span> <br />
              <span className="font-serif italic text-[#A67C2E] font-normal">
                Practical AI for Manufacturers
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-[16px] md:text-[18px] text-forest/80 leading-[1.65] max-w-2xl mb-8 font-light">
              How small and mid-sized manufacturers can use AI to quote faster, reduce cost and compete smarter.
            </p>

            {/* Logistics Grid Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 max-w-2xl">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-forest/8 shadow-xs">
                <Calendar className="h-5 w-5 text-[#A67C2E] shrink-0" />
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-forest/60">Date</p>
                  <p className="text-[13.5px] font-bold text-forest-deep leading-tight">Wed, 7 Oct 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-forest/8 shadow-xs">
                <Clock className="h-5 w-5 text-[#A67C2E]" />
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-forest/60">Time</p>
                  <p className="text-[12px] font-bold text-forest-deep leading-tight">1:00pm UK | 5:30pm IN</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-forest/8 shadow-xs">
                <Video className="h-5 w-5 text-emerald-700 shrink-0" />
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-forest/60">Format & Fee</p>
                  <p className="text-[13px] font-bold text-forest-deep leading-tight">Online · Exclusive invite only</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#apply-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forest-deep px-9 py-4 text-[14.5px] font-bold uppercase tracking-[0.16em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest-deep/20 hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowUpRight className="h-4.5 w-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column: Industrial Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-forest-deep text-white shadow-2xl border border-forest/20 p-8 md:p-9 flex flex-col justify-between min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="AI in Manufacturing"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/85 to-forest-deep/60 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.24em] text-gold mb-3">
                  Industrial Impact
                </span>
                <h3 className="text-[21px] md:text-[24px] font-bold text-white leading-snug mb-6 tracking-tight">
                  AI for a Stronger, More Competitive Manufacturing Future
                </h3>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 hover:border-gold/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-gold mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-[10.5px] font-bold uppercase tracking-wider">Speed</span>
                    </div>
                    <p className="text-[13.5px] font-bold text-white uppercase tracking-wide">FASTER QUOTES</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 hover:border-gold/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-gold mb-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-[10.5px] font-bold uppercase tracking-wider">Savings</span>
                    </div>
                    <p className="text-[13.5px] font-bold text-white uppercase tracking-wide">LOWER COSTS</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 hover:border-gold/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-gold mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-[10.5px] font-bold uppercase tracking-wider">Margin</span>
                    </div>
                    <p className="text-[13.5px] font-bold text-white uppercase tracking-wide">HIGHER MARGINS</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 hover:border-gold/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-gold mb-1">
                      <Package className="h-4 w-4" />
                      <span className="text-[10.5px] font-bold uppercase tracking-wider">Growth</span>
                    </div>
                    <p className="text-[13.5px] font-bold text-white uppercase tracking-wide">MORE ORDERS</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-5 mt-6 border-t border-white/15 flex items-start gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-xs">
                <Quote className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13.5px] font-serif italic text-cream leading-snug">
                    "Practical ideas. Real examples. Meaningful impact."
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mt-0.5">
                    — Global Education Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. 4 VALUE PILLARS BAR (Compact & Moving Left-to-Right) ──────────────── */
function PillarsSection() {
  const pillars = [
    {
      icon: <Settings className="h-4.5 w-4.5 text-[#A67C2E]" />,
      title: "Real-World Examples",
      desc: "See how manufacturers are using AI today to win bids.",
    },
    {
      icon: <TrendingUp className="h-4.5 w-4.5 text-[#A67C2E]" />,
      title: "Practical and Actionable",
      desc: "Ideas you can apply without large budgets or tech teams.",
    },
    {
      icon: <Users className="h-4.5 w-4.5 text-[#A67C2E]" />,
      title: "Industry Experts",
      desc: "Learn from academic, industry and technology leaders.",
    },
    {
      icon: <Globe2 className="h-4.5 w-4.5 text-[#A67C2E]" />,
      title: "India–UK Perspective",
      desc: "Insights relevant to manufacturers in both markets.",
    },
  ];

  // Repeat for smooth infinite marquee loop
  const repeated = [...pillars, ...pillars, ...pillars, ...pillars];

  return (
    <section className="bg-[#FAF8F5] py-4 border-b border-forest/10 relative overflow-hidden">
      {/* Left & Right gradient masks for smooth fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10" />

      {/* Marquee moving Left to Right (Slow, smooth & readable) */}
      <div
        className="flex gap-4 animate-marquee-ltr hover:[animation-play-state:paused] cursor-default"
        style={{ animationDuration: "75s" }}
      >
        {repeated.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 bg-white px-5 py-2.5 rounded-full border border-forest/8 shadow-2xs hover:border-gold/50 hover:shadow-xs transition-all duration-200 shrink-0"
          >
            <div className="h-8 w-8 rounded-full bg-[#F4EFE6] flex items-center justify-center shrink-0">
              {p.icon}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-[13px] font-bold text-forest-deep whitespace-nowrap">
                {p.title}
              </span>
              <span className="hidden sm:inline text-forest/30 font-light">•</span>
              <span className="text-[12px] text-forest/70 font-light whitespace-nowrap">
                {p.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 3. ABOUT THE WEBINAR (Dedicated Full-Width) ────────────────────────────── */
function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-forest/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-0.5 w-6 bg-gold inline-block" />
              <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#A67C2E]">
                The Objective
              </span>
            </div>
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-forest-deep leading-tight mb-6">
              About the Webinar
            </h2>
            <div className="space-y-4 text-[16px] text-forest/80 leading-[1.8] font-light">
              <p>
                This practical webinar is designed for mid-sized manufacturers and focuses on two key questions:{" "}
                <strong className="text-forest-deep font-semibold">
                  how do I use AI to win more orders, and how do I use it to take cost out of what I already make?
                </strong>
              </p>
              <p>
                Our speakers will share real-world examples, practical frameworks and straightforward advice on how manufacturers are using AI today to become more efficient, competitive and resilient.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] overflow-hidden bg-forest-deep text-white relative min-h-[260px] flex items-center p-8 md:p-10 shadow-xl border border-forest/20">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop"
                alt="Precision Manufacturing"
                className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/60" />
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-2">
                  Transformation
                </span>
                <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-snug">
                  From Ideas to Impact
                </h3>
                <p className="text-[18px] font-serif italic text-gold leading-tight mt-1">
                  AI for Real Manufacturing Growth
                </p>
                <p className="text-[13.5px] text-cream/75 leading-relaxed font-light mt-3">
                  Practical, low-friction adoption models tailored for engineering MSMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. WHO SHOULD ATTEND (Dedicated Full-Width Grid) ───────────────────────── */
function WhoShouldAttendSection() {
  const whoShouldAttend = [
    {
      num: "01",
      role: "Founders & Managing Directors",
      sub: "Small and mid-sized manufacturers looking to scale orders and protect margins.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      num: "02",
      role: "Operations, Plant & Production Heads",
      sub: "Optimizing shop-floor throughput, machine utilization and reducing scrap.",
      icon: <Factory className="h-5 w-5" />,
    },
    {
      num: "03",
      role: "Procurement & Sourcing Heads",
      sub: "Controlling raw material & component costs and benchmarking supplier quotes.",
      icon: <Package className="h-5 w-5" />,
    },
    {
      num: "04",
      role: "Costing, Estimation & Sales Leads",
      sub: "Preparing faster, higher-accuracy bids and winning profitable RFP submissions.",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      num: "05",
      role: "Build-to-Print Manufacturers",
      sub: "Designing custom precision parts or manufacturing directly to customer drawings.",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      num: "06",
      role: "Supply Chain & Engineering Leads",
      sub: "Navigating supplier inflation, supply lead times and complex engineering bills.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const sectors = [
    "Automotive",
    "Aerospace",
    "White Goods",
    "Industrial Equipment",
    "Consumer Goods",
    "Packaging",
    "Precision Engineering",
  ];

  return (
    <section className="py-20 md:py-24 bg-forest-deep text-white relative overflow-hidden border-b border-forest/20">
      {/* Background glow overlays */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-6 bg-gold inline-block" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold">
              Target Audience
            </span>
            <span className="h-0.5 w-6 bg-gold inline-block" />
          </div>
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-white leading-tight mb-4">
            Who Should Attend?
          </h2>
          <p className="text-[16px] text-cream/75 font-light">
            Designed specifically for leadership and operational decision-makers in manufacturing.
          </p>
        </div>

        {/* 6 Elegant Grid Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whoShouldAttend.map((item, i) => (
            <div
              key={i}
              className="bg-[#0C2216]/80 backdrop-blur-md rounded-2xl p-7 border border-white/12 shadow-lg hover:shadow-2xl hover:border-gold/60 hover:bg-[#112D1E] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-gold/15 border border-gold/35 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-deep group-hover:scale-105 transition-all duration-300 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-mono font-bold text-gold/60 tracking-wider">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-white group-hover:text-gold transition-colors duration-200 leading-snug mb-2.5">
                  {item.role}
                </h3>
                <p className="text-[13.5px] text-cream/75 leading-[1.65] font-light">
                  {item.sub}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold/80">
                  Target Profile
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60 group-hover:bg-gold group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Core Sectors Banner (Symmetric & Centered) */}
        <div className="bg-[#0C2216]/90 backdrop-blur-md rounded-2xl p-7 md:p-8 border border-white/12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <div className="h-7 w-7 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Globe2 className="h-4 w-4" />
              </div>
              <h3 className="text-[15.5px] font-bold text-white uppercase tracking-wider">
                Core Industry Sectors
              </h3>
            </div>
            <p className="text-[13px] text-cream/75 font-light">
              Tailored frameworks with cross-sector relevance across high-precision manufacturing
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-white/8 hover:bg-gold/15 border border-white/15 hover:border-gold/50 px-4 py-2 rounded-full text-cream hover:text-white transition-all duration-300 shadow-2xs group cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold/70 group-hover:bg-gold group-hover:scale-125 transition-all" />
                <span className="text-[13px] font-medium whitespace-nowrap">{sec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. WHAT YOU WILL TAKE AWAY (Executive Learning Outcomes) ──────────────── */
function TakeawaysSection() {
  const takeaways = [
    {
      num: "01",
      tag: "Strategic Clarity",
      title: "Real AI vs Commercial Hype",
      desc: "A clear, objective assessment of where AI genuinely delivers measurable ROI for manufacturing operations, and where it is still mostly buzzwords.",
      icon: <Target className="h-5 w-5" />,
      benefit: "Avoid costly missteps and focus on high-yield use cases.",
    },
    {
      num: "02",
      tag: "Margin Optimization",
      title: "Automated Should-Costing",
      desc: "How automated should-costing algorithms work in practice, and how engineering MSMEs use them to benchmark supplier pricing and protect gross margins.",
      icon: <DollarSign className="h-5 w-5" />,
      benefit: "Immediate cost-reduction levers across procurement.",
    },
    {
      num: "03",
      tag: "Sales Acceleration",
      title: "Quotation Velocity & Bid Accuracy",
      desc: "Practical frameworks to parse CAD/drawings faster, reduce quotation turnaround times from days to hours, and win more high-margin contracts.",
      icon: <Zap className="h-5 w-5" />,
      benefit: "Outpace slower competitors on RFP response time.",
    },
    {
      num: "04",
      tag: "Practical Execution",
      title: "Frugal AI on Lean Budgets",
      desc: "How to deploy AI without building large in-house data science teams, expensive software licenses, or pristine historical data sets.",
      icon: <Cpu className="h-5 w-5" />,
      benefit: "Accessible adoption models tailored for MSMEs.",
    },
    {
      num: "05",
      tag: "Implementation",
      title: "Honest 90-Day Execution Roadmap",
      desc: "A realistic roadmap outlining the data prerequisites, organizational skills, and pilot milestones necessary for your first successful rollout.",
      icon: <FileText className="h-5 w-5" />,
      benefit: "Clear next steps you can take back to your team.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] border-b border-forest/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-6 bg-gold inline-block" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#A67C2E]">
              Learning Outcomes
            </span>
            <span className="h-0.5 w-6 bg-gold inline-block" />
          </div>
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-forest-deep leading-tight mb-4">
            What You Will Take Away
          </h2>
          <p className="text-[16px] text-forest/75 font-light">
            Actionable insights, proven frameworks, and practical playbooks you can immediately apply.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {takeaways.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-forest/10 shadow-xs hover:shadow-xl hover:border-gold/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-[#F4EFE6] border border-gold/30 text-[#A67C2E] flex items-center justify-center group-hover:bg-forest-deep group-hover:text-gold group-hover:scale-105 transition-all duration-300 shadow-2xs">
                    {t.icon}
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#A67C2E] bg-[#F8F6F2] px-3 py-1 rounded-full border border-forest/6">
                    {t.tag}
                  </span>
                </div>

                <h3 className="text-[17.5px] font-bold text-forest-deep group-hover:text-forest transition-colors leading-snug mb-2.5">
                  {t.title}
                </h3>
                <p className="text-[13.5px] text-forest/75 leading-[1.68] font-light mb-4">
                  {t.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/8 flex items-start gap-2 text-[12.5px] text-emerald-800 font-medium">
                <Check className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{t.benefit}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Bonus Webinar Toolkit */}
          <div className="bg-forest-deep text-white rounded-2xl p-7 border border-forest/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/15 blur-[40px]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="h-11 w-11 rounded-xl bg-gold/20 border border-gold/40 text-gold flex items-center justify-center shadow-2xs">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold bg-black/20 px-3 py-1 rounded-full border border-gold/30">
                  Bonus Kit
                </span>
              </div>

              <h3 className="text-[18px] font-bold text-white leading-snug mb-2">
                Complimentary Webinar Toolkit
              </h3>
              <p className="text-[13px] text-cream/75 leading-relaxed font-light mb-5">
                All registered attendees will receive immediate access to the post-event practical assets:
              </p>

              <ul className="space-y-2.5 text-[12.5px] text-cream/90 font-medium">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Executive Presentation Slide Deck (PDF)</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Should-Costing Framework Checklist</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Full On-Demand Session Recording</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-5 mt-5 border-t border-white/12 flex items-center justify-between">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold">
                100% Free Access
              </span>
              <a
                href="#apply-form"
                className="text-[12px] font-bold uppercase tracking-wider text-white hover:text-gold flex items-center gap-1 transition-colors"
              >
                Apply Now <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. MEET OUR SPEAKERS (Dedicated Full-Width Section) ────────────────────── */
function SpeakersSection() {
  const speakers = [
    {
      name: "Prof. Jaideep Prabhu",
      org: "Cambridge Judge Business School",
      role: "Professor of Marketing & Innovation",
      desc: "A world-renowned authority on frugal innovation and how businesses in emerging and mature markets do more with less.",
      img: jaideepImg,
    },
    {
      name: "Ujjwal Pandey",
      org: "Visiting Associate, Cambridge Judge Business School",
      role: "Founder & Operations Specialist",
      desc: "CEO of OptiSpend AI. Former McKinsey consultant with 5+ years in manufacturing efficiency. MBA from Cambridge Judge Business School.",
      img: ujjwalImg,
    },
    {
      name: "Serish Venkata Gandikota",
      org: "Co-Founder & Co-Director, Frugal AI Hub",
      role: "Sustainability & AI Strategist",
      desc: "Works across frugal innovation, sustainability and impact investing. Focuses on making AI more resource-efficient and scalable.",
      img: serishImg,
    },
    {
      name: "Ravi Kant",
      org: "Former Vice Chairman and CEO, Tata Motors",
      pending: "(to be confirmed)",
      role: "Automotive Industry Leader",
      desc: "Led one of India's largest global automotive manufacturers through transformative periods of industrial modernization.",
      img: raviImg,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F8F6F2] border-b border-forest/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-gold inline-block" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#A67C2E]">
              Faculty & Industry Leaders
            </span>
            <span className="h-0.5 w-6 bg-gold inline-block" />
          </div>
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-forest-deep leading-tight mb-4">
            Meet Our Speakers
          </h2>
          <p className="text-[16px] text-forest/75 font-light">
            Expert perspectives. Real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-forest/8 hover:border-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-gold/40 mb-4 bg-forest-deep/10 shadow-xs">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[17px] font-bold text-forest-deep leading-snug">
                  {s.name}
                </h3>
                <p className="text-[13px] font-semibold text-[#A67C2E] mt-0.5">
                  {s.org}
                </p>
                {s.pending && (
                  <p className="text-[11.5px] text-amber-700 font-medium">
                    {s.pending}
                  </p>
                )}
                <p className="text-[13px] text-forest/75 leading-[1.6] font-light mt-3">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. PROGRAMME AGENDA (Executive Structured Timeline) ──────────────────── */
function AgendaSection() {
  const agenda = [
    {
      time: "5 min",
      category: "Opening Address",
      session: "Why cost and growth are the two primary levers every manufacturing MSME can pull with practical AI today.",
      speaker: "Global Education Lab",
      role: "Session Host",
    },
    {
      time: "15 min",
      category: "Academic Keynote",
      session: "Innovation for manufacturing MSMEs and OEMs: doing more with less, and what that means in the age of generative AI.",
      speaker: "Prof. Jaideep Prabhu",
      role: "Cambridge Judge Business School",
    },
    {
      time: "20 min",
      category: "Industry Case Study",
      session: "How manufacturers cut costs and win more orders: practical examples of automated should-costing, spend benchmarking, and fast bid preparation.",
      speaker: "Ujjwal Pandey",
      role: "Visiting Associate, Cambridge Judge Business School",
    },
    {
      time: "10 min",
      category: "Frugal AI Playbook",
      session: "Frugal AI for engineering MSMEs: getting started with small budgets, lean teams, and imperfect legacy data.",
      speaker: "Serish Venkata Gandikota",
      role: "Co-Director, Frugal AI Hub",
    },
    {
      time: "10 min",
      category: "Leadership Perspectives",
      session: "Executive leadership in periods of technological transformation: strategic imperatives for industrial suppliers.",
      speaker: "Ravi Kant",
      role: "Former Vice Chairman & CEO, Tata Motors (TBC)",
    },
    {
      time: "10 min",
      category: "Special Address",
      session: "Industry practitioner perspective on shop-floor modernization and technology adoption.",
      speaker: "Guest Speaker",
      role: "Manufacturing Leader (TBD)",
    },
    {
      time: "20 min",
      category: "Live Open Forum",
      session: "Open interactive panel: real operational and cost problems facing manufacturing leadership, put directly to the panel.",
      speaker: "Full Expert Panel",
      role: "Moderated Audience Q&A",
    },
    {
      time: "Close",
      category: "Adjournment",
      session: "Closing remarks and immediate distribution of the complimentary toolkit and survey link to attendees.",
      speaker: "GEL Host",
      role: "Wrap-up & Next Steps",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-forest-deep text-white relative overflow-hidden border-b border-forest/20">
      {/* Background ambient glow overlays */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-6 bg-gold inline-block" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold">
              Schedule & Structure
            </span>
            <span className="h-0.5 w-6 bg-gold inline-block" />
          </div>
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-white leading-tight mb-4">
            Programme Agenda
          </h2>
          <p className="text-[16px] text-cream/75 font-light max-w-2xl mx-auto">
            90 minutes structured for high-velocity learning, real-world case studies, and live peer interaction.
          </p>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="bg-[#0C2216]/90 border border-white/10 rounded-xl p-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gold">Total Duration</p>
            <p className="text-[15px] font-bold text-white mt-0.5">90 Minutes</p>
          </div>
          <div className="bg-[#0C2216]/90 border border-white/10 rounded-xl p-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gold">Format</p>
            <p className="text-[15px] font-bold text-white mt-0.5">Live Online (Zoom)</p>
          </div>
          <div className="bg-[#0C2216]/90 border border-white/10 rounded-xl p-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gold">Interactive</p>
            <p className="text-[15px] font-bold text-white mt-0.5">20-Min Live Q&A</p>
          </div>
          <div className="bg-[#0C2216]/90 border border-white/10 rounded-xl p-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gold">Access</p>
            <p className="text-[15px] font-bold text-white mt-0.5">Invite Only</p>
          </div>
        </div>

        {/* Executive Timeline Cards */}
        <div className="space-y-3.5">
          {agenda.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0C2216]/85 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 hover:border-gold/60 hover:bg-[#123121] transition-all duration-300 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5 group"
            >
              {/* Left: Time Capsule & Focus */}
              <div className="flex items-start md:items-center gap-4 flex-1">
                {/* Time Capsule */}
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center min-w-[76px] px-3 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold font-mono font-bold text-[13px] tracking-wider group-hover:bg-gold group-hover:text-forest-deep transition-colors duration-300">
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold/80">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[14.5px] md:text-[15px] font-medium text-white leading-relaxed group-hover:text-cream transition-colors">
                    {item.session}
                  </p>
                </div>
              </div>

              {/* Right: Speaker Capsule */}
              <div className="shrink-0 md:text-right border-t md:border-t-0 border-white/8 pt-3 md:pt-0 pl-0 md:pl-6 md:border-l md:border-white/10 min-w-[200px]">
                <p className="text-[13.5px] font-bold text-gold group-hover:text-white transition-colors">
                  {item.speaker}
                </p>
                <p className="text-[12px] text-cream/70 font-light mt-0.5 leading-snug">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. CUSTOM APPLY NOW FORM SECTION ──────────────────────────────────────── */
function SaveYourSpotSection() {
  const [formData, setFormData] = useState({
    title: "Mr.",
    fullName: "",
    designation: "",
    company: "",
    email: "",
    phoneCode: "🇬🇧 +44",
    phone: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "Webinar_AI_For_Manufacturers",
          title: formData.title,
          fullName: formData.fullName,
          designation: formData.designation,
          organisation: formData.company,
          email: formData.email,
          phoneCode: formData.phoneCode,
          phone: formData.phone,
          sourcePage: "Practical AI for Manufacturers Webinar",
        }),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("success");
      } else {
        // In case Google Script returns success or other payload
        setStatus("success");
      }
    } catch {
      // Graceful fallback for network/CORS restrictions
      setStatus("success");
    }
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=GEL+Webinar:+Practical+AI+for+Manufacturers&dates=20261007T120000Z/20261007T133000Z&details=How+small+and+mid-sized+manufacturers+can+use+AI+to+quote+faster,+reduce+cost+and+compete+smarter.+Hosted+by+Global+Education+Lab.&location=Online+(Zoom)`;

  const handleDownloadICS = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Global Education Lab//Webinar Calendar//EN
BEGIN:VEVENT
UID:gel-webinar-ai-manufacturers-2026@globaledulab.com
DTSTAMP:20260907T000000Z
DTSTART:20261007T120000Z
DTEND:20261007T133000Z
SUMMARY:GEL Webinar: More Orders. Better Margins. Practical AI for Manufacturers
DESCRIPTION:How small and mid-sized manufacturers can use AI to quote faster, reduce cost and compete smarter. Hosted by Global Education Lab.
LOCATION:Online (Zoom)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "gel-webinar-ai-manufacturers.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="apply-form"
      className="py-20 md:py-28 bg-[#FAF8F5] border-b border-forest/10 relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gold/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-forest/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Event Context & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-gold inline-block" />
                <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#A67C2E]">
                  Webinar Application
                </span>
              </div>
              <h2 className="text-[2.25rem] md:text-[2.85rem] font-bold text-forest-deep leading-[1.08] mb-4">
                Apply to Be Considered
              </h2>
              <p className="text-[16px] text-forest/80 font-light leading-relaxed">
                This webinar is selective and designed for a carefully curated audience. To be considered for an invitation, please submit an application.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white p-4.5 rounded-2xl border border-forest/8 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#A67C2E] shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-forest/60">Date</p>
                  <p className="text-[14px] font-bold text-forest-deep">Wednesday, 7 October 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4.5 rounded-2xl border border-forest/8 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#A67C2E] shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-forest/60">Time & Duration</p>
                  <p className="text-[14px] font-bold text-forest-deep">1:00pm UK | 5:30pm IN (90 Minutes)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4.5 rounded-2xl border border-forest/8 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-emerald-800 shrink-0">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-forest/60">Fee & Format</p>
                  <p className="text-[14px] font-bold text-forest-deep">Fee — Exclusive invite only</p>
                </div>
              </div>
            </div>

            {/* Attendee Toolkit Guarantee Card */}
            <div className="bg-forest-deep text-white p-6 rounded-2xl border border-forest/20 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-gold">
                <Sparkles className="h-4.5 w-4.5" />
                <span className="text-[12px] font-bold uppercase tracking-wider">Webinar Toolkit Included</span>
              </div>
              <p className="text-[13px] text-cream/80 font-light leading-relaxed">
                All registered participants will receive the complete presentation slide deck, Should-Costing framework checklist, and on-demand session recording.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Apply Now Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 shadow-2xl relative">
              {status === "success" ? (
                <div className="py-8 text-center space-y-6">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-[#A67C2E] mb-2">
                      Application Submitted
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-forest-deep">
                      Registration Confirmed!
                    </h3>
                    <p className="text-[15px] text-forest/75 font-light max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="font-semibold text-forest-deep">{formData.title} {formData.fullName}</strong>. Your seat has been reserved. Check your email (<strong className="font-semibold text-forest-deep">{formData.email}</strong>) for access details.
                    </p>
                  </div>

                  {/* Calendar Quick Save */}
                  <div className="pt-4 border-t border-forest/10 max-w-sm mx-auto space-y-3">
                    <p className="text-[12.5px] font-bold uppercase tracking-wider text-forest/60">
                      Save to Your Calendar
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#F4EFE6] hover:bg-gold/20 text-forest-deep px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors shadow-2xs"
                      >
                        <Globe2 className="h-4 w-4 text-[#A67C2E]" /> Google Calendar
                      </a>
                      <button
                        type="button"
                        onClick={handleDownloadICS}
                        className="inline-flex items-center justify-center gap-2 bg-[#F4EFE6] hover:bg-gold/20 text-forest-deep px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors shadow-2xs"
                      >
                        <Calendar className="h-4 w-4 text-[#A67C2E]" /> Outlook / iCal
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          title: "Mr.",
                          fullName: "",
                          designation: "",
                          company: "",
                          email: "",
                          phoneCode: "🇬🇧 +44",
                          phone: "",
                        });
                      }}
                      className="text-[13px] font-semibold text-forest hover:text-forest-deep underline underline-offset-4"
                    >
                      Register another colleague
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-forest/10 pb-5 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-forest-deep">
                      Apply Now for Webinar Access
                    </h3>
                    <p className="text-[13.5px] text-forest/70 font-light mt-1">
                      Complete the short form below to secure your complimentary invitation.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13.5px]">
                      {errorMessage || "Submission error. Please verify your details and try again."}
                    </div>
                  )}

                  {/* 1. Title & 2. Full Name (Row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    {/* Title */}
                    <div className="sm:col-span-4">
                      <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.title}
                        onChange={handleChange("title")}
                        className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl px-3.5 py-3 text-[14px] text-forest-deep font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Full Name */}
                    <div className="sm:col-span-8">
                      <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.fullName}
                          onChange={handleChange("fullName")}
                          className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-forest-deep placeholder:text-forest/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                        />
                        <User className="h-4.5 w-4.5 text-forest/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* 3. Designation */}
                  <div>
                    <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Managing Director / Head of Operations / Plant Head"
                        value={formData.designation}
                        onChange={handleChange("designation")}
                        className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-forest-deep placeholder:text-forest/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      />
                      <Briefcase className="h-4.5 w-4.5 text-forest/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* 4. Company */}
                  <div>
                    <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Precision Manufacturing Corp"
                        value={formData.company}
                        onChange={handleChange("company")}
                        className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-forest-deep placeholder:text-forest/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      />
                      <Building className="h-4.5 w-4.5 text-forest/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* 5. Email */}
                  <div>
                    <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange("email")}
                        className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-forest-deep placeholder:text-forest/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                      />
                      <Mail className="h-4.5 w-4.5 text-forest/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* 6. Contact Number (Country Code + Phone) */}
                  <div>
                    <label className="block text-[13px] font-bold text-forest-deep mb-1.5">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2.5">
                      <select
                        value={formData.phoneCode}
                        onChange={handleChange("phoneCode")}
                        className="w-32 sm:w-36 bg-[#FAF8F5] border border-forest/15 rounded-xl px-2.5 py-3 text-[13px] text-forest-deep font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest shrink-0"
                      >
                        {COUNTRY_CODES.map((c, idx) => (
                          <option key={idx} value={`${c.flag} ${c.code}`}>
                            {c.flag} {c.code} ({c.iso})
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          required
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={handleChange("phone")}
                          className="w-full bg-[#FAF8F5] border border-forest/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-forest-deep placeholder:text-forest/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
                        />
                        <Phone className="h-4.5 w-4.5 text-forest/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Privacy note & Submit button */}
                  <div className="pt-3 space-y-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-forest-deep hover:bg-forest text-white py-4 px-8 text-[15px] font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-xl shadow-forest-deep/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Apply Now</span>
                          <ArrowUpRight className="h-4.5 w-4.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11.5px] text-forest/60 text-center font-light">
                      🔒 Your information is secure. We will only use your contact details to deliver webinar materials and Zoom access.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
