const fs = require("fs");

const file = "src/routes/ventures.$slug.tsx";
let content = fs.readFileSync(file, "utf8");

const newMainContent = `function MainContent({ v }: { v: Venture }) {
  const cards = [
    { icon: <Target className="h-5 w-5" />, bg: "bg-red-50", border: "border-red-100", iconColor: "text-red-500", hoverBorder: "hover:border-red-200", title: "The Problem", desc: v.problem },
    { icon: <Brain className="h-5 w-5" />, bg: "bg-blue-50", border: "border-blue-100", iconColor: "text-blue-600", hoverBorder: "hover:border-blue-200", title: "Our Solution", desc: v.solution },
    { icon: <Globe2 className="h-5 w-5" />, bg: "bg-teal-50", border: "border-teal-100", iconColor: "text-teal-600", hoverBorder: "hover:border-teal-200", title: "Why It Matters", desc: v.matters },
    { icon: <Shield className="h-5 w-5" />, bg: "bg-violet-50", border: "border-violet-100", iconColor: "text-violet-600", hoverBorder: "hover:border-violet-200", title: "Our Impact", desc: v.impact },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-12 w-full">
      {/* 
        Modified Grid:
        - Mobile/Tablet: 1 column
        - Large (lg, 1024px+): 2 columns (1fr + 300px sidebar)
        - Extra Large (xl, 1280px+): 2 columns (1fr + 336px sidebar)
      */}
      <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_336px] gap-8 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-10 min-w-0">

          {/* Overview */}
          <div id="overview" className="scroll-mt-48">
            <SectionHeader label="The Opportunity" id="the-opportunity" />
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <div key={i} className={\`group bg-white rounded-2xl border border-slate-200 \${c.hoverBorder} hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col\`}>
                  <div className={\`w-10 h-10 rounded-xl \${c.bg} border \${c.border} \${c.iconColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shrink-0\`}>
                    {c.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-2.5 leading-tight">{c.title}</h4>
                  <p className="text-[13.5px] text-slate-500 leading-[1.8] flex-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div id="progress" className="scroll-mt-48">
            <SectionHeader label="Progress to Date" />
            <div className="bg-[#080E1C] rounded-2xl overflow-hidden relative shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10 p-6 sm:p-8">
                <div className="space-y-4 mb-8">
                  {v.progress.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-[14px] text-slate-300/90 leading-[1.75]">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.06] pt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 mb-5">Key Metrics</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {v.metrics.map((m, i) => (
                      <div key={i} className="bg-white/[0.035] border border-white/[0.06] rounded-xl px-3 py-4 text-center hover:bg-white/[0.055] transition-colors">
                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-2">{m.v}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">{m.l}</div>
                        {m.subtitle && <div className="text-[10px] text-slate-600 mt-1">{m.subtitle}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div id="team" className="scroll-mt-48">
            <SectionHeader label="Founding Team" />
            <div className="grid sm:grid-cols-2 gap-4">
              {v.team.map((member, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 px-6 pt-6 pb-5 flex items-center gap-4 border-b border-slate-100">
                    <div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden shrink-0 border-2 border-white shadow-md ring-1 ring-slate-200">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 text-xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-slate-900 leading-tight">{member.name}</h4>
                      <p className="text-[11px] font-bold text-blue-600 mt-1 uppercase tracking-wide">{member.role}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[13.5px] text-slate-500 leading-[1.8]">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] text-slate-400 italic mt-4 text-center leading-relaxed">
              Supported by advisors and domain experts across AI, enterprise technology and international markets.
            </p>
          </div>

          {/* Roadmap */}
          <div id="roadmap" className="scroll-mt-48">
            <SectionHeader label="Roadmap" />
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="relative">
                <div className="hidden md:block absolute top-[22px] left-[22px] right-[22px] h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {v.roadmap.map((stage, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <div className="relative z-10 flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shrink-0 border-2 border-white">
                          {stage.icon}
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden md:block">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h4 className="text-[14px] font-bold text-slate-800 mb-3 leading-tight">{stage.period}</h4>
                      <ul className="space-y-2">
                        {stage.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-[13px] text-slate-500 leading-[1.7]">
                            <span className="mt-2 w-1 h-1 bg-slate-400 rounded-full shrink-0" />
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

        {/* RIGHT SIDEBAR */}
        <div className="w-full mt-10 lg:mt-0 lg:sticky lg:top-[168px] flex flex-col gap-5">

          {/* Quick Actions */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500/10 blur-[70px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/[0.08] blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-[16px] sm:text-[18px] font-bold mb-2">Collaborate with {v.name.split(' ')[0]}</h3>
              <p className="text-[13.5px] text-white/50 mb-6 leading-relaxed max-w-sm">
                Connect with the founding team to explore pilots, partnerships, and investment opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-xl py-3.5 text-[14px] font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
                  Request Introduction <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white/[0.08] text-white border border-white/15 rounded-xl py-3.5 text-[14px] font-semibold hover:bg-white/[0.13] transition-all">
                  <Download className="h-4 w-4" /> Venture Brief
                </Link>
              </div>

              <div className="flex items-start gap-2.5 mt-6 pt-5 border-t border-white/[0.08]">
                <Lock className="h-4 w-4 text-white/30 shrink-0 mt-0.5" />
                <p className="text-[12px] text-white/30 leading-relaxed">
                  Introductions are subject to relevance and founder approval.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Venture Highlights */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Zap className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">Venture Highlights</h3>
              </div>
              <div className="space-y-4">
                {v.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-2.5 w-2.5 text-amber-500" />
                    </div>
                    <span className="text-[13.5px] text-slate-600 leading-[1.6]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Areas */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm" id="collaboration">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Target className="h-4 w-4 text-blue-500" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">Collaboration Areas</h3>
              </div>
              <div className="space-y-5">
                {v.seeking.map((s, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0 shadow-sm">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-900 leading-tight mb-1">{s.t}</h4>
                      <p className="text-[13px] text-slate-500 leading-[1.6]">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="w-full mt-6 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl py-3 text-[13.5px] font-bold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2">
                Explore All Opportunities <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
`;

const startIndex = content.indexOf("function MainContent({ v }: { v: Venture }) {");
const endIndex = content.indexOf("function GelsRole({ v }: { v: Venture }) {");

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newMainContent + content.substring(endIndex);
  fs.writeFileSync(file, content, "utf8");
  console.log("Successfully replaced MainContent!");
} else {
  console.log("Error: Could not find markers.", { startIndex, endIndex });
}
