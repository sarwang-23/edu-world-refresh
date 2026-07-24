import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowUpRight,
  Compass,
  Globe2,
  BookOpen,
  Award,
  FileText,
  ShieldCheck,
  Languages,
  Utensils,
  Quote,
  MapPin,
  Calendar,
} from 'lucide-react'
import studentsImg from '../assets/students.jpg'

export const Route = createFileRoute('/students')({
  component: Students,
})

function Students() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <CollaboratorsBar />
      <WhyStudentsJoin />
      <StatsBar />
      <OngoingProgrammes />
      <EndToEndJourney />
      <Testimonials />
      <FamilyConcierge />
      <FinalCTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-0 pb-12 md:pb-20 lg:grid-cols-12 lg:gap-8 items-start">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest/70">
            <Compass className="h-3.5 w-3.5 text-gold" /> For Students & Young Learners — Aged 14–17 and 18+
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-forest md:text-5xl lg:text-[4.25rem]">
            A Cambridge summer, <span className="italic text-gold font-serif">before university even begins.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-forest/80 md:text-lg">
            Since 2022 we have delivered future-focused programmes to 5,000+ students — Economics, Business, STEM, Entrepreneurship, Sustainability and Public Speaking — including residential summer camps at Hughes Hall and Girton College, University of Cambridge.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Explore 2026 Programmes <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#family"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Parent & School Support
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-forest/40">
            <span className="h-px w-10 bg-forest/30" />
            CAMBRIDGE · HUGHES HALL · GIRTON COLLEGE
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-forest/15">
            <img
              src={studentsImg}
              alt="Students at Cambridge"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">YOUNG LEADERS</p>
              <p className="mt-1 text-xl font-bold text-cream">
                Inspiring the next generation of global thinkers.
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
    "Iten Hall, Cambridge",
    "Girton College, Cambridge",
    "University of Cambridge",
    "Judge Business School",
    "King's College Cambridge",
    "British Council",
    "Hughes Hall Cambridge",
    "Girton College, Cambridge",
    "University of Cambridge",
    "Judge Business School",
  ]

  return (
    <div className="border-b border-border/60 bg-white py-6 overflow-hidden flex flex-col items-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/40 mb-4 text-center">
        IN COLLABORATION WITH
      </p>
      <div className="relative flex w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {partners.map((partner, i) => (
            <span key={i} className="mx-8 flex items-center text-xs font-bold text-forest/80 uppercase tracking-widest">
              {partner}
              <span className="ml-16 text-gold/30">✦</span>
            </span>
          ))}
          {partners.map((partner, i) => (
            <span key={`dup-${i}`} className="mx-8 flex items-center text-xs font-bold text-forest/80 uppercase tracking-widest">
              {partner}
              <span className="ml-16 text-gold/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function WhyStudentsJoin() {
  const reasons = [
    {
      icon: <Globe2 className="h-5 w-5 text-gold" />,
      title: "A globally diverse cohort",
      desc: "Sit alongside peers from India, the UAE, Nigeria, Vietnam and Europe. The campus that called the world.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-gold" />,
      title: "Taught at Cambridge",
      desc: "Lectures, workshops and mentoring inside historic Cambridge colleges — Hughes Hall and Girton — with visiting faculty.",
    },
    {
      icon: <Compass className="h-5 w-5 text-gold" />,
      title: "Future-focused curriculum",
      desc: "STEM, Entrepreneurship, AI, Economics, Sustainability and Public Speaking — subjects that develop curiosity and problem-solving.",
    },
    {
      icon: <Award className="h-5 w-5 text-gold" />,
      title: "Certificate of participation",
      desc: "A co-branded certificate from Global Education Lab and the host college — a valuable addition to any university application.",
    },
  ]

  return (
    <section className="py-24 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">WHY STUDENTS JOIN US</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-3xl leading-tight">
            Built to inspire students with <span className="italic text-gold font-serif">global ambition.</span>
          </h2>
          <p className="mt-6 text-sm text-forest/80 leading-relaxed max-w-3xl">
            Our programmes give students a genuine taste of Cambridge life — world-class lectures, hands-on projects, and a cohort of peers from around the globe. They leave more confident, more curious, and better prepared for the road to higher education.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10">
                {r.icon}
              </div>
              <h3 className="text-base font-bold text-forest-deep">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-forest/75">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { label: "5,000+", sub: "STUDENTS IMPACTED" },
    { label: "20+", sub: "COUNTRIES REPRESENTED" },
    { label: "2", sub: "CAMBRIDGE COLLEGES" },
    { label: "98%", sub: "WOULD RECOMMEND" },
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
                  <span className="mt-1 text-[9px] font-bold tracking-[0.2em] text-cream/70 uppercase">{stat.sub}</span>
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
      type: "SUMMER CAMP",
      audience: "SCHOOL · 14–17 YRS",
      title: "STEM & Entrepreneurship Summer Camp at Cambridge",
      location: "HUGHES HALL, UNIVERSITY OF CAMBRIDGE",
      date: "6-18 JULY 2026",
      desc: "A two-week residential experience for school students at Hughes Hall — hands-on STEM projects, entrepreneurship sprints, Cambridge tours and cultural excursions across the East of England.",
      link: "/programmes/student-camps",
    },
    {
      type: "FELLOWSHIP",
      audience: "GRADUATE · 18+ YRS",
      title: "Summer Programme at Girton College — Entrepreneurship & AI",
      location: "GIRTON COLLEGE, UNIVERSITY OF CAMBRIDGE",
      date: "13-25 JULY 2026",
      desc: "A fortnight for undergraduates and gap-year students at Girton College. Lectures on entrepreneurship and applied AI, a live venture-building sprint, and mentoring from Cambridge faculty and founders.",
      link: "/programmes/student-camps",
    },
  ]

  return (
    <section id="programmes" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">ON-GOING PROGRAMMES - 2026</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Two summers at Cambridge. School and Graduate.
          </h2>
          <p className="mt-4 text-sm text-forest/80 max-w-2xl">
            Join our flagship programmes at Hughes Hall (14–17 years) and Girton College (18+ years) — a genuine Cambridge experience curated end-to-end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programmes.map((p, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded">✦ {p.type}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-forest/40">{p.audience}</span>
                </div>

                <h3 className="text-xl font-bold text-forest-deep">{p.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-forest/60">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.location}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-forest/80">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-forest-deep"
                >
                  VIEW THE PROGRAMME <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
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
      desc: "Complete a short application. We may follow up with a few questions to ensure we match you to the right programme.",
    },
    {
      step: "02",
      title: "Family & school call",
      desc: "A 15-minute call with a parent (and school coordinator if relevant) to align on the student's goals and readiness.",
    },
    {
      step: "03",
      title: "Visa & travel support",
      desc: "Formal invitation letters for the UK visa process, visa recommendations for safety, two group travel partners and arrivals into London.",
    },
    {
      step: "04",
      title: "Arrive & immerse",
      desc: "Airport pickup to Cambridge, supervised residential stay in college, and 24/7 on-the-ground pastoral care.",
    },
  ]

  return (
    <section className="py-24 bg-[#FAF8F4] border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FROM APPLICATION TO ARRIVAL</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-2xl">
            A student journey we handle end-to-end.
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
              <p className="mt-2 text-xs leading-relaxed text-forest/75">{s.desc}</p>
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
        '"Two weeks at Cambridge changed how I see my future. I arrived shy about my ideas and left pitching to a room of peers."',
      author: "Ananya Iyer",
      role: "STUDENT · CHENNAI, INDIA",
    },
    {
      quote:
        '"The Girton programme was the first time I sat in a real Cambridge lecture. It made my university applications feel possible."',
      author: "Oluwaseun Adeyemi",
      role: "UNDERGRADUATE · LAGOS, NIGERIA",
    },
    {
      quote:
        '"As parents, the pastoral care and daily updates gave us complete peace of mind — and our son came home a different young man."',
      author: "Mrs. Fatima Al-Zuwaidi",
      role: "PARENT · DUBAI, UAE",
    },
  ]

  return (
    <section className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FROM OUR STUDENTS & PARENTS</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-5xl">
            Trusted by families across four continents.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-cream/15 bg-forest-deep/60 p-8 backdrop-blur-sm"
            >
              <div>
                <Quote className="h-8 w-8 text-gold/40 mb-4" />
                <p className="text-sm leading-relaxed text-cream/90 italic">{r.quote}</p>
              </div>

              <div className="mt-8 border-t border-cream/10 pt-4">
                <p className="text-sm font-bold text-gold">{r.author}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cream/60">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FamilyConcierge() {
  const items = [
    {
      icon: <FileText className="h-5 w-5 text-gold" />,
      title: "Visa & invitation letters",
      desc: "Formal invitation letters and supporting documents for UK student visitor visa applications.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-gold" />,
      title: "24/7 pastoral care",
      desc: "DBS-checked residential team, on-college grounds throughout the programme, with daily parent updates.",
    },
    {
      icon: <Languages className="h-5 w-5 text-gold" />,
      title: "Multilingual admissions",
      desc: "Enquiries answered in English, Arabic, French, Hindi and Chinese. Family calls in translation on request.",
    },
    {
      icon: <Utensils className="h-5 w-5 text-gold" />,
      title: "Dietary & faith needs",
      desc: "Halal, vegetarian, Kosher and Jain menus at every meal. Prayer rooms arranged at college buildings.",
    },
  ]

  return (
    <section id="family" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FOR PARENTS & SCHOOLS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl leading-tight">
              Everything a family needs — before boarding.
            </h2>
            <p className="mt-6 text-sm text-forest/80 leading-relaxed">
              Sending a young person abroad is a big decision. Our concierge team manages visas, travel, pastoral care and communication so students arrive ready to learn and parents stay informed at every step.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-forest/10 bg-white shadow-sm p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-forest-deep">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-forest/75">{item.desc}</p>
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
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">RESERVE YOUR SEAT</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          Applications open for Summer 2026.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-cream/80 max-w-xl mx-auto">
          Seats at Hughes Hall and Girton College are limited and fill six to nine months in advance. Apply today and our admissions team will be in touch within two working days.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-forest transition-all hover:bg-gold/90 hover:scale-105 shadow-xl shadow-gold/10"
          >
            APPLY FOR 2026 <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/70 hover:text-cream transition-colors"
          >
            OR VIEW ALL PROGRAMMES →
          </a>
        </div>
      </div>
    </section>
  )
}
