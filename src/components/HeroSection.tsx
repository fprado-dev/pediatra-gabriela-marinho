/* eslint-disable @next/next/no-img-element */
'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { hero } = getContent();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531994766307?text=Olá! Gostaria de agendar uma consulta com a Pediatra Gabriela Marinho', '_blank');
  };



  const handleScrollDown = () => {
    const next = document.getElementById('sobre');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen-offset pt-nav scroll-margin-nav flex items-center justify-center bg-white bg-home-pattern">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center"
          >

            <div className="flex items-center justify-center mb-20 sm:mb-30">
              <img
                src="/brand/logo-gabriela-marinho.svg"
                alt={hero.altLogo}
                className="w-auto max-w-xs sm:max-w-md md:max-w-3xl"
              />
            </div>
            <p className="text-base md:text-xl text-center text-text-details mb-6 md:mb-8 leading-relaxed max-w-xl md:max-w-2xl px-4">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-center w-full max-w-xl">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="
                cursor-pointer w-full sm:w-auto
                inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 
                border border-transparent text-sm sm:text-base font-medium rounded-full
                 text-white bg-details transition-colors shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {hero.cta}
              </motion.button>


            </div>


          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        aria-label={hero.scrollLabel}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full border border-brand bg-white/80 backdrop-blur-sm text-brand shadow-custom cursor-pointer md:hover:scale-105 md:transition-transform"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'anticipate' }}
      >
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
      </motion.button>
    </section>


  );
}
