// Version Windows de DevisBat : ouvre index.html dans une fenêtre Electron.
// Les projets sont conservés dans le dossier de données de l'application
// (%APPDATA%\DevisBat), indépendamment de tout navigateur.
const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit();

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'DevisBat',
    autoHideMenuBar: false,
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.maximize();
  win.loadFile(path.join(__dirname, 'index.html'));
  // Les liens externes s'ouvrent dans le navigateur par défaut.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

const menu = Menu.buildFromTemplate([
  { label: 'Fichier', submenu: [
    { label: 'Imprimer…', accelerator: 'Ctrl+P', click: () => win && win.webContents.print() },
    { type: 'separator' },
    { label: 'Quitter', role: 'quit' }
  ] },
  { label: 'Édition', submenu: [
    { label: 'Annuler', role: 'undo' }, { label: 'Rétablir', role: 'redo' }, { type: 'separator' },
    { label: 'Couper', role: 'cut' }, { label: 'Copier', role: 'copy' }, { label: 'Coller', role: 'paste' },
    { label: 'Tout sélectionner', role: 'selectAll' }
  ] },
  { label: 'Affichage', submenu: [
    { label: 'Actualiser', role: 'reload' }, { type: 'separator' },
    { label: 'Zoom avant', role: 'zoomIn' }, { label: 'Zoom arrière', role: 'zoomOut' },
    { label: 'Taille réelle', role: 'resetZoom' }, { type: 'separator' },
    { label: 'Plein écran', role: 'togglefullscreen' }
  ] },
  { label: 'Aide', submenu: [
    { label: 'À propos de DevisBat', click: () => dialog.showMessageBox(win, {
      type: 'info', title: 'À propos', message: 'DevisBat ' + app.getVersion(),
      detail: 'Devis quantitatif et estimatif de bâtiment.\nZEMO CONSTRUCTION\n\nDonnées enregistrées dans : ' + app.getPath('userData')
    }) },
    { label: 'Ouvrir le dossier des données', click: () => shell.openPath(app.getPath('userData')) }
  ] }
]);

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => { Menu.setApplicationMenu(menu); createWindow(); });
app.on('window-all-closed', () => app.quit());
