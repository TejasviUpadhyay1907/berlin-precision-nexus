import wirecut from "@/assets/1.svg";
import sinker from "@/assets/2.svg";
import znc from "@/assets/3.svg";
import drill from "@/assets/4.svg";

export type Machine = {
  slug: string;
  name: string;
  series?: string;
  tagline: string;
  description: string;
  applications: string[];
  highlights: string[];
  image: string;
  specs: { label: string; value: string }[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  image: string;
  machines: Machine[];
};

const genericHighlights = [
  "Rigid casting for vibration-free performance",
  "Precision ball-screw drives",
  "Servo controlled axes",
  "Intelligent control panel",
  "Built for continuous production",
];

const editableSpecs = [
  { label: "Table size (mm)", value: "Editable" },
  { label: "Table travel (X x Y) (mm)", value: "Editable" },
  { label: "Max Z axis travel (mm)", value: "Editable" },
  { label: "Max workpiece weight (kg)", value: "Editable" },
  { label: "Cutting accuracy", value: "Editable" },
  { label: "Power", value: "Editable" },
];

export const categories: Category[] = [
  {
    slug: "cnc-wire-cut-edm",
    name: "CNC Wire Cut EDM",
    short: "Ultra-precision wire EDM machines engineered for the world's most demanding tool rooms.",
    image: wirecut,
    machines: [
      {
        slug: "sf-series",
        name: "SF Series",
        series: "SF Series",
        tagline: "Full Servo. PLC-Controlled. Built for Precision Without Compromise.",
        description:
          "The SF Series is Berlin Machineries' fully-servo, PLC-based Wire EDM platform — engineered for shops that measure success in microns, not millimeters. Every axis runs on closed-loop servo control, backed by an industrial-grade PC and a dynamically balanced wire drum accurate to 0.005 micron.",
        applications: ["Die & Mold", "Precision Engineering", "Tool Room", "Aerospace"],
        highlights: [
          "Closed-loop servo control on XY-axis & drum",
          "Industrial PC (quad-core i3, 64GB SSD)",
          "4-axis linkage with direct DXF import",
          "Chrome-plated wire drum, balanced to 0.005 micron",
          "Taiwan-made linear guides & ball screws",
          "120L fluid tank with multi-stage filtration",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "SF300 / SF400 / SF500 / SF600" },
          { label: "Table travel X×Y (mm)", value: "320×400 up to 630×800" },
          { label: "Max workpiece weight (kg)", value: "600 – 1200" },
          { label: "Wire diameter", value: "Ø 0.12–0.22 mm" },
          { label: "Max cutting speed", value: "≥200 mm²/min" },
          { label: "Repeatability", value: "≤0.005 mm" },
          { label: "Power rating", value: "≤3 kW" },
        ],
      },
      {
        slug: "gt-series",
        name: "GT Series",
        series: "GT Series",
        tagline: "PMI-Guided Precision. Engineered for Everyday Productivity.",
        description:
          "The GT Series pairs a heavy-duty, vibration-free structure with genuine PMI linear guideways — the same class of motion components trusted across precision industries worldwide. From tool rooms to aerospace and medical component manufacturing, GT Series is the dependable workhorse on your shop floor.",
        applications: ["Die & Mold", "Aerospace", "Medical", "Precision Engineering"],
        highlights: [
          "Genuine PMI linear guideways",
          "Heavy-duty vibration-free structure",
          "High-speed cutting without sacrificing finish",
          "Advanced control for stable operation",
          "Low maintenance, user-friendly design",
          "Scales from 320mm to 1000mm tables",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "ECO320BJ / ECO500BJ / ECO800BJ / ECO1000BJ" },
          { label: "Table travel X×Y (mm)", value: "320×400 up to 1000×1200" },
          { label: "Max cutting thickness (mm)", value: "250 – 550" },
          { label: "Max workpiece weight (kg)", value: "450 – 3000" },
          { label: "Machining accuracy", value: "≤0.008 mm (multi-cut)" },
          { label: "Max cutting speed", value: "165 mm²/min (single pass)" },
          { label: "Power supply", value: "AC 3-Phase, ~380V/50Hz" },
        ],
      },
      {
        slug: "n-series",
        name: "N Series",
        series: "N Series",
        tagline: "The New Generation of Wire EDM.",
        description:
          "Berlin's most advanced Wire EDM platform — full AC servo drive on X & Y, linear guideways across every axis, motorized Z-lift, and automatic self-weight wire tension control. Available in three intelligence tiers — Elite, Pro, and Pro+.",
        applications: ["Die & Mold", "Automotive", "Aerospace", "Medical", "Precision Engineering"],
        highlights: [
          "AC Servo motors on X & Y axes",
          "LM linear guideways on all axes + wire drum",
          "Motorized Z-axis lift",
          "Automatic self-weight wire tension control",
          "Self-aligning ceramic guide wheels",
          "Three tiers: Elite, Pro, Pro+",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "N35 / N45 / N55 / N63" },
          { label: "Table travel X×Y (mm)", value: "450×350 up to 800×630" },
          { label: "Max workpiece weight (kg)", value: "400 – 1600" },
          { label: "Wire diameter", value: "Ø 0.10–0.30 mm" },
          { label: "Max cutting speed", value: "160–180 mm²/min" },
          { label: "Power supply", value: "415V/50Hz, 2.5kW" },
        ],
      },
      {
        slug: "hyper-series",
        name: "HyperCut Series",
        series: "HyperCut Series",
        tagline: "Engineered to Cut Beyond Limits — 2× Faster.",
        description:
          "When speed is the deciding factor, HyperCut is Berlin's answer — the fastest Wire EDM in its class, cutting up to 2X faster than conventional machines. Servo-driven XY & drum, UV-axis linear motor, and Sonic smart control with wireless MPG.",
        applications: ["Automotive", "Aerospace", "Medical", "Die & Mold", "Precision Engineering"],
        highlights: [
          "Up to 300 mm²/min — 2× faster than standard",
          "Micron-level accuracy at speed",
          "Servo drive on XY & drum",
          "UV-axis linear motor for superior taper finish",
          "Sonic smart control + wireless MPG",
          "Upgraded wire tension for high feed rates",
          "Energy-efficient, non-stop operation",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "HYPER 300 / HYPER 500 / HYPER 600 / HYPER 800" },
          { label: "Table travel X×Y (mm)", value: "300×400 up to 1000×800" },
          { label: "Max workpiece weight (kg)", value: "800 – 2000" },
          { label: "Cutting accuracy", value: "0.010–0.015 mm" },
          { label: "Max cutting speed", value: "280–300 mm²/min" },
          { label: "Wire diameter", value: "Ø 0.12–0.25 mm" },
        ],
      },
      {
        slug: "super-series",
        name: "Super Series",
        series: "Super Series",
        tagline: "Heavy-Duty by Design. Reliable by Reputation.",
        description:
          "The Super Series is built for one job: keep cutting, day after day, without drama. Open C-type frame for fast loading/unloading, rigid heavy-load-rated structure for large workpieces through long production runs.",
        applications: ["Tool Room", "General Engineering", "Heavy Components"],
        highlights: [
          "Open C-type structure for fast loading",
          "High stability — minimized vibration",
          "Rigid frame for heavy operation",
          "Heavy load capacity for larger jobs",
          "Durable, low-maintenance build",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "FK7735-Super / FK7745-Super / FK7755-Super / FK7763-Super" },
          { label: "Table travel X/Y (mm)", value: "350×450 up to 630×800" },
          { label: "Max cut thickness (mm)", value: "300 – 400" },
          { label: "Max workpiece weight (kg)", value: "400 – 1200" },
          { label: "Wire diameter", value: "Ø 0.10–0.30 mm" },
          { label: "Max cutting speed", value: "160–180 mm²/min" },
          { label: "Power supply", value: "415V/50Hz, 2.5kW" },
        ],
      },
      {
        slug: "fzt-series",
        name: "FZT Series",
        series: "FZT Series",
        tagline: "High Precision. Superior Finish. Consistent, Every Time.",
        description:
          "The FZT Series brings servo-driven precision to an open C-type frame, giving operators easy access without sacrificing rigidity. XY-axis servo control paired with intuitive MPG hand-wheel operation.",
        applications: ["Tool Room", "Die & Mold", "Precision Components"],
        highlights: [
          "Open C-type structure for easy access",
          "XY-axis servo control (Z & UV optional)",
          "MPG hand wheel for precise jogging",
          "Three-stage adjustable wire tension",
          "High stability, minimized vibration",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "FZT-320 / FZT-400 / FZT-500 / FZT-630" },
          { label: "Table travel X/Y (mm)", value: "400×320 up to 800×630" },
          { label: "Max cut thickness (mm)", value: "300 – 400" },
          { label: "Max workpiece weight (kg)", value: "450 – 1200" },
          { label: "Wire diameter", value: "Ø 0.10–0.22 mm" },
          { label: "Power supply", value: "415V/50Hz, 2.5kW" },
        ],
      },
      {
        slug: "fdk-series",
        name: "FDK Series",
        series: "FDK Series",
        tagline: "Precision That Starts Here.",
        description:
          "Berlin's entry point into precision Wire EDM — Gen 2 pulley system, precision ball-screw drive, and high-quality linear motion components that punch well above their price point. For shops taking their first step into Wire EDM or adding dependable secondary capacity.",
        applications: ["Tool Room", "Training", "General Engineering", "Secondary Capacity"],
        highlights: [
          "Gen 2 pulley system for wire stability",
          "Long-lasting rigid frame construction",
          "Precision ball-screw drive",
          "High-quality LM components throughout",
          "Advanced UV axis for taper cutting",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "FDK-7725 / FDK-7735 / FDK-7745 / FDK-7763" },
          { label: "Table travel X×Y (mm)", value: "320×250 up to 800×630" },
          { label: "Max workpiece weight (kg)", value: "300 – 1600" },
          { label: "Cutting accuracy", value: "0.015–0.020 mm" },
          { label: "Wire diameter", value: "Ø 0.12–0.25 mm" },
          { label: "Power supply", value: "220V/50Hz (1-ph) / 415V/50Hz (3-ph)" },
        ],
      },
      {
        slug: "elite-series",
        name: "Elite Series",
        series: "Elite Series",
        tagline: "Precision as a standard, not an option.",
        description:
          "The Elite Series balances speed and mirror-finish quality. Ideal for die makers who need repeatable ±0.005 mm accuracy day after day.",
        applications: ["Die & Mold", "Tool Room", "Electronics"],
        highlights: [...genericHighlights, "Multi-cut for mirror finish"],
        image: wirecut,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "cnc-sinker-edm",
    name: "CNC Sinker EDM",
    short: "Advanced Spark EDM systems with Windows-based control and mirror finish capability.",
    image: sinker,
    machines: [
      {
        slug: "cnc-spark-edm",
        name: "CNC Spark EDM",
        tagline: "Advanced Spark EDM with column & bed movement configurations.",
        description:
          "Windows-based control system, PIKA circuit for Ra ≤ 0.1 µm mirror finish, dual high/low voltage control for hard materials.",
        applications: ["Die & Mold", "Tool Room", "Precision Engineering"],
        highlights: [
          "Windows-based controller",
          "PIKA circuit — mirror finish Ra ≤ 0.1 µm",
          "Dual voltage control for hard materials",
          "Single & double head structures",
          "Panasonic absolute positioning motor",
        ],
        image: sinker,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "znc-edm",
    name: "ZNC EDM",
    short: "Reliable ZNC Spark EDM machines with intelligent file storage and repeat cutting.",
    image: znc,
    machines: [
      {
        slug: "znc-spark-edm",
        name: "ZNC Spark EDM",
        tagline: "Dependable ZNC EDM for everyday tool rooms.",
        description:
          "Compact, easy-to-operate ZNC Spark EDM with generous file storage capacity and precision Z-axis control.",
        applications: ["Tool Room", "Die & Mold", "General Machining"],
        highlights: [
          "High file storage capacity",
          "Precision Z-axis servo",
          "Ergonomic operator panel",
          "Rigid welded frame",
        ],
        image: znc,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "edm-drill",
    name: "EDM Drill Machines",
    short: "High-speed EDM hole drilling for start holes, cooling channels and small deep holes.",
    image: drill,
    machines: [
      {
        slug: "edm-drill-machine",
        name: "EDM Drill Machine",
        tagline: "Precise start-hole drilling for wire EDM tool rooms.",
        description:
          "Fast, accurate small-hole drilling in hardened steel, carbide, copper and exotic alloys.",
        applications: ["Wire EDM Start Holes", "Cooling Channels", "Injectors"],
        highlights: [
          "Small-hole EDM drilling",
          "Multi-electrode holder",
          "Deep-hole capability",
          "Compact footprint",
        ],
        image: drill,
        specs: editableSpecs,
      },
      {
        slug: "cnc-edm-drill",
        name: "CNC EDM Drill Machine",
        tagline: "CNC-controlled EDM hole drilling for repeatable production.",
        description:
          "Full CNC EDM drill with programmable X, Y and Z motion for automated multi-hole cycles.",
        applications: ["Turbine blades", "Injectors", "Precision components"],
        highlights: ["CNC 3-axis", "Auto pallet options", "High-speed drilling"],
        image: drill,
        specs: editableSpecs,
      },
    ],
  },
];

export function findMachine(categorySlug: string, machineSlug: string) {
  const cat = categories.find((c) => c.slug === categorySlug);
  const machine = cat?.machines.find((m) => m.slug === machineSlug);
  return { category: cat, machine };
}

export function allMachines() {
  return categories.flatMap((c) => c.machines.map((m) => ({ ...m, category: c })));
}
