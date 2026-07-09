import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Trophy, Star, BarChart3, Zap } from "lucide-react";
import { categories, type Machine, type Category } from "@/data/products";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/Section";

type MachineWithCategory = Machine & { category: Category };

function getAllMachines(): MachineWithCategory[] {
  return categories.flatMap((c) =>
    c.machines.map((m) => ({ ...m, category: c }))
  );
}

// Scoring logic for recommendations
function scoreMachine(machine: MachineWithCategory): { score: number; badges: string[] } {
  const badges: string[] = [];
  let score = 0;

  const specs = machine.specs;
  const hasRealSpecs = specs.some((s) => s.value !== "Editable");

  if (hasRealSpecs) {
    score += 20;
    // Check for accuracy mentions
    const accSpec = specs.find((s) => s.label.toLowerCase().includes("accuracy"));
    if (accSpec && accSpec.value.includes("0.010")) {
      badges.push("Best Accuracy");
      score += 15;
    }
    // Check for speed
    const speedSpec = specs.find((s) => s.label.toLowerCase().includes("speed"));
    if (speedSpec && (speedSpec.value.includes("300") || speedSpec.value.includes("280"))) {
      badges.push("Fastest");
      score += 15;
    }
    // Check workpiece capacity
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
    <section className="py-24 md:py-32 bg-graphite text-white overflow-hidden relative">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] bg-berlin-red/15 blur-[160px] rounded-full" />
      <div className="container-x relative">
        <Reveal>
          <SectionEyebrow>MACHINE COMPARISON PLATFORM</SectionEyebrow>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[0.92] tracking-tight">
            Compare machines. <br />
            <span className="text-berlin-red italic">Choose with confidence.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Select up to 4 machines side by side. Compare specs, applications and capabilities
            to find the perfect fit for your tool room.
          </p>
        </Reveal>

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
    <div className="mt-12">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilterCat("all")}
          className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all ${
            filterCat === "all"
              ? "bg-berlin-red text-white border-berlin-red"
              : "border-white/20 text-white/70 hover:border-berlin-red hover:text-white"
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
                : "border-white/20 text-white/70 hover:border-berlin-red hover:text-white"
            }`}
          >
            {c.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Machine grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((machine) => {
          const sel = isSelected(machine);
          return (
            <button
              key={`${machine.category.slug}-${machine.slug}`}
              onClick={() => toggleMachine(machine)}
              className={`text-left p-5 border transition-all relative group ${
                sel
                  ? "border-berlin-red bg-berlin-red/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
              }`}
            >
              {sel && (
                <div className="absolute top-3 right-3 h-6 w-6 bg-berlin-red grid place-items-center">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
              )}
              <div className="text-[10px] tracking-[0.2em] text-berlin-red font-semibold">
                {machine.category.name.toUpperCase()}
              </div>
              <div className="mt-2 font-display font-bold text-white text-base">
                {machine.name}
              </div>
              <div className="mt-1 text-xs text-white/50 line-clamp-2">{machine.tagline}</div>
              <div className="mt-3 flex flex-wrap gap-1">
                {machine.applications.slice(0, 3).map((app) => (
                  <span key={app} className="text-[10px] px-2 py-0.5 border border-white/10 text-white/60">
                    {app}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Sticky compare bar */}
      {selected.length > 0 && (
        <div className="sticky bottom-6 mt-8 flex items-center justify-between gap-4 bg-graphite-2 border border-white/15 p-4 md:p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-white">
              {selected.length} / 4 selected
            </div>
            <div className="hidden md:flex gap-2">
              {selected.map((m) => (
                <span
                  key={`${m.category.slug}-${m.slug}`}
                  className="text-xs px-2 py-1 bg-berlin-red/20 border border-berlin-red/40 text-white"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={startCompare}
            disabled={selected.length < 2}
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-[0.15em] transition-all ${
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
  // Score machines for recommendation
  const scored = selected.map((m) => ({ machine: m, ...scoreMachine(m) }));
  const bestIdx = scored.reduce((best, curr, i) => (curr.score > scored[best].score ? i : best), 0);

  // Build comparison rows
  const rows: { label: string; values: string[] }[] = [
    { label: "Machine Family", values: selected.map((m) => m.category.name) },
    { label: "Series", values: selected.map((m) => m.series || "—") },
    { label: "Tagline", values: selected.map((m) => m.tagline) },
  ];

  // Merge all spec labels from selected machines
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
    <div className="mt-12">
      {/* Header cards */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={reset}
          className="text-sm text-white/60 hover:text-white border border-white/20 px-4 py-2 hover:border-white/40 transition-colors"
        >
          ← Back to selection
        </button>
      </div>

      <div className={`grid gap-4 mb-8`} style={{ gridTemplateColumns: `repeat(${selected.length}, 1fr)` }}>
        {selected.map((m, i) => (
          <div
            key={`${m.category.slug}-${m.slug}`}
            className={`p-6 border relative ${
              i === bestIdx
                ? "border-berlin-red bg-berlin-red/10"
                : "border-white/15 bg-white/[0.02]"
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
            <div className="mt-2 font-display font-bold text-xl text-white">{m.name}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {scored[i].badges.map((badge) => (
                <span key={badge} className="text-[10px] px-2 py-0.5 bg-berlin-red/20 text-berlin-red border border-berlin-red/30">
                  {badge}
                </span>
              ))}
            </div>
            <Link
              to="/products/$categorySlug/$machineSlug"
              params={{ categorySlug: m.category.slug, machineSlug: m.slug }}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-berlin-red"
            >
              View product <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="border border-white/15 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-xs font-semibold tracking-wider text-white/50 w-[180px]">
                SPECIFICATION
              </th>
              {selected.map((m) => (
                <th
                  key={`${m.category.slug}-${m.slug}`}
                  className="text-left p-4 text-xs font-semibold tracking-wider text-white/80"
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
                className={`border-b border-white/5 ${ri % 2 === 0 ? "bg-white/[0.01]" : ""}`}
              >
                <td className="p-4 text-xs font-semibold text-white/60">{row.label}</td>
                {row.values.map((val, vi) => (
                  <td key={vi} className="p-4 text-sm text-white/90">
                    {val === "—" ? (
                      <span className="text-white/30">—</span>
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

      {/* Recommendation block */}
      <div className="mt-8 border border-berlin-red/40 bg-berlin-red/5 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Star className="h-5 w-5 text-berlin-red" />
          <div className="text-xs font-semibold tracking-[0.2em] text-berlin-red">RECOMMENDATION</div>
        </div>
        <h3 className="mt-3 font-display font-bold text-2xl text-white">
          {selected[bestIdx].name}
        </h3>
        <p className="mt-2 text-sm text-white/70 max-w-xl">
          Based on specifications, versatility and capabilities, the <strong className="text-white">{selected[bestIdx].name}</strong> from
          the {selected[bestIdx].category.name} family stands out as the recommended choice.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {scored[bestIdx].badges.length > 0 ? (
            scored[bestIdx].badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-berlin-red/20 border border-berlin-red/40 text-white">
                <Zap className="h-3 w-3 text-berlin-red" /> {badge}
              </span>
            ))
          ) : (
            <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-berlin-red/20 border border-berlin-red/40 text-white">
              <BarChart3 className="h-3 w-3 text-berlin-red" /> Highest Overall Score
            </span>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/products/$categorySlug/$machineSlug"
            params={{ categorySlug: selected[bestIdx].category.slug, machineSlug: selected[bestIdx].slug }}
            className="inline-flex items-center gap-2 bg-berlin-red text-white px-5 py-3 text-sm font-bold tracking-[0.1em] hover:bg-berlin-red-dark transition-all"
          >
            VIEW PRODUCT <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/25 text-white px-5 py-3 text-sm font-bold tracking-[0.1em] hover:bg-white hover:text-graphite transition-all"
          >
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}
