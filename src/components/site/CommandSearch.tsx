import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, ArrowRight, Cpu, Factory, Wrench, Phone, Users, FileText } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { categories } from "@/data/products";

type SearchItem = {
  label: string;
  href: string;
  category: string;
  keywords?: string;
};

const searchIndex: SearchItem[] = [
  // Pages
  { label: "Home", href: "/", category: "Pages" },
  { label: "About Berlin Machineries", href: "/about", category: "Pages" },
  { label: "Products", href: "/products", category: "Pages" },
  { label: "Industries We Serve", href: "/industries", category: "Pages" },
  { label: "Service & Support", href: "/service", category: "Pages" },
  { label: "Contact Us", href: "/contact", category: "Pages" },
  { label: "Careers", href: "/careers", category: "Pages" },
  { label: "News & Updates", href: "/news", category: "Pages" },
  { label: "Blog & Insights", href: "/blog", category: "Pages" },

  // Product Categories
  ...categories.map((c) => ({
    label: c.name,
    href: `/products/${c.slug}`,
    category: "Product Categories",
    keywords: c.short,
  })),

  // Individual Machines
  ...categories.flatMap((c) =>
    c.machines.map((m) => ({
      label: `${m.name}${m.series ? ` (${c.name})` : ""}`,
      href: `/products/${c.slug}/${m.slug}`,
      category: "Machines",
      keywords: `${m.tagline} ${m.applications.join(" ")}`,
    }))
  ),

  // Industries
  ...["Automotive", "Aerospace", "Defense", "Medical", "Electronics", "Die & Mold", "Tool Room", "Energy"].map((ind) => ({
    label: ind,
    href: "/industries",
    category: "Industries",
    keywords: `${ind} manufacturing precision`,
  })),

  // Services
  ...["Installation & Commissioning", "Operator Training", "AMC & Maintenance", "Remote Support", "Machine Upgradation", "Breakdown Support"].map((svc) => ({
    label: svc,
    href: "/service",
    category: "Services",
    keywords: svc,
  })),
];

const categoryIcons: Record<string, typeof Search> = {
  Pages: FileText,
  "Product Categories": Cpu,
  Machines: Factory,
  Industries: Users,
  Services: Wrench,
};

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    navigate({ to: href });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 border border-border hover:border-berlin-red text-muted-foreground hover:text-graphite transition-all text-sm"
        aria-label="Search"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden md:inline text-xs font-medium">Search</span>
        <kbd className="hidden md:inline-flex h-5 items-center gap-0.5 border-l border-border pl-2 ml-1 text-[10px] font-mono text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search machines, pages, services…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {["Pages", "Product Categories", "Machines", "Industries", "Services"].map((group, i) => {
            const items = searchIndex.filter((item) => item.category === group);
            if (items.length === 0) return null;
            const Icon = categoryIcons[group] || Search;
            return (
              <div key={group}>
                {i > 0 && <CommandSeparator />}
                <CommandGroup heading={group}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.href + item.label}
                      value={`${item.label} ${item.keywords || ""}`}
                      onSelect={() => handleSelect(item.href)}
                      className="cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span>{item.label}</span>
                      <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground opacity-0 group-data-[selected=true]:opacity-100" />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
}
