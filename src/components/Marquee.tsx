'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = 'left',
  speed = 40,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      role="region"
      aria-label="Galeria de rolagem automática"
    >
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max ${pauseOnHover ? 'pause-on-hover' : ''} animate-marquee`}
        style={{
          '--marquee-duration': `${speed}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          willChange: 'transform',
        } as React.CSSProperties}
      >
        <div className="flex flex-nowrap gap-8 px-4">
          {children}
        </div>
        {/* Duplicated content for seamless loop */}
        <div className="flex flex-nowrap gap-8 px-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
