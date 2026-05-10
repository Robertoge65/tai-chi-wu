import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

// ─── Struttura del menu ───────────────────────────────────────────────────────
const links = [
  { to: "/", label: "Home", end: true },
  {
    to: "/tai-chi",
    label: "Tai Chi Chuan",
    end: false,
    children: [
      { to: "/tai-chi/stile-wu", label: "Lo stile Wu" },
      { to: "/tai-chi/tai-chi-e-salute", label: "Tai Chi e salute" },
      { to: "/tai-chi/le-forme/forma-otto", label: "Forma Otto" },
      { to: "/tai-chi/le-forme/forma-breve", label: "Forma Breve · 30" },
      { to: "/tai-chi/le-forme/forma-lunga", label: "Forma Lunga · 89" },
      { to: "/tai-chi/le-forme/forma-rapida", label: "Forma Rapida" },
    ],
  },
  {
    to: "/qi-gong",
    label: "Qi Gong",
    end: false,
    children: [
      { to: "/qi-gong/ba-duan-jin", label: "Ba Duan Jin" },
    ],
  },
  {
    to: "/medicina-tradizionale-cinese",
    label: "Approfondimenti",
    end: false,
    children: [
      { to: "/medicina-tradizionale-cinese/qi-e-yin-yang", label: "Qi, Yin e Yang" },
      { to: "/medicina-tradizionale-cinese/i-meridiani", label: "I Meridiani" },
      { to: "/medicina-tradizionale-cinese/le-cinque-branche", label: "Le cinque branche" },
    ],
  },
  { to: "/dove-e-quando", label: "Dove e quando", end: true },
  { to: "/chi-siamo", label: "Chi siamo", end: false },
  { to: "/contatti", label: "Contatti", end: true },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Tiene traccia di quale sezione è espansa nel menu mobile
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude il menu mobile al cambio di pagina
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Una voce è "attiva" se il path corrente inizia con il suo to
  const isParentActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(to + "/");

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

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Principale">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors link-ink",
                  isActive || isParentActive(l.to)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background overflow-y-auto transition-all duration-500 ease-flow",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col px-8 py-10 gap-1" aria-label="Mobile">
          {links.map((l, i) => {
            const hasChildren = l.children && l.children.length > 0;
            const isExpanded = expanded === l.to;
            const parentActive = isParentActive(l.to);

            return (
              <div key={l.to}>
                <div className="flex items-center justify-between">
                  {/* Link principale */}
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => !hasChildren && setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "font-display text-3xl py-3 transition-colors flex-1",
                        isActive || parentActive
                          ? "text-accent"
                          : "text-foreground"
                      )
                    }
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {l.label}
                  </NavLink>

                  {/* Bottone espandi/comprimi per voci con figli */}
                  {hasChildren && (
                    <button
                      onClick={() =>
                        setExpanded(isExpanded ? null : l.to)
                      }
                      aria-label={
                        isExpanded ? "Comprimi sottomenu" : "Espandi sottomenu"
                      }
                      className="p-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          isExpanded ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Sottovoci */}
                {hasChildren && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="pl-4 pb-3 border-l border-accent/30 ml-2 space-y-1">
                      {l.children!.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              cn(
                                "block py-2 text-lg transition-colors",
                                isActive
                                  ? "text-accent"
                                  : "text-foreground/70 hover:text-foreground"
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
