import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle2, Handshake, Users, Globe2, Sparkles, Building2, Quote, Lightbulb } from 'lucide-react'
import { Footer } from './index'
import heroImg from '../assets/business-leaders.jpg'
import cambridgeImg from '../assets/cambridge.jpg'

export const Route = createFileRoute('/entrepreneurship_/mentorship')({
  head: () => ({
    meta: [
      { title: 'Mentorship & Founder Network | Global Education Lab' },
      { name: 'description', content: 'Private introductions and access to our global community of founders, alumni and industry experts.' },
    ],
  }),
  component: MentorshipPage,
})

function MentorshipPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-white">
      <Hero />
      <FeaturesStrip />
      <DetailsSection />
      <BottomCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40">
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[14px] font-bold uppercase tracking-[0.28em] text-gold">Ongoing Network</span>
            </div>

            <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Mentorship &<br />
              <span className="font-serif italic text-gold">Founder Network.</span>
            </h1>

            <p className="mt-6 text-[17px] font-semibold text-forest/80 leading-snug">
              Access a global community of experts and alumni.
            </p>
            <p className="mt-4 text-[15px] text-forest/65 leading-[1.75] max-w-lg">
              Gain private introductions and ongoing guidance from a vetted network of successful founders, industry veterans, and Cambridge alumni. The right connection at the right time changes everything.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: <Users className="h-4 w-4" />, label: 'Vetted Mentors' },
                { icon: <Globe2 className="h-4 w-4" />, label: 'Global Reach' },
                { icon: <Building2 className="h-4 w-4" />, label: 'Industry Specific' },
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-forest/10 px-4 py-2 text-[15px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm">
                  <span className="text-gold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25"
              >
                Join the Network
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_32px_80px_-12px_rgba(26,53,35,0.25)] relative ring-1 ring-forest/10">
              <img src={heroImg} alt="Founder Mentorship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-forest/15 border border-forest/8 backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <Handshake className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Private Intros</p>
                <p className="text-[14px] text-forest/55 mt-0.5">High-value connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: <Users className="h-6 w-6" />, title: "Peer Support" },
    { icon: <Handshake className="h-6 w-6" />, title: "Partner Network" },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Expert Clinics" },
    { icon: <Quote className="h-6 w-6" />, title: "Founder Stories" },
  ]
  const repeated = [...features, ...features, ...features]
  return (
    <section className="bg-white border-y border-forest/8 py-10 relative z-20 overflow-hidden">
      <div className="flex gap-0 animate-marquee hover:[animation-play-state:paused]">
        {repeated.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 px-16 min-w-[250px] shrink-0 border-r border-forest/10 last:border-r-0">
            <div className="text-gold">{f.icon}</div>
            <h4 className="text-[15px] font-bold text-forest-deep">{f.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

function DetailsSection() {
  const points = [
    "Carefully curated mentor-mentee matching based on startup stage and sector.",
    "Access to exclusive roundtables and closed-door founder forums.",
    "Bespoke introductions to relevant corporate partners and industry veterans.",
    "Continuous peer-to-peer learning through organized mastermind groups.",
    "A direct line to Cambridge's extensive alumni network globally."
  ]
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Why It Matters</span>
          </div>
          <h2 className="text-[2.2rem] font-bold text-forest-deep leading-tight mb-6">Build alongside those who have been there.</h2>
          <p className="text-[15px] text-forest/70 leading-relaxed mb-8">
            Entrepreneurship can be lonely, but building a venture shouldn't happen in a silo. Our network ensures you are surrounded by people who challenge your assumptions, open doors, and provide the hard-won insights you need to avoid common pitfalls.
          </p>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[14px] text-forest/80 font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-xl border border-forest/5">
          <img src={cambridgeImg} alt="Network" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="bg-forest-deep py-24 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(3)].map((_, i) => (
            <Sparkles key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white leading-tight">Find your mentor.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Access to the network is currently open for eligible founders. Get in touch to learn how you can join our community.</p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl"
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}
