import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Sparkles, Users, Cpu, Rocket } from 'lucide-react'
import heroImg from '../assets/business-leaders.jpg'

export const Route = createFileRoute('/programmes/zero-to-one')({
  head: () => ({
    meta: [
      { title: 'Zero-To-One Ideation Weekend — Global Edu Lab' },
      { name: 'description', content: 'A 2.5-day immersive weekend at Cambridge Judge Business School that turns early-stage ideas into credible, testable ventures.' },
      { property: 'og:title', content: 'Zero-To-One Ideation Weekend' },
      { property: 'og:description', content: 'From idea to venture in 48 hours at Cambridge Judge Business School.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero /><About /><How /><CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Zero to One" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Entrepreneurship · Cambridge Judge</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Zero-To-One Ideation Weekend.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            A 2.5-day immersive, hands-on experience designed to transform early-stage ideas into credible, testable ventures within 48 hours — inaugural theme focused on digital health.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 19–21 June 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Cambridge Judge Business School</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">About the Event</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            Organised with Cambridge Judge, King&rsquo;s E-Lab and Global Education Lab.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-forest/85">
          <p>Participants get a unique opportunity to attend a fireside chat with <span className="font-semibold text-forest">Nobel Laureate Katalin Karikó</span>, one of the most influential figures in modern biomedical science.</p>
          <p>AI is embedded from the very first moment — from team formation onwards, participants work alongside AI tools that help identify real clinical problems, validate assumptions and accelerate venture development.</p>
        </div>
      </div>
    </section>
  )
}

function How() {
  const items = [
    { icon: <Sparkles className="h-6 w-6" />, t: 'Real Challenges', d: 'Teams form around pre-determined, clinically and commercially meaningful problems.' },
    { icon: <Cpu className="h-6 w-6" />, t: 'AI-Assisted Matching', d: 'Balanced teams based on experience, access and domain knowledge.' },
    { icon: <Users className="h-6 w-6" />, t: 'Expert Mentors', d: 'Guided sprints with clinicians, investors and Cambridge faculty.' },
    { icon: <Rocket className="h-6 w-6" />, t: '48-Hour Venture', d: 'Ship a credible, testable venture concept by the end of the weekend.' },
  ]
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">How It Works</p>
        <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">From insight to execution — fast.</h2>
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
        <h2 className="text-4xl font-bold text-cream md:text-5xl">48 hours. One venture.</h2>
        <p className="mt-6 text-lg text-cream/80">Applications for the June 2026 weekend are open now.</p>
        <a href="https://www.globaledulab.com/event/zero-to-one" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}