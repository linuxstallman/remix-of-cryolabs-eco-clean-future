# Roadmap

- [x] Appliquer un dégradé bleu glacier à l’ensemble du site.
- [x] Ajouter 14 flocons maximum sur mobile et 28 sur ordinateur, dérivant de gauche à droite avec une oscillation verticale douce.
- [x] Utiliser uniquement transform/opacity avec accélération GPU, préserver les interactions tactiles et désactiver le mouvement avec prefers-reduced-motion.
- [x] Garantir un contraste glacier clair conforme WCAG AA.
- [x] Vérifier le rendu sur ordinateur et smartphone.
- [x] Diversifier les silhouettes (❄, ❅, ❆, ✻, ✦, •) et les tailles de 7 à 24 px sans augmenter le coût mobile.

- [x] Passer tout le site en thème nuit polaire (fond bleu très sombre, texte clair, cartes contrastées).
- [x] Agrandir les flocons (14 à 40 px) et accélérer la traversée à ~2 secondes, toujours en animation GPU.
- [x] Vérifier le rendu nuit polaire sur ordinateur et mobile (28 / 14 flocons visibles, aucune erreur console).
- [x] Ralentir la traversée à environ 4 secondes et créer une trajectoire tourbillonnante GPU d’ouest en est.
- [x] Amplifier le cyclone cryogénique avec des boucles verticales nettement plus amples et une rotation renforcée.
- [x] Ajouter un réglage accessible « Vortex : Léger / Fort » avec amplitudes adaptées au mobile et à l’ordinateur.
- [x] Ralentir le vortex à 7–11 secondes, enrichir ses spirales et ajouter scintillement glacier et lueurs volumétriques.
- [x] Ajouter les ambiances Aurore polaire, Nuit étoilée, Cristalline et Hivernal avec choix accessible et mémorisé.

## 2026-09-19
- [x] Lien site d échecs dans le footer (android-chess-hero.lovable.app)
- [x] Correction typecheck frost-wind-background.tsx
- [x] Audit sécurité + dépendances, patch vulnérabilités (js-yaml 4.3.2, react-start 1.168.56, lint corrigé)

## 2026-10-01
- [x] Revenir à une seule ambiance hivernale de flocons, sans sélecteur d’ambiances.
- [x] Accentuer la spirale du vortex tout en préservant le mode léger, la limite mobile et le mouvement réduit.
- [x] Vérifier le rendu, le réglage et l’absence d’erreurs sur ordinateur et mobile.

## 2026-10-03
- [x] Validation serveur, limitation d'envois et anti-spam du formulaire

## 2026-10-05
- [x] Supprimer entièrement le panneau flottant d’ambiance et d’intensité, en conservant les flocons.
- [x] Corriger les erreurs actuelles et contrôler la sécurité du formulaire et des dépendances.
- [ ] Limiter la visibilité du site aux visiteurs situés en Europe, après précision du périmètre géographique.

## 2026-10-08
- [x] Ajouter la configuration Netlify (netlify.toml) pour un déploiement direct depuis le dépôt.
- [ ] Choisir l’hébergement définitif (Lovable ou Netlify) avant d’activer la restriction Europe, car le signal de pays diffère d’une plateforme à l’autre.
- [ ] Connecter le projet à GitHub depuis l’interface (Project settings → Git → GitHub), puis importer le dépôt dans Netlify.
