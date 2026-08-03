import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Globe2, Sparkles, Compass, ClipboardCheck, BookOpen, Users } from 'lucide-react'
import heroImg from '../assets/teachers.jpg'
import { Footer } from './index'

export const Route = createFileRoute('/programmes/teacher-training')({
  head: () => ({
    meta: [
      { title: 'Teacher Training Programmes — Global Edu Lab' },
      { name: 'description', content: 'Cambridge-informed teacher training that blends academic expertise with real-world classroom application for K-12 educators.' },
      { property: 'og:title', content: 'Teacher Training Programmes' },
      { property: 'og:description', content: 'Cambridge-informed professional development for K-12 teachers.' },
    ],
  }),
  component: Page,
})

function Page() {
  const why = [
    { icon: <Users className="h-6 w-6" />, t: 'World-Class Collaboration', d: 'Learn from senior academics and education experts at the University of Cambridge.' },
    { icon: <Globe2 className="h-6 w-6" />, t: 'Global Perspective', d: 'Global insights infused into local contexts for an interconnected classroom.' },
    { icon: <Compass className="h-6 w-6" />, t: 'Personalised Learning Paths', d: 'Tailored to individual needs, so every teacher gets their own journey.' },
    { icon: <Sparkles className="h-6 w-6" />, t: 'Real-World Application', d: 'Practical, hands-on learning immediately usable in the classroom.' },
    { icon: <ClipboardCheck className="h-6 w-6" />, t: 'Personalised Reports', d: 'Detailed reports so school leaders can track progress and growth areas.' },
    { icon: <BookOpen className="h-6 w-6" />, t: 'Ongoing Community', d: 'A network of educators sharing practice long after the programme ends.' },
  ]
  const courses = [
    { t: 'Pedagogy — Student-Centred Learning', when: 'Online Intake', d: 'Rewire your classroom around how students actually learn best.' },
    { t: 'Adaptive Teaching Skills', when: 'Online Intake', d: 'Practical strategies to reach every learner in a diverse classroom.' },
  ]
  return (
    <div className="flex min-h-screen flex-col pt-4">
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Teachers" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-2 pb-32 md:pt-4 md:pb-24">
          <div className="max-w-3xl">
            <p className="text-[15px] font-semibold uppercase tracking-[0.28em] text-gold">For K-12 Teachers</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Transform your teaching, the Cambridge way.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              In collaboration with seasoned academics from the University of Cambridge, we pioneer a new era in professional teacher training — blending academic expertise with real-world application.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-[15px] font-semibold uppercase tracking-[0.28em] text-gold">Why Our Teacher Training</p>
          <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Six reasons teachers choose us.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {why.map((it, i) => (
              <div key={i} className="rounded-3xl border border-forest/10 bg-background p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">{it.icon}</div>
                <h3 className="text-lg font-bold text-forest-deep">{it.t}</h3>
                <p className="mt-3 text-forest/70">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[15px] font-semibold uppercase tracking-[0.28em] text-gold">Ongoing Programmes</p>
          <h2 className="mt-6 text-4xl font-bold text-forest-deep md:text-5xl">Enrol in your next course.</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {courses.map((it, i) => (
              <a key={i} href="https://www.globaledulab.com/applynow" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between rounded-3xl border border-forest/10 bg-cream/40 p-10 transition-all hover:bg-cream/70 hover:shadow-lg">
                <div>
                  <p className="text-[15px] font-medium uppercase tracking-[0.2em] text-gold">{it.when}</p>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-forest-deep group-hover:text-gold transition-colors">{it.t}</h3>
                  <p className="mt-4 text-forest/70 leading-relaxed">{it.d}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-semibold text-forest uppercase tracking-widest text-[15px] group-hover:text-gold transition-colors">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-forest py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-cream md:text-5xl">Level up your practice.</h2>
          <p className="mt-6 text-lg text-cream/80">Join thousands of teachers already growing with Global Education Lab.</p>
          <a href="https://www.globaledulab.com/forteachers" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
            Apply Now <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}