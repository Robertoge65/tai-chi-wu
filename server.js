import fs from 'fs/promises';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Di default consideriamo l'ambiente in produzione se non è esplicitamente "development"
const isProduction = process.env.NODE_ENV !== 'development';
const app = express();
const PORT = process.env.PORT || 3000;
const base = process.env.BASE || '/';

// Permette di parsare il body delle chiamate POST in formato JSON
app.use(express.json());

// L'endpoint API che viene chiamato da ListaAttesa.tsx
app.post('/api/lista-attesa', async (req, res) => {
  const { nome, cognome, email, telefono, dataNascita, messaggio } = req.body;
  
  try {
    // Configura il trasportatore SMTP (i dati andranno configurati nel pannello Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtps.aruba.it',
      port: process.env.SMTP_PORT || 465,
      secure: true, // true per la porta 465, false per la 587
      auth: {
        user: process.env.SMTP_USER || 'taichi@taichiwu.it',
        pass: process.env.SMTP_PASS || 'TuaPasswordHostinger123!',
      },
    });

    // Imposta il contenuto dell'email
    const mailOptions = {
      from: `"Sito Tai Chi Wu" <${process.env.SMTP_USER || 'taichi@taichiwu.it'}>`, // L'email mittente deve coincidere con l'utente SMTP
      to: process.env.SMTP_USER || 'taichi@taichiwu.it', // L'email a cui vuoi ricevere le iscrizioni
      replyTo: email, // Ti permette di cliccare "Rispondi" e scrivere direttamente all'utente
      subject: `Nuova iscrizione in lista d'attesa: ${nome} ${cognome}`,
      text: `Hai ricevuto una nuova richiesta per la lista d'attesa.\n\nNome: ${nome}\nCognome: ${cognome}\nEmail: ${email}\nTelefono: ${telefono}\nData di nascita: ${dataNascita}\n\nMessaggio:\n${messaggio}`,
      html: `<p>Hai ricevuto una nuova richiesta per la lista d'attesa.</p><ul><li><strong>Nome:</strong> ${nome}</li><li><strong>Cognome:</strong> ${cognome}</li><li><strong>Email:</strong> ${email}</li><li><strong>Telefono:</strong> ${telefono}</li><li><strong>Data di nascita:</strong> ${dataNascita}</li></ul><p><strong>Messaggio:</strong><br/>${messaggio}</p>`
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);
    console.log("Iscrizione inviata con successo per:", email);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    res.status(500).json({ success: false, error: "Errore interno del server" });
  }
});

// --- CONFIGURAZIONE SSR ---
let vite;
if (!isProduction) {
  // Sviluppo: usiamo Vite come middleware per compilare e servire al volo
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  });
  app.use(vite.middlewares);
} else {
  // Produzione: serviamo i file statici buildati nella cartella "client" ignorando l'index
  app.use(base, express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
}

// Intercetta tutte le rotte frontend e renderizza React lato server
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;
    let template, render;

    if (!isProduction) {
      template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = await fs.readFile(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
      render = (await import('./dist/server/entry-server.js')).render;
    }

    // Passa l'URL a React Router per capire quale pagina renderizzare
    const appHtml = await render(url);

    // Inietta l'HTML di React nel template base
    const html = template.replace('<!--app-html-->', appHtml);
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