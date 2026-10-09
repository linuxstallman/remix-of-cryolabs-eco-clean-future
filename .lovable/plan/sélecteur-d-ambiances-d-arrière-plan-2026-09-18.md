# Sélecteur d’ambiances d’arrière-plan

## Mise en œuvre
- Étendre le panneau flottant avec un choix accessible entre Aurore polaire, Nuit étoilée, Cristalline et Hivernal.
- Appliquer à chaque ambiance un fond et des particules distincts, tout en conservant le thème sombre, la lisibilité et le vortex hivernal actuel.
- Mémoriser l’ambiance et l’intensité choisies dans le navigateur, avec un rendu initial stable.
- Conserver l’overlay non interactif, les animations basées sur `transform3d` et l’arrêt complet des mouvements lorsque le mouvement réduit est activé.

## Vérification
- Tester le choix au toucher et au clavier, la restauration après rechargement et les quatre rendus.
- Vérifier ordinateur, mobile, mouvement réduit, contraste et absence d’erreurs.

## Détails techniques
- Utiliser le composant de sélection existant du système d’interface pour bénéficier des comportements ARIA et clavier.
- Piloter les variantes par classes sémantiques sur la couche d’arrière-plan, sans modifier le contenu des pages.
