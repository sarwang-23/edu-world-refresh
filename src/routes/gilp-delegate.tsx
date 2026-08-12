import { buildMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Camera, FileText, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { COUNTRY_CODES } from "@/data/countryCodes";

// TODO: paste your deployed Apps Script Web App URL here (must end in /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOvfz0SOEgLYNf26E2Sz8B4DPvxyNEU0LQwZbvmLl2gmIcDHE46LnA6nZMv2PQ8qxV/exec";

// Fires a form submission to the GILP Apps Script backend.
// Uses no-cors + urlencoded body so it works without any CORS setup on the Apps Script side.
async function submitToGILP(formType: string, data: Record<string, string>) {
  const body = new URLSearchParams({ formType, ...data });
  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: body.toString(),
  });
}

// Converts a File into a plain base64 string (no "data:...;base64," prefix)
// plus its mime type, ready to send to Apps Script.
function fileToBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string; // "data:<mime>;base64,<data>"
      const commaIndex = result.indexOf("base64,");
      const base64 = commaIndex !== -1 ? result.slice(commaIndex + "base64,".length) : result;
      resolve({ base64, mimeType: file.type || "application/octet-stream" });
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

type UploadedFile = { name: string; base64: string; mimeType: string };

export const Route = createFileRoute("/gilp-delegate")({
  component: GilpDelegatePage,
  head: () => buildMeta("/gilp-delegate"),
});

function UploadField({
  label,
  hint,
  accept,
  multiple,
  icon: Icon,
  onFilesReady,
}: {
  label: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  icon: React.ElementType;
  onFilesReady: (files: UploadedFile[]) => void;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (files.length === 1) setFileName(files[0].name);
    else setFileName(`${files.length} files selected`);

    setLoading(true);
    try {
      const results = await Promise.all(
        Array.from(files).map(async (file) => {
          const { base64, mimeType } = await fileToBase64(file);
          return { name: file.name, base64, mimeType };
        })
      );
      onFilesReady(results);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        className={`relative flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-dashed cursor-pointer transition-all duration-200 group
          ${fileName
            ? "bg-forest-deep/5 border-forest-deep/30"
            : "bg-[#F7F5F1] border-forest/15 hover:border-gold/40 hover:bg-[#F0EDE7]"
          }`}
      >
        <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${fileName ? "bg-forest-deep/10" : "bg-forest/8 group-hover:bg-gold/10"}`}>
          <Icon className={`w-5 h-5 transition-colors ${fileName ? "text-forest-deep" : "text-forest/70 group-hover:text-gold"}`} />
        </div>
        <div className="flex-1 min-w-0">
          {fileName ? (
            <>
              <p className="text-[15px] font-semibold text-forest-deep truncate">{fileName}</p>
              <p className="text-[15px] text-forest/70 mt-0.5">{loading ? "Processing…" : "Click to change file"}</p>
            </>
          ) : (
            <>
              <p className="text-[15px] font-semibold text-forest/70">{label}</p>
              <p className="text-[15px] text-forest/70 mt-0.5">Click to upload</p>
            </>
          )}
        </div>
        {fileName && !loading && (
          <span className="flex-shrink-0 h-6 w-6 rounded-full bg-forest-deep flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </span>
        )}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
        />
      </div>
      {hint && <p className="text-[15px] text-forest/80 mt-2 leading-relaxed">{hint}</p>}
    </div>
  );
}

function GilpDelegatePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    dietary: "",
    organisation: "",
    phoneCode: "🇮🇳 +91",
    phone: "",
    email: "",
    funding: "",
    invoiceName: "",
    invoiceAddress: "",
    feeOption: "",
    partnerName: "",
    brochureRead: false,
  });

  // Holds converted base64 file data, keyed by the field name the
  // Apps Script backend expects (it looks for keys ending in "Base64").
  const [files, setFiles] = useState<{
    headshot?: UploadedFile;
    passportFront?: UploadedFile;
    passportBack?: UploadedFile;
    partnerPassportFront?: UploadedFile;
    partnerPassportBack?: UploadedFile;
  }>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setStatus("submitting");
    try {
      const filePayload: Record<string, string> = {};
      (Object.entries(files) as [string, UploadedFile | undefined][]).forEach(([key, f]) => {
        if (!f) return;
        filePayload[`${key}Base64`] = f.base64;
        filePayload[`${key}FileName`] = f.name;
        filePayload[`${key}MimeType`] = f.mimeType;
      });

      await submitToGILP("delegate", {
        fullName: `${form.title} ${form.firstName} ${form.lastName}`.trim(),
        firstName: form.firstName,
        lastName: form.lastName,
        title: form.title,
        dietary: form.dietary,
        organisation: form.organisation,
        phone: `${form.phoneCode} ${form.phone}`,
        email: form.email,
        funding: form.funding,
        invoiceName: form.invoiceName,
        invoiceAddress: form.invoiceAddress,
        feeOption: form.feeOption,
        partnerName: form.partnerName,
        brochureRead: form.brochureRead ? "Yes" : "No",
        ...filePayload,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const steps = [
    { num: "02", title: "FEE PAYMENT", desc: "Within 2 weeks of submitting this form" },
    { num: "03", title: "VISA INVITATION LETTER", desc: "Issued within 5 working days of receiving your fee" },
    { num: "04", title: "PRE READING & ORIENTATION", desc: "All material will be shared with you by 31st" },
    { num: "05", title: "CAMBRIDGE ARRIVAL", desc: "You arrive at Cambridge on 13th" },
  ];

  const inputCls = "w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/80 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200";
  const selectWrapCls = "relative";
  const selectCls = `${inputCls} appearance-none cursor-pointer pr-10`;

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-gold/30">
      <section className="min-h-screen flex flex-col lg:flex-row">

        {/* ─── LEFT PANEL ─── */}
        <div className="relative lg:w-[45%] lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] bg-forest-deep overflow-y-auto">

          {/* BG image */}
          <img src="https://static.wixstatic.com/media/bf78a9_f7d441ce1b8844f5937f3f3b085080b4~mv2.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105 pointer-events-none"
            loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/98 via-forest-deep/85 to-forest-deep/95 pointer-events-none" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" />

          <div className="relative z-10 px-10 md:px-12 pt-10 pb-12 flex flex-col min-h-full">

            {/* ── Registration badge ── */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </div>
              <span className="text-[15px] font-bold tracking-[0.3em] text-gold uppercase">Registration</span>
            </div>

            {/* ── Heading ── */}
            <h1 className="text-[2.4rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
              GILP –<br />
              <em className="text-gold not-italic font-serif italic font-normal">Delegate Page.</em>
            </h1>

            {/* ── Info bullets ── */}
            <div className="text-[15px] text-white/80 leading-[1.75] mb-10">
              <p className="mb-3">Please have the following ready before completing your registration:</p>
              <ul className="space-y-2 text-white/85">
                {["Digital copy of your passport", "Digital copy of your partner's passport (if registering for a double option)", "Professional headshot for the profile book"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Timeline ── */}
            <div className="flex-1">
              <p className="text-[15px] font-bold tracking-[0.25em] text-gold uppercase mb-6 flex items-center gap-3">
                <span className="h-px w-5 bg-gold" /> What's Next on Your Journey
              </p>
              <div className="relative ml-3.5 border-l border-white/10 space-y-8 pb-4">
                {steps.map((step, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute -left-[14px] top-0 h-7 w-7 rounded-full bg-forest-deep border border-gold/40 flex items-center justify-center">
                      <span className="text-[15px] font-bold text-gold">{step.num}</span>
                    </div>
                    <h4 className="text-[15px] font-bold text-white uppercase tracking-wide leading-tight">{step.title}</h4>
                    <p className="text-[12.5px] text-white/80 mt-1 leading-snug">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── GEL badge ── */}
            <div className="mt-10 hidden lg:block">
              <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center bg-forest-deep">
                  <span className="text-[15px] font-serif italic text-gold">G·E·L</span>
                </div>
                <div>
                  <p className="text-[15px] uppercase tracking-[0.2em] text-white/80 mb-0.5">Established</p>
                  <p className="text-[15px] text-white/85 font-serif italic">Excellence in Global Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT PANEL — Form ─── */}
        <div className="lg:w-[55%] bg-white overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-8 md:px-14 lg:px-20 py-20">
            <div className="w-full max-w-[560px]">

              {/* ── Form heading ── */}
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.22em] text-gold uppercase mb-5">
                  <span className="h-px w-6 bg-gold" /> Application Form
                </span>
                <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep leading-tight">
                  Submit your<br />
                  <span className="font-serif italic font-normal text-forest/80">details</span>
                </h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>

                {step === 1 ? (
                  <>
                    {/* Row: Title + First + Last */}
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Title *</label>
                        <div className={selectWrapCls}>
                          <select required value={form.title} onChange={update("title")} className={selectCls}>
                            <option value="">—</option>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Dr</option>
                            <option>Prof</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/70 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">First Name *</label>
                        <input type="text" required value={form.firstName} onChange={update("firstName")} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Last Name</label>
                        <input type="text" value={form.lastName} onChange={update("lastName")} className={inputCls} />
                      </div>
                    </div>

                    {/* Dietary Preference */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Dietary Preference *</label>
                      <div className={selectWrapCls}>
                        <select required value={form.dietary} onChange={update("dietary")} className={selectCls}>
                          <option value="">Select...</option>
                          <option>Vegetarian</option>
                          <option>Vegan</option>
                          <option>Non-Vegetarian</option>
                          <option>Halal</option>
                          <option>Gluten-Free</option>
                          <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/70 pointer-events-none" />
                      </div>
                    </div>

                    {/* Organisation */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Organisation *</label>
                      <input type="text" required placeholder="School / Company" value={form.organisation} onChange={update("organisation")} className={inputCls} />
                    </div>

                    {/* Contact */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Contact Number *</label>
                      <div className="flex gap-2">
                        <div className={`${selectWrapCls} min-w-[125px] flex-shrink-0`}>
                          <select value={form.phoneCode} onChange={update("phoneCode")} className={`${selectCls} w-full`}>
                            {COUNTRY_CODES.map((c) => (
                              <option key={`${c.iso}-${c.code}`} value={`${c.flag} ${c.code}`}>
                                {c.flag} {c.country} ({c.code})
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/70 pointer-events-none" />
                        </div>
                        <input type="tel" required placeholder="7911 123456" value={form.phone} onChange={update("phone")} className={`${inputCls} flex-1`} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Email Address *</label>
                      <input type="email" required placeholder="you@organisation.com" value={form.email} onChange={update("email")} className={inputCls} />
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-forest/5 my-2" />

                    {/* Professional Headshot */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Professional Headshot *</label>
                      <UploadField
                        label="Upload your photo"
                        hint="This photograph will be included in the profile book"
                        accept="image/*"
                        icon={Camera}
                        onFilesReady={(f) => setFiles((prev) => ({ ...prev, headshot: f[0] }))}
                      />
                    </div>

                    {/* Passport */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Passport (front + back) *</label>
                      <UploadField
                        label="Upload passport scan"
                        hint="Ensure at least 6 months' validity from UK entry date. Upload one PDF, or two images (front then back)."
                        accept=".pdf,image/*"
                        multiple
                        icon={FileText}
                        onFilesReady={(f) =>
                          setFiles((prev) => ({ ...prev, passportFront: f[0], passportBack: f[1] }))
                        }
                      />
                    </div>

                    {/* Programme Funding */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Programme Funding</label>
                      <div className={selectWrapCls}>
                        <select value={form.funding} onChange={update("funding")} className={selectCls}>
                          <option value="">Choose who is funding your programme participation</option>
                          <option>Self Funded</option>
                          <option>Organisation Funded</option>
                          <option>Sponsorship</option>
                          <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/70 pointer-events-none" />
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-forest/5 flex items-center justify-between gap-5">
                      <p className="text-[11.5px] text-forest/80 leading-relaxed max-w-[180px]">
                        By submitting, you consent to be contacted by the GEL team.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-forest-deep text-white pl-7 pr-5 py-4 rounded-xl text-[15px] font-bold uppercase tracking-[0.16em] hover:bg-[#0f3d24] transition-all duration-300 shadow-[0_8px_24px_rgba(10,48,29,0.25)] hover:shadow-[0_16px_40px_rgba(10,48,29,0.35)] hover:-translate-y-0.5 flex-shrink-0"
                      >
                        Next
                        <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 group-hover:bg-gold/20 transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Name on the invoice *</label>
                      <p className="text-[11.5px] text-forest/60 mb-2 leading-tight">Name of individual/company paying the programme fee</p>
                      <input type="text" required value={form.invoiceName} onChange={update("invoiceName")} className={inputCls} />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Address on the invoice *</label>
                      <p className="text-[11.5px] text-forest/60 mb-2 leading-tight">Address of the above individual/company paying the programme fee</p>
                      <input type="text" required value={form.invoiceAddress} onChange={update("invoiceAddress")} className={inputCls} />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Programme fee option *</label>
                      <div className={selectWrapCls}>
                        <select required value={form.feeOption} onChange={update("feeOption")} className={selectCls}>
                          <option value="">Select...</option>
                          <option>Round 1 - Package 1 - £5100</option>
                          <option>Round 1 - Package 2 - £6300</option>
                          <option>Round 1 - Package 3 - £6500</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/70 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Full Name of the partner if you selected double accommodation option</label>
                      <p className="text-[11.5px] text-forest/60 mb-2 leading-tight">Leave blank for individual registrations</p>
                      <input type="text" value={form.partnerName} onChange={update("partnerName")} className={inputCls} />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-forest/70 mb-1.5">Passport of partner (front+back) (if applicable)</label>
                      <UploadField
                        label="Upload Passport"
                        hint="Please ensure that your partner's passport has at least six months' validity from your date of entry into the UK. Upload one PDF, or two images (front then back)."
                        accept=".pdf,image/*"
                        multiple
                        icon={FileText}
                        onFilesReady={(f) =>
                          setFiles((prev) => ({ ...prev, partnerPassportFront: f[0], partnerPassportBack: f[1] }))
                        }
                      />
                    </div>

                    <div className="flex items-start gap-3 mt-4 pt-2">
                      <input
                        type="checkbox"
                        id="brochureRead"
                        required
                        checked={form.brochureRead}
                        onChange={(e) => setForm(f => ({ ...f, brochureRead: e.target.checked }))}
                        className="mt-0.5 w-5 h-5 rounded text-forest-deep border-forest/20 focus:ring-forest-deep focus:ring-offset-0 cursor-pointer"
                      />
                      <label htmlFor="brochureRead" className="text-[14px] font-medium text-forest-deep cursor-pointer select-none">
                        I have read the entire programme brochure *
                      </label>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-forest/5 flex items-center justify-between gap-5">
                      <button
                        type="button"
                        onClick={() => {
                          setStep(1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group inline-flex items-center justify-center gap-2 bg-transparent text-forest-deep border border-forest/20 px-6 py-4 rounded-xl text-[15px] font-bold uppercase tracking-[0.16em] hover:bg-forest/5 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center gap-3 bg-forest-deep text-white pl-7 pr-5 py-4 rounded-xl text-[15px] font-bold uppercase tracking-[0.16em] hover:bg-[#0f3d24] transition-all duration-300 shadow-[0_8px_24px_rgba(10,48,29,0.25)] hover:shadow-[0_16px_40px_rgba(10,48,29,0.35)] hover:-translate-y-0.5 flex-shrink-0 disabled:opacity-60"
                      >
                        {status === "submitting" ? "Submitting…" : "Submit"}
                        <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 group-hover:bg-gold/20 transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                  </>
                )}

                {status === "success" && (
                  <p className="text-center text-[15px] font-semibold text-forest-deep mt-4">✓ Registration received — check your email for confirmation.</p>
                )}
                {status === "error" && (
                  <p className="text-center text-[15px] font-semibold text-red-500 mt-4">Something went wrong. Please try again.</p>
                )}

                {/* ── GILP Banner Image at bottom ── */}
                <div className="mt-10 w-full rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(10,48,29,0.12)] border border-forest/8 ring-1 ring-forest/5">
                  <img src="/gilp-banner.png"
                    alt="Global India Leadership Programme – 14-18, Cambridge Judge Business School"
                    className="w-full h-auto block"
                    loading="lazy" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}