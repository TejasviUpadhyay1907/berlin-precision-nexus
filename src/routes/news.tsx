import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Tag } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { newsItems, type NewsItem } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Berlin Machineries" },
      { name: "description", content: "Latest news from Berlin Machineries — product launches, events, awards, and company updates." },
    ],
  }),
  component: NewsPage,
});

const categories = ["All", "Product Launch", "Event", "Press", "Award", "Company"] as const;

const categoryColors: Record<string, string> = {
  "Product Launch": "bg-berlin-red/10 text-berlin-red border-berlin-red/30",
  Event: "bg-blue-50 text-blue-700 border-blue-200",
  Press: "bg-purple-50 text-purple-700 border-purple-200",
  Award: "bg-amber-50 text-amber-700 border-amber-200",
  Company: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

function NewsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const sorted = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const filtered = filter === "All" ? sorted : sorted.filter((n) => n.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="NEWS & UPDATES"
        title={<>From the <span className="text-berlin-red italic">shop floor.</span></>}
        subtitle="Product launches, exhibitions, milestones and company updates from Berlin Machineries."
      />

      <section className="py-20">
        <div className="container-x">
          {/* Category filter tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all ${
                    filter === cat
                      ? "bg-berlin-red text-white border-berlin-red"
                      : "border-border text-graphite hover:border-berlin-red hover:text-berlin-red"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </Reveal>

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <NewsCard
                  item={item}
                  isExpanded={expanded === item.id}
                  onToggle={() => setExpanded(expanded === item.id ? null : item.id)}
                />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No news in this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function NewsCard({ item, isExpanded, onToggle }: { item: NewsItem; isExpanded: boolean; onToggle: () => void }) {
  const colorClass = categoryColors[item.category] || "bg-muted text-muted-foreground border-border";

  return (
    <article className="border border-border hover:border-berlin-red transition-all group h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider px-2 py-1 border ${colorClass}`}>
            <Tag className="h-3 w-3" />
            {item.category.toUpperCase()}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-graphite group-hover:text-berlin-red transition-colors leading-tight">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(item.date)}
        </div>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
          {item.excerpt}
        </p>

        <button
          onClick={onToggle}
          className="mt-4 text-sm font-semibold text-berlin-red hover:text-berlin-red-dark transition-colors text-left"
        >
          {isExpanded ? "Read less ↑" : "Read more →"}
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-border p-6 bg-muted/30">
          <div className="prose prose-sm max-w-none text-muted-foreground">
            {item.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-3 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
