import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  MapPin,
  Building2,
  Image as ImageIcon,
  Users,
  Trophy,
  Lightbulb,
  Globe2,
} from "lucide-react";
import { Footer } from "./index";
import heroImg from "../assets/hero-classroom.jpg";
import cambridgeImg from "../assets/cambridge.jpg";

export const Route = createFileRoute("/students_/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture Track | Young Leaders Summer Programme" },
      {
        name: "description",
        content:
          "Design spaces, explore heritage and shape human-centred experiences on the Architecture track at Cambridge.",
      },
    ],
  }),
  component: ArchitectureTrack,
});

function ArchitectureTrack() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYoullDo />
      <Modules />
      <Outcomes />
      <CTA />
      <Footer />
    </div>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-36 md:pt-28 md:pb-44">
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-orange-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-orange-600/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28">
        {/* Back */}
        <Link
          to="/programmes/graduate"
          className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.18em] text-orange-600 mb-10 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Programme
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* badge */}
            <span className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 text-[15px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-orange-400/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Track 03 · Architecture
            </span>

            <h1 className="text-[3rem] md:text-[4rem] font-bold text-forest-deep leading-[1.05] mb-5">
              Design spaces.
              <br />
              <span className="font-serif italic text-orange-600">Shape experiences.</span>
            </h1>
            <p className="text-[15px] text-forest/65 leading-[1.8] max-w-md mb-10">
              Explore architecture through design, heritage, sustainability and human-centred
              spaces. Learn how built environments impact our world — right at Cambridge University.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/25"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programmes/graduate"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest hover:border-orange-400/40 transition-all duration-300"
              >
                View All Tracks
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-80 md:h-[440px]">
            <img src={cambridgeImg} alt="Architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 flex gap-3">
              {[
                { val: "6", label: "Days" },
                { val: "30+", label: "Participants" },
                { val: "100%", label: "Design-led" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 text-center"
                >
                  <p className="text-[18px] font-bold text-white">{s.val}</p>
                  <p className="text-[15px] text-white/70 uppercase tracking-widest mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── What You'll Do ── */
function WhatYoullDo() {
  const pillars = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Architectural Study",
      desc: "Learn fundamental design thinking and spatial arrangement.",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Sustainable Design",
      desc: "Explore eco-friendly materials and sustainable building practices.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Heritage & Urban",
      desc: "Study the balance between historic preservation and modern city placemaking.",
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Design Concept",
      desc: "Develop and present your own architectural concepts.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-orange-600">
              What You'll Do
            </span>
            <div className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">
            Four pillars of learning.
          </h2>
          <p className="text-[14px] text-forest/55 max-w-lg mx-auto leading-[1.75]">
            Everything is designed to build genuine design capability and spatial awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group rounded-[1.5rem] border border-forest/8 bg-white p-7 hover:border-orange-400/35 hover:shadow-[0_16px_48px_rgba(249,115,22,0.10)] hover:-translate-y-1 transition-all duration-400 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-[15px] font-bold text-forest-deep mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-[14px] text-forest/60 leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Modules ── */
function Modules() {
  const modules = [
    {
      num: "01",
      title: "Architectural Study",
      items: ["Design thinking", "Spatial awareness", "Creative logic"],
    },
    {
      num: "02",
      title: "Sustainable Design",
      items: ["Eco materials", "Energy efficiency", "Future building"],
    },
    {
      num: "03",
      title: "Heritage Design",
      items: ["Historical context", "Preservation", "Modern integration"],
    },
    {
      num: "04",
      title: "Urban Placemaking",
      items: ["City dynamics", "Public spaces", "Community impact"],
    },
    {
      num: "05",
      title: "Site Analysis",
      items: ["Field workshops", "Observational study", "Context mapping"],
    },
    {
      num: "06",
      title: "Present Concepts",
      items: ["Concept pitch", "Visual communication", "Feedback loops"],
    },
  ];
  return (
    <section className="py-24 bg-[#F4EFE6]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-orange-600">
              Programme Modules
            </span>
            <div className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">
            Six intensive sessions.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div
              key={i}
              className="rounded-[1.5rem] bg-white border border-forest/8 p-7 hover:border-orange-400/30 hover:shadow-[0_12px_36px_rgba(249,115,22,0.09)] transition-all duration-300 shadow-sm group"
            >
              <span className="text-[15px] font-black text-orange-500/50 tracking-[0.2em] group-hover:text-orange-500 transition-colors duration-300">
                {m.num}
              </span>
              <h3 className="text-[15px] font-bold text-forest-deep mt-2 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {m.title}
              </h3>
              <ul className="space-y-2">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[14px] text-forest/65">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Outcomes ── */
function Outcomes() {
  return (
    <section className="py-24 bg-[#B47C35] relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-orange-900/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-orange-300" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-orange-200">
                What You'll Leave With
              </span>
            </div>
            <h2 className="text-[2.4rem] font-bold text-white mb-6 leading-tight">
              More than design. A spatial mindset.
            </h2>
            <p className="text-[14px] text-white/80 leading-[1.8] mb-8">
              Participants leave with not just architectural skills, but the creative mindset,
              confidence and network to design meaningful spaces.
            </p>
            {[
              { icon: <Trophy className="h-5 w-5" />, text: "Architecture completion certificate" },
              { icon: <Users className="h-5 w-5" />, text: "Network of passionate design peers" },
              {
                icon: <Lightbulb className="h-5 w-5" />,
                text: "A completed design concept to showcase",
              },
              {
                icon: <Globe2 className="h-5 w-5" />,
                text: "Exposure to world-class architectural environments",
              },
            ].map((o, i) => (
              <div key={i} className="flex items-start gap-4 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white">
                  {o.icon}
                </div>
                <p className="text-[15px] text-white/90 leading-[1.65] mt-1">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-[2rem] overflow-hidden h-72 md:h-[400px]">
            <img
              src={cambridgeImg}
              alt="Cambridge Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B47C35]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-[#F4EFE6] py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-orange-600">
            Join the Track
          </span>
          <div className="h-px w-8 bg-orange-500" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4">
          Ready to shape experiences?
        </h2>
        <p className="text-[15px] text-forest/60 leading-[1.75] mb-10">
          Applications are open for the Cambridge Summer 2026 cohort. Secure your place today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/25"
        >
          Apply for Track 03 <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
