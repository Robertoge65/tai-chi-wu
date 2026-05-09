// src/lib/meta.ts
// ─────────────────────────────────────────────────────────────────────────────
// Meta tag unici per ogni pagina del sito.
// Vengono letti dal server.js in fase di SSR e iniettati nell'<head>.
// ─────────────────────────────────────────────────────────────────────────────

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const BASE_URL = "https://taichiwu.it";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`; // immagine OG di default

export const META: Record<string, PageMeta> = {

  // ── Home ──────────────────────────────────────────────────────────────────
  "/": {
    title: "Tai Chi Wu Italia — Scuola di Tai Chi Chuan stile Wu a Genova",
    description:
      "ASD Tai Chi Wu Italia: scuola di Tai Chi Chuan stile Wu e Qi Gong a Genova del Maestro Roberto Carretti. Unica rappresentante in Italia della Wu Taiji Jing Xiu Tang di Shanghai. Corsi in Via Caffaro 30.",
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_IMAGE,
  },

  // ── Tai Chi Chuan ─────────────────────────────────────────────────────────
  "/tai-chi": {
    title: "Tai Chi Chuan Stile Wu a Genova | Tai Chi Wu Italia ASD",
    description:
      "Cos'è il Tai Chi Chuan, le sue origini, lo stile Wu e i benefici per la salute. Arte marziale interna, meditazione in movimento e disciplina per il benessere: tre dimensioni di una sola pratica.",
    canonical: `${BASE_URL}/tai-chi`,
    ogTitle: "Il Tai Chi Chuan Stile Wu — Tai Chi Wu Italia",
    ogDescription:
      "Arte marziale interna, meditazione in movimento, disciplina per la salute. La scuola genovese del Maestro Roberto Carretti: unica rappresentante italiana della Jing Xiu Tang di Shanghai.",
    ogImage: DEFAULT_IMAGE,
  },

  "/tai-chi/stile-wu": {
    title: "Lo Stile Wu — Origini, Lignaggio e Caratteristiche | Tai Chi Wu Italia",
    description:
      "Lo stile Wu del Tai Chi Chuan: storia, origini da Wu Jianquan a Shanghai, caratteristiche tecniche e lignaggio diretto fino al Maestro Roberto Carretti. Unica scuola italiana affiliata alla Jing Xiu Tang.",
    canonical: `${BASE_URL}/tai-chi/stile-wu`,
    ogTitle: "Lo Stile Wu del Tai Chi Chuan — Origini e Lignaggio",
    ogDescription:
      "Dal fondatore Wu Jianquan a Shanghai fino a Genova: il lignaggio diretto dello stile Wu e le caratteristiche tecniche che lo distinguono dagli altri stili tradizionali.",
    ogImage: DEFAULT_IMAGE,
  },

  "/tai-chi/tai-chi-e-salute": {
    title: "Tai Chi Chuan e Salute — Benefici Scientifici | Tai Chi Wu Italia",
    description:
      "I benefici documentati del Tai Chi Chuan sulla salute: equilibrio, sistema cardiovascolare, riduzione dello stress, funzioni cognitive. Studi scientifici internazionali e Medicina Tradizionale Cinese.",
    canonical: `${BASE_URL}/tai-chi/tai-chi-e-salute`,
    ogTitle: "Tai Chi Chuan e Salute — Benefici Documentati",
    ogDescription:
      "Equilibrio, postura, stress, funzioni cognitive: i benefici del Tai Chi Chuan confermati dalla ricerca scientifica internazionale e dalla Medicina Tradizionale Cinese.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Le Forme ──────────────────────────────────────────────────────────────
  "/tai-chi/le-forme/forma-otto": {
    title: "Forma Otto — Prima Forma Tai Chi Stile Wu | Tai Chi Wu Italia",
    description:
      "La Forma Otto: prima forma di Tai Chi Chuan stile Wu insegnata nella scuola. Creata dal M° Roberto Carretti con la supervisione di Zhou Zhongfu per i Campionati Mondiali Online 2020. 12 posizioni.",
    canonical: `${BASE_URL}/tai-chi/le-forme/forma-otto`,
    ogTitle: "Forma Otto — Tai Chi Chuan Stile Wu",
    ogDescription:
      "La prima forma di Tai Chi Chuan stile Wu della scuola: 12 movimenti fondamentali creati dal M° Carretti con la supervisione del M° Zhou Zhongfu di Shanghai.",
    ogImage: DEFAULT_IMAGE,
  },

  "/tai-chi/le-forme/forma-breve": {
    title: "Forma Breve 30 — Tai Chi Chuan Stile Wu | Tai Chi Wu Italia",
    description:
      "La Forma Breve a 30 movimenti: cuore didattico della scuola Tai Chi Wu Italia. Sequenza autonoma e completa dello stile Wu, insegnata nel primo e secondo anno di pratica a Genova.",
    canonical: `${BASE_URL}/tai-chi/le-forme/forma-breve`,
    ogTitle: "Forma Breve 30 — Tai Chi Chuan Stile Wu",
    ogDescription:
      "Trenta movimenti della tradizione Wu: la forma di riferimento per il primo e secondo anno di pratica nella scuola del M° Roberto Carretti a Genova.",
    ogImage: DEFAULT_IMAGE,
  },

  "/tai-chi/le-forme/forma-lunga": {
    title: "Forma Lunga 89 — Tai Chi Chuan Stile Wu | Tai Chi Wu Italia",
    description:
      "La Forma Lunga a 89 movimenti di Wu Ying-hua: la forma tradizionale completa dello stile Wu in sei sezioni. Il percorso avanzato della scuola Tai Chi Wu Italia a Genova.",
    canonical: `${BASE_URL}/tai-chi/le-forme/forma-lunga`,
    ogTitle: "Forma Lunga 89 — Tai Chi Chuan Stile Wu Tradizionale",
    ogDescription:
      "89 movimenti in sei sezioni: la forma tradizionale completa dello stile Wu nella versione di Wu Ying-hua, figlia del fondatore Wu Jianquan.",
    ogImage: DEFAULT_IMAGE,
  },

  "/tai-chi/le-forme/forma-rapida": {
    title: "Forma Rapida Kuai Quan — Tai Chi Chuan Stile Wu | Tai Chi Wu Italia",
    description:
      "La Kuai Quan, forma rapida dello stile Wu: l'espressione marziale esplicita del Tai Chi Chuan. Seminario mensile avanzato per gli allievi iscritti alla scuola Tai Chi Wu Italia di Genova.",
    canonical: `${BASE_URL}/tai-chi/le-forme/forma-rapida`,
    ogTitle: "Forma Rapida Kuai Quan — Tai Chi Chuan Stile Wu",
    ogDescription:
      "I movimenti veloci rivelano le applicazioni marziali implicite nella forma lenta. Seminario mensile avanzato con Tui Shou e analisi delle tecniche.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Qi Gong ───────────────────────────────────────────────────────────────
  "/qi-gong": {
    title: "Qi Gong a Genova — Corsi e Pratica Energetica | Tai Chi Wu Italia",
    description:
      "Corsi di Qi Gong a Genova con la scuola Tai Chi Wu Italia ASD. Pratica energetica tradizionale cinese: movimenti, respirazione e consapevolezza per la salute. Aperto a tutti i livelli.",
    canonical: `${BASE_URL}/qi-gong`,
    ogTitle: "Qi Gong a Genova — Tai Chi Wu Italia ASD",
    ogDescription:
      "Pratica energetica millenaria per il benessere: corsi di Qi Gong aperti a tutti i livelli nella scuola del M° Roberto Carretti in Via Caffaro 30, Genova.",
    ogImage: DEFAULT_IMAGE,
  },

  "/qi-gong/ba-duan-jin": {
    title: "Ba Duan Jin — Otto Pezzi di Broccato | Qi Gong | Tai Chi Wu Italia",
    description:
      "Ba Duan Jin (八段錦): gli otto esercizi tradizionali di Qi Gong con descrizione completa, caratteri cinesi e riferimenti alla Medicina Tradizionale Cinese. Scuola Tai Chi Wu Italia, Genova.",
    canonical: `${BASE_URL}/qi-gong/ba-duan-jin`,
    ogTitle: "Ba Duan Jin — Otto Pezzi di Broccato",
    ogDescription:
      "Gli otto esercizi tradizionali di Qi Gong: ogni movimento, il suo nome in cinese e i suoi effetti secondo la Medicina Tradizionale Cinese.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Chi Siamo ─────────────────────────────────────────────────────────────
  "/chi-siamo": {
    title: "M° Roberto Carretti — Scuola Tai Chi Wu Italia | Genova",
    description:
      "Il Maestro Roberto Carretti: pratica il Tai Chi Chuan stile Wu dal 1978, laureato in Scienze Motorie, due medaglie d'oro ai Mondiali IWUF. Unico rappresentante in Italia della Jing Xiu Tang di Shanghai.",
    canonical: `${BASE_URL}/chi-siamo`,
    ogTitle: "M° Roberto Carretti — Tai Chi Wu Italia",
    ogDescription:
      "Oltre cinquant'anni di pratica, laurea in Scienze Motorie, medaglie mondiali, affiliazione diretta a Shanghai: la biografia del Maestro della scuola genovese.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Dove e Quando ─────────────────────────────────────────────────────────
  "/dove-e-quando": {
    title: "Orari e Sede — Via Caffaro 30 Genova | Tai Chi Wu Italia ASD",
    description:
      "Orari dei corsi di Tai Chi Chuan e Qi Gong 2025/2026 della scuola Tai Chi Wu Italia ASD. Sede in Via Caffaro 30, Genova. Corsi per principianti, intermedi e avanzati.",
    canonical: `${BASE_URL}/dove-e-quando`,
    ogTitle: "Orari e Sede — Tai Chi Wu Italia Genova",
    ogDescription:
      "Corsi di Tai Chi Chuan e Qi Gong in Via Caffaro 30 a Genova. Orari 2025/2026 per tutti i livelli.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Contatti ──────────────────────────────────────────────────────────────
  "/contatti": {
    title: "Contatti — Tai Chi Wu Italia ASD | Genova",
    description:
      "Contatta la scuola Tai Chi Wu Italia ASD: email, telefono e indirizzo in Via Caffaro 30, Genova. Per informazioni sui corsi di Tai Chi Chuan stile Wu e Qi Gong.",
    canonical: `${BASE_URL}/contatti`,
    ogTitle: "Contatti — Tai Chi Wu Italia ASD",
    ogDescription:
      "Scrivici per informazioni sui corsi di Tai Chi Chuan e Qi Gong a Genova. Sede in Via Caffaro 30.",
    ogImage: DEFAULT_IMAGE,
  },

  // ── Lista Attesa ──────────────────────────────────────────────────────────
  "/lista-attesa": {
    title: "Lista d'Attesa 2026/2027 — Tai Chi Wu Italia ASD",
    description:
      "Iscriviti alla lista d'attesa per i corsi di Tai Chi Chuan stile Wu 2026/2027 della scuola Tai Chi Wu Italia ASD di Genova. Le classi 2025/2026 sono al completo.",
    canonical: `${BASE_URL}/lista-attesa`,
    ogTitle: "Lista d'Attesa 2026/2027 — Tai Chi Wu Italia",
    ogDescription:
      "I corsi 2025/2026 sono al completo. Iscriviti alla lista d'attesa per l'anno 2026/2027.",
    ogImage: DEFAULT_IMAGE,
  },
};

// ─── Fallback per pagine non mappate ─────────────────────────────────────────
export const DEFAULT_META: PageMeta = {
  title: "Tai Chi Wu Italia — Scuola di Tai Chi Chuan stile Wu a Genova",
  description:
    "ASD Tai Chi Wu Italia: scuola di Tai Chi Chuan stile Wu e Qi Gong a Genova del Maestro Roberto Carretti. Corsi per tutti i livelli in Via Caffaro 30.",
  canonical: `${BASE_URL}/`,
  ogImage: DEFAULT_IMAGE,
};

// ─── Helper: genera i tag HTML da iniettare nell'<head> ──────────────────────
export function buildMetaTags(meta: PageMeta): string {
  const title = meta.title;
  const description = meta.description;
  const canonical = meta.canonical;
  const ogTitle = meta.ogTitle ?? meta.title;
  const ogDescription = meta.ogDescription ?? meta.description;
  const ogImage = meta.ogImage ?? DEFAULT_META.ogImage;

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="it_IT" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${ogDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
  `.trim();
}
