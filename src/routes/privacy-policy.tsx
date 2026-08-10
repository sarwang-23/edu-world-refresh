import { buildMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe2, ShieldCheck } from "lucide-react";
import { Footer } from "./index";

export const Route = createFileRoute("/privacy-policy")({
  head: () => buildMeta("/privacy-policy"),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.22em] text-forest">
            <ShieldCheck className="h-4 w-4" />
            Legal notice
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-8 rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-sm md:p-8">
            <p className="text-[15px] leading-[1.8] text-foreground">
              Global Education Lab Ltd (“we”, “our”, “us”) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.8] text-foreground">
              <section>
                <h2 className="text-xl font-bold text-forest">1. Interpretation</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>The singular includes the plural and vice versa.</li>
                  <li>References to sub-clauses, clauses, schedules, or appendices refer to those within this policy.</li>
                  <li>References to “person” include firms, companies, government entities, trusts, and partnerships.</li>
                  <li>“Including” is understood to mean “including without limitation.”</li>
                  <li>References to statutory provisions include any modification or amendment thereof.</li>
                  <li>Headings and sub-headings are for convenience only and do not affect interpretation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">2. Scope of this Privacy Policy</h2>
                <p className="mt-3 text-muted-foreground">
                  This policy applies only to the actions of Global Education Lab Ltd and users with respect to this website. It does not extend to any third-party websites accessible through links on this site, including social media.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">3. Data Controller</h2>
                <p className="mt-3 text-muted-foreground">
                  For purposes of the UK Data Protection Act 2018 and UK GDPR, Global Education Lab Ltd is the “data controller.” We determine the purposes and manner in which your data is processed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">4. Data We Collect</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
                  <li>Name</li>
                  <li>Date of birth</li>
                  <li>Gender</li>
                  <li>Contact details (email address, telephone number)</li>
                  <li>Demographic information (postcode, preferences, interests)</li>
                  <li>IP address (automatically collected)</li>
                  <li>Age</li>
                  <li>Organisation Designation</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">5. How We Collect Data</h2>
                <p className="mt-3 text-muted-foreground">
                  a. You provide it directly:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>When you contact us via website form, email, phone, or post</li>
                  <li>When you register or set up an account for our programmes/services</li>
                  <li>When you use our services or attend our events</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  b. Automatically collected:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Visit information (IP address, access times, interactions)</li>
                  <li>Cookies, in line with your browser settings (see Cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">6. How We Use Your Data</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Improve programmes, products, and services</li>
                  <li>Contact you for market research (email, phone, post)</li>
                  <li>Customise and update website content</li>
                  <li>Share anonymised data with accredited research organisations for educational research</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  Legal bases:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Legitimate interests (unless your rights override them)</li>
                  <li>Contract performance or steps prior to entering into a contract</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">7. Who We Share Data With</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Group companies/affiliates: administration, service delivery, personalised recommendations</li>
                  <li>Relevant authorities: crime detection or legal compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">8. Keeping Data Secure</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Password-protected accounts</li>
                  <li>Secure servers and encrypted storage</li>
                  <li>Incident procedures for suspected data breaches</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  If you suspect misuse, loss, or unauthorised access, <a href="mailto:contactinfo@globaledulab.com" className="hover:text-forest">contactinfo@globaledulab.com</a> immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">9. Data Retention</h2>
                <p className="mt-3 text-muted-foreground">
                  We retain data only as long as necessary for the purposes outlined, unless law requires longer. Deleted data may persist in backups for legal or regulatory reasons.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">10. Your Rights</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Access – request copies of your data</li>
                  <li>Rectification – correct inaccuracies</li>
                  <li>Erasure – request deletion</li>
                  <li>Restriction – limit processing</li>
                  <li>Portability – receive/transfer your data</li>
                  <li>Objection - object to processing based on legtime interests</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  To exercise rights or withdraw consent, email <a href="mailto:info@globaledulab.com" className="hover:text-forest">info@globaledulab.com</a>.
                </p>
                <p className="mt-3 text-muted-foreground">
                  If unresolved, you may contact the <a href="https://ico.org.uk/" target="_blank" rel="noreferrer" className="hover:text-forest">UK ICO</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">11. Links to Other Websites</h2>
                <p className="mt-3 text-muted-foreground">
                  We are not responsible for the content or privacy practices of external sites. Review their privacy policies before providing personal data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">12. Business Transfers</h2>
                <p className="mt-3 text-muted-foreground">
                  If our business is sold or reorganised, relevant user data may be transferred to the new owner under this policy. We may also disclose data to prospective purchasers. We will take steps to protect your privacy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">13. Cookies</h2>
                <p className="mt-3 text-muted-foreground">
                  This website uses cookies to enhance your experience and improve services.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>All cookies comply with UK and EU Cookie Law.</li>
                  <li>We request your consent before placing cookies.</li>
                  <li>You may deny consent; some features may not function correctly.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  (See our separate Cookie Policy for details on essential, analytics, and marketing cookies.)
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">14. Contact Us</h2>
                <p className="mt-3 text-muted-foreground">
                  For questions about this policy or your data, contact us:
                </p>
                <div className="mt-3 space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-forest" />
                    <a href="mailto:info@globaledulab.com" className="hover:text-forest">info@globaledulab.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-forest" />
                    <a href="https://www.globaledulab.com" target="_blank" rel="noreferrer" className="hover:text-forest">www.globaledulab.com</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
