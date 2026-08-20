const fs = require("fs");

let code = fs.readFileSync("src/routes/ventures.$slug.tsx", "utf8");

const themeFunction = `
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
`;

if (!code.includes("function getThemeStyles")) {
  code = code.replace(
    "function Hero({ v }: { v: Venture }) {",
    themeFunction + "\nfunction Hero({ v }: { v: Venture }) {",
  );
}

// Global replacement - add theme definition
code = code.replaceAll(
  "const isTacto = v.slug === 'project-tacto'",
  "const theme = getThemeStyles(v.slug)\n  const isTacto = v.slug === 'project-tacto'",
);

// Hero Component Replacements
code = code.replaceAll(
  "opacity: isTacto ? 0.18 : 0.22",
  "opacity: isTacto ? 0.18 : v.slug === 'carbonsynq' ? 0.15 : 0.22",
);

let heroOrbsOld = `{isTacto ? (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-teal-500/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        </>
      )}`;
let heroOrbsNew = `<>
        <div className={\`absolute top-0 left-1/4 sm:left-1/3 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] blur-[150px] rounded-full pointer-events-none \${isTacto ? 'bg-violet-600/20' : v.slug === 'carbonsynq' ? 'bg-teal-600/20' : 'bg-blue-600/15'}\`} />
        <div className={\`absolute bottom-0 right-0 sm:right-1/4 w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] blur-[120px] rounded-full pointer-events-none \${isTacto ? 'bg-teal-500/15' : v.slug === 'carbonsynq' ? 'bg-cyan-500/15' : 'bg-indigo-500/10'}\`} />
        {isTacto && <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />}
      </>`;
code = code.replaceAll(heroOrbsOld, heroOrbsNew);

code = code.replaceAll(
  "isTacto\n                  ? 'bg-violet-500/15 border-violet-400/25 text-violet-300'\n                  : 'bg-blue-500/15 border-blue-400/25 text-blue-300'",
  "isTacto ? 'bg-violet-500/15 border-violet-400/25 text-violet-300' : v.slug === 'carbonsynq' ? 'bg-teal-500/15 border-teal-400/25 text-teal-300' : 'bg-blue-500/15 border-blue-400/25 text-blue-300'",
);

code = code.replaceAll(
  "absolute inset-0 rounded-[2.5rem] blur-[60px] scale-110 pointer-events-none ${isTacto ? 'bg-violet-500/20' : 'bg-blue-500/15'}",
  "absolute inset-0 rounded-[2.5rem] blur-[60px] scale-110 pointer-events-none ${isTacto ? 'bg-violet-500/20' : v.slug === 'carbonsynq' ? 'bg-teal-500/20' : 'bg-blue-500/15'}",
);

code = code.replaceAll(
  "isTacto\n                    ? 'bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border-violet-400/20'\n                    : 'bg-gradient-to-br from-white/20 to-white/5 border-white/20'",
  "isTacto ? 'bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border-violet-400/20' : v.slug === 'carbonsynq' ? 'bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border-teal-400/20' : 'bg-gradient-to-br from-white/20 to-white/5 border-white/20'",
);

// MetadataBar
code = code.replaceAll(
  "isTacto\n                  ? 'text-violet-600 bg-violet-50 border-violet-100/60'\n                  : 'text-blue-600 bg-blue-50 border-blue-100/60'",
  "`${theme.text} ${theme.bg} ${theme.border}`",
);

// MainContent
code = code.replaceAll('isTacto ? "bg-violet-50" : "bg-blue-50"', "theme.bg");
code = code.replaceAll('isTacto ? "border-violet-100/80" : "border-blue-100/80"', "theme.border");
code = code.replaceAll('isTacto ? "text-violet-600" : "text-blue-600"', "theme.text");
code = code.replaceAll(
  'isTacto ? "hover:shadow-violet-100/60" : "hover:shadow-blue-100/60"',
  "theme.shadow",
);

code = code.replaceAll(
  "accent={isTacto}",
  "accent={v.slug === 'project-tacto' || v.slug === 'carbonsynq'}",
);
code = code.replaceAll("isTacto ? 'bg-[#100820]' : 'bg-[#080E1C]'", "theme.darkBg");

let progressOrbsOld = `{isTacto ? (
                <>
                  <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/12 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none" />
                </>
              ) : (
                <>
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
                </>
              )}`;
let progressOrbsNew = `<>
                  <div className={\`absolute top-0 right-0 w-72 h-72 blur-[100px] rounded-full pointer-events-none \${theme.orb1}\`} />
                  <div className={\`absolute bottom-0 left-0 w-56 h-56 blur-[80px] rounded-full pointer-events-none \${theme.orb2}\`} />
                </>`;
code = code.replaceAll(progressOrbsOld, progressOrbsNew);

code = code.replaceAll(
  "isTacto\n                          ? 'bg-violet-500/20 border-violet-400/30'\n                          : 'bg-blue-500/20 border-blue-400/30'",
  "`${theme.badgeBg} ${theme.badgeBorder}`",
);
code = code.replaceAll("isTacto ? 'text-violet-400' : 'text-blue-400'", "theme.textAccent");
code = code.replaceAll("isTacto ? 'text-violet-400/60' : 'text-blue-400/60'", "theme.metricsIcon");
code = code.replaceAll("isTacto ? 'ring-violet-100' : 'ring-slate-200'", "theme.ring");
code = code.replaceAll(
  "isTacto ? 'bg-gradient-to-br from-violet-500 to-indigo-600' : 'bg-gradient-to-br from-slate-600 to-slate-800'",
  "`bg-gradient-to-br ${theme.avatar}`",
);
code = code.replaceAll("isTacto ? 'text-violet-600' : 'text-blue-600'", "theme.text");
code = code.replaceAll(
  "isTacto\n                ? 'Student innovators from Galgotias University, India — building technology that breaks down barriers in STEM education.'\n                : 'Supported by advisors and domain experts across AI, enterprise technology and international markets.'",
  "v.slug === 'project-tacto' ? 'Student innovators from Galgotias University, India — building technology that breaks down barriers in STEM education.' : v.slug === 'carbonsynq' ? 'Driving climate tech innovation and AI sustainability analytics.' : 'Supported by advisors and domain experts across AI, enterprise technology and international markets.'",
);

// Roadmap
code = code.replaceAll(
  "{isTacto && (",
  "{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (",
);
code = code.replaceAll(
  "isTacto\n                              ? i === 0 ? 'bg-violet-600' : i === 1 ? 'bg-indigo-600' : i === 2 ? 'bg-blue-600' : 'bg-teal-600'\n                              : 'bg-slate-900'",
  "v.slug === 'project-tacto' ? (i === 0 ? 'bg-violet-600' : i === 1 ? 'bg-indigo-600' : i === 2 ? 'bg-blue-600' : 'bg-teal-600') : v.slug === 'carbonsynq' ? (i === 0 ? 'bg-emerald-600' : i === 1 ? 'bg-teal-600' : i === 2 ? 'bg-cyan-600' : 'bg-teal-700') : 'bg-slate-900'",
);
code = code.replaceAll(
  "isTacto && i === 0 ? 'bg-violet-400' : 'bg-slate-300'",
  "(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && i === 0 ? (v.slug === 'project-tacto' ? 'bg-violet-400' : 'bg-teal-400') : 'bg-slate-300'",
);

// GelsRole
code = code.replaceAll(
  "isTacto ? 'bg-[#18082E]' : 'bg-slate-900'",
  "v.slug === 'project-tacto' ? 'bg-[#18082E]' : v.slug === 'carbonsynq' ? 'bg-[#042A27]' : 'bg-slate-900'",
);
code = code.replaceAll(
  "{isTacto ? (",
  "{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') ? (",
);
code = code.replaceAll(
  '{isTacto && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-indigo-400 to-teal-400" />}',
  "{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.gradient}`} />}",
);

let gelsOrbsOld = `{isTacto ? (
          <>
            <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
          </>
        )}`;
let gelsOrbsNew = `<>
            <div className={\`absolute -top-[20%] -left-[10%] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none \${v.slug === 'project-tacto' ? 'bg-violet-600/10' : v.slug === 'carbonsynq' ? 'bg-teal-600/10' : 'bg-blue-600/5'}\`} />
            <div className={\`absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none \${v.slug === 'project-tacto' ? 'bg-teal-500/5' : v.slug === 'carbonsynq' ? 'bg-cyan-500/5' : 'bg-indigo-500/5'}\`} />
          </>`;
code = code.replaceAll(gelsOrbsOld, gelsOrbsNew);

code = code.replaceAll(
  "isTacto\n                ? 'text-violet-100 bg-violet-500/20 border-violet-500/30'\n                : 'text-amber-100 bg-amber-500/20 border-amber-500/30'",
  "v.slug === 'project-tacto' ? 'text-violet-100 bg-violet-500/20 border-violet-500/30' : v.slug === 'carbonsynq' ? 'text-teal-100 bg-teal-500/20 border-teal-500/30' : 'text-amber-100 bg-amber-500/20 border-amber-500/30'",
);
code = code.replaceAll(
  "isTacto ? 'bg-violet-50 border-violet-100 text-violet-500' : 'bg-amber-50 border-amber-100 text-amber-500'",
  "v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100 text-violet-500' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100 text-teal-600' : 'bg-amber-50 border-amber-100 text-amber-500'",
);
code = code.replaceAll(
  "isTacto ? 'bg-violet-50 border-violet-100' : 'bg-amber-50 border-amber-100'",
  "v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100' : 'bg-amber-50 border-amber-100'",
);
code = code.replaceAll(
  "isTacto ? 'text-violet-500' : 'text-amber-500'",
  "v.slug === 'project-tacto' ? 'text-violet-500' : v.slug === 'carbonsynq' ? 'text-teal-600' : 'text-amber-500'",
);
code = code.replaceAll(
  "isTacto ? 'bg-violet-50 border-violet-100 text-violet-500' : 'bg-blue-50 border-blue-100 text-blue-500'",
  "v.slug === 'project-tacto' ? 'bg-violet-50 border-violet-100 text-violet-500' : v.slug === 'carbonsynq' ? 'bg-teal-50 border-teal-100 text-teal-600' : 'bg-blue-50 border-blue-100 text-blue-500'",
);
code = code.replaceAll(
  "isTacto ? 'bg-violet-50/80 border-violet-100 text-violet-600' : 'bg-slate-50 border-slate-100 text-slate-600'",
  "v.slug === 'project-tacto' ? 'bg-violet-50/80 border-violet-100 text-violet-600' : v.slug === 'carbonsynq' ? 'bg-teal-50/80 border-teal-100 text-teal-600' : 'bg-slate-50 border-slate-100 text-slate-600'",
);
code = code.replaceAll(
  "isTacto\n                ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-200'\n                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200'",
  "v.slug === 'project-tacto' ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-200' : v.slug === 'carbonsynq' ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200'",
);

// Tags
let tagsOld = `{isTacto && (
                <div className="flex flex-wrap gap-2">
                  {['SDG 4 Aligned', 'Open Source', 'Inclusive EdTech', 'Student Innovation'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-[11px] font-bold text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}`;
let tagsNew = `{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (
                <div className="flex flex-wrap gap-2">
                  {(v.slug === 'project-tacto' 
                    ? ['SDG 4 Aligned', 'Open Source', 'Inclusive EdTech', 'Student Innovation']
                    : ['Scope 1, 2, 3', 'Net Zero', 'Climate Tech', 'ESG Compliance']
                  ).map((tag) => (
                    <span key={tag} className={\`px-3 py-1 rounded-full text-[11px] font-bold \${theme.badgeBg} \${theme.badgeBorder} \${theme.badgeText}\`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}`;
code = code.replaceAll(tagsOld, tagsNew);

// BottomCTA
code = code.replaceAll(
  "isTacto\n                  ? 'bg-violet-500/15 border-violet-500/20 text-violet-400'\n                  : 'bg-blue-500/15 border-blue-500/20 text-blue-400'",
  "`${theme.iconBg} ${theme.iconBorder} ${theme.textAccent}`",
);
code = code.replaceAll(
  "isTacto ? 'bg-violet-50 border-violet-100 text-violet-600' : 'bg-slate-50 border-slate-200 text-slate-700'",
  "v.slug === 'saivyy' ? 'bg-slate-50 border-slate-200 text-slate-700' : `${theme.bg} ${theme.border} ${theme.text}`",
);
code = code.replaceAll(
  "isTacto\n                  ? 'If you are an investor, NGO, educational institution, or domain expert in accessible technology, we would love to connect and facilitate a meaningful introduction.'\n                  : 'If you are an investor, corporate partner, university or domain expert, we would love to connect and facilitate a meaningful introduction.'",
  "v.slug === 'project-tacto' ? 'If you are an investor, NGO, educational institution, or domain expert in accessible technology, we would love to connect and facilitate a meaningful introduction.' : v.slug === 'carbonsynq' ? 'If you are a corporate pilot partner, ESG expert, or climate investor, we would love to connect and facilitate a meaningful introduction.' : 'If you are an investor, corporate partner, university or domain expert, we would love to connect and facilitate a meaningful introduction.'",
);
code = code.replaceAll(
  "isTacto\n                  ? 'bg-violet-600 hover:bg-violet-500'\n                  : 'bg-slate-900 hover:bg-slate-800'",
  "`${theme.bgSolid} ${theme.bgHover}`",
);

fs.writeFileSync("src/routes/ventures.$slug.tsx", code);
