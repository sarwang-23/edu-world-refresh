import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Building2,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Download,
  Globe2,
  Handshake,
  Lightbulb,
  Leaf,
  Lock,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
  Activity,
  Rocket,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { buildMeta } from "@/lib/seo";

type Venture = {
  slug: string;
  name: string;
  track: "Venture Track" | "Research Track";
  tagline: string;
  intro: string;
  sector: string;
  stage: string;
  origin: string;
  markets: string;
  logo: React.ReactNode;
  color: string;
  accentColor?: string;
  problem: string;
  solution: string;
  matters: string;
  impact: string;
  highlights: { title: string; desc: string; icon: React.ReactNode }[];
  progress: string[];
  metrics: { l: string; v: string; subtitle?: string; icon?: React.ReactNode }[];
  team: { name: string; role: string; bio: string; img?: string }[];
  seeking: { icon: React.ReactNode; t: string; d: string }[];
  roadmap: { period: string; icon: React.ReactNode; items: string[]; phase?: string }[];
  heroImg?: string;
  awards?: string[];
};

const VENTURE: Venture = {
  slug: "carbonsynq",
  name: "CarbonSynq",
  track: "Venture Track",
  tagline: "AI-powered carbon accounting, verification, and trading for a net-zero economy.",
  intro:
    "CarbonSynq lets organisations automate emissions measurement, verify data with satellite + blockchain-based MRV, and connect directly to a transparent carbon marketplace — all on one platform.",
  sector: "Climate Tech • SaaS",
  stage: "Seed",
  origin: "India",
  markets: "Global",
  logo: <Leaf className="h-12 w-12 text-emerald-400" strokeWidth={1.5} />,
  color: "from-[#071A10] via-[#0A2118] to-[#071A10]",
  accentColor: "emerald",
  problem:
    "Organisations face growing pressure to measure and report their carbon footprint accurately, but existing processes are manual, fragmented and hard to verify. This makes carbon accounting slow, error‑prone and difficult to trust — creating barriers to credible climate action, regulatory compliance and participation in carbon markets.",
  solution:
    "CarbonSynq lets organisations automate emissions measurement, verify data with greater confidence, and connect directly to a transparent, trustworthy carbon marketplace — all on one platform. This is powered by our proprietary blend of AI‑driven accounting and satellite + blockchain‑based MRV.",
  matters:
    "Accurate, verifiable carbon accounting is foundational to credible climate action, regulatory compliance, and trust in carbon markets.",
  impact:
    "Facilitates credible climate action, unlocks market participation, and drives measurable progress toward net‑zero commitments.",
  highlights: [
    {
      title: "AI‑Powered Accounting",
      desc: "Satellite and blockchain‑based MRV for verifiable, tamper-proof emissions data at scale.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      title: "Integrated Marketplace",
      desc: "Direct carbon credit marketplace connecting accounting with trading on one unified platform.",
      icon: <Globe2 className="h-5 w-5" />,
    },
    {
      title: "Accelerator Backed",
      desc: "Selected for the Galgotias College of Engineering & Technology startup accelerator.",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      title: "Global Recognition",
      desc: "Presented at GSDC 2026 in Jakarta & featured on Republic TV.",
      icon: <Award className="h-5 w-5" />,
    },
  ],
  progress: [
    "Selected for the Galgotias College accelerator (2026)",
    "Presented at GSDC 2026 in Jakarta",
    "Featured on Republic TV",
    "Completed first version of AI emissions accounting engine",
  ],
  metrics: [{ l: "Team Size", v: "10", icon: <Users className="h-5 w-5" /> }],
  team: [
    {
      name: "Pushkar Singh",
      role: "Founder & CEO",
      img: "/team/pushkar.jpeg",
      bio: "B.Tech Electrical Engineering student at Galgotias University, leading the venture through the Galgotias accelerator programme.",
    },
    {
      name: "Mr. Rachit Mathur",
      role: "Mentor",
      bio: "Advisors and domain experts.",
    },
  ],
  seeking: [
    {
      icon: <Building2 className="h-5 w-5" />,
      t: "Pilot Partners",
      d: "Enterprises to validate and deploy CarbonSynq's AI carbon accounting platform.",
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      t: "Strategic Partners",
      d: "Carbon registries, satellite data providers, or enterprise integration partners.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      t: "Mentors & Experts",
      d: "Experts in climate finance, carbon markets, enterprise sales, and regulatory compliance.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      t: "Ecosystem Collaboration",
      d: "Regulators, research labs, and sustainability-focused corporates who want to co-develop credible MRV standards.",
    },
  ],
  roadmap: [
    {
      period: "Current",
      icon: <Rocket className="h-5 w-5" />,
      items: ["Deploy pilots with early adopters", "Refine AI accounting engine"],
      phase: "MVP",
    },
    {
      period: "Next 12 Months",
      icon: <TrendingUp className="h-5 w-5" />,
      items: ["Scale platform, add marketplace features", "Onboard first 10 enterprise clients"],
      phase: "Growth",
    },
    {
      period: "2027+",
      icon: <Globe className="h-5 w-5" />,
      items: ["Global expansion", "Regulatory certifications across key markets"],
      phase: "Scale",
    },
  ],
  heroImg:
    "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop",
  awards: ["Accelerator Backed", "GSDC 2026 Jakarta"],
};

export const Route = createFileRoute("/ventures/carbonsynq")({
  head: () => buildMeta("/ventures/carbonsynq"),
  component: VenturePage,
});

function VenturePage() {
  const v = VENTURE;
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = [
    "Overview",
    "The Opportunity",
    "Progress",
    "Team",
    "Roadmap",
    "Collaborate",
    "GEL's Role",
  ];

  const scrollTo = (tab: string) => {
    setActiveTab(tab);
    const id = tab.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 170;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans">
      <Hero v={v} />
      <MetadataBar v={v} />
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollTo(tab)}
                className={`shrink-0 px-4 py-4 text-[12.5px] font-semibold border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      <MainContent v={v} />
      <GelsRole v={v} />
      <BottomCTA v={v} />
      <Footer />
    </div>
  );
}

function Hero({ v }: { v: Venture }) {
  const brandColor = v.color || "from-slate-900 via-blue-950 to-slate-900";
  return (
    <section
      className={`text-white relative overflow-hidden bg-gradient-to-br ${brandColor} min-h-[580px] md:min-h-[660px] flex items-center`}
    >
      {/* Hero image overlay */}
      {v.heroImg && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${v.heroImg})`, opacity: 0.18 }}
        />
      )}
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
      {/* Emerald glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-teal-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 pt-14 pb-32 z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-14">
          <Link
            to="/global-ventures"
            className="hover:text-white/65 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="h-3 w-3" /> Global Ventures
          </Link>
          <ChevronRight className="h-3 w-3 text-white/20" />
          <span className="text-white/65">{v.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: Text content */}
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Track + award badges */}
            <div className="flex items-center gap-3 mb-7 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10.5px] font-black uppercase tracking-[0.2em] border bg-emerald-500/15 border-emerald-400/25 text-emerald-300">
                {v.track}
              </span>
              {v.awards && v.awards.length > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/15 border border-amber-400/25 rounded-full text-[10.5px] font-black uppercase tracking-[0.18em] text-amber-300">
                  <Award className="h-3 w-3" /> Award Winning
                </span>
              )}
            </div>

            {/* Venture name */}
            <h1 className="font-extrabold leading-[0.88] tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/50 text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] block">
                {v.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-light text-white/70 leading-[1.4] max-w-2xl mb-5">
              {v.tagline}
            </p>

            {/* Intro */}
            <p className="text-[14.5px] text-white/50 leading-[1.9] max-w-xl mb-10">{v.intro}</p>

            {/* Awards strip */}
            {v.awards && v.awards.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-2.5 mb-10">
                {v.awards.map((award, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/10 rounded-xl text-[12.5px] text-white/60 backdrop-blur-sm font-medium"
                  >
                    {award}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ source: v.name }}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl text-[14px] font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200"
              >
                Request Introduction <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.carbonsynqearth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/[0.07] text-white border border-white/15 px-7 py-3.5 rounded-xl text-[14px] font-semibold hover:bg-white/[0.12] transition-all backdrop-blur-sm"
              >
                <Globe2 className="h-4 w-4" /> Visit Site
              </a>
            </div>
          </div>

          {/* Right: Logo card */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] blur-[60px] scale-110 pointer-events-none bg-emerald-500/20" />
              <div className="relative bg-white/[0.06] backdrop-blur-2xl border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col items-center gap-5 shadow-2xl min-w-[230px]">
                {/* Logo icon */}
                <div className="w-24 h-24 rounded-3xl border flex items-center justify-center shadow-inner shrink-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border-emerald-400/20">
                  <div className="scale-[1.1]">{v.logo}</div>
                </div>
                {/* Name & origin */}
                <div className="text-center">
                  <p className="text-[9.5px] font-black uppercase tracking-[0.28em] text-white/30 mb-1.5">
                    Venture
                  </p>
                  <p className="text-[16px] font-bold text-white leading-snug">{v.name}</p>
                </div>
                <div className="w-full h-px bg-white/[0.08]" />
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex items-center gap-2 text-white/35 text-[12px]">
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    <span>{v.origin}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-3 py-1 bg-emerald-500/15 border border-emerald-400/20 rounded-full text-[10.5px] font-bold text-emerald-300">
                      Climate Tech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetadataBar({ v }: { v: Venture }) {
  const items = [
    { icon: <Cpu className="h-4 w-4" />, label: "Sector", value: v.sector },
    { icon: <TrendingUp className="h-4 w-4" />, label: "Stage", value: v.stage },
    { icon: <Globe className="h-4 w-4" />, label: "Origin", value: v.origin },
    { icon: <Target className="h-4 w-4" />, label: "Target Markets", value: v.markets },
  ];
  return (
    <div className="relative z-20 -mt-11 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.09)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5 px-5 py-5 lg:px-6 lg:py-6">
              <div className="p-2 rounded-lg border shrink-0 mt-0.5 text-emerald-600 bg-emerald-50 border-emerald-100/60">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                  {item.label}
                </p>
                <p className="text-[13px] font-semibold text-slate-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

function MainContent({ v }: { v: Venture }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ─── LEFT MAIN COLUMN ─── */}
        <div className="flex-1 min-w-0 flex flex-col gap-12">
          {/* ── Overview ── */}
          <div id="overview" className="scroll-mt-52">
            <SectionHeader label="Overview" />
            <div className="grid md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-[15px]">The Problem</h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-[1.8]">{v.problem}</p>
              </div>
              {/* Solution */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-[15px]">Our Solution</h3>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-[1.8]">{v.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── The Opportunity (highlights) ── */}
          <div id="the-opportunity" className="scroll-mt-52">
            <SectionHeader label="Platform Highlights" />
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-8">
                {v.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[14px] mb-1.5">{h.title}</h4>
                      <p className="text-slate-500 text-[13px] leading-[1.7]">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why It Matters ── */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-emerald-600 font-black uppercase tracking-widest text-[10px] mb-5">
                Why It Matters
              </h3>
              <p className="text-2xl font-bold leading-[1.5] text-slate-900 mb-4">{v.matters}</p>
              <p className="text-slate-500 leading-relaxed text-[15px]">{v.impact}</p>
            </div>
            <div
              className="md:w-1/2 min-h-[220px] bg-cover bg-center"
              style={{ backgroundImage: `url(${v.heroImg})` }}
            />
          </div>

          {/* ── Progress ── */}
          <div id="progress" className="scroll-mt-52">
            <SectionHeader label="Progress to Date" />
            <div className="rounded-2xl overflow-hidden relative shadow-xl bg-[#071A10]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10 p-7 sm:p-9">
                <div className="space-y-4 mb-9">
                  {v.progress.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border bg-emerald-500/20 border-emerald-400/30">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      </div>
                      <span className="text-[14px] text-slate-300/85 leading-[1.8]">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.06] pt-7">
                  <p className="text-[9.5px] font-black uppercase tracking-[0.25em] text-slate-600 mb-5">
                    Key Metrics
                  </p>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                    {v.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-3 py-5 text-center hover:bg-white/[0.065] transition-colors group cursor-default"
                      >
                        {m.icon && (
                          <div className="flex justify-center mb-3 text-emerald-400/60 group-hover:scale-110 transition-transform">
                            {m.icon}
                          </div>
                        )}
                        <div className="font-black text-white tracking-tight leading-none mb-2 text-2xl sm:text-3xl">
                          {m.v}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">{m.l}</div>
                        {m.subtitle && (
                          <div className="text-[10px] text-slate-600 mt-1">{m.subtitle}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Team ── */}
          <div id="team" className="scroll-mt-52">
            <SectionHeader label="Founding Team" />
            <div
              className={`grid gap-5 ${v.team.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3"}`}
            >
              {v.team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 px-6 pt-7 pb-6 flex flex-col items-center text-center border-b border-slate-100">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-lg ring-1 mb-4 ring-emerald-100">
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-black bg-gradient-to-br from-emerald-500 to-teal-600">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-black mt-1 uppercase tracking-[0.15em] text-emerald-600">
                      {member.role}
                    </p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[13px] text-slate-500 leading-[1.8] text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] text-slate-400 italic mt-5 text-center leading-relaxed">
              Our team combines technical depth in AI and climate data with hands-on experience
              building and scaling CarbonSynq through a competitive accelerator programme.
            </p>
          </div>

          {/* ── Roadmap ── */}
          <div id="roadmap" className="scroll-mt-52">
            <SectionHeader label="Roadmap" />
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400" />
              <div className="p-7 sm:p-9">
                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                    {v.roadmap.map((stage, i) => (
                      <div key={i} className="flex flex-col items-start">
                        <div className="relative z-10 flex items-center gap-3 mb-4">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 border-2 border-white ${
                              i === 0 ? "bg-emerald-600" : i === 1 ? "bg-teal-600" : "bg-green-700"
                            }`}
                          >
                            {stage.icon}
                          </div>
                          {stage.phase && (
                            <span
                              className={`text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border hidden md:block ${
                                i === 0
                                  ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                                  : "bg-slate-50 border-slate-200 text-slate-400"
                              }`}
                            >
                              {stage.phase}
                            </span>
                          )}
                        </div>
                        <h4 className="text-[14px] font-bold text-slate-800 mb-3 leading-tight">
                          {stage.period}
                        </h4>
                        <ul className="space-y-2">
                          {stage.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 text-[13px] text-slate-500 leading-[1.7]"
                            >
                              <span
                                className={`mt-[8px] w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-emerald-400" : "bg-slate-300"}`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0 mt-2 lg:mt-0 lg:sticky lg:top-[172px] flex flex-col gap-5 self-start">
          {/* Collaborate CTA card */}
          <div
            id="collaborate"
            className="rounded-2xl p-7 text-white relative overflow-hidden shadow-xl bg-[#071A10]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400" />
            <div className="relative z-10">
              <h3 className="text-[17px] font-bold mb-2 leading-snug">
                Collaborate with {v.name.split(" ")[0]}
              </h3>
              <p className="text-[13px] text-white/45 mb-6 leading-relaxed">
                Connect with the founding team to explore pilots, partnerships, and investment
                opportunities.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  search={{ source: v.name }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-[13.5px] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 bg-emerald-500 hover:bg-emerald-400 text-white"
                >
                  Request Introduction <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.carbonsynqearth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white/[0.07] text-white border border-white/[0.12] rounded-xl py-3.5 text-[13.5px] font-semibold hover:bg-white/[0.12] transition-all"
                >
                  <Globe2 className="h-4 w-4" /> Visit Site
                </a>
              </div>
              <div className="flex items-start gap-2.5 mt-6 pt-5 border-t border-white/[0.07]">
                <Lock className="h-4 w-4 text-white/25 shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-white/25 leading-relaxed">
                  Introductions are subject to relevance and founder approval.
                </p>
              </div>
            </div>
          </div>

          {/* Seeking section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
            <div className="p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 mb-5">
                Currently Seeking
              </p>
              <div className="flex flex-col gap-5">
                {v.seeking.map((s, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-slate-900 mb-0.5">{s.t}</p>
                      <p className="text-[12px] text-slate-500 leading-[1.6]">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 mb-5">
              Quick Stats
            </p>
            <div className="space-y-4">
              {v.metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-500">{m.l}</span>
                  <span className="text-[14px] font-black text-slate-900">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GelsRole({ v }: { v: Venture }) {
  const items = [
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Accelerate Product-Market Fit",
      desc: "GEL helps ventures like CarbonSynq sharpen their go-to-market strategy and connect with early enterprise customers.",
    },
    {
      icon: <Users className="h-5 w-5 text-emerald-500" />,
      title: "Mentorship Network",
      desc: "Access to GEL's global network of domain experts in climate finance, enterprise sales, and regulatory compliance.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-emerald-500" />,
      title: "Global Exposure",
      desc: "Opportunities to present at international forums like GSDC and connect with investors and partners worldwide.",
    },
  ];
  return (
    <section id="gels-role" className="bg-slate-50 border-t border-b border-slate-200 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
            GEL's Role
          </p>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="grid sm:grid-cols-3 gap-7">
          {items.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2">{item.title}</h4>
              <p className="text-slate-500 text-[13px] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA({ v }: { v: Venture }) {
  return (
    <section className="relative overflow-hidden bg-[#071A10] text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-teal-900/30 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center px-6 z-10">
        <p className="text-[10.5px] font-black uppercase tracking-[0.25em] text-emerald-400/60 mb-4">
          Join the Journey
        </p>
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
          Ready to collaborate with {v.name}?
        </h3>
        <p className="text-white/50 text-[15px] mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you're an enterprise, investor, or domain expert — there's a role for you in the
          net-zero transition.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/contact"
            search={{ source: `${v.name} CTA` }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-[15px] font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/global-ventures"
            className="inline-flex items-center gap-2 bg-white/[0.07] text-white border border-white/15 px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-white/[0.12] transition-all"
          >
            View All Ventures
          </Link>
        </div>
      </div>
    </section>
  );
}
