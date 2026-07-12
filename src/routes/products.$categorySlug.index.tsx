import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/data/products";

export const Route = createFileRoute("/products/$categorySlug/")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.categorySlug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} — Berlin Machineries` },
          { name: "description", content: loaderData.category.short },
          { property: "og:title", content: `${loaderData.category.name} — Berlin Machineries` },
          { property: "og:description", content: loaderData.category.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <div className="text-berlin-red font-bold tracking-[0.3em] text-xs">404</div>
        <div className="mt-2 font-display text-2xl">Category not found</div>
        <Link to="/products" className="mt-4 inline-block text-berlin-red font-semibold">Back to products →</Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: (typeof categories)[number] };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow={`CATEGORY · ${category.name.toUpperCase()}`}
        title={category.name}
        subtitle={category.short}
      />

      <section className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.machines.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.05}>
                <Link
                  to="/products/$categorySlug/$machineSlug"
                  params={{ categorySlug: category.slug, machineSlug: m.slug }}
                  className="group block bg-white border border-border hover:border-berlin-red transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-6">
                    <AutoSlideImage images={m.images || [m.image]} name={m.name} />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-semibold tracking-[0.25em] text-berlin-red">
                      {(m.series ?? category.name).toUpperCase()}
                    </div>
                    <h3 className="mt-3 font-display font-bold text-xl text-graphite group-hover:text-berlin-red transition-colors">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{m.tagline}</p>
                    <ul className="mt-4 space-y-1.5">
                      {m.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-graphite/80">
                          <Check className="h-3.5 w-3.5 text-berlin-red mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-graphite group-hover:text-berlin-red">
                      KNOW MORE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AutoSlideImage({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={images[current]}
        alt={`${name} - ${current + 1}`}
        loading="lazy"
        className="max-w-[85%] max-h-[85%] object-contain group-hover:scale-105 transition-all duration-[900ms]"
      />
      {images.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-berlin-red" : "w-1.5 bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
