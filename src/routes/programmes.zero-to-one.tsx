import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Play, CheckCircle2, Users, Trophy, Rocket, Compass, Calendar, Globe2, Lightbulb, Zap, ChevronLeft, ChevronRight, Star, Target, FlaskConical, Sprout, Sparkles, Award, GraduationCap, User } from 'lucide-react'
import { Footer } from './index'
import cambridgeImg from '../assets/cambridge.jpg'
import heroImg from '../assets/zero-to-one-past-1.jpg'
import zeroToOneVideo from '../assets/zero-to-one.mp4'
import businessLeadersImg from '../assets/business-leaders.jpg'
import { useState } from 'react'

export const Route = createFileRoute('/programmes/zero-to-one')({
  head: () => ({
    meta: [
      { title: 'Zero-To-One Ideation Weekend | Cambridge Judge Business School — Global Edu Lab' },
      { name: 'description', content: 'A 48-hour venture-building format that takes you from idea to incubator-ready in Cambridge. Upcoming Intake at Judge Business School.' },
      { property: 'og:title', content: 'Zero-To-One Ideation Weekend' },
      { property: 'og:description', content: 'From raw ideas to incubator-ready ventures in 48 hours at Cambridge.' },
    ],
  }),
  component: ZeroToOne,
})

function ZeroToOne() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <StatsMarquee />
      <WhatIsZTO />
      <ThemeSection />
      <SuccessStory />
      <ProgrammeFormat />
      <WhoShouldApply />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </div>
  )
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-4 pb-24 md:pt-4 md:pb-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div>
            {/* eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-gold">48-Hour Venture-Building Weekend</span>
            </div>

            <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-forest-deep leading-[1.04] tracking-tight">
              Zero-To-One.<br />
              <span className="font-serif italic text-gold">Idea to venture.</span>
            </h1>

            <p className="mt-6 text-[17px] font-semibold text-forest/80 leading-snug">
              From raw ideas to incubator-ready ventures in 48 hours.
            </p>
            <p className="mt-4 text-[15px] text-forest/80 leading-[1.75] max-w-lg">
              A practical, high-energy venture-building format hosted at Cambridge Judge Business School, in partnership with King's E-Lab. Challenge your thinking, form a team, and leave with a validated direction.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: <GraduationCap className="h-4 w-4" />, label: 'Cambridge Judge' },
                { icon: <Zap className="h-4 w-4" />, label: '48 Hours' },
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-forest/10 px-4 py-2 text-[15px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm">
                  <span className="text-gold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/apply-now"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25"
              >
                Sign Up Now
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <a href="#format" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep backdrop-blur-sm hover:border-forest-deep hover:bg-white transition-all duration-300">
                See Format
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_32px_80px_-12px_rgba(26,53,35,0.25)] relative ring-1 ring-forest/10">
              <img src={heroImg} alt="Zero to One" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Cambridge, UK</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gold/30 border-2 border-white/40 backdrop-blur-sm flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-forest-deep border-2 border-white/40 flex items-center justify-center text-white text-[15px] font-bold">+30</div>
                </div>
              </div>
            </div>

            {/* Floating card — King's E-Lab */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-forest/15 border border-forest/8 backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <Rocket className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">King's E-Lab</p>
                <p className="text-[15px] text-forest/80 mt-0.5">& Cambridge Judge</p>
              </div>
            </div>

            {/* Floating card — 48h */}
            <div className="absolute -top-6 -right-6 flex items-center gap-3 rounded-2xl bg-forest-deep p-4 shadow-2xl shadow-forest-deep/25 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white uppercase tracking-wider">48 Hours</p>
                <p className="text-[15px] text-cream/80 mt-0.5">Idea to venture</p>
              </div>
            </div>

            {/* Dot pattern */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 opacity-20 [background-image:radial-gradient(var(--forest)_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── STATS MARQUEE ─────────────────────────────────────────────────────────── */
function StatsMarquee() {
  const stats = [
    { val: '48h', label: 'Intensive Format', sub: 'Idea to venture direction' },
    { val: '4/10', label: 'Ideas Incubated', sub: 'From inaugural cohort' },
    { val: 'Spark', label: 'Cambridge Incubator', sub: 'Placement pipeline' },
    { val: 'Food & Agri', label: 'October Theme', sub: 'Planetary Health Focus' },
    { val: '100%', label: 'Form Real Teams', sub: 'Across disciplines' },
    { val: 'Rolling', label: 'Next Cohort', sub: 'Flexible scheduling' },
  ]
  const repeated = [...stats, ...stats, ...stats]
  return (
    <section className="bg-white border-y border-forest/8 overflow-hidden relative z-20 -mt-12">
      <div className="py-10">
        <div className="flex gap-0 animate-marquee" style={{ animationDirection: 'reverse' }}>
          {repeated.map((s, i) => (
            <div key={i} className="text-center px-10 flex-shrink-0 border-r border-forest/10 last:border-r-0 group cursor-default">
              <p className="text-2xl md:text-3xl font-bold text-forest-deep group-hover:text-gold transition-colors duration-300">{s.val}</p>
              <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-gold mt-2 mb-1">{s.label}</p>
              <p className="text-[15px] text-forest/80 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WHAT IS ZTO ────────────────────────────────────────────────────────────── */
function WhatIsZTO() {
  const pillars = [
    { icon: <Users className="h-6 w-6" />, title: 'Who Participates', desc: 'Researchers, business students, alumni, early-stage founders and curious builders across disciplines.' },
    { icon: <Trophy className="h-6 w-6" />, title: 'What You Leave With', desc: 'A validated venture direction, a team, and a pathway to formal incubation or accelerator support.' },
    { icon: <Rocket className="h-6 w-6" />, title: 'How It Works', desc: 'Fast-paced problem-framing bursts, team formation, AI prototyping, mentor clinics and validation.' },
    { icon: <Compass className="h-6 w-6" />, title: 'The Principle', desc: 'Not to start with the best idea, but to develop founder-thinking: how to find the \'how\' inside any \'what\'.' },
  ]
  return (
    <section className="bg-white py-32 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">About Zero-To-One</span>
            </div>
            <h2 className="text-[2.2rem] font-bold text-forest-deep mb-6 leading-[1.1]">Bridging the ideation gap.</h2>
            <p className="text-[15px] text-forest/70 leading-[1.7] mb-5">
              Most incubators and accelerators are designed for teams that already have a defined idea, a formed team, early validation and founder confidence.
            </p>
            <p className="text-[15px] font-bold text-forest-deep leading-[1.7] mb-5 p-4 bg-[#F4EFE6] rounded-xl border-l-2 border-gold">
              Zero-to-One fills the stage before that.
            </p>
            <p className="text-[15px] text-forest/70 leading-[1.7]">
              Participants find the hidden 'how' inside an early idea, challenge it through teamwork and mentoring, and begin turning uncertainty into validated 'yeses'.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <div key={i} className="group bg-white rounded-[1.75rem] p-8 border border-forest/8 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.08)] hover:-translate-y-1 transition-all duration-400 relative overflow-hidden shadow-sm">
                  <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EFE6] text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">{p.icon}</div>
                  <h4 className="text-[15px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h4>
                  <p className="text-[15px] text-forest/80 leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── THEME SECTION ──────────────────────────────────────────────────────────── */
function ThemeSection() {
  const ventureAreas = [
    'AI for personalised food & nutrition',
    'Food waste circularity & supply chains',
    'Climate-smart agriculture',
    'Regenerative biology & soil health',
    'Alternative proteins & cellular agriculture',
    'AgriTech & precision farming',
    'Consumer health behaviour change',
    'Sustainable packaging & distribution',
  ]
  return (
    <section className="py-32 bg-forest-deep relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Upcoming Theme</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white mb-6 leading-tight">
              Food, Agriculture &<br/>Planetary Health
            </h2>
            <p className="text-[15px] text-cream/75 leading-[1.8] mb-10 max-w-lg">
              A timely theme connecting health, climate, biology, food systems, sustainability, agriculture, AI, supply chains, behaviour change and commercial innovation. One of the most pressing systems challenges of our era — and an enormous venture opportunity.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ventureAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 px-5 py-4 cursor-default">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                  <span className="text-[15px] text-white/90 leading-snug font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[480px]">
            <div className="h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/40 border border-white/10 min-h-[480px] group">
              <img src={cambridgeImg} alt="Theme" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="inline-flex items-center gap-2 mb-4 bg-gold/15 backdrop-blur-sm border border-gold/30 px-3.5 py-1.5 rounded-full">
                  <Sprout className="h-4 w-4 text-gold" />
                  <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold">Why This Theme</p>
                </div>
                <p className="text-white text-[15px] leading-[1.7] font-medium">
                  Global food systems are under pressure from climate change, population growth, and shifting consumer expectations — creating the largest venture opportunity of the decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SUCCESS STORY ──────────────────────────────────────────────────────────── */
/* ─── SUCCESS STORY ──────────────────────────────────────────────────────────── */
function SuccessStory() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="py-32 bg-[#F4EFE6] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-gold/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Alumni Impact</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">From challenge to incubation.</h2>
        </div>
        <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-forest/8 shadow-[0_16px_60px_rgba(26,53,35,0.08)]">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[15px] text-forest/75 leading-[1.8] mb-6">
                Four of the ten ideas that emerged from the inaugural Zero-to-One weekend were offered places on the <strong className="text-forest-deep font-bold">Spark Incubator at the University of Cambridge</strong>, while two other teams are now receiving active support to develop early-stage partnerships and explore pilot opportunities.
              </p>
              <p className="text-[15px] text-forest/75 leading-[1.8] mb-10">
                The programme doesn't just end with an idea — it creates a pathway. Participants walk away with a team, a validated direction, and a warm introduction to Cambridge's innovation ecosystem.
              </p>
              <div className="grid grid-cols-3 gap-5">
                {[
                  { val: '4/10', label: 'Ideas on Spark Incubator' },
                  { val: '2', label: 'Teams in active pilot support' },
                  { val: '100%', label: 'Participants form real teams' },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-[#F4EFE6] rounded-2xl p-6 border border-forest/8 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <p className="text-2xl font-bold text-forest-deep">{s.val}</p>
                    <p className="text-[15px] text-forest/80 mt-1 leading-[1.5] uppercase tracking-wide font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video / thumbnail frame — dimensions unchanged (aspect-[16/10]) */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-xl border border-forest/8">
              {!videoOpen ? (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="relative w-full h-full cursor-pointer group block"
                  aria-label="Play Zero-To-One highlights video"
                >
                  <img src={businessLeadersImg} alt="Zero to One outcome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-forest-deep/30 group-hover:bg-forest-deep/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-6 w-6 text-gold ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold drop-shadow-md">Watch the Experience</p>
                    <p className="text-white text-[15px] font-bold mt-1 drop-shadow-md">Zero-To-One Highlights</p>
                  </div>
                </button>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video
                    src="/zerotoone.mp4"
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  />
                  <button
                    onClick={() => setVideoOpen(false)}
                    aria-label="Close video"
                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-[16px] transition-colors z-10"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PROGRAMME FORMAT ───────────────────────────────────────────────────────── */
function ProgrammeFormat() {
  const schedule = [
    {
      day: 'Day 1 · Thursday',
      date: '19',
      sessions: [
        { time: 'Afternoon', title: 'Arrival & Registration', desc: 'Check-in at Cambridge Judge Business School. Opening reception with mentors and peers.' },
        { time: 'Evening', title: 'Theme Deep-Dive', desc: 'Expert panel on Food, Agriculture & Planetary Health. Landscape mapping and opportunity framing.' },
        { time: 'Night', title: 'Networking Dinner', desc: 'Informal dinner to meet your cohort, mentors and Cambridge ecosystem leaders.' },
      ],
    },
    {
      day: 'Day 2 · Friday',
      date: '20',
      sessions: [
        { time: '9:00am', title: 'Problem-Finding Sprints', desc: 'Facilitated sessions to surface real problems within the theme. Move from interest to insight.' },
        { time: '12:00pm', title: 'Team Formation', desc: 'Form interdisciplinary teams of 3–5. Chemistry over credentials.' },
        { time: '2:00pm', title: 'AI Prototyping Workshop', desc: 'Use AI tools to rapidly prototype product concepts, business models and user journeys.' },
        { time: '5:00pm', title: 'Mentor Clinics', desc: 'One-to-one and small group sessions with Cambridge academics and venture mentors.' },
        { time: 'Evening', title: 'Team Working Sessions', desc: 'Open workshop space with facilitated support. Build your pitch narrative.' },
      ],
    },
    {
      day: 'Day 3 · Saturday',
      date: '21',
      sessions: [
        { time: '9:00am', title: 'Final Preparation', desc: 'Polish your venture story. Final mentor feedback rounds.' },
        { time: '11:00am', title: 'Venture Pitches', desc: 'Present your venture direction to a panel of investors, academics and ecosystem leaders.' },
        { time: '2:00pm', title: 'Panel Feedback & Awards', desc: 'Structured feedback from the panel. Recognition of standout ventures.' },
        { time: '3:30pm', title: 'Ecosystem Introductions', desc: 'Warm introductions to the Cambridge incubation ecosystem, including Spark Incubator.' },
        { time: '4:30pm', title: 'Closing Celebration', desc: 'Celebrate the work done and the relationships built.' },
      ],
    },
  ]
  const [activeDay, setActiveDay] = useState(0)
  const day = schedule[activeDay]
  return (
    <section id="format" className="bg-white py-32 border-t border-forest/5 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/6 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programme Format</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep leading-[1.1]">48 hours — structured for velocity.</h2>
        </div>
        <div className="flex gap-4 mb-10 flex-wrap">
          {schedule.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={"rounded-full px-7 py-3.5 text-[15px] font-bold uppercase tracking-[0.15em] transition-all duration-300 " + (activeDay === i ? 'bg-forest-deep text-gold shadow-[0_8px_24px_rgba(26,53,35,0.2)]' : 'bg-[#F4EFE6] border border-forest/10 text-forest/80 hover:border-gold/40 hover:text-forest-deep shadow-sm')}
            >
              {d.day.split(' · ')[0]}
            </button>
          ))}
        </div>
        <div className="bg-[#F4EFE6] rounded-[2.5rem] p-10 lg:p-12 border border-forest/8 shadow-[0_8px_40px_rgba(26,53,35,0.06)] relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gold/8 blur-[60px]" />
          
          <div className="mb-10 flex items-baseline gap-4 relative z-10">
            <h3 className="text-[22px] font-bold text-forest-deep">{day.day}</h3>
            <p className="text-[15px] text-gold font-bold uppercase tracking-wider">{day.date}</p>
          </div>
          
          <div className="flex flex-col gap-5 relative z-10">
            {day.sessions.map((s, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-5 md:gap-8 bg-white rounded-2xl p-6 border border-forest/5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                <div className="md:w-32 shrink-0 pt-0.5">
                  <p className="text-[15px] font-bold text-gold uppercase tracking-[0.15em]">{s.time}</p>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300">{s.title}</h4>
                  <p className="text-[15px] text-forest/70 leading-[1.65]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── WHO SHOULD APPLY ───────────────────────────────────────────────────────── */
function WhoShouldApply() {
  const profiles = [
    { icon: <FlaskConical className="h-6 w-6" />, title: 'Researchers', desc: 'Scientists and academics who have insights or findings that could translate into real-world impact.', color: 'bg-forest-deep' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'Business Students', desc: 'MBA and master\'s students looking to build real-world venture experience alongside their studies.', color: 'bg-[#B47C35]' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Early Founders', desc: 'Those with early ideas who want to stress-test, refine and build with like-minded collaborators.', color: 'bg-[#1A365D]' },
    { icon: <Rocket className="h-6 w-6" />, title: 'Builders & Makers', desc: 'Technologists, designers and product people who want to channel their skills into a new venture.', color: 'bg-forest' },
  ]
  return (
    <section className="bg-forest-deep py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Apply</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-white mb-5">Built for curious, driven people.</h2>
          <p className="mt-4 text-[15px] text-cream/80 max-w-xl mx-auto leading-[1.7]">You don't need the perfect idea. You need curiosity, drive, and the desire to think like a founder.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="group rounded-[1.75rem] border border-white/12 bg-white/6 backdrop-blur-sm overflow-hidden hover:border-gold/40 hover:bg-white/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-400">
              <div className={`h-1.5 w-full ${p.color}`} />
              <div className="p-8 pb-10">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.color} text-white shadow-sm ring-2 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-cream/80 leading-[1.6]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────────── */
function Testimonials() {
  const testimonials = [
    {
      name: 'Shreya Patel',
      role: 'PhD Researcher, University of Cambridge',
      initials: 'SP',
      quote: 'I came in with a vague idea about food systems and left with a real team, a validated direction, and an invitation to pitch to the Spark Incubator. Zero-to-One changed the trajectory of my research.',
    },
    {
      name: 'James Okafor',
      role: 'MBA Student, Cambridge Judge Business School',
      initials: 'JO',
      quote: 'The AI prototyping workshop alone was worth it. We went from idea to working concept in three hours. The mentors were genuine and the format was relentlessly practical.',
    },
    {
      name: 'Mia Chen',
      role: 'Co-founder, AgriTech Startup (Spark Incubator)',
      initials: 'MC',
      quote: 'We formed as a team at Zero-to-One, pitched on day three, and six months later we\'re in the Cambridge Spark Incubator. I would not have believed it was possible without this programme.',
    },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-[#F4EFE6] py-32 border-t border-forest/5 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/8 blur-[100px]" />
      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Participant Stories</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-forest-deep mb-16">What participants say.</h2>
        {/* 3 Frames Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12 w-full">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-video w-full rounded-xl bg-black/5 overflow-hidden relative border border-black/10 shadow-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center">
                  <div className="h-0 w-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black/40 border-b-[6px] border-b-transparent ml-1" />
                </div>
                <span className="text-black/40 text-[13px] font-bold uppercase tracking-widest">Video Frame</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-white rounded-[2.5rem] p-12 border border-forest/8 shadow-[0_8px_32px_rgba(26,53,35,0.06)] relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="h-20 w-20 rounded-[1.25rem] bg-gold flex items-center justify-center text-2xl font-bold text-forest-deep shadow-xl border-4 border-[#F4EFE6]">{t.initials}</div>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 mb-8 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
          </div>
          <blockquote className="text-[17px] leading-[1.8] text-forest/75 max-w-2xl mx-auto italic mb-8">"{t.quote}"</blockquote>
          <p className="text-[15px] font-bold text-forest-deep">{t.name}</p>
          <p className="text-[15px] text-forest/80 mt-1.5 uppercase tracking-wide font-semibold">{t.role}</p>
          
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))} className="h-10 w-10 rounded-full border border-forest/15 bg-[#F4EFE6] flex items-center justify-center text-forest/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={"h-1.5 rounded-full transition-all duration-300 " + (i === current ? 'w-6 bg-gold' : 'w-1.5 bg-forest/20')} />)}
            </div>
            <button onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))} className="h-10 w-10 rounded-full border border-forest/15 bg-[#F4EFE6] flex items-center justify-center text-forest/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── BOTTOM CTA ─────────────────────────────────────────────────────────────── */
function BottomCTA() {
  return (
    <section className="bg-forest-deep py-32 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Sparkles key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Join the Next Cohort</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2.2rem] md:text-[3.2rem] font-bold text-white leading-[1.08] tracking-tight">Turn your curiosity into a venture.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-[1.75] max-w-xl mx-auto">Join Zero-to-One this June at Cambridge and build a venture from the ground up in 48 hours.</p>
        
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <Link
            to="/apply-now"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25"
          >
            Sign Up Now
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  )
}