import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Sparkles, Rocket, Lightbulb, Leaf, Users, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import cambridgeImg from "@/assets/cambridge.jpg";
import schoolLeadersImg from "@/assets/school-leaders.jpg";
import businessLeadersImg from "@/assets/business-leaders.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Education Lab — Cambridge-Incubated Learning Experiences" },
      {
        name: "description",
        content:
          "GEL designs premium, immersive learning experiences with the world's leading university ecosystems — for education leaders, executives, teachers and students.",
      },
      { property: "og:title", content: "Global Education Lab" },
      {
        property: "og:description",
        content: "World-class, immersive learning — incubated in Cambridge, delivered globally.",
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
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <KeyAreas />
      <WhoWeServe />
      <Impact />
      <CambridgeOrigin />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export function Nav() {
  const links: { label: string; href: string }[] = [
    { label: "Programmes", href: "#" },
    { label: "Who We Serve", href: "#" },
    { label: "Global Ventures", href: "/global-ventures" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
            Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium tracking-[0.01em] text-forest/75 transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep md:inline-flex"
        >
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-background/60 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.22em] text-forest/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Incubated in Cambridge · Delivered Globally
          </div>
          <h1 className="mt-8 text-[2.75rem] font-bold leading-[1.02] text-forest md:text-6xl lg:text-[5rem]">
            World-class experiences that make <span className="text-gold">learning happen.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
            We partner with top-tier university ecosystems to design immersive
            programmes that place you at the centre of real-world challenges.
            The learning isn't taught — it emerges through what you do, who
            you meet, and how you lead.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep"
            >
              Start your learning journey <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-forest underline-offset-8 hover:underline"
            >
              Explore programmes
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-forest/10 pt-8">
            {[
              ["1000+", "Educators trained"],
              ["100k+", "Students impacted"],
              ["150+", "Organisations served"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-3xl font-bold text-forest md:text-4xl">{k}</dt>
                <dd className="mt-1.5 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <img
              src={heroImg}
              alt="International education leaders in a Cambridge lecture hall"
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[businessLeadersImg, teachersImg, studentsImg].map((s, i) => (
                    <img
                      key={i}
                      src={s}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-semibold tracking-tight text-forest">Cohort 2026 · Now open</p>
                  <p className="mt-0.5 text-sm tracking-wide text-muted-foreground">Cambridge · Finland · Singapore · India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-forest/10 bg-background p-4 shadow-xl md:block">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-forest/70">
              <Globe2 className="h-4 w-4 text-gold" /> 24 countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "University of Cambridge",
    "Harvard Graduate School of Education",
    "University of Helsinki",
    "Stanford d.school",
    "NUS Singapore",
    "MIT Media Lab",
  ];
  return (
    <div className="border-y border-border/70 bg-background py-8">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
        Partnered with the world's leading university ecosystems
      </p>
      <div className="relative overflow-hidden flex w-full">
        <div className="animate-marquee items-center text-forest/70">
          {[...items, ...items, ...items, ...items].map((i, idx) => (
            <span key={`${i}-${idx}`} className="mx-6 whitespace-nowrap font-semibold text-base tracking-tight md:text-xl">
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">About GEL</p>
          </div>
          <h2 className="mt-6 text-[2.25rem] font-bold leading-[1.05] text-forest md:text-[2.75rem]">
            An education company built for a <span className="text-gold">borderless</span> world.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-forest/10 pt-8">
            {[
              ["10+", "Years of practice"],
              ["24", "Countries reached"],
              ["40+", "University partners"],
              ["4", "Global hubs"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="text-2xl font-bold text-forest">{k}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <p className="text-[22px] font-medium leading-[1.4] text-forest md:text-[26px]">
            "Incubated in Cambridge for a global audience — we strengthen every part of the learning community through immersive experiences, leadership programmes and skill-building workshops."
          </p>
          <div className="mt-8 h-px w-full bg-forest/10" />
          <p className="mt-8 text-[16px] leading-[1.75] text-muted-foreground">
            We bring global best practices into local contexts. By creating
            spaces for dialogue, observation and cross-border collaboration,
            we help organisations rethink how they teach and lead — building
            a more connected, future-ready approach to learning across
            classrooms, communities and cultures.
          </p>
          <a
            href="#programmes"
            className="mt-10 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-forest underline-offset-8 hover:underline"
          >
            Our philosophy <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function KeyAreas() {
  const areas = [
    {
      icon: Rocket,
      title: "Entrepreneurship",
      body: "Igniting entrepreneurial mindsets that empower learners to think boldly and turn ideas into real-world impact.",
    },
    {
      icon: Compass,
      title: "Leadership",
      body: "Building confident, purpose-driven leaders equipped to inspire teams and shape the future of education.",
    },
    {
      icon: Sparkles,
      title: "Accelerated Learning",
      body: "Cutting-edge methods that help learners absorb knowledge faster, retain it longer, and apply it effectively.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      body: "Fostering creativity and problem-solving to design fresh solutions for today's global challenges.",
    },
    {
      icon: Users,
      title: "Experiential Learning",
      body: "Turning theory into practice through immersive, hands-on experiences that transform learning into action.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      body: "Embedding sustainable values so education drives meaningful, long-term impact for people and planet.",
    },
  ];
  return (
    <section id="programmes" className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Six focus areas</p>
            <h2 className="mt-5 max-w-2xl text-[2.25rem] font-bold leading-[1.1] md:text-[2.75rem]">
              Our key areas of <span className="text-gold">experiential</span> learning.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.65] text-primary-foreground/70">
            Six pillars, one philosophy: learning that emerges from doing, in
            environments where world-class practice is the everyday norm.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-primary-foreground/10 bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-forest p-8 transition-colors hover:bg-forest-deep"
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
              <h3 className="mt-8 text-[1.5rem] font-bold leading-tight">{title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-primary-foreground/70">{body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-primary-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const groups = [
    {
      img: schoolLeadersImg,
      tag: "01 · Education Leaders",
      title: "For school owners and trustees.",
      body: "Global exposure programmes that showcase best practices worldwide — inspiring fresh ideas for building future-ready schools and universities.",
    },
    {
      img: businessLeadersImg,
      tag: "02 · Business Leaders",
      title: "For CXOs and senior executives.",
      body: "Executive leadership programmes that deliver cutting-edge insights, AI and strategy tools, and the global networks to accelerate transformation.",
    },
    {
      img: teachersImg,
      tag: "03 · K-12 Teachers",
      title: "For educators shaping classrooms.",
      body: "Practical, research-backed training that enhances pedagogy, classroom innovation and teacher leadership — so educators create meaningful impact.",
    },
    {
      img: studentsImg,
      tag: "04 · Students & Young Learners",
      title: "For the next generation.",
      body: "From online programmes to immersive residential camps — global exposure, critical thinking and entrepreneurial mindsets for the future.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Who we serve</p>
        <h2 className="mt-5 text-[2.25rem] font-bold leading-[1.1] text-forest md:text-[2.75rem]">
          Four communities, one shared belief in what learning can be.
        </h2>
      </div>
      <div className="space-y-16">
        {groups.map((g, i) => (
          <article
            key={g.tag}
            className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">{g.tag}</p>
              <h3 className="mt-5 text-[1.85rem] font-bold leading-[1.15] text-forest md:text-[2.15rem]">
                {g.title}
              </h3>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted-foreground">{g.body}</p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-forest underline-offset-8 hover:underline"
              >
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    ["1000+", "Educators trained"],
    ["50+", "Mentors & coaches"],
    ["100+", "Awards given"],
    ["500+", "Learners engaged"],
    ["15+", "Successful programmes"],
    ["150+", "Organisations served"],
    ["1000+", "Educators"],
    ["100,000+", "Students impacted"],
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="max-w-xl text-[2.25rem] font-bold leading-[1.1] text-forest md:text-[2.75rem]">
            Our global impact, in numbers.
          </h2>
          <p className="hidden max-w-xs text-[14px] leading-[1.65] text-muted-foreground md:block">
            A decade of building bridges between classrooms, boardrooms and campuses around the world.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10 md:grid-cols-4">
          {stats.map(([k, v]) => (
            <div key={v + k} className="bg-cream p-8">
              <dt className="text-[2.25rem] font-bold text-forest md:text-[2.75rem]">{k}</dt>
              <dd className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CambridgeOrigin() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={cambridgeImg}
              alt="Cambridge courtyard at golden hour"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Where it began</p>
          <h2 className="mt-5 text-[2.5rem] font-bold leading-[1.05] md:text-[3.5rem]">
            Rooted in <span className="text-gold">Cambridge.</span> Written for the world.
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-primary-foreground/75">
            Eight centuries of intellectual tradition. A living network of
            researchers, founders and educators. GEL was built inside that
            ecosystem — and carries its rigour into every programme, whether
            it lands in Helsinki, Singapore, Mumbai or Nairobi.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-primary-foreground/15 pt-8 md:grid-cols-3">
            {[
              ["Cambridge, UK", "Design & research hub"],
              ["Global Cohorts", "Delivered in 24 countries"],
              ["Partner Network", "40+ university partners"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[1.2rem] font-bold leading-tight">{k}</p>
                <p className="mt-1.5 text-[13px] text-primary-foreground/60">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [studentsImg, schoolLeadersImg, teachersImg, businessLeadersImg, heroImg, cambridgeImg];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Gallery</p>
          <h2 className="mt-5 max-w-xl text-[2.25rem] font-bold leading-[1.1] text-forest md:text-[2.75rem]">
            Programmes, coming to life.
          </h2>
        </div>
        <a
          href="#"
          className="hidden items-center gap-2 text-[13px] font-medium tracking-wide text-forest underline-offset-8 hover:underline md:inline-flex"
        >
          See all <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {imgs.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl ${
              i === 0 ? "col-span-2 row-span-2 md:aspect-square" : "aspect-[3/4]"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-20 text-primary-foreground md:px-16 md:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Apply now · Cohort 2026</p>
          <h2 className="mt-5 text-[2.5rem] font-bold leading-[1.05] md:text-[3.5rem]">
            Ready to learn where the world's best learn?
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-primary-foreground/75">
            Speak to our team about the right programme for you, your school or
            your organisation. Applications for the 2026 cohorts are open.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wide text-forest-deep transition-all hover:bg-gold/90"
            >
              Start your journey <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    ["Programmes", ["Education Leaders", "Business Leaders", "K-12 Teachers", "Students"]],
    ["Company", ["About", "Insights", "Gallery", "Contact"]],
    ["Locations", ["Cambridge, UK", "Helsinki", "Singapore", "Mumbai"]],
  ] as const;
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[1.75rem] font-bold leading-none tracking-tight text-forest">
              Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
            </span>
            <p className="mt-5 max-w-sm text-[14px] leading-[1.7] text-muted-foreground">
              Immersive learning experiences, incubated in Cambridge — designed
              for leaders, educators and students shaping what comes next.
            </p>
          </div>
          {cols.map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-forest/60">{title}</p>
              <ul className="mt-5 space-y-3">
                {items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-[14px] text-forest/85 transition-colors hover:text-forest">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1" />
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-forest/10 pt-8 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Global Education Lab. All rights reserved.</p>
          <p className="font-medium uppercase tracking-[0.22em]">Cambridge · Global</p>
        </div>
      </div>
    </footer>
  );
}
