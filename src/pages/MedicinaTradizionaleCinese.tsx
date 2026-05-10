import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const sezioni = [
  {
    cn: "氣",
    titolo: "Qi, Yin e Yang",
    href: "/medicina-tradizionale-cinese/qi-e-yin-yang",
    desc: "L'energia vitale che anima ogni essere vivente, e la dualità complementare su cui si fonda l'intera visione della MTC. Il fondamento filosofico prima ancora che medico.",
  },
  {
    cn: "脉",
    titolo: "I Meridiani",
    href: "/medicina-tradizionale-cinese/i-meridiani",
    desc: "I dodici canali energetici principali e i meridiani straordinari: percorso, organo associato, classificazione Yin/Yang. Le vie attraverso cui scorre il Qi nel corpo.",
  },
  {
    cn: "術",
    titolo: "Le cinque branche",
    href: "/medicina-tradizionale-cinese/le-cinque-branche",
    desc: "Agopuntura, fitoterapia, dietologia, Tui Na e ginnastica interna. Come il Tai Chi Chuan e il Qi Gong si collocano nel sistema completo della Medicina Tradizionale Cinese.",
  },
];

const MedicinaTradizionaleCinese = () => (
  <>
    <PageHeader
      eyebrow="Approfondimento · 中醫"
      title="Medicina Tradizionale Cinese"
      intro="Oltre duemilacinquecento anni di pratiche sviluppate in Cina per prevenire e curare le malattie. Il sistema teorico dentro cui il Tai Chi Chuan e il Qi Gong trovano il loro significato più profondo."
      cn="醫"
    />

    {/* ── Introduzione ── */}
    <section className="container-wide pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl md:text-4xl not-italic mb-6">
              Una scienza millenaria, un sistema integrato.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              La Medicina Tradizionale Cinese è un sistema medico completo e
              autonomo, sviluppatosi in Cina nell'arco di oltre duemila anni.
              Non è una serie di tecniche isolate: è una visione organica
              dell'essere umano, della salute e della malattia, fondata su
              principi filosofici e su un'osservazione empirica straordinariamente
              raffinata.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Al centro di questo sistema c'è il concetto di{" "}
              <strong className="text-foreground">Qi</strong> — l'energia vitale
              che pervade e anima ogni essere vivente. La salute è lo stato in
              cui il Qi scorre liberamente e in equilibrio attraverso il corpo.
              La malattia — o, come la MTC preferisce definirla, la{" "}
              <em>disarmonia</em> — è il segnale di un blocco, di una carenza
              o di uno squilibrio in questo flusso.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Questa visione non è estranea alla scienza occidentale
              contemporanea: la{" "}
              <strong className="text-foreground">
                Psiconeuroimmunoendocrinologia
              </strong>{" "}
              — la disciplina che studia le relazioni tra sistema nervoso,
              sistema immunitario e sistema endocrino — ha confermato che mente,
              corpo ed emozioni formano un sistema integrato in cui ogni elemento
              influenza gli altri. Una visione che la MTC aveva formalizzato
              millenni prima.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Il Tai Chi Chuan e il Qi Gong sono due delle cinque branche della
              MTC — la branche della{" "}
              <strong className="text-foreground">ginnastica interna</strong>.
              Comprenderli nel loro contesto teorico significa accedere a un
              livello di pratica molto più profondo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-14 sticky top-24">
            <p className="font-cn text-7xl text-accent mb-6 leading-none">中醫</p>
            <p className="font-display text-2xl mb-6 leading-snug">
              «Semplificando, forse eccessivamente, è un insieme di pratiche
              volte a equilibrare il Qi, l'energia vitale che scorre dentro
              ciascun essere umano.»
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/40">
              Dal vecchio sito — testi del M° Roberto Carretti
            </p>
            <div className="mt-8 pt-6 border-t border-primary-foreground/20 space-y-2 text-sm text-primary-foreground/60">
              <p>Riconosciuta dall'OMS come sistema medico completo.</p>
              <p>Praticata da circa un quarto della popolazione mondiale.</p>
              <p>
                Studiata e integrata in molti sistemi sanitari nazionali
                europei.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Le tre sezioni ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Approfondimenti
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">
            Tre concetti fondamentali.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {sezioni.map((s, i) => (
            <Reveal key={s.titolo} delay={i * 0.08}>
              <Link
                to={s.href}
                className="group bg-background p-10 h-full flex flex-col hover:bg-accent/5 transition-colors"
              >
                <p className="font-cn text-5xl text-accent mb-5 leading-none">
                  {s.cn}
                </p>
                <h3 className="font-display text-2xl mb-4">{s.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm group-hover:gap-3 transition-all">
                  Approfondisci <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── MTC e pratica ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Il contesto della pratica
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-10">
            Perché la MTC è importante per chi pratica.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            {
              cn: "理",
              titolo: "Dà senso al movimento",
              testo:
                "Ogni postura del Tai Chi Chuan e ogni esercizio del Qi Gong ha una ragione energetica precisa: quale meridiano stimola, quale organo beneficia, quale squilibrio corregge. La MTC trasforma gesti in intenzioni.",
            },
            {
              cn: "深",
              titolo: "Approfondisce la pratica",
              testo:
                "Conoscere i meridiani e il concetto di Qi non è un optional teorico: orienta la qualità dell'attenzione durante la pratica, il che cambia profondamente l'efficacia e l'esperienza degli esercizi.",
            },
            {
              cn: "通",
              titolo: "Collega le discipline",
              testo:
                "Tai Chi, Qi Gong, Ba Duan Jin, Tui Shou: discipline apparentemente separate che nel sistema della MTC si rivelano facce di un'unica pratica, orientata allo stesso obiettivo — l'equilibrio del Qi.",
            },
          ].map((item, i) => (
            <Reveal key={item.titolo} delay={i * 0.07}>
              <div className="bg-background p-10 h-full flex flex-col">
                <p className="font-cn text-5xl text-accent mb-5 leading-none">
                  {item.cn}
                </p>
                <h3 className="font-display text-xl mb-3">{item.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {item.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Link correlati ── */}
    <section className="bg-secondary/40 py-16">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            Sezioni correlate
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {[
            {
              to: "/tai-chi/tai-chi-e-salute",
              label: "Tai Chi e salute",
              desc: "I benefici documentati dalla ricerca scientifica",
            },
            {
              to: "/qi-gong/ba-duan-jin",
              label: "Ba Duan Jin",
              desc: "Gli otto esercizi e i loro riferimenti nella MTC",
            },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 0.08}>
              <Link
                to={item.to}
                className="group bg-background p-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                    {item.desc}
                  </p>
                  <p className="font-display text-xl">{item.label}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default MedicinaTradizionaleCinese;
