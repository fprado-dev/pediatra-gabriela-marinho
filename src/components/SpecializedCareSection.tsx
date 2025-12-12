'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Heart, Star, Shield } from 'lucide-react'

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
  ]

  const careSteps = [
    'Avaliação completa do desenvolvimento infantil',
    'Anamnese detalhada com os pais',
    'Exame físico cuidadoso e minucioso',
    'Orientações personalizadas para cada família',
    'Plano de cuidados específico para cada criança',
    'Acompanhamento contínuo e suporte aos pais'
  ]

  return (
    <section id="atendimento" className="py-20 bg-brand-soft min-h-screen-offset pt-nav scroll-margin-nav flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Atendimento Especializado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um atendimento diferenciado, focado na individualidade de cada criança e nas necessidades específicas de cada família
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Por que escolher meu atendimento?
            </h3>
            
            <div className="space-y-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(168, 201, 245, 0.3)' }}>
                      <differential.icon className="w-6 h-6 text-brand" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {differential.title}
                    </h4>
                    <p className="text-gray-600">
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
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Warm%20pediatrician%20office%2C%20colorful%20toys%2C%20child-friendly%20environment%2C%20medical%20equipment%2C%20soft%20lighting%2C%20comfortable%20waiting%20area%2C%20educational%20posters%2C%20professional%20medical%20setting&image_size=landscape_4_3"
                alt="Consultório Pediátrico"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(168, 201, 245, 0.25)' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Como funciona meu atendimento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
