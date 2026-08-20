import { useState } from "react";
import dhruvGalgotia from "@/assets/people/dhruv_galgotia.jpg";
import samTully from "@/assets/people/sam_tully.jpg";
import amarjitSingh from "@/assets/people/amarjit_singh.jpg";
import jivikaVikamshi from "@/assets/people/jivika_vikamshi.jpg";
import lucyJung from "@/assets/people/lucy_jung.jpg";
import abhishekKumar from "@/assets/people/abhishek_kumar.jpg";
import lindaTang from "@/assets/people/linda_tang.jpg";
import tendaiImg from "@/assets/tendai.jpg";
import sydneyImg from "@/assets/sydney.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "./index";
import {
  ArrowUpRight,
  Lightbulb,
  Hammer,
  TrendingUp,
  Globe2,
  Users,
  Zap,
  Quote,
  CheckCircle2,
  Rocket,
  BookOpen,
  Shield,
  Handshake,
  GraduationCap,
  User,
  X,
} from "lucide-react";

const placeholderImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const placeholderImg2 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80";
const placeholderImg3 =
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80";
const placeholderImg4 =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";

import bgImage from "@/assets/startup.jpg";
import startupImg from "@/assets/startup.jpg";
import pitchImg from "@/assets/zero-to-one-past-1.jpg";
import sydneyConner from "@/assets/people/sydney_conner.jpg";
import tendaiNzonzo from "@/assets/people/tendai_nzonzo.jpg";
import yvonneWalburga from "@/assets/people/yvonne_walburga.jpg";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/entrepreneurship")({
  head: () => buildMeta("/entrepreneurship"),
  component: EntrepreneurshipPage,
});

function EntrepreneurshipPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <PillarsStrip />
      <Programmes />
      <FounderJourney />
      <Ecosystem />
      <Community />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] pt-4 pb-12 md:pt-6 md:pb-16 border-b border-forest/10">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[13px] font-bold uppercase tracking-[0.24em] text-gold">
                Entrepreneurship & Innovation
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Experience Cambridge.
              <br />
              <span className="font-serif italic text-gold">
                Build your venture & shape what comes next.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[16px] md:text-[17px] leading-[1.7] text-forest/80 font-medium">
              Empowering founders, researchers and innovators with Cambridge's global venture
              ecosystem — offering world-class mentorship, venture building frameworks, and direct
              connections to investors.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: <Zap className="h-4 w-4" />, label: "Ventures & AI" },
                { icon: <Globe2 className="h-4 w-4" />, label: "Global Ecosystem" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-forest/10 px-4 py-2 text-[13.5px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm"
                >
                  <span className="text-gold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Buttons inline row */}
            <div className="mt-8 flex items-center gap-3.5 flex-wrap sm:flex-nowrap">
              <Link
                to="/contact"
                search={{ source: "Entrepreneurship" }}
                className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 sm:px-7 py-3.5 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25 whitespace-nowrap shrink-0"
              >
                Explore Programmes
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                search={{ source: "Entrepreneurship" }}
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 px-5 sm:px-6 py-3.5 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep backdrop-blur-sm hover:border-forest-deep hover:bg-white transition-all duration-300 whitespace-nowrap shrink-0"
              >
                Connect With Our Team
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 group">
              <img
                src={startupImg}
                alt="Entrepreneurship at Cambridge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-forest-deep/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold mb-1">
                    Cambridge Ecosystem
                  </p>
                  <p className="text-white text-[16px] font-bold">Venture Launchpad</p>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gold/30 border-2 border-white/40 backdrop-blur-sm flex items-center justify-center"
                    >
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-forest-deep border-2 border-white/40 flex items-center justify-center text-white text-[13px] font-bold">
                    +35
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

function PillarsStrip() {
  const stats = [
    {
      label: "Launchpad Ideas",
      icon: <Rocket className="h-4 w-4" />,
      val: "Turn ideas into viable ventures.",
    },
    {
      label: "Expert Mentorship",
      icon: <Users className="h-4 w-4" />,
      val: "Learn from founders, investors and experts.",
    },
    {
      label: "Global Ecosystem",
      icon: <Globe2 className="h-4 w-4" />,
      val: "Access Cambridge networks, partners and markets.",
    },
    {
      label: "Real Impact",
      icon: <TrendingUp className="h-4 w-4" />,
      val: "Build scalable ventures that matter today.",
    },
    {
      label: "Innovation Hub",
      icon: <Zap className="h-4 w-4" />,
      val: "Powered by Cambridge's best minds.",
    },
    {
      label: "Cambridge Backed",
      icon: <CheckCircle2 className="h-4 w-4" />,
      val: "Trusted by world-class institutions.",
    },
  ];
  return (
    <section className="bg-forest-deep border-b border-white/10 py-4 overflow-hidden relative flex flex-col items-center">
      {/* Top Centre Title */}
      <div className="z-20 mb-4">
        <h2 className="px-6 py-1.5 rounded-full border border-white/20 text-[15px] font-bold uppercase tracking-[0.25em] text-gold whitespace-nowrap flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Our Core Pillars
        </h2>
      </div>

      {/* Marquee Container - Right to Left (reverse) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-forest-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-forest-deep to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee-reverse">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-deep transition-all duration-300 shrink-0">
                {s.icon}
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-cream uppercase tracking-widest whitespace-nowrap">
                  {s.label}
                </h4>
                <p className="text-[15px] text-cream/70 whitespace-nowrap font-medium">{s.val}</p>
              </div>
              <span className="ml-6 text-white/15 text-lg shrink-0">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programmes() {
  const progs = [
    {
      title: "Zero-to-One Ideation Weekend",
      desc: "An immersive experience for students, workers and professionals to solve real-world challenges.",
      img: placeholderImg,
      link: "/programmes/zero-to-one",
      stats: [
        { i: <BookOpen className="w-3 h-3" />, t: "48 Hours" },
        { i: <Globe2 className="w-3 h-3" />, t: "Cambridge" },
      ],
    },
    {
      title: "Startup Accelerator (12 Months)",
      desc: "Structured cohorts for early-stage startups with mentorship, workshops and investor connections.",
      img: placeholderImg2,
      link: "/entrepreneurship/accelerator",
      stats: [
        { i: <BookOpen className="w-3 h-3" />, t: "12 Months" },
        { i: <Globe2 className="w-3 h-3" />, t: "Hybrid" },
      ],
    },
    {
      title: "Mentorship & Founder Network",
      desc: "Private introductions and access to our global community of founders, alumni and industry experts.",
      img: placeholderImg3,
      link: "/entrepreneurship/mentorship",
      stats: [
        { i: <BookOpen className="w-3 h-3" />, t: "Ongoing" },
        { i: <Globe2 className="w-3 h-3" />, t: "Global" },
      ],
    },
    {
      title: "Demo Day & Investor Connect",
      desc: "Pitch to investors, corporates and partners. Opportunities for funding, pilots and global expansion.",
      img: placeholderImg4,
      link: "/entrepreneurship/demo-day",
      stats: [
        { i: <BookOpen className="w-3 h-3" />, t: "Twice a Year" },
        { i: <Globe2 className="w-3 h-3" />, t: "Cambridge" },
      ],
    },
  ];
  return (
    <section className="bg-[#FDFBF7] py-32 border-b border-border/60 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="flex items-center gap-4 text-[15px] font-bold uppercase tracking-[0.25em] text-gold before:h-px before:w-12 before:bg-gradient-to-r before:from-transparent before:to-gold/50 after:h-px after:w-12 after:bg-gradient-to-l after:from-transparent after:to-gold/50">
            OUR ENTREPRENEURSHIP PROGRAMMES
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-forest-deep md:text-[3rem]">
            Four routes from <span className="font-serif italic text-gold">idea to impact.</span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {progs.map((p) => (
              <div
                key={p.title}
                className="w-[85vw] sm:w-[380px] lg:w-[320px] shrink-0 snap-center group rounded-[2rem] border border-forest/10 bg-white flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(20,40,30,0.1)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-gold border-2 border-white flex items-center justify-center text-forest-deep shadow-lg group-hover:rotate-12 transition-transform">
                      <Rocket className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-forest-deep leading-tight mb-3 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-forest/70 leading-relaxed mb-8 flex-1">{p.desc}</p>

                  <div className="flex items-center justify-between pt-5 border-t border-forest/10 mb-6 group-hover:border-gold/20 transition-colors">
                    {p.stats.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-[15px] text-forest/80 uppercase font-bold tracking-wider"
                      >
                        <span className="text-gold">{s.i}</span> {s.t}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={p.link}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest/5 py-3 text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep group-hover:bg-forest-deep group-hover:text-cream transition-colors w-full"
                  >
                    LEARN MORE <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderJourney() {
  return (
    <>
      <section className="bg-forest py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="lg:sticky lg:top-32 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold">
                  THE FOUNDER JOURNEY
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-cream md:text-[3.5rem] leading-[1.05]">
                Five stages, from{" "}
                <span className="font-serif italic text-gold relative inline-block">
                  spark
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full" />
                </span>{" "}
                to scale.
              </h2>
              <p className="mt-6 text-[15px] text-cream/70 max-w-md leading-relaxed">
                A structured arc that meets founders wherever they are — from first idea to
                companies scaling internationally. Every step is backed by Cambridge faculty,
                funding networks and active investors.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-[15px] font-bold uppercase tracking-[0.2em] text-gold">
                <Link
                  to="/contact"
                  search={{ source: "Entrepreneurship" }}
                  className="flex items-center gap-2 hover:text-cream transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                  PORTFOLIO
                </Link>
                <Link
                  to="/contact"
                  search={{ source: "Entrepreneurship" }}
                  className="flex items-center gap-2 hover:text-cream transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Globe2 className="w-3 h-3" />
                  </div>
                  GLOBAL REACH
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {[
                {
                  n: "01",
                  t: "Discover",
                  d: "Map the problem space, meet peers and mentors, and clarify the mission worth building.",
                },
                {
                  n: "02",
                  t: "Ideate",
                  d: "Uncover real needs with Cambridge faculty and validate through customer conversations.",
                },
                {
                  n: "03",
                  t: "Build",
                  d: "Prototype, ship and MVP and iterate against real needs inside the accelerator sprints.",
                },
                {
                  n: "04",
                  t: "Fund",
                  d: "Investor readiness, pitch decks and warm intros to angels, funds and family offices.",
                },
                {
                  n: "05",
                  t: "Scale",
                  d: "Cross-border expansion, distribution partners and hiring across our global chapters.",
                },
              ].map((s, i) => (
                <div
                  key={s.n}
                  className={`group relative rounded-3xl border border-forest/10 bg-cream p-6 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden ${i === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-full border border-forest/10 bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:border-gold transition-all duration-300 shadow-sm">
                      <Rocket className="w-4 h-4 text-forest-deep group-hover:text-forest-deep transition-colors" />
                    </div>
                    <span className="text-2xl font-serif text-forest/80 group-hover:text-gold transition-colors">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-forest-deep mb-2 relative z-10">{s.t}</h3>
                  <p className="text-[15px] text-forest/70 leading-relaxed relative z-10">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Ecosystem() {
  const ecosystemPartners = [
    {
      logo: (
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#9c2727]" fill="#9c2727" />
          <span className="font-serif font-bold text-forest-deep text-[15px] leading-tight text-left uppercase">
            University of
            <br />
            Cambridge
          </span>
        </div>
      ),
      role: "World-class research and talent",
    },
    {
      logo: (
        <span className="font-serif text-[#1D2F5F] font-black tracking-widest uppercase text-[15px] leading-tight text-center">
          KING'S
          <br />
          E-LAB
        </span>
      ),
      role: "Entrepreneurship community & support",
    },
    {
      logo: (
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#9c2727]" fill="#9c2727" />
          <span className="font-serif text-forest-deep font-semibold text-[15px] tracking-wide leading-tight uppercase text-left">
            CAMBRIDGE
            <br />
            JUDGE BUSINESS SCHOOL
          </span>
        </div>
      ),
      role: "Leadership, innovation and business expertise",
    },
    {
      logo: (
        <span className="font-serif font-black text-forest-deep text-[17px] leading-tight text-center uppercase tracking-wide">
          FRUGAL
          <br />
          <span className="font-bold text-[15px] capitalize tracking-normal">AI hub</span>
        </span>
      ),
      role: "AI for impact and sustainable innovation",
    },
    {
      logo: (
        <span className="font-sans font-bold text-forest-deep text-[15px] leading-tight text-center">
          Investors &<br />
          Angels
        </span>
      ),
      role: "Access to funding and networks",
    },
    {
      logo: (
        <div className="flex flex-col items-center">
          <Handshake className="w-8 h-8 text-forest-deep mb-1.5" />
          <span className="font-sans font-bold text-forest-deep text-[15px] leading-tight">
            Industry Partners
          </span>
        </div>
      ),
      role: "Pilots, scale and market access",
    },
  ];

  return (
    <section className="bg-[#FDFBF7] py-8 border-b border-border/60 overflow-hidden">
      <h2 className="mb-6 text-center text-xl md:text-[22px] font-bold tracking-tight text-forest-deep">
        Powered by the Cambridge Innovation Ecosystem
      </h2>

      {/* Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee">
          {[...ecosystemPartners, ...ecosystemPartners, ...ecosystemPartners].map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-10 shrink-0 group min-w-[200px]"
            >
              <div className="h-14 flex items-center justify-center mb-3">{p.logo}</div>
              <p className="text-[15px] text-forest/80 leading-relaxed font-medium text-center max-w-[140px]">
                {p.role}
              </p>
              <span className="mt-4 text-forest/15 text-xl shrink-0">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const testimonials = [
    {
      q: "The 48 hours pushed me to think about a problem I knew scientifically from a completely different angle, as a market structure failure, not just a research gap. That reframe was the most valuable part.",
      a: "Sydney Conner",
      r: "PhD in Biomedical Engineering, University of Cambridge — Zero-to-One",
      img: sydneyImg,
      link: "https://www.linkedin.com/posts/sydney-j-conner_cjbs-z21-zerotoone-activity-7474838677874065409-qcfI",
    },
    {
      q: "What I liked most about GEL Zero-to-One was the ability to work with mentors as they really helped transform and learn new skills and ways of thinking. It helped me refine my idea by making me think about who would actually buy it, not just whether it works.",
      a: "Tendai Nzonzo",
      r: "Winning Team, Sana AI — Zero-to-One",
      img: tendaiImg,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <section className="bg-cream pt-24 md:pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">
            VOICES FROM OUR FOUNDERS
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem] leading-[1.1]">
            Built in our programmes.
            <br />
            <span className="font-serif italic text-gold relative inline-block">
              Backed by our network.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gold/30 rounded-full" />
            </span>
          </h2>
        </div>

        {/* 2-column centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-16 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white border border-forest/10 p-8 flex flex-col hover:shadow-[0_20px_40px_rgba(20,40,30,0.08)] hover:-translate-y-1 transition-all duration-400 cursor-pointer overflow-hidden h-full"
              onClick={() => setSelectedTestimonial(t)}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-6 text-[8rem] font-serif leading-none text-forest-deep/[0.03] select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                "
              </div>

              <div className="inline-flex items-center gap-2 rounded-md bg-forest-deep/5 px-3 py-1.5 mb-6 self-start border border-forest-deep/10">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep/80">
                  {t.r.split("—")[1]?.trim() || "Alumni"}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[0.95rem] font-medium text-forest-deep/90 leading-[1.7] line-clamp-6 mb-6 relative z-10">
                  {t.q}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTestimonial(t);
                  }}
                  className="inline-flex items-center gap-1.5 text-gold font-bold uppercase tracking-[0.2em] text-[15px] hover:gap-2 transition-all duration-300 mb-6"
                >
                  Read More <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <div className="h-px w-full bg-forest-deep/10 mb-5" />

                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gold/40 group-hover:ring-gold/80 transition-all duration-300">
                      <img
                        src={t.img}
                        alt={t.a}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-gold border-2 border-cream" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-forest-deep leading-tight mb-0.5">
                      {t.a}
                    </p>
                    <p className="text-[15px] text-forest-deep/80 font-medium leading-tight line-clamp-1">
                      {t.r.split("—")[0]?.trim()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12">
          <div
            className="absolute inset-0 bg-forest-deep/90 backdrop-blur-md"
            onClick={() => setSelectedTestimonial(null)}
          />
          <div className="relative w-full max-w-3xl bg-cream rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] border border-cream/80 animate-in fade-in zoom-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-t-[2.5rem]" />
            <div className="p-8 md:p-14">
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 p-3 rounded-full border border-forest-deep/15 bg-forest-deep/5 hover:bg-forest-deep/10 text-forest-deep/80 hover:text-forest-deep transition-all"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-4">
                <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="relative mb-6">
                    <img
                      src={selectedTestimonial.img}
                      alt={selectedTestimonial.a}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gold border-4 border-cream flex items-center justify-center">
                      <Quote className="h-3 w-3 text-forest-deep" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-forest-deep mb-2">
                    {selectedTestimonial.a}
                  </h3>
                  <p className="text-[15px] text-forest/80 font-medium leading-relaxed mb-6">
                    {selectedTestimonial.r}
                  </p>
                  <a
                    href={selectedTestimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-forest-deep px-6 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-forest hover:shadow-lg group/btn"
                  >
                    View on LinkedIn{" "}
                    <ArrowUpRight className="h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -top-10 -left-6 text-[8rem] font-serif leading-none text-gold/20 select-none">
                    "
                  </div>
                  <div className="relative z-10 space-y-6">
                    <p className="text-[1.1rem] md:text-[1.25rem] text-forest-deep/90 leading-[1.8] font-medium whitespace-pre-line">
                      {selectedTestimonial.q}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-forest-deep w-full py-12 md:py-16 border-t border-forest-deep/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold mb-6 block">
                START YOUR ENTREPRENEURIAL JOURNEY
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-cream md:text-[4rem] leading-[1.1] mb-6">
                Build confidently.
                <br />
                Innovate boldly.
                <br />
                <span className="text-gold">Scale globally.</span>
              </h2>
              <p className="text-[16px] text-cream/80 leading-relaxed max-w-xl font-medium">
                Be part of a global community of innovators and builders shaping the ventures — and
                the ideas — of the next decade.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-5 shrink-0 md:pb-2">
              <Link
                to="/contact"
                search={{ source: "Entrepreneurship" }}
                className="inline-flex items-center justify-between w-full md:w-auto min-w-[260px] gap-4 rounded-xl bg-gold px-8 py-4 text-[15px] font-bold text-forest-deep transition-all hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(200,160,90,0.3)]"
              >
                Explore Programmes <ArrowUpRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:info@globaledulab.com"
                className="text-[15px] font-bold uppercase tracking-[0.25em] text-cream/80 hover:text-gold transition-colors"
              >
                INFO@GLOBALEDULAB.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
