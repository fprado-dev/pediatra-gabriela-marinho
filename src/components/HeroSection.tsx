/* eslint-disable @next/next/no-img-element */
'use client';

import { getContent } from '@/lib/content';
import { whatsappUrl } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { hero, services } = getContent();

  const handleScrollDown = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen grid grid-rows-[1fr_auto] pt-nav overflow-hidden bg-home-pattern"
    >
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20 grid content-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [.2, .8, .3, 1] }}
          >
            <img
              src="/brand/logo-gabriela-marinho.svg"
              alt={hero.altLogo}
              className="w-full max-w-[500px] h-auto mb-7"
            />

            <p className="text-base lg:text-lg text-muted leading-relaxed max-w-[62ch] mb-8">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: .98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white text-sm font-semibold tracking-wide hover:bg-coral-deep transition-colors"
              >
                <Calendar className="w-4 h-4" />
                {hero.cta}
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ y: -2 }}
                whileTap={{ scale: .98 }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-line-strong text-sm font-semibold text-ink hover:border-ink transition-colors cursor-pointer"
              >
                {services.label}
              </motion.button>
            </div>
          </motion.div>

          <motion.figure
            className="relative m-0 max-w-[460px] w-full mx-auto md:max-w-none photo-arch-frame"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, delay: .15, ease: [.2, .8, .3, 1] }}
          >
            <img
              src="/photos/consultorio.jpg"
              alt={hero.altLogo}
              className="relative z-[1] w-full aspect-[4/5] max-h-[66vh] object-cover object-[50%_22%] photo-arch"
              width={1067}
              height={1600}
            />
          </motion.figure>
        </div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        className="flex items-center justify-center gap-2.5 w-full pt-5 pb-7 text-[.66rem] uppercase tracking-[.18em] text-muted-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8, duration: .6 }}
      >
        {hero.scrollLabel}
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </motion.button>
    </section>
  );
}
