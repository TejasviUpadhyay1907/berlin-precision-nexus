import wirecut from "@/assets/1.svg";
import sinker from "@/assets/2.svg";
import znc from "@/assets/3.svg";
import drill from "@/assets/4.svg";

// CNC Wire Cut EDM machine images
import sfImg from "@/assets/1_SF SERIES.png";
import gtImg1 from "@/assets/2_GT SERIES.png";
import gtImg2 from "@/assets/3_GT SERIES.png";
import nSeriesImg from "@/assets/4_N SERIES.png";
import hyperImg1 from "@/assets/5_HYPERCUT SERIES.png";
import hyperImg2 from "@/assets/6_HYPERCUT SERIES.png";
import superImg from "@/assets/7_SUPER SERIES.png";
import fztImg1 from "@/assets/8_FZT SERIES.png";
import fztImg2 from "@/assets/9_FZT SERIES.png";
import fdkImg from "@/assets/10_FDK SERIES.png";

// CNC Sinker EDM images
import singleHeadImg from "@/assets/12( Single Head 02 CATEGORY 2nd machine).png";
import doubleHeadImg1 from "@/assets/13(Double Head 02 CATEGORY 3rd machine).png";
import doubleHeadImg2 from "@/assets/14(Double Head 02 CATEGORY 3rd machine 2nd image).png";

// EDM Drill images
import edmDrillTiltImg1 from "@/assets/18(znc drill Tilting Head Optional 04 CATEGORY 1st machine).png";
import edmDrillTiltImg2 from "@/assets/19(tiltin ead ootional 04 CATEGORY 1st machine).png";

export type Machine = {
  slug: string;
  name: string;
  series?: string;
  tagline: string;
  description: string;
  applications: string[];
  highlights: string[];
  image: string;
  images?: string[];
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
        image: sfImg,
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
        image: gtImg1,
        images: [gtImg1, gtImg2],
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
        image: nSeriesImg,
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
        image: hyperImg1,
        images: [hyperImg1, hyperImg2],
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
        image: superImg,
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
        image: fztImg1,
        images: [fztImg1, fztImg2],
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
        image: fdkImg,
        specs: [
          { label: "Models", value: "FDK-7725 / FDK-7735 / FDK-7745 / FDK-7763" },
          { label: "Table travel X×Y (mm)", value: "320×250 up to 800×630" },
          { label: "Max workpiece weight (kg)", value: "300 – 1600" },
          { label: "Cutting accuracy", value: "0.015–0.020 mm" },
          { label: "Wire diameter", value: "Ø 0.12–0.25 mm" },
          { label: "Power supply", value: "220V/50Hz (1-ph) / 415V/50Hz (3-ph)" },
        ],
      },
    ],
  },
  {
    slug: "cnc-sinker-edm",
    name: "CNC Sinker EDM",
    short: "Advanced CNC Spark EDM systems — Bed Movement, Single Head, and Double Head configurations for precision mirror-finish die & mould work.",
    image: sinker,
    machines: [
      {
        slug: "bed-movement-cnc-mirror-edm",
        name: "Bed Movement CNC Mirror EDM",
        tagline: "Stationary head design for minimal vibration and stable spark gap.",
        description:
          "Built on a stationary-head, moving-workpiece-table configuration. The electrode head stays fixed horizontally and moves only vertically (Z-axis), while the table travels along X-Y axes — ideal for precision mirror-finish die and mould work on light to medium workpieces.",
        applications: ["Die & Mold", "Precision Engineering", "Tool Room"],
        highlights: [
          "Stationary head for minimal vibration",
          "Simple, repeatable electrode setup",
          "Lower moving inertia on head assembly",
          "PIKA circuit — mirror finish Ra 0.1 µm",
          "15-inch LCD touch screen controller",
          "Machining efficiency 300–500 mm³/min",
        ],
        image: sinker,
        specs: [
          { label: "Models", value: "H30CNC / H35CNC / H40CNC / H45CNC" },
          { label: "X/Y/Z Travel (mm)", value: "300×210×270 up to 450×350×300" },
          { label: "Max electrode weight (kg)", value: "25 – 80" },
          { label: "Max workpiece weight (kg)", value: "400 – 600" },
          { label: "Positioning accuracy", value: "5 µm/100 mm" },
          { label: "Repeat accuracy", value: "2 µm/100 mm" },
          { label: "Optimal finish", value: "Ra 0.1 µm" },
          { label: "Processing current", value: "50 A" },
        ],
      },
      {
        slug: "head-movement-cnc-edm",
        name: "Head Movement CNC EDM (Single Head)",
        tagline: "No table weight limits. Built for heavy dies and large moulds.",
        description:
          "Moves the electrode head across X-Y-Z axes while the workpiece stays fixed. This removes any weight limitation on the table, making it the choice for heavy dies, large moulds, and massive aerospace or automotive components.",
        applications: ["Die & Mold", "Aerospace", "Automotive", "Heavy Components"],
        highlights: [
          "No table weight restriction",
          "Handles workpieces up to 4000 kg",
          "High precision on large-format jobs",
          "Faster cycle times",
          "Stable vibration-controlled machining",
          "Digital AC servo motor drive",
        ],
        image: singleHeadImg,
        specs: [
          { label: "Models", value: "BM-540 / BM-650 / BM-850 / BM-1060 / BM-1260 / BM-1370" },
          { label: "Work travel X×Y×Z (mm)", value: "500×400×300 up to 1300×700×450" },
          { label: "Max workpiece weight (kg)", value: "1800 – 4000" },
          { label: "Max electrode weight (kg)", value: "100 – 200" },
          { label: "Machining efficiency", value: "300–500 mm³/min" },
          { label: "Optimal finish", value: "Ra 0.1 µm" },
          { label: "Electrode loss", value: "0.1%" },
          { label: "Input power", value: "3PH AC 380/415V, 50–60Hz, 9 KVA" },
        ],
      },
      {
        slug: "double-head-cnc-edm",
        name: "Double Head CNC EDM",
        tagline: "2× Productivity. Dual independent heads. Up to 80% cycle time reduction.",
        description:
          "Two independent electrode heads on a shared work area — simultaneous or sequential — each with its own control. Effectively doubles machining productivity and cuts cycle time by up to 80%.",
        applications: ["High-Volume Production", "Multi-Cavity Moulds", "Mirror Components", "Aerospace"],
        highlights: [
          "2× productivity with dual heads",
          "Independent control per head",
          "50–80% reduced cycle times",
          "Parallel, Sequential, Collaborative, Backup modes",
          "Handles workpieces up to 7000 kg",
          "Digital AC servo motor drive",
        ],
        image: doubleHeadImg1,
        images: [doubleHeadImg1, doubleHeadImg2],
        specs: [
          { label: "Models", value: "BM-1260 / BM-1470 / BM-1680 / BM-1880" },
          { label: "Work travel X (single/double)", value: "1200/600 up to 1800/1200 mm" },
          { label: "Work travel Y (mm)", value: "580 – 800" },
          { label: "Work travel Z (mm)", value: "400 – 600" },
          { label: "Max workpiece weight (kg)", value: "3000 – 7000" },
          { label: "Max electrode weight (kg)", value: "150 – 250" },
          { label: "Machining efficiency", value: "300–500 mm³/min" },
          { label: "Input power", value: "3PH AC 380/415V, 50–60Hz, 9 KVA" },
        ],
      },
    ],
  },
  {
    slug: "znc-edm",
    name: "ZNC EDM",
    short: "Precision ZNC Spark EDM with 10-step auto finishing, fuzzy logic control, and 60-file storage for die & mould work.",
    image: znc,
    machines: [
      {
        slug: "znc-spark-edm",
        name: "ZNC Spark EDM",
        tagline: "10-Step Auto Finishing. Fuzzy Logic Control. 60-File Storage.",
        description:
          "The ZNC Spark EDM (Pika-Den EDM) delivers precision spark machining through an industrial PC-based controller and a 10-step auto-finishing system. Fuzzy-logic discharge control with a high-performance generator for consistent, low-wear results on hard materials and complex cavities.",
        applications: ["Die & Mold", "Aerospace", "Precision Components", "Hard Materials"],
        highlights: [
          "60-file storage for mould/customer profiles",
          "10-step auto finishing (Rough → Medium → Fine)",
          "On-the-fly condition adjustments mid-spark",
          "Advanced fuzzy logic arcing control",
          "15\" CE-compliant dustproof display",
          "Industrial-grade PC controller",
        ],
        image: znc,
        specs: [
          { label: "Models", value: "ZNC300 / ZNC350 / ZNC450 / ZNC540 / ZNC600" },
          { label: "Workbench (mm)", value: "550×300 up to 1000×600" },
          { label: "Left/Right travel (mm)", value: "300 – 700" },
          { label: "Front/Back travel (mm)", value: "250 – 500" },
          { label: "Z-Axis stroke (mm)", value: "160 – 400" },
          { label: "Max electrode weight (kg)", value: "25 – 100" },
          { label: "Max working weight (kg)", value: "500 – 2000" },
          { label: "Max processing speed", value: "360–700 mm³/min" },
          { label: "Electrode consumption", value: "< 0.2%" },
          { label: "Surface finish", value: "Ra 0.18" },
        ],
      },
    ],
  },
  {
    slug: "edm-drill",
    name: "EDM Drill Machines",
    short: "High-speed EDM hole drilling — servo-motor powered, from Ø0.3mm micro-holes to full CNC automated production drilling.",
    image: drill,
    machines: [
      {
        slug: "edm-drill-tilting-head",
        name: "EDM Drill (Tilting Head Optional)",
        tagline: "Servo-powered micro-hole drilling with optional tilting head for angled holes.",
        description:
          "Berlin's Advance EDM Drill range is a servo-motor-powered hole-drilling EDM built for fast, precise micro-hole machining — from cooling channels to fine mesh and perforated components. Tungsten steel rotating head and electrode vertical correction plate ensure straight, accurate holes.",
        applications: ["Cooling Channels", "Fine Mesh", "Perforation", "Die & Mold"],
        highlights: [
          "Servo motor powered spindle",
          "Tungsten steel rotating head",
          "Electrode vertical correction plate",
          "Optional tilting head for angled drilling",
          "Fine electrode Ø0.3–Ø3.0 mm",
          "Turn head speed 0–200 rpm",
        ],
        image: edmDrillTiltImg1,
        images: [edmDrillTiltImg1, edmDrillTiltImg2],
        specs: [
          { label: "Models", value: "FDD703.30 / FDD703.40 / FDD703.45 / FDD703.55 / FDD703.63 / FDD703.80" },
          { label: "Stroke X-Y (mm)", value: "300×400 up to 800×1000" },
          { label: "Electrode diameter", value: "Ø 0.3–3.0 mm" },
          { label: "Spindle stroke W-axis (mm)", value: "300 – 400" },
          { label: "Working stroke Z-axis (mm)", value: "300 – 400" },
          { label: "Turn head speed", value: "0–200 rpm" },
          { label: "Max working current", value: "30 A" },
          { label: "Power", value: "1Φ 220V / 3Φ 415V, 50Hz, 4.0kW" },
        ],
      },
      {
        slug: "cnc-edm-drill",
        name: "CNC EDM Drill Machine",
        tagline: "Full CNC control. Automated, repeatable precision for high-volume drilling.",
        description:
          "Full X-Y-Z (C-axis) CNC control for automated, repeatable precision in high-volume drilling. Processing speeds up to 60 mm/min with minimal electrode consumption (≤0.8%) for demanding cooling-channel and micro-hole production.",
        applications: ["Turbine Blades", "Injectors", "Cooling Channels", "High-Volume Drilling"],
        highlights: [
          "Full CNC X, Y, Z (C-axis) control",
          "Electrode range Ø0.3–Ø6.0 mm",
          "Low electrode consumption ≤0.8%",
          "XY movement speed 1000 mm/min",
          "Processing speed 30–60 mm/min",
        ],
        image: drill,
        specs: [
          { label: "Models", value: "CNC35-S / CNC450-S / CNC550-S / CNC630-S / CNC800-S / CNC1000-S" },
          { label: "Stroke X-Y (mm)", value: "350×450 up to 1000×1200" },
          { label: "Electrode diameter", value: "Ø 0.3–6.0 mm" },
          { label: "Spindle stroke W-axis (mm)", value: "350 – 500" },
          { label: "Movement speed XY", value: "1000 mm/min" },
          { label: "Processing speed", value: "30–60 mm/min" },
          { label: "Max processing current", value: "30 A" },
          { label: "Electrode consumption", value: "≤0.8%" },
          { label: "Power", value: "3Φ 415V, 50Hz, 4.5kW" },
        ],
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
