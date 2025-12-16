'use client';
import ServicesCarousel from '@/components/ServicesCarousel';
import { services } from '@/data/services';
import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { services: servicesContent } = getContent();

  return (
    <section id="servicos" className="py-20 bg-brand min-h-screen pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {servicesContent.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {servicesContent.subtitle}
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
            {servicesContent.footer}
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
            {servicesContent.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
