import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import roberto from "@/assets/roberto.jpg";
import rosa from "@/assets/Rosa.jpg";

// ─── Timeline completa ────────────────────────────────────────────────────────
const timeline = [
  ["1969", "Inizia la pratica delle arti marziali con il Jujitsu del M° T. Devoto, allievo del M° G. Bianchi, primo diffusore del Jujitsu in Italia."],
  ["1973", "Inizia la pratica del Taekwondo col M° B. Canale."],
  ["1975", "Inizia la pratica del Kendo col M° Mitsushi Yabe."],
  ["1976", "Consegue la cintura nera di Taekwondo. Vince i Campionati Regionali di Kendo."],
  ["1977", "Consegue la qualifica di Istruttore Tecnico di Taekwondo."],
  ["1978", "Inizia la pratica del Tai Chi Chuan stile Wu con P. Vecchi, allievo del M° Eddie Wu (4ª generazione)."],
  ["1979", "Partecipa alle selezioni per i Campionati Mondiali di Taekwondo a Stoccarda."],
  ["1980", "Consegue la qualifica di Arbitro di Taekwondo."],
  ["1983", "Consegue il Diploma di Laurea ISEF presso l'Istituto Superiore di Educazione Fisica. Tesi: «Proposta di un metodo per prevenire difetti posturali e conseguire un miglior equilibrio psicofisico. Il Tai Chi Chuan»."],
  ["1984", "Inizia la pratica del Karate col M° L. Parisi."],
  ["1986", "Consegue il Diploma di Specializzazione per Handicap Psicofisici presso la Scuola Magistrale Ortofrenica di Genova. Tesi: «Proposta di Intervento Psicomotorio»."],
  ["1988", "Inizia a insegnare Tai Chi Chuan stile Wu. Sceglie di dedicarsi esclusivamente alla pratica e all'approfondimento del Tai Chi Chuan e del Qi Gong."],
  ["1990", "Avvia l'attività di diffusione del Tai Chi attraverso lo studio della Medicina Tradizionale Cinese, dei Meridiani e del Qi Gong statico e dinamico."],
  ["1998", "Consegue il Diploma di Operatore Shiatsu al corso quadriennale presso CMT di Milano. Tesi sperimentale: «Progetto d'intervento Shiatsu su persone affette da Sclerosi Multipla», in collaborazione con AISM Regione Liguria."],
  ["2001", "Consegue il Diploma di Laurea Magistrale in Scienze Motorie (indirizzo attività motoria adattata per portatori di handicap e per la terza età) presso l'Università di Medicina e Chirurgia di Genova. Tesi in Medicina Fisica e Riabilitativa: «Massoterapia – lo Shiatsu: Teoria e osservazione di alcuni casi»."],
  ["2011", "Il M° Zhou Zhongfu di Shanghai gli affida l'apertura in Italia della Wu Taiji Jing Xiu Tang. La scuola diventa l'unica rappresentante italiana del lignaggio. Partecipazione al VII Seminario Internazionale Taiji Jing Xiu Tang Union."],
  ["2013", "Pubblica il libro sul Tai Chi Chuan stile Wu."],
  ["2015", "Organizza a Genova il Seminario Internazionale con il M° Zhou Zhongfu, M. Chan e D. Tsolakidis."],
  ["2016", "Ricopre l'incarico di Direttore Tecnico Nazionale FIWUK per lo Stile Wu. Conquista due medaglie d'oro ai Campionati Mondiali IWUF di Varsavia (mani nude e spada)."],
  ["2017", "Organizza alla Casa delle Federazioni del CONI di Genova la Conferenza Stampa «Il Tai Chi Chuan, disciplina cinese tra salute, sport e benessere», con il Prof. Ernesto Palummeri, il M° Zhou Zhongfu e il Presidente Regionale CONI Antonio Micillo. Organizza inoltre la Conferenza «Lo Stile Wu incontra lo Stile Chen» con il M° G. Franco Pace e il M° Zhou Zhongfu."],
  ["2020", "Crea la Forma Otto con la supervisione diretta del M° Zhou Zhongfu per il 1st European Special Online Wushu Championships."],
  ["2022", "La sede si trasferisce in Via Caffaro 30, nel cuore di Genova."],
  ["Oggi", "Continua a insegnare e trasmettere il Tai Chi Chuan stile Wu a Genova, come unica scuola italiana affiliata alla Wu Taiji Jing Xiu Tang di Shanghai."],
];

// ─── Componente ───────────────────────────────────────────────────────────────
const ChiSiamo = () => (
  <>
    <PageHeader
      eyebrow="La scuola"
      title="Una tradizione viva, custodita con cura."
      intro="L'ASD Tai Chi Wu Italia è una scuola dedicata alla diffusione autentica del Tai Chi Chuan stile Wu in Italia. Una pratica trasmessa di persona, passo dopo passo."
      cn="師"
    />

    {/* ── Il Maestro ── */}
    <section className="container-wide pb-20">
      <Reveal>
        <div className="flex items-center gap-6 mb-10">
          <img
            src={roberto}
            alt="Maestro Roberto Carretti"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shrink-0 shadow-sm"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-2">
              Fondatore e Maestro
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Roberto Carretti
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <Reveal>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-foreground/85 leading-relaxed">
              Roberto Carretti inizia il percorso nelle arti marziali nel{" "}
              <strong className="text-foreground">1969</strong>, esplorando
              Jujitsu, Taekwondo e Kendo — discipline in cui consegue qualifiche
              ufficiali e risultati agonistici di rilievo. Nel{" "}
              <strong className="text-foreground">1978</strong> incontra il Tai
              Chi Chuan stile Wu e, nel 1988, sceglie di dedicarsi
              esclusivamente alla sua pratica e al suo insegnamento.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Il suo percorso accademico affianca e approfondisce la pratica
              marziale: consegue il Diploma di Laurea{" "}
              <strong className="text-foreground">ISEF</strong> nel 1983 con una
              tesi sul Tai Chi Chuan come metodo di prevenzione posturale, il
              Diploma di Specializzazione per{" "}
              <strong className="text-foreground">Handicap Psicofisici</strong>{" "}
              nel 1986, il Diploma di Operatore{" "}
              <strong className="text-foreground">Shiatsu</strong> nel 1998 e la{" "}
              <strong className="text-foreground">
                Laurea Magistrale in Scienze Motorie
              </strong>{" "}
              nel 2001 presso l'Università di Medicina e Chirurgia di Genova,
              con indirizzo in attività motoria adattata.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Nel <strong className="text-foreground">2011</strong> il Maestro
              caposcuola{" "}
              <strong className="text-foreground">Zhou Zhongfu</strong> di
              Shanghai gli affida l'apertura in Italia della{" "}
              <em>Wu Taiji Jing Xiu Tang</em>, riconoscendo nella scuola
              genovese l'unica rappresentante italiana del lignaggio. Una
              responsabilità che porta con sé il dovere della trasmissione
              autentica e integra della tradizione.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Nel <strong className="text-foreground">2016</strong> ricopre
              l'incarico di Direttore Tecnico Nazionale FIWUK per lo Stile Wu e
              conquista{" "}
              <strong className="text-foreground">
                due medaglie d'oro ai Campionati Mondiali IWUF
              </strong>{" "}
              di Varsavia, nelle categorie mani nude e spada.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              La sua attività non si è limitata alla scuola: ha tenuto seminari
              presso la{" "}
              <strong className="text-foreground">
                Facoltà di Scienze Motorie di Genova
              </strong>
              , corsi per <strong className="text-foreground">Uniauser</strong>,
              un programma di attività motoria adattata per pazienti
              psichiatrici e — nel 2017 — due conferenze alla{" "}
              <strong className="text-foreground">
                Casa delle Federazioni del CONI
              </strong>{" "}
              con la partecipazione del M° Zhou Zhongfu e di rappresentanti
              istituzionali dello sport italiano.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              È autore di un{" "}
              <strong className="text-foreground">
                libro sul Tai Chi Chuan stile Wu
              </strong>{" "}
              (2013), testo di riferimento per gli allievi della scuola.
              Pratica e insegna il Tai Chi Chuan stile Wu da oltre quarant'anni.
            </p>
          </div>
        </Reveal>

        {/* Credenziali sintetiche */}
        <Reveal delay={0.12}>
          <div className="bg-foreground text-primary-foreground p-10 md:p-12 sticky top-24">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-8">
              Credenziali
            </p>
            <ul className="space-y-px bg-primary-foreground/10">
              {[
                ["1983", "Diploma di Laurea ISEF"],
                ["1986", "Specializzazione Handicap Psicofisici"],
                ["1998", "Operatore Shiatsu · CMT Milano"],
                ["2001", "Laurea Magistrale Scienze Motorie · UniGe"],
                ["2011", "Rappresentante Italia · Jing Xiu Tang Shanghai"],
                ["2013", "Autore — libro Tai Chi Chuan stile Wu"],
                ["2016", "Dir. Tecnico Nazionale FIWUK · Stile Wu"],
                ["2016", "2× Oro Campionati Mondiali IWUF · Varsavia"],
              ].map(([anno, desc]) => (
                <li
                  key={desc}
                  className="flex gap-5 items-baseline px-5 py-4 bg-foreground"
                >
                  <span className="font-mono text-xs text-accent tracking-widest shrink-0">
                    {anno}
                  </span>
                  <span className="text-sm text-primary-foreground/80 leading-snug">
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── L'Insegnante ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center gap-6 mb-10">
            <img
              src={rosa}
              alt="Insegnante Rosa Manghina"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shrink-0 shadow-sm"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-2">
                Insegnante
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Rosa Manghina
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          <Reveal>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-foreground/85 leading-relaxed">
                Allieva diretta del Maestro Carretti dal{" "}
                <strong className="text-foreground">1984</strong>, Rosa Manghina
                ha costruito nel tempo una pratica profonda e rigorosa del Tai
                Chi Chuan stile Wu e del Qi Gong. Ha consolidato la propria
                formazione recandosi a Shanghai presso la{" "}
                <em>Wu Taiji Jing Xiu Tang</em> del M° Zhou Zhongfu, dove ha
                conseguito il titolo ufficiale di Insegnante e l'abilitazione
                come{" "}
                <strong className="text-foreground">
                  Maestra di Ventaglio
                </strong>
                .
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Ha messo alla prova la sua abilità in competizioni internazionali
                di alto livello, conquistando{" "}
                <strong className="text-foreground">titoli mondiali</strong> che
                attestano la qualità e la profondità della sua pratica.
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Affianca la conduzione dei corsi di Tai Chi e Qi Gong ed è
                inoltre{" "}
                <strong className="text-foreground">
                  Counselor Professionista
                </strong>
                . All'interno della scuola integra la disciplina marziale con
                l'ascolto e la cura della persona, guidando laboratori di
                consapevolezza corporea che rendono la pratica uno strumento
                autentico di benessere.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-background border border-border p-10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Ruolo nella scuola
              </p>
              <ul className="space-y-4">
                {[
                  "Insegnante di Tai Chi Chuan stile Wu",
                  "Insegnante di Qi Gong",
                  "Maestra di Ventaglio · abilitazione Jing Xiu Tang",
                  "Counselor Professionista",
                  "Conduzione laboratori di consapevolezza corporea",
                ].map((ruolo) => (
                  <li
                    key={ruolo}
                    className="flex gap-3 text-sm text-muted-foreground leading-snug"
                  >
                    <span className="text-accent shrink-0 mt-0.5">—</span>
                    {ruolo}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Lignaggio ── */}
    <section className="py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Il lignaggio
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
            Wu Taiji Jing Xiu Tang · 吳氏太極精修堂
          </h2>
          <p className="text-lg leading-relaxed text-foreground/85 mb-4 max-w-3xl">
            Dal <strong className="text-foreground">2011</strong> la scuola
            entra a far parte della{" "}
            <a
              href="https://jingxiutang.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ink text-foreground"
            >
              Wu Taiji Jing Xiu Tang
            </a>{" "}
            del Maestro caposcuola{" "}
            <a
              href="https://jingxiutang.eu/master-zhou-zhongfu"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ink text-foreground"
            >
              Zhou Zhongfu
            </a>{" "}
            di Shanghai, come{" "}
            <strong className="text-foreground">
              unica rappresentante in Italia
            </strong>
            .
          </p>
          <p className="text-lg leading-relaxed text-foreground/85 max-w-3xl">
            Un'affiliazione che garantisce la continuità con la trasmissione
            tradizionale e un costante aggiornamento attraverso seminari,
            viaggi di studio e incontri internazionali. Il legame con Shanghai
            non è nominale: si traduce in visite dirette, supervisione delle
            forme e partecipazione alle attività della rete internazionale Jing
            Xiu Tang Union.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ── Timeline ── */}
    <section className="bg-secondary/40 py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Tappe
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-xl">
            Oltre cinquant'anni di cammino.
          </h2>
        </Reveal>

        <ol className="relative max-w-3xl">
          <div className="absolute left-[5.5rem] md:left-32 top-2 bottom-2 w-px bg-border" />
          {timeline.map(([year, text], i) => (
            <Reveal key={`${year}-${i}`} delay={Math.min(i * 0.04, 0.4)}>
              <li className="grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr] gap-6 md:gap-12 pb-10 last:pb-0 relative">
                <p className="text-sm tracking-widest md:text-right pt-1 relative">
                  <span className="font-display font-medium text-xl text-foreground block">
                    {year}
                  </span>
                </p>
                <div className="relative">
                  <span className="absolute -left-[2.05rem] md:-left-[2.55rem] top-2.5 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default ChiSiamo;
