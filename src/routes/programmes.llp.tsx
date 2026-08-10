import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Lightbulb, Users, Globe2, ChevronLeft, ChevronRight, Star, GraduationCap, Building2, Landmark, Handshake } from 'lucide-react'
import { Footer } from './index'
import { useState } from 'react'
import person11Img from '../assets/person11.jpg'
import person12Img from '../assets/person12.jpg'
import londonHeroImg from '../assets/executive-education.jpg'
import londonDetailsImg from '../assets/cambridge_7.jpg'
import { SharedTestimonials } from '@/components/SharedTestimonials';

export const Route = createFileRoute('/programmes/llp')({
  head: () => buildMeta("/programmes/llp"),
  component: Page,
})

function Page() {
  const llpTestimonials = [
    {
      q: "Walking through the Houses of Parliament and discussing education policy with British parliamentarians was an experience I'll carry for life. GEL delivered an impeccably curated week that elevated my entire perspective on school leadership.",
      a: "Dr. Meena Subramaniam",
      r: "Principal, Delhi Public School, Hyderabad",
      tag: "London Programme",
      img: person11Img,
      featured: true,
    },
    {
      q: "The London programme gave me access to institutions and conversations that I simply couldn't have arranged on my own. The independent school visits and Westminster policy dialogue were extraordinary. Highly recommended for any serious school leader.",
      a: "Arjun Mehta",
      r: "School Director, Mehta Foundation Schools, Mumbai",
      tag: "London Programme",
      img: person12Img,
      featured: false,
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <ExperienceSection />
      <WhoShouldEnroll />
      <Schedule />
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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">School Leaders Programme</span>
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              London School Leadership Programme
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest/80 leading-snug">
              Inside Britain's Education Policy Engine — From Westminster to the Classroom
            </p>
            <p className="mt-5 text-[15px] text-forest/80 leading-relaxed max-w-lg">
              The London School Leadership Programme (LLP) is a premium 5-day executive experience in the heart of Britain's capital. Visit the Houses of Parliament, meet policy makers, explore leading independent and state schools, and return with a global leadership perspective anchored in British institutional excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[15px] text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-gold" /> Flexible & Customizable Dates
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold" /> London, United Kingdom
              </span>
            </div>
            <div className="mt-10 flex gap-3.5 flex-wrap sm:flex-nowrap items-center">
              <Link
                to="/apply-now" search={{ source: "London School Leadership Programme" }}
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 sm:px-8 py-4 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-lg shadow-forest/20 whitespace-nowrap shrink-0"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 sm:px-7 py-4 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:border-forest-deep transition-all duration-300 whitespace-nowrap shrink-0"
              >
                View Schedule
              </a>
            </div>
          </div>
          
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 group">
              <img src={londonHeroImg} alt="London School Leadership Programme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/30 via-transparent to-forest-deep/60" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold mb-1">UK Policy & Governance</p>
                  <p className="text-[16px] font-bold">London, United Kingdom</p>
                </div>
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
      icon: <Landmark className="h-8 w-8" />,
      title: 'British Policy & Governance',
      items: ['Visit the Houses of Parliament & meet MPs', 'Policy dialogues on the British education system', 'Understand Ofsted, curriculum frameworks and school governance'],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Premier School Visits',
      items: ['Visits to top-ranked independent and state schools', 'Discussions with British headteachers & governors', 'Observe British pedagogical models in real classrooms'],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: 'Global Leadership Network',
      items: ['London networking dinners with senior educators', 'Interactions with global school leaders & policy experts', 'Lifelong GEL London Leadership Alumni membership'],
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
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Experience leadership, the London way!</h2>
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
    { title: 'School Owners & Principals', desc: 'Those who want to benchmark their institution against the British independent school model and understand global education governance.', icon: <Building2 className="h-6 w-6" />, color: 'bg-forest' },
    { title: 'Next-gen Education Leaders', desc: 'Aspiring leaders who want exposure to Westminster policy dialogues, British boarding schools and international school governance.', icon: <GraduationCap className="h-6 w-6" />, color: 'bg-gold' },
    { title: 'Education Policy Advisors', desc: 'Those who want to understand how British education policy drives school performance and what lessons can be applied in the Indian context.', icon: <Handshake className="h-6 w-6" />, color: 'bg-forest/60' },
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
    { day: 'Day 1', location: 'Arrival in London', items: ['Welcome reception & programme orientation', 'Evening networking dinner with the cohort'] },
    { day: 'Day 2', location: 'Westminster & Policy', items: ['Visit to Houses of Parliament', 'Briefing session with education policy experts', 'Westminster policy dialogue on school standards'] },
    { day: 'Day 3', location: 'School Immersions', items: ['Visits to 2 leading London independent schools', 'Headteacher Q&A and classroom observations', 'Networking dinner with senior British educators'] },
    { day: 'Day 4', location: 'Leadership & London', items: ['Leadership workshop: Adapting British governance', 'City of London tour & cultural programme', 'Formal award dinner & certificate ceremony'] },
    { day: 'Day 5', location: 'Departure', items: ['Final reflection & action planning session', 'Check out & departures'] },
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


function ProgrammeDetails() {
  const details = [
    { label: 'Duration', value: '5 Days Immersive Programme' },
    { label: 'Location', value: 'London, United Kingdom' },
    { label: 'Cohort Size', value: 'Limited to 28 Delegates' },
    { label: 'Certificate', value: 'GEL Certificate of Participation' },
  ]

  const inclusions = [
    'All school visits, workshops, policy dialogues & sessions',
    'Houses of Parliament visit & briefing access',
    'Accommodation for 4 nights at a premium Central London hotel',
    'Daily breakfast and in-programme lunches',
    'All cultural dinners & networking events',
    'City of London cultural excursion',
    'Certificate of participation ceremony & formal award dinner',
  ]

  const exclusions = [
    'International flights and UK Visa costs',
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
            <img src={londonDetailsImg} alt="London Programme details" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
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
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-tight">Bring London's leadership excellence to your school.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-relaxed max-w-xl mx-auto">Get in touch to tailor the programme dates and details to your institution's needs.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link to="/apply-now" search={{ source: "London School Leadership Programme" }} className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-lg">
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
