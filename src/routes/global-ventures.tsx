import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Globe, Users, LineChart, Handshake, Rocket, Lightbulb, Search, ClipboardList, TrendingUp, Network, Send, Target, CheckCircle2, Shield, Leaf, Atom, FlaskConical, Sparkles, Microscope } from 'lucide-react'
import { useState } from 'react'
import cambridgeImg from '@/assets/cambridge.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import studentsImg from '@/assets/students.jpg'

export const Route = createFileRoute('/global-ventures')({
  head: () => ({
    meta: [
      { title: 'Global Ventures Programme — Bringing Extraordinary Ventures to a Global Platform | Global Edu Lab' },
      { name: 'description', content: 'GEL\u2019s Global Ventures Programme supports high-potential startups, research-led innovations and impact ventures seeking to expand beyond home markets — via the UK.' },
      { property: 'og:title', content: 'Global Ventures Programme — Global Edu Lab' },
      { property: 'og:description', content: 'Venture strategy, mentoring, investor access and business collaborations — until ventures become self-sustainable.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Page,
})

const ventures = [
  { slug: 'kavach-ai', name: 'KAVACH AI', track: 'Venture Track', icon: <Shield className="h-8 w-8" />, tint: 'bg-indigo-600', d: 'AI-powered solutions for security and risk management across critical infrastructure, enterprises and public systems.' },
  { slug: 'carbon-sync', name: 'CARBON SYNC', track: 'Venture Track', icon: <Leaf className="h-8 w-8" />, tint: 'bg-emerald-600', d: 'A sustainability intelligence platform that helps organisations measure, manage and reduce carbon impact with precision and transparency.' },
  { slug: 'project-tacto', name: 'PROJECT TACTO', track: 'Venture Track', icon: <Atom className="h-8 w-8" />, tint: 'bg-orange-600', d: 'Building advanced tactile sensing solutions that enhance human\u2013machine interaction across robotics, healthcare and assistive technologies.' },
  { slug: 'vyomveda', name: 'VYOMVEDA', track: 'Research Track', icon: <Sparkles className="h-8 w-8" />, tint: 'bg-blue-900', d: 'Researching space weather intelligence and predictive modelling to support resilient space and satellite operations.' },
  { slug: 'cellunova', name: 'CELLUNOVA', track: 'Research Track', icon: <Microscope className="h-8 w-8" />, tint: 'bg-teal-700', d: 'Developing innovative cellular therapeutics and biomaterials through cutting-edge research in regenerative medicine.' },
  { slug: 'saivyy', name: 'SAIVYY', track: 'Venture Track', icon: <FlaskConical className="h-8 w-8" />, tint: 'bg-slate-800', d: 'A digital health platform improving access to quality care through AI-driven diagnostics and patient empowerment tools.' },
]

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <About />
      <Ventures />
      <Journey />
      <Tracks />
      <WhoApply />
      <CTA />
    </div>
  )
}

function Hero() {
  const pills = [
    { icon: <Globe className="h-5 w-5" />, t: 'Global Launchpad via UK' },
    { icon: <Users className="h-5 w-5" />, t: 'Mentoring & Expert Support' },
    { icon: <LineChart className="h-5 w-5" />, t: 'Investor Access & Funding' },
    { icon: <Handshake className="h-5 w-5" />, t: 'Business Collaborations' },
  ]
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Global Ventures Programme</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-forest-deep md:text-5xl lg:text-6xl">
            Bringing extraordinary ventures from emerging economies to a <span className="italic text-gold">global platform.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest/75">
            We support promising startups and research-led innovations with venture strategy, mentoring, investor access and business collaboration — until they become self-sustainable.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:scale-105">Apply to the Programme <ArrowUpRight className="h-4 w-4" /></a>
            <a href="#partner" className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest">Partner with Global Ventures <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="relative">
          <img src={cambridgeImg} alt="Cambridge" className="h-full w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute inset-x-6 -bottom-6 grid grid-cols-2 gap-3 rounded-2xl bg-forest p-4 text-cream md:grid-cols-4">
            {pills.map((p) => (
              <div key={p.t} className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center">
                <span className="text-gold">{p.icon}</span>
                <span className="text-xs font-semibold leading-tight">{p.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const items = [
    { icon: <Lightbulb className="h-6 w-6" />, t: 'Venture Strategy', d: 'Sharpen your vision, business model and growth roadmap.' },
    { icon: <Globe className="h-6 w-6" />, t: 'Global Market Readiness', d: 'Validate your solution for international markets.' },
    { icon: <Users className="h-6 w-6" />, t: 'Mentoring & Expertise', d: 'Learn from founders, industry leaders and sector specialists.' },
    { icon: <LineChart className="h-6 w-6" />, t: 'Investor Access', d: 'Build investor-ready narratives and connect with the right investors.' },
    { icon: <Handshake className="h-6 w-6" />, t: 'Business Collaboration', d: 'Access partners, customers and pilot opportunities worldwide.' },
    { icon: <Rocket className="h-6 w-6" />, t: 'UK Launchpad', d: 'Establish credibility, partnerships and market access via UK.' },
  ]
  return (
    <section className="border-y border-border/60 bg-background py-24 pt-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[320px_1fr]">
        <div>
          <h2 className="text-3xl font-bold text-forest-deep">What is Global Ventures Programme?</h2>
          <div className="mt-6 space-y-4 text-forest/75 leading-relaxed">
            <p>The Global Ventures Programme is GEL&rsquo;s international launchpad for high-potential startups, research-led innovations and impact ventures seeking to expand beyond their home markets.</p>
            <p>We connect selected ventures with the UK&rsquo;s business, academic, investor and innovation ecosystems — helping them validate, grow and scale globally.</p>
          </div>
          <a href="#ventures" className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest">Explore the Programme <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-3xl border border-forest/10 bg-cream/40 p-6 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
              <h3 className="mt-4 text-base font-bold text-forest-deep">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Ventures() {
  const [filter, setFilter] = useState<'All' | 'Venture Track' | 'Research Track'>('All')
  const shown = ventures.filter((v) => filter === 'All' || v.track === filter)
  return (
    <section id="ventures" className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-forest-deep md:text-5xl">Our Ventures</h2>
            <p className="mt-4 max-w-xl text-forest/70">A portfolio of exceptional startups and research-led innovations from emerging economies.</p>
          </div>
          <div className="inline-flex rounded-full border border-forest/15 bg-background p-1">
            {(['All', 'Venture Track', 'Research Track'] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${filter === f ? 'bg-forest text-cream' : 'text-forest/70 hover:text-forest'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((v) => (
            <Link key={v.slug} to="/ventures/$slug" params={{ slug: v.slug }} className="group rounded-3xl border border-forest/10 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className={`${v.tint} inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white`}>{v.icon}</div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${v.track === 'Venture Track' ? 'bg-forest text-cream' : 'bg-gold/20 text-forest-deep'}`}>{v.track}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-forest-deep">{v.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest/70">{v.d}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">Know More <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  const steps = [
    { icon: <Search className="h-6 w-6" />, t: 'Discover', d: 'We identify high-potential ventures with the potential to solve meaningful problems at scale.' },
    { icon: <ClipboardList className="h-6 w-6" />, t: 'Diagnose', d: 'A deep-dive assessment of your strategy, market, team, technology and global readiness.' },
    { icon: <TrendingUp className="h-6 w-6" />, t: 'Strengthen', d: 'Tailored plan with mentoring, expert input, validation and venture-building support.' },
    { icon: <Network className="h-6 w-6" />, t: 'Connect', d: 'Introductions to investors, researchers, corporates and ecosystem partners.' },
    { icon: <Send className="h-6 w-6" />, t: 'Launch', d: 'Support for partnerships, pilots, visibility and market entry through the UK.' },
    { icon: <Target className="h-6 w-6" />, t: 'Sustain & Scale', d: 'Continued support until you achieve sustainable, independent and scalable growth.' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-forest-deep md:text-5xl">Our Venture Journey</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="relative grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="pointer-events-none absolute left-6 right-6 top-7 hidden border-t border-dashed border-gold/50 lg:block" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-forest ring-4 ring-background">{s.icon}</div>
              <p className="mt-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">{i + 1}</p>
              <h3 className="mt-3 text-base font-bold text-forest-deep">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tracks() {
  const v = ['Business model & strategy development', 'Customer & market validation', 'Investor readiness & fundraising support', 'Partnerships & market-entry planning', 'Scaling support']
  const r = ['Research collaboration & technical validation', 'Expert & academic engagement', 'IP & commercialisation pathway guidance', 'Venture formation support', 'From knowledge to global impact']
  return (
    <section className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-forest p-8 text-cream">
          <img src={businessLeadersImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest"><Rocket className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-bold">Venture Track</h3>
            <p className="mt-2 text-cream/80">For startups with a defined proposition looking to validate, grow and scale globally.</p>
            <ul className="mt-6 space-y-3">
              {v.map((x) => <li key={x} className="flex gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{x}</li>)}
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gold/90 p-8 text-forest-deep">
          <img src={cambridgeImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream"><Microscope className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-bold">Research Track</h3>
            <p className="mt-2">For research-led innovations requiring further validation collaboration before commercialisation.</p>
            <ul className="mt-6 space-y-3">
              {r.map((x) => <li key={x} className="flex gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />{x}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoApply() {
  const items = [
    { icon: <Rocket className="h-6 w-6" />, t: 'High-potential startups' },
    { icon: <FlaskConical className="h-6 w-6" />, t: 'Research-led innovations' },
    { icon: <Users className="h-6 w-6" />, t: 'University spinouts & researcher teams' },
    { icon: <Handshake className="h-6 w-6" />, t: 'Impact ventures' },
    { icon: <Globe className="h-6 w-6" />, t: 'Founders seeking international expansion' },
  ]
  return (
    <section id="apply" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[320px_1fr]">
        <div>
          <h2 className="text-3xl font-bold text-forest-deep md:text-4xl">Who Should Apply?</h2>
          <p className="mt-4 leading-relaxed text-forest/75">We seek ambitious founders and researchers creating solutions with the potential for meaningful global impact.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-forest/10 bg-cream/40 p-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest">{i.icon}</div>
              <p className="mt-4 text-sm font-semibold text-forest-deep">{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const items = [
    { icon: <LineChart className="h-6 w-6" />, t: 'For Investors', d: 'Access a curated pipeline of high-potential ventures.', cta: 'Explore Opportunities' },
    { icon: <FlaskConical className="h-6 w-6" />, t: 'For Universities', d: 'Collaborate on research, innovation and impact.', cta: 'Become a Partner' },
    { icon: <Users className="h-6 w-6" />, t: 'For Corporates', d: 'Pilot, co-create and access new solutions.', cta: 'Work With Us' },
    { icon: <Handshake className="h-6 w-6" />, t: 'For Mentors', d: 'Guide exceptional founders globally.', cta: 'Join the Mentor Network' },
  ]
  return (
    <section id="partner" className="bg-forest py-20 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold md:text-4xl">Let&rsquo;s build global impact — together.</h2>
          <p className="mt-4 text-cream/75">Partner with us to empower ventures, create value and shape a better future.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <div key={c.t} className="rounded-3xl border border-cream/10 bg-forest-deep/40 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest">{c.icon}</div>
              <h3 className="mt-5 text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-cream/70">{c.d}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">{c.cta} <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}