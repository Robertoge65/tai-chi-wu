import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const posizioni = [
  "Inizio del Taiji",
  "Afferrare la coda del passero",
  "Frusta singola",
  "Avanzare e alzare le mani",
  "Gru distende le ali",
  "Sfiorare il ginocchio",
  "Suonare il liuto",
  "Avanzare, parare, deflettere e colpire",
  "Chiusura apparente",
  "Respingere la scimmia",
  "Volo inclinato",
  "Ago in fondo al mare",
  "Ventaglio dietro la schiena",
  "Muovere le mani come le nuvole",
  "Separare piede destro e sinistro",
  "Girare e colpire con la suola",
  "Colpire l'opponente alle orecchie",
  "Separare la criniera al cavallo",
  "Dama lavora al fuso",
  "Tirare in basso (serpente che striscia)",
  "Gallo d'oro sta su una gamba",
  "Passo indietro e colpire la tigre",
  "Colpire il volto col palmo",
  "Girare il corpo, colpire di piede come il loto",
  "Tendere l'arco e tirare alla tigre",
  "Passo avanti e colpire il volto col palmo",
  "Ruotare e colpire di pugno",
  "Fare un passo e prendere il passero",
  "Frusta singola",
  "Riunire il Taiji",
];

const FormaBreve = () => (
  <>
    <PageHeader
      eyebrow="Le forme · secondo livello"
      title="Forma Breve · 30"
      intro="Il cuore didattico della scuola. Trenta posizioni che condensano i principi essenziali della tradizione Wu in una sequenza completa e autonoma."
      cn="三十"
    />

    {/* Breadcrumb */}
    <div className="container-wide pb-2 -mt-6">
      <Link
        to="/tai-chi"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> Tai Chi Chuan
      </Link>
    </div>

    {/* ── Contesto ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              La forma di riferimento del primo e secondo anno.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              La Forma Breve a 30 movimenti è la forma su cui si concentra la
              maggior parte del lavoro didattico della scuola. Non è una versione
              ridotta della Forma Lunga: è una sequenza autonoma, internamente
              coerente, che ha il proprio inizio, il proprio sviluppo e la propria
              conclusione.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Rispetto alla Forma Otto, introduce movimenti di maggiore complessità
              tecnica: i calci, le rotazioni a 180°, le sequenze di passi
              indietro, le variazioni del baricentro e i passaggi in postura bassa.
              È la forma dove il praticante comincia a incontrare la vera
              ricchezza tecnica dello stile Wu.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Ogni posizione ha un nome tradizionale — immagini poetiche che
              descrivono la natura del movimento:{" "}
              <em>«gru che distende le ali»</em>,{" "}
              <em>«ago in fondo al mare»</em>,{" "}
              <em>«volo inclinato»</em>. Questa nomenclatura non è decorativa:
              orienta la qualità del gesto, la direzione dell'intenzione e la
              comprensione dell'applicazione marziale sottostante.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La forma si apre e si chiude con il Taiji — il momento di raccolta
              dell'energia prima e dopo la sequenza — e include due ripetizioni
              della Frusta Singola, elemento strutturale caratteristico dello
              stile Wu.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-4 leading-none">三十</p>
            <p className="font-display text-2xl mb-1">Forma Breve</p>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
              Duǎn Shì · 短式
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Livello</span>
                <span className="text-primary-foreground">Principianti · Intermedi</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Posizioni</span>
                <span className="text-primary-foreground">30</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Anno di studio</span>
                <span className="text-primary-foreground">1° · 2°</span>
              </div>
              <div className="flex justify-between">
                <span>Stile</span>
                <span className="text-primary-foreground">Wu tradizionale</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Elenco posizioni ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Sequenza completa
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Le trenta posizioni.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {posizioni.map((pos, i) => (
              <li
                key={pos}
                className="bg-background flex items-start gap-5 p-7"
              >
                <span className="font-mono text-xs text-accent tracking-widest pt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/85 leading-snug">{pos}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>

    {/* ── Nota didattica ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <div className="flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-6 max-w-3xl">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              La Forma Breve viene introdotta durante il{" "}
              <strong className="text-foreground">primo anno</strong> e
              approfondita nel secondo. La sua padronanza è il prerequisito per
              l'accesso alla Forma Lunga tradizionale a 89 movimenti. Molti
              praticanti continuano a lavorare su questa forma anche negli anni
              successivi, scoprendone progressivamente la profondità tecnica.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Navigazione forme ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/tai-chi/le-forme/forma-otto"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma precedente
                </p>
                <p className="font-display text-xl">Forma Otto</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/tai-chi/le-forme/forma-lunga"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma successiva
                </p>
                <p className="font-display text-xl">Forma Lunga · 89</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default FormaBreve;
