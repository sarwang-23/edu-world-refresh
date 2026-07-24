import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Lightbulb, Users, Building2, GraduationCap } from 'lucide-react'
import heroImg from '../assets/cambridge.jpg'

export const Route = createFileRoute('/programmes/cslp')({
  head: () => ({
    meta: [
      { title: 'Cambridge School Leadership Programme — Global Edu Lab' },
      { name: 'description', content: 'Shape the future of your school with the Cambridge School Leadership Programme — an immersive leadership experience at the University of Cambridge.' },
      { property: 'og:title', content: 'Cambridge School Leadership Programme' },
      { property: 'og:description', content: 'Immersive leadership experience at the University of Cambridge.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Pillars />
      <Who />
      <CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Cambridge" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">School Leaders Programme</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Cambridge School Leadership Programme.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Shape the future of your school with a Cambridge–India executive leadership bridge — high-quality leadership training at Cambridge, made accessible, affordable and globally relevant.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 12–14 March 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> University of Cambridge, UK</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  const pillars = [
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation in Education', items: ['School visits & reflection', 'Seminars by senior researchers', 'Peer learning cohort'] },
    { icon: <Users className="h-6 w-6" />, title: 'Leadership Skills', items: ['Leadership workshops', 'Cambridge Professors', 'Global business leaders'] },
    { icon: <Building2 className="h-6 w-6" />, title: 'Institutional Growth', items: ['Governance frameworks', 'Strategy & change', 'Scaling with quality'] },
    { icon: <GraduationCap className="h-6 w-6" />, title: 'Global Network', items: ['UK–India corridor', 'Alumni community', 'Ongoing mentorship'] },
  ]
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Experience Learning, the Cambridge Way</p>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-forest-deep md:text-5xl">Four pillars of transformative school leadership.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={i} className="rounded-3xl border border-forest/10 bg-background p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{p.icon}</div>
              <h3 className="text-xl font-bold text-forest-deep">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-forest/75">
                {p.items.map((it, k) => <li key={k} className="flex gap-2"><span className="text-gold">•</span>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Who() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Who Should Attend</p>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-forest-deep">A cohort of decision-makers driving Indian education forward.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-forest/85">
          <p>School owners, trustees, principals, and senior education leaders committed to elevating their institutions with a globally-informed lens.</p>
          <p>Ideal for those exploring international collaborations, curriculum innovation, and a stronger seat at the table of global education dialogue.</p>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-cream md:text-5xl">Bring Cambridge home to your school.</h2>
        <p className="mt-6 text-lg text-cream/80">Applications open for the March 2026 cohort.</p>
        <a href="https://www.globaledulab.com/cslp" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}