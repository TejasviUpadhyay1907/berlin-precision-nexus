import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { categories } from "@/data/products";
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-graphite text-white/80">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center">
            <img src="/logo.png" alt="Berlin Machineries" className="h-10 w-auto object-contain rounded-sm bg-white/5 p-1" />
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm text-white/60">
            Precision Engineering. Reliable Partnerships. Real Results. Powering
            India&apos;s manufacturing future since {site.since}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/berlinmachineries/", label: "LinkedIn" },
              { Icon: Youtube, href: "https://www.youtube.com/@BerlinMachineries", label: "YouTube" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100066802913814", label: "Facebook" },
              { Icon: Instagram, href: "https://www.instagram.com/berlinmachinecorporation/", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center border border-white/15 hover:border-berlin-red hover:bg-berlin-red transition-all"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em]">PRODUCTS</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 4).map((c) => (
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
            <li><Link to="/careers" className="hover:text-berlin-red">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em]">RESOURCES</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/news" className="hover:text-berlin-red">News</Link></li>
            <li><Link to="/blog" className="hover:text-berlin-red">Blog</Link></li>
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
