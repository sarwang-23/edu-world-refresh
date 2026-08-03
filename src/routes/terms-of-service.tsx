import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe2, FileText } from "lucide-react";
import { Footer } from "./index";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Global Education Lab" },
      {
        name: "description",
        content: "Read the terms of service for Global Education Lab.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.22em] text-forest">
            <FileText className="h-4 w-4" />
            Legal notice
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Terms & Conditions
          </h1>

          <div className="mt-8 rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-sm md:p-8">
            <div className="space-y-6 text-[15px] leading-[1.8] text-foreground">
              <section>
                <h2 className="text-xl font-bold text-forest">Introduction</h2>
                <p className="mt-3 text-muted-foreground">
                  These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and Global Education Lab Ltd, the owner and operator of this Website.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Please read these terms and conditions carefully, as they affect your legal rights.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree, you should stop using the Website immediately.
                </p>
                <p className="mt-3 text-muted-foreground">
                  In these terms and conditions, “User” or “Users” means any third party that accesses the Website and is not either (i) employed by Global Education Lab Ltd and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Global Education Lab Ltd and accessing the Website in connection with the provision of such services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Intellectual Property and Acceptable Use</h2>
                <p className="mt-3 text-muted-foreground">
                  1. All content included on the Website, unless uploaded by Users, is the property of Global Education Lab Ltd, our affiliates, or other relevant third parties. “Content” includes, without limitation, text, graphics, images, audio, video, software, data compilations, page layout, underlying code, and any other information stored on or forming part of this Website.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>By using the Website, you acknowledge that such Content is protected by copyright, trademarks, database rights, and other intellectual property rights.</li>
                  <li>Nothing on this Website grants you any license or right to use any trademark, logo, or service mark without prior written permission from the owner.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  2. You may, for personal, non-commercial use only:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Retrieve, display, and view the Content on a computer screen.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  3. You must not reproduce, modify, copy, distribute, or use Content for commercial purposes without written permission from Global Education Lab Ltd.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Prohibited Use</h2>
                <p className="mt-3 text-muted-foreground">
                  You may not use the Website for any of the following purposes:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>In any way that causes, or may cause, damage to the Website or interferes with other users’ enjoyment of the Website.</li>
                  <li>In any way that is harmful, unlawful, abusive, harassing, threatening, or otherwise objectionable, or in breach of any applicable law or regulation.</li>
                  <li>Making, transmitting, or storing electronic copies of Content protected by copyright without permission of the owner.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Registration</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>You must ensure the details provided at registration are correct and complete.</li>
                  <li>You must inform us immediately of any changes to your information to ensure effective communication.</li>
                  <li>We may suspend or cancel your registration with immediate effect for reasonable purposes or if you breach these terms.</li>
                  <li>You may cancel your registration at any time by contacting us in writing. Upon cancellation, you must stop using the Website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Password and Security</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>When registering, you will be asked to create a password, which you must keep confidential and not share with anyone.</li>
                  <li>If we believe there is, or is likely to be, a breach of security, we may require you to change your password or suspend your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Links to Other Websites</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>This Website may contain links to other sites not controlled by Global Education Lab Ltd.</li>
                  <li>We assume no responsibility for the content of such websites and disclaim liability for loss or damage arising from their use.</li>
                  <li>Inclusion of links does not imply endorsement of the sites or their operators.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Privacy Policy and Cookies Policy</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Use of the Website is also governed by our Privacy Policy and Cookies Policy, which are incorporated into these terms by reference.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Availability of the Website and Disclaimers</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>The Website and its services are provided “as is” and “as available.” We make no warranties regarding fitness for purpose, accuracy, compatibility, or quality.</li>
                  <li>While we use reasonable efforts to keep the Website secure and free from errors or malware, we do not guarantee it. Users are responsible for their own device and data security.</li>
                  <li>We accept no liability for any disruption or non-availability of the Website.</li>
                  <li>We reserve the right to alter, suspend, or discontinue any part of the Website or its services without notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Limitation of Liability</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any matter that cannot be excluded under applicable law.</li>
                  <li>We are not liable for losses resulting from events beyond our reasonable control.</li>
                  <li>To the maximum extent permitted by law, we are not liable for:
                    <br />
                    a. Business losses including profits, revenue, contracts, goodwill, or opportunities.
                    <br />
                    b. Loss or corruption of data, databases, or software.
                    <br />
                    c. Indirect or consequential losses.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">General</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>You may not transfer your rights under these terms to another person. We may transfer our rights if we reasonably believe your rights will not be affected.</li>
                  <li>These terms may be updated from time to time, and revised terms will apply from the date of publication.</li>
                  <li>These terms, along with the Privacy Policy and Cookies Policy, constitute the entire agreement between the parties.</li>
                  <li>No third party shall have any rights to enforce these terms under the Contracts (Rights of Third Parties) Act 1999.</li>
                  <li>If any provision is found invalid or unenforceable, it will be deemed deleted without affecting the remaining provisions.</li>
                  <li>No delay or failure to exercise a right shall be considered a waiver of that right.</li>
                  <li>These terms are governed by the laws of England and Wales, and any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-forest">Company Details</h2>
                <p className="mt-3 text-muted-foreground">
                  Global Education Lab Ltd is a company incorporated in England and Wales (Company No. 14290868), registered office: Stirling House, Denny End Road, Waterbeach, Cambridge, Cambridgeshire, CB25 9PB.
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
