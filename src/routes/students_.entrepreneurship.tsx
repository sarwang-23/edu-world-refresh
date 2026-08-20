import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Presentation,
  Brain,
  Trophy,
} from "lucide-react";
import { Footer } from "./index";
import studentsImg from "../assets/students.jpg";
import cambridgeImg from "../assets/cambridge.jpg";

export const Route = createFileRoute("/students_/entrepreneurship")({
  head: () => ({
    meta: [
      { title: "Entrepreneurship Track | Young Leaders Summer Programme" },
      {
        name: "description",
        content:
          "Build ideas, solve problems and create real-world impact on the Entrepreneurship track at Cambridge.",
      },
    ],
  }),
  component: EntrepreneurshipTrack,
});

function EntrepreneurshipTrack() {
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
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28">
        {/* Back */}
        <Link
          to="/students"
          className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.18em] text-gold mb-10 hover:text-gold/70 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Programme
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* badge */}
            <span className="inline-flex items-center gap-2 bg-gold/12 text-gold text-[15px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Track 01 · Entrepreneurship
            </span>

            <h1 className="text-[3rem] md:text-[4rem] font-bold text-forest-deep leading-[1.05] mb-5">
              Build ideas.
              <br />
              <span className="font-serif italic text-gold">Create impact.</span>
            </h1>
            <p className="text-[15px] text-forest/65 leading-[1.8] max-w-md mb-10">
              Discover the world of innovation and entrepreneurship. Learn how world-changing ideas
              are born, tested and transformed into real solutions — at Cambridge.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/students"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest hover:border-gold/40 transition-all duration-300"
              >
                View All Tracks
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-80 md:h-[440px]">
            <img src={studentsImg} alt="Entrepreneurship" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
            <div className="absolute bottom-6 left-6 flex gap-3">
              {[
                { val: "6", label: "Days" },
                { val: "30+", label: "Participants" },
                { val: "100%", label: "Hands-on" },
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
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Ideation",
      desc: "Learn structured frameworks to generate, evaluate and develop business ideas.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Strategy",
      desc: "Understand market dynamics, business models and competitive positioning.",
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "Pitching",
      desc: "Craft and deliver compelling pitches to mentors and industry leaders.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Innovation",
      desc: "Use design thinking and AI tools to solve real-world problems.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">
              What You'll Do
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">
            Four pillars of learning.
          </h2>
          <p className="text-[14px] text-forest/55 max-w-lg mx-auto leading-[1.75]">
            Everything you experience is designed to build real entrepreneurial capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group rounded-[1.5rem] border border-forest/8 bg-white p-7 hover:border-gold/35 hover:shadow-[0_16px_48px_rgba(26,53,35,0.10)] hover:-translate-y-1 transition-all duration-400 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-[15px] font-bold text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300">
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
      title: "Opportunity Discovery",
      items: ["Spotting market gaps", "Customer empathy", "Problem-first thinking"],
    },
    {
      num: "02",
      title: "Business Model Basics",
      items: ["Revenue models", "Value proposition", "Cost structure"],
    },
    {
      num: "03",
      title: "Pitching & Storytelling",
      items: ["Narrative structure", "Slide design", "Voice & presence"],
    },
    {
      num: "04",
      title: "AI for Innovation",
      items: ["AI tools overview", "Prototyping with AI", "Future of work"],
    },
    {
      num: "05",
      title: "Design Thinking",
      items: ["Ideate → Prototype", "User testing", "Rapid iteration"],
    },
    {
      num: "06",
      title: "Venture Challenge",
      items: ["Team formation", "Pitch to mentors", "Feedback & reflection"],
    },
  ];
  return (
    <section className="py-24 bg-[#F4EFE6]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">
              Programme Modules
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">
            Six intensive sessions.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div
              key={i}
              className="rounded-[1.5rem] bg-white border border-forest/8 p-7 hover:border-gold/30 hover:shadow-[0_12px_36px_rgba(26,53,35,0.09)] transition-all duration-300 shadow-sm group"
            >
              <span className="text-[15px] font-black text-gold/50 tracking-[0.2em] group-hover:text-gold transition-colors duration-300">
                {m.num}
              </span>
              <h3 className="text-[15px] font-bold text-forest-deep mt-2 mb-4 group-hover:text-gold transition-colors duration-300">
                {m.title}
              </h3>
              <ul className="space-y-2">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[14px] text-forest/65">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
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
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">
                What You'll Leave With
              </span>
            </div>
            <h2 className="text-[2.4rem] font-bold text-white mb-6 leading-tight">
              More than a programme. A launchpad.
            </h2>
            <p className="text-[14px] text-cream/60 leading-[1.8] mb-8">
              Participants leave not just with knowledge, but with the mindset, skills and network
              to start turning ideas into reality.
            </p>
            {[
              {
                icon: <Trophy className="h-5 w-5" />,
                text: "Venture Challenge certificate from Cambridge",
              },
              {
                icon: <Users className="h-5 w-5" />,
                text: "Network of like-minded young innovators",
              },
              {
                icon: <Rocket className="h-5 w-5" />,
                text: "A validated business idea ready to grow",
              },
              {
                icon: <Target className="h-5 w-5" />,
                text: "Clarity on your entrepreneurial path",
              },
            ].map((o, i) => (
              <div key={i} className="flex items-start gap-4 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 border border-gold/25 text-gold">
                  {o.icon}
                </div>
                <p className="text-[15px] text-cream/75 leading-[1.65] mt-1">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-[2rem] overflow-hidden h-72 md:h-[400px]">
            <img src={cambridgeImg} alt="Cambridge" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
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
          <div className="h-px w-8 bg-gold" />
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">
            Join the Track
          </span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4">
          Ready to build your idea?
        </h2>
        <p className="text-[15px] text-forest/60 leading-[1.75] mb-10">
          Applications are open for the Cambridge Summer 2026 cohort. Secure your place today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25"
        >
          Apply for Track 01 <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
