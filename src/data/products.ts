import wirecut from "@/assets/1.svg";
import sinker from "@/assets/2.svg";
import znc from "@/assets/3.svg";
import drill from "@/assets/4.svg";
import milling from "@/assets/5.svg";
import grinder from "@/assets/6.svg";
import lathe from "@/assets/7.svg";
import radial from "@/assets/8.svg";
import utility from "@/assets/9.svg";

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
        slug: "n-series",
        name: "N Series",
        series: "N Series",
        tagline: "The next level of Wire EDM technology.",
        description:
          "Designed for production-grade tool rooms that need consistent accuracy across long unmanned runs. Rigid meehanite casting, closed-loop servo control and intelligent power generator.",
        applications: ["Die & Mold", "Automotive", "Precision Engineering", "Aerospace"],
        highlights: [
          "Cutting speed up to 280–300 mm²/min",
          "Micron-level accuracy 0.010–0.015 mm",
          "Servo drive on X, Y & drum",
          "Upgraded wire tension system",
          ...genericHighlights.slice(0, 2),
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "HYPER 300 / 400 / 500 / 600 / 800" },
          { label: "Table size (mm)", value: "650×450 up to 1350×980" },
          { label: "Table travel X×Y (mm)", value: "300×400 up to 1000×800" },
          { label: "Max Z travel (mm)", value: "550 (customisable up to 800)" },
          { label: "Max workpiece weight (kg)", value: "800 – 2000" },
          { label: "Cutting accuracy", value: "0.010 – 0.015 mm" },
          { label: "Max cutting speed", value: "280–300 mm²/min" },
          { label: "Wire diameter", value: "Ø 0.12 – 0.25 mm" },
          { label: "Power", value: "220V / 415V, 2.0 kW" },
        ],
      },
      {
        slug: "hyper-series",
        name: "Hyper Series",
        series: "Hyper Series",
        tagline: "Engineered to cut beyond limits — 2× faster than anything else.",
        description:
          "Berlin Hypercut is the fastest CNC Wire Cut EDM in its class. Purpose-built for high-throughput tool rooms with 300 mm³/min productivity and unmatched surface finish.",
        applications: ["Automotive", "Aerospace", "Medical", "Die & Mold", "Precision Engineering"],
        highlights: [
          "2× faster cutting speed",
          "Up to 300 mm³/min productivity",
          "Sonic smart control with wireless MPG",
          "Ultra-high precision, superior surface finish",
          "Energy efficient & sustainable",
        ],
        image: wirecut,
        specs: [
          { label: "Cutting speed", value: "Up to 300 mm³/min" },
          { label: "Accuracy", value: "Micron level" },
          { label: "Control", value: "Sonic Smart Panel + Wireless MPG" },
          { label: "Drive", value: "Servo XY + Drum" },
          { label: "Ball screw", value: "Precision ground" },
          { label: "Wire tension", value: "Upgraded stable system" },
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
      {
        slug: "fdk-series",
        name: "FDK Series",
        series: "FDK Series",
        tagline: "Workhorse Wire EDM for heavy-duty production.",
        description:
          "FDK 7725 to FDK 7763 — a proven line-up trusted by thousands of Indian tool rooms. Rigid frames, dependable output, easy service.",
        applications: ["Tool Room", "Die & Mold", "General Engineering"],
        highlights: [
          "5 sizes from FDK-7725 to FDK-7763",
          "Table travel 320×250 up to 800×630",
          "Workpiece up to 1600 kg",
          "Standard 160–180 mm²/min cutting speed",
        ],
        image: wirecut,
        specs: [
          { label: "Models", value: "FDK-7725 / 7735 / 7745 / 7755 / 7763" },
          { label: "Table size (mm)", value: "560×400 up to 1140×750" },
          { label: "Table travel X×Y (mm)", value: "320×250 up to 800×630" },
          { label: "Max Z travel (mm)", value: "350 – 650" },
          { label: "Max workpiece weight (kg)", value: "300 – 1600" },
          { label: "Cutting speed", value: "160 – 180 mm²/min" },
          { label: "Wire diameter", value: "Ø 0.12 – 0.25 mm" },
        ],
      },
      {
        slug: "super-series",
        name: "Super Series",
        series: "Super Series",
        tagline: "Advanced Wire EDM with UV linear axis.",
        description:
          "Upgraded platform with front-side Z LM drive, fully closed body and rigid casting for demanding precision jobs.",
        applications: ["Aerospace", "Medical", "Precision Components"],
        highlights: [
          "Front-side Z axis LM drive",
          "UV axis (linear motor)",
          "Fully closed body",
          "Rigid casting",
        ],
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
  {
    slug: "milling",
    name: "Milling Machines",
    short: "A complete family of vertical, universal, turret and RAM-type milling machines.",
    image: milling,
    machines: [
      {
        slug: "vertical-turret-milling",
        name: "Vertical Turret Milling",
        tagline: "The industry benchmark for tool-room milling.",
        description: "Robust vertical turret milling for tool-making, jigs, fixtures and die work.",
        applications: ["Tool Room", "Jigs & Fixtures", "Die Work"],
        highlights: ["Heavy meehanite casting", "Precision turret head", "3-axis DRO ready"],
        image: milling,
        specs: editableSpecs,
      },
      {
        slug: "universal-knee-milling",
        name: "Universal Knee Type Milling",
        tagline: "Versatile knee-type universal miller.",
        description: "Universal swivel table for angular and helical milling in a single setup.",
        applications: ["General Engineering", "Tool Room"],
        highlights: ["Swivel table", "Powerful spindle", "Rigid knee construction"],
        image: milling,
        specs: editableSpecs,
      },
      {
        slug: "ram-type-universal-milling",
        name: "RAM Type Universal Vertical Milling",
        tagline: "RAM-type universal miller for maximum reach.",
        description: "Extended RAM design gives large working envelope with universal head.",
        applications: ["Large Component Machining", "Tool Room"],
        highlights: ["Extended RAM", "Universal head", "Heavy duty gearbox"],
        image: milling,
        specs: editableSpecs,
      },
      {
        slug: "all-geared-vertical-milling",
        name: "All-Geared Vertical Milling",
        tagline: "All-geared vertical mill for heavy cuts.",
        description: "All-geared head for constant torque across the speed range.",
        applications: ["Production Milling", "Heavy Duty Work"],
        highlights: ["All-geared head", "Rigid column", "Coolant system"],
        image: milling,
        specs: editableSpecs,
      },
      {
        slug: "universal-swivel-milling",
        name: "Universal Swivel Head Milling",
        tagline: "Swivel head for compound-angle milling.",
        description: "Universal swivel head machine for compound angular work.",
        applications: ["Tool Room", "Die Making"],
        highlights: ["Universal swivel head", "Precision spindle"],
        image: milling,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "grinding",
    name: "Surface Grinding",
    short: "Hydraulic surface grinders — FH series — for micron-perfect surface finish.",
    image: grinder,
    machines: [
      {
        slug: "fh-surface-grinder",
        name: "FH Series Hydraulic Surface Grinder",
        tagline: "Hydraulic surface grinding, precision by design.",
        description: "Rigid double-V ways, smooth hydraulic table motion and precise cross feed.",
        applications: ["Tool Room", "Die & Mold", "Precision Engineering"],
        highlights: [
          "Hydraulic table drive",
          "Rigid double-V ways",
          "Precision cross feed",
          "Diamond dresser & demagnetizer",
        ],
        image: grinder,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "lathe",
    name: "Lathe Machines",
    short: "Belt-drive and all-geared high-precision lathes built for Indian tool rooms.",
    image: lathe,
    machines: [
      {
        slug: "all-geared-precision-lathe",
        name: "All-Geared High Precision Lathe",
        tagline: "All-geared precision lathe for demanding turning.",
        description: "Hardened & ground bed, all-geared headstock and high-accuracy spindle.",
        applications: ["Precision Turning", "Tool Room"],
        highlights: ["Hardened ground bed", "All-geared headstock", "3-axis DRO ready"],
        image: lathe,
        specs: editableSpecs,
      },
      {
        slug: "belt-drive-lathe",
        name: "Belt Drive Lathe",
        tagline: "Reliable belt-drive lathe for general turning.",
        description: "Simple, robust belt-drive lathe for everyday turning tasks.",
        applications: ["General Turning", "Job Shops"],
        highlights: ["Belt drive", "Rigid bed", "Long-life spindle"],
        image: lathe,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "drilling",
    name: "Drilling Machines",
    short: "Radial and pillar drilling machines with reliable hydraulic clamping.",
    image: radial,
    machines: [
      {
        slug: "radial-drill",
        name: "Radial Drilling Machine",
        tagline: "Heavy-duty radial drill with hydraulic clamping.",
        description: "Radial drill with hydraulic clamping, large working envelope and rigid column.",
        applications: ["Heavy Fabrication", "Structural Drilling"],
        highlights: ["Hydraulic clamping", "Large swing", "Precision spindle"],
        image: radial,
        specs: editableSpecs,
      },
      {
        slug: "pillar-drill",
        name: "Pillar Drilling Machine",
        tagline: "Simple, rigid pillar drill for the everyday shop.",
        description: "Rugged pillar drill for hole making across a wide range of parts.",
        applications: ["General Drilling", "Job Shops"],
        highlights: ["Rigid pillar", "Wide speed range", "Precision spindle"],
        image: radial,
        specs: editableSpecs,
      },
    ],
  },
  {
    slug: "utility",
    name: "Utility Machines",
    short: "Band saws and power presses to round out your tool-room.",
    image: utility,
    machines: [
      {
        slug: "band-saw",
        name: "Band Saw",
        tagline: "Precision band saw for clean, square cuts.",
        description: "Metal cutting band saw for tool room and job-shop use.",
        applications: ["Material Prep", "Job Shops"],
        highlights: ["Precision guides", "Coolant system", "Variable speed"],
        image: utility,
        specs: editableSpecs,
      },
      {
        slug: "power-press",
        name: "Power Press",
        tagline: "Reliable mechanical power press.",
        description: "Mechanical power press for stamping, blanking and forming.",
        applications: ["Sheet Metal", "Production Stamping"],
        highlights: ["Rigid C-frame", "Precision flywheel", "Safety clutch"],
        image: utility,
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
