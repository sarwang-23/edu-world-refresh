import cambridgeImg from "@/assets/hero-image.jpg";
import rosalindHowell from '@/assets/people/rosalind_howell.jpg';
import samTully from '@/assets/people/sam_tully.jpg';
import yvonneWalburga from '@/assets/people/yvonne_walburga.jpg';

type TestimonialProps = {
  q: string;
  a: string;
  r: string;
  tag: string;
  img?: string;
  featured?: boolean;
};

export function SharedTestimonials({
  customTestimonials,
  featuredBgImage = cambridgeImg
}: {
  customTestimonials?: TestimonialProps[],
  featuredBgImage?: string
}) {
  const testimonials = customTestimonials || [
    {
      q: "There were times during the weekend when I knew that what I was learning would stick with me throughout my career journey... There aren't many experiences where you can feel yourself changing and growing in real time, but at every second of this weekend I felt myself growing in confidence.",
      a: "Rosalind Howell",
      r: "Zero-to-One Participant",
      tag: "Startup Bootcamp",
      img: rosalindHowell,
      featured: true,
    },
    {
      q: "I was privileged to attend the Global Education Lab's Global India Leadership Programme at the Cambridge Judge Business School... Somewhere everyone should visit at least once, you will not be disappointed. That is why I called it a Rolls Royce.",
      a: "Sam Tully",
      r: "Trustee, Pratham UK",
      tag: "GILP Delegate",
      img: samTully,
      featured: false,
    },
    {
      q: "I was humbled and exhilarated for the recognition of the potential of EquiGen... This weekend emphasized the power of an amazing team, driven by a single vision and a clear purpose. Building an entrepreneurial mindset as a researcher is a powerful toolkit.",
      a: "Dr. Yvonne Walburga",
      r: "Post-doctoral Research Affiliate",
      tag: "University of Cambridge",
      img: yvonneWalburga,
      featured: false,
    }
  ];

  const [featured, ...rest] = testimonials;

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
        </div>

        {/* Asymmetric Layout */}
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[4fr_5fr] gap-6">

          {/* Featured Card — White background */}
          <div className="group relative rounded-3xl bg-white p-10 md:p-12 border border-forest/8 min-h-[520px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div>
              {/* Top row: stars and tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <span className="bg-forest-deep text-white text-[15px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full shadow-sm">
                  {featured.tag}
                </span>
              </div>

              {/* Big quote mark */}
              <span className="block text-[6rem] text-gold/40 font-serif leading-none -mt-2 -ml-2 select-none group-hover:text-gold/60 transition-colors duration-300">"</span>

              {/* Quote text - Made larger to fill space */}
              <p className="text-[20px] md:text-[24px] text-forest-deep/90 leading-[1.65] font-medium -mt-6 mb-8 max-w-xl">
                {featured.q}
              </p>
            </div>

            {/* Divider with hover gold accent */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-forest/8 group-hover:bg-gold/30 transition-colors duration-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
            </div>

            {/* Author Row */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-xl overflow-hidden group-hover:border-gold/40 transition-colors duration-300">
                  {featured.img ? (
                    <img src={featured.img} alt={featured.a} className="w-full h-full object-cover" />
                  ) : (
                    featured.a[0]
                  )}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white" />
              </div>
              <div>
                <p className="text-[16px] font-bold text-forest-deep">{featured.a}</p>
                <p className="text-[13px] text-forest/70 uppercase tracking-[0.15em] mt-0.5">{featured.r}</p>
              </div>
            </div>
          </div>

          {/* Two stacked cards on right */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <div
                key={i}
                className="group flex-1 flex flex-col justify-between bg-white rounded-3xl p-8 border border-forest/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  {/* Top row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <span key={si} className="text-gold text-[15px]">★</span>
                      ))}
                    </div>
                    <span className="bg-forest-deep text-white text-[11.5px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full shrink-0">
                      {t.tag}
                    </span>
                  </div>

                  {/* Big gold quote */}
                  <span className="block text-[3.5rem] text-gold/80 font-serif leading-none -mt-1 -ml-1 select-none group-hover:text-gold/80 transition-colors duration-300">"</span>

                  {/* Quote text */}
                  <p className="text-[15px] text-forest-deep/95 leading-[1.75] -mt-5 mb-6 font-normal">
                    {t.q}
                  </p>
                </div>

                <div>
                  {/* Divider with hover gold accent */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-forest/8 group-hover:bg-gold/30 transition-colors duration-500" />
                    <div className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-[15px] shrink-0 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden">
                      {t.img ? (
                        <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
                      ) : (
                        t.a[0]
                      )}
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-forest-deep leading-tight">{t.a}</p>
                      <p className="text-[12.5px] font-semibold text-forest/80 uppercase tracking-[0.12em] mt-0.5 leading-snug">{t.r}</p>
                    </div>
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
