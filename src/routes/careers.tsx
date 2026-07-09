import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Briefcase, GraduationCap, Lightbulb, Globe, Heart, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Berlin Machineries Private Limited" },
      { name: "description", content: "Join 1,850+ engineers, machinists and service professionals across four continents. Build the machines that build the world." },
      { property: "og:title", content: "Careers at Berlin Machineries" },
      { property: "og:description", content: "Explore career opportunities at Berlin Machineries. Engineering, sales, service, R&D and operations roles." },
    ],
  }),
  component: CareersPage,
});

type JobOpening = {
  id: string;
  title: string;
  department: "Engineering" | "Sales" | "Service" | "R&D" | "Operations" | "HR";
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
};

const benefits = [
  { icon: Briefcase, title: "Career Growth", body: "Clear progression paths from engineer to leadership. We promote from within." },
  { icon: GraduationCap, title: "Continuous Learning", body: "Annual training budget, certifications, conference sponsorships and cross-department rotations." },
  { icon: Lightbulb, title: "Innovation Culture", body: "Work on cutting-edge CNC & EDM technology. Your ideas shape real machines on shop floors." },
  { icon: Globe, title: "Global Exposure", body: "Collaborate with partners across Asia and Europe. Travel to exhibitions and customer sites." },
  { icon: Heart, title: "Work-Life Balance", body: "Flexible hours, health insurance, paid time off and employee wellness programmes." },
];

const openings: JobOpening[] = [
  {
    id: "mech-design-eng",
    title: "Mechanical Design Engineer",
    department: "Engineering",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "3–5 years",
    description: "Design and develop mechanical systems for CNC Wire Cut EDM and Sinker EDM machines. Work with cross-functional teams to bring new machine platforms from concept to production.",
    requirements: [
      "B.E./B.Tech in Mechanical Engineering",
      "Proficiency in SolidWorks / Creo / AutoCAD",
      "Experience with precision machine design or tool-room equipment",
      "Knowledge of GD&T, FEA and tolerance analysis",
      "Strong problem-solving and documentation skills",
    ],
    posted: "2026-06-20",
  },
  {
    id: "field-service-eng",
    title: "Field Service Engineer",
    department: "Service",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "2–4 years",
    description: "Provide installation, commissioning, preventive maintenance and breakdown support for Berlin CNC machines at customer sites across India.",
    requirements: [
      "Diploma / B.E. in Electrical or Mechanical Engineering",
      "Experience servicing CNC machines or EDM equipment",
      "Willingness to travel extensively (60–70%)",
      "Strong communication and troubleshooting skills",
      "Valid driving license",
    ],
    posted: "2026-06-15",
  },
  {
    id: "sales-manager-north",
    title: "Regional Sales Manager — North India",
    department: "Sales",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "5–8 years",
    description: "Drive sales growth for Berlin Machineries across North India. Manage dealer network, key accounts and exhibitions. Report directly to VP Sales.",
    requirements: [
      "MBA or B.E. with strong sales track record",
      "5+ years selling capital equipment / CNC machines",
      "Existing relationships in manufacturing / tool-room industry",
      "P&L ownership experience",
      "Excellent negotiation and presentation skills",
    ],
    posted: "2026-06-10",
  },
  {
    id: "embedded-sw-eng",
    title: "Embedded Software Engineer",
    department: "R&D",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "3–6 years",
    description: "Develop control software for CNC machine controllers. Work on motion control algorithms, HMI interfaces and Industry 4.0 connectivity features.",
    requirements: [
      "B.E./M.Tech in Electronics / Computer Science",
      "Proficiency in C/C++ and embedded RTOS",
      "Experience with motion control, PLCs or CNC controllers",
      "Familiarity with communication protocols (EtherCAT, Modbus, OPC-UA)",
      "Passion for manufacturing technology",
    ],
    posted: "2026-06-05",
  },
  {
    id: "production-supervisor",
    title: "Production Supervisor",
    department: "Operations",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "4–7 years",
    description: "Oversee machine assembly and quality processes on the shop floor. Ensure production targets, safety standards and quality KPIs are met.",
    requirements: [
      "Diploma / B.E. in Mechanical Engineering",
      "4+ years in machine assembly or manufacturing supervision",
      "Knowledge of lean manufacturing principles",
      "Strong leadership and team management skills",
      "Experience with ISO 9001 quality systems",
    ],
    posted: "2026-05-28",
  },
  {
    id: "hr-intern",
    title: "HR & Recruitment Intern",
    department: "HR",
    location: "Pune, Maharashtra",
    type: "Internship",
    experience: "0–1 year",
    description: "Support the HR team with campus recruitment, onboarding coordination, employee engagement activities and HR documentation.",
    requirements: [
      "Pursuing MBA (HR) or equivalent",
      "Strong communication and organisational skills",
      "Proficiency in MS Office and Google Workspace",
      "Interest in manufacturing / engineering industry",
      "6 months minimum commitment",
    ],
    posted: "2026-06-25",
  },
];

const departments = ["All", "Engineering", "Sales", "Service", "R&D", "Operations", "HR"] as const;

function CareersPage() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);

  const filtered = filter === "All" ? openings : openings.filter((j) => j.department === filter);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <PageHero
        eyebrow="CAREERS"
        title={<>Build the machines that <span className="text-berlin-red italic">build the world.</span></>}
        subtitle="Join 1,850+ engineers, machinists and service professionals across four continents."
      />

      {/* Why Join */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-[11px] tracking-[0.3em] font-semibold text-berlin-red">WHY JOIN BERLIN</div>
              <h2 className="mt-4 font-display font-black text-4xl md:text-5xl tracking-tight text-graphite">
                Where precision meets <span className="text-berlin-red italic">purpose.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                At Berlin Machineries, you don't just build machines — you shape India's manufacturing future.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="p-8 border border-border hover:border-berlin-red transition-all group hover:-translate-y-1 hover:shadow-xl">
                  <b.icon className="h-10 w-10 text-berlin-red" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display font-bold text-xl text-graphite">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted">
        <div className="container-x">
          <Reveal>
            <div className="text-[11px] tracking-[0.3em] font-semibold text-berlin-red">OPEN POSITIONS</div>
            <h2 className="mt-4 font-display font-black text-4xl md:text-5xl tracking-tight text-graphite">
              Find your role.
            </h2>
          </Reveal>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider border transition-all ${
                  filter === d
                    ? "bg-berlin-red text-white border-berlin-red"
                    : "border-border text-graphite hover:border-berlin-red hover:text-berlin-red"
                }`}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="mt-10 space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">No open positions in this department right now.</div>
            )}
            {filtered.map((job) => (
              <Reveal key={job.id}>
                <div className="bg-white border border-border hover:border-berlin-red transition-all">
                  <button
                    onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg md:text-xl text-graphite">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                        <span className="text-xs px-2 py-0.5 border border-border">{job.experience}</span>
                      </div>
                    </div>
                    {expanded === job.id ? (
                      <ChevronUp className="h-5 w-5 text-berlin-red shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  {expanded === job.id && (
                    <div className="px-6 md:px-8 pb-8 border-t border-border pt-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                      <div className="mt-6">
                        <div className="text-xs font-semibold tracking-[0.2em] text-graphite">REQUIREMENTS</div>
                        <ul className="mt-3 space-y-2">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-berlin-red mt-1.5 shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 text-xs text-muted-foreground">Posted: {job.posted}</div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] tracking-[0.3em] font-semibold text-berlin-red">APPLY NOW</div>
              <h2 className="mt-4 font-display font-black text-4xl md:text-5xl tracking-tight text-graphite">
                Ready to join?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Send us your details and we'll get back to you within 3 business days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}
              className="mt-12 bg-graphite text-white p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
              <div className="relative">
                {formSent ? (
                  <div className="p-6 border border-berlin-red bg-berlin-red/10 text-center">
                    <div className="font-display font-bold text-xl">Application received!</div>
                    <p className="mt-2 text-sm text-white/70">Our HR team will review and reach out within 3 business days.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    <AppField name="fullname" label="Full Name" />
                    <AppField name="email" label="Email" type="email" />
                    <AppField name="phone" label="Phone" />
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">POSITION OF INTEREST</label>
                      <select
                        name="position"
                        className="mt-2 w-full bg-white/[0.04] border border-white/15 focus:border-berlin-red outline-none px-4 py-3 text-sm text-white"
                      >
                        <option value="" className="text-graphite">Select a position...</option>
                        {openings.map((j) => (
                          <option key={j.id} value={j.id} className="text-graphite">{j.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">COVER NOTE</label>
                      <textarea
                        rows={4}
                        className="mt-2 w-full bg-white/[0.04] border border-white/15 focus:border-berlin-red outline-none px-4 py-3 text-sm text-white placeholder:text-white/30"
                        placeholder="Tell us about yourself, your experience and why you'd like to join Berlin..."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">RESUME (PDF)</label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="mt-2 w-full text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:border file:border-white/15 file:bg-white/[0.04] file:text-white file:text-sm file:font-semibold hover:file:border-berlin-red file:cursor-pointer"
                      />
                    </div>
                    <button
                      type="submit"
                      className="md:col-span-2 mt-4 bg-berlin-red hover:bg-berlin-red-dark text-white py-4 text-sm font-bold tracking-[0.2em] transition-colors"
                    >
                      SUBMIT APPLICATION
                    </button>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AppField({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.25em] font-semibold text-white/60">
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-white/[0.04] border border-white/15 focus:border-berlin-red outline-none px-4 py-3 text-sm text-white placeholder:text-white/30"
      />
    </div>
  );
}
