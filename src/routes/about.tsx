import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Section";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Berlin Machineries Private Limited" },
      { name: "description", content: "Since 2008 Berlin Machineries has delivered 5000+ precision CNC and EDM machines across India. Discover our story, vision and manufacturing philosophy." },
      { property: "og:title", content: "About Berlin Machineries" },
      { property: "og:description", content: "Precision engineering. Reliable partnerships. Real results. Since 2008." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2008", title: "Founded in Pune", body: "Berlin Machineries begins with a mission to serve Indian tool rooms with premium engineering." },
  { year: "2012", title: "1000+ installations", body: "Rapid adoption by the die & mold and automotive sectors across western India." },
  { year: "2016", title: "EDM specialisation", body: "Full-line CNC Wire Cut, Sinker and Drill EDM range launched." },
  { year: "2020", title: "Pan India service network", body: "80+ engineers deployed across every major industrial hub." },
  { year: "2024", title: "Hypercut launched", body: "300 mm³/min flagship — a new benchmark for Indian CNC EDM." },
  { year: "2026", title: "The next chapter", body: "Automation, smart control, sustainable manufacturing." },
];

const values = [
  { t: "Precision", b: "Every axis, every screw, every cycle — measured to microns." },
  { t: "Reliability", b: "Machines that keep running. Support that keeps answering." },
  { t: "Innovation", b: "Continuously benchmarked against global leaders." },
  { t: "Partnership", b: "We win when our customers ship parts on time." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="ABOUT BERLIN"
        title={<>Precision engineering. <br /><span className="text-berlin-red italic">Real results.</span></>}
        subtitle="Based in Pune, Berlin Machineries Private Limited has been a recognised engineering house since 2008."
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={factoryImg} alt="Berlin factory" className="w-full h-auto" loading="lazy" width={1600} height={900} />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="OUR STORY"
              title={<>Powering India&apos;s <span className="text-berlin-red">manufacturing future.</span></>}
              subtitle="With 3000+ conventional machine installations and 1500+ EDM installations nationwide, we&apos;ve built our reputation on reliable products, responsive service, and a deep understanding of Indian tool rooms."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From our first machine in 2008 to today&apos;s Hypercut platform, our commitment
              hasn&apos;t changed: build machines that keep running, and stand behind every
              one of them with engineers you can reach.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container-x">
          <SectionHeading
            eyebrow="CORE VALUES"
            title={<>Four commitments <span className="text-berlin-red italic">since day one.</span></>}
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="bg-white p-8 border border-border h-full">
                  <div className="text-6xl font-display font-black text-berlin-red/20">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 font-display font-bold text-xl text-graphite">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="JOURNEY" title={<>18 years, and <span className="text-berlin-red">just getting started.</span></>} />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                    <div className={`pl-14 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                      <div className="text-berlin-red font-display font-black text-3xl">{t.year}</div>
                      <div className="mt-2 font-display font-bold text-xl text-graphite">{t.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md md:inline-block">{t.body}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-berlin-red ring-4 ring-white" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
