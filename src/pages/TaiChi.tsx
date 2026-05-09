import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

// ─── Dati: percorso delle forme ──────────────────────────────────────────────
const forme = [
  {
    cn: "八",
    nome: "Forma Otto",
    descrizione:
      "La porta d'ingresso alla pratica. Otto movimenti fondamentali per apprendere il radicamento, la postura e il ritmo dello stile Wu.",
    href: "/tai-chi/le-forme/forma-otto",
  },
  {
    cn: "三十",
    nome: "Forma Breve · 30",
    descrizione:
      "Il cuore didattico della scuola. Trenta movimenti che condensano i principi essenziali della forma tradizionale.",
    href: "/tai-chi/le-forme/forma-breve",
  },
  {
    cn: "百零八",
    nome: "Forma Lunga · 89–108",
    descrizione:
      "La forma tradizionale completa dello stile Wu. Un percorso di anni: equilibrio, fluidità e profondità marziale.",
    href: "/tai-chi/le-forme/forma-lunga",
  },
  {
    cn: "快",
    nome: "Forma Rapida · Kuai Quan",
    descrizione:
      "L'espressione marziale esplicita dello stile Wu. Movimenti veloci che rivelano le applicazioni combattive della forma lenta.",
    href: "/tai-chi/le-forme/forma-rapida",
  },
];

// ─── Dati: tre dimensioni della pratica ──────────────────────────────────────
const dimensioni = [
  {
    cn: "形",
    titolo: "Arte marziale interna",
    testo:
      "Il Tai Chi Chuan nasce come arte di combattimento. I movimenti lenti non sono una semplificazione: sono lo studio preciso del controllo, del centro di gravità e dell'energia interna. La lentezza è il metodo, non il fine.",
  },
  {
    cn: "氣",
    titolo: "Meditazione in movimento",
    testo:
      "La pratica sviluppa consapevolezza corporea e calma mentale. Ogni sequenza è un esercizio di presenza: il respiro si regola, la mente si acquieta, il corpo impara a muoversi senza tensione superflua.",
  },
  {
    cn: "健",
    titolo: "Disciplina per la salute",
    testo:
      "Studi pubblicati sulle principali riviste scientifiche confermano i benefici documentati da secoli di pratica: equilibrio, postura, riduzione dello stress, benefici cardiovascolari. Una disciplina adatta a ogni età e condizione fisica.",
  },
];

// ─── Componente principale ────────────────────────────────────────────────────
const TaiChi = () => (
  <>
    {/* ── Intestazione pagina ── */}
    <PageHeader
      eyebrow="Tai Chi Chuan · 太極拳"
      title="Il Tai Chi Chuan"
      intro="Un'arte marziale interna, una meditazione in movimento, una disciplina millenaria per il benessere. Tre aspetti di una sola pratica."
      cn="拳"
    />

    {/* ── Introduzione testuale ── */}
    <section className="container-wide pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              Il Tai Chi Chuan — traslitterato anche come <em>Taijiquan</em> — è
              un'antica pratica cinese che combina movimento fluido, respirazione
              consapevole e concentrazione mentale. È considerato al tempo stesso
              un'arte marziale interna e una forma di meditazione in movimento.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il termine si traduce approssimativamente come{" "}
              <em>«pugno del supremo ultimato»</em>. Sviluppato originariamente
              come sistema di combattimento, nel corso dei secoli si è evoluto in
              una disciplina globale per la salute fisica, l'equilibrio psichico
              e la crescita interiore.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La sua caratteristica fondante è la lentezza: i movimenti sono
              continui, fluidi, privi di interruzioni. Questa lentezza non è
              semplicità — è il metodo con cui il praticante impara a percepire
              il proprio baricentro, a coordinare respiro e gesto, a sciogliere
              le tensioni croniche e a sviluppare una forza che non dipende dalla
              contrazione muscolare ma dall'allineamento strutturale e dalla
              fluidità energetica.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              A differenza di molte altre discipline, il Tai Chi Chuan non
              disperde energia: la riequilibra. Per questo è una pratica
              realmente adatta a tutte le età e a qualsiasi condizione di salute.
            </p>
          </div>
        </Reveal>

        {/* Citazione laterale */}
        <Reveal delay={0.15}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-14 sticky top-24">
            <p className="font-cn text-6xl text-accent mb-6 leading-none">太極</p>
            <blockquote className="font-display text-2xl leading-snug mb-6">
              «Vincere la durezza con la morbidezza. Cedere per superare.»
            </blockquote>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/50">
              Principio fondante del Tai Chi Chuan
            </p>
            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                Vuoi approfondire i benefici sulla salute documentati dalla
                ricerca scientifica?
              </p>
              <Link
                to="/tai-chi/tai-chi-e-salute"
                className="inline-flex items-center gap-2 mt-3 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all text-sm"
              >
                Tai Chi e salute <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Tre dimensioni ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Una pratica, tre dimensioni
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Perché si pratica il Tai Chi Chuan.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {dimensioni.map((d, i) => (
            <Reveal key={d.titolo} delay={i * 0.08}>
              <div className="bg-background p-10 h-full flex flex-col">
                <p className="font-cn text-5xl text-accent mb-6 leading-none">{d.cn}</p>
                <h3 className="font-display text-2xl mb-4">{d.titolo}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mt-auto">
                  {d.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Stile Wu: blocco di presentazione ── */}
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Lo stile praticato dalla scuola
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Lo stile Wu.
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Tra i cinque grandi stili tradizionali del Tai Chi Chuan, lo stile
                Wu si distingue per le sue posture inclinate e i movimenti
                particolarmente compatti e profondi. Fu codificato dal Maestro{" "}
                <strong className="text-foreground">Wu Jianquan</strong>, che insegnò
                prima a Pechino e poi a Shanghai, dove fondò l'Associazione di Tai
                Chi Chuan stile Wu.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                La scuola Tai Chi Wu Italia ASD è l'unica rappresentante in Italia
                della{" "}
                <strong className="text-foreground">
                  Wu Taiji Jing Xiu Tang
                </strong>{" "}
                di Shanghai, diretta dal Maestro caposcuola{" "}
                <strong className="text-foreground">Zhou Zhongfu</strong> (4ª
                generazione), erede diretto della linea Wu Jianquan.
              </p>
              <Link
                to="/tai-chi/stile-wu"
                className="inline-flex items-center gap-2 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all"
              >
                Origini e genealogia dello stile Wu{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Lignaggio grafico */}
            <div className="bg-foreground text-primary-foreground p-10 md:p-14">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-8">
                Lignaggio diretto · 4ª generazione
              </p>
              <ol className="space-y-0">
                {[
                  { cn: "楊", nome: "Yang Luchan", ruolo: "fondatore dell'arte moderna" },
                  { cn: "全佑", nome: "Quan You", ruolo: "allievo di Yang Luchan" },
                  {
                    cn: "鑑泉",
                    nome: "Wu Jianquan",
                    ruolo: "fondatore dello stile Wu · Shanghai",
                  },
                  {
                    cn: "馬",
                    nome: "Ma Yueh Liang · Wu Ying-hua",
                    ruolo: "presidenti Associazione Wu · Shanghai",
                  },
                  {
                    cn: "周",
                    nome: "Zhou Zhongfu",
                    ruolo: "Maestro caposcuola · Jing Xiu Tang · Shanghai",
                  },
                  {
                    cn: "卡",
                    nome: "Roberto Carretti",
                    ruolo: "unico rappresentante in Italia dal 2011",
                    highlight: true,
                  },
                ].map((item, i) => (
                  <li key={item.nome} className="flex items-start gap-5">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-9 h-9 flex items-center justify-center font-cn text-sm ${
                          item.highlight
                            ? "bg-accent text-background"
                            : "bg-primary-foreground/10 text-accent"
                        }`}
                      >
                        {item.cn}
                      </div>
                      {i < 5 && (
                        <div className="w-px h-6 bg-primary-foreground/20" />
                      )}
                    </div>
                    <div className="pt-1.5 pb-6">
                      <p
                        className={`font-display text-lg leading-tight ${
                          item.highlight ? "text-accent" : "text-primary-foreground"
                        }`}
                      >
                        {item.nome}
                      </p>
                      <p className="text-xs text-primary-foreground/50 mt-0.5">
                        {item.ruolo}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Le Forme: griglia hub ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Il percorso didattico
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            Le forme dello stile Wu.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            La pratica si sviluppa attraverso sequenze tradizionali di complessità
            crescente. Ogni forma è un livello di approfondimento, non una
            sostituzione della precedente.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {forme.map((f, i) => (
            <Reveal key={f.nome} delay={i * 0.07}>
              <Link
                to={f.href}
                className="group bg-background p-10 h-full flex flex-col hover:bg-accent/5 transition-colors"
              >
                <p className="font-cn text-5xl text-accent mb-5 leading-none">
                  {f.cn}
                </p>
                <h3 className="font-display text-2xl mb-3">{f.nome}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {f.descrizione}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-accent text-sm group-hover:gap-3 transition-all">
                  Approfondisci <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA finale ── */}
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/tai-chi/tai-chi-e-salute"
              className="group bg-background p-10 flex flex-col hover:bg-accent/5 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Approfondimento
              </p>
              <h3 className="font-display text-3xl mb-3">
                Tai Chi Chuan e salute.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                I benefici documentati dalla ricerca scientifica internazionale:
                equilibrio, postura, riduzione dello stress, sistema
                cardiovascolare, funzioni cognitive.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-accent text-sm group-hover:gap-3 transition-all">
                Leggi l'approfondimento <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/chi-siamo"
              className="group bg-foreground text-primary-foreground p-10 flex flex-col hover:opacity-95 transition-opacity"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                La scuola
              </p>
              <h3 className="font-display text-3xl mb-3">
                Il Maestro e la scuola.
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Roberto Carretti pratica e insegna il Tai Chi Chuan stile Wu dal
                1978. Un percorso di oltre quarant'anni, un lignaggio diretto da
                Shanghai, una scuola riconosciuta a livello internazionale.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-accent text-sm group-hover:gap-3 transition-all">
                Conosci la scuola <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default TaiChi;
