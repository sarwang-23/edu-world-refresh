import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Globe2,
  Building2,
  TrendingUp,
  Handshake,
  Rocket,
  LineChart,
  FlaskConical,
  CheckCircle2,
  Lightbulb,
  Search,
  ClipboardCheck,
  Zap,
  Users,
  Send,
  Target,
  Briefcase,
  GraduationCap,
  Shield,
  Leaf,
  Atom,
  Sparkles,
  Microscope,
  Network
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
      {
        name: "description",
        content:
          "Global Ventures helps promising startups and research-led innovations launch and scale globally from emerging economies.",
      },
    ],
  }),
  component: GlobalVenturesPage,
});

function GlobalVenturesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Hero />
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

function Hero() {
  const cards = [
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Launchpad via UK" },
    { icon: <Users className="h-6 w-6" />, title: "Mentoring & Expert Support" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Investor Access & Funding" },
    { icon: <Handshake className="h-6 w-6" />, title: "Business Collaborations" },
  ];
  return (
    <section className="relative overflow-hidden bg-forest-deep pt-16 md:pt-24 pb-48">
      <div className="absolute inset-0 opacity-40">
        <img src={cambridgeImg} alt="Cambridge Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-6 block">
            GLOBAL VENTURES PROGRAMME
          </p>
          <h1 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Bringing extraordinary ventures from emerging economies to a <span className="text-gold italic">global platform.</span>
          </h1>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
            We support promising startups and research-led innovations with venture strategy, mentoring, investor access and business collaboration—until they become self-sustainable.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-forest/80 border border-forest">
              Apply to the Programme <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-gold transition-all hover:bg-white/10">
              Partner with Global Ventures <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="absolute -bottom-24 left-6 right-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((c, i) => (
              <div key={i} className="bg-forest-deep/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center shadow-xl h-40 group hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="text-xs font-bold text-white max-w-[140px]">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIs() {
  const items = [
    { icon: <Lightbulb className="h-6 w-6" />, title: "Venture Strategy", desc: "Sharpen your vision, business model and growth roadmap." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Market Readiness", desc: "Validate your solution for international markets." },
    { icon: <Users className="h-6 w-6" />, title: "Mentoring & Expertise", desc: "Learn from founders, industry leaders and sector specialists." },
    { icon: <LineChart className="h-6 w-6" />, title: "Investor Access", desc: "Build investor-ready narratives and connect with the right investors." },
    { icon: <Handshake className="h-6 w-6" />, title: "Business Collaboration", desc: "Access partners, customers and pilot opportunities worldwide." },
    { icon: <Rocket className="h-6 w-6" />, title: "UK Launchpad", desc: "Establish credibility, partnerships and market access via UK." },
  ]
  return (
    <section className="pt-40 pb-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold text-forest-deep mb-6 leading-tight">
            What is Global Ventures Programme?
          </h2>
          <p className="text-[11px] text-forest/70 leading-relaxed mb-4">
            The Global Ventures Programme is GEL's international launchpad for high-potential startups, research-led innovations and impact ventures seeking to expand beyond their home markets.
          </p>
          <p className="text-[11px] text-forest/70 leading-relaxed mb-8">
            We connect selected ventures with the UK's business, academic, investor and innovation ecosystems—helping them validate, grow and scale globally.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-2.5 text-[11px] font-bold tracking-[0.1em] text-forest transition-all hover:bg-forest/5">
            Explore the Programme <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full border border-forest/15 flex items-center justify-center text-forest mb-4">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-bold text-forest-deep mb-2">{item.title}</h4>
                <p className="text-[10px] text-forest/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function OurVentures() {
  const [filter, setFilter] = useState("All");
  
  const ventures = [
    { name: "KAVACH AI", track: "Venture Track", icon: <Shield className="h-8 w-8 text-indigo-700" />, desc: "AI-powered solutions for security and risk management across critical infrastructure, enterprises and public systems.", slug: "kavach-ai" },
    { name: "CARBON SYNC", track: "Venture Track", icon: <Leaf className="h-8 w-8 text-emerald-600" />, desc: "A sustainability intelligence platform that helps organisations measure, manage and reduce carbon impact with precision and transparency.", slug: "carbon-sync" },
    { name: "PROJECT TACTO", track: "Venture Track", icon: <Atom className="h-8 w-8 text-orange-600" />, desc: "Building advanced tactile sensing solutions that enhance human-machine interaction across robotics, healthcare and assistive technologies.", slug: "project-tacto" },
    { name: "VYOMVEDA", track: "Research Track", icon: <Sparkles className="h-8 w-8 text-blue-900" />, desc: "Researching space weather intelligence and predictive modelling to support resilient space and satellite operations.", slug: "vyomveda" },
    { name: "CELLUNOVA", track: "Research Track", icon: <Microscope className="h-8 w-8 text-teal-600" />, desc: "Developing innovative cellular therapeutics and biomaterials through cutting-edge research in regenerative medicine.", slug: "cellunova" },
    { name: "SAIVYY", track: "Venture Track", icon: <FlaskConical className="h-8 w-8 text-slate-800" />, desc: "A digital health platform improving access to quality care through AI-driven diagnostics and patient empowerment tools.", slug: "saivyy" },
  ];
  
  const filtered = filter === "All" ? ventures : ventures.filter(v => v.track === filter);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-forest/20" />
            <h2 className="text-xl font-serif italic text-forest-deep">Our Ventures</h2>
            <div className="h-px w-12 bg-forest/20" />
          </div>
          <p className="text-[11px] text-forest/70 max-w-md">
            A portfolio of exceptional startups and research-led innovations from emerging economies.
          </p>
        </div>

        <div className="flex justify-end mb-8">
          <div className="inline-flex bg-cream rounded-full border border-forest/10 p-1">
            {["All", "Venture Track", "Research Track"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold transition-all ${filter === f ? 'bg-forest-deep text-white shadow-md' : 'text-forest/70 hover:text-forest-deep hover:bg-forest/5'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v, i) => (
            <div key={i} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full border border-forest/10 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider border ${v.track === 'Venture Track' ? 'bg-forest/5 text-forest border-forest/20' : 'bg-gold/10 text-gold border-gold/30'}`}>
                  {v.track}
                </div>
              </div>
              <h3 className="text-sm font-bold text-forest-deep mb-3 uppercase tracking-wide">{v.name}</h3>
              <p className="text-[11px] text-forest/70 leading-relaxed mb-6 flex-1">{v.desc}</p>
              <Link to="/ventures/$slug" params={{ slug: v.slug }} className="inline-flex items-center gap-2 text-[11px] font-bold text-forest hover:text-forest-deep group-hover:gap-3 transition-all mt-auto">
                Know More <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function Journey() {
  const steps = [
    { num: 1, icon: <Search className="h-6 w-6" />, title: "Discover", desc: "We identify high-potential ventures with the potential to solve meaningful problems at scale." },
    { num: 2, icon: <ClipboardCheck className="h-6 w-6" />, title: "Diagnose", desc: "A deep-dive assessment of your strategy, market, team, technology and global readiness." },
    { num: 3, icon: <TrendingUp className="h-6 w-6" />, title: "Strengthen", desc: "Tailored plan with mentoring, expert input, validation and venture-building support." },
    { num: 4, icon: <Network className="h-6 w-6" />, title: "Connect", desc: "Introductions to investors, researchers, corporates and ecosystem partners." },
    { num: 5, icon: <Send className="h-6 w-6" />, title: "Launch", desc: "Support for partnerships, pilots, viability and market entry through the UK." },
    { num: 6, icon: <Target className="h-6 w-6" />, title: "Sustain & Scale", desc: "Continued support until you achieve sustainable, independent and scalable growth." },
  ]
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex items-center gap-4 justify-center mb-16">
          <div className="h-px w-12 bg-forest/20" />
          <h2 className="text-xl font-serif italic text-forest-deep">Our Venture Journey</h2>
          <div className="h-px w-12 bg-forest/20" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-forest/20 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border border-forest/10 flex items-center justify-center text-forest mb-4 relative shadow-sm">
                {step.icon}
                <div className="absolute -bottom-2 w-6 h-6 rounded-full bg-forest-deep text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  {step.num}
                </div>
              </div>
              <h4 className="text-[12px] font-bold text-forest-deep mt-2 mb-2">{step.title}</h4>
              <p className="text-[10px] text-forest/70 leading-relaxed max-w-[140px]">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function TrackComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Venture Track */}
          <div className="flex-1 bg-forest-deep text-white relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
              <img src={businessLeadersImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-forest-deep/90" />
            <div className="relative p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Venture Track</h3>
                  <p className="text-[10px] text-white/70">For startups with a defined proposition looking to validate, grow and scale globally.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {[
                  "Business model & strategy development",
                  "Customer & market validation",
                  "Investor readiness & fundraising support",
                  "Partnerships & market-entry planning",
                  "Scaling support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-white/40 shrink-0" />
                    <span className="text-[11px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Track */}
          <div className="flex-1 bg-gold text-forest-deep relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
              <img src={heroClassroomImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gold/90" />
            <div className="relative p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center">
                  <FlaskConical className="h-5 w-5 text-forest-deep" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Research Track</h3>
                  <p className="text-[10px] text-forest-deep/70">For research-led innovations requiring further validation collaboration before commercialisation.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {[
                  "Research collaboration & technical validation",
                  "Expert & academic engagement",
                  "IP & commercialisation pathway guidance",
                  "Venture formation support",
                  "From knowledge to global impact"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-forest-deep/40 shrink-0" />
                    <span className="text-[11px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function WhoShouldApply() {
  const items = [
    { icon: <Briefcase className="h-8 w-8" />, title: "High-potential startups" },
    { icon: <FlaskConical className="h-8 w-8" />, title: "Research-led innovations" },
    { icon: <GraduationCap className="h-8 w-8" />, title: "University spinouts & researcher teams" },
    { icon: <Target className="h-8 w-8" />, title: "Impact ventures" },
    { icon: <Globe2 className="h-8 w-8" />, title: "Founders seeking international expansion" },
  ]
  return (
    <section className="py-24 bg-white border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-forest-deep mb-4">Who Should Apply?</h2>
          <p className="text-[11px] text-forest/70 leading-relaxed max-w-sm">
            We seek ambitious founders and researchers creating solutions with the potential for meaningful global impact.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-[120px]">
              <div className="text-forest/50 mb-4">
                {item.icon}
              </div>
              <p className="text-[10px] font-bold text-forest-deep leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  const ctas = [
    { icon: <TrendingUp className="h-5 w-5" />, title: "For Investors", desc: "Access a curated pipeline of high-potential ventures.", link: "Explore Opportunities" },
    { icon: <Building2 className="h-5 w-5" />, title: "For Universities", desc: "Collaborate on research, innovation and impact.", link: "Become a Partner" },
    { icon: <Briefcase className="h-5 w-5" />, title: "For Corporates", desc: "Pilot, co-create and access new solutions.", link: "Work With Us" },
    { icon: <Users className="h-5 w-5" />, title: "For Mentors", desc: "Guide exceptional founders globally.", link: "Join the Mentor Network" },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-forest-deep rounded-3xl p-12 shadow-2xl flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <h2 className="text-[2rem] font-bold text-white leading-tight mb-4">
              Let's build global impact—<span className="italic text-gold">together.</span>
            </h2>
            <p className="text-[11px] text-white/70 leading-relaxed">
              Partner with us to empower ventures, create value and shape a better future.
            </p>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {ctas.map((cta, i) => (
              <div key={i} className="flex flex-col border-l border-white/10 pl-6 hover:border-gold transition-colors">
                <div className="text-white/50 mb-4">{cta.icon}</div>
                <h4 className="text-sm font-bold text-white mb-2">{cta.title}</h4>
                <p className="text-[10px] text-white/60 leading-relaxed mb-6 flex-1 max-w-[200px]">{cta.desc}</p>
                <button className="inline-flex items-center gap-2 text-[10px] font-bold text-gold hover:text-white transition-colors uppercase tracking-wider mt-auto">
                  {cta.link} <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}


