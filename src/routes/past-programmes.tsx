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
    <section className="relative overflow-hidden bg-[#F4EFE6] pt-20 pb-36 md:pt-28 md:pb-44">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-forest/50 mb-10">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span>/</span>
          <Link to="/our-impact" className="hover:text-forest transition-colors">Our Impact</Link>
          <span>/</span>
          <span className="text-forest">Past Programmes</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 bg-gold/12 text-gold text-[9px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Our Portfolio
            </span>
            <h1 className="text-[3rem] md:text-[4.5rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Past<br/>Programmes
            </h1>
            <p className="mt-4 text-[18px] font-semibold text-forest/80 leading-snug font-serif italic text-gold">
              Global learning experiences.<br />Lasting institutional impact.
            </p>
            <p className="mt-6 text-[15px] text-forest/65 leading-[1.8] max-w-lg mb-10">
              Global Education Lab designs and delivers international programmes for education leaders, entrepreneurs and business executives. Each programme combines expert learning, institutional engagement and cultural immersion to create insights that drive meaningful change.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/programmes" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25">
                Explore Our Programme Portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest hover:border-gold/40 transition-all duration-300">
                Discuss a Custom Programme
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl h-[480px]">
              <img src={heroImg} alt="Past Programmes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-forest/10 p-5 flex items-center gap-4 border border-forest/8">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                <Globe2 className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-forest-deep uppercase tracking-wider">Global Reach</p>
                <p className="text-[10px] text-forest/55 mt-1">15+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Perspectives" },
    { icon: <Users className="h-6 w-6" />, title: "Curated Networks" },
    { icon: <GraduationCap className="h-6 w-6" />, title: "Experiential Learning" },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Actionable Insights" },
    { icon: <Building2 className="h-6 w-6" />, title: "Institutional Impact" },
  ]
  return (
    <section className="relative z-20 -mt-12 w-full px-6">
      <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-[0_8px_40px_rgba(26,53,35,0.08)] border border-forest/5 px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-forest/5">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 group">
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-deep leading-relaxed group-hover:text-gold transition-colors duration-300 max-w-[120px]">{f.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="bg-white py-32 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Portfolio</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep leading-[1.1]">Our Programmes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {past.map((p, i) => (
            <div key={i} className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-forest/8 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.08)] hover:-translate-y-2 transition-all duration-400">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] text-forest-deep">
                  {p.tag}
                </span>
                <div className="absolute -bottom-5 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-forest/10 text-gold shadow-md group-hover:bg-gold group-hover:text-white transition-colors duration-300 z-10">
                  {p.icon}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-8 pt-10">
                <h3 className="text-[16px] font-bold text-forest-deep mb-3 leading-tight group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[13px] text-forest/65 leading-[1.65] mb-6">{p.desc}</p>
                <div className="flex flex-col gap-3 mb-8 flex-1">
                  {p.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-[11px] font-semibold text-forest-deep/80 leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
                <Link to="/our-impact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep hover:text-gold transition-colors mt-auto">
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
    { icon: <Users className="h-6 w-6" />, v: "500+", l: "Leaders & Professionals Empowered" },
    { icon: <Building2 className="h-6 w-6" />, v: "100+", l: "Institutions & Organisations Engaged" },
    { icon: <Globe2 className="h-6 w-6" />, v: "15+", l: "Countries Represented" },
    { icon: <TrendingUp className="h-6 w-6" />, v: "Lasting", l: "Partnerships & Collaborations Established" },
  ]
  return (
    <section className="bg-[#F4EFE6] py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-forest-deep rounded-[2rem] p-10 md:p-14 overflow-hidden relative shadow-2xl">
          <div className="pointer-events-none absolute top-0 right-0 w-2/3 h-full opacity-20 mix-blend-luminosity">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-5 lg:pr-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold italic font-serif">Creating Impact That Lasts</span>
              </div>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white leading-[1.1] mb-6">
                Beyond the classroom.<br />Beyond the programme.
              </h2>
              <p className="text-[14px] text-cream/70 leading-[1.8] max-w-md">
                Our programmes create long-term value for individuals and organisations through knowledge, networks and real-world application.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-4 border border-gold/20 shadow-sm">{s.icon}</div>
                    <div className="text-2xl font-bold text-white mb-2">{s.v}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-cream/70 leading-tight max-w-[120px]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section className="bg-white py-32 border-t border-forest/5 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Participant Stories</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep leading-[1.1]">Voices from Our Participants</h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 shadow-sm"><ChevronRight className="h-5 w-5 rotate-180" /></button>
            <button className="w-12 h-12 rounded-full border border-forest/15 flex items-center justify-center text-forest/50 hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 shadow-sm"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group bg-[#F4EFE6] rounded-[1.75rem] p-10 border border-forest/8 flex flex-col hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 relative overflow-hidden">
              <span className="text-6xl text-gold/20 font-serif leading-none absolute top-6 right-8 group-hover:text-gold/40 transition-colors duration-300">"</span>
              <p className="text-[14px] text-forest/75 leading-[1.8] mb-10 italic flex-1 relative z-10">{t.q}</p>
              <div className="flex items-center gap-4 relative z-10">
                <img src={t.img} alt={t.a} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <p className="text-[13px] font-bold text-forest-deep">{t.a}</p>
                  <p className="text-[11px] text-forest/60 mt-0.5 uppercase tracking-wide font-semibold">{t.r}</p>
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
    <section className="bg-forest-deep py-32 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Custom Programmes</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white leading-[1.08] tracking-tight">Let's create the next transformational learning experience.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-[1.75] max-w-xl mx-auto">We partner with schools, universities, corporations and governments to design impactful global programmes.</p>
        
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25"
          >
            Discuss a Custom Programme
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link to="/partner-with-gel" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Partner with GEL
          </Link>
        </div>
      </div>
    </section>
  )
}
