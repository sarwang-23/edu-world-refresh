import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Briefcase, Cpu, Handshake, Landmark, Globe2 } from 'lucide-react'
import heroImg from '../assets/business-leaders.jpg'

export const Route = createFileRoute('/programmes/gilp')({
  head: () => ({
    meta: [
      { title: 'Global India Leadership Programme — Global Edu Lab' },
      { name: 'description', content: 'A Cambridge–India executive leadership bridge for Indian CXOs — AI, innovation, negotiation, finance and cross-cultural leadership at Cambridge Judge Business School.' },
      { property: 'og:title', content: 'Global India Leadership Programme' },
      { property: 'og:description', content: 'Cambridge–India executive leadership programme for CXOs.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Curriculum />
      <Why />
      <CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="GILP" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Business Leaders Programme · Flagship</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Global India Leadership Programme.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            A Cambridge–India executive leadership bridge — high-quality leadership training at Cambridge, made accessible, affordable and globally relevant, with a strong emphasis on AI, innovation, negotiation, finance and cross-cultural leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 14–18 September 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Cambridge Judge Business School</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Curriculum() {
  const items = [
    { icon: <Cpu className="h-6 w-6" />, t: 'AI & Innovation', d: 'Frontier applications, adoption playbooks, and org design for AI-native businesses.' },
    { icon: <Handshake className="h-6 w-6" />, t: 'Negotiation', d: 'Cambridge-style negotiation frameworks for cross-border deal-making.' },
    { icon: <Briefcase className="h-6 w-6" />, t: 'Finance & Strategy', d: 'Capital allocation, valuation and strategic finance for growth leaders.' },
    { icon: <Globe2 className="h-6 w-6" />, t: 'Cross-Cultural Leadership', d: 'Lead across geographies with confidence and cultural fluency.' },
  ]
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Curriculum Pillars</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Built for CXOs leading global growth.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-forest/10 bg-background p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
              <h3 className="text-lg font-bold text-forest-deep">{it.t}</h3>
              <p className="mt-3 text-forest/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  const items = [
    'Faculty from Cambridge Judge Business School',
    'Small, curated cohort of Indian CXOs',
    'Live case studies with global businesses',
    'UK–India corridor networking dinners',
    'Executive mentorship post-programme',
    'Certification from Global Education Lab',
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Why GILP</p>
            <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">A leadership programme like no other.</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-forest/75">
            <Landmark className="h-4 w-4 text-gold" /> Cambridge, UK
          </div>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-cream/30 p-6">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-forest text-xs font-bold">{i + 1}</span>
              <span className="text-forest/85">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-cream md:text-5xl">Lead India&rsquo;s next global chapter.</h2>
        <p className="mt-6 text-lg text-cream/80">Applications open for the September 2026 cohort. Seats are limited.</p>
        <a href="https://www.globaledulab.com/indialeadership" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}