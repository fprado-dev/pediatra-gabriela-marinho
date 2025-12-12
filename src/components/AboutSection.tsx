/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

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
    },
    {
      icon: Heart,
      title: '10+ Anos de Experiência',
      description: 'Atendendo crianças e adolescentes com dedicação'
    },
    {
      icon: Users,
      title: '500+ Famílias Atendidas',
      description: 'Construindo relacionamentos de confiança'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a Dra. Gabriela Marinho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a profissional que cuidará da saúde do seu filho com amor, dedicação e excelência médica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/photos/sobre.JPG"
                alt="Dra. Gabriela Marinho"
                className="w-full h-auto object-cover"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            <div className="absolute -top-6 -right-6 bg-brand text-white rounded-full p-4 shadow-lg">
              <Heart className="w-8 h-8" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Minha missão é cuidar da saúde e bem-estar das crianças
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Sou médica pediatra formada pela Universidade Federal de São Paulo, com mais de 10 anos de experiência no acompanhamento de crianças e adolescentes. Minha abordagem combina conhecimento médico atualizado com atendimento humanizado e acolhedor.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Acredito que cada criança é única e merece cuidado individualizado. Meu objetivo é construir uma relação de confiança com as famílias, orientando os pais sobre os cuidados necessários para o desenvolvimento saudável dos seus filhos.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Estou constantemente me atualizando através de cursos e congressos para oferecer o melhor tratamento baseado em evidências científicas, sempre com muito amor e dedicação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(168, 201, 245, 0.25)' }}
                >
                  <credential.icon className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{credential.title}</h4>
                    <p className="text-sm text-gray-600">{credential.description}</p>
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
