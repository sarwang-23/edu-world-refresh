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

export const Route = createFileRoute('/partner-with-gel')({
  component: PartnerWithGelPage,
})

function PartnerWithGelPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <ImpactStatsStrip />
      <Opportunities />
      <WhyPartner />
      <PartnershipJourney />
      <TrustedAndTestimonial />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-cream">
      {/* Subtle grid overlay - same as Global Ventures */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-10 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-gold/50" /> GLOBAL PARTNERSHIPS
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[5rem] leading-[1.02]">
              Partner with GEL
            </h1>
            <p className="mt-5 text-xl md:text-2xl font-serif italic text-gold leading-tight">
              Let's create transformative learning experiences and lasting impact—together.
            </p>
            <p className="mt-5 text-base text-forest/80 leading-relaxed max-w-md">
              We collaborate with institutions, organisations and ecosystems across the UK, India, the Gulf and beyond to design and deliver high-impact programmes that develop people, drive innovation and build global connections.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-all hover:scale-105 hover:bg-forest hover:text-white">
                Start a Conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-transparent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-deep transition-all hover:bg-forest-deep/5 hover:border-forest/40">
                Explore Opportunities <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-forest/10">
              <div>
                <Globe2 className="h-5 w-5 text-gold mb-3" />
                <h4 className="text-[11px] font-bold text-forest-deep mb-1">Global expertise</h4>
                <p className="text-[10px] text-forest/60 leading-relaxed">Cambridge roots, worldwide reach.</p>
              </div>
              <div>
                <Target className="h-5 w-5 text-gold mb-3" />
                <h4 className="text-[11px] font-bold text-forest-deep mb-1">Tailored partnerships</h4>
                <p className="text-[10px] text-forest/60 leading-relaxed">Co-created around your objectives.</p>
              </div>
              <div>
                <TrendingUp className="h-5 w-5 text-gold mb-3" />
                <h4 className="text-[11px] font-bold text-forest-deep mb-1">Measurable impact</h4>
                <p className="text-[10px] text-forest/60 leading-relaxed">Outcomes that create lasting value.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" 
                alt="University Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
            </div>
            {/* Overlay Stat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-forest-deep border border-cream/10 p-6 rounded-2xl shadow-xl flex flex-col justify-center min-w-[160px]">
              <span className="text-3xl font-bold font-serif text-gold italic">15+</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cream/70 mt-1">COUNTRIES ENGAGED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactStatsStrip() {
  const stats = [
    { v: "500+", l: "LEADERS EMPOWERED" },
    { v: "100+", l: "INSTITUTIONS ENGAGED" },
    { v: "15+", l: "COUNTRIES REPRESENTED" },
    { v: "10+", l: "YEARS OF DELIVERY" },
  ]
  return (
    <div className="bg-[#FDFBF7] py-8 border-b border-forest/10 relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-forest/10 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-4">
              <span className="text-3xl font-bold font-serif text-forest-deep italic">{s.v}</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-forest/50 mt-2">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Opportunities() {
  const opps = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Schools",
      desc: "Global exposure and future skills for students. Leadership development for educators.",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Universities",
      desc: "Student mobility, faculty collaboration, research engagement and innovation initiatives.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Further Education & Skills",
      desc: "Internationalisation, applied learning, employability and skills development.",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Corporates & Associations",
      desc: "Leadership programmes, innovation workshops and global market engagement.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Governments & Ecosystems",
      desc: "Delegations, innovation missions, policy dialogues and ecosystem development.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Custom Partnerships",
      desc: "Have a unique idea? Let's design a programme that fits your vision.",
    },
  ]
  
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold/50" /> WHERE WE COLLABORATE <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-forest-deep md:text-[2.5rem] leading-[1.1]">
            Partnership Opportunities
          </h2>
          <p className="mt-4 text-sm text-forest/70">
            Every partnership is designed around your institution's ambition, context and audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opps.map((o, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-forest/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest-deep mb-6">
                {o.icon}
              </div>
              <h3 className="text-base font-bold text-forest-deep mb-3">{o.title}</h3>
              <p className="text-xs text-forest/70 leading-relaxed mb-8 flex-1">{o.desc}</p>
              <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold flex items-center gap-2 hover:text-forest-deep transition-colors mt-auto">
                Explore <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyPartner() {
  const reasons = [
    {
      icon: <Globe2 className="w-5 h-5 text-gold" />,
      title: "Cambridge Ecosystem Access",
      desc: "Connect with world-class academics, researchers and innovators.",
    },
    {
      icon: <Zap className="w-5 h-5 text-gold" />,
      title: "Experiential by Design",
      desc: "Hands-on learning, simulations, challenges and real-world projects.",
    },
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      title: "End-to-End Support",
      desc: "From design and delivery to evaluation and continuous improvement.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-gold" />,
      title: "Global Connections",
      desc: "Bridge the UK with India and emerging global ecosystems.",
    },
    {
      icon: <BarChart className="w-5 h-5 text-gold" />,
      title: "Measurable Outcomes",
      desc: "Clear KPIs, impact reporting and participant transformation.",
    },
    {
      icon: <Shield className="w-5 h-5 text-gold" />,
      title: "Long-Term Partnerships",
      desc: "We grow with you to create sustainable and scalable impact.",
    },
  ]
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[3rem] bg-forest-deep p-12 md:p-20 border border-white/10 shadow-[0_20px_50px_rgba(20,40,30,0.3)]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-px bg-gold/50" /> THE GEL DIFFERENCE <span className="w-8 h-px bg-gold/50" />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-cream md:text-[2.5rem] leading-[1.1] mb-6">
              Why partner with GEL?
            </h2>
            <p className="text-sm text-cream/70 font-medium">
              An <span className="italic font-serif text-gold">international standard of delivery</span>, backed by an ecosystem that global institutions trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {reasons.map((r, i) => (
              <div key={i} className="flex flex-col gap-4">
                {r.icon}
                <div>
                  <h4 className="text-sm font-bold text-cream mb-2">{r.title}</h4>
                  <p className="text-xs text-cream/60 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnershipJourney() {
  const steps = [
    { icon: <Search className="w-5 h-5" />, title: "Discover", desc: "We listen and understand your goals, challenges and context." },
    { icon: <PenTool className="w-5 h-5" />, title: "Design", desc: "We co-create a tailored programme aligned with your objectives." },
    { icon: <PlayCircle className="w-5 h-5" />, title: "Deliver", desc: "We execute with excellence using the best faculty, tools and ecosystem partners." },
    { icon: <BarChart className="w-5 h-5" />, title: "Evaluate", desc: "We measure outcomes and gather insights for continuous improvement." },
    { icon: <Repeat className="w-5 h-5" />, title: "Sustain & Scale", desc: "We build long-term value and explore opportunities to scale impact together." },
  ]
  return (
    <section className="bg-cream py-24 md:py-32 border-t border-forest/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold/50" /> HOW WE WORK <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-forest-deep md:text-[2.5rem] leading-[1.1] mb-4">
            Our partnership journey
          </h2>
          <p className="text-sm text-forest/70">
            A transparent, five-stage process designed for cross-border collaboration.
          </p>
        </div>
        
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-forest/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-forest-deep flex items-center justify-center text-gold mb-6 border-4 border-cream shadow-md group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-sm font-bold text-forest-deep mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-forest-deep text-[10px] flex items-center justify-center">{i+1}</span>
                  {s.title}
                </h4>
                <p className="text-[11px] text-forest/70 leading-relaxed px-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustedAndTestimonial() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
          {/* Trusted By Block */}
          <div className="bg-[#FDFBF7] rounded-[2rem] p-10 border border-forest/10 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center gap-4 mb-6">
              <span className="w-6 h-px bg-gold/50" /> TRUSTED BY
            </span>
            <h3 className="text-2xl font-bold text-forest-deep mb-8">
              Our partners and collaborators
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                "University of Cambridge", "Girton College",
                "King's E-Lab", "Cambridge Institute for Sustainability Leadership",
                "American University of Sharjah", "KREA University",
                "Galgotias University", "and more..."
              ].map((partner, i) => (
                <div key={i} className={`p-4 rounded-xl border border-forest/5 bg-white text-xs text-forest/80 font-medium flex items-center ${i === 7 ? 'bg-transparent border-none text-forest/50 italic' : ''}`}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Block */}
          <div className="bg-forest-deep rounded-[2rem] p-12 text-cream flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <Quote className="w-10 h-10 text-gold/30 mb-8" />
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-12 relative z-10 text-white">
              "Our partnership with GEL has opened new doors for our students and faculty. The Cambridge experience, combined with practical learning, created exceptional outcomes."
            </p>
            <div className="flex items-center gap-4 mt-auto relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&q=80" 
                alt="Dr. Ted Laursen" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
              />
              <div>
                <h4 className="text-sm font-bold text-white">Dr. Ted Laursen</h4>
                <p className="text-[10px] text-cream/60 uppercase tracking-widest mt-1">
                  Chancellor, American University of Sharjah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[3rem] bg-forest-deep p-12 md:p-16 relative overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(20,40,30,0.4)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,160,90,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-gold/50" /> LET'S BEGIN
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-[3rem] leading-[1.1] mb-6">
                Let's build something <span className="font-serif italic text-gold">impactful together.</span>
              </h2>
              <p className="text-sm text-cream/70 leading-relaxed">
                Tell us about your goals and explore how we can collaborate — our team responds within two working days, wherever you are in the world.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 shrink-0 md:pt-10">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-deep transition-all hover:scale-105 hover:bg-white min-w-[240px]">
                Start a Conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/30 bg-transparent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream transition-all hover:bg-cream/10 min-w-[240px]">
                Download Brochure <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
