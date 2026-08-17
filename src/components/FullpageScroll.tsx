'use client';

import { useEffect } from 'react';

/** Tempo que a animação de uma seção leva antes de aceitar o próximo passo. */
const MIN_ANIMATION_MS = 620;
/** Silêncio de roda que indica inércia de trackpad drenada. */
const IDLE_MS = 140;
/**
 * Teto absoluto da trava. Sem ele, uma roda que dispara mais rápido que
 * IDLE_MS nunca deixa o silêncio acontecer e a página congela.
 */
const MAX_LOCK_MS = 800;
/** Abaixo disso é ruído de trackpad, não intenção de navegar. */
const MIN_DELTA = 16;

export default function FullpageScroll() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    let locked = false;
    let lockStart = 0;
    let lastWheelAt = 0;

    const refresh = () => {
      sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    };

    const currentIndex = () => {
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

    /** Libera quando a animação terminou E a roda calou — ou no teto, sempre. */
    const tick = () => {
      if (!locked) return;
      const now = performance.now();
      const animationDone = now - lockStart >= MIN_ANIMATION_MS;
      const wheelQuiet = now - lastWheelAt >= IDLE_MS;
      if ((animationDone && wheelQuiet) || now - lockStart >= MAX_LOCK_MS) {
        locked = false;
        return;
      }
      requestAnimationFrame(tick);
    };

    /** Seção que rola por dentro (conteúdo mais alto que a tela) fica com o gesto. */
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
      lastWheelAt = performance.now();

      // durante a trava o evento é apenas descartado: estender o prazo aqui
      // era o que fazia a página congelar com roda contínua
      if (locked) return;
      if (Math.abs(delta) < MIN_DELTA) return;

      const current = currentIndex();
      const target = Math.min(Math.max(current + (delta > 0 ? 1 : -1), 0), sections.length - 1);
      if (target === current) return;

      locked = true;
      lockStart = performance.now();
      sections[target].scrollIntoView({ behavior: 'smooth' });
      requestAnimationFrame(tick);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', refresh);

    return () => {
      locked = false;
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', refresh);
    };
  }, []);

  return null;
}
