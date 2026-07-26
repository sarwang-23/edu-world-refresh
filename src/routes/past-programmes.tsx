import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Globe2, Users, Lightbulb, TrendingUp, BookOpen, Building2, CheckCircle2, ChevronRight, GraduationCap, Leaf } from 'lucide-react'
import { Footer } from './index'

import heroImg from '@/assets/hero-classroom.jpg'
import schoolLeadersImg from '@/assets/school-leaders.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import studentsImg from '@/assets/students.jpg'
import teachersImg from '@/assets/teachers.jpg'
import cambridgeImg from '@/assets/cambridge.jpg'

export const Route = createFileRoute('/past-programmes')({
  component: PastProgrammes,
})

function PastProgrammes() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-[#F7F5F0]">
      <Hero />
      <FeaturesStrip />
      <OurProgrammes />
      <ImpactBanner />
      <Voices />
      <BottomCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-forest/50 mb-10">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span>/</span>
          <Link to="/our-impact" className="hover:text-forest">Our Impact</Link>
          <span>/</span>
          <span className="text-forest">Past Programmes</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[4.5rem] leading-[1.05]">
              Past Programmes
            </h1>
            <p className="mt-6 text-2xl font-bold text-gold">
              Global learning experiences.<br />
              Lasting institutional impact.
            </p>
            <p className="mt-6 text-sm text-forest/80 leading-relaxed max-w-lg font-medium">
              Global Education Lab designs and delivers international programmes for education leaders, entrepreneurs and business executives. Each programme combines expert learning, institutional engagement and cultural immersion to create insights that drive meaningful change.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/programmes" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-forest">
                Explore Our Programme Portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-forest/5">
                Discuss a Custom Programme <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-forest/10">
              <img src={heroImg} alt="Past Programmes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: <Globe2 className="h-8 w-8" />, title: "Global Perspectives" },
    { icon: <Users className="h-8 w-8" />, title: "Curated Networks" },
    { icon: <GraduationCap className="h-8 w-8" />, title: "Experiential Learning" },
    { icon: <Lightbulb className="h-8 w-8" />, title: "Actionable Insights" },
    { icon: <Building2 className="h-8 w-8" />, title: "Institutional Impact" },
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 -mt-16 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl shadow-forest/5 border border-forest/5 py-8 px-4 flex flex-wrap md:flex-nowrap justify-between gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center flex-1 px-2 border-r border-forest/10 last:border-0">
            <div className="text-forest/70 mb-4">{f.icon}</div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-forest-deep leading-tight max-w-[120px]">{f.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

function OurProgrammes() {
  const past = [
    {
      tag: "Education Leadership",
      title: "Finland & Estonia Education Exploration",
      desc: "An immersive exploration of two world-leading education systems. Participants engaged with schools, educators and policymakers to understand innovative practices in leadership, pedagogy, technology and student well-being.",
      img: schoolLeadersImg,
      icon: <Building2 className="h-5 w-5" />,
      bullets: ["School & institutional visits", "Expert interactions", "Policy & system insights", "Cultural engagement"]
    },
    {
      tag: "Education Leadership",
      title: "Cambridge School Leadership Programme",
      desc: "Designed for school leaders and emerging education professionals, this programme builds leadership capability through academic sessions, peer learning, institutional visits and reflection within the Cambridge ecosystem.",
      img: cambridgeImg,
      icon: <GraduationCap className="h-5 w-5" />,
      bullets: ["Leadership workshops", "Cambridge academic exposure", "Peer learning & exchange", "Strategic school development"]
    },
    {
      tag: "Sustainability & Education",
      title: "Bali Green School Exploration Programme",
      desc: "A sustainability-focused journey exploring how education can shape conscious, responsible and future-ready learners. Participants experienced innovative learning models rooted in nature, community and purpose.",
      img: teachersImg,
      icon: <Leaf className="h-5 w-5" />,
      bullets: ["Sustainability in education", "Systems thinking & design", "Community & cultural immersion", "Alternative learning models"]
    },
    {
      tag: "Executive Leadership",
      title: "Global India Leadership Programme",
      desc: "An executive education initiative for senior leaders and entrepreneurs focused on leadership, innovation and growth across the India-UK corridor through world-class faculty, practical sessions and high-quality networking.",
      img: businessLeadersImg,
      icon: <Users className="h-5 w-5" />,
      bullets: ["Leadership & strategy", "Innovation & AI", "Business growth & governance", "Networking with global leaders"]
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-deep md:text-[2.75rem]">Our Programmes</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {past.map((p, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-forest/10 hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-forest-deep px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-[0.1em] text-white">
                  {p.tag}
                </span>
                <div className="absolute -bottom-5 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-forest/10 text-forest-deep shadow-md">
                  {p.icon}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 pt-10">
                <h3 className="text-[17px] font-bold text-forest-deep mb-3 leading-tight">{p.title}</h3>
                <p className="text-[11px] text-forest/70 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-col gap-2.5 mb-6 flex-1">
                  {p.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-forest-deep shrink-0 mt-0.5" />
                      <span className="text-[10px] font-semibold text-forest-deep">{b}</span>
                    </div>
                  ))}
                </div>
                <Link to="/our-impact" className="text-[11px] font-bold uppercase tracking-[0.1em] text-forest-deep flex items-center gap-1 hover:text-gold transition-colors mt-auto">
                  View Highlights <ArrowUpRight className="h-4 w-4 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactBanner() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, v: "500+", l: "Leaders & Professionals Empowered" },
    { icon: <Building2 className="h-8 w-8" />, v: "100+", l: "Institutions & Organisations Engaged" },
    { icon: <Globe2 className="h-8 w-8" />, v: "15+", l: "Countries Represented" },
    { icon: <TrendingUp className="h-8 w-8" />, v: "Lasting", l: "Partnerships & Collaborations Established" },
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24">
      <div className="bg-forest-deep rounded-3xl p-10 md:p-14 overflow-hidden relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-4 lg:border-r border-white/10 lg:pr-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold mb-4 italic font-serif">Creating Impact That Lasts</p>
            <h2 className="text-[1.75rem] font-bold text-white leading-tight mb-4">
              Beyond the classroom.<br />Beyond the programme.
            </h2>
            <p className="text-xs text-cream/70 leading-relaxed">
              Our programmes create long-term value for individuals and organisations through knowledge, networks and real-world application.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="text-gold mb-4">{s.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{s.v}</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-cream/70 leading-tight max-w-[120px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Voices() {
  const testimonials = [
    {
      q: "The programme broadened my perspective on education leadership. The school visits and conversations with educators were truly transformative.",
      a: "Priya Nair",
      r: "Principal, India",
      img: teachersImg,
    },
    {
      q: "A perfect blend of academic excellence, practical frameworks and global networking. I returned with ideas I could immediately apply in my organisation.",
      a: "Rohan Mehta",
      r: "Director, Business Development",
      img: studentsImg,
    },
    {
      q: "The focus on sustainability and systems thinking at Bali Green School was inspiring. It reshaped how we think about learning and impact.",
      a: "Emma Roberts",
      r: "Education Leader, UK",
      img: schoolLeadersImg,
    },
  ]
  return (
    <section className="bg-white py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem]">Voices from Our Participants</h2>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all"><ChevronRight className="h-5 w-5 rotate-180" /></button>
            <button className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#F7F5F0] rounded-2xl p-8 border border-forest/5 flex flex-col">
              <span className="text-3xl text-forest/20 font-serif leading-none mb-4">"</span>
              <p className="text-[12px] text-forest/80 leading-relaxed mb-8 italic flex-1">{t.q}</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.a} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-[12px] font-bold text-forest-deep">{t.a}</p>
                  <p className="text-[10px] text-forest/60 mt-0.5">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="bg-[#F7F5F0] py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-white rounded-3xl p-10 border border-forest/10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-forest-deep flex items-center justify-center text-gold shrink-0">
              <Globe2 className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-forest-deep mb-2">Let's create the next transformational<br/>learning experience—together.</h2>
              <p className="text-sm text-forest/70 max-w-lg">We partner with schools, universities, corporations and governments to design impactful global programmes.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-forest">
              Discuss a Custom Programme <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/partner-with-gel" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-forest/5">
              Partner with GEL <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
