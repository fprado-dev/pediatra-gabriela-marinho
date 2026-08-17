'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { EMAIL, INSTAGRAM_URL, LATTES_URL, LINKEDIN_URL } from '@/lib/links';
import { PHONE, whatsappUrl } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Clock, FileText, Instagram, Linkedin, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function ContactSection() {
  const { contact } = getContent();

  const blocks = [
    { icon: MapPin, title: contact.address.title, lines: contact.address.lines },
    { icon: Clock, title: contact.hours.title, lines: contact.hours.lines },
    { icon: Phone, title: contact.phone.title, lines: [contact.actions.phone] },
  ];

  const socials = [
    { icon: Instagram, href: INSTAGRAM_URL, label: contact.social.instagram },
    { icon: Linkedin, href: LINKEDIN_URL, label: contact.social.linkedin },
    { icon: FileText, href: LATTES_URL, label: contact.social.lattes },
  ];

  return (
    <section id="contato" className="screen bg-ink text-on-ink">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="mb-4 lg:mb-13">
          <span className="label block mb-3.5 !text-brand">{contact.label}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12]">
            {contact.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-6 lg:gap-20">
          <Reveal from="left" className="flex flex-col gap-3 md:gap-8">
            {blocks.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="grid grid-cols-[auto_1fr] gap-4.5">
                <Icon className="w-5.5 h-5.5 text-brand mt-1 shrink-0" />
                <div>
                  <h3 className="text-[.68rem] font-semibold uppercase tracking-[.16em] text-on-ink/55 mb-1.5">
                    {title}
                  </h3>
                  <p className="text-[.88rem] md:text-[.96rem] leading-relaxed">
                    {lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex gap-2.5 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="grid place-items-center w-10.5 h-10.5 rounded-full border border-on-ink/30 hover:bg-on-ink hover:text-ink transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </Reveal>

          <Reveal from="right" className="flex flex-col gap-2.5 md:gap-3 self-center">
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 md:py-4 rounded-full bg-ground text-ink text-[.88rem] font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              {contact.actions.whatsapp}
            </motion.a>

            <motion.a
              href={`tel:+${PHONE}`}
              whileHover={{ y: -2 }}
              className="w-full inline-flex items-center justify-center px-6 py-3 md:py-4 rounded-full border border-on-ink/40 text-[.88rem] font-semibold hover:border-on-ink transition-colors"
            >
              {contact.actions.phone}
            </motion.a>

            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ y: -2 }}
              className="w-full inline-flex items-center justify-center px-6 py-3 md:py-4 rounded-full border border-on-ink/40 text-[.82rem] md:text-[.88rem] font-semibold hover:border-on-ink transition-colors"
            >
              {EMAIL}
            </motion.a>

            <p className="text-center text-[.72rem] md:text-[.78rem] text-on-ink/50 mt-1 md:mt-2">{contact.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
