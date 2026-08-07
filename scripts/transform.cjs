const fs = require('fs');
const file = 'src/routes/ventures.$slug.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add heroImg to Venture type
content = content.replace(
  'metrics: { l: string; v: string; subtitle?: string }[]',
  'metrics: { l: string; v: string; subtitle?: string }[]\n  heroImg?: string'
);

// 2. Add heroImg and images to saivyy in VENTURES
content = content.replace(
  logo: <Cpu className="h-12 w-12 text-white" />, color: 'from-slate-900 via-blue-950 to-slate-900',,
  logo: <Cpu className="h-12 w-12 text-white" />, color: 'from-slate-900 via-blue-950 to-slate-900', heroImg: '/saivyy/hero.png',
);
content = content.replace(
  { name: 'Keshav Madan', role: 'Founder & CEO', bio: 'Expert in enterprise technology, Artificial Intelligence and digital transformation. Leads product innovation, strategic partnerships and business growth, driving AI-powered solutions that help organisations modernise operations and make data-driven decisions.' },
  { name: 'Keshav Madan', role: 'Founder & CEO', bio: 'Expert in enterprise technology, Artificial Intelligence and digital transformation. Leads product innovation, strategic partnerships and business growth, driving AI-powered solutions that help organisations modernise operations and make data-driven decisions.', img: '/saivyy/keshav.png' }
);
content = content.replace(
  { name: 'Manas Saxena', role: 'Tech Lead / CTO', bio: 'Leads technology strategy, product engineering and innovation — overseeing AI-driven, cloud-enabled and data-centric enterprise solutions that accelerate digital transformation and operational excellence.' },
  { name: 'Manas Saxena', role: 'Tech Lead / CTO', bio: 'Leads technology strategy, product engineering and innovation — overseeing AI-driven, cloud-enabled and data-centric enterprise solutions that accelerate digital transformation and operational excellence.', img: '/saivyy/manas.png' }
);

// 3. Fix VenturePage bg-cream to bg-slate-50 and add scroll logic
content = content.replace(
  'className="min-h-screen bg-cream font-sans text-foreground flex flex-col"',
  'className="min-h-screen bg-slate-50 font-sans text-foreground flex flex-col"'
);

// Fix tabs mapping to add scroll logic
content = content.replace(
  /onClick=\{\(\) => setActiveTab\(tab\)\}/g,
  onClick={() => {
                setActiveTab(tab);
                const id = tab.toLowerCase().replace(/[^a-z0-9]/g, '-');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
);

// 4. Update Hero to use v.heroImg
content = content.replace(
  '{/* Mesh grid overlay for tech feel */}\n      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />',
  {v.heroImg ? (
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center" style={{backgroundImage: \\\url(\\\)\\\}} />
      ) : (
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
);

// 5. Add IDs to MainContent sections
content = content.replace(
  '<div className="grid lg:grid-cols-[1fr_360px] gap-8">',
  '<div className="grid lg:grid-cols-[1fr_360px] gap-8" id="overview">'
);
content = content.replace(
  '{/* Progress to Date */}',
  '{/* Progress to Date */}\n            <div id="progress" className="hidden" />' // anchor anchor
);
// Actually it's better to add id directly to the div
content = content.replace(
  '<div className="bg-slate-950 rounded-3xl p-8 shadow-2xl text-white flex flex-col relative overflow-hidden group">',
  '<div id="progress" className="bg-slate-950 rounded-3xl p-8 shadow-2xl text-white flex flex-col relative overflow-hidden group">'
);
content = content.replace(
  '<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">',
  '<div id="team" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">'
);
content = content.replace(
  '<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">',
  '<div id="roadmap" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">'
);
// For collaboration
content = content.replace(
  '<h3 className="text-lg font-bold text-slate-900 mb-6">Collaboration Areas</h3>',
  '<h3 id="collaboration" className="text-lg font-bold text-slate-900 mb-6 scroll-mt-32">Collaboration Areas</h3>'
);
// For GEL's role
content = content.replace(
  '<section className="bg-slate-950 text-white py-16 mt-8 mx-auto max-w-7xl px-6 lg:px-12 rounded-[2.5rem] w-full mb-12 shadow-2xl relative overflow-hidden border border-white/10">',
  '<section id="gel-s-role" className="bg-slate-950 text-white py-16 mt-8 mx-auto max-w-7xl px-6 lg:px-12 rounded-[2.5rem] w-full mb-12 shadow-2xl relative overflow-hidden border border-white/10">'
);
// For Solution/Opportunity
content = content.replace(
  '<div className="grid sm:grid-cols-2 gap-5">',
  '<div className="grid sm:grid-cols-2 gap-5" id="the-opportunity">'
);

// 6. Make sticky tabs have better background for slate-50
content = content.replace(
  'className="bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm rounded-full p-1.5 flex items-center overflow-x-auto hide-scrollbar max-w-full"',
  'className="bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-lg rounded-full p-1.5 flex items-center overflow-x-auto hide-scrollbar max-w-full"'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Transform complete.");
