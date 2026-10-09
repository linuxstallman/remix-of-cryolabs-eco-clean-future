# Réglage d’intensité du vortex

## Mise en œuvre
- Ajouter une commande compacte et accessible en bas d’écran avec les états « Léger » et « Fort ».
- Piloter dynamiquement la couche de flocons depuis cette commande, sans interrompre leur traversée ni les interactions de la page.
- Conserver le cyclone actuel en mode fort et créer un mouvement plus doux en mode léger, avec une amplitude verticale et une rotation réduites.
- Garder les optimisations GPU, les limites de 14 flocons sur mobile et 28 sur ordinateur, ainsi que la désactivation en mouvement réduit.

## Vérification
- Tester la bascule au toucher et au clavier sur ordinateur et mobile.
- Vérifier les deux trajectoires, les limites de particules, le contraste et l’absence d’erreurs.
