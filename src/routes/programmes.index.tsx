import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, GraduationCap, Users, Briefcase, Building2, Landmark, ChevronRight, MapPin, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Footer } from "./index";
import cambridgeImg from '@/assets/cambridge_cslp_new.jpg';
import heroImg from "@/assets/IMG_5138_2.jpg";
import schoolLeadersImg from "@/assets/school-leaders.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";
import zeroToOneImg from "@/assets/zero-to-one.png";
import graduateSummerImg from "@/assets/campus-life-2.jpg";
import youngLeadersImg from "@/assets/young-leaders.png";
import cambridgeRealImg from "@/assets/cambridge_7.jpg";
import finlandImg from "@/assets/finland_1.jpg";
import baliImg from "@/assets/bali_new_1.jpg";
import gilpImg from "@/assets/gilp-dinner.png";
import rosalindHowell from '@/assets/people/rosalind_howell.jpg';
import samTully from '@/assets/people/sam_tully.jpg';
import yvonneWalburga from '@/assets/people/yvonne_walburga.jpg';
import alumni1Img from '@/assets/alumni1.jpg';
import lakshmiKothaImg from '@/assets/lakshmi_kotha.jpg';
import jaideepPrabhuImg from '@/assets/jaideep_prabhu.jpg';


export const Route = createFileRoute("/programmes/")({
  head: () => buildMeta("/programmes"),
  component: ProgrammesPage,
});

const FILTERS = ["All Programmes", "For Students", "For Graduates", "For Founders", "For Executives", "For Educators"] as const;
type Filter = typeof FILTERS[number];

const upcomingProgrammes = [
  {
    img: gilpImg,
    tag: "FOR EXECUTIVES & LEADERS",
    title: "Global India Leadership Programme",
    desc: "A 5-day executive programme for senior leaders exploring strategy, innovation and partnerships in the India–UK corridor.",
    quote: "Leadership is not a date. It is a decision to grow.",
    location: "Cambridge, UK",
    link: "/indialeadership",
    category: "For Executives",
  },
  {
    img: graduateSummerImg,
    tag: "FOR GRADUATES & STUDENTS",
    title: "Graduate Summer Programme",
    desc: "A 2-week immersive experience in Entrepreneurship & AI with 30+ hours of learning, startup exposure, London visit and Cambridge college life.",
    quote: "When ambition meets mentorship, momentum becomes possible.",
    location: "Girton College, Cambridge",
    link: "/gsp",

    category: "For Graduates",
  },
  {
    img: zeroToOneImg,
    tag: "FOR FOUNDERS & INNOVATORS",
    title: "Zero-to-One Venture Weekend",
    desc: "A 2.5-day intensive to ideate, validate and build testable ventures in 48 hours with mentorship, expert guidance and pitch to investors.",
    quote: "Build the next chapter with the right people beside you.",
    location: "Cambridge, UK",
    link: "/programmes/zero-to-one",
    category: "For Founders",
  },
  {
    img: youngLeadersImg,
    tag: "FOR YOUNG LEARNERS",
    title: "Young Leaders Summer Programme",
    desc: "Fast-paced summer experiences in leadership, communication, STEM, entrepreneurship and personal growth for ages 14–18.",
    quote: "A strong future often begins with a single, brave conversation.",
    location: "Cambridge, UK",
    link: "/students",
    category: "For Students",
  },
];

const institutionalPartners = [
  {
    icon: <GraduationCap className="h-5 w-5 text-gold" />,
    title: "Schools & K-12",
    desc: "Leadership, STEM, entrepreneurship and international exposure programmes.",
  },
  {
    icon: <Building2 className="h-5 w-5 text-gold" />,
    title: "Universities",
    desc: "Summer schools, faculty collaboration, research partnerships and innovation programmes.",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-gold" />,
    title: "Corporates",
    desc: "Executive education, AI and global market engagement programmes.",
  },
  {
    icon: <Landmark className="h-5 w-5 text-gold" />,
    title: "Governments & Ecosystems",
    desc: "Delegations, innovation missions and policy engagement programmes.",
  },
];

const pastImpactImgs = [finlandImg, baliImg, cambridgeRealImg, gilpImg];

function ProgrammesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Programmes");

  const filtered = activeFilter === "All Programmes"
    ? upcomingProgrammes
    : upcomingProgrammes.filter((p) => p.category === activeFilter);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-foreground">
      <ProgrammesHero />
      
      {/* Filter Tabs - Glassmorphic */}
      <div className="sticky top-[73px] z-40 bg-white/70 backdrop-blur-xl border-b border-forest/10 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70 mr-4 shrink-0 flex items-center gap-2">
            <span className="w-1 h-1 bg-gold rounded-full animate-pulse" />
            Filter by Track
          </span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-[15px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeFilter === f
                  ? "bg-forest-deep text-gold shadow-md"
                  : "bg-white/50 border border-forest/10 text-forest-deep hover:bg-forest/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Programmes */}
      <section className="py-24 bg-[#F4EFE6] relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Explore</span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep leading-tight">
                Upcoming Programmes
              </h2>
            </div>
            <Link to="/past-programmes" className="group inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.1em] text-forest-deep hover:text-gold transition-colors pb-2">
              View all past programmes 
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <Link key={i} to={p.link} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-forest/10 hover:shadow-2xl hover:shadow-forest/5 hover:-translate-y-1 transition-all duration-500">
                <div className="relative aspect-[4/3] md:w-2/5 overflow-hidden shrink-0">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep shadow-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-xl font-bold text-forest-deep mb-3 leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-[15px] text-forest/70 leading-relaxed mb-6 flex-1">{p.desc}</p>
                  
                  <div className="space-y-2 mb-6 pt-5 border-t border-forest/5">
                    <div className="flex items-center gap-2 text-[15px] font-bold text-forest-deep/80">
                      <Sparkles className="h-3.5 w-3.5 text-gold" /> {p.quote}
                    </div>
                    <div className="flex items-center gap-2 text-[15px] font-bold text-forest-deep/80">
                      <MapPin className="h-3.5 w-3.5 text-gold" /> {p.location}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep group-hover:text-gold transition-colors">
                    Explore Programme <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom / Institutional */}
      <section className="bg-forest-deep py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 backdrop-blur-sm mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold">Partner With Us</span>
              </div>
              <h3 className="text-[2.2rem] md:text-[3rem] font-bold text-white mb-6 leading-[1.1]">Custom Programmes for Institutions.</h3>
              <p className="text-[15px] text-cream/70 leading-relaxed mb-10">
                We design and deliver tailor-made programmes for schools, universities, engaging 1,000+ learners and 500+ school leaders aligned with your goals. From custom modules to end-to-end logistics in Cambridge.
              </p>
              <Link to="/partner-with-gel" className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep transition-all hover:bg-white shadow-xl">
                Partner with GEL <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {institutionalPartners.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-[15px] text-cream/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Programmes & Impact */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Global Reach</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-forest-deep mb-6 leading-tight">Past Programmes & Impact</h2>
            <p className="text-[15px] text-forest/70 leading-relaxed max-w-2xl">
              Over the years, we have delivered impactful programmes across 5 countries, engaging 1,000+ learners and 500+ school leaders. Here's a glimpse into the transformative experiences we create.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {pastImpactImgs.map((src, i) => (
              <div key={i} className={`rounded-[2rem] overflow-hidden shadow-xl shadow-forest/5 group ${i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square mt-0 md:mt-12'}`}>
                <img src={src} alt="Impact" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/past-programmes" className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-cream hover:bg-forest transition-all duration-300 shadow-xl shadow-forest/20">
              Past Programmes <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <Voices />

      {/* Bottom CTA Strip */}
      <section className="bg-forest-deep py-24 relative overflow-hidden border-t border-white/5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />
        
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(3)].map((_, i) => (
              <Sparkles key={i} className="h-5 w-5 fill-gold text-gold opacity-90" />
            ))}
          </div>
          <h2 className="text-[2.2rem] md:text-[3.5rem] font-bold text-white leading-tight mb-6">
            Not sure which programme is right for you?
          </h2>
          <p className="text-[16px] text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Our team is here to help you find the best fit for your goals. Whether you're an individual learner or an organization seeking custom solutions, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" search={{ source: "Programmes Overview" }} className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-white transition-all duration-300 shadow-xl shadow-black/20">
              Let's Talk <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a href="mailto:info@globaledulab.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              info@globaledulab.com
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

function ProgrammesHero() {
  const items = [
    { img: gilpImg, label: "Executive Leadership", subtitle: "Global India Leadership Programme at Cambridge Judge" },
    { img: zeroToOneImg, label: "Venture Ideation", subtitle: "48-Hour Zero-to-One Venture Building Weekend" },
    { img: youngLeadersImg, label: "Young Leaders", subtitle: "Immersive Cambridge Summer Experience for Ages 13-17" },
    { img: finlandImg, label: "Teacher Training", subtitle: "International Educator & Pedagogy Immersion" },
    { img: cambridgeRealImg, label: "Cambridge Experience", subtitle: "Networking With Policy Makers, Global Experience" },
    { img: graduateSummerImg, label: "Graduate Summer", subtitle: "2-Week Entrepreneurship & AI Summer School" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-10 pb-28 md:pt-16 lg:pt-20 md:pb-36 border-b border-forest/5">
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/5 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 relative z-20">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/8 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-gold">Our Programmes</span>
            </div>
            
            <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tight text-forest-deep leading-[1.02]">
              Transformative<br />
              <span className="font-serif italic text-gold">learning.</span>
            </h1>
            
            <p className="mt-6 text-[17px] font-semibold text-forest/80 leading-snug">
              Experiences for every stage of your journey.
            </p>
            <p className="mt-4 text-[15px] text-forest/80 leading-[1.75] max-w-md">
              Explore our upcoming programmes designed for students, founders, educators and leaders. Learn in Cambridge. Connect globally. Create impact.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {[
                { icon: <MapPin className="h-4 w-4" />, label: "Cambridge & Beyond" },
                { icon: <Globe2 className="h-4 w-4" />, label: "Global Network" },
                { icon: <GraduationCap className="h-4 w-4" />, label: "Experiential Design" },
              ].map((badge, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-forest/10 px-4 py-2 text-[15px] font-semibold text-forest-deep shadow-sm backdrop-blur-sm">
                  <span className="text-gold">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Large Premium Interactive Showcase + 6-Photo Selector */}
          <div className="lg:col-span-6 relative z-10 lg:mt-8">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-forest-deep via-[#0d2a20] to-forest p-4 md:p-5 shadow-2xl shadow-forest/30 border border-gold/25 backdrop-blur-xl">
              {/* Ambient lighting glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-[80px]" />
              
              {/* Main Feature Display (Large, Bold, High Resolution) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-forest-deep/60">
                <img key={activeIndex}
                  src={activeItem.img} 
                  alt={activeItem.label} 
                  className="w-full h-full object-cover transition-opacity duration-500" 
                loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
                
                {/* Overlay Text Details */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-end">
                  <span className="inline-block self-start text-[11px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/15 border border-gold/40 px-3 py-1 rounded-full backdrop-blur-md mb-2 shadow">
                    {activeItem.label}
                  </span>
                  <p className="text-white text-[15px] sm:text-[17px] font-bold leading-tight drop-shadow-sm">
                    {activeItem.subtitle}
                  </p>
                </div>
              </div>

              {/* 6-Photo Thumbnail Selector Strip */}
              <div className="mt-3.5 grid grid-cols-6 gap-2">
                {items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === idx
                        ? "border-gold ring-2 ring-gold/40 scale-105 shadow-lg shadow-gold/25"
                        : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105 hover:border-gold/50"
                    }`}
                  >
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                    {activeIndex === idx && (
                      <div className="absolute inset-0 bg-gold/15" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Voices() {
  const testimonials = [
    {
      q: "There were times during the weekend when I knew that what I was learning would stick with me throughout my career journey... There aren't many experiences where you can feel yourself changing and growing in real time, but at every second of this weekend I felt myself growing in confidence.",
      a: "Rosalind Howell",
      r: "Zero-to-One Participant",
      tag: "Startup Bootcamp",
      img: rosalindHowell,
    },
    {
      q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School... Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce.",
      a: "Sam Tully",
      r: "Trustee, Pratham UK",
      tag: "GILP Delegate",
      img: samTully,
    },
    {
      q: "I was humbled and exhilarated for the recognition of the potential of EquiGen... This weekend emphasized the power of an amazing team, driven by a single vision and a clear purpose. Building an entrepreneurial mindset as a researcher is a powerful toolkit.",
      a: "Dr. Yvonne Walburga",
      r: "Post-doctoral Research Affiliate",
      tag: "University of Cambridge",
      img: yvonneWalburga,
    },
    {
      q: "This programme helped articulate something critical: leadership is also about language. It equips founders to translate their journey into frameworks that resonate with investors and stakeholders. That shift, from building to being understood, unlocks the next level of growth and influence.",
      a: "Snigdha Manchanda",
      r: "Founder, TeaTrunk (India)",
      tag: "GILP Alumni",
      img: alumni1Img,
    },
  ];

  return (
    <section className="bg-cream py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">What They Say</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.25rem] font-bold text-forest-deep leading-tight tracking-tight">
              Voices from Our{" "}
              <span className="italic font-serif text-forest">Community</span>
            </h2>
          </div>
          <p className="text-[15px] text-forest/80 max-w-[260px] leading-relaxed md:text-right hidden">
            Real stories from learners, leaders and innovators.
          </p>
        </div>

        {/* Layout: Left 2 Featured Testimonials, Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Side: Lakshmi Samyuktha Kotha & Prof. Jaideep Prabhu FBA */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Testimonial 2: Prof. Jaideep Prabhu FBA */}
            <div className="group relative rounded-3xl bg-forest-deep p-8 text-white shadow-xl border border-white/10 flex flex-col justify-between flex-1 overflow-hidden hover:border-gold/40 transition-colors duration-300">
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <span className="bg-gold/15 border border-gold/30 text-gold text-[12px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full">
                    Cambridge Judge Business School
                  </span>
                </div>
                <p className="text-[15px] md:text-[15.5px] text-cream/95 leading-[1.7] font-normal mb-6">
                  "GEL's programmes offer a roadmap for frugal innovation across a broad segment of learners. Learners return with fresh ideas, deeper confidence, and a renewed sense of purpose, ready to lead change for businesses, teams or themselves."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <img src={jaideepPrabhuImg} alt="Prof. Jaideep Prabhu FBA" className="w-14 h-14 rounded-full object-cover border-2 border-gold shrink-0 shadow-md" loading="lazy" />
                <div>
                  <h4 className="text-[16px] font-bold text-white leading-tight">Prof. Jaideep Prabhu FBA</h4>
                  <p className="text-[13px] text-cream/75 leading-tight mt-0.5">Professor of Marketing & Vice Dean, Cambridge Judge Business School, University of Cambridge</p>
                </div>
              </div>
            </div>

            {/* Testimonial 1: Lakshmi Samyuktha Kotha */}
            <div className="group relative rounded-3xl bg-forest-deep p-8 text-white shadow-xl border border-white/10 flex flex-col justify-between flex-1 overflow-hidden hover:border-gold/40 transition-colors duration-300">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <span className="bg-gold/15 border border-gold/30 text-gold text-[12px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full">
                    Cambridge & Finland Alumni
                  </span>
                </div>
                <p className="text-[15px] md:text-[15.5px] text-cream/95 leading-[1.7] font-normal mb-6">
                  "Through my participation in both the Cambridge and Finland programmes, I gained exceptional exposure to the best global practices in education. This experience has truly inspired me to implement some of these changes, which will positively impact over 30,000 students across our institutions."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <img src={lakshmiKothaImg} alt="Lakshmi Samyuktha Kotha" className="w-14 h-14 rounded-full object-cover border-2 border-gold shrink-0 shadow-md" loading="lazy" />
                <div>
                  <h4 className="text-[16px] font-bold text-white leading-tight">Lakshmi Samyuktha Kotha</h4>
                  <p className="text-[13px] text-cream/75 leading-tight mt-0.5">Executive Dean, Narayana Group of Schools – India</p>
                </div>
              </div>
            </div>

          

          </div>

          {/* Right Side: Other Community Testimonials Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 border border-forest/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <span key={si} className="text-gold text-[13px]">★</span>
                      ))}
                    </div>
                    <span className="bg-forest-deep text-white text-[10.5px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full shrink-0">
                      {t.tag}
                    </span>
                  </div>

                  <span className="block text-[2.5rem] text-gold/80 font-serif leading-none -mt-1 -ml-1 select-none">"</span>

                  <p className="text-[14px] text-forest-deep/95 leading-[1.65] -mt-3 mb-5 font-normal">
                    {t.q}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-forest/8 flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-[14px] shrink-0 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden">
                    {t.img ? (
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      t.a[0]
                    )}
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-forest-deep leading-tight">{t.a}</h5>
                    <p className="text-[13px] text-forest/75 mt-0.5">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
