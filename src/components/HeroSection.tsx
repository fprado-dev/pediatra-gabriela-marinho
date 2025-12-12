/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para meu filho.', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5511999999999';
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

            <div className="flex items-center justify-center mb-15">
              <img
                src="/brand/logo-gabriela-marinho.svg"
                alt="Gabriela Marinho - Pediatra"
                className="w-auto max-w-3xl"
              />
            </div>
            <p className="text-xl text-center text-text-details mb-8 leading-relaxed max-w-2xl">
              Gabriela Marinho - Pediatra especializada em acompanhamento infantil. Oferecemos consultas presenciais e online com foco no bem-estar e desenvolvimento saudável da sua criança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="
                cursor-pointer
                inline-flex items-center justify-center px-8 py-4 
                border border-transparent text-base font-medium rounded-full
                 text-white bg-details transition-colors shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </motion.button>


            </div>


          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        aria-label="Role para ver mais"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand bg-white/80 backdrop-blur-sm text-brand shadow-custom cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>


  );
}
