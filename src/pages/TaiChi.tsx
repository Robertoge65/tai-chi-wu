import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import students from "@/assets/students.jpg";

const TaiChi = () => (
  <>
    <PageHeader
      eyebrow="La pratica · 太極拳"
      title="Tai Chi Chuan, l'arte del cambiamento."
      intro="Una disciplina marziale interna nata in Cina secoli fa, oggi praticata in tutto il mondo come via di salute, meditazione in movimento e coltivazione di sé."
      cn="拳"
    />

    <section className="container-prose pb-20">
      <Reveal>
        <p className="text-lg leading-relaxed text-foreground/85 mb-8">
          Il <strong>Tai Chi Chuan</strong> (太極拳, "boxe del supremo polo") è un'arte
          marziale interna cinese che unisce in un unico gesto principi marziali, esercizio
          fisico, lavoro energetico e meditazione. Le sue forme — sequenze codificate di
          movimenti lenti e continui — coltivano <em>radicamento</em>, <em>fluidità</em> e
          <em> ascolto</em>.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-8">
          Praticato con costanza, sviluppa equilibrio, postura, respirazione profonda e una
          notevole stabilità emotiva. Non richiede particolare prestanza fisica: è una
          disciplina che si può iniziare a qualsiasi età.
        </p>
      </Reveal>
    </section>

    <section className="bg-secondary/40 py-24">
      <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <img
            src={students}
            alt="Praticanti durante una lezione di Tai Chi Chuan stile Wu"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover shadow-deep"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Lo stile Wu · 吳式</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Compatto, raccolto, profondamente interno.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Lo <strong className="text-foreground font-medium">stile Wu</strong> è uno dei
            cinque grandi stili tradizionali di Tai Chi Chuan. Si distingue per posizioni più
            raccolte, una caratteristica leggera inclinazione del busto e un lavoro
            particolarmente raffinato sull'asse, sull'ascolto e sull'energia interna.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            La nostra scuola insegna la trasmissione diretta del Maestro caposcuola
            <em> Zhou Zhongfu</em> di Shanghai, custodita dalla <em>Wu Taiji Jing Xiu Tang</em>.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-24">
      <div className="container-wide">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-2xl">
            Cosa imparerai.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {[
            ["Le forme tradizionali", "La forma lunga e la forma quadrata dello stile Wu, fondamento della pratica."],
            ["Il Tui Shou", "Lo studio a coppie del 'sospingere le mani': ascolto, sensibilità e applicazioni."],
            ["Il lavoro con le armi", "Sciabola, spada e bastone, secondo la tradizione della scuola."],
            ["Il Qi Gong propedeutico", "Esercizi di scioglimento, respirazione e raccoglimento dell'energia interna."],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="bg-background p-10 h-full">
                <h3 className="font-display text-2xl mb-3">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TaiChi;
