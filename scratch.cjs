const fs = require('fs');

const impactCode = fs.readFileSync('src/routes/our-impact.tsx', 'utf-8');
const entrepreneurshipCode = fs.readFileSync('src/routes/entrepreneurship.tsx', 'utf-8');

// Extract Testimonials from our-impact.tsx
const testimonialsStart = impactCode.indexOf('function Testimonials() {');
const testimonialsEnd = impactCode.indexOf('export const Route', testimonialsStart) === -1 ? impactCode.length : impactCode.indexOf('export const Route', testimonialsStart); // wait, it's at the end of the file.
const testimonialsCode = impactCode.slice(testimonialsStart);

// We need to extract just the array and the JSX for the grid and modal.
const testimonialsArrayStr = impactCode.slice(impactCode.indexOf('const testimonials = ['), impactCode.indexOf('return (', impactCode.indexOf('const testimonials = [')));

// Let's just write the new Community component text and replace it.
const newCommunity = `function Community() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  
  const testimonials = [
    {
      q: "An incredible week at the University of Cambridge filled with unforgettable memories, meaningful conversations, and the beginning of exciting new synergies and alliances. This journey has been a true milestone and a benchmark for many exciting initiatives ahead. Grateful for the connections, collaborations, and shared vision that emerged throughout the week. Looking forward to announcing several new engagements and partnerships very soon. The journey has just begun.",
      a: "Dr. Dhruv Galgotia",
      r: "CEO, Galgotias Education Group — GILP Delegate",
      img: dhruvGalgotia,
      link: "https://lnkd.in/p/d7vJ9pPF"
    },
    {
      q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School with a great cohort from India and a few other places. What a week it was, covering AI, geopolitics, marketing, branding, strategy, rhetoric, entrepreneurship and so much more... That is why I called it a Rolls Royce.",
      a: "Sam Tully",
      r: "Trustee, Pratham UK — GILP Delegate",
      img: samTully,
      link: "https://www.linkedin.com/posts/sam-tully_its-like-a-rolls-royce-thats-how-sam-activity-7480318064505462784-Fnbc"
    },
    {
      q: "The 48 hours pushed me to think about a problem I knew scientifically from a completely different angle, as a market structure failure, not just a research gap. That reframe was the most valuable part.",
      a: "Sydney Conner",
      r: "PhD in Biomedical Engineering, University of Cambridge — Zero-to-One",
      img: sydneyConner,
      link: "https://www.linkedin.com/posts/sydney-j-conner_cjbs-z21-zerotoone-activity-7474838677874065409-qcfI"
    },
    {
      q: "Grateful for the practical insights, peer-to-peer learning, and collaborative spirit. Kudos to the Global Education Lab and team for delivering such an impactful programme!",
      a: "Amarjit Singh",
      r: "CEO, India Business Forum — GILP Delegate",
      img: amarjitSingh,
      link: "https://www.linkedin.com/posts/amarjit-singh-13860aa_great-leaders-know-that-learning-never-stops-activity-7485621706183688192-W-d7"
    },
    {
      q: "Sometimes life changes on a random Monday afternoon. Mine did - at THE UNIVERSITY OF CAMBRIDGE !!!!! What started as a quiet summer turned into a turning point I didn’t even know I needed. A place, a community, a classroom, conversations and souls that shifted my mind and my path, forever.",
      a: "Jivika Vikamshi",
      r: "Co-Founder, Manashakti — GEL Summer Immersion",
      img: jivikaVikamshi,
      link: "https://www.linkedin.com/posts/jivika11_how-my-cambridge-summer-became-a-turning-activity-7404572610535043072-wgWJ"
    },
    {
      q: "I was impressed by how far ventures (on GEL programme) got in such a short time, considering stakeholders and business models and how to make the sustainable growth of their ideas possible. Thank you for the opportunity to mentor, and I’m excited to follow more of GEL’s programmes.",
      a: "Lucy Jung",
      r: "Founder & CEO, LYEONS — GEL Mentor",
      img: lucyJung,
      link: "https://www.linkedin.com/posts/lyeons_digitalhealth-innovation-brainhealth-activity-7474751134113619968-4SC6"
    },
    {
      q: "More importantly, KavachAI has been selected for the GEL Global Ventures Programme, unlocking support for global expansion and UK market exploration. Building for the UK means meeting some of the world's highest expectations around privacy and accountability. Those standards don't just prepare us for a new market—they make our product stronger everywhere!!",
      a: "Abhishek Kumar",
      r: "Founder, Kavach AI — GEL Graduate Summer Programme",
      img: abhishekKumar,
      link: "https://lnkd.in/p/gAwu3seA"
    },
    {
      q: "Good team vibe, good organisation, like the short content inserts.",
      a: "Linda Tang",
      r: "Medicine & Natural Science Student, University of Cambridge",
      img: lindaTang,
      link: "https://lnkd.in/p/dMFAm33S"
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
        
        {/* 4-column strict grid (Perfectly aligned, professional look) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
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
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
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
                    <img src={selectedTestimonial.img} alt={selectedTestimonial.a} className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white" />
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

      <div className="bg-forest-deep w-full py-12 md:py-16 border-t border-forest-deep/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold mb-6 block">START YOUR ENTREPRENEURIAL JOURNEY</span>
              <h2 className="text-4xl font-bold tracking-tight text-cream md:text-[4rem] leading-[1.1] mb-6">
                Build confidently.<br />
                Innovate boldly.<br />
                <span className="text-gold">Scale globally.</span>
              </h2>
              <p className="text-[16px] text-cream/80 leading-relaxed max-w-xl font-medium">
                Be part of a global community of innovators and builders shaping the ventures — and the ideas — of the next decade.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-5 shrink-0 md:pb-2">
              <Link to="/contact" search={{ source: "Entrepreneurship" }} className="inline-flex items-center justify-between w-full md:w-auto min-w-[260px] gap-4 rounded-xl bg-gold px-8 py-4 text-[15px] font-bold text-forest-deep transition-all hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(200,160,90,0.3)]">
                Explore Programmes <ArrowUpRight className="h-5 w-5" />
              </Link>
              <a href="mailto:info@globaledulab.com" className="text-[15px] font-bold uppercase tracking-[0.25em] text-cream/80 hover:text-gold transition-colors">
                INFO@GLOBALEDULAB.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
`;

const communityStart = entrepreneurshipCode.indexOf('function Community() {');
const communityEnd = entrepreneurshipCode.length;
const oldCommunity = entrepreneurshipCode.slice(communityStart, communityEnd);

let newCode = entrepreneurshipCode.replace(oldCommunity, newCommunity);

// Now add imports at top
let importsToAdd = `
import { useState } from 'react';
import dhruvGalgotia from '@/assets/people/dhruv_galgotia.jpg';
import samTully from '@/assets/people/sam_tully.jpg';
import amarjitSingh from '@/assets/people/amarjit_singh.jpg';
import jivikaVikamshi from '@/assets/people/jivika_vikamshi.jpg';
import lucyJung from '@/assets/people/lucy_jung.jpg';
import abhishekKumar from '@/assets/people/abhishek_kumar.jpg';
import lindaTang from '@/assets/people/linda_tang.jpg';
`;
newCode = importsToAdd + "\\n" + newCode;
newCode = newCode.replace("User,", "User, X,");

fs.writeFileSync('src/routes/entrepreneurship.tsx', newCode);
console.log('done');
