import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Trophy, Star, BarChart3, Zap, X } from "lucide-react";
import { categories, type Machine, type Category } from "@/data/products";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

type MachineWithCategory = Machine & { category: Category };

function getAllMachines(): MachineWithCategory[] {
  return categories.flatMap((c) =>
    c.machines.map((m) => ({ ...m, category: c }))
  );
}

function scoreMachine(machine: MachineWithCategory): { score: number; badges: string[] } {
  const badges: string[] = [];
  let score = 0;

  const specs = machine.specs;
  const hasRealSpecs = specs.some((s) => s.value !== "Editable");

  if (hasRealSpecs) {
    score += 20;
    const accSpec = specs.find((s) => s.label.toLowerCase().includes("accuracy"));
    if (accSpec && accSpec.value.includes("0.010")) {
      badges.push("Best Accuracy");
      score += 15;
    }
    const speedSpec = specs.find((s) => s.label.toLowerCase().includes("speed"));
    if (speedSpec && (speedSpec.value.includes("300") || speedSpec.value.includes("280"))) {
      badges.push("Fastest");
      score += 15;
    }
    const wpSpec = specs.find((s) => s.label.toLowerCase().includes("workpiece"));
    if (wpSpec && wpSpec.value.includes("2000")) {
      badges.push("Largest Capacity");
      score += 10;
    }
  }

  if (machine.highlights.length > 4) score += 5;
  if (machine.applications.length > 3) {
    badges.push("Most Versatile");
    score += 10;
  }

  return { score, badges };
}

export function MachineComparison() {
  const allMachines = getAllMachines();
  const [selected, setSelected] = useState<MachineWithCategory[]>([]);
  const [step, setStep] = useState<"select" | "compare">("select");

  const toggleMachine = (machine: MachineWithCategory) => {
    setSelected((prev) => {
      const exists = prev.find((m) => m.slug === machine.slug && m.category.slug === machine.category.slug);
      if (exists) return prev.filter((m) => !(m.slug === machine.slug && m.category.slug === machine.category.slug));
      if (prev.length >= 4) return prev;
      return [...prev, machine];
    });
  };

  const isSelected = (machine: MachineWithCategory) =>
    selected.some((m) => m.slug === machine.slug && m.category.slug === machine.category.slug);

  const startCompare = () => {
    if (selected.length >= 2) setStep("compare");
  };

  const reset = () => {
    setSelected([]);
    setStep("select");
  };

  return (
    <>
      <PageHero
        eyebrow="MACHINE COMPARISON PLATFORM"
        title={<>Compare machines. <br /><span className="text-berlin-red italic">Choose with confidence.</span></>}
        subtitle="Select up to 4 machines side by side. Compare specs, applications and capabilities to find the perfect fit for your tool room."
      />
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-60 pointer-events-none" />
        <div className="absolute -right-40 top-1/4 h-[400px] w-[400px] bg-berlin-red/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="container-x relative">
          {step === "select" ? (
            <SelectionView
              allMachines={allMachines}
              selected={selected}
              isSelected={isSelected}
              toggleMachine={toggleMachine}
              startCompare={startCompare}
            />
          ) : (
            <ComparisonView selected={selected} reset={reset} />
          )}
        </div>
      </section>
    </>
  );
}

function SelectionView({
  allMachines,
  selected,
  isSelected,
  toggleMachine,
  startCompare,
}: {
  allMachines: MachineWithCategory[];
  selected: MachineWithCategory[];
  isSelected: (m: MachineWithCategory) => boolean;
  toggleMachine: (m: MachineWithCategory) => void;
  startCompare: () => void;
}) {
  const [filterCat, setFilterCat] = useState<string>("all");

  const filtered = filterCat === "all"
    ? allMachines
    : allMachines.filter((m) => m.category.slug === filterCat);

  return (
    <div>
      {/* Step indicator */}
      <Reveal>
        <div className="flex items-center gap-4 mb-10 text-xs font-semibold tracking-[0.2em]">
          <span className="inline-flex items-center gap-2 text-berlin-red">
            <span className="h-6 w-6 grid place-items-center bg-berlin-red text-white font-bold">1</span>
            SELECT MACHINES
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border" />
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="h-6 w-6 grid place-items-center bg-muted text-muted-foreground font-bold border border-border">2</span>
            COMPARE
          </span>
        </div>
      </Reveal>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilterCat("all")}
          className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all ${
            filterCat === "all"
              ? "bg-berlin-red text-white border-berlin-red"
              : "border-border text-muted-foreground hover:border-berlin-red hover:text-graphite bg-white"
          }`}
        >
          ALL FAMILIES
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilterCat(c.slug)}
            className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all ${
              filterCat === c.slug
                ? "bg-berlin-red text-white border-berlin-red"
                : "border-border text-muted-foreground hover:border-berlin-red hover:text-graphite bg-white"
            }`}
          >
            {c.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Machine grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((machine, i) => {
          const sel = isSelected(machine);
          return (
            <Reveal key={`${machine.category.slug}-${machine.slug}`} delay={Math.min(i * 0.03, 0.3)}>
              <button
                onClick={() => toggleMachine(machine)}
                className={`w-full text-left border transition-all duration-500 relative group h-full overflow-hidden ${
                  sel
                    ? "border-berlin-red bg-graphite text-white shadow-[0_20px_50px_-20px_rgba(200,16,46,0.55)] -translate-y-1"
                    : "border-border bg-white hover:border-berlin-red hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.25)]"
                }`}
              >
                {/* Red sweep on hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-berlin-red via-berlin-red-dark to-graphite transition-opacity duration-500 ${
                    sel ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                {/* Grid pattern overlay when active/hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 grid-lines transition-opacity duration-500 ${
                    sel ? "opacity-30" : "opacity-0 group-hover:opacity-25"
                  }`}
                />
                {/* Corner accent line */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute top-0 left-0 h-[2px] bg-berlin-red transition-all duration-500 ${
                    sel ? "w-full" : "w-8 group-hover:w-full"
                  }`}
                />

                {/* Selection check */}
                <div
                  className={`absolute top-3 right-3 h-7 w-7 grid place-items-center border transition-all duration-300 ${
                    sel
                      ? "bg-berlin-red border-berlin-red scale-100"
                      : "bg-transparent border-border scale-90 group-hover:border-white/60 group-hover:scale-100"
                  }`}
                >
                  <Check
                    className={`h-3.5 w-3.5 transition-all duration-300 ${
                      sel ? "text-white opacity-100" : "text-transparent opacity-0 group-hover:text-white/70 group-hover:opacity-100"
                    }`}
                  />
                </div>

                <div className="relative p-5 pr-14">
                  <div
                    className={`text-[10px] tracking-[0.25em] font-semibold transition-colors duration-500 ${
                      sel ? "text-white/70" : "text-berlin-red group-hover:text-white/80"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {machine.category.name.toUpperCase()}
                  </div>
                  <div
                    className={`mt-3 font-display font-bold text-lg leading-tight transition-colors duration-500 ${
                      sel ? "text-white" : "text-graphite group-hover:text-white"
                    }`}
                  >
                    {machine.name}
                  </div>
                  <div
                    className={`mt-2 text-xs leading-relaxed line-clamp-2 transition-colors duration-500 ${
                      sel ? "text-white/70" : "text-muted-foreground group-hover:text-white/80"
                    }`}
                  >
                    {machine.tagline}
                  </div>

                  {/* divider */}
                  <div
                    className={`mt-4 h-px transition-colors duration-500 ${
                      sel ? "bg-white/15" : "bg-border group-hover:bg-white/20"
                    }`}
                  />

                  <div className="mt-3 flex flex-wrap gap-1">
                    {machine.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className={`text-[10px] px-2 py-0.5 border transition-colors duration-500 ${
                          sel
                            ? "border-white/25 text-white/80 bg-white/5"
                            : "border-border text-muted-foreground bg-muted/50 group-hover:border-white/25 group-hover:text-white/85 group-hover:bg-white/10"
                        }`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* Bottom action hint */}
                  <div
                    className={`mt-4 flex items-center gap-1 text-[10px] font-semibold tracking-[0.2em] transition-all duration-500 ${
                      sel ? "text-white" : "text-muted-foreground group-hover:text-white"
                    }`}
                  >
                    {sel ? "SELECTED" : "TAP TO COMPARE"}
                    <ArrowRight className={`h-3 w-3 transition-transform duration-500 ${sel ? "translate-x-1" : "group-hover:translate-x-1"}`} />
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Sticky compare bar */}
      {selected.length > 0 && (
        <div className="sticky bottom-6 mt-8 flex items-center justify-between gap-4 bg-graphite text-white border border-graphite p-4 md:p-6 shadow-2xl animate-fade-in">
          <div className="flex items-center gap-3 min-w-0">
            <div className="text-sm font-semibold shrink-0">
              {selected.length} / 4 selected
            </div>
            <div className="hidden md:flex gap-2 flex-wrap">
              {selected.map((m) => (
                <span
                  key={`${m.category.slug}-${m.slug}`}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-berlin-red/20 border border-berlin-red/40"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={startCompare}
            disabled={selected.length < 2}
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-[0.15em] transition-all shrink-0 ${
              selected.length >= 2
                ? "bg-berlin-red text-white hover:bg-berlin-red-dark hover:-translate-y-0.5"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            COMPARE NOW <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function ComparisonView({ selected, reset }: { selected: MachineWithCategory[]; reset: () => void }) {
  const scored = selected.map((m) => ({ machine: m, ...scoreMachine(m) }));
  const bestIdx = scored.reduce((best, curr, i) => (curr.score > scored[best].score ? i : best), 0);

  const rows: { label: string; values: string[] }[] = [
    { label: "Machine Family", values: selected.map((m) => m.category.name) },
    { label: "Series", values: selected.map((m) => m.series || "—") },
    { label: "Tagline", values: selected.map((m) => m.tagline) },
  ];

  const allSpecLabels = new Set<string>();
  selected.forEach((m) => m.specs.forEach((s) => {
    if (s.value !== "Editable") allSpecLabels.add(s.label);
  }));

  allSpecLabels.forEach((label) => {
    rows.push({
      label,
      values: selected.map((m) => {
        const spec = m.specs.find((s) => s.label === label);
        return spec && spec.value !== "Editable" ? spec.value : "—";
      }),
    });
  });

  rows.push({
    label: "Applications",
    values: selected.map((m) => m.applications.join(", ")),
  });

  rows.push({
    label: "Key Highlights",
    values: selected.map((m) => m.highlights.slice(0, 4).join(" · ")),
  });

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-graphite border border-border bg-white px-4 py-2 hover:border-berlin-red transition-colors"
        >
          <X className="h-3.5 w-3.5" /> Back to selection
        </button>
        <div className="text-xs font-semibold tracking-[0.2em] text-muted-foreground hidden md:block">
          COMPARING {selected.length} MACHINES
        </div>
      </div>

      {/* Header cards */}
      <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: `repeat(${selected.length}, minmax(0, 1fr))` }}>
        {selected.map((m, i) => (
          <Reveal key={`${m.category.slug}-${m.slug}`} delay={i * 0.05}>
            <div
              className={`p-6 border relative h-full transition-all ${
                i === bestIdx
                  ? "border-berlin-red bg-berlin-red/5 shadow-[0_20px_50px_-25px_rgba(200,16,46,0.5)]"
                  : "border-border bg-white"
              }`}
            >
              {i === bestIdx && (
                <div className="absolute -top-3 left-4 inline-flex items-center gap-1 bg-berlin-red text-white text-[10px] font-bold tracking-wider px-3 py-1">
                  <Trophy className="h-3 w-3" /> RECOMMENDED
                </div>
              )}
              <div className="text-[10px] tracking-[0.2em] text-berlin-red font-semibold mt-1">
                {m.category.name.toUpperCase()}
              </div>
              <div className="mt-2 font-display font-bold text-xl text-graphite">{m.name}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {scored[i].badges.map((badge) => (
                  <span key={badge} className="text-[10px] px-2 py-0.5 bg-berlin-red/10 text-berlin-red border border-berlin-red/30">
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                to="/products/$categorySlug/$machineSlug"
                params={{ categorySlug: m.category.slug, machineSlug: m.slug }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-berlin-red transition-colors"
              >
                View product <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Comparison table */}
      <Reveal>
        <div className="border border-border overflow-x-auto bg-white">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-4 text-xs font-semibold tracking-wider text-muted-foreground w-[180px]">
                  SPECIFICATION
                </th>
                {selected.map((m, i) => (
                  <th
                    key={`${m.category.slug}-${m.slug}`}
                    className={`text-left p-4 text-xs font-semibold tracking-wider ${
                      i === bestIdx ? "text-berlin-red" : "text-graphite"
                    }`}
                  >
                    {m.name.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.label}
                  className={`border-b border-border last:border-0 ${ri % 2 === 0 ? "bg-muted/30" : "bg-white"}`}
                >
                  <td className="p-4 text-xs font-semibold text-muted-foreground">{row.label}</td>
                  {row.values.map((val, vi) => (
                    <td key={vi} className={`p-4 text-sm ${vi === bestIdx ? "text-graphite font-semibold" : "text-graphite/80"}`}>
                      {val === "—" ? (
                        <span className="text-muted-foreground/50">—</span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Recommendation block */}
      <Reveal>
        <div className="mt-8 border border-berlin-red/30 bg-gradient-to-br from-berlin-red/5 to-transparent p-6 md:p-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-berlin-red/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-berlin-red" />
              <div className="text-xs font-semibold tracking-[0.2em] text-berlin-red">OUR RECOMMENDATION</div>
            </div>
            <h3 className="mt-3 font-display font-bold text-2xl md:text-3xl text-graphite">
              {selected[bestIdx].name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
              Based on specifications, versatility and capabilities, the <strong className="text-graphite">{selected[bestIdx].name}</strong> from
              the {selected[bestIdx].category.name} family stands out as the recommended choice.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {scored[bestIdx].badges.length > 0 ? (
                scored[bestIdx].badges.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-white border border-berlin-red/30 text-graphite">
                    <Zap className="h-3 w-3 text-berlin-red" /> {badge}
                  </span>
                ))
              ) : (
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-white border border-berlin-red/30 text-graphite">
                  <BarChart3 className="h-3 w-3 text-berlin-red" /> Highest Overall Score
                </span>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/products/$categorySlug/$machineSlug"
                params={{ categorySlug: selected[bestIdx].category.slug, machineSlug: selected[bestIdx].slug }}
                className="inline-flex items-center gap-2 bg-berlin-red text-white px-5 py-3 text-sm font-bold tracking-[0.1em] hover:bg-berlin-red-dark hover:-translate-y-0.5 transition-all"
              >
                VIEW PRODUCT <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-graphite text-graphite px-5 py-3 text-sm font-bold tracking-[0.1em] hover:bg-graphite hover:text-white transition-all"
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
