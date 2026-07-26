import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, GraduationCap, Users, Leaf, Handshake, Rocket, BookOpen, Building2, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import cambridgeImg from "@/assets/cambridge.jpg";
import schoolLeadersImg from "@/assets/school-leaders.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Education Lab — Transformational Education. Global Impact." },
      {
        name: "description",
        content:
          "GEL designs and delivers world-class learning experiences that empower individuals, build capability and drive innovation for a better, more inclusive tomorrow.",
      },
      { property: "og:title", content: "Global Education Lab" },
      {
        property: "og:description",
        content: "Transformational education. Global impact. Rooted in Cambridge, impacting the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <FeaturesStrip />
      <OurProgrammes />
      <ImpactSoFar />
      <CambridgeOrigin />
      <Voices />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 pb-20 pt-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.02] text-forest md:text-6xl lg:text-[5.5rem]">
            Transformational education.<br />
            <span className="text-gold">Global impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
            We design and deliver world-class learning experiences that empower individuals, build capability and drive innovation for a better, more inclusive tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner-with-gel"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[13px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Partner with GEL
            </Link>
          </div>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-forest/50">
            Rooted in Cambridge. Impacting the world.
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:mt-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <img
              src={heroImg}
              alt="Students in a Cambridge learning session"
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesStrip() {
  const features = [
    { icon: <Globe2 className="h-7 w-7" />, title: "Global Perspective", desc: "Connecting Cambridge expertise with the world." },
    { icon: <BookOpen className="h-7 w-7" />, title: "Experiential Learning", desc: "Immersive, practical and impactful experiences." },
    { icon: <Users className="h-7 w-7" />, title: "Empowering People", desc: "Developing leaders, innovators and changemakers." },
    { icon: <Leaf className="h-7 w-7" />, title: "Sustainable Impact", desc: "Creating value for communities, businesses and the planet." },
    { icon: <Handshake className="h-7 w-7" />, title: "Meaningful Partnerships", desc: "Collaborating with institutions, industry and ecosystems." },
  ];
  return (
    <div className="border-y border-border/70 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="text-forest/70">{f.icon}</div>
              <h4 className="text-[13px] font-bold text-forest-deep">{f.title}</h4>
              <p className="text-[11px] text-forest/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OurProgrammes() {
  const programmes = [
    {
      img: studentsImg,
      tag: "Student Programmes",
      tagBg: "bg-forest-deep",
      desc: "Summer Schools, STEM & Entrepreneurship courses and skill-building programmes for young learners.",
      link: "/students",
    },
    {
      img: businessLeadersImg,
      tag: "Executive Education",
      tagBg: "bg-forest-deep",
      desc: "Leadership programmes for CEOs and senior leaders including the Global Innovation Leaders to Programme.",
      link: "/business-leaders",
    },
    {
      img: heroImg,
      tag: "Entrepreneurship",
      tagBg: "bg-forest-deep",
      desc: "Ideation weekends, connections, mentorship and access to Cambridge's innovation ecosystem.",
      link: "/entrepreneurship",
    },
    {
      img: schoolLeadersImg,
      tag: "Institutional Solutions",
      tagBg: "bg-forest-deep",
      desc: "Customised programmes, capacity building and partnerships for organisations and universities.",
      link: "/school-leaders",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-[2rem] font-bold text-forest-deep md:text-[2.5rem]">Our Programmes</h2>
            <p className="mt-2 text-sm text-forest/60">High-impact learning for every stage of your journey.</p>
          </div>
          <Link to="/programmes" className="hidden items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-forest hover:text-gold transition-colors md:inline-flex">
            View all Programmes <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p, i) => (
            <Link
              key={i}
              to={p.link}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-forest/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.tag} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 ${p.tagBg} px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-[0.15em] text-gold`}>
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs text-forest/70 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold flex items-center gap-1">
                  Explore <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSoFar() {
  const stats = [
    ["5,000+", "Learners Empowered"],
    ["120+", "Startups Supported"],
    ["25+", "Countries Represented"],
    ["35+", "Startups Pitched"],
    ["10,000+", "Lives Impacted (Est.)"],
  ];
  return (
    <section className="bg-white py-16 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[2rem] font-bold text-forest-deep md:text-[2.5rem] leading-tight">Our Impact So Far</h2>
            <p className="mt-4 text-sm text-forest/70 leading-relaxed">Creating measurable change across communities and borders.</p>
            <Link to="/our-impact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-deep hover:bg-forest-deep hover:text-white transition-all">
              Explore Our Impact <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x divide-forest/10">
              {stats.map(([v, l], i) => (
                <div key={i} className="flex flex-col items-center text-center px-4">
                  <span className="text-[1.8rem] font-bold text-forest-deep md:text-[2rem]">{v}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-forest/50 mt-2 leading-tight">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CambridgeOrigin() {
  return (
    <section className="bg-forest-deep text-primary-foreground py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-gold/50" /> FROM CAMBRIDGE TO THE WORLD
            </p>
            <h2 className="text-[2.5rem] font-bold leading-[1.05] md:text-[3.5rem] mb-6">
              Where knowledge meets <span className="text-gold">innovation and purpose.</span>
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/75 max-w-xl mb-10">
              We bring together the best of academia, industry and entrepreneurship to solve real-world challenges and shape a better future.
            </p>
            <div className="flex flex-col gap-5 pt-8 border-t border-primary-foreground/15">
              {[
                { icon: <Globe2 className="h-5 w-5 text-gold" />, title: "Cambridge Ecosystem Access", desc: "Unique access to world-class faculty, research and innovation hubs." },
                { icon: <Users className="h-5 w-5 text-gold" />, title: "Global Network", desc: "A diverse community of partners, mentors, alumni and changemakers." },
                { icon: <Rocket className="h-5 w-5 text-gold" />, title: "Future Focused", desc: "Preparing leaders and innovators to thrive in a rapidly changing world." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
              <img src={cambridgeImg} alt="Cambridge courtyard" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
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
      q: "The GEL was a game changer. The Cambridge ecosystem, combined with high-quality peer learning, was truly invaluable.",
      a: "Neha Aran",
      r: "MD, Consumer Goods Company",
      img: teachersImg,
    },
    {
      q: "Zero to One gave me the clarity, tools and network to turn an idea into a viable startup. The mentors were incredible!",
      a: "Arjun Mehta",
      r: "Co-founder, MedVise AI",
      img: studentsImg,
    },
    {
      q: "This student programme opened my eyes to the power of innovation and leadership. I left with confidence and lasting friendships.",
      a: "Emily Chen",
      r: "GSP Participant",
      img: schoolLeadersImg,
    },
  ];
  return (
    <section className="bg-[#F7F5F0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-[2rem] font-bold text-forest-deep md:text-[2.5rem]">Voices from Our Community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-forest/10 hover:shadow-md transition-shadow">
              <span className="text-2xl text-gold font-serif leading-none">"</span>
              <p className="mt-2 text-[13px] text-forest/80 leading-relaxed mb-8 italic">{t.q}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.img} alt={t.a} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-[12px] font-bold text-forest-deep">{t.a}</p>
                  <p className="text-[10px] text-forest/50 uppercase tracking-[0.1em] mt-0.5">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-forest-deep py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-[2rem] font-bold text-white md:text-[2.5rem] leading-tight">
              Let's build a better future—together.
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Whether you are a learner, leader, institution or innovator, there's a place for you at GEL.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-bold tracking-wide text-forest-deep transition-all hover:bg-gold/90"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner-with-gel"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Partner with GEL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
              global<br />education<br />lab
            </span>
            <p className="mt-5 max-w-sm text-[13px] leading-[1.7] text-muted-foreground">
              Transformational educational experiences for a lifetime of a learner's life.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest/60 mb-4">Quick Links</p>
            <ul className="space-y-3 text-[13px] text-forest/80">
              {[["Programmes", "/programmes"], ["Entrepreneurship", "/entrepreneurship"], ["Our Impact", "/our-impact"], ["About Us", "/about"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest/60 mb-4">Partner</p>
            <ul className="space-y-3 text-[13px] text-forest/80">
              {[["Partner with GEL", "/partner-with-gel"], ["Institutional Solutions", "/school-leaders"], ["Collaborate", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest/60 mb-4">Resources</p>
            <ul className="space-y-3 text-[13px] text-forest/80">
              {[["News & Insights", "/insights"], ["Events", "/gallery"], ["Brochures", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest/60 mb-4">Connect</p>
            <a href="mailto:hello@globaledulab.com" className="text-[13px] text-forest/80 hover:text-forest transition-colors">
              hello@globaledulab.com
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-forest/10 pt-8 text-[11px] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Global Education Lab Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-forest transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-forest transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
