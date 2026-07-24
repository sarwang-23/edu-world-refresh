import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, BookOpen, Presentation, Video } from 'lucide-react'
import teachersImg from '../assets/teachers.jpg'

export const Route = createFileRoute('/teachers')({
  component: Teachers,
})

function Teachers() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Hero />
      <Overview />
      <OngoingProgrammes />
      <CallToAction />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <img
          src={teachersImg}
          alt="Teachers"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            For K-12 Teachers
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            Advance your teaching skills.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Learn innovative strategies, classroom techniques, and practical tools to enhance student engagement and improve learning outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Professional Development
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Practical, research-backed training programmes for educators.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-serif text-gold">1000+</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Educators Trained</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-gold">100k+</h3>
                <p className="mt-2 text-sm text-forest/70 uppercase tracking-widest font-semibold">Students Impacted</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-forest/85">
              We offer self-paced online teacher training workshops alongside intensive in-person sessions. Our curriculum is designed to enhance pedagogy, classroom innovation, and teacher leadership.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-forest/85">
              Empowering educators to create meaningful impact for their students — anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OngoingProgrammes() {
  const programmes = [
    {
      title: "Online Teacher Advance",
      date: "Self-Paced",
      desc: "Advance your teaching skills with our self-paced online teacher training workshop.",
      icon: <Video className="h-6 w-6" />,
      link: "/programmes/teacher-training"
    },
    {
      title: "Classroom Innovation Masterclass",
      date: "Monthly",
      desc: "Interactive webinars focusing on integrating tech into daily curriculum.",
      icon: <Presentation className="h-6 w-6" />,
      link: "/programmes/teacher-training"
    },
    {
      title: "Pedagogy Excellence Workshop",
      date: "Quarterly",
      desc: "Deep dive into research-backed teaching strategies and student engagement methods.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/programmes/teacher-training"
    }
  ]

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Our Ongoing Programmes
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-forest-deep md:text-5xl">
            Upcoming Training Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programmes.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between rounded-3xl border border-forest/10 bg-cream/30 p-8 transition-all hover:bg-cream/60 hover:shadow-lg">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                  {p.icon}
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  {p.date}
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-forest-deep group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="mt-4 text-forest/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-semibold text-forest uppercase tracking-widest text-xs group-hover:text-gold transition-colors">
                Read More <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="border-t border-border/60 bg-forest py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-4xl text-cream md:text-5xl">Elevate your teaching</h2>
        <p className="mt-6 text-lg text-cream/80">Discover new tools and methodologies to engage your students.</p>
        <button className="mt-10 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-forest transition-transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </section>
  )
}
