<<<<<<< HEAD
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer } from "./index";
import { 
  ArrowUpRight, 
  Globe2, 
  Building2, 
  TrendingUp, 
  Landmark, 
  Network, 
  GraduationCap, 
  CheckCircle2,
  Rocket,
  LineChart,
  FlaskConical
} from "lucide-react";

import businessLeadersImg from "@/assets/business-leaders.jpg";
import cambridgeImg from "@/assets/cambridge.jpg";
=======
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Globe2,
  Building2,
  TrendingUp,
  Coins,
  Network,
  Compass,
  Rocket,
  LineChart,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";
import cambridgeImg from "@/assets/cambridge.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2

export const Route = createFileRoute("/global-ventures")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "Global Ventures — Global Education Lab" },
      {
        name: "description",
        content:
          "Launch. Expand. Scale Globally. Global Ventures is the business growth and international expansion arm of Global Education Lab.",
      },
    ],
  }),
  component: GlobalVentures,
});

function GlobalVentures() {
  return (
    <div className="min-h-screen bg-cream font-sans text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <WhatWeDo />
      <Portfolio />
      <WhyGlobalVentures />
      <VisionAndCTA />
=======
      { title: "Global Ventures — Launch, Expand & Scale Globally | Global Education Lab" },
      {
        name: "description",
        content:
          "Global Ventures helps Indian startups, businesses and research-led innovations launch and scale in the UK and Europe with market entry, capital access and a trusted global network.",
      },
      { property: "og:title", content: "Global Ventures — From India to the World" },
      {
        property: "og:description",
        content:
          "The business growth and international expansion arm of Global Education Lab — bridging Indian entrepreneurs with UK and European markets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlobalVenturesPage,
});

function GlobalVenturesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <Hero />
      <Metrics />
      <WhatWeDo />
      <Portfolio />
      <WhyUs />
      <Vision />
      <CTA />
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #0a3a2a 1px, transparent 1px), linear-gradient(to bottom, #0a3a2a 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background/60 px-4 py-1.5 text-[14px] font-bold uppercase tracking-[0.2em] text-forest/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Global Ventures
          </div>
          
          <h1 className="mt-8 text-[3.5rem] font-bold leading-[1.05] text-forest md:text-7xl lg:text-[5rem] tracking-tight">
            Launch. Expand.<br />
            Scale <span className="italic text-gold">Globally.</span>
          </h1>
          
          <p className="mt-8 text-[17px] leading-[1.65] text-forest/80 max-w-lg">
            Global Ventures is the business growth and international expansion arm of <strong>Global Education Lab</strong>, dedicated to helping Indian startups, businesses and innovation-led ventures establish and scale in the United Kingdom and Europe.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[14px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
=======
function Nav() {
  const links = [
    { label: "Programmes", href: "/" },
    { label: "Who We Serve", href: "/" },
    { label: "Global Ventures", href: "/global-ventures" },
    { label: "Gallery", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
            Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                l.label === "Global Ventures" ? "text-forest" : "text-forest/75"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep md:inline-flex"
        >
          Partner With Us <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-forest/70">
            <Globe2 className="h-3.5 w-3.5 text-gold" /> Global Ventures
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-forest-deep md:text-[5.5rem]">
            Launch. Expand.<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-forest-deep">Scale </span>
              <span className="relative z-10 italic text-gold">Globally.</span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-gold/25" />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-forest/80 md:text-xl">
            Global Ventures is the business growth and international expansion arm of{" "}
            <span className="font-semibold text-forest-deep">Global Education Lab</span>, dedicated
            to helping Indian startups, businesses and innovation-led ventures establish and scale
            in the United Kingdom and Europe.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
            >
              Explore Our Services <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
<<<<<<< HEAD
              className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-3.5 text-[14px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
=======
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3 text-sm font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
            >
              Talk to Our Team
            </a>
          </div>
<<<<<<< HEAD
          
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-forest/20" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-forest/50">
              India · United Kingdom · Europe
            </span>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-forest/20 aspect-[4/5] max-w-md ml-auto">
            <img 
              src={businessLeadersImg} 
              alt="Business Leaders" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/90 to-transparent" />
            
            {/* Floating Card */}
            <div className="absolute -left-6 bottom-12 rounded-2xl bg-white p-5 shadow-xl shadow-forest/10 border border-forest/5 hidden md:block">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-forest/50 mb-1">Active Corridor</p>
              <p className="text-xl font-bold text-forest tracking-tight">IN → UK · EU</p>
            </div>
          </div>
=======
          <div className="mt-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-forest/60">
            <span className="h-px w-10 bg-forest/30" />
            India · United Kingdom · Europe
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl">
            <img
              src={businessLeadersImg}
              alt="International business leaders"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">From India to the World</p>
              <p className="mt-1 text-xl font-semibold text-cream">
                Global ambition, global execution.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/70 bg-background p-5 shadow-xl md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-forest/60">
              Active Corridor
            </p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-forest-deep">IN → UK · EU</p>
          </div>
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Stats() {
  const stats = [
    { value: "12+", label: "Years of Cross-Border\nPractice" },
    { value: "50+", label: "Ventures Supported" },
    { value: "20+", label: "Investor & VC Partners" },
    { value: "3", label: "Continents of Operation" }
  ];

  const marqueeGroup = (
    <div className="flex items-center min-w-max">
      {stats.map((stat, i) => (
        <div key={i} className="px-16 flex-1 flex flex-col justify-center border-l border-forest/10 min-w-[300px]">
          <p className="text-4xl md:text-5xl font-bold text-forest tracking-tight">{stat.value}</p>
          <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.15em] text-forest/50 whitespace-pre-line leading-relaxed">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white border-t border-b border-forest/10 py-12 relative z-10 overflow-hidden flex">
      <div className="animate-marquee">
        {marqueeGroup}
        {marqueeGroup}
        {marqueeGroup}
        {marqueeGroup}
=======
const metrics = [
  { k: "12+", v: "Years of cross-border practice" },
  { k: "50+", v: "Ventures supported" },
  { k: "20+", v: "Investor & VC partners" },
  { k: "3", v: "Continents of operation" },
];

function Metrics() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 md:py-20">
        {metrics.map((m) => (
          <div key={m.v} className="border-l border-forest/15 pl-5">
            <p className="text-4xl font-bold tracking-tight text-forest-deep md:text-5xl">{m.k}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-forest/60">{m.v}</p>
          </div>
        ))}
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
      </div>
    </section>
  );
}

<<<<<<< HEAD
function WhatWeDo() {
  const services = [
    {
      title: "International Market Entry",
      desc: "Establish your business in the UK and Europe with a structured market entry strategy, customer validation and go-to-market support.",
      icon: Globe2,
      isGold: false
    },
    {
      title: "Company Formation & Compliance",
      desc: "Navigate incorporation, legal structures, taxation, accounting, IP, visas and regulatory compliance with confidence.",
      icon: Building2,
      isGold: false
    },
    {
      title: "Business Growth & Commercialisation",
      desc: "Develop market strategies, build strategic partnerships, identify customers and accelerate revenue across international markets.",
      icon: TrendingUp,
      isGold: false
    },
    {
      title: "Investment & Capital Access",
      desc: "Connect with angel investors, VC firms, corporate investors, government grants and innovation funding across the UK and Europe.",
      icon: Landmark,
      isGold: false
    },
    {
      title: "Global Business Network",
      desc: "Access an ecosystem of industry leaders, mentors, universities, corporates, investors, accelerators and innovation partners.",
      icon: Network,
      isGold: false
    },
    {
      title: "Leadership & Mentorship",
      desc: "Guidance from experienced entrepreneurs, investors and international experts who have successfully built and scaled global companies.",
      icon: GraduationCap,
      isGold: false
    },
  ];

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">What We Do</h2>
          <h3 className="mt-4 text-[2.5rem] font-bold leading-[1.1] text-forest md:text-5xl tracking-tight">
            End-to-end support for global expansion.
          </h3>
          <p className="mt-6 text-[17px] leading-[1.6] text-forest/70">
            Whether you're an early-stage startup, a growth-stage company, or a research-led innovation with commercial potential — we help you transform ambition into execution.
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-background border border-forest/5 p-8 transition-all hover:shadow-xl hover:shadow-forest/5 hover:-translate-y-1"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-[0.8rem] ${s.isGold ? 'bg-gold/20 text-gold-dark' : 'bg-forest text-primary-foreground'}`}>
                <s.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h4 className="mt-6 text-xl font-bold leading-tight text-forest">
                {s.title}
              </h4>
              <p className="mt-3 text-[14px] leading-[1.6] text-forest/70">
                {s.desc}
              </p>
=======
const services = [
  {
    icon: Compass,
    title: "International Market Entry",
    body: "Establish your business in the UK and Europe with a structured market entry strategy, customer validation and go-to-market support.",
  },
  {
    icon: Building2,
    title: "Company Formation & Compliance",
    body: "Navigate incorporation, legal structures, taxation, accounting, IP, visas and regulatory compliance with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth & Commercialisation",
    body: "Develop market strategies, build strategic partnerships, identify customers and accelerate revenue across international markets.",
  },
  {
    icon: Coins,
    title: "Investment & Capital Access",
    body: "Connect with angel investors, VC firms, corporate investors, government grants and innovation funding across the UK and Europe.",
  },
  {
    icon: Network,
    title: "Global Business Network",
    body: "Access an ecosystem of industry leaders, mentors, universities, corporates, investors, accelerators and innovation partners.",
  },
  {
    icon: Globe2,
    title: "Leadership & Mentorship",
    body: "Guidance from experienced entrepreneurs, investors and international experts who have successfully built and scaled global companies.",
  },
];

function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl">
            End-to-end support for global expansion.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/75">
            Whether you're an early-stage startup, a growth-stage company, or a research-led
            innovation with commercial potential — we help you transform ambition into execution.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-cream/40 p-8 transition-all hover:border-forest/25 hover:bg-cream"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-cream transition-colors group-hover:bg-gold group-hover:text-forest-deep">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-forest-deep">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest/75">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolio = [
  {
    icon: Rocket,
    tag: "01",
    title: "Startups",
    body: "High-growth technology startups with global ambitions.",
  },
  {
    icon: LineChart,
    tag: "02",
    title: "Growth Businesses",
    body: "Established SMEs and scale-ups seeking international expansion into UK and European markets.",
  },
  {
    icon: FlaskConical,
    tag: "03",
    title: "Research & Innovation",
    body: "University research, deep-tech innovations and IP with strong commercialisation potential.",
  },
];

function Portfolio() {
  return (
    <section className="border-b border-border/60 bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Our Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Three complementary pillars of innovation.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-cream/10 bg-forest/40 p-8 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-forest-deep">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium tracking-[0.2em] text-cream/50">{p.tag}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{p.body}</p>
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const pillars = [
    {
      num: "01",
      title: "Startups",
      desc: "High-growth technology startups with global ambitions.",
      icon: Rocket
    },
    {
      num: "02",
      title: "Growth Businesses",
      desc: "Established SMEs and scale-ups seeking international expansion into UK and European markets.",
      icon: LineChart
    },
    {
      num: "03",
      title: "Research & Innovation",
      desc: "University research, deep-tech innovations and IP with strong commercialisation potential.",
      icon: FlaskConical
    },
  ];

  return (
    <section className="py-24 bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">Our Portfolio</h2>
        <h3 className="mt-4 text-[2.5rem] font-bold leading-[1.1] md:text-5xl tracking-tight">
          Three complementary pillars of<br />innovation.
        </h3>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`cursor-pointer rounded-3xl border border-primary-foreground/10 p-8 transition-colors duration-300 ${isActive ? 'bg-primary-foreground/10' : 'bg-primary-foreground/5 hover:bg-primary-foreground/10'}`}
              >
                <div className="flex justify-between items-start">
                  <div className={`flex items-center justify-center ${isActive ? 'text-gold' : 'text-gold/70'}`}>
                    <p.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  {isActive ? (
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground/40" />
                  ) : (
                    <span className="text-[13px] font-bold tracking-widest text-primary-foreground/40">{p.num}</span>
                  )}
                </div>
                <h4 className="mt-8 text-2xl font-bold text-primary-foreground">{p.title}</h4>
                <p className="mt-3 text-[14px] leading-[1.6] text-primary-foreground/70">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyGlobalVentures() {
  const reasons = [
    "A dedicated launchpad for Indian businesses entering the UK and Europe.",
    "End-to-end support — from strategy and incorporation to customer acquisition and fundraising.",
    "Access to a trusted international network of investors, mentors, universities, corporates and policymakers.",
    "Backed by the global academic and innovation ecosystem of Global Education Lab."
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">Why Global Ventures</h2>
          <h3 className="mt-4 text-[2.5rem] font-bold leading-[1.1] text-forest md:text-5xl tracking-tight max-w-3xl">
            The gateway between Indian innovation and global markets.
          </h3>
        </div>

        <div className="lg:flex lg:gap-20 lg:items-center">
          <div className="lg:w-1/2 flex flex-col">
            <ul className="space-y-8">
              {reasons.map((r, i) => (
                <li key={i} className="flex gap-5 items-start border-b border-forest/10 pb-8 last:border-0 last:pb-0">
                  <div className="mt-0.5 flex-shrink-0 text-gold">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <p className="text-[17px] leading-[1.6] text-forest/80">
                    {r}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-forest/10 aspect-[4/3]">
              <img 
                src={cambridgeImg} 
                alt="Cambridge University" 
                className="w-full h-full object-cover"
              />
=======
const reasons = [
  "A dedicated launchpad for Indian businesses entering the UK and Europe.",
  "End-to-end support — from strategy and incorporation to customer acquisition and fundraising.",
  "Access to a trusted international network of investors, mentors, universities, corporates and policymakers.",
  "Backed by the global academic and innovation ecosystem of Global Education Lab.",
];

function WhyUs() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Why Global Ventures
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl">
            The gateway between Indian innovation and global markets.
          </h2>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 shadow-xl">
            <img src={cambridgeImg} alt="International network" className="h-72 w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <ul className="space-y-6">
            {reasons.map((r) => (
              <li key={r} className="flex gap-4 border-b border-forest/10 pb-6 last:border-0">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-gold" />
                <p className="text-lg leading-relaxed text-forest/85">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(var(--forest)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Our Vision
            </p>
            <div className="mt-4 h-px w-16 bg-gold" />
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-forest-deep md:text-5xl">
              A gateway<br />built for<br />
              <span className="italic text-gold">global scale.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="relative rounded-3xl border border-border/60 bg-cream/50 p-10 md:p-14">
              <span className="absolute -top-6 left-8 font-serif text-8xl leading-none text-gold/70">
                &ldquo;
              </span>
              <p className="text-2xl font-medium leading-[1.35] tracking-tight text-forest-deep md:text-[2rem]">
                To become the leading gateway for{" "}
                <span className="text-gold">Indian innovation</span> to reach global markets —
                building internationally successful companies, accelerating research
                commercialisation and creating a thriving cross-border entrepreneurial ecosystem.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-forest/10 pt-6">
                {["Global Companies", "Research Commercialisation", "Cross-Border Ecosystem"].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest/70">
                        {t}
                      </span>
                    </div>
                  ),
                )}
              </div>
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
function VisionAndCTA() {
  return (
    <>
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:gap-16 items-center">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">Our Vision</h2>
            <h3 className="mt-4 text-[2.5rem] font-bold leading-[1.1] text-forest md:text-5xl tracking-tight">
              A gateway built for <br /><span className="italic text-gold">global scale.</span>
            </h3>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative rounded-[2rem] border border-forest/10 bg-cream p-10 md:p-14">
              {/* Quote Mark Decoration */}
              <div className="absolute -top-6 left-10 text-[5rem] font-serif leading-none text-gold/30">
                “
              </div>
              <p className="relative text-2xl font-medium leading-[1.5] text-forest md:text-3xl tracking-tight">
                To become the leading gateway for <span className="text-gold">Indian innovation</span> to reach global markets — building internationally successful companies, accelerating research commercialisation and creating a thriving cross-border entrepreneurial ecosystem.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-forest/10 pt-8">
                {["Global Companies", "Research Commercialisation", "Cross-Border Ecosystem"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-forest/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">From India to the World</h2>
            <h3 className="mt-4 text-[3.5rem] font-bold leading-[1.05] md:text-6xl tracking-tight">
              Launch confidently.<br />
              Grow sustainably.<br />
              <span className="text-gold">Scale internationally.</span>
            </h3>
            <p className="mt-8 text-[17px] leading-[1.6] text-primary-foreground/70 max-w-lg">
              Global Ventures empowers entrepreneurs to build companies that succeed across borders. Let's start the conversation.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 flex flex-col items-start lg:items-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full sm:w-[280px] rounded-xl bg-gold px-8 py-5 text-[15px] font-bold text-forest transition-all hover:brightness-110"
            >
              Partner With Us <ArrowUpRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-[14px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40 text-center w-full sm:w-[280px]">
              HELLO@GLOBALEDULAB.COM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
=======
function CTA() {
  return (
    <section id="contact" className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              From India to the World
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Launch confidently.<br />Grow sustainably.<br />
              <span className="text-gold">Scale internationally.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
              Global Ventures empowers entrepreneurs to build companies that succeed across borders.
              Let's start the conversation.
            </p>
          </div>
          <div className="md:col-span-4">
            <a
              href="mailto:hello@globaledulab.com"
              className="inline-flex w-full items-center justify-between gap-4 rounded-2xl bg-gold px-8 py-6 text-forest-deep transition-all hover:bg-gold/90"
            >
              <span className="text-lg font-bold tracking-tight">Partner With Us</span>
              <ArrowUpRight className="h-6 w-6" />
            </a>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-cream/60">
              hello@globaledulab.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-xs tracking-wide text-forest/60">
          © {new Date().getFullYear()} Global Education Lab — Global Ventures.
        </p>
        <Link to="/" className="text-xs font-medium tracking-wide text-forest/70 hover:text-forest">
          ← Back to Global.Edu.Lab
        </Link>
      </div>
    </footer>
  );
}
>>>>>>> e362b4e380f74aaa4dadd6403417e05a8880f3b2
