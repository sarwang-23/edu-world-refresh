import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  Leaf,
  Globe2,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  ArrowUpRight,
  TrendingUp,
  Users,
  Handshake,
  Lightbulb,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/ventures/carbonsynq')({
  component: CarbonSynqPage,
})

function CarbonSynqPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-900 selection:bg-emerald-500/30">
      
      {/* ── NAVIGATION ── */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-14 pb-8">
        <Link
          to="/global-ventures"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Global Ventures
        </Link>
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-32">
        {/* ── HERO SECTION ── */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Leaf className="h-8 w-8 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-widest mb-1">
                    Climate Tech • SaaS
                  </span>
                  <p className="text-slate-500 text-sm font-medium">Noida, India • Founded 2026</p>
                </div>
              </div>

              <h1 className="text-5xl md:text-[5rem] font-bold tracking-tight mb-8 text-slate-900 leading-[1.05]">
                CarbonSynq <span className="text-emerald-600">Earth</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light">
                AI-powered carbon accounting, verification, and trading for a net-zero economy.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.carbonsynqearth.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-3.5 text-[15px] font-medium hover:bg-slate-800 transition-all shadow-md"
                >
                  Visit Website <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/carbonsynqearth-india/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 text-slate-700 px-8 py-3.5 text-[15px] font-medium hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            {/* Value Prop Graphic Box */}
            <div className="hidden md:flex flex-col justify-end p-8 bg-emerald-900 text-white rounded-[2rem] w-full max-w-sm aspect-[4/5] relative overflow-hidden shadow-2xl shadow-emerald-900/20">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe2 className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 leading-tight">Driving credible climate action through data.</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Combining AI-driven carbon accounting with an integrated carbon credit marketplace and satellite plus blockchain-based MRV.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE DIVIDE (Problem / Solution) ── */}
        <section className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">The Problem</h3>
            </div>
            <p className="text-slate-600 text-[16px] leading-[1.8]">
              Organisations face growing pressure to measure and report their carbon footprint accurately, but existing processes are manual, fragmented and hard to verify. This makes carbon accounting slow, error-prone and difficult to trust — creating barriers to credible climate action, regulatory compliance and participation in carbon markets.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Our Solution</h3>
              </div>
              <p className="text-slate-600 text-[16px] leading-[1.8]">
                CarbonSynq lets organisations automate emissions measurement, verify data with greater confidence, and connect directly to a transparent, trustworthy carbon marketplace — all on one platform. This is powered by our proprietary blend of AI-driven accounting and satellite + blockchain-based MRV.
              </p>
            </div>
          </div>
        </section>

        {/* ── BENTO GRID ── */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Highlights */}
          <div className="md:col-span-8 bg-white border border-slate-200 rounded-[2rem] p-10 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Platform Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
              {[
                { title: "AI-Powered Accounting", desc: "Satellite and blockchain-based MRV for verifiable emissions data.", icon: Cpu },
                { title: "Integrated Marketplace", desc: "Direct carbon credit marketplace connecting accounting with trading.", icon: Globe2 },
                { title: "Accelerator Backed", desc: "Selected for the Galgotias College of Engineering & Technology startup accelerator.", icon: Zap },
                { title: "Global Recognition", desc: "Presented at GSDC 2026 in Jakarta & featured on Republic TV.", icon: TrendingUp },
              ].map((h, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5">{h.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="md:col-span-4 bg-slate-900 rounded-[2rem] p-10 md:p-12 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-8">Key Metrics</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹5 Crore</div>
                  <div className="text-slate-400 text-sm font-medium">Valuation</div>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹20 Lakh</div>
                  <div className="text-slate-400 text-sm font-medium">Funding Raised</div>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10</div>
                  <div className="text-slate-400 text-sm font-medium">Team Size</div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact/Why it Matters */}
          <div className="md:col-span-12 bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-6">Why It Matters</h3>
              <p className="text-2xl font-medium leading-[1.6] text-slate-900">
                "Accurate, verifiable carbon accounting is foundational to credible climate action, regulatory compliance, and trust in carbon markets."
              </p>
              <p className="mt-6 text-slate-500 leading-relaxed">
                Solving this helps organisations reduce risk, unlock market participation, and make measurable progress toward net-zero commitments.
              </p>
            </div>
            <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center min-h-[300px]">
            </div>
          </div>

        </section>

        {/* ── THE TEAM ── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Founding Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-8 flex items-center gap-6 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-0.5">Pushkar Singh</h4>
                <p className="text-emerald-600 text-sm font-semibold mb-2">Founder & CEO</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  B.Tech Electrical Engineering student at Galgotias University, leading the venture through the Galgotias accelerator programme.
                </p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-8 flex items-center gap-6 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-0.5">Sarwang Agarwal</h4>
                <p className="text-emerald-600 text-sm font-semibold mb-2">Co-Founder</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Driving product innovation and strategic development to scale CarbonSynq's MRV technology.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-100 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-slate-600 text-[15px] leading-relaxed">
              <strong className="text-slate-900">Advisory & Expertise:</strong> Guided by Mentor Mr. Rachit Mathur. Our team combines technical depth in AI and climate data with hands-on experience building and scaling CarbonSynq through a competitive accelerator programme.
            </p>
          </div>
        </section>

        {/* ── COLLABORATION ── */}
        <section>
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 md:p-16 text-center shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Collaboration Opportunities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              CarbonSynq welcomes collaboration with accelerators, universities, industry bodies and public sector organisations to advance credible carbon accounting.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Pilot Partners</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Seeking pilot collaborations with enterprises to validate and deploy CarbonSynq's AI carbon accounting and MRV platform.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <Handshake className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Strategic Partners</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Looking to partner with carbon registries, satellite data providers, or enterprise integration partners.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Mentors & Experts</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Seeking mentors with expertise in climate finance, carbon markets, enterprise sales, and regulatory compliance.</p>
              </div>
            </div>
            
            <div className="mt-16 pt-10 border-t border-slate-100">
              <p className="text-slate-500 mb-6">Interested in working together?</p>
              <Link 
                to="/contact" 
                search={{ source: "CarbonSynq Collaboration" }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-10 py-4 text-[15px] font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                Connect with CarbonSynq <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}
