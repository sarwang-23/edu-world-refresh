import { createFileRoute } from '@tanstack/react-router'
import { Footer } from './index'
import { ArrowUpRight, Linkedin } from 'lucide-react'
import businessLeadersImg from '../assets/business-leaders.jpg'
import { SharedTestimonials } from '@/components/SharedTestimonials';


export const Route = createFileRoute('/team')({
  head: () => ({
    meta: [
      { title: 'Our Team | Global Education Lab' },
      { name: 'description', content: 'Meet the team behind Global Education Lab.' },
    ],
  }),
  component: TeamPage,
})

function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Hero />
      <Leadership />
      <SharedTestimonials />
      <JoinTeamCTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-6 pb-24 md:pt-40 md:pb-32">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--forest)_1px,transparent_1px),linear-gradient(90deg,var(--forest)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 text-center pt-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold">Our People</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        
        <h1 className="text-[3rem] font-bold leading-[1.05] text-forest-deep md:text-[4.5rem] lg:text-[5rem] tracking-tight mb-8">
          The minds behind <span className="text-gold font-serif italic">the mission.</span>
        </h1>
        
        <p className="mx-auto mt-5 text-lg md:text-xl text-forest/70 leading-relaxed max-w-2xl">
          We are a passionate collective of educators, innovators, and operators committed to redefining global education and creating measurable impact.
        </p>
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="bg-white py-24 md:py-32 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-gold mb-4 block">— Leadership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-deep mb-6 leading-tight">
              Driven by purpose, <span className="font-serif italic text-gold">rooted in Cambridge.</span>
            </h2>
            <p className="text-forest/70 leading-relaxed mb-6">
              After a diverse career in technology, strategy, and entrepreneurship across the US, Taiwan, India, and the UK, Suyash moved to Cambridge with a vision to make world-class education accessible, experiential, and impactful.
            </p>
            <p className="text-forest/70 leading-relaxed mb-10">
              What began as a social impact initiative has grown into Global Education Lab — an education innovation company delivering fast-paced, high-impact programmes for learners from age 14 to global CEOs.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/global-education-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest hover:bg-forest hover:text-white hover:border-forest transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/5 rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <img 
              src={businessLeadersImg} 
              alt="Suyash Bharti" 
              className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl z-10" 
            />
            <div className="absolute bottom-10 -left-8 z-20 bg-forest-deep text-white p-6 rounded-2xl shadow-xl border border-white/10 hidden lg:block">
              <span className="block font-serif italic text-gold text-2xl mb-1">Suyash Bharti</span>
              <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-white/80">Founder & CEO</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}


function JoinTeamCTA() {
  return (
    <section className="bg-forest-deep py-24 md:py-32 text-center border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to make an <span className="font-serif italic text-gold">impact?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          We are always looking for passionate educators and operators to join our global network.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold tracking-[0.2em] uppercase text-forest-deep transition-all hover:bg-white">
          View Openings <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
