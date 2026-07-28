import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Target, Eye, HandHeart, Sparkles, Flag, Rocket, Briefcase, Globe2, Network, CheckCircle2, BookOpen, GraduationCap, Users, LineChart, FlaskConical } from "lucide-react";
import cambridgeImg from "@/assets/cambridge.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import { Footer } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Global Education Lab" },
      {
        name: "description",
        content: "Transformational education. Global impact.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Foundations />
      <AboutCompany />
      <FounderStory />
      <Journey />
      <Impact />
      <Team />
      <Cta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 pb-20 pt-0 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 pr-0 md:pr-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-forest/70 mt-6 md:mt-0">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> ABOUT GLOBAL EDUCATION LAB
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-forest-deep md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem]">
            Transformational<br />education.<br />
            <span className="italic font-serif text-gold">Global impact.</span>
          </h1>
          <div className="mt-8 flex gap-4 border-l-2 border-forest/15 pl-6">
            <p className="max-w-xl text-lg leading-relaxed text-forest/80 md:text-xl">
              GEL designs and delivers world-class learning experiences that
              empower individuals, build capability, and drive innovation for a
              better, more inclusive tomorrow.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#founder-story"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-forest-deep"
            >
              Our Story <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-transparent px-8 py-3.5 text-sm font-bold tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Our Impact
            </a>
          </div>
          <div className="mt-16 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-forest/60">
            <span className="h-px w-10 bg-forest/30" />
            CAMBRIDGE ┬╖ GLOBAL ┬╖ SINCE 2019
          </div>
        </div>
        <div className="relative md:col-span-5 md:pl-2 mt-10 md:mt-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl">
            <img
              src={cambridgeImg}
              alt="Cambridge"
              className="h-[500px] md:h-[650px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">SINCE 2019</p>
              <p className="mt-2 text-3xl font-serif italic text-cream pb-1 leading-tight">
                Cambridge to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Foundations() {
  return (
    <section className="border-b border-border/60 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold">
            FOUNDATIONS
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl">
            <span className="italic font-serif">What guides</span> everything we do.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="group flex flex-col rounded-[2rem] border border-border/60 bg-cream p-10 shadow-sm transition-all hover:border-forest/20 hover:shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-gold">OUR MISSION</h3>
            <p className="mt-4 text-base leading-relaxed text-forest/80">
              To deliver transformative educational experiences across every stage of a learner's
              life ΓÇö empowering people to lead, innovate and create impact.
            </p>
          </article>

          <article className="group flex flex-col rounded-[2rem] border border-border/60 bg-cream p-10 shadow-sm transition-all hover:border-forest/20 hover:shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-gold">OUR VISION</h3>
            <p className="mt-4 text-base leading-relaxed text-forest/80">
              A world where education is experiential, inclusive and borderless ΓÇö unlocking
              potential and creating a better future for all.
            </p>
          </article>

          <article className="group flex flex-col rounded-[2rem] border border-border/60 bg-cream p-10 shadow-sm transition-all hover:border-forest/20 hover:shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
              <HandHeart className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-gold">OUR VALUES</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-forest/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Excellence in Everything We Do
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Learner-Centric & Inclusive
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Integrity & Transparency
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Innovation with Purpose
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Collaboration & Global Mindset
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

const aboutCompanyData = [
  {
    icon: Globe2,
    tag: "01",
    title: "Global Reach",
    body: "Connecting the Cambridge ecosystem with learners across 25+ countries to build a truly borderless educational experience.",
  },
  {
    icon: Users,
    tag: "02",
    title: "Lifelong Learning",
    body: "Delivering high-impact programmes designed for everyone from 14-year-old students to seasoned global CEOs.",
  },
  {
    icon: Sparkles,
    tag: "03",
    title: "Real-world Impact",
    body: "Empowering individuals and organisations to drive innovation, build capability, and create sustainable change.",
  },
];

function AboutCompany() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-border/60 bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold">
            WHO WE ARE
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Building capabilities for a <span className="italic font-serif text-gold">better tomorrow.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {aboutCompanyData.map((p, index) => {
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

function FounderStory() {
  return (
    <section id="founder-story" className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* Section Label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">Our Founder's Story</p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-start">

          {/* Left: Content */}
          <div className="md:col-span-7 md:pr-8">

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-forest-deep md:text-[2.6rem]">
              A career built across<br />
              <span className="font-serif italic text-gold">continents ΓÇö a mission</span><br />
              rooted in Cambridge.
            </h2>

            <div className="mt-8 border-l-2 border-gold/30 pl-6">
              <span className="font-serif text-4xl leading-none text-gold/40">&ldquo;</span>
              <p className="mt-1 text-lg leading-[1.75] text-forest-deep/80 font-serif italic">
                After a diverse career in technology, strategy and entrepreneurship across the US, Taiwan, India and the UK, Suyash Bharti moved to Cambridge with a vision to make world class education accessible, experiential and impactful.
              </p>
            </div>

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-forest/70">
              <p>
                What began as a social impact initiative has grown into <strong className="text-forest-deep font-semibold">Global Education Lab</strong> ΓÇö an education innovation company delivering fast-paced, high-impact programmes for learners from age 14 to global CEOs.
              </p>
              <p>
                Today, GEL connects the Cambridge ecosystem with the world ΓÇö empowering individuals, organisations and communities to thrive.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["Cambridge Alumnus & Fellow, CJBS", "14+ Years Global Experience", "Ecosystem Builder", "People & Purpose Driven"].map((tag) => (
                <span key={tag} className="rounded-full border border-forest/15 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-wide text-forest-deep shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right: Image */}
          <div className="md:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
              <img
                src={businessLeadersImg}
                alt="Suyash Bharti"
                className="h-[480px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-serif text-2xl italic text-cream">Suyash Bharti</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-px w-6 bg-gold" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Founder & Director</p>
                </div>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-cream/60">Cambridge Alumnus & Fellow, CJBS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function Journey() {
  return (
    <section className="border-b border-border/60 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold">
          OUR JOURNEY
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl">
          Milestones <span className="italic font-serif text-gold">along the way.</span>
        </h2>
        
        <div className="mt-20 relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 w-full h-px bg-forest/15 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {[
              { year: "2019", icon: Flag, title: "Founded in Cambridge", desc: "with a mission to transform education" },
              { year: "2020", icon: BookOpen, title: "Launched student programmes", desc: "and built global partnerships" },
              { year: "2021", icon: Briefcase, title: "Expanded our portfolio", desc: "across leadership, entrepreneurship, and innovation" },
              { year: "2022", icon: Network, title: "Strengthened global footprint", desc: "across universities, organisations and ecosystems" },
              { year: "2023", icon: Rocket, title: "Launched Zero-to-One", desc: "ideation weekend and entrepreneurship initiatives" },
              { year: "2024+", icon: Globe2, title: "Scaling impact globally", desc: "empowering learners and building a better tomorrow" },
            ].map((item, idx) => (
              <div key={item.year} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-forest/15 text-forest/50 transition-colors group-hover:border-gold group-hover:text-gold shadow-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold border-[3px] border-cream text-[10px] font-bold text-forest-deep">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-forest-deep">{item.year}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-forest-deep leading-relaxed">{item.title}</p>
                <p className="mt-1 text-xs text-forest/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold">
          OUR TEAM & ECOSYSTEM
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-forest-deep md:text-5xl">
          The people who <span className="italic font-serif text-gold">make it real.</span>
        </h2>
        <div className="mt-8 h-px w-16 bg-gold mx-auto" />
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {[
            { icon: Users, tag: "01", title: "Our Team", desc: "A passionate team of educators, innovators and operators committed to excellence and impact.", link: "/team" },
            { icon: BookOpen, tag: "02", title: "Academic Partners", desc: "Deep collaborations with leading universities and research centres in Cambridge and beyond.", link: "/partner-with-gel" },
            { icon: Briefcase, tag: "03", title: "Industry & Ecosystem Partners", desc: "Working with corporates, governments and ecosystem enablers to co-create meaningful impact.", link: "/partner-with-gel" },
            { icon: Globe2, tag: "04", title: "Global Community", desc: "A vibrant network of learners, alumni, founders, leaders and changemakers across the world.", link: "/our-impact" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-sm transition-all hover:shadow-lg hover:border-forest/20 group">
              <div className="h-48 relative overflow-hidden">
                <img src={cambridgeImg} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-forest-deep shadow-sm">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-forest-deep shadow-sm">
                  {item.tag}
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="text-lg font-bold text-forest-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/75 flex-grow">{item.desc}</p>
                <Link to={item.link} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:text-gold/80">
                  LEARN MORE <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { num: "5,000+", label: "LEARNERS EMPOWERED" },
    { num: "120+", label: "STARTUPS SUPPORTED" },
    { num: "25+", label: "COUNTRIES REPRESENTED" },
    { num: "35+", label: "STARTUPS PITCHED" },
    { num: "10,000+", label: "LIVES IMPACTED (EST.)" },
  ];

  return (
    <section id="impact" className="border-b border-border/60 bg-forest-deep overflow-hidden">
      <div className="mx-auto max-w-7xl py-10 md:py-14 text-center relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-10 px-6">
          OUR GLOBAL IMPACT, IN NUMBERS
        </p>
        
        <div className="relative flex overflow-hidden group">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-forest-deep to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-forest-deep to-transparent" />
          
          <div 
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-rtl 30s linear infinite' }}
          >
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center gap-x-12 md:gap-x-20 px-6 md:px-10">
                {stats.map((stat, i) => (
                  <div key={`${arrayIndex}-${i}`} className="flex items-center gap-4 text-left">
                    <span className="text-4xl md:text-[3rem] font-bold tracking-tight text-cream">{stat.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cream/70 max-w-[90px] leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-forest-deep py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 items-end gap-12 md:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">FROM CAMBRIDGE TO THE WORLD</p>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-cream">
            Learn <span className="text-cream">experientially.</span><br />
            Innovate <span className="text-cream">boldly.</span><br />
            <span className="text-gold">Create impact.</span>
          </h2>
          <p className="mt-6 text-sm text-cream/80 max-w-[320px] leading-relaxed">
            Global Education Lab empowers learners, educators and leaders to build a better future. Let's start the conversation.
          </p>
        </div>
        <div className="flex justify-start md:justify-end pb-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-6 rounded-[1.5rem] bg-[#D6A848] px-8 py-5 md:px-10 md:py-6 transition-all hover:bg-[#D6A848]/90 group"
          >
            <span className="text-base font-bold text-forest-deep">Partner With Us</span>
            <ArrowUpRight className="h-4 w-4 text-forest-deep transition-transform group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
