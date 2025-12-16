'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Clock, Instagram, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const { contact } = getContent();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531994766307?text=Olá! Gostaria de agendar uma consulta com a Pediatra Gabriela Marinho', '_blank');
  };



  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@pediatragabrielamarinho.com.br';
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: contact.social.instagram },
    { icon: Linkedin, href: 'https://linkedin.com', label: contact.social.linkedin },
  ];

  return (
    <section id="contato" className="min-h-screen bg-brand flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white/20 max-w-5xl mx-auto "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Coluna da Esquerda: Informações */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{contact.address.title}</h4>
                    <p className="text-white/80 leading-relaxed">
                      {contact.address.lines[0]}<br />
                      {contact.address.lines[1]}<br />
                      {contact.address.lines[2]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{contact.hours.title}</h4>
                    <p className="text-white/80 leading-relaxed">
                      {contact.hours.lines[0]}<br />
                      {contact.hours.lines[1]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-brand transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Ações Rápidas */}
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center px-8 py-5 bg-white text-brand rounded-2xl font-bold text-base hover:bg-white/90 transition-all shadow-lg group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                {contact.actions.whatsapp}
              </motion.button>



              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="w-full flex items-center justify-center px-8 py-5 bg-transparent text-white/80 hover:text-white rounded-2xl font-medium text-base hover:bg-white/5 transition-all"
              >
                <Mail className="w-5 h-5 mr-3" />
                {contact.actions.email}
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
