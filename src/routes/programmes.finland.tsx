import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, MapPin, Calendar, Users, Compass, School, Lightbulb } from 'lucide-react'
import heroImg from '../assets/school-leaders.jpg'
import { Footer } from './index'

export const Route = createFileRoute('/programmes/finland')({
  head: () => ({
    meta: [
      { title: 'Finland Education Exploration Programme — Global Edu Lab' },
      { name: 'description', content: 'An in-depth study tour of the renowned Finnish education system, hosted across Helsinki and Tallinn for school owners, principals and next-gen education leaders.' },
      { property: 'og:title', content: 'Finland Education Exploration Programme' },
      { property: 'og:description', content: 'Study tour of the Finnish education system across Helsinki and Tallinn.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Overview />
      <WhoShould />
      <Highlights />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Finland Education" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">School Leaders Programme</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Finland Education Exploration.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
            An in-depth understanding of the renowned Finnish education system with a particular focus on school management, guided by international education experts.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 9–13 March 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Helsinki, Finland &amp; Tallinn, Estonia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programme Overview</p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Experience the world&rsquo;s most admired education system, first-hand.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div><h3 className="text-4xl font-bold text-gold">5 Days</h3><p className="mt-2 text-sm font-semibold uppercase tracking-widest text-forest/70">Immersive Tour</p></div>
              <div><h3 className="text-4xl font-bold text-gold">2</h3><p className="mt-2 text-sm font-semibold uppercase tracking-widest text-forest/70">Countries Covered</p></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-forest/85">
              Real insights into what makes Finnish schools succeed — from teacher autonomy to student wellbeing, curriculum design and school leadership. Structured school visits, expert-led seminars, and reflection sessions turn observations into action plans.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-forest/85">
              Return home with a clear playbook to elevate your school&rsquo;s pedagogy, leadership culture and learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoShould() {
  const items = [
    { icon: <School className="h-6 w-6" />, title: 'School Owners & Principals', desc: 'Take away international best practices to elevate your school to the next level.' },
    { icon: <Users className="h-6 w-6" />, title: 'Next-gen Edu Leaders', desc: 'For those stepping into leadership roles within the education sector.' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Curriculum & Academic Heads', desc: 'Rethink pedagogy, assessment and student-centred learning models.' },
    { icon: <Compass className="h-6 w-6" />, title: 'Trustees & Board Members', desc: 'Shape long-term strategy with a global evidence base.' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Who Should Enroll</p>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-forest-deep md:text-5xl">Designed for education&rsquo;s decision-makers.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-forest/10 bg-cream/30 p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
              <h3 className="text-xl font-bold text-forest-deep">{it.title}</h3>
              <p className="mt-3 text-forest/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  const items = [
    'Guided visits to leading Finnish & Estonian schools',
    'Seminars with senior education researchers',
    'Leadership & pedagogy workshops',
    'Peer learning with global school leaders',
    'Cultural immersion across Helsinki & Tallinn',
    'Personalised reflection & action-planning sessions',
  ]
  return (
    <section className="border-t border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programme Highlights</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">What&rsquo;s included.</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-background p-6">
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
        <h2 className="text-4xl font-bold text-cream md:text-5xl">Ready to explore Finland?</h2>
        <p className="mt-6 text-lg text-cream/80">Limited seats. Registrations for the March 2026 cohort are now open.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Register Now <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}