import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Download, Phone, Mail, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/Section";
import { categories, findMachine } from "@/data/products";
import { site } from "@/data/site";

export const Route = createFileRoute("/products/$categorySlug/$machineSlug")({
  loader: ({ params }) => {
    const { category, machine } = findMachine(params.categorySlug, params.machineSlug);
    if (!category || !machine) throw notFound();
    return { category, machine };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.machine.name} — ${loaderData.category.name} | Berlin` },
          { name: "description", content: loaderData.machine.description },
          { property: "og:title", content: `${loaderData.machine.name} — Berlin Machineries` },
          { property: "og:description", content: loaderData.machine.description },
          { property: "og:image", content: loaderData.machine.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <div className="text-berlin-red font-bold tracking-[0.3em] text-xs">404</div>
        <div className="mt-2 font-display text-2xl">Machine not found</div>
        <Link to="/products" className="mt-4 inline-block text-berlin-red font-semibold">Back to products →</Link>
      </div>
    </div>
  ),
  component: MachinePage,
});

function MachinePage() {
  const { category, machine } = Route.useLoaderData() as {
    category: (typeof categories)[number];
    machine: (typeof categories)[number]["machines"][number];
  };
  const related = category.machines.filter((m) => m.slug !== machine.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-graphite text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-berlin-red/20 blur-[140px] rounded-full" />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-widest text-white/50">
              <Link to="/products" className="hover:text-berlin-red">Products</Link>
              {" / "}
              <Link to="/products/$categorySlug" params={{ categorySlug: category.slug }} className="hover:text-berlin-red">{category.name}</Link>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-berlin-red">
              <span className="h-px w-8 bg-berlin-red" />{(machine.series ?? category.name).toUpperCase()}
            </div>
            <h1 className="mt-4 font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tight">
              {machine.name}
            </h1>
            <p className="mt-6 text-xl text-white/70 italic">{machine.tagline}</p>
            <p className="mt-4 text-white/60 max-w-xl leading-relaxed">{machine.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ machine: `${machine.name} (${category.name})` } as any}
                className="inline-flex items-center gap-2 bg-berlin-red text-white px-6 py-3.5 text-sm font-bold tracking-[0.15em] hover:bg-berlin-red-dark transition-colors"
              >
                REQUEST QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 border border-white/25 text-white px-6 py-3.5 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-graphite transition-all">
                <Download className="h-4 w-4" /> BROCHURE
              </button>
            </div>
          </div>
          <MachineImageSlider images={machine.images || [machine.image]} name={machine.name} />
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-graphite-2 border-b border-white/10">
        <div className="container-x py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/70">
              Interested in <strong className="text-white">{machine.name}</strong>? Reach out directly:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in the ${machine.name} (${category.name}). Please share pricing and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 text-xs font-bold tracking-wider hover:bg-[#1fb855] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WHATSAPP
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 text-xs font-bold tracking-wider border border-white/20 hover:bg-white hover:text-graphite transition-all"
              >
                <Phone className="h-3.5 w-3.5" /> CALL NOW
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${machine.name} - ${category.name}`)}&body=${encodeURIComponent(`Hi Berlin Machineries,\n\nI am interested in the ${machine.name} from your ${category.name} range.\n\nPlease share detailed specifications, pricing, and delivery timelines.\n\nThank you.`)}`}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 text-xs font-bold tracking-wider border border-white/20 hover:bg-white hover:text-graphite transition-all"
              >
                <Mail className="h-3.5 w-3.5" /> EMAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-muted">
        <div className="container-x grid md:grid-cols-2 gap-16">
          <Reveal>
            <SectionEyebrow>APPLICATIONS</SectionEyebrow>
            <h2 className="mt-4 font-display font-black text-3xl md:text-4xl tracking-tight text-graphite">Built for the parts that matter.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {machine.applications.map((a) => (
                <span key={a} className="text-xs font-semibold tracking-wider px-3 py-2 bg-white border border-border">
                  {a.toUpperCase()}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow>HIGHLIGHTS</SectionEyebrow>
            <h2 className="mt-4 font-display font-black text-3xl md:text-4xl tracking-tight text-graphite">Engineered advantages.</h2>
            <ul className="mt-6 space-y-3">
              {machine.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-graphite">
                  <span className="mt-1 h-5 w-5 grid place-items-center bg-berlin-red text-white shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm md:text-base">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <Reveal>
            <SectionEyebrow>TECHNICAL SPECIFICATIONS</SectionEyebrow>
            <h2 className="mt-4 font-display font-black text-3xl md:text-4xl tracking-tight text-graphite">Specification sheet.</h2>
            <p className="mt-3 text-sm text-muted-foreground">Values below are editable placeholders. Final specifications are configured per order.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {machine.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-muted/60" : "bg-white"}>
                      <td className="py-4 px-6 font-semibold text-graphite w-1/3 border-r border-border">{s.label}</td>
                      <td className="py-4 px-6 text-graphite/80">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container-x">
            <SectionEyebrow>RELATED MACHINES</SectionEyebrow>
            <h2 className="mt-4 font-display font-black text-3xl md:text-4xl tracking-tight text-graphite">More from {category.name}.</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  to="/products/$categorySlug/$machineSlug"
                  params={{ categorySlug: category.slug, machineSlug: m.slug }}
                  className="group block bg-white border border-border hover:border-berlin-red transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms]" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-semibold tracking-[0.25em] text-berlin-red">
                      {(m.series ?? category.name).toUpperCase()}
                    </div>
                    <h3 className="mt-2 font-display font-bold text-lg text-graphite group-hover:text-berlin-red">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{m.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

function MachineImageSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  if (images.length <= 1) {
    return (
      <div className="aspect-[5/4] bg-white/[0.03] border border-white/10 overflow-hidden">
        <img src={images[0]} alt={name} className="w-full h-full object-contain p-4" />
      </div>
    );
  }

  return (
    <div className="aspect-[5/4] bg-white/[0.03] border border-white/10 overflow-hidden relative group">
      <img
        src={images[current]}
        alt={`${name} - Image ${current + 1}`}
        className="w-full h-full object-contain p-4 transition-opacity duration-300"
      />
      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 hover:bg-black/80 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 hover:bg-black/80 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${i === current ? "bg-berlin-red w-4" : "bg-white/50"}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
