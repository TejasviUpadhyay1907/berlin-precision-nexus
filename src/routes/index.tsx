import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
import { site, stats, industries, whyBerlin } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berlin Machineries — Precision CNC & EDM Machines Since 2005" },
      {
        name: "description",
        content:
          "Berlin Machineries Private Limited engineers premium CNC Wire Cut EDM, Sinker EDM, EDM Drill, milling, grinding and lathe machines. 5000+ installations across India.",
      },
      { property: "og:title", content: "Berlin Machineries — Precision CNC & EDM Machines Since 2005" },
      {
        property: "og:description",
        content:
          "Berlin Machineries Private Limited engineers premium CNC Wire Cut EDM, Sinker EDM, EDM Drill, milling, grinding and lathe machines. 5000+ installations across India.",
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

function AnimatedNumber({ to, duration = 1.1, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) { setVal(to); return; }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, duration, delay, reduce]);
  return <>{val}</>;
}

function Sparks() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const sparks = Array.from({ length: 7 });
  return (
    <div className="pointer-events-none absolute" style={{ left: "42%", top: "62%" }} aria-hidden>
      {sparks.map((_, i) => {
        const angle = -90 + (Math.random() * 60 - 30);
        const dist = 40 + Math.random() * 60;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * dist;
        const y = Math.sin(rad) * dist;
        return (
          <motion.span
            key={i}
            className="absolute block h-[2px] w-[2px] rounded-full bg-[#ffb168]"
            style={{ boxShadow: "0 0 4px 1px rgba(255,150,60,0.7)" }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [0, x], y: [0, y], opacity: [0, 1, 0] }}
            transition={{
              duration: 0.9 + Math.random() * 0.6,
              delay: 1 + Math.random() * 2.5,
              repeat: Infinity,
              repeatDelay: 1.2 + Math.random() * 2,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="relative min-h-screen bg-graphite text-white overflow-hidden">
      {/* Machine image — parallax + subtle float */}
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { y: [0, -3, 0, 2, 0], x: [0, 1, 0, -1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={heroImg}
            alt="Berlin CNC Wire Cut EDM machine"
            className="w-full h-full object-cover opacity-70"
            width={1920}
            height={1200}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/70 to-graphite/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </motion.div>

      {/* Subtle drifting engineering grid */}
      <motion.div
        className="absolute inset-0 grid-lines opacity-40"
        animate={reduce ? undefined : { backgroundPositionX: ["0px", "56px"], backgroundPositionY: ["0px", "56px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] bg-berlin-red/20 blur-[160px] rounded-full" />

      {/* Sparks near cutting area */}
      <Sparks />

      <motion.div style={{ opacity }} className="relative container-x pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-berlin-red"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="h-px w-10 bg-berlin-red inline-block"
            />
            SINCE 2005 · PUNE · INDIA
          </motion.div>

          <h1 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-[110px] leading-[0.88] tracking-tight overflow-hidden">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                className="text-shine block"
              >
                ENGINEERED
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                className="text-white/80 block"
              >
                TO CUT
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                className="text-berlin-red block italic"
              >
                BEYOND LIMITS.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Precision CNC & EDM machinery for India&apos;s most demanding tool rooms.
            Unmatched speed. Unsurpassed quality. Unlimited possibilities.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-berlin-red text-white px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-berlin-red-dark transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_20px_60px_-10px_rgba(200,16,46,0.6)]"
              >
                EXPLORE MACHINES
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-white/25 text-white px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                REQUEST QUOTE
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* stat card */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.2, 0.7, 0.2, 1] }}
          className="hidden lg:block absolute right-8 bottom-24 border border-white/15 bg-white/5 backdrop-blur-sm p-6 max-w-[280px]"
        >
          <div className="text-[10px] tracking-[0.25em] text-berlin-red font-semibold">MAX CUTTING SPEED</div>
          <div className="mt-2 font-display font-black text-6xl leading-none text-white tabular-nums">
            <AnimatedNumber to={300} duration={1.1} delay={1.1} />
            <span className="text-xl align-top ml-1 text-white/60">mm³/min</span>
          </div>
          <div className="mt-3 text-xs text-white/60">2× faster than anything else in class.</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-[0.3em]"
      >
        <span>SCROLL</span>
        <div className="w-px h-12 bg-white/15 relative overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-transparent via-berlin-red to-transparent"
            animate={{ y: [-20, 48] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
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
            subtitle="CNC Wire Cut EDM, Sinker EDM, ZNC EDM and EDM Drill — a single engineering house for every stage of your precision workflow."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                to="/products/$categorySlug"
                params={{ categorySlug: c.slug }}
                className="group relative block bg-white overflow-hidden border border-border hover:border-berlin-red transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[5/3] overflow-hidden bg-white p-4">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[900ms]"
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { v: "250+", l: "Cities served" },
            { v: "80+", l: "Service engineers" },
            { v: "40+", l: "Dealer partners" },
            { v: "20+", l: "States covered" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="border border-white/10 p-5 bg-white/[0.02] text-center">
                <div className="font-display font-black text-3xl md:text-4xl text-berlin-red">{s.v}</div>
                <div className="mt-2 text-xs text-white/60">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <IndiaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndiaMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Locations with proper geographic positioning on India map (viewBox 0 0 500 600)
  // Coordinates approximate real positions on India outline
  const locations = [
    { name: "Pune", x: 195, y: 380, region: "West", info: "Head Office & Manufacturing Plant" },
    { name: "Mumbai", x: 170, y: 345, region: "West", info: "Sales Office & Dealer Support" },
    { name: "Ahmedabad", x: 165, y: 280, region: "West", info: "Regional Sales & Service Centre" },
    { name: "Rajkot", x: 145, y: 290, region: "West", info: "Dealer Partner Network" },
    { name: "Nashik", x: 185, y: 340, region: "West", info: "Service Support Centre" },
    { name: "Delhi NCR", x: 230, y: 165, region: "North", info: "North India Service Centre" },
    { name: "Ludhiana", x: 215, y: 130, region: "North", info: "Dealer & Service Network" },
    { name: "Jaipur", x: 200, y: 210, region: "North", info: "Dealer Partner Network" },
    { name: "Faridabad", x: 237, y: 175, region: "North", info: "Sales & Service Support" },
    { name: "Bengaluru", x: 225, y: 450, region: "South", info: "South India Regional Office" },
    { name: "Chennai", x: 270, y: 430, region: "South", info: "Sales & Application Support" },
    { name: "Coimbatore", x: 235, y: 475, region: "South", info: "Dealer Partner Network" },
    { name: "Hyderabad", x: 245, y: 380, region: "South", info: "Service & Dealer Support" },
    { name: "Kolkata", x: 340, y: 280, region: "East", info: "East India Service Centre" },
    { name: "Jamshedpur", x: 320, y: 270, region: "East", info: "Dealer Partner Network" },
    { name: "Bhubaneswar", x: 320, y: 320, region: "East", info: "Service Support" },
    { name: "Indore", x: 210, y: 290, region: "Central", info: "Central Region Dealer" },
    { name: "Bhopal", x: 230, y: 275, region: "Central", info: "Dealer Partner" },
    { name: "Nagpur", x: 255, y: 320, region: "Central", info: "Service & Dealer Network" },
  ];

  const regionColors: Record<string, string> = {
    West: "#C8102E",
    North: "#E83A5F",
    South: "#FF6B35",
    East: "#FF8C42",
    Central: "#D4413F",
  };

  return (
    <div className="relative max-w-[700px] mx-auto">
      <div className="relative aspect-[5/6]">
        <svg viewBox="0 0 500 600" className="w-full h-full" aria-label="Map of India showing Berlin Machineries presence">
          <defs>
            <linearGradient id="indiaFill" x1="0" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#C8102E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C8102E" stopOpacity="0.02" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Proper India outline - simplified but recognizable */}
          <path
            d="M215 60 L225 55 L240 58 L255 65 L265 60 L275 65 L285 70 L290 80 L285 90 L295 95 L305 90 L315 95 L320 105 L330 110 L340 120 L345 130 L350 140 L355 150 L360 165 L365 175 L370 190 L372 200 L370 210 L365 220 L368 235 L372 245 L375 260 L370 275 L365 285 L360 295 L355 305 L350 315 L345 325 L340 335 L330 340 L320 345 L315 355 L310 365 L305 375 L295 385 L285 395 L280 405 L275 420 L268 435 L260 448 L255 460 L250 470 L245 480 L240 490 L235 500 L228 510 L222 515 L218 510 L220 500 L225 488 L228 475 L225 465 L220 455 L215 445 L210 435 L205 425 L198 418 L192 425 L185 430 L178 425 L172 418 L168 408 L165 398 L160 388 L155 378 L150 368 L148 355 L145 345 L140 335 L135 320 L132 305 L130 290 L128 275 L130 265 L135 255 L138 245 L140 235 L138 225 L140 215 L145 205 L148 195 L152 185 L158 175 L162 165 L165 155 L170 145 L175 135 L180 125 L185 115 L190 105 L195 95 L200 85 L205 75 L210 65 Z"
            fill="url(#indiaFill)"
            stroke="rgba(200,16,46,0.3)"
            strokeWidth="1.5"
          />

          {/* State boundary hints - subtle lines */}
          <path d="M130 290 L255 320 L370 275" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
          <path d="M150 368 L260 380 L310 365" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />

          {/* Location pins */}
          {locations.map((loc, i) => (
            <g
              key={loc.name}
              onMouseEnter={() => setHovered(loc.name)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
              style={{ animation: `reveal-up 0.5s ${0.05 + i * 0.05}s both` }}
            >
              {/* Pulse ring */}
              <circle cx={loc.x} cy={loc.y} r="8" fill={regionColors[loc.region]} opacity="0.15">
                <animate
                  attributeName="r"
                  values="6;14;6"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.15}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.15}s`}
                />
              </circle>
              {/* Pin dot */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={hovered === loc.name ? "6" : "4"}
                fill={regionColors[loc.region]}
                filter={hovered === loc.name ? "url(#glow)" : undefined}
                className="transition-all duration-300"
              />
              {/* City label - only show for major cities or on hover */}
              {(hovered === loc.name || ["Pune", "Mumbai", "Delhi NCR", "Bengaluru", "Chennai", "Kolkata", "Ahmedabad", "Hyderabad"].includes(loc.name)) && (
                <text
                  x={loc.x + (loc.x > 300 ? -8 : 10)}
                  y={loc.y + (loc.y < 100 ? 16 : -8)}
                  fontSize={hovered === loc.name ? "11" : "9"}
                  fill={hovered === loc.name ? "#ffffff" : "rgba(255,255,255,0.6)"}
                  fontFamily="Inter"
                  fontWeight={hovered === loc.name ? "600" : "400"}
                  textAnchor={loc.x > 300 ? "end" : "start"}
                  className="transition-all duration-300"
                >
                  {loc.name}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Hover tooltip */}
        {hovered && (() => {
          const loc = locations.find((l) => l.name === hovered);
          if (!loc) return null;
          return (
            <div
              className="absolute pointer-events-none z-10 bg-graphite-2 border border-white/20 px-4 py-3 shadow-2xl reveal-up"
              style={{
                left: `${(loc.x / 500) * 100}%`,
                top: `${(loc.y / 600) * 100 - 12}%`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="text-[10px] tracking-[0.2em] font-semibold text-berlin-red">{loc.region.toUpperCase()} REGION</div>
              <div className="mt-1 font-display font-bold text-sm text-white">{loc.name}</div>
              <div className="mt-1 text-xs text-white/60">{loc.info}</div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/20" />
            </div>
          );
        })()}
      </div>

      {/* Region legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {Object.entries(regionColors).map(([region, color]) => (
          <div key={region} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs text-white/60">{region}</span>
          </div>
        ))}
      </div>
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
