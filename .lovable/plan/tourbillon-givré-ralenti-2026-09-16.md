# Tourbillon givré ralenti

## Mise en œuvre
- Doubler chaque durée de traversée pour passer d’environ 2 à environ 4 secondes, tout en conservant les décalages actuels et les limites de 14 flocons sur mobile et 28 sur ordinateur.
- Redessiner les étapes de l’animation horizontale avec plusieurs oscillations verticales alternées et une rotation continue, afin de produire une trajectoire de vortex d’ouest en est.
- Conserver exclusivement des transformations `translate3d` et `rotate`, avec `will-change: transform`, sans interaction tactile et avec désactivation pour les personnes ayant réduit les mouvements.

## Vérification
- Contrôler le mouvement sur ordinateur et mobile, ainsi que le nombre de particules.
- Vérifier le mode de réduction des mouvements et l’absence d’erreurs de compilation ou d’affichage.
