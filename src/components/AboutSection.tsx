/* eslint-disable @next/next/no-img-element */
'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const { about } = getContent();

  const credentials = [
    {
      icon: Award,
      title: about.credentials[0].title,
      description: about.credentials[0].description
    },
    {
      icon: BookOpen,
      title: about.credentials[1].title,
      description: about.credentials[1].description
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white bg-home-pattern min-h-screen-offset pt-nav scroll-margin-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center max-h-section-content"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full max-h-section-content border border-details/10">
              <img
                src="/photos/sobre.JPG"
                alt={about.imageAlt}
                className="w-full h-full md:object-cover object-contain"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-linear-to-t from-details/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-details">
                {about.title}
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-details/90">
                {about.subtitle}
              </h3>

              <p className="text-text-details leading-relaxed max-w-xl">
                {about.description1}
              </p>

              <p className="text-text-details leading-relaxed max-w-xl">
                {about.description2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-details/10 border border-details/5"
                >
                  <credential.icon className="w-6 h-6 text-details flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-details">{credential.title}</h4>
                    <p className="text-sm text-text-details">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
