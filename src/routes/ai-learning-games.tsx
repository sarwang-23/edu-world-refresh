import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Users, BookOpen, Lightbulb, BarChart3, Zap, Globe2, Award, PlayCircle, X } from "lucide-react";
import heroImg from "@/assets/ai-games-hero.jpg";
import classroomImg from "@/assets/ai-games-classroom.jpg";
import studentsImg from "@/assets/ai-games-students.jpg";
import groupImg from "@/assets/ai-games-group.jpg";
import workshopImg from "@/assets/ai-games-workshop.jpg";
import logoRaeng from "@/assets/logo-raeng.png";
import logoChangeSchool from "@/assets/logo-change-school.png";
import logoCambridgeJbs from "@/assets/logo-cambridge-jbs.png";
import logoCambridgeCisl from "@/assets/logo-cambridge-cisl.png";
import logoOxfordBrookes from "@/assets/logo-oxford-brookes.png";
import portfolioImg1 from "@/assets/portfolio-img1.jpg";
import portfolioImg2 from "@/assets/portfolio-img2.jpg";
import portfolioImg3 from "@/assets/portfolio-img3.jpg";
import portfolioImg4 from "@/assets/portfolio-img4.jpg";
import portfolioImg5 from "@/assets/portfolio-img5.jpg";
import formatImg1 from "@/assets/format-img1.jpg";
import formatImg2 from "@/assets/format-img2.jpg";
import galleryAction1 from "@/assets/gallery-action-1.jpg";
import galleryAction2 from "@/assets/gallery-action-2.jpg";
import galleryAction3 from "@/assets/gallery-action-3.jpg";
import galleryAction4 from "@/assets/gallery-action-4.jpg";
import galleryAction5 from "@/assets/gallery-action-5.jpg";
import galleryAction6 from "@/assets/gallery-action-6.jpg";
import galleryAction7 from "@/assets/gallery-action-7.jpg";

const portfolioImages = [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5];
const actionGalleryImages = [
  galleryAction6,
  galleryAction7,
  galleryAction1,
  galleryAction2,
  galleryAction3,
  galleryAction4,
  galleryAction5,
  studentsImg,
  groupImg,
  workshopImg,
  classroomImg,
];

export const Route = createFileRoute("/ai-learning-games")({
  head: () => ({
    meta: [
      { title: "AI-Powered Learning Games — Global Education Lab" },
      {
        name: "description",
        content:
          "AI-powered simulations that place learners inside real business scenarios. Make decisions. See the impact. Build the skills that matter in today's world.",
      },
    ],
  }),
  component: AILearningGames,
});

const gamePortfolio = [
  {
    icon: "🌱",
    title: "ESG & Sustainability",
    desc: "Balance growth with sustainability as you manage resources, meet stakeholder expectations and create long-term value.",
    duration: "90–120 mins",
    objectives: [
      "Understand the trade-offs between profitability and sustainable practices.",
      "Manage stakeholder expectations in a dynamic environment.",
      "Develop long-term strategies for carbon footprint reduction."
    ]
  },
  {
    icon: "📣",
    title: "Marketing",
    desc: "Build a brand, understand customers and allocate budgets effectively in a dynamic competitive market.",
    duration: "60–90 mins",
    objectives: [
      "Allocate marketing budgets across digital and traditional channels.",
      "Analyze competitor positioning and adapt pricing strategies.",
      "Understand customer segmentation and target demographics."
    ]
  },
  {
    icon: "♟️",
    title: "Business Strategy",
    desc: "Analyse markets, assess capabilities and make strategic decisions that shape your organisation's future.",
    duration: "120–150 mins",
    objectives: [
      "Evaluate market entry strategies for new product lines.",
      "Assess internal capabilities against external market threats.",
      "Navigate mergers, acquisitions, and strategic partnerships."
    ]
  },
  {
    icon: "🚀",
    title: "Entrepreneurship",
    desc: "Start, build and scale your venture. Manage resources, validate ideas and navigate growth challenges.",
    duration: "90–120 mins",
    objectives: [
      "Validate product-market fit with limited initial capital.",
      "Manage cash flow burn rate while scaling operations.",
      "Pitch to virtual investors and secure seed funding rounds."
    ]
  },
  {
    icon: "🏢",
    title: "Organisational Behaviour",
    desc: "Lead teams, manage change and build a positive culture in complex, human-centred situations.",
    duration: "60–90 mins",
    objectives: [
      "Resolve workplace conflicts and improve team morale.",
      "Implement change management strategies during restructuring.",
      "Foster an inclusive and high-performance corporate culture."
    ]
  },
];

const whyItWorks = [
  {
    icon: <Zap className="h-7 w-7 text-forest" />,
    title: "AI-Powered Scenarios",
    desc: "AI accelerates the creation of realistic, adaptive scenarios tailored to your learning outcomes.",
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-forest" />,
    title: "Personalised Feedback",
    desc: "Learners receive real-time feedback and explanations that strengthen understanding and decision-making.",
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-forest" />,
    title: "Learning Analytics",
    desc: "Actionable insights for educators on decisions, patterns, strengths and learning gaps.",
  },
  {
    icon: <Globe2 className="h-7 w-7 text-forest" />,
    title: "Easy Integration",
    desc: "Seamlessly integrate into LMS, courses, workshops and assessment frameworks.",
  },
  {
    icon: <Award className="h-7 w-7 text-forest" />,
    title: "Academically Grounded",
    desc: "Built with academic rigour and aligned to leading business frameworks and standards.",
  },
];

const stats = [
  { value: "5,000+", label: "Learners Engaged" },
  { value: "75+", label: "Institutions" },
  { value: "30+", label: "Countries" },
  { value: "95%", label: "Learners Recommend" },
];

function AILearningGames() {
  const [selectedGameIndex, setSelectedGameIndex] = useState<number | null>(null);
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(3);

  return (
    <>
      <main className="bg-white text-forest">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-cream">
        {/* subtle grid overlay like homepage */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 lg:grid-cols-12 lg:gap-12 pt-10">

          {/* Left: Text */}
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/8 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-forest">
              AI-Powered Learning Games
            </div>
            <h1 className="mt-2 text-[2.75rem] font-bold leading-[1.05] text-forest md:text-5xl lg:text-[3.25rem] xl:text-[3.8rem]">
              Turn Business Theory into{" "}
              <span className="text-gold">Real-World Decision-Making</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
              AI-powered simulations that place learners inside real business scenarios. Make decisions. See the impact. Build the skills that matter in today's world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                search={{ source: "ai-learning-games" }}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all hover:bg-forest-deep hover:gap-3"
              >
                Request a Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-[15px] font-medium tracking-wide text-forest transition-all hover:bg-forest/5"
              >
                <PlayCircle className="h-4 w-4" /> Explore the Games
              </a>
            </div>
            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-5">
              {[
                { icon: <BookOpen className="h-4 w-4" />, label: "Curriculum-Based Learning" },
                { icon: <Zap className="h-4 w-4" />, label: "AI-Powered Scenarios & Feedback" },
                { icon: <BarChart3 className="h-4 w-4" />, label: "Analytics for Deeper Insights" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-forest/60 text-[14px] font-medium">
                  <span className="text-forest/50">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image card */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
              <img
                src={heroImg}
                alt="AI Learning Games in action"
                className="h-full w-full object-cover"
              />
              {/* floating stat badge removed */}
            </div>
            {/* decorative dot grid */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 opacity-20 [background-image:radial-gradient(var(--forest)_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
          </div>

        </div>
      </section>



      {/* ── CLIENTS WE HAVE WORKED WITH ── */}
      <ClientsSection />



      {/* ── GAME PORTFOLIO ── */}
      <section id="portfolio" className="bg-[#F7F5F0] py-24 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-bold tracking-tight text-forest mb-4">
              Our Learning Game Portfolio
            </h2>
            <p className="text-[1.05rem] text-forest/65 max-w-xl mx-auto">
              Curriculum-aligned simulations that develop critical business skills through immersive experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {gamePortfolio.map((game, i) => (
              <div
                key={game.title}
                className="group flex flex-col rounded-2xl border border-forest/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="mb-4 h-36 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${portfolioImages[i]})`,
                  }}
                />
                <h3 className="text-[15px] font-bold text-forest mb-2">{game.title}</h3>
                <p className="text-[13px] text-forest/60 leading-relaxed flex-1">{game.desc}</p>
                <button 
                  onClick={() => setSelectedGameIndex(i)}
                  className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-forest/70 hover:text-forest transition-colors group-hover:gap-2"
                >
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO FORMATS ── */}
      <section className="bg-forest-deep text-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.4rem] font-bold tracking-tight text-white mb-4">
              Two Flexible Learning Formats
            </h2>
            <p className="text-white/70 text-[1.05rem]">
              Use the format that best fits your course, workshop or programme.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Micro-Simulations */}
            <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10">
                <Zap className="h-6 w-6 text-forest" />
              </div>
              <h3 className="text-[1.4rem] font-bold text-forest mb-3">Micro-Simulations</h3>
              <p className="text-forest/65 mb-6 text-[15px]">
                Short, focused experiences (20–30 min) that introduce, apply or reinforce key concepts in-class.
              </p>
              <ul className="space-y-3 mb-8">
                {["Pre-class or in-class activities", "Flipped classroom support", "Formative assessment", "Quick, engaging and easy to integrate"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14.5px] text-forest/80">
                    <CheckCircle2 className="h-4 w-4 text-forest flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="overflow-hidden rounded-xl">
                <img src={formatImg1} alt="Micro-Simulations in action" className="w-full h-48 object-cover" />
              </div>
            </div>

            {/* Interactive Case Simulations */}
            <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10">
                <Users className="h-6 w-6 text-forest" />
              </div>
              <h3 className="text-[1.4rem] font-bold text-forest mb-3">Interactive Case Simulations</h3>
              <p className="text-forest/65 mb-6 text-[15px]">
                Multi-round, facilitated experiences where learners make a series of decisions in an evolving scenario.
              </p>
              <ul className="space-y-3 mb-8">
                {["Team or individual play", "Facilitated discussions & debrief", "Performance dashboards", "Deeper learning and reflection"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14.5px] text-forest/80">
                    <CheckCircle2 className="h-4 w-4 text-forest flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="overflow-hidden rounded-xl">
                <img src={formatImg2} alt="Interactive Case Simulations" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="py-28 bg-[#F5F2E9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.4rem] font-bold tracking-tight text-forest mb-4">
              Why Our AI-Powered Games Work
            </h2>
            <p className="text-forest/60 text-[1.05rem]">
              Technology that enhances teaching. Data that deepens learning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyItWorks.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/8">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-[13px] text-forest/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="bg-forest-deep py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <p className="text-center text-[14px] font-bold uppercase tracking-[0.22em] text-white/50">
            Real Impact in the Classroom
          </p>
        </div>
        
        <div className="relative">
          <div
            className="flex items-center gap-16 md:gap-32"
            style={{
              animation: 'statsTicker 35s linear infinite reverse',
              width: 'max-content',
            }}
          >
            {/* Render 4 sets to ensure it loops seamlessly on wide screens */}
            {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
              <div key={i} className="text-center flex-shrink-0 w-56">
                <p className="text-[2.8rem] font-bold text-gold leading-none mb-2">{s.value}</p>
                <p className="text-[14px] text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-forest-deep to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-forest-deep to-transparent z-10" />
        </div>
        <style>{`
          @keyframes statsTicker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── IN-ACTION GALLERY ── */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-[2.4rem] font-bold tracking-tight text-forest mb-4">
              Learning Games in Action
            </h2>
            <p className="text-forest/60 text-[1.05rem] max-w-xl mx-auto">
              See how our games create dynamic, immersive learning experiences in classrooms and boardrooms around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {actionGalleryImages.slice(0, visibleGalleryCount).map((img, i) => {
              return (
                <div key={i} className="overflow-hidden rounded-2xl">
                  <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              );
            })}
          </div>
          {visibleGalleryCount < actionGalleryImages.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleGalleryCount(actionGalleryImages.length)}
                className="inline-flex items-center justify-center rounded-full border-2 border-forest/20 px-8 py-3.5 text-[14px] font-bold uppercase tracking-wider text-forest transition-all hover:bg-forest/5"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-forest-deep">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[2.2rem] font-bold tracking-tight text-white mb-5 leading-tight">
                Bring Experiential Learning to Your Curriculum
              </h2>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Whether you want to integrate an existing game, run a facilitated workshop, or create a custom simulation, we'll help you deliver impactful learning experiences that your students will remember.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  search={{ source: "ai-learning-games" }}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-forest-deep transition-all hover:bg-gold/90 hover:gap-3"
                >
                  Request a Demo <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {["Faculty Support & Training", "Customisable & Scalable", "Measurable Learning Outcomes", "Ongoing Partnership"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[15px] text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedGameIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-forest-deep/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedGameIndex(null)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-white shadow-2xl transition-all flex flex-col md:flex-row">
            
            {/* Close Button (Floating) */}
            <button 
              onClick={() => setSelectedGameIndex(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Left side: Image & Hero Info */}
            <div className="relative h-72 md:h-auto md:w-5/12 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${portfolioImages[selectedGameIndex]})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="mb-3 w-fit rounded-full bg-gold/20 backdrop-blur-sm px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-gold border border-gold/30">
                  Simulation Module
                </span>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {gamePortfolio[selectedGameIndex].title}
                </h3>
              </div>
            </div>
            
            {/* Right side: Content */}
            <div className="p-8 md:p-10 md:w-7/12 flex flex-col bg-[#F7F5F0]">
              
              <div className="mb-8">
                <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-forest/50 mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Overview
                </h4>
                <p className="text-[16px] leading-relaxed text-forest/80 font-medium">
                  {gamePortfolio[selectedGameIndex].desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-forest/5 shadow-sm">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-forest/50 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-forest" /> Format
                  </h4>
                  <p className="text-[13px] font-semibold text-forest">Flexible (In-person / Online)</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-forest/5 shadow-sm">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-forest/50 mb-1.5 flex items-center gap-1.5">
                    <PlayCircle className="h-3.5 w-3.5 text-forest" /> Duration
                  </h4>
                  <p className="text-[13px] font-semibold text-forest">{gamePortfolio[selectedGameIndex].duration}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-forest/50 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" /> Key Learning Objectives
                </h4>
                <ul className="space-y-3">
                  {gamePortfolio[selectedGameIndex].objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span className="text-[14.5px] leading-relaxed text-forest/80 font-medium">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4 border-t border-forest/10">
                <Link
                  to="/contact"
                  onClick={() => setSelectedGameIndex(null)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-3.5 text-[14px] font-bold uppercase tracking-wider text-white transition-all hover:bg-forest-deep shadow-md hover:shadow-lg"
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </Link>
                <button 
                  onClick={() => setSelectedGameIndex(null)}
                  className="flex-1 rounded-full bg-transparent border-2 border-forest/20 px-8 py-3.5 text-[14px] font-bold uppercase tracking-wider text-forest transition-all hover:bg-forest/5"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
    <Footer />
    </>
  );
}


function ClientsSection() {
  const logos = [
    { src: logoRaeng, alt: "Royal Academy of Engineering" },
    { src: logoChangeSchool, alt: "change.school" },
    { src: logoCambridgeJbs, alt: "University of Cambridge Judge Business School" },
    { src: logoCambridgeCisl, alt: "Cambridge Institute for Sustainability Leadership" },
    { src: logoOxfordBrookes, alt: "Oxford Brookes University" },
  ];

  return (
    <section className="border-y border-forest/8 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.3em] text-forest/50 mb-8">
          Clients We Have Worked With
        </p>
      </div>

      {/* Full-width ticker (no max-w constraint) */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center gap-10"
          style={{
            animation: 'logoTicker 30s linear infinite reverse',
            width: 'max-content',
          }}
        >
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl border border-stone-100 shadow-sm"
              style={{ width: '260px', height: '140px', padding: '16px 24px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                draggable={false}
                className="object-contain"
                style={{ width: '200px', height: '100px' }}
              />
            </div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <style>{`
        @keyframes logoTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
