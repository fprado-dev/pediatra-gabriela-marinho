'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(max-width: 767px)';

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

/** Espelha o breakpoint `md` do Tailwind para decisões que o CSS não resolve. */
export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false, // no servidor assume desktop
  );
}
