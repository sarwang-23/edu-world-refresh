import { useState, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDownToLine, GraduationCap, Globe2, Lightbulb, Compass, Building2, MapPin, Users, Heart, Sparkles, BookOpen, Presentation, CalendarCheck, CheckCircle2, User, Zap, Calendar, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Footer } from './index'

import cambridgeImg from '@/assets/cambridge_8.jpg'
import heroImgOld from '@/assets/hero-classroom.jpg'
import studentsImg from '@/assets/students.jpg'
import teachersImg from '@/assets/teachers.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import schoolLeadersImg from '@/assets/school-leaders.jpg'

import academicImg from '@/assets/executive-education.jpg'
import cambridgeEcosystemImg from '@/assets/cambridge_3.jpg'
import handsOnImg from '@/assets/zero-to-one-past-1.jpg'
import siteVisitImg from '@/assets/site visit.jpg'
import globalNetworkImg from '@/assets/gilp-march-15.jpg'
import socialCulturalImg from '@/assets/IMG_5138_2.jpg'

import campusLife1 from '@/assets/campus-life-1.jpg'
import campusLife2 from '@/assets/campus-life-2.jpg'
import campusLife3 from '@/assets/campus-life-3.jpg'
import campusLifeWorkshop from '@/assets/campus_life_workshop.jpg'
import { SharedTestimonials } from '@/components/SharedTestimonials';


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
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <StatsMarquee />
      <WhyDifferent />
      <EcosystemExperience />
      <CampusLife />
      <Tracks />
      <Impact />
      <SharedTestimonials />
      <BottomCTA />
      <Footer />
    </div>
  )
}

/* ─── HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] pt-4 pb-16 md:pt-6 md:pb-20 border-b border-forest/10">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="mx-auto max-w-[1280px] px-6 relative z-10 pt-4">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* Text column */}
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-gold">Graduate Summer Programme</span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold text-forest-deep leading-[1.05] tracking-tight">
              Experience Cambridge.<br />
              Expand your thinking.<br />
              <span className="font-serif italic text-gold">Shape what comes next.</span>
            </h1>

            <p className="mt-5 text-[16px] font-semibold text-forest/80 leading-snug">
              An immersive academic and professional experience for ambitious graduates.
            </p>
            <p className="mt-3 max-w-[520px] text-[15px] text-forest/75 leading-[1.7]">
              Learn from leading minds, explore world-class institutions, build global connections and turn ideas into real-world impact.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { icon: <GraduationCap className="h-4 w-4" />, label: 'Cambridge, UK' },
                { icon: <Calendar className="h-4 w-4" />, label: 'Immersive Summer Programme' },
                { icon: <Zap className="h-4 w-4" />, label: '2-Week Immersive' },
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-forest/10 px-3.5 py-1.5 text-[14px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm">
                  <span className="text-gold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href="#tracks" className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.15em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25">
                Explore Tracks
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <Link to="/contact" search={{ source: "Graduate Summer Programme (Hero)" }} className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/50 px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.15em] text-forest-deep backdrop-blur-sm hover:border-forest-deep hover:bg-white transition-all duration-300">
                Register Your Interest
              </Link>
            </div>
          </div>

          {/* Image/Video column with Play/Pause & Sound controls */}
          <div className="relative mx-auto w-full lg:col-span-6">
            <div 
              onClick={togglePlay}
              className="group relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 bg-forest-deep cursor-pointer"
            >
              <video
                ref={videoRef}
                src="/graduatesummerprogramme.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />

              {/* Ambient bottom shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Center Big Play Button overlay (shown when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-forest-deep shadow-2xl scale-100 hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Bottom Control Bar Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2.5 z-20">
                {/* Play / Pause Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePlay()
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-deep/80 text-white backdrop-blur-md border border-white/20 shadow-lg hover:bg-forest hover:scale-105 transition-all"
                  title={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="h-5 w-5 text-gold" /> : <Play className="h-5 w-5 text-gold ml-0.5 fill-current" />}
                </button>

                {/* Mute / Unmute Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-deep/80 text-white backdrop-blur-md border border-white/20 shadow-lg hover:bg-forest hover:scale-105 transition-all"
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5 text-gold" /> : <Volume2 className="h-5 w-5 text-gold" />}
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 opacity-20 [background-image:radial-gradient(var(--forest)_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── STATS MARQUEE ─────────────────────────────────────────────────────── */
function StatsMarquee() {
  const stats = [
    { val: '2 Weeks', label: 'Immersive Duration', sub: '30+ hours of learning' },
    { val: '3', label: 'Programme Tracks', sub: 'Entrepreneurship, Research & Architecture' },
    { val: '500+', label: 'Alumni Network', sub: 'Across 20+ countries' },
    { val: 'London', label: 'City Visit', sub: 'Beyond the campus' },
    { val: '50+', label: 'Expert Sessions', sub: 'World-class faculty & founders' },
    { val: 'Girton', label: 'Cambridge College', sub: 'Cambridge college life' },
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

/* ─── WHY DIFFERENT ─────────────────────────────────────────────────────── */
function WhyDifferent() {
  const elements = [
    { img: academicImg, icon: <GraduationCap className="h-5 w-5" />, num: '01', title: 'Academic Excellence', tag: 'World-Class', desc: 'Engage with world-class teaching and cutting-edge research.' },
    { img: cambridgeEcosystemImg, icon: <Building2 className="h-5 w-5" />, num: '02', title: 'Cambridge Ecosystem', tag: 'Innovation', desc: 'Access universities, research centres, startups, investors and innovation hubs.' },
    { img: handsOnImg, icon: <Presentation className="h-5 w-5" />, num: '03', title: 'Hands-on Learning', tag: 'Practical', desc: 'Interactive workshops, team projects and real-world problem solving.' },
    { img: siteVisitImg, icon: <MapPin className="h-5 w-5" />, num: '04', title: 'Site Visits', tag: 'Real-World', desc: 'Visit leading institutions, labs, companies and cultural landmarks.' },
    { img: globalNetworkImg, icon: <Globe2 className="h-5 w-5" />, num: '05', title: 'Global Network', tag: 'Connections', desc: 'Build lifelong friendships and professional connections.' },
    { img: socialCulturalImg, icon: <Heart className="h-5 w-5" />, num: '06', title: 'Social & Cultural', tag: 'Experience', desc: 'Explore Cambridge life, activities and the rich UK culture.' },
  ]
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-forest/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Key Differentiators</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-forest-deep mb-6 leading-[1.1]">Why this programme is different.</h2>
          <p className="text-[15px] text-forest/70 max-w-2xl leading-[1.75] mb-8">
            Most summer programmes offer lectures and tours. We go further — combining deep academic engagement with real-world exposure, peer collaboration and personal growth.
          </p>
          <div className="inline-flex items-center gap-4 overflow-hidden rounded-2xl bg-[#F4EFE6] border border-gold/20 px-6 py-4 shadow-sm group">
            <div className="h-6 w-1 rounded-full bg-gold" />
            <div>
              <span className="text-[15px] font-bold text-forest-deep leading-[1.6]">It's not just a summer. </span>
              <span className="text-[15px] font-bold text-gold leading-[1.6]">It's a turning point.</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((e, i) => (
            <div key={i} className="group relative flex flex-col rounded-[1.75rem] overflow-hidden border border-forest/8 bg-white shadow-[0_4px_24px_rgba(26,53,35,0.07)] hover:shadow-[0_20px_60px_rgba(26,53,35,0.18)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              {/* ── Image frame ── */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
                <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[15px] font-bold text-white/80">{e.num}</div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/30 px-2.5 py-1 text-[15px] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">{e.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 border border-gold/30 text-gold backdrop-blur-sm group-hover:bg-gold group-hover:text-forest-deep group-hover:border-gold transition-all duration-300 shadow-lg">{e.icon}</div>
                  <h3 className="text-[17px] font-bold text-white leading-tight mb-2">{e.title}</h3>
                  <p className="text-[15px] text-cream/75 leading-[1.6]">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── ECOSYSTEM EXPERIENCE ───────────────────────────────────────────────── */
function EcosystemExperience() {
  const elements = [
    { img: academicImg, title: "Expert-led Sessions", desc: "Learn from academics, researchers and industry leaders." },
    { img: globalNetworkImg, title: "Workshops & Projects", desc: "Collaborate, ideate and build solutions with global peers." },
    { img: siteVisitImg, title: "Site Visits", desc: "Explore universities, labs, companies and innovation hubs." },
    { img: cambridgeEcosystemImg, title: "Startup & Research Access", desc: "Meet founders, researchers and innovators driving change." },
    { img: socialCulturalImg, title: "Social & Cultural Activities", desc: "Punting, college visits, dinners, city tours and more." },
  ]
  return (
    <section className="py-32 bg-forest-deep relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">The Environment</span>
        </div>
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white mb-4 leading-tight">Experience the Cambridge Ecosystem</h2>
        <p className="text-[15px] text-cream/75 leading-[1.8] mb-16 max-w-2xl">
          More than a classroom — immerse yourself in the people, places and communities that make Cambridge a global centre of knowledge and innovation.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {elements.map((e, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-400 hover:-translate-y-1">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-[1.75rem]">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-[15px] font-bold text-white mb-2">{e.title}</h3>
                <p className="text-[15px] text-cream/80 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TRACKS ──────────────────────────────────────────────────────────────── */
function Tracks() {
  return (
    <section id="tracks" className="py-32 bg-[#F4EFE6] relative overflow-hidden">
      {/* soft glows */}
      <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[600px] rounded-full bg-gold/5 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-forest/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Academic Pathways</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4">Choose Your Track.</h2>
          <p className="text-[15px] text-forest/80 max-w-lg mx-auto leading-[1.75]">Three unique pathways. One unforgettable Cambridge experience.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Track 1: Entrepreneurship & AI ── */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-forest/8 shadow-[0_4px_32px_rgba(26,53,35,0.08)] hover:shadow-[0_32px_80px_rgba(26,53,35,0.2)] hover:-translate-y-3 transition-all duration-500 flex flex-col">
            <div className="h-[3px] w-full bg-gradient-to-r from-gold/40 via-gold to-gold/20" />
            <div className="p-9 pb-6">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 bg-gold/10 text-gold text-[15px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Track 01
                </span>
                <span className="text-[15px] font-semibold text-forest/80 uppercase tracking-widest">Entrepreneurship</span>
              </div>
              <h3 className="text-[2rem] font-bold text-forest-deep leading-[1.1] mb-2 group-hover:text-gold transition-colors duration-400">Entrepreneurship<br />& AI</h3>
              <p className="text-[15px] font-semibold text-forest/80 mb-4 tracking-wide">Build ideas. Solve problems.</p>
              <p className="text-[15px] text-forest/80 leading-[1.65] mb-6">Build ideas for an AI-enabled world and transform them into viable ventures.</p>
              <div className="flex flex-col gap-3">
                {["Opportunity discovery", "AI tools in real world", "Prototyping & validation", "Pitch to experts"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-forest/70">
                    <span className="h-4 w-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-48 mt-auto overflow-hidden">
              <img src={heroImgOld} alt="Entrepreneurship & AI" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent" />
              <div className="absolute bottom-5 left-7 right-7">
                <Link to="/students/entrepreneurship" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-3 text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep shadow-xl shadow-gold/30 hover:bg-amber-400 transition-all duration-300 group/btn">
                  Explore Track
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Track 2: Research ── */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-forest/8 shadow-[0_4px_32px_rgba(26,53,35,0.08)] hover:shadow-[0_32px_80px_rgba(37,99,235,0.18)] hover:-translate-y-3 transition-all duration-500 flex flex-col">
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-400/30 via-blue-500 to-blue-400/20" />
            <div className="p-9 pb-6">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 bg-blue-500/8 text-blue-600 text-[15px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-blue-400/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Track 02
                </span>
                <span className="text-[15px] font-semibold text-forest/80 uppercase tracking-widest">Research</span>
              </div>
              <h3 className="text-[2rem] font-bold text-forest-deep leading-[1.1] mb-2 group-hover:text-blue-600 transition-colors duration-400">Research<br />Methods</h3>
              <p className="text-[15px] font-semibold text-forest/80 mb-4 tracking-wide">Ask questions. Discover.</p>
              <p className="text-[15px] text-forest/80 leading-[1.65] mb-6">Develop research skills, explore topics and connect ideas with impact.</p>
              <div className="flex flex-col gap-3">
                {["Research design", "Data analysis & evidence", "Engage with researchers", "Present your proposal"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-forest/70">
                    <span className="h-4 w-4 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-48 mt-auto overflow-hidden">
              <img src={studentsImg} alt="Research" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent" />
              <div className="absolute bottom-5 left-7 right-7">
                <Link to="/students/stem-research" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-7 py-3 text-[15px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-500/30 hover:bg-blue-400 transition-all duration-300 group/btn">
                  Explore Track
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Track 3: Architecture ── */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-forest/8 shadow-[0_4px_32px_rgba(26,53,35,0.08)] hover:shadow-[0_32px_80px_rgba(180,124,53,0.18)] hover:-translate-y-3 transition-all duration-500 flex flex-col">
            <div className="h-[3px] w-full bg-gradient-to-r from-orange-400/30 via-orange-500 to-orange-400/20" />
            <div className="p-9 pb-6">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 bg-orange-500/8 text-orange-600 text-[15px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-orange-400/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Track 03
                </span>
                <span className="text-[15px] font-semibold text-forest/80 uppercase tracking-widest">Architecture</span>
              </div>
              <h3 className="text-[2rem] font-bold text-forest-deep leading-[1.1] mb-2 group-hover:text-orange-600 transition-colors duration-400">Architecture<br />& Design</h3>
              <p className="text-[15px] font-semibold text-forest/80 mb-4 tracking-wide">Design spaces. Shape experiences.</p>
              <p className="text-[15px] text-forest/80 leading-[1.65] mb-6">Explore architecture through design, heritage and human-centred spaces.</p>
              <div className="flex flex-col gap-3">
                {["Sustainable design", "Heritage & urban design", "Site analysis workshops", "Present design concept"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-forest/70">
                    <span className="h-4 w-4 rounded-full bg-orange-500/10 border border-orange-400/30 flex items-center justify-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-48 mt-auto overflow-hidden">
              <img src={cambridgeImg} alt="Architecture" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-[#966526]/30 to-transparent" />
              <div className="absolute bottom-5 left-7 right-7">
                <Link to="/students/architecture" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#B47C35] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-orange-500/30 hover:bg-[#966526] transition-all duration-300 group/btn">
                  Explore Track
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── CAMPUS LIFE & ACCOMMODATION ────────────────────────────────────────── */
function CampusLife() {
  return (
    <section className="bg-white py-32 relative overflow-hidden border-y border-forest/10">
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-forest/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Accommodation & Experience</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep mb-6 leading-tight">Campus Life & Accommodation</h2>
          <p className="text-[15px] text-forest/70 max-w-2xl mx-auto leading-[1.75]">
            Live, learn, and grow at one of Cambridge's historic colleges. From formal dinners to comfortable dormitories, experience the true essence of university life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main big image */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-forest/10 shadow-md">
            <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src={campusLifeWorkshop} alt="Classroom and Workshops" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Workshops</h3>
              <p className="text-cream/80 text-[15px]">Engage deeply with peers and facilitators in modern, dynamic learning spaces.</p>
            </div>
          </div>

          {/* Two smaller images */}
          <div className="flex flex-col gap-6">
            <div className="group relative overflow-hidden rounded-[2rem] border border-forest/10 shadow-md h-[200px] md:h-[238px]">
              <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={campusLife1} alt="Historic Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                <h3 className="text-lg font-bold text-white mb-1">Historic Grounds</h3>
                <p className="text-cream/80 text-[15px]">Explore the beautiful college gardens.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-forest/10 shadow-md h-[200px] md:h-[238px]">
              <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={campusLife3} alt="Dorm Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                <h3 className="text-lg font-bold text-white mb-1">Comfortable Living</h3>
                <p className="text-cream/80 text-[15px]">Modern, single en-suite rooms for delegates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── IMPACT ─────────────────────────────────────────────────────────────── */
function Impact() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, v: "500+", l: "Participants from 20+ countries" },
    { icon: <Building2 className="h-6 w-6" />, v: "50+", l: "Institutions, labs & innovation hubs visited" },
    { icon: <GraduationCap className="h-6 w-6" />, v: "100+", l: "Experts, academics & entrepreneurs engaged" },
    { icon: <Globe2 className="h-6 w-6" />, v: "Lasting", l: "Networks, friendships & professional growth" },
  ]
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programme Impact</span>
        </div>
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep mb-16 leading-tight">Creating transformative experiences.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white p-7 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.12)] hover:-translate-y-1 transition-all duration-400 cursor-default shadow-sm">
              <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-gold/8 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mt-2 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-sm">{s.icon}</div>
              <div className="text-3xl font-bold text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300">{s.v}</div>
              <div className="text-[15px] text-forest/80 leading-[1.65]">{s.l}</div>
            </div>
          ))}
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
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Apply</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-[1.08] tracking-tight">Your Cambridge journey starts here.</h2>
        <p className="mt-5 text-[15px] text-cream/80 leading-[1.75] max-w-xl mx-auto">Gain knowledge, build global connections and create the future you envision. A lifetime of impact. A summer to remember.</p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" search={{ source: "Graduate Summer Programme (Bottom CTA)" }} className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25">
            Register Your Interest
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link to="/contact" search={{ source: "Graduate Summer Programme (Bottom CTA Secondary)" }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Download Overview <ArrowDownToLine className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}