// Phase 1 : valeurs d'affichage. Dès la phase 5, tarifs, limites et fonctionnalités
// viendront de la table subscription_plans (modifiable par l'administrateur).
export type Plan = { id: 'free' | 'starter' | 'pro' | 'business'; name: string; price: number; for: string; features: string[]; highlight?: boolean };

export const PLANS: Plan[] = [
  { id: 'free', name: 'Free', price: 0, for: 'Pour découvrir JAAYFLOW.',
    features: ['Produits, clients et commandes (limites de base)', 'Tableau de bord simple', 'Installation sur le téléphone'] },
  { id: 'starter', name: 'Starter', price: 2000, for: 'Pour structurer vos premières ventes.',
    features: ['Limites élargies', 'Suivi des paiements et des dépenses', 'Suivi des livraisons'] },
  { id: 'pro', name: 'Pro', price: 5000, for: 'Pour développer et analyser votre activité.', highlight: true,
    features: ['Statistiques détaillées', 'Marges et bénéfices par produit', 'Assistant JAAYFLOW AI (selon configuration)'] },
  { id: 'business', name: 'Business', price: 10000, for: 'Pour une gestion plus avancée.',
    features: ['Limites les plus hautes', 'Rapports téléchargeables', 'Priorité sur les nouvelles fonctions'] },
];

export const formatFcfa = (n: number) => `${n.toLocaleString('fr-FR')} FCFA`;
