import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, GraduationCap, Users, Briefcase, Building2, Landmark, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { Footer } from "./index";
import cambridgeImg from "@/assets/cambridge.jpg";
import heroImg from "@/assets/hero-classroom.jpg";
import schoolLeadersImg from "@/assets/school-leaders.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — Global Education Lab" },
      {
        name: "description",
        content:
          "Explore our upcoming programmes designed for students, founders, educators and leaders. Learn in Cambridge. Connect globally. Create impact.",
      },
    ],
  }),
  component: ProgrammesPage,
});

const FILTERS = ["All Programmes", "For Students", "For Graduates", "For Founders", "For Executives", "For Educators"] as const;
type Filter = typeof FILTERS[number];

const upcomingProgrammes = [
  {
    img: businessLeadersImg,
    tag: "FOR EXECUTIVES & LEADERS",
    title: "Global India Leadership Programme",
    desc: "A 5-day executive programme for senior leaders exploring strategy, innovation and partnerships in the India–UK corridor.",
    date: "14–18 Sept 2026",
    location: "Cambridge, UK",
    link: "/programmes/gilp",
    category: "For Executives",
  },
  {
    img: studentsImg,
    tag: "FOR GRADUATES & STUDENTS",
    title: "Graduate Summer Programme",
    desc: "A 2-week immersive experience in Entrepreneurship & AI with 30+ hours of learning, startup exposure, London visit and Cambridge college life.",
    date: "12–25 July 2026",
    location: "Girton College, Cambridge",
    link: "/programmes/graduate",

    category: "For Graduates",
  },
  {
    img: heroImg,
    tag: "FOR FOUNDERS & INNOVATORS",
    title: "Zero-to-One Venture Weekend",
    desc: "A 2.5-day intensive to ideate, validate and build testable ventures in 48 hours with mentorship, expert guidance and pitch to investors.",
    date: "Next: June 2026",
    location: "Cambridge, UK",
    link: "/programmes/zero-to-one",
    category: "For Founders",
  },
  {
    img: schoolLeadersImg,
    tag: "FOR YOUNG LEARNERS",
    title: "Young Leaders Summer Programme",
    desc: "Fast-paced summer experiences in leadership, communication, STEM, entrepreneurship and personal growth for ages 14–18.",
    date: "Various dates",
    location: "Cambridge, UK",
    link: "/students",
    category: "For Students",
  },
];

const institutionalPartners = [
  {
    icon: <GraduationCap className="h-6 w-6 text-forest/70" />,
    title: "Schools & K-12",
    desc: "Leadership, STEM, entrepreneurship and international exposure programmes.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-forest/70" />,
    title: "Universities",
    desc: "Summer schools, faculty collaboration, research partnerships and innovation programmes.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-forest/70" />,
    title: "Corporates",
    desc: "Executive education, AI and global market engagement programmes.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-forest/70" />,
    title: "Governments & Ecosystems",
    desc: "Delegations, innovation missions and policy engagement programmes.",
  },
];

const pastImpactImgs = [cambridgeImg, heroImg, teachersImg, businessLeadersImg];

function ProgrammesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Programmes");

  const filtered = activeFilter === "All Programmes"
    ? upcomingProgrammes
    : upcomingProgrammes.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream font-sans text-foreground">
      <ProgrammesHero />
      
      {/* Filter Tabs */}
      <div className="bg-white border-b border-border/60 sticky top-[73px] z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-forest/60 mr-2">Find the right programme for you</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all ${
                activeFilter === f
                  ? "bg-forest-deep text-gold"
                  : "border border-forest/15 text-forest/70 hover:bg-forest/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Programmes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-[1.5rem] font-bold text-forest-deep">Upcoming Programmes</h2>
              <span className="w-8 h-0.5 bg-gold" />
            </div>
            <Link to="/gallery" className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-forest hover:text-gold md:inline-flex transition-colors">
              View all programmes <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <Link key={i} to={p.link} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-forest/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-forest-deep px-3 py-1 rounded-md text-[8px] font-bold uppercase tracking-[0.15em] text-gold">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest-deep mb-4">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-bold text-forest-deep mb-3 leading-tight">{p.title}</h3>
                  <p className="text-[11px] text-forest/70 leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <div className="flex items-center gap-4 text-[10px] text-forest/50 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.location}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-forest-deep flex items-center gap-1">
                    View Programme <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom / Institutional */}
      <section className="bg-white py-14 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest-deep mb-5">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-forest-deep mb-3">Custom Programmes for Institutions & Organisations</h3>
              <p className="text-sm text-forest/70 leading-relaxed mb-6">
                We design and deliver tailor-made programmes for schools, universities, 5 countries, engaging 1,000+ learners and 500+ school leaders aligned with your goals.
              </p>
              <Link to="/partner-with-gel" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gold transition-all hover:bg-forest">
                Partner with GEL <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {institutionalPartners.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-[13px] font-bold text-forest-deep">{item.title}</h4>
                    <p className="text-[11px] text-forest/65 leading-relaxed">{item.desc}</p>
                    <Link to="/partner-with-gel" className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold flex items-center gap-1 mt-auto hover:text-forest transition-colors">
                      Learn more <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Programmes & Impact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-[1.75rem] font-bold text-forest-deep mb-4">Past Programmes & Impact</h2>
              <p className="text-sm text-forest/70 leading-relaxed mb-6">
                Over the years, we have delivered impactful programmes across 5 countries, engaging 1,000+ learners and 500+ school leaders.
              </p>
              <Link to="/our-impact" className="text-[11px] font-bold uppercase tracking-[0.1em] text-gold flex items-center gap-2 hover:text-forest transition-colors">
                Explore our impact stories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-4 gap-3">
                {pastImpactImgs.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-xl">
                    <img src={src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-forest-deep py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-white mb-2">Not sure which programme is right for you?</h3>
              <p className="text-sm text-primary-foreground/70">Our team is here to help you find the best fit for your goals.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <div className="grid grid-cols-2 gap-4 mr-6">
                {[
                  { icon: <Globe2 className="h-4 w-4 text-gold" />, title: "World-class learning", desc: "Led by experts and practitioners" },
                  { icon: <Users className="h-4 w-4 text-gold" />, title: "Global connections", desc: "Tap into networks that matter" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {f.icon}
                    <div>
                      <p className="text-[10px] font-bold text-white">{f.title}</p>
                      <p className="text-[9px] text-primary-foreground/60">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-white">
                  Let's Talk <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="mailto:info@globaledulab.com" className="text-[10px] text-primary-foreground/60 text-center hover:text-gold transition-colors">
                  info@globaledulab.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProgrammesHero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-6">
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[5rem] leading-[1.02]">
              Programmes
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-serif italic text-gold leading-tight">
              Transformative learning experiences, for every stage of your journey.
            </p>
            <p className="mt-5 text-base text-forest/80 leading-relaxed max-w-md">
              Explore our upcoming programmes designed for students, founders, educators and leaders. Learn in Cambridge. Connect globally. Create impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[11px] text-forest/70 font-medium">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Cambridge, UK and beyond</span>
              <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-gold" /> Global partnerships</span>
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-gold" /> Experiential by design</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9]">
              <img
                src={cambridgeImg}
                alt="Cambridge University"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
