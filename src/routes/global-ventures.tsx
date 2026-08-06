import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Globe2, Building2, TrendingUp, Handshake, Rocket,
  LineChart, FlaskConical, CheckCircle2, Lightbulb, Search,
  ClipboardCheck, Users, Send, Target, Briefcase, GraduationCap,
  Network, ChevronRight, Bot, Wind, HeartPulse, Pill, Leaf, Sparkles, Cpu
} from "lucide-react";
import { useState } from "react";
import cambridgeImg from "@/assets/cambridge_6.jpg";
import zeroToOneImg from "@/assets/zero-to-one.png";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import heroClassroomImg from "@/assets/hero-classroom.jpg";
import { Footer } from "./index";
import { SharedTestimonials } from '@/components/SharedTestimonials';


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
      <WhatIs />
      <OurVentures />
      <Journey />
      <TrackComparison />
      <WhoShouldApply />
      <SharedTestimonials />
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
    <section className="relative overflow-hidden bg-cream">
      {/* Subtle grid — same as homepage */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full bg-forest/5 blur-[120px] animate-float-delay" />

      {/* Decorative ring */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-forest/8 hidden xl:block" />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gold/10 hidden xl:block" />

      <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">

            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Global Ventures Programme</span>
            </div>

            {/* Headline */}
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.6rem] font-bold leading-[1.02] tracking-tight text-forest-deep">
              Extraordinary ventures.<br />
              <span className="shimmer-text font-serif italic font-normal">Global platforms.</span>
            </h1>

            <p className="text-[17px] text-forest/80 leading-[1.8] max-w-xl">
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
            <div className="flex items-center gap-3.5 pt-2 flex-wrap sm:flex-nowrap">
              <Link
                to="/contact" search={{ source: "Global Ventures" }}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 sm:px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep whitespace-nowrap shrink-0"
              >
                Apply to the Programme <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partner-with-gel"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-5 sm:px-6 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5 whitespace-nowrap shrink-0"
              >
                Partner with Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right image card */}
          <div className="relative lg:col-span-6">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
                <img src={cambridgeImg} alt="Global Ventures" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gold/30" />
                    <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold/80">Featured Venture</span>
                    <div className="h-px flex-1 bg-gold/30" />
                  </div>
                  <p className="text-white font-bold text-xl mb-1">CARBONSYNQ</p>
                  <p className="text-white/80 text-[15px]">Sustainability intelligence platform</p>
                </div>
              </div>

              {/* Banners removed */}
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
            <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">{s.label}</p>
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
          <span className="text-[15px] font-bold uppercase tracking-[0.35em] text-gold">About the Programme</span>
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
              <p className="text-[16px] md:text-[17px] text-forest/70 leading-[1.8] font-normal max-w-lg">
                The Global Ventures Programme is GEL's international launchpad for high-potential startups, research-led innovations and impact ventures seeking to expand beyond their home markets.
              </p>
              <p className="text-[16px] md:text-[17px] text-forest/70 leading-[1.8] font-normal max-w-lg">
                We connect selected ventures with the UK's business, academic, investor and innovation ecosystems—helping them validate, grow and scale globally.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/contact" search={{ source: "Global Ventures" }} className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-9 py-4.5 text-[15px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-forest shadow-xl shadow-forest/15 hover:shadow-forest/30">
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
                  <h4 className="text-[15px] font-bold text-forest-deep mb-4 leading-tight tracking-wide group-hover:text-forest transition-colors duration-300">{p.title}</h4>
                  <p className="text-[15px] text-forest/80 leading-[1.8] font-normal">{p.desc}</p>
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
  { icon: <Bot className="h-5 w-5" />, track: "Venture Track", isVenture: true, slug: "kavach-ai", name: "KAVACH AI", tagline: "AI-Powered Predictive Surveillance", desc: "AI-powered solutions for security and risk management across critical infrastructure, enterprises and public systems.", bgClass: "from-[#0A2733] via-[#0A1C24] to-[#0A1F11]" },
  { icon: <Leaf className="h-5 w-5" />, track: "Venture Track", isVenture: true, slug: "carbonsynq", name: "CARBONSYNQ", tagline: "From Carbon Accounting to Offsetting — All at One Platform", desc: "A sustainability intelligence platform that helps organisations measure, manage and reduce carbon impact with precision and transparency.", bgClass: "from-[#163B21] via-[#0E2715] to-[#0A1F11]" },
  { icon: <Network className="h-5 w-5" />, track: "Venture Track", isVenture: true, slug: "project-tacto", name: "PROJECT TACTO", tagline: "The first programming language you don't need eyes to learn", desc: "Building advanced tactile sensing solutions that enhance human-machine interaction across robotics, healthcare and assistive technologies.", bgClass: "from-[#2A163B] via-[#170E24] to-[#0A1F11]" },
  { icon: <Cpu className="h-5 w-5" />, track: "Venture Track", isVenture: true, slug: "saivyy", name: "SAIVYY TECHNOLOGIES", tagline: "Transforms petabytes into profits with cutting-edge AI and Big Data Analytics", desc: "Enterprise AI, machine learning, big data analytics and intelligent automation solutions that help organisations turn complex data into actionable insight and drive sustainable digital transformation.", bgClass: "from-[#16213B] via-[#0D1526] to-[#0A1F11]" },
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
            <span className="text-[15px] font-bold uppercase tracking-[0.35em] text-gold">Our Ventures</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="text-[2.4rem] md:text-[3.2rem] font-bold text-white mb-4 tracking-tight leading-tight">
            A portfolio of <span className="font-serif italic text-gold">exceptional</span> innovations
          </h2>
          <p className="text-[15px] text-white/80 max-w-xl leading-relaxed">
            Startup and research-led innovations from emerging economies, shaping the future of global industries.
          </p>

          {/* Filter */}
          <div className="flex items-center gap-1.5 mt-10 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
            {(["All", "Venture Track", "Research Track"] as const).map(tab => (
              <button key={tab} onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-bold tracking-wide transition-all ${filter === tab ? "bg-gold text-[#0A1F11] shadow-lg shadow-gold/20" : "text-white/80 hover:text-white hover:bg-white/5"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filtered.map((v, i) => (
            <Link
              key={i}

              to={v.slug === 'carbonsynq' ? '/ventures/carbonsynq' : '/ventures/$slug'}
              params={v.slug === 'carbonsynq' ? {} : { slug: v.slug }}
              className={`group relative rounded-[2.5rem] border border-white/10 p-1 lg:p-1 flex flex-col transition-all duration-700 hover:-translate-y-2 hover:border-gold/40 shadow-2xl hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] overflow-hidden isolate bg-gradient-to-br ${v.bgClass}`}
            >
              {/* Inner glass wrapper for extra premium look */}
              <div className="relative h-full w-full rounded-[2.4rem] bg-black/20 p-8 lg:p-10 flex flex-col z-10 backdrop-blur-sm border border-white/5 group-hover:bg-black/0 transition-colors duration-700">
                
                {/* Premium Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/[0.08] to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Radial light bloom in the top right corner */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/25 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none" />

                {/* Track badge */}
                <div className={`inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border text-[13px] font-bold uppercase tracking-[0.2em] mb-8 transition-all duration-500 shadow-sm ${v.isVenture ? "bg-gold/15 text-gold border-gold/30 group-hover:border-gold/60 group-hover:bg-gold/25 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]" : "bg-white/10 text-white/80 border-white/20 group-hover:border-white/50 group-hover:bg-white/15"}`}>
                  {v.icon} {v.track}
                </div>

                <h3 className="text-[24px] font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300 tracking-wide">{v.name}</h3>
                
                {/* Tagline Highlight */}
                <div className="relative mb-5 p-3 rounded-r-xl border-l-[3px] border-gold/40 bg-gradient-to-r from-gold/[0.08] to-transparent group-hover:border-gold group-hover:from-gold/[0.15] transition-all duration-500 w-fit">
                  <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-gold/90 group-hover:text-gold transition-colors duration-300">{v.tagline}</p>
                </div>
                
                <p className="text-[15px] text-white/70 leading-[1.8] font-medium flex-1 group-hover:text-white/90 transition-colors duration-300">{v.desc}</p>

                <div className="mt-8 pt-6 border-t border-white/10 group-hover:border-gold/30 transition-colors duration-500 flex items-center justify-between">
                  <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-gold transition-colors duration-300">Explore Venture</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-gold group-hover:border-gold flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-[#0A1F11] transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </Link>
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
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-[#0A1F11] text-[15px] font-bold px-2 py-0.5 rounded-full shadow">
                    {s.num}
                  </div>
                </div>
                <h4 className="text-[15px] font-bold text-[#0A1F11] mt-4 mb-2">{s.title}</h4>
                <p className="text-[15px] text-[#0A1F11]/55 leading-[1.7] max-w-[120px]">{s.desc}</p>
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
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-10 bg-gold/40" />
          <span className="text-[15px] font-bold uppercase tracking-[0.35em] text-gold">Choose Your Path</span>
          <div className="h-px w-10 bg-gold/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Venture Track */}
          <div className="relative group overflow-hidden rounded-[2.5rem] min-h-[640px] flex flex-col justify-end shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Image & Overlay */}
            <img src={businessLeadersImg} alt="Venture Track" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10 group-hover:via-black/80 transition-colors duration-500" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] z-20 pointer-events-none" />
            
            {/* Content */}
            <div className="relative p-10 lg:p-14 z-10">
              <div className="mb-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-500">
                  <Rocket className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-wide mb-3">Venture Track</h3>
                <p className="text-[16px] text-white/70 font-medium leading-relaxed min-h-[50px] lg:min-h-[48px]">For startups ready to grow and scale globally.</p>
              </div>
              
              <div className="space-y-4 mb-10 transform transition-all duration-500 group-hover:-translate-y-2 min-h-[260px] lg:min-h-[240px]">
                {["Business model & strategy development","Customer & market validation","Investor readiness & fundraising support","Partnerships & market-entry planning","Scaling support"].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span className="text-[16px] text-white/90 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          {/* Research Track */}
          <div className="relative group overflow-hidden rounded-[2.5rem] min-h-[640px] flex flex-col justify-end shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Image & Overlay */}
            <img src={heroClassroomImg} alt="Research Track" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10 group-hover:via-black/80 transition-colors duration-500" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] z-20 pointer-events-none" />
            
            {/* Content */}
            <div className="relative p-10 lg:p-14 z-10">
              <div className="mb-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-500">
                  <FlaskConical className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-wide mb-3">Research Track</h3>
                <p className="text-[16px] text-white/70 font-medium leading-relaxed min-h-[50px] lg:min-h-[48px]">For research-led innovations before commercialisation.</p>
              </div>
              
              <div className="space-y-4 mb-10 transform transition-all duration-500 group-hover:-translate-y-2 min-h-[260px] lg:min-h-[240px]">
                {["Research collaboration & technical validation","Expert & academic engagement","IP & commercialisation pathway guidance","Venture formation support","From knowledge to global impact"].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span className="text-[16px] text-white/90 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
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
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Eligibility</span>
            </div>
            <h2 className="text-[2.2rem] font-bold text-[#0A1F11] mb-5 leading-tight">Who Should Apply?</h2>
            <p className="text-[15px] text-[#0A1F11]/60 leading-[1.8]">
              We seek ambitious founders and researchers creating solutions with the potential for meaningful global impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {items.map((item, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white rounded-2xl border border-[#0A1F11]/6 px-6 py-4 hover:border-gold/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#0A1F11]/40 shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-all">
                  {item.icon}
                </div>
                <p className="text-[15px] font-bold text-[#0A1F11] leading-tight">{item.title}</p>
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
  return (
    <section className="bg-forest-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— Get Involved</span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-cream md:text-[2.75rem] leading-[1.15]">
              Together, we create<br />impact that <span className="font-serif italic text-gold">lasts.</span>
            </h2>
            <p className="mt-6 text-[15px] text-cream/80 max-w-2xl">
              Join our global community of learners, innovators and changemakers. Let's start the conversation.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6">
             <Link to="/contact" search={{ source: "Global Ventures" }} className="group relative inline-flex items-center gap-8 rounded-2xl bg-gold px-8 py-6 text-[15px] font-bold tracking-wide text-forest-deep transition-all hover:bg-white hover:scale-105 shadow-xl hover:shadow-2xl">
                Get Involved
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </Link>
             <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-cream/70 pl-4 lg:pl-0">info@globaledulab.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
