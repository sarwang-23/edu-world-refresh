import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Leaf, Sun, Globe2, BookOpen } from 'lucide-react'
import heroImg from '../assets/students.jpg'
import { Footer } from './index'

export const Route = createFileRoute('/programmes/bali')({
  head: () => ({
    meta: [
      { title: 'Bali Green School Exploration Programme — Global Edu Lab' },
      { name: 'description', content: 'Explore the spiritual connection between education and sustainability at the Green School Bali — a holistic learning experience for school leaders.' },
      { property: 'og:title', content: 'Bali Green School Exploration Programme' },
      { property: 'og:description', content: 'A holistic education & sustainability programme at Green School Bali.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Overview />
      <Themes />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Bali" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">School Leaders Programme</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Bali Green School Exploration.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Embark on a mission to explore the spiritual connection between education and sustainability. Learn from experts on why sustainability is a holistic learning experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 12–16 May 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Ubud, Bali · Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programme Overview</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            Where classrooms have no walls, and learning meets the land.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-forest/85">
          <p>Witness the most delightful sceneries Bali has to offer and learn why protecting it is an academic responsibility.</p>
          <p>Experience a curriculum where sustainability is not a subject but the operating system — from bamboo campuses to real-world student ventures.</p>
        </div>
      </div>
    </section>
  )
}

function Themes() {
  const items = [
    { icon: <Leaf className="h-6 w-6" />, t: 'Sustainability-First Curriculum', d: 'Rethink what a school teaches when the planet becomes the syllabus.' },
    { icon: <Sun className="h-6 w-6" />, t: 'Wellbeing & Nature', d: 'Design learning environments rooted in nature and student wellbeing.' },
    { icon: <Globe2 className="h-6 w-6" />, t: 'Global Citizenship', d: 'Build a generation of students grounded locally, aware globally.' },
    { icon: <BookOpen className="h-6 w-6" />, t: 'Reflective Practice', d: 'Journaling, dialogue and design labs turn insight into strategy.' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programme Themes</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">A holistic learning experience.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-forest/10 bg-cream/40 p-8">
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

function CTA() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-cream md:text-5xl">Learn where nature teaches.</h2>
        <p className="mt-6 text-lg text-cream/80">Register interest for the May 2026 cohort.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}