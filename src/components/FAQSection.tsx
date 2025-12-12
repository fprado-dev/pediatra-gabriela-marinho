'use client';

import { faqs } from '@/data/faq';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white bg-home-pattern min-h-screen-offset pt-nav scroll-margin-nav">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-details mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-text-details">
            Tire suas dúvidas sobre consultas pediátricas e cuidados infantis
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-details/10 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-details/5 transition-colors duration-200 group"
                aria-expanded={openItemId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-bold text-details pr-4 group-hover:text-details/80 transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-details/10 flex items-center justify-center group-hover:bg-details/20 transition-colors">
                  <motion.div
                    animate={{ rotate: openItemId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-details" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openItemId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-text-details leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato comigo!
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
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-details hover:bg-details/90 transition-colors shadow-lg"
          >
            Falar comigo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
