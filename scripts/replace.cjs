const fs = require('fs');

let code = fs.readFileSync('src/routes/ventures.$slug.tsx', 'utf8');

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
      text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100/60', textAccent: 'text-emerald-400',
      gradient: 'from-emerald-600 via-teal-500 to-cyan-400', bgHover: 'hover:bg-emerald-500', bgSolid: 'bg-emerald-600',
      shadow: 'hover:shadow-emerald-100/60', ring: 'ring-emerald-100', iconBorder: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/15', badgeBg: 'bg-emerald-500/10', badgeBorder: 'border-emerald-500/20', badgeText: 'text-emerald-300',
      darkBg: 'bg-[#06170d]', orb1: 'bg-emerald-600/12', orb2: 'bg-cyan-500/10', metricsIcon: 'text-emerald-400/60',
      avatar: 'from-emerald-500 to-teal-600',
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

if (!code.includes('function getThemeStyles')) {
  code = code.replace('function MetadataBar({ v }: { v: Venture }) {', themeFunction + '\nfunction MetadataBar({ v }: { v: Venture }) {');
}

// Basic setups
code = code.replace(/const isTacto = v\.slug === 'project-tacto'/g, 'const theme = getThemeStyles(v.slug)');

// Direct regex replacements
code = code.replace(/isTacto\s*\?\s*'text-violet-600 bg-violet-50 border-violet-100\/60'\s*:\s*'text-blue-600 bg-blue-50 border-blue-100\/60'/g, '`${theme.text} ${theme.bg} ${theme.border}`');
code = code.replace(/accent=\{isTacto\}/g, 'accent={v.slug === \'project-tacto\' || v.slug === \'carbonsynq\'}');
code = code.replace(/isTacto \? "bg-violet-50" : "bg-blue-50"/g, 'theme.bg');
code = code.replace(/isTacto \? "border-violet-100\/80" : "border-blue-100\/80"/g, 'theme.border');
code = code.replace(/isTacto \? "text-violet-600" : "text-blue-600"/g, 'theme.text');
code = code.replace(/isTacto \? "hover:shadow-violet-100\/60" : "hover:shadow-blue-100\/60"/g, 'theme.shadow');
code = code.replace(/isTacto \? 'bg-\\[#100820\\]' : 'bg-\\[#080E1C\\]'/g, 'theme.darkBg');

// Orbs replacement
let oldOrbs = `{isTacto ? (
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
let newOrbs = `<>
                  <div className={\`absolute top-0 right-0 w-72 h-72 blur-[100px] rounded-full pointer-events-none \${theme.orb1}\`} />
                  <div className={\`absolute bottom-0 left-0 w-56 h-56 blur-[80px] rounded-full pointer-events-none \${theme.orb2}\`} />
                </>`;
code = code.replace(oldOrbs, newOrbs);

// Continuing regex replacements
code = code.replace(/isTacto\s*\?\s*'bg-violet-500\/20 border-violet-400\/30'\s*:\s*'bg-blue-500\/20 border-blue-400\/30'/g, '`${theme.badgeBg} ${theme.badgeBorder}`');
code = code.replace(/isTacto \? 'text-violet-400' : 'text-blue-400'/g, 'theme.textAccent');
code = code.replace(/isTacto \? 'text-violet-400\/60' : 'text-blue-400\/60'/g, 'theme.metricsIcon');
code = code.replace(/isTacto \? 'ring-violet-100' : 'ring-slate-200'/g, 'theme.ring');
code = code.replace(/isTacto \? 'bg-gradient-to-br from-violet-500 to-indigo-600' : 'bg-gradient-to-br from-slate-600 to-slate-800'/g, '`bg-gradient-to-br ${theme.avatar}`');
code = code.replace(/isTacto \? 'text-violet-600' : 'text-blue-600'/g, 'theme.text');

// Text strings
let oldText1 = "isTacto\n                ? 'Student innovators from Galgotias University, India — building technology that breaks down barriers in STEM education.'\n                : 'Supported by advisors and domain experts across AI, enterprise technology and international markets.'";
let newText1 = "v.slug === 'project-tacto' ? 'Student innovators from Galgotias University, India — building technology that breaks down barriers in STEM education.' : v.slug === 'carbonsynq' ? 'Driving climate tech innovation and AI sustainability analytics.' : 'Supported by advisors and domain experts across AI, enterprise technology and international markets.'";
code = code.replace(oldText1, newText1);

let oldText2 = "isTacto\n                  ? ' Our mission is to help TACTO reach every visually impaired learner across the globe.'\n                  : ' Our objective is to help the venture scale globally through the UK and beyond.'";
let newText2 = "v.slug === 'project-tacto' ? ' Our mission is to help TACTO reach every visually impaired learner across the globe.' : v.slug === 'carbonsynq' ? ' Our mission is to scale CarbonSynq\\'s platform across global markets and establish it as the standard for AI-driven carbon accounting.' : ' Our objective is to help the venture scale globally through the UK and beyond.'";
code = code.replace(oldText2, newText2);

// Tags replacement
let oldTags = `{isTacto && (
                <div className="flex flex-wrap gap-2">
                  {['SDG 4 Aligned', 'Open Source', 'Inclusive EdTech', 'Student Innovation'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-[11px] font-bold text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}`;
let newTags = `{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && (
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
code = code.replace(oldTags, newTags);

// Bottom CTA and more
code = code.replace(/isTacto\s*\?\s*'bg-violet-500\/15 border-violet-500\/20 text-violet-400'\s*:\s*'bg-blue-500\/15 border-blue-500\/20 text-blue-400'/g, '`${theme.iconBg} ${theme.iconBorder} ${theme.textAccent}`');
code = code.replace(/isTacto \? 'bg-violet-50 border-violet-100 text-violet-600' : 'bg-slate-50 border-slate-200 text-slate-700'/g, 'v.slug === \'saivyy\' ? \'bg-slate-50 border-slate-200 text-slate-700\' : `${theme.bg} ${theme.border} ${theme.text}`');

let oldText3 = "isTacto\n                  ? 'If you are an investor, NGO, educational institution, or domain expert in accessible technology, we would love to connect and facilitate a meaningful introduction.'\n                  : 'If you are an investor, corporate partner, university or domain expert, we would love to connect and facilitate a meaningful introduction.'";
let newText3 = "v.slug === 'project-tacto' ? 'If you are an investor, NGO, educational institution, or domain expert in accessible technology, we would love to connect and facilitate a meaningful introduction.' : v.slug === 'carbonsynq' ? 'If you are a corporate pilot partner, ESG expert, or climate investor, we would love to connect and facilitate a meaningful introduction.' : 'If you are an investor, corporate partner, university or domain expert, we would love to connect and facilitate a meaningful introduction.'";
code = code.replace(oldText3, newText3);

code = code.replace(/isTacto\s*\?\s*'bg-violet-600 hover:bg-violet-500'\s*:\s*'bg-slate-900 hover:bg-slate-800'/g, '`${theme.bgSolid} ${theme.bgHover}`');

// Fix Hero gradients
code = code.replace(
  /{isTacto && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-teal-400" \/>}/g, 
  `{(v.slug === 'project-tacto' || v.slug === 'carbonsynq') && <div className={\`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r \${theme.gradient}\`} />}`
);


fs.writeFileSync('src/routes/ventures.$slug.tsx', code);
