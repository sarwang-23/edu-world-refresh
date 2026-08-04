import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Globe2, Users, Lightbulb, TrendingUp, BookOpen, Building2, CheckCircle2, ChevronRight, GraduationCap, Leaf, User, Calendar, MapPin, Sparkles } from 'lucide-react'
import { Footer } from './index'

import heroImg from '@/assets/site visit.jpg'
import schoolLeadersImg from '@/assets/school-leaders.jpg'
import finlandImg from '@/assets/finland_1.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import studentsImg from '@/assets/students.jpg'
import teachersImg from '@/assets/teachers.jpg'
import cambridgeImg from '@/assets/cambridge_1.jpg'
import baliImg from '@/assets/bali_new_4.jpg'
import samvritha from '@/assets/people/samvritha.png';
import tendaiNzonzo from '@/assets/people/tendai_nzonzo.jpg';
import pushkarSingh from '@/assets/people/pushkar_singh.jpg';
import { SharedTestimonials } from '@/components/SharedTestimonials';

export const Route = createFileRoute('/past-programmes')({
  head: () => ({
    meta: [
      { title: 'Past Programmes | Global Education Lab' },
      { name: 'description', content: 'Explore our portfolio of past programmes — global learning experiences with lasting institutional impact.' },
    ],
  }),
  component: PastProgrammes,
})

function PastProgrammes() {
  const pastTestimonials = [
    {
      q: "These 12 days at Girton College, University of Cambridge, through the Global Education Lab, have transformed the way I think about entrepreneurship, leadership, and innovation. Every lecture, every discussion, every pitch, and every interaction has helped me grow.",
      a: "Pushkar Singh",
      r: "Founder, CarbonSynq Earth",
      tag: "Summer Immersion",
      img: pushkarSingh,
      featured: true,
    },
    {
      q: "What I liked most about GEL Zero-to-One was the ability to work with mentors as they really helped transform and learn new skills and ways of thinking. It helped me refine my idea by making me think and question about how to pitch. We didn't begin with a finished product. We began with a problem worth solving.",
      a: "Tendai Nzonzo",
      r: "Founder, Sana AI",
      tag: "Zero-to-One",
      img: tendaiNzonzo,
      featured: false,
    },
    {
      q: "My two weeks at the summer programme in Cambridge felt like a dream. At first, I was nervous about being so far from home, but very quickly it became one of the best experiences of my life. I met amazing people from different countries, made real friendships, and felt like I grew more confident every day.",
      a: "Samvritha",
      r: "Student",
      tag: "Young Leaders Programme",
      img: samvritha,
      featured: false,
    }
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <StatsMarquee />
      <OurProgrammes />
      <ImpactBanner />
      <SharedTestimonials customTestimonials={pastTestimonials} />
      <BottomCTA />
      <Footer />
    </div>
  )
}

/* ─── HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] pt-6 pb-36 md:pt-6 md:pb-44">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 pt-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-gold">Our Portfolio</span>
            </div>

            <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-forest-deep leading-[1.04] tracking-tight">
              Past<br />
              <span className="font-serif italic text-gold">Programmes.</span>
            </h1>

            <p className="mt-6 text-[17px] font-semibold text-forest/80 leading-snug">
              Global learning experiences. Lasting institutional impact.
            </p>
            <p className="mt-4 text-[15px] text-forest/80 leading-[1.75] max-w-lg">
              Global Education Lab designs and delivers international programmes for education leaders, entrepreneurs and business executives. Each programme combines expert learning, institutional engagement and cultural immersion to create insights that drive meaningful change.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/programmes" className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25 shrink-0">
                Explore Our Programme Portfolio
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-forest-deep backdrop-blur-sm hover:border-forest-deep hover:bg-white transition-all duration-300 shrink-0">
                Discuss a Custom Programme
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_32px_80px_-12px_rgba(26,53,35,0.25)] relative ring-1 ring-forest/10">
              <img src={heroImg} alt="Past Programmes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Global Reach</p>
                  <p className="text-white text-[15px] font-bold">15+ Countries</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gold/30 border-2 border-white/40 backdrop-blur-sm flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-forest-deep border-2 border-white/40 flex items-center justify-center text-white text-[15px] font-bold">+500</div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-forest/15 border border-forest/8 backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <Globe2 className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Global Reach</p>
                <p className="text-[15px] text-forest/80 mt-0.5">15+ Countries</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 flex items-center gap-3 rounded-2xl bg-forest-deep p-4 shadow-2xl shadow-forest-deep/25 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white uppercase tracking-wider">500+ Alumni</p>
                <p className="text-[15px] text-cream/80 mt-0.5">Leaders & Professionals</p>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 opacity-20 [background-image:radial-gradient(var(--forest)_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── STATS MARQUEE ─────────────────────────────────────────────────────── */
function StatsMarquee() {
  const stats = [
    { val: '500+', label: 'Leaders Empowered', sub: 'Professionals & executives' },
    { val: '100+', label: 'Institutions Engaged', sub: 'Schools, universities & orgs' },
    { val: '15+', label: 'Countries', sub: 'Global representation' },
    { val: '4+', label: 'Programme Tracks', sub: 'Education, Executive, Startup & more' },
    { val: 'Lasting', label: 'Partnerships', sub: 'Long-term impact' },
    { val: 'Cambridge', label: 'Base', sub: 'UK & international venues' },
  ]
  const repeated = [...stats, ...stats, ...stats]
  return (
    <section className="bg-white border-y border-forest/8 overflow-hidden relative z-20 -mt-12">
      <div className="py-10">
        <div className="flex gap-0 animate-marquee" style={{ animationDirection: 'reverse' }}>
          {repeated.map((s, i) => (
            <div key={i} className="text-center px-10 flex-shrink-0 border-r border-forest/10 last:border-r-0 group cursor-default">
              <p className="text-2xl md:text-3xl font-bold text-forest-deep group-hover:text-gold transition-colors duration-300">{s.val}</p>
              <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-gold mt-2 mb-1">{s.label}</p>
              <p className="text-[15px] text-forest/80 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── OUR PROGRAMMES ─────────────────────────────────────────────────────── */
function OurProgrammes() {
  const past = [
    {
      tag: "Education Leadership",
      title: "Finland & Estonia Education Exploration",
      desc: "An immersive exploration of two world-leading education systems. Participants engaged with schools, educators and policymakers to understand innovative practices in leadership, pedagogy, technology and student well-being.",
      img: finlandImg,
      icon: <Building2 className="h-5 w-5" />,
      bullets: ["School & institutional visits", "Expert interactions", "Policy & system insights", "Cultural engagement"],
      link: "/programmes/finland"
    },
    {
      tag: "Education Leadership",
      title: "Cambridge School Leadership Programme",
      desc: "Designed for school leaders and emerging education professionals, this programme builds leadership capability through academic sessions, peer learning, institutional visits and reflection within the Cambridge ecosystem.",
      img: cambridgeImg,
      icon: <GraduationCap className="h-5 w-5" />,
      bullets: ["Leadership workshops", "Cambridge academic exposure", "Peer learning & exchange", "Strategic school development"],
      link: "/programmes/cslp"
    },
    {
      tag: "Sustainability & Education",
      title: "Bali Green School Exploration Programme",
      desc: "A sustainability-focused journey exploring how education can shape conscious, responsible and future-ready learners. Participants experienced innovative learning models rooted in nature, community and purpose.",
      img: baliImg,
      icon: <Leaf className="h-5 w-5" />,
      bullets: ["Sustainability in education", "Systems thinking & design", "Community & cultural immersion", "Alternative learning models"],
      link: "/programmes/bali"
    },
    {
      tag: "Executive Leadership",
      title: "Global India Leadership Programme",
      desc: "An executive education initiative for senior leaders and entrepreneurs focused on leadership, innovation and growth across the India-UK corridor through world-class faculty, practical sessions and high-quality networking.",
      img: businessLeadersImg,
      icon: <Users className="h-5 w-5" />,
      bullets: ["Leadership & strategy", "Innovation & AI", "Business growth & governance", "Networking with global leaders"],
      link: "/programmes/gilp"
    },
  ]

  return (
    <section className="bg-white py-32 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6">

        {/* Title and Content Centered at Top */}
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Portfolio</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-forest-deep mb-6 leading-[1.1]">Our Programmes</h2>
          <p className="text-[15px] text-forest/70 leading-[1.7] mb-6">
            Each programme is carefully designed to deliver real-world learning, meaningful connections, and lasting professional impact.
          </p>
          <div className="inline-flex">
            <p className="text-[15px] font-bold text-forest-deep leading-[1.7] px-6 py-3 bg-[#F4EFE6] rounded-xl border-l-2 border-gold shadow-sm">
              Every cohort. Every country. Every career.
            </p>
          </div>
        </div>

        {/* 4 Frames in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {past.map((p, i) => (
            <div key={i} className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-forest/8 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.10)] hover:-translate-y-2 transition-all duration-400">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-[0.1em] text-forest-deep">{p.tag}</span>
                <div className="absolute -bottom-5 left-5 w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-forest/10 text-gold shadow-md group-hover:bg-gold group-hover:text-white transition-colors duration-300 z-10">
                  {p.icon}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 pt-9">
                <h3 className="text-[15px] font-bold text-forest-deep mb-2 leading-tight group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-[15px] text-forest/80 leading-[1.6] mb-5">{p.desc}</p>
                <div className="flex flex-col gap-2 mb-6 flex-1">
                  {p.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span className="text-[15px] font-semibold text-forest-deep/80 leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={p.link}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#1a3523] px-5 py-3 text-[15px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#1a3523]/30 hover:bg-[#0f2117] hover:shadow-[#1a3523]/40 hover:-translate-y-0.5 transition-all duration-300 mt-auto"
                >
                  Explore Programme <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── IMPACT BANNER ──────────────────────────────────────────────────────── */
function ImpactBanner() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, v: "500+", l: "Leaders & Professionals Empowered" },
    { icon: <Building2 className="h-6 w-6" />, v: "100+", l: "Institutions & Organisations Engaged" },
    { icon: <Globe2 className="h-6 w-6" />, v: "15+", l: "Countries Represented" },
    { icon: <TrendingUp className="h-6 w-6" />, v: "Lasting", l: "Partnerships & Collaborations Established" },
  ]
  return (
    <section className="py-32 bg-forest-deep relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Creating Impact That Lasts</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white mb-6 leading-tight">
              Beyond the classroom.<br />Beyond the programme.
            </h2>
            <p className="text-[15px] text-cream/75 leading-[1.8] mb-10 max-w-lg">
              Our programmes create long-term value for individuals and organisations through knowledge, networks and real-world application.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">{s.v}</div>
                <div className="text-[15px] font-bold uppercase tracking-[0.1em] text-cream/80 leading-tight max-w-[120px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─── BOTTOM CTA ──────────────────────────────────────────────────────────── */
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
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Custom Programmes</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white leading-[1.08] tracking-tight">Let's create the next transformational learning experience.</h2>
        <p className="mt-5 text-[15px] text-cream/70 leading-[1.75] max-w-xl mx-auto">We partner with schools, universities, corporations and governments to design impactful global programmes.</p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25">
            Discuss a Custom Programme
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link to="/partner-with-gel" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Partner with GEL
          </Link>
        </div>
      </div>
    </section>
  )
}
