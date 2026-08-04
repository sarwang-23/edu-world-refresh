import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowUpRight, ArrowLeft, CheckCircle2, Microscope, FlaskConical,
  BrainCircuit, Telescope, Users, Trophy, Rocket, Globe2
} from 'lucide-react'
import { Footer } from './index'
import heroImg from '../assets/STEM1.jpg'
import cambridgeImg from '../assets/cambridge_3.jpg'
import { SharedTestimonials } from '@/components/SharedTestimonials';


export const Route = createFileRoute('/students_/stem-research')({
  head: () => ({
    meta: [
      { title: 'STEM Research Track | Young Leaders Summer Programme' },
      { name: 'description', content: 'Ask questions, explore data and discover insights on the STEM Research track at Cambridge.' },
    ],
  }),
  component: StemResearchTrack,
})

function StemResearchTrack() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYoullDo />
      <Modules />
      <Outcomes />
      <SharedTestimonials />
      <CTA />
      <Footer />
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-6 pb-36 md:pt-6 md:pb-44">
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-blue-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-blue-600/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-6">
        {/* Back */}
        <Link
          to="/students"
          className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.18em] text-blue-600 mb-10 hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Programme
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* badge */}
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 text-[15px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-blue-400/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Track 02 · STEM Research
            </span>

            <h1 className="text-[3rem] md:text-[4rem] font-bold text-forest-deep leading-[1.05] mb-5">
              Ask questions.<br />
              <span className="font-serif italic text-blue-600">Discover more.</span>
            </h1>
            <p className="text-[15px] text-forest/80 leading-[1.8] max-w-md mb-10">
              Dive into the world of research and STEM. Learn how questions become insights — and insights create a better world — right at Cambridge University.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/apply-now" search={{ source: "STEM Research Track" }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-500/25"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/students"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest hover:border-blue-400/40 transition-all duration-300"
              >
                View All Tracks
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-80 md:h-[440px]">
            <img src={heroImg} alt="STEM Research" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 flex gap-3">
              {[
                { val: '6', label: 'Days' },
                { val: '30+', label: 'Participants' },
                { val: '100%', label: 'Research-led' },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 text-center">
                  <p className="text-[18px] font-bold text-white">{s.val}</p>
                  <p className="text-[15px] text-white/70 uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── What You'll Do ── */
function WhatYoullDo() {
  const pillars = [
    { icon: <Microscope className="h-6 w-6" />, title: 'Research Thinking', desc: 'Learn scientific methods, hypothesis formation and evidence-based reasoning.' },
    { icon: <FlaskConical className="h-6 w-6" />, title: 'Science Exploration', desc: 'Hands-on experiments and lab-style workshops guided by Cambridge researchers.' },
    { icon: <BrainCircuit className="h-6 w-6" />, title: 'AI in Research', desc: 'Explore how artificial intelligence is transforming modern scientific discovery.' },
    { icon: <Telescope className="h-6 w-6" />, title: 'Present Findings', desc: 'Communicate your discoveries clearly and confidently to a real audience.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-blue-600">What You'll Do</span>
            <div className="h-px w-8 bg-blue-500" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">Four pillars of learning.</h2>
          <p className="text-[15px] text-forest/80 max-w-lg mx-auto leading-[1.75]">Everything is designed to build genuine research capability and scientific curiosity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="group rounded-[1.5rem] border border-forest/8 bg-white p-7 hover:border-blue-400/35 hover:shadow-[0_16px_48px_rgba(37,99,235,0.10)] hover:-translate-y-1 transition-all duration-400 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-[15px] font-bold text-forest-deep mb-2 group-hover:text-blue-600 transition-colors duration-300">{p.title}</h3>
              <p className="text-[15px] text-forest/80 leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Modules ── */
function Modules() {
  const modules = [
    { num: '01', title: 'Research Thinking', items: ['Scientific method', 'Hypothesis formation', 'Critical analysis'] },
    { num: '02', title: 'AI in Research', items: ['AI tools overview', 'Data-driven insights', 'Future of science'] },
    { num: '03', title: 'Science Exploration', items: ['Lab-style workshops', 'Cambridge facilities', 'Guided experiments'] },
    { num: '04', title: 'Collaborative Inquiry', items: ['Team research projects', 'Peer review', 'Constructive debate'] },
    { num: '05', title: 'Evidence Basics', items: ['Evaluating sources', 'Building arguments', 'Logical reasoning'] },
    { num: '06', title: 'Present Findings', items: ['Research presentation', 'Q&A preparation', 'Audience engagement'] },
  ]
  return (
    <section className="py-24 bg-[#F4EFE6]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-blue-600">Programme Modules</span>
            <div className="h-px w-8 bg-blue-500" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-3">Six intensive sessions.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="rounded-[1.5rem] bg-white border border-forest/8 p-7 hover:border-blue-400/30 hover:shadow-[0_12px_36px_rgba(37,99,235,0.09)] transition-all duration-300 shadow-sm group">
              <span className="text-[15px] font-black text-blue-500/50 tracking-[0.2em] group-hover:text-blue-500 transition-colors duration-300">{m.num}</span>
              <h3 className="text-[15px] font-bold text-forest-deep mt-2 mb-4 group-hover:text-blue-600 transition-colors duration-300">{m.title}</h3>
              <ul className="space-y-2">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[15px] text-forest/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Outcomes ── */
function Outcomes() {
  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-blue-400">What You'll Leave With</span>
            </div>
            <h2 className="text-[2.4rem] font-bold text-white mb-6 leading-tight">More than knowledge. A scientific mindset.</h2>
            <p className="text-[15px] text-white/80 leading-[1.8] mb-8">
              Participants leave with not just STEM skills, but the research mindset, confidence and network to keep asking great questions.
            </p>
            {[
              { icon: <Trophy className="h-5 w-5" />, text: 'Research completion certificate from Cambridge' },
              { icon: <Users className="h-5 w-5" />, text: 'Network of STEM-passionate peers from across India' },
              { icon: <Rocket className="h-5 w-5" />, text: 'A completed research project to showcase' },
              { icon: <Globe2 className="h-5 w-5" />, text: 'Exposure to world-class research environments' },
            ].map((o, i) => (
              <div key={i} className="flex items-start gap-4 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400">
                  {o.icon}
                </div>
                <p className="text-[15px] text-white/70 leading-[1.65] mt-1">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-[2rem] overflow-hidden h-72 md:h-[400px]">
            <img src={cambridgeImg} alt="Cambridge" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-[#F4EFE6] py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-blue-600">Join the Track</span>
          <div className="h-px w-8 bg-blue-500" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4">Ready to start asking better questions?</h2>
        <p className="text-[15px] text-forest/80 leading-[1.75] mb-10">Applications are open for the Cambridge summer track. Secure your place today.</p>
        <Link
          to="/contact" search={{ source: "STEM Research Track" }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-500/25"
        >
          Apply for Track 02 <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
