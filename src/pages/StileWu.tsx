import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── I cinque stili tradizionali ─────────────────────────────────────────────
const stili = [
  { nome: "Chen 陳", desc: "Il più antico. Alterna movimenti lenti ed esplosioni di forza (fa jin). Da esso derivano tutti gli altri stili.", highlight: false },
  { nome: "Yang 楊", desc: "Il più diffuso al mondo. Movimenti ampi e distesi, adatti alla pratica di massa.", highlight: false },
  { nome: "Wu 吳", desc: "Posture inclinate e compatte. Enfasi sul controllo del centro, sulla fluidità e sulla profondità delle applicazioni marziali.", highlight: true },
  { nome: "Wu (Hao) 武", desc: "Stile minore, molto interno e meditativo. Movimenti ridotti all'essenziale.", highlight: false },
  { nome: "Sun 孫", desc: "Sintesi di Tai Chi, Xingyiquan e Baguazhang. Caratterizzato da passi agili e fluidi.", highlight: false },
];

// ─── Genealogia ──────────────────────────────────────────────────────────────
const genealogia = [
  {
    generazione: "Fondazione",
    nome: "Yang Luchan · 楊露禪",
    anni: "1799–1872",
    note: "Primo grande diffusore del Tai Chi Chuan fuori dalla famiglia Chen. Insegnò a Pechino, anche a corte imperiale.",
  },
  {
    generazione: "1ª generazione stile Wu",
    nome: "Quan You · 全佑",
    anni: "1834–1902",
    note: "Allievo di Yang Luchan e del figlio Yang Banhou. Sviluppò le caratteristiche posture inclinate che distinguono lo stile.",
  },
  {
    generazione: "2ª generazione · fondatore",
    nome: "Wu Jianquan · 吳鑑泉",
    anni: "1870–1942",
    note: "Figlio di Quan You. Insegnò prima a Pechino, poi si trasferì a Shanghai dove fondò l'Associazione di Tai Chi Chuan Stile Wu nel 1935. Diede allo stile la forma sistematica ancora oggi praticata.",
  },
  {
    generazione: "3ª generazione",
    nome: "Ma Yueh Liang · Wu Ying-hua",
    anni: "20° secolo",
    note: "Il genero e la figlia di Wu Jianquan guidarono l'Associazione di Shanghai per decenni. Tra i più importanti custodi e diffusori dello stile nel mondo.",
  },
  {
    generazione: "4ª generazione · Shanghai",
    nome: "Zhou Zhongfu · 周忠富",
    anni: "contemporaneo",
    note: "Allievo del Maestro Fei Guoqing, diretto discepolo di Ma Yueh Liang. Fondatore e Maestro caposcuola della Wu Taiji Jing Xiu Tang di Shanghai.",
  },
  {
    generazione: "Italia · dal 2011",
    nome: "Roberto Carretti",
    anni: "1978–oggi",
    note: "Unico rappresentante in Italia della Jing Xiu Tang per incarico diretto del M° Zhou Zhongfu. Pratica e insegna il Tai Chi Chuan stile Wu dal 1978.",
    highlight: true,
  },
];

// ─── Componente ──────────────────────────────────────────────────────────────
const StileWu = () => (
  <>
    <PageHeader
      eyebrow="Tai Chi Chuan · origini e storia"
      title="Lo stile Wu"
      intro="Tra i cinque grandi stili tradizionali del Tai Chi Chuan, lo stile Wu si distingue per la profondità delle posture, la compattezza dei movimenti e un lignaggio diretto e documentato fino a Shanghai."
      cn="吳"
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

    {/* ── Origini: testo ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Le origini del Tai Chi Chuan.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Il Tai Chi Chuan è un'arte marziale cinese che si è evoluta e
              affinata nel corso di secoli. La tradizione ne attribuisce la
              paternità a un monaco taoista,{" "}
              <strong className="text-foreground">Zhang Sanfeng</strong>, che
              osservando il combattimento tra una gazza e un serpente avrebbe
              codificato i movimenti circolari in una disciplina. Nel tempio
              taoista del Monte Wudang è ancora conservata una statua del monaco
              e un antico affresco che riproduce le fasi della creazione
              dell'arte.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              L'evoluzione storica documentata parte dalla{" "}
              <strong className="text-foreground">famiglia Chen</strong>, nel
              villaggio di Chenjiagou (provincia dello Henan), dove il Tai Chi
              Chuan fu custodito per generazioni come disciplina riservata.
              Soltanto in epoca relativamente recente l'insegnamento fu allargato
              a praticanti esterni alle famiglie.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nel corso dei secoli si sono codificati diversi stili, ciascuno
              portante il nome della famiglia che lo ha tramandato. Dal 1956 il
              Governo Cinese ha avviato la standardizzazione degli stili moderni
              (forma 24, forma 48, forma 42 combinata), con l'obiettivo di
              semplificarli e diffonderli. Gli stili tradizionali delle grandi
              famiglie, tuttavia, continuano a essere praticati e tramandati in
              forma integra nelle loro scuole di origine.
            </p>
          </div>
        </Reveal>

        {/* I cinque stili */}
        <Reveal delay={0.12}>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              I cinque stili tradizionali
            </p>
            <ul className="space-y-px bg-border">
              {stili.map((s) => (
                <li
                  key={s.nome}
                  className={`p-6 ${
                    s.highlight
                      ? "bg-foreground text-primary-foreground"
                      : "bg-background"
                  }`}
                >
                  <p
                    className={`font-display text-lg mb-1 ${
                      s.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {s.nome}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      s.highlight
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Lo stile Wu ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Caratteristiche tecniche
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-10">
            Cosa distingue lo stile Wu.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <Reveal>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Lo stile Wu fu ideato dal Maestro{" "}
                <strong className="text-foreground">Wu Jianquan</strong>, figlio
                di Quan You — allievo diretto di Yang Luchan. Wu Jianquan insegnò
                prima a Pechino e poi si trasferì a Shanghai, dove nel 1935 fondò
                l'Associazione di Tai Chi Chuan Stile Wu, ancora oggi attiva.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Rispetto agli altri stili, lo stile Wu si caratterizza per:
              </p>
              <ul className="text-foreground/80 space-y-2">
                <li>
                  <strong className="text-foreground">Posture inclinate</strong>{" "}
                  — il corpo inclina leggermente in avanti mantenendo un
                  allineamento preciso tra testa, busto e piede posteriore.
                </li>
                <li>
                  <strong className="text-foreground">Movimenti compatti</strong>{" "}
                  — minor ampiezza rispetto allo stile Yang, maggiore densità
                  interna e controllo del centro.
                </li>
                <li>
                  <strong className="text-foreground">Profondità marziale</strong>{" "}
                  — ogni movimento della forma lenta ha un'applicazione marziale
                  precisa e praticabile.
                </li>
                <li>
                  <strong className="text-foreground">
                    Sviluppo del Tui Shou
                  </strong>{" "}
                  — la spinta delle mani è parte integrante del curriculum, non
                  un'aggiunta opzionale.
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Alla morte di Wu Jianquan, l'Associazione fu guidata dalla
                figlia{" "}
                <strong className="text-foreground">Wu Ying-hua</strong> e dal
                genero{" "}
                <strong className="text-foreground">Ma Yueh Liang</strong>. Il
                rappresentante attuale a Shanghai è il Maestro Ma Hailong.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-foreground text-primary-foreground p-10 md:p-12">
              <p className="font-cn text-7xl text-accent mb-6 leading-none">吳</p>
              <p className="font-display text-2xl mb-2">Stile Wu</p>
              <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
                Wu Taijiquan · 吳式太極拳
              </p>
              <div className="space-y-4 text-sm text-primary-foreground/70 leading-relaxed">
                <p>
                  Fondato a Shanghai nel 1935 da Wu Jianquan come forma
                  sistematica e trasmissibile dell'arte.
                </p>
                <p>
                  Praticato in tutto il mondo, con centri storici a Shanghai,
                  Hong Kong e Canada (scuola Eddie Wu).
                </p>
                <p>
                  La scuola Tai Chi Wu Italia è l'unico centro italiano affiliato
                  alla <strong className="text-primary-foreground">Wu Taiji Jing Xiu Tang</strong> di
                  Shanghai.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Genealogia ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Trasmissione diretta
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            Il lignaggio della scuola.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            La trasmissione di uno stile tradizionale non è solo tecnica: è
            culturale e umana. Ogni Maestro ha ricevuto l'arte direttamente dal
            proprio insegnante, garantendo la continuità e l'integrità della
            trasmissione.
          </p>
        </Reveal>

        <div className="relative">
          {/* Linea verticale */}
          <div className="absolute left-[1.1rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          <ol className="space-y-0">
            {genealogia.map((g, i) => (
              <Reveal key={g.nome} delay={i * 0.07}>
                <li className="relative flex gap-8 pb-0">
                  {/* Nodo */}
                  <div
                    className={`relative z-10 shrink-0 w-9 h-9 flex items-center justify-center text-xs font-mono border ${
                      g.highlight
                        ? "bg-accent text-background border-accent"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>

                  {/* Contenuto */}
                  <div
                    className={`pb-10 flex-1 ${
                      g.highlight
                        ? "border-l-2 border-accent pl-8 -ml-8 md:border-l-0 md:pl-0 md:ml-0"
                        : ""
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                      {g.generazione} · {g.anni}
                    </p>
                    <p
                      className={`font-display text-2xl mb-2 ${
                        g.highlight ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {g.nome}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {g.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-5">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              Il percorso di ricerca del M° Carretti ha incluso la pratica con
              Pierluigi Vecchi (allievo del M° Eddie Wu in Canada) e
              successivamente con il M° Zhou Zhongfu a Shanghai, che nel 2011 gli
              ha affidato l'apertura in Italia della{" "}
              <strong className="text-foreground">Wu Taiji Jing Xiu Tang</strong>
              , affiliata alla Jingxiu Physical Culture Development di Shanghai.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Navigazione tra pagine ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
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
              to="/tai-chi/tai-chi-e-salute"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Continua con
                </p>
                <p className="font-display text-xl">Tai Chi e salute</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default StileWu;
