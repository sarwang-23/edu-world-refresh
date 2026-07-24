import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, GraduationCap, Users, Globe2, BookOpen } from 'lucide-react'
import schoolLeadersImg from '../assets/school-leaders.jpg'

export const Route = createFileRoute('/school-leaders')({
  component: SchoolLeaders,
})

function SchoolLeaders() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Overview />
      <OngoingProgrammes />
      <CallToAction />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img
          src={schoolLeadersImg}
          alt="School Leaders"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            For School Leaders & Educators
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            Transforming education through global exposure.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Discover programmes and resources designed for school leaders to drive innovation, improve learning outcomes, and build future-ready institutions.
          </p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Our Impact
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Since 2022, Global Education Lab has organised over 10 international conferences and leadership programmes.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-serif text-gold">150+</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Organisations Impacted</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gold">5+</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Countries Across Globe</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-forest/85">
              Our carefully curated programmes take school owners, trustees, and senior administrators to international education ecosystems where they can observe and experience best practices first-hand.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-forest/85">
              From school visits in Finland and Estonia to collaborative workshops in Cambridge, participants gain actionable insights on pedagogy, school leadership, curriculum design, and education innovation — returning home equipped to lead transformation within their institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OngoingProgrammes() {
  const programmes = [
    {
      title: "Finland Education Programme",
      date: "15-16 May 2026",
      desc: "Experience the world-renowned Finnish education system with immersive school visits.",
      icon: <Globe2 className="h-6 w-6" />,
      link: "/programmes/finland"
    },
    {
      title: "London School Leadership Programme",
      date: "18-21 January 2026",
      desc: "Engage with top educational leaders and explore innovative practices in London.",
      icon: <Users className="h-6 w-6" />,
      link: "/programmes/llp"
    },
    {
      title: "Cambridge School Leadership Programme",
      date: "12-14 March 2026",
      desc: "A collaborative workshop environment at the historic University of Cambridge.",
      icon: <GraduationCap className="h-6 w-6" />,
      link: "/programmes/cslp"
    },
    {
      title: "Bali Green School Programme",
      date: "12-16 May 2026",
      desc: "Learn about sustainability and forward-thinking curriculum design in Bali.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/programmes/bali"
    }
  ]

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Our Ongoing Programmes
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Upcoming Leadership Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {programmes.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between rounded-3xl border border-forest/10 bg-cream/30 p-8 transition-all hover:bg-cream/60 hover:shadow-lg">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                  {p.icon}
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  {p.date}
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-forest-deep group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="mt-4 text-forest/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-semibold text-forest uppercase tracking-widest text-xs group-hover:text-gold transition-colors">
                Read More <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-4xl text-cream md:text-5xl">Ready to transform your school?</h2>
        <p className="mt-6 text-lg text-cream/80">Join our network of global education leaders today.</p>
        <button className="mt-10 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </section>
  )
}
