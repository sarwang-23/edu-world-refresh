import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, GraduationCap, Users, BookOpen, Lightbulb, Zap, Globe2, Building2, MapPin, Target, Handshake, CheckCircle2, FlaskConical, Briefcase, Network, ShieldCheck, Rocket } from "lucide-react";
import heroImg from "@/assets/universities_lecture_hall.jpg";
import studentImg from "@/assets/young_leaders_2.jpg";
import execImg from "@/assets/executive-education.jpg";
import facultyImg from "@/assets/universities_visiting_faculty.jpg";
import researchImg from "@/assets/STEM astrophysics.jpg";
import startupImg from "@/assets/startup.jpg";
import mobilityImg from "@/assets/universities_researcher_partnership.jpg";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title: "Universities | Global Education Lab" },
      { name: "description", content: "Build Your University's Global Presence in the UK." },
    ],
  }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  const [selectedOffering, setSelectedOffering] = useState<any>(null);

  return (
    <>
      <main className="bg-white text-forest">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-cream">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
          
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-12 lg:gap-12 pt-8 md:pt-12">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h1 className="text-[2.75rem] font-bold leading-[1.05] text-forest md:text-5xl lg:text-[3.25rem] xl:text-[4rem]">
                Build Your University's <br className="hidden lg:block" />
                <span className="text-gold">Global Presence</span> in the UK
              </h1>
              
              <div className="w-20 h-1 bg-gold mt-4 mb-4" />
              
              <h2 className="text-xl md:text-2xl font-medium text-forest-deep mb-4 leading-snug">
                A Scalable Platform for Global Education, Research, Innovation and Institutional Partnerships
              </h2>
              
              <p className="max-w-xl text-[17px] leading-[1.65] text-forest/75 mb-8">
                We help universities create long-term impact through student mobility, executive education, faculty engagement, research collaboration and innovation partnerships across Cambridge, Oxford and the wider UK ecosystem.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  search={{ source: "universities-partnership" }}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all hover:bg-forest-deep"
                >
                  EXPLORE A PARTNERSHIP WITH GEL <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20 group">
                <img 
                  src={heroImg} 
                  alt="Cambridge" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
            
          </div>
        </section>

        {/* ── GLOBAL CENTRE ── */}
        <section className="pt-16 pb-8 bg-white relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] left-[25%] w-[50%] h-[50%] rounded-full bg-forest/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 z-10">
            {/* Top Section: Text & Grid */}
            <div className="max-w-4xl mx-auto text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-gold">Your UK Platform</span>
                <div className="h-px w-10 bg-gold" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6 leading-[1.15]">
                A Global Centre for Your University
              </h2>
              
              <p className="text-forest/80 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
                We help universities establish their own UK-facing Global Centre through a lean, scalable model.
                A university-branded platform that brings together multiple international activities under one strategic umbrella.
              </p>
            </div>
              
            {/* Flex Grid for Items */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                { icon: GraduationCap, label: "Student Programmes" },
                { icon: Users, label: "Executive Education" },
                { icon: BookOpen, label: "Visiting Faculty" },
                { icon: FlaskConical, label: "Research & Innovation" },
                { icon: Rocket, label: "Startup & Innovation" },
                { icon: Handshake, label: "Faculty Mobility" },
                { icon: Building2, label: "Institutional Partnerships" },
                { icon: Globe2, label: "Global Events" },
                { icon: Target, label: "Opportunity Desk" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="w-[140px] md:w-[170px] group relative flex flex-col items-center justify-center p-6 gap-4 rounded-2xl bg-white border border-forest/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-gold/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-forest-deep text-center uppercase tracking-[0.15em] leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── IMPACTFUL MODEL ── */}
        <section className="py-12 md:py-16 bg-stone-50 border-y border-forest/5 relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 z-10">
            {/* Bottom Section: Premium Wide Card */}
            <div className="relative max-w-5xl mx-auto">
              {/* Decorative outer glow */}
              <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-[3rem] opacity-50" />
              
              <div className="bg-gradient-to-br from-forest-deep via-[#0b2415] to-forest-deep p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden text-white">
                
                {/* Subtle inner gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/15 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  
                  {/* Left part of the card */}
                  <div className="w-full md:w-1/3 text-center md:text-left">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold mb-8 mx-auto md:mx-0 shadow-inner">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-gold leading-snug">
                      A Lean. Scalable. Impactful Model.
                    </h3>
                  </div>
                  
                  {/* Right part of the card - 2 columns of 3 list items */}
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Operated by Global Education Lab (GEL) in the UK",
                      "Hosted model to begin, with option to scale",
                      "Access to Cambridge, Oxford and UK networks",
                      "Strategic partnerships across academia, industry and innovation",
                      "Joint planning, delivery and performance review",
                      "Quarterly reports and opportunity updates"
                    ].map((text, i) => (
                      <div 
                        key={i} 
                        className="flex gap-4 items-start group/list transition-transform duration-300 hover:translate-x-1"
                      >
                        <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 transition-colors duration-300 group-hover/list:bg-gold group-hover/list:text-forest-deep">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-[15px] text-cream/90 font-medium leading-relaxed group-hover/list:text-white transition-colors">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY OFFERINGS ── */}
        <section className="py-24 bg-stone-50 border-t border-forest/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
                Our Key Offerings
              </h2>
              <p className="text-lg text-forest/70 max-w-2xl mx-auto">
                We design and deliver initiatives that create meaningful, measurable and long-term outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                { 
                  title: "GLOBAL STUDENT PROGRAMMES", 
                  desc: "Immersive academic programmes, scholarships and innovation challenges in leading UK institutions.", 
                  icon: GraduationCap, 
                  img: studentImg,
                  features: [
                    "Bespoke summer/winter schools at top UK campuses.",
                    "Hackathons, innovation challenges and bootcamps.",
                    "Cultural immersion and industry visits across the UK."
                  ]
                },
                { 
                  title: "EXECUTIVE EDUCATION & LEADERSHIP", 
                  desc: "Short- and mid-term executive programmes for senior leaders, alumni and professionals.", 
                  icon: Users, 
                  img: execImg,
                  features: [
                    "Leadership workshops delivered by Cambridge & Oxford faculty.",
                    "Corporate governance, strategy, and innovation modules.",
                    "Networking events with UK industry leaders and alumni."
                  ]
                },
                { 
                  title: "VISITING FACULTY & EXPERTS", 
                  desc: "Connect with global professors, researchers and practitioners for teaching and mentoring.", 
                  icon: BookOpen, 
                  img: facultyImg,
                  features: [
                    "Guest lectures and seminar series by subject matter experts.",
                    "Mentorship for university faculty and PhD students.",
                    "Curriculum development and academic capacity building."
                  ]
                },
                { 
                  title: "RESEARCH & INNOVATION", 
                  desc: "Joint research, thought leadership, conferences and commercialisation support.", 
                  icon: FlaskConical, 
                  img: researchImg,
                  features: [
                    "Facilitation of joint international research grants.",
                    "Co-hosting academic conferences and symposiums in the UK.",
                    "Pathways for commercialising university IP in global markets."
                  ]
                },
                { 
                  title: "STARTUP & INNOVATION BRIDGE", 
                  desc: "UK market exposure, mentorship, investor connect and global expansion support.", 
                  icon: Rocket, 
                  img: startupImg,
                  features: [
                    "Incubator and accelerator programmes for student startups.",
                    "Access to UK venture capital and angel investor networks.",
                    "Soft-landing support for spin-outs expanding to the UK."
                  ]
                },
                { 
                  title: "FACULTY & RESEARCHER PARTNERSHIP", 
                  desc: "Faculty development, research visits and academic exchange opportunities.", 
                  icon: Handshake, 
                  img: mobilityImg,
                  features: [
                    "Sabbatical placements and visiting scholar programmes.",
                    "Collaborative teaching and joint-degree exploration.",
                    "Continuous professional development for educators."
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-forest/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-40 w-full relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gold border-4 border-white flex items-center justify-center text-forest-deep shadow-md">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex flex-col flex-grow text-center">
                    <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-forest-deep mb-4 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-forest/70 leading-relaxed mb-6 flex-grow">
                      {item.desc}
                    </p>
                    <button
                      onClick={() => setSelectedOffering(item)}
                      className="inline-flex items-center justify-center gap-2 text-xs font-bold text-gold uppercase tracking-[0.2em] hover:text-forest-deep transition-colors mt-auto"
                    >
                      LEARN MORE <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PARTNER ── */}
        <section className="py-24 bg-forest-deep text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-serif italic text-white text-center mb-16">
              Why Universities Partner with GEL
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 text-center divide-x divide-white/10">
              {[
                { title: "UK-BASED EXPERTISE", desc: "Deep connections across Cambridge, Oxford and the UK ecosystem.", icon: Globe2 },
                { title: "END-TO-END SUPPORT", desc: "From strategy and design to delivery and long-term engagement.", icon: Network },
                { title: "BESPOKE & FLEXIBLE", desc: "Tailored solutions aligned with your institution's goals.", icon: Target },
                { title: "MEASURABLE IMPACT", desc: "Programs designed for real outcomes and sustainable partnerships.", icon: Zap },
                { title: "GLOBAL NETWORK ACCESS", desc: "Academia, industry, research, investors and policy leaders.", icon: Users },
                { title: "TRUSTED PARTNER", desc: "Committed to integrity, quality and long-term collaboration.", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center px-4">
                  <item.icon className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4 leading-relaxed">
                    {item.title}
                  </h4>
                  <p className="text-[13px] text-cream/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Banner / Modal for Offerings */}
      {selectedOffering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm" onClick={() => setSelectedOffering(null)} />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="h-48 md:h-64 w-full relative">
              <img src={selectedOffering.img} alt={selectedOffering.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedOffering(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <selectedOffering.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-forest-deep leading-tight">
                  {selectedOffering.title}
                </h3>
              </div>
              <p className="text-forest/80 text-lg leading-relaxed mb-6">
                {selectedOffering.desc}
              </p>
              {selectedOffering.features && (
                <ul className="space-y-3 mb-8">
                  {selectedOffering.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-forest/90">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  search={{ source: "universities-offerings" }}
                  onClick={() => setSelectedOffering(null)}
                  className="bg-gold hover:bg-gold/90 text-forest-deep font-bold py-3 px-8 rounded-full transition-colors text-center"
                >
                  Contact Us
                </Link>
                <button 
                  onClick={() => setSelectedOffering(null)}
                  className="bg-stone-100 hover:bg-stone-200 text-forest font-semibold py-3 px-8 rounded-full transition-colors text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
