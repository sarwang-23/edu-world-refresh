import { buildMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "./index";

import alumniSnigdha from "../assets/alumni-snigdha.jpg";
import alumniFatin from "../assets/alumni-fatin.jpg";
import alumniSamwer from "../assets/alumni-samwer.jpg";
import alumniAashish from "../assets/alumni-aashish.jpg";
import alumniMario from "../assets/alumni-mario.jpg";
import alumniRamashankar from "../assets/alumni-ramashankar.jpg";
import alumniBidisha from "../assets/alumni-bidisha.jpg";
import alumniAnand from "../assets/alumni-anand.jpg";
import alumniParag from "../assets/alumni-parag.jpg";
import alumniSam from "../assets/alumni-sam.jpg";
import alumniSonia from "../assets/alumni-sonia.jpg";
import alumniSubi from "../assets/alumni-subi.jpg";
import alumniRachit from "../assets/alumni-rachit.png";
import alumniIndu from "../assets/alumni-indu.jpg";
import alumniArun from "../assets/alumni-arun.jpg";
import alumniDauren from "../assets/alumni-dauren.jpg";
import logoJBS from "../assets/logo-cambridge-jbs.png";

export const Route = createFileRoute("/gilp-stories")({
  head: () => ({
    meta: buildMeta({
      title: "GILP — More Participant Stories | Cambridge Judge Business School",
      description:
        "Read more inspiring stories from GILP alumni — senior leaders who experienced the Global India Leadership Programme at Cambridge Judge Business School.",
    }),
  }),
  component: GILPStoriesPage,
});

type Testimonial = {
  quote: string;
  shortQuote?: string;
  name: string;
  role: string;
  cohort: string;
  img?: string;
  linkedin?: string;
};

const moreTestimonials: Testimonial[] = [
  {
    quote:
      "This programme helped articulate something critical: leadership is also about language. It equips founders to translate their journey into frameworks that resonate with investors and stakeholders. That shift, from building to being understood, unlocks the next level of growth and influence.",
    name: "Snigdha Manchanda",
    role: "Founder, TeaTrunk (India)",
    cohort: "Executive Cohort Delegate",
    img: alumniSnigdha,
  },
  {
    quote:
      "Beyond classroom learning, the programme transformed how I see leadership. The real impact came through conversations, diverse perspectives, and shared curiosity. It reinforced that meaningful learning happens in exchange and reflection, where ideas evolve and new possibilities quietly take shape.",
    name: "Bidisha Bannerjee",
    role: "Partner, TalentElement (India)",
    cohort: "Executive Cohort Delegate",
    img: alumniBidisha,
  },
  {
    quote:
      "Walking through Cambridge's historic corridors is a humbling reminder of the power of ideas and lifelong learning. The programme reinforced that true leadership comes from curiosity, diverse perspectives, and purpose-driven collaboration. It's an experience that inspires you to keep questioning, learning, and growing.",
    name: "Ramashankar Pandey",
    role: "MD, Work With Dignity (India)",
    cohort: "Executive Cohort Delegate",
    img: alumniRamashankar,
  },
  {
    quote:
      "The programme offered a powerful lens on leadership shaped by AI, sustainability, and geopolitics. Engaging with global peers and faculty, one insight stood out: future leaders must blend technological fluency with disciplined capital stewardship. Cambridge leaves you more curious, reflective, and prepared for complex decisions ahead.",
    name: "Anand Rao",
    role: "Partner, Tiger Analytics (UK)",
    cohort: "Executive Cohort Delegate",
    img: alumniAnand,
  },
  {
    quote:
      "The programme strengthened the leadership and AI capabilities needed to succeed in a fast-changing global business environment. It offered valuable perspectives on strategic decision-making, communication, innovation, and responsible technology adoption, equipping me with the skills to guide teams, and lead with greater confidence.",
    name: "Parag Bawdekar",
    role: "MD, Pacific Blue Cargo Pvt Ltd",
    cohort: "Executive Cohort Delegate",
    img: alumniParag,
  },
  {
    quote:
      "The Global India Leadership Program at the University of Cambridge was a truly enriching experience, offering the opportunity to engage with distinguished leaders and explore critical issues shaping the future of India-UK relations.\n\nA particular highlight was meeting the High Commissioner of India to the UK, His Excellency Shri Kumaran Periasamy, at Sidney Sussex. The discussions around the Free Trade Agreement (FTA), energy and aviation, and streamlining processes between Most Favoured Nations (MFNs) offered valuable perspectives on unlocking new economic corridors, driving sustainable innovation, strengthening global connectivity, and building greater resilience.\n\nIn a volatile world defined by uncertain geopolitics, continuing to bridge these gaps is more vital than ever. The program reinforced the importance of collaborative leadership and fostering entrepreneurship and businesses as powerful tools for navigating global challenges and building enduring partnerships.",
    shortQuote:
      "The Global India Leadership Program at the University of Cambridge was a truly enriching experience, offering the opportunity to engage with distinguished leaders and explore critical issues shaping the future of India-UK relations. A particular highlight was meeting the High Commissioner of India to the UK, His Excellency Shri Kumaran Periasamy, at Sidney Sussex.",
    name: "Sonia Khera",
    role: "Dean, IILM Institute for Higher Education",
    cohort: "September 2026 Cohort",
    linkedin: "https://lnkd.in/p/dpcVqRub",
    img: alumniSonia,
  },
  {
    quote:
      "A dream comes true. It's truly a blessing that I am attending the Leadership Program at Cambridge University UK, Judge Business School 🌸 Another milestone in my professional journey, but for me this one is deeply personal. It's not just about learning more, it's about unlearning to learn more. Letting go, to grow again.",
    name: "Subi Bhaskaran",
    role: "Managing Director-Global Technology Engineering Operations & Technology\nTMF Group",
    cohort: "September 2026 Cohort",
    linkedin: "https://lnkd.in/p/d3jZA8VA",
    img: alumniSubi,
  },
  {
    quote:
      "My experience at the Global India Leadership Programme (GILP) at Cambridge Judge Business School has been a reminder that some of the best learning happens when you step away from your everyday environment and challenge your own thinking. From fascinating case discussions on leadership, strategy, governance and innovation to conversations with an incredible cohort of Indian leaders — I'm leaving with new ideas, new questions and a renewed perspective on leadership and building businesses. Grateful to Cambridge Judge, the faculty and my GILP cohort for an unforgettable experience. Thanks to Suyash Bhatt and Global Education Lab for organising this.",
    shortQuote:
      "My experience at the Global India Leadership Programme (GILP) at Cambridge Judge Business School has been a reminder that some of the best learning happens when you step away from your everyday environment and challenge your own thinking. From fascinating case discussions on leadership, strategy, governance and innovation to conversations with an incredible cohort of Indian leaders — ",
    name: "Rachit Mathur",
    role: "Advisor, Founder & CEO\nGalgotias University, Shiftz",
    cohort: "September 2026 Cohort",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7506467335793266688/",
    img: alumniRachit,
  },
  {
    quote:
      "Deeply grateful for a week of learning, reflection, meaningful conversations and new perspectives at the University of Cambridge Judge Business School. Ending the Global India Leadership Programme with a full heart — and many thoughts to take back home and put into action.",
    name: "Dr. Indu Nair",
    role: "Group Director\nSCMS GROUP OF EDUCATIONAL INSTITUTIONS",
    cohort: "September 2026 Cohort",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7507130938611392512/",
    img: alumniIndu,
  },
  {
    quote:
      "It was a truly enriching week, with India at the heart of every conversation.\n\nThe Global India Leadership Program gave us the opportunity to meet and learn from an exceptional group of senior leaders and influential voices from India. A particular highlight was the college dinner marking the culmination of the program, attended by the newly appointed High Commissioner of India to the UK. It was a memorable evening that brought together meaningful conversations, new perspectives and a shared vision for strengthening India-UK connections.",
    shortQuote:
      "It was a truly enriching week, with India at the heart of every conversation.\n\nThe Global India Leadership Program gave us the opportunity to meet and learn from an exceptional group of senior leaders and influential voices from India.",
    name: "Dauren Toleukhanov",
    role: "Co Founder\nBrainpatch.ai",
    cohort: "September 2026 Cohort",
    linkedin: "https://lnkd.in/p/djfaAuvX",
    img: alumniDauren,
  },
  {
    quote:
      "Cambridge Judge Business School, you are to blame.\nBlame for setting the bar on practical leadership education impossibly high. Blame for faculty who challenged how I think, not just what I know. Blame for a room full of Indian leaders across sectors, where the community and learning over coffee was as valuable as the learning in the classroom.\nFive days ago I wrote that I was looking forward to the conversations more than anything. They delivered, and then some, and added India firmly into the mix of where I could build next.\nChapeau to Suyash Bhatt, Prof. Jaideep Prabhu and the entire Global Education Lab team for pulling together an experience this precise.",
    shortQuote:
      "Cambridge Judge Business School, you are to blame.\nBlame for setting the bar on practical leadership education impossibly high. Blame for faculty who challenged how I think, not just what I know. Blame for a room full of Indian leaders across sectors, where the community and learning over coffee was as valuable as the learning in the classroom.",
    name: "Arun Venkatesan",
    role: "Founder & Prinicipal Consultant\nFusionInsight Consulting",
    cohort: "September 2026 Cohort",
    linkedin: "https://lnkd.in/p/dXKxbu_s",
    img: alumniArun,
  },
];

/** Returns initials from a full name, e.g. "Harsh Shah" → "HS" */
function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Deterministic pastel colour based on name */
function avatarColor(name: string) {
  const palette = [
    { bg: "#D4AF37", text: "#0A1508" },
    { bg: "#2D6A4F", text: "#ffffff" },
    { bg: "#1B4332", text: "#D4AF37" },
    { bg: "#B5838D", text: "#ffffff" },
    { bg: "#457B9D", text: "#ffffff" },
    { bg: "#6B4226", text: "#ffffff" },
    { bg: "#4A4E69", text: "#ffffff" },
  ];
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffff;
  return palette[hash % palette.length];
}

function GILPStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #0E1C12 0%, #162B1C 60%, #0A1508 100%)" }}>
      {/* Premium Sticky Navigation Bar */}
      <header className="border-b border-white/5 bg-black/10 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <Link
            to="/programmes/gilp"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-[13px] sm:text-[14px] font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to GILP
          </Link>
          <img src={logoJBS} alt="Cambridge Judge Business School" className="h-7 sm:h-9 opacity-90 object-contain" />
        </div>
      </header>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#D4AF37" }} />
          <span className="text-[11.5px] font-extrabold tracking-[0.25em] uppercase" style={{ color: "#D4AF37" }}>
            MORE VOICES FROM OUR COMMUNITY
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
          More stories from the GILP community.
        </h1>
        <p className="text-stone-300 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mb-12">
          Additional perspectives from C-suite delegates who have completed the Global India Leadership Programme at Cambridge Judge Business School.
        </p>


      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreTestimonials.map((t, i) => {
            const color = avatarColor(t.name);
            return (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-stone-100 shadow-sm"
              >
                {/* Decorative Background Quote that fades in on hover */}
                <span
                  className="absolute top-2 right-4 text-8xl font-serif leading-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 select-none pointer-events-none"
                  style={{ color: "rgba(212,175,55,0.08)" }}
                >
                  "
                </span>

                {/* Top Quote Area */}
                <div className="relative z-10 flex flex-col flex-1 mb-6">
                  <p className="text-[14px] text-stone-700 leading-relaxed font-normal flex-1 min-h-[110px] sm:min-h-[120px]">
                    {t.shortQuote || t.quote}
                  </p>
                </div>

                {/* Bottom Profile Row */}
                <div className="relative z-10 mt-auto pt-4 border-t border-stone-100 flex items-start gap-3.5">
                  {/* Avatar: photo if available, else initials circle */}
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-12 w-12 sm:h-13 sm:w-13 rounded-full object-cover ring-2 ring-[#D4AF37]/25 shadow-xs shrink-0 bg-stone-100"
                    />
                  ) : (
                    <div
                      className="h-12 w-12 rounded-full shrink-0 flex items-center justify-center text-[15px] font-bold ring-2 ring-[#D4AF37]/25 shadow-xs select-none"
                      style={{ background: color.bg, color: color.text }}
                    >
                      {getInitials(t.name)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-bold text-gray-900 leading-snug line-clamp-1 min-h-[20px]" title={t.name}>
                      {t.name}
                    </h3>
                    <p className="text-[11.5px] text-stone-500 whitespace-pre-line leading-[1.35] line-clamp-2 min-h-[32px] mt-0.5">
                      {t.role}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedStory(t)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10.5px] font-bold tracking-wider uppercase transition-all duration-200 mt-2.5 hover:bg-[#D4AF37] hover:text-white cursor-pointer group/btn"
                      style={{
                        backgroundColor: "rgba(212,175,55,0.08)",
                        color: "#99730E",
                        border: "1px solid rgba(212,175,55,0.28)",
                      }}
                    >
                      <span>Read more</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[17px] font-serif italic text-stone-400">Ideas. People. Possibilities.</p>
          <Link
            to="/programmes/gilp"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[13px] font-bold transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #C9A227, #F0D060, #C9A227)", color: "#0A1F0D" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to GILP Programme
          </Link>
        </div>
      </div>

      {/* Story Popup Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Modal avatar */}
                {selectedStory.img ? (
                  <img
                    src={selectedStory.img}
                    alt={selectedStory.name}
                    className="h-16 w-16 sm:h-18 sm:w-18 rounded-full object-cover ring-2 ring-[#D4AF37]/35 shadow-md bg-stone-100 shrink-0"
                  />
                ) : (
                  <div
                    className="h-16 w-16 rounded-full shrink-0 flex items-center justify-center text-[18px] font-bold ring-2 ring-[#D4AF37]/35 shadow-md select-none"
                    style={{ background: avatarColor(selectedStory.name).bg, color: avatarColor(selectedStory.name).text }}
                  >
                    {getInitials(selectedStory.name)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-900 tracking-tight leading-tight">
                    {selectedStory.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-medium text-teal-800/90 mt-0.5 whitespace-pre-line">
                    {selectedStory.role}
                  </p>
                  {selectedStory.cohort && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#D4AF37]/15 text-[#99730E] uppercase tracking-wider mt-1.5">
                      {selectedStory.cohort}
                    </span>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-gray-900 transition-colors cursor-pointer shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative bg-stone-50/90 rounded-2xl p-5 sm:p-6 border border-stone-200/60">
              <p className="text-[15px] sm:text-[16px] text-stone-800 font-normal leading-relaxed whitespace-pre-line">
                "{selectedStory.quote}"
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-between items-center">
              {selectedStory.linkedin ? (
                <a
                  href={selectedStory.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0A66C2] font-semibold text-[14px] hover:underline"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  View on LinkedIn
                </a>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="rounded-xl bg-[#0E1C12] text-white px-7 py-2.5 text-[14px] font-semibold hover:bg-forest transition-colors cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
