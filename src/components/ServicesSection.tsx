'use client';
import ServicesCarousel from '@/components/ServicesCarousel';
import { services } from '@/data/services';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-brand min-h-screen pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como posso ajudar seu filho?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ofereço serviços especializados em pediatria, desde o acompanhamento do desenvolvimento infantil até orientações para pais
          </p>
        </motion.div>

        <ServicesCarousel services={services} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-white/90 mb-6">
            Cada criança é única e merece cuidado individualizado
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-brand bg-white hover:bg-white/90 transition-colors shadow-lg"
          >
            Agendar Consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
