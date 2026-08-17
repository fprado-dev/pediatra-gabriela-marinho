import ProductGrid from '@/app/bio/indicacoes/ProductGrid';
import { SITE_URL } from '@/lib/links';
import { getRecommendations } from '@/lib/sheet';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const BIO_URL = 'https://bio.pediatragabrielamarinho.com.br';

export const metadata: Metadata = {
  title: 'Indicações da Gabi | Pediatra Gabriela Marinho',
  description:
    'Os produtos que a Dra. Gabriela Marinho recomenda no consultório, organizados por categoria: gestantes, recém-nascidos, bebês e crianças.',
  alternates: { canonical: `${BIO_URL}/indicacoes` },
  openGraph: {
    type: 'website',
    url: `${BIO_URL}/indicacoes`,
    title: 'Indicações da Gabi',
    description: 'O que a pediatra Gabriela Marinho recomenda no consultório, reunido num lugar só.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Pediatra Gabriela Marinho' }],
  },
};

export default async function IndicacoesPage() {
  const items = await getRecommendations();

  return (
    <main className="min-h-dvh bg-ground px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:border-b md:border-line md:pb-7">
          <div>
            <Link
              href="/bio"
              className="inline-flex items-center gap-1.5 text-[.8rem] font-medium text-muted transition-colors hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
              voltar para os links
            </Link>
            <h1 className="mt-3.5 text-[clamp(1.45rem,4.5vw,2.3rem)] font-bold leading-[1.08] tracking-[-.02em] text-ink">
              Indicações da Gabi
            </h1>
            <p className="mt-2 max-w-[46ch] text-[.82rem] leading-relaxed text-muted md:text-[.95rem]">
              O que eu recomendo no consultório, reunido num lugar só. Testado, usado e aprovado.
            </p>
          </div>

          <div className="mt-4 flex max-w-[340px] items-center gap-3 rounded-[14px] bg-brand-wash p-3 md:mt-0 md:p-4">
            <Image
              src="/photos/sobre.jpg"
              alt="Gabriela Marinho"
              width={84}
              height={84}
              className="h-9 w-9 shrink-0 rounded-full object-cover md:h-10.5 md:w-10.5"
            />
            <p className="text-[.72rem] leading-snug text-muted">
              <b className="font-semibold text-ink">Dra. Gabriela Marinho</b> — pediatra. Indicação não substitui
              consulta: na dúvida sobre o que serve pro seu filho, me chame.
            </p>
          </div>
        </header>

        {items.length > 0 ? (
          <ProductGrid items={items} />
        ) : (
          <p className="mt-10 text-[.85rem] text-muted">As indicações voltam em instantes.</p>
        )}

        <p className="mt-8 rounded-xl border border-line bg-ground-2 p-3.5 text-[.7rem] leading-relaxed text-muted-2">
          Alguns links são de afiliados: você paga o mesmo preço e ajuda a manter o conteúdo por aqui. Os preços são os
          do dia da indicação e podem variar na loja.
        </p>

        <footer className="mt-10 flex flex-col items-center gap-2.5 pb-4">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Pediatra Gabriela Marinho">
            <Image
              src="/brand/logo-gabriela-marinho.svg"
              alt="Gabriela Marinho"
              width={1411}
              height={269}
              className="h-6 w-auto opacity-70"
            />
          </a>
          <p className="text-[.7rem] text-muted-2">© {new Date().getFullYear()} Gabriela Marinho · Pediatria</p>
        </footer>
      </div>
    </main>
  );
}
