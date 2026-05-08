import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/tai-chi", label: "Tai Chi Chuan" },
  { to: "/qi-gong", label: "Qi Gong" },
  { to: "/dove-e-quando", label: "Dove e quando" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-flow",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9" aria-label="Principale">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors link-ink",
                  isActive
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background transition-all duration-500 ease-flow",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col px-8 py-12 gap-6" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-display text-3xl transition-colors",
                  isActive ? "text-accent" : "text-foreground"
                )
              }
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
