import Link from 'next/link';
import Logo from './Logo';

export default function ComingSoon({ title, text }: { title: string; text: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-night p-5">
      <div className="w-full max-w-md rounded-4xl bg-card p-8 text-center">
        <div className="flex justify-center"><Logo /></div>
        <h1 className="mt-6 font-display text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-muted">{text}</p>
        <Link href="/" className="btn btn-violet mt-6 w-full">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
