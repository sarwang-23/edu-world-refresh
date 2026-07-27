import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Users, Globe2, CheckCircle2, Rocket, MessageSquare, Star, Network, UserCheck } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/entrepreneurship/mentorship')({
  head: () => ({
    meta: [
      { title: 'Mentorship & Founder Network — Global Edu Lab Entrepreneurship' },
      { name: 'description', content: 'Gain private access to our global community of founders, Cambridge alumni and industry experts. Ongoing mentorship, introductions and a network that grows with you.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYouGet />
      <NetworkSection />
      <WhoShouldJoin />
      <Outcomes />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Entrepreneurship Programme</span>
            </div>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Mentorship &<br /><span className="font-serif italic text-gold">Founder Network</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-forest/80 leading-snug">
              Private access to the people who've built, backed and scaled global ventures.
            </p>
            <p className="mt-4 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              The GEL Mentorship & Founder Network is an ongoing, curated programme that connects ambitious founders with experienced mentors, Cambridge alumni, investors and industry experts. Get private introductions, personalised guidance and a global peer community that grows with you over time.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Users className="h-4 w-4 text-gold" /> Ongoing · Rolling Access
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <Globe2 className="h-4 w-4 text-gold" /> Global · Online + In-Person
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20">
                Join the Network <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300">
                All Programmes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-forest-deep p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { val: '200+', label: 'Active Mentors', sub: 'Across industries' },
                  { val: '5K+', label: 'Network Members', sub: 'Founders & alumni' },
                  { val: '18+', label: 'Countries', sub: 'Global community' },
                  { val: '∞', label: 'Ongoing Access', sub: 'No expiry date' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <p className="text-3xl font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[11px] font-bold text-cream mt-2">{s.label}</p>
                    <p className="text-[10px] text-cream/50 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20 relative z-10">
                <p className="text-[11px] font-bold text-gold uppercase tracking-wider">Always Open · Apply Anytime</p>
                <p className="text-[10px] text-cream/60 mt-1">Curated Matching · Private Introductions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  const items = [
    { icon: <UserCheck className="h-8 w-8" />, title: 'Curated Mentor Matching', desc: 'We personally match you with mentors from our 200+ network based on your industry, stage and specific challenges. No cold outreach needed.' },
    { icon: <MessageSquare className="h-8 w-8" />, title: 'Monthly 1:1 Sessions', desc: 'Dedicated monthly calls with your matched mentor for strategic advice, accountability and warm introductions to their networks.' },
    { icon: <Network className="h-8 w-8" />, title: 'Private Community Access', desc: 'Join a private global Slack community of 5,000+ founders, investors and alumni. Peer advice, hiring posts, deal flow and more.' },
    { icon: <Rocket className="h-8 w-8" />, title: 'Exclusive Events & Dinners', desc: 'Invitations to curated founders\' dinners, investor-only events and Cambridge networking evenings — online and in-person globally.' },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">What You Get</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">The access no one else offers.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-gold group-hover:bg-gold/10 transition-colors duration-300">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-forest-deep mb-3">{item.title}</h3>
              <p className="text-[13px] text-forest/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NetworkSection() {
  const mentorTypes = [
    { title: 'Cambridge Alumni Founders', desc: 'Entrepreneurs who\'ve built from Cambridge and taken companies to exits, IPOs and global scale.' },
    { title: 'Venture Capital Partners', desc: 'Active seed and Series A investors who offer insight, feedback and deal flow access to our community.' },
    { title: 'Corporate Innovation Leaders', desc: 'Senior leaders from global companies offering pilot partnerships, market access and enterprise sales guidance.' },
    { title: 'Domain Experts & Academics', desc: 'Cambridge faculty and industry specialists in deep tech, climate, health, education and fintech.' },
    { title: 'Serial Entrepreneurs', desc: 'Founders who\'ve built multiple ventures and offer candid, experience-driven guidance at every stage.' },
    { title: 'GEL Alumni Founders', desc: 'Graduates of our accelerator and ideation programmes who pay it forward as mentors and champions.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Our Mentor Community</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">200+ mentors, across every domain.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mentorTypes.map((m, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 p-7 group">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mb-5">
                <Users className="h-4 w-4 text-gold" />
              </div>
              <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">{m.title}</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldJoin() {
  const profiles = [
    { title: 'Active Founders at Any Stage', desc: 'Whether you\'re pre-product or post-revenue, mentorship accelerates your decision-making and opens doors that take others years to find.' },
    { title: 'GEL Programme Alumni', desc: 'Graduates of our Zero-to-One or Accelerator programmes who want continued access to the GEL community and senior mentor network.' },
    { title: 'Ambitious Operators & Builders', desc: 'Professionals making the leap into entrepreneurship who need a trusted sounding board and warm introductions to investors and co-founders.' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Join</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Your network is your net worth.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-[17px] font-bold text-forest-deep mb-3">{p.title}</h3>
              <p className="text-[13px] text-forest/65 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    'Matched 1:1 mentor from our 200+ network',
    'Private community of 5,000+ founders & investors',
    'Warm introductions to investors and partners',
    'Monthly curated founder events and dinners',
    'Priority access to GEL Demo Days',
    'GEL Founder Network membership card',
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">What You Get Access To</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-8">Everything the network provides.</h2>
            <ul className="space-y-4">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] text-forest/75">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-forest-deep p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <Star className="h-8 w-8 text-gold mb-6" />
              <blockquote className="text-[16px] italic text-cream/85 leading-relaxed mb-8">
                "The Cambridge ecosystem is unmatched. The GEL Founder Network opened doors we never imagined — from investor introductions to partnership deals with Fortune 500 companies."
              </blockquote>
              <p className="font-bold text-gold text-sm">David Lee</p>
              <p className="text-[11px] text-cream/50 uppercase tracking-wider mt-1">Co-Founder, DeepSearch · Accelerator Cohort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-forest-deep py-24 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Join the Network</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">The right mentor changes everything.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Apply for your curated mentor match today. Applications reviewed on a rolling basis.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
            Join Now <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
