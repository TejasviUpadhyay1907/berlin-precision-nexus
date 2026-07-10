import type React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { getBlogBySlug, blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} — Berlin Machineries Blog` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
          ]
        : [{ title: "Blog Post — Berlin Machineries" }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Nav />
        <div className="container-x py-40 text-center">
          <h1 className="font-display font-black text-4xl text-graphite">Post not found</h1>
          <p className="mt-4 text-muted-foreground">This blog post doesn't exist.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-berlin-red">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find next/prev posts
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIdx = sorted.findIndex((p) => p.slug === slug);
  const prevPost = currentIdx < sorted.length - 1 ? sorted[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? sorted[currentIdx - 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Article header */}
      <section className="pt-32 md:pt-40 pb-12 bg-graphite text-white">
        <div className="container-x max-w-4xl">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
            <div className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider px-2 py-1 border border-berlin-red/40 text-berlin-red">
              <Tag className="h-3 w-3" /> {post.category.toUpperCase()}
            </div>
            <h1 className="mt-4 font-display font-black text-3xl md:text-5xl leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="prose prose-lg max-w-none">
              {renderMarkdown(post.content)}
            </div>
          </Reveal>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 border-t border-border">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="bg-muted p-8 md:p-10 text-center">
              <div className="text-[10px] tracking-[0.3em] font-semibold text-berlin-red">NEED EXPERT ADVICE?</div>
              <h3 className="mt-3 font-display font-bold text-2xl text-graphite">
                Talk to a Berlin application engineer
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get personalised machine recommendations based on your specific requirements.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-berlin-red text-white px-6 py-3 text-sm font-bold tracking-[0.1em] hover:bg-berlin-red-dark transition-all"
              >
                GET IN TOUCH <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="py-12 border-t border-border">
        <div className="container-x max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            {prevPost && (
              <Link
                to="/blog/$slug"
                params={{ slug: prevPost.slug }}
                className="group p-6 border border-border hover:border-berlin-red transition-all"
              >
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">← PREVIOUS</div>
                <div className="mt-2 font-display font-bold text-graphite group-hover:text-berlin-red transition-colors line-clamp-2">
                  {prevPost.title}
                </div>
              </Link>
            )}
            {nextPost && (
              <Link
                to="/blog/$slug"
                params={{ slug: nextPost.slug }}
                className="group p-6 border border-border hover:border-berlin-red transition-all text-right md:col-start-2"
              >
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">NEXT →</div>
                <div className="mt-2 font-display font-bold text-graphite group-hover:text-berlin-red transition-colors line-clamp-2">
                  {nextPost.title}
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Simple markdown-to-JSX renderer for blog content
function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headers
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display font-bold text-2xl text-graphite mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display font-bold text-xl text-graphite mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(<MarkdownTable key={key++} lines={tableLines} />);
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("• ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("• "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-berlin-red mt-2 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-4 space-y-2 list-decimal list-inside">
          {items.map((item, idx) => (
            <li key={idx} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="my-6 border-l-4 border-berlin-red pl-6 italic text-graphite/80">
          {quoteLines.map((ql, qi) => (
            <p key={qi} className="mb-1">{ql}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="my-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
    i++;
  }

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-graphite font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function MarkdownTable({ lines }: { lines: string[] }) {
  const parseRow = (line: string) =>
    line.split("|").filter((c) => c.trim() !== "").map((c) => c.trim());

  const headers = parseRow(lines[0]);
  // Skip separator line (index 1)
  const rows = lines.slice(2).map(parseRow);

  return (
    <div className="my-6 overflow-x-auto border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted border-b border-border">
            {headers.map((h, i) => (
              <th key={i} className="text-left p-3 font-semibold text-graphite text-xs tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-border last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="p-3 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
