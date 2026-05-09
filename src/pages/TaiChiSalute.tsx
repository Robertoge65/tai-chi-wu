import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── Benefici documentati ────────────────────────────────────────────────────
const benefici = [
  {
    area: "Equilibrio e postura",
    cn: "衡",
    punti: [
      "Miglioramento del controllo del baricentro nella stazione eretta",
      "Riduzione del rischio di cadute, particolarmente significativa negli anziani",
      "Potenziamento della propriocezione e della percezione spazio-temporale",
      "Allineamento posturale e sostegno della colonna vertebrale con minimo sforzo muscolare",
    ],
  },
  {
    area: "Sistema cardiovascolare",
    cn: "心",
    punti: [
      "Modulazione della pressione sanguigna, con effetti documentati nell'ipertensione lieve",
      "Miglioramento della circolazione periferica",
      "Esercizio aerobico di intensità moderata, adatto a qualsiasi età e condizione",
      "Benefici sul profilo lipidico in pratiche prolungate",
    ],
  },
  {
    area: "Sistema nervoso e stress",
    cn: "神",
    punti: [
      "Riduzione dei livelli di cortisolo e delle sostanze neuro-ormonali associate allo stress cronico",
      "Calma del sistema neurovegetativo",
      "Miglioramento della qualità del sonno",
      "Effetto ansiolitico documentato in studi controllati",
    ],
  },
  {
    area: "Funzioni cognitive",
    cn: "智",
    punti: [
      "Stimolazione dei processi cognitivi attraverso l'apprendimento di sequenze complesse",
      "Miglioramento della memoria procedurale e spaziale",
      "Effetti protettivi sul declino cognitivo in età avanzata",
      "Aumento della capacità di concentrazione e attenzione sostenuta",
    ],
  },
];

// ─── Componente ──────────────────────────────────────────────────────────────
const TaiChiSalute = () => (
  <>
    <PageHeader
      eyebrow="Tai Chi Chuan · benefici per la salute"
      title="Tai Chi e salute"
      intro="La pratica del Tai Chi Chuan si è diffusa in tutto il mondo anche per i benefici documentati sulla salute. Benefici riconosciuti da secoli di pratica e oggi confermati da studi pubblicati sulle principali riviste scientifiche internazionali."
      cn="健"
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

    {/* ── Introduzione: il modello ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Salute come equilibrio.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Il concetto di salute secondo l'Organizzazione Mondiale della
              Sanità — inteso come{" "}
              <em>
                «stato di completo benessere fisico, psichico e sociale, non
                semplice assenza di malattia»
              </em>{" "}
              — coincide con la visione della Medicina Tradizionale Cinese (MTC)
              elaborata nel corso di millenni.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il modello della MTC non disgiunge mai la condizione di salute
              dallo stile di vita e dallo stato psico-emozionale, considerando
              l'essere umano come un'unità inscindibile di mente, corpo e
              spirito. La salute è mantenuta quando il{" "}
              <strong className="text-foreground">Qi</strong> — l'energia vitale
              — circola liberamente nei canali energetici chiamati{" "}
              <strong className="text-foreground">Meridiani</strong>.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il Tai Chi Chuan agisce su questo livello attraverso l'alternanza
              ritmica di tensioni e distensioni, la respirazione consapevole e
              la piena attenzione al movimento. Non è un esercizio fisico nel
              senso occidentale del termine: è una pratica integrata che coinvolge
              simultaneamente il corpo, il respiro e la mente.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              A differenza di molte altre discipline, il Tai Chi Chuan non
              disperde energia attraverso lo sforzo: la riequilibra attraverso
              la fluidità. È questo il motivo per cui è indicato a qualsiasi
              età e in qualsiasi condizione di salute — compresi i contesti
              clinici di riabilitazione.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-px bg-border">
            {/* Box OMS */}
            <div className="bg-foreground text-primary-foreground p-10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Riconoscimenti istituzionali
              </p>
              <p className="font-display text-xl leading-snug mb-6">
                L'OMS riconosce il Tai Chi Chuan come pratica di salute
                raccomandabile per la prevenzione e il mantenimento del
                benessere psicofisico.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Organizzazione Mondiale della Sanità · WHO
              </p>
            </div>
            {/* Box pratica integrativa */}
            <div className="bg-background p-10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Psiconeuroimmunoendocrinologia
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recenti studi di neuroscienze e biologia molecolare confermano
                le relazioni tra le varie funzioni organiche come un sistema
                integrato. Questi risultati convalidano le teorie che collegano
                tensioni muscolari, emozioni e ambiente — e l'efficacia di
                pratiche integrate come il Tai Chi Chuan nel riportare e
                mantenere l'equilibrio psicofisico.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Benefici per area ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Evidenze scientifiche
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            I benefici documentati.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            Studi presentati sulle principali riviste scientifiche mostrano
            evidenze positive riguardo al miglioramento e al conseguimento della
            salute attraverso la pratica regolare del Tai Chi Chuan.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {benefici.map((b, i) => (
            <Reveal key={b.area} delay={i * 0.08}>
              <div className="bg-background p-10 h-full">
                <div className="flex items-start gap-5 mb-6">
                  <p className="font-cn text-5xl text-accent leading-none shrink-0">
                    {b.cn}
                  </p>
                  <h3 className="font-display text-2xl pt-2">{b.area}</h3>
                </div>
                <ul className="space-y-3">
                  {b.punti.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Stile Wu e salute ── */}
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <Reveal>
            <div className="bg-foreground text-primary-foreground p-10 md:p-14">
              <p className="font-cn text-7xl text-accent mb-6 leading-none">吳</p>
              <p className="font-display text-2xl mb-4">
                Lo stile Wu per la salute.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Lo stile Wu è particolarmente indicato per il benessere fisico
                per le sue caratteristiche posturali: l'inclinazione del corpo,
                mantenuta con precisione, richiede un controllo del centro di
                gravità che si traduce in benefici profondi per l'equilibrio e
                la muscolatura profonda del tronco.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                I movimenti delicati e continui interessano l'intero corpo:
                continue rotazioni del tronco, flessioni ed estensioni degli
                arti inferiori, allineamenti posturali e coordinazione degli
                arti superiori si combinano in un esercizio globale che non
                richiede sforzo ma produce effetti profondi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
                Una pratica per ogni età.
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Il Tai Chi Chuan si adatta alle esigenze di ogni età e
                condizione:
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Per i <strong className="text-foreground">più giovani</strong>{" "}
                prevale l'aspetto della coordinazione motoria, del controllo
                dell'energia e dell'autocontrollo. La pratica educa alla
                presenza e alla precisione gestuale.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Per gli <strong className="text-foreground">adulti</strong>{" "}
                diventa uno strumento di gestione dello stress, di recupero
                della consapevolezza corporea e di riequilibrio psicofisico in
                una vita spesso frenetica.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Per gli{" "}
                <strong className="text-foreground">anziani</strong> è una delle
                poche discipline che associa benefici per l'equilibrio, la
                prevenzione delle cadute, il mantenimento cognitivo e il
                benessere emotivo, senza controindicazioni per la maggior parte
                delle condizioni di salute.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Il M° Roberto Carretti ha condotto seminari presso la Facoltà di
                Scienze Motorie di Genova, corsi per l'Uniauser e ha sviluppato
                un programma di attività motoria adattata per pazienti
                psichiatrici, confermando la versatilità clinica e sociale
                della disciplina.
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
              to="/tai-chi/stile-wu"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">Lo stile Wu</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/qi-gong"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Continua con
                </p>
                <p className="font-display text-xl">Il Qi Gong</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default TaiChiSalute;
