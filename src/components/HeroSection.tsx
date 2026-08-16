/* eslint-disable @next/next/no-img-element */
'use client';

import { getContent } from '@/lib/content';
import { scrollToSection } from '@/lib/scroll';
import { whatsappUrl } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { hero, services } = getContent();

  return (
    <section
      id="inicio"
      className="relative h-screen h-[100svh] grid grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto] pt-nav overflow-hidden bg-ground md:bg-home-pattern"
    >
      {/* mobile: a foto é o fundo da tela inteira */}
      <motion.div
        className="bleed-photo md:hidden"
        style={{ ["--scrim-solid" as string]: "28%", ["--scrim-mid" as string]: "46%", ["--scrim-soft" as string]: "66%", ["--scrim-end" as string]: "84%" }}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [.2, .8, .3, 1] }}
      >
        <img src="/photos/consultorio.jpg" alt="" aria-hidden="true" className="object-[50%_16%]" />
      </motion.div>

      <div className="relative z-[1] max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20 grid content-end md:content-center text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-6 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .3, ease: [.2, .8, .3, 1] }}
          >
            <img
              src="/brand/logo-gabriela-marinho.svg"
              alt={hero.altLogo}
              className="w-[88%] md:w-full max-w-[500px] h-auto mb-5 md:mb-7 mx-auto md:mx-0"
            />

            <p className="text-[.92rem] md:text-base lg:text-lg text-on-ink/85 md:text-muted leading-relaxed max-w-[62ch] mx-auto md:mx-0 mb-6 md:mb-8">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch md:items-start">
              <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: .98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-full bg-coral text-white text-sm font-semibold tracking-wide hover:bg-coral-deep transition-colors"
              >
                <Calendar className="w-4 h-4" />
                {hero.cta}
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('servicos')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: .98 }}
                className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 rounded-full border border-on-ink/45 md:border-line-strong text-sm font-semibold text-on-ink md:text-ink md:hover:border-ink transition-colors cursor-pointer"
              >
                {services.label}
              </motion.button>
            </div>
          </motion.div>

          {/* desktop: a foto volta a ser o arco ao lado do texto */}
          <motion.figure
            className="hidden md:block relative m-0 w-full photo-arch-frame"
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
        onClick={() => scrollToSection('sobre')}
        className="relative z-[1] flex items-center justify-center gap-2.5 w-full pt-4 pb-3 md:pt-5 md:pb-7 text-[.62rem] md:text-[.66rem] uppercase tracking-[.18em] text-on-ink/55 md:text-muted-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .9, duration: .6 }}
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
