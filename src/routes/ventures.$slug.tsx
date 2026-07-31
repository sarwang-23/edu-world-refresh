import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import {
  ArrowUpRight,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  Globe,
  Target,
  CheckCircle2,
  Shield,
  Users,
  Handshake,
  Rocket,
  Lightbulb,
  Briefcase,
  Download,
  Lock,
  Leaf,
  Atom,
  Sparkles,
  Microscope,
  FlaskConical,
  Brain,
  Zap,
  Globe2,
  Cpu
} from 'lucide-react'
import { useState } from 'react'
import heroImg from '@/assets/hero-classroom.jpg'
import cambridgeImg from '@/assets/cambridge.jpg'
import businessLeadersImg from '@/assets/business-leaders.jpg'
import { Footer } from './index'

type Venture = {
  slug: string
  name: string
  track: 'Venture Track' | 'Research Track'
  tagline: string
  intro: string
  sector: string
  stage: string
  origin: string
  markets: string
  logo: React.ReactNode
  color: string
  problem: string
  solution: string
  matters: string
  impact: string
  highlights: string[]
  progress: string[]
  metrics: { l: string; v: string; subtitle?: string }[]
  team: { name: string; role: string; bio: string; img?: string }[]
  seeking: { icon: React.ReactNode; t: string; d: string }[]
  roadmap: { period: string; icon: React.ReactNode; items: string[] }[]
}

const VENTURES: Record<string, Venture> = {
  'kavach-ai': {
    slug: 'kavach-ai', name: 'KAVACH AI', track: 'Venture Track',
    tagline: 'Intelligent technology for a safer and more resilient future.',
    intro: 'Kavach AI is an emerging artificial intelligence venture developing intelligent solutions for complex operational, security and resilience-related challenges.',
    sector: 'Artificial Intelligence', stage: 'Early-stage Venture', origin: 'India', markets: 'UK, EU, Middle East, Asia-Pacific',
    logo: <span className="text-5xl font-bold font-serif text-white">K</span>, color: 'from-slate-900 via-indigo-950 to-slate-900',
    problem: 'Many organisations face rising security and operational risks due to fragmented systems, manual monitoring and slow response times.',
    solution: 'Kavach AI uses advanced artificial intelligence to detect risks in real time, predict threats and automate intelligent responses.',
    matters: 'More resilient operations, lower risk exposure and better decision-making lead to safer businesses and communities.',
    impact: 'Enabling organisations to act faster, reduce incidents and build a safer, more resilient future for all stakeholders.',
    highlights: ['AI-powered real-time risk detection and prediction', 'Adaptive to multiple industries and use cases', 'Proprietary algorithms for high accuracy and low false alerts', 'Scalable and secure architecture built for global deployment', 'Strong founding team with deep tech and domain expertise'],
    progress: ['MVP developed and tested across pilot deployments', 'Successful pilots with early enterprise users', 'Proprietary AI models trained on multi-domain datasets', 'Strategic partnerships in progress', 'Patent application filed'],
    metrics: [{ l: 'Pilots Completed', v: '3', subtitle: 'Pilot Stage' }, { l: 'Accuracy', v: '92%+' }, { l: 'Early Customers', v: '5' }, { l: 'Alerts Processed', v: '50K+' }, { l: 'Incidents Mitigated', v: '37%', subtitle: 'reduction' }],
    team: [
      { name: 'Aarav Sharma', role: 'Co-founder & CEO', bio: 'AI and cybersecurity expert with 10+ years of experience building scalable enterprise solutions.' },
      { name: 'Neha Iyer', role: 'Co-founder & CTO', bio: 'Former research scientist in machine learning with expertise in predictive analytics and deep learning.' },
    ],
    seeking: [
      { icon: <Briefcase className="h-5 w-5" />, t: 'Investment', d: 'Pre-seed / Seed investment to scale product, expand pilots and accelerate market entry.' },
      { icon: <Users className="h-5 w-5" />, t: 'Pilot Partners', d: 'Enterprises and institutions interested in piloting AI-driven risk intelligence solutions.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Strategic Partners', d: 'Technology partners, system integrators and consultants.' },
      { icon: <Lightbulb className="h-5 w-5" />, t: 'Mentors & Experts', d: 'Domain experts in AI, cybersecurity, enterprise sales and product strategy.' },
    ],
    roadmap: [
      { period: '0 \u2013 6 Months', icon: <Rocket className="h-6 w-6" />, items: ['Scale pilots across multiple sectors', 'Enhance AI models and platform'] },
      { period: '6 \u2013 12 Months', icon: <TrendingUp className="h-6 w-6" />, items: ['Commercial launch in target markets', 'Expand enterprise customer base'] },
      { period: '12 \u2013 18 Months', icon: <Globe className="h-6 w-6" />, items: ['International expansion through UK', 'Strategic partnerships and integrations'] },
      { period: '18 \u2013 24 Months', icon: <Target className="h-6 w-6" />, items: ['Platform scaling and market leadership', 'Sustainable revenue and profitability'] },
    ],
  },
  // Placeholders so the links on /global-ventures work
  'carbon-sync': { slug: 'carbon-sync', name: 'CARBON SYNC', track: 'Venture Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <Leaf />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
  'project-tacto': { slug: 'project-tacto', name: 'PROJECT TACTO', track: 'Venture Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <Atom />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
  'vyomveda': { slug: 'vyomveda', name: 'VYOMVEDA', track: 'Research Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <Sparkles />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
  'cellunova': { slug: 'cellunova', name: 'CELLUNOVA', track: 'Research Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <Microscope />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
  'saivyy': { slug: 'saivyy', name: 'SAIVYY', track: 'Venture Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <FlaskConical />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
}

export const Route = createFileRoute('/ventures/$slug')({
  loader: ({ params }) => {
    const v = VENTURES[params.slug]
    if (!v) throw notFound()
    return v
  },
  component: VenturePage,
})

function VenturePage() {
  const v = Route.useLoaderData()
  const [activeTab, setActiveTab] = useState("Overview")
  
  if (v.slug !== 'kavach-ai') {
    return <div className="p-24 text-center">Content placeholder for {v.name}. (Only Kavach AI is fully implemented for this demo)</div>
  }

  const tabs = ["Overview", "The Opportunity", "Solution", "Progress", "Team", "Collaboration", "Roadmap", "GEL's Role"]

  return (
    <div className="min-h-screen bg-cream font-sans text-foreground flex flex-col">
      <Hero v={v} />
      <MetadataBar v={v} />
      
      {/* Tabs Menu */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-forest/10 shadow-sm overflow-x-auto hide-scrollbar">
        <div className="mx-auto max-w-7xl px-6 flex items-center gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-[15px] font-bold uppercase tracking-wider transition-colors relative ${activeTab === tab ? 'text-forest-deep' : 'text-forest/70 hover:text-forest-deep'}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-deep" />
              )}
            </button>
          ))}
        </div>
      </div>

      <MainContent v={v} />
      <GelsRole />
      <BottomCTA />
      <Footer />
    </div>
  )
}

function Hero({ v }: { v: Venture }) {
  return (
    <section className="bg-forest-deep text-white pt-10 pb-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" 
        style={{ backgroundImage: `url(${cambridgeImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center gap-2 text-[15px] uppercase tracking-wider text-white/80 mb-8">
          <Link to="/global-ventures" className="hover:text-white transition-colors">Global Ventures</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/80">Venture Profile</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded text-[15px] font-bold uppercase tracking-widest text-gold mb-6">
              {v.track}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {v.name}
            </h1>
            <p className="text-2xl md:text-[2rem] font-bold text-gold leading-tight max-w-2xl mb-6">
              {v.tagline.split('.')[0]}<span className="text-white italic">.</span>
            </p>
            <p className="text-[15px] text-white/80 leading-relaxed max-w-2xl mb-8">
              {v.intro}
            </p>
          </div>
          
          <div className="lg:col-span-4 relative flex flex-col items-center">
            {/* Logo Shield */}
            <div className="w-32 h-32 md:w-48 md:h-48 mb-8 relative flex items-center justify-center">
              <Shield className="absolute inset-0 w-full h-full text-white/10 stroke-1" />
              <Shield className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-white/80 stroke-1" />
              <Shield className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] text-white stroke-2 fill-white/5 backdrop-blur-md" />
              <span className="relative z-10 text-5xl md:text-7xl font-sans font-medium text-white mb-4">K</span>
            </div>

            {/* Interested Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-forest-deep w-full max-w-sm">
              <h3 className="text-[15px] font-bold mb-2">Interested in this venture?</h3>
              <p className="text-[15px] text-forest/70 mb-6">We facilitate introductions to founders and support meaningful collaborations.</p>
              
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-forest-deep text-white rounded-lg py-2.5 text-[15px] font-bold mb-3 hover:bg-forest transition-colors">
                Request Introduction <ArrowUpRight className="h-3 w-3" />
              </Link>
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white text-forest-deep border border-forest/20 rounded-lg py-2.5 text-[15px] font-bold hover:bg-forest/5 transition-colors">
                Request Venture Brief <Download className="h-3 w-3" />
              </Link>
              
              <div className="flex items-start gap-2 mt-4 text-[15px] text-forest/80">
                <Lock className="h-3 w-3 shrink-0 mt-0.5" />
                <p>Introductions are subject to relevance, founder approval and confidentiality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetadataBar({ v }: { v: Venture }) {
  const items = [
    { icon: <Cpu className="h-5 w-5" />, l: "SECTOR", v: v.sector },
    { icon: <TrendingUp className="h-5 w-5" />, l: "STAGE", v: v.stage },
    { icon: <Globe className="h-5 w-5" />, l: "ORIGIN", v: v.origin },
    { icon: <Target className="h-5 w-5" />, l: "TARGET MARKETS", v: v.markets },
  ]
  return (
    <div className="bg-white border-b border-forest/10">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-forest/10">
          {items.map((item, i) => (
            <div key={i} className={`flex items-center gap-4 ${i !== 0 ? 'pl-4 md:pl-8' : ''}`}>
              <div className="text-forest/70">
                {item.icon}
              </div>
              <div>
                <p className="text-[15px] font-bold uppercase tracking-widest text-forest/70">{item.l}</p>
                <p className="text-[15px] font-semibold text-forest-deep mt-0.5">{item.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MainContent({ v }: { v: Venture }) {
  const problemCards = [
    { icon: <Target className="h-6 w-6 text-forest" />, title: "The Problem", desc: v.problem },
    { icon: <Brain className="h-6 w-6 text-forest" />, title: "Our Solution", desc: v.solution },
    { icon: <Globe2 className="h-6 w-6 text-forest" />, title: "Why It Matters", desc: v.matters },
    { icon: <Shield className="h-6 w-6 text-forest" />, title: "Our Impact", desc: v.impact },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 w-full">
      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        
        {/* Left Column (Main Content) */}
        <div className="space-y-12">
          
          {/* Top 4 Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemCards.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-forest/10 shadow-sm flex flex-col items-center text-center">
                <div className="mb-4">{c.icon}</div>
                <h4 className="text-[15px] font-bold text-forest-deep mb-3">{c.title}</h4>
                <p className="text-[15px] text-forest/70 leading-relaxed flex-1 mb-4">{c.desc}</p>
                <Link to="/contact" className="text-[15px] font-bold text-forest hover:text-forest-deep inline-flex items-center gap-1 transition-colors mt-auto">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* Progress & Team Split */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Progress to Date */}
            <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-forest-deep mb-6">Progress to Date</h3>
              <div className="space-y-4 mb-8">
                {v.progress.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-forest shrink-0" />
                    <span className="text-[15px] text-forest/80 leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-cream rounded-xl p-6 mt-auto">
                <h4 className="text-[15px] font-bold text-forest-deep mb-4">
                  Key Metrics <span className="font-normal text-forest/80">(Pilot Stage)</span>
                </h4>
                <div className="space-y-3">
                  {v.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-forest/10 pb-2 last:border-0 last:pb-0">
                      <span className="text-[15px] text-forest/70 font-medium">{m.l}</span>
                      <div className="text-right">
                        <span className="text-[15px] font-bold text-forest-deep">{m.v}</span>
                        {m.subtitle && <p className="text-[15px] text-forest/70 leading-none">{m.subtitle}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founding Team */}
            <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm">
              <h3 className="text-xl font-bold text-forest-deep mb-6">Founding Team</h3>
              <div className="space-y-6">
                {v.team.map((member, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-forest/5 last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-full bg-forest/10 overflow-hidden shrink-0">
                      <img src={businessLeadersImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-forest-deep">{member.name}</h4>
                      <p className="text-[15px] font-semibold text-gold mb-2">{member.role}</p>
                      <p className="text-[15px] text-forest/70 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-forest/5">
                <p className="text-[15px] text-forest/70 italic mb-4">Advisors and domain experts from security, AI and enterprise technology.</p>
                <Link to="/team" className="text-[15px] font-bold text-forest hover:text-forest-deep inline-flex items-center gap-1 transition-colors">
                  View Team <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm">
            <h3 className="text-xl font-bold text-forest-deep mb-8">Roadmap</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-6 left-12 right-12 h-px border-t-2 border-dashed border-forest/10 -z-10" />
              {v.roadmap.map((stage, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full border border-forest/10 shadow-sm flex items-center justify-center text-forest mb-4">
                    {stage.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-forest-deep mb-4">{stage.period}</h4>
                  <ul className="text-left w-full space-y-2">
                    {stage.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[15px] text-forest/70 leading-relaxed">
                        <CheckCircle2 className="h-3 w-3 text-forest/70 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">
          {/* Venture Highlights */}
          <div className="bg-white rounded-2xl p-6 border border-forest/10 shadow-sm">
            <h3 className="text-lg font-bold text-forest-deep mb-6">Venture Highlights</h3>
            <div className="space-y-4">
              {v.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-forest/70 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-forest/80 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* We are seeking */}
          <div className="bg-white rounded-2xl p-6 border border-forest/10 shadow-sm">
            <h3 className="text-lg font-bold text-forest-deep mb-6">We are seeking</h3>
            <div className="space-y-6">
              {v.seeking.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-forest-deep mb-1">{s.t}</h4>
                    <p className="text-[15px] text-forest/70 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="w-full mt-6 bg-white border border-forest/20 text-forest-deep rounded-lg py-3 text-[15px] font-bold hover:bg-forest/5 transition-colors inline-flex items-center justify-center gap-2">
              See Collaboration Opportunities <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

function GelsRole() {
  return (
    <section className="bg-forest-deep text-white py-12 mt-12 mx-auto max-w-7xl px-6 rounded-2xl w-full mb-12 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center" style={{backgroundImage: `url(${cambridgeImg})`}} />
      <div className="absolute inset-0 bg-forest-deep/90" />
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">GEL's Role in Kavach AI's Journey</h2>
          <p className="text-[15px] text-white/80 leading-relaxed">
            Through the Global Ventures Programme, GEL supports Kavach AI with venture strategy, international positioning, expert mentoring and access to investors, researchers and strategic partners. Our objective is to help the venture scale globally through the UK and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Venture Strategy & Growth Support",
            "Investor Access & Fundraising Guidance",
            "UK Market Entry & International Pathways",
            "Mentorship from Industry & Academia",
            "Ecosystem & Partnership Development"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-3 w-3 text-gold" />
              </div>
              <span className="text-[15px] font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="bg-white border-t border-forest/10 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-forest-deep mb-1">Let's build a safer future—together.</h2>
            <p className="text-[15px] text-forest/70">
              If you are an investor, corporate, university or expert interested in collaborating with Kavach AI, we would love to connect.
            </p>
          </div>
        </div>
        <div className="flex gap-4 shrink-0">
          <Link to="/contact" className="bg-gold hover:bg-gold/90 text-forest-deep px-6 py-3 rounded-lg text-[15px] font-bold transition-colors inline-flex items-center gap-2">
            Request Introduction <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link to="/contact" className="bg-white border border-forest/20 text-forest-deep px-6 py-3 rounded-lg text-[15px] font-bold hover:bg-forest/5 transition-colors inline-flex items-center gap-2">
            Request Venture Brief <Download className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}