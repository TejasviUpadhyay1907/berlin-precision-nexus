import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { categories } from "@/data/products";
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-graphite text-white/80">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 grid place-items-center bg-berlin-red text-white font-black text-xl">B</div>
            <div>
              <div className="font-display font-black text-xl text-white">BERLIN</div>
              <div className="text-[10px] tracking-[0.25em] opacity-70">MACHINERIES PVT LTD</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm text-white/60">
            Precision Engineering. Reliable Partnerships. Real Results. Powering
            India&apos;s manufacturing future since {site.since}.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Youtube, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center border border-white/15 hover:border-berlin-red hover:bg-berlin-red transition-all"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em]">PRODUCTS</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$categorySlug"
                  params={{ categorySlug: c.slug }}
                  className="hover:text-berlin-red transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em]">COMPANY</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-berlin-red">About</Link></li>
            <li><Link to="/industries" className="hover:text-berlin-red">Industries</Link></li>
            <li><Link to="/service" className="hover:text-berlin-red">Service</Link></li>
            <li><Link to="/contact" className="hover:text-berlin-red">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em]">CONTACT</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-berlin-red" /> {site.phone}</li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-berlin-red" /> {site.email}</li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-berlin-red" /> {site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Berlin Machineries Private Limited. All rights reserved.</div>
          <div className="tracking-widest">UNMATCHED SPEED · UNSURPASSED QUALITY · UNLIMITED POSSIBILITIES</div>
        </div>
      </div>
    </footer>
  );
}
