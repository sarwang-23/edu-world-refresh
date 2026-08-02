import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Target, Eye, HandHeart, Sparkles, Flag, Rocket, Briefcase, Globe2, BookOpen, Mail, ArrowRight, Lightbulb, Users, CheckCircle2, GraduationCap } from "lucide-react";
import heroClassroomImg from "@/assets/hero-classroom.jpg";
import founderImg from "@/assets/founder.png";
import { Footer } from "./index";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import person5 from "@/assets/person5.jpg";
import person6 from "@/assets/person6.jpg";
import person7 from "@/assets/person7.jpg";
import person8 from "@/assets/person8.jpg";
import person9 from "@/assets/person9.jpg";
import person10 from "@/assets/person10.jpg";
import person11 from "@/assets/person11.jpg";
import person12 from "@/assets/person12.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Global Education Lab" },
      {
        name: "description",
        content: "Transformational education. Global impact.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Foundations />
      <FounderStory />
      <Journey />
      <Impact />
      <OurPeople />
      <Cta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Subtle grid — same as home page hero */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 lg:grid-cols-12 lg:gap-12 pt-6">
        {/* Left: Text */}
        <div className="lg:col-span-7">
          <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70 mb-4">
            ABOUT GLOBAL EDUCATION LAB
          </p>
          <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] text-forest md:text-6xl lg:text-[4rem] xl:text-[4.75rem]">
            Transformational education.<br />
            <span className="text-gold">Global impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
            We design immersive learning experiences that empower individuals, build capability, and drive innovation for a more inclusive and sustainable tomorrow.
          </p>
          <p className="mt-8 text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70">
            Rooted in Cambridge. Impacting the world.
          </p>
        </div>

        {/* Right: Cambridge image — same rounded card as home */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <img
              src={heroClassroomImg}
              alt="Cambridge classroom"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Foundations() {
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">Our Foundation</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Mission */}
          <div className="flex flex-col gap-5 rounded-3xl border border-border/60 bg-white p-8 shadow-sm hover:shadow-md transition-all hover:border-forest/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mb-3">OUR MISSION</h3>
              <p className="text-[15px] leading-relaxed text-forest/80">
                To deliver transformative educational experiences across every stage of a learner's life — empowering people to lead, innovate and create impact.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-5 rounded-3xl border border-border/60 bg-white p-8 shadow-sm hover:shadow-md transition-all hover:border-forest/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mb-3">OUR VISION</h3>
              <p className="text-[15px] leading-relaxed text-forest/80">
                A world where education is experiential, inclusive and borderless — unlocking potential and creating a better future for all.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-5 rounded-3xl border border-border/60 bg-white p-8 shadow-sm hover:shadow-md transition-all hover:border-forest/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
              <HandHeart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mb-3">OUR VALUES</h3>
              <ul className="space-y-3 text-[15px] leading-snug text-forest/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  Excellence in Everything We Do
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  Learner-Centric & Inclusive
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  Integrity & Transparency
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  Innovation with Purpose
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  Collaboration & Global Mindset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="bg-forest-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          
          {/* Left: Content */}
          <div className="md:col-span-5 md:pr-6">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">
              Our Founder's Story
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-cream/80">
              <p>
                In 2016, our founder, Suyash Bhatt, visited the university campuses of MIT, Harvard and Stanford. Engaging with the vibrant student and innovation communities there was a turning point.
              </p>
              <p>
                The energy, curiosity and entrepreneurial spirit he witnessed inspired a clear vision — to bring such transformative opportunities to learners and leaders back home in India and beyond.
              </p>
              <p>
                That inspiration drove him to Cambridge, and in 2022, it became the foundation of Global Education Lab.
              </p>
              <p>
                Today, GEL connects the Cambridge ecosystem with the world — empowering individuals, organisations and communities to thrive.
              </p>
            </div>
          </div>

          {/* Center: Credentials */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="text-[15px] font-medium text-cream leading-tight">Cambridge Alumnus<br />& Fellow, CJBS</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                <Globe2 className="h-5 w-5" />
              </div>
              <p className="text-[15px] font-medium text-cream leading-tight">14+ Years of Global<br />Experience</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-[15px] font-medium text-cream leading-tight">Education Innovator &<br />Ecosystem Builder</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                <Lightbulb className="h-5 w-5" />
              </div>
              <p className="text-[15px] font-medium text-cream leading-tight">Passionate about People,<br />Purpose and Possibilities</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <img
                src={founderImg}
                alt="Suyash Bhatt"
                className="w-full h-[320px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Suyash Bhatt</h3>
                <p className="text-[15px] font-bold uppercase tracking-[0.15em] text-gold mt-1">Founder & Director</p>
                <p className="text-[15px] italic text-cream/70 mt-1">Cambridge Alumnus & Fellow, CJBS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Section Header — same gold line + uppercase label as home page */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">Our Journey</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-forest-deep leading-tight">
            Milestones along the way
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-10 left-10 right-10 h-px bg-gold/40 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {[
              { year: "2022", icon: Users, desc: "Launched with small scale informal student mentoring support" },
              { year: "2023", icon: BookOpen, desc: "Launched experiential programmes for K12 Schools in the UK" },
              { year: "2024", icon: Globe2, desc: "Expanded experiential programmes to Finland, Estonia, Indonesia and India" },
              { year: "2025", icon: GraduationCap, desc: "Expanded to University graduates & Entrepreneurship showcase" },
              { year: "2026", icon: Rocket, desc: "Launched Zero-to-One and expanded to Executive education, Global ventures" },
            ].map((item, idx) => (
              <div key={item.year} className="flex flex-col items-center text-center px-2">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forest-deep text-white shadow-md border-4 border-[#F7F5F0] z-10 relative">
                    <item.icon className="h-8 w-8" />
                  </div>
                  {/* Small gold dot indicator */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-gold"></div>
                </div>
                <h3 className="text-xl font-bold text-forest-deep">{item.year}</h3>
                <p className="mt-3 text-[15px] text-forest-deep/80 leading-relaxed max-w-[150px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPeople() {
  const people = [
    { name: "Guy Doza", title: "Advisor", img: person1, quote: "Empowering the next generation of global leaders through transformative education." },
    { name: "Gurmeet Kaur", title: "Social Media & Marketing", img: person2, quote: "Building vibrant communities and amplifying our mission to audiences worldwide." },
    { name: "Dan Stert", title: "Programme Director", img: person3, quote: "Designing immersive experiences that challenge perspectives and inspire growth." },
    { name: "Andrew Hatcher", title: "Head of Entrepreneurship", img: person4, quote: "Fostering innovation and guiding founders from raw ideas to real-world ventures." },
    { name: "Akshay Kumar", title: "Sales and Marketing", img: person5, quote: "Connecting passionate learners with opportunities that shape their futures." },
    { name: "Yves Gaspar", title: "STEM Lead", img: person6, quote: "Inspiring analytical minds to solve the most pressing challenges of tomorrow." },
    { name: "Wichienkuer Thanuyna", title: "Gamified L&D", img: person7, quote: "Creating engaging, play-driven learning frameworks that maximize retention." },
    { name: "Charles Roddie", title: "Advisor", img: person8, quote: "Providing strategic insights to scale educational impact across international borders." },
    { name: "Margaret Sema CBE", title: "Advisor", img: person9, quote: "Championing excellence in education and shaping policies for lasting institutional change." },
    { name: "Khushboo", title: "Operations", img: person10, quote: "Ensuring seamless delivery of programmes and unparalleled experiences for our delegates." },
    { name: "Jaideep Prabhu", title: "Programme Director", img: person11, quote: "Bridging emerging markets and global ecosystems to drive sustainable innovation." },
    { name: "Tim Vinopal", title: "Operations Americas", img: person12, quote: "Expanding our footprint and building strong partnerships across the Americas." },
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 border-t border-forest/5">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">Our People</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-forest-deep leading-tight">
            The people who make it real
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-12">
          {people.map((person) => (
            <div key={person.name} className="group relative pt-14 h-full">
              <div className="relative flex h-full flex-col items-center justify-start rounded-[2rem] bg-white p-6 pb-8 text-center shadow-lg shadow-forest-deep/5 ring-1 ring-forest-deep/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest-deep/10 hover:ring-gold/30">
                
                {/* Overlapping Avatar */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-[5px] border-white bg-[#F7F5F0] shadow-sm transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={person.img} 
                      alt={person.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-14 flex h-full flex-col items-center justify-start w-full">
                  <div>
                    <h4 className="text-[17px] font-bold text-forest-deep transition-colors duration-300 group-hover:text-gold">{person.name}</h4>
                    <div className="mx-auto mt-2 mb-2 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
                  </div>
                  <p className="text-[13px] font-bold text-forest-deep/90 leading-relaxed">{person.title}</p>
                  <p className="text-[13px] italic text-forest/70 leading-relaxed max-w-[220px] mt-3 px-2 line-clamp-2">"{person.quote}"</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { num: "5,000+", label: "Learners Empowered", icon: Users },
    { num: "120+", label: "Startups Supported", icon: Rocket },
    { num: "25+", label: "Countries Represented", icon: Globe2 },
    { num: "150+", label: "Organisations Served", icon: HandHeart },
    { num: "50+", label: "Programmes Delivered", icon: BookOpen },
  ];

  return (
    <section id="impact" className="bg-forest-deep text-white overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative py-8 md:py-10">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 md:gap-24 hover:[animation-play-state:paused]">
            {/* We duplicate the content to create an infinite scrolling effect */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 shrink-0">
                {/* Heading block */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-cream leading-tight whitespace-nowrap">
                    Our Impact <span className="text-gold">in Numbers</span>
                  </h2>
                  <p className="text-[15px] text-cream/70 mt-1 whitespace-nowrap">
                    Creating ripple effects that last a lifetime.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-16 md:gap-24">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center shrink-0">
                      <stat.icon className="h-6 w-6 text-cream/70 mb-3" />
                      <span className="text-3xl font-bold tracking-tight text-gold">{stat.num}</span>
                      <span className="text-[15px] font-medium text-cream/75 mt-1.5 leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-forest-deep py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-gold/8 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white border border-white/15 shrink-0">
            <Mail className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">Be part of our story</h2>
            <p className="text-[15px] text-cream/70 mt-1 max-w-md">
              Whether you are a learner, partner or changemaker, let's create impact—together.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-bold text-forest-deep transition-all hover:bg-amber-400 shadow-lg shadow-gold/20"
          >
            Explore Programmes <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/partner-with-gel"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-white/10 hover:border-white/35 backdrop-blur-sm"
          >
            Partner with GEL <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
