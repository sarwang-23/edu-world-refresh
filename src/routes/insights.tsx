import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, BrainCircuit, Download, GraduationCap, Leaf, Mail, Newspaper } from "lucide-react";
import { Link } from "@tanstack/react-router";
import cambridgeImg from "@/assets/cambridge.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import studentsImg from "@/assets/students.jpg";
import teachersImg from "@/assets/teachers.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Research | Global Education Lab" },
      {
        name: "description",
        content:
          "White papers, executive briefings and research reports from Global Education Lab — capturing perspectives on leadership, artificial intelligence, sustainability and the future of global business.",
      },
      { property: "og:title", content: "Insights & Research | Global Education Lab" },
      {
        property: "og:description",
        content:
          "White papers, executive briefings and research reports from Global Education Lab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <PartnersBar />
      <ResearchThemes />
      <FeaturedPaper />
      <PublicationsArchive />
      <TheBriefing />
    </div>
  );
}

function PartnersBar() {
  const partners = [
    "Harvard Graduate School of Education",
    "University of Helsinki",
    "Stanford d.school",
    "NUS Singapore",
    "MIT Media Lab",
    "University of Cambridge",
  ]
  // Duplicate 4× for seamless loop
  const items = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="border-b border-border/50 bg-white py-8 overflow-hidden">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-forest/50 mb-5">
        PARTNERED WITH THE WORLD'S LEADING UNIVERSITY ECOSYSTEMS
      </p>
      <div className="relative flex overflow-hidden">
        <div
          className="flex min-w-full shrink-0 gap-x-14 items-center"
          style={{
            animation: 'marquee-rtl 25s linear infinite',
            willChange: 'transform',
          }}
        >
          {items.map((partner, idx) => (
            <span
              key={idx}
              className="whitespace-nowrap text-sm font-serif font-semibold text-forest/80 hover:text-forest transition-colors cursor-default"
            >
              {partner}
              <span className="ml-14 text-gold/40 select-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 md:pb-24">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 items-start">
        {/* Text Content */}
        <div className="flex flex-col justify-center lg:col-span-7 pt-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest/70 mb-8 w-fit">
            <BookOpen className="h-3.5 w-3.5 text-gold" />
            INSIGHTS & RESEARCH
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-7xl lg:text-[5.5rem] leading-[1.05]">
            Ideas that shape<br />
            <span className="font-serif italic text-gold relative inline-block">
              global leaders.
              <span className="absolute bottom-2 left-0 h-[3px] w-full bg-gold/30"></span>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground md:text-lg">
            White papers, executive briefings and research reports from <strong>Global Education Lab</strong> — capturing perspectives on leadership, artificial intelligence, sustainability and the future of global business.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Browse Publications
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Featured White Paper
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-forest/40">
            <span className="h-px w-8 bg-forest/20"></span>
            CAMBRIDGE · LONDON · BALI · HELSINKI
          </div>
        </div>

        {/* Image Content */}
        <div className="relative lg:col-span-5 lg:mt-14">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <div className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply z-10" />
            <img
              src={cambridgeImg}
              alt="Cambridge University Court"
              className="h-[480px] w-full object-cover"
            />
            
            {/* Image Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2">LATEST EDITION</p>
              <p className="text-white font-bold text-xl leading-snug">White Paper — Cambridge, March</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 z-30 rounded-2xl border border-forest/10 bg-white p-6 shadow-xl w-40">
            <p className="text-[10px] font-bold uppercase tracking-widest text-forest/40 mb-1">PUBLICATIONS</p>
            <p className="text-2xl font-bold text-forest-deep">3 · 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchThemes() {
  const themes = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-gold" />,
      title: "Leadership & AI",
      desc: "How artificial intelligence is reshaping decision-making and the human core of business.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-gold" />,
      title: "Sustainability",
      desc: "Responsible growth, ESG and frugal innovation across emerging and mature markets.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-gold" />,
      title: "Global Education",
      desc: "Insights on higher education, executive learning and cross-border programmes.",
    },
    {
      icon: <Newspaper className="h-6 w-6 text-gold" />,
      title: "Future of Work",
      desc: "Governance, culture and organisational design for the next decade.",
    },
  ];

  return (
    <section className="py-24 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">RESEARCH THEMES</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-2xl">
            Four lenses on a changing world.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((t, idx) => (
            <div 
              key={idx} 
              tabIndex={0}
              className="cursor-pointer rounded-2xl border border-forest/10 bg-cream p-8 shadow-sm transition-all hover:shadow-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold active:scale-[0.98]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5">
                {t.icon}
              </div>
              <h3 className="text-base font-bold text-forest-deep">{t.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-forest/75">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPaper() {
  return (
    <section className="py-24 bg-forest-deep">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">FEATURED WHITE PAPER · MARCH 2026</p>
            <h2 className="text-4xl font-bold tracking-tight text-cream md:text-6xl leading-[1.1]">
              Global India Leadership Programme — <span className="font-serif italic text-gold">Cambridge 2026.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/80 max-w-md">
              Perspectives from global business leaders and Judge Business School faculty on how artificial intelligence, sustainability, governance and shifting economic dynamics are redefining leadership.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep transition-colors hover:bg-gold/90">
                Access Full Report
                <Download className="h-4 w-4" />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cream/40">JUDGE BUSINESS SCHOOL · CAMBRIDGE</span>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={cambridgeImg} 
                alt="Cambridge courtyard" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-2 py-1 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest rounded mb-3 border border-gold/30">PRIMARY PAPER</span>
                <p className="text-white font-bold text-xl md:text-2xl">Leadership in the Age of AI, Sustainability & Global Change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PublicationsArchive() {
  const reports = [
    {
      num: "NO. 01",
      image: businessLeadersImg,
      category: "LEADERSHIP · AI",
      title: "Leadership in the Age of Artificial Intelligence",
      desc: "How leaders must evolve as AI reshapes decision-making, organisational design and the human core of business.",
      date: "WHITE PAPER · 2026"
    },
    {
      num: "NO. 02",
      image: studentsImg,
      category: "FRUGAL AI · EXECUTIVE AGENDA",
      title: "Frugal AI — Executive Agenda 2026",
      desc: "Doing more with less: a companion research report on responsible, resource-conscious AI strategies for emerging markets.",
      date: "RESEARCH REPORT · MAY 2026"
    },
    {
      num: "NO. 03",
      image: teachersImg,
      category: "GILP · CAMBRIDGE",
      title: "Global India Leadership Programme — Cambridge",
      desc: "Frameworks and forward-looking insights from Judge Business School faculty and global business leaders convened at Cambridge.",
      date: "WHITE PAPER · MARCH 2026"
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">PUBLICATIONS ARCHIVE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl">
              Latest analysis & reports.
            </h2>
          </div>
          <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-forest-deep hover:text-forest flex items-center gap-1 group">
            FULL ARCHIVE 
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reports.map((r, idx) => (
            <div key={idx} className="group flex flex-col rounded-2xl bg-[#F7F5F0] border border-forest/5 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-forest-deep text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  {r.num}
                </div>
                <div className="absolute top-4 right-4 z-10 bg-gold text-forest-deep text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1">
                  <BookOpen className="h-3 w-3" /> PDF
                </div>
                <img 
                  src={r.image} 
                  alt={r.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">{r.category}</p>
                <h3 className="text-lg font-bold text-forest-deep mb-3 leading-snug">{r.title}</h3>
                <p className="text-xs text-forest/75 leading-relaxed mb-8 flex-1">{r.desc}</p>
                
                <div className="flex items-center justify-between border-t border-forest/10 pt-4 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-forest/40">{r.date}</span>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-forest-deep flex items-center gap-1 hover:text-gold transition-colors">
                    DOWNLOAD <Download className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheBriefing() {
  return (
    <section className="py-24 bg-[#F7F5F0] border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4">THE BRIEFING</p>
            <h2 className="text-4xl font-bold tracking-tight text-forest-deep md:text-5xl leading-tight">
              Proprietary<br />analysis,<br />
              <span className="font-serif italic text-gold">twice a month.</span>
            </h2>
          </div>
          
          <div className="rounded-3xl border border-forest/10 bg-cream p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-deep text-white">
                <Mail className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-forest-deep leading-relaxed">
                Receive our white papers, executive briefings and programme insights before they're published anywhere else.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Professional email" 
                className="flex-1 rounded-full border border-forest/20 bg-transparent px-5 py-3 text-sm focus:border-forest-deep focus:outline-none focus:ring-1 focus:ring-forest-deep"
              />
              <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-forest">
                Subscribe <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-forest/50">
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-gold"></span> NO SPAM</span>
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-gold"></span> TWICE A MONTH</span>
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-gold"></span> UNSUBSCRIBE ANYTIME</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bar exactly matching screenshot */}
      <div className="mt-24 bg-forest-deep py-6 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold text-white/50 tracking-wider">
          <p>© 2026 Global Education Lab — Insights & Research.</p>
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
            ← Back to Global.Edu.Lab
          </Link>
        </div>
      </div>
    </section>
  );
}
