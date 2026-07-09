export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Technical" | "Industry" | "Product" | "Case Study";
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wire-edm-vs-sinker-edm-which-to-choose",
    title: "Wire EDM vs Sinker EDM — Which One Does Your Tool Room Need?",
    excerpt:
      "A comprehensive comparison of Wire Cut EDM and Sinker EDM technologies. Understand when to use each, their strengths, limitations, and ideal applications.",
    category: "Technical",
    date: "2026-06-10",
    readTime: "8 min read",
    author: "Berlin Engineering Team",
    featured: true,
    content: `## Introduction

Choosing between Wire Cut EDM and Sinker EDM is one of the most important decisions a tool room manager makes. Both use electrical discharge to remove material, but they work in fundamentally different ways and serve different purposes.

This guide breaks down everything you need to know to make the right choice.

## How Wire Cut EDM Works

Wire Cut EDM uses a thin brass or coated wire (typically 0.1–0.3mm diameter) as the electrode. The wire moves continuously through the workpiece, cutting a narrow kerf like a bandsaw — but with electrical sparks instead of teeth.

**Best for:**
- Through-cutting profiles and contours
- Punch and die manufacturing
- Complex 2D shapes with tight tolerances
- Thin slots and narrow features
- Parts requiring excellent surface finish (Ra 0.15 µm achievable)

**Limitations:**
- Can only cut through the workpiece (no blind cavities)
- Requires a start hole for internal features
- Slower than milling for simple shapes

## How Sinker EDM Works

Sinker EDM (also called Die Sinking EDM or Spark EDM) uses a shaped electrode — usually copper or graphite — that "sinks" into the workpiece. The electrode shape is the negative of the cavity being created.

**Best for:**
- Complex 3D cavities and pockets
- Injection mould cavities
- Blind holes and internal features
- Textured surfaces
- Hard materials that are difficult to mill

**Limitations:**
- Requires custom electrodes (adds time and cost)
- Electrode wear must be managed
- Slower material removal than wire EDM for through-cuts

## When to Choose Wire EDM

Choose Wire Cut EDM when you need:
1. Through-cutting with tight tolerances (± 0.005 mm)
2. Complex profiles in hardened steel
3. Excellent surface finish without secondary operations
4. Unmanned 24/7 production capability
5. Punch and die manufacturing

## When to Choose Sinker EDM

Choose Sinker EDM when you need:
1. 3D cavities that can't be through-cut
2. Injection mould tooling
3. Textured or contoured surfaces
4. Ribs, slots and deep features
5. Mirror finish (Ra ≤ 0.1 µm with PIKA circuit)

## The Berlin Recommendation

Most serious tool rooms need both technologies. Wire EDM handles profile work and punches, while Sinker EDM handles cavities and complex 3D work. If you can only invest in one machine first, choose based on your primary work:

- **80% profile work?** → Start with Wire EDM
- **80% cavity work?** → Start with Sinker EDM
- **Mixed work?** → Wire EDM offers more versatility for general use

Contact Berlin's application engineers for a personalised recommendation based on your specific parts and volumes.`,
  },
  {
    slug: "understanding-edm-surface-finish",
    title: "Understanding Surface Finish in EDM — From Ra 3.2 to Mirror Finish",
    excerpt:
      "Learn how EDM surface finish is measured, what affects it, and how to achieve mirror-quality Ra 0.1 µm finishes on your Berlin machines.",
    category: "Technical",
    date: "2026-05-22",
    readTime: "6 min read",
    author: "Berlin Engineering Team",
    content: `## What is Surface Finish?

Surface finish (or surface roughness) describes the texture of a machined surface. In EDM, it's primarily measured as Ra (arithmetic average roughness) in micrometres (µm).

## EDM Surface Finish Ranges

| Finish Level | Ra Value | Typical Use |
|---|---|---|
| Rough cut | 3.2–6.3 µm | Material removal, roughing |
| Standard | 1.6–3.2 µm | General tool room work |
| Fine | 0.4–1.6 µm | Precision components |
| Very fine | 0.15–0.4 µm | Die faces, critical surfaces |
| Mirror | ≤ 0.1 µm | Optical, medical, aesthetic |

## Factors Affecting EDM Surface Finish

### 1. Discharge Energy
Lower discharge energy = finer surface finish but slower cutting. Multi-cut strategies use high energy for roughing then progressively lower energy for finishing.

### 2. Number of Cuts (Wire EDM)
- 1 cut: Ra 2.5–3.2 µm (roughing only)
- 2 cuts: Ra 1.2–1.6 µm
- 3 cuts: Ra 0.6–0.8 µm
- 4+ cuts: Ra 0.15–0.4 µm

### 3. Wire Type and Diameter
Coated wires (zinc-coated, diffusion-annealed) produce better surface finish than plain brass. Thinner wires allow finer cuts but are more fragile.

### 4. PIKA Circuit (Sinker EDM)
Berlin's CNC Sinker EDM machines feature the PIKA circuit — a specialised finishing circuit that achieves mirror finish Ra ≤ 0.1 µm. This is essential for injection mould cavities where surface quality directly affects part aesthetics.

## Practical Tips for Better Surface Finish

1. **Use multi-cut strategies** — Don't try to achieve fine finish in a single cut
2. **Maintain clean dielectric** — Contaminated fluid degrades surface quality
3. **Control wire tension** — Inconsistent tension causes waviness
4. **Choose appropriate flushing** — Proper debris removal prevents secondary discharge
5. **Service your machine regularly** — Worn guides and bearings affect finish quality

## Conclusion

Surface finish capability is one of the key differentiators between machine grades. Berlin's Hyper and N Series machines achieve Ra 0.15 µm in wire EDM, while the CNC Sinker EDM with PIKA circuit reaches mirror finish Ra 0.1 µm — meeting the most demanding requirements in aerospace, medical and optical applications.`,
  },
  {
    slug: "choosing-right-cnc-machine-tool-room",
    title: "How to Choose the Right CNC Machine for Your Tool Room",
    excerpt:
      "A buyer's guide covering the key factors: workpiece size, accuracy requirements, production volume, material types, and budget considerations.",
    category: "Industry",
    date: "2026-05-05",
    readTime: "10 min read",
    author: "Berlin Sales Engineering",
    content: `## The Tool Room Challenge

Setting up or expanding a tool room is a significant investment. Choose the wrong machine and you'll face years of compromises — limited capability, excessive maintenance, or simply the wrong technology for your parts.

This guide walks through the decision framework that Berlin's application engineers use with customers.

## Step 1: Define Your Primary Application

What parts will this machine make 80% of the time?

- **Punches and dies** → Wire Cut EDM
- **Mould cavities** → Sinker EDM + Milling
- **General precision parts** → Milling + Lathe
- **Surface finishing** → Surface Grinding
- **Start holes for wire EDM** → EDM Drill
- **Heavy material removal** → Milling

## Step 2: Workpiece Size and Weight

Match your machine's working envelope to your largest typical workpiece (not your largest ever workpiece — that's what outsourcing is for).

Key specs to check:
- Table travel (X × Y × Z)
- Maximum workpiece weight
- Table size (must physically fit the part + fixtures)

Berlin's Wire EDM range covers 320×250mm (FDK-7725) up to 1000×800mm (N Series Hyper 800).

## Step 3: Accuracy Requirements

Be honest about what accuracy you actually need:

| Requirement | Suitable Technology |
|---|---|
| ± 0.1 mm | General milling, lathe |
| ± 0.05 mm | Precision milling, CNC lathe |
| ± 0.02 mm | Wire EDM (standard) |
| ± 0.01 mm | Wire EDM (precision grade) |
| ± 0.005 mm | Wire EDM (high-end, controlled environment) |

## Step 4: Production Volume

- **Prototype / single piece** → Versatility matters most
- **Small batch (10–100)** → Setup time and repeatability matter
- **Production (100+)** → Speed, automation and unmanned operation matter

High-volume production justifies machines with auto wire threading, auto pallet systems, and 24/7 unmanned capability.

## Step 5: Budget Reality

Consider total cost of ownership, not just purchase price:
- Machine cost
- Installation and foundation
- Training
- Tooling and consumables (wire, filters, dielectric)
- Maintenance and AMC
- Power consumption
- Floor space

A cheaper machine with higher consumable costs and more downtime can cost more over 5 years than a premium machine with better reliability.

## The Berlin Approach

We don't just sell machines — we solve manufacturing problems. Our application engineers will:
1. Analyse your parts and requirements
2. Recommend the right technology and machine size
3. Provide test cuts on similar materials
4. Calculate ROI and payback period
5. Support you through installation, training and beyond

Contact us for a free consultation and machine recommendation.`,
  },
  {
    slug: "berlin-hyper-series-case-study-automotive",
    title: "Case Study: How a Pune Automotive Tier-1 Doubled Output with Berlin Hyper Series",
    excerpt:
      "A leading automotive components manufacturer replaced aging wire EDMs with Berlin Hyper Series machines — and saw throughput double within 3 months.",
    category: "Case Study",
    date: "2026-04-18",
    readTime: "5 min read",
    author: "Berlin Applications Team",
    content: `## The Challenge

A Pune-based automotive Tier-1 supplier was struggling with capacity. Their existing wire EDM machines — purchased over 8 years ago from a different manufacturer — were delivering 140 mm²/min cutting speeds and experiencing frequent breakdowns.

Their requirements:
- Cut 200+ die components per month
- Maintain ± 0.01 mm accuracy consistently
- Reduce machine downtime below 5%
- Achieve payback within 18 months

## The Solution

After detailed analysis of their parts, materials and volumes, Berlin's application engineers recommended two Hyper Series CNC Wire Cut EDM machines configured for their specific needs.

Key specifications selected:
- Table travel: 500 × 400 mm (adequate for 95% of their parts)
- Cutting speed: Up to 300 mm²/min
- Accuracy: ± 0.010 mm
- Auto wire threading for unmanned night shifts

## The Results

### Month 1 (Installation + Training)
- Machines installed and commissioned in 3 days
- Operators trained over 1 week
- First production parts cut within 10 days

### Month 3 (Full Production)
- **Throughput: 2.1× previous capacity** (from 200 to 420 parts/month)
- **Accuracy: Consistently within ± 0.008 mm** (better than spec)
- **Uptime: 97.3%** (vs 82% on old machines)
- **Power consumption: 22% lower** per part

### Month 12 (ROI Assessment)
- **Payback achieved in 14 months** (ahead of 18-month target)
- Additional revenue from increased capacity: ₹48 lakhs
- Maintenance cost: 60% lower than previous machines
- Zero unplanned breakdowns

## Customer Quote

> "Since installing three Berlin Wire EDMs on our line, throughput has doubled and downtime is measured in minutes, not hours. Their service is the reason we keep coming back."
> — Production Head, Automotive Tier-1, Pune

## Key Takeaways

1. Modern machines deliver dramatically better productivity than 8+ year old equipment
2. The Hyper Series' 300 mm²/min speed is a genuine production advantage
3. Auto wire threading enables profitable unmanned night shifts
4. Berlin's local service network ensures rapid support when needed
5. ROI on premium machines is faster than budget alternatives due to higher output and lower downtime`,
  },
  {
    slug: "edm-machining-aerospace-components",
    title: "EDM Machining for Aerospace: Tolerances, Materials & Certification",
    excerpt:
      "Why aerospace manufacturers choose EDM, which materials benefit most, and how to meet AS9100 quality requirements in your EDM operations.",
    category: "Industry",
    date: "2026-03-28",
    readTime: "7 min read",
    author: "Berlin Engineering Team",
    content: `## Why Aerospace Needs EDM

Aerospace components are made from materials specifically chosen because they're difficult to machine: titanium alloys, nickel superalloys (Inconel), hardened tool steels, and tungsten carbide. These materials resist conventional cutting tools but respond well to electrical discharge machining.

EDM advantages for aerospace:
- No cutting forces (zero mechanical stress on the part)
- Machines any electrically conductive material regardless of hardness
- Achieves tight tolerances (± 0.005 mm) without distortion
- Produces complex geometries impossible with conventional machining
- No tool wear in the traditional sense

## Common Aerospace EDM Applications

### Wire Cut EDM
- Turbine disk slots (fir-tree profiles)
- Compressor blade profiles
- Landing gear components
- Structural brackets with complex contours
- Test specimen cutting

### Sinker EDM
- Turbine blade root forms
- Impeller cavities
- Fuel system components
- Complex internal features

### EDM Drill
- Turbine blade cooling holes (hundreds per blade)
- Film cooling holes
- Fuel injector nozzles
- Start holes for wire EDM

## Material Considerations

| Material | EDM Suitability | Notes |
|---|---|---|
| Ti-6Al-4V | Excellent | No thermal distortion, no work hardening |
| Inconel 718 | Excellent | EDM unaffected by material hardness |
| Hardened steel (60+ HRC) | Excellent | Cuts same as soft steel |
| Tungsten carbide | Good | Slower due to high melting point |
| Aluminium alloys | Fair | Fast cutting but higher wire breakage risk |

## Quality Requirements (AS9100)

Aerospace EDM operations typically require:
1. **Process qualification** — Documented proof the process meets requirements
2. **Recast layer control** — Maximum acceptable recast layer thickness
3. **Surface integrity** — No micro-cracking or thermal damage
4. **Traceability** — Full material and process documentation
5. **Operator certification** — Trained and qualified personnel

Berlin machines are used by multiple AS9100-certified aerospace manufacturers across India. Our application engineers can guide you through the qualification process for aerospace EDM operations.

## Getting Started

If you're entering the aerospace supply chain or expanding aerospace capabilities:
1. Invest in machines with proven accuracy and repeatability
2. Establish documented EDM procedures
3. Qualify your processes to customer specifications
4. Maintain strict quality records
5. Partner with a machine supplier who understands aerospace requirements

Berlin Machineries supports aerospace manufacturers from machine selection through process qualification. Contact our aerospace applications team for guidance.`,
  },
  {
    slug: "preventive-maintenance-guide-wire-edm",
    title: "The Complete Preventive Maintenance Guide for Wire EDM Machines",
    excerpt:
      "Keep your wire EDM running at peak performance. Daily, weekly, monthly and annual maintenance tasks that prevent costly breakdowns.",
    category: "Product",
    date: "2026-03-10",
    readTime: "9 min read",
    author: "Berlin Service Team",
    content: `## Why Preventive Maintenance Matters

A well-maintained wire EDM machine delivers consistent accuracy, reliable production, and a long service life. Neglected maintenance leads to accuracy drift, wire breaks, poor surface finish, and eventually costly breakdowns.

Berlin machines are engineered for durability, but all precision equipment needs regular care. This guide covers the essential maintenance schedule.

## Daily Tasks (5 minutes)

Perform these at the start of every shift:

1. **Check dielectric fluid level** — Top up if below minimum mark
2. **Inspect wire path** — Look for debris or damage to guides
3. **Clean work area** — Remove swarf and debris from the table
4. **Check filter pressure** — Replace if pressure differential is high
5. **Verify machine zero** — Quick reference check before first cut

## Weekly Tasks (30 minutes)

1. **Clean dielectric tank** — Remove settled sludge from the bottom
2. **Inspect wire guides** — Check for wear (replace if grooved)
3. **Clean current pickups** — Carbon buildup reduces cutting performance
4. **Check conductivity of dielectric** — Should be within specified range
5. **Lubricate linear guides** — Apply specified grease to all axes
6. **Inspect wire spool** — Check for tangles or damage

## Monthly Tasks (2 hours)

1. **Replace dielectric filters** — Don't wait until they're completely blocked
2. **Clean ion exchange resin** — Or replace if conductivity can't be maintained
3. **Inspect and clean power feed contacts** — Ensure consistent electrical connection
4. **Check belt tensions** — Wire transport and axis drive belts
5. **Verify axis positioning accuracy** — Run a test cut and measure
6. **Update software** — Apply any available firmware updates

## Quarterly Tasks (Half day)

1. **Full geometric accuracy check** — Squareness, straightness, positioning
2. **Replace wire guides** — Consumable item, don't wait until accuracy suffers
3. **Deep clean dielectric system** — Complete drain, flush and refill
4. **Inspect electrical connections** — Check for corrosion or looseness
5. **Review error logs** — Identify trending issues before they become failures

## Annual Tasks (Berlin AMC Service)

1. **Complete machine calibration** — Ball bar test, laser measurement
2. **Replace all consumables** — Guides, filters, seals, belts
3. **Inspect servo drives and motors** — Electrical testing
4. **Check and adjust mechanical alignments** — Bed level, column squareness
5. **Software and parameter optimisation** — Update cutting conditions database
6. **Certification** — Issue calibration certificate

## When to Call Berlin Service

Contact us immediately if you notice:
- Unexplained accuracy drift
- Frequent wire breaks
- Unusual vibration or noise
- Error codes that won't clear
- Dielectric leaks
- Axis positioning errors

Berlin's service engineers are available pan-India with 4-hour response time in major industrial cities. Our AMC plans include all scheduled maintenance plus priority breakdown support.`,
  },
];

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getBlogByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
