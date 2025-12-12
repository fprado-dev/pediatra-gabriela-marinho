'use client';

import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';
import { Heart, Quote, Star } from 'lucide-react';
import Marquee from './Marquee';

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-brand min-h-screen pt-nav scroll-margin-nav flex flex-col justify-center overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-6 h-6 text-white fill-current animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que dizem as famílias
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A confiança é a base do meu trabalho. Veja o relato de quem já confia a saúde dos seus filhos aos meus cuidados.
          </p>
        </motion.div>

        <div className="mb-16">
          <Marquee speed={50} pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 relative group w-[350px] md:w-[400px] flex-shrink-0"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10 group-hover:text-white/20 transition-colors duration-300" />

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 min-h-[120px]">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >

        </motion.div>
      </div>
    </section>
  );
}
