import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from './index'
import {
  ArrowUpRight,
  Lightbulb,
  Hammer,
  TrendingUp,
  Globe2,
  Users,
  Zap,
  Quote,
  CheckCircle2,
  Rocket,
  BookOpen,
  Shield,
  Handshake,
} from 'lucide-react'

const placeholderImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
const placeholderImg2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
const placeholderImg3 = "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80"
const placeholderImg4 = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"

export const Route = createFileRoute('/entrepreneurship')({
  component: EntrepreneurshipPage,
})

function EntrepreneurshipPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <PillarsStrip />
      <Programmes />
      <FounderJourney />
      <Ecosystem />
      <Community />
      <Footer />
    </div>
  )
}

function Hero() {
  const pills = [
    { t: "Founders Programme", icon: <Lightbulb className="h-3 w-3" /> },
    { t: "Cambridge & Global", icon: <Globe2 className="h-3 w-3" /> },
  ]
  const stats = [
    { label: "Launchpad Ideas", icon: <Rocket className="h-4 w-4" />, val: "Turn ideas into viable ventures." },
    { label: "Expert Mentorship", icon: <Users className="h-4 w-4" />, val: "Learn from founders, investors and experts." },
    { label: "Global Ecosystem", icon: <Globe2 className="h-4 w-4" />, val: "Access Cambridge networks, partners and markets." },
    { label: "Real Impact", icon: <TrendingUp className="h-4 w-4" />, val: "Build scalable ventures that matter today." },
  ]
  return (
    <section className="relative border-b border-border/60 bg-cream overflow-hidden pb-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mx-auto max-w-7xl px-6 pb-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start pt-0 mt-0">
          <div className="mt-0 pt-0">
            <div className="flex flex-wrap gap-2 mb-8">
              {pills.map((p) => (
                <span key={p.t} className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 backdrop-blur-sm px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-deep shadow-sm">
                  {p.icon} {p.t}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[5rem] leading-[1.05]">
              Entrepreneur<span className="text-gold">ship</span>
            </h1>
            <p className="mt-6 text-2xl font-serif italic text-gold">Ideas. Innovation. Impact.</p>
            <p className="mt-3 text-forest/70 font-medium text-lg uppercase tracking-widest text-[11px]">From campus to global markets.</p>
            <p className="mt-8 text-sm leading-relaxed text-forest/70 max-w-lg">
              Empowering the next generation of founders and innovators with world-class programmes, mentorship and direct access to Cambridge's innovation ecosystem. <span className="font-semibold text-forest-deep">This is where research, capital and entrepreneurial energy meet.</span>
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="group relative inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(20,40,30,0.3)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Explore Programmes <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest-deep to-forest opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 backdrop-blur-sm px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-deep transition-all hover:bg-forest/5 hover:border-forest/40">
                Connect With Our Team
              </Link>
            </div>
          </div>
          <div className="relative mt-16 flex gap-4 h-[480px]">
            {/* Left tall panel - dark green with stats */}
            <div className="relative flex-[3] overflow-hidden rounded-[2rem] bg-forest-deep shadow-2xl border border-white/10">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-bold text-forest-deep tracking-[0.2em] uppercase">100+ Startups</span>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8">
                <div className="text-center">
                  <p className="text-6xl font-bold text-gold leading-none">5K+</p>
                  <p className="text-[11px] text-cream/60 mt-2 uppercase tracking-widest font-semibold">Entrepreneurs Trained</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="text-6xl font-bold text-cream leading-none">£2M+</p>
                  <p className="text-[11px] text-cream/60 mt-2 uppercase tracking-widest font-semibold">Funding Raised</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="text-6xl font-bold text-gold leading-none">18</p>
                  <p className="text-[11px] text-cream/60 mt-2 uppercase tracking-widest font-semibold">Countries Reached</p>
                </div>
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <p className="text-[12px] font-bold text-cream">Founder Cohort 2025 · Open</p>
                <p className="text-[10px] text-cream/60 mt-1 uppercase tracking-widest">Cambridge · London · Singapore</p>
              </div>
            </div>
            {/* Right panel - scrolls down (reverse) */}
            <div className="relative flex-[2] overflow-hidden rounded-[2rem] bg-forest-deep shadow-2xl border border-white/10 h-[480px]">
              <div className="absolute inset-0 flex flex-col h-max" style={{animation: 'marquee-y 15s linear infinite reverse'}}>
                <img src={placeholderImg3} alt="Ecosystem" className="w-full h-[480px] object-cover shrink-0" />
                <img src={placeholderImg4} alt="Pitch" className="w-full h-[480px] object-cover shrink-0" />
                <img src={placeholderImg3} alt="Ecosystem" className="w-full h-[480px] object-cover shrink-0" />
                <img src={placeholderImg4} alt="Pitch" className="w-full h-[480px] object-cover shrink-0" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center">
                <p className="text-3xl font-bold text-gold">35+</p>
                <p className="text-[10px] text-cream/90 mt-1 uppercase tracking-widest font-semibold">Funded Startups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarsStrip() {
  const stats = [
    { label: "Launchpad Ideas", icon: <Rocket className="h-4 w-4" />, val: "Turn ideas into viable ventures." },
    { label: "Expert Mentorship", icon: <Users className="h-4 w-4" />, val: "Learn from founders, investors and experts." },
    { label: "Global Ecosystem", icon: <Globe2 className="h-4 w-4" />, val: "Access Cambridge networks, partners and markets." },
    { label: "Real Impact", icon: <TrendingUp className="h-4 w-4" />, val: "Build scalable ventures that matter today." },
    { label: "Innovation Hub", icon: <Zap className="h-4 w-4" />, val: "Powered by Cambridge's best minds." },
    { label: "Cambridge Backed", icon: <CheckCircle2 className="h-4 w-4" />, val: "Trusted by world-class institutions." },
  ]
  return (
    <section className="bg-forest-deep border-b border-white/10 py-4 overflow-hidden relative flex flex-col items-center">
      {/* Top Centre Title */}
      <div className="z-20 mb-4">
        <h2 className="px-6 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.25em] text-gold whitespace-nowrap flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Our Core Pillars
        </h2>
      </div>

      {/* Marquee Container - Right to Left (reverse) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-forest-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-forest-deep to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee-reverse">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-deep transition-all duration-300 shrink-0">
                {s.icon}
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-cream uppercase tracking-widest whitespace-nowrap">{s.label}</h4>
                <p className="text-[10px] text-cream/50 whitespace-nowrap font-medium">{s.val}</p>
              </div>
              <span className="ml-6 text-white/15 text-lg shrink-0">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function Programmes() {
  const progs = [
    { 
      title: "Zero-to-One Ideation Weekend", 
      desc: "An immersive experience for students, workers and professionals to solve real-world challenges.", 
      img: placeholderImg,
      link: "/entrepreneurship/zero-to-one",
      stats: [{i: <BookOpen className="w-3 h-3"/>, t: "48 Hours"}, {i: <Globe2 className="w-3 h-3"/>, t: "Cambridge"}]
    },
    { 
      title: "Startup Accelerator (12 Months)", 
      desc: "Structured cohorts for early-stage startups with mentorship, workshops and investor connections.", 
      img: placeholderImg2,
      link: "/entrepreneurship/accelerator",
      stats: [{i: <BookOpen className="w-3 h-3"/>, t: "12 Months"}, {i: <Globe2 className="w-3 h-3"/>, t: "Hybrid"}]
    },
    { 
      title: "Mentorship & Founder Network", 
      desc: "Private introductions and access to our global community of founders, alumni and industry experts.", 
      img: placeholderImg3,
      link: "/entrepreneurship/mentorship",
      stats: [{i: <BookOpen className="w-3 h-3"/>, t: "Ongoing"}, {i: <Globe2 className="w-3 h-3"/>, t: "Global"}]
    },
    { 
      title: "Demo Day & Investor Connect", 
      desc: "Pitch to investors, corporates and partners. Opportunities for funding, pilots and global expansion.", 
      img: placeholderImg4,
      link: "/entrepreneurship/demo-day",
      stats: [{i: <BookOpen className="w-3 h-3"/>, t: "Twice a Year"}, {i: <Globe2 className="w-3 h-3"/>, t: "Cambridge"}]
    },
  ]
  return (
    <section className="bg-[#FDFBF7] py-32 border-b border-border/60 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gold before:h-px before:w-12 before:bg-gradient-to-r before:from-transparent before:to-gold/50 after:h-px after:w-12 after:bg-gradient-to-l after:from-transparent after:to-gold/50">
            OUR ENTREPRENEURSHIP PROGRAMMES
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-forest-deep md:text-[3rem]">
            Four routes from <span className="font-serif italic text-gold">idea to impact.</span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {progs.map((p) => (
              <div key={p.title} className="w-[85vw] sm:w-[380px] lg:w-[320px] shrink-0 snap-center group rounded-[2rem] border border-forest/10 bg-white flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(20,40,30,0.1)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-48 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-gold border-2 border-white flex items-center justify-center text-forest-deep shadow-lg group-hover:rotate-12 transition-transform">
                      <Rocket className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-forest-deep leading-tight mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-xs text-forest/70 leading-relaxed mb-8 flex-1">{p.desc}</p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-forest/10 mb-6 group-hover:border-gold/20 transition-colors">
                    {p.stats.map((s, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[9px] text-forest/60 uppercase font-bold tracking-wider">
                        <span className="text-gold">{s.i}</span> {s.t}
                      </div>
                    ))}
                  </div>

                  <Link to={p.link} className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest/5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-forest-deep group-hover:bg-forest-deep group-hover:text-cream transition-colors w-full">
                    LEARN MORE <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderJourney() {
  return (
    <>
      <section className="bg-forest py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="lg:sticky lg:top-32 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">THE FOUNDER JOURNEY</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-cream md:text-[3.5rem] leading-[1.05]">
              Five stages, from <span className="font-serif italic text-gold relative inline-block">spark<div className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full" /></span> to scale.
            </h2>
            <p className="mt-6 text-sm text-cream/70 max-w-md leading-relaxed">
              A structured arc that meets founders wherever they are — from first idea to companies scaling internationally. Every step is backed by Cambridge faculty, funding networks and active investors.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              <Link to="/contact" className="flex items-center gap-2 hover:text-cream transition-colors group">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><ArrowUpRight className="w-3 h-3" /></div>
                PORTFOLIO
              </Link>
              <Link to="/contact" className="flex items-center gap-2 hover:text-cream transition-colors group">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><Globe2 className="w-3 h-3" /></div>
                GLOBAL REACH
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {[
              { n: '01', t: 'Discover', d: 'Map the problem space, meet peers and mentors, and clarify the mission worth building.' },
              { n: '02', t: 'Ideate', d: 'Uncover real needs with Cambridge faculty and validate through customer conversations.' },
              { n: '03', t: 'Build', d: 'Prototype, ship and MVP and iterate against real needs inside the accelerator sprints.' },
              { n: '04', t: 'Fund', d: 'Investor readiness, pitch decks and warm intros to angels, funds and family offices.' },
              { n: '05', t: 'Scale', d: 'Cross-border expansion, distribution partners and hiring across our global chapters.' }
            ].map((s, i) => (
              <div key={s.n} className={`group relative rounded-3xl border border-forest/10 bg-cream p-6 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden ${i === 4 ? 'sm:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-full border border-forest/10 bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-gold group-hover:border-gold transition-all duration-300 shadow-sm">
                    <Rocket className="w-4 h-4 text-forest-deep group-hover:text-forest-deep transition-colors" />
                  </div>
                  <span className="text-2xl font-serif text-forest/20 group-hover:text-gold transition-colors">{s.n}</span>
                </div>
                <h3 className="text-lg font-bold text-forest-deep mb-2 relative z-10">{s.t}</h3>
                <p className="text-xs text-forest/70 leading-relaxed relative z-10">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

function Ecosystem() {
  const ecosystemPartners = [
    {
      logo: (
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#9c2727]" fill="#9c2727" />
          <span className="font-serif font-bold text-forest-deep text-[13px] leading-tight text-left uppercase">
            University of<br />Cambridge
          </span>
        </div>
      ),
      role: "World-class research and talent",
    },
    {
      logo: (
        <span className="font-serif text-[#1D2F5F] font-black tracking-widest uppercase text-[15px] leading-tight text-center">
          KING'S<br />E-LAB
        </span>
      ),
      role: "Entrepreneurship community & support",
    },
    {
      logo: (
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#9c2727]" fill="#9c2727" />
          <span className="font-serif text-forest-deep font-semibold text-[11px] tracking-wide leading-tight uppercase text-left">
            CAMBRIDGE<br />JUDGE BUSINESS SCHOOL
          </span>
        </div>
      ),
      role: "Leadership, innovation and business expertise",
    },
    {
      logo: (
        <span className="font-serif font-black text-forest-deep text-[17px] leading-tight text-center uppercase tracking-wide">
          FRUGAL<br /><span className="font-bold text-[15px] capitalize tracking-normal">AI hub</span>
        </span>
      ),
      role: "AI for impact and sustainable innovation",
    },
    {
      logo: (
        <span className="font-sans font-bold text-forest-deep text-[15px] leading-tight text-center">
          Investors &<br />Angels
        </span>
      ),
      role: "Access to funding and networks",
    },
    {
      logo: (
        <div className="flex flex-col items-center">
          <Handshake className="w-8 h-8 text-forest-deep mb-1.5" />
          <span className="font-sans font-bold text-forest-deep text-[13px] leading-tight">Industry Partners</span>
        </div>
      ),
      role: "Pilots, scale and market access",
    },
  ]

  return (
    <section className="bg-[#FDFBF7] py-8 border-b border-border/60 overflow-hidden">
      <h2 className="mb-6 text-center text-xl md:text-[22px] font-bold tracking-tight text-forest-deep">
        Powered by the Cambridge Innovation Ecosystem
      </h2>

      {/* Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee">
          {[...ecosystemPartners, ...ecosystemPartners, ...ecosystemPartners].map((p, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-10 shrink-0 group min-w-[200px]">
              <div className="h-14 flex items-center justify-center mb-3">
                {p.logo}
              </div>
              <p className="text-[10px] text-forest/60 leading-relaxed font-medium text-center max-w-[140px]">
                {p.role}
              </p>
              <span className="mt-4 text-forest/15 text-xl shrink-0">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  const testimonials = [
    { q: "Zero-to-One gave us clarity, mentors and the confidence to build our MVP in just 48 hours.", a: "Avani Patel", r: "CO-FOUNDER, EDTECH HUB \u00b7 IDEATION ALUMNI" },
    { q: "The accelerator and mentor network helped us secure our first round of funding.", a: "Ravi Kapoor", r: "FOUNDER, GREENGRID \u00b7 ACCELERATOR COHORT" },
    { q: "The Cambridge ecosystem is unmatched. It opened doors we never imagined.", a: "David Lee", r: "CO-FOUNDER, DEEPSEARCH \u00b7 ACCELERATOR COHORT" },
  ]
  return (
    <section className="bg-cream pt-24 md:pt-32 pb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">VOICES FROM OUR FOUNDERS</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem] leading-[1.1]">
            Built in our programmes.<br/>
            <span className="font-serif italic text-gold relative inline-block">
              Backed by our network.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gold/30 rounded-full" />
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="group rounded-[2rem] border border-forest/10 bg-white p-10 hover:shadow-[0_20px_40px_rgba(20,40,30,0.08)] hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />
              <Quote className="h-8 w-8 text-gold/20 mb-8 group-hover:text-gold/40 transition-colors duration-500" />
              <p className="text-[13px] text-forest-deep/80 font-medium leading-relaxed mb-10 flex-1">"{t.q}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-forest-deep text-gold flex items-center justify-center font-serif text-lg font-bold">
                  {t.a.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-forest-deep leading-tight">{t.a}</p>
                  <p className="text-[9px] text-forest/50 uppercase tracking-[0.15em] font-semibold mt-1">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-forest-deep w-full py-12 md:py-16 border-t border-forest-deep/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-6 block">START YOUR ENTREPRENEURIAL JOURNEY</span>
              <h2 className="text-4xl font-bold tracking-tight text-cream md:text-[4rem] leading-[1.1] mb-6">
                Build confidently.<br />
                Innovate boldly.<br />
                <span className="text-gold">Scale globally.</span>
              </h2>
              <p className="text-[16px] text-cream/80 leading-relaxed max-w-xl font-medium">
                Be part of a global community of innovators and builders shaping the ventures — and the ideas — of the next decade.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-5 shrink-0 md:pb-2">
              <Link to="/contact" className="inline-flex items-center justify-between w-full md:w-auto min-w-[260px] gap-4 rounded-xl bg-gold px-8 py-4 text-sm font-bold text-forest-deep transition-all hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(200,160,90,0.3)]">
                Explore Programmes <ArrowUpRight className="h-5 w-5" />
              </Link>
              <a href="mailto:hello@globaledulab.com" className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/60 hover:text-gold transition-colors">
                HELLO@GLOBALEDULAB.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
