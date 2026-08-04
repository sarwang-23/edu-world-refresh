import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, GraduationCap, Users, Leaf, Handshake, Rocket, BookOpen, Building2, MapPin, Mail } from "lucide-react";
import heroImg from "@/assets/hero-image.jpg";
import cambridgeImg from '@/assets/cambridge_4.jpg'
import schoolLeadersImg from "@/assets/partner.png";
import businessLeadersImg from "@/assets/executive-education.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/young-leaders.png";
import startupImg from "@/assets/startup.jpg";

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
      <CambridgeOrigin />
      <ImpactSoFar />
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
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 lg:grid-cols-12 lg:gap-12 pt-6">
        <div className="lg:col-span-6">
          <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] text-forest md:text-5xl lg:text-[3.25rem] xl:text-[4rem]">
            Transformational education.<br />
            <span className="text-gold">Global impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
            We design and deliver world-class learning experiences that empower individuals, build capability and drive innovation for a better, more inclusive tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner-with-gel"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
            >
              Partner with GEL
            </Link>
          </div>
          <p className="mt-8 text-[15px] font-bold uppercase tracking-[0.2em] text-forest/70">
            Rooted in Cambridge. Impacting the world.
          </p>
        </div>

        <div className="relative lg:col-span-6">
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
    <div className="border-y border-border/70 bg-white py-10 overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: "marquee 22s linear infinite",
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...features, ...features, ...features].map((f, i) => (
          <div key={i} className="flex flex-col items-start gap-3 mx-10 min-w-[220px]">
            <div className="text-forest/70">{f.icon}</div>
            <h4 className="text-[15px] font-bold text-forest-deep">{f.title}</h4>
            <p className="text-[15px] text-forest/80 leading-relaxed max-w-[180px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurProgrammes() {
  const programmes = [
    {
      img: studentsImg,
      tag: "Student Programmes",
      number: "01",
      headline: "Young Leaders & Innovators",
      desc: "Summer Schools, STEM & Entrepreneurship courses and skill-building programmes for the next generation of changemakers.",
      link: "/students",
      accent: "from-forest-deep/90 via-forest-deep/50 to-transparent",
    },
    {
      img: businessLeadersImg,
      tag: "Executive Education",
      number: "02",
      headline: "Executive & Leadership Growth",
      desc: "Leadership programmes for CEOs and senior leaders including the Global Innovation Leaders Programme.",
      link: "/business-leaders",
      accent: "from-forest-deep/90 via-forest-deep/50 to-transparent",
    },
    {
      img: startupImg,
      tag: "Entrepreneurship",
      number: "03",
      headline: "Startup & Innovation Hub",
      desc: "Ideation weekends, mentorship and direct access to Cambridge's world-class innovation ecosystem.",
      link: "/entrepreneurship",
      accent: "from-forest-deep/90 via-forest-deep/50 to-transparent",
    },
    {
      img: schoolLeadersImg,
      tag: "Institutional Solutions",
      number: "04",
      headline: "Bespoke Institutional Partnerships",
      desc: "Customised programmes, capacity building and strategic partnerships for organisations and universities.",
      link: "/school-leaders",
      accent: "from-forest-deep/90 via-forest-deep/50 to-transparent",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">What We Offer</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-forest-deep leading-tight">
              Our Programmes
            </h2>
            <p className="mt-2 text-[15px] text-forest/80 font-medium">High-impact learning for every stage of your journey.</p>
          </div>
          <Link
            to="/programmes"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-[15px] font-bold uppercase tracking-[0.12em] text-white hover:bg-forest transition-all duration-300"
          >
            View All Programmes <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p, i) => (
            <Link
              key={i}
              to={p.link}
              className="group relative flex flex-col overflow-hidden rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{ minHeight: 420 }}
            >
              {/* Full-bleed image */}
              <img
                src={p.img}
                alt={p.tag}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark gradient overlay — always visible at bottom */}
              <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
              {/* Extra darkening on hover */}
              <div className="absolute inset-0 bg-forest-deep/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Tag badge — top left */}
              <div className="relative z-10 p-5 flex justify-between items-start">
                <span className="bg-forest-deep/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-[0.18em] text-gold">
                  {p.tag}
                </span>
                <span className="text-[15px] font-bold text-white/80 font-mono mt-1">{p.number}</span>
              </div>

              {/* Content — pinned to bottom */}
              <div className="relative z-10 mt-auto p-5">
                <h3 className="text-[15px] font-bold text-white leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                  {p.headline}
                </h3>
                <p className="text-[15px] text-white/70 leading-relaxed mb-5 max-w-[220px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                  {p.desc}
                </p>
                <div className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.12em] text-gold">
                  Explore
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="h-3 w-3 text-gold group-hover:text-forest-deep transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-[15px] font-bold uppercase tracking-wider text-white transition-all hover:bg-forest-deep"
          >
            View All Programmes <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImpactSoFar() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "5,000+", label: "Learners Empowered", desc: "Across programmes globally" },
    { icon: <Rocket className="h-6 w-6" />, value: "120+", label: "Startups Supported", desc: "From ideation to scale" },
    { icon: <Globe2 className="h-6 w-6" />, value: "25+", label: "Countries", desc: "Represented in our community" },
    { icon: <Leaf className="h-6 w-6" />, value: "10,000+", label: "Lives Impacted", desc: "Estimated direct reach" },
    { icon: <Handshake className="h-6 w-6" />, value: "15+", label: "University Partners", desc: "World-class institutions" },
    { icon: <GraduationCap className="h-6 w-6" />, value: "35+", label: "Startups Pitched", desc: "At Cambridge Demo Days" },
  ];

  return (
    <section className="bg-white border-y border-forest/10 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Numbers That Matter</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-forest-deep leading-tight tracking-tight">
              Our Impact So Far
            </h2>
          </div>
          <Link
            to="/our-impact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-[15px] font-bold uppercase tracking-[0.18em] text-white hover:bg-forest transition-all duration-300 shrink-0"
          >
            Explore Our Impact <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Scrolling strip — same style as FeaturesStrip */}
      <div className="border-t border-forest/8 pt-10">
        <div
          className="flex w-max"
          style={{ animation: "marquee 26s linear infinite" }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-start gap-3 mx-10 min-w-[200px]">
                <div className="text-forest/70">{s.icon}</div>
                <div>
                  <div className="text-[1.6rem] font-bold text-forest-deep leading-none tabular-nums">{s.value}</div>
                  <div className="text-[15px] font-bold text-forest-deep mt-1.5">{s.label}</div>
                  <div className="text-[15px] text-forest/70 mt-0.5">{s.desc}</div>
                </div>
              </div>
              {/* Vertical separator */}
              <div className="h-14 w-px bg-forest/10 shrink-0" />
            </div>
          ))}
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
            <p className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold flex items-center gap-3 mb-4">
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
                    <h4 className="text-[15px] font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-[15px] text-primary-foreground/60 leading-relaxed">{item.desc}</p>
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
      q: "The GEL was a game changer. The Cambridge ecosystem, combined with high-quality peer learning, was truly invaluable. A transformational experience unlike anything else.",
      a: "Neha Aran",
      r: "MD, Consumer Goods Company",
      tag: "Executive Education",
      img: teachersImg,
      featured: true,
    },
    {
      q: "Zero to One gave me the clarity, tools and network to turn an idea into a viable startup. The mentors were incredible!",
      a: "Arjun Mehta",
      r: "Co-founder, MedVise AI",
      tag: "Zero to One",
      img: studentsImg,
      featured: false,
    },
    {
      q: "This student programme opened my eyes to the power of innovation and leadership. I left with confidence and lasting friendships.",
      a: "Emily Chen",
      r: "GSP Participant",
      tag: "Student Programme",
      img: schoolLeadersImg,
      featured: false,
    },
    {
      q: "The programme gave me Sharper thinking, real confidence, a global network.",
      a: "Priya Shah",
      r: "School Leader",
      tag: "Leadership",
      img: schoolLeadersImg,
      featured: false,
    },
    {
      q: "The sessions were practical, energising, and deeply relevant to the real challenges we face in education.",
      a: "Daniel Ross",
      r: "Teacher",
      tag: "Teacher Training",
      img: teachersImg,
      featured: false,
    },
  ];

  const [featured, ...rest] = testimonials;

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

        {/* Asymmetric Layout */}
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[5fr_4fr] gap-6">

          {/* Featured Card — image with dark green overlay */}
          <div className="group relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-end shadow-2xl">
            {/* Background — Cambridge looks much better */}
            <img src={cambridgeImg} alt="Cambridge" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            {/* Gradient: transparent top, dark green bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/60 to-forest-deep/20" />

            {/* Content pinned to bottom */}
            <div className="relative z-10 p-10 pb-10">

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-base">★</span>
                ))}
              </div>

              {/* Big quote mark */}
              <span className="block text-[5rem] text-gold/80 font-serif leading-none -mb-4 -ml-1 select-none">"</span>

              <p className="text-[16px] text-white/95 leading-[1.75] font-normal mb-8 max-w-md">
                {featured.q}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/20 mb-6 w-16" />

              {/* Author Row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-forest border-2 border-gold/50 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                      {featured.img ? (
                        <img src={featured.img} alt={featured.a} className="w-full h-full object-cover" />
                      ) : (
                        featured.a[0]
                      )}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-forest-deep" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-white">{featured.a}</p>
                    <p className="text-[15px] text-white/80 uppercase tracking-[0.15em] mt-0.5">{featured.r}</p>
                  </div>
                </div>
                <span className="bg-gold/20 border border-gold/30 backdrop-blur-sm text-gold text-[15px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                  {featured.tag}
                </span>
              </div>
            </div>
          </div>

          {/* Four compact cards on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-2xl p-5 border border-forest/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[220px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-gold text-[13px]">★</span>
                    ))}
                  </div>
                  <span className="bg-forest-deep text-white text-[11px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <span className="text-[3rem] text-gold/80 font-serif leading-none -mt-1 -ml-1 select-none group-hover:text-gold/80 transition-colors duration-300">"</span>

                <p
                  className="text-[14px] text-forest-deep/85 leading-[1.7] -mt-4 mb-4 flex-1"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {t.q}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-[15px] shrink-0 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden">
                    {t.img ? (
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
                    ) : (
                      t.a[0]
                    )}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-forest-deep">{t.a}</p>
                    <p className="text-[12px] text-forest/70 uppercase tracking-[0.14em] mt-0.5">{t.r}</p>
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

function CTA() {
  return (
    <section className="bg-forest-deep py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-[2rem] font-bold text-white md:text-[2.5rem] leading-tight">
              Let's build a better future—together.
            </h2>
            <p className="mt-4 text-[15px] text-primary-foreground/70 leading-relaxed">
              Whether you are a learner, leader, institution or innovator, there's a place for you at GEL.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold tracking-wide text-forest-deep transition-all hover:bg-gold/90"
            >
              Explore Programmes <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner-with-gel"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-[15px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10"
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
            <Link to="/" className="inline-block mb-3">
              <img src="/gel-logo-transparent.png" alt="Global Education Lab" className="h-16 w-auto object-contain mix-blend-multiply drop-shadow-sm" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">
              Transformational educational experiences for a lifetime of a learner's life.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[15px] font-bold uppercase tracking-[0.22em] text-forest/80 mb-4">Quick Links</p>
            <ul className="space-y-3 text-[15px] text-forest/80">
              {[["Programmes", "/programmes"], ["Entrepreneurship", "/entrepreneurship"], ["Our Impact", "/our-impact"], ["About Us", "/about"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[15px] font-bold uppercase tracking-[0.22em] text-forest/80 mb-4">Partner</p>
            <ul className="space-y-3 text-[15px] text-forest/80">
              {[["Partner with GEL", "/partner-with-gel"], ["Institutional Solutions", "/school-leaders"], ["Collaborate", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[15px] font-bold uppercase tracking-[0.22em] text-forest/80 mb-4">Resources</p>
            <ul className="space-y-3 text-[15px] text-forest/80">
              {[["News & Insights", "/insights"], ["Events", "/gallery"], ["Brochures", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[15px] font-bold uppercase tracking-[0.22em] text-forest/80 mb-4">Connect</p>
            <div className="space-y-3 text-[15px] text-forest/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-forest" />
                <a href="mailto:info@globaledulab.com" className="hover:text-forest transition-colors">
                  info@globaledulab.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-forest" />
                <a href="https://www.globaledulab.com" target="_blank" rel="noreferrer" className="hover:text-forest transition-colors">
                  www.globaledulab.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-forest/10 pt-8 text-[15px] text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-forest transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-forest transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-[13px] text-forest/50">
            © Global Education Lab Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
