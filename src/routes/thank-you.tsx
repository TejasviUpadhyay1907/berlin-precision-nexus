import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Berlin Machineries Private Limited" },
      { name: "description", content: "Thank you for reaching out to Berlin Machineries. Our team will be in touch shortly." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="relative bg-graphite text-white pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute -top-24 -right-24 h-96 w-96 bg-berlin-red/20 blur-[120px] rounded-full" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-berlin-red/15 border border-berlin-red/40">
              <CheckCircle2 className="h-8 w-8 text-berlin-red" strokeWidth={1.75} />
            </div>

            <div className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-berlin-red">
              <span className="h-px w-8 bg-berlin-red" />
              ENQUIRY RECEIVED
              <span className="h-px w-8 bg-berlin-red" />
            </div>

            <h1 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Thank you.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We've received your enquiry. A Berlin application engineer will get back
              to you within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 text-sm font-bold tracking-[0.1em] hover:bg-[#1fb855] transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WHATSAPP US
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border border-white/25 text-white px-6 py-3.5 text-sm font-bold tracking-[0.1em] hover:bg-white hover:text-graphite transition-all"
              >
                <Phone className="h-4 w-4" /> CALL {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
            >
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
