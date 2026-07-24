import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Award, Users, Landmark } from 'lucide-react'
import heroImg from '../assets/business-leaders.jpg'

export const Route = createFileRoute('/programmes/house-of-lords')({
  head: () => ({
    meta: [
      { title: 'Global Impact of Cambridge Startups · House of Lords — Global Edu Lab' },
      { name: 'description', content: 'An exclusive invite-only evening at the House of Lords celebrating the global impact of Cambridge-born startups.' },
      { property: 'og:title', content: 'Global Impact of Cambridge Startups · House of Lords' },
      { property: 'og:description', content: 'Invite-only evening celebrating Cambridge startups at the House of Lords.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="House of Lords" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Invite-Only Event</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Global Impact of Cambridge Startups.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              An exclusive evening at the House of Lords honouring the founders, investors and researchers behind Cambridge&rsquo;s most impactful ventures.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 15 October 2025</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> House of Lords, Westminster</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">About the Evening</p>
          <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Where Cambridge meets Westminster.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: <Landmark className="h-6 w-6" />, t: 'Historic Setting', d: 'A rare evening within the walls of the UK Parliament.' },
              { icon: <Users className="h-6 w-6" />, t: 'Curated Audience', d: 'Peers, policy-makers, founders and global investors under one roof.' },
              { icon: <Award className="h-6 w-6" />, t: 'Recognition', d: 'Honouring the Cambridge ventures shaping global industries.' },
            ].map((it, i) => (
              <div key={i} className="rounded-3xl border border-forest/10 bg-background p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
                <h3 className="text-lg font-bold text-forest-deep">{it.t}</h3>
                <p className="mt-3 text-forest/70">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-forest py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-cream md:text-5xl">By invitation only.</h2>
          <p className="mt-6 text-lg text-cream/80">Request an invitation or learn more about future editions.</p>
          <a href="https://www.globaledulab.com/events/house-of-lords%3A-global-impact-of-cambridge-startups" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
            Enquire <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  )
}