import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import qigong from "@/assets/qigong.jpg";

// ─── Benefici ─────────────────────────────────────────────────────────────────
const benefits = [
  ["Scioglie", "le tensioni accumulate dal corpo nella vita quotidiana."],
  ["Calma", "il sistema nervoso, riducendo stress e ansia."],
  ["Risveglia", "la circolazione del Qi, l'energia vitale interna."],
  ["Migliora", "respirazione, postura e qualità del sonno."],
  ["Coltiva", "presenza, ascolto e consapevolezza."],
  ["Prepara", "il corpo e la mente alla pratica del Tai Chi Chuan."],
];

// ─── Tipologie di pratica ─────────────────────────────────────────────────────
const tipologie = [
  {
    cn: "靜",
    titolo: "Qi Gong statico",
    testo:
      "Posture tenute nel tempo con attenzione al respiro e alla circolazione interna. Il corpo è fermo ma non passivo: l'energia si muove, i meridiani si aprono, la mente si raccoglie. È la forma più meditativa della pratica.",
  },
  {
    cn: "動",
    titolo: "Qi Gong dinamico",
    testo:
      "Sequenze di movimenti lenti e coordinati con il respiro. Il movimento esterno riflette e favorisce quello interno. Il Ba Duan Jin è l'esempio più noto: otto esercizi tradizionali accessibili a chiunque, di grande efficacia per la salute.",
  },
  {
    cn: "意",
    titolo: "Qi Gong della mente",
    testo:
      "La dimensione meditativa presente in ogni forma di Qi Gong. L'attenzione — Yi — guida il Qi: dove va la mente, va l'energia. Coltivare questa consapevolezza è l'obiettivo profondo di tutta la pratica.",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
const QiGong = () => (
  <>
    <PageHeader
      eyebrow="Pratica energetica · 氣功"
      title="Qi Gong, il lavoro con l'energia."
      intro="Esercizi dolci, antichi e meditativi per coltivare il respiro, sciogliere il corpo e armonizzare il flusso vitale interno. La porta d'ingresso a tutte le arti interne cinesi."
      cn="氣"
    />

    {/* ── Introduzione ── */}
    <section className="container-prose pb-12">
      <Reveal>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          Il termine <strong>Qi Gong</strong> (氣功) si traduce come{" "}
          <em>«lavoro sull'energia vitale»</em>: <em>qì</em> indica l'energia
          che pervade e anima ogni essere vivente, <em>gōng</em> indica la
          pratica costante e disciplinata. Insieme designano un vasto insieme
          di tecniche tradizionali cinesi che combinano{" "}
          <em>movimento</em>, <em>respirazione</em> e{" "}
          <em>attenzione mentale</em> per coltivare benessere, salute e
          consapevolezza.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          Nella scuola Tai Chi Wu Italia il Qi Gong è insegnato come pratica
          autonoma e come fondamento del Tai Chi Chuan: prima di muoversi nelle
          forme, si impara a stare, a respirare, ad ascoltare. È aperto a tutti
          i livelli e a qualsiasi condizione fisica.
        </p>
      </Reveal>
    </section>

    {/* ── Citazione immagine ── */}
    <section className="relative py-24 my-12 overflow-hidden">
      <img
        src={qigong}
        alt=""
        aria-hidden
        width={1280}
        height={896}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      <div className="container-prose relative">
        <Reveal>
          <p className="font-cn text-2xl text-accent mb-6">「靜中有動」</p>
          <p className="font-display text-3xl md:text-4xl leading-tight">
            "Nella quiete c'è movimento, nel movimento c'è quiete."
          </p>
        </Reveal>
      </div>
    </section>

    {/* ── Benefici ── */}
    <section className="container-wide py-20">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
          I benefici
        </p>
        <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">
          Cosa coltiva una pratica regolare.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {benefits.map(([verb, text], i) => (
          <Reveal key={verb} delay={i * 0.05}>
            <div className="bg-background p-10 h-full">
              <p className="font-display text-2xl text-accent mb-3">{verb}</p>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ── Qi e Medicina Tradizionale Cinese ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="bg-foreground text-primary-foreground p-10 md:p-14">
              <p className="font-cn text-7xl text-accent mb-6 leading-none">氣</p>
              <p className="font-display text-2xl mb-6 leading-snug">
                Il Qi — l'energia vitale — scorre attraverso il corpo lungo
                canali chiamati Meridiani.
              </p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                Secondo la Medicina Tradizionale Cinese, la salute è lo stato
                in cui il Qi fluisce liberamente e in equilibrio. La malattia,
                il dolore e il disagio psicofisico insorgono quando questo
                flusso si blocca, si impoverisce o si squilibra.
              </p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Il Qi Gong agisce direttamente su questo livello: attraverso
                la respirazione consapevole, il movimento e l'intenzione
                mentale, favorisce la circolazione del Qi nei Meridiani,
                scioglie i blocchi e riporta il sistema verso l'equilibrio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                Il Qi Gong nella Medicina Tradizionale Cinese
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
                Una delle cinque branche della MTC.
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  La Medicina Tradizionale Cinese si articola in cinque
                  discipline principali: agopuntura, fitoterapia, dietologia
                  cinese, massaggio (Tuina) e{" "}
                  <strong className="text-foreground">
                    ginnastica interna (Qi Gong)
                  </strong>
                  . Il Qi Gong è l'unica delle cinque che il paziente pratica
                  in prima persona — un atto di cura attiva, non passiva.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I Meridiani sono le vie di scorrimento del Qi nel corpo.
                  Dodici meridiani principali percorrono il corpo collegando
                  organi, visceri e superfici cutanee. Ogni pratica di Qi Gong
                  — nei movimenti, nella respirazione, nell'intenzione — lavora
                  su questi canali, favorendone la permeabilità e l'equilibrio.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Il M° Roberto Carretti approfondisce i temi della MTC e dei
                  Meridiani come parte integrante dell'insegnamento nella
                  scuola, riconoscendo nel contesto teorico della MTC la
                  cornice più coerente per comprendere gli effetti della
                  pratica sulla salute.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Tre tipologie ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Le forme della pratica
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Statico, dinamico, meditativo.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {tipologie.map((t, i) => (
            <Reveal key={t.titolo} delay={i * 0.08}>
              <div className="bg-background p-10 h-full flex flex-col">
                <p className="font-cn text-5xl text-accent mb-5 leading-none">
                  {t.cn}
                </p>
                <h3 className="font-display text-2xl mb-4">{t.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {t.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Ba Duan Jin hub ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                La sequenza praticata nella scuola
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Ba Duan Jin · 八段錦
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Gli <em>Otto Pezzi di Broccato</em> sono una delle sequenze di
                Qi Gong più antiche e diffuse al mondo. Otto esercizi in
                movimento, ciascuno associato a uno o più organi della MTC,
                che lavorano sull'intero sistema energetico del corpo in modo
                completo ed equilibrato.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Accessibili a qualsiasi età e condizione fisica, richiedono
                poco spazio e nessuna attrezzatura. Nella scuola vengono
                insegnati nell'ambito del corso di Qi Gong del martedì e
                approfonditi anche in relazione alla loro base teorica nella
                Medicina Tradizionale Cinese.
              </p>
              <Link
                to="/qi-gong/ba-duan-jin"
                className="inline-flex items-center gap-2 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all"
              >
                Scopri i Ba Duan Jin <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-foreground text-primary-foreground p-10 md:p-12">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-8">
                Gli otto esercizi
              </p>
              <ol className="space-y-px bg-primary-foreground/10">
                {[
                  "Sostenere il Cielo con le due mani",
                  "Tendere l'arco a sinistra e a destra",
                  "Separare Cielo e Terra",
                  "Guardare indietro per prevenire le malattie",
                  "Scuotere la testa e la coda per eliminare il fuoco del cuore",
                  "Le due mani tengono i piedi per rafforzare i reni",
                  "Colpire con i pugni e gli occhi spalancati",
                  "Alzarsi sulle punte per eliminare le malattie",
                ].map((esercizio, i) => (
                  <li
                    key={esercizio}
                    className="flex items-start gap-4 px-5 py-4 bg-foreground"
                  >
                    <span className="font-mono text-xs text-accent tracking-widest shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-primary-foreground/80 leading-snug">
                      {esercizio}
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                to="/qi-gong/ba-duan-jin"
                className="inline-flex items-center gap-2 mt-8 text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all text-sm"
              >
                Approfondisci <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Nota orari ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <div className="flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-6 max-w-3xl">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              Il corso di Qi Gong si svolge ogni martedì mattina ed è aperto a
              tutti i livelli, indipendentemente dalla pratica del Tai Chi
              Chuan. Per orari e informazioni consulta la pagina{" "}
              <Link
                to="/dove-e-quando"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                Dove e quando
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default QiGong;
