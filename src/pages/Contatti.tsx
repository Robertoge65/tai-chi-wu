import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AlertTriangle, Facebook, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

const WHATSAPP_DISPLAY = "320 082 3915";
const WHATSAPP_LINK = "https://wa.me/393200823915";

const Contatti = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contatti"
        title="Dove trovarci."
        intro="Per informazioni sui corsi, sulle attività della scuola o per fissare un incontro, scrivici via email o contattaci su WhatsApp."
        cn="信"
      />

      <section className="container-wide grid lg:grid-cols-2 gap-8 pb-24">
        {/* Coordinate */}
        <Reveal>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 h-full">
            <h2 className="font-display text-3xl mb-8">Coordinate</h2>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@taichiwu.it"
                  className="flex items-center gap-3 text-lg link-ink"
                >
                  <Mail className="h-4 w-4 text-accent" /> info@taichiwu.it
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">
                  Sede
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <MapPin className="h-4 w-4 text-accent" /> Via Caffaro 30, Genova
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg link-ink"
                >
                  <MessageCircle className="h-4 w-4 text-accent" /> {WHATSAPP_DISPLAY}
                </a>
                <div className="mt-3 flex items-start gap-2 text-sm text-primary-foreground/70 leading-relaxed">
                  <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>
                    <span className="text-primary-foreground">Attenzione:</span> questo
                    numero non è abilitato alla ricezione delle telefonate. Usare
                    esclusivamente WhatsApp e, su richiesta, sarete richiamati.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">
                  Affiliazione
                </p>
                <p className="text-primary-foreground/80">
                  Wu Taiji Jing Xiu Tang · Shanghai
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-3">
                  Seguici
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/TaiChiWuItalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pagina Facebook Tai Chi Wu Italia"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors text-sm"
                  >
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/@TaiChiWu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Canale YouTube Tai Chi Wu"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors text-sm"
                  >
                    <Youtube className="h-4 w-4" /> YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/15">
              <p className="font-cn text-3xl text-accent mb-3">「以心傳心」</p>
              <p className="text-sm text-primary-foreground/70 italic">
                "Trasmettere col cuore."
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mappa */}
        <Reveal delay={0.15}>
          <div className="h-full min-h-[420px] border border-border overflow-hidden">
            <iframe
              title="Mappa sede Tai Chi Wu — Via Caffaro 30, Genova"
              src="https://www.google.com/maps?q=Via+Caffaro+30,+Genova&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contatti;
