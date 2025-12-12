/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Heart } from 'lucide-react';

export default function AboutSection() {
  const credentials = [
    {
      icon: Award,
      title: 'CRM-SP 123.456',
      description: 'Registro no Conselho Regional de Medicina'
    },
    {
      icon: BookOpen,
      title: 'Universidade Federal de São Paulo',
      description: 'Graduação em Medicina com especialização em Pediatria'
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
                alt="Dra. Gabriela Marinho"
                className="w-full h-full md:object-cover object-contain"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-details/20 to-transparent pointer-events-none"></div>
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
                Sobre a Dra. Gabriela Marinho
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-details/90">
                Minha missão é cuidar da saúde e bem-estar das crianças
              </h3>

              <p className="text-text-details leading-relaxed max-w-xl">
                Sou médica pediatra formada pela Universidade Federal de São Paulo, com anos de experiência no acompanhamento de crianças e adolescentes. Minha abordagem combina conhecimento médico atualizado com atendimento humanizado e acolhedor.
              </p>

              <p className="text-text-details leading-relaxed max-w-xl">
                Acredito que cada criança é única e merece cuidado individualizado. Busco construir uma relação de confiança com as famílias, orientando os pais sobre os cuidados necessários para o desenvolvimento saudável dos seus filhos.
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
