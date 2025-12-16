'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Laptop, MapPin } from 'lucide-react';

export default function ConsultationModalitiesSection() {
  const { consultationModalities } = getContent();

  const consultationTypes = [
    {
      title: consultationModalities.items[0].title,
      icon: MapPin,
      description: consultationModalities.items[0].description,
      features: consultationModalities.items[0].features
    },
    {
      title: consultationModalities.items[1].title,
      icon: Laptop,
      description: consultationModalities.items[1].description,
      features: consultationModalities.items[1].features
    },
    {
      title: consultationModalities.items[2].title,
      icon: Home,
      description: consultationModalities.items[2].description,
      features: consultationModalities.items[2].features
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-white min-h-screen pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-details/10 text-details text-sm font-bold tracking-wide uppercase mb-4">
            {consultationModalities.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-details mb-6">
            {consultationModalities.title}
          </h2>
          <p className="text-lg text-text-details max-w-2xl mx-auto">
            {consultationModalities.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2rem] p-8 border border-details/10 hover:border-details/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-details/40 via-details to-details/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-20 h-20 rounded-2xl bg-details/5 flex items-center justify-center mb-8 mx-auto group-hover:bg-details group-hover:text-white text-details transition-all duration-300">
                <type.icon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-details text-center mb-2">
                {type.title}
              </h3>

              <p className="text-text-details text-center mb-8 text-sm">
                {type.description}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {type.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-text-details/80">
                    <div className="w-6 h-6 rounded-full bg-details/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-details" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-4 rounded-xl bg-details text-white font-bold text-sm uppercase tracking-wider hover:bg-details/90 transition-colors shadow-md hover:shadow-lg"
              >
                {consultationModalities.ctaPrefix} {type.title}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
