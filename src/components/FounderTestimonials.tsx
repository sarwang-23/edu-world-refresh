import { useState } from 'react';
import { ArrowUpRight, X, Quote } from 'lucide-react';
import sydneyImg from '@/assets/sydney.jpg';
import tendaiImg from '@/assets/tendai.jpg';

export function FounderTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  
  const testimonials = [
    {
      q: "The 48 hours pushed me to think about a problem I knew scientifically from a completely different angle, as a market structure failure, not just a research gap. That reframe was the most valuable part.",
      a: "Sydney Conner",
      r: "PhD in Biomedical Engineering, University of Cambridge — Zero-to-One",
      img: sydneyImg,
      link: "https://www.linkedin.com/posts/sydney-j-conner_cjbs-z21-zerotoone-activity-7474838677874065409-qcfI"
    },
    {
      q: "What I liked most about GEL Zero-to-One was the ability to work with mentors as they really helped transform and learn new skills and ways of thinking. It helped me refine my idea by making me think about who would actually buy it, not just whether it works.",
      a: "Tendai Nzonzo",
      r: "Winning Team, Sana AI — Zero-to-One",
      img: tendaiImg,
      link: "https://www.linkedin.com/"
    }
  ];

  return (
    <section className="bg-cream pt-24 md:pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">VOICES FROM OUR FOUNDERS</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-forest-deep md:text-[3.5rem] leading-[1.1]">
            Built in our programmes.<br/>
            <span className="font-serif italic text-gold relative inline-block">
              Backed by our network.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gold/30 rounded-full" />
            </span>
          </h2>
        </div>
        
        {/* 2-column centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-16 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white border border-forest/10 p-8 flex flex-col hover:shadow-[0_20px_40px_rgba(20,40,30,0.08)] hover:-translate-y-1 transition-all duration-400 cursor-pointer overflow-hidden h-full"
              onClick={() => setSelectedTestimonial(t)}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-6 text-[8rem] font-serif leading-none text-forest-deep/[0.03] select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">"</div>

              <div className="inline-flex items-center gap-2 rounded-md bg-forest-deep/5 px-3 py-1.5 mb-6 self-start border border-forest-deep/10">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-forest-deep/80">
                  {t.r.split('—')[1]?.trim() || 'Alumni'}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[0.95rem] font-medium text-forest-deep/90 leading-[1.7] line-clamp-6 mb-6 relative z-10">
                  {t.q}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedTestimonial(t); }}
                  className="inline-flex items-center gap-1.5 text-gold font-bold uppercase tracking-[0.2em] text-[15px] hover:gap-2 transition-all duration-300 mb-6"
                >
                  Read More <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <div className="h-px w-full bg-forest-deep/10 mb-5" />

                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gold/40 group-hover:ring-gold/80 transition-all duration-300">
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-gold border-2 border-cream" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-forest-deep leading-tight mb-0.5">{t.a}</p>
                    <p className="text-[15px] text-forest-deep/80 font-medium leading-tight line-clamp-1">{t.r.split('—')[0]?.trim()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12">
          <div
            className="absolute inset-0 bg-forest-deep/90 backdrop-blur-md"
            onClick={() => setSelectedTestimonial(null)}
          />
          <div className="relative w-full max-w-3xl bg-cream rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] border border-cream/80 animate-in fade-in zoom-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-t-[2.5rem]" />
            <div className="p-8 md:p-14">
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 p-3 rounded-full border border-forest-deep/15 bg-forest-deep/5 hover:bg-forest-deep/10 text-forest-deep/80 hover:text-forest-deep transition-all"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-4">
                <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="relative mb-6">
                    <img src={selectedTestimonial.img} alt={selectedTestimonial.a} className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white" loading="lazy" />
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gold border-4 border-cream flex items-center justify-center">
                      <Quote className="h-3 w-3 text-forest-deep" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-forest-deep mb-2">{selectedTestimonial.a}</h3>
                  <p className="text-[15px] text-forest/80 font-medium leading-relaxed mb-6">
                    {selectedTestimonial.r}
                  </p>
                  <a href={selectedTestimonial.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-forest-deep px-6 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-forest hover:shadow-lg group/btn">
                    View on LinkedIn <ArrowUpRight className="h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -top-10 -left-6 text-[8rem] font-serif leading-none text-gold/20 select-none">"</div>
                  <div className="relative z-10 space-y-6">
                    <p className="text-[1.1rem] md:text-[1.25rem] text-forest-deep/90 leading-[1.8] font-medium whitespace-pre-line">
                      {selectedTestimonial.q}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
