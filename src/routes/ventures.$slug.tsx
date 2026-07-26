import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowUpRight, ArrowLeft, Cpu, TrendingUp, Globe, Target, CheckCircle2, Shield, Users, Handshake, Rocket, Lightbulb, Award, Building2, Briefcase, Download, Lock, Leaf, Atom, Sparkles, Microscope, FlaskConical } from 'lucide-react'
import businessLeadersImg from '@/assets/business-leaders.jpg'

type Venture = {
  slug: string
  name: string
  track: 'Venture Track' | 'Research Track'
  tagline: string
  intro: string
  sector: string
  stage: string
  origin: string
  markets: string
  logo: React.ReactNode
  color: string
  problem: string
  solution: string
  matters: string
  impact: string
  highlights: string[]
  progress: string[]
  metrics: { l: string; v: string }[]
  team: { name: string; role: string; bio: string }[]
  seeking: { icon: React.ReactNode; t: string; d: string }[]
  roadmap: { period: string; icon: React.ReactNode; items: string[] }[]
}

const VENTURES: Record<string, Venture> = {
  'kavach-ai': {
    slug: 'kavach-ai', name: 'KAVACH AI', track: 'Venture Track',
    tagline: 'Intelligent technology for a safer and more resilient future.',
    intro: 'Kavach AI is an emerging artificial intelligence venture developing intelligent solutions for complex operational, security and resilience-related challenges.',
    sector: 'Artificial Intelligence', stage: 'Early-stage Venture', origin: 'India', markets: 'UK, EU, Middle East, Asia-Pacific',
    logo: <Shield className="h-24 w-24" />, color: 'from-indigo-900 via-blue-900 to-slate-900',
    problem: 'Many organisations face rising security and operational risks due to fragmented systems, manual monitoring and slow response times.',
    solution: 'Kavach AI uses advanced artificial intelligence to detect risks in real time, predict threats and automate intelligent responses.',
    matters: 'More resilient operations, lower risk exposure and better decision-making lead to safer businesses and communities.',
    impact: 'Enabling organisations to act faster, reduce incidents and build a safer, more resilient future for all stakeholders.',
    highlights: ['AI-powered real-time risk detection and prediction', 'Adaptive to multiple industries and use cases', 'Proprietary algorithms for high accuracy and low false alerts', 'Scalable and secure architecture built for global deployment', 'Strong founding team with deep tech and domain expertise'],
    progress: ['MVP developed and tested across pilot deployments', 'Successful pilots with early enterprise users', 'Proprietary AI models trained on multi-domain datasets', 'Strategic partnerships in progress', 'Patent application filed'],
    metrics: [{ l: 'Pilots Completed', v: '3' }, { l: 'Accuracy', v: '92%+' }, { l: 'Early Customers', v: '5' }, { l: 'Alerts Processed', v: '50K+' }, { l: 'Incidents Mitigated', v: '37% reduction' }],
    team: [
      { name: 'Aarav Sharma', role: 'Co-founder & CEO', bio: 'AI and cybersecurity expert with 10+ years of experience building scalable enterprise solutions.' },
      { name: 'Neha Iyer', role: 'Co-founder & CTO', bio: 'Former research scientist in machine learning with expertise in predictive analytics and deep learning.' },
    ],
    seeking: [
      { icon: <Briefcase className="h-5 w-5" />, t: 'Investment', d: 'Pre-seed / Seed investment to scale product, expand pilots and accelerate market entry.' },
      { icon: <Users className="h-5 w-5" />, t: 'Pilot Partners', d: 'Enterprises and institutions interested in piloting AI-driven risk intelligence solutions.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Strategic Partners', d: 'Technology partners, system integrators and consultants.' },
      { icon: <Lightbulb className="h-5 w-5" />, t: 'Mentors & Experts', d: 'Domain experts in AI, cybersecurity, enterprise sales and product strategy.' },
    ],
    roadmap: [
      { period: '0 \u2013 6 Months', icon: <Rocket className="h-6 w-6" />, items: ['Scale pilots across multiple sectors', 'Enhance AI models and platform'] },
      { period: '6 \u2013 12 Months', icon: <TrendingUp className="h-6 w-6" />, items: ['Commercial launch in target markets', 'Expand enterprise customer base'] },
      { period: '12 \u2013 18 Months', icon: <Globe className="h-6 w-6" />, items: ['International expansion through UK', 'Strategic partnerships and integrations'] },
      { period: '18 \u2013 24 Months', icon: <Target className="h-6 w-6" />, items: ['Platform scaling and market leadership', 'Sustainable revenue and profitability'] },
    ],
  },
}

// Minimal placeholders for other ventures
const ICONS: Record<string, { icon: React.ReactNode; color: string }> = {
  'carbon-sync': { icon: <Leaf className="h-24 w-24" />, color: 'from-emerald-900 via-green-800 to-slate-900' },
  'project-tacto': { icon: <Atom className="h-24 w-24" />, color: 'from-orange-900 via-amber-800 to-slate-900' },
  'vyomveda': { icon: <Sparkles className="h-24 w-24" />, color: 'from-blue-950 via-indigo-900 to-slate-900' },
  'cellunova': { icon: <Microscope className="h-24 w-24" />, color: 'from-teal-900 via-emerald-800 to-slate-900' },
  'saivyy': { icon: <FlaskConical className="h-24 w-24" />, color: 'from-slate-900 via-slate-800 to-black' },
}

export const Route = createFileRoute('/ventures/$slug')({
  loader: ({ params }) => {
    const v = VENTURES[params.slug]
    if (!v) throw notFound()
    return v
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: 'Venture — Global Edu Lab' }, { name: 'robots', content: 'noindex' }] }
    return {
      meta: [
        { title: `${loaderData.name} — ${loaderData.tagline} | Global Ventures` },
        { name: 'description', content: loaderData.intro },
        { property: 'og:title', content: `${loaderData.name} · Global Ventures` },
        { property: 'og:description', content: loaderData.tagline },
      ],
    }
  },
  component: Page,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Venture profile</p>
        <h1 className="mt-3 text-4xl font-bold text-forest-deep">Unavailable</h1>
        <Link to="/global-ventures" className="mt-6 inline-flex items-center gap-2 text-forest"><ArrowLeft className="h-4 w-4" /> Back to Global Ventures</Link>
      </div>
    </div>
  )
}

function Page() {
  const v = Route.useLoaderData()
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero v={v} />
      <TabNav />
      <Overview v={v} />
      <Progress v={v} />
      <Roadmap v={v} />
      <RoleBand v={v} />
      <CTA v={v} />
    </div>
  )
}

function Hero({ v }: { v: Venture }) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${v.color} text-cream`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <nav className="flex items-center gap-2 text-xs text-cream/70">
            <Link to="/global-ventures" className="hover:text-gold">Global Ventures</Link>
            <span>/</span>
            <span className="text-cream">Venture Profile</span>
          </nav>
          <span className="mt-6 inline-flex rounded-full bg-forest/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{v.track}</span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">{v.name}</h1>
          <p className="mt-3 text-xl font-semibold text-gold">{v.tagline}</p>
          <p className="mt-5 max-w-xl text-cream/80 leading-relaxed">{v.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Cpu className="h-5 w-5" />, l: 'Sector', v: v.sector },
              { icon: <TrendingUp className="h-5 w-5" />, l: 'Stage', v: v.stage },
              { icon: <Globe className="h-5 w-5" />, l: 'Origin', v: v.origin },
              { icon: <Target className="h-5 w-5" />, l: 'Target Markets', v: v.markets },
            ].map((m) => (
              <div key={m.l} className="flex items-start gap-3">
                <span className="text-gold">{m.icon}</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/60">{m.l}</p>
                  <p className="text-sm font-semibold">{m.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-cream/5 ring-1 ring-cream/20">
            <div className="text-cream/90">{v.logo}</div>
          </div>
        </div>
      </div>
      <RequestCard />
    </section>
  )
}

function RequestCard() {
  return (
    <div className="mx-auto max-w-7xl px-6 -mb-16 relative z-10">
      <div className="ml-auto w-full max-w-md rounded-3xl border border-forest/10 bg-background p-6 shadow-xl">
        <h3 className="text-lg font-bold text-forest-deep">Interested in this venture?</h3>
        <p className="mt-2 text-sm text-forest/70">We facilitate introductions to founders and support meaningful collaborations.</p>
        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold uppercase tracking-widest text-cream hover:bg-forest-deep">Request Introduction <ArrowUpRight className="h-4 w-4" /></button>
        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest px-5 py-3 text-sm font-bold uppercase tracking-widest text-forest hover:bg-forest hover:text-cream">Request Venture Brief <Download className="h-4 w-4" /></button>
        <p className="mt-4 flex items-start gap-2 text-xs text-forest/60"><Lock className="mt-0.5 h-3.5 w-3.5" /> Introductions are subject to relevance, founder approval and confidentiality.</p>
      </div>
    </div>
  )
}

function TabNav() {
  const tabs = ['Overview', 'The Opportunity', 'Solution', 'Progress', 'Team', 'Collaboration', 'Roadmap', 'GEL\u2019s Role']
  return (
    <div className="sticky top-16 z-30 border-b border-border/60 bg-background/95 backdrop-blur pt-20">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-4 text-sm font-semibold text-forest/70">
        {tabs.map((t, i) => (
          <span key={t} className={`whitespace-nowrap ${i === 0 ? 'border-b-2 border-gold pb-2 text-forest-deep' : ''}`}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function Overview({ v }: { v: Venture }) {
  const cards = [
    { icon: <Target className="h-6 w-6" />, t: 'The Problem', d: v.problem },
    { icon: <Lightbulb className="h-6 w-6" />, t: 'Our Solution', d: v.solution },
    { icon: <Globe className="h-6 w-6" />, t: 'Why It Matters', d: v.matters },
    { icon: <Users className="h-6 w-6" />, t: 'Our Impact', d: v.impact },
  ]
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.t} className="rounded-3xl border border-forest/10 bg-cream/40 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{c.icon}</div>
              <h3 className="mt-5 text-lg font-bold text-forest-deep">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/75">{c.d}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold">Learn more <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-gold/40 bg-background p-6">
          <h3 className="text-lg font-bold text-forest-deep">Venture Highlights</h3>
          <ul className="mt-5 space-y-4">
            {v.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-forest/80">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest/5 text-forest"><Award className="h-4 w-4" /></span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Progress({ v }: { v: Venture }) {
  return (
    <section className="bg-cream/50 py-16">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-[1fr_1fr_320px]">
        <div className="rounded-3xl border border-forest/10 bg-background p-6">
          <h3 className="text-lg font-bold text-forest-deep">Progress to Date</h3>
          <ul className="mt-5 space-y-3">
            {v.progress.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-forest/80"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />{p}</li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-cream/60 p-5">
            <h4 className="text-sm font-bold text-forest-deep">Key Metrics <span className="font-normal text-forest/60">(Pilot Stage)</span></h4>
            <ul className="mt-3 divide-y divide-forest/10">
              {v.metrics.map((m) => (
                <li key={m.l} className="flex items-center justify-between py-2 text-sm"><span className="text-forest/75">{m.l}</span><span className="font-bold text-forest-deep">{m.v}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-forest/10 bg-background p-6">
          <h3 className="text-lg font-bold text-forest-deep">Founding Team</h3>
          <div className="mt-5 space-y-5">
            {v.team.map((t) => (
              <div key={t.name} className="flex gap-4">
                <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-forest to-gold" />
                <div>
                  <p className="font-bold text-forest-deep">{t.name}</p>
                  <p className="text-xs font-semibold text-gold">{t.role}</p>
                  <p className="mt-1 text-xs leading-relaxed text-forest/70">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-forest/70">Advisors and domain experts from security, AI and enterprise technology.</p>
          <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">View Team <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="rounded-3xl border border-gold/40 bg-background p-6">
          <h3 className="text-lg font-bold text-forest-deep">We are seeking</h3>
          <ul className="mt-5 space-y-5">
            {v.seeking.map((s) => (
              <li key={s.t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest">{s.icon}</span>
                <div>
                  <p className="text-sm font-bold text-forest-deep">{s.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-forest/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest px-4 py-3 text-xs font-bold uppercase tracking-widest text-forest hover:bg-forest hover:text-cream">See Collaboration Opportunities <ArrowUpRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  )
}

function Roadmap({ v }: { v: Venture }) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-forest-deep">Roadmap</h2>
        <div className="relative mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-8 right-8 top-7 hidden border-t border-dashed border-gold/50 lg:block" />
          {v.roadmap.map((r) => (
            <div key={r.period} className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-forest ring-4 ring-background">{r.icon}</div>
              <p className="mt-4 font-bold text-gold">{r.period}</p>
              <ul className="mt-3 space-y-2 text-sm text-forest/75">
                {r.items.map((i) => <li key={i} className="flex gap-2"><span className="text-gold">•</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoleBand({ v }: { v: Venture }) {
  const items = ['Venture Strategy & Growth Support', 'Investor Access & Fundraising Guidance', 'UK Market Entry & International Pathways', 'Mentorship from Industry & Academia', 'Ecosystem & Partnership Development']
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-cream">
      <img src={businessLeadersImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gold">GEL&rsquo;s Role in {v.name}&rsquo;s Journey</h2>
          <p className="mt-5 leading-relaxed text-cream/80">Through the Global Ventures Programme, GEL supports {v.name} with venture strategy, international positioning, expert mentoring and access to investors, researchers and strategic partners. Our objective is to help the venture scale globally through the UK and beyond.</p>
        </div>
        <ul className="grid gap-3 self-center">
          {items.map((i) => <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />{i}</li>)}
        </ul>
      </div>
    </section>
  )
}

function CTA({ v }: { v: Venture }) {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-6 rounded-3xl border border-forest/10 bg-background p-8 md:grid-cols-[auto_1fr_auto]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-forest-deep"><Users className="h-6 w-6" /></span>
        <div>
          <h3 className="text-2xl font-bold text-forest-deep">Let&rsquo;s build a safer future — together.</h3>
          <p className="mt-1 text-sm text-forest/70">If you are an investor, corporate, university or expert interested in collaborating with {v.name}, we would love to connect.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-widest text-forest hover:scale-105 transition-transform">Request Introduction <ArrowUpRight className="h-4 w-4" /></button>
          <button className="inline-flex items-center gap-2 rounded-full border border-forest px-5 py-3 text-xs font-bold uppercase tracking-widest text-forest hover:bg-forest hover:text-cream">Request Venture Brief <Download className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  )
}