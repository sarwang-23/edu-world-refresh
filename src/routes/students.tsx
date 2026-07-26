import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDownToLine, GraduationCap, Users, Globe2, Lightbulb, Compass, MonitorPlay, Code, Target, MessageSquare, Microscope, ShieldCheck, Heart, User, Building2 } from 'lucide-react'
import { Footer } from './index'

import studentsImg from '@/assets/students.jpg'
import cambridgeImg from '@/assets/cambridge.jpg'
import heroImg from '@/assets/hero-classroom.jpg'
import teachersImg from '@/assets/teachers.jpg'

export const Route = createFileRoute('/students')({
  head: () => ({
    meta: [
      { title: 'Young Leaders Summer Programme | Global Education Lab' },
      { name: 'description', content: 'An immersive summer experience in Cambridge for ambitious young learners.' },
    ],
  }),
  component: YoungLeaders,
})

function YoungLeaders() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-cream">
      <Hero />
      <FeaturesStrip />
      <CoreElements />
      <PartnersAndMentors />
      <ChooseYourTrack />
      <ValueProps />
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
              YOUNG LEADERS SUMMER PROGRAMME
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-forest-deep md:text-[4.5rem] leading-[1.05]">
              Learn. Lead.<br />Shape the future.
            </h1>
            <p className="mt-6 text-sm text-forest/80 leading-relaxed max-w-lg font-medium">
              An immersive summer experience in Cambridge for ambitious young learners who want to explore STEM, AI, entrepreneurship and public speaking—while building confidence, friendships and a global mindset.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#tracks" className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-forest">
                Explore Programme Tracks <ArrowUpRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-forest/5">
                Download Programme Overview <ArrowDownToLine className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            {/* The image flows to the edge on the right, matching the design which shows a large cut-off image */}
            <div className="relative rounded-l-[3rem] overflow-hidden aspect-[4/3] md:-mr-12 shadow-2xl shadow-forest/10">
              <img src={studentsImg} alt="Students" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: <GraduationCap className="h-6 w-6" />, title: "Future-Ready Skills", desc: "STEM, AI, communication and entrepreneurship." },
    { icon: <Users className="h-6 w-6" />, title: "Cambridge Ecosystem", desc: "Connect with researchers, students and innovators." },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Hands-on Learning", desc: "Workshops, projects and real-world challenges." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Global Community", desc: "Learn with young leaders from around the world." },
    { icon: <Compass className="h-6 w-6" />, title: "Beyond the Classroom", desc: "Cultural experiences, social activities and exploration." },
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 relative z-10 -mt-8">
      <div className="bg-forest-deep rounded-3xl p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center flex-1 px-2">
            <div className="text-gold mb-3">{f.icon}</div>
            <h4 className="text-[11px] font-bold text-white mb-2">{f.title}</h4>
            <p className="text-[10px] text-cream/70 leading-relaxed max-w-[140px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CoreElements() {
  const elements = [
    { img: studentsImg, icon: <Microscope className="h-5 w-5" />, title: "STEM Exploration", desc: "Discover, experiment and solve real-world problems through engaging STEM sessions and interactive learning." },
    { img: heroImg, icon: <MessageSquare className="h-5 w-5" />, title: "Public Speaking", desc: "Build confidence and sharpen communication skills through structured speaking practice and presentations." },
    { img: studentsImg, icon: <MonitorPlay className="h-5 w-5" />, title: "AI & Emerging Tech", desc: "Understand the power of AI and how technology is shaping industries, communities and our future." },
    { img: studentsImg, icon: <Code className="h-5 w-5" />, title: "Entrepreneurship", desc: "Develop ideas, explore opportunities and learn how innovation turns into impact through practical workshops." },
    { img: cambridgeImg, icon: <Globe2 className="h-5 w-5" />, title: "Cambridge Experience", desc: "Gain exclusive access to Cambridge institutions, research centres, innovation hubs and a vibrant student community." },
  ]
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem]">Core programme elements</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {elements.map((e, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 relative">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-forest/10 text-forest-deep shadow-md -mt-12 relative z-10 mb-4">
                {e.icon}
              </div>
              <h3 className="text-[15px] font-bold text-forest-deep mb-3">{e.title}</h3>
              <p className="text-[11px] text-forest/70 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnersAndMentors() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
        
        {/* Summatic Partner */}
        <div className="bg-white rounded-3xl p-10 border border-forest/10 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-forest-deep mb-8">In partnership with Summatic</h3>
          <div className="flex items-center gap-8">
            <div className="w-32 h-12 flex-shrink-0 flex items-center justify-center">
              {/* Fake Logo for Summatic */}
              <div className="text-2xl font-bold text-forest-deep flex items-center gap-2">
                <span className="w-6 h-6 rounded-sm bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500" />
                summatic
              </div>
            </div>
            <p className="text-[11px] text-forest/70 leading-relaxed">
              We are proud to partner with Summatic to deliver a transformative learning experience that inspires young minds and prepares them for a future of limitless possibilities.
            </p>
          </div>
        </div>

        {/* Facilitators */}
        <div className="bg-white rounded-3xl p-10 border border-forest/10 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-forest-deep mb-6">Expert Facilitators & Mentors</h3>
          <div className="flex items-center gap-3 mb-6">
            {[1,2,3,4,5].map(i => (
              <img key={i} src={teachersImg} alt="Mentor" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
            ))}
          </div>
          <p className="text-[11px] text-forest/70 leading-relaxed mb-6">
            Our facilitators include Cambridge educators, researchers, entrepreneurs, industry experts and communication specialists with a passion for guiding young learners.
          </p>
          <div>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-forest-deep hover:bg-forest/5 transition-all">
              Meet the Facilitators <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

function ChooseYourTrack() {
  return (
    <section id="tracks" className="py-24 bg-white border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep md:text-[2.25rem] mb-4">Choose Your Track</h2>
          <p className="text-sm text-forest/70 font-medium">Two unique pathways. One unforgettable Cambridge experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Track 1: Entrepreneurship */}
          <div className="bg-cream rounded-3xl border border-forest/10 overflow-hidden flex flex-col">
            <div className="p-10 flex-1 relative">
              <span className="absolute top-0 left-0 bg-forest-deep text-white text-[9px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-br-xl">TRACK 1</span>
              <h3 className="text-3xl font-bold text-forest-deep mt-4 mb-2">Entrepreneurship</h3>
              <p className="text-sm font-bold text-forest-deep mb-4">Build ideas. Solve problems. Create impact.</p>
              <p className="text-[11px] text-forest/70 leading-relaxed mb-8">
                Explore the world of innovation and entrepreneurship. Learn how ideas are born, tested and developed into real solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Opportunity discovery & ideation",
                  "Pitching & storytelling",
                  "Business model basics",
                  "AI for innovation",
                  "Design thinking & problem solving",
                  "Team projects & venture challenge"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-forest-deep shrink-0" />
                    <span className="text-[10px] font-semibold text-forest-deep">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 h-40">
              <img src={studentsImg} alt="" className="w-full h-full object-cover" />
              <div className="bg-forest/5 flex items-center justify-center border-t border-forest/10 group cursor-pointer hover:bg-forest/10 transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Entrepreneurship Track <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Track 2: STEM Research */}
          <div className="bg-[#1A365D] rounded-3xl overflow-hidden flex flex-col text-white relative">
            <div className="p-10 flex-1 relative z-10">
              <span className="absolute top-0 left-0 bg-blue-500 text-white text-[9px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-br-xl">TRACK 2</span>
              <h3 className="text-3xl font-bold mt-4 mb-2">STEM Research</h3>
              <p className="text-sm font-bold text-blue-200 mb-4">Ask questions. Explore. Discover.</p>
              <p className="text-[11px] text-white/70 leading-relaxed mb-8">
                Dive into the world of research and STEM. Learn how questions become insights and insights create a better world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Research thinking & inquiry",
                  "AI applications in research",
                  "Science & technology exploration",
                  "Collaborative investigations",
                  "Team & evidence basics",
                  "Present your research findings"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                    <span className="text-[10px] font-semibold text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-32 w-1/2 opacity-20 pointer-events-none">
              <img src={studentsImg} alt="" className="w-full h-full object-cover rounded-bl-full" />
            </div>
            <div className="grid grid-cols-2 h-40">
              <div className="bg-blue-600/20 flex items-center justify-center border-t border-blue-500/20 group cursor-pointer hover:bg-blue-600/40 transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore STEM Research Track <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <img src={heroImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ValueProps() {
  const props = [
    { icon: <User className="h-6 w-6" />, title: "Grow in confidence", desc: "Speak, present and lead with clarity." },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Think like a problem solver", desc: "Apply STEM, AI and creativity to real challenges." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Connect globally", desc: "Build friendships and networks that last a lifetime." },
    { icon: <Building2 className="h-6 w-6" />, title: "Access Cambridge", desc: "Engage with researchers, students and innovations." },
    { icon: <Compass className="h-6 w-6" />, title: "Broaden your perspective", desc: "Experience new cultures, ideas and opportunities." },
    { icon: <Target className="h-6 w-6" />, title: "Shape your future", desc: "Discover your passions and explore new pathways." },
  ]
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {props.map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center text-forest-deep mb-4">
              {p.icon}
            </div>
            <h4 className="text-[11px] font-bold text-forest-deep mb-2">{p.title}</h4>
            <p className="text-[10px] text-forest/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="pb-24 pt-10 bg-cream relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-forest-deep rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          {/* Background image fade on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30">
            <img src={cambridgeImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-deep" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Start your Cambridge journey early.</h2>
            <p className="text-sm text-primary-foreground/80">Discover new ideas. Build your voice. Explore the future.</p>
          </div>
          <div className="flex flex-wrap gap-4 relative z-10">
            <button className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all hover:bg-white">
              Register Your Interest <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Download Programme Overview <ArrowDownToLine className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
