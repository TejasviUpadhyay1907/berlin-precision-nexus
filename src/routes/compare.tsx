import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MachineComparison } from "@/components/site/MachineComparison";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Machines — Berlin Machineries" },
      { name: "description", content: "Compare up to 4 Berlin machines side by side. Specs, applications, capabilities — find the perfect fit for your tool room." },
      { property: "og:title", content: "Machine Comparison Platform — Berlin Machineries" },
      { property: "og:description", content: "Select and compare CNC Wire Cut EDM, Sinker EDM, milling, grinding and lathe machines. Intelligent recommendations included." },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <MachineComparison />
      <Footer />
    </div>
  );
}
