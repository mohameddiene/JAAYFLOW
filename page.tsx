import Link from 'next/link';
import { Bell, Check, ClipboardList, Languages, Package, Sparkles, Truck, Users, Wallet } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import InstallButton from '@/components/InstallButton';
import { PLANS, formatFcfa } from '@/lib/plans';

const advantages = [
  ['Tout est au même endroit', 'Produits, clients, commandes, paiements et bénéfices dans un seul espace, sans carnet ni captures d’écran à retrouver.'],
  ['Pensé pour WhatsApp et Instagram', 'Une commande reçue en message s’enregistre en quelques secondes, avec le client, les produits et le moyen de paiement.'],
  ['Des chiffres honnêtes', 'Une commande non payée n’est jamais comptée comme un revenu. Vous voyez ce que vous avez vraiment encaissé.'],
];

const features = [
  { icon: Package, title: 'Produits et stocks', text: 'Prix d’achat, prix de vente, marge estimée et disponibilité de chaque article.' },
  { icon: ClipboardList, title: 'Commandes', text: 'De « en attente » à « terminée », avec une fiche détaillée pour chaque commande.' },
  { icon: Users, title: 'Clients', text: 'Historique des achats, total dépensé et date de la dernière commande.' },
  { icon: Wallet, title: 'Finances', text: 'Paiements reçus, paiements en attente, dépenses et bénéfice net estimé.' },
  { icon: Truck, title: 'Livraisons', text: 'Adresse, frais et livreur de votre choix, adaptés au commerce local.' },
  { icon: Bell, title: 'Notifications', text: 'Nouvelle commande, paiement confirmé, abonnement qui expire.' },
  { icon: Languages, title: 'Trois langues', text: 'Français, English et Wolof, à changer depuis vos paramètres.' },
];

const faq = [
  ['JAAYFLOW est-il gratuit ?', 'La formule Free ne coûte rien et permet de découvrir l’outil. Les formules Starter, Pro et Business ajoutent des limites plus larges et des fonctions avancées.'],
  ['Comment payer mon abonnement ?', 'Par Wave ou Orange Money, via la passerelle 221Pay. L’abonnement s’active dès que le paiement est confirmé.'],
  ['Puis-je l’utiliser sur mon téléphone ?', 'Oui. JAAYFLOW est conçu d’abord pour Android et s’installe sur l’écran d’accueil comme une application. L’installation reste facultative.'],
  ['Mes données sont-elles visibles par d’autres commerçants ?', 'Non. Chaque commerce a son propre espace, et ses données ne sont accessibles qu’à son propriétaire.'],
  ['Qu’est-ce que JAAYFLOW BONUS ?', 'Une réduction de 10 % sur l’abonnement, pendant 7 jours tous les deux mois, réservée aux clients déjà abonnés.'],
];

const bars = [38, 52, 44, 66, 58, 80, 72];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" aria-label="JAAYFLOW, accueil"><Logo onNight /></Link>
          <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex" aria-label="Sections">
            <a href="#fonctionnalites" className="hover:text-white">Fonctionnalités</a>
            <a href="#ia" className="hover:text-white">JAAYFLOW AI</a>
            <a href="#tarifs" className="hover:text-white">Tarifs</a>
            <a href="#faq" className="hover:text-white">Questions</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="btn btn-onnight !min-h-[44px] !px-4">Se connecter</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero : fond bleu nuit, grande carte blanche arrondie */}
        <section className="bg-night pb-16 pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">Vends mieux. Gère moins.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              La gestion de votre commerce Instagram et WhatsApp dans un seul espace : produits, clients, commandes, paiements et bénéfices.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="btn btn-primary">Commencer gratuitement</Link>
              <InstallButton className="btn btn-onnight" />
            </div>

            <div className="mt-12 rounded-4xl bg-card p-5 text-fg shadow-2xl sm:p-8" aria-label="Aperçu du tableau de bord">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-bold">Votre tableau de bord</p>
                <span className="rounded-full bg-bg px-3 py-1 text-xs text-muted">Aperçu illustratif</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {['Chiffre d’affaires encaissé', 'Commandes en attente', 'Bénéfice net estimé'].map((label, i) => (
                  <div key={label} className="rounded-3xl border border-line p-4">
                    <p className="text-sm text-muted">{label}</p>
                    <div className="mt-4 flex h-16 items-end gap-1.5" aria-hidden="true">
                      {bars.map((h, j) => (
                        <span key={j} className={`flex-1 rounded-t-md ${i === 1 ? 'bg-violet' : 'bg-turq'}`} style={{ height: `${Math.max(18, h - i * 9)}%`, opacity: 0.35 + j * 0.09 }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">Dans l’application, ces cartes affichent vos propres ventes, jour par jour, semaine par semaine ou mois par mois.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">Moins de messages à relire, plus de temps pour vendre</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {advantages.map(([t, d]) => (
              <div key={t} className="rounded-3xl bg-card p-6">
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="fonctionnalites" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Ce que vous gérez avec JAAYFLOW</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-3xl border border-line bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-night text-turq"><Icon size={20} aria-hidden="true" /></span>
                <div><h3 className="font-display font-bold">{title}</h3><p className="mt-1 text-sm text-muted">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="ia" className="scroll-mt-20 bg-night py-16 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-turq-soft"><Sparkles size={16} aria-hidden="true" /> Bientôt disponible</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">JAAYFLOW AI, votre assistant commercial</h2>
              <p className="mt-4 text-white/75">Il analysera vos ventes, repérera vos produits les plus rentables, vous aidera à fixer vos prix, à rédiger vos descriptions et à répondre à vos clients, en français, en anglais et en wolof.</p>
            </div>
            <ul className="space-y-3">
              {['Quels produits me rapportent le plus ?', 'Propose-moi une publication Instagram pour ce produit.', 'Écris une réponse polie à ce client qui hésite.'].map((q) => (
                <li key={q} className="rounded-3xl rounded-bl-md bg-white/10 px-5 py-4 text-white/90">{q}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tarifs" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Des tarifs simples, en FCFA</h2>
          <p className="mt-2 text-muted">Paiement par Wave ou Orange Money. Changez de formule quand votre activité grandit.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <div key={p.id} className={`flex flex-col rounded-4xl p-6 ${p.highlight ? 'bg-night text-white ring-2 ring-violet' : 'bg-card'}`}>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-3 font-display text-3xl font-bold">{formatFcfa(p.price)}<span className={`text-sm font-normal ${p.highlight ? 'text-white/70' : 'text-muted'}`}> /mois</span></p>
                <p className={`mt-2 text-sm ${p.highlight ? 'text-white/75' : 'text-muted'}`}>{p.for}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-turq" aria-hidden="true" />{f}</li>)}
                </ul>
                <Link href={`/register?plan=${p.id}`} className={`btn mt-6 ${p.highlight ? 'btn-primary' : 'btn-violet'}`}>{p.price === 0 ? 'Commencer gratuitement' : `Choisir ${p.name}`}</Link>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-3xl bg-card p-5 text-sm text-muted"><strong className="text-fg">JAAYFLOW BONUS :</strong> 10 % de réduction sur l’abonnement pendant 7 jours, tous les deux mois, pour les clients déjà abonnés.</p>
        </section>

        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Questions fréquentes</h2>
          <div className="mt-6 space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="group rounded-3xl bg-card p-5">
                <summary className="cursor-pointer list-none font-display font-bold">{q}</summary>
                <p className="mt-3 text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-4xl bg-night p-8 text-center text-white sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight">Prêt à gérer votre commerce plus simplement ?</h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/register" className="btn btn-primary">Commencer gratuitement</Link>
              <Link href="/login" className="btn btn-onnight">Se connecter</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center">
          <Logo />
          <p>Vends mieux. Gère moins. © {new Date().getFullYear()} JAAYFLOW</p>
        </div>
      </footer>
    </>
  );
}
