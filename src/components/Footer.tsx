import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <div style={{
                height: '3.5rem',
                width: '180px',
                backgroundImage: 'url(/gel-logo-transparent.png)',
                backgroundSize: 'auto 100%',
                backgroundPosition: '12px center',
                backgroundRepeat: 'no-repeat'
              }} aria-label="Global Education Lab" />
            </Link>
            <p className="mt-2 max-w-[280px] text-[14.5px] leading-[1.7] text-forest/80">
              Transformational educational experiences for a lifetime of a learner's life.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-forest mb-6">Quick Links</p>
            <ul className="space-y-4 text-[14.5px] text-forest/80">
              {[["Programmes", "/programmes"], ["Entrepreneurship", "/entrepreneurship"], ["Our Impact", "/our-impact"], ["About Us", "/about"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-forest mb-6">Partner</p>
            <ul className="space-y-4 text-[14.5px] text-forest/80">
              {[["Partner with GEL", "/partner-with-gel"], ["Institutional Solutions", "/school-leaders"], ["Business Leaders", "/business-leaders"], ["Global Ventures", "/global-ventures"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-forest mb-6">Resources</p>
            <ul className="space-y-4 text-[14.5px] text-forest/80">
              {[["News & Insights", "/insights"], ["Gallery", "/gallery"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-forest transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-forest mb-6">Connect</p>
            <div className="space-y-4 text-[14.5px] text-forest/80">
              <div>
                <a href="mailto:info@globaledulab.com" className="hover:text-forest transition-colors">
                  info@globaledulab.com
                </a>
              </div>
              <div>
                <a href="https://www.globaledulab.com" target="_blank" rel="noreferrer" className="hover:text-forest transition-colors">
                  www.globaledulab.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-[15px] font-semibold text-forest mb-4">Follow us on</p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/globaleducationlab/" target="_blank" rel="noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                  <Facebook className="h-5 w-5" strokeWidth={2} />
                </a>
                <a href="https://www.linkedin.com/company/globaleducationlab/" target="_blank" rel="noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                  <Linkedin className="h-5 w-5" strokeWidth={2} />
                </a>
                <a href="https://www.instagram.com/globaleducationlab" target="_blank" rel="noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                  <Instagram className="h-5 w-5" strokeWidth={2} />
                </a>
                <a href="https://www.youtube.com/@GlobalEduLab" target="_blank" rel="noreferrer" className="text-forest hover:text-forest/80 transition-colors">
                  <Youtube className="h-5 w-5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-forest/10 pt-8 md:flex-row">
          <p className="text-[13.5px] text-forest/50 text-center md:text-left">
            © Global Education Lab Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-forest/70">
            <Link to="/privacy-policy" className="hover:text-forest transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-forest transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
