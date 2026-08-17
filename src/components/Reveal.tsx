'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right';

const offset: Record<Direction, { x?: number; y?: number; }> = {
  up: { y: 24 },
  left: { x: -40 },
  right: { x: 40 },
};

/**
 * Revela o bloco quando ele entra na viewport.
 * Substitui o initial/whileInView repetido em cada seção.
 */
export default function Reveal({
  children,
  from = 'up',
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: .7, delay, ease: [.2, .8, .3, 1] }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </motion.div>
  );
}
