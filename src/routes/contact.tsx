import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowUpRight, Clock, Globe2, CheckCircle2, Loader2 } from "lucide-react";
import { Footer } from "./index";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    source: (search.source as string) || "Direct",
  }),
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Global Education Lab" },
      { name: "description", content: "Get in touch with Global Education Lab. Cambridge desk for executive programmes, school partnerships, and global ventures." },
    ],
  }),
});

// Apps Script Web App URL — deployed from Code.gs
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxDCEewBT8A4S7DDFk1BRq4ZKdU-6iv2TnWXqKBdNHsWbFsOqZCwiOg2ArCv3K3VudO/exec";

import { COUNTRY_CODES } from "@/data/countryCodes";

function ContactPage() {
  const { source } = Route.useSearch();
  const [selectedInterest, setSelectedInterest] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "🇮🇳 +91",
    phone: "",
    organisation: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
          formType: "Contact",
          ...formData,
          interest: selectedInterest,
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
          phoneCode: "🇮🇳 +91",
          phone: "",
          organisation: "",
          message: "",
        });
        setSelectedInterest("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen font-sans">

      {/* ═══════════════════════════════════════════
          HERO — Full-viewport split layout
      ═══════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col lg:flex-row">

        {/* LEFT PANEL — Immersive dark image panel */}
        <div className="relative lg:w-[42%] min-h-[420px] lg:min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Background image */}
          <img
            src="https://static.wixstatic.com/media/bf78a9_2f15e96675344d8c9a2ef70d1d015137~mv2.jpg"
            alt="Cambridge programme"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/85 to-forest-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />

          {/* Decorative gold line */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {/* Top content */}
          <div className="relative z-10 px-10 md:px-14 pt-16">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[15px] font-bold tracking-[0.28em] text-gold uppercase">Global Education Lab</span>
            </div>

            <h1 className="text-[2.6rem] md:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Begin a<br />
              <em className="font-serif italic font-normal text-gold not-italic">conversation.</em>
            </h1>
            <p className="text-[15px] text-white/80 leading-relaxed max-w-[300px] mb-10">
              Our Cambridge desk receives every enquiry personally and responds within 24 hours.
            </p>

            {/* Contact rows */}
            <div className="space-y-4">
              {[
                { icon: <Phone className="h-3.5 w-3.5 text-gold" />, val: "+44 (01223) 362994", href: "tel:+441223362994" },
                { icon: <Mail className="h-3.5 w-3.5 text-gold" />, val: "info@globaledulab.com", href: "mailto:info@globaledulab.com" },
                { icon: <MapPin className="h-3.5 w-3.5 text-gold" />, val: "Newnham Road, Cambridge, UK, CB3 9EY", href: null },
                { icon: <Clock className="h-3.5 w-3.5 text-gold" />, val: "Mon–Fri · 09:00–18:00 GMT", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 group">
                  <div className="h-7 w-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[15px] text-white/70 group-hover:text-white transition-colors duration-200 leading-relaxed">{item.val}</a>
                  ) : (
                    <p className="text-[15px] text-white/70 leading-relaxed">{item.val}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 px-10 md:px-14 pb-10 mt-10">
            <div className="border-t border-white/10 pt-6 flex items-end justify-between">
              <div>
                <p className="text-[15px] uppercase tracking-[0.25em] text-white/80 mb-1">Reply within</p>
                <p className="text-[2.2rem] font-bold text-white leading-none">24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Premium form */}
        <div className="lg:w-[58%] bg-white flex items-start lg:items-center justify-center px-8 md:px-14 lg:px-20 py-28 lg:py-0 overflow-y-auto">
          <div className="w-full max-w-[560px]">

            {/* Form heading */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.22em] text-gold uppercase mb-4">
                <span className="h-px w-6 bg-gold inline-block" /> Send a Message
              </span>
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold text-forest-deep leading-tight">
                How can we<br />
                <span className="font-serif italic font-normal text-forest/70">help you?</span>
              </h2>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-16 px-6 bg-[#F7F5F1] rounded-2xl border border-forest/10">
                <CheckCircle2 className="h-10 w-10 text-gold" />
                <h3 className="text-[1.3rem] font-bold text-forest-deep">Message sent</h3>
                <p className="text-[13.5px] text-forest/80 max-w-[320px]">
                  Thank you for reaching out — our Cambridge desk will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep border-b-2 border-forest-deep/20 hover:border-gold hover:text-gold transition-all duration-200 pb-0.5"
                >
                  Send another message
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
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="flex-1 bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <label className="text-[15px] font-semibold text-forest/80">I am Interested In</label>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "General Enquiry",
                      "School Leaders",
                      "Business Leaders",
                      "Students & Teachers",
                      "Global Ventures",
                      "Media & Press",
                    ].map((tag, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedInterest(tag)}
                        className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-[12.5px] font-semibold text-left transition-all duration-200 border ${selectedInterest === tag
                            ? "bg-forest-deep border-forest-deep text-white shadow-md"
                            : "bg-[#F7F5F1] border-transparent text-forest/80 hover:bg-[#EDE8DF] hover:text-forest hover:border-forest/10"
                          }`}
                      >
                        {selectedInterest === tag ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        ) : (
                          <span className="h-3.5 w-3.5 rounded-full border border-forest/20 shrink-0" />
                        )}
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Organisation */}
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">Organisation</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Your school or company name"
                    value={formData.organisation}
                    onChange={handleChange("organisation")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <label className="text-[15px] font-semibold text-forest/80">Your Message</label>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about what you are planning..."
                    value={formData.message}
                    onChange={handleChange("message")}
                    className="w-full bg-[#F7F5F1] border border-transparent rounded-xl px-4 py-3.5 text-[15px] text-forest-deep placeholder:text-forest/70 font-medium focus:outline-none focus:bg-white focus:border-gold/40 focus:shadow-[0_0_0_3px_rgba(196,148,50,0.08)] transition-all duration-200 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[12.5px] text-red-600 font-medium">
                    Something went wrong sending your message. Please try again.
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
                    {status === "submitting" ? "Sending..." : "Send Message"}
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

      {/* ═══════════════════════════════════════════
          MAP SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F7F5F1] py-24 border-t border-forest/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.22em] text-gold uppercase mb-4">
                <span className="h-px w-6 bg-gold inline-block" /> Find Us
              </span>
              <h2 className="text-[2rem] md:text-[2.3rem] font-bold text-forest-deep leading-tight mb-4">Our Location</h2>
              <div className="space-y-3 text-[13.5px] text-forest/80 leading-relaxed">
                <p className="font-semibold text-forest-deep">Global Education Lab Ltd</p>
                <p>Newnham Road<br />Cambridge, UK<br />CB3 9EY</p>
              </div>
              <a
                href="https://www.google.com/maps/search/Newnham+Road+Cambridge+UK+CB3+9EY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-[15px] font-bold uppercase tracking-[0.18em] text-forest-deep border-b-2 border-forest-deep/20 hover:border-gold hover:text-gold transition-all duration-200 pb-0.5"
              >
                Get Directions <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(10,48,29,0.12)] border border-forest/8">
              <iframe
                title="Global Education Lab Location"
                src="https://maps.google.com/maps?q=Newnham%20Road,%20Cambridge,%20UK,%20CB3%209EY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL PRESENCE
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 border-t border-forest/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4 border-b border-forest/8 pb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.22em] text-gold uppercase mb-3">
                <span className="h-px w-6 bg-gold inline-block" /> Our Presence
              </span>
              <h2 className="text-[2rem] md:text-[2.3rem] font-bold text-forest-deep">
                Across <em className="font-serif italic font-normal text-forest/70">three continents</em>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[15px] text-forest/80 font-medium">
              <Globe2 className="h-4 w-4" /> Index of desks
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-forest/8">
            {[
              { region: "United Kingdom", city: "Cambridge", role: "Headquarters", desc: "Where our research, leadership and global education programmes are shaped.", num: "01" },
              { region: "India", city: "Delhi — Mumbai", role: "Regional Office", desc: "Programme delivery and school partnerships across the subcontinent.", num: "02" },
              { region: "International", city: "Finland — Bali", role: "Residencies", desc: "Immersive leadership residencies and cross-cultural learning experiences.", num: "03" },
            ].map((loc, i) => (
              <div key={i} className="group px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-gold">{loc.region}</span>
                  <span className="text-[1.8rem] font-serif italic text-forest/8">{loc.num}</span>
                </div>
                <h3 className="text-[1.4rem] font-bold text-forest-deep mb-1 group-hover:text-gold transition-colors duration-300">{loc.city}</h3>
                <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-forest/80 mb-4">{loc.role}</p>
                <p className="text-[13.5px] text-forest/80 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}