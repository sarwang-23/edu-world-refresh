import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Clock, MapPin, Lightbulb, Users, Zap, Star, CheckCircle2, Rocket, Brain, Target, Globe2 } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/entrepreneurship_/zero-to-one')({
  head: () => ({
    meta: [
      { title: 'Zero-to-One Ideation Weekend — Global Edu Lab Entrepreneurship' },
      { name: 'description', content: 'A 48-hour immersive ideation sprint at Cambridge. Students, professionals and workers come together to solve real-world challenges and build venture-ready ideas.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYouGet />
      <HowItWorks />
      <WhoShouldJoin />
      <Outcomes />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Entrepreneurship Programme</span>
            </div>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Zero-to-One<br /><span className="font-serif italic text-gold">Ideation Weekend</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-forest/80 leading-snug">
              48 Hours. One Problem. Your First Venture.
            </p>
            <p className="mt-4 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              The Zero-to-One Ideation Weekend is an intensive 48-hour sprint where students, young professionals and aspiring founders come together at Cambridge to tackle real-world problems, rapidly prototype solutions, and pitch to a live panel of investors and mentors.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4 text-gold" /> 48 Hours
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Cambridge, UK
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20">
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300">
                All Programmes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-forest-deep p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { val: '48', label: 'Hours Sprint', sub: 'Intensive' },
                  { val: '10+', label: 'Mentors', sub: 'Cambridge Faculty' },
                  { val: '₹0', label: 'Equity Taken', sub: 'You own your idea' },
                  { val: '100%', label: 'Hands-On', sub: 'No lectures, only action' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <p className="text-3xl font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[15px] font-bold text-cream mt-2">{s.label}</p>
                    <p className="text-[14px] text-cream/50 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20 relative z-10">
                <p className="text-[15px] font-bold text-gold uppercase tracking-wider">Next Cohort · Open for Applications</p>
                <p className="text-[14px] text-cream/60 mt-1">Cambridge · Limited to 60 Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  const items = [
    { icon: <Brain className="h-8 w-8" />, title: 'Problem Discovery Sessions', desc: 'Work with Cambridge mentors to identify real market gaps, customer pain points and venture opportunities across sectors.' },
    { icon: <Zap className="h-8 w-8" />, title: 'Rapid Prototyping Sprints', desc: 'Build lean MVPs, user personas and business canvases with expert facilitation in fast-paced design-thinking workshops.' },
    { icon: <Target className="h-8 w-8" />, title: 'Pitch Coaching & Demo Day', desc: 'Refine your pitch with professional coaches and present your solution to a live panel of investors, mentors and academics.' },
    { icon: <Globe2 className="h-8 w-8" />, title: 'Network & Community Access', desc: 'Connect with a diverse cohort of global participants, Cambridge alumni and access the GEL founder community post-event.' },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">What You Get</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Everything packed into 48 hours.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-gold group-hover:bg-gold/10 transition-colors duration-300">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-forest-deep mb-3">{item.title}</h3>
              <p className="text-[15px] text-forest/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', t: 'Arrive & Connect', d: 'Meet your cohort, mentors and facilitators. Teams are formed across disciplines — tech, business, design and domain expertise.' },
    { n: '02', t: 'Problem Deep-Dive', d: 'Guided sessions to understand real-world problems. Secondary research, mentor briefings and market framing.' },
    { n: '03', t: 'Ideate & Build', d: 'Rapid design-thinking sprints. Test assumptions, sketch solutions and build your minimum viable concept.' },
    { n: '04', t: 'Pitch & Win', d: 'Present your venture idea to a panel of investors and Cambridge mentors. Feedback, prizes and funding introductions await.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">How It Works</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Your 48-hour journey.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 p-8 group">
              <span className="text-5xl font-serif text-gold/20 font-bold group-hover:text-gold/50 transition-colors">{s.n}</span>
              <h3 className="text-[17px] font-bold text-white mt-4 mb-3 group-hover:text-gold transition-colors duration-300">{s.t}</h3>
              <p className="text-[15px] text-white/65 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldJoin() {
  const profiles = [
    { title: 'University Students', desc: 'Undergraduate and postgraduate students eager to solve real problems and launch their first venture with Cambridge-level mentorship.' },
    { title: 'Young Professionals', desc: 'Early-career professionals with a side idea or startup ambition who want structured support, mentors and a co-founder community.' },
    { title: 'Aspiring Founders', desc: 'Individuals with a business concept who want to validate, prototype and pitch their idea in an intensive, high-energy environment.' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Join</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Built for aspiring founders.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Rocket className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-[17px] font-bold text-forest-deep mb-3">{p.title}</h3>
              <p className="text-[15px] text-forest/65 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    'A validated venture concept or MVP',
    'Feedback from Cambridge investors & mentors',
    'Co-founders from across disciplines',
    'GEL Entrepreneurship Certificate of Participation',
    'Priority access to GEL Startup Accelerator',
    'Lifetime access to the GEL Founder Network',
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">What You Leave With</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-8">You won't leave empty-handed.</h2>
            <ul className="space-y-4">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] text-forest/75">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-forest-deep p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <Star className="h-8 w-8 text-gold mb-6" />
              <blockquote className="text-[16px] italic text-cream/85 leading-relaxed mb-8">
                "Zero-to-One gave us clarity, mentors and the confidence to build our MVP in just 48 hours. Within 6 months, we had our first 100 paying customers."
              </blockquote>
              <p className="font-bold text-gold text-[15px]">Avani Patel</p>
              <p className="text-[15px] text-cream/50 uppercase tracking-wider mt-1">Co-Founder, EduTech Hub · Ideation Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-forest-deep py-24 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Build</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Your idea. 48 hours. Cambridge.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Applications are open. Limited cohort size — apply today to secure your place.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
