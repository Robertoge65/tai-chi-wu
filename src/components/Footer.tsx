import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gradient-ink text-primary-foreground mt-32">
    <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
      <div>
        <p className="font-display text-2xl mb-3">Tai Chi Wu Italia <span className="font-cn text-accent ml-1">吴</span></p>
        <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
          Associazione sportiva dilettantistica. Scuola di Tai Chi Chuan stile Wu e Qi Gong del Maestro Roberto Carretti.
        </p>
        <div className="flex items-center gap-3 mt-6">
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

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-4">Dove siamo</h4>
        <p className="flex items-start gap-2 text-sm text-primary-foreground/85">
          <MapPin className="h-4 w-4 mt-1 shrink-0 text-accent" />
          Via Caffaro 30, 16124 Genova
        </p>
        <p className="flex items-center gap-2 text-sm text-primary-foreground/85 mt-2">
          <Mail className="h-4 w-4 text-accent" />
          <a href="mailto:info@taichiwu.it" className="link-ink">info@taichiwu.it</a>
        </p>
        <p className="flex items-center gap-2 text-sm text-primary-foreground/85 mt-2">
          <MessageCircle className="h-4 w-4 text-accent" />
          <a href="https://wa.me/393200823915" target="_blank" rel="noopener noreferrer" className="link-ink">320 082 3915</a>
        </p>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-4">Esplora</h4>
        <ul className="space-y-2 text-sm">
          {[
            ["/tai-chi", "Tai Chi Chuan"],
            ["/qi-gong", "Qi Gong"],
            ["/dove-e-quando", "Orari & sede"],
            ["/chi-siamo", "Chi siamo"],
            ["/contatti", "Contatti"],
            ["/lista-attesa", "Lista d'attesa"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link to={to} className="text-primary-foreground/85 link-ink">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-wide py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} ASD Tai Chi Wu Italia. Tutti i diritti riservati.</p>
        <p>Affiliata a <a href="https://jingxiutang.eu/" target="_blank" rel="noopener noreferrer" className="link-ink">Wu Taiji Jing Xiu Tang</a> · Shanghai</p>
      </div>
    </div>
  </footer>
);
