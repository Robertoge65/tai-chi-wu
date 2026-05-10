import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

const navSections = [
  {
    label: "Tai Chi Chuan",
    links: [
      ["/tai-chi", "Il Tai Chi Chuan"],
      ["/tai-chi/stile-wu", "Lo stile Wu"],
      ["/tai-chi/tai-chi-e-salute", "Tai Chi e salute"],
      ["/tai-chi/le-forme/forma-otto", "Forma Otto"],
      ["/tai-chi/le-forme/forma-breve", "Forma Breve · 30"],
      ["/tai-chi/le-forme/forma-lunga", "Forma Lunga · 89"],
      ["/tai-chi/le-forme/forma-rapida", "Forma Rapida · Kuai Quan"],
    ],
  },
  {
    label: "Qi Gong",
    links: [
      ["/qi-gong", "Il Qi Gong"],
      ["/qi-gong/ba-duan-jin", "Ba Duan Jin"],
    ],
  },
  {
    label: "La scuola",
    links: [
      ["/chi-siamo", "Chi siamo"],
      ["/dove-e-quando", "Orari & sede"],
      ["/contatti", "Contatti"],
    ],
  },
  {
  label: "Approfondimenti",
  links: [
    ["/medicina-tradizionale-cinese", "Medicina Tradizionale Cinese"],
    ["/medicina-tradizionale-cinese/qi-e-yin-yang", "Qi, Yin e Yang"],
    ["/medicina-tradizionale-cinese/i-meridiani", "I Meridiani"],
    ["/medicina-tradizionale-cinese/le-cinque-branche", "Le cinque branche"],
  ],
},
];

export const Footer = () => (
  <footer className="bg-gradient-ink text-primary-foreground mt-32">
    <div className="container-wide py-16 grid gap-12 md:grid-cols-[1.2fr_3fr]">

      {/* Brand + contatti */}
      <div>
        <p className="font-display text-2xl mb-3">
          Tai Chi Wu Italia <span className="font-cn text-accent ml-1">吴</span>
        </p>
        <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs mb-6">
          Associazione sportiva dilettantistica. Scuola di Tai Chi Chuan stile
          Wu e Qi Gong del Maestro Roberto Carretti.
        </p>

        <ul className="space-y-2 text-sm mb-8">
          <li className="flex items-start gap-2 text-primary-foreground/85">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
            Via Caffaro 30, 16124 Genova
          </li>
          <li className="flex items-center gap-2 text-primary-foreground/85">
            <Mail className="h-4 w-4 shrink-0 text-accent" />
            <a href="mailto:info@taichiwu.it" className="link-ink">
              info@taichiwu.it
            </a>
          </li>
          <li className="flex items-center gap-2 text-primary-foreground/85">
            <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
            <a
              href="https://wa.me/393200823915"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ink"
            >
              320 082 3915
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/TaiChiWuItalia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguici su Facebook"
            className="h-10 w-10 inline-flex items-center justify-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@TaiChiWu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Canale YouTube"
            className="h-10 w-10 inline-flex items-center justify-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Colonne di navigazione */}
      <div className="grid sm:grid-cols-4 gap-8">
        {navSections.map((section) => (
          <div key={section.label}>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-4">
              {section.label}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {section.links.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-primary-foreground/75 hover:text-accent transition-colors link-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-wide py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} ASD Tai Chi Wu Italia. Tutti i diritti riservati.</p>
        <p>
          Affiliata a{" "}
          <a
            href="https://jingxiutang.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ink"
          >
            Wu Taiji Jing Xiu Tang
          </a>{" "}
          · Shanghai
        </p>
      </div>
    </div>
  </footer>
);
