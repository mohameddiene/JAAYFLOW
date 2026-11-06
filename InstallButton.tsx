'use client';
import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };
type Device = 'ios' | 'android' | 'desktop';

export default function InstallButton({ className = 'btn btn-primary' }: { className?: string }) {
  const [evt, setEvt] = useState<InstallEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [guide, setGuide] = useState(false);
  const [device, setDevice] = useState<Device>('desktop');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as unknown as { standalone?: boolean }).standalone === true;
    setInstalled(standalone);
    if (/iphone|ipad|ipod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) setDevice('ios');
    else if (/android/.test(ua)) setDevice('android');
    const onPrompt = (e: Event) => { e.preventDefault(); setEvt(e as InstallEvent); };
    const onInstalled = () => { setInstalled(true); setEvt(null); setGuide(false); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.removeEventListener('appinstalled', onInstalled); };
  }, []);

  if (installed) return null; // déjà ouverte en mode application

  async function install() {
    if (!evt) { setGuide(true); return; }
    await evt.prompt();
    const { outcome } = await evt.userChoice;
    if (outcome === 'accepted') setInstalled(true);
    setEvt(null);
  }

  const steps: Record<Device, string[]> = {
    ios: ['Ouvrez JAAYFLOW dans Safari.', 'Touchez le bouton Partager (carré avec une flèche).', 'Choisissez « Sur l’écran d’accueil », puis « Ajouter ».'],
    android: ['Ouvrez le menu du navigateur (les trois points).', 'Touchez « Installer l’application » ou « Ajouter à l’écran d’accueil ».', 'Confirmez : l’icône JAAYFLOW apparaît sur votre écran d’accueil.'],
    desktop: ['Cherchez l’icône d’installation à droite de la barre d’adresse (Chrome, Edge).', 'Cliquez sur « Installer JAAYFLOW ».', 'Sur Firefox ou Safari, utilisez le menu du navigateur s’il propose l’installation.'],
  };

  return (
    <>
      <button type="button" onClick={install} className={className}>
        <Download size={18} aria-hidden="true" /> Installer JAAYFLOW
      </button>
      {guide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-night-900/70 p-4 sm:items-center" role="dialog" aria-modal="true" aria-label="Installer JAAYFLOW">
          <div className="w-full max-w-md rounded-4xl bg-card p-6 text-fg shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-xl font-bold">Ajouter JAAYFLOW à votre écran d’accueil</h2>
              <button onClick={() => setGuide(false)} className="rounded-xl p-2 hover:bg-bg" aria-label="Fermer"><X size={20} /></button>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] text-muted">
              {steps[device].map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p className="mt-4 text-sm text-muted">L’installation est facultative : JAAYFLOW fonctionne aussi directement dans le navigateur.</p>
            <button onClick={() => setGuide(false)} className="btn btn-violet mt-5 w-full">J’ai compris</button>
          </div>
        </div>
      )}
    </>
  );
}
