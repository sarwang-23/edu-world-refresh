import { Link, useLocation } from '@tanstack/react-router'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export function Nav() {
  const location = useLocation()
  
  const links = [
    { label: "Global Ventures", href: "/global-ventures" },
    { label: "Gallery", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Insights", href: "#" },
  ]

  const programmes = [
    { label: "School Leaders", href: "/school-leaders" },
    { label: "Business Leaders", href: "/business-leaders" },
    { label: "Students", href: "/students" },
    { label: "Teachers", href: "/teachers" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
            Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname === l.href ? "text-forest" : "text-forest/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="group relative flex items-center gap-1 cursor-pointer">
            <span className={`text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname.startsWith('/school-leaders') || 
                location.pathname.startsWith('/business-leaders') || 
                location.pathname.startsWith('/students') || 
                location.pathname.startsWith('/teachers') ? "text-forest" : "text-forest/75"
              }`}>
              Programmes
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
            <div className="absolute top-full left-0 pt-4 hidden w-48 flex-col group-hover:flex">
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                {programmes.map((p) => (
                  <Link
                    key={p.label}
                    to={p.href}
                    className="rounded-lg px-4 py-2 text-[13px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-forest-deep md:inline-flex"
        >
          Partner With Us <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
