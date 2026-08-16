'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { whatsappUrl } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Home, Laptop, MapPin } from 'lucide-react';

const icons = [MapPin, Laptop, Home];

export default function ConsultationModalitiesSection() {
  const { consultationModalities } = getContent();

  return (
    <section id="modalidades" className="screen bg-ground">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="max-w-[46rem] mb-7 lg:mb-10">
          <span className="label block mb-3.5">{consultationModalities.badge}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-4">
            {consultationModalities.title}
          </h2>
          <p className="text-[.88rem] md:text-base lg:text-lg text-muted max-w-[56ch]">
            {consultationModalities.subtitle}
          </p>
        </Reveal>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {consultationModalities.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * .08} className="snap-center shrink-0 w-[78vw] md:w-auto">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: .3, ease: [.2, .8, .3, 1] }}
                  className="h-full flex flex-col gap-3 md:gap-3.5 p-5 md:p-6 lg:p-7 rounded bg-card border border-card-line hover:border-brand hover:shadow-[var(--shadow)] transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-line">
                    <h3 className="text-xl lg:text-[1.75rem] font-bold text-ink">{item.title}</h3>
                    <Icon className="w-6 h-6 text-brand-deep shrink-0 self-center" />
                  </div>

                  <p className="text-[.85rem] md:text-[.9rem] text-muted">{item.description}</p>

                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
                    {item.features.map((feature) => (
                      <li key={feature} className="relative pl-[1.15rem] text-[.85rem] leading-relaxed text-muted">
                        <span className="absolute left-0 top-[.5em] w-[7px] h-[7px] rounded-full border border-coral" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl(`uma consulta ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral-deep transition-colors"
                  >
                    {consultationModalities.ctaPrefix} {item.title}
                  </a>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
