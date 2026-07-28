import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Globe2, Building2, TrendingUp, Handshake, Rocket,
  LineChart, FlaskConical, CheckCircle2, Lightbulb, Search,
  ClipboardCheck, Users, Send, Target, Briefcase, GraduationCap,
  Network, ChevronRight, Bot, Wind, HeartPulse, Pill, Leaf, Sparkles
} from "lucide-react";
import { useState } from "react";
import cambridgeImg from "@/assets/cambridge.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import heroClassroomImg from "@/assets/hero-classroom.jpg";
import { Footer } from "./index";

export const Route = createFileRoute("/global-ventures")({
  head: () => ({
    meta: [
      { title: "Global Ventures — Launch, Expand & Scale Globally | Global Education Lab" },
      { name: "description", content: "Global Ventures helps promising startups and research-led innovations launch and scale globally from emerging economies." },
    ],
  }),
  component: GlobalVenturesPage,
});

function GlobalVenturesPage() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out infinite 2s; }
        .shimmer-text {
          background: linear-gradient(90deg, #C9A84C, #F5D88E, #C9A84C, #F5D88E);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .glow-gold { box-shadow: 0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1); }
        .glow-green { box-shadow: 0 0 40px rgba(10,48,29,0.3); }
        .venture-card:hover { transform: translateY(-6px); }
        .venture-card { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
        .venture-card:hover .venture-badge { opacity: 1; transform: translateX(0); }
        .venture-badge { opacity: 0; transform: translateX(-8px); transition: all 0.3s ease; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      ` }} />
      <Hero />
      <StatsBar />
      <WhatIs />
      <OurVentures />
      <Journey />
      <TrackComparison />
      <WhoShouldApply />
      <BottomCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────── HERO ─────────────────── */
function Hero() {
  const pills = [
    { icon: <Globe2 className="h-4 w-4" />, label: "Global Launchpad via UK" },
    { icon: <Users className="h-4 w-4" />, label: "Expert Mentoring" },
    { icon: <TrendingUp className="h-4 w-4" />, label: "Investor Access" },
    { icon: <Handshake className="h-4 w-4" />, label: "Business Collaborations" },
  ];

  return (
    <section className="relative overflow-hidden bg-cream min-h-screen flex items-center">
      {/* Subtle grid — same as homepage */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full bg-forest/5 blur-[120px] animate-float-delay" />

      {/* Decorative ring */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-forest/8 hidden xl:block" />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gold/10 hidden xl:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">

            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Global Ventures Programme</span>
            </div>

            {/* Headline */}
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.6rem] font-bold leading-[1.02] tracking-tight text-forest-deep">
              Extraordinary ventures.<br />
              <span className="shimmer-text font-serif italic font-normal">Global platforms.</span>
            </h1>

            <p className="text-[17px] text-forest/65 leading-[1.8] max-w-xl">
              We support promising startups and research-led innovations with venture strategy, mentoring, investor access and business collaboration—until they become self-sustainable.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {pills.map((p, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-forest/12 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm">
                  <span className="text-gold/80">{p.icon}</span>
                  <span className="text-[15px] font-medium text-forest/70">{p.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
              >
                Apply to the Programme <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partner-with-gel"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
              >
                Partner with Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right image card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-forest/15 border border-forest/8">
                <img src={businessLeadersImg} alt="Global Ventures" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gold/30" />
                    <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold/60">Featured Venture</span>
                    <div className="h-px flex-1 bg-gold/30" />
                  </div>
                  <p className="text-white font-bold text-xl mb-1">CARBONSYNQ</p>
                  <p className="text-white/50 text-[15px]">Sustainability intelligence platform</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-6 -right-8 bg-white border border-forest/10 rounded-2xl p-5 shadow-xl">
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold/70 mb-1">Portfolio</p>
                <p className="text-3xl font-bold text-forest-deep">6+</p>
                <p className="text-[14px] text-forest/50">Active Ventures</p>
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-6 -left-8 bg-gold rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-forest-deep/60 mb-0.5">Countries</p>
                <p className="text-2xl font-bold text-forest-deep">5+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── STATS BAR ─────────────────── */
function StatsBar() {
  const stats = [
    { num: "5,000+", label: "Students Engaged" },
    { num: "150+", label: "Business Leaders" },
    { num: "6", label: "Active Ventures" },
    { num: "5", label: "Countries" },
    { num: "£2M+", label: "Funding Facilitated" },
  ];
  const duplicateStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <div className="bg-[#0A1F11] border-y border-white/5 overflow-hidden py-8">
      <div className="flex w-max animate-marquee">
        {duplicateStats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center px-16 border-r border-white/5 last:border-r-0">
            <p className="text-[1.8rem] font-bold text-gold leading-none mb-1">{s.num}</p>
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── WHAT IS ─────────────────── */
function WhatIs() {
  const pillars = [
    { icon: <Lightbulb className="h-5 w-5" strokeWidth={1.5} />, title: "Venture Strategy", desc: "Sharpen your vision, business model and growth roadmap." },
    { icon: <Globe2 className="h-5 w-5" strokeWidth={1.5} />, title: "Global Market Readiness", desc: "Validate your solution for international markets." },
    { icon: <Users className="h-5 w-5" strokeWidth={1.5} />, title: "Mentoring & Expertise", desc: "Learn from founders, industry leaders and sector specialists." },
    { icon: <LineChart className="h-5 w-5" strokeWidth={1.5} />, title: "Investor Access", desc: "Build investor-ready narratives and connect with the right investors." },
    { icon: <Handshake className="h-5 w-5" strokeWidth={1.5} />, title: "Business Collaboration", desc: "Access partners, customers and pilot opportunities worldwide." },
    { icon: <Rocket className="h-5 w-5" strokeWidth={1.5} />, title: "UK Launchpad", desc: "Establish credibility, partnerships and market access via UK." },
  ];

  return (
    <section className="py-32 md:py-40 bg-[#F9F6F0] relative overflow-hidden">
      {/* Decorative large circles behind the cards for a premium feel */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#FCFAF7] rounded-full blur-[120px] opacity-80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-24 justify-center">
          <div className="h-px w-12 bg-gold/40" />
          <span className="text-[14px] font-bold uppercase tracking-[0.35em] text-gold">About the Programme</span>
          <div className="h-px w-12 bg-gold/40" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <div className="space-y-8 relative z-10">
            <h2 className="text-[2.8rem] md:text-[3.8rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              What is Global<br />
              <span className="font-serif italic text-gold font-normal">Ventures Programme?</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            <div className="space-y-6">
              <p className="text-[16px] md:text-[17px] text-forest/70 leading-[1.8] font-light max-w-lg">
                The Global Ventures Programme is GEL's international launchpad for high-potential startups, research-led innovations and impact ventures seeking to expand beyond their home markets.
              </p>
              <p className="text-[16px] md:text-[17px] text-forest/70 leading-[1.8] font-light max-w-lg">
                We connect selected ventures with the UK's business, academic, investor and innovation ecosystems—helping them validate, grow and scale globally.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-9 py-4.5 text-[14px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-forest shadow-xl shadow-forest/15 hover:shadow-forest/30">
                Explore the Programme <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Grid (Premium Frames) */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {pillars.map((p, i) => (
              <div key={i} className="group bg-white rounded-[2rem] p-8 lg:p-9 transition-all duration-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(201,168,76,0.12)] flex flex-col items-start relative overflow-hidden">
                
                {/* Subtle gold accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Premium icon wrapper */}
                  <div className="w-12 h-12 rounded-full border border-[#E5DFD3] bg-[#FCFAF7] flex items-center justify-center text-gold/80 mb-8 group-hover:border-gold/40 group-hover:bg-gold/5 group-hover:text-gold transition-all duration-500 group-hover:scale-110">
                    {p.icon}
                  </div>
                  
                  {/* Typography */}
                  <h4 className="text-[14px] font-bold text-forest-deep mb-4 leading-tight tracking-wide group-hover:text-forest transition-colors duration-300">{p.title}</h4>
                  <p className="text-[14px] text-forest/60 leading-[1.8] font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── VENTURES ─────────────────── */
const VENTURES = [
  { icon: <Bot className="h-5 w-5" />, track: "Venture Track", isVenture: true, name: "KAVACH AI", desc: "AI-powered solutions for security and risk management across critical infrastructure, enterprises and public systems.", bgClass: "from-[#0A2733] via-[#0A1C24] to-[#0A1F11]" },
  { icon: <Leaf className="h-5 w-5" />, track: "Venture Track", isVenture: true, name: "CARBONSYNQ", desc: "A sustainability intelligence platform that helps organisations measure, manage and reduce carbon impact with precision and transparency.", bgClass: "from-[#163B21] via-[#0E2715] to-[#0A1F11]" },
  { icon: <Network className="h-5 w-5" />, track: "Venture Track", isVenture: true, name: "PROJECT TACTO", desc: "Building advanced tactile sensing solutions that enhance human-machine interaction across robotics, healthcare and assistive technologies.", bgClass: "from-[#2A163B] via-[#170E24] to-[#0A1F11]" },
  { icon: <Wind className="h-5 w-5" />, track: "Research Track", isVenture: false, name: "VYOMVEDA", desc: "Researching space weather intelligence and predictive modelling to support resilient space and satellite operations.", bgClass: "from-[#3D2812] via-[#1F170D] to-[#0A1F11]" },
  { icon: <Pill className="h-5 w-5" />, track: "Research Track", isVenture: false, name: "CELLUNOVA", desc: "Developing innovative cells for therapeutics and biomaterials through cutting-edge research in regenerative medicine.", bgClass: "from-[#3B1622] via-[#210D15] to-[#0A1F11]" },
  { icon: <HeartPulse className="h-5 w-5" />, track: "Venture Track", isVenture: true, name: "SAIVVY", desc: "A digital health platform bringing AI to quality care through AI-driven diagnostics and patient empowerment tools.", bgClass: "from-[#16213B] via-[#0D1526] to-[#0A1F11]" },
];

function OurVentures() {
  const [filter, setFilter] = useState<"All" | "Venture Track" | "Research Track">("All");
  const filtered = filter === "All" ? VENTURES : VENTURES.filter(v => v.track === filter);

  return (
    <section className="py-28 md:py-36 bg-[#0A1F11] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#C9A84C_1px,transparent_1px),linear-gradient(90deg,#C9A84C_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/40" />
            <span className="text-[14px] font-bold uppercase tracking-[0.35em] text-gold">Our Ventures</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="text-[2.4rem] md:text-[3.2rem] font-bold text-white mb-4 tracking-tight leading-tight">
            A portfolio of <span className="font-serif italic text-gold">exceptional</span> innovations
          </h2>
          <p className="text-[15px] text-white/50 max-w-xl leading-relaxed">
            Startup and research-led innovations from emerging economies, shaping the future of global industries.
          </p>

          {/* Filter */}
          <div className="flex items-center gap-1.5 mt-10 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {(["All", "Venture Track", "Research Track"] as const).map(tab => (
              <button key={tab} onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-bold tracking-wide transition-all ${filter === tab ? "bg-gold text-[#0A1F11] shadow" : "text-white/50 hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {filtered.map((v, i) => (
            <div key={i} className={`group relative rounded-[2.5rem] border border-white/10 p-8 lg:p-10 flex flex-col transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_30px_60px_rgba(201,168,76,0.15),inset_0_1px_1px_rgba(201,168,76,0.3)] overflow-hidden isolate bg-gradient-to-br ${v.bgClass}`}>
              
              {/* Premium Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/[0.08] to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Radial light bloom in the top right corner */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/25 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              {/* Track badge */}
              <div className={`inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border text-[13px] font-bold uppercase tracking-[0.2em] mb-8 transition-all duration-500 shadow-sm ${v.isVenture ? "bg-gold/15 text-gold border-gold/30 group-hover:border-gold/60 group-hover:bg-gold/25 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]" : "bg-white/10 text-white/80 border-white/20 group-hover:border-white/50 group-hover:bg-white/15"}`}>
                {v.icon} {v.track}
              </div>

              <h3 className="text-[20px] font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300 tracking-wide">{v.name}</h3>
              <p className="text-[15px] text-white/65 leading-[1.8] font-light flex-1">{v.desc}</p>

              <div className="mt-8 pt-6 border-t border-white/10 group-hover:border-gold/30 transition-colors duration-500 flex items-center justify-between">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-gold transition-colors duration-300">Explore Venture</span>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-gold flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4 text-white/70 group-hover:text-[#0A1F11] transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── JOURNEY ─────────────────── */
function Journey() {
  const steps = [
    { num: "01", icon: <Search className="h-5 w-5" />, title: "Discover", desc: "We identify high-potential ventures with the potential to solve meaningful problems at scale." },
    { num: "02", icon: <ClipboardCheck className="h-5 w-5" />, title: "Diagnose", desc: "A deep-dive assessment of your strategy, market, team, technology and global readiness." },
    { num: "03", icon: <TrendingUp className="h-5 w-5" />, title: "Strengthen", desc: "Tailored plan with mentoring, expert input, validation and venture-building support." },
    { num: "04", icon: <Network className="h-5 w-5" />, title: "Connect", desc: "Introductions to investors, researchers, corporates and ecosystem partners." },
    { num: "05", icon: <Send className="h-5 w-5" />, title: "Launch", desc: "Support for partnerships, pilots, viability and market entry through the UK." },
    { num: "06", icon: <Target className="h-5 w-5" />, title: "Sustain & Scale", desc: "Continued support until you achieve sustainable, independent and scalable growth." },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 justify-center mb-20">
          <div className="h-px w-12 bg-gold/30" />
          <h2 className="text-[1.6rem] font-serif italic text-[#0A1F11]">Our Venture Journey</h2>
          <div className="h-px w-12 bg-gold/30" />
        </div>

        <div className="relative">
          {/* Horizontal connector */}
          <div className="hidden md:block absolute top-[2.8rem] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-0" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-white border border-[#0A1F11]/8 flex items-center justify-center text-[#0A1F11]/40 shadow-sm group-hover:bg-[#0A1F11] group-hover:text-gold group-hover:border-[#0A1F11] group-hover:shadow-xl transition-all duration-400">
                    {s.icon}
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-[#0A1F11] text-[13px] font-bold px-2 py-0.5 rounded-full shadow">
                    {s.num}
                  </div>
                </div>
                <h4 className="text-[15px] font-bold text-[#0A1F11] mt-4 mb-2">{s.title}</h4>
                <p className="text-[14px] text-[#0A1F11]/55 leading-[1.7] max-w-[120px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TRACK COMPARISON ─────────────────── */
function TrackComparison() {
  return (
    <section className="bg-white py-0">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-center gap-3 justify-center mb-14">
          <div className="h-px w-10 bg-gold/40" />
          <span className="text-[14px] font-bold uppercase tracking-[0.35em] text-gold">Choose Your Path</span>
          <div className="h-px w-10 bg-gold/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#0A1F11]/15">
          {/* Venture Track */}
          <div className="relative group overflow-hidden min-h-[560px] flex flex-col justify-end">
            <img src={businessLeadersImg} alt="Venture Track" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050F08] via-[#050F08]/75 to-[#050F08]/20" />
            <div className="relative p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Venture Track</h3>
                  <p className="text-[14px] text-white/50">For startups ready to grow and scale globally.</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Business model & strategy development","Customer & market validation","Investor readiness & fundraising support","Partnerships & market-entry planning","Scaling support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    <span className="text-[14px] text-white/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-gold uppercase tracking-wider">
                Learn More <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Research Track */}
          <div className="relative group overflow-hidden min-h-[560px] flex flex-col justify-end">
            <img src={heroClassroomImg} alt="Research Track" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B4C0A]/95 via-[#6B4C0A]/60 to-[#6B4C0A]/15" />
            <div className="relative p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0A1F11]/25 border border-[#0A1F11]/25 flex items-center justify-center">
                  <FlaskConical className="h-5 w-5 text-[#0A1F11]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A1F11]">Research Track</h3>
                  <p className="text-[14px] text-[#0A1F11]/60">For research-led innovations before commercialisation.</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Research collaboration & technical validation","Expert & academic engagement","IP & commercialisation pathway guidance","Venture formation support","From knowledge to global impact"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#0A1F11]/60 shrink-0" />
                    <span className="text-[14px] text-[#0A1F11]/75">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#0A1F11] uppercase tracking-wider">
                Learn More <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHO SHOULD APPLY ─────────────────── */
function WhoShouldApply() {
  const items = [
    { icon: <Briefcase className="h-6 w-6" />, title: "High-potential startups" },
    { icon: <FlaskConical className="h-6 w-6" />, title: "Research-led innovations" },
    { icon: <GraduationCap className="h-6 w-6" />, title: "University spinouts & researcher teams" },
    { icon: <Target className="h-6 w-6" />, title: "Impact ventures" },
    { icon: <Globe2 className="h-6 w-6" />, title: "Founders seeking international expansion" },
  ];
  return (
    <section className="py-28 md:py-36 bg-[#F7F5F0] border-t border-[#0A1F11]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Eligibility</span>
            </div>
            <h2 className="text-[2.2rem] font-bold text-[#0A1F11] mb-5 leading-tight">Who Should Apply?</h2>
            <p className="text-[14px] text-[#0A1F11]/60 leading-[1.8]">
              We seek ambitious founders and researchers creating solutions with the potential for meaningful global impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {items.map((item, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white rounded-2xl border border-[#0A1F11]/6 px-6 py-4 hover:border-gold/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#0A1F11]/40 shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-all">
                  {item.icon}
                </div>
                <p className="text-[14px] font-bold text-[#0A1F11] leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── BOTTOM CTA ─────────────────── */
function BottomCTA() {
  const ctas = [
    { icon: <TrendingUp className="h-5 w-5" />, title: "For Investors", desc: "Access a curated pipeline of high-potential ventures.", link: "Explore Opportunities" },
    { icon: <Building2 className="h-5 w-5" />, title: "For Universities", desc: "Collaborate on research, innovation and impact.", link: "Become a Partner" },
    { icon: <Briefcase className="h-5 w-5" />, title: "For Corporates", desc: "Pilot, co-create and access new solutions.", link: "Work With Us" },
    { icon: <Users className="h-5 w-5" />, title: "For Mentors", desc: "Guide exceptional founders globally.", link: "Join the Mentor Network" },
  ];
  return (
    <section className="bg-[#F7F5F0] pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative bg-[#0A1F11] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#0A1F11]/30">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#C9A84C_1px,transparent_1px),linear-gradient(90deg,#C9A84C_1px,transparent_1px)] [background-size:60px_60px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/8 blur-[160px] translate-x-1/2 -translate-y-1/2" />

          <div className="relative grid lg:grid-cols-[380px_1fr]">
            {/* Left */}
            <div className="p-12 lg:p-16 flex flex-col justify-center border-r border-white/8">
              <Sparkles className="h-7 w-7 text-gold/50 mb-6" />
              <h2 className="text-[2rem] font-bold text-white leading-tight mb-4">
                Let's build global impact—<span className="font-serif italic text-gold">together.</span>
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                Partner with us to empower ventures, create value and shape a better future.
              </p>
              <Link to="/contact" className="self-start inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-[0.2em] text-[#0A1F11] transition-all hover:bg-white">
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right — 4 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {ctas.map((cta, i) => (
                <div key={i} className={`p-10 flex flex-col border-white/8 hover:bg-white/[0.04] transition-colors ${i > 0 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold/60 mb-5">
                    {cta.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-2">{cta.title}</h4>
                  <p className="text-[15px] text-white/45 leading-relaxed mb-5 flex-1">{cta.desc}</p>
                  <button className="inline-flex items-center gap-1.5 text-[14px] font-bold text-gold hover:text-white transition-colors uppercase tracking-[0.15em]">
                    {cta.link} <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
