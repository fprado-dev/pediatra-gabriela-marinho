'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Fio de progresso no topo — só no mobile, onde não há indicação de onde se está. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: .3 });

  return (
    <div
      className="md:hidden fixed top-0 inset-x-0 z-[60] h-[3px] bg-line pointer-events-none"
      aria-hidden="true"
    >
      <motion.div className="h-full origin-left bg-coral" style={{ scaleX: width }} />
    </div>
  );
}
