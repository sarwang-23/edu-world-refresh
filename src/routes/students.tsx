import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import {
  ArrowUpRight, ArrowDownToLine, GraduationCap, Users, Globe2, Lightbulb,
  Compass, MonitorPlay, Code, Target, MessageSquare, Microscope,
  User, Building2, CheckCircle2, Star, ShieldCheck, Zap, Award
} from 'lucide-react'
import { Footer } from './index'
import studentsImg from '../assets/students.jpg'
import cambridgeImg from '../assets/cambridge_6.jpg'
import heroImg from '../assets/young-leaders.png'
import teachersImg from '../assets/teachers.jpg'
import stemImg from '../assets/STEM exploration.png'
import publicSpeakingImg from '../assets/Public speaking.png'
import siteVisitImg from '../assets/Site visit (4).png'
import socialCulturalImg from '../assets/Social & Cultural (4).png'
import mentor1 from '../assets/YusufH.jpg'
import mentor2 from '../assets/IMG_4915.jpg'
import mentor3 from '../assets/IMG_5138_2.jpg'
import mentor4 from '../assets/person4.jpg'
import mentor5 from '../assets/person5.jpg'
import ylGallery1 from '../assets/young_leaders_1.jpg'
import ylGallery2 from '../assets/young_leaders_2.jpg'
import ylGallery3 from '../assets/young_leaders_3.jpg'
import ylGallery4 from '../assets/young_leaders_4.jpg'
import ylGallery5 from '../assets/young_leaders_5.jpg'
import guyDozaImg from '../assets/faculty-guy.jpg'
import suyashImg from '../assets/founder_hd.png'
import yvesImg from '../assets/yves_gaspar.jpg'
import shvetaImg from '../assets/person9.jpg'
import charlesImg from '../assets/Roddie_Charles.jpg'
import danielImg from '../assets/Dan.jpeg'
import timImg from '../assets/person12.jpg'
import nimImg from '../assets/person7.jpg'
import santoshImg from '../assets/santosh_huralikoppi.jpg'
import serishImg from '../assets/faculty-serish.jpg'
import andrewImg from '../assets/person4.jpg'
import jaideepImg from '../assets/person11.jpg'
import khushbooImg from '../assets/person2.jpg'
import { SharedTestimonials } from '@/components/SharedTestimonials';
import rosalindImg from '../assets/people/rosalind_howell.jpg';
import bidishaImg from '../assets/people/bidisha_banerjee.jpg';
import samvrithaImg from '../assets/people/samvritha.png';



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
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <StatsMarquee />
      <CoreElements />
      <PartnersAndMentors />
      <KeyFacilitators />
      <ChooseYourTrack />
      <ValueProps />
      <CohortGallery />
      <SharedTestimonials customTestimonials={[
        {
          q: "My two weeks at the summer programme in Cambridge felt like a dream. At first, I was nervous about being so far from home, but very quickly it became one of the best experiences of my life. I met amazing people from different countries, made real friendships, and felt like I grew more confident every day. The classes were fun and inspiring.",
          a: "Samvritha",
          r: "Young Leader Delegate",
          tag: "Young Leaders",
          img: samvrithaImg,
          featured: true,
        },
        {
          q: "There were times during the weekend when I knew that what I was learning would stick with me throughout my career journey... There aren't many experiences where you can feel yourself changing and growing in real time, but at every second of this weekend I felt myself growing in confidence.",
          a: "Rosalind Howell",
          r: "Zero-to-One Participant",
          tag: "Startup Bootcamp",
          img: rosalindImg,
          featured: false,
        },
        {
          q: "My experience at the Global India Leadership Programme was truly exceptional. Engaging with such a diverse and dynamic cohort while learning from world-class faculty at Cambridge has been incredibly enriching. The insights gained here will undoubtedly shape our future strategies at Talent Element.",
          a: "Bidisha Banerjee",
          r: "Partner, Talent Element",
          tag: "GILP Delegate",
          img: bidishaImg,
          featured: false,
        }
      ]} />
      <BottomCTA />
      <Footer />

      {/* Floating Apply Now Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 animate-float">
        <Link 
          to="/apply-now" search={{ source: "Young Leaders Summer Programme" }}
          className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 md:px-8 md:py-4 text-[14px] md:text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep shadow-2xl hover:bg-amber-400 transition-all duration-300 shadow-gold/40 hover:-translate-y-1"
        >
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

/* ─── 1. HERO · cream bg ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-16 md:pt-20 pb-32 md:pb-40 border-b border-forest/10">
      {/* layered ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] -translate-y-0 translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/6 blur-[100px]" />
      {/* grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Text column ── */}
          <div className="lg:col-span-6">
            {/* eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[13px] font-bold uppercase tracking-[0.24em] text-gold">Young Leaders Summer Programme</span>
            </div>

            <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.75rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
              Learn. Lead.<br />
              <span className="font-serif italic text-gold">Shape the future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[16px] md:text-[17px] leading-[1.7] text-forest/80 font-medium">
              An immersive summer experience in Cambridge for ambitious young learners. Explore STEM, AI, entrepreneurship and public speaking while building confidence and a global mindset.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: <GraduationCap className="h-4 w-4" />, label: 'Cambridge, UK' },
                { icon: <Users className="h-4 w-4" />, label: 'Ages 13–17' },
                { icon: <Star className="h-4 w-4" />, label: 'Summer Experience' },
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-forest/10 px-4 py-2 text-[13.5px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm">
                  <span className="text-gold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3.5 flex-wrap sm:flex-nowrap items-center">
              <a
                href="#tracks"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 sm:px-8 py-3.5 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/25 whitespace-nowrap shrink-0"
              >
                Explore Tracks
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <Link
                to="/apply-now" search={{ source: "Young Leaders Summer Programme" }}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 sm:px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold tracking-wide text-forest-deep transition-all hover:bg-gold-deep shadow-md shadow-gold/20 hover:shadow-xl hover:-translate-y-1 animate-float uppercase tracking-[0.15em] shrink-0 whitespace-nowrap"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="relative lg:col-span-6">
            {/* Main image */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 group">
              <img src={heroImg} alt="Students at Cambridge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-forest-deep/20 to-transparent" />
              {/* Bottom overlay label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Cambridge, UK</p>
                  <p className="text-white text-[16px] font-bold">Summer Experience</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gold/30 border-2 border-white/40 backdrop-blur-sm flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-forest-deep border-2 border-white/40 flex items-center justify-center text-white text-[13px] font-bold">+40</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── STATS MARQUEE ─────────────────────────────────────────────────────── */
function StatsMarquee() {
  const stats = [
    { val: '2 Tracks', label: 'Academic Pathways', sub: 'Entrepreneurship & STEM' },
    { val: 'Ages 13–17', label: 'Target Cohort', sub: 'Young leaders & innovators' },
    { val: 'Cambridge', label: 'Location', sub: 'Cambridge College' },
    { val: 'Summer', label: 'Next Cohort', sub: 'Applications Open' },
    { val: '30+', label: 'Academic hour Sessions', sub: 'Academics & industry leaders' },
    { val: '100%', label: 'Supervised', sub: 'Safe residential environment' },
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

/* ─── 2. MARQUEE STRIP · forest-deep bg ─────────────────────────────────── */
function FeaturesStrip() {
  const features = [
    { icon: <GraduationCap className="h-6 w-6" />, title: 'Future-Ready Skills', desc: 'STEM, AI, communication & entrepreneurship.' },
    { icon: <Users className="h-6 w-6" />, title: 'Cambridge Ecosystem', desc: 'Connect with researchers & student innovators.' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Hands-on Learning', desc: 'Interactive workshops & real-world challenges.' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'Global Community', desc: 'Learn with young leaders from across the globe.' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Safe Environment', desc: 'Fully supervised residential programme.' },
    { icon: <Zap className="h-6 w-6" />, title: 'Expert Mentors', desc: 'Cambridge educators & industry professionals.' },
  ]
  const items = [...features, ...features, ...features]

  return (
    <section className="relative z-20 -mt-16 bg-transparent w-full px-3 md:px-6">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_40px_rgba(26,53,35,0.12)] border border-forest/8">
          {/* fade edge masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          {/* scrolling track */}
          <div className="overflow-hidden py-7">
            <div className="animate-marquee gap-0">
              {items.map((f, i) => (
                <div key={i} className="flex shrink-0 items-center gap-5 px-8">
                  {/* icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/25 text-gold">
                    {f.icon}
                  </div>
                  {/* text */}
                  <div className="pr-8 border-r border-forest/8">
                    <p className="text-[15px] font-bold text-forest-deep whitespace-nowrap tracking-tight">{f.title}</p>
                    <p className="text-[15px] text-forest/70 whitespace-nowrap mt-0.5 font-medium">{f.desc}</p>
                  </div>
                  {/* gold dot separator */}
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/50 shrink-0 -ml-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 3. CORE ELEMENTS · white bg ───────────────────────────────────────── */
function CoreElements() {
  const elements = [
    { img: stemImg,        icon: <Microscope className="h-5 w-5" />, num: '01', title: 'STEM Exploration',    tag: 'Science & Research',    desc: 'Discover, experiment and solve real-world problems through engaging STEM sessions and interactive learning.' },
    { img: publicSpeakingImg,    icon: <MessageSquare className="h-5 w-5" />, num: '02', title: 'Public Speaking',    tag: 'Communication',          desc: 'Build confidence and sharpen communication skills through structured speaking practice and presentations.' },
    { img: siteVisitImg,   icon: <Building2 className="h-5 w-5" />, num: '03', title: 'Site Visits', tag: 'Industry',              desc: 'Gain real-world perspectives with exclusive visits to leading organisations and innovation hubs.' },
    { img: socialCulturalImg,    icon: <Users className="h-5 w-5" />,         num: '04', title: 'Social & Cultural',   tag: 'Community',             desc: 'Immerse in diverse cultures, build lasting friendships and expand your global perspective.' },
  ]
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">The Curriculum</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep leading-tight mb-4">Core programme elements.</h2>
          <p className="text-[15px] text-forest/80 max-w-lg leading-[1.75]">Every element is designed to challenge, inspire and equip young leaders for the world ahead.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {elements.map((e, i) => (
            <div key={i} className="group relative flex flex-col rounded-[1.75rem] overflow-hidden border border-forest/8 bg-white shadow-[0_4px_24px_rgba(26,53,35,0.07)] hover:shadow-[0_20px_60px_rgba(26,53,35,0.18)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">

              {/* ── Image frame ── */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* deeper gradient so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />

                {/* top row container */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                  {/* number badge */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[15px] font-bold text-white shadow-sm">
                    {e.num}
                  </div>

                  {/* tag pill */}
                  <div className="flex-1 flex justify-end">
                    <span className="inline-flex text-center items-center gap-1.5 rounded-full bg-gold/20 border border-gold/30 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
                      {e.tag}
                    </span>
                  </div>
                </div>

                {/* bottom: icon + title + desc */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {/* icon chip */}
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/20 border border-gold/30 text-gold backdrop-blur-sm group-hover:bg-gold group-hover:text-forest-deep group-hover:border-gold transition-all duration-300 shadow-lg">
                    {e.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-white leading-tight mb-2">{e.title}</h3>
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

/* ─── 4. PARTNERS & MENTORS · forest-deep bg ───────────────────────────── */
function PartnersAndMentors() {
  return (
    <section className="bg-forest-deep py-32 relative overflow-hidden">
      {/* layered glows — no grid */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gold/6 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Section header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Our Network</span>
          </div>
          <h2 className="text-[2.4rem] md:text-[3rem] font-bold text-white leading-[1.06] mb-4">
            Learn from
            <span className="font-serif italic text-gold"> the very best.</span>
          </h2>
          <p className="text-[15px] text-cream/80 max-w-xl leading-[1.8]">
            World-class educators, Cambridge researchers and industry leaders — all dedicated to your development.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Summatic Partner */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/4 backdrop-blur-sm hover:border-gold/30 transition-all duration-500">
            {/* left accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-gold/60 via-gold to-gold/20" />
            {/* glow */}
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-gold/8 blur-[80px] group-hover:bg-gold/14 transition-all duration-500" />

            <div className="relative z-10 p-10">
              {/* logo row */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-amber-400 shadow-xl">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-white tracking-tight">summatic</p>
                  <p className="text-[15px] text-gold uppercase tracking-[0.2em] mt-0.5 font-semibold">Official Programme Partner</p>
                </div>
              </div>

              <h3 className="text-[17px] font-bold text-white mb-4">In partnership with Summatic</h3>
              <p className="text-[15px] text-cream/80 leading-[1.75]">
                We are proud to partner with Summatic to deliver a transformative learning experience that inspires young minds and prepares them for a future of limitless possibilities.
              </p>

              {/* stats row */}
              <div className="mt-8 flex gap-8 pt-8 border-t border-white/8">
                {[
                  { val: '5+', label: 'Years Together' },
                  { val: '300+', label: 'Students Impacted' },
                  { val: '100%', label: 'Satisfaction' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-[22px] font-bold text-gold leading-none">{s.val}</p>
                    <p className="text-[15px] text-cream/80 mt-1 uppercase tracking-[0.15em]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facilitators */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/4 backdrop-blur-sm hover:border-gold/30 transition-all duration-500">
            {/* left accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-gold/20 via-gold to-gold/60" />
            {/* glow */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/8 blur-[80px] group-hover:bg-gold/14 transition-all duration-500" />

            <div className="relative z-10 p-10">
              {/* avatar stack */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/8">
                <div className="flex -space-x-3">
                  {[mentor1, mentor2, mentor3, mentor4, mentor5].map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt="Mentor"
                      className="w-12 h-12 rounded-full border-2 border-forest-deep ring-1 ring-white/15 object-cover hover:scale-110 transition-transform duration-300"
                      style={{ zIndex: 6 - i }}
                    />
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-forest-deep ring-1 ring-white/15 bg-gold/15 flex items-center justify-center text-[15px] font-bold text-gold" style={{ zIndex: 0 }}>
                    +12
                  </div>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white">18 Expert Facilitators</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                    <span className="text-[15px] text-cream/70 ml-1">Top rated</span>
                  </div>
                </div>
              </div>

              <h3 className="text-[17px] font-bold text-white mb-4">Expert Facilitators &amp; Mentors</h3>
              <p className="text-[15px] text-cream/80 leading-[1.75] mb-8">
                Our facilitators include Cambridge educators, researchers, entrepreneurs, industry experts and communication specialists with a passion for guiding young learners.
              </p>

              <button
                onClick={() => {
                  document.getElementById('key-facilitators')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/8 border border-white/15 px-6 py-3.5 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-gold hover:text-forest-deep hover:border-gold transition-all duration-300 group/btn cursor-pointer"
              >
                Meet the Facilitators
                <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── KEY FACILITATORS ──────────────────────────────────────────────────────── */
const allFacilitators = [
  {
    name: "Guy Doza",
    title: "Author, TEDx Speaker & Alumni, University of Cambridge",
    img: guyDozaImg,
    desc: "Having started his career in the British House of Parliament, Guy went on to become a top Corporate Communications and Public Affairs consultant. He has worked with a range of CEOs and business leaders across Europe, America and Asia. In 2019 he gave a TEDx Talk at the University of Cambridge and in 2022 he published his book which focuses on rhetoric and the art of persuasion. He leads the Soft Skills and Public speaking module on the programme."
  },
  {
    name: "Suyash Bhatt",
    title: "Alumni & Fellow – Cambridge Judge Business School",
    img: suyashImg,
    desc: "As a Cambridge MBA alumnus and Fellow at Cambridge Judge Business School, Suyash has worked across diverse industries in India, Taiwan, the USA, and the UK. As the founder of two successful startups, Suyash combines academic expertise with hands-on entrepreneurial experience. He is the Founder of Foodbud, a food tech startup based out of Cambridge, and is also the Director of Global Education Lab. He leads the Entrepreneurship and Innovation Module of the programme."
  },
  {
    name: "Dr. Yves Gaspar",
    title: "Visiting Scholar, University of Cambridge",
    img: yvesImg,
    desc: "Dr. Yves Gaspar, a graduate of Theoretical Physics at the University of Liège and PhD holder from the University of Cambridge, specialises in mathematical cosmology. His expertise lies in exploring Einstein's field equations and their implications. With years of academic and research experience, Dr. Gaspar brings theoretical depth and practical insights to his sessions. He leads the STEM Module of the programme."
  },
  {
    name: "Dr. Charles Roddie",
    title: "Fellow, Sidney Sussex College\nFounder & CEO, Summatic",
    img: charlesImg,
    desc: "Dr Charles Roddie, Director of Studies and Governing Body Fellow at the University of Cambridge, is an economist, mathematician, and education innovator. He has lectured at both Cambridge and Oxford. He is also the founder of education technology platform Summatic, which explores new approaches to mathematics learning. In this programme, he will provide academic mentorship and guide participants through analytical and strategic thinking frameworks."
  },
  {
    name: "Daniel Appleby, CFA",
    title: "Chartered Financial Analyst\nCOO, Summatic",
    img: danielImg,
    desc: "Daniel Appleby is a CFA-qualified finance and technology professional with experience at Monzo and Lloyds Banking Group. His work focuses on the intersection of finance and AI, exploring how emerging technologies are reshaping financial systems and innovation. In this programme, he will guide participants on fintech, AI-driven innovation, and building scalable ventures. He is currently also the COO of Summatic and is responsible of scaling the venture to new geographies beyond the UK."
  },
  {
    name: "Tim Vinopal",
    title: "Partner – Americas",
    img: timImg,
    desc: "Former U.S. Navy Officer and alumnus of Cambridge Judge Business School, supporting GEL's engagement across the Americas."
  },
  {
    name: "Nim Wichienkuer",
    title: "Partner – Gamified Learning",
    img: nimImg,
    desc: "Product strategist and Cambridge Judge Business School alumna, specialising in gamified and experiential learning."
  }
];

function KeyFacilitators() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  return (
    <section id="key-facilitators" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[2.4rem] md:text-[3rem] font-bold text-forest-deep leading-tight">
            Key Facilitators
          </h2>
          <p className="hidden md:flex items-center gap-2 text-sm text-gray-400 italic">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
            Drag to explore
          </p>
        </div>
      </div>

      {/* Drag-scrollable carousel — full bleed */}
      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-6"
        style={{ cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {allFacilitators.map((f, i) => (
          <div
            key={i}
            className="flex-none w-[260px] sm:w-[280px] bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-7 flex flex-col items-center text-center select-none"
          >
            <div className="w-36 h-36 mb-5 overflow-hidden rounded-full border-4 border-forest/8 shadow-lg flex-none">
              <img src={f.img} alt={f.name} className="w-full h-full object-cover" draggable={false} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{f.name}</h3>
            <p className="text-xs font-semibold text-forest-deep whitespace-pre-line mb-3 leading-snug">{f.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 5. TRACKS · cream bg ──────────────────────────────────────────────── */
function ChooseYourTrack() {
  return (
    <section id="tracks" className="py-32 bg-[#F4EFE6] relative overflow-hidden">
      {/* no grid — just soft glows */}
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
          <p className="text-[15px] text-forest/80 max-w-lg mx-auto leading-[1.75]">Two unique pathways. One unforgettable Cambridge experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ── Track 1 ── */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-forest/8 shadow-[0_4px_32px_rgba(26,53,35,0.08)] hover:shadow-[0_32px_80px_rgba(26,53,35,0.2)] hover:-translate-y-3 transition-all duration-500 flex flex-col">

            {/* top accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-gold/40 via-gold to-gold/20" />

            <div className="p-9 pb-6">
              {/* badge row */}
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 bg-gold/10 text-gold text-[15px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-gold/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Track 01
                </span>
                <span className="text-[15px] font-semibold text-forest/80 uppercase tracking-widest">Entrepreneurship</span>
              </div>

              <h3 className="text-[2.4rem] font-bold text-forest-deep leading-[1.1] mb-2 group-hover:text-gold transition-colors duration-400">Build ideas.<br/>Create impact.</h3>
              <p className="text-[15px] text-forest/80 leading-[1.75] mb-7 max-w-sm">
                Explore the world of innovation. Learn how ideas are born, tested and developed into real solutions that change the world.
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {['Opportunity discovery', 'Pitching & storytelling', 'Business model basics', 'AI for innovation', 'Design thinking', 'Venture challenge'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-forest/70">
                    <span className="h-4 w-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* full-width cinematic image footer */}
            <div className="relative h-52 mt-auto overflow-hidden">
              <img src={studentsImg} alt="Entrepreneurship" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent" />
              <div className="absolute bottom-5 left-7">
                <Link to="/students/entrepreneurship" className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3 text-[15px] font-bold uppercase tracking-[0.2em] text-forest-deep shadow-xl shadow-gold/30 hover:bg-amber-400 transition-all duration-300 group/btn">
                  Explore Track
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Track 2 ── */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-forest/8 shadow-[0_4px_32px_rgba(26,53,35,0.08)] hover:shadow-[0_32px_80px_rgba(37,99,235,0.18)] hover:-translate-y-3 transition-all duration-500 flex flex-col">

            {/* top accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-400/30 via-blue-500 to-blue-400/20" />

            <div className="p-9 pb-6">
              {/* badge row */}
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 bg-blue-500/8 text-blue-600 text-[15px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-blue-400/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Track 02
                </span>
                <span className="text-[15px] font-semibold text-forest/80 uppercase tracking-widest">STEM Research</span>
              </div>

              <h3 className="text-[2.4rem] font-bold text-forest-deep leading-[1.1] mb-2 group-hover:text-blue-600 transition-colors duration-400">Ask questions.<br/>Discover more.</h3>
              <p className="text-[15px] text-forest/80 leading-[1.75] mb-7 max-w-sm">
                Dive into the world of research and STEM. Learn how questions become insights and insights create a better world.
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {['Research thinking', 'AI in research', 'Science exploration', 'Collaborative inquiry', 'Evidence basics', 'Present findings'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-forest/70">
                    <span className="h-4 w-4 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* full-width cinematic image footer */}
            <div className="relative h-52 mt-auto overflow-hidden">
              <img src={heroImg} alt="STEM Research" className="w-full h-full object-cover object-[center_30%] group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent" />
              <div className="absolute bottom-5 left-7">
                <Link to="/students/stem-research" className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-3 text-[15px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-500/30 hover:bg-blue-400 transition-all duration-300 group/btn">
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

/* ─── 6. VALUE PROPS · cream bg ─────────────────────────────────── */
function ValueProps() {
  const props = [
    { icon: <User className="h-6 w-6" />,     num: '01', title: 'Grow in confidence',  desc: 'Speak, present and lead with clarity and conviction.' },
    { icon: <Lightbulb className="h-6 w-6" />, num: '02', title: 'Think like a solver', desc: 'Apply STEM & AI thinking to real-world challenges.' },
    { icon: <Globe2 className="h-6 w-6" />,   num: '03', title: 'Connect globally',     desc: 'Build friendships that last a lifetime.' },
    { icon: <Building2 className="h-6 w-6" />,num: '04', title: 'Access Cambridge',     desc: 'Engage with researchers & leading innovators.' },
    { icon: <Compass className="h-6 w-6" />,  num: '05', title: 'Broaden perspective',  desc: 'Experience new cultures, ideas and ways of thinking.' },
    { icon: <Target className="h-6 w-6" />,   num: '06', title: 'Shape your future',    desc: 'Discover your passions and unlock new pathways.' },
  ]
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* soft gold glow top-centre */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Why Join</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">What you&rsquo;ll take home.</h2>
          <p className="text-[15px] text-forest/80 max-w-lg mx-auto leading-[1.75]">Six transformative outcomes every participant carries forward.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {props.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white p-7 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(26,53,35,0.12)] hover:-translate-y-1 transition-all duration-400 cursor-default shadow-[0_2px_12px_rgba(26,53,35,0.06)]"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-gold/8 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* number */}
              <span className="text-[15px] font-black text-gold/80 tracking-[0.2em] group-hover:text-gold transition-colors duration-300">{p.num}</span>

              {/* icon */}
              <div className="mt-4 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-sm">
                {p.icon}
              </div>

              <h4 className="text-[15px] font-bold text-forest-deep mb-2 leading-tight group-hover:text-gold transition-colors duration-300">{p.title}</h4>
              <p className="text-[15px] text-forest/80 leading-[1.65]">{p.desc}</p>

              {/* bottom accent line */}
              <div className="absolute bottom-0 left-7 right-7 h-[1.5px] bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── COHORT GALLERY ─── */
function CohortGallery() {
  const images = [
    ylGallery1,
    ylGallery2,
    ylGallery3,
    ylGallery4,
    ylGallery5,
    stemImg,
    publicSpeakingImg,
    siteVisitImg,
    socialCulturalImg
  ]
  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <section className="bg-white py-24 border-t border-forest/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[0.24em] text-gold-deep bg-gold/10 px-4 py-1.5 rounded-full mb-3">
            Programme Gallery
          </span>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold text-forest-deep leading-tight">
            Life at Cambridge Summer Programme
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, visibleCount).map((img, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-forest/8 aspect-[4/3] bg-forest-deep/5"
            >
              <img 
                src={img} 
                alt={`Young Leaders Gallery ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[13px] font-bold tracking-wider uppercase bg-gold/90 text-forest-deep px-3 py-1 rounded-full backdrop-blur-sm shadow">
                  Cambridge Summer
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, images.length))}
              className="inline-flex items-center gap-2 bg-forest-deep text-white px-8 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-[0.15em] hover:bg-gold hover:text-forest-deep transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Load More Photos <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── 7. CTA · forest-deep bg ──────────────────────────────────────────── */
function BottomCTA() {
  return (
    <section className="bg-forest-deep py-32 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      {/* centered ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Top decorative star cluster */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Ready to Apply</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-[1.08] tracking-tight">Start your Cambridge journey early.</h2>
        <p className="mt-5 text-[15px] text-cream/80 leading-[1.75] max-w-xl mx-auto">Discover new ideas. Build your voice. Explore the future — at one of the world's greatest universities.</p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <Link to="/contact" search={{ source: "Young Leaders Summer Programme" }} className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:border-white/35 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Register Interest
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link to="/apply-now" search={{ source: "Young Leaders Summer Programme" }} className="inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-gold/25 hover:-translate-y-1 animate-float">
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bottom trust note */}
        <p className="mt-10 text-[15px] text-cream/80 uppercase tracking-[0.2em]">
          Cambridge, UK · Summer Experience · Fully Supervised
        </p>
      </div>
    </section>
  )
}
