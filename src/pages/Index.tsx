import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Facebook, MapPin, Sparkles, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/carretti-volo-blu.webp";
import qigong from "@/assets/qigong.jpg";
import students from "@/assets/students.jpg";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Maestro di Tai Chi Chuan stile Wu in posizione fluida all'alba"
            fetchpriority="high" // Dice al browser di scaricarla immediatamente
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/0 md:via-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        {/* Vertical CN accent */}
        <div className="hidden md:block absolute right-10 top-32 vertical-cn text-foreground/40 text-sm">
          太極拳 · 吳式
        </div>

        <div className="container-wide relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-accent mb-8"
            >
              Scuola di Tai Chi Chuan · stile Wu
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight"
            >
              Il movimento <em className="not-italic text-accent">lento</em>
              <br />
              che cambia <span className="brush-underline">tutto</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Da oltre quarant'anni il Maestro Roberto Carretti insegna l'antica arte
              del Tai Chi Chuan stile Wu a Genova. Equilibrio, respiro, presenza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/dove-e-quando"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-accent transition-colors duration-500 ease-flow group"
              >
                Orari & sede
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tai-chi"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm tracking-wide border border-foreground/30 hover:border-foreground transition-colors"
              >
                Scopri la pratica
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-foreground/40">
          <span className="text-[0.65rem] uppercase tracking-[0.4em]">scorri</span>
          <div className="h-12 w-px bg-foreground/30 animate-pulse" />
        </div>
      </section>

      {/* INTRO QUOTE */}
      <section className="py-32 paper-texture">
        <div className="container-prose text-center">
          <Reveal>
            <p className="font-cn text-2xl text-accent mb-8">「以柔克剛」</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-5xl leading-[1.25] text-foreground/90">
              "Vincere la durezza con la morbidezza."
              <br />
              Un'arte antica per una vita moderna.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="divider-ink mt-16 max-w-xs mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 bg-secondary/40">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">La pratica</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Tre vie per una sola armonia.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                cn: "形",
                title: "La forma",
                text: "Sequenze tradizionali dello stile Wu, lente e precise, per coltivare radicamento e fluidità.",
              },
              {
                cn: "氣",
                title: "Il respiro",
                text: "Il Qi Gong come fondamento: respirare, ascoltare, lasciar fluire l'energia interna.",
              },
              {
                cn: "心",
                title: "La mente",
                text: "Una pratica meditativa in movimento: presenza, calma, consapevolezza nel quotidiano.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="bg-background h-full p-10 md:p-12 hover:bg-card transition-colors duration-500 group">
                  <p className="font-cn text-6xl text-accent/80 mb-8 group-hover:text-accent transition-colors">
                    {p.cn}
                  </p>
                  <h3 className="font-display text-3xl mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAESTRO SECTION */}
      <section className="py-32">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={students}
                alt="Studenti praticano Tai Chi Chuan in unisono nella sala scuola"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover shadow-deep"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 shadow-deep">
                <p className="font-cn text-3xl leading-none">吳</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Il Maestro</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Roberto Carretti, una vita di pratica.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pratica e insegna il Tai Chi Chuan stile Wu dal <strong className="text-foreground font-medium">1978</strong>.
              Dal 2011 la sua scuola è l'unica rappresentante in Italia della prestigiosa
              <em> Wu Taiji Jing Xiu Tang</em> del Maestro caposcuola Zhou Zhongfu di Shanghai.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Un lignaggio diretto, custodito con rigore e trasmesso con generosità a chi
              desidera intraprendere questo cammino.
            </p>
            <Link to="/chi-siamo" className="inline-flex items-center gap-2 text-foreground link-ink">
              <Sparkles className="h-4 w-4 text-accent" />
              Conosci il Maestro e la scuola
            </Link>
          </Reveal>
        </div>
      </section>

      {/* QI GONG band */}
      <section className="relative py-32 overflow-hidden bg-foreground text-primary-foreground">
        <img
          src={qigong}
          alt=""
          aria-hidden
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
        <div className="container-wide relative grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Qi Gong · 氣功</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Prima della forma, il respiro.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:pt-8">
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Il Qi Gong è la radice del Tai Chi: una serie di esercizi dolci che
              sciolgono il corpo, calmano la mente e risvegliano il flusso vitale.
              Adatto a tutte le età, è la porta d'ingresso ideale alla nostra pratica.
            </p>
            <Link
              to="/qi-gong"
              className="inline-flex items-center gap-2 border-b border-accent pb-1 text-accent hover:gap-4 transition-all"
            >
              Scopri il Qi Gong <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 paper-texture">
        <div className="container-prose text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Inizia il cammino</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              Ti aspettiamo in <span className="text-accent">Via Caffaro 30</span>, Genova.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              I corsi 2025/2026 sono al completo. Per l'anno 2026/2027 puoi iscriverti alla lista d'attesa.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/dove-e-quando"
                className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-7 py-4 hover:bg-accent transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Vedi orari
              </Link>
              <Link
                to="/lista-attesa"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/30 hover:border-foreground transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Lista d'attesa 2026/2027
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16 pt-10 border-t border-border/60">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-5">Seguici</p>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://www.facebook.com/TaiChiWuItalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Facebook className="h-4 w-4" /> /TaiChiWuItalia
                </a>
                <span className="text-foreground/20">·</span>
                <a
                  href="https://www.youtube.com/@TaiChiWu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Youtube className="h-4 w-4" /> @TaiChiWu
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
