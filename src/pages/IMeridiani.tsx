import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── I dodici meridiani principali ───────────────────────────────────────────
const meridiani = {
  yinBraccio: [
    { nome: "Polmone", cn: "肺", elemento: "Metallo", note: "Dal torace al pollice. Governa il Qi e la respirazione, regola i liquidi corporei." },
    { nome: "Cuore", cn: "心", elemento: "Fuoco", note: "Dal cuore al mignolo. Governa il sangue e i vasi, ospita lo Shen (la mente)." },
    { nome: "Ministro del Cuore · Pericardio", cn: "心包", elemento: "Fuoco", note: "Dal torace al medio. Protegge il Cuore, governa la circolazione e le emozioni." },
  ],
  yangBraccio: [
    { nome: "Intestino Crasso", cn: "大腸", elemento: "Metallo", note: "Dal indice alla narice. Governa la trasformazione e l'eliminazione." },
    { nome: "Intestino Tenue", cn: "小腸", elemento: "Fuoco", note: "Dal mignolo all'orecchio. Separa il puro dall'impuro." },
    { nome: "Triplice Riscaldatore", cn: "三焦", elemento: "Fuoco", note: "Dal anulare all'orecchio. Regola la distribuzione del Qi e dei liquidi nei tre livelli del corpo." },
  ],
  yinGamba: [
    { nome: "Milza · Pancreas", cn: "脾", elemento: "Terra", note: "Dal alluce al torace. Trasforma e trasporta i nutrienti, produce Qi e Sangue." },
    { nome: "Rene", cn: "腎", elemento: "Acqua", note: "Dalla pianta del piede al petto. Custodisce il Jing, governa crescita e sviluppo." },
    { nome: "Fegato", cn: "肝", elemento: "Legno", note: "Dal alluce alle costole. Assicura il libero fluire del Qi, governa i tendini e gli occhi." },
  ],
  yangGamba: [
    { nome: "Stomaco", cn: "胃", elemento: "Terra", note: "Dall'occhio al dito del piede. Riceve e decompone il cibo, fonte principale del Qi acquisito." },
    { nome: "Vescica", cn: "膀胱", elemento: "Acqua", note: "Dall'occhio al mignolo del piede. Il meridiano più lungo; governa il sistema nervoso autonomo." },
    { nome: "Cistifellea · Vescica Biliare", cn: "膽", elemento: "Legno", note: "Dall'occhio al quarto dito del piede. Governa la capacità decisionale e l'audacia." },
  ],
};

// ─── Meridiani straordinari ───────────────────────────────────────────────────
const straordinari = [
  {
    nome: "Du Mài · Vaso Governatore",
    cn: "督脈",
    desc: "Parte dal perineo e risale posteriormente lungo la colonna vertebrale, il cranio, la sommità della testa, terminando al centro del labbro superiore. È il «mare dei meridiani Yang»: governa tutto il Yang del corpo.",
  },
  {
    nome: "Rén Mài · Vaso Concezione",
    cn: "任脈",
    desc: "Parte anch'esso dal perineo ma risale frontalmente e centralmente fino a un punto sotto il labbro inferiore. È il «mare dei meridiani Yin»: governa tutto lo Yin del corpo e nutre l'utero e il feto.",
  },
];

const IMeridiani = () => (
  <>
    <PageHeader
      eyebrow="Medicina Tradizionale Cinese · canali energetici"
      title="I Meridiani"
      intro="I canali attraverso cui scorre il Qi nel corpo umano. Dodici meridiani principali, ciascuno associato a un organo, e otto meridiani straordinari. La mappa energetica su cui si fondano agopuntura, Qi Gong e Tai Chi Chuan."
      cn="脉"
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
              Le vie di scorrimento del Qi.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              I Meridiani (Mài: 脉) sono le strutture attraverso cui, secondo
              la Medicina Tradizionale Cinese, scorre il Qi — l'energia vitale
              interna. Lungo questi canali si trovano punti particolari la cui
              stimolazione permette di conseguire un riequilibrio energetico.
              Queste stimolazioni possono essere compiute con aghi (agopuntura),
              calore (moxa), massaggio (Tui Na) o — come nel nostro caso — con
              la pratica del Qi Gong e del Tai Chi Chuan.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I meridiani non sono riconducibili a strutture anatomiche della
              medicina occidentale, anche se spesso percorrono linee
              parzialmente coincidenti con vasi sanguigni, nervi o tendini.
              Sono strutture funzionali, non strutturali: descrivono relazioni
              energetiche e fisiologiche che la medicina cinese ha osservato e
              sistematizzato nell'arco di millenni.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I meridiani sono suddivisi in molte categorie. Le due principali
              sono i{" "}
              <strong className="text-foreground">
                Meridiani Principali
              </strong>{" "}
              (Jing Mài) — dodici, ciascuno associato a un organo — e i{" "}
              <strong className="text-foreground">
                Meridiani Straordinari
              </strong>{" "}
              (o Meridiani Curiosi) — otto, dei quali i più importanti sono il
              Du Mài e il Rén Mài.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-6 leading-none">經</p>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              I numeri dei meridiani
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              {[
                ["Meridiani Principali", "12"],
                ["Meridiani Straordinari", "8"],
                ["Meridiani Yin del braccio", "3"],
                ["Meridiani Yang del braccio", "3"],
                ["Meridiani Yin della gamba", "3"],
                ["Meridiani Yang della gamba", "3"],
                ["Punti di agopuntura classici", "361"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-primary-foreground/10 pb-3"
                >
                  <span>{label}</span>
                  <span className="text-accent font-mono">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── I dodici meridiani ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Jing Mài · 經脈
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            I dodici meridiani principali.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            Ogni meridiano è associato a un organo della MTC — che non sempre
            corrisponde all'organo omonimo della medicina occidentale. Sono
            classificati in Yin e Yang, e in meridiani del braccio e della
            gamba.
          </p>
        </Reveal>

        <div className="space-y-10">
          {[
            { label: "Meridiani Yin del braccio", data: meridiani.yinBraccio },
            { label: "Meridiani Yang del braccio", data: meridiani.yangBraccio },
            { label: "Meridiani Yin della gamba", data: meridiani.yinGamba },
            { label: "Meridiani Yang della gamba", data: meridiani.yangGamba },
          ].map((gruppo, gi) => (
            <Reveal key={gruppo.label} delay={gi * 0.06}>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-3 ml-1">
                  {gruppo.label}
                </p>
                <div className="grid sm:grid-cols-3 gap-px bg-border">
                  {gruppo.data.map((m) => (
                    <div key={m.nome} className="bg-background p-7">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-cn text-2xl text-accent leading-none">
                          {m.cn}
                        </span>
                        <span className="font-display text-lg">{m.nome}</span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                        Elemento: {m.elemento}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {m.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Meridiani straordinari ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Qí Jīng Bā Mài · 奇經八脈
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            I meridiani straordinari.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Degli otto meridiani straordinari, i due più importanti per la
            pratica del Tai Chi Chuan e del Qi Gong sono il Du Mài e il Rén
            Mài — i «mari» dello Yang e dello Yin. Insieme formano il{" "}
            <strong className="text-foreground">circuito Piccola Orbita Celeste</strong>,
            oggetto di pratiche meditative avanzate.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {straordinari.map((s, i) => (
            <Reveal key={s.nome} delay={i * 0.08}>
              <div className="bg-background p-10 h-full">
                <p className="font-cn text-4xl text-accent mb-4 leading-none">
                  {s.cn}
                </p>
                <h3 className="font-display text-2xl mb-4">{s.nome}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-4 flex gap-4 items-start text-sm text-muted-foreground bg-secondary/40 border border-border p-6">
            <span className="font-cn text-xl text-accent shrink-0 leading-none mt-0.5">
              注
            </span>
            <p>
              Nella pratica del Tai Chi Chuan stile Wu, la circolazione del Qi
              lungo il Du Mài e il Rén Mài è considerata uno degli obiettivi
              avanzati della pratica. La postura eretta con la colonna allungata
              — caratteristica dello stile Wu — favorisce la permeabilità di
              questi due canali centrali.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Meridiani e pratica ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Pratica e teoria
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-10">
            I meridiani nel Tai Chi e nel Qi Gong.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {[
            {
              titolo: "Ogni forma ha un effetto energetico",
              testo:
                "I movimenti del Tai Chi Chuan e gli esercizi del Qi Gong non sono casuali: ciascuno lavora su meridiani specifici. La rotazione del tronco stimola il meridiano della Vescica e del Rene; l'apertura del torace apre il meridiano del Polmone; le posture basse attivano Rene e Fegato. Conoscere queste relazioni trasforma la pratica.",
            },
            {
              titolo: "L'intenzione guida il Qi",
              testo:
                "Il principio fondamentale del Qi Gong è Yi Dao Qi Dao — «dove va la mente, va il Qi». L'attenzione portata consapevolmente su un meridiano o un organo durante la pratica non è una finzione: orienta la circolazione energetica e amplifica gli effetti dell'esercizio.",
            },
          ].map((item, i) => (
            <Reveal key={item.titolo} delay={i * 0.08}>
              <div className="bg-background p-10 h-full">
                <h3 className="font-display text-xl mb-4">{item.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Navigazione ── */}
    <section className="py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          <Reveal>
            <Link
              to="/medicina-tradizionale-cinese/qi-e-yin-yang"
              className="group bg-background p-8 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Precedente
                </p>
                <p className="font-display text-xl">Qi, Yin e Yang</p>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/medicina-tradizionale-cinese/le-cinque-branche"
              className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Continua con
                </p>
                <p className="font-display text-xl">Le cinque branche</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default IMeridiani;
