import { Link, useLocation } from '@tanstack/react-router'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export function Nav() {
  const location = useLocation()
  
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Entrepreneurship", href: "/entrepreneurship" },
  ]

  const rightLinks = [
    { label: "Global Ventures", href: "/global-ventures" },
    { label: "Partner with GEL", href: "/partner-with-gel" },
    { label: "Our Impact", href: "/our-impact" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const explore = [
    { label: "Insights & Resources", href: "/insights" },
    { label: "Gallery", href: "/gallery" },
  ]

  const programmes = [
    { label: "All Programmes", href: "/programmes" },
    { label: "Young Leaders Summer Programme", href: "/students" },
    { label: "Graduate Summer Programme", href: "/programmes/graduate" },
    { label: "Zero-To-One", href: "/programmes/zero-to-one" },
    { label: "Past Programmes", href: "/past-programmes" },
  ]


  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest/5 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
            Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {mainLinks.map((l) => (
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
          
          {/* Programmes Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-5 -my-5">
            <span className={`text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname.startsWith('/programmes') || 
                location.pathname.startsWith('/students') || 
                location.pathname.startsWith('/past-programmes') ? "text-forest" : "text-forest/75"
              }`}>
              Programmes
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
            <div className="absolute top-full left-0 hidden w-64 flex-col group-hover:flex">
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                {programmes.map((p) => (
                  <Link
                    key={p.label}
                    to={p.href}
                    className="rounded-lg px-4 py-2.5 text-[13px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-5 -my-5">
            <span className={`text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname === '/insights' || location.pathname === '/gallery' ? "text-forest" : "text-forest/75"
              }`}>
              Explore
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
            <div className="absolute top-full left-0 hidden w-48 flex-col group-hover:flex">
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                {explore.map((e) => (
                  <Link
                    key={e.label}
                    to={e.href}
                    className="rounded-lg px-4 py-2.5 text-[13px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {rightLinks.map((l) => (
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
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-forest-deep px-5 py-2.5 text-[13px] font-bold tracking-wide text-gold transition-all hover:bg-forest md:inline-flex"
        >
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
