'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, FileText, MessageCircle, Stethoscope, User } from 'lucide-react';

export default function ConsultationProcessSection() {
  const { consultationProcess } = getContent();

  const consultationSteps = [
    {
      icon: Calendar,
      title: consultationProcess.steps[0].title,
      description: consultationProcess.steps[0].description
    },
    {
      icon: User,
      title: consultationProcess.steps[1].title,
      description: consultationProcess.steps[1].description
    },
    {
      icon: Stethoscope,
      title: consultationProcess.steps[2].title,
      description: consultationProcess.steps[2].description
    },
    {
      icon: FileText,
      title: consultationProcess.steps[3].title,
      description: consultationProcess.steps[3].description
    },
    {
      icon: MessageCircle,
      title: consultationProcess.steps[4].title,
      description: consultationProcess.steps[4].description
    },
    {
      icon: CheckCircle,
      title: consultationProcess.steps[5].title,
      description: consultationProcess.steps[5].description
    }
  ];

  return (
    <section id="consultas" className="py-20 bg-brand min-h-screen pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {consultationProcess.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {consultationProcess.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 justify-items-center">
          {consultationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group w-full max-w-sm"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:-translate-y-2">

                {/* Número do passo */}
                <div className="absolute top-0 right-0 bg-white/20 w-12 h-12 rounded-bl-3xl flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-base text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
