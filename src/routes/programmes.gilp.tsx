import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Briefcase, Cpu, Handshake, Landmark, Globe2, Building2, GraduationCap, ChevronLeft, ChevronRight, Star, Target, Users, BarChart3, CheckCircle2, Award, Layers } from 'lucide-react'
import heroImg from '../assets/business-leaders.jpg'
import cambridgeImg from '../assets/cambridge.jpg'
import { Footer } from './index'
import { useState } from 'react'

export const Route = createFileRoute('/programmes/gilp')({
  head: () => ({
    meta: [
      { title: 'Global India Leadership Programme at Cambridge | Sept 2026 — Global Edu Lab' },
      { name: 'description', content: 'A 5-day residential executive leadership programme at Cambridge Judge Business School for Indian board members, CEOs and senior leaders. September 2026.' },
      { property: 'og:title', content: 'Global India Leadership Programme' },
      { property: 'og:description', content: 'Cambridge executive leadership programme designed specifically for Indian CXOs.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <StatsStrip />
      <Curriculum />
      <ExperientialLearning />
      <ProgrammeStructure />
      <WhoShouldAttend />
      <ProgrammeDetails />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 pt-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Cambridge Judge Business School</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Global India Leadership Programme
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              A Cambridge–India Executive Leadership Bridge
            </p>
            <p className="mt-5 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              A 5-day residential programme designed for Indian board members, CEOs, founders and senior leaders to step back, reflect, and reimagine their leadership approach — blending academic insights with practical frameworks for an AI-driven world.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> 14–18 September 2026
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Cambridge Judge Business School
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://www.globaledulab.com/indialeadership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#details"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300"
              >
                Programme Details
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 aspect-[4/3]">
              <img src={cambridgeImg} alt="Cambridge Judge Business School" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/10 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                <Landmark className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Cambridge Judge</p>
                <p className="text-[14px] text-forest/55 mt-0.5">Business School</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-forest-deep" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">5-Day Residential</p>
                <p className="text-[14px] text-forest/55 mt-0.5">Immersive Programme</p>
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
    { val: '5', label: 'Days Residential', sub: 'At Cambridge Judge' },
    { val: 'CXOs', label: 'Curated Cohort', sub: 'Boards, CEOs, Founders' },
    { val: 'AI+', label: 'Innovation Focus', sub: 'Strategy & Leadership' },
    { val: '1:1', label: 'Mentorship', sub: 'Post-programme support' },
    { val: '4', label: 'Core Pillars', sub: 'Leadership, AI, Growth, Finance' },
    { val: 'LCG', label: 'Lord\'s Cricket Ground', sub: 'Signature experience, London' },
  ]
  const repeated = [...stats, ...stats, ...stats]
  return (
    <section className="bg-white border-y border-forest/8 overflow-hidden">
      <div className="py-8 relative">
        <div
          className="flex gap-0 animate-marquee"
          style={{ animationDirection: 'reverse' }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="text-center px-10 flex-shrink-0 border-r border-forest/10 last:border-r-0 group cursor-default"
            >
              <p className="text-2xl md:text-3xl font-bold text-forest-deep group-hover:text-gold transition-colors duration-300">{s.val}</p>
              <p className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mt-1">{s.label}</p>
              <p className="text-[14px] text-forest/55 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Curriculum() {
  const pillars = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Leadership & Strategy',
      desc: 'Exploration of leadership styles and frameworks relevant to both Indian and global contexts. Deep dives into decision-making under uncertainty.',
      items: ['Leadership styles for global companies', 'Strategic frameworks for India context', 'Decision-making under uncertainty', 'Blue ocean strategy design'],
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'AI & Innovation',
      desc: 'Master strategic frameworks for the AI-driven business era, including AI simulations to model real business scenarios for your organisation.',
      items: ['AI adoption playbooks for CXOs', 'AI simulations for business scenarios', 'Innovation frameworks', 'Building AI-native organisations'],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Sustainable Growth',
      desc: 'Designing and implementing strategies for sustainable competitive advantage — including blue ocean thinking and ESG leadership.',
      items: ['Sustainable competitive advantage', 'ESG leadership & governance', 'Stakeholder capitalism', 'Impact measurement frameworks'],
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Negotiation & Finance',
      desc: 'Cambridge-style negotiation frameworks for cross-border deal-making, plus strategic finance and capital allocation for growth leaders.',
      items: ['Cross-border negotiation', 'Capital allocation strategy', 'M&A frameworks', 'UK–India business corridor'],
    },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Curriculum Pillars</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Built for leaders driving India's global ambitions.</h2>
          <p className="mt-4 text-[15px] text-forest/65 max-w-2xl mx-auto leading-relaxed">Four core pillars that together build the complete toolkit for Indian CXOs leading high-growth organisations in a global, AI-driven landscape.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="group bg-[#F7F5F0] rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-5 mb-6">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-gold shadow-sm group-hover:bg-gold/10 transition-colors duration-300">{p.icon}</div>
                <div>
                  <h3 className="text-[17px] font-bold text-forest-deep">{p.title}</h3>
                  <p className="text-[15px] text-forest/65 leading-relaxed mt-1">{p.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-1">
                {p.items.map((item, k) => (
                  <li key={k} className="flex items-center gap-2.5 text-[15px] text-forest/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperientialLearning() {
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Signature Experience</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white leading-tight mb-6">
              Leadership at Lord's Cricket Ground
            </h2>
            <p className="text-[15px] text-cream/75 leading-relaxed mb-8">
              A truly unique leadership session at the Home of Cricket — Lord's Cricket Ground, London. On 17 September, participants gather for a half-day of high-performance leadership principles drawn from elite sport, followed by a private tour and an exclusive networking session with senior business leaders and academics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: 'High-Performance', d: 'Leadership lessons from elite sport' },
                { t: 'Private Tour', d: 'Exclusive access to Lord\'s' },
                { t: 'Senior Networking', d: 'Business leaders & academics' },
                { t: '17 September', d: 'Special programme day' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[14px] font-bold text-gold mb-1">{item.t}</p>
                  <p className="text-[14px] text-white/65 leading-snug">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[380px]">
            <div className="h-full w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10 min-h-[380px]">
              <img src={heroImg} alt="Lord's Cricket Ground" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Lord's Cricket Ground</p>
                <p className="text-white text-[15px] font-semibold">London, UK · 17 September 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgrammeStructure() {
  const phases = [
    {
      phase: 'Pre-Programme',
      date: 'August 2026',
      color: 'bg-gold',
      items: [
        'Pre-reading materials dispatched',
        'Initial assessment by the academic team',
        'AI sessions tailored to your business context',
        'Cohort onboarding & introductions',
      ],
    },
    {
      phase: 'Residential Week',
      date: '14–18 September 2026',
      color: 'bg-forest',
      items: [
        'Day 1: Arrival & cohort dinner',
        'Days 2–4: Full-day sessions at Cambridge Judge Business School',
        'Day 4 (17 Sept): Leadership session at Lord\'s Cricket Ground, London',
        'Day 5: Final sessions, reflection & Cambridge farewell dinner',
      ],
    },
    {
      phase: 'Post-Programme',
      date: 'March 2027',
      color: 'bg-forest/50',
      items: [
        'Comprehensive impact assessment report',
        'Tracking programme influence on organisational growth',
        'Executive mentorship sessions',
        'Alumni network & lifelong access',
      ],
    },
  ]
  return (
    <section id="details" className="bg-[#E8E0D0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Programme Structure</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Three phases, one transformation.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((ph, i) => (
            <div key={i} className="rounded-3xl bg-white/90 border border-forest/15 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`h-1.5 w-full ${ph.color}`} />
              <div className="p-8">
                <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest/40 mb-1">Phase {i + 1}</p>
                <h3 className="text-[17px] font-bold text-forest-deep mb-1">{ph.phase}</h3>
                <p className="text-[14px] text-gold font-semibold mb-6">{ph.date}</p>
                <ul className="space-y-3">
                  {ph.items.map((item, k) => (
                    <li key={k} className="flex items-start gap-2.5 text-[15px] text-forest/75 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldAttend() {
  const profiles = [
    { icon: <Building2 className="h-6 w-6" />, title: 'Board Members', desc: 'Directors and trustees seeking to reimagine governance in an AI-driven, global economy.', color: 'bg-forest' },
    { icon: <Briefcase className="h-6 w-6" />, title: 'CEOs & MDs', desc: 'Chief executives of Indian enterprises looking to benchmark their strategy against global best practices.', color: 'bg-gold' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'Founders & Entrepreneurs', desc: 'High-growth founders ready to scale internationally and build lasting, sustainable ventures.', color: 'bg-forest/60' },
    { icon: <Layers className="h-6 w-6" />, title: 'Senior Leaders', desc: 'C-suite and senior leadership ready to step into broader strategic roles within their organisations.', color: 'bg-forest-deep' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Attend</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Is this programme for you?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((p, i) => (
            <div key={i} className="group rounded-3xl border border-white/15 bg-white/8 backdrop-blur-sm overflow-hidden hover:border-gold/40 hover:bg-white/12 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className={`h-1.5 w-full ${p.color}`} />
              <div className="p-7">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.color} text-white shadow-lg ring-2 ring-white/10`}>{p.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-cream/70 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function ProgrammeDetails() {
  const details = [
    { label: 'Duration', value: '5 Days Residential' },
    { label: 'Location', value: 'Cambridge Judge Business School' },
    { label: 'Cohort Size', value: 'Limited, Curated Cohort' },
    { label: 'Certificate', value: 'GEL Certificate of Completion' },
  ]
  const inclusions = [
    'All teaching, seminars & leadership workshops',
    'Accommodation for the full programme duration',
    'Breakfast and daytime catering on programme days',
    'Lord\'s Cricket Ground leadership session',
    'Private tour of Lord\'s Cricket Ground',
    'Cambridge college formal dinner',
    'Pre-programme materials & assessment',
    'Post-programme impact assessment report (March 2027)',
    'Executive mentorship post-programme',
    'Lifelong alumni network access',
  ]
  const exclusions = [
    'International travel and visa costs',
    'Meals not mentioned in the programme itinerary',
    'Personal expenses',
  ]
  return (
    <section className="bg-[#E8E0D0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Programme Details</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Everything you need to know.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {details.map((d, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/80 border border-forest/10 hover:border-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] mb-2 text-forest/40">{d.label}</p>
              <p className="text-[15px] font-bold text-forest-deep">{d.value}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8 bg-forest-deep text-white border border-forest-deep relative overflow-hidden shadow-xl">
              <div className="absolute top-6 right-6 text-gold opacity-50"><Star className="h-6 w-6 fill-gold" /></div>
              <p className="text-[15px] font-bold uppercase tracking-[0.2em] mb-2 text-gold">Course Fee</p>
              <p className="text-[24px] font-bold text-white mb-3">Enquire for Pricing</p>
              <span className="inline-block text-[14px] font-semibold text-white/70">✦ Limited seats available — apply early</span>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 border border-forest/10 flex-1">
              <h3 className="text-[16px] font-bold text-forest-deep mb-5">Inclusions</h3>
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-forest/75 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
              <h3 className="text-[16px] font-bold text-forest-deep mb-4 mt-8">Exclusions</h3>
              <ul className="space-y-2.5">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-forest/55 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest/30 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
            <img src={cambridgeImg} alt="Cambridge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Apply</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Lead India&rsquo;s next global chapter.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Applications now open for the September 2026 cohort. Limited seats — secure your place early.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.globaledulab.com/indialeadership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg"
          >
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            Request Brochure
          </Link>
        </div>
      </div>
    </section>
  )
}