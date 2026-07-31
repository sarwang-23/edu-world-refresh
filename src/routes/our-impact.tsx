import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Users, GraduationCap, Leaf, Globe, Rocket, Award, Heart, BookOpen, Quote, Sparkles, X } from 'lucide-react'
import samTully from '@/assets/people/sam_tully.jpg';
import lucyJung from '@/assets/people/lucy_jung.jpg';
import bidishaBanerjee from '@/assets/people/bidisha_banerjee.jpg';
import dhruvGalgotia from '@/assets/people/dhruv_galgotia.jpg';
import amarjitSingh from '@/assets/people/amarjit_singh.jpg';
import lindaTang from '@/assets/people/linda_tang.jpg';
import tendaiNzonzo from '@/assets/people/tendai_nzonzo.jpg';
import rosalindHowell from '@/assets/people/rosalind_howell.jpg';
import sydneyConner from '@/assets/people/sydney_conner.jpg';
import yvonneWalburga from '@/assets/people/yvonne_walburga.jpg';
import pushkarSingh from '@/assets/people/pushkar_singh.jpg';
import jivikaVikamshi from '@/assets/people/jivika_vikamshi.jpg';
import abhishekKumar from '@/assets/people/abhishek_kumar.jpg';
import samvritha from '@/assets/people/samvritha.png';
import heroImg from '@/assets/impact_new_1.jpg'
import s1 from '@/assets/students.jpg'
import s2 from '@/assets/school-leaders.jpg'
import s3 from '@/assets/business-leaders.jpg'
import s4 from '@/assets/impact_new_2.jpg'
import { Footer } from './index'
import person9Img from '@/assets/person9.jpg'
import person10Img from '@/assets/person10.jpg'

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

      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative border-b border-border/60 bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 pb-20 md:grid-cols-12 md:pb-28 pt-6">
        
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

           <div className="mt-24 flex items-center gap-3 text-[15px] font-medium uppercase tracking-[0.22em] text-forest/80">
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
                    <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-cream/70 max-w-[90px] leading-snug">{stat.label}</span>
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
    {
      img: tendaiNzonzo,
      tag: 'ZERO-TO-ONE',
      t: 'From Problem to Winning Pitch',
      d: `"We didn't begin with a finished product. We began with a problem worth solving and the willingness to test our way toward it, fast."`,
      link: "Read Tendai's Story",
      content: `What I liked most about GEL Zero-to-One was the ability to work with mentors as they really helped transform and learn new skills and ways of thinking. It helped me refine my idea by making me think and question about how to pitch. We didn't begin with a finished product. We began with a problem worth solving and the willingness to test our way toward it, fast. — Tendai Nzonzo, Sana AI (Winning team – Zero-to-One)`
    },
    {
      img: pushkarSingh,
      tag: 'GRADUATE PROGRAMME',
      t: 'Cambridge Changed the Way I Think',
      d: '"I carry back much more than souvenirs and photographs. I leave Cambridge with lifelong friendships, invaluable mentorship, and lessons that will stay with me forever."',
      link: 'Read Pushkar\'s Story',
      content: 'These 12 days at Girton College, University of Cambridge, through the Global Education Lab, have transformed the way I think about entrepreneurship, leadership, and innovation. Every lecture, every discussion, every pitch, and every interaction has helped me grow — not only as the founder of CARBONSYNQ EARTH, but also as an individual. A heartfelt thank you to the entire Global Education Lab team for creating such a remarkable experience. — Pushkar Singh, Founder, CarbonSynq Earth'
    },
    {
      img: samvritha,
      tag: 'YOUNG LEADERS',
      t: 'A Summer That Changed Everything',
      d: '"My two weeks at Cambridge felt like a dream — I left feeling excited about my future."',
      link: 'Read Samvritha\'s Story',
      content: 'My two weeks at the summer programme in Cambridge felt like a dream. At first, I was nervous about being so far from home, but very quickly it became one of the best experiences of my life. I met amazing people from different countries, made real friendships, and felt like I grew more confident every day. The classes were fun and inspiring, especially entrepreneurship, pitching, and public speaking. I left feeling excited about my future. — Samvritha, GEL Young Leaders Summer Programme'
    },
  ]

  const mainStory = {
    img: bidishaBanerjee,
    tag: 'GILP DELEGATE',
    t: "One of the Best Executive Education Experiences I've Had",
    d: '"A week at the University of Cambridge with leaders from across the world — every insight was practical enough to take back and apply immediately."',
    link: "Read Bidisha's Story",
    content: `One of the best executive education experiences I've had. A week at the University of Cambridge with leaders from across the world, learning from exceptional faculty and exchanging perspectives that challenged my thinking. The biggest takeaway? Every insight was practical enough to take back and apply immediately. If you're considering it and would like to know more from an alumnus' perspective, feel free to reach out for a chat. — Bidisha Banerjee, GEL Programme Delegate, Founder – Rysen Coaching, Author – Your Turn to Rise`
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
                <span className="inline-block rounded-full bg-gold px-3.5 py-1.5 text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep mb-6">{mainStory.tag}</span>
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
                  <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold mb-3">— {s.tag}</span>
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
              
              <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold mb-4">— {activeStory.tag}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-forest-deep mb-5 leading-tight">{activeStory.t}</h3>
              <p className="text-[15px] md:text-base font-medium text-forest/80 italic mb-8 border-l-[3px] border-gold pl-5 py-1 leading-relaxed">
                "{activeStory.d}"
              </p>
              
              <div className="text-forest/70 leading-[1.8] mb-10 text-[15px] md:text-[15px]">
                <p>{activeStory.content}</p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-forest/10 flex justify-between items-center">
                <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70">Global Education Lab</span>
                <button onClick={() => setActiveStory(null)} className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest hover:text-gold transition-colors">
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
    { num: 1, label: 'No Poverty' },
    { num: 2, label: 'Zero Hunger' },
    { num: 3, label: 'Good Health and Well-Being' },
    { num: 4, label: 'Quality Education' },
    { num: 5, label: 'Gender Equality' },
    { num: 6, label: 'Clean Water and Sanitation' },
    { num: 7, label: 'Affordable and Clean Energy' },
    { num: 8, label: 'Decent Work & Economic Growth' },
    { num: 9, label: 'Industry, Innovation & Infrastructure' },
    { num: 10, label: 'Reduced Inequalities' },
    { num: 11, label: 'Sustainable Cities and Communities' },
    { num: 12, label: 'Responsible Consumption and Production' },
    { num: 13, label: 'Climate Action' },
    { num: 14, label: 'Life Below Water' },
    { num: 15, label: 'Life on Land' },
    { num: 16, label: 'Peace, Justice and Strong Institutions' },
    { num: 17, label: 'Partnerships for the Goals' },
  ]
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-y border-forest-deep/10">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
         <div className="max-w-2xl mb-16">
           <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">GLOBAL GOALS</span>
           <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem] leading-[1.1] mb-6">
             Advancing the<br />
             <span className="font-serif italic text-gold">Global Goals.</span>
           </h2>
           <p className="text-[16px] text-forest-deep/70 max-w-2xl leading-relaxed">
             Our programmes align with the United Nations Sustainable Development Goals to create a positive and lasting impact worldwide.
           </p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {sdgs.map((sdg) => {
             const formattedNum = sdg.num < 10 ? `0${sdg.num}` : sdg.num;
             return (
               <div key={sdg.num} className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group aspect-square">
                 <img
                   src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${formattedNum}.jpg`}
                   alt={`SDG Goal ${sdg.num}: ${sdg.label}`}
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   onError={(e) => {
                     // Fallback in case of broken link
                     (e.target as HTMLImageElement).src = `https://sdgs.un.org/sites/default/files/goals/E_SDG_logo_UN_emblem_square_trans_WEB.png`;
                   }}
                 />
               </div>
             );
           })}
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
          <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70 md:pb-2 border-b border-forest/10 pb-1">Source: GEL Programme Records</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Chart 1 */}
          <div className="group rounded-[2.5rem] border border-white bg-gradient-to-b from-white to-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="flex justify-between items-center mb-12 border-b border-forest/5 pb-5 relative z-10">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep">Learners by Region</h3>
              <span className="text-[15px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">Five Regions</span>
            </div>
            <div className="flex flex-col gap-10 relative z-10">
              <div className="relative mx-auto h-32 w-32 shrink-0 rounded-full border-[12px] border-forest border-r-gold border-t-forest/10 shadow-[0_0_40px_rgba(20,40,30,0.05)] transition-transform duration-700 group-hover:rotate-45">
                 <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#FAFAF8] shadow-inner flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                 </div>
              </div>
              <ul className="space-y-4 w-full">
                {regions.map((r, i) => (
                  <li key={r.label} className="flex justify-between items-center text-[15px] font-bold text-forest-deep group/item">
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
              <span className="text-[15px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">2020 — 2025</span>
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
                  <span className="text-[15px] font-bold text-forest/70 group-hover/bar:text-gold transition-colors">{g.y}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 3 */}
          <div className="group rounded-[2.5rem] border border-white bg-gradient-to-b from-white to-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="flex justify-between items-center mb-12 border-b border-forest/5 pb-5 relative z-10">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep">Startups Supported</h3>
              <span className="text-[15px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">By Stage</span>
            </div>
            <div className="flex flex-col gap-10 relative z-10">
              <div className="relative mx-auto h-32 w-32 shrink-0 rounded-full border-[12px] border-forest border-b-gold border-r-forest/10 shadow-[0_0_40px_rgba(20,40,30,0.05)] transition-transform duration-700 group-hover:-rotate-45">
                 <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#FAFAF8] shadow-inner flex items-center justify-center">
                   <div className="h-2 w-2 rounded-full bg-forest animate-pulse" />
                 </div>
              </div>
              <ul className="space-y-4 w-full">
                {stages.map((r, i) => (
                  <li key={r.label} className="flex justify-between items-center text-[15px] font-bold text-forest-deep group/item">
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
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const testimonials = [
    {
      q: "An incredible week at the University of Cambridge filled with unforgettable memories, meaningful conversations, and the beginning of exciting new synergies and alliances. This journey has been a true milestone and a benchmark for many exciting initiatives ahead. Grateful for the connections, collaborations, and shared vision that emerged throughout the week. Looking forward to announcing several new engagements and partnerships very soon. The journey has just begun.",
      a: "Dr. Dhruv Galgotia",
      r: "CEO, Galgotias Education Group — GILP Delegate",
      img: dhruvGalgotia,
      link: "https://lnkd.in/p/d7vJ9pPF"
    },
    {
      q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School with a great cohort from India and a few other places. What a week it was, covering AI, geopolitics, marketing, branding, strategy, rhetoric, entrepreneurship and so much more. All taught by energetic and engaging leaders in their respective fields. I also learnt so much from my fellow participants, not least coming away feeling hugely positive about the enduring potential and dynamism of Indian entrepreneurialism. That too, in the confines of one of the world's finest Universities and one of its most beautiful cities. Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce.",
      a: "Sam Tully",
      r: "Trustee, Pratham UK — GILP Delegate",
      img: samTully,
      link: "https://www.linkedin.com/posts/sam-tully_its-like-a-rolls-royce-thats-how-sam-activity-7480318064505462784-Fnbc"
    },
    {
      q: "The 48 hours pushed me to think about a problem I knew scientifically from a completely different angle, as a market structure failure, not just a research gap. That reframe was the most valuable part.",
      a: "Sydney Conner",
      r: "PhD in Biomedical Engineering, University of Cambridge — Zero-to-One",
      img: sydneyConner,
      link: "https://www.linkedin.com/posts/sydney-j-conner_cjbs-z21-zerotoone-activity-7474838677874065409-qcfI"
    },
    {
      q: "Grateful for the practical insights, peer-to-peer learning, and collaborative spirit. Kudos to the Global Education Lab and team for delivering such an impactful programme!",
      a: "Amarjit Singh",
      r: "CEO, India Business Forum — GILP Delegate",
      img: amarjitSingh,
      link: "https://www.linkedin.com/posts/amarjit-singh-13860aa_great-leaders-know-that-learning-never-stops-activity-7485621706183688192-W-d7"
    },
    {
      q: "Sometimes life changes on a random Monday afternoon. Mine did - at THE UNIVERSITY OF CAMBRIDGE !!!!! What started as a quiet summer turned into a turning point I didn’t even know I needed. A place, a community, a classroom, conversations and souls that shifted my mind and my path, forever. If there’s one thing this journey taught me, it’s that opportunities like this don’t just appear - they are created by people who believe in the power of education to change lives. And for that, I owe my deepest gratitude to Suyash Bhatt and Global Education Lab",
      a: "Jivika Vikamshi",
      r: "Co-Founder, Manashakti — GEL Summer Immersion",
      img: jivikaVikamshi,
      link: "https://www.linkedin.com/posts/jivika11_how-my-cambridge-summer-became-a-turning-activity-7404572610535043072-wgWJ"
    },
    {
      q: "I was impressed by how far ventures (on GEL programme) got in such a short time, considering stakeholders and business models and how to make the sustainable growth of their ideas possible. Thank you for the opportunity to mentor, and I’m excited to follow more of GEL’s programmes.",
      a: "Lucy Jung",
      r: "Founder & CEO, LYEONS — GEL Mentor",
      img: lucyJung,
      link: "https://www.linkedin.com/posts/lyeons_digitalhealth-innovation-brainhealth-activity-7474751134113619968-4SC6"
    },
    {
      q: "More importantly, KavachAI has been selected for the GEL Global Ventures Programme, unlocking support for global expansion and UK market exploration. Building for the UK means meeting some of the world's highest expectations around privacy and accountability. Those standards don't just prepare us for a new market—they make our product stronger everywhere!!",
      a: "Abhishek Kumar",
      r: "Founder, Kavach AI — GEL Graduate Summer Programme",
      img: abhishekKumar,
      link: "https://lnkd.in/p/gAwu3seA"
    },
    {
      q: "Good team vibe, good organisation, like the short content inserts.",
      a: "Linda Tang",
      r: "Medicine & Natural Science Student, University of Cambridge",
      img: lindaTang,
      link: "https://lnkd.in/p/dMFAm33S"
    },
    {
      q: "There were times during the weekend when I knew that what I was learning would stick with me throughout my career journey, and I hope to reflect more in depth on these experiences in future posts. There aren't many experiences where you can feel yourself changing and growing in real time, but at every second of this weekend I felt myself growing in confidence, expertise and becoming more and more inspired. I loved the individualised feedback sessions, really helped us build confidence in our ideas and create one idea from a collection of ideas. The session helped us figure out how to present the problem, and we then reverse engineered our concept to focus on really clearly addressing this.",
      a: "Rosalind Howell",
      r: "Zero-to-One Participant",
      img: rosalindHowell,
      link: "https://www.linkedin.com/posts/rosalind-howell-721b22298_i-am-almost-lost-for-words-to-explain-how-activity-7474891891080310784-91r3"
    },
    {
      q: "I was humbled and exhilarated for the recognition of the potential of EquiGen by our fellow cohort members and the judges. This weekend emphasized the power of an amazing team, driven by a single vision and a clear purpose. Building an entrepreneurial mindset as a researcher is a powerful toolkit. However, the right team and the right people to support and back your idea will make a huge difference. As the African proverb goes..'If you want to go fast, go alone. If you want to go far, go together.'",
      a: "Dr. Yvonne Walburga Joko-Fru",
      r: "MD PhD, Post-doctoral Research Affiliate, University of Cambridge",
      img: yvonneWalburga,
      link: "https://www.linkedin.com/posts/yvonne-walburga-joko-fru_cjbs-z21-zerotoone-activity-7475125636232257536-GVF9/"
    }
  ]
  
  return (
    <section className="bg-zinc-950 py-28 md:py-36 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(250,248,240,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(250,248,240,0.025)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cream/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[100rem] px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <span className="text-[15px] font-bold uppercase tracking-[0.4em] text-gold mb-4">— What They Say</span>
          <h2 className="text-4xl font-bold tracking-tight text-cream md:text-[3.5rem]">
            Perspectives on <span className="font-serif italic text-gold">impact.</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* 4-column strict grid (Perfectly aligned, professional look) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-cream border border-cream/90 p-8 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-400 cursor-pointer overflow-hidden h-full"
              onClick={() => setSelectedTestimonial(t)}
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Large decorative quote mark in background */}
              <div className="absolute top-4 right-6 text-[8rem] font-serif leading-none text-forest-deep/[0.03] select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                "
              </div>

              {/* Programme badge */}
              <div className="inline-flex items-center gap-2 rounded-md bg-forest-deep/5 px-3 py-1.5 mb-6 self-start border border-forest-deep/10">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-forest-deep/80">
                  {t.r.split('—')[1]?.trim() || 'Alumni'}
                </span>
              </div>

              {/* Quote text — modern sans-serif, clean, professional */}
              <div className="flex-1">
                <p className="text-[0.95rem] font-medium text-forest-deep/90 leading-[1.7] line-clamp-6 mb-6 relative z-10">
                  {t.q}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedTestimonial(t); }}
                  className="inline-flex items-center gap-1.5 text-gold font-bold uppercase tracking-[0.2em] text-[13px] hover:gap-2 transition-all duration-300 mb-6"
                >
                  Read More <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                {/* Divider */}
                <div className="h-px w-full bg-forest-deep/10 mb-5" />

                {/* Author row */}
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gold/40 group-hover:ring-gold/80 transition-all duration-300">
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-gold border-2 border-cream" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-forest-deep leading-tight mb-0.5">{t.a}</p>
                    <p className="text-[13px] text-forest-deep/80 font-medium leading-tight line-clamp-1">{t.r.split('—')[0]?.trim()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12">
          <div
            className="absolute inset-0 bg-forest-deep/90 backdrop-blur-md"
            onClick={() => setSelectedTestimonial(null)}
          />
          <div className="relative w-full max-w-3xl bg-cream rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] border border-cream/80 animate-in fade-in zoom-in duration-300">
            {/* Gold top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-t-[2.5rem]" />

            <div className="p-8 md:p-14">
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 p-3 rounded-full border border-forest-deep/15 bg-forest-deep/5 hover:bg-forest-deep/10 text-forest-deep/80 hover:text-forest-deep transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Programme badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-forest-deep/5 border border-forest-deep/10 px-4 py-1.5 mb-8">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-forest-deep/80">
                  {selectedTestimonial.r.split('—')[1]?.trim() || 'Alumni'}
                </span>
              </div>

              <div className="text-[4.5rem] leading-none font-serif text-gold/80 -mt-2 mb-2 select-none">"</div>

              <p className="text-xl md:text-2xl font-serif italic text-forest-deep/90 leading-relaxed mb-12">
                {selectedTestimonial.q}
              </p>

              <div className="h-px w-full bg-forest-deep/10 mb-8" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-gold/50 shrink-0">
                    <img src={selectedTestimonial.img} alt={selectedTestimonial.a} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[17px] font-bold text-forest-deep mb-1">{selectedTestimonial.a}</p>
                    <p className="text-[15px] font-medium text-forest-deep/80">{selectedTestimonial.r}</p>
                  </div>
                </div>

                {selectedTestimonial.link && (
                  <a
                    href={selectedTestimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-forest-deep px-7 py-4 text-[15px] font-bold tracking-wide text-gold hover:bg-forest transition-all shrink-0 shadow-xl hover:-translate-y-1"
                  >
                    View Original Post
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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
            <p className="mt-6 text-[15px] text-cream/80 max-w-2xl">
              Join our global community of learners, innovators and changemakers. Let's start the conversation.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6">
             <Link to="/contact" className="group relative inline-flex items-center gap-8 rounded-2xl bg-gold px-8 py-6 text-[15px] font-bold tracking-wide text-forest-deep transition-all hover:bg-white hover:scale-105 shadow-xl hover:shadow-2xl">
                Get Involved
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </Link>
             <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-cream/70 pl-4 lg:pl-0">hello@globaledulab.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}