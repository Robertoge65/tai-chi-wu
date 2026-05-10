import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── Tabella Yin/Yang ─────────────────────────────────────────────────────────
const yinYang = [
  { yin: "Condensato", yang: "Espanso" },
  { yin: "Scuro", yang: "Chiaro" },
  { yin: "Femminile", yang: "Maschile" },
  { yin: "Freddo", yang: "Caldo" },
  { yin: "Umido", yang: "Secco" },
  { yin: "Riposo", yang: "Movimento" },
  { yin: "Chiuso", yang: "Aperto" },
  { yin: "Spirituale", yang: "Materiale" },
  { yin: "Trasformazione", yang: "Nutrimento" },
];

// ─── I tre tesori ─────────────────────────────────────────────────────────────
const treTesori = [
  {
    cn: "精",
    nome: "Jing",
    titolo: "L'Essenza",
    desc: "L'energia più densa e materiale. È l'energia primordiale ereditata dai genitori alla nascita (Jing prenatale) e quella acquisita attraverso il cibo, la respirazione e la pratica (Jing postnatale). È la base biologica della vita e si esaurisce naturalmente con l'età — ma la pratica può rallentarne il consumo.",
  },
  {
    cn: "氣",
    nome: "Qi",
    titolo: "L'Energia vitale",
    desc: "L'energia che permea e anima ogni essere vivente. Scorre attraverso i meridiani del corpo, nutre organi e tessuti, protegge dall'esterno, trasforma e trasporta. È il concetto centrale della MTC: la salute è l'equilibrio del Qi, la malattia è la sua disarmonia.",
  },
  {
    cn: "神",
    nome: "Shen",
    titolo: "Lo Spirito",
    desc: "L'energia più sottile e immateriale. Comprende la coscienza, la mente, le emozioni, la volontà e la lucidità mentale. Risiede nel Cuore. Quando lo Shen è nutrito e stabile, la persona è presente, serena e chiara. Il Tai Chi e il Qi Gong coltivano lo Shen attraverso la presenza e l'intenzione.",
  },
];

const QiEYinYang = () => (
  <>
    <PageHeader
      eyebrow="Medicina Tradizionale Cinese · fondamenti"
      title="Qi, Yin e Yang"
      intro="L'energia vitale che anima ogni essere vivente e la dualità complementare su cui si fonda l'intera visione della MTC. Capire questi concetti significa capire perché il Tai Chi Chuan funziona."
      cn="氣"
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

    {/* ── Il Qi ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Il Qi: l'energia che permea ogni cosa.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Il termine <strong className="text-foreground">Qi</strong> (氣) è
              uno dei concetti più fondamentali e più difficili da tradurre della
              cultura cinese. Lo si rende comunemente come{" "}
              <em>«energia vitale»</em> o <em>«forza vitale»</em>, ma nessuna
              traduzione è pienamente soddisfacente: il Qi non è solo l'energia
              del corpo biologico, è il principio animante che pervade ogni
              fenomeno — nell'essere umano, negli animali, nelle piante, nella
              natura, nell'universo.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nel corpo umano il Qi svolge funzioni precise: nutre e idrata i
              tessuti, trasforma il cibo in energia utilizzabile, protegge
              l'organismo dagli agenti patogeni esterni, regola la temperatura
              corporea, mantiene gli organi nella loro posizione e governa
              tutte le funzioni fisiologiche. È la differenza tra un corpo vivo
              e un corpo inerte.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Secondo la MTC il Qi scorre attraverso il corpo lungo canali
              chiamati{" "}
              <strong className="text-foreground">Meridiani</strong>. Quando
              questo scorrimento è libero, fluido e bilanciato, il corpo è in
              salute. Quando è ostacolato — da tensioni fisiche, emozioni
              croniche, stile di vita scorretto, traumi o agenti patogeni esterni
              — emergono le disarmonie che la medicina occidentale chiama
              malattie.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il Tai Chi Chuan e il Qi Gong agiscono direttamente su questo
              livello: attraverso il movimento, la respirazione e l'intenzione
              mentale (<em>Yi</em>), favoriscono la circolazione del Qi, sciolgono
              le stagnazioni e ristabiliscono l'equilibrio del sistema. Non è
              una metafora: è il meccanismo esplicativo con cui la MTC descrive
              ciò che la ricerca scientifica occidentale misura in termini di
              riduzione del cortisolo, miglioramento della variabilità della
              frequenza cardiaca e modulazione del sistema nervoso autonomo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-6 leading-none">氣</p>
            <p className="font-display text-xl mb-6 leading-snug">
              Il Qi non è un concetto mistico: è il modello con cui la MTC
              descrive la fisiologia vivente del corpo umano.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70 leading-relaxed">
              <p>
                <strong className="text-primary-foreground">Nutre</strong> —
                porta nutrimento a organi e tessuti.
              </p>
              <p>
                <strong className="text-primary-foreground">Trasforma</strong>{" "}
                — converte cibo e aria in energia utilizzabile.
              </p>
              <p>
                <strong className="text-primary-foreground">Protegge</strong>{" "}
                — difende dall'esterno (Wei Qi, il Qi difensivo).
              </p>
              <p>
                <strong className="text-primary-foreground">Sostiene</strong>{" "}
                — mantiene gli organi nella loro posizione.
              </p>
              <p>
                <strong className="text-primary-foreground">Scalda</strong> —
                regola la temperatura corporea.
              </p>
              <p>
                <strong className="text-primary-foreground">Governa</strong> —
                coordina tutte le funzioni fisiologiche.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── I Tre Tesori ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            San Bao · 三寶
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            I Tre Tesori.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            Il Qi non è l'unica forma di energia nella visione della MTC.
            Insieme allo Jing e allo Shen costituisce i{" "}
            <strong>San Bao</strong> — i Tre Tesori — le tre energie primordiali
            che sostengono l'esistenza umana a tre livelli distinti ma
            inseparabili.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {treTesori.map((t, i) => (
            <Reveal key={t.nome} delay={i * 0.08}>
              <div className="bg-background p-10 h-full flex flex-col">
                <p className="font-cn text-5xl text-accent mb-3 leading-none">
                  {t.cn}
                </p>
                <p className="font-display text-2xl mb-1">{t.nome}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
                  {t.titolo}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Yin e Yang ── */}
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                La dualità fondamentale
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Yin e Yang.
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  Yin (陰) e Yang (陽) sono le due forze complementari e
                  opposte che regolano ogni fenomeno nell'universo secondo la
                  filosofia cinese e il Taoismo. Non sono entità assolute ma
                  relative: nulla è puramente Yin o puramente Yang — ogni cosa
                  contiene il seme del suo opposto.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Fondamentale: non è il prevalere di una delle due forze
                  sull'altra che porta alla guarigione o alla malattia. È la
                  loro <strong className="text-foreground">armonia</strong> —
                  il loro equilibrio dinamico. La salute è equilibrio tra Yin e
                  Yang. La malattia è il segnale di una disarmonia.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Nel Tai Chi Chuan questo principio è incarnato nel movimento:
                  apertura e chiusura, avanzare e arretrare, pesante e leggero,
                  lento e veloce. Ogni gesto è una danza tra Yin e Yang, e
                  imparare a percepirla è uno degli obiettivi centrali della
                  pratica.
                </p>
                <p className="text-foreground/80 leading-relaxed italic text-sm">
                  «Il Tao che può essere detto non è l'eterno Tao. Il nome che
                  può essere nominato non è l'eterno nome.»
                </p>
                <p className="text-xs text-muted-foreground not-italic">
                  Laozi 老子 — Tao Te Ching, I capitolo
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div className="bg-foreground text-primary-foreground p-2 mb-px">
                <div className="grid grid-cols-2">
                  <div className="px-6 py-3 text-xs uppercase tracking-[0.3em] text-accent">
                    Yin · 陰
                  </div>
                  <div className="px-6 py-3 text-xs uppercase tracking-[0.3em] text-accent border-l border-primary-foreground/10">
                    Yang · 陽
                  </div>
                </div>
              </div>
              <div className="space-y-px bg-border">
                {yinYang.map((row, i) => (
                  <div
                    key={row.yin}
                    className={`grid grid-cols-2 ${
                      i % 2 === 0 ? "bg-background" : "bg-secondary/40"
                    }`}
                  >
                    <div className="px-6 py-4 text-sm text-foreground/80">
                      {row.yin}
                    </div>
                    <div className="px-6 py-4 text-sm text-foreground/80 border-l border-border">
                      {row.yang}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Le corrispondenze Yin/Yang sono relative, non assolute. Ogni
                fenomeno contiene entrambe le forze in proporzioni variabili.
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
              to="/medicina-tradizionale-cinese"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">
                  Medicina Tradizionale Cinese
                </p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/medicina-tradizionale-cinese/i-meridiani"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Continua con
                </p>
                <p className="font-display text-xl">I Meridiani</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default QiEYinYang;
