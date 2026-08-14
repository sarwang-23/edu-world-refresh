import { Link } from "@tanstack/react-router";
import { Mail, Globe2, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import logoImg from "@/assets/Logo png.png";

export function Footer() {
  return (
    <footer className="bg-[#f6f5f3]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 xl:gap-12">
          <div className="lg:col-span-3 lg:pr-4 xl:pr-8">
            <Link to="/" className="inline-block mb-6">
              <img src={logoImg} alt="Global Education Lab" className="h-20 w-auto object-contain mix-blend-multiply" loading="lazy" />
            </Link>
            <p className="text-[14.5px] leading-[1.6] text-[#333] font-medium">
              Transformational educational experiences<br className="hidden xl:block" /> for a lifetime of a learner's life.
            </p>
          </div>
          <div className="lg:col-span-2 lg:border-l lg:border-[#c5ccc7] lg:pl-4 xl:pl-8">
            <p className="text-[15px] font-bold uppercase tracking-wider text-black mb-6">Quick Links</p>
            <ul className="space-y-4 text-[14.5px] font-medium text-[#333]">
              {[["Programmes", "/programmes"], ["Entrepreneurship", "/entrepreneurship"], ["Our Impact", "/our-impact"], ["About Us", "/about"], ["Blogs", "/blog"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 lg:border-l lg:border-[#c5ccc7] lg:pl-4 xl:pl-8">
            <p className="text-[15px] font-bold uppercase tracking-wider text-black mb-6">Partner</p>
            <ul className="space-y-4 text-[14.5px] font-medium text-[#333]">
              {[["Partner with GEL", "/partner-with-gel"], ["Institutional Solutions", "/school-leaders"], ["Collaborate", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 lg:border-l lg:border-[#c5ccc7] lg:pl-4 xl:pl-8">
            <p className="text-[15px] font-bold uppercase tracking-wider text-black mb-6">Resources</p>
            <ul className="space-y-4 text-[14.5px] font-medium text-[#333]">
              {[["News & Insights", "/insights"], ["Events", "/gallery"], ["Brochures", "/contact"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 lg:border-l lg:border-[#c5ccc7] lg:pl-4 xl:pl-8">
            <p className="text-[15px] font-bold uppercase tracking-wider text-black mb-6">Connect</p>
            <div className="space-y-4 text-[14.5px] font-medium text-[#333] mb-8">
              <div className="flex items-center gap-3">
                <Mail className="h-[18px] w-[18px] text-[#777]" strokeWidth={1.5} />
                <a href="mailto:info@globaledulab.com" className="hover:text-forest transition-colors">
                  info@globaledulab.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="h-[18px] w-[18px] text-[#777]" strokeWidth={1.5} />
                <a href="https://www.globaledulab.com" target="_blank" rel="noreferrer" className="hover:text-forest transition-colors">
                  www.globaledulab.com
                </a>
              </div>
            </div>

            <p className="text-[13px] font-bold uppercase tracking-wider text-black mb-5">Follow us on</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/globaleducationlab/" target="_blank" rel="noreferrer" className="text-[#555] hover:text-forest transition-colors">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/company/globaleducationlab/" target="_blank" rel="noreferrer" className="text-[#555] hover:text-forest transition-colors">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/globaleducationlab" target="_blank" rel="noreferrer" className="text-[#555] hover:text-forest transition-colors">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="https://www.youtube.com/@GlobalEduLab" target="_blank" rel="noreferrer" className="text-[#555] hover:text-forest transition-colors">
                <Youtube className="h-6 w-6 -mt-0.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative border-t border-[#c5ccc7] pt-6">
          <div className="absolute right-0 -top-3.5 bg-[#f6f5f3] pl-4 hidden md:block">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="white"/>
            </svg>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-[14px] text-[#333] font-medium">
            <p className="text-center md:text-left">
              © Global Education Lab Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/privacy-policy" className="hover:text-forest transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-forest transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
