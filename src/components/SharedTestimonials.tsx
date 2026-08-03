import cambridgeImg from "@/assets/cambridge.jpg";
import schoolLeadersImg from "@/assets/partner.png";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/young-leaders.png";

export function SharedTestimonials() {
  const testimonials = [
    {
      q: "The GEL was a game changer. The Cambridge ecosystem, combined with high-quality peer learning, was truly invaluable. A transformational experience unlike anything else.",
      a: "Neha Aran",
      r: "MD, Consumer Goods Company",
      tag: "Executive Education",
      img: teachersImg,
      featured: true,
    },
    {
      q: "Zero to One gave me the clarity, tools and network to turn an idea into a viable startup. The mentors were incredible!",
      a: "Arjun Mehta",
      r: "Co-founder, MedVise AI",
      tag: "Zero to One",
      img: studentsImg,
      featured: false,
    },
    {
      q: "This student programme opened my eyes to the power of innovation and leadership. I left with confidence and lasting friendships.",
      a: "Emily Chen",
      r: "GSP Participant",
      tag: "Student Programme",
      img: schoolLeadersImg,
      featured: false,
    },
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
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[5fr_4fr] gap-6">

          {/* Featured Card — image with dark green overlay */}
          <div className="group relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-end shadow-2xl">
            {/* Background — Cambridge looks much better */}
            <img src={cambridgeImg} alt="Cambridge" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            {/* Gradient: transparent top, dark green bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/60 to-forest-deep/20" />

            {/* Content pinned to bottom */}
            <div className="relative z-10 p-10 pb-10">

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-base">★</span>
                ))}
              </div>

              {/* Big quote mark */}
              <span className="block text-[5rem] text-gold/80 font-serif leading-none -mb-4 -ml-1 select-none">"</span>

              <p className="text-[16px] text-white/95 leading-[1.75] font-normal mb-8 max-w-md">
                {featured.q}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/20 mb-6 w-16" />

              {/* Author Row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-forest border-2 border-gold/50 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                      {featured.img ? (
                        <img src={featured.img} alt={featured.a} className="w-full h-full object-cover" />
                      ) : (
                        featured.a[0]
                      )}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-forest-deep" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-white">{featured.a}</p>
                    <p className="text-[15px] text-white/80 uppercase tracking-[0.15em] mt-0.5">{featured.r}</p>
                  </div>
                </div>
                <span className="bg-gold/20 border border-gold/30 backdrop-blur-sm text-gold text-[15px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                  {featured.tag}
                </span>
              </div>
            </div>
          </div>

          {/* Two stacked cards on right */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <div
                key={i}
                className="group flex-1 flex flex-col bg-white rounded-3xl p-8 border border-forest/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-gold text-[15px]">★</span>
                    ))}
                  </div>
                  <span className="bg-forest-deep text-white text-[15px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* Big gold quote */}
                <span className="text-[3.5rem] text-gold/80 font-serif leading-none -mt-1 -ml-1 select-none group-hover:text-gold/80 transition-colors duration-300">"</span>

                {/* Quote text */}
                <p className="text-[15px] text-forest-deep/85 leading-[1.8] -mt-5 mb-6 flex-1">
                  {t.q}
                </p>

                {/* Divider with hover gold accent */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-forest/8 group-hover:bg-gold/30 transition-colors duration-500" />
                  <div className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/10 border border-forest/15 flex items-center justify-center text-forest-deep font-bold text-[15px] shrink-0 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden">
                    {t.img ? (
                      <img src={t.img} alt={t.a} className="w-full h-full object-cover" />
                    ) : (
                      t.a[0]
                    )}
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-forest-deep">{t.a}</p>
                    <p className="text-[15px] text-forest/70 uppercase tracking-[0.14em] mt-0.5">{t.r}</p>
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
