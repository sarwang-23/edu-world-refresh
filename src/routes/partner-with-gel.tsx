import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from './index'
import { SharedTestimonials } from '@/components/SharedTestimonials'
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
import heroImg from '../assets/partner-hero-new.jpg'
import cambridgeImg from '../assets/cambridge_3.jpg'
import businessLeadersImg from '../assets/business-leaders.jpg'
import dhruvGalgotia from '@/assets/people/dhruv_galgotia.jpg';
import samTully from '@/assets/people/sam_tully.jpg';
import lucyJung from '@/assets/people/lucy_jung.jpg';

export const Route = createFileRoute('/partner-with-gel')({
  head: () => ({
    meta: [
      { title: 'Partner with GEL | Global Education Lab' },
      { name: 'description', content: 'Partner with Global Education Lab to create transformative learning experiences and lasting impact across the globe.' },
    ],
  }),
  component: PartnerWithGelPage,
})

const partnerTestimonials = [
  {
    q: "An incredible week at the University of Cambridge filled with unforgettable memories, meaningful conversations, and the beginning of exciting new synergies and alliances... Looking forward to announcing several new engagements and partnerships very soon.",
    a: "Dr. Dhruv Galgotia",
    r: "CEO, Galgotias Education Group",
    tag: "Global Partnerships",
    img: dhruvGalgotia,
    featured: true,
  },
  {
    q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School... Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce.",
    a: "Sam Tully",
    r: "Trustee, Pratham UK",
    tag: "Institutional Growth",
    img: samTully,
    featured: false,
  },
  {
    q: "I was impressed by how far ventures (on GEL programme) got in such a short time, considering stakeholders and business models and how to make the sustainable growth of their ideas possible. Thank you for the opportunity to mentor.",
    a: "Lucy Jung",
    r: "Founder & CEO, LYEONS",
    tag: "GEL Mentor",
    img: lucyJung,
    featured: false,
  }
];

function PartnerWithGelPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <ImpactStatsStrip />
      <Opportunities />
      <WhyPartner />
      <PartnershipJourney />
      <TrustedByMarquee />
      <SharedTestimonials customTestimonials={partnerTestimonials} featuredBgImage={cambridgeImg} />
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

      <div className="relative mx-auto max-w-7xl px-6 pb-24 md: pt-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold text-[15px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Global Partnerships
            </span>

            <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] text-forest md:text-5xl lg:text-[3.25rem] xl:text-[4rem]">
              Partner with<br />
              <span className="text-gold">GEL</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
              Let's create transformative learning experiences and lasting impact—together.
            </p>
            <p className="mt-5 text-[16px] text-forest/70 leading-[1.7] max-w-xl">
              We collaborate with institutions, organisations and ecosystems across the UK, India, the Gulf and beyond to design and deliver high-impact programmes that develop people, drive innovation and build global connections.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact" search={{ source: "Partner with GEL" }}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
              >
                Start a Conversation <ArrowUpRight className="h-4 w-4" />
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
                  <h4 className="text-[15px] font-bold text-forest-deep mb-1">{f.title}</h4>
                  <p className="text-[15px] text-forest/80 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:col-span-6 lg:mt-10">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
              <img
                src={heroImg}
                alt="Cambridge Partnership"
                className="h-full w-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
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
            <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70 mt-1">{s.l}</span>
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
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Teachers',
      desc: 'Internationalisation, applied learning, employability and skills development.',
      link: '/teachers'
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
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Where We Collaborate</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4 leading-[1.1]">Partnership Opportunities</h2>
          <p className="text-[15px] text-forest/80 leading-[1.75]">
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
                <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-forest-deep group-hover:text-gold transition-colors duration-400">
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
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">The GEL Difference</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white mb-5 leading-[1.1]">Why partner with GEL?</h2>
          <p className="text-[15px] text-white/80 leading-[1.75]">
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
              <p className="text-[15px] text-white/80 leading-[1.7]">{r.desc}</p>
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
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">How We Work</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4 leading-[1.1]">Our partnership journey</h2>
          <p className="text-[15px] text-forest/80 leading-[1.75]">
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
                <span className="text-[15px] font-black text-gold/80 tracking-[0.2em] mb-1">{s.num}</span>
                <h4 className="text-[15px] font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors duration-300">{s.title}</h4>
                <p className="text-[15px] text-forest/80 leading-[1.65] px-2">{s.desc}</p>
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
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 240 140" className="h-[5rem] w-auto" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(95, 0) scale(0.55)">
          <path d="M 0 0 L 100 0 L 100 65 C 100 105 50 125 50 125 C 50 125 0 105 0 65 Z" fill="#d30731" stroke="#111" strokeWidth="2.5" />
          <path d="M 38 0 L 62 0 L 62 42 L 100 42 L 100 66 L 62 66 L 62 120 C 55 122 50 123 50 123 C 45 122 38 120 38 120 L 38 66 L 0 66 L 0 42 L 38 42 Z" fill="#fff" stroke="#111" strokeWidth="2.5" />
          
          <g fill="#111">
            <polygon points="50,12 47,18 53,18" /> <circle cx="50" cy="11" r="1.5" />
            <polygon points="50,28 47,34 53,34" /> <circle cx="50" cy="27" r="1.5" />
            <polygon points="50,80 47,86 53,86" /> <circle cx="50" cy="79" r="1.5" />
            <polygon points="50,96 47,102 53,102" /> <circle cx="50" cy="95" r="1.5" />
            <polygon points="20,54 17,60 23,60" /> <circle cx="20" cy="53" r="1.5" />
            <polygon points="80,54 77,60 83,60" /> <circle cx="80" cy="53" r="1.5" />
          </g>
          
          <rect x="34" y="44" width="32" height="20" rx="1" fill="#d30731" stroke="#111" strokeWidth="2.5" />
          <circle cx="50" cy="54" r="3" fill="#f5c842" />
          <rect x="34" y="47" width="5" height="14" fill="#f5c842" />
          <rect x="61" y="47" width="5" height="14" fill="#f5c842" />

          <g fill="#f5c842" stroke="#111" strokeWidth="1.5">
            <path d="M 12 15 c 5 -5 15 -2 15 5 c -2 2 -8 5 -15 -5" />
            <path d="M 14 22 c 2 -5 10 -5 12 0 c 0 5 -5 8 -12 0" />
            <path d="M 72 15 c 5 -5 15 -2 15 5 c -2 2 -8 5 -15 -5" />
            <path d="M 74 22 c 2 -5 10 -5 12 0 c 0 5 -5 8 -12 0" />
            <path d="M 12 75 c 5 -5 15 -2 15 5 c -2 2 -8 5 -15 -5" />
            <path d="M 14 82 c 2 -5 10 -5 12 0 c 0 5 -5 8 -12 0" />
            <path d="M 72 75 c 5 -5 15 -2 15 5 c -2 2 -8 5 -15 -5" />
            <path d="M 74 82 c 2 -5 10 -5 12 0 c 0 5 -5 8 -12 0" />
          </g>
        </g>
        
        <text x="120" y="90" fontSize="16" fill="#111" textAnchor="middle" fontFamily="Georgia, serif" letterSpacing="0.5">UNIVERSITY OF</text>
        <text x="120" y="112" fontSize="21" fill="#111" textAnchor="middle" fontFamily="Georgia, serif" letterSpacing="1">CAMBRIDGE</text>
        <text x="120" y="132" fontSize="15" fill="#111" textAnchor="middle" fontFamily="Georgia, serif">Judge Business School</text>
      </svg>
    </div>,
    // Girton
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 600 100" className="w-[95%] h-auto" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(5, 5) scale(1.8)">
          <path d="M6,2 H54 V34 Q30,50 30,50 Q30,50 6,34 Z" fill="#ffffff" stroke="#222" strokeWidth="1.5"/>
          <path d="M 27 2 L 33 2 L 33 18 L 54 18 L 54 24 L 33 24 L 33 47 L 27 47 L 27 24 L 6 24 L 6 18 L 27 18 Z" fill="#115740" stroke="#222" strokeWidth="0.8"/>
          <circle cx="16" cy="10" r="4.5" fill="none" stroke="#222" strokeWidth="1"/>
          <path d="M 16,6.5 L 16,13.5 M 12.5,10 L 19.5,10" stroke="#222" strokeWidth="1" />
          <circle cx="16" cy="10" r="1.5" fill="#222" />
          <path d="M 45,6 C 40,6 40,14 45,14 C 41,13 41,7 45,6 Z" fill="#d30731" />
          <path d="M 18,26 C 13,26 13,34 18,34 C 14,33 14,27 18,26 Z" fill="#d30731" />
          <circle cx="44" cy="30" r="4.5" fill="none" stroke="#222" strokeWidth="1"/>
          <path d="M 44,26.5 L 44,33.5 M 40.5,30 L 47.5,30" stroke="#222" strokeWidth="1" />
          <circle cx="44" cy="30" r="1.5" fill="#222" />
        </g>
        <line x1="125" y1="10" x2="125" y2="90" stroke="#d30731" strokeWidth="3" />
        <text x="140" y="48" fontSize="48" fill="#115740" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.5">GIRTON COLLEGE</text>
        <text x="140" y="90" fontSize="42" fill="#115740" fontWeight="300" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="1">CAMBRIDGE</text>
      </svg>
    </div>,
    // King's E-Lab
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 200 100" className="h-[4.5rem] w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="45" fontSize="56" fill="#5B2468" textAnchor="middle" fontFamily="Georgia, serif">E-LAB</text>
        <line x1="5" y1="58" x2="195" y2="58" stroke="#5B2468" strokeWidth="1.5" />
        <text x="80" y="78" fontSize="15" fill="#5B2468" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="1.5">KING'S COLLEGE</text>
        <text x="80" y="96" fontSize="15" fill="#5B2468" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="1.5">CAMBRIDGE</text>
        <path d="M 160 65 L 190 65 L 190 82 C 190 95 175 100 175 100 C 175 100 160 95 160 82 Z" fill="#5B2468" />
        <path d="M 175 65 L 175 100" stroke="white" strokeWidth="0.8" />
        <path d="M 160 76 L 190 76" stroke="white" strokeWidth="0.8" />
        <circle cx="175" cy="88" r="3" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="167" cy="70" r="1.5" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="183" cy="70" r="1.5" fill="none" stroke="white" strokeWidth="1" />
      </svg>
    </div>,

    // AUS
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 200 200" className="h-[5.5rem] w-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="ausTopCurve" d="M 28 100 A 72 72 0 0 1 172 100" />
          <path id="ausBotCurve" d="M 16 100 A 84 84 0 0 0 184 100" />
        </defs>
        
        <circle cx="100" cy="100" r="96" fill="none" stroke="#902c28" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#902c28" strokeWidth="1" />
        <circle cx="100" cy="100" r="54" fill="none" stroke="#902c28" strokeWidth="1" />
        
        <text fill="#902c28" fontSize="13.5" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.2">
          <textPath href="#ausTopCurve" startOffset="50%" textAnchor="middle">American University of Sharjah</textPath>
        </text>
        <text fill="#902c28" fontSize="16" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif">
          <textPath href="#ausBotCurve" startOffset="50%" textAnchor="middle">الجامعة الأميركية في الشارقة</textPath>
        </text>
        
        <circle cx="18" cy="100" r="2.5" fill="#902c28" />
        <circle cx="182" cy="100" r="2.5" fill="#902c28" />
        
        <text x="100" y="142" fill="#902c28" fontSize="14" fontWeight="600" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">1997</text>
        
        <g stroke="#902c28" fill="none" strokeWidth="0.8">
          <rect x="53" y="82" width="94" height="2" fill="#902c28" />
          <rect x="55" y="84" width="90" height="30" />
          <path d="M 76 82 C 76 40 124 40 124 82 Z" />
          <path d="M 100 48 L 100 82" />
          <path d="M 91 50 C 91 65 91 82 91 82" />
          <path d="M 109 50 C 109 65 109 82 109 82" />
          <path d="M 83 57 C 83 70 83 82 83 82" />
          <path d="M 117 57 C 117 70 117 82 117 82" />
          <path d="M 89 114 L 89 95 A 11 11 0 0 1 111 95 L 111 114" />
          <rect x="94" y="100" width="12" height="14" />
          <path d="M 60 114 L 60 95 A 4.5 4.5 0 0 1 69 95 L 69 114" />
          <path d="M 74 114 L 74 95 A 4.5 4.5 0 0 1 83 95 L 83 114" />
          <path d="M 117 114 L 117 95 A 4.5 4.5 0 0 1 126 95 L 126 114" />
          <path d="M 131 114 L 131 95 A 4.5 4.5 0 0 1 140 95 L 140 114" />
          <line x1="64.5" y1="102" x2="64.5" y2="114" />
          <line x1="78.5" y1="102" x2="78.5" y2="114" />
          <line x1="121.5" y1="102" x2="121.5" y2="114" />
          <line x1="135.5" y1="102" x2="135.5" y2="114" />
          <line x1="50" y1="114" x2="150" y2="114" />
        </g>
        
        <g stroke="#902c28" fill="none" strokeWidth="1.2">
          <path d="M 45 114 Q 47 100 47 93 Q 40 100 40 102 M 47 93 Q 44 89 40 93 M 47 93 Q 47 85 45 85 M 47 93 Q 52 88 55 89 M 47 93 Q 53 95 54 100" />
          <path d="M 155 114 Q 153 100 153 93 Q 160 100 160 102 M 153 93 Q 156 89 160 93 M 153 93 Q 153 85 155 85 M 153 93 Q 148 88 145 89 M 153 93 Q 147 95 146 100" />
        </g>
      </svg>
      <span className="text-[13px] font-bold text-forest-deep text-center leading-tight">American University<br/>of Sharjah</span>
    </div>,
    // KREA
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <svg viewBox="0 0 280 100" className="h-[4rem] w-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="kreaClip">
            <circle cx="45" cy="50" r="40" />
          </clipPath>
        </defs>
        
        <g clipPath="url(#kreaClip)">
          {/* Top-Left to Bottom-Right */}
          <path d="M -15,-15 L 105,105" stroke="#007DC5" strokeWidth="12" />
          <path d="M 12,-15 L 132,105" stroke="#004F9F" strokeWidth="12" />
          <path d="M -42,-15 L 78,105" stroke="#3AB4E6" strokeWidth="12" />
          
          {/* Bottom-Left to Top-Right */}
          <path d="M -15,115 L 105,-5" stroke="#3AB4E6" strokeWidth="12" />
          <path d="M -42,115 L 78,-5" stroke="#007DC5" strokeWidth="12" />
          <path d="M 12,115 L 132,-5" stroke="#004F9F" strokeWidth="12" />

          {/* Minimal layering to fake the weave effect */}
          <path d="M -15,-15 L 45,45" stroke="#007DC5" strokeWidth="12" />
          <path d="M -42,-15 L 18,45" stroke="#3AB4E6" strokeWidth="12" />
          <path d="M 12,45 L 72,105" stroke="#004F9F" strokeWidth="12" />
        </g>
        
        <text x="100" y="58" fontSize="48" fill="#58595b" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="1">KREA</text>
        <text x="103" y="80" fontSize="22" fill="#000" fontFamily="Georgia, serif">university</text>
      </svg>
    </div>,
    // Galgotias
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-forest/10 bg-white w-56 h-[132px] shrink-0 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
      <img src="/galgotias-logo.jpg" alt="Galgotias University" className="h-16 w-auto object-contain mix-blend-multiply" />
    </div>
  ]

  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="bg-white py-24 overflow-hidden border-y border-forest/5">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-6 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Trusted By</span>
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



/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-[#051108] w-full py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-20">
        
        <div className="flex-1 w-full max-w-3xl">
          <div className="mb-6">
            <span className="text-[15px] md:text-[15px] font-extrabold uppercase tracking-[0.25em] text-[#C19842]">
              Let's Begin
            </span>
          </div>
          <h2 className="text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] font-sans font-extrabold text-[#F4F1E1] leading-[1.05] tracking-[-0.02em] mb-1">
            Let's build something
          </h2>
          <h2 className="text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] font-sans font-extrabold text-[#C19842] leading-[1.05] tracking-[-0.02em] mb-8">
            impactful together.
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#A6B8AC] leading-[1.7] max-w-2xl font-medium tracking-wide">
            Tell us about your goals and explore how we can collaborate — our team responds within two working days, wherever you are in the world.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-center gap-6 shrink-0 w-full lg:w-auto">
          <Link
            to="/contact" search={{ source: "Partner with GEL" }}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#CE9D45] px-10 py-5 text-[15px] font-bold text-[#141414] transition-all hover:bg-[#E5B254] hover:-translate-y-1 w-full md:w-auto min-w-[260px]"
          >
            Start a Conversation <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        
      </div>
    </section>
  )
}
