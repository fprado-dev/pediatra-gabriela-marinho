/* eslint-disable @next/next/no-img-element */
'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { Heart, Shield, Star } from 'lucide-react';

const icons = [Heart, Star, Shield];

export default function SpecializedCareSection() {
  const { specializedCare } = getContent();

  return (
    <section id="atendimento" className="screen relative bg-ground bg-home-pattern">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="mb-8 lg:mb-13">
          <span className="label block mb-3.5">{specializedCare.label}</span>
          <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-4 md:whitespace-nowrap">
            {specializedCare.columnTitle}
          </h2>
          <p className="text-base lg:text-lg text-muted max-w-[56ch]">
            {specializedCare.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-18 items-stretch">
          <Reveal from="left" className="flex flex-col justify-start">
            {specializedCare.differentials.map((differential, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={differential.title}
                  className="grid grid-cols-[auto_1fr] gap-5 py-6 border-b border-line first:border-t first:border-line"
                >
                  <Icon className="w-6.5 h-6.5 text-coral mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1.5">{differential.title}</h3>
                    <p className="text-[.92rem] text-muted leading-relaxed">{differential.description}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal from="right" className="flex items-center">
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
