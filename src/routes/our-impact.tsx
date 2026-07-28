import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Users, GraduationCap, Leaf, Globe, Rocket, Award, Heart, BookOpen, Quote, Sparkles, X } from 'lucide-react'
import heroImg from '@/assets/hero-classroom.jpg'
import s1 from '@/assets/students.jpg'
import s2 from '@/assets/school-leaders.jpg'
import s3 from '@/assets/business-leaders.jpg'
import s4 from '@/assets/teachers.jpg'
import { Footer } from './index'

export const Route = createFileRoute('/our-impact')({
  head: () => ({
    meta: [
      { title: 'Our Impact | Global Education Lab' },
      { name: 'description', content: 'Measurable impact. Lasting change.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-background">
      <Hero />
      <Stories />
      <Stats />
      <Testimonials />
      <Numbers />
      <SDGs />
      <GlobalNetwork />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 pb-20 pt-0 md:grid-cols-12 md:pb-28">
        
        {/* Left Content */}
        <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 pr-0 md:pr-4">
           <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background px-4 py-1.5 text-[15px] font-bold uppercase tracking-[0.18em] text-forest/70 mt-6 md:mt-0">
             <Sparkles className="h-3.5 w-3.5 text-gold" /> MEASURABLE IMPACT
           </span>
           <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-forest-deep md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem]">
             Building a better<br />
             tomorrow, <span className="italic font-serif text-gold">together.</span>
           </h1>
           
           <div className="mt-8 flex flex-col gap-5 border-l-2 border-forest/15 pl-6">
             <p className="max-w-xl text-lg leading-relaxed text-forest/80 md:text-xl">
               GEL's programmes empower learners, support communities and drive innovation for a more inclusive and sustainable future. Here's the impact we're creating — together.
             </p>
             <p className="max-w-xl text-base leading-relaxed text-forest/70">
               By bridging the gap between academia and real-world application, we cultivate a global ecosystem of changemakers equipped to tackle tomorrow's most pressing challenges.
             </p>
           </div>
           
           <div className="mt-12 flex flex-wrap items-center gap-4">
             <a href="#stats" className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-[15px] font-bold tracking-wide text-white transition-all hover:bg-forest-deep">
               View Our Impact <ArrowUpRight className="h-4 w-4" />
             </a>
           </div>

           <div className="mt-24 flex items-center gap-3 text-[15px] font-medium uppercase tracking-[0.22em] text-forest/60">
             <span className="h-px w-10 bg-forest/30" />
             EMPOWERING COMMUNITIES GLOBALLY
           </div>
        </div>

        {/* Right Image */}
        <div className="relative md:col-span-5 md:pl-2 mt-10 md:mt-8">
           <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl group">
             <img src={heroImg} alt="Impact" className="h-[500px] md:h-[650px] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/50 to-transparent p-10">
                <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Impact Since 2019</p>
                <p className="text-3xl md:text-4xl font-serif italic text-cream leading-tight pb-1">
                  Education that<br />travels.
                </p>
             </div>
           </div>
        </div>

      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { num: "5,000+", label: "LEARNERS EMPOWERED" },
    { num: "120+", label: "STARTUPS SUPPORTED" },
    { num: "25+", label: "COUNTRIES REPRESENTED" },
    { num: "35+", label: "STARTUPS PITCHED" },
    { num: "10,000+", label: "LIVES IMPACTED (EST.)" },
  ];

  return (
    <section className="border-b border-border/60 bg-forest-deep overflow-hidden">
      <div className="mx-auto max-w-7xl py-8 md:py-12 text-center relative">
        <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold mb-8 px-6">
          OUR GLOBAL IMPACT, IN NUMBERS
        </p>
        
        <div className="relative flex overflow-hidden group">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-forest-deep to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-forest-deep to-transparent" />
          
          <div 
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-rtl 35s linear infinite' }}
          >
            {[...Array(3)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center gap-x-10 md:gap-x-16 px-5 md:px-8">
                {stats.map((stat, i) => (
                  <div key={`${arrayIndex}-${i}`} className="flex items-center gap-4 text-left">
                    <span className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-cream">{stat.num}</span>
                    <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-cream/70 max-w-[90px] leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stories() {
  const [activeStory, setActiveStory] = useState<{tag: string, t: string, d: string, content: string, img: string, link: string} | null>(null)

  const items = [
    { img: s2, tag: 'FOUNDER', t: 'Ideas into Impact', d: 'Arjun and his team developed a solution that has helped over 2,000 young people access quality education.', link: 'Read Arjun\'s Story', content: 'Arjun started his journey with a simple idea: that every child deserves access to quality educational materials regardless of their geographic location. Through the GEL incubator program, he refined his vision, connected with key stakeholders, and successfully launched a platform that distributes digital learning resources to remote villages. Today, his initiative has scaled across three states and continues to grow.' },
    { img: s3, tag: 'ALUMNI', t: 'A Global Mindset', d: 'For Musa, GEL was more than a programme — it was the start of a global network.', link: 'Read Musa\'s Story', content: 'Coming from a small town, Musa always dreamed of making a global impact. The Global Education Lab gave him the tools, network, and confidence to step onto the world stage. During his time at Cambridge, he collaborated with peers from 15 different countries, leading to the creation of a cross-border initiative that promotes sustainable business practices in developing markets.' },
    { img: s4, tag: 'EDUCATOR', t: 'Building a Better Tomorrow', d: 'With skills gained through GEL, Aisha is driving change for a more inclusive future.', link: 'Read Aisha\'s Story', content: 'As an educator with over 10 years of experience, Aisha felt the traditional curriculum was leaving some students behind. By participating in GEL\'s educational leadership track, she learned innovative pedagogical frameworks and design-thinking principles. She has since redesigned her school\'s approach to STEM education, resulting in a 40% increase in female student engagement in sciences.' },
  ]

  const mainStory = {
    img: s1, tag: 'Participant', t: 'From Student to Changemaker', d: 'Riya co-founded a sustainability startup after her GEL experience and is now creating real impact in her community.', link: 'Read Riya\'s Story', content: 'Riya arrived at the GEL programme with a passion for environmental conservation but lacked the business acumen to turn her ideas into reality. Through intensive mentorship, venture building workshops, and pitch sessions, she transformed her concept into a viable startup. Her company now works with local municipalities to implement waste-to-energy solutions, reducing landfill waste by 25% in her home district.'
  }

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32 border-b border-border/60 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— Voices of Change</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem]">Stories that <span className="font-serif italic text-gold">inspire.</span></h2>
          <p className="mt-6 text-[15px] font-medium text-forest/70 max-w-lg leading-relaxed">Real people, real outcomes — hear journeys that show what our programmes make possible.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Story */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl flex flex-col justify-end min-h-[550px] lg:min-h-full">
             <img src={mainStory.img} alt="Student" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/40 to-transparent" />
             <div className="relative p-10 md:p-12">
                <span className="inline-block rounded-full bg-gold px-3.5 py-1.5 text-[14px] font-bold uppercase tracking-[0.2em] text-forest-deep mb-6">{mainStory.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-cream mb-5 leading-tight">{mainStory.t}</h3>
                <p className="text-cream/80 text-[15px] md:text-base leading-relaxed mb-8">{mainStory.d}</p>
                <button onClick={() => setActiveStory(mainStory)} className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors group/link text-left">
                  {mainStory.link} <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </button>
             </div>
          </div>

          {/* List of Stories */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {items.map((s) => (
              <article key={s.t} className="flex flex-col sm:flex-row gap-8 p-6 md:p-8 rounded-[2.5rem] border border-forest/10 bg-white hover:border-gold/40 hover:shadow-xl transition-all duration-300 group">
                <div className="sm:w-56 shrink-0 overflow-hidden rounded-2xl border border-border/60">
                  <img src={s.img} alt={s.t} className="h-40 sm:h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center py-2 items-start">
                  <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold mb-3">— {s.tag}</span>
                  <h3 className="text-2xl font-bold text-forest-deep mb-3 group-hover:text-gold transition-colors">{s.t}</h3>
                  <p className="text-[15px] text-forest/70 leading-relaxed mb-6">{s.d}</p>
                  <button onClick={() => setActiveStory(s)} className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.15em] text-forest hover:text-gold transition-colors group/link text-left">
                    {s.link} <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Banner / Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <div className="absolute inset-0 bg-forest-deep/80 backdrop-blur-md transition-opacity" onClick={() => setActiveStory(null)} />
          <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 max-h-[90vh]">
            {/* Modal Image */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
              <img src={activeStory.img} alt={activeStory.t} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Modal Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
              <button onClick={() => setActiveStory(null)} className="absolute top-6 right-6 p-2.5 rounded-full bg-forest/5 text-forest hover:bg-forest/10 hover:text-forest-deep transition-colors z-10">
                <X className="w-5 h-5" />
              </button>
              
              <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-gold mb-4">— {activeStory.tag}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-forest-deep mb-5 leading-tight">{activeStory.t}</h3>
              <p className="text-[15px] md:text-base font-medium text-forest/80 italic mb-8 border-l-[3px] border-gold pl-5 py-1 leading-relaxed">
                "{activeStory.d}"
              </p>
              
              <div className="text-forest/70 leading-[1.8] mb-10 text-[15px] md:text-[15px]">
                <p>{activeStory.content}</p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-forest/10 flex justify-between items-center">
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-forest/40">Global Education Lab</span>
                <button onClick={() => setActiveStory(null)} className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest hover:text-gold transition-colors">
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function SDGs() {
  const sdgs = [
    { num: 4, label: 'Quality Education' },
    { num: 5, label: 'Gender Equality' },
    { num: 8, label: 'Decent Work & Economic Growth' },
    { num: 9, label: 'Industry, Innovation & Infrastructure' },
    { num: 13, label: 'Climate Action' },
    { num: 17, label: 'Partnerships for the Goals' },
  ]
  return (
    <section className="bg-forest-deep py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
         <div className="max-w-2xl mb-16">
           <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">GLOBAL GOALS</span>
           <h2 className="mt-4 text-4xl font-bold tracking-tight text-cream md:text-[3.5rem] leading-[1.1] mb-6">
             Advancing the<br />
             <span className="font-serif italic text-gold">Global Goals.</span>
           </h2>
           <p className="text-[15px] text-cream/60 max-w-2xl">
             Our programmes align with the United Nations Sustainable Development Goals to create a positive and lasting impact worldwide.
           </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {sdgs.map((sdg) => (
             <div key={sdg.num} className="bg-[#0A2215]/50 rounded-[1.5rem] border border-white/5 p-8 flex flex-col justify-between min-h-[180px] hover:bg-[#0A2215]/80 hover:border-gold/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
               <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform">
                   <Globe className="h-4 w-4 text-gold" />
                 </div>
                 <span className="text-3xl font-serif italic font-bold text-gold/80 group-hover:text-gold transition-colors">
                   {sdg.num < 10 ? `0${sdg.num}` : sdg.num}
                 </span>
               </div>
               <h3 className="text-lg font-bold text-cream leading-snug">{sdg.label}</h3>
             </div>
           ))}
         </div>
      </div>
    </section>
  )
}

function Numbers() {
  const regions = [
    { label: 'UK & Europe', pct: 40 },
    { label: 'Asia', pct: 30 },
    { label: 'Africa', pct: 15 },
    { label: 'Americas', pct: 10 },
    { label: 'Other', pct: 5 },
  ]
  const growth = [
    { y: '2020', v: 1000 },
    { y: '2021', v: 1800 },
    { y: '2022', v: 2700 },
    { y: '2023', v: 3600 },
    { y: '2024', v: 4400 },
    { y: '2025', v: 5500 },
  ]
  const stages = [
    { label: 'Early Stage', pct: 60 },
    { label: 'Growth Stage', pct: 30 },
    { label: 'Scaling Stage', pct: 10 },
  ]
  const max = Math.max(...growth.map((g) => g.v))

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32 border-b border-border/60">
       <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— The Data</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem]">Impact in <span className="font-serif italic text-gold">numbers.</span></h2>
          </div>
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest/50 md:pb-2 border-b border-forest/10 pb-1">Source: GEL Programme Records</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Chart 1 */}
          <div className="group rounded-[2.5rem] border border-white bg-gradient-to-b from-white to-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="flex justify-between items-center mb-12 border-b border-forest/5 pb-5 relative z-10">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep">Learners by Region</h3>
              <span className="text-[13px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">Five Regions</span>
            </div>
            <div className="flex flex-col gap-10 relative z-10">
              <div className="relative mx-auto h-32 w-32 shrink-0 rounded-full border-[12px] border-forest border-r-gold border-t-forest/10 shadow-[0_0_40px_rgba(20,40,30,0.05)] transition-transform duration-700 group-hover:rotate-45">
                 <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#FAFAF8] shadow-inner flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                 </div>
              </div>
              <ul className="space-y-4 w-full">
                {regions.map((r, i) => (
                  <li key={r.label} className="flex justify-between items-center text-[14px] font-bold text-forest-deep group/item">
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shadow-sm transition-transform group-hover/item:scale-150 ${i === 0 ? 'bg-forest' : i === 1 ? 'bg-gold' : 'bg-forest/20'}`} />
                      <span className="group-hover/item:text-gold transition-colors">{r.label}</span>
                    </span>
                    <span className="font-serif italic text-forest-deep text-[15px]">{r.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="group rounded-[2.5rem] border border-white bg-gradient-to-b from-white to-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full blur-3xl group-hover:bg-forest/10 transition-colors duration-500" />
            <div className="flex justify-between items-center mb-12 border-b border-forest/5 pb-5 relative z-10">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep">Programme Growth</h3>
              <span className="text-[13px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">2020 — 2025</span>
            </div>
            <div className="flex h-[200px] items-end justify-between gap-3 relative mt-10 z-10">
               <div className="absolute inset-0 border-b border-l border-forest/10" />
              {growth.map((g, i) => (
                <div key={g.y} className="flex flex-col items-center gap-4 relative z-10 w-full group/bar">
                  <div 
                    className={`w-full max-w-[12px] rounded-t-sm shadow-sm transition-all duration-500 group-hover/bar:bg-gold ${i === growth.length - 1 ? 'bg-gold' : 'bg-forest/15'}`} 
                    style={{ height: `${(g.v / max) * 100}%` }} 
                  >
                    {i === growth.length - 1 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(200,160,90,0.8)] animate-pulse" />}
                  </div>
                  <span className="text-[13px] font-bold text-forest/40 group-hover/bar:text-gold transition-colors">{g.y}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 3 */}
          <div className="group rounded-[2.5rem] border border-white bg-gradient-to-b from-white to-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="flex justify-between items-center mb-12 border-b border-forest/5 pb-5 relative z-10">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep">Startups Supported</h3>
              <span className="text-[13px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">By Stage</span>
            </div>
            <div className="flex flex-col gap-10 relative z-10">
              <div className="relative mx-auto h-32 w-32 shrink-0 rounded-full border-[12px] border-forest border-b-gold border-r-forest/10 shadow-[0_0_40px_rgba(20,40,30,0.05)] transition-transform duration-700 group-hover:-rotate-45">
                 <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#FAFAF8] shadow-inner flex items-center justify-center">
                   <div className="h-2 w-2 rounded-full bg-forest animate-pulse" />
                 </div>
              </div>
              <ul className="space-y-4 w-full">
                {stages.map((r, i) => (
                  <li key={r.label} className="flex justify-between items-center text-[14px] font-bold text-forest-deep group/item">
                     <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shadow-sm transition-transform group-hover/item:scale-150 ${i === 0 ? 'bg-forest' : i === 1 ? 'bg-gold' : 'bg-forest/20'}`} />
                      <span className="group-hover/item:text-gold transition-colors">{r.label}</span>
                    </span>
                    <span className="font-serif italic text-forest-deep text-[15px]">{r.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { q: "The ecosystem approach adopted by GEL is truly transformative. It doesn't just educate; it builds bridges between continents.", a: "Dr. Sarah Jenkins", r: "University of Oxford" },
    { q: "Our partnership with GEL has accelerated our research commercialisation beyond our initial expectations.", a: "Marcus Thorne", r: "Tech Innovators Alliance" }
  ]
  
  return (
    <section className="bg-cream py-24 md:py-32 border-b border-border/60 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— What They Say</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem]">Perspectives on <span className="font-serif italic text-gold">impact.</span></h2>
          <div className="mt-8 h-px w-24 bg-gold/60" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
             <div key={i} className="rounded-[2.5rem] border border-forest/10 bg-white p-12 relative shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Quote className="absolute top-12 right-12 h-16 w-16 text-forest/5" />
                <p className="text-2xl md:text-3xl font-serif italic text-forest-deep leading-relaxed mb-10 relative z-10">"{t.q}"</p>
                <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-full bg-forest/10 flex items-center justify-center text-forest font-serif italic text-xl">{t.a.charAt(0)}</div>
                   <div>
                     <p className="text-[15px] font-bold text-forest-deep">{t.a}</p>
                     <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-forest/50 mt-1">{t.r}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobalNetwork() {
  const nodes = [
    { id: 'uk', label: 'Cambridge (HQ)', x: 25, y: 35, isMain: true },
    { id: 'ny', label: 'New York', x: 15, y: 40 },
    { id: 'dubai', label: 'Dubai', x: 55, y: 55 },
    { id: 'singapore', label: 'Singapore', x: 75, y: 65 },
    { id: 'tokyo', label: 'Tokyo', x: 85, y: 35 },
  ]
  return (
    <section className="bg-cream py-24 md:py-32 relative overflow-hidden border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— Global Reach</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem]">Connecting <span className="font-serif italic text-gold">continents.</span></h2>
          <p className="mt-8 max-w-2xl text-lg text-forest/70 leading-relaxed">From Cambridge to the world, our network spans over 25 countries, fostering cross-border collaboration and innovation.</p>
        </div>
        
        <div className="relative mx-auto max-w-5xl h-[400px] md:h-[500px] bg-forest-deep rounded-[2.5rem] border border-white/10 shadow-2xl p-10 overflow-hidden group">
           <div className="absolute inset-0 [background-image:linear-gradient(var(--cream)_1px,transparent_1px),linear-gradient(90deg,var(--cream)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
           <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/20 transition-colors duration-1000" />
           <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cream/5 rounded-full blur-[80px]" />

           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M 25,35 Q 20,25 15,40" fill="none" stroke="var(--gold)" strokeWidth="0.2" strokeDasharray="1 1" className="opacity-40" />
             <path d="M 25,35 Q 40,25 55,55" fill="none" stroke="var(--gold)" strokeWidth="0.2" strokeDasharray="1 1" className="opacity-40" />
             <path d="M 55,55 Q 65,70 75,65" fill="none" stroke="var(--gold)" strokeWidth="0.2" strokeDasharray="1 1" className="opacity-40" />
             <path d="M 55,55 Q 70,30 85,35" fill="none" stroke="var(--gold)" strokeWidth="0.2" strokeDasharray="1 1" className="opacity-40" />
           </svg>

           {nodes.map(n => (
              <div key={n.id} className="absolute flex flex-col items-center gap-2 group/node cursor-pointer" style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -50%)' }}>
                 <div className={`absolute rounded-full animate-ping opacity-50 ${n.isMain ? 'w-8 h-8 bg-gold' : 'w-4 h-4 bg-cream'}`} style={{ animationDuration: '3s' }} />
                 <div className={`rounded-full relative z-10 transition-transform duration-300 group-hover/node:scale-150 ${n.isMain ? 'w-4 h-4 bg-gold shadow-[0_0_15px_rgba(200,160,90,0.8)]' : 'w-2.5 h-2.5 bg-cream shadow-[0_0_8px_rgba(250,248,240,0.6)]'}`} />
                 
                 <span className="opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 text-[14px] font-bold uppercase tracking-widest text-forest-deep bg-cream px-3 py-1.5 rounded-full shadow-lg absolute top-6 z-20 pointer-events-none whitespace-nowrap">
                   {n.label}
                 </span>
              </div>
           ))}

           <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-forest-deep border border-forest/50 shadow-2xl rounded-2xl p-5 max-w-[200px]">
              <div className="text-3xl font-serif italic text-gold mb-1">25+</div>
              <div className="text-[14px] font-bold uppercase tracking-[0.15em] text-cream/70">Countries in our network</div>
           </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-forest-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">— Get Involved</span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-cream md:text-[4.5rem] leading-[1.1]">
              Together, we create<br />impact that <span className="font-serif italic text-gold">lasts.</span>
            </h2>
            <p className="mt-6 text-[15px] text-cream/60 max-w-2xl">
              Join our global community of learners, innovators and changemakers. Let's start the conversation.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6">
             <Link to="/contact" className="group relative inline-flex items-center gap-8 rounded-2xl bg-gold px-8 py-6 text-[15px] font-bold tracking-wide text-forest-deep transition-all hover:bg-white hover:scale-105 shadow-xl hover:shadow-2xl">
                Get Involved
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </Link>
             <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-cream/50 pl-4 lg:pl-0">hello@globaledulab.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}