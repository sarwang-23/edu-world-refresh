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
    <section className="relative overflow-hidden bg-cream pt-12 pb-24 md:pt-16 md:pb-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-6 block">
              GRADUATE SUMMER PROGRAMME
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[4.5rem] leading-[1.05]">
              Experience Cambridge.<br />
              Expand your thinking.<br />
              <span className="text-gold">Shape what comes next.</span>
            </h1>
            <p className="mt-6 text-sm text-forest/80 leading-relaxed max-w-lg font-medium">
              An immersive academic and professional experience for ambitious students and recent graduates. Learn from leading minds, explore world-class institutions, build global connections and turn ideas into real-world impact.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#tracks" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-forest">
                Explore Programme Tracks <ArrowUpRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-forest/5">
                Register Your Interest <CalendarCheck className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-l-[3rem] overflow-hidden aspect-[4/3] md:-mr-12 shadow-2xl shadow-forest/10">
              <img src={cambridgeImg} alt="Cambridge" className="w-full h-full object-cover" />
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
  return (
    <div className="mx-auto max-w-7xl px-6 relative z-10 -mt-8">
      <div className="bg-forest-deep rounded-3xl p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center flex-1 px-2 border-r border-white/10 last:border-0">
            <div className="text-white mb-3">{f.icon}</div>
            <h4 className="text-[11px] font-bold text-white mb-2">{f.title}</h4>
            <p className="text-[10px] text-cream/70 leading-relaxed max-w-[140px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
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
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem]">Why this programme is different</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {props.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-forest/60 mb-4">{p.icon}</div>
              <h4 className="text-[11px] font-bold text-forest-deep mb-2">{p.title}</h4>
              <p className="text-[10px] text-forest/70">{p.desc}</p>
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
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem] mb-4">Experience the Cambridge Ecosystem</h2>
          <p className="text-sm text-forest/70 font-medium">More than a classroom — immerse yourself in the people, places and communities<br/>that make Cambridge a global centre of knowledge and innovation.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {elements.map((e, i) => (
            <div key={i} className="flex flex-col text-center">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 border border-forest/10">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[11px] font-bold text-forest-deep mb-2">{e.title}</h3>
              <p className="text-[10px] text-forest/70 leading-relaxed px-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-white border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem] mb-4">Choose Your Programme Track</h2>
          <p className="text-sm text-forest/70 font-medium">Three unique pathways. One unforgettable Cambridge experience.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Track 1: Entrepreneurship & AI */}
          <div className="bg-forest-deep rounded-3xl overflow-hidden flex flex-col text-white relative">
            <div className="p-8 flex-1 relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-gold mb-3 block">TRACK 1</span>
              <h3 className="text-2xl font-bold mb-4">Entrepreneurship<br/>& AI</h3>
              <p className="text-[11px] text-white/90 font-semibold leading-relaxed mb-8">
                Build ideas for an AI-enabled world and transform them into viable ventures.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Opportunity discovery & business models",
                  "AI tools and applications in real world",
                  "Product design, prototyping & validation",
                  "Startup ecosystem exposure & mentorship",
                  "Pitch your venture to a panel of experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-[10px] font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background image fade */}
            <div className="absolute top-0 right-0 w-2/3 h-1/2 opacity-20 pointer-events-none mix-blend-luminosity">
               <img src={heroImg} alt="" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-forest-deep" />
               <div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent" />
            </div>
            <div className="p-6 mt-auto">
              <div className="bg-white/10 rounded-xl py-3 px-4 flex items-center justify-center border border-white/20 group cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2 transition-all">
                  Explore Entrepreneurship & AI <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Track 2: Research */}
          <div className="bg-[#1A365D] rounded-3xl overflow-hidden flex flex-col text-white relative">
            <div className="p-8 flex-1 relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-blue-300 mb-3 block">TRACK 2</span>
              <h3 className="text-2xl font-bold mb-4">Research</h3>
              <p className="text-[11px] text-white/90 font-semibold leading-relaxed mb-8 mt-12">
                Develop research skills, explore cutting-edge topics and connect ideas with impact.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Research design & methodology",
                  "Data analysis & evidence evaluation",
                  "Interdisciplinary research exploration",
                  "Engage with researchers & labs",
                  "Present your research proposal"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-[10px] font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background image fade */}
            <div className="absolute top-0 right-0 w-2/3 h-1/2 opacity-20 pointer-events-none mix-blend-luminosity">
               <img src={studentsImg} alt="" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1A365D]" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D] to-transparent" />
            </div>
            <div className="p-6 mt-auto">
              <div className="bg-white/10 rounded-xl py-3 px-4 flex items-center justify-center border border-white/20 group cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2 transition-all">
                  Explore Research Track <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Track 3: Architecture */}
          <div className="bg-[#B47C35] rounded-3xl overflow-hidden flex flex-col text-white relative">
            <div className="p-8 flex-1 relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-orange-200 mb-3 block">TRACK 3</span>
              <h3 className="text-2xl font-bold mb-4">Architecture</h3>
              <p className="text-[11px] text-white/90 font-semibold leading-relaxed mb-8 mt-12">
                Explore architecture through design, heritage, sustainability and human-centred spaces.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Architectural study & design thinking",
                  "Sustainable design & materials",
                  "Heritage, urban design & placemaking",
                  "Site analysis & studio workshops",
                  "Present your design concept"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-200 shrink-0 mt-0.5" />
                    <span className="text-[10px] font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background image fade */}
            <div className="absolute top-0 right-0 w-2/3 h-1/2 opacity-20 pointer-events-none mix-blend-luminosity">
               <img src={cambridgeImg} alt="" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#B47C35]" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#B47C35] to-transparent" />
            </div>
            <div className="p-6 mt-auto">
              <div className="bg-white/10 rounded-xl py-3 px-4 flex items-center justify-center border border-white/20 group cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2 transition-all">
                  Explore Architecture Track <ArrowUpRight className="h-4 w-4" />
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
    { icon: <Users className="h-8 w-8" />, v: "500+", l: "Participants from 20+ countries" },
    { icon: <Building2 className="h-8 w-8" />, v: "50+", l: "Institutions, labs & innovation hubs visited" },
    { icon: <GraduationCap className="h-8 w-8" />, v: "100+", l: "Experts, academics & entrepreneurs engaged" },
    { icon: <Globe2 className="h-8 w-8" />, v: "Lasting", l: "Networks, friendships & professional growth" },
  ]
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-forest-deep mb-2">Programme Impact</h2>
            <p className="text-[11px] text-forest/70 leading-relaxed">Creating transformative learning experiences and global opportunities.</p>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="text-forest/40 mb-4">{s.icon}</div>
                  <div className="text-3xl font-bold text-forest-deep mb-2">{s.v}</div>
                  <div className="text-[9px] font-bold text-forest/70 leading-tight max-w-[120px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="pb-24 bg-cream relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-forest-deep rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          {/* Background image fade on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30">
            <img src={cambridgeImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-deep" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Your Cambridge journey starts here.</h2>
            <p className="text-sm text-primary-foreground/80">Gain knowledge, build global connections and create the future you envision.</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 relative z-10">
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-white">
                Register Your Interest <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary-foreground/10">
                Download Programme Overview <ArrowDownToLine className="h-4 w-4" />
              </button>
            </div>
            <div className="text-gold flex items-center justify-center border border-gold/30 rounded-full px-4 py-2 opacity-80 rotate-3">
              <Sparkles className="h-3 w-3 mr-2" />
              <span className="text-[9px] font-bold italic font-serif">A lifetime of impact.<br/>A summer to remember.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
