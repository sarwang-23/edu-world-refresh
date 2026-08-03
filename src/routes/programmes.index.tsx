import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, GraduationCap, Users, Briefcase, Building2, Landmark, ChevronRight, MapPin, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Footer } from "./index";
import cambridgeImg from "@/assets/cambridge.jpg";
import heroImg from "@/assets/IMG_5138_2.jpg";
import schoolLeadersImg from "@/assets/school-leaders.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";
import zeroToOneImg from "@/assets/zero-to-one.png";
import graduateSummerImg from "@/assets/campus-life-2.jpg";
import youngLeadersImg from "@/assets/young-leaders.png";
import { SharedTestimonials } from '@/components/SharedTestimonials';


export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — Global Education Lab" },
      {
        name: "description",
        content:
          "Explore our upcoming programmes designed for students, founders, educators and leaders. Learn in Cambridge. Connect globally. Create impact.",
      },
    ],
  }),
  component: ProgrammesPage,
});

const FILTERS = ["All Programmes", "For Students", "For Graduates", "For Founders", "For Executives", "For Educators"] as const;
type Filter = typeof FILTERS[number];

const upcomingProgrammes = [
  {
    img: businessLeadersImg,
    tag: "FOR EXECUTIVES & LEADERS",
    title: "Global India Leadership Programme",
    desc: "A 5-day executive programme for senior leaders exploring strategy, innovation and partnerships in the India–UK corridor.",
    quote: "Leadership is not a date. It is a decision to grow.",
    location: "Cambridge, UK",
    link: "/programmes/gilp",
    category: "For Executives",
  },
  {
    img: graduateSummerImg,
    tag: "FOR GRADUATES & STUDENTS",
    title: "Graduate Summer Programme",
    desc: "A 2-week immersive experience in Entrepreneurship & AI with 30+ hours of learning, startup exposure, London visit and Cambridge college life.",
    quote: "When ambition meets mentorship, momentum becomes possible.",
    location: "Girton College, Cambridge",
    link: "/programmes/graduate",

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

const pastImpactImgs = [cambridgeImg, heroImg, teachersImg, businessLeadersImg];

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
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                <img src={src} alt="Impact" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
            <Link to="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep hover:bg-white transition-all duration-300 shadow-xl shadow-black/20">
              Let's Talk <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a href="mailto:info@globaledulab.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              info@globaledulab.com
            </a>
          </div>
        </div>
      </section>

      <SharedTestimonials />
      <Footer />
    </div>
  );
}

function ProgrammesHero() {
  return (
    <section className="relative bg-[#F4EFE6] overflow-hidden pt-4 pb-32 md:pt-4 md:pb-40 border-b border-forest/5">
      <div className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-forest/5 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
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
          
          <div className="lg:col-span-6 relative z-10">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_32px_80px_-12px_rgba(26,53,35,0.25)] ring-1 ring-forest/10">
              <img
                src={cambridgeImg}
                alt="Cambridge University"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-forest-deep/10 to-transparent opacity-80" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-forest/15 border border-forest/8 backdrop-blur-sm animate-[float_6s_ease-in-out_infinite]">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <Globe2 className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Global Reach</p>
                <p className="text-[15px] text-forest/80 mt-0.5">5+ Countries</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-forest/15 border border-forest/8 backdrop-blur-sm animate-[float_8s_ease-in-out_infinite_reverse]">
              <div className="w-11 h-11 rounded-xl bg-forest/8 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-forest-deep" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-forest-deep uppercase tracking-wider">Alumni Network</p>
                <p className="text-[15px] text-forest/80 mt-0.5">1000+ Learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
