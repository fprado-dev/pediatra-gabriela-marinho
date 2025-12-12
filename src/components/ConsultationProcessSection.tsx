'use client'

import { motion } from 'framer-motion'
import { Clock, Heart, Users, FileText, Phone, CheckCircle } from 'lucide-react'

export default function ConsultationProcessSection() {
  const consultationSteps = [
    {
      icon: Clock,
      title: 'Agendamento Fácil',
      description: 'Agende pelo WhatsApp ou telefone com horários flexíveis para sua comodidade'
    },
    {
      icon: Users,
      title: 'Recepção Acolhedora',
      description: 'Ambiente preparado para receber crianças com brinquedos e espaço kids'
    },
    {
      icon: Heart,
      title: 'Avaliação Completa',
      description: 'Exame físico detalhado e avaliação do desenvolvimento infantil'
    },
    {
      icon: FileText,
      title: 'Orientações Personalizadas',
      description: 'Prescrição de tratamentos e orientações específicas para cada caso'
    },
    {
      icon: Phone,
      title: 'Acompanhamento',
      description: 'Suporte contínuo via WhatsApp para dúvidas entre consultas'
    },
    {
      icon: CheckCircle,
      title: 'Retorno Garantido',
      description: 'Agendamento de retorno para monitorar a evolução do tratamento'
    }
  ]

  const consultationTypes = [
    {
      title: 'Consulta Presencial',
      features: [
        'Exame físico completo',
        'Avaliação visual do comportamento',
        'Interação direta com a criança',
        'Ambiente preparado para crianças',
        'Uso de equipamentos médicos quando necessário'
      ],
      color: 'blue'
    },
    {
      title: 'Consulta Online',
      features: [
        'Conveniência de casa',
        'Sem deslocamento necessário',
        'Horários mais flexíveis',
        'Ideal para orientações e follow-up',
        'Perfeito para crianças agitadas'
      ],
      color: 'green'
    }
  ]

  return (
    <section id="consultas" className="py-20 bg-gray-50 min-h-screen-offset pt-nav scroll-margin-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como são minhas consultas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo pensado para oferecer o melhor cuidado com conforto e segurança para sua criança
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Passo a passo da consulta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="text-center">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < consultationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Modalidades de atendimento
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 border-${type.color}-100`}
              >
                <h4 className={`text-xl font-bold text-${type.color}-600 mb-6 text-center`}>
                  {type.title}
                </h4>
                
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 bg-${type.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('contato')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-${type.color}-600 hover:bg-${type.color}-700 transition-colors shadow-lg`}
                  >
                    Agendar {type.title}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
