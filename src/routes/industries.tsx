import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/data/site";

import factory from "@/assets/factory.jpg";
import sparks from "@/assets/edm-sparks.jpg";
import hero from "@/assets/hero-machine.jpg";
import wirecut from "@/assets/machine-wirecut.jpg";
import sinker from "@/assets/machine-sinker.jpg";
import milling from "@/assets/machine-milling.jpg";
import grinder from "@/assets/machine-grinder.jpg";
import drill from "@/assets/machine-drill.jpg";
import lathe from "@/assets/machine-lathe.jpg";
import radial from "@/assets/machine-radial.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Berlin Machineries" },
      { name: "description", content: "Berlin CNC and EDM machines power automotive, aerospace, defense, medical, electronics, die & mold, energy and precision engineering across India." },
      { property: "og:title", content: "Industries Served — Berlin Machineries" },
      { property: "og:description", content: "Built for industries that demand more — automotive to aerospace, medical to defense." },
    ],
  }),
  component: IndustriesPage,
});

const details: Record<string, string> = {
  Automotive: "Powertrain, transmission, body-in-white and Tier-1 component manufacturing.",
  Aerospace: "Turbine components, brackets, structural parts and exotic-alloy machining.",
  Defense: "Weapon systems, precision mechanical components and secure supply chains.",
  Medical: "Implants, surgical instruments and biocompatible-material machining.",
  Electronics: "Connectors, micro-components and precision electronic housings.",
  "Die & Mold": "Injection moulds, stamping dies, extrusion and forging dies.",
  "Precision Engineering": "High-tolerance components for research and industry.",
  "Tool Room": "The workshop backbone — from prototyping to short-run production.",
  Energy: "Wind, thermal and renewable-energy components.",
  "Research Institutes": "Academic and R&D labs across the country.",
  Manufacturing: "General manufacturing across scale and sector.",
};

const images: Record<string, string> = {
  Automotive: milling,
  Aerospace: hero,
  Defense: radial,
  Medical: grinder,
  Electronics: drill,
  "Die & Mold": factory,
  "Precision Engineering": wirecut,
  "Tool Room": lathe,
  Energy: sparks,
  "Research Institutes": sinker,
  Manufacturing: factory,
};

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="INDUSTRIES SERVED"
        title={<>Built for industries <br /><span className="text-berlin-red italic">that demand more.</span></>}
        subtitle="Wherever precision is non-negotiable, Berlin machines are on the shop floor."
      />
      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="group relative overflow-hidden bg-white border border-border p-8 hover:border-berlin-red hover:-translate-y-1 transition-all duration-500 h-full cursor-pointer">
                {/* Hover image overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${images[name]})` }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-graphite/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-berlin-red">
                    <span className="h-px w-6 bg-berlin-red" />{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 font-display font-bold text-2xl text-graphite group-hover:text-white transition-colors duration-500">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-white/85 transition-colors duration-500">
                    {details[name]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
