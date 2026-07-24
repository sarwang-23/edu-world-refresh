import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowUpRight,
  BookOpen,
  Globe2,
  Users,
  Lightbulb,
  Award,
  FileText,
  Quote,
  MapPin,
  Calendar,
} from 'lucide-react'
import teachersImg from '../assets/teachers.jpg'

export const Route = createFileRoute('/teachers')({
  component: Teachers,
})

function Teachers() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <CollaboratorsBar />
      <WhyTeachersChooseUs />
      <StatsBar />
      <OngoingProgrammes />
      <EndToEndJourney />
      <Testimonials />
      <SchoolLeadershipSection />
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
            <BookOpen className="h-3.5 w-3.5 text-gold" /> For K-12 Teachers & Educators
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-forest md:text-5xl lg:text-[4.25rem]">
            Transform your teaching with <span className="italic text-gold font-serif">global education experts.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-forest/80 md:text-lg">
            Global Education Lab, in collaboration with seasoned academics from the University of Cambridge, pioneers a new era in professional teacher training — blending academic expertise with real-world classroom application.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Explore 2026 Programmes <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#school"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              School Cohort Support
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-forest/40">
            <span className="h-px w-10 bg-forest/30" />
            CAMBRIDGE FACULTY · ONLINE · PERSONALISED
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-forest/15">
            <img
              src={teachersImg}
              alt="Teachers Training"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">GLOBAL</p>
              <p className="mt-1 text-xl font-bold text-cream">
                A new era of professional teacher training.
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
    "Council",
    "Global School Networks",
    "Ministry Partners",
    "University of Cambridge",
    "Cambridge Faculty of Education",
    "International Boards",
    "British Council",
    "Global School Networks",
    "Ministry Partners",
    "University of Cambridge",
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

function WhyTeachersChooseUs() {
  const reasons = [
    {
      icon: <Globe2 className="h-5 w-5 text-gold" />,
      title: "World-class collaboration",
      desc: "Benefit from the lived experience of senior academics and education experts at the University of Cambridge.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-gold" />,
      title: "Global perspective, local context",
      desc: "Our programmes infuse global insights into local classrooms, preparing educators for an interconnected world.",
    },
    {
      icon: <Users className="h-5 w-5 text-gold" />,
      title: "Personalised learning paths",
      desc: "Tailored to individual needs — every teacher takes a unique journey, deepening understanding and application.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-gold" />,
      title: "Real-world application",
      desc: "Move beyond theory. Hands-on training you can immediately apply in your classroom.",
    },
  ]

  return (
    <section className="py-24 bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">WHY CHOOSE OUR TEACHER TRAINING</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-3xl mx-auto leading-tight">
            Built for educators with a <span className="italic text-gold font-serif">global mindset.</span>
          </h2>
          <p className="mt-6 text-sm text-forest/80 leading-relaxed max-w-2xl mx-auto">
            Unlike conventional courses, our programmes blend academic rigour with real-world application — enriching every teacher's journey and equipping them to lead learning in modern classrooms.
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
    { label: "100k+", sub: "STUDENTS IMPACTED" },
    { label: "20+", sub: "COUNTRIES REPRESENTED" },
    { label: "96%", sub: "WOULD RECOMMEND" },
    { label: "1000+", sub: "EDUCATORS TRAINED" },
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
      type: "ONLINE",
      audience: "SELF-PACED",
      title: "Pedagogy — Student-Centered Learning",
      location: "ONLINE",
      date: "2026 INTAKE",
      desc: "A Cambridge-informed online programme for teachers who want to move from lecturer to facilitator. Explore lesson pedagogy — with video lectures, live mentoring, and personalised progress reports.",
      link: "/programmes/teacher-training",
    },
    {
      type: "ONLINE",
      audience: "SELF-PACED",
      title: "Adaptive Teaching Skills",
      location: "ONLINE",
      date: "2026 INTAKE",
      desc: "Learn how to design differentiated instruction that meets learners where they are. Practical strategies for mixed-ability classrooms, formative assessment, and responsive teaching.",
      link: "/programmes/teacher-training",
    },
  ]

  return (
    <section id="programmes" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">OUR PROGRAMMES</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Two programmes. One transformation.
          </h2>
          <p className="mt-4 text-sm text-forest/80 max-w-2xl">
            Enrol solo or as a school cohort. Every teacher receives a personalised progress report at the end of the programme.
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
                  READ MORE <ArrowUpRight className="h-3 w-3" />
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
      desc: "Share your experience, teaching subject and full school name. We welcome applications from any country.",
    },
    {
      step: "02",
      title: "Orientation call",
      desc: "A 20-minute session to align on your teaching context, subject areas and learning goals.",
    },
    {
      step: "03",
      title: "Learn with Cambridge Faculty",
      desc: "Access recorded lectures, live discussions and reference assignments — designed by senior academics.",
    },
    {
      step: "04",
      title: "Personalised report",
      desc: "Every teacher receives a tailored progress report — shareable with school leadership to support growth.",
    },
  ]

  return (
    <section className="py-24 bg-[#FAF8F4] border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FROM ENROLMENT TO CERTIFICATE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl max-w-2xl">
            A guided professional-development journey.
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
        '"The Cambridge-led sessions completely changed how I plan lessons. My classroom feels alive again — students lead, I facilitate."',
      author: "Meera Iyer",
      role: "MATHS TEACHER · TEACHER · CHENNAI",
    },
    {
      quote:
        '"Adaptive teaching stopped being a buzzword and became a real practice. The personalised report gave my head-of-department clarity too."',
      author: "Samuel Okeke",
      role: "SECONDARY SCIENCE TEACHER · LAGOS",
    },
    {
      quote:
        '"We enrolled our whole primary team. Six months on, our lesson observation and student engagement scores have visibly improved."',
      author: "Farah Al-Mansouri",
      role: "ASSISTANT COORDINATOR · DUBAI",
    },
  ]

  return (
    <section className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FROM OUR EDUCATORS</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-5xl">
            Trusted by teachers and schools worldwide.
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

function SchoolLeadershipSection() {
  const items = [
    {
      icon: <FileText className="h-5 w-5 text-gold" />,
      title: "Personalised teacher reports",
      desc: "Every enrolled teacher receives a detailed report tracking outcomes for progress, development, and growth areas.",
    },
    {
      icon: <Users className="h-5 w-5 text-gold" />,
      title: "Cohort pricing for schools",
      desc: "Bring your whole department or school at cohort-level performance prices — institutional pricing available.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-gold" />,
      title: "Flexible, self-paced delivery",
      desc: "Fully online modules teachers can complete in their own teaching schedule — no fixed timetable.",
    },
    {
      icon: <Award className="h-5 w-5 text-gold" />,
      title: "Certificate of completion",
      desc: "A co-branded certificate from Global Education Lab, recognised across international school boards.",
    },
  ]

  return (
    <section id="school" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">FOR SCHOOL LEADERSHIP</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep md:text-5xl leading-tight">
              Bring the whole staffroom on board.
            </h2>
            <p className="mt-6 text-sm text-forest/80 leading-relaxed">
              Upskilling a full teaching team is the fastest way to change student outcomes. Our school cohort desk handles onboarding, reporting and academic mentoring for your team — end to end.
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
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">JOIN THE 2026 INTAKE</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          Elevate your teaching — starting this season.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-cream/80 max-w-xl mx-auto">
          Applications for the 2026 teacher training intake are open. Individual teachers and full school cohorts are welcome.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-forest transition-all hover:bg-gold/90 hover:scale-105 shadow-xl shadow-gold/10"
          >
            APPLY NOW <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/70 hover:text-cream transition-colors"
          >
            OR VIEW PROGRAMMES →
          </a>
        </div>
      </div>
    </section>
  )
}
