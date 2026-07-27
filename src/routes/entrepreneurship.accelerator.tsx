import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Clock, MapPin, Users, Globe2, CheckCircle2, Rocket, TrendingUp, BarChart3, Network, Handshake } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/entrepreneurship/accelerator')({
  head: () => ({
    meta: [
      { title: 'Startup Accelerator (12 Months) — Global Edu Lab Entrepreneurship' },
      { name: 'description', content: 'A 12-month structured accelerator programme for early-stage startups — with mentorship, workshops, investor access and a global network.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYouGet />
      <Programme />
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
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Entrepreneurship Programme</span>
            </div>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Startup Accelerator<br /><span className="font-serif italic text-gold">(12 Months)</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-forest/80 leading-snug">
              Structured support from concept to scale — over 12 transformative months.
            </p>
            <p className="mt-4 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              The GEL Startup Accelerator is a 12-month hybrid programme designed for early-stage startups ready to grow. You get structured cohort sessions, 1:1 mentorship from industry experts, investor introductions and a global peer network — everything you need to move from prototype to product-market fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4 text-gold" /> 12 Months
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Hybrid (Cambridge + Online)
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20">
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300">
                All Programmes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-forest-deep p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { val: '35+', label: 'Funded Startups', sub: 'From past cohorts' },
                  { val: '£2M+', label: 'Funding Raised', sub: 'By our alumni' },
                  { val: '50+', label: 'Expert Mentors', sub: 'Cambridge & industry' },
                  { val: '18', label: 'Countries', sub: 'Global cohort' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <p className="text-3xl font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[11px] font-bold text-cream mt-2">{s.label}</p>
                    <p className="text-[10px] text-cream/50 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20 relative z-10">
                <p className="text-[11px] font-bold text-gold uppercase tracking-wider">2026 Cohort · Now Accepting Applications</p>
                <p className="text-[10px] text-cream/60 mt-1">Cambridge + Online · Rolling Admissions</p>
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
    { icon: <Users className="h-8 w-8" />, title: 'Cohort Workshops', desc: 'Monthly immersive workshops at Cambridge covering product, growth, fundraising, legal, hiring and scaling — led by practitioner experts.' },
    { icon: <Handshake className="h-8 w-8" />, title: '1:1 Mentor Access', desc: 'Every startup is paired with an experienced mentor from our network of Cambridge alumni, VCs and sector experts for weekly check-ins.' },
    { icon: <TrendingUp className="h-8 w-8" />, title: 'Investor Introductions', desc: 'Warm introductions to angel investors, seed funds and family offices at curated networking events and our twice-yearly Demo Day.' },
    { icon: <Network className="h-8 w-8" />, title: 'Global Peer Network', desc: 'Join a cohort of ambitious founders from 18+ countries. Collaborate, hire, partner and grow together across borders.' },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Programme Benefits</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">12 months of structured support.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-gold group-hover:bg-gold/10 transition-colors duration-300">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-forest-deep mb-3">{item.title}</h3>
              <p className="text-[13px] text-forest/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Programme() {
  const phases = [
    { n: 'Phase 1', t: 'Foundations (Months 1–3)', d: 'Deep-dive into problem-solution fit, customer discovery, MVP planning and early team building. Weekly workshop sessions and mentor calls.' },
    { n: 'Phase 2', t: 'Build & Validate (Months 4–6)', d: 'Launch your MVP, run your first experiments and iterate. Focus on product-market fit and early traction metrics with expert support.' },
    { n: 'Phase 3', t: 'Grow & Fund (Months 7–9)', d: 'Fundraising readiness, pitch deck coaching, investor warm-ups and growth hacking sessions. Prepare for Demo Day.' },
    { n: 'Phase 4', t: 'Scale & Network (Months 10–12)', d: 'Cross-border expansion, hiring strategy, partnership development and Demo Day pitch to a curated investor panel.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Programme Structure</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Four phases to scale.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 p-8 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">{s.n}</span>
              <h3 className="text-[18px] font-bold text-white mt-2 mb-3 group-hover:text-gold transition-colors duration-300">{s.t}</h3>
              <p className="text-[13px] text-white/65 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldJoin() {
  const profiles = [
    { title: 'Early-Stage Startups', desc: 'Startups with an MVP or validated idea, pre-seed or seed stage, looking for structure, mentors and investor access to grow.' },
    { title: 'Solo Founders', desc: 'Driven entrepreneurs who want a structured programme, a peer community and expert guidance to move from idea to traction.' },
    { title: 'Domain Experts Turning Founders', desc: 'Professionals and academics with deep industry knowledge who want to spin out a venture with the right support system.' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Apply</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Built for serious founders.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-[17px] font-bold text-forest-deep mb-3">{p.title}</h3>
              <p className="text-[13px] text-forest/65 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    'Product-market fit validation & early traction',
    'Investor-ready pitch deck and financial model',
    'Warm introductions to 20+ investors and angels',
    'GEL Accelerator Certificate of Completion',
    'Priority Demo Day slot for fundraising pitches',
    'Lifetime membership of the GEL Founder Network',
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Programme Outcomes</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-8">What you build in 12 months.</h2>
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
              <Rocket className="h-8 w-8 text-gold mb-6" />
              <blockquote className="text-[16px] italic text-cream/85 leading-relaxed mb-8">
                "The accelerator and mentor network helped us secure our first round of funding within 9 months. The structured programme gave us the discipline and the network we never had before."
              </blockquote>
              <p className="font-bold text-gold text-sm">Ravi Kapoor</p>
              <p className="text-[11px] text-cream/50 uppercase tracking-wider mt-1">Founder, GreenGrid · Accelerator Cohort 2024</p>
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
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Scale</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">12 months to transform your startup.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Rolling admissions. Apply now and secure your cohort placement.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
