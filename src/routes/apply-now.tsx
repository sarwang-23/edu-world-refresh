import { useState } from "react";
import { buildMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles, CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/apply-now")({
  validateSearch: (search: Record<string, unknown>) => ({
    source: (search.source as string) || "Direct",
  }),
  component: ApplyNowPage,
  head: () => buildMeta("/apply-now"),
});

// Apps Script Web App URL — deployed from Code.gs
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxDCEewBT8A4S7DDFk1BRq4ZKdU-6iv2TnWXqKBdNHsWbFsOqZCwiOg2ArCv3K3VudO/exec";

import { COUNTRY_CODES } from "@/data/countryCodes";

function ApplyNowPage() {
  const { source } = Route.useSearch();
  const [selectedProgrammes, setSelectedProgrammes] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "🇬🇧 +44",
    phone: "",
    organisation: "",
    designation: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const toggleProgramme = (prog: string) => {
    setSelectedProgrammes((prev) =>
      prev.includes(prog) ? prev.filter((p) => p !== prog) : [...prev, prog],
    );
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          sourcePage: source,
        }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "🇬🇧 +44",
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
    "Global India Leadership Programme",
    "Zero-to-One",
    "Graduate Summer Programme",
    "Young Leaders Summer Programme",
    "Global Ventures",
    "Other",
  ];

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-gold/30">
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* LEFT PANEL — Bespoke Immersive Experience */}
        <div className="relative lg:w-[45%] xl:w-[42%] min-h-[600px] lg:min-h-screen bg-forest-deep flex flex-col justify-between overflow-hidden">
          {/* High-res Cambridge Architecture background with subtle zoom */}
          <img
            src="https://static.wixstatic.com/media/bf78a9_f7d441ce1b8844f5937f3f3b085080b4~mv2.jpg"
            alt="Cambridge architecture"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 pointer-events-none"
            loading="lazy"
          />
          {/* Multi-layer luxury dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/98 via-forest-deep/90 to-forest-deep/98 pointer-events-none" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

          {/* Decorative divider line on right */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" />

          {/* Main Content Area */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-14 pt-12 md:pt-16 pb-12 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[13px] font-bold tracking-[0.25em] text-gold uppercase">
                  Global Admissions Desk
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.5rem] font-bold text-white leading-[1.06] tracking-tight mb-5">
                Curating <br />
                <span className="font-serif italic font-normal text-gold">
                  global leaders.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.75] max-w-[440px] font-light mb-8">
                Join our bespoke programmes engineered in Cambridge for ambitious founders, business leaders, educators, and exceptional researchers.
              </p>

              {/* What to Expect / Process Card */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 mb-8 max-w-[460px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold">
                  Admissions Process
                </p>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold/20 text-gold text-[12px] font-bold shrink-0 mt-0.5 border border-gold/40">
                      1
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">Express Your Interest</p>
                      <p className="text-[13px] text-white/60 leading-snug">Submit your profile and programme preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold/20 text-gold text-[12px] font-bold shrink-0 mt-0.5 border border-gold/40">
                      2
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">Cohort Alignment Review</p>
                      <p className="text-[13px] text-white/60 leading-snug">Our Cambridge desk reviews your application within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold/20 text-gold text-[12px] font-bold shrink-0 mt-0.5 border border-gold/40">
                      3
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">Formal Invitation & Briefing</p>
                      <p className="text-[13px] text-white/60 leading-snug">Receive your bespoke onboarding package and dates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-[460px]">
                <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white font-serif mb-0.5">24h</p>
                  <p className="text-[12px] text-white/70 uppercase tracking-wider">Review Turnaround</p>
                </div>
                <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
                  <p className="text-2xl font-bold text-gold font-serif mb-0.5">Selective</p>
                  <p className="text-[12px] text-white/70 uppercase tracking-wider">Cohort Standard</p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Badge */}
            <div className="pt-8 mt-10 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-full border border-gold/40 flex items-center justify-center shrink-0 bg-white/5 shadow-inner">
                  <span className="text-[14px] font-serif italic text-gold font-bold">G·E·L</span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold">
                    Global Education Lab
                  </p>
                  <p className="text-[13px] text-white/80 font-serif italic">
                    Cambridge · United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Form matches contact page exactly */}
        <div className="lg:w-[55%] bg-white flex items-start lg:items-center justify-center px-8 md:px-14 lg:px-20 py-24 lg:py-16 overflow-y-auto">
          <div className="w-full max-w-[560px]">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.22em] text-gold uppercase mb-4">
                <span className="h-px w-6 bg-gold inline-block" /> Application Form
              </span>
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep leading-tight">
                Submit your
                <br />
                <span className="font-serif italic font-normal text-forest/70">details</span>
              </h2>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-16 px-6 bg-[#F7F5F1] rounded-2xl border border-forest/10">
                <CheckCircle2 className="h-10 w-10 text-gold" />
                <h3 className="text-[1.3rem] font-bold text-forest-deep">Application received</h3>
                <p className="text-[13.5px] text-forest/80 max-w-[320px]">
                  Thank you — our Cambridge desk will review your application and be in touch
                  shortly.
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
                      placeholder="Johannes"
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
                      placeholder="Kaneil"
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                      className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">
                      Email Address
                    </label>
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
                      className="bg-[#F7F5F1] border border-transparent rounded-xl px-3 py-3.5 text-[15px] font-medium text-forest-deep focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200 min-w-[125px] cursor-pointer"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={`${c.iso}-${c.code}`} value={`${c.flag} ${c.code}`}>
                          {c.flag} {c.country} ({c.code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="7911 123456"
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
                      <label className="text-[15px] font-semibold text-forest/80">
                        Organisation
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Your organisation name"
                      value={formData.organisation}
                      onChange={handleChange("organisation")}
                      className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <label className="text-[15px] font-semibold text-forest/80">
                        Designation
                      </label>
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
                    <label className="text-[15px] font-semibold text-forest/80">
                      Upcoming Programmes
                    </label>
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
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">
                      Additional Details
                    </label>
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
