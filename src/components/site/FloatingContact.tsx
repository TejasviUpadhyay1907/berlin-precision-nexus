import { useState, useEffect } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneClean = site.phone.replace(/\s/g, "");
  const phoneDigits = site.phone.replace(/\D/g, "");

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${phoneDigits}?text=${encodeURIComponent("Hi, I found your website and would like to enquire about your machines.")}`,
      color: "bg-[#25D366] hover:bg-[#1fb855]",
      external: true,
    },
    {
      icon: Phone,
      label: "Call",
      href: `tel:${phoneClean}`,
      color: "bg-berlin-red hover:bg-berlin-red-dark",
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${site.email}?subject=${encodeURIComponent("Enquiry — Berlin Machineries")}`,
      color: "bg-graphite hover:bg-graphite-2 border border-white/20",
      external: false,
    },
  ];

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Contact buttons */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 origin-bottom ${
          expanded ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        } md:opacity-100 md:scale-y-100 md:pointer-events-auto`}
      >
        {contacts.map(({ icon: Icon, label, href, color, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full text-white text-xs font-semibold shadow-lg transition-all duration-200 hover:-translate-x-1 ${color}`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* Toggle button — visible on mobile always, hidden on desktop */}
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-label="Toggle contact options"
        className={`md:hidden h-12 w-12 rounded-full bg-berlin-red text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-berlin-red-dark hover:scale-110 ${
          expanded ? "rotate-45" : ""
        }`}
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
