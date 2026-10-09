# Vortex hivernal majestueux

## Mise en œuvre
- Doubler les durées de traversée des 28 particules pour obtenir une plage d’environ 7 à 11 secondes, sans modifier les limites de 14 flocons sur mobile et 28 sur ordinateur.
- Accentuer les trajectoires « Léger » et « Fort » avec davantage d’étapes alternées et des ondulations spiralées harmonieuses d’ouest en est, exclusivement avec `translate3d` et `rotate`.
- Ajouter un scintillement subtil en alternant uniquement l’opacité des flocons, avec des lueurs statiques blanc glacier et cyan afin d’éviter un filtre animé coûteux.
- Enrichir le fond nuit polaire avec plusieurs lueurs radiales diffuses bleu glacier et cyan profond, placées sous les particules et derrière le contenu.
- Conserver le sélecteur accessible, l’overlay non interactif, les optimisations GPU et la désactivation complète des animations avec `prefers-reduced-motion`.

## Vérification
- Contrôler les modes Léger et Fort sur ordinateur et mobile, au toucher et au clavier.
- Vérifier les durées, les limites 28/14, le scintillement, les lueurs de fond et l’absence d’erreurs.
- Confirmer que le mouvement réduit masque les particules, désactive le sélecteur et conserve son message explicatif.
