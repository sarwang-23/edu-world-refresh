import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: "The Visual Archive — Global Education Lab" }],
  }),
});

function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571260899304-42507611e121?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588196749597-9ff0464ac641?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans selection:bg-forest/10 selection:text-forest">
      
      {/* Hero Section */}
      <section className="bg-[#0A301D] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#88B04B 1px, transparent 1px), linear-gradient(90deg, #88B04B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 border border-gold flex items-center justify-center rounded-full text-[6px] text-gold shrink-0">@</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">The Visual Archive • Vol. 01</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-sans">
                Rooms where <br />
                <span className="font-serif italic text-gold font-normal">futures</span><br />
                are drafted.
              </h1>
              
              <p className="max-w-md text-[14px] leading-relaxed text-white/80 pt-4">
                A cinematic archive of leaders, educators and learners across our programmes — delivered in the UK, India, Finland, Estonia and Indonesia.
              </p>

              <div className="pt-8 border-t border-white/20 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold font-sans text-white mb-1">05</p>
                  <p className="text-[8px] font-bold tracking-[0.2em] text-white/50 uppercase">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-sans text-white mb-1">150+</p>
                  <p className="text-[8px] font-bold tracking-[0.2em] text-white/50 uppercase">Business Leaders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-sans text-white mb-1">5,000+</p>
                  <p className="text-[8px] font-bold tracking-[0.2em] text-white/50 uppercase">Students Engaged</p>
                </div>
              </div>
            </div>

            {/* Right Content - Main Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] relative">
                <img src={images[0]} alt="Cambridge Formal Hall" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A301D]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase block mb-1">Cover</span>
                    <p className="text-white font-medium text-sm">Cambridge • Michaelmas '24</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#F7F5F0] border-y border-forest/10 py-4 overflow-hidden relative flex">
        <div className="flex gap-8 items-center whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex gap-8 items-center shrink-0">
              {['CAMBRIDGE', 'LONDON', 'HELSINKI', 'TALLINN', 'BALI', 'NEW DELHI', 'MUMBAI', 'BENGALURU'].map((city, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase">{city}</span>
                  <span className="w-1.5 h-1.5 border border-gold/50 rounded-full flex items-center justify-center">
                     <span className="w-0.5 h-0.5 bg-gold rounded-full"></span>
                  </span>
                </div>
              ))}
             </div>
          ))}
        </div>
        <div className="flex gap-8 items-center whitespace-nowrap animate-marquee absolute top-4 left-full">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex gap-8 items-center shrink-0">
              {['CAMBRIDGE', 'LONDON', 'HELSINKI', 'TALLINN', 'BALI', 'NEW DELHI', 'MUMBAI', 'BENGALURU'].map((city, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-forest/40 uppercase">{city}</span>
                  <span className="w-1.5 h-1.5 border border-gold/50 rounded-full flex items-center justify-center">
                     <span className="w-0.5 h-0.5 bg-gold rounded-full"></span>
                  </span>
                </div>
              ))}
             </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />

      {/* Chapter 01 - Corporate Leadership */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-3">Chapter 01 - Corporate Leadership</h4>
              <h2 className="text-5xl md:text-6xl text-forest font-serif font-bold tracking-tight">The Boardroom,<br/>reimagined.</h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              Over 150 business leaders trained through advanced workshops delivered in partnership with the University of Cambridge and other trusted institutions.
            </p>
          </div>

          {/* Grid Layout for Chapter 1 */}
          <div className="flex flex-col gap-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
                <div className="md:col-span-2 h-[300px] md:h-full rounded-[2rem] overflow-hidden">
                   <img src={images[1]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-rows-2 gap-4 h-[500px] md:h-full">
                   <div className="rounded-[2rem] overflow-hidden">
                      <img src={images[2]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                   </div>
                   <div className="rounded-[2rem] overflow-hidden">
                      <img src={images[3]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-[300px] rounded-[2rem] overflow-hidden">
                   <img src={images[4]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                </div>
                <div className="h-[300px] rounded-[2rem] overflow-hidden">
                   <img src={images[5]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                </div>
                <div className="h-[300px] rounded-[2rem] overflow-hidden">
                   <img src={images[6]} alt="Corporate Leadership" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Full Width Divider Section */}
      <section className="relative h-[600px] md:h-[800px] w-full overflow-hidden">
         <img src={images[7]} alt="Past Programmes" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0A301D] via-[#0A301D]/40 to-transparent"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 z-10">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-4">Past Programmes</h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
              Five countries. <span className="font-serif italic text-gold font-normal">Hundreds of institutions.</span> One extended classroom.
            </h2>
            <p className="text-[14px] text-white/80 max-w-lg leading-relaxed">
              Highlights from previous programmes across the UK, India, Finland, Estonia and Indonesia.
            </p>
         </div>
      </section>

      {/* Chapter 02 - School Leadership */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-3">Chapter 02 - School Leadership</h4>
              <h2 className="text-5xl md:text-6xl text-forest font-serif font-bold tracking-tight">Educators, in dialogue.</h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              L&D programmes delivered across five countries for over 100 educational organisations.
            </p>
          </div>

          {/* Grid Layout for Chapter 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden">
                   <img src={images[i % images.length]} alt="School Leadership" className="w-full h-full object-cover" />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Chapter 03 - Student Programmes */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-3">Chapter 03 - Student Programmes</h4>
              <h2 className="text-5xl md:text-6xl text-forest font-serif font-bold tracking-tight max-w-xl">The next generation, at work.</h2>
            </div>
            <p className="text-[14px] text-forest/70 max-w-sm leading-relaxed">
              STEM and Entrepreneurship workshops & summer camps for 5,000+ students — from young learners to undergraduates.
            </p>
          </div>

          {/* Masonry Layout for Chapter 3 */}
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
             {[
               "aspect-[3/4]", "aspect-[4/3]", "aspect-[4/5]", 
               "aspect-[2/3]", "aspect-square", "aspect-[3/4]",
               "aspect-square", "aspect-[3/2]", "aspect-square",
               "aspect-[4/5]", "aspect-[3/4]", "aspect-square"
             ].map((ratio, i) => (
                <div key={i} className={`rounded-[2rem] overflow-hidden relative break-inside-avoid ${ratio}`}>
                   <img src={images[(i + 3) % images.length]} alt="Student Programmes" className="absolute inset-0 w-full h-full object-cover" />
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
