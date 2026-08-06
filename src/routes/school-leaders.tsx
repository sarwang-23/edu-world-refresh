import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from './index'
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Globe2,
  BookOpen,
  Compass,
  Award,
  CheckCircle2,
  MapPin,
  Calendar,
  Building2,
  FileText,
  ShieldCheck,
  Languages,
  Utensils,
  Quote,
} from 'lucide-react'
import schoolLeadersImg from '../assets/gilp-march-10.jpg'
import person6Img from '../assets/person6.jpg'
import jaideepImg from '../assets/faculty-jaideep.jpg'
import samTullyImg from '../assets/people/sam_tully.jpg'
import cambridgeTestimonialImg from '../assets/cambridge_1.jpg'
import finlandTestimonialImg from '../assets/finland_1.jpg'
import londonTestimonialImg from '../assets/executive-education.jpg'

export const Route = createFileRoute('/school-leaders')({
  component: SchoolLeaders,
})

function SchoolLeaders() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <WhyLeadersTravel />
      <StatsBar />
      <ProgrammesCohorts />
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
    <section className="relative overflow-hidden border-b border-border/60 bg-cream pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 items-start pt-6">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-[15px] font-semibold uppercase tracking-[0.18em] text-forest/70">
            <GraduationCap className="h-3.5 w-3.5 text-gold" /> For International School Leaders — Cohorts from 20+ Countries
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-forest md:text-5xl lg:text-[4.25rem]">
            The world's finest classrooms, <span className="italic text-gold">opened to you.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground md:text-lg">
            Global Education Lab curates immersive leadership programmes for school owners, principals and trustees — connecting them with Cambridge academics, Finnish policymakers, and pioneering institutions across four continents.
          </p>
          <div className="mt-10 flex items-center gap-3.5 flex-wrap sm:flex-nowrap">
            <a
              href="#cohorts"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep whitespace-nowrap shrink-0"
            >
              Explore Cohorts <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#delegations"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5 whitespace-nowrap shrink-0"
            >
              Delegate Support
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-[15px] font-medium uppercase tracking-[0.22em] text-forest/80">
            <span className="h-px w-10 bg-forest/30" />
            Cambridge · Finland · London · Bali
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <img
              src={schoolLeadersImg}
              alt="School Leaders & Educators"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent p-6">
              <p className="text-[15px] uppercase tracking-[0.2em] text-gold">Leadership & Governance</p>
              <p className="mt-1 text-xl font-semibold text-cream">
                Empowering leaders across world-class ecosystems.
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
    "University of Cambridge",
    "Finnish Ministry of Education",
    "House of Lords",
    "Green School Bali",
    "British Council",
    "INSEAD Alumni",
  ]
  // Duplicate 4× for seamless loop
  const items = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="border-b border-border/50 bg-white py-8 overflow-hidden">
      <p className="text-center text-[15px] font-bold uppercase tracking-[0.3em] text-forest/70 mb-5">
        IN COLLABORATION WITH
      </p>
      <div className="relative flex overflow-hidden">
        <div
          className="flex min-w-full shrink-0 gap-x-14 items-center"
          style={{
            animation: 'marquee-rtl 25s linear infinite',
            willChange: 'transform',
          }}
        >
          {items.map((partner, idx) => (
            <span
              key={idx}
              className="whitespace-nowrap text-[15px] font-serif font-semibold text-forest/80 hover:text-forest transition-colors cursor-default"
            >
              {partner}
              <span className="ml-14 text-gold/80 select-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyLeadersTravel() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const features = [
    {
      icon: <Globe2 className="h-6 w-6 text-gold" />,
      title: "A truly global cohort",
      desc: "Sit alongside heads-of-school from India, the UAE, Nigeria, Vietnam, Kenya and beyond. The delegation is the classroom.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-gold" />,
      title: "Faculty from world-leading systems",
      desc: "Sessions led by Cambridge academics, Finnish system architects, and headteachers of internationally-ranked schools.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-gold" />,
      title: "Study visits, not seminars",
      desc: "Every programme is built around live school walkthroughs, classroom observations and closed-door leadership dialogues.",
    },
    {
      icon: <Award className="h-6 w-6 text-gold" />,
      title: "Certificate of participation",
      desc: "A co-branded certificate from Global Education Lab and the host institution — recognised by international boards.",
    },
  ]

  return (
    <section className="border-b border-border/60 py-24" style={{ backgroundColor: '#FBF8F0' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header: stacked, left-aligned */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">
            WHY LEADERS TRAVEL WITH US
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
            Built for principals with an <span className="font-serif italic text-gold">international ambition.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-forest/75 md:text-lg">
            Our programmes are designed for schools that intend to compete on the world stage — whether you run a K-12 in Lagos, an international school in Ho Chi Minh City, or a growing group of academies in the Gulf. What you take home is not a workshop deck; it is a redesigned operating model.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => {
            const isSelected = selectedIdx === idx
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={`cursor-pointer rounded-2xl border p-8 transition-all duration-200 select-none ${
                  isSelected
                    ? 'border-gold bg-white shadow-xl ring-2 ring-gold/50 scale-[1.02]'
                    : 'border-forest/10 bg-white hover:shadow-md hover:border-gold/30'
                }`}
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  isSelected ? 'bg-gold/15' : 'bg-forest/10'
                }`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-forest-deep">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-forest/75">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { k: "20+", v: "COUNTRIES REPRESENTED" },
    { k: "150+", v: "SCHOOLS & INSTITUTIONS" },
    { k: "4", v: "CONTINENTS VISITED" },
    { k: "96%", v: "WOULD RECOMMEND" },
  ]
  // Duplicate 4× for seamless loop
  const items = [...stats, ...stats, ...stats, ...stats]

  return (
    <section className="border-y border-cream/10 bg-forest-deep py-14 text-cream overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div
          className="flex min-w-full shrink-0 items-center gap-x-20"
          style={{
            animation: 'marquee-rtl 18s linear infinite',
            willChange: 'transform',
          }}
        >
          {items.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center shrink-0">
              <p className="font-sans text-4xl font-bold tracking-tight text-gold md:text-5xl">{s.k}</p>
              <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.2em] text-cream/70 whitespace-nowrap">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgrammesCohorts() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const programmes = [
    {
      tag: "FLAGSHIP",
      delegates: "32 DELEGATES",
      title: "Cambridge School Leadership Programme",
      location: "Cambridge, UK",
      quote: "Great schools begin with courageous leadership conversations.",
      desc: "Three days inside one of the world's most storied university towns. Sessions with Cambridge faculty, college dinners, and school visits across the East of England.",
      link: "/programmes/cslp",
    },
    {
      tag: "STUDY VISIT",
      delegates: "24 DELEGATES",
      title: "Finland Education Programme",
      location: "Helsinki & Espoo",
      quote: "The future of learning is built through observation, reflection, and trust.",
      desc: "Inside the world's most-studied schooling system. Meet the architects of Finnish education policy and observe pedagogy in comprehensive schools.",
      link: "/programmes/finland",
    },
    {
      tag: "POLICY",
      delegates: "28 DELEGATES",
      title: "London School Leadership Programme",
      location: "London, UK",
      quote: "Leadership grows when systems, policy, and practice meet in one room.",
      desc: "A week inside Britain's education policy engine — from the House of Lords to independent school boards and multi-academy trusts.",
      link: "/programmes/llp",
    },
    {
      tag: "SUSTAINABILITY",
      delegates: "20 DELEGATES",
      title: "Bali Green School Programme",
      location: "Ubud, Indonesia",
      quote: "A classroom can be both radical and deeply human.",
      desc: "Learn how the Green School re-imagined the classroom. Sustainability, project-based learning and curriculum design — inside a living campus.",
      link: "/programmes/bali",
    },
  ]

  return (
    <section id="cohorts" className="border-b border-border/60 bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">COHORTS</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Four programmes. One passport.
          </h2>
          <p className="mt-5 text-[15px] text-forest/75 leading-relaxed">
            Attend one, or combine two in the same academic year. Delegations welcomed from schools, groups and ministries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {programmes.map((p, idx) => {
            const isSelected = selectedIdx === idx
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={`cursor-pointer flex flex-col justify-between rounded-3xl border p-8 transition-all duration-200 select-none ${
                  isSelected
                    ? 'border-gold bg-white shadow-xl ring-2 ring-gold/50 scale-[1.01]'
                    : 'border-forest/10 bg-white hover:shadow-md hover:border-gold/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[15px] font-bold uppercase tracking-[0.2em] text-forest/80 mb-6">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-gold transition-colors ${
                      isSelected ? 'bg-gold/15' : 'bg-forest/5'
                    }`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {p.tag}
                    </span>
                    <span>{p.delegates}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-forest-deep">{p.title}</h3>

                  <div className="mt-4 flex flex-col gap-2 text-[14.5px] text-forest/80 italic">
                    <span className="flex items-center gap-1.5 not-italic font-medium text-forest-deep">
                      <MapPin className="h-4 w-4 text-gold" /> {p.location}
                    </span>
                    <span className="flex items-start gap-1.5 leading-snug">
                      <Quote className="h-4 w-4 text-gold shrink-0 mt-0.5" /> "{p.quote}"
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-forest/80">{p.desc}</p>
                </div>

                <div className="mt-8 border-t border-forest/10 pt-6">
                  <Link
                    to={p.link as any}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[15px] font-semibold uppercase tracking-widest text-cream transition-all hover:bg-forest-deep hover:shadow-md"
                  >
                    View the Programme <ArrowUpRight className="h-3.5 w-3.5" />
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
      title: "Enquire from anywhere",
      desc: "Complete a short expression of interest. We respond within 48 hours in English, Arabic, French, Hindi or Bahasa.",
    },
    {
      step: "02",
      title: "Delegation call",
      desc: "A 30-minute video call with our admissions team to align on your school context and travelling group.",
    },
    {
      step: "03",
      title: "Visa & travel support",
      desc: "We issue formal invitation letters, guide the visa route (UK, Schengen, Indonesia) and recommend vetted travel partners.",
    },
    {
      step: "04",
      title: "Arrive & immerse",
      desc: "Airport pickup, curated hotels, English-language programming, and a dedicated relationship manager on the ground.",
    },
  ]

  return (
    <section className="border-b border-border/60 py-24" style={{ backgroundColor: '#FBF8F0' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FROM ENQUIRY TO ARRIVAL</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-2xl">
            An international journey we handle end-to-end.
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
        '"Through my participation in both the Cambridge and Finland programmes, I gained exceptional exposure to the best global practices in education. This experience has truly inspired me to implement some of these changes, which will positively impact over 30,000 students across our institutions."',
      author: "Lakshmi Samyuktha Kotha",
      role: "Executive Dean, Narayana Group of Schools – India",
      img: person6Img,
      bannerImg: cambridgeTestimonialImg,
    },
    {
      quote:
        '"GEL\'s programmes offer a roadmap for frugal innovation across a broad segment of learners. Learners return with fresh ideas, deeper confidence, and a renewed sense of purpose, ready to lead change for businesses, teams or themselves."',
      author: "Prof. Jaideep Prabhu FBA",
      role: "Professor of Marketing & Vice Dean, Cambridge Judge Business School, University of Cambridge",
      img: jaideepImg,
      bannerImg: finlandTestimonialImg,
    },
    {
      quote:
        '"I was privileged to attend the Global India Leadership Programme at the Cambridge Judge Business School with a great cohort from India and a few other places. What a week it was, in the confines of one of the world\'s finest Universities and one of its most beautiful cities. Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce experience."',
      author: "Sam Tully",
      role: "GEL Programme delegate, Trustee – Pratham UK",
      img: samTullyImg,
      bannerImg: londonTestimonialImg,
    },
  ]

  return (
    <section className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FROM OUR DELEGATES</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-5xl">
            Trusted by school leaders across four continents.
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
                   <img src={r.bannerImg} alt={r.author} className="w-full h-full object-cover" />
                </div>
                <Quote className="h-8 w-8 text-gold/80 mb-4" />
                <p className="text-[15px] leading-relaxed text-cream/90 italic">{r.quote}</p>
              </div>

              <div className="mt-8 border-t border-cream/10 pt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0"><img src={r.img} alt={r.author} className="w-full h-full object-cover" /></div>
                <div>
                  <p className="text-[15px] font-bold text-gold">{r.author}</p>
                  <p className="mt-0.5 text-[15px] font-bold uppercase tracking-widest text-cream/80">{r.role}</p>
                </div>
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
      title: "Travel & visa letters",
      desc: "Formal invitation letters and endorsement documents for UK, Schengen and Indonesian visa applications.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-gold" />,
      title: "Vetted logistics",
      desc: "Airport pickup, insured transport, and pre-approved hotel blocks within walking distance of every venue.",
    },
    {
      icon: <Languages className="h-5 w-5 text-gold" />,
      title: "Multilingual admissions",
      desc: "Enquiries answered in English, Arabic, French, Hindi and Bahasa. Interpreters on request.",
    },
    {
      icon: <Utensils className="h-5 w-5 text-gold" />,
      title: "Dietary & faith needs",
      desc: "Halal, vegetarian, Kosher, and Jain menus at every meal. Prayer rooms arranged near the venue.",
    },
  ]

  return (
    <section id="delegations" className="border-b border-border/60 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">FOR INTERNATIONAL DELEGATIONS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl leading-tight">
              Everything you need — before you board.
            </h2>
            <p className="mt-6 text-[15px] text-forest/80 leading-relaxed">
              Bringing a leadership team across borders is a serious undertaking. Our concierge desk manages the details so your team arrives ready to learn, not exhausted from logistics.
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
          Reserve your delegation for the next season.
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-cream/80 max-w-xl mx-auto">
          Cohorts are capped and fill six to nine months in advance. Register your school today and our admissions team will be in touch within two working days.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/contact" search={{ source: "School Leaders" }}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-widest text-forest transition-all hover:bg-gold/90 hover:scale-105 shadow-xl shadow-gold/10"
          >
            ENQUIRE NOW <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="#cohorts"
            className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-widest text-cream/70 hover:text-cream transition-colors"
          >
            OR VIEW ALL PROGRAMMES →
          </a>
        </div>
      </div>
    </section>
  )
}
