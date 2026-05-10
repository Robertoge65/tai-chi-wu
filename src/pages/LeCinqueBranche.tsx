import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const branche = [
  {
    numero: "01",
    cn: "針",
    nome: "Agopuntura · Zhēn Jiǔ",
    desc: "La branca più nota in Occidente. Sottili aghi vengono inseriti in punti specifici lungo i meridiani per regolare il flusso del Qi e ristabilire l'equilibrio energetico. Riconosciuta dall'OMS per il trattamento di numerose condizioni, dall'agopuntura agli stati dolorosi cronici.",
    correlazione: null,
  },
  {
    numero: "02",
    cn: "藥",
    nome: "Fitoterapia e Farmacopea · Zhōng Yào",
    desc: "L'uso di erbe, minerali e sostanze animali in formule composte secondo principi energetici della MTC. Non si cura il sintomo ma lo squilibrio sottostante. La Farmacopea Cinese conta migliaia di sostanze codificate in decine di migliaia di formule tradizionali.",
    correlazione: null,
  },
  {
    numero: "03",
    cn: "食",
    nome: "Dietologia Cinese · Shí Liáo",
    desc: "Ogni alimento ha proprietà energetiche precise — temperatura, sapore, direzione d'azione — che lo rendono adatto o controindicato in base alla costituzione individuale e alla stagione. Non è una dieta: è un sistema di nutrizione consapevole che considera il cibo come medicina quotidiana.",
    correlazione: null,
  },
  {
    numero: "04",
    cn: "推",
    nome: "Massaggio Tui Na · 推拿",
    desc: "Tecniche di manipolazione manuale lungo i meridiani e i punti di agopuntura. Il Tui Na agisce sugli stessi principi dell'agopuntura ma senza aghi: pressione, frizione, percussione e mobilizzazione articolare per regolare il Qi e trattare le disarmonie. Strettamente correlato al Tui Shou del Tai Chi.",
    correlazione: "/tai-chi/le-forme/forma-rapida",
    correlazioneTesto: "Tui Shou nel Tai Chi",
  },
  {
    numero: "05",
    cn: "功",
    nome: "Ginnastica Interna · Qi Gong e Tai Chi Chuan",
    desc: "La branca praticata in prima persona: esercizi di movimento, respirazione e meditazione per coltivare e regolare il Qi. È l'unica delle cinque branche in cui il paziente è anche il praticante. Il Qi Gong è la forma generale; il Tai Chi Chuan è una delle sue espressioni più complete — al tempo stesso arte marziale, pratica meditativa e disciplina per la salute.",
    correlazione: "/tai-chi",
    correlazioneTesto: "La pratica nella nostra scuola",
    highlight: true,
  },
];

const LeCinqueBranche = () => (
  <>
    <PageHeader
      eyebrow="Medicina Tradizionale Cinese · sistema"
      title="Le cinque branche"
      intro="La Medicina Tradizionale Cinese non è una singola tecnica ma un sistema completo di cinque discipline. Comprenderne la struttura aiuta a capire dove si collocano il Tai Chi Chuan e il Qi Gong e perché la loro efficacia è riconosciuta a livello mondiale."
      cn="術"
    />

    {/* Breadcrumb */}
    <div className="container-wide pb-2 -mt-6">
      <Link
        to="/medicina-tradizionale-cinese"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> Medicina Tradizionale Cinese
      </Link>
    </div>

    {/* ── Introduzione ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Un sistema, cinque strumenti.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              La Medicina Tradizionale Cinese non si riduce all'agopuntura,
              come spesso si crede in Occidente. È un sistema medico completo
              articolato in cinque grandi branche, ciascuna con i propri
              strumenti e le proprie tecniche, tutte fondate sugli stessi
              principi: l'equilibrio del Qi, la teoria Yin/Yang e la
              circolazione nei meridiani.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Le cinque branche non sono alternative l'una all'altra: sono
              complementari. Un medico di MTC le usa in combinazione, scegliendo
              gli strumenti più adatti alla costituzione del paziente, alla
              natura della disarmonia e alla stagione.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il Tai Chi Chuan e il Qi Gong appartengono alla quinta branche —
              la{" "}
              <strong className="text-foreground">ginnastica interna</strong>{" "}
              — e sono gli unici strumenti della MTC che il paziente pratica
              in prima persona. Non si riceve un trattamento: si coltiva la
              propria salute attraverso la pratica quotidiana. Questo è il
              motivo per cui — tra tutte le branche — sono i più adatti a una
              prospettiva di prevenzione e di mantenimento del benessere nel
              lungo periodo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              Le cinque branche in sintesi
            </p>
            <ol className="space-y-px bg-primary-foreground/10">
              {branche.map((b) => (
                <li
                  key={b.numero}
                  className={`flex items-center gap-4 px-5 py-4 bg-foreground ${
                    b.highlight ? "border-l-2 border-accent" : ""
                  }`}
                >
                  <span className="font-cn text-2xl text-accent shrink-0 w-8">
                    {b.cn}
                  </span>
                  <span
                    className={`text-sm leading-snug ${
                      b.highlight
                        ? "text-primary-foreground"
                        : "text-primary-foreground/75"
                    }`}
                  >
                    {b.nome.split(" · ")[0]}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Le cinque branche dettaglio ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Descrizione dettagliata
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Le cinque branche.
          </h2>
        </Reveal>

        <div className="space-y-px bg-border">
          {branche.map((b, i) => (
            <Reveal key={b.numero} delay={i * 0.06}>
              <div
                className={`grid md:grid-cols-[auto_1fr] gap-0 ${
                  b.highlight ? "bg-foreground text-primary-foreground" : "bg-background"
                }`}
              >
                {/* Numero + carattere */}
                <div
                  className={`flex flex-col items-center justify-start gap-2 p-8 border-b md:border-b-0 md:border-r ${
                    b.highlight
                      ? "border-primary-foreground/20"
                      : "border-border"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-widest ${
                      b.highlight ? "text-accent" : "text-accent"
                    }`}
                  >
                    {b.numero}
                  </span>
                  <span className="font-cn text-4xl text-accent leading-none">
                    {b.cn}
                  </span>
                </div>

                {/* Contenuto */}
                <div className="p-8 md:p-10">
                  <h3
                    className={`font-display text-2xl mb-4 ${
                      b.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {b.nome}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      b.highlight
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {b.desc}
                  </p>
                  {b.correlazione && (
                    <Link
                      to={b.correlazione}
                      className="inline-flex items-center gap-2 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all text-sm"
                    >
                      {b.correlazioneTesto}{" "}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Perché praticare ── */}
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <Reveal>
            <div className="bg-foreground text-primary-foreground p-10 md:p-14">
              <p className="font-cn text-7xl text-accent mb-6 leading-none">防</p>
              <p className="font-display text-2xl mb-4 leading-snug">
                Prevenire è meglio che curare.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                La MTC è storicamente orientata alla prevenzione più che alla
                cura: il medico cinese tradizionale veniva pagato finché i
                pazienti erano sani, non quando si ammalavano.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Il Tai Chi Chuan e il Qi Gong, praticati con regolarità, sono
                strumenti di prevenzione primaria: non trattano patologie in
                atto ma mantengono il sistema in equilibrio, riducendo la
                probabilità che le disarmonie si manifestino.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
                Il Tai Chi Chuan nel contesto della MTC.
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nella visione della MTC, il Tai Chi Chuan è molto più di
                un'attività fisica. È una pratica che agisce simultaneamente
                su tutti e tre i livelli dell'essere umano: il corpo (Jing),
                l'energia (Qi) e la mente-spirito (Shen).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Il movimento lento e continuo scioglie le stagnazioni del Qi
                nei meridiani. La respirazione consapevole nutre il Polmone —
                uno degli organi più importanti nella produzione del Qi — e
                calma il sistema nervoso. L'attenzione mentale coltiva lo Shen
                e trasforma l'esercizio fisico in meditazione in movimento.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                È questo il motivo per cui il Tai Chi Chuan — a differenza di
                molte altre attività fisiche — non esaurisce ma rigenera
                l'energia: non disperde il Qi, lo coltiva.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Navigazione ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/medicina-tradizionale-cinese/i-meridiani"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Precedente
                </p>
                <p className="font-display text-xl">I Meridiani</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/medicina-tradizionale-cinese"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">
                  Medicina Tradizionale Cinese
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default LeCinqueBranche;
