import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import qigong from "@/assets/qigong.jpg";

const benefits = [
  ["Scioglie", "le tensioni accumulate dal corpo nella vita quotidiana."],
  ["Calma", "il sistema nervoso, riducendo stress e ansia."],
  ["Risveglia", "la circolazione del Qi, l'energia vitale interna."],
  ["Migliora", "respirazione, postura e qualità del sonno."],
  ["Coltiva", "presenza, ascolto e consapevolezza."],
  ["Prepara", "il corpo e la mente alla pratica del Tai Chi Chuan."],
];

const QiGong = () => (
  <>
    <PageHeader
      eyebrow="Pratica energetica · 氣功"
      title="Qi Gong, il lavoro con l'energia."
      intro="Esercizi dolci, antichi e meditativi per coltivare il respiro, sciogliere il corpo e armonizzare il flusso vitale interno. La porta d'ingresso a tutte le arti interne cinesi."
      cn="氣"
    />

    <section className="container-prose pb-12">
      <Reveal>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          Il termine <strong>Qi Gong</strong> (氣功) si traduce come "lavoro" o "pratica"
          (gōng) sull'<em>energia vitale</em> (qì). Indica un vasto insieme di tecniche
          tradizionali cinesi che combinano <em>movimento</em>, <em>respirazione</em> e
          <em> attenzione mentale</em> per coltivare benessere, salute e consapevolezza.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          Nella nostra scuola il Qi Gong è insegnato come pratica autonoma e come
          fondamento del Tai Chi Chuan: prima di muoversi nelle forme, si impara a stare,
          a respirare, ad ascoltare.
        </p>
      </Reveal>
    </section>

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

    <section className="container-wide py-20">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">I benefici</p>
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
  </>
);

export default QiGong;
