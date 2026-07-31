import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles, CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/apply-now")({
  component: ApplyNowPage,
  head: () => ({
    meta: [
      { title: "Apply Now — Global Education Lab" },
      { name: "description", content: "Apply for our global education programmes for business leaders, educators, and young students." },
    ],
  }),
});

// Apps Script Web App URL — deployed from Code.gs
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxDCEewBT8A4S7DDFk1BRq4ZKdU-6iv2TnWXqKBdNHsWbFsOqZCwiOg2ArCv3K3VudO/exec";

function ApplyNowPage() {
  const [selectedProgrammes, setSelectedProgrammes] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+91 IN",
    phone: "",
    organisation: "",
    designation: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const toggleProgramme = (prog: string) => {
    setSelectedProgrammes((prev) =>
      prev.includes(prog) ? prev.filter((p) => p !== prog) : [...prev, prog]
    );
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "ApplyNow",
          ...formData,
          programmes: selectedProgrammes,
        }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "+91 IN",
          phone: "",
          organisation: "",
          designation: "",
          message: "",
        });
        setSelectedProgrammes([]);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
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
        <div className="relative lg:w-[45%] lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] flex flex-col justify-between overflow-hidden bg-forest-deep">
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
                <span className="text-[13px] font-bold tracking-[0.3em] text-gold uppercase">Admissions</span>
              </div>

              <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
                Curating <br />
                <em className="font-serif italic font-normal text-gold not-italic">global leaders.</em>
              </h1>
              
              <div className="space-y-6 text-[15px] text-white/80 leading-[1.8] max-w-[380px] font-normal">
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
                    <span className="text-[15px] font-serif italic text-gold">G·E·L</span>
                  </div>
                  <div>
                    <p className="text-[13px] uppercase tracking-[0.2em] text-white/80 mb-0.5">Established</p>
                    <p className="text-[15px] text-white/90 tracking-wide font-serif italic">Excellence in Global Education</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Form matches contact page exactly */}
        <div className="lg:w-[55%] bg-white flex items-start lg:items-center justify-center px-8 md:px-14 lg:px-20 py-24 lg:py-16 overflow-y-auto">
          <div className="w-full max-w-[560px]">

            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.22em] text-gold uppercase mb-4">
                <span className="h-px w-6 bg-gold inline-block" /> Application Form
              </span>
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep leading-tight">
                Submit your<br />
                <span className="font-serif italic font-normal text-forest/70">details</span>
              </h2>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-16 px-6 bg-[#F7F5F1] rounded-2xl border border-forest/10">
                <CheckCircle2 className="h-10 w-10 text-gold" />
                <h3 className="text-[1.3rem] font-bold text-forest-deep">Application received</h3>
                <p className="text-[13.5px] text-forest/80 max-w-[320px]">
                  Thank you — our Cambridge desk will review your application and be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep border-b-2 border-forest-deep/20 hover:border-gold hover:text-gold transition-all duration-200 pb-0.5"
                >
                  Submit another application
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">First Name</label>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Karan"
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>
                <div className="group">
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">Last Name</label>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Sharma"
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <label className="text-[15px] font-semibold text-forest/80">Email Address</label>
                </div>
                <input
                  type="email"
                  required
                  placeholder="you@organisation.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <label className="text-[15px] font-semibold text-forest/80">Phone Number</label>
                </div>
                <div className="flex gap-2">
                  <select
                    value={formData.phoneCode}
                    onChange={handleChange("phoneCode")}
                    className="bg-[#F7F5F1] border border-transparent rounded-xl px-3 py-3.5 text-[15px] text-forest-deep focus:outline-none focus:bg-white focus:border-gold/40 transition-all duration-200 w-[96px]"
                  >
                    <option>+91 IN</option>
                    <option>+44 UK</option>
                    <option>+1 US</option>
                    <option>+971 AE</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    className="flex-1 bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Professional Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">Organisation</label>
                  </div>
                  <input
                    type="text"
                    placeholder="School/Company"
                    value={formData.organisation}
                    onChange={handleChange("organisation")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">Designation</label>
                  </div>
                  <input
                    type="text"
                    placeholder="E.g. Principal"
                    value={formData.designation}
                    onChange={handleChange("designation")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Portfolio Selection */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <label className="text-[15px] font-semibold text-forest/80">Select Programmes</label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {programmes.map((tag, i) => {
                    const isSelected = selectedProgrammes.includes(tag);
                    return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleProgramme(tag)}
                      className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-[12.5px] font-semibold text-left transition-all duration-200 border ${
                        isSelected
                          ? "bg-forest-deep border-forest-deep text-white shadow-md"
                          : "bg-[#F7F5F1] border-transparent text-forest/80 hover:bg-[#EDE8DF] hover:text-forest hover:border-forest/10"
                      }`}
                    >
                      {isSelected ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      ) : (
                        <span className="h-3.5 w-3.5 rounded-full border border-forest/20 shrink-0" />
                      )}
                      {tag}
                    </button>
                  )})}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <label className="text-[15px] font-semibold text-forest/80">Additional Details</label>
                </div>
                <textarea
                  rows={4}
                  placeholder="Share any specific requirements or questions..."
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[12.5px] text-red-600 font-medium">
                  Something went wrong submitting your application. Please try again.
                </p>
              )}

              {/* CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <p className="text-[11.5px] text-forest/80 leading-relaxed max-w-[200px]">
                  By submitting, you consent to be contacted by the Global Education Lab team.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-3 bg-forest-deep text-white pl-7 pr-5 py-4 rounded-xl text-[15px] font-bold uppercase tracking-[0.18em] hover:bg-[#0f3d24] transition-all duration-300 shadow-[0_8px_24px_rgba(10,48,29,0.25)] hover:shadow-[0_16px_40px_rgba(10,48,29,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Application"}
                  <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 group-hover:bg-gold/20 transition-colors duration-300">
                    {status === "submitting" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </span>
                </button>
              </div>

            </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}