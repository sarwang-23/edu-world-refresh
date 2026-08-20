import { Link, useLocation } from '@tanstack/react-router';
import { getSourceLabel } from '../utils/sourceLabel';
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoImg from '../assets/Logo png.png'

export function Nav() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Extra items not in the provided image are placed here
  const addons: { label: string; href: string }[] = []

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Global Education Lab" className="h-16 md:h-20 w-auto object-contain mix-blend-multiply drop-shadow-sm" loading="lazy" />
        </Link>
        <nav className="hidden items-center gap-6 lg:gap-9 xl:flex">

          <Link
            to="/"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname === '/' ? "text-forest" : "text-forest/75"
              }`}
          >
            Home
          </Link>

          {/* Programmes Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-3 -my-3">
            <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname.startsWith('/programmes') ||
                location.pathname.startsWith('/students') ||
                location.pathname.startsWith('/past-programmes') ? "text-forest" : "text-forest/75"
              }`}>
              Programmes
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />

            {/* Level 1 Dropdown */}
            <div className="absolute top-[100%] left-0 hidden w-64 flex-col group-hover:flex">
              {/* Added a transparent bridge to prevent losing hover when moving mouse down */}
              <div className="h-2 w-full"></div>
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                <Link
                  to="/programmes"
                  className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                >
                  All Programmes
                </Link>

                {/* For Students */}
                <div className="group/students relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For Students
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/students:flex pl-2 z-50">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/gsp" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Graduate Summer Programme</Link>
                      <Link to="/students" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Young leaders summer programme (13-17 yrs)</Link>
                    </div>
                  </div>
                </div>

                {/* For Business Professionals */}
                <div className="group/professionals relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For Business Professionals
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/professionals:flex pl-2 z-50">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/programmes/america-forward" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">America Forward</Link>
                    </div>
                  </div>
                </div>

                {/* For Executives */}
                <div className="group/executives relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For Executives
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/executives:flex pl-2 z-50">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/indialeadership" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Global India Leadership Programme</Link>
                    </div>
                  </div>
                </div>


                {/* For Entrepreneurs */}
                <div className="group/entrepreneurs relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For Entrepreneurs
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/entrepreneurs:flex pl-2 z-50">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/programmes/zero-to-one" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Zero-to-One</Link>
                      <Link to="/global-ventures" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Global Ventures</Link>
                      <Link to="/gsp" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Graduate Summer Programme</Link>
                      <Link to="/entrepreneurship" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Mentorship & Support</Link>
                    </div>
                  </div>
                </div>

                <Link
                  to="/past-programmes"
                  className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                >
                  Past Programmes
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname === '/about' ? "text-forest" : "text-forest/75"
              }`}
          >
            About
          </Link>

          {/* Explore Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-3 -my-3">
            <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname === '/insights' || location.pathname === '/our-impact' || location.pathname === '/partner-with-gel' || location.pathname.startsWith('/blog') ? "text-forest" : "text-forest/75"
              }`}>
              Explore
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
            <div className="absolute top-[100%] right-0 hidden w-64 flex-col group-hover:flex">
              <div className="h-2 w-full"></div>
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                <Link to="/our-impact" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Our Impact</Link>
                <Link to="/insights" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Our Knowledge & Insights</Link>
                <Link to="/partner-with-gel" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Partner with GEL</Link>
                <Link to="/ai-learning-games" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest flex items-center gap-2">
                  AI Learning Games
                </Link>
                <Link to="/blog" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">
                  Blogs
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname === '/gallery' ? "text-forest" : "text-forest/75"
              }`}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            search={{ source: getSourceLabel(location.pathname) }}
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${location.pathname === '/contact' ? "text-forest" : "text-forest/75"
              }`}
          >
            Contact us
          </Link>

          {/* Addons Menu */}
          {addons.length > 0 && (
            <div className="group relative flex items-center gap-1 cursor-pointer py-3 -my-3">
              <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest text-forest/75`}>
                More
              </span>
              <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
              <div className="absolute top-[100%] right-0 hidden w-56 flex-col group-hover:flex">
                <div className="h-2 w-full"></div>
                <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                  {addons.map(addon => (
                    <Link key={addon.label} to={addon.href} className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">{addon.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </nav>
        <div className="flex items-center gap-3 xl:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1 text-forest" aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-forest-deep/20 backdrop-blur-sm xl:hidden z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white border-b border-forest/10 shadow-2xl xl:hidden overflow-y-auto max-h-[calc(100vh-88px)] z-50">
          <div className="flex flex-col p-4 gap-1">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="p-3 text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg">Home</Link>
            
            <details className="group">
              <summary className="p-3 flex justify-between items-center text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Programmes
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/programmes" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">All Programmes</Link>
                
                <details className="group/students">
                  <summary className="p-3 flex justify-between items-center text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    For Students
                    <ChevronDown className="h-4 w-4 transition-transform group-open/students:rotate-180" />
                  </summary>
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/gsp" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Graduate Summer Programme</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/students" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Young leaders summer programme (13-17 yrs)</Link>
                  </div>
                </details>

                <details className="group/business">
                  <summary className="p-3 flex justify-between items-center text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    For Business Professionals
                    <ChevronDown className="h-4 w-4 transition-transform group-open/business:rotate-180" />
                  </summary>
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/programmes/america-forward" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">America Forward</Link>
                  </div>
                </details>

                <details className="group/execs">
                  <summary className="p-3 flex justify-between items-center text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    For Executives
                    <ChevronDown className="h-4 w-4 transition-transform group-open/execs:rotate-180" />
                  </summary>
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/indialeadership" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Global India Leadership Programme</Link>
                  </div>
                </details>

                <details className="group/ents">
                  <summary className="p-3 flex justify-between items-center text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    For Entrepreneurs
                    <ChevronDown className="h-4 w-4 transition-transform group-open/ents:rotate-180" />
                  </summary>
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/programmes/zero-to-one" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Zero-to-One</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/global-ventures" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Global Ventures</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/gsp" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Graduate Summer Programme</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/entrepreneurship" className="p-3 text-[14px] font-medium text-forest/80 hover:bg-forest/5 rounded-lg">Mentorship & Support</Link>
                  </div>
                </details>

                <Link onClick={() => setIsMobileMenuOpen(false)} to="/past-programmes" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">Past Programmes</Link>
              </div>
            </details>

            <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="p-3 text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg">About Us</Link>

            <details className="group/explore">
              <summary className="p-3 flex justify-between items-center text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Explore
                <ChevronDown className="h-4 w-4 transition-transform group-open/explore:rotate-180" />
              </summary>
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/our-impact" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">Our Impact</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/insights" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">Our Knowledge & Insights</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/partner-with-gel" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">Partner with GEL</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/ai-learning-games" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">AI Learning Games</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/blog" className="p-3 text-[15px] font-medium text-forest/90 hover:bg-forest/5 rounded-lg">Blogs</Link>
              </div>
            </details>

            <Link onClick={() => setIsMobileMenuOpen(false)} to="/gallery" className="p-3 text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg">Gallery</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" search={{ source: getSourceLabel(location.pathname) }} className="p-3 text-[16px] font-medium text-forest hover:bg-forest/5 rounded-lg">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  )
}