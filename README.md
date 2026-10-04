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
