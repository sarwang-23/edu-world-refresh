import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from './index'
import {
  ArrowUpRight,
  Building2,
  Globe2,
  BookOpen,
  Rocket,
  Award,
  FileText,
  ShieldCheck,
  Languages,
  Utensils,
  Users,
  Quote,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Play
} from 'lucide-react'
import businessLeadersImg from '../assets/executive-education.jpg'
import aashishImg from '../assets/alumni4.jpg'
import snigdhaImg from '../assets/alumni1.jpg'
import samTullyImg from '../assets/people/sam_tully.jpg'
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute('/business-leaders')({
  head: () => buildMeta("/business-leaders"),
  component: BusinessLeaders,
})

function BusinessLeaders() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <WhyLeadersTravel />
      <StatsBar />
      <OngoingProgrammes />
      <EndToEndJourney />
      <Testimonials />
      <DelegationConcierge />
      <FinalCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-cream pb-0">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 items-start pb-12 md:pb-20 pt-6">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-[15px] font-semibold uppercase tracking-[0.18em] text-forest/70">
            <Building2 className="h-3.5 w-3.5 text-gold" /> For Business Leaders & Entrepreneurs
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-forest md:text-5xl lg:text-[4.25rem]">
            Leadership sharpened at the world's <span className="italic text-gold font-serif">great institutions.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-forest/80 md:text-lg">
            We deliver leadership workshops and corporate learning events on ESG, organisational behaviour, entrepreneurship and corporate governance — helping CXOs and senior executives sharpen strategic thinking and strengthen leadership capability.
          </p>
          <div className="mt-10 flex items-center gap-3.5 flex-wrap sm:flex-nowrap">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep whitespace-nowrap shrink-0"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#delegations"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5 whitespace-nowrap shrink-0"
            >
              Corporate Delegations
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.22em] text-forest/70">
            <span className="h-px w-10 bg-forest/30" />
            CAMBRIDGE · HOUSE OF LORDS · JUDGE BUSINESS SCHOOL
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:pt-12 md:pt-8">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <img
              src={businessLeadersImg}
              alt="Business Leaders"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent p-6">
              <p className="text-[15px] uppercase tracking-[0.2em] text-gold font-bold">CXOs & ENTREPRENEURS</p>
              <p className="mt-1 text-xl font-bold text-cream">
                Where global business leaders come to learn, think and connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CollaboratorsBar() {
  const partners = [
    "Global Innovation Corridor",
    "Global India Leadership",
    "Cambridge Judge Business School",
    "University of Cambridge",
    "House of Lords",
    "Entrepreneurs Lab UK",
    "Global Innovation Corridor",
    "Global India Leadership",
  ]

  return (
    <div className="border-b border-border/60 bg-white py-6 overflow-hidden flex flex-col items-center">
      <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-forest/70 mb-4 text-center">
        IN COLLABORATION WITH
      </p>
      <div className="relative flex w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {partners.map((partner, i) => (
            <span key={i} className="mx-8 flex items-center text-[15px] font-bold text-forest/80 uppercase tracking-widest">
              {partner}
              <span className="ml-16 text-gold/80">✦</span>
            </span>
          ))}
          {partners.map((partner, i) => (
            <span key={`dup-${i}`} className="mx-8 flex items-center text-[15px] font-bold text-forest/80 uppercase tracking-widest">
              {partner}
              <span className="ml-16 text-gold/80">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function WhyLeadersTravel() {
  const reasons = [
    {
      icon: <Globe2 className="h-5 w-5 text-gold" />,
      title: "A global peer cohort",
      desc: "Sit alongside CXOs, founders and senior executives from India, the UK, the Gulf and Southeast Asia. The room is the network.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-gold" />,
      title: "Faculty from Top Tier Universities",
      desc: "Sessions led by Cambridge Judge Business School faculty and practitioners working on AI, innovation and corporate governance.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-gold" />,
      title: "ESG, AI & entrepreneurship",
      desc: "Programme content is anchored in the themes that now decide global growth — ESG leadership, AI strategy and venture building.",
    },
    {
      icon: <Award className="h-5 w-5 text-gold" />,
      title: "Recognition & networks",
      desc: "Co-branded certification with our host institutions and continued access to global executive networks.",
    },
  ]

  return (
    <section className="py-24 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">WHY EXECUTIVES TRAVEL WITH US</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-3xl leading-tight">
            Built for leaders preparing to <span className="italic text-gold font-serif">lead global growth.</span>
          </h2>
          <p className="mt-6 text-[15px] text-forest/80 leading-relaxed max-w-3xl">
            Our flagship — the Global India Leadership Programme (GILP) — brings CXOs and founders to Cambridge to explore cutting-edge leadership strategies, AI and innovation frameworks, and to network with global business leaders. Our wider calendar convenes executives at Cambridge, the House of Lords and Judge Business School.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10">
                {r.icon}
              </div>
              <h3 className="text-base font-bold text-forest-deep">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-forest/75">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { label: "CXOs", sub: "AT EVERY COHORT" },
    { label: "Global", sub: "EXECUTIVE NETWORK" },
    { label: "Cambridge", sub: "FACULTY & SESSIONS" },
    { label: "4+", sub: "CORE THEMES" },
  ]

  return (
    <div className="bg-forest py-6 overflow-hidden">
      <div className="relative flex w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="mx-12 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-gold">{stat.label}</span>
                  <span className="mt-1 text-[15px] font-bold tracking-[0.2em] text-cream/70 uppercase">{stat.sub}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OngoingProgrammes() {
  const programmes = [
    {
      type: "FLAGSHIP",
      audience: "INDIAN CXOs",
      title: "Global India Leadership Programme",
      location: "UNIVERSITY OF CAMBRIDGE",
      quote: "The best leaders make space to reframe what is possible.",
      desc: "A week at Cambridge for CXOs — cutting-edge leadership strategies, AI and innovation frameworks, and access to global leadership networks, in partnership with Cambridge Judge Business School.",
      link: "/indialeadership",
    },
    {
      type: "INVITE ONLY",
      audience: "HOUSE OF LORDS",
      title: "Global Impact of Cambridge Startups",
      location: "HOUSE OF LORDS, LONDON",
      quote: "When founders meet policymakers, ideas become action.",
      desc: "An exclusive, invite-only convening at the House of Lords spotlighting the global impact of Cambridge startups — with founders, investors and policymakers from global innovation ecosystems.",
      link: "/programmes/house-of-lords",
    },
    {
      type: "ENTREPRENEURSHIP",
      audience: "FOUNDERS",
      title: "Zero-To-One Ideation Weekend",
      location: "JUDGE BUSINESS SCHOOL, CAMBRIDGE",
      quote: "The next bold move is rarely a solo one.",
      desc: "Three days in-person at Judge Business School to move a venture from zero to one — validation sprints, mentor clinics and founder-to-founder dialogues.",
      link: "/programmes/zero-to-one",
    }
  ]

  return (
    <section id="programmes" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Ongoing Programmes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programmes.map((p, idx) => {
            return (
              <div key={idx} className={`flex flex-col justify-between rounded-2xl border border-forest/10 bg-white p-8 shadow-sm ${idx === programmes.length - 1 && programmes.length % 2 !== 0 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-12px)] w-full' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                      {p.type}
                    </span>
                    <span className="text-[13px] font-bold uppercase tracking-widest text-forest/60">
                      {p.audience}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-forest-deep tracking-tight mb-4">
                    {p.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2.5 mb-5 border-l-2 border-gold/40 pl-4 py-1">
                    <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-forest/80">
                      <MapPin className="h-4 w-4 text-gold shrink-0" /> 
                      <span className="leading-tight">{p.location}</span>
                    </div>
                    <div className="text-[16px] font-serif italic text-forest/70 leading-snug">
                      "{p.quote}"
                    </div>
                  </div>
                  
                  <p className="text-[15px] leading-relaxed text-forest/70">
                    {p.desc}
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link
                    to={p.link}
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[15px] font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-forest-deep"
                  >
                    VIEW THE PROGRAMME <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EndToEndJourney() {
  const steps = [
    {
      step: "01",
      title: "Register your interest",
      desc: "Share a brief on your organisation and the leaders you plan to send. We respond within 48 hours.",
    },
    {
      step: "02",
      title: "Executive scoping call",
      desc: "A 30-minute call to align on business context, sector, and the outcomes you want the cohort to leave with.",
    },
    {
      step: "03",
      title: "Visa & travel support",
      desc: "We issue formal invitation letters, guide the UK visa route and recommend vetted travel and hotel partners near Cambridge and London.",
    },
    {
      step: "04",
      title: "Arrive & engage",
      desc: "Airport pickup, curated stays, and a dedicated relationship manager on the ground for the full engagement.",
    },
  ]

  return (
    <section className="py-24 bg-[#FAF8F4] border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FROM ENQUIRY TO CAMBRIDGE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-2xl">
            An executive journey we handle end-to-end.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-3xl font-bold text-gold">{s.step}</span>
                <div className="h-px flex-1 bg-forest/20" />
              </div>
              <h3 className="text-base font-bold text-forest-deep">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-forest/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      quote:
        '"Frugal innovation came alive during the programme as a practical necessity, not theory. It reinforced that sustainable impact lies in affordable, last-mile solutions. Seeing \'jugaad\' discussed at Cambridge affirmed that frugal innovation is globally relevant, and that the programme sets exactly the right foundation."',
      author: "Dr. Aashish Chaudhry",
      role: "MD, AAKASH HEALTHCARE (INDIA)",
      img: aashishImg
    },
    {
      quote:
        '"This programme helped articulate something critical: leadership is also about language. It equips founders to translate their journey into frameworks that resonate with investors and stakeholders. That shift, from building to being understood, unlocks the next level of growth and influence."',
      author: "Snigdha Manchanda",
      role: "FOUNDER, TEATRUNK (INDIA)",
      img: snigdhaImg
    },
    {
      quote:
        '"I was privileged to attend the Global Education Lab\'s Global India Leadership Programme... Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce."',
      author: "Sam Tully",
      role: "TRUSTEE, PRATHAM UK",
      img: samTullyImg
    },
  ]

  return (
    <section className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FROM OUR DELEGATES</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-5xl">
            Trusted by CXOs, founders and boards.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-cream/15 bg-forest-deep/60 p-8 backdrop-blur-sm"
            >
              <div>
                <div className="aspect-video w-full rounded-xl bg-black/10 overflow-hidden relative mb-6 border border-white/10">
                   <img src={r.img} alt={r.author} className="w-full h-full object-cover object-[center_30%]" />
                </div>
                <Quote className="h-8 w-8 text-gold/80 mb-4" />
                <p className="text-[15px] leading-relaxed text-cream/90 italic">{r.quote}</p>
              </div>

              <div className="mt-8 border-t border-cream/10 pt-4">
                <p className="text-[15px] font-bold text-gold">{r.author}</p>
                <p className="mt-1 text-[15px] font-bold uppercase tracking-widest text-cream/80">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DelegationConcierge() {
  const items = [
    {
      icon: <FileText className="h-5 w-5 text-gold" />,
      title: "Invitation & visa letters",
      desc: "Formal invitation letters and endorsement documents for UK visa applications for you and your travelling team.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-gold" />,
      title: "Vetted logistics",
      desc: "Airport pickup, insured transport, and pre-approved hotel blocks near Cambridge and central London.",
    },
    {
      icon: <Users className="h-5 w-5 text-gold" />,
      title: "Bespoke corporate cohorts",
      desc: "Private cohorts for a single organisation or consortium — sector-specific curriculum built with our faculty.",
    },
    {
      icon: <Languages className="h-5 w-5 text-gold" />,
      title: "Multilingual admissions",
      desc: "Enquiries answered in English and Hindi, with interpreters available for on-site sessions on request.",
    },
    {
      icon: <Award className="h-5 w-5 text-gold" />,
      title: "Peer curation",
      desc: "We hand curate each cohort so every delegate leaves with genuinely useful peer relationships, not a name-badge list.",
    },
    {
      icon: <Utensils className="h-5 w-5 text-gold" />,
      title: "Dietary & faith needs",
      desc: "Halal, vegetarian, Kosher and Jain menus at every meal. Prayer rooms arranged near each venue.",
    },
  ]

  return (
    <section id="delegations" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FOR CORPORATE DELEGATIONS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl leading-tight">
              Everything your leadership team needs — before you board.
            </h2>
            <p className="mt-6 text-[15px] text-forest/80 leading-relaxed">
              Bringing a C-suite across borders is a serious undertaking. Our concierge desk manages the details so your team arrives ready to think, learn and build — not exhausted from logistics.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-forest/10 bg-white shadow-sm p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-forest-deep">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-forest/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-forest-deep py-24 text-center text-cream">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">BRING YOUR LEADERSHIP TEAM</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          Reserve your seats for the next season.
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-cream/80 max-w-xl mx-auto">
          Cohorts are capped and typically fill six to nine months in advance. Register today and our admissions team will be in touch within two working days.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/contact" search={{ source: "Business Leaders" }}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-widest text-forest transition-all hover:bg-gold/90 hover:scale-105 shadow-xl shadow-gold/10"
          >
            ENQUIRE NOW <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-widest text-cream/70 hover:text-cream transition-colors"
          >
            OR VIEW ALL PROGRAMMES →
          </a>
        </div>
      </div>
    </section>
  )
}
