// Copie pdf.js dans vendor/ pour que l'import et la mesure de plans PDF fonctionnent hors connexion.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build');
const dst = path.join(__dirname, '..', 'vendor', 'pdfjs');
fs.mkdirSync(dst, { recursive: true });
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) fs.copyFileSync(path.join(src, f), path.join(dst, f));
fs.copyFileSync(path.join(src, '..', 'LICENSE'), path.join(dst, 'LICENSE'));
console.log('pdf.js copié dans vendor/pdfjs');
