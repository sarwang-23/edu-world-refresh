import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Star, Quote, Globe2, Cpu, Briefcase, Award, BarChart3, Users, Utensils, Landmark, Castle } from 'lucide-react'
import { useState } from 'react'
import { Footer } from './index'
import newCertificateImg from '../assets/new-certificate.png'
import speaker1Img from '../assets/speaker1.jpg'
import speaker2Img from '../assets/speaker2.jpg'
import speaker3Img from '../assets/speaker3.jpg'
import speaker4Img from '../assets/speaker4.jpg'
import speaker5Img from '../assets/speaker5.jpg'
import speaker6Img from '../assets/speaker6.jpg'
import speaker7Img from '../assets/speaker7.jpg'
import speaker8Img from '../assets/speaker8.jpg'
import speaker9Img from '../assets/speaker9.jpg'
import speaker10Img from '../assets/speaker10.jpg'
import alumni1Img from '../assets/alumni1.jpg'
import alumni2Img from '../assets/alumni2.jpg'
import alumni3Img from '../assets/alumni3.jpg'
import alumni4Img from '../assets/alumni4.jpg'
import alumni5Img from '../assets/alumni5.jpg'
import cohort1Img from '../assets/IMG_0719.jpg'
import cohort2Img from '../assets/IMG_4915.jpg'
import cohort3Img from '../assets/IMG_4929.jpg'
import cohort4Img from '../assets/IMG_5105.jpg'
import cohort5Img from '../assets/IMG_5138_2.jpg'
import cohort6Img from '../assets/IMG_5277.jpg'
import cohort7Img from '../assets/YusufH.jpg'
import cohort8Img from '../assets/STEM1.jpg'
import cohort9Img from '../assets/site visit.jpg'// TODO: paste your deployed Apps Script Web App URL here (must end in /exec)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwj73LbWCG6B8NrfW_F5vT6jY8xn4bcAnxwoCGzw4jzPyfB8FAlAt2UJMTkWKogWhf81w/exec'

// Fires a form submission to the GILP Apps Script backend.
// Uses no-cors + urlencoded body so it works without any CORS setup on the Apps Script side.
async function submitToGILP(formType: string, data: Record<string, string>) {
  const body = new URLSearchParams({ formType, ...data })
  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: body.toString(),
  })
}

export const Route = createFileRoute('/programmes/gilp')({
  head: () => ({
    meta: [
      { title: 'Global India Leadership Programme at Cambridge — Global Edu Lab' },
      { name: 'description', content: 'A transformative leadership programme at Cambridge Judge Business School for Indian board members, CEOs and senior leaders.' },
    ],
  }),
  component: Page,
})

function Page() {
  const [brochureOpen, setBrochureOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Hero onDownloadBrochure={() => setBrochureOpen(true)} />
      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <ProgrammeOverview />
      <LordsMarquee />
      <LordsCricket />
      <Curriculum />
      <ProgrammeStructure />
      <Outcomes />
      <ProfessorQuote />
      <WhoShouldAttend />
      <Faculty />
      <Packages />
      <AccommodationSection />
      <CertificateSection />
      <FacultyGrid />
      <AlumniTestimonials />
      <CancellationPolicy />
      <ContactSection />
      <ApplyNow />
      <FAQ />
      <CohortGallery />
      <CTA />
      <Footer />
    </div>
  )
}

/* ─── BROCHURE MODAL — captures name+email, then downloads the PDF ─── */
// TODO: replace with the real hosted brochure PDF URL
const BROCHURE_PDF_URL = '/gilp-brochure.pdf'

function BrochureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email) return
    setStatus('submitting')
    try {
      await submitToGILP('brochure', { fullName, email })
      // trigger the actual PDF download
      const link = document.createElement('a')
      link.href = BROCHURE_PDF_URL
      link.download = 'GILP-Brochure.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setFullName('')
      setEmail('')
      setStatus('idle')
      onClose()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-forest-deep px-7 py-5 flex items-center justify-between">
          <p className="text-white font-bold text-[16px]">Download the GILP Brochure</p>
          <button type="button" onClick={onClose} className="text-white/70 hover:text-white text-[20px] leading-none">×</button>
        </div>
        <form onSubmit={handleSubmit} className="p-7 space-y-4">
          <p className="text-[13.5px] text-forest/80 leading-relaxed">
            Enter your details and the brochure will download instantly. We'll also email you with next steps.
          </p>
          <div>
            <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Full name <span className="text-red-400">*</span></label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Email address <span className="text-red-400">*</span></label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
            />
          </div>
          {status === 'error' && (
            <p className="text-[12.5px] text-red-500">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 bg-forest-deep text-white rounded-xl py-3.5 text-[15px] font-bold uppercase tracking-[0.15em] hover:bg-forest transition-all duration-200 shadow-md disabled:opacity-60"
          >
            {status === 'submitting' ? 'Please wait…' : 'Download Brochure'}
          </button>
        </form>
      </div>
    </div>
  )
}

/* ─── 1. HERO — matches screenshot exactly ─── */
function Hero({ onDownloadBrochure }: { onDownloadBrochure: () => void }) {
  return (
    <section className="relative bg-[#E8DCC8] pt-28 pb-20 border-b border-forest/10 overflow-hidden">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#0A301D_1px,transparent_1px),linear-gradient(90deg,#0A301D_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.35fr] gap-10 items-center">

          {/* LEFT */}
          <div>
            {/* Title + India flag */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h1 className="text-[2.3rem] md:text-[2.9rem] font-bold text-forest-deep leading-[1.08] tracking-tight">
                  Global India Leadership Programme
                </h1>
                <p className="text-[1.7rem] md:text-[2.1rem] font-bold text-forest-deep leading-tight mt-1">
                  “Leadership grows where perspective widens.”
                </p>
              </div>
              <img
                src="https://static.wixstatic.com/media/bf78a9_2b40f76be34f43f5b8b02526672c5416~mv2.png"
                alt="India Flag"
                className="h-14 w-auto object-contain shrink-0 ml-4 mt-1"
              />
            </div>

            <p className="text-[15px] text-forest/80 leading-relaxed max-w-[420px] mb-7">
              Designed for board members, CEOs, founders, and senior leaders, this immersive 5-day
              experience at Cambridge equips you with cutting-edge insights in AI, strategy,
              and leadership to navigate complexity and lead with confidence in a rapidly evolving
              global landscape.
            </p>

            <div className="flex items-center gap-2.5 mb-4">
              <Quote className="h-[18px] w-[18px] text-forest-deep shrink-0" />
              <span className="text-[15px] font-semibold text-forest-deep">“The next bold move begins with a conversation.”</span>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-[15px] text-forest/80 font-medium">certified by</span>
              <img
                src="https://static.wixstatic.com/media/bf78a9_63184a68c2974142a13024cf634f6d33~mv2.png"
                alt="University of Cambridge — Judge Business School"
                className="h-16 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={onDownloadBrochure}
                className="inline-flex items-center gap-2 rounded-md bg-forest-deep px-6 py-3 text-[15px] font-bold text-white hover:bg-forest transition-colors duration-200 shadow-sm"
              >
                Download Brochure
              </button>
              <button
                onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-md bg-forest-deep px-6 py-3 text-[15px] font-bold text-white hover:bg-forest transition-colors duration-200 shadow-sm"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — floating card style like live site */}
          <div className="relative flex justify-center">
            {/* outer shadow card */}
            <div className="relative bg-white rounded-3xl shadow-[0_8px_40px_rgba(10,48,29,0.12)] p-3 w-full max-w-[660px]">
              <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                <video
                  src="/Globalindialeadershipprogramme.mp4"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 left-6 bg-forest-deep text-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                <span className="text-[15px] font-bold">Cambridge Judge Business School</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 2. PROGRAMME OVERVIEW + VIDEO ─── */
/* ─── 2. PROGRAMME OVERVIEW + VIDEO ─── */
function ProgrammeOverview() {

  return (
    <section className="bg-[#FAF8F5] py-24 relative border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* LEFT — Premium Editorial Text */}
          <div className="max-w-[540px]">
            {/* Section Header inline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">About the Programme</span>
            </div>

            <h2 className="text-[2.2rem] md:text-[2.6rem] font-bold text-forest-deep leading-[1.15] mb-4">
              Challenge your thinking.<br />
              <span className="text-forest-deep/80 font-medium italic">Expand your horizons.</span>
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-[17px] font-medium text-forest-deep/90 leading-relaxed">
                Held over five transformative days across Cambridge Judge Business School &amp; Lord's Cricket Ground, GILP offers business leaders the space to step back, reflect, and reimagine their approach to leadership.
              </p>

              <div className="pl-5 border-l-2 border-gold/30 space-y-5">
                <p className="text-[15px] text-forest/75 leading-relaxed">
                  Co-created with Cambridge Judge Business School, the programme blends cutting-edge academic insights with practical frameworks tailored for the Indian business context. Explore how to lead in an AI-driven world, leverage innovation, and build sustainable global strategies.
                </p>
                <p className="text-[15px] text-forest/75 leading-relaxed">
                  Return to your organisation with fresh ideas, a renewed sense of purpose, and a <strong className="italic text-forest-deep font-bold">Cambridge-certified</strong> edge to lead with impact.
                </p>
              </div>
            </div>

            {/* Stat pills — refined and minimal */}
            <div className="mt-10 flex flex-wrap gap-6 pt-6 border-t border-forest/10">
              {[
                { val: '5', label: 'Days Residential' },
                { val: '6', label: 'Core Modules' },
                { val: 'Rolling', label: 'Next Cohort' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[22px] font-bold text-forest-deep">{s.val}</span>
                  <span className="text-[15px] uppercase tracking-wider text-forest/80 font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium video card */}
          <div className="relative w-full">
            {/* soft shadow glow */}
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,48,29,0.08)] overflow-hidden ring-1 ring-forest/5">
              <div className="relative w-full aspect-video group">
                <img
                  src="https://static.wixstatic.com/media/bf78a9_a29139fafe4a4d3691b7d683e4fdfe0df002.jpg"
                  alt="GILP testimonial — Bidisha Banerjee, Partner, Talent Element"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-10 bg-gold rounded-full shrink-0" />
                    <div>
                      <p className="text-[15px] font-bold text-white uppercase tracking-wider leading-tight">BIDISHA BANERJEE</p>
                      <p className="text-[15px] text-white/80 mt-1">Partner, Talent Element</p>
                    </div>
                    <div className="ml-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
                      <p className="text-[15px] italic text-white font-medium">"I'm loving it here"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom label strip */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-forest/6 bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                  </div>
                  <span className="text-[15px] font-bold text-forest/70 uppercase tracking-wider">Alumni Testimonial</span>
                </div>
                <img
                  src="https://static.wixstatic.com/media/bf78a9_63184a68c2974142a13024cf634f6d33~mv2.png"
                  alt="Cambridge Judge"
                  className="h-6 w-auto object-contain opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── 3. OUTCOMES ─── */
function Outcomes() {
  const items = [
    { icon: <Globe2 className="h-6 w-6" />, title: 'Gain Cambridge Insights', desc: 'Learn cutting-edge leadership frameworks shaped by Cambridge expertise, designed for the Indian business environment.' },
    { icon: <Cpu className="h-6 w-6" />, title: 'Master AI & Innovation', desc: 'Discover how to use AI, digital strategy, and frugal innovation to stay competitive in fast-changing markets.' },
    { icon: <Users className="h-6 w-6" />, title: 'Expand Your Global Network', desc: 'Connect with peers, academics, and organisations across the UK–India corridor to unlock new opportunities.' },
    { icon: <BarChart3 className="h-6 w-6" />, title: 'Elevate Your Leadership Presence', desc: 'Sharpen your communication, negotiation, and financial strategy skills to lead with confidence.' },
    { icon: <Award className="h-6 w-6" />, title: "Get Certified by World's Leading University", desc: 'Earn a prestigious Cambridge certification, enhancing your credibility and global leadership profile.' },
    { icon: <Briefcase className="h-6 w-6" />, title: 'Leverage India-UK Free Trade Agreement', desc: 'Position your business to seize India-UK free trade opportunities, driving cross-border growth.' },
  ]
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      {/* decorative dark grid for premium feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">Programme Outcomes</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white leading-tight">As a GILP participant, you will</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-[#F5EFD8] rounded-2xl p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#FDFBF7] transition-all duration-300">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep mb-5 group-hover:bg-gold/25 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-[17px] font-bold text-forest-deep mb-3">{item.title}</h3>
              <p className="text-[14.5px] text-forest/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 4. CURRICULUM ─── */
function Curriculum() {
  const modules = [
    {
      num: 'Module 1',
      title: 'Leadership & Strategy',
      items: [
        'Discover leadership styles and frameworks in the Indian and global context',
        'Master strategic frameworks built for the AI-driven business era',
        'Use AI simulations to model business scenarios and growth opportunities',
        'Design and implement blue ocean strategies for sustainable advantage',
      ],
    },
    {
      num: 'Module 2',
      title: 'AI & Frugal Innovation',
      items: [
        'Explore practical AI applications for cost-effective innovation',
        'Learn how to "do more with less" through lean AI strategies',
        'Develop responsible, ethical AI adoption practices',
        'Build scalable, budget-conscious AI roadmaps for your organisation',
      ],
    },
    {
      num: 'Module 3',
      title: 'Branding, Marketing & Digital Innovation',
      items: [
        'Harness the power of storytelling to strengthen brand equity',
        'Design customer-centric innovation strategies that fuel growth',
        'Leverage data, analytics, and AI to create measurable business value',
        'Explore ESG marketing and emerging technology trends shaping the future',
      ],
    },
    {
      num: 'Module 4',
      title: 'Public Speaking & The Art of Negotiation',
      items: [
        'Master public speaking, pitching, and persuasive communication',
        'Learn storytelling techniques for impact and engagement',
        'Participate in strategic negotiation role-plays to refine deal-making skills',
        'Build confidence to communicate vision and strategy across stakeholders',
      ],
    },
    {
      num: 'Module 5',
      title: 'Finance, Governance & Boardroom Dynamics',
      items: [
        'Understand corporate governance as an information and decision-making challenge',
        'Navigate boardroom dynamics with confidence and influence',
        'Link brand strategy to financial performance for shareholder value',
        'Design financial strategies for global expansion and sustainable growth',
      ],
    },
    {
      num: 'Module 6',
      title: 'Cambridge Traditions & Global Networking',
      items: [
        "Explore Cambridge's history and culture through guided experiences like punting",
        'Engage with world-renowned academics during exclusive formal dinners',
        'Build a global peer network of CXOs and thought leaders',
        'Reflect and recharge in an environment that fosters big-picture thinking',
      ],
    },
  ]
  return (
    <section className="bg-[#F5F0E0] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-forest-deep">Programme Curriculum</h2>
          <p className="mt-3 text-[15px] text-forest/80 max-w-2xl leading-relaxed">Six core modules delivering the complete toolkit for Indian CXOs leading high-growth organisations in a global, AI-driven landscape.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((m, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(10,48,29,0.04)] hover:shadow-[0_20px_40px_rgba(10,48,29,0.08)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden border border-forest/5">
              {/* Premium top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-gold/40 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header section */}
              <div className="mb-6 pb-5 border-b border-forest/5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-px w-4 bg-gold" />
                  <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold">{m.num}</p>
                </div>
                <h3 className="text-[18px] font-bold text-forest-deep leading-snug group-hover:text-gold-deep transition-colors duration-300">{m.title}</h3>
              </div>

              {/* List items */}
              <ul className="space-y-3.5">
                {m.items.map((item, k) => (
                  <li key={k} className="flex items-start gap-3 text-[14.5px] text-forest/75 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold/60 shrink-0 group-hover:bg-gold transition-colors duration-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 5. LORD'S CRICKET ─── */
function LordsCricket() {
  return (
    <section className="bg-forest-deep py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-gold mb-3">Signature Experience</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white leading-tight mb-5">
              Leadership at Lord's Cricket Ground
            </h2>
            <p className="text-[15px] text-cream/75 leading-relaxed mb-8">
              Gather at the Home of Cricket for an exclusive leadership session, private tour and networking lunch. The programme includes a leadership session inspired by the principles of high-performance sport, a private networking lunch with senior business leaders and academics, and an exclusive behind-the-scenes tour of the Home of Cricket.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { t: 'High-Performance Leadership', d: 'Lessons from elite sport' },
                { t: 'Private Tour', d: "Exclusive access to Lord's" },
                { t: 'Senior Networking', d: 'Business leaders & academics' },
                { t: 'Signature Day', d: 'A leadership experience with impact' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[15px] font-bold text-gold mb-1">{item.t}</p>
                  <p className="text-[15px] text-white/80">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[340px]">
            <img
              src="https://static.wixstatic.com/media/bf78a9_f7d441ce1b8844f5937f3f3b085080b4~mv2.jpg"
              alt="Lord's Cricket Ground — Home of Cricket"
              className="w-full h-full object-cover min-h-[340px] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Lord's Cricket Ground</p>
              <p className="text-white text-[14px] font-semibold">London, UK · A signature leadership day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 5.5 LORDS MARQUEE ─── */
function LordsMarquee() {
  const items = [
    { icon: <Quote className="h-11 w-11 mx-auto text-gold mb-3 stroke-[1.5]" />, text: 'Signature Leadership Day' },
    { icon: <Users className="h-11 w-11 mx-auto text-gold mb-3 stroke-[1.5]" />, text: 'Leadership Session' },
    { icon: <Utensils className="h-11 w-11 mx-auto text-gold mb-3 stroke-[1.5]" />, text: 'Networking Lunch' },
    { icon: <Landmark className="h-11 w-11 mx-auto text-gold mb-3 stroke-[1.5]" />, text: 'Private Tour' },
    { icon: <Castle className="h-11 w-11 mx-auto text-gold mb-3 stroke-[1.5]" />, text: 'Iconic Venue' },
  ]
  // animate-marquee translates by -33.33%, so we need 3 sets to scroll infinitely without gap
  const repeatedItems = [...items, ...items, ...items]

  return (
    <section className="bg-white py-12 border-b border-forest/10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee flex items-center">
        {repeatedItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center shrink-0 w-[260px] px-4 border-r border-forest/10">
            {item.icon}
            <p className="text-[15px] font-bold text-forest-deep uppercase tracking-[0.1em] text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 6. PROFESSOR QUOTE ─── */
function ProfessorQuote() {
  return (
    <section className="bg-[#F7EED5] py-20 border-b border-forest/5">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-[2rem] md:text-[2.2rem] font-bold text-forest-deep mb-12">From the Programme Director</h2>
        <div className="grid md:grid-cols-[260px_1fr] gap-12 items-center">
          <div className="w-56 h-56 mx-auto md:mx-0 rounded-full overflow-hidden border-[6px] border-white/40 shadow-xl shrink-0">
            <img
              src="https://static.wixstatic.com/media/bf78a9_088f72ce32904001b0be82d287f69ba0~mv2.jpg"
              alt="Prof. Jaideep Prabhu"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[4rem] text-forest-deep leading-none font-serif block h-10 -mt-8 mb-4">“</span>
            <blockquote className="text-[16px] md:text-[17px] text-forest-deep leading-relaxed mb-6 font-medium">
              The Global India Leadership Programme is about more than learning — it's about transformation. At Cambridge Judge Business School, we give leaders the tools to think creatively, harness AI and innovation, and shape the future of their organisations in a rapidly changing world.
            </blockquote>
            <p className="text-[15px] text-forest-deep font-semibold italic">
              — Prof. Jaideep Prabhu, Vice Dean & Jawaharlal Nehru Professor of Business & Enterprise, Cambridge Judge Business School
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 7. PROGRAMME STRUCTURE ─── */
function ProgrammeStructure() {
  const phases = [
    {
      num: '01',
      phase: 'Pre-Programme Assessment',
      date: 'Prior to Programme',
      color: 'bg-gold',
      items: [
        "An initial assessment by GEL's academic researchers to tailor AI sessions for participants",
        'Pre reading material and pre-programme assessment shared prior to programme start',
        'Cohort onboarding & introductions',
      ],
    },
    {
      num: '02',
      phase: 'Residential Week',
      date: '5-Day Immersive',
      color: 'bg-forest',
      items: [
        '14–18 September — 5-day residential week at Cambridge Judge Business School',
        'A dynamic week packed with academic insights and global networking opportunities',
        "Day 4 (17 Sept): Leadership session at Lord's Cricket Ground, London",
      ],
    },
    {
      num: '03',
      phase: 'Post-Programme Report',
      date: '6 Months Post-Programme',
      color: 'bg-forest-deep',
      items: [
        '6 Months Post-Programme - GEL will measure the impact on your organisation\'s growth',
        'Receive a comprehensive assessment report to help in your leadership journey',
        'Continued access to Cambridge alumni network',
      ],
    },
  ]
  return (
    <section className="bg-[#FAF8F5] py-24 border-y border-forest/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 text-center">
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep">Three phases, one transformation.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((ph, i) => (
            <div key={i} className="group rounded-2xl bg-white shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 overflow-hidden hover:shadow-[0_20px_40px_rgba(10,48,29,0.08)] hover:-translate-y-1.5 transition-all duration-500 relative">
              {/* Thicker premium top accent */}
              <div className={`h-1.5 w-full ${ph.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

              <div className="p-8 relative">
                {/* Premium Watermark Number */}
                <div className="absolute top-4 right-6 text-[4.5rem] font-bold text-forest/5 font-serif leading-none select-none group-hover:text-gold/10 transition-colors duration-500">
                  {ph.num}
                </div>

                <div className="relative z-10">
                  <h3 className="text-[19px] font-bold text-forest-deep mb-1.5 group-hover:text-gold-deep transition-colors duration-300">{ph.phase}</h3>
                  <p className="text-[13.5px] uppercase tracking-wide text-gold font-bold mb-6">{ph.date}</p>

                  <ul className="space-y-4">
                    {ph.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-[14.5px] text-forest/75 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold/60 shrink-0 group-hover:bg-gold transition-colors duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 8. FACULTY ─── */
function Faculty() {
  const faculty = [
    { img: 'https://static.wixstatic.com/media/bf78a9_356aa9f0ffc943199a9db3d6b68c9b64~mv2.jpg', name: 'Prof. Jaideep Prabhu', role: 'Programme Director & Facilitator – Frugal Innovation' },
    { img: 'https://static.wixstatic.com/media/ff608f_0b9dd7af10ee485baf6441b9fef2416e~mv2.jpg', name: 'Cambridge Faculty', role: 'Facilitator – Customer-Centric Innovation in the AI Era' },
    { img: 'https://static.wixstatic.com/media/bf78a9_2f15e96675344d8c9a2ef70d1d015137~mv2.jpg', name: 'Cambridge Faculty', role: 'Facilitator – Leadership & Strategy' },
    { img: 'https://static.wixstatic.com/media/bf78a9_23c128d7b28c45d2970bedb4a85b2927~mv2.jpeg', name: 'Cambridge Faculty', role: 'Facilitator – Corporate Governance' },
    { img: 'https://static.wixstatic.com/media/bf78a9_ca1aa471265b4f4eabc1cda72c39b667~mv2.jpg', name: 'Cambridge Faculty', role: 'Facilitator – Building Branding Strategy' },
    { img: 'https://static.wixstatic.com/media/bf78a9_902fda2ddbb34a3bb49561c9721950a7~mv2.jpg', name: 'Cambridge Faculty', role: 'Facilitator – Boardroom Dynamics' },
  ]
  const repeatedFaculty = [...faculty, ...faculty, ...faculty]

  return (
    <section className="bg-forest-deep py-12 border-t border-forest/20 overflow-hidden relative">
      <div className="text-center mb-10 relative z-20">
        <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Learn from Cambridge's finest</h2>
        <p className="mt-3 text-[15px] font-medium text-white/70 max-w-lg mx-auto">World-class academics and practitioners from Cambridge Judge Business School.</p>
      </div>

      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-forest-deep via-forest-deep/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-[marquee_40s_linear_infinite] flex items-start">
          {repeatedFaculty.map((f, i) => (
            <div key={i} className="group text-center shrink-0 w-[280px] px-6">
              <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-white/10 shadow-lg group-hover:border-gold/50 transition-colors duration-300 relative">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-[16px] font-bold text-white">{f.name}</h3>
              <p className="text-[13.5px] text-gold font-semibold mt-1.5 leading-snug">{f.role}</p>
              <p className="text-[12.5px] text-white/80 mt-1.5 font-medium">Cambridge Judge Business School</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 9. ADMISSION CRITERIA & DEADLINES ─── */
function WhoShouldAttend() {
  return (
    <section className="bg-[#FAF8F5] py-24 border-y border-forest/5 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-5">Admission Criteria & Next Steps</h2>
          <p className="text-[15px] font-medium text-forest/70 italic max-w-2xl mx-auto">
            “The right opportunity often starts with the right conversation.”
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Next Steps Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(10,48,29,0.08)] hover:-translate-y-1 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold/80 to-gold transition-opacity duration-300" />
            <h3 className="text-[19px] font-bold text-forest-deep mb-7 pb-4 border-b border-forest/5">Next Steps</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 rounded-xl bg-[#FAF8F5] border border-forest/5 transition-colors group-hover:border-gold/20">
                <span className="text-[14.5px] font-bold text-forest-deep">Round 1</span>
                <span className="text-[14px] font-bold text-gold-deep bg-gold/10 px-3 py-1 rounded-full">Connect with our team</span>
              </li>
              <li className="flex items-center justify-between p-4 rounded-xl bg-[#FAF8F5] border border-forest/5 transition-colors group-hover:border-gold/20">
                <span className="text-[14.5px] font-bold text-forest-deep">Round 2</span>
                <span className="text-[14px] font-bold text-gold-deep bg-gold/10 px-3 py-1 rounded-full">Receive tailored guidance</span>
              </li>
            </ul>
          </div>

          {/* Who Should Attend Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(10,48,29,0.08)] hover:-translate-y-1 transition-all duration-500 md:col-span-2">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-forest-deep transition-opacity duration-300" />
            <h3 className="text-[19px] font-bold text-forest-deep mb-7 pb-4 border-b border-forest/5">Who Should Attend</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                'Board members & CXOs scaling globally',
                'Founders entering new markets',
                'Family Business Leaders navigating succession and growth',
                'Government Agencies engaging with private sector development',
                'Senior Management targeting Leadership roles in private sector'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <p className="text-[14.5px] font-medium text-forest/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selective Criteria Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(10,48,29,0.08)] hover:-translate-y-1 transition-all duration-500 md:col-span-3">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-forest/80 transition-opacity duration-300" />
            <h3 className="text-[19px] font-bold text-forest-deep mb-7 pb-4 border-b border-forest/5">Admission is selective and based on:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Professional achievement',
                'Organisational responsibility',
                'Alignment with the programme\'s objectives',
                'Space availability'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-forest/5 group-hover:bg-white group-hover:border-forest/10 transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <p className="text-[15px] font-bold text-forest-deep leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 10. PACKAGES ─── */
function Packages() {
  const packages = [
    {
      name: 'Package 1',
      subtitle: 'Basic Programme',
      price: 'Tailored Pricing',
      priceNote: 'Contact us for pricing',
      detail: '– Without accommodation',
      suitability: 'suitable for individuals',
      highlight: false,
    },
    {
      name: 'Package 2',
      subtitle: 'Programme + Accommodation',
      price: 'Tailored Pricing',
      priceNote: 'Contact us for pricing',
      detail: '– With Single accommodation (4-star or equivalent)',
      suitability: 'suitable for individuals',
      highlight: true,
    },
    {
      name: 'Package 3',
      subtitle: 'Programme + Accommodation (double)',
      price: 'Tailored Pricing',
      priceNote: 'Contact us for pricing',
      detail: '– With Double accommodation (4-star or equivalent)',
      suitability: 'suitable if bringing spouse',
      highlight: false,
    },
  ]

  const inclusions = [
    'Tuition fee',
    'Cambridge traditional Formal dinner invite – 1',
    'Snacks/Tea/Coffee and Lunch on all days',
    'Sight seeing, cultural activities in Cambridge',
    'Participation certificate from Cambridge Judge Business School',
  ]

  return (
    <section className="bg-[#EDE0C4] py-24 border-t border-[#C8B89A]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[11.5px] font-bold uppercase tracking-[0.3em] text-gold/80 mb-4">Cambridge Judge Business School</p>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-forest-deep leading-tight">Programme packages<br className="hidden md:block" /> and Inclusions</h2>
          <div className="mt-5 h-px w-16 bg-gold/60" />
          <p className="mt-5 text-[15px] italic text-forest/70">*Programme fees are tailored based on package options and group size.</p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(10,48,29,0.08)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(10,48,29,0.14)] bg-white ${pkg.highlight ? 'ring-2 ring-gold' : ''}`}>
              <div className={`h-1 w-full ${pkg.highlight ? 'bg-gradient-to-r from-gold via-amber-400 to-gold' : 'bg-forest-deep/10'}`} />
              <div className="p-8 relative">
                <span className="absolute top-6 right-6 text-gold/80 text-3xl select-none font-serif">✦</span>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.35em] text-gold mb-4">{pkg.name}</p>
                <h3 className="text-[17px] font-bold text-forest-deep mb-5 leading-snug pr-6">{pkg.subtitle}</h3>
                <div className="border-t border-forest/8 pt-5 mb-5">
                  <p className="text-[28px] font-bold text-forest-deep tracking-tight">{pkg.price}</p>
                  <p className="text-[15px] text-forest/80 mt-1 font-medium">{pkg.priceNote}</p>
                </div>
                <p className="text-[15px] text-forest/80 mt-1 leading-relaxed">{pkg.detail}</p>
                <p className="text-[15px] text-gold font-bold italic mt-4">{pkg.suitability}</p>
                <Link
                  to="/contact"
                  search={{ source: "GILP — Enquire Now" }}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg py-3.5 text-[12.5px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${pkg.highlight ? 'bg-forest-deep text-white hover:bg-forest shadow-md' : 'border-2 border-forest-deep/20 text-forest-deep hover:border-gold hover:bg-[#EDE0C4]'}`}
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions + photos */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16 bg-white/50 rounded-3xl p-10 shadow-[0_4px_30px_rgba(10,48,29,0.05)] border border-white/80 backdrop-blur-sm">
          <div>
            <h3 className="text-[20px] font-bold text-forest-deep mb-6">Basic Programme Inclusions</h3>
            <ul className="space-y-3">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14.5px] text-forest/75 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Overlapping photos */}
          <div className="relative h-[320px]">
            <img
              src="https://static.wixstatic.com/media/bf78a9_2f15e96675344d8c9a2ef70d1d015137~mv2.jpg"
              alt="Cambridge programme"
              className="absolute top-0 left-6 w-[62%] aspect-[4/3] object-cover rounded-xl shadow-lg border-4 border-white"
            />
            <img
              src="https://static.wixstatic.com/media/bf78a9_6f1c40ca8e404151a86715668099233c~mv2.jpg"
              alt="Cambridge formal dinner"
              className="absolute bottom-0 right-0 w-[62%] aspect-[4/3] object-cover rounded-xl shadow-xl border-4 border-white"
            />
          </div>
        </div>


      </div>
    </section>
  )
}

/* ─── 10b. ACCOMMODATION IN CAMBRIDGE ─── */
function AccommodationSection() {
  const hotels = [
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      alt: 'Graduate by Hilton',
      name: 'Graduate by Hilton',
      walk: '6 mins walk',
      stars: '★★★★',
      link: 'https://www.hilton.com/en/hotels/stngagu-graduate-cambridge/',
    },
    {
      src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
      alt: 'Hilton Cambridge City Centre',
      name: 'Hilton Cambridge City Centre',
      walk: '7 mins walk',
      stars: '★★★★',
      link: 'https://www.hilton.com/en/hotels/stnhchi-hilton-cambridge-city-centre/',
    },
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      alt: 'Hotel du Vin',
      name: 'Hotel du Vin',
      walk: '2 mins walk',
      stars: '★★★★',
      link: 'https://www.hotelduvin.com/locations/cambridge/',
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
      alt: 'University Arms Hotel',
      name: 'University Arms Hotel',
      walk: '11 mins walk',
      stars: '★★★★',
      link: 'https://universityarms.com/',
    },
  ]

  return (
    <section className="bg-[#FAF8F5] py-24 border-y border-forest/5 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-forest/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[0.22em] text-gold-deep bg-gold/10 px-4 py-1.5 rounded-full mb-4">Packages 2 &amp; 3</span>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-forest-deep mb-4">Accommodation in Cambridge</h2>
          <p className="text-[15px] text-forest/80 leading-relaxed max-w-2xl mx-auto">
            Accommodation will be booked based on availability in 4-star hotels in close proximity to Cambridge Judge Business School.
          </p>
        </div>

        {/* Hotel cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(10,48,29,0.06)] border border-forest/5 hover:shadow-[0_20px_50px_rgba(10,48,29,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              {/* Gold accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-gold/70 via-gold to-gold/50" />

              {/* Hotel image */}
              <div className="relative overflow-hidden">
                <img
                  src={hotel.src}
                  alt={hotel.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Walk badge */}
                <div className="absolute bottom-3 left-3 bg-forest-deep/80 backdrop-blur-sm text-white text-[13px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                  </svg>
                  {hotel.walk}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[13px] text-gold tracking-widest mb-1">{hotel.stars}</p>
                <h3 className="text-[15px] font-bold text-forest-deep leading-snug mb-1">{hotel.name}</h3>
                <p className="text-[15px] text-forest/70 mb-4">from Judge Business School</p>
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-forest-deep/15 text-forest-deep text-[15px] font-bold uppercase tracking-[0.12em] py-2.5 hover:bg-forest-deep hover:text-white hover:border-forest-deep transition-all duration-300"
                >
                  Check Hotel Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[15px] text-forest/80 mt-10 italic">
          * Accommodation is subject to availability. Hotel allocation confirmed upon enrolment.
        </p>
      </div>
    </section>
  )
}

/* ─── 10.5. COHORT GALLERY ─── */
function CohortGallery() {
  const allImages = [
    cohort1Img, cohort2Img, cohort3Img,
    cohort4Img, cohort5Img, cohort6Img,
    cohort7Img, cohort8Img, cohort9Img
  ]
  const [visibleCount, setVisibleCount] = useState(3)

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allImages.length))
  }

  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto w-[96%] xl:max-w-[1400px]">
        <h2 className="text-[2rem] md:text-[2.2rem] font-bold text-forest-deep mb-10">Featured Cohort</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allImages.slice(0, visibleCount).map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={img} alt={`Cohort ${idx + 1}`} className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        {visibleCount < allImages.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-forest-deep text-white px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-forest-deep transition-all duration-300 shadow-md"
            >
              Load More Images
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── 11. ALUMNI TESTIMONIALS ─── */
function AlumniTestimonials() {
  const alumni = [
    {
      name: 'Snigdha Manchanda',
      role: 'Founder, TeaTrunk (India)',
      quote: "This programme helped articulate something critical: leadership is also about language. It equips founders to translate their journey into frameworks that resonate with investors and stakeholders. That shift, from building to being understood, unlocks the next level of growth and influence.",
      img: alumni1Img
    },
    {
      name: 'Dr. Fatin Al Zadjali',
      role: 'L&D Head - Bank Dhofar (Oman)',
      quote: "An enriching experience that combined frugal innovation, AI, governance, and storytelling into actionable leadership insights. The diverse cohort and engaging discussions made learning deeply practical. I left with new strategies, and renewed clarity on leading with purpose and impact.",
      img: alumni2Img
    },
    {
      name: 'Johannes Samwer',
      role: 'MD, Rhenus Lub (Germany)',
      quote: "The programme offered insights into leadership communication and influence. Sessions on rhetoric and group discussions were particularly impactful, providing practical tools used by global leaders. A highly engaging experience that I would strongly recommend to anyone looking to enhance leadership effectiveness.",
      img: alumni3Img
    },
    {
      name: 'Dr. Aashish Chaudhry',
      role: 'MD, Aakash Healthcare (India)',
      quote: 'Frugal innovation came alive during the programme as a practical necessity, not theory. It reinforced that sustainable impact lies in affordable, last-mile solutions. Seeing "jugaad" discussed at Cambridge affirmed that frugal innovation is globally relevant, and that the programme sets exactly the right foundation.',
      img: alumni4Img
    },
    {
      name: 'Dr. Johannes Mario Schmidt',
      role: 'MD, Lingel Windows and Doors Technologies (India)',
      quote: "A dynamic and engaging programme that brings together like-minded global leaders. The blend of sessions and discussion creates continuous learning opportunities. Even early into the programme, the value of connections and insights is clear, highly recommend joining if you get the chance.",
      img: alumni5Img
    },
  ]

  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto w-[96%] xl:max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.2rem] font-bold text-forest-deep mb-2">What Our Alumni Say</h2>
          <p className="text-[1.3rem] md:text-[1.5rem] text-forest/80 font-normal">"Leadership Learning That Feels Like a Rolls Royce"</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8">
          {alumni.map((a, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-[90px] w-[90px] rounded-full overflow-hidden mb-5 shadow-sm border border-forest/10">
                <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[2.5rem] text-forest-deep leading-none font-serif block h-6 mb-3">“</span>
              <h3 className="text-[13.5px] font-bold text-forest-deep leading-tight mb-1">{a.name}</h3>
              <p className="text-[11.5px] text-forest/80 mb-5">{a.role}</p>
              <p className="text-[12.5px] text-forest-deep/80 leading-[1.7] hyphens-auto">{a.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 12. FAQ ─── */
function FAQ() {
  const faqs = [
    { q: 'Who should apply to GILP?', a: 'GILP is designed for board members, CEOs, founders, senior leaders, and government officials from India who are looking to scale globally, navigate AI disruption, and reimagine their leadership approach through a Cambridge lens.' },
    { q: 'What is included in the programme fee?', a: "The basic programme fee includes all teaching, workshops and seminars, breakfast and daytime catering, the Lord's Cricket Ground session and private tour, a Cambridge college formal dinner, pre-programme materials and assessment, post-programme impact report, Cambridge certificate, and lifelong alumni network access." },
    { q: 'Where is the programme held?', a: 'The programme takes place at Cambridge Judge Business School over five residential days, with a special off-site leadership experience at Lord’s Cricket Ground in London.' },
    { q: 'Will I receive a certificate?', a: 'Yes. Upon successful completion, you will earn a verified Cambridge Judge Business School certificate — a prestigious recognition of your learning journey.' },
    { q: 'What accommodation options are available?', a: 'Package 2 and Package 3 include 5-night accommodation in a 4-star hotel in close proximity to Cambridge Judge Business School (options range from 2–11 minutes walk). Accommodation will be booked based on availability.' },
    { q: 'When are applications due?', a: 'Applications are reviewed on a rolling, space-available basis. Early applications are strongly encouraged. Please apply early to secure your preferred dates.' },
    { q: 'What is the cohort size?', a: 'GILP maintains a deliberately small, curated cohort of senior leaders to ensure high-quality peer interaction, personalised faculty attention, and a premium learning experience.' },
  ]
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-white py-20 border-t border-forest/5">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-forest-deep">Frequently asked questions</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-forest/10 bg-[#F5F0E0] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-[#EDE8D5] transition-colors duration-150"
              >
                <span className="text-[15px] font-bold text-forest-deep">{faq.q}</span>
                {open === i ? <ChevronUp className="h-5 w-5 text-gold shrink-0" /> : <ChevronDown className="h-5 w-5 text-forest/80 shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[15px] text-forest/70 leading-relaxed border-t border-forest/8 bg-white">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 13. CERTIFICATE ─── */
function CertificateSection() {
  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      {/* Warm decorative blobs only — no grid */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C9913D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#C9913D]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start lg:pt-8">

          {/* LEFT — Text content */}
          <div>
            <span className="inline-block text-[13px] font-bold uppercase tracking-[0.22em] text-[#C9913D] bg-[#C9913D]/15 px-4 py-1.5 rounded-full mb-6 border border-[#C9913D]/20">Upon Completion</span>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-[#F5E6CC] mb-5 leading-tight">
              Earn a Recognised Certificate
            </h2>
            <div className="space-y-5">
              <div className="bg-[#3D2C14]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C9913D]/20 relative overflow-hidden group hover:border-[#C9913D]/40 hover:bg-[#3D2C14] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C9913D]/70 via-[#C9913D] to-[#C9913D]/50" />
                <h3 className="text-[16px] font-bold text-[#F5E6CC] mb-2">University of Cambridge–certified</h3>
                <p className="text-[15px] text-[#C9A87C]/80 leading-relaxed">
                  Earn a verified Cambridge Judge Business School certificate upon successful completion of the programme — a testament to your dedication, skills, and learning journey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏛️', label: 'Cambridge Verified', sub: 'Issued by CJBS' },
                  { icon: '🌍', label: 'Globally Recognised', sub: 'Top-tier credential' },
                  { icon: '🎓', label: 'Alumni Network', sub: 'Lifelong access' },
                  { icon: '📋', label: 'Digital Badge', sub: 'Share on LinkedIn' },
                ].map((feat, i) => (
                  <div key={i} className="bg-[#3D2C14]/80 rounded-xl p-4 border border-[#C9913D]/15 hover:border-[#C9913D]/35 hover:bg-[#3D2C14] transition-all duration-300 flex items-start gap-3">
                    <span className="text-[1.4rem]">{feat.icon}</span>
                    <div>
                      <p className="text-[15px] font-bold text-[#F5E6CC]">{feat.label}</p>
                      <p className="text-[11.5px] text-[#C9A87C]/60">{feat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT — Certificate mock + 2 images */}
          <div className="flex flex-col gap-5">
            {/* Certificate image */}
            <div className="relative flex justify-center w-full">
              <div className="absolute -inset-6 bg-[#C9913D]/15 rounded-3xl blur-2xl" />
              <img
                src={newCertificateImg}
                alt="Cambridge Judge Business School Certificate"
                className="relative w-full h-auto rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-[#C9913D]/30 object-contain bg-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── 14. FACULTY GRID (detailed) ─── */
function FacultyGrid() {
  const faculty = [
    {
      img: speaker1Img,
      name: 'Prof. Jaideep Prabhu',
      role: 'Programme Director & Facilitator – Frugal Innovation',
      bio: 'Jaideep Prabhu, Jawaharlal Nehru Professor of Business & Enterprise at Cambridge Judge Business School, is a global authority on frugal innovation. His work demonstrates how organisations can create impactful, resource-efficient solutions under constraints — a mindset he brings to help delegates turn constraints into strategy.',
      accent: 'from-gold/70 via-gold to-gold/50',
    },
    {
      img: speaker2Img,
      name: 'Prof. Shasha Lu',
      role: 'Facilitator – Customer-Centric Innovation in the AI Era',
      bio: 'Associate Professor in Marketing at Cambridge Judge, Shasha Lu applies machine learning to enhance customer insight. Her research on artificial empathy and decision marketing empowers leaders to craft AI-driven, customer-centric innovation strategies that resonate in complex fast-moving markets.',
      accent: 'from-forest/70 via-forest to-forest/50',
    },
    {
      img: speaker3Img,
      name: 'Prof. Lionel Paolella',
      role: 'Facilitator – Leadership & Strategy',
      bio: 'Lionel Paolella, Associate Professor in Strategy & Organisational Behaviour at Cambridge Judge, explores organisational strategy, social evaluation, and inclusion. With a deep understanding of how leadership shapes culture and performance, he equips participants to lead with strategic clarity and inclusivity.',
      accent: 'from-gold/70 via-gold to-gold/50',
    },
    {
      img: speaker4Img,
      name: 'Prof. Raghavendra Rao',
      role: 'Facilitator – Corporate Governance',
      bio: 'Sir Brahmana Ratcheloval Professor of Finance at Cambridge Judge, Raghavendra Rao leads research in corporate governance, scenario finance, and market transparency. He brings a rigorous lens to governance, treating it as a mechanism for managing information flows and accountability within firms.',
      accent: 'from-forest/70 via-forest to-forest/50',
    },
    {
      img: speaker5Img,
      name: 'Prof. Eden Yin',
      role: 'Facilitator – Building Branding Strategy',
      bio: 'Associate Professor in Marketing at Cambridge Judge, Eden Yin specialises in building global brands — particularly Chinese firms expanding internationally. His expertise spans digital-era branding, innovation strategy, and high-tech product growth, offering delegates practical insights to elevate brand equity in dynamic markets.',
      accent: 'from-gold/70 via-gold to-gold/50',
    },
    {
      img: speaker6Img,
      name: 'Prof. Oğuzhan Karakaş',
      role: 'Facilitator – Boardroom Dynamics',
      bio: 'Associate Professor in Finance at Cambridge Judge, Oğuzhan Karakaş focuses on corporate governance, ownership, private equity, and CSR. His rigorous insight into boardroom dynamics illuminates how governance structures and stakeholder control drive organisational integrity and strategic outcomes.',
      accent: 'from-forest/70 via-forest to-forest/50',
    },
    {
      img: speaker7Img,
      name: 'Prof. Kamiar Mohaddes',
      role: 'Facilitator – Leadership for a Sustainable World',
      bio: 'Associate Professor in Economics & Policy at Cambridge Judge and Director of the climaTRACES Lab, Kamiar Mohaddes specialises in the macroeconomics of climate change. He guides leaders on embedding sustainability within economic strategy, helping them steer organisations toward resilience and responsibility.',
      accent: 'from-gold/70 via-gold to-gold/50',
    },
    {
      img: speaker8Img,
      name: 'Elizabeth Osta',
      role: 'Facilitator – AI Frameworks & Digital Innovation',
      bio: 'Elizabeth is the Co-lead at the Frugal AI Hub at Cambridge Judge Business School. She is a digital and data strategist advising CXOs on AI, innovation, and responsible data use. As a former Chief Data Officer at HEINEKEN, she also founded Digital Forward and holds leadership experience across banking, consumer goods, and social impact.',
      accent: 'from-forest/70 via-forest to-forest/50',
    },
    {
      img: speaker9Img,
      name: 'Serish Venkata Gandikota',
      role: 'Facilitator – AI Frameworks & Digital Innovation',
      bio: 'Serish is the Co-lead at the Frugal AI Hub at Cambridge Judge Business School. He is an innovation strategist, impact & climate fund adviser, entrepreneur, and researcher focused on frugal innovation, sustainability, and impact investing. He has led EU-funded projects and launched ventures across social enterprise and technology.',
      accent: 'from-gold/70 via-gold to-gold/50',
    },
    {
      img: speaker10Img,
      name: 'Guy Doza',
      role: 'Facilitator – Public Speaking & Art of Negotiation',
      bio: 'Guy Doza is a renowned author and TEDx speaker who advises top politicians and global CEOs on leadership, persuasion, and negotiation. A leading expert in rhetoric, he blends ancient wisdom with modern science to help leaders communicate with clarity, inspire audiences, and negotiate with impact.',
      accent: 'from-forest/70 via-forest to-forest/50',
    },
  ]

  return (
    <section className="bg-[#F7F5F1] py-24 border-t border-forest/5 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-gold">World-Class Academics</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-[2.4rem] md:text-[3rem] font-bold text-forest-deep mb-4 leading-tight">
            Faculty & <span className="font-serif italic font-normal text-forest/80">Speakers</span>
          </h2>
          <p className="text-[15px] text-forest/80 max-w-2xl mx-auto">Learn from Cambridge Judge Business School's finest academics and global practitioners.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {faculty.map((f, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(10,48,29,0.04)] border border-forest/5 hover:shadow-[0_32px_64px_rgba(10,48,29,0.12)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-700 flex flex-col relative">

              <div className="relative aspect-[4/5] overflow-hidden m-2 mb-0 rounded-[1.5rem]">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/10 transition-colors duration-700 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 relative z-10 bg-white">
                <div className="mb-4">
                  <h3 className="text-[19px] font-bold text-forest-deep tracking-tight mb-1 group-hover:text-gold-deep transition-colors duration-500">{f.name}</h3>
                  <p className="text-[12.5px] font-bold text-gold/90 tracking-wide uppercase">{f.role}</p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-forest/10 to-transparent mb-4 transition-all duration-500 group-hover:from-gold/40" />
                <p className="text-[13.5px] text-forest/70 leading-[1.65]">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 15. CANCELLATION & REFUND POLICY ─── */
function CancellationPolicy() {
  const policies = [
    {
      date: 'Up to 90 days before start',
      refund: '50% refund',
      color: 'bg-emerald-500/10 border-emerald-500/30',
      badge: 'bg-emerald-500/20 text-emerald-300',
      icon: '✓',
      iconColor: 'text-emerald-400',
    },
    {
      date: '30 to 90 days before start',
      refund: '25% refund',
      color: 'bg-amber-500/10 border-amber-500/30',
      badge: 'bg-amber-500/20 text-amber-300',
      icon: '◑',
      iconColor: 'text-amber-400',
    },
    {
      date: 'Less than 30 days before start',
      refund: 'No refund',
      color: 'bg-red-500/10 border-red-500/30',
      badge: 'bg-red-500/20 text-red-300',
      icon: '✕',
      iconColor: 'text-red-400',
    },
  ]

  return (
    <section className="bg-forest-deep py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-forest/30 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[0.22em] text-gold bg-gold/10 px-4 py-1.5 rounded-full mb-4">Important Policy</span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-3">Cancellation &amp; Refund Policy</h2>
          <p className="text-[15px] text-white/80 max-w-xl mx-auto">
            We understand that plans can change, and we aim to be as flexible as possible.
          </p>
        </div>

        {/* Refund tiers */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {policies.map((p, i) => (
            <div key={i} className={`rounded-2xl border p-6 ${p.color} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className={`text-[2rem] font-bold ${p.iconColor}`}>{p.icon}</span>
                <span className={`text-[15px] font-bold px-3 py-1 rounded-full ${p.badge}`}>{p.refund}</span>
              </div>
              <p className="relative z-10 text-[15px] font-semibold text-white">Cancellation</p>
              <p className="relative z-10 text-[15px] text-white/70 mt-1">{p.date}</p>
            </div>
          ))}
        </div>

        {/* Policy cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 shadow-lg border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/70 via-gold to-gold/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <h3 className="relative z-10 text-[16px] font-bold text-white mb-3">How to Cancel</h3>
            <p className="relative z-10 text-[15px] text-white/80 leading-relaxed">
              All cancellations must be submitted in writing to the programme team at{' '}
              <a href="mailto:info@globaledulab.com" className="text-gold/90 underline hover:text-gold transition-colors">
                info@globaledulab.com
              </a>.
              Refunds (where applicable) will be processed within <strong className="text-white">14 working days</strong> of receiving your cancellation request.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 shadow-lg border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <h3 className="relative z-10 text-[16px] font-bold text-white mb-3">⚠️ Currency Note</h3>
            <p className="relative z-10 text-[15px] text-white/80 leading-relaxed">
              <strong className="text-white">Refunds are processed only in GBP (British Pounds).</strong> If you paid in another currency, the final amount you receive may vary depending on the prevailing exchange rate and any charges applied by your payment provider or bank at the time of refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 16. CONTACT INFORMATION ─── */
function ContactSection() {
  return (
    <section className="bg-white py-24 border-t border-forest/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-14">
          {/* Left: contact info */}
          <div className="flex-1">
            <span className="inline-block text-[13px] font-bold uppercase tracking-[0.22em] text-gold-deep bg-gold/10 px-4 py-1.5 rounded-full mb-5">Get in Touch</span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-forest-deep mb-6">Contact Information</h2>
            <p className="text-[15px] text-forest/80 leading-relaxed mb-10 max-w-md">
              Have questions about the programme? Our team is here to help you make the right decision.
            </p>
            <div className="space-y-5">
              <div className="group flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(196,148,50,0.1)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 rounded-2xl bg-forest-deep flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-gold-deep mb-1">Email</p>
                  <a href="mailto:info@globaledulab.com" className="text-[17px] font-bold text-forest-deep hover:text-gold transition-colors">
                    info@globaledulab.com
                  </a>
                </div>
              </div>
              <div className="group flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(196,148,50,0.1)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 rounded-2xl bg-forest-deep flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-gold-deep mb-1">UK</p>
                  <a href="tel:+441223362994" className="text-[17px] font-bold text-forest-deep hover:text-gold transition-colors">
                    +44 (01223) 362994
                  </a>
                </div>
              </div>
              <div className="group flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(10,48,29,0.04)] border border-forest/5 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(196,148,50,0.1)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 rounded-2xl bg-forest-deep flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-gold-deep mb-1">Location</p>
                  <p className="text-[17px] font-bold text-forest-deep">Cambridge Judge Business School, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: image — aligned to top of left content */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(10,48,29,0.12)] relative">
            <img
              src="https://static.wixstatic.com/media/bf78a9_2f15e96675344d8c9a2ef70d1d015137~mv2.jpg"
              alt="Cambridge programme session"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[15px] font-bold uppercase tracking-widest text-gold mb-1">Cambridge Judge Business School</p>
              <p className="text-white text-[15px] font-semibold">Flexible Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─── 17. APPLY NOW ─── */
function ApplyNow() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    designation: '',
    organisation: '',
    phoneCode: '+91',
    phone: '',
    linkedin: '',
    funding: '',
    package: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitToGILP('apply', {
        fullName: form.fullName,
        email: form.email,
        designation: form.designation,
        organisation: form.organisation,
        phone: `${form.phoneCode} ${form.phone}`,
        linkedin: form.linkedin,
        funding: form.funding,
        package: form.package,
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="apply-now" className="bg-[#FAF8F5] py-24 border-t border-forest/5 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-forest/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">
          {/* Left: info */}
          <div>
            <span className="inline-block text-[13px] font-bold uppercase tracking-[0.22em] text-gold-deep bg-gold/10 px-4 py-1.5 rounded-full mb-5">Limited Seats</span>
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-forest-deep mb-4 leading-tight">Apply Now</h2>
            <h3 className="text-[1.15rem] font-bold text-forest/80 mb-2">Global India Leadership Programme at Cambridge</h3>
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-forest/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <span className="text-[14px] text-forest/60">A Cambridge-led, executive leadership journey</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[15px] text-forest/70">In Partnership with</span>
              <img
                src="https://static.wixstatic.com/media/bf78a9_63184a68c2974142a13024cf634f6d33~mv2.png"
                alt="Cambridge Judge Business School"
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_12px_40px_rgba(10,48,29,0.06)] border border-forest/5 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold/80 via-gold to-gold/50" />
              <p className="text-[15.5px] text-forest/80 leading-[1.8] mb-5 font-normal">
                We invite you to submit your application for the Global India Leadership Programme. This is your opportunity to learn from Cambridge Judge Business School faculty, network with peers across the UK–India corridor, and gain cutting-edge insights into leadership, AI, and innovation.
              </p>
              <div className="bg-forest/5 p-4 rounded-xl border border-forest/10">
                <p className="text-[14.5px] font-bold text-forest-deep leading-relaxed">
                  Please note: <span className="font-normal text-forest/80">Submitting an application on this page does not guarantee a confirmed place. Applications are reviewed by our programme team using a selective admission model.</span>
                </p>
              </div>
            </div>
            <div className="space-y-3 pl-2">
              {[
                'Professional achievement — your track record of impact and leadership',
                'Organisational responsibility — the level of influence you hold in your organisation',
                'Alignment with programme objectives — how this experience supports your goals',
                'Space availability — limited seats to ensure a high-quality, personalised experience',
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-forest/5 transition-all duration-300">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-[14px] font-medium text-forest/80 leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[15px] text-forest/80 mt-5 italic">
              Successful applicants will receive a confirmation email within 7 working days with instructions for securing their place by paying the programme fee.
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(10,48,29,0.1)] border border-forest/5 overflow-hidden">
            <div className="bg-forest-deep px-8 py-5">
              <p className="text-white font-bold text-[15px]">You are currently applying to Round 1 application</p>
              <p className="text-white/80 text-[15px] mt-0.5">Please ensure you provide accurate information</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Full name <span className="text-red-400">*</span></label>
                <input
                  type="text" required value={form.fullName} onChange={update('fullName')}
                  className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Email address <span className="text-red-400">*</span></label>
                <input
                  type="email" required value={form.email} onChange={update('email')}
                  className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Current Designation <span className="text-red-400">*</span></label>
                <input
                  type="text" required value={form.designation} onChange={update('designation')}
                  className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Organisation <span className="text-red-400">*</span></label>
                <input
                  type="text" required value={form.organisation} onChange={update('organisation')}
                  className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">
                  Your contact number <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <select value={form.phoneCode} onChange={update('phoneCode')} className="border border-forest/15 rounded-xl px-3 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200 w-24">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input type="tel" required value={form.phone} onChange={update('phone')} className="flex-1 border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200" />
                </div>
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Your LinkedIn profile (if available)</label>
                <input type="url" value={form.linkedin} onChange={update('linkedin')} className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest-deep bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200" />
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Programme funding</label>
                <select value={form.funding} onChange={update('funding')} className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest/80 bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200">
                  <option value="">Choose who is funding your programme participation</option>
                  <option>Self-funded</option>
                  <option>Employer-funded</option>
                  <option>Scholarship / Grant</option>
                </select>
              </div>
              <div>
                <label className="block text-[15px] font-semibold text-forest/70 mb-1.5">Package options <span className="text-red-400">*</span></label>
                <select required value={form.package} onChange={update('package')} className="w-full border border-forest/15 rounded-xl px-4 py-3 text-[15px] text-forest/80 bg-[#FAF8F5] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200">
                  <option value="">Check above for package offerings</option>
                  <option>Package 1 (Basic Programme)</option>
                  <option>Package 2 (Programme + Single Accommodation)</option>
                  <option>Package 3 (Programme + Double Accommodation)</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 bg-forest-deep text-white rounded-xl py-4 text-[15px] font-bold uppercase tracking-[0.15em] hover:bg-forest transition-all duration-200 shadow-md hover:shadow-lg mt-2 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Submitting…' : <>Apply for GILP <ArrowUpRight className="h-4 w-4" /></>}
              </button>
              {status === 'success' && (
                <p className="text-center text-[15px] font-semibold text-forest-deep mt-1">✓ Application received — check your email for confirmation.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-[15px] font-semibold text-red-500 mt-1">Something went wrong. Please try again.</p>
              )}
              <p className="text-center text-[11.5px] text-forest/70 mt-1">Applications reviewed on a rolling basis. Early applications strongly encouraged.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 18. CTA ─── */
function CTA() {
  return (
    <section className="bg-forest-deep py-20 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-white leading-tight mb-3">Let's Get in Touch</h2>
        <p className="text-[15px] text-cream/70 leading-relaxed mb-8 max-w-md mx-auto">“It is not about timing the opportunity. It is about preparing to lead through it.”</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep hover:bg-amber-400 transition-colors duration-200 shadow-lg"
          >
            Apply for GILP <ArrowUpRight className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            search={{ source: "GILP — Bottom CTA" }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-bold uppercase tracking-[0.15em] text-white hover:border-white/50 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}