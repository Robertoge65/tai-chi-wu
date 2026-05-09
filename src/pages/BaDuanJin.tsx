import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

// ─── Gli otto esercizi con dettaglio MTC ──────────────────────────────────────
const esercizi = [
  {
    numero: "01",
    nome: "Sostenere il Cielo con le due mani",
    cn: "雙手托天理三焦",
    organo: "Triplice Riscaldatore",
    desc: "Le braccia si distendono verso l'alto alternando tensione ed estensione della colonna. Lavora sul Triplice Riscaldatore, regolatore della distribuzione del Qi e dei liquidi corporei, e favorisce l'allungamento di tutta la catena posteriore.",
  },
  {
    numero: "02",
    nome: "Tendere l'arco a sinistra e a destra",
    cn: "左右開弓似射鵰",
    organo: "Polmoni · Intestino Crasso",
    desc: "Il gesto imita il tendere un arco, aprendo il torace e stimolando la regione polmonare. Rafforza i muscoli delle spalle e del torace, favorisce la respirazione profonda e lavora sul meridiano del Polmone.",
  },
  {
    numero: "03",
    nome: "Separare Cielo e Terra",
    cn: "調理脾胃須單舉",
    organo: "Milza · Stomaco",
    desc: "Una mano spinge verso l'alto, l'altra verso il basso, creando una trazione opposta lungo i fianchi. Massaggia e stimola gli organi digestivi — Milza e Stomaco — e lavora sull'asse verticale del corpo.",
  },
  {
    numero: "04",
    nome: "Guardare indietro per prevenire le malattie",
    cn: "五勞七傷往後瞧",
    organo: "Cuore · Polmoni",
    desc: "La testa ruota lentamente verso sinistra e verso destra, mantenendo il corpo fermo. Lavora sulla cervicale, stimola la circolazione nella regione del collo e ha effetti benefici sul sistema nervoso autonomo.",
  },
  {
    numero: "05",
    nome: "Scuotere la testa e la coda per eliminare il fuoco del cuore",
    cn: "搖頭擺尾去心火",
    organo: "Cuore",
    desc: "Posizione a cavaliere con oscillazioni del tronco. È l'esercizio più impegnativo fisicamente: rafforza le gambe, mobilizza la colonna e favorisce la discesa del fuoco del Cuore verso i Reni, riequilibrando l'asse energetico verticale.",
  },
  {
    numero: "06",
    nome: "Le due mani tengono i piedi per rafforzare i reni",
    cn: "兩手攀足固腎腰",
    organo: "Reni · Vescica",
    desc: "Flessione in avanti con le mani che scorrono lungo le gambe fino ai piedi. Tonifica i Reni — organo fondamentale nella MTC, sede del Jing (essenza vitale) — e rinforza tutta la muscolatura lombare e posteriore.",
  },
  {
    numero: "07",
    nome: "Colpire con i pugni e gli occhi spalancati",
    cn: "攢拳怒目增氣力",
    organo: "Fegato",
    desc: "I pugni si estendono lateralmente con forza, mentre gli occhi si spalancano e si fissa lo sguardo. L'intensità del gesto muove e scioglie l'energia stagnante del Fegato, rafforza i tendini e aumenta la vitalità generale.",
  },
  {
    numero: "08",
    nome: "Alzarsi sulle punte per eliminare le malattie",
    cn: "背後七顛百病消",
    organo: "Sistema generale",
    desc: "Il tallone si alza e poi ricade a terra con un leggero impatto. La vibrazione si propaga lungo tutta la colonna vertebrale, stimola il midollo osseo e ha un effetto generale di riequilibrio su tutti i meridiani e gli organi.",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
const BaDuanJin = () => (
  <>
    <PageHeader
      eyebrow="Qi Gong · sequenza tradizionale"
      title="Ba Duan Jin · Otto Pezzi di Broccato"
      intro="Otto esercizi di Qi Gong in movimento tra i più antichi e diffusi al mondo. Accessibili a chiunque, completi nel loro effetto: ogni esercizio lavora su organi e meridiani specifici della Medicina Tradizionale Cinese."
      cn="八"
    />

    {/* Breadcrumb */}
    <div className="container-wide pb-2 -mt-6">
      <Link
        to="/qi-gong"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> Qi Gong
      </Link>
    </div>

    {/* ── Introduzione ── */}
    <section className="container-wide py-16 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Una sequenza millenaria, otto movimenti completi.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Il nome <em>Ba Duan Jin</em> (八段錦) significa letteralmente{" "}
              <em>«Otto Pezzi di Broccato»</em>: un'immagine che evoca qualcosa
              di prezioso, intrecciato con cura, le cui parti si completano a
              vicenda come i fili di un tessuto pregiato. Sono otto esercizi di
              Qi Gong in movimento, con origini documentate nella Cina della
              dinastia Song (960–1279 d.C.), anche se la tradizione orale ne
              situa le radici molto prima.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La loro caratteristica più importante è la{" "}
              <strong className="text-foreground">completezza</strong>: ciascuno
              dei otto esercizi è associato a uno o più organi e meridiani
              della Medicina Tradizionale Cinese. Praticati in sequenza,
              lavorano sull'intero sistema energetico del corpo in modo
              sistematico ed equilibrato.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Sono tra le pratiche di Qi Gong più studiate dalla ricerca
              scientifica occidentale: studi pubblicati su riviste
              internazionali ne documentano i benefici su equilibrio, pressione
              arteriosa, qualità del sonno, riduzione dell'ansia e funzioni
              cognitive negli anziani.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nella scuola Tai Chi Wu Italia vengono insegnati nell'ambito del
              corso di Qi Gong del martedì, con approfondimento della base
              teorica nella MTC. Il M° Roberto Carretti ha prodotto una serie
              di video didattici — disponibili sul canale YouTube della scuola
              — che illustrano ogni esercizio sia a livello meccanico che
              energetico.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-4 leading-none">錦</p>
            <p className="font-display text-2xl mb-1">Ba Duan Jin</p>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40 mb-8">
              Otto Pezzi di Broccato · 八段錦
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Esercizi</span>
                <span className="text-primary-foreground">8</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Tipo</span>
                <span className="text-primary-foreground">Qi Gong dinamico</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Origine</span>
                <span className="text-primary-foreground">Dinastia Song · X sec.</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                <span>Livello</span>
                <span className="text-primary-foreground">Tutti</span>
              </div>
              <div className="flex justify-between">
                <span>Spazio necessario</span>
                <span className="text-primary-foreground">Minimo</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60 mb-3">
                Video didattici completi disponibili sul canale YouTube della scuola.
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

    {/* ── Gli otto esercizi ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Sequenza completa
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Gli otto esercizi.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            Per ciascun esercizio: il nome tradizionale in cinese, l'organo o
            il meridiano di riferimento nella MTC e una descrizione del
            movimento e dei suoi effetti.
          </p>
        </Reveal>

        <div className="space-y-px bg-border">
          {esercizi.map((e, i) => (
            <Reveal key={e.numero} delay={i * 0.05}>
              <div className="bg-background grid md:grid-cols-[auto_1fr_auto] gap-0">
                {/* Numero */}
                <div className="flex items-start justify-center p-7 md:p-10 border-b md:border-b-0 md:border-r border-border">
                  <span className="font-mono text-xs text-accent tracking-widest">
                    {e.numero}
                  </span>
                </div>
                {/* Contenuto */}
                <div className="p-7 md:p-10">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="font-display text-xl">{e.nome}</h3>
                  </div>
                  <p className="font-cn text-sm text-accent mb-3">{e.cn}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {e.desc}
                  </p>
                </div>
                {/* Organo MTC */}
                <div className="flex items-start justify-end md:justify-start p-7 md:p-10 border-t md:border-t-0 md:border-l border-border">
                  <div className="text-right md:text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                      MTC
                    </p>
                    <p className="text-sm text-accent whitespace-nowrap">
                      {e.organo}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
              I Ba Duan Jin vengono insegnati nel corso di{" "}
              <strong className="text-foreground">Qi Gong del martedì</strong>,
              aperto a tutti i livelli. L'insegnamento include sia la sequenza
              completa che l'approfondimento teorico secondo i principi della
              Medicina Tradizionale Cinese. Per orari consulta la pagina{" "}
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

    {/* ── Navigazione ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/qi-gong"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Torna a
                </p>
                <p className="font-display text-xl">Il Qi Gong</p>
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
                  Approfondimento correlato
                </p>
                <p className="font-display text-xl">Tai Chi e salute</p>
              </div>
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default BaDuanJin;
