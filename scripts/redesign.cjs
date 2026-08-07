const fs = require('fs');

const f = 'src/routes/ventures.$slug.tsx';
let content = fs.readFileSync(f, 'utf8');

// Find where function Hero begins
const heroIndex = content.indexOf('function Hero({ v }: { v: Venture }) {');
if (heroIndex === -1) {
  console.log('Hero function not found');
  process.exit(1);
}

// Top part of the file remains intact
const topPart = content.slice(0, heroIndex);

const newUI = unction Hero({ v }: { v: Venture }) {
  const brandColor = v.color || 'from-slate-900 via-blue-950 to-slate-900';
  
  return (
    <section className={\	ext-white pt-16 pb-32 relative overflow-hidden bg-gradient-to-br \ + brandColor}>
      {/* Mesh grid overlay for tech feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Decorative Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/60 mb-12">
          <Link to="/global-ventures" className="hover:text-white transition-colors">Global Ventures</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">Profile</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[13px] font-bold uppercase tracking-widest text-white/90 mb-6 backdrop-blur-md">
              {v.track}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              {v.name}
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-white/90 leading-tight max-w-2xl mb-8">
              {v.tagline.split('.')[0]}<span className="text-blue-400 italic">.</span>
            </p>
            <p className="text-[16px] text-white/70 leading-relaxed max-w-2xl font-light">
              {v.intro}
            </p>
          </div>
          
          <div className="lg:col-span-4 relative flex flex-col items-center">
            {/* Premium Logo Shield */}
            <div className="w-40 h-40 md:w-56 md:h-56 mb-8 relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-white/5 rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_100px_rgba(59,130,246,0.3)] transition-all duration-500" />
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] opacity-50" />
              <div className="relative z-10 text-white scale-125 md:scale-150">
                {v.logo}
              </div>
            </div>

            {/* Interested Card (Glassmorphic) */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl text-white w-full max-w-sm">
              <h3 className="text-[16px] font-bold mb-2">Explore Collaboration</h3>
              <p className="text-[14px] text-white/60 mb-6 leading-relaxed">Connect directly with the founders to discuss pilots, partnerships, and integrations.</p>
              
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-xl py-3 text-[14px] font-bold mb-3 hover:bg-slate-100 transition-colors">
                Request Introduction <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white/5 text-white border border-white/20 rounded-xl py-3 text-[14px] font-bold hover:bg-white/10 transition-colors">
                Request Venture Brief <Download className="h-4 w-4" />
              </Link>
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
    <div className="relative z-20 -mt-10 mx-auto max-w-7xl px-6">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-xl rounded-[2rem] p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 lg:p-6">
              <div className="text-blue-600 bg-blue-50 border border-blue-100 p-2.5 rounded-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.l}</p>
                <p className="text-[14px] font-bold text-slate-800 leading-snug">{item.v}</p>
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
    { icon: <Target className="h-6 w-6 text-blue-600" />, title: "The Problem", desc: v.problem },
    { icon: <Brain className="h-6 w-6 text-indigo-600" />, title: "Our Solution", desc: v.solution },
    { icon: <Globe2 className="h-6 w-6 text-teal-600" />, title: "Why It Matters", desc: v.matters },
    { icon: <Shield className="h-6 w-6 text-purple-600" />, title: "Our Impact", desc: v.impact },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-4 w-full">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="space-y-8">
          
          {/* Top 4 Cards - Bento Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {problemCards.map((c, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {c.icon}
                </div>
                <h4 className="text-[18px] font-bold text-slate-900 mb-3">{c.title}</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1 mb-6">{c.desc}</p>
                <Link to="/contact" className="text-[14px] font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-all mt-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* Progress & Team Split */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Progress to Date */}
            <div className="bg-slate-950 rounded-3xl p-8 shadow-2xl text-white flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 blur-[60px] rounded-full pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-8 relative z-10 text-white">Progress to Date</h3>
              <div className="space-y-5 mb-8 relative z-10">
                {v.progress.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                      <CheckCircle2 className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-[14.5px] text-slate-300 leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-auto relative z-10 backdrop-blur-xl">
                <h4 className="text-[14px] font-bold text-white mb-5">
                  Key Metrics <span className="font-normal text-slate-400">(Pilot Stage)</span>
                </h4>
                <div className="space-y-4">
                  {v.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-[14px] text-slate-400 font-medium">{m.l}</span>
                      <div className="text-right">
                        <span className="text-[16px] font-bold text-white">{m.v}</span>
                        {m.subtitle && <p className="text-[12px] text-slate-500 leading-none mt-1">{m.subtitle}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founding Team */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Founding Team</h3>
              <div className="space-y-8 flex-1">
                {v.team.map((member, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                      {member.img ? (
                        <img src={member.img} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">{member.name.charAt(0)}</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-slate-900">{member.name}</h4>
                      <p className="text-[14px] font-semibold text-blue-600 mb-2">{member.role}</p>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[14px] text-slate-500 italic mb-4">Advisors and domain experts from security, AI and enterprise technology.</p>
                <Link to="/team" className="text-[14px] font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors">
                  View Full Team <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Roadmap</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-6 left-12 right-12 h-px border-t-2 border-dashed border-slate-200 -z-10" />
              {v.roadmap.map((stage, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-5 relative z-10">
                    {stage.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-4">{stage.period}</h4>
                  <ul className="text-left w-full space-y-2">
                    {stage.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] text-slate-600 leading-relaxed">
                        <CheckCircle2 className="h-3 w-3 text-blue-500 shrink-0 mt-1" />
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
        <div className="space-y-5">
          {/* Venture Highlights */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Venture Highlights</h3>
            <div className="space-y-4">
              {v.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Zap className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-[14.5px] text-slate-700 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* We are seeking */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Collaboration Areas</h3>
            <div className="space-y-6">
              {v.seeking.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5">{s.t}</h4>
                    <p className="text-[14px] text-slate-600 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="w-full mt-8 bg-slate-900 text-white rounded-xl py-3.5 text-[14px] font-bold hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              Explore Opportunities <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

function GelsRole({ v }: { v: Venture }) {
  return (
    <section className="bg-slate-950 text-white py-16 mt-8 mx-auto max-w-7xl px-6 lg:px-12 rounded-[2.5rem] w-full mb-12 shadow-2xl relative overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative grid md:grid-cols-2 gap-16 items-center z-10">
        <div>
          <span className="text-[13px] font-bold uppercase tracking-widest text-blue-400 mb-4 block">Strategic Support</span>
          <h2 className="text-3xl font-bold mb-6">GEL's Role in {v.name}'s Journey</h2>
          <p className="text-[16px] text-white/70 leading-relaxed mb-8">
            Through the Global Ventures Programme, GEL supports {v.name} with venture strategy, international positioning, expert mentoring and access to investors, researchers and strategic partners. Our objective is to help the venture scale globally through the UK and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          {[
            "Venture Strategy & Growth Support",
            "Investor Access & Fundraising Guidance",
            "UK Market Entry & International Pathways",
            "Mentorship from Industry & Academia",
            "Ecosystem & Partnership Development"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                <CheckCircle2 className="h-3 w-3 text-blue-400" />
              </div>
              <span className="text-[14px] font-medium leading-relaxed text-white/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA({ v }: { v: Venture }) {
  return (
    <section className="bg-white border-t border-slate-200 py-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Interested in collaborating with {v.name}?</h2>
            <p className="text-[15px] text-slate-600 max-w-xl">
              If you are an investor, corporate, university or expert interested in collaborating, we would love to connect and facilitate an introduction.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
            Request Introduction <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-xl text-[15px] font-bold hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2">
            Venture Brief <Download className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
;

fs.writeFileSync(f, topPart + newUI);
