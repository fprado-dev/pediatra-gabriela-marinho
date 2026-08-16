'use client';

import { useEffect } from 'react';

/** Tempo mínimo que a animação de uma seção leva antes de aceitar o próximo passo. */
const MIN_ANIMATION_MS = 700;
/** Silêncio de roda necessário para considerar a inércia do trackpad drenada. */
const IDLE_MS = 180;
/** Ruído de trackpad abaixo disso não conta como intenção de navegar. */
const MIN_DELTA = 6;

export default function FullpageScroll() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    let locked = false;
    let startedAt = 0;
    let idleTimer = 0;

    const refresh = () => {
      sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    };

    const currentIndex = () => {
      // a seção cujo topo está mais perto do topo da viewport
      let best = 0;
      let bestScore = Number.POSITIVE_INFINITY;
      sections.forEach((el, i) => {
        const score = Math.abs(el.getBoundingClientRect().top);
        if (score < bestScore) {
          bestScore = score;
          best = i;
        }
      });
      return best;
    };

    /**
     * Só libera quando a roda ficou quieta E a animação teve tempo de terminar.
     * Sem isso a inércia do trackpad chega depois do timeout e pula uma seção extra.
     */
    const unlockWhenIdle = () => {
      window.clearTimeout(idleTimer);
      const remaining = Math.max(IDLE_MS, MIN_ANIMATION_MS - (performance.now() - startedAt));
      idleTimer = window.setTimeout(() => { locked = false; }, remaining);
    };

    /** Seção que rola por dentro (conteúdo mais alto que a tela) fica com o controle. */
    const scrollsInternally = (target: EventTarget | null, delta: number) => {
      const section = (target as HTMLElement)?.closest?.('section[id]');
      if (!section) return false;
      const { scrollTop, scrollHeight, clientHeight } = section;
      if (scrollHeight <= clientHeight + 1) return false;
      return delta > 0
        ? scrollTop + clientHeight < scrollHeight - 1
        : scrollTop > 1;
    };

    const onWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      if (delta === 0) return;
      if (scrollsInternally(e.target, delta)) return;

      e.preventDefault();

      if (locked) {
        unlockWhenIdle();
        return;
      }
      if (Math.abs(delta) < MIN_DELTA) return;

      const current = currentIndex();
      const target = Math.min(Math.max(current + (delta > 0 ? 1 : -1), 0), sections.length - 1);
      if (target === current) return;

      locked = true;
      startedAt = performance.now();
      sections[target].scrollIntoView({ behavior: 'smooth' });
      unlockWhenIdle();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', refresh);

    return () => {
      window.clearTimeout(idleTimer);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', refresh);
    };
  }, []);

  return null;
}
