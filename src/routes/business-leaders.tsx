import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, TrendingUp, Building2, Lightbulb } from 'lucide-react'
import businessLeadersImg from '../assets/business-leaders.jpg'

export const Route = createFileRoute('/business-leaders')({
  component: BusinessLeaders,
})

function BusinessLeaders() {
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
    <section className="relative overflow-hidden border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 md:py-24 lg:gap-8">
        <div className="md:col-span-7 lg:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-sm font-medium uppercase tracking-[0.18em] text-forest/70">
            <Building2 className="h-3.5 w-3.5 text-gold" /> For Business Leaders & Entrepreneurs
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-forest md:text-5xl lg:text-[4.25rem]">
            Empower your <span className="italic text-gold">leadership journey.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground md:text-lg">
            Gain strategic insights, sharpen decision-making, and develop future-ready leadership skills to drive innovation and business growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#ongoing-programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Executive Coaching
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-forest/60">
            <span className="h-px w-10 bg-forest/30" />
            Cambridge Judge Business School · House of Lords · Global Expansion
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-forest/15">
            <img
              src={businessLeadersImg}
              alt="Business Leaders"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Executive Excellence</p>
              <p className="mt-1 text-xl font-semibold text-cream">
                Bridging Indian CXOs with global innovation hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section id="overview" className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Executive Coaching
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Sharpen strategic thinking and strengthen leadership capability.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-serif text-gold">CXO</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Leadership Focus</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gold">AI</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Innovation Frameworks</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-forest/85">
              We have delivered several leadership workshops and corporate learning events since 2022, covering topics such as ESG Leadership, Organisational Behaviour, Entrepreneurship, and Corporate Governance.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-forest/85">
              Our flagship initiative — the Global India Leadership Programme (GILP) — launches in March 2026, in collaboration with Cambridge Judge Business School, University of Cambridge. This programme will bring Indian CXOs to Cambridge to explore cutting-edge leadership strategies and network with the UK–India business corridor.
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
      title: "Global India Leadership Programme",
      date: "14-18 September 2026",
      desc: "In-person at University of Cambridge, preparing Indian CXOs to lead global growth.",
      icon: <TrendingUp className="h-6 w-6" />,
      link: "https://www.globaledulab.com/indialeadership"
    },
    {
      title: "Global Impact of Cambridge Startups",
      date: "15 October 2025",
      desc: "Exclusive invite-only event at the House of Lords.",
      icon: <Building2 className="h-6 w-6" />,
      link: "https://www.globaledulab.com/events/house-of-lords%3A-global-impact-of-cambridge-startups"
    },
    {
      title: "Zero-To-One Ideation Weekend",
      date: "19-21 June 2026",
      desc: "In-person at Judge Business School, fostering entrepreneurial mindsets.",
      icon: <Lightbulb className="h-6 w-6" />,
      link: "https://www.globaledulab.com/event/zero-to-one"
    }
  ]

  return (
    <section id="ongoing-programmes" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Our Ongoing Programmes
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Upcoming Executive Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
        <h2 className="font-serif text-4xl text-cream md:text-5xl">Accelerate your growth</h2>
        <p className="mt-6 text-lg text-cream/80">Connect with top-tier global universities and business leaders.</p>
        <button className="mt-10 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </section>
  )
}
