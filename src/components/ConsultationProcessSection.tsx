'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';

export default function ConsultationProcessSection() {
  const { consultationProcess } = getContent();
  const steps = consultationProcess.steps;

  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  /** Cartão cujo centro está mais perto do centro da faixa visível. */
  const syncCurrent = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    setCurrent(best);
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section id="consultas" className="screen bg-brand-wash">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="max-w-[46rem] mb-5 lg:mb-13">
          <span className="label block mb-2.5 md:mb-3.5">{consultationProcess.label}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-2.5 md:mb-4">
            {consultationProcess.title}
          </h2>
          <p className="text-[.82rem] md:text-base lg:text-lg text-muted max-w-[52ch] md:max-w-[56ch] leading-[1.45] md:leading-relaxed">
            {consultationProcess.subtitle}
          </p>
        </Reveal>

        {/* mobile: um passo por cartão, deslizando; desktop: grade */}
        <Reveal delay={.08}>
          <div
            ref={trackRef}
            onScroll={syncCurrent}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-6 lg:gap-y-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group snap-center shrink-0 w-[78vw] md:w-auto flex flex-col items-center md:items-start text-center md:text-left rounded-2xl md:rounded-none bg-card md:bg-transparent border border-card-line md:border-0 px-5 py-7 md:p-0"
              >
                <motion.span
                  className="grid place-items-center w-14 h-14 md:w-12 md:h-12 mb-4 rounded-full border border-coral text-coral text-[1.05rem] md:text-[.95rem] font-semibold tabular-nums transition-colors group-hover:bg-coral group-hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>

                <h3 className="text-[1.02rem] md:text-lg font-bold text-ink mb-1.5 md:mb-1">
                  {step.title}
                </h3>
                <p className="text-[.82rem] md:text-[.88rem] text-muted leading-[1.5] md:leading-relaxed max-w-[30ch] md:max-w-[34ch]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* paginação: só faz sentido onde há deslize */}
          <div className="md:hidden flex justify-center items-center gap-2 mt-5">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => goTo(index)}
                aria-label={`${consultationProcess.label} ${index + 1}`}
                aria-current={current === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? 'w-6 bg-coral' : 'w-1.5 bg-ink/20'
                  }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
