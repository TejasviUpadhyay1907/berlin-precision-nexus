export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: "Product Launch" | "Event" | "Press" | "Award" | "Company";
  excerpt: string;
  content: string;
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "hypercut-launch-2026",
    title: "Berlin Machineries Launches Hyper Series — India's Fastest Wire Cut EDM",
    date: "2026-06-15",
    category: "Product Launch",
    excerpt:
      "The all-new Hyper Series delivers 300 mm³/min cutting speed, making it 2× faster than any wire EDM in its class. Now available across India.",
    content: `Berlin Machineries Private Limited has officially launched the Hyper Series CNC Wire Cut EDM — the fastest wire cut machine ever manufactured in India. With a cutting speed of up to 300 mm³/min and micron-level accuracy, the Hyper Series redefines productivity for precision tool rooms.

Key features include the Sonic Smart Control panel with wireless MPG, servo-driven X/Y axes and drum, upgraded wire tension system, and energy-efficient operation. The machine is designed for continuous 24/7 unmanned operation with unmatched surface finish quality.

"This machine changes the game for Indian manufacturers competing globally," said the Director of Engineering at Berlin Machineries. "Our customers can now achieve international-grade precision at Indian economics."

The Hyper Series is available in multiple configurations and is backed by Berlin's pan-India service network spanning 250+ cities.`,
  },
  {
    id: "imtex-2026-pune",
    title: "Berlin Machineries at IMTEX 2026 — Live Machine Demonstrations",
    date: "2026-05-20",
    category: "Event",
    excerpt:
      "Visit us at IMTEX 2026, Hall 4, Stall B-112. Live cutting demos on N Series and Hyper Series wire EDMs. Meet our application engineers.",
    content: `Berlin Machineries will showcase its complete product portfolio at IMTEX 2026, India's premier machine tool exhibition, held at the Bangalore International Exhibition Centre.

Visitors can witness live cutting demonstrations on the N Series and Hyper Series CNC Wire Cut EDM machines, interact with application engineers, and explore the latest in Sinker EDM, EDM Drill, milling, grinding and lathe technology.

Highlights at our stall:
• Live wire EDM cutting demonstration with real-time accuracy measurement
• Hyper Series speed challenge — watch 300 mm³/min cutting in action
• One-on-one consultations with Berlin's application engineering team
• Exclusive IMTEX pricing on select machine models
• Service and AMC packages for existing Berlin customers

Location: Hall 4, Stall B-112
Dates: 22–28 January 2026
Timing: 10:00 AM – 6:00 PM

Register for a VIP visit at our stall for priority access and a complimentary machine selection consultation.`,
  },
  {
    id: "5000-installations",
    title: "Berlin Machineries Crosses 5,000 Machine Installations Milestone",
    date: "2026-04-10",
    category: "Company",
    excerpt:
      "A landmark moment — 5,000+ Berlin machines now running in tool rooms across India, serving automotive, aerospace, medical and precision engineering sectors.",
    content: `Berlin Machineries Private Limited has achieved a significant milestone with over 5,000 machine installations across India. This achievement spans two decades of engineering excellence and commitment to Indian manufacturing.

The installations cover the entire Berlin product range — from CNC Wire Cut EDM and Sinker EDM to milling machines, surface grinders, lathes and drilling equipment. Customers range from small tool rooms to large automotive OEMs and aerospace manufacturers.

"Every installation represents a partnership," noted the company's leadership. "We don't just sell machines — we provide complete solutions including training, service, and ongoing support that helps our customers grow."

Key statistics:
• 5,000+ machines installed
• 250+ cities served
• 20+ years of operation
• 80+ field service engineers
• 99.2% uptime across fleet

Berlin Machineries continues to expand its service network and product range to meet the growing demand for precision manufacturing equipment in India.`,
  },
  {
    id: "iso-9001-recertification",
    title: "Berlin Machineries Receives ISO 9001:2015 Recertification",
    date: "2026-03-25",
    category: "Award",
    excerpt:
      "Our quality management system has been recertified to ISO 9001:2015, reaffirming our commitment to consistent quality in every machine we build.",
    content: `Berlin Machineries has successfully completed its ISO 9001:2015 recertification audit, conducted by an accredited third-party certification body. The audit covered all aspects of the company's quality management system including design, manufacturing, testing, installation and after-sales service.

The recertification confirms that Berlin Machineries maintains rigorous quality standards across:
• Machine design and engineering processes
• Component sourcing and incoming quality inspection
• Manufacturing and assembly procedures
• Final testing and calibration
• Installation and commissioning protocols
• Customer service and support operations

"Quality is not just a certification for us — it's embedded in our engineering culture," said the Quality Head. "Every Berlin machine undergoes 47 quality checkpoints before leaving our facility."

This certification is particularly significant for customers in regulated industries such as aerospace, medical devices and defense, where supplier quality certification is a mandatory requirement.`,
  },
  {
    id: "new-service-centre-delhi",
    title: "New Service Centre Opened in Delhi NCR to Serve North India",
    date: "2026-02-18",
    category: "Company",
    excerpt:
      "Berlin expands its service footprint with a fully-equipped service centre in Delhi NCR, reducing response time for North Indian customers.",
    content: `Berlin Machineries has opened a new, fully-equipped service centre in Delhi NCR to serve its growing customer base in North India. The centre is staffed with trained service engineers and maintains a comprehensive inventory of spare parts for rapid turnaround.

The Delhi NCR service centre offers:
• Emergency breakdown support with 4-hour response time
• Preventive maintenance and AMC services
• Operator and programmer training programmes
• Machine calibration and accuracy verification
• Spare parts counter with immediate availability

"North India is one of our fastest-growing regions," said the Service Head. "This centre allows us to provide the same level of responsive service that our Pune customers have enjoyed for years."

The centre joins Berlin's existing service network covering West, South, East and Central India, ensuring that no customer is more than a few hours from expert technical support.`,
  },
  {
    id: "cnc-edm-drill-launch",
    title: "Berlin Introduces CNC EDM Drill Machine for Automated Multi-Hole Production",
    date: "2026-01-30",
    category: "Product Launch",
    excerpt:
      "The new CNC EDM Drill brings full 3-axis programmability to EDM hole drilling — ideal for turbine blades, injectors and precision components.",
    content: `Berlin Machineries has expanded its EDM product range with the launch of a full CNC EDM Drill Machine. Unlike conventional EDM drills that require manual positioning, the new CNC model offers programmable X, Y and Z motion for automated multi-hole cycles.

Target applications include:
• Turbine blade cooling holes (aerospace)
• Fuel injector nozzle holes (automotive)
• Wire EDM start holes (tool rooms)
• Precision component drilling (medical devices)

Key specifications:
• Full CNC 3-axis control
• Programmable multi-hole patterns
• Auto electrode feed
• Optional auto pallet system for batch production
• Hole diameters from 0.3mm to 6.0mm

The machine is particularly suited for aerospace manufacturers producing turbine components that require hundreds of precisely positioned cooling holes per blade.`,
  },
];

export function getLatestNews(count: number = 3): NewsItem[] {
  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getNewsByCategory(category: string): NewsItem[] {
  if (category === "All") return newsItems;
  return newsItems.filter((n) => n.category === category);
}
