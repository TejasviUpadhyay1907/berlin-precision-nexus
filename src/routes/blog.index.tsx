import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts, type BlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Technical Insights & Industry Knowledge | Berlin Machineries" },
      { name: "description", content: "Technical articles, industry insights, case studies and product guides from Berlin Machineries' engineering team." },
    ],
  }),
  component: BlogIndex,
});

const categories = ["All", "Technical", "Industry", "Product", "Case Study"] as const;

const categoryColors: Record<string, string> = {
  Technical: "bg-blue-50 text-blue-700 border-blue-200",
  Industry: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Product: "bg-berlin-red/10 text-berlin-red border-berlin-red/30",
  "Case Study": "bg-amber-50 text-amber-700 border-amber-200",
};

function BlogIndex() {
  const [filter, setFilter] = useState<string>("All");

  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featured = sorted.find((p) => p.featured) || sorted[0];
  const filtered = filter === "All" ? sorted : sorted.filter((p) => p.category === filter);
  const rest = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="BLOG & INSIGHTS"
        title={<>Engineering <span className="text-berlin-red italic">knowledge.</span></>}
        subtitle="Technical articles, industry insights and case studies from Berlin's engineering team."
      />

      <section className="py-20">
        <div className="container-x">
          {/* Featured post */}
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group block mb-16 relative overflow-hidden bg-graphite hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] bg-berlin-red/10 blur-[120px] rounded-full" />
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.3em] font-semibold text-berlin-red">
                      FEATURED ARTICLE
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 border border-white/20 text-white/60`}>
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] tracking-tight group-hover:text-berlin-red transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-white/60 text-base leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/50">
                    <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}</span>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-white group-hover:text-berlin-red transition-colors">
                    READ ARTICLE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Category filters */}
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

          {/* Blog grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const colorClass = categoryColors[post.category] || "bg-muted text-muted-foreground border-border";

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group border border-border hover:border-berlin-red transition-all h-full flex flex-col"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider px-2 py-1 border ${colorClass}`}>
            <Tag className="h-3 w-3" />
            {post.category.toUpperCase()}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-graphite group-hover:text-berlin-red transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
        </div>

        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {formatDate(post.date)}
        </div>
      </div>
    </Link>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
