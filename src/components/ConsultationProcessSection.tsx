'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';

export default function ConsultationProcessSection() {
  const { consultationProcess } = getContent();

  return (
    <section id="consultas" className="screen bg-brand-wash">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="max-w-[46rem] mb-4 lg:mb-13">
          <span className="label block mb-3.5">{consultationProcess.label}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-4">
            {consultationProcess.title}
          </h2>
          <p className="text-[.88rem] md:text-base lg:text-lg text-muted max-w-[56ch]">
            {consultationProcess.subtitle}
          </p>
        </Reveal>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-x-8 md:gap-y-6 lg:gap-y-10">
          {consultationProcess.steps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 3) * .06} className="group">
              {/* mobile: linha compacta com o número à esquerda */}
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 items-start gap-3 md:gap-0">
                <motion.span
                  className="grid place-items-center w-9 h-9 md:w-12 md:h-12 md:mb-4 rounded-full border border-coral text-coral text-[.8rem] md:text-[.95rem] font-semibold tabular-nums transition-colors group-hover:bg-coral group-hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>
                <div>
                  <h3 className="text-[.88rem] md:text-lg font-bold text-ink mb-0.5 md:mb-1">{step.title}</h3>
                  <p className="text-[.74rem] md:text-[.88rem] text-muted leading-[1.4] md:leading-relaxed max-w-[34ch]">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
