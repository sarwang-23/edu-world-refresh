import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from './index'
import {
  ArrowUpRight,
  Globe2,
  Users,
  Target,
  GraduationCap,
  Building2,
  BookOpen,
  Briefcase,
  Landmark,
  Settings,
  Shield,
  Zap,
  TrendingUp,
  HeartHandshake,
  Search,
  PenTool,
  PlayCircle,
  BarChart,
  Repeat,
  Download,
  Quote,
} from 'lucide-react'
import heroImg from '../assets/hero-classroom.jpg'
import cambridgeImg from '../assets/cambridge.jpg'
import businessLeadersImg from '../assets/business-leaders.jpg'

export const Route = createFileRoute('/partner-with-gel')({
  head: () => ({
    meta: [
      { title: 'Partner with GEL | Global Education Lab' },
      { name: 'description', content: 'Partner with Global Education Lab to create transformative learning experiences and lasting impact across the globe.' },
    ],
  }),
  component: PartnerWithGelPage,
})

function PartnerWithGelPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <ImpactStatsStrip />
      <Opportunities />
      <WhyPartner />
      <PartnershipJourney />
      <TrustedByMarquee />
      <TestimonialSection />
      <CTA />
      <Footer />
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Grid overlay like homepage */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-gold/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 md:pt-16">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold text-[9px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Global Partnerships
            </span>

            <h1 className="text-[2.75rem] font-bold leading-[1.05] text-forest md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
              Partner with<br />
              <span className="text-gold">GEL</span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl font-serif italic text-forest/70 leading-tight max-w-lg">
              Let's create transformative learning experiences and lasting impact—together.
            </p>
            <p className="mt-5 text-[16px] text-forest/70 leading-[1.7] max-w-xl">
              We collaborate with institutions, organisations and ecosystems across the UK, India, the Gulf and beyond to design and deliver high-impact programmes that develop people, drive innovation and build global connections.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
              >
                Start a Conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
              >
                Explore Opportunities <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mini features */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-forest/10">
              {[
                { icon: <Globe2 className="h-5 w-5" />, title: 'Global Expertise', desc: 'Cambridge roots, worldwide reach.' },
                { icon: <Target className="h-5 w-5" />, title: 'Tailored Partnerships', desc: 'Co-created around your objectives.' },
                { icon: <TrendingUp className="h-5 w-5" />, title: 'Measurable Impact', desc: 'Outcomes that create lasting value.' },
              ].map((f, i) => (
                <div key={i}>
                  <div className="text-gold mb-2">{f.icon}</div>
                  <h4 className="text-[11px] font-bold text-forest-deep mb-1">{f.title}</h4>
                  <p className="text-[10px] text-forest/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
              <img
                src={cambridgeImg}
                alt="Cambridge Partnership"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
            </div>
            {/* Stat badge */}
            <div className="absolute -bottom-6 -left-6 bg-forest-deep border border-gold/20 p-6 rounded-2xl shadow-2xl flex flex-col justify-center min-w-[160px]">
              <span className="text-3xl font-bold font-serif text-gold italic">15+</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cream/70 mt-1">Countries Engaged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Impact Stats Strip ── */
function ImpactStatsStrip() {
  const stats = [
    { v: '500+', l: 'Leaders Empowered' },
    { v: '100+', l: 'Institutions Engaged' },
    { v: '15+', l: 'Countries Represented' },
    { v: '10+', l: 'Years of Delivery' },
  ]
  
  // Duplicate three times to create a seamless infinite scrolling effect 
  // since the CSS animation shifts by exactly -33.33%
  const duplicatedStats = [...stats, ...stats, ...stats]

  return (
    <div className="bg-white border-y border-forest/8 py-10 overflow-hidden w-full">
      {/* Container applies the marquee animation */}
      <div className="animate-marquee flex items-center">
        {duplicatedStats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center px-8 md:px-16 w-64 md:w-80 border-r border-forest/10 shrink-0 text-center">
            <span className="text-[2.2rem] font-bold text-forest-deep">{s.v}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/50 mt-1">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Opportunities ── */
function Opportunities() {
  const opps = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Schools',
      desc: 'Global exposure and future skills for students. Leadership development for educators.',
      link: '/school-leaders'
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: 'Universities',
      desc: 'Student mobility, faculty collaboration, research engagement and innovation initiatives.',
      link: '/students'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Further Education & Skills',
      desc: 'Internationalisation, applied learning, employability and skills development.',
      link: '/teachers'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Corporates & Associations',
      desc: 'Leadership programmes, innovation workshops and global market engagement.',
      link: '/business-leaders'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Governments & Ecosystems',
      desc: 'Delegations, innovation missions, policy dialogues and ecosystem development.',
      link: '/global-ventures'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Custom Partnerships',
      desc: "Have a unique idea? Let's design a programme that fits your vision.",
      link: '/contact'
    },
  ]

  return (
    <section className="bg-[#F9F7F1] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Where We Collaborate</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4 leading-[1.1]">Partnership Opportunities</h2>
          <p className="text-[15px] text-forest/65 leading-[1.75]">
            Every partnership is designed around your institution's ambition, context and audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opps.map((o, i) => (
            <div 
              key={i} 
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(200,169,81,0.15)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Subtle ambient glow behind card content */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Premium Floating Icon Badge */}
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-gold to-amber-500 shadow-[0_8px_20px_rgba(200,169,81,0.3)] text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative z-10">
                {o.icon}
              </div>
              
              <h3 className="text-[1.5rem] font-bold text-forest-deep mb-4 group-hover:text-gold transition-colors duration-400 font-serif leading-tight relative z-10">
                {o.title}
              </h3>
              
              <p className="text-[15px] text-forest/70 leading-[1.75] mb-12 flex-1 font-medium relative z-10">
                {o.desc}
              </p>
              
              {/* Ultra-Premium Arrow Link */}
              <Link 
                to={o.link} 
                className="mt-auto inline-flex items-center gap-3 border-t border-forest/10 pt-6 group-hover:border-gold/30 transition-colors duration-500"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-forest-deep group-hover:text-gold transition-colors duration-400">
                  Explore
                </span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-forest/20 group-hover:border-gold group-hover:bg-gold transition-all duration-400 overflow-hidden">
                  <ArrowUpRight className="h-4 w-4 text-forest-deep group-hover:text-white transition-colors duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why Partner ── */
function WhyPartner() {
  const reasons = [
    { icon: <Globe2 className="w-6 h-6" />, title: 'Cambridge Ecosystem Access', desc: 'Connect with world-class academics, researchers and innovators.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Experiential by Design', desc: 'Hands-on learning, simulations, challenges and real-world projects.' },
    { icon: <Users className="w-6 h-6" />, title: 'End-to-End Support', desc: 'From design and delivery to evaluation and continuous improvement.' },
    { icon: <HeartHandshake className="w-6 h-6" />, title: 'Global Connections', desc: 'Bridge the UK with India and emerging global ecosystems.' },
    { icon: <BarChart className="w-6 h-6" />, title: 'Measurable Outcomes', desc: 'Clear KPIs, impact reporting and participant transformation.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Long-Term Partnerships', desc: 'We grow with you to create sustainable and scalable impact.' },
  ]
  return (
    <section className="bg-forest-deep py-28 md:py-36 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gold/6 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/4 blur-[120px]" />
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The GEL Difference</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white mb-5 leading-[1.1]">Why partner with GEL?</h2>
          <p className="text-[15px] text-white/65 leading-[1.75]">
            An <span className="italic font-serif text-gold">international standard of delivery</span>, backed by an ecosystem that global institutions trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="group rounded-[1.75rem] border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-gold/30 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-400">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-[15px] font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{r.title}</h3>
              <p className="text-[12px] text-white/60 leading-[1.7]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Partnership Journey ── */
function PartnershipJourney() {
  const steps = [
    { icon: <Search className="w-6 h-6" />, num: '01', title: 'Discover', desc: 'We listen and understand your goals, challenges and context.' },
    { icon: <PenTool className="w-6 h-6" />, num: '02', title: 'Design', desc: 'We co-create a tailored programme aligned with your objectives.' },
    { icon: <PlayCircle className="w-6 h-6" />, num: '03', title: 'Deliver', desc: 'We execute with excellence using the best faculty, tools and ecosystem partners.' },
    { icon: <BarChart className="w-6 h-6" />, num: '04', title: 'Evaluate', desc: 'We measure outcomes and gather insights for continuous improvement.' },
    { icon: <Repeat className="w-6 h-6" />, num: '05', title: 'Sustain & Scale', desc: 'We build long-term value and explore opportunities to scale impact together.' },
  ]
  return (
    <section className="bg-cream py-28 md:py-36 border-t border-forest/8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">How We Work</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4 leading-[1.1]">Our partnership journey</h2>
          <p className="text-[15px] text-forest/65 leading-[1.75]">
            A transparent, five-stage process designed for cross-border collaboration.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                {/* Circle icon */}
                <div className="w-16 h-16 rounded-full bg-forest-deep flex items-center justify-center text-gold mb-6 border-4 border-cream shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300 relative z-10">
                  {s.icon}
                </div>
                <span className="text-[9px] font-black text-gold/50 tracking-[0.2em] mb-1">{s.num}</span>
                <h4 className="text-[14px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{s.title}</h4>
                <p className="text-[11px] text-forest/65 leading-[1.65] px-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Trusted By Marquee ── */
function TrustedByMarquee() {
  const logos = [
    // University of Cambridge
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 90 70" className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,4 H80 V50 Q45,70 45,70 Q45,70 10,50 Z" fill="#c8151b"/>
        <rect x="10" y="26" width="70" height="6" fill="#f5c842"/>
        <rect x="41" y="4" width="8" height="66" fill="#f5c842"/>
        <text x="27" y="24" fontSize="14" textAnchor="middle" fill="#f5c842">♞</text>
        <text x="63" y="24" fontSize="14" textAnchor="middle" fill="#f5c842">♞</text>
        <text x="27" y="48" fontSize="9" textAnchor="middle" fill="#f5c842">✦✦✦</text>
        <text x="63" y="48" fontSize="14" textAnchor="middle" fill="#f5c842">♞</text>
        <path d="M10,4 H80 V50 Q45,70 45,70 Q45,70 10,50 Z" fill="none" stroke="#c8a030" strokeWidth="1.5"/>
      </svg>
      <span className="text-[10px] font-black text-[#003b5c] text-center leading-tight tracking-wider uppercase mt-2">University of<br/>Cambridge</span>
    </div>,
    // Girton
    <div className="flex flex-col items-center justify-center gap-1 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 60 50" className="h-14 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M6,2 H54 V34 Q30,50 30,50 Q30,50 6,34 Z" fill="#1a6b2a"/>
        <rect x="6" y="20" width="48" height="5" fill="white"/>
        <rect x="27" y="2" width="6" height="48" fill="white"/>
        <circle cx="18" cy="13" r="7" fill="white"/>
        <text x="18" y="16" fontSize="7" textAnchor="middle" fill="#222">⁘</text>
        <circle cx="42" cy="13" r="7" fill="white"/>
        <text x="42" y="16" fontSize="9" textAnchor="middle" fill="#e8294b">☽</text>
        <circle cx="18" cy="32" r="5" fill="white"/>
        <text x="18" y="35" fontSize="8" textAnchor="middle" fill="#e8294b">☽</text>
        <circle cx="42" cy="32" r="5" fill="white"/>
        <text x="42" y="35" fontSize="6" textAnchor="middle" fill="#222">⁘</text>
        <path d="M6,2 H54 V34 Q30,50 30,50 Q30,50 6,34 Z" fill="none" stroke="#1a6b2a" strokeWidth="1"/>
      </svg>
      <div className="text-center leading-none mt-2">
        <div className="text-[11px] font-black text-[#1a6b2a] tracking-wide">GIRTON</div>
        <div className="text-[9px] font-black text-[#111] tracking-widest">COLLEGE</div>
      </div>
    </div>,
    // King's E-Lab
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 80 40" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="40" fill="white"/>
        <rect x="2" y="8" width="22" height="24" rx="3" fill="#1a1a2e"/>
        <text x="13" y="19" fontSize="7.5" fill="white" fontWeight="900" textAnchor="middle" fontFamily="serif">K</text>
        <text x="13" y="28" fontSize="5" fill="#c8a951" fontWeight="bold" textAnchor="middle">E-LAB</text>
        <text x="54" y="17" fontSize="7.5" fill="#1a1a2e" fontWeight="900" textAnchor="middle">KING'S</text>
        <text x="54" y="27" fontSize="7" fill="#c8a951" fontWeight="900" textAnchor="middle">E-LAB</text>
      </svg>
      <span className="text-[10px] font-bold text-forest-deep text-center leading-tight mt-1">King's E-Lab</span>
    </div>,
    // CISL
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 80 40" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="40" fill="white"/>
        <circle cx="16" cy="20" r="13" fill="none" stroke="#e8e8e8" strokeWidth="1"/>
        <path d="M16,7 A13,13 0 0,1 29,20" fill="#2e7d32" opacity="0.9"/>
        <path d="M29,20 A13,13 0 0,1 16,33" fill="#1565c0" opacity="0.9"/>
        <path d="M16,33 A13,13 0 0,1 3,20" fill="#f57c00" opacity="0.9"/>
        <path d="M3,20 A13,13 0 0,1 16,7" fill="#c62828" opacity="0.9"/>
        <circle cx="16" cy="20" r="6" fill="white"/>
        <text x="16" y="23.5" fontSize="5.5" fill="#1a1a1a" fontWeight="900" textAnchor="middle">CISL</text>
        <text x="54" y="16" fontSize="6.5" fill="#1a1a1a" fontWeight="900" textAnchor="middle">CISL</text>
        <text x="54" y="25" fontSize="4" fill="#555" textAnchor="middle">Cambridge</text>
        <text x="54" y="32" fontSize="3.8" fill="#555" textAnchor="middle">Sustainability</text>
      </svg>
      <span className="text-[10px] font-bold text-forest-deep text-center leading-tight mt-1">Cambridge Inst.<br/>Sustainability</span>
    </div>,
    // AUS
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 80 40" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="40" fill="white"/>
        <rect x="2" y="6" width="26" height="28" rx="2" fill="#1a3a6b"/>
        <text x="15" y="21" fontSize="10" fill="white" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">AUS</text>
        <text x="15" y="30" fontSize="3.5" fill="#c8a951" textAnchor="middle">EST. 1997</text>
        <text x="56" y="17" fontSize="6" fill="#1a3a6b" fontWeight="800" textAnchor="middle">American</text>
        <text x="56" y="25" fontSize="6" fill="#1a3a6b" fontWeight="800" textAnchor="middle">University</text>
        <text x="56" y="33" fontSize="5.5" fill="#888" textAnchor="middle">of Sharjah</text>
      </svg>
      <span className="text-[10px] font-bold text-forest-deep text-center leading-tight mt-1">American University<br/>of Sharjah</span>
    </div>,
    // KREA
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 80 40" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="40" fill="white"/>
        <rect x="2" y="6" width="26" height="28" rx="3" fill="#d44000"/>
        <text x="15" y="22" fontSize="9" fill="white" fontWeight="900" textAnchor="middle">KREA</text>
        <text x="15" y="30" fontSize="4" fill="rgba(255,255,255,0.7)" textAnchor="middle">university</text>
        <text x="56" y="19" fontSize="10" fill="#d44000" fontWeight="900" textAnchor="middle" fontFamily="serif">KREA</text>
        <text x="56" y="30" fontSize="6" fill="#888" textAnchor="middle">University</text>
      </svg>
      <span className="text-[10px] font-bold text-forest-deep text-center leading-tight mt-1">KREA University</span>
    </div>,
    // Galgotias
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Galgotias_University_logo.svg/500px-Galgotias_University_logo.svg.png" alt="Galgotias University" className="h-16 w-auto object-contain mix-blend-multiply" />
    </div>
  ]

  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="bg-white py-24 overflow-hidden border-y border-forest/5">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-6 bg-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Trusted By</span>
          <div className="h-px w-6 bg-gold" />
        </div>
        <h3 className="text-[1.8rem] font-bold text-forest-deep">Our partners and collaborators</h3>
      </div>
      
      <div className="relative flex items-center">
        {/* Gradients for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="animate-marquee flex items-center gap-6">
          {duplicatedLogos.map((logo, i) => (
            <div key={i}>{logo}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonial Section ── */
function TestimonialSection() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="bg-forest-deep rounded-[2.5rem] p-12 md:p-16 text-cream flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl shadow-forest/20">
          <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
          
          <div className="flex-1 relative z-10">
            <Quote className="w-12 h-12 text-gold/30 mb-8" />
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-white">
              "Our partnership with GEL has opened new doors for our students and faculty. The Cambridge experience, combined with practical learning, created exceptional outcomes."
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center shrink-0 relative z-10 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&q=80"
              alt="Dr. Ted Laursen"
              className="w-24 h-24 rounded-full object-cover border-4 border-gold/40 mb-4 shadow-xl"
            />
            <h4 className="text-[16px] font-bold text-white mb-1">Dr. Ted Laursen</h4>
            <p className="text-[10px] text-cream/70 uppercase tracking-widest max-w-[150px] leading-relaxed">
              Chancellor,<br/>American University of Sharjah
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-forest-deep p-12 md:p-16 relative overflow-hidden border border-white/8 shadow-[0_20px_60px_rgba(20,40,30,0.35)]">
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
          {/* Glow */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Let's Begin</span>
              </div>
              <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-[1.1] mb-5">
                Let's build something <span className="font-serif italic text-gold">impactful together.</span>
              </h2>
              <p className="text-[15px] text-white/65 leading-[1.75]">
                Tell us about your goals and explore how we can collaborate — our team responds within two working days, wherever you are in the world.
              </p>
            </div>

            <div className="flex flex-col gap-4 shrink-0 md:pt-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-forest-deep transition-all hover:bg-amber-400 hover:scale-105 shadow-xl shadow-gold/25 min-w-[240px]"
              >
                Start a Conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/35 min-w-[240px]"
              >
                Download Brochure <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
