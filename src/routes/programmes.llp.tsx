import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Building2, Users, Award, BookOpen, Coffee, GraduationCap } from 'lucide-react'
import heroImg from '../assets/school-leaders.jpg'

export const Route = createFileRoute('/programmes/llp')({
  head: () => ({
    meta: [
      { title: 'London School Leadership Programme — Global Edu Lab' },
      { name: 'description', content: 'The London School Leadership Programme returns in partnership with Britannica Research Lab and NISA, offering Indian school leaders an immersive look at the UK education model.' },
      { property: 'og:title', content: 'London School Leadership Programme' },
      { property: 'og:description', content: 'Immersive UK education programme for Indian school leaders.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Package />
      <Highlights />
      <CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="London" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">School Leaders Programme · 4th Edition</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">London School Leadership Programme.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            An immersive experience for Indian school leaders to explore the UK&rsquo;s successful education model, its key philosophies and enduring global influence — in partnership with Britannica Research Lab and NISA.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 18–21 January 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> London, United Kingdom</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Package() {
  const items = [
    { icon: <Building2 className="h-6 w-6" />, title: '4-Star Accommodation', desc: 'Modern amenities in a central London hotel.' },
    { icon: <Coffee className="h-6 w-6" />, title: 'All Meals Included', desc: 'Breakfast, lunch and networking dinners.' },
    { icon: <MapPin className="h-6 w-6" />, title: 'School Visit Transport', desc: 'Local travel arranged to every partner school.' },
    { icon: <BookOpen className="h-6 w-6" />, title: 'Britannica Resources', desc: 'Curated learning materials for participants.' },
  ]
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Our Package Includes</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Everything, taken care of.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-forest/10 bg-background p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
              <h3 className="text-lg font-bold text-forest-deep">{it.title}</h3>
              <p className="mt-3 text-forest/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  const items = [
    { icon: <GraduationCap className="h-5 w-5" />, t: 'British School Visits' },
    { icon: <Users className="h-5 w-5" />, t: 'Leadership Workshops' },
    { icon: <Coffee className="h-5 w-5" />, t: 'Networking Dinners' },
    { icon: <Award className="h-5 w-5" />, t: 'Award Ceremony at House of Lords' },
    { icon: <BookOpen className="h-5 w-5" />, t: 'Britannica Products' },
    { icon: <GraduationCap className="h-5 w-5" />, t: 'Certified Teachers Training' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programme Highlights</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Four days of immersion and influence.</h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream/40 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">{it.icon}</div>
              <span className="font-semibold text-forest-deep">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-cream md:text-5xl">London calling.</h2>
        <p className="mt-6 text-lg text-cream/80">Reserve your seat for the January 2026 cohort.</p>
        <a href="https://www.globaledulab.com/llp-1" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}