import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact Us — Global Education Lab" }],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-24 pb-24 font-sans selection:bg-forest/10 selection:text-forest">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 relative">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-gold"></span>
              <span className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase">Vol. 01 — Correspondence</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-forest leading-[1.05] font-serif">
              Begin a <br />
              <span className="font-serif italic text-gold font-normal">quiet conversation.</span>
            </h1>
            
            <p className="max-w-md text-[15px] leading-relaxed text-forest/70 pt-4">
              Whether you are shaping an executive cohort, exploring a school partnership, or scaling a venture across borders — our Cambridge desk receives your letter personally, and replies in kind.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            <div className="flex justify-start lg:justify-end mb-16 lg:absolute lg:top-0 lg:right-0">
              <span className="text-[14px] font-bold tracking-[0.2em] text-forest/40 uppercase">Cambridge - Est. Waterbeach</span>
            </div>
            
            <div className="border-t border-b border-forest/10 py-8 mt-12 relative w-full max-w-[280px]">
              <h3 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase mb-4">Reply Within</h3>
              <div className="text-[4rem] font-serif text-forest leading-none mb-6">24h</div>
              <div className="flex items-center gap-2 text-[14px] font-bold tracking-widest text-forest/50 uppercase">
                <Clock className="h-3.5 w-3.5 text-gold" />
                MON-FRI • 09:00-18:00 GMT
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-14 relative shadow-sm border border-forest/10">
            {/* Corner Marks */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/40"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/40"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/40"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/40"></div>

            <div className="border-b border-forest/10 pb-6 mb-12 mt-4">
              <h4 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase mb-3">The Letter</h4>
              <div className="flex justify-between items-end">
                <h2 className="text-4xl text-forest font-serif italic">Write to us</h2>
                <span className="text-[15px] font-serif italic text-forest/40">Ref. GEL/CB25</span>
              </div>
            </div>

            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[14px] font-serif italic text-gold">01.</span>
                    <label className="text-[14px] font-bold tracking-[0.2em] text-forest/50 uppercase">First Name</label>
                  </div>
                  <input type="text" placeholder="Karan" className="w-full border-b border-forest/10 bg-transparent py-2 text-[15px] text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
                </div>
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[14px] font-serif italic text-gold">02.</span>
                    <label className="text-[14px] font-bold tracking-[0.2em] text-forest/50 uppercase">Last Name</label>
                  </div>
                  <input type="text" placeholder="Sharma" className="w-full border-b border-forest/10 bg-transparent py-2 text-[15px] text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[14px] font-serif italic text-gold">03.</span>
                  <label className="text-[14px] font-bold tracking-[0.2em] text-forest/50 uppercase">Email Address</label>
                </div>
                <input type="email" placeholder="you@organization.com" className="w-full border-b border-forest/10 bg-transparent py-2 text-[15px] text-forest placeholder:text-forest/30 focus:border-forest focus:outline-none transition-colors" />
              </div>

              <div className="relative">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-[14px] font-serif italic text-gold">04.</span>
                  <label className="text-[14px] font-bold tracking-[0.2em] text-forest/50 uppercase">I'm interested in</label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { label: "General enquiry", active: true },
                    { label: "School Leaders", active: false },
                    { label: "Business Leaders", active: false },
                    { label: "Students & Teachers", active: false },
                    { label: "Global Ventures", active: false },
                    { label: "Media & Press", active: false }
                  ].map((tag, i) => (
                    <button type="button" key={i} className={`border px-4 py-2.5 text-[15px] font-bold tracking-wide transition-colors flex items-center gap-3 ${tag.active ? "border-[#0A301D] bg-[#0A301D] text-white" : "border-forest/10 bg-transparent text-forest/60 hover:border-forest/30 hover:text-forest"}`}>
                      {tag.active ? (
                        <span className="w-1.5 h-1.5 bg-gold shrink-0"></span>
                      ) : (
                        <span className="w-1 h-1 bg-forest/20 shrink-0"></span>
                      )}
                      <span className="truncate">{tag.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative pt-4">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[14px] font-serif italic text-gold">05.</span>
                  <label className="text-[14px] font-bold tracking-[0.2em] text-forest/50 uppercase">Message</label>
                </div>
                {/* Simulated lined paper for textarea */}
                <div className="relative">
                   <textarea rows={3} placeholder="Tell us a little about what you're planning..." className="w-full bg-transparent py-2 text-[15px] leading-[3rem] text-forest placeholder:text-forest/30 focus:outline-none resize-none relative z-10" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 47px, rgba(10,48,29,0.05) 48px)'}}></textarea>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-end justify-between gap-6 pt-12">
                <p className="text-[13px] text-forest/40 max-w-[250px] leading-relaxed">
                  By submitting, you consent to be contacted by the Global Education Lab team.
                </p>
                <button type="button" className="inline-flex items-center justify-center gap-4 bg-[#0A301D] px-8 py-5 text-[15px] font-bold tracking-[0.2em] text-white transition-all hover:bg-forest-deep">
                  SEND <br/> LETTER <span className="w-6 h-px bg-white/40 ml-2"></span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Our Home Card */}
            <div className="relative overflow-hidden bg-[#0A301D] text-white shadow-sm flex-grow border border-forest/30">
              <div className="absolute inset-x-0 top-0 h-48 w-full bg-[#082617]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative p-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h4 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase mb-3">Our Home</h4>
                    <h2 className="text-3xl text-white font-serif italic">The Cambridge Desk</h2>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="text-[15px] font-serif italic text-gold">G·E·L</span>
                  </div>
                </div>
                
                <div className="space-y-8 mb-8">
                  <div className="flex gap-4">
                    <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-bold tracking-[0.2em] text-white/50 uppercase mb-2">Head Office</p>
                      <p className="text-[15px] font-medium leading-relaxed text-white/90">Global Education Lab Ltd<br/>Stirling House, Denny End Road<br/>Waterbeach, CB25 9PB<br/>Cambridge, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[13px] font-bold tracking-[0.2em] text-white/50 uppercase mb-2">Telephone</p>
                        <p className="text-[15px] font-medium text-white/90">+44 (0)1223 302 904</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[13px] font-bold tracking-[0.2em] text-white/50 uppercase mb-2">Email</p>
                        <p className="text-[15px] font-medium text-white/90 truncate max-w-[120px]">info@globaledulab.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map area mockup */}
                <div className="mt-auto relative rounded overflow-hidden h-48 bg-[#0D3B24]">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-[#88B04B]" fill="#88B04B" />
                  </div>
                  <div className="absolute right-0 bottom-0">
                    <button className="bg-[#082617] text-white/90 text-[13px] font-bold tracking-widest uppercase px-4 py-3 flex items-center gap-2 hover:text-white transition-colors">
                      Directions <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner with us Card */}
            <div className="bg-white p-10 shadow-sm border border-forest/10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-[0.5px] border-gold/20"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-[0.5px] border-gold/10"></div>
              
              <h4 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase mb-3 relative z-10">Institutional Access</h4>
              <h2 className="text-3xl text-forest font-serif italic mb-4 relative z-10">Partner with us</h2>
              <p className="text-[15px] text-forest/70 mb-8 leading-relaxed relative z-10 max-w-[280px]">
                Schools, universities and organisations exploring bespoke collaborations may reach our partnerships desk directly.
              </p>
              <a href="/global-ventures" className="inline-flex items-center gap-2 text-[14px] font-bold tracking-[0.2em] text-forest hover:text-gold transition-colors uppercase border-b border-forest/30 hover:border-gold pb-1 relative z-10">
                Explore Global Ventures <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
            
          </div>
        </div>

        {/* Bottom Locations */}
        <div className="pt-8">
          <div className="flex justify-between items-end border-b border-forest/10 pb-6 mb-8">
            <div>
              <h4 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase mb-3">Our Presence</h4>
              <h2 className="text-4xl text-forest font-serif italic">Across three continents</h2>
            </div>
            <span className="text-[15px] font-serif italic text-forest/40">Index of desks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-forest/10">
            {/* Cambridge */}
            <div className="p-8 pb-16 relative">
              <div className="flex justify-between items-start mb-10">
                <h5 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase">United Kingdom</h5>
                <span className="text-[15px] font-serif italic text-forest/30">01</span>
              </div>
              <p className="text-2xl font-bold text-forest font-serif mb-2">Cambridge</p>
              <p className="text-[14px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-6">Headquarters</p>
              <p className="text-[15px] text-forest/70 leading-relaxed max-w-[220px]">Where our research, leadership and global education programmes are shaped.</p>
            </div>

            {/* India */}
            <div className="p-8 pb-16 bg-white relative shadow-[0_0_40px_rgba(10,48,29,0.03)] border-x border-forest/5">
              <div className="flex justify-between items-start mb-10">
                <h5 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase">India</h5>
                <span className="text-[15px] font-serif italic text-forest/30">02</span>
              </div>
              <p className="text-2xl font-bold text-forest font-serif mb-2">Delhi — Mumbai</p>
              <p className="text-[14px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-6">Regional Office</p>
              <p className="text-[15px] text-forest/70 leading-relaxed max-w-[220px]">Programme delivery and school partnerships across the subcontinent.</p>
            </div>

            {/* Global */}
            <div className="p-8 pb-16 relative">
              <div className="flex justify-between items-start mb-10">
                <h5 className="text-[14px] font-bold tracking-[0.2em] text-gold uppercase">International</h5>
                <span className="text-[15px] font-serif italic text-forest/30">03</span>
              </div>
              <p className="text-2xl font-bold text-forest font-serif mb-2">Finland — Bali</p>
              <p className="text-[14px] font-bold tracking-[0.2em] text-forest/40 uppercase mb-6">Residencies</p>
              <p className="text-[15px] text-forest/70 leading-relaxed max-w-[220px]">Immersive leadership residencies and cross-cultural learning experiences.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
