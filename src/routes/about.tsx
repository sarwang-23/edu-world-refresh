import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Target, Eye, HandHeart, GraduationCap, Globe, Users, Lightbulb, Flag, Building2, Rocket, Mail } from 'lucide-react'
import cambridgeImg from '@/assets/cambridge.jpg'
import heroImg from '@/assets/hero-classroom.jpg'
import schoolLeadersImg from '@/assets/school-leaders.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import teachersImg from '@/assets/teachers.jpg'
import studentsImg from '@/assets/students.jpg'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — Transformational Education. Global Impact. | Global Edu Lab' },
      { name: 'description', content: 'GEL designs and delivers world-class learning experiences that empower individuals, build capability, and drive innovation for a better, more inclusive tomorrow.' },
      { property: 'og:title', content: 'About Global Education Lab' },
      { property: 'og:description', content: 'Transformational education. Global impact. Founded in Cambridge to empower learners, leaders and innovators worldwide.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <MVV />
      <Founder />
      <Journey />
      <Ecosystem />
      <ImpactBand />
      <CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">About Global Education Lab</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-forest-deep md:text-6xl">
            Transformational<br />education.<br />
            <span className="text-forest">Global impact.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest/75">
            GEL designs and delivers world-class learning experiences that empower individuals, build capability, and drive innovation for a better, more inclusive tomorrow.
          </p>
          <div className="mt-10 h-px w-24 bg-gold/60" />
        </div>
        <div className="relative">
          <img src={heroImg} alt="Cambridge learning" className="h-full w-full rounded-3xl object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

function MVV() {
  const items = [
    { icon: <Target className="h-6 w-6" />, t: 'Our Mission', d: 'To deliver transformative educational experiences across every stage of a learner\u2019s life — empowering people to lead, innovate and create impact.' },
    { icon: <Eye className="h-6 w-6" />, t: 'Our Vision', d: 'A world where education is experiential, inclusive and borderless — unlocking potential and creating a better future for all.' },
    { icon: <HandHeart className="h-6 w-6" />, t: 'Our Values', list: ['Excellence in Everything We Do', 'Learner-Centric & Inclusive', 'Integrity & Transparency', 'Innovation with Purpose', 'Collaboration & Global Mindset'] },
  ]
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-3xl border border-forest/10 bg-cream/40 p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream">{it.icon}</div>
            <h3 className="mt-6 text-xl font-bold text-forest-deep">{it.t}</h3>
            {it.d && <p className="mt-3 leading-relaxed text-forest/75">{it.d}</p>}
            {it.list && (
              <ul className="mt-4 space-y-2 text-forest/80">
                {it.list.map((x) => <li key={x} className="flex gap-2"><span className="text-gold">•</span>{x}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function Founder() {
  const facts = [
    { icon: <GraduationCap className="h-5 w-5" />, t: 'Cambridge Alumnus & Fellow, CJBS' },
    { icon: <Globe className="h-5 w-5" />, t: '14+ Years of Global Experience' },
    { icon: <Users className="h-5 w-5" />, t: 'Education Innovator & Ecosystem Builder' },
    { icon: <Lightbulb className="h-5 w-5" />, t: 'Passionate about People, Purpose and Possibilities' },
  ]
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-7xl px-6 rounded-3xl border border-forest/10 bg-background p-8 md:p-12 grid gap-10 lg:grid-cols-[280px_1fr_280px]">
        <div>
          <img src={businessLeadersImg} alt="Founder" className="h-72 w-full rounded-2xl object-cover" />
          <h3 className="mt-5 text-xl font-bold text-forest-deep">Suyash Bhatt</h3>
          <p className="mt-1 text-sm font-semibold text-gold">Founder & Director, Global Education Lab</p>
          <p className="mt-1 text-sm italic text-forest/70">Cambridge Alumnus & Fellow, CJBS</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-forest-deep">Our Founder&rsquo;s Story</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-forest/80">
            <p>After a diverse career in technology, strategy and entrepreneurship across the US, Taiwan, India and the UK, Suyash Bhatt moved to Cambridge with a vision to make world-class education accessible, experiential and impactful.</p>
            <p>What began as a social impact initiative has grown into Global Education Lab — an education innovation company delivering fast-paced, high-impact programmes for learners from age 14 to global CEOs.</p>
            <p>Today, GEL connects the Cambridge ecosystem with the world — empowering individuals, organisations and communities to thrive.</p>
          </div>
        </div>
        <ul className="space-y-4">
          {facts.map((f, i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl border border-forest/10 bg-cream/40 p-4">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">{f.icon}</span>
              <span className="text-sm font-medium leading-snug text-forest-deep">{f.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Journey() {
  const items = [
    { y: '2019', icon: <Flag className="h-5 w-5" />, t: 'Founded in Cambridge with a mission to transform education' },
    { y: '2020', icon: <Users className="h-5 w-5" />, t: 'Launched student programmes and built global partnerships' },
    { y: '2021', icon: <Building2 className="h-5 w-5" />, t: 'Expanded our portfolio across leadership, entrepreneurship and innovation' },
    { y: '2022', icon: <Globe className="h-5 w-5" />, t: 'Strengthened global footprint across universities, organisations and ecosystems' },
    { y: '2023', icon: <Rocket className="h-5 w-5" />, t: 'Launched Zero-to-One ideation weekend and entrepreneurship initiatives' },
    { y: '2024+', icon: <Target className="h-5 w-5" />, t: 'Scaling impact globally — empowering learners and building a better tomorrow' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Milestones</p>
          <h2 className="mt-4 text-4xl font-bold text-forest-deep md:text-5xl">Our Journey</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="relative grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-gold/40 lg:block" />
          {items.map((m, i) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-forest ring-4 ring-background">{m.icon}</div>
              <p className="mt-4 text-lg font-bold text-gold">{m.y}</p>
              <p className="mt-2 text-sm leading-relaxed text-forest/75">{m.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Ecosystem() {
  const items = [
    { icon: <Users className="h-5 w-5" />, t: 'Our Team', d: 'A passionate team of educators, innovators and operators committed to excellence and impact.', img: schoolLeadersImg },
    { icon: <Building2 className="h-5 w-5" />, t: 'Academic Partners', d: 'Deep collaborations with leading universities and research centres in Cambridge and beyond.', img: cambridgeImg },
    { icon: <HandHeart className="h-5 w-5" />, t: 'Industry & Ecosystem Partners', d: 'Working with corporates, governments and ecosystem enablers to co-create meaningful impact.', img: businessLeadersImg },
    { icon: <Globe className="h-5 w-5" />, t: 'Global Community', d: 'A vibrant network of learners, alumni, founders, leaders and changemakers across the world.', img: studentsImg },
  ]
  return (
    <section className="border-y border-border/60 bg-cream/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-forest-deep md:text-5xl">Our Team &amp; Ecosystem</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="overflow-hidden rounded-3xl border border-forest/10 bg-background">
              <img src={it.img} alt={it.t} className="h-40 w-full object-cover" />
              <div className="p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-cream">{it.icon}</div>
                <h3 className="mt-4 text-base font-bold text-forest-deep">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactBand() {
  const stats = [
    { n: '5,000+', l: 'Learners Empowered' },
    { n: '120+', l: 'Startups Supported' },
    { n: '25+', l: 'Countries Represented' },
    { n: '35+', l: 'Startups Pitched' },
    { n: '10,000+', l: 'Lives Impacted (Est.)' },
  ]
  return (
    <section className="bg-forest py-20 text-cream">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-10 lg:grid-cols-[300px_1fr]">
        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Impact that goes beyond classrooms.</h2>
          <p className="mt-4 text-cream/70">Creating ripple effects that last a lifetime.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-bold text-gold md:text-4xl">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-cream/70">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-8 rounded-3xl border border-forest/10 bg-background p-8 md:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-5">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-forest-deep"><Mail className="h-6 w-6" /></span>
          <div>
            <h3 className="text-2xl font-bold text-forest-deep">Be part of our story</h3>
            <p className="mt-1 text-forest/70">Whether you are a learner, partner or changemaker, let&rsquo;s create impact — together.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/school-leaders" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">Explore Programmes <ArrowUpRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm font-bold uppercase tracking-widest text-forest transition-colors hover:bg-forest hover:text-cream">Partner with GEL <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}