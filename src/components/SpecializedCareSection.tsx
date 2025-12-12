'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Heart, Shield, Star } from 'lucide-react';

export default function SpecializedCareSection() {
  const differentials = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cada criança é única e merece cuidado individualizado com amor e dedicação'
    },
    {
      icon: Star,
      title: 'Excelência Médica',
      description: 'Conhecimento atualizado baseado em evidências científicas e práticas médicas modernas'
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Consultório preparado para receber crianças com segurança e conforto'
    }
  ];

  const careSteps = [
    'Avaliação completa do desenvolvimento infantil',
    'Anamnese detalhada com os pais',
    'Exame físico cuidadoso e minucioso',
    'Orientações personalizadas para cada família',
    'Plano de cuidados específico para cada criança',
    'Acompanhamento contínuo e suporte aos pais'
  ];

  return (
    <section id="atendimento" className="py-20 bg-white min-h-screen-offset pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden bg-home-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-details mb-4">
            Atendimento Especializado
          </h2>
          <p className="text-xl text-text-details max-w-3xl mx-auto">
            Um atendimento diferenciado, focado na individualidade de cada criança e nas necessidades específicas de cada família
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-details mb-8">
              Por que escolher meu atendimento?
            </h3>

            <div className="space-y-8">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-5 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-details/10 flex items-center justify-center transition-all duration-300 group-hover:bg-details group-hover:shadow-md">
                      <differential.icon className="w-7 h-7 text-details transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-details mb-2 group-hover:text-details/80 transition-colors">
                      {differential.title}
                    </h4>
                    <p className="text-text-details leading-relaxed bg-white/60 p-2 rounded-lg backdrop-blur-sm">
                      {differential.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(247,_86,_124,_0.1)] border border-details/10 h-full min-h-[400px]">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Warm%20pediatrician%20office%2C%20colorful%20toys%2C%20child-friendly%20environment%2C%20medical%20equipment%2C%20soft%20lighting%2C%20comfortable%20waiting%20area%2C%20educational%20posters%2C%20professional%20medical%20setting&image_size=landscape_4_3"
                alt="Consultório Pediátrico"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-details/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
