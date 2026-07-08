import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <section className="relative bg-graphite text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute -top-24 -right-24 h-96 w-96 bg-berlin-red/20 blur-[120px] rounded-full" />
      <div className="container-x relative">
        <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-berlin-red">
          <span className="h-px w-8 bg-berlin-red" />
          {eyebrow}
        </div>
        <h1 className="mt-5 font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-lg text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
