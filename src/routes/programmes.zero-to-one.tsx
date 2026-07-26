import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Play, CheckCircle2, Users, Trophy, Rocket, Compass, CalendarCheck, Calendar, Globe2, Building2, GraduationCap, Target } from 'lucide-react'
import { Footer } from './index'

import studentsImg from '@/assets/students.jpg'
import heroImg from '@/assets/hero-classroom.jpg'
import cambridgeImg from '@/assets/cambridge.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'

export const Route = createFileRoute('/programmes/zero-to-one')({
  head: () => ({
    meta: [
      { title: 'Zero-To-One | Global Education Lab' },
      { name: 'description', content: 'From raw ideas to incubator-ready ventures in 48 hours.' },
    ],
  }),
  component: ZeroToOne,
})

function ZeroToOne() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-white">
      <Hero />
      <About />
      <SuccessStory />
      <ThemeSection />
      <BottomCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-forest-deep text-white pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold mb-6 block leading-relaxed">
              Global Education Lab x King's E-Lab x Cambridge Judge Business School
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-[5rem] leading-[1.05] mb-2">
              ZERO-TO-ONE
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gold mb-8">
              48-HOUR VENTURE CHALLENGE
            </p>
            <p className="text-3xl font-serif italic text-white leading-tight mb-8">
              From raw ideas to<br />incubator-ready ventures.
            </p>
            <p className="text-[13px] text-primary-foreground/75 leading-relaxed max-w-lg mb-10">
              Zero-To-One is a practical, high-energy venture-building format that helps participants move from early interest, research insight or lived experience to a validated venture direction in just 48 hours.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="h-10 px-4 rounded border border-white/20 flex items-center justify-center font-bold text-[10px] tracking-widest text-white/90">
                GEL
              </div>
              <div className="h-10 px-4 rounded border border-white/20 flex items-center justify-center font-bold text-[10px] tracking-widest text-white/90">
                KING'S E-LAB
              </div>
              <div className="h-10 px-4 rounded border border-white/20 flex items-center justify-center font-bold text-[10px] tracking-widest text-white/90">
                CAMBRIDGE JUDGE
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 h-[500px]">
              <div className="flex flex-col gap-3 h-full">
                <div className="rounded-2xl overflow-hidden h-1/3">
                  <img src={heroImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-2/3">
                  <img src={studentsImg} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-3 h-full">
                <div className="rounded-2xl overflow-hidden h-2/3">
                  <img src={studentsImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-1/3">
                  <img src={heroImg} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function About() {
  const pillars = [
    { icon: <Users className="h-6 w-6" />, title: "PARTICIPANTS", desc: "University of Cambridge researchers, business students, alumni, early-stage founders, sponsors, technical builders, designers and professionals who want to contribute to emerging ventures." },
    { icon: <Trophy className="h-6 w-6" />, title: "OUTCOME", desc: "Ideas are validated, sharpened and prepared to move towards formal incubation, accelerator support, grants, competitions or further venture development within the Cambridge ecosystem." },
    { icon: <Rocket className="h-6 w-6" />, title: "METHOD", desc: "Fast-paced high-quality learning bursts, team formation, AI-enabled prototyping, mentor challenge, problem validation, business modelling, customer thinking and final pitches." },
    { icon: <Compass className="h-6 w-6" />, title: "PRINCIPLE", desc: "The aim is not to start with the best idea. The aim is to learn how to think, test, build and communicate like a founder." },
  ]
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold text-forest-deep uppercase tracking-widest mb-8">
            About Zero-to-One
          </h2>
          <div className="w-12 h-0.5 bg-forest mb-8" />
          <p className="text-xs text-forest/70 leading-relaxed mb-6">
            Most incubators and accelerators are designed for teams that already have a defined idea, a formed team, early validation and founder confidence.
          </p>
          <p className="text-xs font-bold text-forest-deep leading-relaxed mb-6">
            Zero-to-One fills the stage before that: the ideation gap.
          </p>
          <p className="text-xs text-forest/70 leading-relaxed">
            Participants find the many hidden 'how' inside an early idea, challenge them through teamwork, mentoring and validation, and begin turning uncertainty into clearer 'yeses'.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-forest/10 flex flex-col items-center text-center shadow-sm">
                <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center text-forest mb-4">
                  {p.icon}
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-forest-deep mb-3">{p.title}</h4>
                <p className="text-[10px] text-forest/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function SuccessStory() {
  return (
    <section className="py-12 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl p-8 border border-forest/10 flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1 flex gap-6 items-start">
            <div className="w-16 h-16 rounded-full border border-forest/20 shrink-0 flex items-center justify-center text-forest-deep">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-forest-deep mb-4">Zero-to-One Success</h3>
              <p className="text-[11px] text-forest/80 leading-relaxed">
                Four of the ten ideas that emerged from the inaugural Zero-to-One were offered places on the Spark Incubator at University of Cambridge, while two other teams are now receiving active support from the Zero-to-One network to develop early stage partnerships and explore pilot opportunities.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col items-center gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] w-full cursor-pointer group shadow-md border border-forest/5">
              <img src={heroImg} alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-forest-deep/20 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 text-forest-deep ml-1" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-forest/60 italic text-center w-full">
              Watch <span className="underline cursor-pointer">this video</span> to know more about the experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function ThemeSection() {
  return (
    <section className="py-24 bg-white border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-4">
              OCTOBER THEME
            </p>
            <h2 className="text-[2.25rem] font-bold text-forest-deep mb-6 leading-tight">
              Food, Agriculture & Planetary Health
            </h2>
            <p className="text-sm text-forest/80 leading-relaxed mb-12 max-w-xl">
              A timely theme connecting health, climate, biology, food systems, sustainability, agriculture, AI, supply chains, behaviour change and commercial innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-deep mb-4 pb-2 border-b border-forest/10">
                  POSSIBLE VENTURE AREAS
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    "AI for nutrition and personalised food",
                    "Food waste and circular supply chains",
                    "Climate-smart agriculture and farm productivity",
                    "Regenerative agriculture and biodiversity",
                    "Alternative proteins and sustainable ingredients"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-forest-deep shrink-0" />
                      <span className="text-[11px] font-semibold text-forest/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-deep mb-4 pb-2 border-b border-forest/10">
                  WHY IT MATTERS
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Globe2 className="h-5 w-5 text-forest/40 shrink-0" />
                    <span className="text-[11px] text-forest/80 leading-relaxed">Global food systems are under pressure from climate, health and resource constraints.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-forest/40 shrink-0" />
                    <span className="text-[11px] text-forest/80 leading-relaxed">Cambridge research and entrepreneurial talent can generate ideas with scientific, commercial and social impact.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-forest/40 shrink-0" />
                    <span className="text-[11px] text-forest/80 leading-relaxed">Industry partners can bring real problems that help teams work on relevant, deployable solutions.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <div className="absolute inset-y-0 -right-6 md:right-0 left-0 overflow-hidden md:rounded-[2rem] shadow-2xl">
              {/* Fake image for greenhouse/agriculture theme using cambridge placeholder */}
              <img src={cambridgeImg} alt="Greenhouse" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  const icons = [
    { icon: <Users className="h-6 w-6" />, title: "Work with diverse, high potential teams" },
    { icon: <GraduationCap className="h-6 w-6" />, title: "Learn from expert mentors & entrepreneurs" },
    { icon: <Target className="h-6 w-6" />, title: "Validate ideas with real users & data" },
    { icon: <Globe2 className="h-6 w-6" />, title: "Access Cambridge networks & opportunities" },
    { icon: <Trophy className="h-6 w-6" />, title: "Pitch for incubation & future support" },
  ]
  return (
    <section className="pb-24 pt-16 bg-cream border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="bg-forest-deep rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-16 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-white/20 shrink-0 flex items-center justify-center text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Ready to build the next meaningful venture?</h2>
              <p className="text-xs text-primary-foreground/80">Join Zero-to-One this October and turn your curiosity into a venture with real-world impact.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-forest-deep transition-all hover:bg-white">
              Sign Up Now <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Learn More <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="text-center mb-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-deep">WHY PARTICIPATE?</h4>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {icons.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-forest/60 mb-3">{item.icon}</div>
              <p className="text-[10px] text-forest-deep font-semibold leading-relaxed max-w-[120px]">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}