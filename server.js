import fs from 'fs/promises';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

// ─── Import meta e schema (ESM) ───────────────────────────────────────────────
// NOTA: questi file .ts vengono importati tramite Vite in sviluppo
// e come .js compilati in produzione (dist/server/).
// In sviluppo usiamo vite.ssrLoadModule; in produzione l'import diretto funziona
// perché il build genera i file JS corrispondenti.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV !== 'development';
const app = express();
const PORT = process.env.PORT || 3000;
const base = process.env.BASE || '/';

app.use(express.json());

// ─── Endpoint lista d'attesa ──────────────────────────────────────────────────
app.post('/api/lista-attesa', async (req, res) => {
  const { nome, cognome, email, telefono, dataNascita, messaggio } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtps.aruba.it',
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'taichi@taichiwu.it',
        pass: process.env.SMTP_PASS || 'TuaPasswordHostinger123!',
      },
    });

    const mailOptions = {
      from: `"Sito Tai Chi Wu" <${process.env.SMTP_USER || 'taichi@taichiwu.it'}>`,
      to: process.env.SMTP_USER || 'taichi@taichiwu.it',
      replyTo: email,
      subject: `Nuova iscrizione in lista d'attesa: ${nome} ${cognome}`,
      text: `Hai ricevuto una nuova richiesta per la lista d'attesa.\n\nNome: ${nome}\nCognome: ${cognome}\nEmail: ${email}\nTelefono: ${telefono}\nData di nascita: ${dataNascita}\n\nMessaggio:\n${messaggio}`,
      html: `<p>Hai ricevuto una nuova richiesta per la lista d'attesa.</p><ul><li><strong>Nome:</strong> ${nome}</li><li><strong>Cognome:</strong> ${cognome}</li><li><strong>Email:</strong> ${email}</li><li><strong>Telefono:</strong> ${telefono}</li><li><strong>Data di nascita:</strong> ${dataNascita}</li></ul><p><strong>Messaggio:</strong><br/>${messaggio}</p>`
    };

    await transporter.sendMail(mailOptions);
    console.log("Iscrizione inviata con successo per:", email);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    res.status(500).json({ success: false, error: "Errore interno del server" });
  }
});

// ─── Configurazione SSR ───────────────────────────────────────────────────────
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  });
  app.use(vite.middlewares);
} else {
  app.use(base, express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
}

// ─── Helper: estrae il path pulito dall'URL (senza query string) ──────────────
function getCleanPath(url) {
  return url.split('?')[0].split('#')[0] || '/';
}

// ─── Route principale SSR ─────────────────────────────────────────────────────
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;
    const cleanPath = getCleanPath(url);

    let template, render, buildMetaTags, META, DEFAULT_META, buildSchemaScripts;

    if (!isProduction) {
      // Sviluppo: Vite compila al volo i file .ts
      template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const entryModule = await vite.ssrLoadModule('/src/entry-server.tsx');
      render = entryModule.render;
      buildMetaTags = entryModule.buildMetaTags;
      META = entryModule.META;
      DEFAULT_META = entryModule.DEFAULT_META;
      buildSchemaScripts = entryModule.buildSchemaScripts;
    } else {
      // Produzione: usa i file compilati
      template = await fs.readFile(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
      const entryModule = await import('./dist/server/entry-server.js');
      render = entryModule.render;
      buildMetaTags = entryModule.buildMetaTags;
      META = entryModule.META;
      DEFAULT_META = entryModule.DEFAULT_META;
      buildSchemaScripts = entryModule.buildSchemaScripts;
    }

    // ── Costruisce i meta tag per questa pagina ───────────────────────────────
    const pageMeta = META[cleanPath] ?? DEFAULT_META;
    const metaTagsHtml = buildMetaTags(pageMeta);
    const schemaHtml = buildSchemaScripts(cleanPath);

    // ── Renderizza React ──────────────────────────────────────────────────────
    const appHtml = await render(url);

    // ── Sostituisce i placeholder nel template ────────────────────────────────
    const html = template
      .replace('<!--meta-tags-->', metaTagsHtml)
      .replace('<!--schema-tags-->', schemaHtml)
      .replace('<!--app-html-->', appHtml);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
