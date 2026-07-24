import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Mail, ArrowUpRight, Send } from "lucide-react";
import cambridgeImg from "@/assets/cambridge.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact Us — Global Education Lab" }],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-24 pb-16 font-sans">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-transparent px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-forest/70 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              Cambridge • United Kingdom
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-forest leading-[1.05]">
              Let's start a <br />
              <span className="font-serif italic text-gold">conversation.</span>
            </h1>
            <p className="max-w-md text-[15px] leading-relaxed text-forest/80 pt-2">
              Whether you're planning an executive cohort, exploring a school partnership, or scaling a venture across borders — our Cambridge team is here to help you shape what comes next.
            </p>
          </div>

          {/* Right Column - Response Time */}
          <div className="lg:col-span-5 flex lg:justify-end items-start mt-4 lg:mt-0">
            <div className="bg-white rounded-[24px] p-7 shadow-sm border border-border/40 w-full max-w-sm">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-4">Response Time</h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-5xl font-bold text-forest">24h</span>
                <span className="text-[13px] font-semibold text-forest/60">average reply</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-forest/50 uppercase">
                <Clock className="h-4 w-4 text-gold" />
                MON - FRI • 09:00 - 18:00 GMT
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-border/40 relative">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-forest font-serif">Write to us</h2>
              <span className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase">EN | ENGLISH</span>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-forest/50 uppercase">First Name</label>
                  <input type="text" placeholder="Karan" className="w-full border-b border-border/60 bg-transparent py-2.5 text-[15px] font-medium text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-forest/50 uppercase">Last Name</label>
                  <input type="text" placeholder="Sharma" className="w-full border-b border-border/60 bg-transparent py-2.5 text-[15px] font-medium text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-forest/50 uppercase">Email *</label>
                <input type="email" placeholder="you@organization.com" className="w-full border-b border-border/60 bg-transparent py-2.5 text-[15px] font-medium text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
              </div>

              <div className="space-y-4 pt-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-forest/50 uppercase">I'm interested in</label>
                <div className="flex flex-wrap gap-2.5">
                  {["General enquiry", "School Leaders", "Business Leaders", "Students & Teachers", "Global Ventures", "Media & Press"].map((tag, i) => (
                    <button type="button" key={i} className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${i === 0 ? "border-forest bg-forest text-white" : "border-border/60 bg-transparent text-forest/60 hover:border-forest hover:text-forest"}`}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-forest/50 uppercase">Message *</label>
                <textarea rows={3} placeholder="Tell us a little about what you're planning..." className="w-full border-b border-border/60 bg-transparent py-3 text-[15px] font-medium text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none resize-none transition-colors"></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                <p className="text-[11px] font-medium text-forest/40">By submitting, you agree to be contacted by our team.</p>
                <button type="button" className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[13px] font-bold tracking-wide text-white transition-all hover:bg-forest-deep">
                  Send message <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Our Home Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#0A301D] text-white shadow-sm flex-grow min-h-[400px]">
              <div className="absolute inset-x-0 top-0 h-56 w-full">
                <img src={cambridgeImg} alt="Cambridge" className="h-full w-full object-cover opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A301D] via-[#0A301D]/80 to-transparent"></div>
              </div>
              
              <div className="relative p-8 pt-48 h-full flex flex-col justify-end">
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase mb-8">Our Home</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-[#C2A36B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1.5">Head Office</p>
                      <p className="text-[14px] font-medium leading-relaxed">Global Education Lab Ltd<br/>Stirling House, Denny End Road<br/>Waterbeach, CB25 9PB<br/>Cambridge, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-white/10"></div>
                  
                  <div className="flex gap-4 items-center">
                    <Phone className="h-5 w-5 text-[#C2A36B] shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Telephone</p>
                      <p className="text-[14px] font-medium">+44 (0)1223 302 904</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <Mail className="h-5 w-5 text-[#C2A36B] shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Email</p>
                      <p className="text-[14px] font-medium">info@globaledulab.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner with us Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-border/40">
              <h4 className="text-[20px] font-bold text-forest font-serif mb-2">Partner with us</h4>
              <p className="text-[14px] text-forest/70 mb-5 leading-relaxed">Schools, universities and organisations exploring collaborations can reach our partnerships desk directly.</p>
              <a href="/global-ventures" className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-forest hover:text-gold transition-colors">
                Explore Global Ventures <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            
          </div>
        </div>

        {/* Bottom Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-7 shadow-sm border border-border/40">
            <h5 className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-2">Cambridge</h5>
            <p className="text-[18px] font-bold text-forest font-serif mb-2">Headquarters</p>
            <p className="text-[13px] text-forest/70 leading-relaxed">Where research, leadership and global education meet.</p>
          </div>
          <div className="bg-white rounded-[24px] p-7 shadow-sm border border-border/40">
            <h5 className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-2">India</h5>
            <p className="text-[18px] font-bold text-forest font-serif mb-2">Delhi - Mumbai</p>
            <p className="text-[13px] text-forest/70 leading-relaxed">Programme delivery and school partnerships across the subcontinent.</p>
          </div>
          <div className="bg-white rounded-[24px] p-7 shadow-sm border border-border/40">
            <h5 className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-2">Global</h5>
            <p className="text-[18px] font-bold text-forest font-serif mb-2">Finland - Bali</p>
            <p className="text-[13px] text-forest/70 leading-relaxed">Immersive residencies and international leadership experiences.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
