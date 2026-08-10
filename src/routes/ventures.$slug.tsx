import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { buildMeta } from "@/lib/seo";
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
  Cpu,
  Building2,
  Network,
  Bot,
  Award,
  Heart,
  BookOpen,
  Accessibility
} from 'lucide-react'
import { useState } from 'react'
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
  accentColor?: string
  problem: string
  solution: string
  matters: string
  impact: string
  highlights: string[]
  progress: string[]
  metrics: { l: string; v: string; subtitle?: string; icon?: React.ReactNode }[]
  team: { name: string; role: string; bio: string; img?: string }[]
  seeking: { icon: React.ReactNode; t: string; d: string }[]
  roadmap: { period: string; icon: React.ReactNode; items: string[]; phase?: string }[]
  heroImg?: string
  awards?: string[]
}

export const VENTURES: Record<string, Venture> = {
  'kavach-ai': {
    slug: 'kavach-ai', name: 'KAVACH AI', track: 'Venture Track',
    tagline: 'AI-Powered Predictive Surveillance.',
    intro: 'KavachAI transforms passive CCTV into proactive security intelligence with real-time threat detection, behavior analysis, and crowd management.',
    sector: 'Enterprise AI & Security',
    stage: 'Growth · Funded',
    origin: 'India',
    markets: 'Pharma Vaults, High-Value Logistics, Critical Infrastructure, Retail',
    logo: <Bot className="h-12 w-12 text-white" />,
    heroImg: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2060&auto=format&fit=crop',
    color: 'from-[#0A2733] via-[#0A1C24] to-[#0A1F11]',
    accentColor: 'cyan',
    awards: ['🦈 Shark Tank India Season 3 Featured & Funded'],
    problem: 'Current CCTV systems are recording-only — they capture footage but cannot detect, analyze, or prevent threats in real time. For industries like high-value logistics and critical infrastructure, human error, unverified access, or SOP deviations can lead to massive regulatory fines, disaster, or loss of life.',
    solution: 'KavachAI offers a streamlined pipeline that turns raw video into real-time threat detection and predictive insights. It analyzes identity, movement, and distress cues to trigger preventive alerts before escalation, ensuring real-time process compliance and immediate intervention.',
    matters: 'Early AI-powered threat detection can mean the difference between prevention and tragedy. By selling prevention against immediate inventory loss alongside protection from massive regulatory fines, KavachAI provides a "Dual ROI" for enterprises.',
    impact: 'From retail storefronts to national transit infrastructure, KavachAI scales to protect any environment where people gather, preventing deliberate financial loss due to asset diversion and catastrophic operational abnormalities.',
    highlights: [
      'Predictive Threat Detection — Detects suspicious movements, aggression, loitering, or unusual activity patterns using advanced computer vision models.',
      'Crowd & Behavior Analysis — Calculates crowd density, analyzes behavior, and detects congestion hotspots to prevent stampedes.',
      'Real-time Alerts — Automated real-time notifications sent to security teams with live monitoring dashboards and heatmaps.',
      'SOP Compliance — Focuses on environments where minor SOP deviations have catastrophic consequences, ensuring automated compliance.',
      'Semantic Video Search — Search through footage using natural language, descriptions, or photos.'
    ],
    progress: [
      'Appeared on Shark Tank India (Season 3) and secured a funding deal',
      'Continuous 24/7 threat analysis across deployed enterprise feeds',
      'Addressing rising global cargo theft and critical infrastructure vulnerabilities',
      'Deployed predictive models successfully over existing passive CCTV infrastructure'
    ],
    metrics: [
      { l: 'Core Tech', v: 'Predictive AI', icon: <Cpu className="h-5 w-5" /> },
      { l: 'Response Time', v: '< 1s', icon: <Zap className="h-5 w-5" /> },
      { l: 'Client ROI', v: 'Dual ROI', icon: <Briefcase className="h-5 w-5" /> },
      { l: 'Funding', v: 'Shark Tank', icon: <Target className="h-5 w-5" /> },
    ],
    team: [
      { name: 'Pratyusha Vemuri Venkata', role: 'Founder & CEO', bio: 'Extensive background in cybersecurity with prior product leadership roles at Microsoft, Cisco, Palo Alto Networks, Zscaler, and Akamai.', img: '/team/kavach-founder.jpg' },
      { name: 'Chegondi Abhiram', role: 'Director', bio: 'Guiding strategic operations and growth for KavachAI.' },
    ],
    seeking: [
      { icon: <Building2 className="h-5 w-5" />, t: 'Strategic Partnerships', d: 'Deployments in critical infrastructure, logistics, and pharma sectors.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Enterprise Pilots', d: 'Organizations seeking to upgrade their passive CCTV to proactive AI intelligence.' },
    ],
    roadmap: [
      { period: 'Current', phase: 'MVP & Pilots', icon: <Bot className="h-5 w-5" />, items: ['Deploying predictive models in retail and logistics', 'Validating dual ROI with early enterprise adopters'] },
      { period: 'Next 12 Months', phase: 'Expansion', icon: <Network className="h-5 w-5" />, items: ['Scaling to smart city and national transit deployments', 'Enhancing behavioral analysis for mass crowd management'] },
    ],
  },
  'carbon-sync': { slug: 'carbon-sync', name: 'CARBON SYNC', track: 'Venture Track', tagline: '', intro: '', sector: '', stage: '', origin: '', markets: '', logo: <Leaf />, color: '', problem: '', solution: '', matters: '', impact: '', highlights: [], progress: [], metrics: [], team: [], seeking: [], roadmap: [] },
  'project-tacto': {
    slug: 'project-tacto',
    name: 'PROJECT TACTO',
    track: 'Venture Track',
    tagline: 'Code you can feel — making computational thinking accessible for every learner.',
    intro: 'Project TACTO replaces screens with physical, highly tactile blocks. It is an open-source hardware system designed to make computational thinking and coding education accessible to visually impaired learners by utilizing hands-on, tactile interaction and real-time audio feedback.',
    sector: 'EdTech · Accessible Education · Open-Source Hardware',
    stage: 'Seed · Award Winning',
    origin: 'India',
    markets: 'Global',
    logo: <img src="/tacto/logo.png" alt="Project TACTO Logo" className="w-12 h-12 object-contain drop-shadow-md" loading="lazy" />,
    heroImg: '/tacto/hero.png',
    color: 'from-[#1A0B2E] via-[#14102A] to-[#081A14]',
    accentColor: 'violet',
    awards: ['🏆 Top Prize — Global EDVentures Startup Competition', '☁️ AWS Championship Prize — Technical Rigor & Innovation'],
    problem: 'Visually impaired students face significant barriers in STEM education due to the heavy reliance on screen literacy and the lack of accessible tools for learning computational thinking and programming concepts.',
    solution: 'An open-source hardware system that replaces screen-based interfaces with physical, modular blocks. Users snap these blocks together to create code, complemented by real-time audio feedback, allowing them to "hear" and "feel" their code without relying on screens.',
    matters: 'It removes the need for screen literacy, addressing the barriers visually impaired students face in STEM. Designed to be affordable, scalable, and effective even in low-infrastructure settings, it contributes directly to UN Sustainable Development Goal 4 — Inclusive and Equitable Quality Education.',
    impact: 'Winner of the top prize and the AWS Championship Prize at the Global EDVentures Startup Competition. TACTO aims to democratize coding education and empower visually impaired learners globally.',
    highlights: [
      'Tactile Learning — Replaces screen-based interfaces with physical, modular blocks',
      'Audio Feedback — Utilizes real-time audio feedback so students "hear" their code',
      'Inclusive Design — Removes the need for screen literacy to learn STEM concepts',
      'Open Source — Hardware is open-source, promoting widespread access and community contribution',
      'Award Winning — Top prize and AWS Championship at Global EDVentures Startup Competition',
    ],
    progress: [
      'Developed by a team of student innovators from Galgotias University, India',
      'Won the top prize at the Global EDVentures Startup Competition',
      'Won the AWS Championship Prize for technical rigor and innovation',
      'Developed functional prototypes of the physical coding blocks and audio feedback system',
    ],
    metrics: [
      { l: 'Competition Status', v: '🏆 Winner', icon: <Award className="h-5 w-5" /> },
      { l: 'Hardware Type', v: 'Open Source', icon: <BookOpen className="h-5 w-5" /> },
      { l: 'Learning Focus', v: 'Accessible', icon: <Accessibility className="h-5 w-5" /> },
      { l: 'UN SDG Goal', v: 'SDG 4', icon: <Globe2 className="h-5 w-5" /> },
    ],
    team: [
      { name: 'Gaurang Pant', role: 'Co-Founder', bio: 'Innovator and developer focused on accessible education technologies and open-source hardware systems.' },
      { name: 'Shristi Mandoliya', role: 'Co-Founder', bio: 'Passionate about creating inclusive learning experiences and breaking down barriers in STEM for every learner.' },
      { name: 'Kavya Singh', role: 'Co-Founder', bio: 'Dedicated to leveraging technology for social impact and equitable quality education across the globe.' },
    ],
    seeking: [
      { icon: <Users className="h-5 w-5" />, t: 'Pilot Partners', d: 'Schools, educational institutions, and NGOs working with visually impaired students to pilot and refine the tactile learning system.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Strategic Partners', d: 'Organizations and tech companies interested in supporting inclusive education and scaling open-source hardware initiatives.' },
      { icon: <Lightbulb className="h-5 w-5" />, t: 'Mentors & Experts', d: 'Experts in hardware manufacturing, accessible design, and international education distribution.' },
      { icon: <Globe2 className="h-5 w-5" />, t: 'Ecosystem Collaboration', d: 'Foundations and public sector bodies to co-develop solutions and promote accessible STEM education globally.' },
    ],
    roadmap: [
      { period: 'Phase 1 — Build', phase: 'NOW', icon: <Rocket className="h-5 w-5" />, items: ['Refine hardware prototypes based on feedback', 'Conduct initial pilot testing with students'] },
      { period: 'Phase 2 — Refine', phase: 'NEXT', icon: <TrendingUp className="h-5 w-5" />, items: ['Incorporate pilot feedback into hardware iterations', 'Optimize audio and tactile responsiveness'] },
      { period: 'Phase 3 — Scale', phase: 'SOON', icon: <Globe className="h-5 w-5" />, items: ['Scale production of open-source kits globally', 'Partner with educational NGOs for distribution'] },
      { period: 'Phase 4 — Impact', phase: 'FUTURE', icon: <Target className="h-5 w-5" />, items: ['Global distribution to visually impaired learners', 'Expand curriculum integration across institutions'] },
    ],
  },

  'carbonsynq': {
    slug: 'carbonsynq', name: 'CARBONSYNQ EARTH', track: 'Venture Track',
    tagline: 'Intelligence for a Greener Future',
    intro: 'AI-driven sustainability analytics and carbon accounting platform for the modern enterprise. Transforming ESG compliance into strategic value creation with unparalleled precision.',
    sector: 'Climate Tech & Enterprise SaaS',
    stage: 'Growth · Funded',
    origin: 'India',
    markets: 'Global',
    logo: <img src="https://www.carbonsynqearth.com/unnamed.webp" alt="CarbonSynq" className="w-12 h-12 object-contain drop-shadow-md" loading="lazy" />,
    heroImg: 'https://www.carbonsynqearth.com/hero_forest.webp',
    color: 'from-[#021816] via-[#042A27] to-[#0A4742]',
    accentColor: 'teal',
    problem: 'Organizations face growing pressure to measure and report their carbon footprint accurately, but existing processes are manual, fragmented, and hard to verify. This makes carbon accounting slow, error-prone, and difficult to trust — creating barriers to credible climate action and regulatory compliance.',
    solution: 'CarbonSynq lets organizations automate emissions measurement, verify data with greater confidence, and connect directly to a transparent carbon marketplace. We convert raw operational data into certified Scope 1, 2, and 3 emissions using AI-powered analytics and satellite-backed MRV.',
    matters: 'Accurate, verifiable carbon accounting is foundational to credible climate action and trust in carbon markets. By streamlining compliance with global mandates like CSRD and ISSB, we help organizations reduce risk and turn sustainability into a measurable competitive advantage.',
    impact: 'Driving credible climate action through data. CarbonSynq empowers businesses to transition from mere measurement to meaningful action, deploying targeted carbon reduction initiatives to reach net-zero goals faster.',
    highlights: [
      'Automated Scope 1, 2, and 3 emissions tracking',
      'AI-powered data validation and satellite-backed MRV',
      'Seamless compliance with CSRD, ISSB, and other global frameworks',
      'Direct access to a transparent, verified carbon marketplace',
      'Strategic insights for accelerated net-zero journeys',
    ],
    progress: [
      'Developed core AI analytics and carbon accounting platform',
      'Established strategic partnerships with leading ESG frameworks',
      'Initiated pilot programs with early enterprise adopters',
      'Secured growth funding to expand operations and market reach',
    ],
    metrics: [
      { l: 'Team Size', v: '10', subtitle: 'Internal team records' },
      { l: 'Funding Raised', v: 'Rs. 20 lakh', subtitle: 'Since June 2026' },
      { l: 'Valuation', v: 'Rs. 5 crore', subtitle: 'As of funding round' },
    ],
    team: [
      { 
        name: 'Pushkar Singh', 
        role: 'Founder and CEO', 
        bio: 'Pushkar Singh is the Founder and CEO of CarbonSynq, a climate-tech venture combining AI-powered carbon accounting, carbon markets, and MRV technology. He is a B.Tech Electrical Engineering student at Galgotias University, leading the venture through the Galgotias accelerator programme.', 
        img: '/team/pushkar.jpeg' 
      },
      { 
        name: 'Mr. Rachit Mathur', 
        role: 'Mentor', 
        bio: 'Our team combines technical depth in AI and climate data with hands-on experience building and scaling CarbonSynq through a competitive accelerator programme.', 
        img: '' 
      },
    ],
    seeking: [
      { icon: <Users className="h-5 w-5" />, t: 'Pilot Partners', d: 'Enterprises seeking to automate their carbon accounting and streamline ESG compliance.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Strategic Partners', d: 'Organizations in the climate tech and sustainability space for joint initiatives.' },
      { icon: <Globe2 className="h-5 w-5" />, t: 'Ecosystem Collaboration', d: 'Working with regulatory bodies to standardize carbon measurement.' },
    ],
    roadmap: [
      { period: 'Phase 1', icon: <Rocket className="h-5 w-5" />, items: ['Platform launch and early enterprise pilots'] },
      { period: 'Phase 2', icon: <TrendingUp className="h-5 w-5" />, items: ['Scale automation and integrate satellite MRV'] },
      { period: 'Phase 3', icon: <Globe className="h-5 w-5" />, items: ['Global expansion and marketplace integration'] },
    ],
  },

  'saivyy': {
    slug: 'saivyy', name: 'SAIVYY TECHNOLOGIES', track: 'Venture Track',
    tagline: 'Empowering businesses with AI-driven automation, analytics and intelligent digital transformation.',
    intro: 'Saivyy Technologies Pvt. Ltd. develops enterprise AI, machine learning, big data analytics and intelligent automation solutions that help organisations turn complex data into actionable insight and automate critical business processes — improving efficiency, accelerating decisions and driving sustainable digital transformation.',
    sector: 'Artificial Intelligence, Generative AI, Big Data Analytics & Intelligent Automation',
    stage: 'Bootstrapped, Profitable & Growing (Recently Founded)',
    origin: 'India',
    markets: 'India, UK, North America, Europe, Middle East',
    logo: <Cpu className="h-12 w-12 text-white" />, color: 'from-slate-900 via-blue-950 to-slate-900', heroImg: '/saivyy/saivvyMain.jpeg',
    problem: 'Organisations generate vast amounts of data but struggle to convert it into actionable business intelligence. Legacy systems, manual processes and fragmented digital infrastructure lead to inefficiency, delayed decisions, higher costs and limited scalability — while technical complexity, integration barriers and scarce expertise slow AI adoption.',
    solution: 'Saivyy delivers end-to-end AI-driven digital transformation combining Artificial Intelligence, Machine Learning, Big Data Analytics, Intelligent Automation and Cloud. Scalable platforms help organisations automate workflows, extract meaningful insight, optimise operations and accelerate innovation through secure, enterprise-ready technology.',
    matters: 'Digital transformation is essential to remain competitive in a data-driven economy. Intelligent automation and data-driven decision-making improve productivity, reduce operational costs and enable organisations to focus on innovation and growth.',
    impact: 'Saivyy has delivered AI, analytics and digital transformation solutions across multiple industry domains. Our ambition is to become a globally recognised AI and intelligent automation partner for enterprises across the UK, Europe, North America and the Middle East.',
    highlights: [
      'AI & Intelligent Automation expertise — enterprise AI, ML, Generative AI and Big Data Analytics',
      'Scalable enterprise technology — secure, cloud-enabled platforms that integrate with existing systems',
      'Cross-industry transformation — Healthcare, Education, BFSI, Manufacturing, Retail, Logistics, Government & Smart Cities',
      'Innovation-driven portfolio — custom software, AI consulting, cloud, data engineering and automation services',
      'Global growth — expanding across India, the UK, Europe, North America and the Middle East',
    ],
    progress: [
      'Incorporated as an AI, Big Data and Digital Transformation company (CIN U62010UP2025PTC233625, Recently)',
      'Commercialised AI, Data Analytics, Cloud and Intelligent Automation service offerings for enterprise clients',
      'Built a team of 12+ professionals delivering solutions to 50+ clients',
      'Established office at Urbtech Trade Centre, Sector 132',
      '20+ AI and digital transformation solutions in the current portfolio',
    ],
    metrics: [
      { l: 'Enterprise Clients Served', v: '50+', subtitle: 'Pilot Stage' },
      { l: 'Team Size', v: '12+' },
      { l: 'Industries Served', v: '4' },
      { l: 'Solutions Offered', v: '20+' },
      { l: 'Technology Domains', v: '6+' },
    ],
    team: [
      { name: 'Keshav Madan', role: 'Founder & CEO', bio: 'Expert in enterprise technology, Artificial Intelligence and digital transformation. Leads product innovation, strategic partnerships and business growth, driving AI-powered solutions that help organisations modernise operations and make data-driven decisions.', img: '/saivyy/KESHAV.jpeg' },
      { name: 'Manas Saxena', role: 'Tech Lead / CTO', bio: 'Leads technology strategy, product engineering and innovation — overseeing AI-driven, cloud-enabled and data-centric enterprise solutions that accelerate digital transformation and operational excellence.', img: '/saivyy/MAN.jpg' },
    ],
    seeking: [
      { icon: <Users className="h-5 w-5" />, t: 'Pilot Partners', d: 'Manufacturing, education, software and logistics organisations in India and the UK to validate and deploy AI, analytics and automation solutions. Typical pilots run 8–16 weeks.' },
      { icon: <Handshake className="h-5 w-5" />, t: 'Strategic Partners', d: 'Companies seeking advanced software or hardware integration, technology co-development, or joint innovation on AI-driven solutions with a strong technical or commercial fit.' },
      { icon: <Lightbulb className="h-5 w-5" />, t: 'Mentors & Experts', d: 'Mentors in enterprise AI commercialisation, international market expansion, product strategy, cybersecurity, regulatory compliance and B2B enterprise sales.' },
      { icon: <Globe2 className="h-5 w-5" />, t: 'Ecosystem Collaboration', d: 'Industry associations, research organisations, innovation hubs, incubators, universities and public sector bodies to co-develop AI solutions and promote responsible digital innovation.' },
    ],
    roadmap: [
      { period: 'Phase 1', icon: <Rocket className="h-5 w-5" />, items: ['Enter and establish presence in the UK market', 'Close first UK pilots and implementation projects'] },
      { period: 'Phase 2', icon: <TrendingUp className="h-5 w-5" />, items: ['Scale UK operations through rapid delivery', 'Build case studies and strengthen delivery bandwidth'] },
      { period: 'Phase 3', icon: <Globe className="h-5 w-5" />, items: ['Deepen UK market share', 'Open early conversations across target European markets'] },
      { period: '2028 onward', icon: <Target className="h-5 w-5" />, items: ['Go-to AI implementation partner across UK & Europe', 'Expand delivery team and technical partnerships'] },
    ],
  },
}

export const Route = createFileRoute('/ventures/$slug')({
  loader: ({ params }) => {
    if (!VENTURES[params.slug]) throw notFound()
    return { slug: params.slug }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [], links: [] };
    const v = VENTURES[loaderData.slug];
    if (!v) return { meta: [], links: [] };
    return buildMeta(
      {
        title: `${v.name} | Global Education Lab`,
        description: v.intro || v.problem || "Explore our venture.",
        image: v.heroImg,
      },
      undefined,
      `ventures/${loaderData.slug}`
    );
  },
  component: VenturePage,
})

function VenturePage() {
  const { slug } = Route.useLoaderData()
  const v = VENTURES[slug]
  const [activeTab, setActiveTab] = useState("Overview")
  const hasFullData = v.intro !== ''

  if (!hasFullData) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] font-sans flex flex-col items-center justify-center text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-600">{v.logo}</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">{v.name}</h1>
        <p className="text-slate-500 text-[15px] max-w-sm mb-8 leading-relaxed">Full venture profile coming soon.</p>
        <Link to="/global-ventures" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-[14px] hover:bg-slate-800 transition-colors shadow-md">
          <ArrowLeft className="h-4 w-4" /> Back to Global Ventures
        </Link>
      </div>
    )
  }

  const tabs = ["Overview", "The Opportunity", "Progress", "Team", "Roadmap", "Collaborate", "GEL's Role"]

  const scrollTo = (tab: string) => {
    setActiveTab(tab)
    const id = tab.toLowerCase().replace(/[^a-z0-9]/g, '-')
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 170
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans">
      <Hero v={v} />
      <MetadataBar v={v} />
      {/* Sticky Nav */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollTo(tab)}
                className={`shrink-0 px-4 py-4 text-[12.5px] font-semibold border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-violet-600 text-violet-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      <MainContent v={v} />
      <GelsRole v={v} />
      <BottomCTA v={v} />
      <Footer />
    </div>
  )
}


function getThemeStyles(slug: string) {
  if (slug === 'project-tacto') {
    return {
      text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100/60', textAccent: 'text-violet-400',
      gradient: 'from-violet-600 via-indigo-500 to-teal-400', bgHover: 'hover:bg-violet-500', bgSolid: 'bg-violet-600',
      shadow: 'hover:shadow-violet-100/60', ring: 'ring-violet-100', iconBorder: 'border-violet-500/20',
      iconBg: 'bg-violet-500/15', badgeBg: 'bg-violet-500/10', badgeBorder: 'border-violet-500/20', badgeText: 'text-violet-300',
      darkBg: 'bg-[#100820]', orb1: 'bg-violet-600/12', orb2: 'bg-teal-500/10', metricsIcon: 'text-violet-400/60',
      avatar: 'from-violet-500 to-indigo-600',
    }
  } else if (slug === 'carbonsynq') {
    return {
      text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100/60', textAccent: 'text-teal-500',
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400', bgHover: 'hover:bg-teal-500', bgSolid: 'bg-teal-600',
      shadow: 'hover:shadow-teal-100/60', ring: 'ring-teal-100', iconBorder: 'border-teal-500/20',
      iconBg: 'bg-teal-500/15', badgeBg: 'bg-teal-500/10', badgeBorder: 'border-teal-500/20', badgeText: 'text-teal-600',
      darkBg: 'bg-[#021816]', orb1: 'bg-emerald-500/12', orb2: 'bg-cyan-500/15', metricsIcon: 'text-teal-500/80',
      avatar: 'from-teal-500 to-cyan-600',
    }
  } else {
    return {
      text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100/60', textAccent: 'text-blue-400',
      gradient: 'from-blue-600 via-sky-500 to-cyan-400', bgHover: 'hover:bg-slate-800', bgSolid: 'bg-slate-900',
      shadow: 'hover:shadow-blue-100/60', ring: 'ring-slate-200', iconBorder: 'border-blue-500/20',
      iconBg: 'bg-blue-500/15', badgeBg: 'bg-blue-500/10', badgeBorder: 'border-blue-500/20', badgeText: 'text-blue-300',
      darkBg: 'bg-[#080E1C]', orb1: 'bg-blue-600/10', orb2: 'bg-indigo-500/10', metricsIcon: 'text-blue-400/60',
      avatar: 'from-slate-600 to-slate-800',
    }
  }
}

function Hero({ v }: { v: Venture }) {
  const brandColor = v.color || 'from-slate-900 via-blue-950 to-slate-900'
  const theme = getThemeStyles(v.slug)
  const isTacto = v.slug === 'project-tacto'
  return (
    <section className={`text-white relative overflow-hidden bg-gradient-to-br ${brandColor} min-h-[580px] md:min-h-[660px] flex items-center`}>
      {/* Hero image overlay */}
      {v.heroImg && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${v.heroImg})`, opacity: isTacto ? 0.18 : v.slug === 'carbonsynq' ? 0.15 : 0.22 }}
        />
      )}
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
      {/* Glow orbs - themed for Tacto */}
      <>
        <div className={`absolute top-0 left-1/4 sm:left-1/3 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] blur-[150px] rounded-full pointer-events-none ${isTacto ? 'bg-violet-600/20' : v.slug === 'carbonsynq' ? 'bg-teal-600/20' : 'bg-blue-600/15'}`} />
        <div className={`absolute bottom-0 right-0 sm:right-1/4 w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] blur-[120px] rounded-full pointer-events-none ${isTacto ? 'bg-teal-500/15' : v.slug === 'carbonsynq' ? 'bg-cyan-500/15' : 'bg-indigo-500/10'}`} />
        {isTacto && <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />}
      </>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 pt-14 pb-32 z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-14">
          <Link to="/global-ventures" className="hover:text-white/90 transition-colors flex items-center gap-1.5">
            <ArrowLeft className="h-3 w-3" /> Global Ventures
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white/90">{v.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: Text content */}
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Track badge */}
            <div className="flex items-center gap-3 mb-7">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10.5px] font-black uppercase tracking-[0.2em] border ${
                isTacto ? 'bg-violet-500/15 border-violet-400/25 text-violet-300' : v.slug === 'carbonsynq' ? 'bg-teal-500/15 border-teal-400/25 text-teal-300' : 'bg-blue-500/15 border-blue-400/25 text-blue-300'
              }`}>
                {v.track}
              </span>
              {v.awards && v.awards.length > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/15 border border-amber-400/25 rounded-full text-[10.5px] font-black uppercase tracking-[0.18em] text-amber-300">
                  <Award className="h-3 w-3" /> Award Winning
                </span>
              )}
            </div>

            {/* Venture name */}
            <h1 className="font-extrabold leading-[0.88] tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/50 text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] block">
                {v.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-light text-white/90 leading-[1.4] max-w-2xl mb-5">
              {v.tagline}
            </p>

            {/* Intro */}
            <p className="text-[14.5px] text-white/75 leading-[1.9] max-w-xl mb-10">
              {v.intro}
            </p>

            {/* Awards strip */}
            {v.awards && v.awards.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-2.5 mb-10">
                {v.awards.map((award, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.08] border border-white/20 rounded-xl text-[12.5px] text-white/80 backdrop-blur-sm font-medium">
                    {award}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact" search={{ source: v.name }}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl text-[14px] font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200"
              >
                Request Introduction <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact" search={{ source: v.name }}
                className="inline-flex items-center gap-2 bg-white/[0.07] text-white border border-white/15 px-7 py-3.5 rounded-xl text-[14px] font-semibold hover:bg-white/[0.12] transition-all backdrop-blur-sm"
              >
                <Download className="h-4 w-4" /> Venture Brief
              </Link>
            </div>
          </div>

          {/* Right: Logo card */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end">
            <div className="relative">
              <div className={`absolute inset-0 rounded-[2.5rem] blur-[60px] scale-110 pointer-events-none ${isTacto ? 'bg-violet-500/20' : v.slug === 'carbonsynq' ? 'bg-teal-500/20' : 'bg-blue-500/15'}`} />
              <div className="relative bg-white/[0.06] backdrop-blur-2xl border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col items-center gap-5 shadow-2xl min-w-[230px]">
                {/* Logo icon container */}
                <div className={`w-24 h-24 rounded-3xl border flex items-center justify-center shadow-inner shrink-0 ${
                  isTacto ? 'bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border-violet-400/20' : v.slug === 'carbonsynq' ? 'bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border-teal-400/20' : 'bg-gradient-to-br from-white/20 to-white/5 border-white/20'
                }`}>
                  <div className="scale-[1.1]">{v.logo}</div>
                </div>
                {/* Name & origin */}
                <div className="text-center">
                  <p className="text-[9.5px] font-black uppercase tracking-[0.28em] text-white/50 mb-1.5">Venture</p>
                  <p className="text-[16px] font-bold text-white leading-snug">{v.name}</p>
                </div>
                <div className="w-full h-px bg-white/[0.08]" />
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex items-center gap-2 text-white/35 text-[12px]">
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    <span>{v.origin}</span>
                  </div>
                  {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-3 py-1 bg-violet-500/15 border border-violet-400/20 rounded-full text-[10.5px] font-bold text-violet-300">
                        Open Source Hardware
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetadataBar({ v }: { v: Venture }) {
  const theme = getThemeStyles(v.slug)
  const isTacto = v.slug === 'project-tacto'
  const items = [
    { icon: <Cpu className="h-4 w-4" />, label: "Sector", value: v.sector },
    { icon: <TrendingUp className="h-4 w-4" />, label: "Stage", value: v.stage },
    { icon: <Globe className="h-4 w-4" />, label: "Origin", value: v.origin },
    { icon: <Target className="h-4 w-4" />, label: "Target Markets", value: v.markets },
  ]
  return (
    <div className="relative z-20 -mt-11 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.09)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 px-6 py-6 lg:px-8 lg:py-7">
              <div className={`p-2 rounded-lg border shrink-0 mt-0.5 ${
                `${theme.text} ${theme.bg} ${theme.border}`
              }`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</p>
                <p className="text-[13px] font-semibold text-slate-800 leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ label, id, accent }: { label: string; id?: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8" id={id}>
      <span className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500 shrink-0">{label}</span>
      <div className={`flex-1 h-px ${accent ? 'bg-gradient-to-r from-violet-200 to-transparent' : 'bg-slate-200'}`} />
    </div>
  )
}

function MainContent({ v }: { v: Venture }) {
  const theme = getThemeStyles(v.slug)
  const isTacto = v.slug === 'project-tacto'
  const opportunityCards = [
    {
      icon: <Target className="h-5 w-5" />,
      bg: "bg-red-50", border: "border-red-100/80", iconColor: "text-red-500",
      hoverShadow: "hover:shadow-red-100/60",
      title: "The Problem",
      desc: v.problem
    },
    {
      icon: <Brain className="h-5 w-5" />,
      bg: theme.bg,
      border: theme.border,
      iconColor: theme.text,
      hoverShadow: theme.shadow,
      title: "Our Solution",
      desc: v.solution
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      bg: "bg-teal-50", border: "border-teal-100/80", iconColor: "text-teal-600",
      hoverShadow: "hover:shadow-teal-100/60",
      title: "Why It Matters",
      desc: v.matters
    },
    {
      icon: <Shield className="h-5 w-5" />,
      bg: "bg-amber-50", border: "border-amber-100/80", iconColor: "text-amber-600",
      hoverShadow: "hover:shadow-amber-100/60",
      title: "Our Impact",
      desc: v.impact
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-16 w-full">
      <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_348px] gap-10 xl:gap-12 items-start">

        {/* ─── LEFT COLUMN ─── */}
        <div className="space-y-16 min-w-0">

          {/* ── Overview / The Opportunity ── */}
          <div id="overview" className="scroll-mt-52">
            <SectionHeader label="The Opportunity" id="the-opportunity" accent={v.slug === 'project-tacto' || v.slug === 'carbonsynq'} />
            <div className="grid sm:grid-cols-2 gap-4">
              {opportunityCards.map((c, i) => (
                <div
                  key={i}
                  className={`group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl ${c.hoverShadow} hover:-translate-y-1 transition-all duration-300 p-7 lg:p-8 flex flex-col`}
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} ${c.iconColor} flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    {c.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-3 leading-snug tracking-tight">{c.title}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed flex-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Progress to Date ── */}
          <div id="progress" className="scroll-mt-52">
            <SectionHeader label="Progress to Date" accent={v.slug === 'project-tacto' || v.slug === 'carbonsynq'} />
            <div className={`rounded-2xl overflow-hidden relative shadow-xl ${theme.darkBg}`}>
              {/* Glow orbs */}
              <>
                  <div className={`absolute top-0 right-0 w-72 h-72 blur-[100px] rounded-full pointer-events-none ${theme.orb1}`} />
                  <div className={`absolute bottom-0 left-0 w-56 h-56 blur-[80px] rounded-full pointer-events-none ${theme.orb2}`} />
                </>
              <div className="relative z-10 p-8 sm:p-10 lg:p-12">
                {/* Progress items */}
                <div className="space-y-5 mb-10">
                  {v.progress.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        `${theme.badgeBg} ${theme.badgeBorder}`
                      }`}>
                        <CheckCircle2 className={`h-3 w-3 ${theme.textAccent}`} />
                      </div>
                      <span className="text-[14px] text-slate-300/85 leading-[1.8]">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics grid */}
                <div className="border-t border-white/[0.06] pt-7">
                  <p className="text-[9.5px] font-black uppercase tracking-[0.25em] text-slate-400 mb-5">Key Metrics</p>
                  <div className={`grid gap-4 ${v.metrics.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'}`}>
                    {v.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 py-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.065] transition-colors group cursor-default"
                      >
                        {m.icon && (
                          <div className={`flex justify-center mb-3 ${theme.metricsIcon} group-hover:scale-110 transition-transform`}>
                            {m.icon}
                          </div>
                        )}
                        <div className={`font-black text-white tracking-tight leading-none mb-2 ${m.v.length > 6 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>
                          {m.v}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">{m.l}</div>
                        {m.subtitle && <div className="text-[10px] text-slate-500 mt-1">{m.subtitle}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Founding Team ── */}
          <div id="team" className="scroll-mt-52">
            <SectionHeader label="Founding Team" accent={v.slug === 'project-tacto' || v.slug === 'carbonsynq'} />
            <div className={`grid gap-6 ${v.team.length === 3 ? 'sm:grid-cols-3' : v.team.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 xl:grid-cols-3'}`}>
              {v.team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  {/* Card header with portrait */}
                  <div className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 px-6 pt-7 pb-6 flex flex-col items-center text-center border-b border-slate-100">
                    <div className={`w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-lg ring-1 mb-4 ${theme.ring}`}>
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center text-white text-2xl font-black ${`bg-gradient-to-br ${theme.avatar}`}`}>
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-snug">{member.name}</h4>
                    <p className={`text-[11px] font-black mt-1 uppercase tracking-[0.15em] ${theme.text}`}>{member.role}</p>
                  </div>
                  {/* Bio */}
                  <div className="px-7 py-6">
                    <p className="text-[13.5px] text-slate-600 leading-relaxed text-center">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] text-slate-500 italic mt-5 text-center leading-relaxed">
              {v.slug === 'project-tacto' ? 'Student innovators from Galgotias University, India — building technology that breaks down barriers in STEM education.' : v.slug === 'carbonsynq' ? 'Driving climate tech innovation and AI sustainability analytics.' : 'Supported by advisors and domain experts across AI, enterprise technology and international markets.'}
            </p>
          </div>

          {/* ── Roadmap ── */}
          <div id="roadmap" className="scroll-mt-52">
            <SectionHeader label="Roadmap" accent={v.slug === 'project-tacto' || v.slug === 'carbonsynq'} />
            <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm`}>
              {/* Top accent bar for Tacto */}
              {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (
                <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-teal-400" />
              )}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="relative">
                  {/* Connector line - only on wider screens for 4-column layout */}
                  {v.roadmap.length === 4 && (
                    <div className="hidden md:block absolute top-[21px] left-[21px] right-[21px] h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 pointer-events-none" />
                  )}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 ${v.roadmap.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
                    {v.roadmap.map((stage, i) => (
                      <div key={i} className="flex flex-col items-start">
                        {/* Icon + step number */}
                        <div className="relative z-10 flex items-center gap-3 mb-4">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 border-2 border-white ${
                            v.slug === 'project-tacto' ? (i === 0 ? 'bg-violet-600' : i === 1 ? 'bg-indigo-600' : i === 2 ? 'bg-blue-600' : 'bg-teal-600') : v.slug === 'carbonsynq' ? (i === 0 ? 'bg-emerald-600' : i === 1 ? 'bg-teal-600' : i === 2 ? 'bg-cyan-600' : 'bg-teal-700') : 'bg-slate-900'
                          }`}>
                            {stage.icon}
                          </div>
                          {stage.phase && (
                            <span className={`text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border hidden md:block ${
                              i === 0
                                ? 'bg-violet-50 border-violet-100 text-violet-600'
                                : 'bg-slate-50 border-slate-200 text-slate-500'
                            }`}>
                              {stage.phase}
                            </span>
                          )}
                        </div>
                        {/* Phase label */}
                        <h4 className="text-[14px] font-bold text-slate-800 mb-3 leading-tight">{stage.period}</h4>
                        {/* Items */}
                        <ul className="space-y-2">
                          {stage.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-[1.7]">
                              <span className={`mt-[8px] w-1.5 h-1.5 rounded-full shrink-0 ${(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && i === 0 ? (v.slug === 'project-tacto' ? 'bg-violet-400' : 'bg-teal-400') : 'bg-slate-300'}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <div className="w-full mt-2 lg:mt-0 lg:sticky lg:top-[172px] flex flex-col gap-6 lg:gap-8">

          {/* Quick Actions CTA */}
          <div className={`rounded-2xl p-8 lg:p-9 text-white relative overflow-hidden shadow-2xl ${v.slug === 'project-tacto' ? 'bg-[#18082E]' : v.slug === 'carbonsynq' ? 'bg-[#042A27]' : 'bg-slate-900'}`}>
            {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') ? (
              <>
                <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] rounded-full pointer-events-none ${v.slug === 'project-tacto' ? 'bg-violet-500/15' : 'bg-teal-500/15'}`} />
                <div className={`absolute bottom-0 left-0 w-36 h-36 blur-[60px] rounded-full pointer-events-none ${v.slug === 'project-tacto' ? 'bg-teal-500/10' : 'bg-cyan-500/15'}`} />
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500/15 blur-[70px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/[0.12] blur-[60px] rounded-full pointer-events-none" />
              </>
            )}
            {/* Top accent line */}
            {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.gradient}`} />}
            <div className="relative z-10">
              <h3 className="text-[18px] font-bold mb-3 leading-tight tracking-tight text-white" id="collaborate">
                Collaborate with {v.name.split(' ')[0]}
              </h3>
              <p className="text-[13.5px] text-white/80 mb-7 leading-[1.8]">
                Connect with the founding team to explore pilots, partnerships, and investment opportunities.
              </p>
              <div className="flex flex-col gap-3.5">
                <Link
                  to="/contact" search={{ source: v.name }}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-[13.5px] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 ${
                    v.slug === 'project-tacto'
                      ? 'bg-violet-500 hover:bg-violet-400 text-white'
                      : v.slug === 'carbonsynq'
                      ? 'bg-teal-500 hover:bg-teal-400 text-white'
                      : 'bg-white text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Request Introduction <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact" search={{ source: v.name }}
                  className="w-full flex items-center justify-center gap-2 bg-white/[0.07] text-white border border-white/[0.12] rounded-xl py-3.5 text-[13.5px] font-semibold hover:bg-white/[0.12] transition-all"
                >
                  <Download className="h-4 w-4" /> Venture Brief
                </Link>
              </div>
              <div className="flex items-start gap-2.5 mt-6 pt-5 border-t border-white/[0.1]">
                <Lock className="h-4 w-4 text-white/50 shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-white/50 leading-relaxed">
                  Introductions are subject to relevance and founder approval.
                </p>
              </div>
            </div>
          </div>

          {/* Venture Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden">
            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shadow-sm ${v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100 text-violet-500' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100 text-teal-600' : 'bg-amber-50 border-amber-100 text-amber-500'}`}>
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="text-[14.5px] font-bold text-slate-900">Venture Highlights</h3>
              </div>
              <div className="space-y-3.5">
                {v.highlights.map((h, i) => {
                  const [bold, rest] = h.split(' — ')
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100' : 'bg-amber-50 border-amber-100'}`}>
                        <CheckCircle2 className={`h-2.5 w-2.5 ${v.slug === 'project-tacto' ? 'text-violet-500' : v.slug === 'carbonsynq' ? 'text-teal-600' : 'text-amber-500'}`} />
                      </div>
                      <span className="text-[13px] text-slate-600 leading-[1.65]">
                        {rest ? <><strong className="font-semibold text-slate-800">{bold}</strong> — {rest}</> : h}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Collaboration Areas */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden" id="collaboration">
            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shadow-sm ${v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100 text-violet-500' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100 text-teal-600' : 'bg-blue-50 border-blue-100 text-blue-500'}`}>
                  <Handshake className="h-4 w-4" />
                </div>
                <h3 className="text-[14.5px] font-bold text-slate-900">Seeking</h3>
              </div>
              <div className="space-y-4">
                {v.seeking.map((s, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 shadow-sm ${v.slug === 'project-tacto' ? 'bg-violet-50/80 border-violet-100 text-violet-600' : v.slug === 'carbonsynq' ? 'bg-teal-50/80 border-teal-100 text-teal-600' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold text-slate-900 leading-tight mb-0.5">{s.t}</h4>
                      <p className="text-[12px] text-slate-500 leading-[1.65]">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact" search={{ source: v.name }}
                className={`w-full mt-6 border rounded-xl py-3.5 text-[13.5px] font-bold transition-colors inline-flex items-center justify-center gap-2 ${
                  v.slug === 'project-tacto'
                    ? 'bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100'
                    : v.slug === 'carbonsynq'
                    ? 'bg-teal-50 border-teal-100 text-teal-700 hover:bg-teal-100'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Explore All Opportunities <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function GelsRole({ v }: { v: Venture }) {
  const theme = getThemeStyles(v.slug)
  const isTacto = v.slug === 'project-tacto'
  const supports = [
    { icon: <TrendingUp className="h-4 w-4" />, title: "Venture Strategy", desc: "Growth planning and international positioning for scale." },
    { icon: <Users className="h-4 w-4" />, title: "Investor Access", desc: "Fundraising guidance and curated investor introductions." },
    { icon: <Globe className="h-4 w-4" />, title: "UK Market Entry", desc: "International market pathways, visas and connections." },
    { icon: <Lightbulb className="h-4 w-4" />, title: "Expert Mentorship", desc: "Guidance from industry and academic leaders." },
    { icon: <Network className="h-4 w-4" />, title: "Ecosystem Access", desc: "Partnerships with research bodies and innovation hubs." },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-10 w-full">
      <div
        id="gel-s-role"
        className={`rounded-3xl overflow-hidden relative shadow-2xl border border-white/[0.06] scroll-mt-52 ${theme.darkBg}`}
      >
        {/* Background gradients */}
        {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') ? (
          <>
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${v.slug === 'project-tacto' ? 'from-violet-700/15' : 'from-teal-700/15'} via-transparent to-transparent`} />
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] blur-[130px] rounded-full pointer-events-none ${v.slug === 'project-tacto' ? 'bg-violet-700/[0.08]' : 'bg-teal-700/[0.08]'}`} />
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none ${v.slug === 'project-tacto' ? 'bg-teal-500/[0.05]' : 'bg-cyan-500/[0.05]'}`} />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/[0.05] blur-[80px] rounded-full pointer-events-none" />
          </>
        )}
        {/* Top accent */}
        {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.gradient}`} />}

        <div className="relative z-10 p-8 sm:p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <div>
              <span className={`text-[9.5px] font-black uppercase tracking-[0.28em] mb-5 block ${theme.textAccent}`}>
                Strategic Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                GEL's Role in{' '}
                <span className={theme.textAccent}>
                  {v.name.split(' ')[0]}'s
                </span>{' '}
                Journey
              </h2>
              <p className="text-[15px] text-slate-300 leading-[1.88] mb-6">
                Through the Global Ventures Programme, GEL supports{' '}
                <strong className="text-white font-semibold">{v.name}</strong>{' '}
                with venture strategy, international positioning, expert mentoring and access to investors, researchers and strategic partners.
                {v.slug === 'project-tacto'
                  ? ' Our mission is to help TACTO reach every visually impaired learner across the globe.'
                  : v.slug === 'carbonsynq'
                  ? ' Our objective is to help CarbonSynq scale globally through the UK and beyond.'
                  : ' Our objective is to help the venture scale globally through the UK and beyond.'}
              </p>
              {(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (
                <div className="flex flex-wrap gap-2">
                  {(v.slug === 'project-tacto' 
                    ? ['SDG 4 Aligned', 'Open Source', 'Inclusive EdTech', 'Student Innovation']
                    : ['Scope 1, 2, 3', 'Net Zero', 'Climate Tech', 'ESG Compliance']
                  ).map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-[11px] font-bold ${theme.badgeBg} ${theme.badgeBorder} ${theme.badgeText}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Right: Support cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {supports.map((s, i) => (
                <div
                  key={i}
                  className={`bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.08] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${i === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-3 ${theme.iconBg} ${theme.iconBorder} ${theme.textAccent}`}>
                    {s.icon}
                  </div>
                  <h4 className="text-[13.5px] font-bold text-white mb-1.5">{s.title}</h4>
                  <p className="text-[12px] text-slate-400 leading-[1.72]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BottomCTA({ v }: { v: Venture }) {
  const theme = getThemeStyles(v.slug)
  const isTacto = v.slug === 'project-tacto'
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left max-w-2xl">
            <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${
              v.slug === 'saivyy' ? 'bg-slate-50 border-slate-200 text-slate-700' : `${theme.bg} ${theme.border} ${theme.text}`
            }`}>
              <Handshake className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-[1.75rem] font-bold text-slate-900 leading-tight mb-2.5">
                Interested in collaborating with {v.name}?
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {v.slug === 'project-tacto' ? 'If you are an investor, NGO, educational institution, or domain expert in accessible technology, we would love to connect and facilitate a meaningful introduction.' : v.slug === 'carbonsynq' ? 'If you are a corporate pilot partner, ESG expert, or climate investor, we would love to connect and facilitate a meaningful introduction.' : 'If you are an investor, corporate partner, university or domain expert, we would love to connect and facilitate a meaningful introduction.'}
              </p>
            </div>
          </div>
          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact" search={{ source: v.name }}
              className={`w-full sm:w-auto text-white px-8 py-4 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 inline-flex items-center justify-center gap-2 ${
                `${theme.bgSolid} ${theme.bgHover}`
              }`}
            >
              Request Introduction <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact" search={{ source: v.name }}
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-xl text-[14px] font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all inline-flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" /> Venture Brief
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
