const fs = require('fs');

// Cattura tutti gli errori imprevisti e li scrive in un file
process.on('uncaughtException', (err) => {
    fs.writeFileSync('./crash.log', `[Uncaught Exception] ${err.stack}\n`, { flag: 'a' });
});

process.on('unhandledRejection', (err) => {
    fs.writeFileSync('./crash.log', `[Unhandled Rejection] ${err.stack}\n`, { flag: 'a' });
});

try {
    // Avvia il server usando l'import dinamico (risolve il bug di caricamento dei moduli di Hostinger)
    import('./server.js').catch(err => {
        fs.writeFileSync('./crash.log', `[Import Error] ${err.stack}\n`, { flag: 'a' });
    });
} catch (err) {
    fs.writeFileSync('./crash.log', `[Sync Error] ${err.stack}\n`, { flag: 'a' });
}