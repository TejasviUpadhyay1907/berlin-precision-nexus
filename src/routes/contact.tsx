import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    machine: (search.machine as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "Contact — Berlin Machineries Private Limited" },
      { name: "description", content: `Talk to Berlin Machineries. Call ${site.phone} or email ${site.email}. Based in Pune, India.` },
      { property: "og:title", content: "Contact Berlin Machineries" },
      { property: "og:description", content: `Get a quote from Berlin Machineries. ${site.phone}` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { machine: machineParam } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      formType: "enquiry",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxdR6iYM9Cxpfj8M6h3CAwCkKgIPGAtrJVildxu_o4zyXXR2H3q4Gdpf6Hn_H8XDmRD/exec", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="LET'S TALK"
        title={<>Ready to build your <span className="text-berlin-red italic">next tool room?</span></>}
        subtitle="Talk to a Berlin application engineer. We'll help you pick the right platform for your parts, cycle time and budget."
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <Reveal>
            <div className="space-y-6">
              {[
                { Icon: Phone, label: "Call us", val: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                { Icon: MessageCircle, label: "WhatsApp", val: site.phone, href: `https://wa.me/${site.phone.replace(/\D/g, "")}` },
                { Icon: Mail, label: "Email", val: site.email, href: `mailto:${site.email}` },
                { Icon: MapPin, label: "Office", val: site.address },
                { Icon: Clock, label: "Working hours", val: site.hours },
              ].map(({ Icon, label, val, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 p-5 border border-border hover:border-berlin-red hover:-translate-y-0.5 transition-all group">
                    <div className="h-11 w-11 grid place-items-center bg-graphite text-white group-hover:bg-berlin-red transition-colors shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.25em] font-semibold text-muted-foreground">{label.toUpperCase()}</div>
                      <div className="mt-1 font-semibold text-graphite">{val}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-graphite text-white p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
              <div className="relative">
                <div className="text-[11px] tracking-[0.3em] font-semibold text-berlin-red">ENQUIRY FORM</div>
                <h3 className="mt-3 font-display font-black text-3xl md:text-4xl tracking-tight">Get a quote.</h3>

                {sent ? (
                  <div className="mt-8 p-6 border border-berlin-red bg-berlin-red/10">
                    <div className="font-display font-bold text-xl">Thanks — we'll be in touch shortly.</div>
                    <p className="mt-2 text-sm text-white/70">A Berlin engineer will reach out within one business day.</p>
                  </div>
                ) : (
                  <div className="mt-8 grid md:grid-cols-2 gap-4">
                    <Field name="name" label="Full name" />
                    <Field name="company" label="Company" />
                    <Field name="email" label="Email" type="email" />
                    <Field name="phone" label="Phone" />
                    <div className="md:col-span-2">
                      <Field name="interest" label="Machine of interest" defaultValue={machineParam} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">MESSAGE</label>
                      <textarea name="message" rows={4} className="mt-2 w-full bg-white/[0.04] border border-white/15 focus:border-berlin-red outline-none px-4 py-3 text-sm text-white placeholder:text-white/30" placeholder="Tell us about your application, parts, timeline…" />
                    </div>
                    <button type="submit" disabled={sending} className="md:col-span-2 mt-2 bg-berlin-red hover:bg-berlin-red-dark text-white py-4 text-sm font-bold tracking-[0.2em] transition-colors disabled:opacity-60">
                      {sending ? "SENDING..." : "SEND ENQUIRY"}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ name, label, type = "text", defaultValue = "" }: { name: string; label: string; type?: string; defaultValue?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        defaultValue={defaultValue}
        className="mt-2 w-full bg-white/[0.04] border border-white/15 focus:border-berlin-red outline-none px-4 py-3 text-sm text-white placeholder:text-white/30"
      />
    </div>
  );
}
