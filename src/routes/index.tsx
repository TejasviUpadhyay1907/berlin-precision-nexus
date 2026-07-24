import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap, Target, Shield, Cpu, Leaf, Award, Wrench, Phone } from "lucide-react";


import heroImg from "@/assets/hero-machine.jpg";
import sparksImg from "@/assets/edm-sparks.jpg";
import factoryImg from "@/assets/factory.jpg";

import slide1 from "@/assets/slide1.PNG";
import slide2 from "@/assets/slide2.PNG";
import slide5 from "@/assets/slide5.png";

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
    <div className="min-h-screen bg-white overflow-x-hidden">
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

  // Company image slides (shown after the main hero slide)
  const companySlides = [
    { img: slide1, eyebrow: "PRECISION FROM THE GROUND UP", title: "Every machine begins with rigid, hand-crafted castings.", align: "center" as const },
    { img: slide2, eyebrow: "BUILT IN-HOUSE", title: "From raw casting to finished precision — engineered under one roof.", align: "center" as const },
    { img: slide5, eyebrow: "ENGINEERING EXCELLENCE", title: "A team that lives and breathes machining.", align: "left" as const },
  ];
  const totalSlides = companySlides.length + 1;
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % totalSlides), 6000);
    return () => clearInterval(t);
  }, [totalSlides]);

  return (
    <section ref={ref} className="group/hero relative min-h-screen bg-graphite text-white overflow-hidden">
      {/* ============ COMPANY IMAGE SLIDES (crossfade) ============ */}
      {companySlides.map((cs, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: slide === i + 1 ? 1 : 0, pointerEvents: slide === i + 1 ? "auto" : "none", zIndex: slide === i + 1 ? 5 : 0 }}
        >
          {/* MOBILE: image at dead center, text starts just below it */}
          <div className="relative h-full md:hidden bg-graphite flex flex-col items-center justify-center px-5">
            <img src={cs.img} alt={cs.title} className="w-full object-contain max-h-[55%]" />
            <div className="mt-8 w-full">
              <div className="inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-berlin-red">
                <span className="h-px w-6 bg-berlin-red" />
                {cs.eyebrow}
              </div>
              <div className="mt-2 font-display font-bold text-lg leading-snug text-white">
                {cs.title}
              </div>
            </div>
          </div>

          {/* DESKTOP: full-screen with overlay card */}
          <div className="hidden md:block absolute inset-0">
            <img src={cs.img} alt={cs.title} className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-graphite via-graphite/25 to-transparent" />
            {cs.align === "left" && <div className="absolute inset-0 bg-gradient-to-r from-graphite/60 via-transparent to-transparent" />}
            {cs.align === "right" && <div className="absolute inset-0 bg-gradient-to-l from-graphite/60 via-transparent to-transparent" />}
            <div className={cs.align === "center" ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg" : cs.align === "right" ? "absolute right-12 bottom-28 max-w-md" : "absolute left-12 bottom-28 max-w-md"}>
              <div
                className={`border border-white/15 bg-black/40 backdrop-blur-md transition-all duration-700 ${cs.align === "center" ? "px-8 py-5 text-center" : "p-7"}`}
                style={{ transform: slide === i + 1 ? "translateY(0)" : "translateY(20px)", opacity: slide === i + 1 ? 1 : 0 }}
              >
                <div className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-berlin-red ${cs.align === "center" ? "justify-center" : ""}`}>
                  <span className="h-px w-8 bg-berlin-red" />
                  {cs.eyebrow}
                  {cs.align === "center" && <span className="h-px w-8 bg-berlin-red" />}
                </div>
                <div className={`mt-3 font-display font-black leading-tight text-white ${cs.align === "center" ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"}`}>
                  {cs.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Machine image — parallax + subtle float (slide 0) */}
      <motion.div
        style={{ y, opacity: slide === 0 ? 1 : 0 }}
        className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
      >
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

      <motion.div
        style={{ opacity }}
        className="relative container-x pt-32 md:pt-40 pb-16 transition-opacity duration-700"
        aria-hidden={slide !== 0}
      >
        <div
          className="max-w-3xl transition-opacity duration-700"
          style={{ opacity: slide === 0 ? 1 : 0, pointerEvents: slide === 0 ? "auto" : "none" }}
        >
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
          className="hidden lg:block absolute right-8 bottom-40 border border-white/15 bg-white/5 backdrop-blur-sm p-6 max-w-[280px] transition-opacity duration-700"
          style={{ opacity: slide === 0 ? 1 : 0, pointerEvents: slide === 0 ? "auto" : "none" }}
        >
          <div className="text-[10px] tracking-[0.25em] text-berlin-red font-semibold">MAX CUTTING SPEED</div>
          <div className="mt-2 font-display font-black text-6xl leading-none text-white tabular-nums">
            <AnimatedNumber to={300} duration={1.1} delay={1.1} />
            <span className="text-xl align-top ml-1 text-white/60">mm³/min</span>
          </div>
          <div className="mt-3 text-xs text-white/60">2× faster than anything else in class.</div>
        </motion.div>
      </motion.div>

      {/* ============ SLIDER CONTROLS ============ */}
      {/* Prev / Next arrows (appear on hover) */}
      <button
        onClick={() => setSlide((s) => (s - 1 + totalSlides) % totalSlides)}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 grid place-items-center border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 hover:text-white hover:border-berlin-red hover:bg-berlin-red/80 transition-all opacity-0 group-hover/hero:opacity-100 focus:opacity-100"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
      </button>
      <button
        onClick={() => setSlide((s) => (s + 1) % totalSlides)}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 grid place-items-center border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 hover:text-white hover:border-berlin-red hover:bg-berlin-red/80 transition-all opacity-0 group-hover/hero:opacity-100 focus:opacity-100"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {/* Progress indicator dots */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: slide === i ? "28px" : "10px",
              backgroundColor: slide === i ? "#C8102E" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
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
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              {[
                { v: "300", u: "mm³/min", l: "Max speed" },
                { v: "0.010", u: "mm", l: "Accuracy" },
                { v: "2000", u: "kg", l: "Workpiece" },
              ].map((s) => (
                <div key={s.l} className="border-l border-white/15 pl-3 sm:pl-4">
                  <div className="font-display font-black text-2xl sm:text-3xl text-white">{s.v}</div>
                  <div className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/50 mt-1">{s.u.toUpperCase()}</div>
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
              <div className="bg-white p-5 sm:p-8 h-full group cursor-default hover:bg-berlin-red transition-colors duration-500">
                <div className="text-[10px] font-semibold tracking-[0.25em] text-berlin-red group-hover:text-white/80 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 sm:mt-6 font-display font-bold text-base sm:text-xl text-graphite group-hover:text-white transition-colors">
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
            { v: "10+", l: "Service stations" },
            { v: "5500+", l: "Projects completed" },
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
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-berlin-red text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-none">
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
