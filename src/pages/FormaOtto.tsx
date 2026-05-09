import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const posizioni = [
  "Inizio del Taiji",
  "Suonare il liuto",
  "Gallo d'oro sta su una gamba",
  "Sfiorare il ginocchio",
  "Separare la criniera al cavallo",
  "Respingere la scimmia",
  "Ago in fondo al mare",
  "Ventaglio dietro la schiena",
  "Ruotare e colpire di pugno",
  "Separare piede destro",
  "Frusta singola",
  "Riunire il Taiji",
];

const FormaOtto = () => (
  <>
    <PageHeader
      eyebrow="Le forme · primo livello"
      title="Forma Otto"
      intro="La porta d'ingresso alla pratica dello stile Wu. Otto movimenti fondamentali, una forma completa: dal Taiji iniziale al Taiji conclusivo."
      cn="八"
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
              Una forma creata per la competizione, adottata per l'insegnamento.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              La Forma Otto è stata creata dal Maestro Roberto Carretti con la
              supervisione diretta del Maestro Zhou Zhongfu in occasione del{" "}
              <strong className="text-foreground">
                1st European Special Online Wushu Championships 2020
              </strong>
              . Nata per la competizione internazionale, è diventata la forma
              introduttiva della scuola per la sua capacità di condensare i
              principi fondamentali dello stile Wu in una sequenza breve e
              completa.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Dodici movimenti — non otto, perché apertura e chiusura del Taiji
              incorniciano le otto posizioni centrali — che introducono il
              praticante alle basi della postura, del radicamento e del ritmo
              interno dello stile Wu.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              È la prima forma appresa dai principianti. Non è una
              semplificazione della pratica: è un microcosmo di essa. Ogni
              movimento è presente anche nelle forme più avanzate; imparare a
              eseguirlo correttamente qui significa costruire le fondamenta su
              cui si svilupperà tutta la pratica successiva.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-4 leading-none">八</p>
            <p className="font-display text-2xl mb-1">Forma Otto</p>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
              Ba Shi · 八式
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Livello</span>
                <span className="text-primary-foreground">Principianti</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Posizioni</span>
                <span className="text-primary-foreground">12</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Origine</span>
                <span className="text-primary-foreground">Carretti / Zhou Zhongfu · 2020</span>
              </div>
              <div className="flex justify-between">
                <span>Anno</span>
                <span className="text-primary-foreground">2020</span>
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
            Le posizioni.
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
              La Forma Otto viene insegnata durante il{" "}
              <strong className="text-foreground">primo anno</strong> di corso.
              Non è propedeutica alla Forma Breve: ne è una forma autonoma e
              completa, concepita con la supervisione del M° Zhou Zhongfu per
              rappresentare lo stile Wu nelle competizioni internazionali.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Navigazione forme ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            Il percorso delle forme
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/tai-chi"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">Il Tai Chi Chuan</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/tai-chi/le-forme/forma-breve"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma successiva
                </p>
                <p className="font-display text-xl">Forma Breve · 30</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default FormaOtto;
