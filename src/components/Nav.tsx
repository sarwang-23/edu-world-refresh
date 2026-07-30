import { Link, useLocation } from '@tanstack/react-router'
import { ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react'

export function Nav() {
  const location = useLocation()
  
  // Extra items not in the provided image are placed here
  const addons = [
    { label: "Entrepreneurship", href: "/entrepreneurship" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest/5 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-forest">
            Global<span className="text-gold">.</span>Edu<span className="text-gold">.</span>Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
          
          <Link
            to="/"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
              location.pathname === '/' ? "text-forest" : "text-forest/75"
            }`}
          >
            Home
          </Link>
          
          {/* Programmes Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-5 -my-5">
            <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname.startsWith('/programmes') || 
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
                
                {/* For students */}
                <div className="group/students relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For students
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/students:flex pl-2">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/programmes/graduate" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Graduate Summer Programme</Link>
                      <Link to="/students" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Young leaders summer programme (13-17 yrs)</Link>
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
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/executives:flex pl-2">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/programmes/gilp" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Global India Leadership Programme</Link>
                    </div>
                  </div>
                </div>

                {/* For Educators — route not built yet, plain anchor avoids the typed-router error */}
                <a
                  href="/programmes/educators"
                  className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
                >
                  For Educators
                </a>

                {/* For Entrepreneurs */}
                <div className="group/entrepreneurs relative">
                  <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest cursor-default">
                    For Entrepreneurs
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Level 2 Dropdown */}
                  <div className="absolute top-0 left-[95%] hidden w-72 flex-col group-hover/entrepreneurs:flex pl-2">
                    <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg">
                      <Link to="/programmes/zero-to-one" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Zero-to-One</Link>
                      <Link to="/global-ventures" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Global Ventures</Link>
                      {/* Routes not built yet — plain anchors avoid the typed-router error */}
                      <a href="/programmes/graduate-entrepreneurs" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Graduate Summer Programme</a>
                      <a href="/programmes/mentorship" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Mentorship & Support</a>
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
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
              location.pathname === '/about' ? "text-forest" : "text-forest/75"
            }`}
          >
            About
          </Link>

          {/* Explore Dropdown */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-5 -my-5">
            <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
                location.pathname === '/insights' || location.pathname === '/our-impact' || location.pathname === '/partner-with-gel' ? "text-forest" : "text-forest/75"
              }`}>
              Explore
            </span>
            <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
            <div className="absolute top-[100%] left-0 hidden w-64 flex-col group-hover:flex">
              <div className="h-2 w-full"></div>
              <div className="flex flex-col rounded-xl border border-forest/10 bg-white p-2 shadow-lg mt-0">
                <Link to="/our-impact" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Our Impact</Link>
                <Link to="/insights" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Our Knowledge & Insights</Link>
                <Link to="/partner-with-gel" className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest">Partner with GEL</Link>
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
              location.pathname === '/gallery' ? "text-forest" : "text-forest/75"
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest ${
              location.pathname === '/contact' ? "text-forest" : "text-forest/75"
            }`}
          >
            Contact us
          </Link>

          {/* Addons Menu */}
          {addons.length > 0 && (
            <div className="group relative flex items-center gap-1 cursor-pointer py-5 -my-5">
              <span className={`text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-forest text-forest/75`}>
                More
              </span>
              <ChevronDown className="h-4 w-4 text-forest/75 group-hover:text-forest transition-colors" />
              <div className="absolute top-[100%] left-0 hidden w-56 flex-col group-hover:flex">
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
        <Link
          to="/apply-now"
          className="hidden items-center gap-2 rounded-full bg-forest-deep px-5 py-2.5 text-[15px] font-bold tracking-wide text-gold transition-all hover:bg-forest md:inline-flex"
        >
          Apply Now <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}