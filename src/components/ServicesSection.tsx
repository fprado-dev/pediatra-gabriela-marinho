'use client';

import Reveal from '@/components/Reveal';
import ServicesTabs from '@/components/ServicesTabs';
import { getContent } from '@/lib/content';
import { whatsappUrl } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { services } = getContent();

  return (
    <section id="servicos" className="screen bg-ink text-on-ink">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="max-w-[46rem] mb-3.5 lg:mb-10">
          <span className="label block mb-3.5 !text-brand">{services.label}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] mb-2.5 md:mb-4">
            {services.title}
          </h2>
          <p className="text-[.76rem] md:text-base lg:text-lg text-on-ink/70 max-w-[52ch] leading-[1.4] md:leading-relaxed">
            {services.subtitle}
          </p>
        </Reveal>

        <Reveal delay={.1}>
          <ServicesTabs />
        </Reveal>

        <Reveal delay={.15} className="flex flex-wrap items-center justify-between gap-3 mt-3.5 md:mt-8">
          <p className="pull text-[.82rem] md:text-xl lg:text-2xl">{services.footer}</p>
          <motion.a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .98 }}
            className="inline-flex items-center px-6 py-2.5 md:py-3.5 rounded-full bg-ground text-ink text-[.82rem] md:text-sm font-semibold"
          >
            {services.cta}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
