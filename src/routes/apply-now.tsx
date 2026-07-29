import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/apply-now")({
  component: ApplyNowPage,
  head: () => ({
    meta: [
      { title: "Apply Now — Global Education Lab" },
      { name: "description", content: "Apply for our global education programmes for business leaders, educators, and young students." },
    ],
  }),
});

function ApplyNowPage() {
  const [selectedProgrammes, setSelectedProgrammes] = useState<string[]>([]);

  const toggleProgramme = (prog: string) => {
    setSelectedProgrammes((prev) =>
      prev.includes(prog) ? prev.filter((p) => p !== prog) : [...prev, prog]
    );
  };

  const programmes = [
    "Global India Leadership - Mar 2026",
    "London School Leadership - Jan 2026",
    "Finland Education - Feb 2026",
    "Bali Green School - May 2026",
    "Student Summer Camps",
    "Graduate Summer Camp",
    "Online Workshops",
    "Custom Organisation Programme",
  ];

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-gold/30">
      <section className="min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT PANEL — Bespoke Immersive Experience */}
        <div className="relative lg:w-[45%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between overflow-hidden bg-forest-deep">
          <img
            src="https://static.wixstatic.com/media/bf78a9_f7d441ce1b8844f5937f3f3b085080b4~mv2.jpg"
            alt="Cambridge architecture"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/80 to-forest-deep/95" />
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
          
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-forest-deep/50 to-transparent" />

          <div className="relative z-10 px-10 md:px-14 pt-24 pb-12 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gold/10 border border-gold/30">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">Admissions</span>
              </div>

              <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
                Curating <br />
                <em className="font-serif italic font-normal text-gold not-italic">global leaders.</em>
              </h1>
              
              <div className="space-y-6 text-[15px] text-white/50 leading-[1.8] max-w-[380px] font-light">
                <p>
                  Thank you for your interest in our premium educational experiences.
                </p>
                <p>
                  We develop and execute bespoke programmes for business leaders, educators, and outstanding students. We would be delighted to partner with you to deliver these transformative experiences.
                </p>
                <p className="text-white/80 font-medium pt-2 border-t border-white/10 mt-6">
                  Please express your interest below, and our Cambridge desk will be in touch with the next steps.
                </p>
              </div>
            </div>
            
            {/* Watermark Logo */}
            <div className="mt-12">
               <div className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center shrink-0 bg-forest-deep shadow-inner">
                    <span className="text-[14px] font-serif italic text-gold">G·E·L</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Established</p>
                    <p className="text-[13px] text-white/90 tracking-wide font-serif italic">Excellence in Global Education</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Refined Form */}
        <div className="lg:w-[55%] bg-[#FDFCFB] flex justify-center px-8 md:px-14 lg:px-20 py-24 relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="w-full max-w-[620px] relative z-10">

            <div className="mb-14">
              <h2 className="text-[2.2rem] md:text-[2.6rem] font-bold text-forest-deep leading-tight mb-3">
                Application <span className="font-serif italic font-normal text-forest/40">Details</span>
              </h2>
              <div className="h-px w-16 bg-gold" />
            </div>

            <form className="space-y-10">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "First Name", placeholder: "e.g. Karan" },
                  { label: "Last Name", placeholder: "e.g. Sharma" },
                ].map((f, i) => (
                  <div key={i} className="group">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-3 transition-colors group-focus-within:text-gold">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-b border-forest/15 pb-3 text-[15px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-3 transition-colors group-focus-within:text-gold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@organisation.com"
                    className="w-full bg-transparent border-b border-forest/15 pb-3 text-[15px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-3 transition-colors group-focus-within:text-gold">
                    Phone Number
                  </label>
                  <div className="flex gap-4 items-end">
                    <select className="bg-transparent border-b border-forest/15 pb-3 text-[14px] text-forest-deep focus:outline-none focus:border-gold transition-all duration-300 w-[70px] cursor-pointer">
                      <option>IN</option>
                      <option>UK</option>
                      <option>US</option>
                      <option>AE</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="flex-1 bg-transparent border-b border-forest/15 pb-3 text-[15px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-3 transition-colors group-focus-within:text-gold">
                    Organisation Name
                  </label>
                  <input
                    type="text"
                    placeholder="School or Company"
                    className="w-full bg-transparent border-b border-forest/15 pb-3 text-[15px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-3 transition-colors group-focus-within:text-gold">
                    Designation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Principal, Director"
                    className="w-full bg-transparent border-b border-forest/15 pb-3 text-[15px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold transition-all duration-300"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-forest/10 via-forest/5 to-transparent my-12" />

              {/* Programme Selection Grid */}
              <div>
                <div className="mb-8">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-2">
                    Portfolio Selection
                  </label>
                  <p className="text-[13px] text-forest/50">Select the programmes you wish to express interest in.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {programmes.map((prog, i) => {
                    const isSelected = selectedProgrammes.includes(prog);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleProgramme(prog)}
                        className={`w-full relative group flex items-start p-5 rounded-2xl border text-left transition-all duration-500 ease-out ${
                          isSelected
                            ? "bg-forest-deep border-forest-deep shadow-[0_8px_30px_rgba(10,48,29,0.15)] -translate-y-1"
                            : "bg-white border-forest/5 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1"
                        }`}
                      >
                        {/* Decorative selected glow */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-md -z-10" />
                        )}

                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5 mr-4 ${
                            isSelected
                              ? "bg-gold border-gold text-forest-deep"
                              : "border-forest/20 bg-[#FDFCFB] group-hover:border-gold/50"
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-[13px] leading-snug transition-colors duration-300 ${
                          isSelected ? "font-medium text-white" : "font-medium text-forest/70 group-hover:text-forest"
                        }`}>
                          {prog}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Query */}
              <div className="pt-4">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-4">
                  Additional Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific requirements, expectations, or questions..."
                  className="w-full bg-white border border-forest/10 rounded-2xl p-5 text-[14px] text-forest-deep placeholder:text-forest/20 font-medium focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 resize-none shadow-sm"
                />
              </div>

              {/* Submit */}
              <div className="pt-8 border-t border-forest/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-[11px] text-forest/40 leading-relaxed max-w-[280px]">
                  Information provided is treated with strict confidentiality in accordance with our data policy.
                </p>
                <button
                  type="submit"
                  className="group relative overflow-hidden inline-flex items-center gap-4 bg-forest-deep text-white pl-8 pr-6 py-4 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_8px_24px_rgba(10,48,29,0.25)] hover:shadow-[0_16px_40px_rgba(10,48,29,0.35)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10">Submit Enquiry</span>
                  <span className="relative z-10 flex items-center justify-center h-8 w-8 rounded-full bg-white/10 group-hover:bg-gold transition-colors duration-300 group-hover:text-forest-deep">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
