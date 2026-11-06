'use client';
import { useEffect, useState } from 'react';

export default function ServiceWorkerRegister() {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    let reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloading) { reloading = true; window.location.reload(); } });
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      if (reg.waiting && navigator.serviceWorker.controller) setWaiting(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const sw = reg.installing;
        sw?.addEventListener('statechange', () => {
          if (sw.state === 'installed' && navigator.serviceWorker.controller) setWaiting(sw);
        });
      });
    }).catch(() => {});
  }, []);

  if (!waiting) return null;
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl bg-night p-4 text-white shadow-2xl" role="status">
      <span className="text-sm">Une nouvelle version de JAAYFLOW est prête.</span>
      <button className="btn btn-primary !min-h-[40px] !px-4" onClick={() => waiting.postMessage({ type: 'SKIP_WAITING' })}>Mettre à jour</button>
    </div>
  );
}
