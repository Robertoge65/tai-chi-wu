import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { MapPin, Mail } from "lucide-react";

type Slot = { days: string; time: string; full?: boolean };
type Level = { level: string; slots: Slot[] };

const taiChi: Level[] = [
  {
    level: "Principianti - Corso Tai Chi Chuan stile Wu",
    slots: [
      { days: "Lunedì e Mercoledì", time: "12.00" },
      { days: "Lunedì e Mercoledì", time: "18.00" },
      { days: "Martedì e Giovedì", time: "12.00" },
      { days: "Martedì e Giovedì", time: "18.00" },
      { days: "Martedì e Giovedì", time: "20.00" },
    ],
  },
];

const qiGong: Slot[] = [{ days: "Tutti i Martedì", time: "10.15 — 11.15" }];

const approfondimenti = [
  {
    name: "Forma Rapida",
    slots: [
      { when: "4° venerdì del mese", time: "18.00 — 19.00" },
      { when: "2° mercoledì del mese", time: "20.30 — 21.30" },
    ],
  },
  {
    name: "Ventaglio",
    slots: [
      { when: "4° venerdì del mese", time: "19.00 — 20.00" },
      { when: "1° mercoledì del mese", time: "20.30 — 21.30" },
    ],
  },
  {
    name: "Tui Shou + applicazioni",
    slots: [
      { when: "4° venerdì del mese", time: "20.00 — 21.00" },
      { when: "4° mercoledì del mese", time: "20.30 — 21.30" },
    ],
  },
  {
    name: "Spada",
    slots: [
      { when: "4° sabato del mese", time: "10.00 — 12.00" },
      { when: "3° mercoledì del mese", time: "20.30 — 21.30" },
    ],
  },
];

const DoveQuando = () => (
  <>
    <PageHeader
      eyebrow="Sede & orari"
      title="Dove"
      intro="La sede dell'associazione Tai Chi Wu Italia ASD è in Via Caffaro 30, a Genova. Di seguito gli orari ufficiali dell'anno accademico 2025/2026."
      cn="時"
    />

    {/* Sede + Mappa */}
    <section className="container-wide grid lg:grid-cols-[1fr_1.2fr] gap-12 pb-20">
      <Reveal>
        <div className="bg-foreground text-primary-foreground p-10 md:p-14 h-full">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">La sede</p>
          <h2 className="font-display text-4xl mb-8 leading-tight">
            Via Caffaro 30<br />16124 Genova
          </h2>

          <div className="space-y-3 text-sm text-primary-foreground/85 mb-10">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent shrink-0" />
              Tai Chi Wu Italia ASD
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <a href="mailto:info@taichiwu.it" className="link-ink">info@taichiwu.it</a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+Caffaro+30+Genova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent border-b border-accent pb-1 hover:gap-3 transition-all"
          >
            Apri in Google Maps
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden shadow-deep">
          <iframe
            title="Mappa — Via Caffaro 30, Genova"
            src="https://www.google.com/maps?q=Via+Caffaro+30,+Genova&output=embed"
            className="h-full w-full border-0 grayscale-[0.4] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>

    {/* Tai Chi Chuan */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Orari 2025/2026</p>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            Quando
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Frequenza bisettimanale per tutti i livelli. Ogni lezione dura un'ora.
          </p>
        </Reveal>

        <div className="space-y-10">
          {taiChi.map((lvl, i) => (
            <Reveal key={lvl.level} delay={i * 0.08}>
              <div className="bg-background border border-border">
                <div className="flex items-baseline justify-between px-8 md:px-10 py-6 border-b border-border">
                  <h3 className="font-display text-2xl md:text-3xl">{lvl.level}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {lvl.slots.length} turni
                  </span>
                </div>
                <ul className="divide-y divide-border">
                  {lvl.slots.map((s, idx) => (
                    <li
                      key={`${s.days}-${s.time}-${idx}`}
                      className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] items-center gap-4 px-8 md:px-10 py-5"
                    >
                      <span className="text-foreground/90">{s.days}</span>
                      <span className="font-mono text-sm text-accent tracking-wide">
                        inizio ore {s.time}
                      </span>
                      {s.full && (
                        <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground border border-border px-2 py-1">
                          Al completo
                        </span>
                      )}
                      {s.full && (
                        <span className="md:hidden col-span-2 -mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          · Classe al completo
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 items-start text-sm text-muted-foreground bg-background border border-border p-5">
              <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">注</span>
              <p>
                Le classi del primo anno sono al completo: per permettere alle persone che hanno espresso già da ora il desiderio di iscriversi è stata creata una lista di attesa per l'anno 2026/2027: per essere inseriti è sufficiente compilare il modulo in <Link to="/lista-attesa" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">questa pagina</Link>.
              </p>
            </div>
            <div className="flex gap-4 items-start text-sm text-muted-foreground bg-background border border-border p-5">
              <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">注</span>
              <p>
                Gli orari per le classi <strong className="text-foreground">Intermedi</strong> ed <strong className="text-foreground">Avanzati</strong> saranno comunicati direttamente ad ogni singolo allievo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Qi Gong */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Pratica energetica, tutti i livelli</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Qi Gong
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-background border border-border">
            {qiGong.map((s) => (
              <div
                key={s.time}
                className="flex flex-wrap items-baseline justify-between gap-4 px-8 md:px-10 py-6"
              >
                <span className="text-foreground/90">{s.days}</span>
                <span className="font-mono text-sm text-accent tracking-wide">{s.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Approfondimenti */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Approfondimenti</p>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            Seminari e discipline complementari.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Riservati agli allievi iscritti al corso di Tai Chi Chuan.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {approfondimenti.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <div className="bg-background p-8 h-full flex flex-col">
                <h3 className="font-display text-2xl mb-6">{a.name}</h3>
                <ul className="space-y-4 mt-auto">
                  {a.slots.map((s) => (
                    <li key={s.when} className="border-t border-border pt-3">
                      <p className="text-sm text-foreground/85">{s.when}</p>
                      <p className="font-mono text-sm text-accent tracking-wide mt-1">{s.time}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-muted-foreground italic">
            Tutte le lezioni si svolgono presso i locali dell'Associazione in Via Caffaro 30, Genova.
            Per conferma e informazioni:{" "}
            <a href="mailto:info@taichiwu.it" className="text-foreground link-ink">
              info@taichiwu.it
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  </>
);

export default DoveQuando;
