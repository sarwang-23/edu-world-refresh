import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Lightbulb, Users, Globe2, ChevronLeft, ChevronRight, Star, GraduationCap, Building2, BookOpen, Handshake } from 'lucide-react'
import { Footer } from './index'
import { useState } from 'react'

export const Route = createFileRoute('/programmes/finland')({
  head: () => ({
    meta: [
      { title: 'Finland Education Study Visit — Global Edu Lab' },
      { name: 'description', content: 'An immersive 5-day study visit to Finland — learn from the world\'s top-performing education system through school visits, policy sessions, and expert faculty interactions.' },
      { property: 'og:title', content: 'Finland Education Study Visit' },
      { property: 'og:description', content: 'Experience the Finnish education miracle first-hand. School visits, policy dialogues, and leadership workshops in Helsinki and Espoo.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <ExperienceSection />
      <WhoShouldEnroll />
      <Schedule />
      <Testimonials />
      <ProgrammeDetails />
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
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">School Leaders Programme</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Finland Education Study Visit
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              Discover the World's Most Celebrated Education System — From the Inside
            </p>
            <p className="mt-5 text-[15px] text-forest/65 leading-relaxed max-w-lg">
              The Finland Education Study Visit is a 5-day immersive experience in Helsinki and Espoo — the heart of the world's best education system. Observe Finnish schools in action, meet policy architects, engage with leading education researchers and return with actionable insights to transform your school.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> 15th–19th September, 2026
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Helsinki & Espoo, Finland
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300"
              >
                View Schedule
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 aspect-[4/3] bg-gradient-to-br from-blue-900 to-sky-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <BookOpen className="h-20 w-20 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold opacity-90">Finnish School Visit</p>
                  <p className="text-[15px] opacity-70 mt-1">Helsinki, Finland</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">GEL Certified</p>
                <p className="text-[14px] text-forest/55 mt-0.5">Certificate of Participation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const pillars = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Inside Finnish Schools',
      items: ['Observe real Finnish classrooms in action', 'Discussions with Finnish teachers & headteachers', 'Understand the "less is more" pedagogical philosophy'],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Policy & Research Insights',
      items: ['Seminars with Finnish education policymakers', 'Sessions at the University of Helsinki Faculty of Education', 'Research-backed strategies for school improvement'],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: 'Global Education Dialogue',
      items: ['Connect with school leaders from across Asia & Europe', 'Networking events with Finnish education innovators', 'Lifelong membership of the GEL Finland Alumni Network'],
    },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">What You Will Experience</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Experience learning, the Finnish way!</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 border border-forest/8 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-gold group-hover:bg-gold/10 transition-colors duration-300">{p.icon}</div>
              <h3 className="text-lg font-bold text-forest-deep mb-4">{p.title}</h3>
              <ul className="space-y-2.5">
                {p.items.map((item, k) => (
                  <li key={k} className="flex items-start gap-2.5 text-[15px] text-forest/70 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{item}
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

function WhoShouldEnroll() {
  const profiles = [
    { title: 'School Owners & Principals', desc: 'Those who want to understand what makes Finland\'s school system the best in the world and apply those insights to their own institutions.', icon: <Building2 className="h-6 w-6" />, color: 'bg-forest' },
    { title: 'Curriculum & Pedagogy Leaders', desc: 'Heads of Department and curriculum designers who want to reform their teaching practices through the Finnish pedagogical lens.', icon: <GraduationCap className="h-6 w-6" />, color: 'bg-gold' },
    { title: 'Education Policy Enthusiasts', desc: 'Leaders who want to understand how systemic, policy-driven reforms can be implemented at the school and district level.', icon: <Handshake className="h-6 w-6" />, color: 'bg-forest/60' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Attend</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Who should enroll for this programme?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden group">
              <div className={"h-1.5 w-full " + p.color} />
              <div className="p-8">
                <div className={"mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl " + p.color + " text-white shadow-lg"}>{p.icon}</div>
                <h3 className="text-[17px] font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const days = [
    { day: 'Day 1', location: 'Arrival in Helsinki', items: ['Welcome reception & orientation', 'Programme overview and cohort introductions'] },
    { day: 'Day 2', location: 'School Observations', items: ['Visits to 2 Finnish comprehensive schools', 'Classroom observations & teacher dialogues', 'Debrief session: Key takeaways'] },
    { day: 'Day 3', location: 'University & Policy', items: ['Seminar at University of Helsinki Faculty of Education', 'Session with Finnish National Agency for Education', 'Evening networking dinner'] },
    { day: 'Day 4', location: 'Innovation & Leadership', items: ['Visit to Espoo Innovation Hub & STEAM school', 'Leadership workshop: Adapting Finnish lessons', 'Certificate ceremony & gala dinner'] },
    { day: 'Day 5', location: 'Departure', items: ['Final reflections & action planning session', 'Check out & departures'] },
  ]
  return (
    <section id="schedule" className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Programme Itinerary</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Programme Schedule <span className="text-forest/40 font-medium text-2xl">(Indicative)</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {days.map((d, i) => (
            <div key={i} className={"rounded-2xl border p-6 transition-all duration-300 " + (i === 2 ? 'border-gold/40 bg-white shadow-lg ring-1 ring-gold/20' : 'border-forest/10 bg-white hover:border-gold/30 hover:shadow-md')}>
              <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest/40">{d.day}</span>
              <h3 className="text-[15px] font-bold text-gold mt-1 mb-3">{d.location}</h3>
              <ul className="space-y-2">
                {d.items.map((it, k) => (
                  <li key={k} className="flex items-start gap-2 text-[14px] text-forest/70 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-forest/30 shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[14px] italic text-forest/40">*This is a preliminary itinerary. A complete itinerary will be provided 30 days before the programme.</p>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Sunita Krishnaswamy', school: 'Headmistress, Greenfields International School, Bengaluru', quote: 'Walking through a Finnish school and seeing the joy, the autonomy, and the trust between teachers and students was profoundly moving. GEL made this possible and the programme was impeccably organised.', initials: 'SK' },
    { name: 'Vikram Anand', school: 'Director, Anand School Group, Chennai', quote: 'The Finland visit was a career-defining experience. The research sessions at the University of Helsinki and the school observations gave me a blueprint for school reform I\'ve been building ever since.', initials: 'VA' },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Participant Stories</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep mb-16">What participants say about our programme?</h2>
        <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-forest-deep to-forest flex items-center justify-center text-2xl font-bold text-white shadow-xl mb-6">{t.initials}</div>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
        </div>
        <blockquote className="text-[15px] leading-relaxed text-forest/70 max-w-2xl mx-auto italic mb-6">"{t.quote}"</blockquote>
        <p className="font-bold text-forest-deep">{t.name}</p>
        <p className="text-[14px] text-forest/50 mt-1">{t.school}</p>
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

function ProgrammeDetails() {
  const details = [
    { label: 'Duration', value: '5 Days Immersive Programme' },
    { label: 'Location', value: 'Helsinki & Espoo, Finland' },
    { label: 'Cohort Size', value: 'Limited to 24 Delegates' },
    { label: 'Certificate', value: 'GEL Certificate of Participation' },
  ]

  const inclusions = [
    'All school visits, seminars and leadership workshops',
    'Accommodation for 4 nights at a premium Helsinki hotel',
    'Daily breakfast and in-programme lunches',
    'All in-programme cultural dinners & networking events',
    'University of Helsinki faculty session access',
    'Local transport during programme activities',
    'Certificate of participation ceremony',
  ]

  const exclusions = [
    'International flights and Visa costs',
    'Personal meals not mentioned in the itinerary',
    'Travel insurance (strongly recommended)',
  ]

  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Programme Details</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Everything you need to know.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {details.map((d, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-forest/10 hover:border-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] mb-2 text-forest/40">{d.label}</p>
              <p className="text-[15px] font-bold text-forest-deep">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8 bg-forest-deep text-white border border-forest-deep relative overflow-hidden shadow-xl">
               <div className="absolute top-6 right-6 text-gold opacity-50"><Star className="h-6 w-6 fill-gold"/></div>
               <p className="text-[15px] font-bold uppercase tracking-[0.2em] mb-2 text-gold">Course Fees</p>
               <p className="text-[24px] font-bold text-white mb-3">Early bird starts at 1,800 EUR</p>
               <span className="inline-block text-[14px] font-semibold text-white/70">✦ Limited seats available</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm flex-1">
              <div className="mb-10">
                <h3 className="text-[18px] font-bold text-forest-deep mb-5">Inclusions</h3>
                <ul className="space-y-3.5">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-forest/75 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[18px] font-bold text-forest-deep mb-5">Exclusions</h3>
                <ul className="space-y-3.5">
                  {exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-forest/75 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative text-center text-white p-8">
              <BookOpen className="h-24 w-24 mx-auto mb-6 opacity-80" />
              <p className="text-2xl font-bold mb-2">Finnish Education</p>
              <p className="text-[15px] opacity-70">World's most celebrated school system</p>
              <p className="text-[15px] opacity-60 mt-2">Helsinki & Espoo, Finland</p>
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
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Enroll</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Bring Finland's education miracle to your school.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Applications open for the September 2026 cohort. Limited seats — secure yours today.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/school-leaders" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/50 transition-all duration-300">
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
