import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, MapPin, Award, Users, Building2, ChevronLeft, ChevronRight, Star, Briefcase, Leaf, Globe2, Brain, CheckCircle2, Calendar, Target } from 'lucide-react'
import heroImg from '../assets/business-leaders.jpg'
import cambridgeImg from '../assets/cambridge.jpg'
import { Footer } from './index'
import { useState } from 'react'

export const Route = createFileRoute('/programmes/corporate-learning')({
  head: () => ({
    meta: [
      { title: 'Corporate Learning & ESG Workshops — Global Edu Lab' },
      { name: 'description', content: 'Bespoke leadership workshops for boards and executive teams on ESG, corporate governance, entrepreneurship and organisational behaviour. On-site or at Cambridge.' },
      { property: 'og:title', content: 'Corporate Learning & ESG Workshops' },
      { property: 'og:description', content: 'Custom Cambridge-quality leadership workshops for boards and senior leadership teams.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <StatsStrip />
      <Workshops />
      <HowItWorks />
      <Formats />
      <WhoWeWorkWith />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Bespoke Advisory · Rolling Calendar</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Corporate Learning &amp; ESG Workshops
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              Cambridge-quality learning, built around your organisation.
            </p>
            <p className="mt-5 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              Custom workshops and learning programmes for boards and senior leadership teams — designed around the themes we have delivered since 2022: ESG leadership, corporate governance, entrepreneurship, organisational behaviour and AI strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> Rolling Calendar — Year-Round
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> On-Site or Cambridge
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20"
              >
                Enquire Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#workshops" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300">
                See Workshop Themes
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 aspect-[4/3]">
              <img src={heroImg} alt="Corporate Learning" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/10 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Delivered Since</p>
                <p className="text-[14px] text-forest/55 mt-0.5">2022</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center">
                <Award className="h-5 w-5 text-forest-deep" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Fully Bespoke</p>
                <p className="text-[14px] text-forest/55 mt-0.5">Built for your team</p>
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
    { val: '2022', label: 'Delivering Since', sub: 'Trusted & established' },
    { val: '50+', label: 'Teams Trained', sub: 'Boards & senior leadership' },
    { val: 'Bespoke', label: 'Every Workshop', sub: 'Built around your org' },
    { val: '2 Formats', label: 'Flexible Delivery', sub: 'On-site or at Cambridge' },
    { val: 'ESG', label: 'Core Theme', sub: 'Leadership & governance' },
    { val: 'AI+', label: 'Strategy Focus', sub: 'For boards & C-suite' },
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
              <p className="text-[14px] text-forest/55 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Workshops() {
  const themes = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'ESG Leadership',
      color: 'bg-forest',
      desc: 'Equip your board and executive team with the frameworks, language and strategy to lead your organisation\'s ESG agenda confidently.',
      items: [
        'ESG reporting frameworks (GRI, SASB, TCFD)',
        'Net zero strategy and science-based targets',
        'Stakeholder capitalism and board responsibility',
        'ESG governance structures and oversight',
        'Integrating ESG into capital allocation',
      ],
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Corporate Governance',
      color: 'bg-gold',
      desc: 'Strengthen board effectiveness, fiduciary clarity and governance culture — drawing on best practices from Cambridge and UK corporate leadership.',
      items: [
        'Board roles, responsibilities and accountability',
        'Audit, risk and remuneration committee best practice',
        'Governance for family-owned and founder-led businesses',
        'Director duties in an ESG-integrated world',
        'Board dynamics, culture and effectiveness',
      ],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Strategy for Leaders',
      color: 'bg-forest-deep',
      desc: 'Help your leadership team cut through the AI noise and build a coherent, practical AI adoption strategy for your business context.',
      items: [
        'AI literacy for senior leaders and boards',
        'Building an AI governance framework',
        'Identifying AI opportunities in your sector',
        'Managing risk: ethics, bias and accountability',
        'AI and the workforce: people strategy',
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Organisational Behaviour',
      color: 'bg-forest/60',
      desc: 'Understand the behavioural dynamics that drive — or derail — performance in your leadership team and wider organisation.',
      items: [
        'Leadership psychology and behavioural styles',
        'Building high-performance leadership teams',
        'Change management and organisational resilience',
        'Culture, trust and psychological safety',
        'Decision-making under pressure',
      ],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: 'Entrepreneurship & Innovation',
      color: 'bg-gold',
      desc: 'Help established organisations think and move like entrepreneurs — building innovation culture and protecting competitive advantage.',
      items: [
        'Corporate entrepreneurship frameworks',
        'Design thinking for business leaders',
        'Innovation portfolio management',
        'Intrapreneurship and internal venture creation',
        'Strategic partnerships and ecosystem thinking',
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Strategic Leadership',
      color: 'bg-forest',
      desc: 'Build the strategic thinking and decision-making capabilities your leadership team needs to lead through complexity and uncertainty.',
      items: [
        'Blue ocean strategy and market creation',
        'Scenario planning and strategic foresight',
        'Competitive strategy in disrupted markets',
        'Leading through ambiguity and uncertainty',
        'Cross-cultural leadership and global teams',
      ],
    },
  ]
  return (
    <section id="workshops" className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Workshop Themes</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Six core themes, infinitely customisable.</h2>
          <p className="mt-4 text-[15px] text-forest/65 max-w-2xl mx-auto leading-relaxed">Each workshop theme can be delivered as a half-day, full-day or multi-session learning journey — tailored to your board, your sector and your strategic priorities.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t, i) => (
            <div key={i} className="group bg-[#F7F5F0] rounded-3xl border border-forest/8 overflow-hidden hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-1.5 w-full ${t.color}`} />
              <div className="p-8">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${t.color} text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>{t.icon}</div>
                <h3 className="text-[17px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{t.title}</h3>
                <p className="text-[15px] text-forest/65 leading-relaxed mb-5">{t.desc}</p>
                <ul className="space-y-2">
                  {t.items.map((item, k) => (
                    <li key={k} className="flex items-center gap-2.5 text-[14px] text-forest/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{item}
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

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Discovery Call', desc: 'We begin with a conversation to understand your organisation, your leadership team, your sector and the specific challenges you are navigating.' },
    { n: '02', title: 'Bespoke Design', desc: 'Our academic team designs a programme precisely calibrated to your context — selecting themes, faculty, case studies and formats that fit your needs.' },
    { n: '03', title: 'Proposal & Brief', desc: 'We present a detailed proposal including suggested agenda, faculty profiles, delivery format and indicative investment.' },
    { n: '04', title: 'Programme Delivery', desc: 'We deliver the workshop — on-site at your offices or at Cambridge. Our faculty bring cutting-edge insight and genuine interactivity to every session.' },
    { n: '05', title: 'Follow-Through', desc: 'Optional: post-programme reflection sessions, action planning workshops, and ongoing advisory access to ensure learning translates to impact.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">How We Work</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">From enquiry to impact — five steps.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                <span className="text-[14px] font-bold text-gold">{s.n}</span>
              </div>
              <h3 className="text-[14px] font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Formats() {
  const formats = [
    {
      title: 'On-Site at Your Offices',
      icon: <Building2 className="h-8 w-8" />,
      desc: 'We bring the expertise directly to your organisation. Ideal for whole-board workshops, C-suite retreats or multi-team learning days.',
      features: [
        'Delivered at your office or retreat venue',
        'Half-day, full-day or multi-day options',
        'Familiar environment for your team',
        'No travel disruption',
        'Perfect for 10–50 participants',
      ],
      cta: 'Enquire about on-site delivery',
    },
    {
      title: 'At Cambridge',
      icon: <Award className="h-8 w-8" />,
      desc: 'Bring your leadership team to Cambridge for an immersive experience in one of the world\'s most inspiring academic environments.',
      features: [
        'Hosted at Cambridge Judge Business School',
        'Optional college accommodation',
        'Visits to Cambridge innovation facilities',
        'Evening dinners at historic Cambridge colleges',
        'Perfect for senior cohorts of up to 30',
      ],
      cta: 'Enquire about Cambridge delivery',
    },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Delivery Formats</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">We come to you — or you come to Cambridge.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 border border-forest/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-deep text-gold mb-6 shadow-lg">{f.icon}</div>
              <h3 className="text-[20px] font-bold text-forest-deep mb-3">{f.title}</h3>
              <p className="text-[14px] text-forest/70 leading-relaxed mb-8">{f.desc}</p>
              <ul className="space-y-3 mb-8">
                {f.features.map((feat, k) => (
                  <li key={k} className="flex items-center gap-3 text-[15px] text-forest/80">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />{feat}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-forest transition-all duration-300">
                {f.cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoWeWorkWith() {
  const clients = [
    { icon: <Building2 className="h-6 w-6" />, title: 'FTSE-Listed Companies', desc: 'Board-level ESG, governance and strategy workshops for listed UK and Indian companies.', color: 'bg-forest-deep' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'Family Offices & Business Houses', desc: 'Governance and succession planning workshops for large family-owned business groups.', color: 'bg-gold' },
    { icon: <Briefcase className="h-6 w-6" />, title: 'Private Equity & VC', desc: 'Portfolio company leadership development and ESG integration workshops.', color: 'bg-forest' },
    { icon: <Users className="h-6 w-6" />, title: 'Startups & Scale-ups', desc: 'Leadership capability building for founder-led teams preparing for rapid growth.', color: 'bg-forest/60' },
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Who We Work With</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Trusted by ambitious organisations.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((c, i) => (
            <div key={i} className="group rounded-3xl border border-forest/8 bg-[#F7F5F0] overflow-hidden hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className={`h-1.5 w-full ${c.color}`} />
              <div className="p-7">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${c.color} text-white shadow-lg`}>{c.icon}</div>
                <h3 className="text-[15px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{c.title}</h3>
                <p className="text-[15px] text-forest/70 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Vikram Mehta',
      role: 'Chairman, Indian Conglomerate',
      initials: 'VM',
      quote: 'The ESG workshop delivered by Global Education Lab was the single most impactful board development exercise we have run in five years. The faculty brought genuine Cambridge rigour to our specific business context.',
    },
    {
      name: 'Sarah Okafor',
      role: 'CEO, UK-India Investment Platform',
      initials: 'SO',
      quote: 'The Corporate Governance workshop cut through the theoretical noise and gave our board a clear, actionable framework. We implemented changes in our committee structure within two weeks of the session.',
    },
    {
      name: 'Arjun Nair',
      role: 'Founder & MD, Scale-up',
      initials: 'AN',
      quote: 'We had the workshop at Cambridge — two days at Judge Business School. My entire leadership team came back transformed. The combination of intellectual challenge and Cambridge atmosphere was extraordinary.',
    },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Client Stories</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep mb-16">What clients say.</h2>
        <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-forest-deep to-forest flex items-center justify-center text-2xl font-bold text-white shadow-xl mb-6">{t.initials}</div>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
        </div>
        <blockquote className="text-[15px] leading-relaxed text-forest/70 max-w-2xl mx-auto italic mb-6">"{t.quote}"</blockquote>
        <p className="font-bold text-forest-deep">{t.name}</p>
        <p className="text-[14px] text-forest/50 mt-1">{t.role}</p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))} className="h-10 w-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 hover:border-forest-deep hover:text-forest-deep transition-all">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={"h-1.5 rounded-full transition-all duration-300 " + (i === current ? 'w-6 bg-gold' : 'w-1.5 bg-forest/20')} />)}
          </div>
          <button onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))} className="h-10 w-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 hover:border-forest-deep hover:text-forest-deep transition-all">
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
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Start the Conversation</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Build a workshop for your team.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Tell us about your organisation and your goals. We'll design a bespoke workshop that creates real, lasting impact for your leadership team.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg"
          >
            Enquire Now <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href="mailto:info@globaledulab.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
