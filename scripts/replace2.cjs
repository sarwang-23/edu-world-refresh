const fs = require("fs");

let code = fs.readFileSync("src/routes/ventures.$slug.tsx", "utf8");

// Line 639
code = code.replace(/isTacto \? 'bg-\\[#100820\\]' : 'bg-\\[#080E1C\\]'/g, "theme.darkBg");

// Roadmap
code = code.replace(
  /\{isTacto && \(/g,
  "{(v.slug === \\'project-tacto\\' || v.slug === \\'carbonsynq\\') && (",
);
code = code.replace(
  /isTacto\s*\?\s*i === 0 \? 'bg-violet-600' : i === 1 \? 'bg-indigo-600' : i === 2 \? 'bg-blue-600' : 'bg-teal-600'\s*:\s*'bg-slate-900'/g,
  "v.slug === \\'project-tacto\\' ? (i === 0 ? \\'bg-violet-600\\' : i === 1 ? \\'bg-indigo-600\\' : i === 2 ? \\'bg-blue-600\\' : \\'bg-teal-600\\') : v.slug === \\'carbonsynq\\' ? (i === 0 ? \\'bg-emerald-600\\' : i === 1 ? \\'bg-teal-600\\' : i === 2 ? \\'bg-cyan-600\\' : \\'bg-teal-700\\') : \\'bg-slate-900\\'",
);
code = code.replace(
  /isTacto && i === 0 \? 'bg-violet-400' : 'bg-slate-300'/g,
  "(v.slug === \\'project-tacto\\' || v.slug === \\'carbonsynq\\') && i === 0 ? (v.slug === \\'project-tacto\\' ? \\'bg-violet-400\\' : \\'bg-teal-400\\') : \\'bg-slate-300\\'",
);

// Value Proposition
code = code.replace(
  /isTacto \? 'bg-\\[#18082E\\]' : 'bg-slate-900'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-[#18082E]\\' : v.slug === \\'carbonsynq\\' ? \\'bg-[#042A27]\\' : \\'bg-slate-900\\'",
);
code = code.replace(
  /\{isTacto \? \(/g,
  "{(v.slug === \\'project-tacto\\' || v.slug === \\'carbonsynq\\') ? (",
);
code = code.replace(
  /\{isTacto && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-indigo-400 to-teal-400" \/>\}/g,
  "{(v.slug === \\'project-tacto\\' || v.slug === \\'carbonsynq\\') && <div className={\\`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r \\${theme.gradient}\\`} />}",
);
code = code.replace(
  /isTacto\s*\?\s*'text-violet-100 bg-violet-500\/20 border-violet-500\/30'\s*:\s*'text-amber-100 bg-amber-500\/20 border-amber-500\/30'/g,
  "v.slug === \\'project-tacto\\' ? \\'text-violet-100 bg-violet-500/20 border-violet-500/30\\' : v.slug === \\'carbonsynq\\' ? \\'text-teal-100 bg-teal-500/20 border-teal-500/30\\' : \\'text-amber-100 bg-amber-500/20 border-amber-500/30\\'",
);
code = code.replace(
  /isTacto \? 'bg-violet-50 border-violet-100 text-violet-500' : 'bg-amber-50 border-amber-100 text-amber-500'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-violet-50 border-violet-100 text-violet-500\\' : v.slug === \\'carbonsynq\\' ? \\'bg-teal-50 border-teal-100 text-teal-600\\' : \\'bg-amber-50 border-amber-100 text-amber-500\\'",
);
code = code.replace(
  /isTacto \? 'bg-violet-50 border-violet-100' : 'bg-amber-50 border-amber-100'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-violet-50 border-violet-100\\' : v.slug === \\'carbonsynq\\' ? \\'bg-teal-50 border-teal-100\\' : \\'bg-amber-50 border-amber-100\\'",
);
code = code.replace(
  /isTacto \? 'text-violet-500' : 'text-amber-500'/g,
  "v.slug === \\'project-tacto\\' ? \\'text-violet-500\\' : v.slug === \\'carbonsynq\\' ? \\'text-teal-600\\' : \\'text-amber-500\\'",
);
code = code.replace(
  /isTacto \? 'bg-violet-50 border-violet-100 text-violet-500' : 'bg-blue-50 border-blue-100 text-blue-500'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-violet-50 border-violet-100 text-violet-500\\' : v.slug === \\'carbonsynq\\' ? \\'bg-teal-50 border-teal-100 text-teal-600\\' : \\'bg-blue-50 border-blue-100 text-blue-500\\'",
);
code = code.replace(
  /isTacto \? 'bg-violet-50\/80 border-violet-100 text-violet-600' : 'bg-slate-50 border-slate-100 text-slate-600'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-violet-50/80 border-violet-100 text-violet-600\\' : v.slug === \\'carbonsynq\\' ? \\'bg-teal-50/80 border-teal-100 text-teal-600\\' : \\'bg-slate-50 border-slate-100 text-slate-600\\'",
);
code = code.replace(
  /isTacto\s*\?\s*'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-200'\s*:\s*'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200'/g,
  "v.slug === \\'project-tacto\\' ? \\'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-200\\' : v.slug === \\'carbonsynq\\' ? \\'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200\\' : \\'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200\\'",
);

// GelsRole
let oldGlow = `{isTacto ? (
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
let newGlow = `<>
            <div className={\`absolute -top-[20%] -left-[10%] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none \${v.slug === 'project-tacto' ? 'bg-violet-600/10' : v.slug === 'carbonsynq' ? 'bg-teal-600/10' : 'bg-blue-600/5'}\`} />
            <div className={\`absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none \${v.slug === 'project-tacto' ? 'bg-teal-500/5' : v.slug === 'carbonsynq' ? 'bg-cyan-500/5' : 'bg-indigo-500/5'}\`} />
          </>`;
code = code.replace(oldGlow, newGlow);

fs.writeFileSync("src/routes/ventures.$slug.tsx", code);
