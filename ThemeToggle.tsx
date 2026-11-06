'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains('dark')), []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('jf-theme', next ? 'dark' : 'light'); } catch {}
  }
  return (
    <button onClick={toggle} className="btn btn-ghost !px-3" aria-label={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
