import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Zap, Target, Shield, Cpu, Leaf, Award, Wrench, Phone } from "lucide-react";

import heroImg from "@/assets/hero-machine.jpg";
import sparksImg from "@/assets/edm-sparks.jpg";
import factoryImg from "@/assets/factory.jpg";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CustomerMarquee } from "@/components/site/Marquee";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import { categories } from "@/data/products";
import { site, stats, industries, whyBerlin, presence } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berlin Machineries — Precision CNC & EDM Machines Since 2008" },
      {
        name: "description",
        content:
          "Berlin Machineries Private Limited engineers premium CNC Wire Cut EDM, Sinker EDM, EDM Drill, milling, grinding and lathe machines. 5000+ installations across India.",
      },
      { property: "og:title", content: "Berlin Machineries — Engineered to Cut Beyond Limits" },
      {
        property: "og:description",
        content:
          "Premium CNC & EDM machinery for India's most demanding tool rooms. 18+ years, 5000+ installations, nationwide service.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav overHero />
      <Hero />
      <TrustBar />
      <WhyBerlin />
      <ProductCategories />
      <Hypercut />
      <IndustriesSection />
      <IndiaPresence />
      <StatsSection />
      <CustomersSection />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-graphite text-white overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Berlin CNC Wire Cut EDM machine"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/70 to-graphite/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      </motion.div>

      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] bg-berlin-red/20 blur-[160px] rounded-full" />

      <motion.div style={{ opacity }} className="relative container-x pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-berlin-red"
          >
            <span className="h-px w-10 bg-berlin-red" />
            SINCE 2008 · PUNE · INDIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-[110px] leading-[0.88] tracking-tight"
          >
            <span className="text-shine block">ENGINEERED</span>
            <span className="text-white/80 block">TO CUT</span>
            <span className="text-berlin-red block italic">BEYOND LIMITS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Precision CNC & EDM machinery for India&apos;s most demanding tool rooms.
            Unmatched speed. Unsurpassed quality. Unlimited possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-berlin-red text-white px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-berlin-red-dark transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(200,16,46,0.6)]"
            >
              EXPLORE MACHINES
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-white/25 text-white px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-graphite transition-all"
            >
              REQUEST QUOTE
            </Link>
          </motion.div>
        </div>

        {/* stat card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute right-8 bottom-24 border border-white/15 bg-white/5 backdrop-blur-sm p-6 max-w-[280px]"
        >
          <div className="text-[10px] tracking-[0.25em] text-berlin-red font-semibold">MAX CUTTING SPEED</div>
          <div className="mt-2 font-display font-black text-6xl leading-none text-white">
            300
            <span className="text-xl align-top ml-1 text-white/60">mm³/min</span>
          </div>
          <div className="mt-3 text-xs text-white/60">2× faster than anything else in class.</div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-[0.3em]">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-4 bg-berlin-red"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-x py-10">
        <div className="text-center text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">
          TRUSTED BY INDIA&apos;S LEADING MANUFACTURERS
        </div>
        <div className="mt-6"><CustomerMarquee /></div>
      </div>
    </section>
  );
}

/* ---------------- WHY BERLIN ---------------- */
function WhyBerlin() {
  const icons = [Zap, Target, Shield, Cpu, Leaf, Award, Wrench, Award];
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="WHY BERLIN"
              title={
                <>
                  Precision that <br />
                  <span className="text-berlin-red">powers production.</span>
                </>
              }
              subtitle="Every Berlin machine is engineered for continuous production, decades of duty, and micron-perfect repeatability. That's why 5000+ Indian manufacturers trust us."
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {whyBerlin.map((w, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="bg-white p-6 md:p-8 h-full group cursor-default hover:bg-graphite transition-colors duration-500">
                    <Icon className="h-8 w-8 text-berlin-red" strokeWidth={1.5} />
                    <h3 className="mt-6 font-display font-bold text-lg text-graphite group-hover:text-white transition-colors">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function ProductCategories() {
  return (
    <section className="relative py-24 md:py-32 bg-muted overflow-hidden">
      <div className="absolute inset-0 grid-lines-dark opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="PRODUCT UNIVERSE"
            title={
              <>
                The complete <br />
                <span className="text-berlin-red italic">tool room</span> under one roof.
              </>
            }
            subtitle="From wire-cut EDM to radial drills — a single engineering house for every stage of your precision workflow."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                to="/products/$categorySlug"
                params={{ categorySlug: c.slug }}
                className="group relative block bg-white overflow-hidden border border-border hover:border-berlin-red transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[5/3] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms]"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-semibold tracking-[0.25em] text-berlin-red">
                    {String(i + 1).padStart(2, "0")} · CATEGORY
                  </div>
                  <h3 className="mt-3 font-display font-bold text-xl text-graphite group-hover:text-berlin-red transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.short}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-graphite group-hover:text-berlin-red">
                    Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HYPERCUT SPOTLIGHT ---------------- */
function Hypercut() {
  return (
    <section className="relative py-24 md:py-40 bg-graphite text-white overflow-hidden">
      <img src={sparksImg} alt="EDM sparks" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-transparent" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow>FLAGSHIP · HYPER SERIES</SectionEyebrow>
            <h2 className="mt-5 font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tight">
              <span className="text-white/60">2× FASTER</span><br />
              <span className="text-berlin-red">THAN ANYTHING</span><br />
              <span className="text-white">ELSE.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              The Berlin Hypercut delivers up to 300 mm³/min cutting speed with
              micron-level precision. A new benchmark for CNC wire EDM.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "300", u: "mm³/min", l: "Max speed" },
                { v: "0.010", u: "mm", l: "Accuracy" },
                { v: "2000", u: "kg", l: "Workpiece" },
              ].map((s) => (
                <div key={s.l} className="border-l border-white/15 pl-4">
                  <div className="font-display font-black text-3xl text-white">{s.v}</div>
                  <div className="text-[10px] tracking-[0.2em] text-white/50 mt-1">{s.u.toUpperCase()}</div>
                  <div className="text-xs text-white/70 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              to="/products/$categorySlug/$machineSlug"
              params={{ categorySlug: "cnc-wire-cut-edm", machineSlug: "hyper-series" }}
              className="mt-10 group inline-flex items-center gap-3 border border-white/25 text-white px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-berlin-red hover:border-berlin-red transition-all"
            >
              DISCOVER HYPERCUT
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <Reveal>
            <SectionHeading
              eyebrow="INDUSTRIES SERVED"
              title={
                <>
                  Built for industries <br />
                  that <span className="text-berlin-red italic">demand more.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/industries" className="text-sm font-bold tracking-[0.2em] text-graphite hover:text-berlin-red flex items-center gap-2">
              ALL INDUSTRIES <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {industries.map((ind, i) => (
            <Reveal key={ind} delay={i * 0.03}>
              <div className="bg-white p-8 h-full group cursor-default hover:bg-berlin-red transition-colors duration-500">
                <div className="text-[10px] font-semibold tracking-[0.25em] text-berlin-red group-hover:text-white/80 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-display font-bold text-xl text-graphite group-hover:text-white transition-colors">
                  {ind}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDIA PRESENCE ---------------- */
function IndiaPresence() {
  return (
    <section className="relative py-24 md:py-32 bg-graphite text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            invert
            align="center"
            eyebrow="PAN INDIA PRESENCE"
            title={<>Wherever precision <span className="text-berlin-red">is required.</span></>}
            subtitle="Field engineers, dealers and service teams across every major industrial hub in India."
          />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { v: "250+", l: "Cities served" },
              { v: "80+", l: "Service engineers" },
              { v: "40+", l: "Dealer partners" },
              { v: "20+", l: "States covered" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="border border-white/10 p-6 bg-white/[0.02] backdrop-blur-sm">
                  <div className="font-display font-black text-4xl text-berlin-red">{s.v}</div>
                  <div className="mt-2 text-sm text-white/70">{s.l}</div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="col-span-2 border border-white/10 p-6 bg-white/[0.02]">
                <div className="text-[10px] tracking-[0.25em] text-berlin-red font-semibold">
                  MAJOR INDUSTRIAL HUBS
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {presence.flatMap((r) => r.cities).map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 border border-white/15 text-white/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <IndiaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndiaMap() {
  const pins = [
    { x: 250, y: 380, name: "Pune" },
    { x: 240, y: 340, name: "Mumbai" },
    { x: 315, y: 460, name: "Bengaluru" },
    { x: 380, y: 470, name: "Chennai" },
    { x: 425, y: 300, name: "Kolkata" },
    { x: 320, y: 200, name: "Delhi" },
    { x: 200, y: 280, name: "Ahmedabad" },
    { x: 375, y: 380, name: "Hyderabad" },
    { x: 335, y: 495, name: "Coimbatore" },
    { x: 275, y: 250, name: "Indore" },
  ];
  return (
    <div className="relative aspect-square max-w-[560px] mx-auto">
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <defs>
          <linearGradient id="mapGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#C8102E" stopOpacity="0.15" />
            <stop offset="1" stopColor="#C8102E" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* stylised india silhouette */}
        <path
          d="M280 90 L340 110 L360 150 L400 180 L430 240 L450 290 L440 340 L420 380 L430 430 L400 470 L370 490 L340 510 L320 540 L300 560 L280 540 L260 500 L240 460 L220 420 L200 380 L190 340 L200 300 L210 260 L200 220 L215 180 L240 150 L260 120 Z"
          fill="url(#mapGrad)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />
        {pins.map((p, i) => (
          <g key={p.name} style={{ animation: `reveal-up 0.6s ${0.1 + i * 0.1}s both` }}>
            <circle cx={p.x} cy={p.y} r="14" fill="#C8102E" opacity="0.15">
              <animate attributeName="r" values="10;22;10" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
            <circle cx={p.x} cy={p.y} r="4" fill="#C8102E" />
            <text x={p.x + 10} y={p.y + 4} fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="Inter">
              {p.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------------- STATS ---------------- */
function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-berlin-red text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="font-display font-black text-5xl md:text-6xl leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 h-px w-10 bg-white/50" />
                <div className="mt-3 text-sm text-white/90">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CUSTOMERS ---------------- */
function CustomersSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="CUSTOMER SHOWCASE"
            title={<>Trusted by the makers <span className="text-berlin-red">who make India.</span></>}
          />
        </Reveal>
        <div className="mt-16"><CustomerMarquee /></div>
        <div className="mt-4"><CustomerMarquee /></div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIAL ---------------- */
function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={factoryImg} alt="Berlin machines on shop floor" className="w-full h-auto" loading="lazy" width={1600} height={900} />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow>VOICES FROM THE FLOOR</SectionEyebrow>
            <blockquote className="mt-6 font-display font-bold text-2xl md:text-4xl leading-tight text-graphite">
              &ldquo;Since installing three Berlin Wire EDMs on our line, throughput has
              doubled and downtime is measured in minutes, not hours. Their service is
              the reason we keep coming back.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 bg-berlin-red text-white grid place-items-center font-black">R</div>
              <div>
                <div className="font-semibold text-graphite">Production Head</div>
                <div className="text-sm text-muted-foreground">Automotive Tier-1 · Pune</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-graphite text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-berlin-red/25 blur-[160px] rounded-full" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Reveal>
            <SectionEyebrow>READY WHEN YOU ARE</SectionEyebrow>
            <h2 className="mt-5 font-display font-black text-5xl md:text-7xl leading-[0.92] tracking-tight">
              Let&apos;s build your <br />
              <span className="text-berlin-red italic">next tool room.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Talk to a Berlin application engineer. We&apos;ll help you pick the right
              platform for your parts, cycle time and budget.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-berlin-red text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-berlin-red-dark transition-all hover:-translate-y-0.5"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-graphite transition-all"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
