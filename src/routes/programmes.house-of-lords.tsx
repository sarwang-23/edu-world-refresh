import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Award, Users, Landmark, Globe2, Star, Rocket, Building2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/gilp-march-15.jpg'
import cambridgeImg from '../assets/cambridge.jpg'
import { Footer } from './index'
import { useState } from 'react'

export const Route = createFileRoute('/programmes/house-of-lords')({
  head: () => ({
    meta: [
      { title: 'Global Impact of Cambridge Startups · House of Lords — Global Edu Lab' },
      { name: 'description', content: 'An exclusive invite-only evening at the House of Lords celebrating the global impact of Cambridge-born startups. October 2026.' },
      { property: 'og:title', content: 'Global Impact of Cambridge Startups · House of Lords' },
      { property: 'og:description', content: 'Invite-only evening celebrating Cambridge startups at the House of Lords, Westminster.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <StatsStrip />
      <AboutEvening />
      <WhatToExpect />
      <WhoAttends />
      <PastEditions />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-4 pb-16 md:pt-4 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Invite-Only · UK Parliament</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Global Impact of Cambridge Startups
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              House of Lords, Westminster
            </p>
            <p className="mt-5 text-[15px] text-forest/80 leading-relaxed max-w-lg">
              An exclusive, invite-only evening at the Palace of Westminster honouring the founders, investors and researchers behind Cambridge&rsquo;s most impactful global ventures — bringing together the UK-India business corridor under one historic roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> 15 October 2026
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> House of Lords, Westminster
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://www.globaledulab.com/events/house-of-lords%3A-global-impact-of-cambridge-startups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20"
              >
                Request Invitation <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 aspect-[4/3]">
              <img src={heroImg} alt="House of Lords" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                <Landmark className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">UK Parliament</p>
                <p className="text-[15px] text-forest/80 mt-0.5">Westminster</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center">
                <Award className="h-5 w-5 text-forest-deep" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">By Invitation</p>
                <p className="text-[15px] text-forest/80 mt-0.5">Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsStrip() {
  const stats = [
    { val: '2024', label: 'Inaugural Edition', sub: 'First convening' },
    { val: '100+', label: 'Guests', sub: 'Founders, peers & investors' },
    { val: 'UK–India', label: 'Corridor Focus', sub: 'Cross-border ecosystem' },
    { val: 'Annual', label: 'Recurring Event', sub: 'Growing each year' },
    { val: 'Lords', label: 'House of Lords', sub: 'Palace of Westminster' },
    { val: 'Invite', label: 'By Invitation', sub: 'Curated guest list' },
  ]
  const repeated = [...stats, ...stats, ...stats]
  return (
    <section className="bg-white border-y border-forest/8 overflow-hidden">
      <div className="py-8 relative">
        <div className="flex gap-0 animate-marquee">
          {repeated.map((s, i) => (
            <div
              key={i}
              className="text-center px-10 flex-shrink-0 border-r border-forest/10 last:border-r-0"
            >
              <p className="text-2xl md:text-3xl font-bold text-forest-deep">{s.val}</p>
              <p className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mt-1">{s.label}</p>
              <p className="text-[15px] text-forest/80 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutEvening() {
  const items = [
    {
      icon: <Landmark className="h-8 w-8" />,
      title: 'A Historic Setting',
      desc: 'A rare and privileged evening within the Palace of Westminster — one of the most iconic political and cultural buildings in the world. A setting that matches the ambition of the people inside it.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'A Curated Audience',
      desc: 'Peers, policy-makers, Cambridge founders, global investors, researchers and senior business leaders from the UK-India corridor — all in one place, by invitation only.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Recognition & Celebration',
      desc: 'Honouring the Cambridge ventures shaping global industries — from biotech and fintech to climate and AI. A night to celebrate the outsized impact of Cambridge-born innovation.',
    },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">About the Evening</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Where Cambridge meets Westminster.</h2>
          <p className="mt-4 text-[15px] text-forest/80 max-w-2xl mx-auto leading-relaxed">An evening that brings together two of the most important institutions in the UK — the University of Cambridge and the UK Parliament — to celebrate global innovation and the UK-India relationship.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group bg-[#F7F5F0] rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gold shadow-sm group-hover:bg-gold/10 transition-colors duration-300">{it.icon}</div>
              <h3 className="text-[16px] font-bold text-forest-deep mb-3">{it.title}</h3>
              <p className="text-[15px] text-forest/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatToExpect() {
  const agenda = [
    { time: '6:00 PM', title: 'Guest Arrival & Champagne Reception', desc: 'Arrive at the Palace of Westminster. Welcome drinks in the riverside rooms overlooking the Thames.' },
    { time: '6:45 PM', title: 'Opening Remarks', desc: 'Words from Global Education Lab and our co-hosts from the House of Lords.' },
    { time: '7:00 PM', title: 'Cambridge Startup Showcase', desc: 'Brief pitches and spotlights from Cambridge\'s most impactful ventures — across sectors including AI, biotech, fintech, and climate.' },
    { time: '7:45 PM', title: 'Panel Discussion', desc: 'A curated conversation between Cambridge founders, UK-India investors and policy-makers on the future of the innovation corridor.' },
    { time: '8:30 PM', title: 'Dinner & Networking', desc: 'Formal dinner in the historic dining rooms of the House of Lords. The evening continues with structured and informal networking.' },
    { time: '10:00 PM', title: 'Closing & Private Tour', desc: 'A private tour of the House of Lords chambers for a small group of guests before departure.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Evening Programme</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">An evening to remember.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agenda.map((item, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
              <p className="text-[15px] font-bold text-gold uppercase tracking-[0.2em] mb-2">{item.time}</p>
              <h3 className="text-[15px] font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoAttends() {
  const profiles = [
    { icon: <Landmark className="h-6 w-6" />, title: 'Lords & Peers', desc: 'Members of the House of Lords with interests in business, innovation, education and the UK-India relationship.', color: 'bg-forest-deep' },
    { icon: <Rocket className="h-6 w-6" />, title: 'Cambridge Founders', desc: 'Founders of high-growth Cambridge ventures across AI, biotech, fintech, climate and deep tech.', color: 'bg-gold' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'Global Investors', desc: 'VCs and family offices active in the UK-India corridor with strong interest in Cambridge\'s innovation output.', color: 'bg-forest' },
    { icon: <Building2 className="h-6 w-6" />, title: 'Business Leaders', desc: 'Senior executives from UK and Indian corporates exploring innovation partnerships and ecosystem access.', color: 'bg-forest/60' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Who Attends</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">A genuinely curated room.</h2>
          <p className="mt-4 text-[15px] text-forest/80 max-w-xl mx-auto">Every guest is handpicked. The evening is designed for quality of connection, not quantity of attendance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((p, i) => (
            <div key={i} className="group rounded-3xl border border-forest/8 bg-white overflow-hidden hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className={`h-1.5 w-full ${p.color}`} />
              <div className="p-7">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.color} text-white shadow-lg`}>{p.icon}</div>
                <h3 className="text-[15px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-forest/70 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PastEditions() {
  const testimonials = [
    {
      name: 'Lord Bilimoria of Chelsea',
      role: 'Member of the House of Lords',
      initials: 'LB',
      quote: 'A remarkable evening that captured the very best of what the Cambridge-India relationship can produce. The calibre of founders and investors in the room was extraordinary.',
    },
    {
      name: 'Priya Nair',
      role: 'Partner, UK-India Venture Fund',
      initials: 'PN',
      quote: 'I made three introductions at this event that have since led to term sheets. There is nowhere else in London where you get this precise combination of Cambridge innovation and UK-India capital in one room.',
    },
    {
      name: 'Dr. Arjun Singh',
      role: 'Cambridge Founder, DeepTech',
      initials: 'AS',
      quote: 'Being showcased at the House of Lords was one of the proudest moments of our startup journey. The doors it opened — with investors, partners and policymakers — were genuinely transformative.',
    },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Voices from Past Editions</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep mb-16">What guests say about the evening.</h2>
        <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-forest-deep to-forest flex items-center justify-center text-2xl font-bold text-white shadow-xl mb-6">{t.initials}</div>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
        </div>
        <blockquote className="text-[15px] leading-relaxed text-forest/70 max-w-2xl mx-auto italic mb-6">"{t.quote}"</blockquote>
        <p className="font-bold text-forest-deep">{t.name}</p>
        <p className="text-[15px] text-forest/70 mt-1">{t.role}</p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))} className="h-10 w-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/70 hover:border-forest-deep hover:text-forest-deep transition-all">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={"h-1.5 rounded-full transition-all duration-300 " + (i === current ? 'w-6 bg-gold' : 'w-1.5 bg-forest/20')} />)}
          </div>
          <button onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))} className="h-10 w-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/70 hover:border-forest-deep hover:text-forest-deep transition-all">
            <ChevronRight className="h-4 w-4" />
          </button>
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
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">By Invitation Only</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Request your invitation.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">The October 2026 evening is now open for invitation requests. Submit your interest and our team will be in touch.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.globaledulab.com/events/house-of-lords%3A-global-impact-of-cambridge-startups"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg"
          >
            Request Invitation <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  )
}