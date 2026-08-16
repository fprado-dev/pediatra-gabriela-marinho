'use client';

let navigatingUntil = 0;

/** True enquanto uma navegação por clique está em curso. */
export const isNavigating = () => Date.now() < navigatingUntil;

/**
 * Leva até a seção.
 *
 * Com `scroll-snap-type: mandatory` ativo, religar o snap antes de a rolagem
 * terminar faz o navegador reancorar na seção de origem — o clique parecia
 * não fazer nada. Por isso o snap fica desligado até a posição estabilizar
 * de fato, e não até um evento de fim de rolagem.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  navigatingUntil = Date.now() + 1500;

  const root = document.documentElement;
  if (getComputedStyle(root).scrollSnapType === 'none') {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  root.style.scrollSnapType = 'none';
  el.scrollIntoView({ behavior: 'smooth' });

  const start = performance.now();
  let lastY = -1;
  let stillFrames = 0;

  const settle = () => {
    const y = window.scrollY;
    if (y === lastY) stillFrames++;
    else { stillFrames = 0; lastY = y; }

    const elapsed = performance.now() - start;
    if ((stillFrames >= 3 && elapsed > 250) || elapsed > 2000) {
      root.style.scrollSnapType = '';
      return;
    }
    requestAnimationFrame(settle);
  };

  requestAnimationFrame(settle);
}
