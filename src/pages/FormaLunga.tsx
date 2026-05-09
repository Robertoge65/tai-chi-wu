import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── Struttura in sei sezioni ─────────────────────────────────────────────────
const sezioni = [
  {
    numero: 1,
    titolo: "Dalla Preparazione alla Frusta Singola Obliqua",
    range: "Movimenti 1–16",
    posizioni: [
      "Inizio del Taiji (Preparazione)",
      "Inizio della Forma",
      "Afferrare la coda del passero",
      "Frusta singola",
      "Avanzare e alzare le mani",
      "Airone dispiega le ali",
      "Avanzare e sfiorare il ginocchio",
      "Suonare il liuto",
      "Avanzare, parare, deviare, colpire",
      "Chiusura apparente",
      "Tigre e leopardo balzano alla montagna",
      "Incrociare le mani",
      "Sfiorare il ginocchio (a sin. 45°) e spingere",
      "Girare (180°) e sfiorare il ginocchio e spingere",
      "Afferrare la coda del passero",
      "Frusta singola obliqua",
    ],
  },
  {
    numero: 2,
    titolo: "Dal Pugno sotto il Gomito a Frusta Singola",
    range: "Movimenti 17–30",
    posizioni: [
      "Portare il pugno sotto al gomito",
      "Arretrare e respingere la scimmia",
      "Volo inclinato",
      "Avanzare e alzare le mani (piede dx)",
      "Airone distende le ali",
      "Sfiorare il ginocchio",
      "Ago in fondo al mare",
      "Ventaglio dietro la schiena",
      "Parare e colpire di pugno",
      "Arretrare, bloccare e colpire",
      "Avanzare e afferrare la coda del passero",
      "Frusta singola",
      "Mani come le nuvole (drago tra le nuvole)",
      "Frusta singola",
    ],
  },
  {
    numero: 3,
    titolo: "Da Patta al Cavallo a Frusta Singola Obliqua",
    range: "Movimenti 31–49",
    posizioni: [
      "Patta al cavallo",
      "Separare la gamba sinistra e la destra",
      "Ruotare e colpire con la suola",
      "Avanzare, 2 sfior. gin., colpo di pugno",
      "Ruotare (180°), parare e colpire di pugno",
      "Patta al cavallo",
      "Aprire e calciare a destra",
      "Arretrare e colpire la tigre (con 2° calcio)",
      "Colpire l'opponente alle orecchie",
      "Ruotare e doppio calcio",
      "Patta al cavallo",
      "Avanzare, parare, deviare e colpire",
      "Chiusura apparente",
      "Tigre e leopardo balzano alla montagna",
      "Incrociare le mani",
      "Sfiorare il ginocchio (a sin. 45°) e spingere",
      "Girare (180°) e sfiorare il ginocchio e spingere",
      "Afferrare la coda del passero",
      "Frusta singola obliqua",
    ],
  },
  {
    numero: 4,
    titolo: "Da Separare Criniera al Cavallo a Frusta Singola",
    range: "Movimenti 50–55",
    posizioni: [
      "Separare la criniera al cavallo selvaggio",
      "La dama di giada lavora al fuso",
      "Afferrare la coda del passero",
      "Frusta singola",
      "Mani come le nuvole",
      "Frusta singola",
    ],
  },
  {
    numero: 5,
    titolo: "Da Tirare in Basso a Frusta Singola",
    range: "Movimenti 56–70",
    posizioni: [
      "Tirare in basso",
      "Gallo d'oro sta su una gamba (alzo dx e sin)",
      "Arretrare e respingere la scimmia",
      "Volo inclinato indietro (perno punta piede dx)",
      "Avanzare (piede sin. avanza)",
      "Airone dispiega le ali",
      "Sfiorare il ginocchio",
      "Ago in fondo al mare",
      "Ventaglio dietro la schiena",
      "Parare e colpire di pugno",
      "Avanzare, parare, deviare e colpire",
      "Avanzare e afferrare la coda del passero",
      "Frusta singola",
      "Mani come le nuvole",
      "Frusta singola",
    ],
  },
  {
    numero: 6,
    titolo: "Da Patta al Cavallo a Chiusura del Taiji",
    range: "Movimenti 71–89",
    posizioni: [
      "Patta al cavallo",
      "Il palmo va ad incontrare il volto",
      "Lotus singolo",
      "Sfiorare il ginocchio e colpire in basso di pugno",
      "Afferrare la coda del passero (peso dietro poi avanti)",
      "Frusta singola",
      "Tirare in basso (2° serpente che striscia)",
      "Avanzare e formare 7 stelle",
      "Arretrare e cavalcare la tigre",
      "Ruotare il corpo e colpire il volto col palmo",
      "Lotus doppio",
      "Piegare l'arco e colpire la tigre",
      "Avanzare, patta al cavallo (gamba sin. distesa)",
      "Il palmo va ad incontrare il volto",
      "Ruotare e colpire di pugno (palmo sin. aperto)",
      "Avanzare e accarezzare il cavallo",
      "Afferrare la coda del passero",
      "Frusta singola",
      "Conclusione del Taiji",
    ],
  },
];

const FormaLunga = () => (
  <>
    <PageHeader
      eyebrow="Le forme · livello avanzato"
      title="Forma Lunga · 89"
      intro="La forma tradizionale completa dello stile Wu, nella versione codificata da Wu Ying-hua, figlia del fondatore Wu Jianquan. Ottantanove movimenti in sei sezioni: il coronamento di anni di pratica."
      cn="長"
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
              La forma tradizionale nella sua versione integrale.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              La Forma Lunga è la forma tradizionale completa dello stile Wu,
              nella versione a 89 movimenti codificata da{" "}
              <strong className="text-foreground">Wu Ying-hua</strong>, figlia
              del fondatore Wu Jianquan. Esiste anche una versione a 108
              movimenti — numericamente differente per via del conteggio dei
              passi ripetuti — ma il contenuto tecnico è equivalente.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              È la forma che richiede anni di pratica costante per essere
              eseguita nella sua pienezza. Non si tratta semplicemente di
              memorizzare 89 posizioni: ogni movimento porta con sé una
              precisione posturale, una qualità del radicamento, una fluidità
              delle transizioni e una profondità delle applicazioni marziali
              che si sviluppano progressivamente nel tempo.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La forma è articolata in{" "}
              <strong className="text-foreground">sei sezioni</strong>, ciascuna
              con il proprio arco interno. La struttura ricorrente — con le
              ripetizioni della Frusta Singola come elemento di chiusura — non è
              una ripetizione meccanica: è la struttura portante su cui si
              sviluppa l'intero vocabolario tecnico dello stile Wu.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nella scuola Tai Chi Wu Italia, la Forma Lunga viene introdotta
              dopo il consolidamento della Forma Breve, tipicamente a partire
              dal terzo anno. Il suo approfondimento non ha una scadenza:
              praticanti di decenni continuano a trovarne nuovi livelli di
              comprensione.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-4 leading-none">長</p>
            <p className="font-display text-2xl mb-1">Forma Lunga</p>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
              Cháng Quán · 長拳 · Wu Ying-hua
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Livello</span>
                <span className="text-primary-foreground">Avanzati</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Movimenti</span>
                <span className="text-primary-foreground">89 (var. 108)</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Sezioni</span>
                <span className="text-primary-foreground">6</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Versione</span>
                <span className="text-primary-foreground">Wu Ying-hua · Shanghai</span>
              </div>
              <div className="flex justify-between">
                <span>Anno di accesso</span>
                <span className="text-primary-foreground">Dal 3° anno</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Le sei sezioni ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Sequenza completa · 89 movimenti
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Le sei sezioni.
          </h2>
        </Reveal>

        <div className="space-y-px bg-border">
          {sezioni.map((s, si) => (
            <Reveal key={s.numero} delay={si * 0.06}>
              <div className="bg-background">
                {/* Intestazione sezione */}
                <div className="flex items-baseline justify-between px-8 md:px-10 py-6 border-b border-border">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-accent tracking-widest">
                      {String(s.numero).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl">{s.titolo}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
                    {s.range}
                  </span>
                </div>
                {/* Posizioni */}
                <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border m-px">
                  {s.posizioni.map((pos, pi) => {
                    // calcola il numero assoluto di movimento
                    const offset = sezioni
                      .slice(0, si)
                      .reduce((acc, prev) => acc + prev.posizioni.length, 0);
                    const num = offset + pi + 1;
                    return (
                      <li
                        key={pos}
                        className="bg-background flex items-start gap-4 px-7 py-5"
                      >
                        <span className="font-mono text-xs text-accent/70 tracking-widest pt-0.5 shrink-0 w-6">
                          {String(num).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-foreground/80 leading-snug">
                          {pos}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Nota ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <div className="flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-6 max-w-3xl">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              La numerazione segue la versione a{" "}
              <strong className="text-foreground">89 movimenti</strong> di Wu
              Ying-hua, adottata dalla scuola come riferimento. La variante a
              108 movimenti conta diversamente le posizioni ripetute ma è
              tecnicamente equivalente. La Forma Lunga viene insegnata agli
              allievi che hanno consolidato la Forma Breve, tipicamente a
              partire dal terzo anno di pratica.
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
              to="/tai-chi/le-forme/forma-breve"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma precedente
                </p>
                <p className="font-display text-xl">Forma Breve · 30</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/tai-chi/le-forme/forma-rapida"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma successiva
                </p>
                <p className="font-display text-xl">Forma Rapida · Kuai Quan</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default FormaLunga;
