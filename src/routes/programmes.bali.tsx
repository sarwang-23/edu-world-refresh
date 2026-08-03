import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Lightbulb, Users, Globe2, ChevronLeft, ChevronRight, Star, GraduationCap, Building2, Leaf, TreePine } from 'lucide-react'
import { Footer } from './index'
import { useState } from 'react'
import bali1Img from '../assets/bali_new_1.jpg'
import bali2Img from '../assets/bali_new_2.jpg'
import bali3Img from '../assets/bali_new_3.jpg'
import bali4Img from '../assets/bali_new_4.jpg'
import bali5Img from '../assets/bali_new_5.jpg'
import person6Img from '../assets/person6.jpg'
import person7Img from '../assets/person7.jpg'
import bali6Img from '../assets/bali_new_6.jpg'
import bali7Img from '../assets/bali_new_7.jpg'
import bali8Img from '../assets/bali_new_8.jpg'
import bali9Img from '../assets/bali_new_9.jpg'

export const Route = createFileRoute('/programmes/bali')({
  head: () => ({
    meta: [
      { title: 'Bali Green School Immersive Programme — Global Edu Lab' },
      { name: 'description', content: 'An immersive study visit to the iconic Green School Bali — discover how sustainability, nature-based learning and creative curriculum design can transform your school.' },
      { property: 'og:title', content: 'Bali Green School Immersive Programme' },
      { property: 'og:description', content: 'Experience the world\'s most iconic green school and bring sustainable education principles back to your institution.' },
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
      <GallerySection />
      <ProgrammeDetails />
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
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">School Leaders Programme</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Bali Green School Immersive Programme
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              Learn Sustainability & Future-Ready Education at the World's Most Iconic Green School
            </p>
            <p className="mt-5 text-[15px] text-forest/80 leading-relaxed max-w-lg">
              The Bali Green School Immersive Programme is a transformative 5-day experience at the legendary Green School in Ubud, Bali — the world's most celebrated sustainable school. Discover nature-based learning, bamboo architecture, circular design, student-led projects and curriculum models that are redefining education globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> Flexible & Customizable Dates
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> Ubud, Bali, Indonesia
              </span>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/apply-now"
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
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-forest/15 aspect-[4/3] group">
              <img src={bali4Img} alt="Green School Bali" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-forest/8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">GEL Certified</p>
                <p className="text-[15px] text-forest/80 mt-0.5">Certificate of Participation</p>
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
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability in Education',
      items: ['Explore nature-based & project-based learning', 'Visit bamboo classrooms & green infrastructure', 'Learn circular design principles in curriculum'],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Future-Ready Leadership',
      items: ['Leadership workshops with Green School founders', 'Sessions on student-agency & self-directed learning', 'Interact with global education reformers'],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: 'Global Educator Network',
      items: ['Connect with school leaders from 20+ countries', 'Community dinners & cultural immersion', 'Become a Global Edu Lab Sustainability Alumni'],
    },
  ]
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">What You Will Experience</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Experience education, the Green School way!</h2>
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
    { title: 'School Owners & Principals', desc: 'Leaders who want to transform their school culture, integrate sustainability and bring cutting-edge pedagogical models to their institution.', icon: <Building2 className="h-6 w-6" />, color: 'bg-forest' },
    { title: 'Curriculum Designers & HoDs', desc: 'Those who want to redesign curricula using project-based, nature-connected and experiential learning frameworks.', icon: <Lightbulb className="h-6 w-6" />, color: 'bg-gold' },
    { title: 'Innovation & Eco Educators', desc: 'Teachers and leaders passionate about embedding environmental awareness, student agency, and circular thinking into school programmes.', icon: <Leaf className="h-6 w-6" />, color: 'bg-forest/60' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Who Should Attend</span>
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
    { day: 'Day 1', location: 'Arrival in Bali', items: ['Welcome & orientation at hotel', 'Evening welcome dinner with the cohort'] },
    { day: 'Day 2', location: 'Green School — Immersion', items: ['Full campus tour & bamboo architecture walk', 'Classroom observations & student project showcases', 'Session: Nature-based curriculum design'] },
    { day: 'Day 3', location: 'Deep-Dive Learning', items: ['Workshop: Project-based learning frameworks', 'Farm-to-table & circular economy session', 'Networking dinner with Green School founders'] },
    { day: 'Day 4', location: 'Leadership & Culture', items: ['Leadership workshop: Building a green school culture', 'Ubud cultural excursion & reflection walk', 'Certificate ceremony & group dinner'] },
    { day: 'Day 5', location: 'Departure', items: ['Final group debrief & action planning', 'Check out & departures'] },
  ]
  return (
    <section id="schedule" className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programme Itinerary</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Programme Schedule <span className="text-forest/70 font-medium text-2xl">(Indicative)</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {days.map((d, i) => (
            <div key={i} className={"rounded-2xl border p-6 transition-all duration-300 " + (i === 2 ? 'border-gold/40 bg-white shadow-lg ring-1 ring-gold/20' : 'border-forest/10 bg-white hover:border-gold/30 hover:shadow-md')}>
              <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70">{d.day}</span>
              <h3 className="text-[15px] font-bold text-gold mt-1 mb-3">{d.location}</h3>
              <ul className="space-y-2">
                {d.items.map((it, k) => (
                  <li key={k} className="flex items-start gap-2 text-[15px] text-forest/70 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-forest/30 shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[15px] italic text-forest/70">*This is a preliminary itinerary. A complete itinerary will be provided 30 days before the programme.</p>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Priya Menon', school: 'The Orchid School, Pune', quote: 'The Bali experience shook every preconception I had about what a school could look like. Green School has created something truly miraculous — and GEL brought us inside it. I returned with a completely refreshed vision for our institution.', img: person6Img },
    { name: 'Rajesh Nair', school: 'Principal, Kerala International School', quote: 'Five days among bamboo classrooms and student-led sustainability projects transformed the way I think about curriculum design. The immersion with Global Edu Lab was deeply impactful — both personally and professionally.', img: person7Img },
  ]
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Participant Stories</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep mb-16">What participants say about our programme?</h2>
        {/* 3 Frames Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12 w-full">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-video w-full rounded-xl bg-black/5 overflow-hidden relative border border-black/10 shadow-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center">
                  <div className="h-0 w-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black/40 border-b-[6px] border-b-transparent ml-1" />
                </div>
                <span className="text-black/40 text-[13px] font-bold uppercase tracking-widest">Video Frame</span>
              </div>
            </div>
          ))}
        </div>

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

function ProgrammeDetails() {
  const details = [
    { label: 'Duration', value: '5 Days Immersive Programme' },
    { label: 'Location', value: 'Green School, Ubud, Bali' },
    { label: 'Cohort Size', value: 'Limited to 20 Delegates' },
    { label: 'Certificate', value: 'GEL Certificate of Participation' },
  ]

  const inclusions = [
    'All sessions, workshops & guided school visits at Green School Bali',
    'Accommodation for the duration at a 4-star Ubud boutique hotel',
    'Daily breakfast at hotel',
    'All in-programme lunches and cultural dinners',
    'Ubud cultural immersion excursion',
    'Certificate of participation ceremony',
    'Pre-programme digital resource pack',
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
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programme Details</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Everything you need to know.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {details.map((d, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-forest/10 hover:border-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-[15px] font-bold uppercase tracking-[0.2em] mb-2 text-forest/70">{d.label}</p>
              <p className="text-[15px] font-bold text-forest-deep">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8 bg-forest-deep text-white border border-forest-deep relative overflow-hidden shadow-xl">
               <div className="absolute top-6 right-6 text-gold opacity-50"><Star className="h-6 w-6 fill-gold"/></div>
               <p className="text-[15px] font-bold uppercase tracking-[0.2em] mb-2 text-gold">Flexible Packages</p>
               <p className="text-[24px] font-bold text-white mb-3">Customize your cohort experience</p>
               <span className="inline-block text-[15px] font-semibold text-white/70">✦ Enquire for tailored pricing</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm flex-1">
              <div className="mb-10">
                <h3 className="text-[18px] font-bold text-forest-deep mb-5">Inclusions</h3>
                <ul className="space-y-3.5">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-forest/75 leading-relaxed">
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
                    <li key={i} className="flex items-start gap-3 text-[15px] text-forest/75 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
            <img src={bali3Img} alt="Bali Programme Details" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Enroll</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Bring the Green School spirit to your institution.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Get in touch to tailor the programme dates and details to your institution's needs.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/apply-now" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
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

function GallerySection() {
  const images = [bali1Img, bali2Img, bali3Img, bali4Img, bali5Img, bali6Img, bali7Img, bali8Img, bali9Img];
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Visual Archive</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Glimpses of Bali</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] group ${i === 4 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={img} alt={`Bali Visit ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

