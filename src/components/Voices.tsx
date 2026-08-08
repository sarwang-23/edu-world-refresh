import React from 'react';
import rosalindHowell from '@/assets/people/rosalind_howell.jpg';
import samTully from '@/assets/people/sam_tully.jpg';
import yvonneWalburga from '@/assets/people/yvonne_walburga.jpg';
import alumni1Img from '@/assets/alumni1.jpg';
import lakshmiKothaImg from '@/assets/lakshmi_kotha.jpg';
import jaideepPrabhuImg from '@/assets/jaideep_prabhu.jpg';

export function Voices() {
  const testimonials = [
    {
      q: "There were times during the weekend when I knew that what I was learning would stick with me throughout my career journey... There aren't many experiences where you can feel yourself changing and growing in real time, but at every second of this weekend I felt myself growing in confidence.",
      a: "Rosalind Howell",
      r: "Zero-to-One Participant",
      tag: "Startup Bootcamp",
      img: rosalindHowell,
    },
    {
      q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School... Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce.",
      a: "Sam Tully",
      r: "Trustee, Pratham UK",
      tag: "GILP Delegate",
      img: samTully,
    },
    {
      q: "I was humbled and exhilarated for the recognition of the potential of EquiGen... This weekend emphasized the power of an amazing team, driven by a single vision and a clear purpose. Building an entrepreneurial mindset as a researcher is a powerful toolkit.",
      a: "Dr. Yvonne Walburga",
      r: "Post-doctoral Research Affiliate",
      tag: "University of Cambridge",
      img: yvonneWalburga,
    },
    {
      q: "This programme helped articulate something critical: leadership is also about language. It equips founders to translate their journey into frameworks that resonate with investors and stakeholders. That shift, from building to being understood, unlocks the next level of growth and influence.",
      a: "Snigdha Manchanda",
      r: "Founder, TeaTrunk (India)",
      tag: "GILP Alumni",
      img: alumni1Img,
    },
  ];

  return (
    <section className="bg-cream py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-gold">What They Say</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.25rem] font-bold text-forest-deep leading-tight tracking-tight">
              Voices from Our{" "}
              <span className="italic font-serif text-forest">Community</span>
            </h2>
          </div>
          <p className="text-[15px] text-forest/80 max-w-[260px] leading-relaxed md:text-right hidden">
            Real stories from learners, leaders and innovators.
          </p>
        </div>

        {/* Layout: Left 2 Featured Testimonials, Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Side: Lakshmi Samyuktha Kotha & Prof. Jaideep Prabhu FBA */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Testimonial 2: Prof. Jaideep Prabhu FBA */}
            <div className="group relative rounded-3xl bg-forest-deep p-8 text-white shadow-xl border border-white/10 flex flex-col justify-between flex-1 overflow-hidden hover:border-gold/40 transition-colors duration-300">
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <span className="bg-gold/15 border border-gold/30 text-gold text-[12px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full">
                    Cambridge Judge Business School
                  </span>
                </div>
                <p className="text-[15px] md:text-[15.5px] text-cream/95 leading-[1.7] font-normal mb-6">
                  "GEL's programmes offer a roadmap for frugal innovation across a broad segment of learners. Learners return with fresh ideas, deeper confidence, and a renewed sense of purpose, ready to lead change for businesses, teams or themselves."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <img src={jaideepPrabhuImg} alt="Prof. Jaideep Prabhu FBA" className="w-14 h-14 rounded-full object-cover border-2 border-gold shrink-0 shadow-md" />
                <div>
                  <h4 className="text-[16px] font-bold text-white leading-tight">Prof. Jaideep Prabhu FBA</h4>
                  <p className="text-[13px] text-cream/75 leading-tight mt-0.5">Professor of Marketing & Vice Dean, Cambridge Judge Business School, University of Cambridge</p>
                </div>
              </div>
            </div>

            {/* Testimonial 1: Lakshmi Samyuktha Kotha */}
            <div className="group relative rounded-3xl bg-forest-deep p-8 text-white shadow-xl border border-white/10 flex flex-col justify-between flex-1 overflow-hidden hover:border-gold/40 transition-colors duration-300">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <span className="bg-gold/15 border border-gold/30 text-gold text-[12px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full">
                    Cambridge & Finland Alumni
                  </span>
                </div>
                <p className="text-[15px] md:text-[15.5px] text-cream/95 leading-[1.7] font-normal mb-6">
                  "Through my participation in both the Cambridge and Finland programmes, I gained exceptional exposure to the best global practices in education. This experience has truly inspired me to implement some of these changes, which will positively impact over 30,000 students across our institutions."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <img src={lakshmiKothaImg} alt="Lakshmi Samyuktha Kotha" className="w-14 h-14 rounded-full object-cover border-2 border-gold shrink-0 shadow-md" />
                <div>
                  <h4 className="text-[16px] font-bold text-white leading-tight">Lakshmi Samyuktha Kotha</h4>
                  <p className="text-[13px] text-cream/75 leading-tight mt-0.5">Executive Dean, Narayana Group of Schools – India</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Other Community Testimonials Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 border border-forest/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <span key={si} className="text-gold text-[13px]">★</span>
                      ))}
                    </div>
                    <span className="bg-forest-deep text-white text-[10.5px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full shrink-0">
                      {t.tag}
                    </span>
                  </div>

                  <span className="block text-[2.5rem] text-gold/80 font-serif leading-none -mt-1 -ml-1 select-none">"</span>

                  <p className="text-[14px] text-forest-deep/95 leading-[1.65] -mt-3 mb-5 font-normal">
                    {t.q}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-forest/8 flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-[14px] shrink-0 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden">
                    {t.img ? (
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
                    ) : (
                      t.a[0]
                    )}
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-forest-deep leading-tight">{t.a}</h5>
                    <p className="text-[13px] text-forest/75 mt-0.5">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
