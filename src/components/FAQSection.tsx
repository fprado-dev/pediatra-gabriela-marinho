'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { useIsMobile } from '@/lib/useIsMobile';
import { whatsappUrl } from '@/lib/whatsapp';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const { faq } = getContent();
  const isMobile = useIsMobile();
  // null = intocado; a primeira resposta é longa, então abre por padrão só onde cabe
  const [touched, setTouched] = useState<number | null>(null);
  const openIndex = touched ?? (isMobile ? -1 : 0);

  return (
    <section id="faq" className="screen relative bg-ground bg-home-pattern">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-6 lg:gap-20 items-start">
          <Reveal from="left" className="md:sticky md:top-[calc(var(--nav-height)+2rem)]">
            <span className="label block mb-3.5">{faq.label}</span>
            <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-4">
              {faq.title}
            </h2>
            <p className="text-[.88rem] md:text-base lg:text-lg text-muted max-w-[40ch] mb-5 md:mb-8">{faq.subtitle}</p>

            <p className="pull text-[.95rem] md:text-lg mb-4 md:mb-5">{faq.ctaText}</p>

            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              className="inline-flex items-center px-6 py-3.5 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral-deep transition-colors"
            >
              {faq.ctaButton}
            </motion.a>
          </Reveal>

          <Reveal from="right" className="border-t border-line">
            {faq.items.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.question} className="border-b border-line">
                  <button
                    onClick={() => setTouched(open ? -1 : index)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-start justify-between gap-6 py-4 md:py-5 text-left cursor-pointer hover:text-brand-deep transition-colors"
                  >
                    <h3 className="text-[.88rem] md:text-base lg:text-lg font-medium leading-snug">{item.question}</h3>

                    {/* + que vira − */}
                    <span aria-hidden="true" className="relative shrink-0 w-5.5 h-5.5 mt-1">
                      <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] rounded-sm bg-coral" />
                      <motion.span
                        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] rounded-sm bg-coral"
                        animate={{ scaleY: open ? 0 : 1, opacity: open ? 0 : 1 }}
                        transition={{ duration: .3, ease: [.2, .8, .3, 1] }}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: .35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 md:pb-6 pr-4 md:pr-8 text-[.88rem] md:text-[.94rem] text-muted leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
