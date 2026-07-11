import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — CNC & EDM Machinery | Berlin Machineries" },
      { name: "description", content: "Explore Berlin Machineries' complete range of CNC Wire Cut EDM, Sinker EDM, EDM Drill, milling, grinding and lathe machines." },
      { property: "og:title", content: "Berlin Products — CNC & EDM Machinery" },
      { property: "og:description", content: "The complete Berlin tool-room portfolio: N, Hyper, Elite, FDK, Super, Sinker EDM, ZNC, EDM Drill, milling, grinding, lathe and drilling." },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="PRODUCT PORTFOLIO"
        title={<>The complete <span className="text-berlin-red italic">tool room.</span></>}
        subtitle="Four product families. Dozens of models. One engineering standard."
      />

      <section className="py-24">
        <div className="container-x space-y-24">
          {categories.map((c, i) => (
            <Reveal key={c.slug}>
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <div className="text-[11px] tracking-[0.3em] font-semibold text-berlin-red">
                    {String(i + 1).padStart(2, "0")} · CATEGORY
                  </div>
                  <h2 className="mt-3 font-display font-black text-4xl md:text-5xl tracking-tight text-graphite">
                    {c.name}
                  </h2>
                  <p className="mt-4 text-muted-foreground max-w-xl">{c.short}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.machines.map((m) => (
                      <Link
                        key={m.slug}
                        to="/products/$categorySlug/$machineSlug"
                        params={{ categorySlug: c.slug, machineSlug: m.slug }}
                        className="text-xs font-semibold tracking-wider px-3 py-2 border border-border hover:border-berlin-red hover:text-berlin-red transition-colors"
                      >
                        {m.name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/products/$categorySlug"
                    params={{ categorySlug: c.slug }}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-graphite hover:text-berlin-red group"
                  >
                    EXPLORE CATEGORY <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className={`aspect-[5/4] bg-white overflow-hidden p-6 flex items-center justify-center ${i % 2 ? "lg:order-1" : ""}`}>
                  <img src={c.image} alt={c.name} loading="lazy" className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-[900ms]" />
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
