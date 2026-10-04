# ZEMO CONSTRUCTION

Outils de ZEMO CONSTRUCTION pour la réalisation de devis quantitatifs et estimatifs (DQE) de bâtiment.

## DevisBat

`index.html` est **DevisBat**, une application de métré et de devis entièrement contenue dans un seul fichier HTML :

- **Projets** : gestion de plusieurs devis, sauvegarde et restauration en `.json`.
- **Architecture** : niveaux, murs, planchers, fondations ; import du texte des plans PDF et mesure directe sur plan.
- **Structure** : volumes de béton et aciers HA6 à HA25 par élément (saisie, import CSV ou PDF).
- **Prix** : bordereau modifiable gros œuvre / second œuvre / finition, en FCFA.
- **Devis (DQE)** : devis numéroté par niveau, aléas, TVA, total TTC, coût au m² ; impression PDF et export CSV.
- **Matériaux** : ciment, sable, gravier, eau, agglos, aciers et nombre de barres à acheter.
- **Intervenants** : maîtrise d'œuvre, bureaux d'études et corps de métier, avec suivi des consultations.

### Utilisation

Ouvrir `index.html` dans un navigateur, sans aucune installation. Les données sont enregistrées dans le navigateur (localStorage) : utiliser régulièrement « Sauvegarde complète » pour ne pas les perdre. L'import PDF et la mesure sur plan PDF nécessitent une connexion internet.

## Version Windows

DevisBat existe aussi en application Windows (Electron), qui fonctionne **sans connexion internet**, y compris l'import et la mesure de plans PDF.

### Télécharger
Dans l'onglet **Actions** du dépôt, ouvrir la dernière exécution réussie de « Version Windows », puis télécharger l'archive **DevisBat-Windows**. Elle contient :
- `DevisBat-Setup-<version>.exe` : installeur (raccourci sur le bureau et dans le menu Démarrer) ;
- `DevisBat-Portable-<version>.exe` : version portable, sans installation (clé USB).

Pour publier une version officielle, créer un tag `v1.0.0` : les deux fichiers sont alors joints à une *Release* GitHub.

L'application n'étant pas signée numériquement, Windows SmartScreen peut afficher « Windows a protégé votre ordinateur » : cliquer sur **Informations complémentaires** puis **Exécuter quand même**.

### Données
Les projets sont enregistrés dans `%APPDATA%\DevisBat` (menu **Aide > Ouvrir le dossier des données**), indépendamment des navigateurs. Les exports `.json` restent compatibles entre la version web et la version Windows.

### Développement
```
npm install
npm run vendor   # copie pdf.js dans vendor/ pour le mode hors connexion
npm start        # lance l'application
npm run dist:win # construit l'installeur et la version portable (sous Windows)
```
