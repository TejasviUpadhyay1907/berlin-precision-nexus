import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Service & Support — Berlin Machineries" },
      { name: "description", content: "Nationwide service, AMC, training, remote support, calibration, upgradation and genuine spares for every Berlin CNC and EDM machine." },
      { property: "og:title", content: "Berlin Service — Nationwide Support" },
      { property: "og:description", content: "80+ field engineers. AMC, remote support, training, calibration, upgradation, relocation and spares." },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="SERVICE & SUPPORT"
        title={<>Uptime is <span className="text-berlin-red italic">the product.</span></>}
        subtitle="80+ field engineers across India. Backed by a structured service organisation built for zero-downtime tool rooms."
      />
      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="bg-white p-8 h-full group hover:bg-graphite transition-colors duration-500">
                <div className="text-berlin-red font-display font-black text-4xl group-hover:opacity-80 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-graphite group-hover:text-white transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
