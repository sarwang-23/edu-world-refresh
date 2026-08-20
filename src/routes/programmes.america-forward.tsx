import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  GraduationCap,
  Globe2,
  Handshake,
  Lightbulb,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Rocket,
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  BookOpen,
  Share2,
  Target,
  ShieldCheck,
  TrendingUp,
  Brain,
  Megaphone,
  Briefcase,
  Quote,
} from "lucide-react";
import { Footer } from "./index";

// Images from assets
import cambridgeHeroImg from "@/assets/cambridge.jpg";
import cambridgePuntingImg from "@/assets/america-forward-hero.jpg";
import businessAudienceImg from "@/assets/af-audience.jpg";
import timVinopalImg from "@/assets/person12.jpg";
import andrewHatcherImg from "@/assets/person4.jpg";

// Module images
import module1Img from "@/assets/af-leadership.jpg";
import module2Img from "@/assets/af-ai.jpg";
import module3Img from "@/assets/af-branding.jpg";
import module4Img from "@/assets/af-public-speaking.jpg";
import module5Img from "@/assets/af-finance.jpg";
import module6Img from "@/assets/af-cambridge.jpg";

export const Route = createFileRoute("/programmes/america-forward")({
  head: () => buildMeta("/programmes/america-forward"),
  component: AmericaForwardPage,
});

function AmericaForwardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7] font-sans text-foreground">
      <HeroSection />
      <PillarsSection />
      <ModulesSection />
      <ProgrammeLeadersSection />
      {/* Note: The 5-year journey timeline section has been excluded as requested */}
      <AudienceAndFormatSection />
      <BottomCtaSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-forest/10 bg-[#FBF8F2] pt-8 pb-16 md:pt-12 md:pb-24 max-w-full">
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.25em] text-[#C59B27]">
              AMERICA FORWARD PROGRAMME
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-forest leading-[1.08]">
              Learn. Connect.
              <br />
              Collaborate. Grow.
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-forest/90 tracking-tight">
              Your gateway to the UK and Europe.
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-forest/75">
              Designed for business professionals, founders and senior leaders, this experiential
              programme connects you with the UK and EU innovation ecosystem—where research,
              enterprise and opportunity come together.
            </p>

            {/* 4 Feature Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-forest/10">
              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Compass className="h-5 w-5 text-forest" />
                </div>
                <h4 className="mt-2 text-[14px] font-bold text-forest">Experience</h4>
                <p className="text-[12px] text-forest/70 leading-snug">
                  the research and innovation ecosystem
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Microscope className="h-5 w-5 text-forest" />
                </div>
                <h4 className="mt-2 text-[14px] font-bold text-forest">Connect</h4>
                <p className="text-[12px] text-forest/70 leading-snug">
                  with researchers, entrepreneurs and AI innovators
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Handshake className="h-5 w-5 text-forest" />
                </div>
                <h4 className="mt-2 text-[14px] font-bold text-forest">Find</h4>
                <p className="text-[12px] text-forest/70 leading-snug">
                  business partners and explore new opportunities
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Globe2 className="h-5 w-5 text-forest" />
                </div>
                <h4 className="mt-2 text-[14px] font-bold text-forest">Expand</h4>
                <p className="text-[12px] text-forest/70 leading-snug">
                  your impact across the UK and Europe
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/apply-now"
                search={{ source: "America Forward Programme" }}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3.5 text-[13px] sm:text-[14px] font-semibold text-white transition-all hover:bg-forest-deep shadow-md hover:shadow-lg"
              >
                Explore Upcoming Cohorts <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                search={{ source: "America Forward Custom Programme" }}
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-transparent px-5 py-3.5 text-[13px] sm:text-[14px] font-semibold text-forest transition-all hover:bg-forest/5"
              >
                Design a Custom Programme <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Quote Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl shadow-2xl border border-forest/10">
              <img
                src={cambridgePuntingImg}
                alt="Cambridge River and King's College Chapel"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Quote Box underneath */}
            <div className="mt-4 w-full rounded-2xl bg-forest-deep p-5 text-cream shadow-lg border border-forest/20 flex items-start gap-3">
              <Quote className="h-6 w-6 shrink-0 text-[#C59B27]" />
              <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed">
                “Cambridge connects you to ideas, people and opportunities that can shape the future
                of your business.” <span className="text-[#C59B27] font-semibold">— GEL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const pillars = [
    {
      icon: <BookOpen className="h-6 w-6 text-forest" />,
      title: "Executive Learning",
      desc: "Expert-led sessions on leadership, strategy, AI, innovation and more.",
    },
    {
      icon: <Microscope className="h-6 w-6 text-forest" />,
      title: "Research & Innovation Engagement",
      desc: "Interact with researchers, academics and innovation specialists.",
    },
    {
      icon: <Building2 className="h-6 w-6 text-forest" />,
      title: "Ecosystem Experiences",
      desc: "Curated visits to leading institutions, labs and innovation hubs.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-forest" />,
      title: "Business Networking",
      desc: "Connect with entrepreneurs, investors, corporates and industry leaders.",
    },
    {
      icon: <Users className="h-6 w-6 text-forest" />,
      title: "Peer Community",
      desc: "Build relationships with a global network of CXOs, founders and leaders.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-forest" />,
      title: "Culture & Cambridge",
      desc: "Punting, historic tours, formal dinners and time for reflection.",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-forest">
            CONNECT. EXPERIENCE. CREATE IMPACT.
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-[#C59B27]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start rounded-2xl border border-forest/10 bg-[#FAF8F5] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-forest/10 shadow-sm text-forest">
                {item.icon}
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-forest">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-forest/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const modules = [
    {
      num: "MODULE 1",
      title: "Leadership & Strategy",
      image: module1Img,
      icon: <Target className="h-5 w-5 text-white" />,
      bullets: [
        "Discover leadership styles and frameworks",
        "Master strategic frameworks for the AI-driven era",
        "Use AI simulations to model business scenarios",
        "Design blue ocean strategies for sustainable advantage",
      ],
    },
    {
      num: "MODULE 2",
      title: "AI & Frugal Innovation",
      image: module2Img,
      icon: <Brain className="h-5 w-5 text-white" />,
      bullets: [
        "Explore practical AI applications for innovation",
        "Do more with less through lean AI strategies",
        "Develop responsible, ethical AI adoption practices",
        "Build scalable, budget-conscious AI roadmaps",
      ],
    },
    {
      num: "MODULE 3",
      title: "Branding, Marketing & Digital Innovation",
      image: module3Img,
      icon: <Megaphone className="h-5 w-5 text-white" />,
      bullets: [
        "Use storytelling to strengthen brand equity",
        "Design customer-centric innovation strategies",
        "Leverage data, analytics and AI for measurable value",
        "Explore ESG marketing and emerging technology trends",
      ],
    },
    {
      num: "MODULE 4",
      title: "Public Speaking & The Art of Negotiation",
      image: module4Img,
      icon: <Sparkles className="h-5 w-5 text-white" />,
      bullets: [
        "Master public speaking and persuasive communication",
        "Learn storytelling for impact and engagement",
        "Strategic negotiation role-plays",
        "Communicate vision and strategy with confidence",
      ],
    },
    {
      num: "MODULE 5",
      title: "Finance, Governance & Boardroom Dynamics",
      image: module5Img,
      icon: <Briefcase className="h-5 w-5 text-white" />,
      bullets: [
        "Understand governance as an information challenge",
        "Navigate boardroom dynamics with influence",
        "Link brand strategy to financial performance",
        "Design financial strategies for global expansion",
      ],
    },
    {
      num: "MODULE 6",
      title: "Cambridge Traditions & Learning Through Experiences",
      image: module6Img,
      icon: <Building2 className="h-5 w-5 text-white" />,
      bullets: [
        "Explore Cambridge's history and enjoy punting",
        "Engage with world-class academics over dinners",
        "Build a global peer network of CXOs and leaders",
        "Reflect and recharge in an environment that inspires",
      ],
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-forest">
            CHOOSE YOUR MODULES
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-[#C59B27]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-xl"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-deep">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />
                <div className="absolute top-3 left-3 rounded bg-forest-deep/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C59B27]">
                  {mod.num}
                </div>
                {/* Floating Circle Icon Badge */}
                <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-forest border border-white/20 shadow-md">
                  {mod.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[18px] font-bold leading-snug text-forest">{mod.title}</h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {mod.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-forest/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C59B27]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeLeadersSection() {
  const leaders = [
    {
      name: "Tim Vinopal",
      role: "Programme Lead – Americas",
      image: timVinopalImg,
      bio: "Former U.S. Navy Officer and alumnus of Cambridge Judge Business School, supporting GEL’s engagement across the Americas.",
    },
    {
      name: "Andrew Hatcher",
      role: "UK Innovation Coach",
      image: andrewHatcherImg,
      bio: "Experienced investor, entrepreneur with multiple exits, and leadership coach supporting founders and growth-stage ventures.",
    },
  ];

  return (
    <section className="border-b border-forest/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-forest">
            PROGRAMME LEADERS
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-[#C59B27]" />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 rounded-2xl border border-forest/10 bg-[#FAF8F5] p-6 transition-all hover:border-[#C59B27]/40 hover:shadow-md"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#C59B27]/30 shadow-md">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-forest">{leader.name}</h3>
                <span className="text-[13px] font-semibold text-[#C59B27]">{leader.role}</span>
                <p className="mt-2 text-[13.5px] leading-relaxed text-forest/75">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceAndFormatSection() {
  const audienceItems = [
    "Business professionals and senior leaders",
    "Founders and entrepreneurs",
    "Growth-stage companies",
    "Associations and professional networks",
    "Corporate leadership teams",
  ];

  return (
    <section className="border-b border-forest/10 bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Who is it for */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.25em] text-forest">
                WHO IS AMERICA FORWARD FOR?
              </h2>
              <div className="mt-2 h-0.5 w-12 bg-[#C59B27]" />

              <ul className="mt-6 space-y-3.5">
                {audienceItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[14.5px] font-medium text-forest"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C59B27]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Highlight Box */}
            <div className="mt-8 rounded-2xl border border-forest/10 bg-white p-4.5 shadow-sm flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest/5 text-forest">
                <Globe2 className="h-5 w-5 text-forest" />
              </div>
              <p className="text-[13.5px] font-medium leading-snug text-forest/85">
                All seeking new perspectives, strategic partnerships and international growth.
              </p>
            </div>
          </div>

          {/* Middle Column: Visual Image with quote */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-forest/10 shadow-lg">
              <img
                src={businessAudienceImg}
                alt="Business leaders in Cambridge"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
            </div>

            <div className="mt-4 w-full rounded-2xl bg-forest-deep p-4.5 text-cream shadow-md border border-forest/20 flex items-start gap-2.5">
              <Quote className="h-5 w-5 shrink-0 text-[#C59B27]" />
              <p className="text-[13.5px] font-medium leading-relaxed">
                “Exposure to the right ecosystem can transform the future of your business and
                leadership.”
              </p>
            </div>
          </div>

          {/* Right Column: Flexible Format */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.25em] text-forest">
              FLEXIBLE FORMAT
            </h2>
            <div className="mt-2 h-0.5 w-12 bg-[#C59B27]" />

            <div className="mt-6 space-y-5">
              {/* Format 1 */}
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm transition-all hover:border-[#C59B27]/40 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                    <Calendar className="h-5 w-5 text-forest" />
                  </div>
                  <h3 className="text-[16px] font-bold text-forest">Rolling Cohorts</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-forest/75">
                  Join upcoming cohorts throughout the year. Ideal for individual leaders and small
                  groups.
                </p>
              </div>

              {/* Format 2 */}
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm transition-all hover:border-[#C59B27]/40 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest">
                    <Users className="h-5 w-5 text-forest" />
                  </div>
                  <h3 className="text-[16px] font-bold text-forest">Custom Programmes</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-forest/75">
                  Bespoke experiences for organisations, associations and delegations—tailored to
                  your goals, industry and priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCtaSection() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-16 md:py-20 text-white">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
          Move your organisation forward.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-white/80">
          Experience Cambridge. Explore the UK and Europe. Connect with research, innovation and
          business communities that can help shape what comes next.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          <Link
            to="/apply-now"
            search={{ source: "America Forward Next Cohort" }}
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:bg-[#C59B27] hover:border-[#C59B27] hover:text-forest-deep text-white font-semibold text-[15px]"
          >
            <Compass className="h-5 w-5" />
            <span>Explore the Next Cohort</span>
          </Link>

          <Link
            to="/contact"
            search={{ source: "America Forward Custom Programme" }}
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:bg-[#C59B27] hover:border-[#C59B27] hover:text-forest-deep text-white font-semibold text-[15px]"
          >
            <Sparkles className="h-5 w-5" />
            <span>Design a Custom Programme</span>
          </Link>

          <Link
            to="/contact"
            search={{ source: "America Forward Americas Team" }}
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:bg-[#C59B27] hover:border-[#C59B27] hover:text-forest-deep text-white font-semibold text-[15px]"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Speak with the Americas Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
