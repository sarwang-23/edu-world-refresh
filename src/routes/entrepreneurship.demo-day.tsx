import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Users, Globe2, CheckCircle2, TrendingUp, Star, Landmark, Mic, BarChart3, DollarSign } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/entrepreneurship/demo-day')({
  head: () => ({
    meta: [
      { title: 'Demo Day & Investor Connect — Global Edu Lab Entrepreneurship' },
      { name: 'description', content: 'Pitch to investors, corporates and partners at the GEL Demo Day. Your gateway to funding, pilots and global expansion — twice a year at Cambridge.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <WhatYouGet />
      <EventFormat />
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
              Demo Day &<br /><span className="font-serif italic text-gold">Investor Connect</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-forest/80 leading-snug">
              Pitch live. Meet investors. Close your round.
            </p>
            <p className="mt-4 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              The GEL Demo Day & Investor Connect is our flagship biannual event held at Cambridge — where the most promising startups from our community pitch to a curated audience of angel investors, VCs, corporate innovation heads and strategic partners. This is your most direct route to funding, pilots and global expansion.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> Twice a Year
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Cambridge, UK
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20">
                Apply to Pitch <ArrowUpRight className="h-4 w-4" />
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
                  { val: '35+', label: 'Startups Pitched', sub: 'To date' },
                  { val: '£2M+', label: 'Funding Raised', sub: 'By pitching startups' },
                  { val: '100+', label: 'Investors Present', sub: 'Per event' },
                  { val: '2×', label: 'Per Year', sub: 'Spring & Autumn' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <p className="text-3xl font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[11px] font-bold text-cream mt-2">{s.label}</p>
                    <p className="text-[10px] text-cream/50 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20 relative z-10">
                <p className="text-[11px] font-bold text-gold uppercase tracking-wider">Next Demo Day · Applications Open</p>
                <p className="text-[10px] text-cream/60 mt-1">Cambridge · Limited Pitch Slots Available</p>
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
    { icon: <Mic className="h-8 w-8" />, title: 'Live Pitch to Investors', desc: 'A curated 5-minute pitch slot + Q&A in front of 100+ active investors, angels, VCs and corporate innovation heads.' },
    { icon: <Users className="h-8 w-8" />, title: 'Private 1:1 Meetings', desc: 'Post-pitch, each startup gets pre-arranged 1:1 meeting slots with matched investors based on sector and stage.' },
    { icon: <Globe2 className="h-8 w-8" />, title: 'Corporate Pilot Opportunities', desc: 'Direct access to corporate innovation teams looking for startups to pilot their technology or co-develop solutions.' },
    { icon: <DollarSign className="h-8 w-8" />, title: 'Funding & Partnership Pathways', desc: 'Introductions to seed and Series A funds, grant opportunities and strategic partnership deals with GEL ecosystem partners.' },
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
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Your launchpad to capital and scale.</h2>
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

function EventFormat() {
  const agenda = [
    { time: '09:00 – 10:00', title: 'Arrival & Investor Registration', desc: 'Networking breakfast for startup founders, investors and ecosystem partners.' },
    { time: '10:00 – 13:00', title: 'Morning Pitch Sessions', desc: 'Back-to-back 5-minute pitches from 10 selected startups with live investor Q&A panels.' },
    { time: '13:00 – 14:00', title: 'Networking Lunch', desc: 'Curated seating to maximise investor-founder connections across sectors and geographies.' },
    { time: '14:00 – 16:00', title: 'Afternoon Pitch Sessions', desc: 'Second batch of 10 startup pitches with audience interaction and structured feedback.' },
    { time: '16:00 – 18:00', title: 'Private 1:1 Investor Meetings', desc: 'Pre-matched 20-minute private meetings between startups and interested investors.' },
    { time: '18:00 – 20:00', title: 'Gala Networking Dinner', desc: 'Award announcements, keynote from a GEL ecosystem leader, followed by open networking.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Event Format</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">A full day built for deals.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agenda.map((a, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 p-7 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">{a.time}</span>
              <h3 className="text-[16px] font-bold text-white mt-2 mb-2 group-hover:text-gold transition-colors duration-300">{a.title}</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldJoin() {
  const profiles = [
    { icon: <TrendingUp className="h-5 w-5 text-gold" />, title: 'Startups Seeking Funding', desc: 'Pre-seed to Series A startups with a working product and early traction, ready to pitch and close their first or next round.' },
    { icon: <Landmark className="h-5 w-5 text-gold" />, title: 'Investors & Angels', desc: 'Angel investors, family offices and early-stage VCs looking for curated deal flow from a globally diverse, Cambridge-vetted startup community.' },
    { icon: <BarChart3 className="h-5 w-5 text-gold" />, title: 'Corporate Innovation Teams', desc: 'Innovation, R&D and strategic teams from corporates looking to partner with, pilot or invest in startups from the GEL ecosystem.' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Attend</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Built for founders and investors alike.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                {p.icon}
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
    'Live pitch to 100+ investors in a single day',
    'Pre-matched private 1:1 investor meetings',
    'Corporate pilot and partnership introductions',
    'GEL Demo Day Pitch Certificate',
    'Featured in the GEL Startup Showcase',
    'Priority alumni placement in future GEL events',
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">What Founders Gain</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-8">More than a pitch day.</h2>
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
                "Demo Day was a turning point. We pitched at 10am and had three follow-up investor meetings scheduled by 2pm. We closed our seed round six weeks later. The GEL network is extraordinary."
              </blockquote>
              <p className="font-bold text-gold text-sm">Priya Sharma</p>
              <p className="text-[11px] text-cream/50 uppercase tracking-wider mt-1">Founder, HealthStack · Demo Day Cohort 2024</p>
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
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Apply to Pitch</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Your pitch. Cambridge stage. Investors in the room.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Pitch slots are limited and curated. Apply now to be considered for the next Demo Day.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
            Apply to Pitch <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/entrepreneurship" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
