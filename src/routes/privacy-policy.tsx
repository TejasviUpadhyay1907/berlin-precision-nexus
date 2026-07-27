import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Berlin Machineries Private Limited" },
      {
        name: "description",
        content: "Berlin Machineries Private Limited's privacy policy — how we collect, use and protect information submitted through our website.",
      },
      { property: "og:url", content: "https://www.berlinmachineries.com/privacy-policy" },
      { property: "og:title", content: "Privacy Policy — Berlin Machineries" },
    ],
    links: [
      { rel: "canonical", href: "https://www.berlinmachineries.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="LEGAL"
        title={<>Privacy <span className="text-berlin-red italic">Policy.</span></>}
        subtitle="How Berlin Machineries Private Limited collects, uses and protects your information."
      />

      <section className="py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-sm text-muted-foreground">Last updated: July 2026</p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">1. Introduction</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Berlin Machineries Private Limited ("Berlin Machineries", "we", "us", or "our") respects your privacy
              and is committed to protecting the personal information you share with us through{" "}
              <strong className="text-graphite">berlinmachineries.com</strong> (the "Site"). This Privacy Policy
              explains what information we collect, how we use it, and the choices you have.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">2. Information We Collect</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We collect information you voluntarily provide when you use our enquiry form, careers application
              form, or contact us directly, including:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Name, company name and job title",
                "Email address and phone number",
                "Machine or product interest and message content",
                "Resume/CV and cover note (career applications only)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-berlin-red mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We do not knowingly collect sensitive personal information such as payment card details, government
              ID numbers, or health information through this Site.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">3. How We Use Your Information</h2>
            <ul className="mt-4 space-y-2">
              {[
                "To respond to product enquiries and quote requests",
                "To evaluate career applications",
                "To provide customer support and after-sales service",
                "To send relevant updates about our products and services, where permitted",
                "To improve our website and offerings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-berlin-red mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">4. How We Share Your Information</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We do not sell or rent your personal information to third parties. Information submitted through our
              forms is processed via secure third-party form-handling infrastructure solely to deliver your enquiry
              to our team, and is not used for any other purpose. We may share information with service providers
              who help us operate our business (e.g. email and hosting providers), and when required by law.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">5. Cookies &amp; Analytics</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our Site may use cookies and similar technologies, including Google Analytics and Google Ads
              conversion tracking, to understand how visitors use our Site and to measure the effectiveness of our
              advertising. These tools may collect information such as your IP address, browser type, and pages
              visited. You can control cookies through your browser settings.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">6. Data Retention &amp; Security</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We retain personal information only as long as necessary to fulfil the purposes described in this
              policy, unless a longer retention period is required by law. We implement reasonable technical and
              organisational measures to protect your information against unauthorised access, alteration, or
              disclosure.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">7. Your Rights</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              You may request access to, correction of, or deletion of your personal information held by us at any
              time by contacting us using the details below.
            </p>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">8. Contact Us</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              For any questions about this Privacy Policy or your personal information, contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Email: {site.email}</li>
              <li>Phone: {site.phone}</li>
              <li>Address: {site.address}</li>
            </ul>

            <h2 className="mt-10 font-display font-bold text-2xl text-graphite">9. Changes to This Policy</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated revision date.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
