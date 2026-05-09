import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

const FormaRapida = () => (
  <>
    <PageHeader
      eyebrow="Le forme · approfondimento marziale"
      title="Forma Rapida · Kuai Quan"
      intro="L'espressione marziale esplicita dello stile Wu. I movimenti veloci rivelano le applicazioni combattive che nella forma lenta rimangono implicite nella lentezza."
      cn="快"
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
              Quando la lentezza rivela la sua velocità.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Nel Tai Chi Chuan esiste un paradosso apparente: una pratica
              fondata sulla lentezza che è al tempo stesso un'arte marziale
              efficace. La Forma Rapida — <em>Kuai Quan</em>, letteralmente{" "}
              <em>«pugno veloce»</em> — scioglie questo paradosso mostrandolo
              apertamente.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I movimenti della forma lenta, eseguiti alla loro velocità
              naturale, rivelano la loro natura marziale: proiezioni, leve,
              colpi diretti, calci, tecniche di controllo. La lentezza con cui
              vengono praticati quotidianamente non è un fine in sé: è il
              metodo con cui il corpo apprende la struttura, il radicamento e
              la coordinazione necessari per esprimere quella forza in modo
              fluido e integrato.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La Kuai Quan è riservata agli allievi che hanno già consolidato
              la Forma Breve o la Forma Lunga. Non è un livello separato dalla
              pratica: è la stessa pratica vista da un'altra angolazione, che
              illumina retroattivamente il significato di ogni gesto lento.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nella scuola Tai Chi Wu Italia viene proposta come{" "}
              <strong className="text-foreground">
                seminario mensile di approfondimento
              </strong>
              , riservato agli allievi iscritti. Il lavoro sulla forma rapida
              alterna esecuzione completa, studio delle applicazioni a coppie
              (Tui Shou) e analisi delle singole tecniche.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-px">
            {/* Scheda tecnica */}
            <div className="bg-foreground text-primary-foreground p-10 md:p-12">
              <p className="font-cn text-7xl text-accent mb-4 leading-none">快</p>
              <p className="font-display text-2xl mb-1">Forma Rapida</p>
              <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
                Kuai Quan · 快拳
              </p>
              <div className="space-y-3 text-sm text-primary-foreground/70">
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                  <span>Livello</span>
                  <span className="text-primary-foreground">Avanzati</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                  <span>Prerequisito</span>
                  <span className="text-primary-foreground">Forma Breve o Lunga</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                  <span>Modalità</span>
                  <span className="text-primary-foreground">Seminario mensile</span>
                </div>
                <div className="flex justify-between">
                  <span>Accesso</span>
                  <span className="text-primary-foreground">Allievi iscritti</span>
                </div>
              </div>
            </div>

            {/* Riferimento video */}
            <div className="bg-secondary/60 border border-border p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Documento storico
              </p>
              <p className="font-display text-lg mb-3">
                Roberto Carretti &amp; Tara Dai Chen
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                La Forma Rapida eseguita dal M° Roberto Carretti con Tara Dai
                Chen a Genova nel 2015. Una delle rare esecuzioni video della
                Kuai Quan stile Wu disponibili in Italia.
              </p>
              <a
                href="https://www.youtube.com/@TaiChiWu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all text-sm"
              >
                Canale YouTube Tai Chi Wu Italia
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Kuai Quan e Tui Shou ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Forma rapida e pratica a coppie
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-10">
            Kuai Quan e Tui Shou.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {[
            {
              cn: "快",
              titolo: "Esecuzione della forma",
              testo:
                "La Kuai Quan viene praticata prima come sequenza individuale completa, per familiarizzare con il ritmo e la struttura delle transizioni veloci. La qualità posturale acquisita con la forma lenta è il prerequisito essenziale.",
            },
            {
              cn: "推",
              titolo: "Tui Shou · spinta delle mani",
              testo:
                "Il Tui Shou — la pratica a coppie della spinta delle mani — è il ponte tra la forma individuale e l'applicazione marziale. Permette di sperimentare i principi del cedere, del seguire e del neutralizzare in un contesto dinamico e relazionale.",
            },
            {
              cn: "用",
              titolo: "Applicazioni tecniche",
              testo:
                "Ogni movimento della forma rapida viene analizzato nelle sue applicazioni pratiche: leve articolari, proiezioni, tecniche di controllo e colpi. L'analisi illumina retroattivamente il significato di ogni posizione della forma lenta.",
            },
          ].map((item, i) => (
            <Reveal key={item.titolo} delay={i * 0.08}>
              <div className="bg-background p-10 h-full flex flex-col">
                <p className="font-cn text-5xl text-accent mb-5 leading-none">
                  {item.cn}
                </p>
                <h3 className="font-display text-xl mb-4">{item.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {item.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Nota accesso ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <div className="flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-6 max-w-3xl">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              Il seminario mensile di Forma Rapida è riservato agli allievi
              iscritti al corso di Tai Chi Chuan. Per orari e modalità
              consultare la pagina{" "}
              <Link
                to="/dove-e-quando"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                Dove e quando
              </Link>
              . Per informazioni:{" "}
              <a
                href="mailto:info@taichiwu.it"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                info@taichiwu.it
              </a>
              .
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
              to="/tai-chi/le-forme/forma-lunga"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Forma precedente
                </p>
                <p className="font-display text-xl">Forma Lunga · 89</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/tai-chi"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">Il Tai Chi Chuan</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default FormaRapida;
