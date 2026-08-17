'use client';

import type { Recommendation } from '@/lib/sheet';
import { ArrowUpRight, ImageOff } from 'lucide-react';
import { useState } from 'react';

const ALL = 'Todos';

/** Categorias na ordem em que aparecem na planilha: a ordem é escolha dela. */
function categoriesOf(items: Recommendation[]) {
  const counts = new Map<string, number>();
  for (const { category } of items) {
    if (category) counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  return [...counts];
}

export default function ProductGrid({ items }: { items: Recommendation[] }) {
  const [active, setActive] = useState(ALL);
  const categories = categoriesOf(items);
  const shown = active === ALL ? items : items.filter((i) => i.category === active);

  return (
    <>
      {categories.length > 0 && (
        <div className="sticky top-0 z-10 -mx-5 mt-6 border-b border-line bg-ground/92 px-5 py-3 backdrop-blur-md md:mx-0 md:px-0">
          <div className="flex items-center justify-between gap-6">
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden">
              {[[ALL, items.length] as const, ...categories].map(([name, count]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive(name)}
                  aria-pressed={active === name}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[.78rem] font-medium transition-colors ${
                    active === name
                      ? 'border-ink bg-ink text-on-ink'
                      : 'border-line-strong bg-card text-muted hover:border-ink/40'
                  }`}
                >
                  {name}
                  <span className={active === name ? 'text-on-ink/60' : 'text-muted-2'}>{count}</span>
                </button>
              ))}
            </div>
            <p className="hidden shrink-0 text-[.68rem] font-semibold uppercase tracking-[.16em] text-muted-2 md:block">
              {shown.length} {shown.length === 1 ? 'indicação' : 'indicações'}
            </p>
          </div>
        </div>
      )}

      {shown.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-line-strong px-6 py-10 text-center">
          <h2 className="text-[.95rem] font-semibold text-ink">Nenhuma indicação nesta categoria ainda</h2>
          <p className="mt-1.5 text-[.8rem] text-muted">A Gabi está sempre acrescentando coisas novas por aqui.</p>
          <button
            type="button"
            onClick={() => setActive(ALL)}
            className="mt-4 rounded-full border border-line-strong bg-card px-4.5 py-2.5 text-[.78rem] font-semibold text-ink"
          >
            Ver todas as indicações
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5.5">
          {shown.map((item) => (
            <li key={item.href} className="flex">
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function ProductCard({ title, description, price, href, image, category, store }: Recommendation) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex w-full flex-col overflow-hidden rounded-[18px] border border-line bg-card shadow-[var(--shadow)] transition-transform active:scale-[.99] md:hover:-translate-y-[3px]"
    >
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-ground-2 md:aspect-[4/3]">
        {image ? (
          /* absolute inset-0, não h-full: dentro de uma caixa com aspect-ratio o
             Safari não resolve altura percentual, a foto ia para o tamanho
             natural e cobria o título do produto. */
          // eslint-disable-next-line @next/next/no-img-element -- domínio da loja é variável, next/image exigiria whitelist
          <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span className="flex flex-col items-center gap-1.5 text-muted-2">
            <ImageOff className="h-6 w-6 opacity-50" />
            <span className="text-[.6rem] uppercase tracking-[.1em]">sem foto</span>
          </span>
        )}
        {category && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-ink/78 px-2.5 py-1 text-[.62rem] font-semibold uppercase tracking-[.06em] text-white backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pt-3.5">
        <h2 className="line-clamp-2 text-[.95rem] font-semibold leading-[1.32] text-ink">{title}</h2>
        {description && (
          <p className="mt-1.5 line-clamp-3 text-[.79rem] leading-relaxed text-muted">{description}</p>
        )}
        {store && (
          <p className="mt-2.5 flex items-center gap-1.5 text-[.68rem] text-muted-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-deep" />
            {store}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2.5 pt-3.5">
          {price && (
            <span className="text-[1.02rem] font-bold leading-tight text-coral-deep">
              {price}
              <small className="block text-[.59rem] font-medium text-muted-2">preço do dia da indicação</small>
            </span>
          )}
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-coral px-3.5 py-2.5 text-[.78rem] font-semibold text-white">
            Ver na loja
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
