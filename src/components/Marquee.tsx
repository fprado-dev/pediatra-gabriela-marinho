'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 50,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* máscaras nas bordas */}
      <div className="absolute left-0 inset-y-0 w-10 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-10 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max animate-marquee ${pauseOnHover ? 'pause-on-hover' : ''}`}
        style={{ '--marquee-duration': `${speed}s`, willChange: 'transform' } as React.CSSProperties}
      >
        <div className="flex flex-nowrap gap-5 pr-5">{children}</div>
        {/* cópia para o loop sem costura */}
        <div className="flex flex-nowrap gap-5 pr-5" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
