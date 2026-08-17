import { BIO_LINKS } from '@/data/bio';
import { SITE_URL } from '@/lib/links';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const BIO_URL = 'https://bio.pediatragabrielamarinho.com.br';

export const metadata: Metadata = {
  title: 'Pediatra Gabriela Marinho | Links',
  description: 'Agende sua consulta, acesse o site, o Instagram e as indicações da Dra. Gabriela Marinho.',
  alternates: { canonical: BIO_URL },
  openGraph: {
    type: 'profile',
    url: BIO_URL,
    title: 'Pediatra Gabriela Marinho | Links',
    description: 'Agende sua consulta, acesse o site e veja as indicações da Dra. Gabriela Marinho.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Pediatra Gabriela Marinho' }],
  },
};

export default function BioPage() {
  return (
    <main className="min-h-dvh bg-ground px-5 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[420px] flex flex-col items-center text-center">
        <Image
          src="/photos/sobre.jpg"
          alt="Gabriela Marinho"
          width={128}
          height={128}
          priority
          className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-[var(--shadow)]"
        />

        <h1 className="mt-5 text-xl font-bold text-ink">Dra. Gabriela Marinho</h1>
        <p className="mt-1 text-[.9rem] text-muted">
          Pediatra · Consultas online e presenciais
        </p>

        <nav className="mt-8 w-full flex flex-col gap-3">
          {BIO_LINKS.map(({ label, hint, href, primary, internal }) => {
            const className = `group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition-transform active:scale-[.98] ${
              primary
                ? 'bg-coral text-white shadow-[var(--shadow)]'
                : 'bg-card text-ink border border-card-line shadow-[var(--shadow)]'
            }`;
            const inner = (
              <>
                <span>
                  <span className="block text-[.95rem] font-semibold">{label}</span>
                  <span className={`block text-[.75rem] ${primary ? 'text-white/80' : 'text-muted'}`}>{hint}</span>
                </span>
                <ArrowUpRight className="w-4.5 h-4.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
              </>
            );

            return internal ? (
              <Link key={href} href={href} className={className}>{inner}</Link>
            ) : (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
            );
          })}
        </nav>

        <footer className="mt-12 flex flex-col items-center gap-2.5">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Pediatra Gabriela Marinho">
            <Image
              src="/brand/logo-gabriela-marinho.svg"
              alt="Gabriela Marinho"
              width={1411}
              height={269}
              className="h-7 w-auto opacity-70"
            />
          </a>
          <p className="text-[.7rem] text-muted-2">
            © {new Date().getFullYear()} Gabriela Marinho · Pediatria
          </p>
        </footer>
      </div>
    </main>
  );
}
