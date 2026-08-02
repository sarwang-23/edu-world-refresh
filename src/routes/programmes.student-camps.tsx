import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Rocket, GraduationCap, Star, CheckCircle2, Users, Globe2, Lightbulb, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { Footer } from './index'
import { useState } from 'react'
import person11Img from '../assets/person11.jpg'
import person12Img from '../assets/person12.jpg'

export const Route = createFileRoute('/programmes/student-camps')({
  head: () => ({
    meta: [
      { title: 'Cambridge Student Summer Camps — Global Edu Lab' },
      { name: 'description', content: 'Residential summer camps at Hughes Hall and Girton College, University of Cambridge — covering STEM, Entrepreneurship, AI and more.' },
      { property: 'og:title', content: 'Cambridge Student Summer Camps' },
      { property: 'og:description', content: 'Residential summer programmes at the University of Cambridge for students.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <StatsSection />
      <Camps />
      <WhoShouldJoin />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-4 pb-16 md:pt-4 md:pb-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10 pt-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programmes for Students &amp; Young Learners</span>
            </div>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Young Leaders<br />
              <span className="font-serif italic text-gold">Summer Programme</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              Cambridge. Classrooms. Confidence. A summer that changes everything.
            </p>
            <p className="mt-5 text-[15px] text-forest/80 leading-relaxed max-w-lg">
              Residential summer programmes at the University of Cambridge — covering Economics, Business, STEM, Public Speaking, English, Entrepreneurship and Sustainability. Live, learn and grow alongside the next generation of global leaders.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" />
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> University of Cambridge, UK
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://www.globaledulab.com/studentprogrammes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#camps"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300"
              >
                View Programmes
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div className="relative">
            <div className="rounded-3xl bg-forest-deep p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { val: '5,000+', label: 'Students Impacted', sub: 'Since 2022' },
                  { val: '2', label: 'Flagship Camps', sub: 'At Cambridge colleges' },
                  { val: '14–17', label: '& 18+ Age Groups', sub: 'Both programmes' },
                  { val: 'Upcoming', label: 'Next Intake', sub: 'Applications Open' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <p className="text-2xl font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[15px] font-bold text-cream mt-2">{s.label}</p>
                    <p className="text-[15px] text-cream/70 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20 relative z-10">
                <p className="text-[15px] font-bold text-gold uppercase tracking-wider">Hughes Hall &amp; Girton College · Cambridge</p>
                <p className="text-[15px] text-cream/80 mt-1">Prestigious residential college experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-white py-20 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Since 2022</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep leading-tight">
              5,000+ students impacted through online programmes and residential summer camps.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="rounded-2xl border border-forest/8 p-6 bg-[#F7F5F0]">
                <h3 className="text-4xl font-bold text-gold">5,000+</h3>
                <p className="mt-2 text-[15px] font-semibold uppercase tracking-widest text-forest/70">Students Impacted</p>
              </div>
              <div className="rounded-2xl border border-forest/8 p-6 bg-[#F7F5F0]">
                <h3 className="text-4xl font-bold text-gold">14–17</h3>
                <p className="mt-2 text-[15px] font-semibold uppercase tracking-widest text-forest/70">&amp; 18+ Age Groups</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 text-[15px] leading-relaxed text-forest/80">
            <p>
              Prestigious collaborations with{' '}
              <span className="font-bold text-forest-deep">Hughes Hall &amp; Girton College, University of Cambridge</span>,
              where students get a taste of Cambridge life, world-class lectures and peers from across the globe.
            </p>
            <p>
              Programmes inspire students to think globally, act locally, and prepare for higher education with confidence.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {[
                'Residential experience inside Cambridge college',
                'World-class lectures and workshops',
                'Peers from 20+ countries',
                'Certificate of participation from GEL',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-[15px] text-forest/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Camps() {
  const camps = [
    {
      badge: 'School · 14–17 Years',
      icon: <Rocket className="h-6 w-6" />,
      title: 'STEM & Entrepreneurship Summer Camp at Cambridge',
      when: '5–18',
      where: 'University of Cambridge (Hughes Hall)',
      desc: 'A two-week residential deep-dive into STEM thinking and entrepreneurial problem-solving. Students explore real-world challenges, build prototypes and pitch solutions to expert mentors.',
      link: 'https://www.globaledulab.com/sesc',
      highlights: ['STEM thinking & innovation', 'Entrepreneurship workshops', 'Pitch competition', 'Cambridge college residential'],
      color: 'from-amber-700 to-amber-500',
    },
    {
      badge: 'Graduate · 18+ Years',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Summer Programme at Girton College — Entrepreneurship & AI',
      when: '12–25',
      where: 'Girton College, Cambridge',
      desc: 'Undergraduate-level exploration of entrepreneurship and AI, taught in true Cambridge style. Participants engage with faculty, alumni founders and industry experts in one of Cambridge\'s most celebrated historic colleges.',
      link: 'https://www.globaledulab.com/gsp',
      highlights: ['AI & entrepreneurship deep-dive', 'Cambridge faculty lectures', 'Startup pitching & mentorship', 'Girton College residential'],
      color: 'from-forest-deep to-forest',
    },
  ]

  return (
    <section id="camps" className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Ongoing Programmes</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Two flagship Cambridge camps.</h2>
          <p className="mt-4 text-[15px] text-cream/80 max-w-lg mx-auto">Two distinct programmes for two age groups — both delivering an unforgettable Cambridge experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {camps.map((camp, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden group flex flex-col">
              <div className={`h-2 w-full bg-gradient-to-r ${camp.color}`} />
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold group-hover:bg-gold/20 transition-colors duration-300">
                    {camp.icon}
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-1.5 text-[15px] font-bold uppercase tracking-[0.15em] text-cream/70">
                    {camp.badge}
                  </span>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors duration-300">{camp.title}</h3>
                <p className="text-[15px] text-white/80 leading-relaxed mb-6 flex-1">{camp.desc}</p>
                <ul className="space-y-2 mb-6">
                  {camp.highlights.map((h, k) => (
                    <li key={k} className="flex items-center gap-2.5 text-[15px] text-cream/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-[15px] text-cream/80 mb-6">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" />{camp.when}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" />{camp.where}</span>
                </div>
                <a
                  href={camp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 py-3 text-[15px] font-bold uppercase tracking-[0.15em] text-cream hover:bg-gold hover:text-forest-deep hover:border-gold transition-all duration-300 w-full"
                >
                  Read More <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoShouldJoin() {
  const profiles = [
    { icon: <BookOpen className="h-6 w-6" />, title: 'School Students (14–17)', desc: 'Motivated secondary school students who want an academic challenge, global exposure and the confidence that comes from studying at Cambridge.', color: 'bg-gold' },
    { icon: <GraduationCap className="h-6 w-6" />, title: 'Undergraduates & Gap Year (18+)', desc: 'University students and gap year learners who want to explore entrepreneurship and AI in the world\'s most innovative academic environment.', color: 'bg-forest' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'International Students', desc: 'Students from across the world who want a prestigious summer experience, global peers and an academic credential from Cambridge.', color: 'bg-forest/60' },
  ]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Join</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Built for ambitious young minds.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl border border-forest/8 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className={`h-1.5 w-full ${p.color}`} />
              <div className="p-8">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.color} text-white shadow-lg`}>
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-forest/80 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const pillars = [
    { icon: <Lightbulb className="h-7 w-7" />, title: 'World-Class Academic Sessions', desc: 'Lectures, seminars and workshops delivered in the Cambridge tradition — rigorous, interactive and thought-provoking.' },
    { icon: <Users className="h-7 w-7" />, title: 'Residential College Life', desc: 'Live in a Cambridge college, dine in the great hall and experience the full Cambridge residential lifestyle that has inspired generations.' },
    { icon: <Rocket className="h-7 w-7" />, title: 'Practical Innovation Challenges', desc: 'Hands-on STEM, entrepreneurship and AI challenges where students work in teams to solve real-world problems and pitch their solutions.' },
    { icon: <Globe2 className="h-7 w-7" />, title: 'Global Peer Network', desc: 'Form lifelong friendships with students from 20+ countries. Leave Cambridge with a global network and a genuinely international worldview.' },
  ]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">The Experience</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">More than a programme — a life-defining summer.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-gold group-hover:bg-gold/10 transition-colors duration-300">{p.icon}</div>
              <h3 className="text-[16px] font-bold text-forest-deep mb-3">{p.title}</h3>
              <p className="text-[15px] text-forest/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Arya Sharma', school: 'Grade 11, Delhi Public School', quote: "The Cambridge Summer Camp was the most challenging and rewarding two weeks of my life. The mentors were brilliant, the peers were inspiring, and the college experience was something I'll never forget.", img: person11Img },
    { name: 'Lucas Ferreira', school: 'Year 12, São Paulo International School', quote: "I came to Cambridge not knowing what I wanted to study. I left with a clear plan to pursue AI and entrepreneurship. The Girton programme opened my eyes to what's possible.", img: person12Img },
    { name: 'Meera Nair', school: 'Gap Year Student, Kerala', quote: 'Being in a Cambridge college, learning from faculty and working on real startup pitches gave me the confidence I needed to apply for university with a genuine point of view.', img: person11Img },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Student Stories</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep mb-16">What our students say.</h2>
        <div className="mx-auto h-20 w-20 rounded-full overflow-hidden shadow-xl mb-6 border-2 border-gold/30"><img src={t.img} alt={t.name} className="w-full h-full object-cover" /></div>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
        </div>
        <blockquote className="text-[15px] leading-relaxed text-forest/70 max-w-2xl mx-auto italic mb-6">"{t.quote}"</blockquote>
        <p className="font-bold text-forest-deep">{t.name}</p>
        <p className="text-[15px] text-forest/70 mt-1">{t.school}</p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))} className="h-10 w-10 rounded-full border border-forest/15 flex items-center justify-center text-forest/70 hover:border-forest-deep hover:text-forest-deep transition-all">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={"h-1.5 rounded-full transition-all duration-300 " + (i === current ? 'w-6 bg-gold' : 'w-1.5 bg-forest/20')} />
            ))}
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
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Apply</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">A Cambridge summer awaits.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Applications for Upcoming cohorts are open — early acceptance is limited.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.globaledulab.com/studentprogrammes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg"
          >
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to="/school-leaders"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300"
          >
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}