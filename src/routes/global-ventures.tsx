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
import { useState } from "react";
import cambridgeImg from "@/assets/cambridge.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";

export const Route = createFileRoute("/global-ventures")({
  head: () => ({
    meta: [
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
      <Footer />
    </div>
  );
}

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
            >
              Explore Our Services <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3 text-sm font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Talk to Our Team
            </a>
          </div>
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
        </div>
      </div>
    </section>
  );
}

const metrics = [
  { k: "12+", v: "Years of cross-border practice" },
  { k: "50+", v: "Ventures supported" },
  { k: "20+", v: "Investor & VC partners" },
  { k: "3", v: "Continents of operation" },
];

function Metrics() {
  const marqueeGroup = (
    <div className="flex gap-16 px-8 min-w-max items-center">
      {metrics.map((m) => (
        <div key={m.v} className="border-l border-forest/15 pl-5">
          <p className="text-4xl font-bold tracking-tight text-forest-deep md:text-5xl">{m.k}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-forest/60">{m.v}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="border-b border-border/60 bg-background overflow-hidden py-16 md:py-20 flex">
      <div className="animate-marquee">
        {marqueeGroup}
        {marqueeGroup}
        {marqueeGroup}
        {marqueeGroup}
      </div>
    </section>
  );
}

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          {portfolio.map((p, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={p.title}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group cursor-pointer rounded-2xl border p-8 backdrop-blur transition-all duration-300 ${
                  isActive 
                    ? "bg-forest/60 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]" 
                    : "bg-forest/40 border-cream/10 hover:bg-forest/50 hover:border-cream/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isActive ? "bg-gold text-forest-deep" : "bg-forest text-gold group-hover:bg-forest-deep"
                  }`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  {isActive ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  ) : (
                    <span className="text-xs font-medium tracking-[0.2em] text-cream/50 transition-colors duration-300 group-hover:text-cream/70">
                      {p.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  "A dedicated launchpad for Indian businesses entering the UK and Europe.",
  "End-to-end support — from strategy and incorporation to customer acquisition and fundraising.",
  "Access to a trusted international network of investors, mentors, universities, corporates and policymakers.",
  "Backed by the global academic and innovation ecosystem of Global Education Lab.",
];

function WhyUs() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Why Global Ventures
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl max-w-3xl">
            The gateway between Indian innovation and global markets.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-12 items-center">
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
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-xl">
              <img src={cambridgeImg} alt="International network" className="h-full min-h-[400px] w-full object-cover" />
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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