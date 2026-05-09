// src/lib/schema.ts
// ─────────────────────────────────────────────────────────────────────────────
// Dati strutturati Schema.org in formato JSON-LD.
// Vengono iniettati nell'<head> dal server.js insieme ai meta tag.
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = "https://taichiwu.it";

// ─── LocalBusiness + SportsActivityLocation (home e pagine generali) ─────────
export const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  "name": "Tai Chi Wu Italia ASD",
  "alternateName": "Tai Chi Wu Italia",
  "description":
    "Scuola di Tai Chi Chuan stile Wu e Qi Gong a Genova. Maestro Roberto Carretti. Unica rappresentante in Italia della Wu Taiji Jing Xiu Tang di Shanghai.",
  "url": BASE_URL,
  "telephone": "",
  "email": "info@taichiwu.it",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Caffaro 30",
    "addressLocality": "Genova",
    "postalCode": "16124",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.4084,
    "longitude": 8.9332
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday"],
      "opens": "12:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday"],
      "opens": "18:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Thursday"],
      "opens": "12:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Thursday"],
      "opens": "18:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday"],
      "opens": "10:15",
      "closes": "11:15"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/TaiChiWuItalia",
    "https://www.youtube.com/@TaiChiWu",
    "https://jingxiutang.eu"
  ],
  "founder": {
    "@type": "Person",
    "name": "Roberto Carretti",
    "url": `${BASE_URL}/chi-siamo`
  },
  "currenciesAccepted": "EUR",
  "priceRange": "€€",
  "inLanguage": "it"
};

// ─── Person: Maestro Roberto Carretti ────────────────────────────────────────
export const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Roberto Carretti",
  "jobTitle": "Maestro di Tai Chi Chuan Stile Wu",
  "description":
    "Maestro di Tai Chi Chuan stile Wu e Qi Gong. Pratica dal 1978. Laureato in Scienze Motorie. Unico rappresentante in Italia della Wu Taiji Jing Xiu Tang di Shanghai dal 2011. Due medaglie d'oro ai Campionati Mondiali IWUF di Varsavia 2016.",
  "url": `${BASE_URL}/chi-siamo`,
  "worksFor": {
    "@type": "Organization",
    "name": "Tai Chi Wu Italia ASD",
    "url": BASE_URL
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "ISEF — Istituto Superiore di Educazione Fisica"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Università di Medicina e Chirurgia di Genova",
      "description": "Laurea Magistrale in Scienze Motorie"
    }
  ],
  "award": [
    "Medaglia d'oro Campionati Mondiali IWUF Varsavia 2016 — mani nude",
    "Medaglia d'oro Campionati Mondiali IWUF Varsavia 2016 — spada"
  ],
  "knowsAbout": [
    "Tai Chi Chuan",
    "Stile Wu",
    "Qi Gong",
    "Medicina Tradizionale Cinese",
    "Scienze Motorie",
    "Shiatsu"
  ],
  "sameAs": [
    "https://www.facebook.com/TaiChiWuItalia",
    "https://www.youtube.com/@TaiChiWu"
  ]
};

// ─── BreadcrumbList per pagine annidate ───────────────────────────────────────
export function schemaBreadcrumb(
  items: { name: string; url: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// ─── Mappa path → schema/e da iniettare ──────────────────────────────────────
// Ogni entry può avere uno o più oggetti schema (array).
export const SCHEMA_MAP: Record<string, object[]> = {
  "/": [schemaLocalBusiness],

  "/tai-chi": [
    schemaLocalBusiness,
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` }
    ])
  ],

  "/tai-chi/stile-wu": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Lo Stile Wu", url: `${BASE_URL}/tai-chi/stile-wu` }
    ])
  ],

  "/tai-chi/tai-chi-e-salute": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Tai Chi e Salute", url: `${BASE_URL}/tai-chi/tai-chi-e-salute` }
    ])
  ],

  "/tai-chi/le-forme/forma-otto": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Le Forme", url: `${BASE_URL}/tai-chi` },
      { name: "Forma Otto", url: `${BASE_URL}/tai-chi/le-forme/forma-otto` }
    ])
  ],

  "/tai-chi/le-forme/forma-breve": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Le Forme", url: `${BASE_URL}/tai-chi` },
      { name: "Forma Breve 30", url: `${BASE_URL}/tai-chi/le-forme/forma-breve` }
    ])
  ],

  "/tai-chi/le-forme/forma-lunga": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Le Forme", url: `${BASE_URL}/tai-chi` },
      { name: "Forma Lunga 89", url: `${BASE_URL}/tai-chi/le-forme/forma-lunga` }
    ])
  ],

  "/tai-chi/le-forme/forma-rapida": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Tai Chi Chuan", url: `${BASE_URL}/tai-chi` },
      { name: "Le Forme", url: `${BASE_URL}/tai-chi` },
      { name: "Forma Rapida Kuai Quan", url: `${BASE_URL}/tai-chi/le-forme/forma-rapida` }
    ])
  ],

  "/qi-gong": [
    schemaLocalBusiness,
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Qi Gong", url: `${BASE_URL}/qi-gong` }
    ])
  ],

  "/qi-gong/ba-duan-jin": [
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Qi Gong", url: `${BASE_URL}/qi-gong` },
      { name: "Ba Duan Jin", url: `${BASE_URL}/qi-gong/ba-duan-jin` }
    ])
  ],

  "/chi-siamo": [
    schemaPerson,
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Chi Siamo", url: `${BASE_URL}/chi-siamo` }
    ])
  ],

  "/dove-e-quando": [
    schemaLocalBusiness,
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Dove e Quando", url: `${BASE_URL}/dove-e-quando` }
    ])
  ],

  "/contatti": [
    schemaLocalBusiness,
    schemaBreadcrumb([
      { name: "Home", url: BASE_URL },
      { name: "Contatti", url: `${BASE_URL}/contatti` }
    ])
  ],
};

// ─── Helper: genera i tag <script> JSON-LD da iniettare ──────────────────────
export function buildSchemaScripts(path: string): string {
  const schemas = SCHEMA_MAP[path] ?? [schemaLocalBusiness];
  return schemas
    .map(
      (s) =>
        `<script type="application/ld+json">${JSON.stringify(s, null, 0)}</script>`
    )
    .join("\n");
}
