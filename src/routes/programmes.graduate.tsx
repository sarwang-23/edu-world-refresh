import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDownToLine, GraduationCap, Globe2, Lightbulb, Compass, Building2, MapPin, Users, Heart, Sparkles, BookOpen, Presentation, CalendarCheck, CheckCircle2 } from 'lucide-react'
import { Footer } from './index'

import cambridgeImg from '@/assets/cambridge.jpg'
import heroImg from '@/assets/hero-classroom.jpg'
import studentsImg from '@/assets/students.jpg'
import teachersImg from '@/assets/teachers.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import schoolLeadersImg from '@/assets/school-leaders.jpg'

export const Route = createFileRoute('/programmes/graduate')({
  head: () => ({
    meta: [
      { title: 'Graduate Summer Programme | Global Education Lab' },
      { name: 'description', content: 'Experience Cambridge. Expand your thinking. Shape what comes next.' },
    ],
  }),
  component: GraduateProgramme,
})

function GraduateProgramme() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <FeaturesStrip />
      <WhyDifferent />
      <EcosystemExperience />
      <Tracks />
      <Impact />
      <BottomCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] pt-20 pb-36 md:pt-28 md:pb-44">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 bg-gold/12 text-gold text-[9px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              GRADUATE SUMMER PROGRAMME
            </span>
            <h1 className="text-[3rem] md:text-[4rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Experience Cambridge.<br />
              Expand your thinking.<br />
              <span className="font-serif italic text-gold">Shape what comes next.</span>
            </h1>
            <p className="mt-6 text-[15px] text-forest/65 leading-[1.8] max-w-md mb-10">
              An immersive academic and professional experience for ambitious students and recent graduates. Learn from leading minds, explore world-class institutions, build global connections and turn ideas into real-world impact.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#tracks" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25">
                Explore Tracks <ArrowUpRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest hover:border-gold/40 transition-all duration-300">
                Register Your Interest
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[440px]">
              <img src={cambridgeImg} alt="Cambridge" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Minds", desc: "Diverse cohort from around the world" },
    { icon: <GraduationCap className="h-6 w-6" />, title: "Learn from the Best", desc: "Academics, researchers, founders & experts" },
    { icon: <Building2 className="h-6 w-6" />, title: "Beyond the Classroom", desc: "Workshops, site visits & real experiences" },
    { icon: <Users className="h-6 w-6" />, title: "Create Lasting Impact", desc: "Skills, ideas & networks that stay with you" },
  ]
  const items = [...features, ...features, ...features]

  return (
    <section className="relative z-20 -mt-16 bg-transparent w-full px-3 md:px-6">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_40px_rgba(26,53,35,0.12)] border border-forest/8">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden py-7">
            <div className="animate-marquee gap-0">
              {items.map((f, i) => (
                <div key={i} className="flex shrink-0 items-center gap-5 px-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/25 text-gold">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-forest-deep uppercase tracking-wider">{f.title}</p>
                    <p className="text-[10px] text-forest/55 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyDifferent() {
  const props = [
    { icon: <GraduationCap className="h-6 w-6" />, title: "Academic Excellence", desc: "Engage with world-class teaching and cutting-edge research." },
    { icon: <Building2 className="h-6 w-6" />, title: "Cambridge Ecosystem", desc: "Access universities, research centres, startups, investors and innovation hubs." },
    { icon: <Presentation className="h-6 w-6" />, title: "Hands-on Learning", desc: "Interactive workshops, team projects and real-world problem solving." },
    { icon: <MapPin className="h-6 w-6" />, title: "Site Visits & Industry Exposure", desc: "Visit leading institutions, labs, companies and cultural landmarks." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Network", desc: "Build lifelong friendships and professional connections." },
    { icon: <Heart className="h-6 w-6" />, title: "Social & Cultural Experience", desc: "Explore Cambridge life, activities and the rich UK culture." },
  ]
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Key Differentiators</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">Why this programme is different.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {props.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white p-7 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.12)] hover:-translate-y-1 transition-all duration-400 cursor-default shadow-sm">
              <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-gold/8 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                {p.icon}
              </div>
              <h4 className="text-[14px] font-bold text-forest-deep mb-2 leading-tight group-hover:text-gold transition-colors duration-300">{p.title}</h4>
              <p className="text-[12px] text-forest/60 leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EcosystemExperience() {
  const elements = [
    { img: heroImg, title: "Expert-led Sessions", desc: "Learn from academics, researchers and industry leaders." },
    { img: studentsImg, title: "Workshops & Projects", desc: "Collaborate, ideate and build solutions with global peers." },
    { img: cambridgeImg, title: "Site Visits", desc: "Explore universities, labs, companies and innovation hubs." },
    { img: businessLeadersImg, title: "Startup & Research Access", desc: "Meet founders, researchers and innovators driving change." },
    { img: schoolLeadersImg, title: "Social & Cultural Activities", desc: "Punting, college visits, dinners, city tours and more." },
  ]
  return (
    <section className="py-24 bg-[#F4EFE6] relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Environment</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">Experience the Cambridge Ecosystem</h2>
          <p className="text-[14px] text-forest/55 max-w-2xl mx-auto leading-[1.75]">More than a classroom — immerse yourself in the people, places and communities that make Cambridge a global centre of knowledge and innovation.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {elements.map((e, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-forest/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 text-center bg-white">
                <h3 className="text-[12px] font-bold text-forest-deep mb-2">{e.title}</h3>
                <p className="text-[11px] text-forest/60 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Programme Tracks</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">Choose Your Programme Track</h2>
          <p className="text-[14px] text-forest/55 max-w-lg mx-auto leading-[1.75]">Three unique pathways. One unforgettable Cambridge experience.</p>
        </div>

        <div className="flex flex-col gap-10">
          
          {/* Track 1: Entrepreneurship & AI */}
          <div className="group bg-white rounded-[2rem] border border-forest/8 hover:border-gold/30 hover:shadow-[0_24px_60px_-8px_rgba(26,53,35,0.15)] hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col shadow-sm">
            <div className="p-10 flex-1 relative">
              <span className="inline-flex items-center gap-2 bg-gold/12 text-gold text-[9px] font-bold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full mb-7 border border-gold/20">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Track 1
              </span>
              <h3 className="text-[2rem] font-bold text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">Entrepreneurship<br/>& AI</h3>
              <p className="text-[13px] font-semibold text-forest/65 mb-5 tracking-wide">Build ideas. Solve problems. Create impact.</p>
              <p className="text-[13px] text-forest/60 leading-[1.7] mb-8">
                Build ideas for an AI-enabled world and transform them into viable ventures.
              </p>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
                {[
                  "Opportunity discovery & business models",
                  "AI tools and applications in real world",
                  "Product design, prototyping & validation",
                  "Startup ecosystem exposure & mentorship",
                  "Pitch your venture to a panel of experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[12px] text-forest/75">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 h-52 border-t border-forest/6">
              <img src={heroImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-forest-deep flex items-center justify-center group-hover:bg-forest transition-colors duration-300 p-6 text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] text-white flex flex-col items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                  Explore Track
                </span>
              </div>
            </div>
          </div>

          {/* Track 2: Research */}
          <div className="group bg-white rounded-[2rem] border border-forest/8 hover:border-blue-400/30 hover:shadow-[0_24px_60px_-8px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col shadow-sm">
            <div className="p-10 flex-1 relative">
              <span className="inline-flex items-center gap-2 bg-blue-500/8 text-blue-600 text-[9px] font-bold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full mb-7 border border-blue-400/20">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Track 2
              </span>
              <h3 className="text-[2rem] font-bold text-forest-deep mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">Research</h3>
              <p className="text-[13px] font-semibold text-forest/65 mb-5 tracking-wide">Ask questions. Explore. Discover.</p>
              <p className="text-[13px] text-forest/60 leading-[1.7] mb-8">
                Develop research skills, explore cutting-edge topics and connect ideas with impact.
              </p>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
                {[
                  "Research design & methodology",
                  "Data analysis & evidence evaluation",
                  "Interdisciplinary research exploration",
                  "Engage with researchers & labs",
                  "Present your research proposal"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[12px] text-forest/75">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 h-52 border-t border-forest/6">
              <img src={studentsImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-[#1A365D] flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300 p-6 text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] text-white flex flex-col items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-400/20 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                  Explore Track
                </span>
              </div>
            </div>
          </div>

          {/* Track 3: Architecture */}
          <div className="group bg-white rounded-[2rem] border border-forest/8 hover:border-orange-400/30 hover:shadow-[0_24px_60px_-8px_rgba(180,124,53,0.15)] hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col shadow-sm">
            <div className="p-10 flex-1 relative">
              <span className="inline-flex items-center gap-2 bg-orange-500/8 text-orange-600 text-[9px] font-bold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full mb-7 border border-orange-400/20">
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                Track 3
              </span>
              <h3 className="text-[2rem] font-bold text-forest-deep mb-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight">Architecture</h3>
              <p className="text-[13px] font-semibold text-forest/65 mb-5 tracking-wide">Design spaces. Shape experiences.</p>
              <p className="text-[13px] text-forest/60 leading-[1.7] mb-8">
                Explore architecture through design, heritage, sustainability and human-centred spaces.
              </p>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
                {[
                  "Architectural study & design thinking",
                  "Sustainable design & materials",
                  "Heritage, urban design & placemaking",
                  "Site analysis & studio workshops",
                  "Present your design concept"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[12px] text-forest/75">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 h-52 border-t border-forest/6">
              <img src={cambridgeImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-[#B47C35] flex items-center justify-center group-hover:bg-[#966526] transition-colors duration-300 p-6 text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] text-white flex flex-col items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center group-hover:border-orange-200/50 group-hover:bg-orange-200/20 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                  Explore Track
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Impact() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, v: "500+", l: "Participants from 20+ countries" },
    { icon: <Building2 className="h-6 w-6" />, v: "50+", l: "Institutions, labs & innovation hubs visited" },
    { icon: <GraduationCap className="h-6 w-6" />, v: "100+", l: "Experts, academics & entrepreneurs engaged" },
    { icon: <Globe2 className="h-6 w-6" />, v: "Lasting", l: "Networks, friendships & professional growth" },
  ]
  return (
    <section className="py-24 bg-[#F4EFE6] relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Programme Impact</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">Creating transformative experiences.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white p-7 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.12)] hover:-translate-y-1 transition-all duration-400 cursor-default shadow-[0_2px_12px_rgba(26,53,35,0.06)]">
              <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-gold/8 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mt-2 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-sm">
                {s.icon}
              </div>
              <div className="text-3xl font-bold text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300">{s.v}</div>
              <div className="text-[12px] text-forest/60 leading-[1.65]">{s.l}</div>
              <div className="absolute bottom-0 left-7 right-7 h-[1.5px] bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="bg-forest-deep py-32 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Sparkles key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Apply</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-[1.08] tracking-tight">Your Cambridge journey starts here.</h2>
        <p className="mt-5 text-[15px] text-cream/65 leading-[1.75] max-w-xl mx-auto">Gain knowledge, build global connections and create the future you envision. A lifetime of impact. A summer to remember.</p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <button className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25">
            Register Your Interest
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Download Overview <ArrowDownToLine className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
