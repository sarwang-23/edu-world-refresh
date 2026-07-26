import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Users, GraduationCap, Leaf, Globe, Rocket, Award, Heart, BookOpen } from 'lucide-react'
import heroImg from '@/assets/hero-classroom.jpg'
import s1 from '@/assets/students.jpg'
import s2 from '@/assets/school-leaders.jpg'
import s3 from '@/assets/business-leaders.jpg'
import s4 from '@/assets/teachers.jpg'

export const Route = createFileRoute('/our-impact')({
  head: () => ({
    meta: [
      { title: 'Our Impact — Building a Better Tomorrow, Together | Global Edu Lab' },
      { name: 'description', content: 'GEL\u2019s programmes empower learners, support communities and drive innovation for a more inclusive and sustainable future. See the measurable impact we are creating.' },
      { property: 'og:title', content: 'Our Impact — Global Education Lab' },
      { property: 'og:description', content: 'Measurable impact. Lasting change. Stories, numbers and Sustainable Development Goals we\u2019re advancing.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Stats />
      <Stories />
      <SDGs />
      <Numbers />
      <CTA />
    </div>
  )
}

function Hero() {
  const pills = [
    { icon: <Users className="h-5 w-5" />, t: 'Stronger Communities' },
    { icon: <GraduationCap className="h-5 w-5" />, t: 'Empowered Individuals' },
    { icon: <Leaf className="h-5 w-5" />, t: 'Sustainable Futures' },
    { icon: <Globe className="h-5 w-5" />, t: 'Global Connections' },
  ]
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Measurable Impact.<br/>Lasting Change.</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-forest-deep md:text-6xl">
            Building a better<br/>tomorrow, <span className="text-forest">together</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest/75">
            GEL&rsquo;s programmes empower learners, support communities and drive innovation for a more inclusive and sustainable future. Here&rsquo;s the impact we&rsquo;re creating — together.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {pills.map((p) => (
              <span key={p.t} className="inline-flex items-center gap-2 rounded-2xl border border-forest/10 bg-background px-4 py-3 text-sm font-semibold text-forest-deep">
                <span className="text-forest">{p.icon}</span> {p.t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Impact" className="h-full w-full rounded-3xl object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { icon: <Users className="h-6 w-6" />, n: '5,000+', l: 'Learners Empowered' },
    { icon: <Rocket className="h-6 w-6" />, n: '120+', l: 'Startups Supported' },
    { icon: <Globe className="h-6 w-6" />, n: '25+', l: 'Countries Represented' },
    { icon: <Award className="h-6 w-6" />, n: '35+', l: 'Startups Pitched by Learners' },
    { icon: <Heart className="h-6 w-6" />, n: '10,000+', l: 'Lives Impacted (Est.)' },
  ]
  return (
    <section className="border-y border-border/60 bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-forest-deep md:text-4xl">Our Impact at a Glance</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((s) => (
            <div key={s.l} className="rounded-3xl border border-forest/10 bg-cream/40 p-8 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream">{s.icon}</div>
              <p className="mt-5 text-3xl font-bold text-forest-deep md:text-4xl">{s.n}</p>
              <p className="mt-2 text-sm font-semibold text-forest/70">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stories() {
  const items = [
    { img: s1, t: 'From Student to Changemaker', d: 'Riya co-founded a sustainability startup after her GEL experience and is now creating real impact in her community.', link: 'Read Riya\u2019s Story' },
    { img: s2, t: 'Ideas into Impact', d: 'Arjun and his team developed a solution that has helped over 2,000 young people access quality education.', link: 'Read Arjun\u2019s Story' },
    { img: s3, t: 'A Global Mindset', d: 'For Musa, GEL was more than a programme — it was the start of a global network and lifelong opportunities.', link: 'Read Musa\u2019s Story' },
    { img: s4, t: 'Building a Better Tomorrow', d: 'With the skills and confidence gained through GEL, Aisha is driving change for a more inclusive future.', link: 'Read Aisha\u2019s Story' },
  ]
  return (
    <section className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-forest-deep md:text-5xl">Stories That Inspire</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <article key={s.t} className="overflow-hidden rounded-3xl border border-forest/10 bg-background transition-transform hover:-translate-y-1">
              <img src={s.img} alt={s.t} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-forest-deep">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">{s.d}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">{s.link} <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SDGs() {
  const goals = [
    { n: 4, t: 'Quality Education', color: 'bg-[#c5192d]' },
    { n: 5, t: 'Gender Equality', color: 'bg-[#ff3a21]' },
    { n: 8, t: 'Decent Work and Economic Growth', color: 'bg-[#a21942]' },
    { n: 9, t: 'Industry, Innovation and Infrastructure', color: 'bg-[#fd6925]' },
    { n: 13, t: 'Climate Action', color: 'bg-[#3f7e44]' },
    { n: 17, t: 'Partnerships for the Goals', color: 'bg-[#19486a]' },
  ]
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 rounded-3xl border border-forest/10 bg-cream/50 p-8 md:p-12 grid gap-10 lg:grid-cols-[320px_1fr] items-center">
        <div>
          <h2 className="text-2xl font-bold text-forest-deep md:text-3xl">Advancing the Global Goals</h2>
          <p className="mt-4 leading-relaxed text-forest/75">Our programmes align with the United Nations Sustainable Development Goals to create a positive and lasting impact worldwide.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">Learn more <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {goals.map((g) => (
            <div key={g.n} className={`${g.color} rounded-xl p-4 text-white`}>
              <p className="text-2xl font-bold">{g.n}</p>
              <p className="mt-2 text-xs font-bold uppercase leading-tight">{g.t}</p>
              <BookOpen className="mt-3 h-6 w-6 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Numbers() {
  const rows = [
    { label: 'UK & Europe', pct: 40 },
    { label: 'Asia', pct: 30 },
    { label: 'Africa', pct: 15 },
    { label: 'Americas', pct: 10 },
    { label: 'Other', pct: 5 },
  ]
  const growth = [
    { y: '2020', v: 1000 },
    { y: '2021', v: 1800 },
    { y: '2022', v: 2700 },
    { y: '2023', v: 3600 },
    { y: '2024', v: 4400 },
    { y: '2025', v: 5500 },
  ]
  const stages = [
    { label: 'Early Stage', pct: 60 },
    { label: 'Growth Stage', pct: 30 },
    { label: 'Scaling Stage', pct: 10 },
  ]
  const max = Math.max(...growth.map((g) => g.v))
  return (
    <section className="border-y border-border/60 bg-cream/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-forest-deep md:text-5xl">Impact in Numbers</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-forest/10 bg-background p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/70">Learners by Region</h3>
            <ul className="mt-6 space-y-3">
              {rows.map((r) => (
                <li key={r.label}>
                  <div className="flex justify-between text-sm font-semibold text-forest-deep"><span>{r.label}</span><span>{r.pct}%</span></div>
                  <div className="mt-2 h-2 rounded-full bg-forest/10"><div className="h-full rounded-full bg-forest" style={{ width: `${r.pct}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-forest/10 bg-background p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/70">Programme Growth</h3>
            <div className="mt-6 flex h-48 items-end gap-3">
              {growth.map((g) => (
                <div key={g.y} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-forest to-gold" style={{ height: `${(g.v / max) * 100}%` }} />
                  <span className="text-xs font-semibold text-forest/70">{g.y}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-forest/10 bg-background p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/70">Startups Supported</h3>
            <ul className="mt-6 space-y-3">
              {stages.map((r) => (
                <li key={r.label}>
                  <div className="flex justify-between text-sm font-semibold text-forest-deep"><span>{r.label}</span><span>{r.pct}%</span></div>
                  <div className="mt-2 h-2 rounded-full bg-forest/10"><div className="h-full rounded-full bg-gold" style={{ width: `${r.pct}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-forest py-20 text-cream">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Together, we create impact that lasts</h2>
          <p className="mt-4 max-w-xl text-cream/75">Join our global community of learners, innovators and changemakers building a more inclusive and sustainable future.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/school-leaders" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">Explore Programmes <ArrowUpRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream px-6 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-forest">Get Involved <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}