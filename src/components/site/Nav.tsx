import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products", mega: true },
  { label: "Industries", to: "/industries" },
  { label: "Service", to: "/service" },
  { label: "Contact", to: "/contact" },
];

export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 grid place-items-center bg-berlin-red text-white font-black text-lg tracking-tighter">
            B
          </div>
          <div className={`leading-none ${solid ? "text-graphite" : "text-white"}`}>
            <div className="font-display font-black text-lg tracking-tight">BERLIN</div>
            <div className="text-[10px] tracking-[0.2em] font-medium opacity-70">MACHINERIES</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.mega && setMegaOpen(true)}
              onMouseLeave={() => item.mega && setMegaOpen(false)}
            >
              <Link
                to={item.to}
                className={`px-4 py-2 text-sm font-medium tracking-wide inline-flex items-center gap-1 transition-colors relative
                  ${solid ? "text-graphite hover:text-berlin-red" : "text-white/90 hover:text-white"}
                  after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-berlin-red after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300`}
                activeProps={{ className: "text-berlin-red" }}
              >
                {item.label}
                {item.mega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.mega && megaOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]">
                  <div className="bg-white border border-border shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-1 reveal-up">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to="/products/$categorySlug"
                        params={{ categorySlug: c.slug }}
                        className="group flex items-start gap-3 p-3 hover:bg-muted transition-colors"
                      >
                        <div className="h-10 w-10 shrink-0 bg-graphite text-white grid place-items-center text-xs font-bold">
                          {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm text-graphite group-hover:text-berlin-red transition-colors">{c.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{c.short}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-berlin-red text-white px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-berlin-red-dark transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(200,16,46,0.6)]"
          >
            Request Enquiry
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${solid ? "text-graphite" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border text-graphite font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-berlin-red text-white text-center py-3 font-semibold"
            >
              Request Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
