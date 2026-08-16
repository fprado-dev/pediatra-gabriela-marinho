/* eslint-disable @next/next/no-img-element */
'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { Heart, Shield, Star } from 'lucide-react';

const icons = [Heart, Star, Shield];

export default function SpecializedCareSection() {
  const { specializedCare } = getContent();

  return (
    <section id="atendimento" className="screen relative bg-ink md:bg-ground md:bg-home-pattern overflow-hidden">
      {/* mobile: o consultório em sangria */}
      <div
        className="bleed-photo md:hidden">
        <img src="/photos/atendimento.jpg" alt="" aria-hidden="true" className="object-[50%_18%]" />
      </div>

      <div className="relative z-[1] w-full self-end md:self-auto">
        <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 mb-4 lg:mb-13">
          <span className="label block mb-2.5 md:mb-3.5">{specializedCare.label}</span>
          <h2 className="text-[clamp(1.1rem,3.6vw,2.9rem)] font-bold leading-[1.2] text-on-ink md:text-ink mb-2 md:mb-4 md:whitespace-nowrap">
            {specializedCare.columnTitle}
          </h2>
          <p className="text-[.73rem] md:text-base lg:text-lg text-on-ink/70 md:text-muted max-w-[56ch] leading-[1.45] md:leading-relaxed">
            {specializedCare.subtitle}
          </p>
        </Reveal>

        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-18 items-stretch">
          <Reveal from="left" className="flex flex-col justify-start">
            {specializedCare.differentials.map((differential, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={differential.title}
                  className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 py-2.5 md:py-6 border-b border-on-ink/15 md:border-line first:border-t first:border-on-ink/15 md:first:border-line"
                >
                  <Icon className="w-5 h-5 md:w-6.5 md:h-6.5 text-coral mt-0.5 md:mt-1 shrink-0" />
                  <div>
                    <h3 className="text-[.88rem] md:text-lg font-bold text-on-ink md:text-ink mb-0.5 md:mb-1">
                      {differential.title}
                    </h3>
                    <p className="text-[.72rem] md:text-[.92rem] text-on-ink/65 md:text-muted leading-[1.45] md:leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>

          {/* desktop: o arco ao lado da lista */}
          <Reveal from="right" className="hidden md:flex items-center">
            <figure className="relative w-full m-0 photo-arch-frame">
              <img
                src="/photos/atendimento.jpg"
                alt={specializedCare.imageAlt}
                className="relative z-[1] w-full max-h-[44vh] object-cover object-[50%_30%] photo-arch"
                width={1067}
                height={1600}
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
