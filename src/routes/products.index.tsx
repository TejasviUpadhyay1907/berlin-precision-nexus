import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { categories, type Category } from "@/data/products";

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

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:gap-10">
            {categories.map((c, i) => (
              <CategoryCard key={c.slug} category={c} index={i} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CategoryCard({
  category: c,
  index,
  reverse,
}: {
  category: Category;
  index: number;
  reverse: boolean;
}) {
  const reduce = useReducedMotion();
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: (index % 4) * 0.08 },
    },
  };

  const highlights = c.machines[0]?.highlights?.slice(0, 3) ?? [];

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)] transition-[box-shadow,border-color,transform] duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-0.5 hover:border-berlin-red/40 hover:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.25)] ${
        index % 2 === 0 ? "bg-white" : "bg-[hsl(var(--muted)/0.35)]"
      }`}
    >
      {/* Precision top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-berlin-red/30 to-transparent opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100" />

      <div className={`grid md:grid-cols-2 items-stretch ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        {/* Image panel */}
        <div className="relative overflow-hidden bg-[hsl(var(--muted)/0.4)] aspect-[5/4] md:aspect-auto md:min-h-[360px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--muted)/0.6),transparent_60%)]" />
          <motion.img
            src={c.image}
            alt={c.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-8 md:p-12 will-change-transform"
            initial={false}
            animate={reduce ? {} : {}}
            whileHover={reduce ? {} : { scale: 1.03, x: reverse ? 12 : -12 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <div className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.3em] text-berlin-red">
            {String(index + 1).padStart(2, "0")} · CATEGORY
          </div>
        </div>

        {/* Content panel */}
        <div className="relative p-7 md:p-10 flex flex-col justify-center">
          <div className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground">
            {c.machines.length} {c.machines.length === 1 ? "MODEL" : "MODELS"}
          </div>
          <h2 className="mt-3 font-display font-black tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.02] text-graphite">
            {c.name}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl line-clamp-2">
            {c.short}
          </p>

          {/* Hover-reveal highlights */}
          <div
            className="grid transition-[grid-template-rows,opacity,margin] duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] grid-rows-[0fr] opacity-0 mt-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-5"
            aria-hidden="true"
          >
            <ul className="overflow-hidden space-y-1.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-graphite/85">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-berlin-red" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/products/$categorySlug"
              params={{ categorySlug: c.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-white transition-all duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-berlin-red hover:pr-6"
            >
              EXPLORE CATEGORY
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[350ms] group-hover:translate-x-0.5" />
            </Link>
            <div className="flex flex-wrap gap-1.5">
              {c.machines.slice(0, 3).map((m) => (
                <Link
                  key={m.slug}
                  to="/products/$categorySlug/$machineSlug"
                  params={{ categorySlug: c.slug, machineSlug: m.slug }}
                  className="text-[10px] font-semibold tracking-[0.15em] px-2.5 py-1.5 rounded-full border border-border text-graphite/70 hover:border-berlin-red hover:text-berlin-red transition-colors"
                >
                  {m.name.toUpperCase()}
                </Link>
              ))}
              {c.machines.length > 3 && (
                <span className="text-[10px] font-semibold tracking-[0.15em] px-2.5 py-1.5 text-muted-foreground">
                  +{c.machines.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
