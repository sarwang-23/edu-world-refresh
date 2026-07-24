import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Calendar, MapPin, Rocket, GraduationCap, Sparkles } from 'lucide-react'
import heroImg from '../assets/students.jpg'

export const Route = createFileRoute('/programmes/student-camps')({
  head: () => ({
    meta: [
      { title: 'Cambridge Student Summer Camps — Global Edu Lab' },
      { name: 'description', content: 'Residential summer camps at Hughes Hall and Girton College, University of Cambridge — covering STEM, Entrepreneurship, AI and more.' },
      { property: 'og:title', content: 'Cambridge Student Summer Camps' },
      { property: 'og:description', content: 'Residential summer programmes at the University of Cambridge for students.' },
    ],
  }),
  component: Page,
})

function Page() {
  const camps = [
    { badge: 'School · 14–17 Years', icon: <Rocket className="h-6 w-6" />, title: 'STEM & Entrepreneurship Summer Camp at Cambridge', when: '5–18 July 2026', where: 'University of Cambridge', desc: 'A two-week residential deep-dive into STEM thinking and entrepreneurial problem-solving.', link: 'https://www.globaledulab.com/sesc' },
    { badge: 'Graduate · 18+ Years', icon: <GraduationCap className="h-6 w-6" />, title: 'Summer Programme at Girton College — Entrepreneurship & AI', when: '12–25 July 2026', where: 'Girton College, Cambridge', desc: 'Undergraduate-level exploration of entrepreneurship and AI, taught in true Cambridge style.', link: 'https://www.globaledulab.com/gsp' },
  ]
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Students" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Programmes for Students &amp; Young Learners</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Cambridge Summer Camps.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              Residential summer programmes at the University of Cambridge — covering Economics, Business, STEM, Public Speaking, English, Entrepreneurship and Sustainability.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Since 2022</p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              5,000+ students impacted through online programmes and residential summer camps.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div><h3 className="text-4xl font-bold text-gold">5,000+</h3><p className="mt-2 text-sm font-semibold uppercase tracking-widest text-forest/70">Students Impacted</p></div>
              <div><h3 className="text-4xl font-bold text-gold">14–17</h3><p className="mt-2 text-sm font-semibold uppercase tracking-widest text-forest/70">&amp; 18+ Age Groups</p></div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-forest/85">
            <p>Prestigious collaborations with <span className="font-semibold text-forest">Hughes Hall &amp; Girton College, University of Cambridge</span>, where students get a taste of Cambridge life, world-class lectures and peers from across the globe.</p>
            <p>Programmes inspire students to think globally, act locally, and prepare for higher education with confidence.</p>
          </div>
        </div>
      </section>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Ongoing Programmes</p>
          <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Two flagship Cambridge camps.</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {camps.map((it, i) => (
              <a key={i} href={it.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between rounded-3xl border border-forest/10 bg-cream/40 p-10 transition-all hover:bg-cream/70 hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
                    <span className="rounded-full border border-forest/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest/75">{it.badge}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-tight text-forest-deep group-hover:text-gold transition-colors">{it.title}</h3>
                  <p className="mt-4 text-forest/70 leading-relaxed">{it.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-forest/75">
                    <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" />{it.when}</span>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />{it.where}</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-2 font-semibold text-forest uppercase tracking-widest text-xs group-hover:text-gold transition-colors">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-forest py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-cream md:text-5xl">A Cambridge summer awaits.</h2>
          <p className="mt-6 text-lg text-cream/80">Applications for 2026 cohorts are open — early acceptance is limited.</p>
          <a href="https://www.globaledulab.com/studentprogrammes" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
            <Sparkles className="h-4 w-4" /> Apply Now
          </a>
        </div>
      </section>
    </div>
  )
}