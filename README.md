# JAAYFLOW — Vends mieux. Gère moins.

SaaS de gestion de commerce pour les vendeurs Instagram et WhatsApp (Sénégal d'abord).
Stack : Next.js 14, TypeScript, Tailwind CSS, Supabase, Vercel, PWA.

## État d'avancement
- [x] Phase 1 : identité visuelle, landing page, thème clair/sombre, PWA installable
- [ ] Phase 2 : authentification, comptes, base de données (Supabase, RLS)
- [ ] Phases 3 à 10 : dashboard, finances, abonnements, 221Pay, IA, admin, sécurité, déploiement

Les pages /login et /register sont des pages d'attente jusqu'à la phase 2.

## Lancer en local (ordinateur)
    npm install
    cp .env.example .env.local
    npm run dev

## Tester l'installation PWA
Le service worker et l'installation ne s'activent qu'en production et en HTTPS.
Le plus simple : déployer sur Vercel (voir ci-dessous) puis ouvrir l'URL sur Android avec Chrome.
En local : `npm run build && npm start`, puis http://localhost:3000 (localhost est accepté).

## Envoyer sur GitHub depuis un téléphone Android
1. Dans le navigateur, ouvrez github.com, créez un dépôt privé « jaayflow ».
2. Dézippez le projet avec l'application Fichiers.
3. Dans le dépôt : Add file > Upload files, puis sélectionnez le contenu du dossier
   (pas le zip). Si les sous-dossiers ne se téléversent pas, passez le navigateur en « Site pour ordinateur ».
4. Ne téléversez jamais de fichier .env.

## Déployer sur Vercel depuis un téléphone
1. vercel.com > Add New > Project > importez le dépôt GitHub.
2. Framework : Next.js (détecté automatiquement).
3. Environment Variables : ajoutez NEXT_PUBLIC_SITE_URL avec l'adresse finale du site.
4. Deploy.
