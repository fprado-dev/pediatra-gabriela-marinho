'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import Image from 'next/image';
import { Heart, Shield, Star } from 'lucide-react';

const icons = [Heart, Star, Shield];

export default function SpecializedCareSection() {
  const { specializedCare } = getContent();

  return (
    <section id="atendimento" className="screen is-bleed relative bg-ink md:bg-ground md:bg-home-pattern overflow-hidden">
      {/* mobile: o consultório em sangria */}
      <div
        className="bleed-photo scrim-half md:hidden">
        <Image
          src="/photos/atendimento.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover scale-[1.45] origin-[50%_38%]"
        />
      </div>

      <div className="relative z-[1] w-full self-end md:self-auto">
        <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 mb-3 lg:mb-13">
          <span className="label block mb-2.5 md:mb-3.5">{specializedCare.label}</span>
          <h2 className="text-[clamp(1.05rem,3.6vw,2.9rem)] font-bold leading-[1.2] text-on-ink md:text-ink mb-1.5 md:mb-4 md:whitespace-nowrap">
            {specializedCare.columnTitle}
          </h2>
          <p className="text-[.7rem] md:text-base lg:text-lg text-on-ink/70 md:text-muted max-w-[46ch] mx-auto md:mx-0 leading-[1.4] md:leading-relaxed">
            {specializedCare.subtitle}
          </p>
        </Reveal>

        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-18 items-stretch">
          {/* mobile: carrossel deslizante; desktop: lista vertical */}
          <Reveal from="left" className="md:flex md:flex-col md:justify-start">
            <div className="flex md:flex-col gap-3 md:gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {specializedCare.differentials.map((differential, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={differential.title}
                    className="snap-center shrink-0 w-[78vw] md:w-auto rounded-xl md:rounded-none bg-on-ink/8 md:bg-transparent border border-on-ink/15 md:border-0 md:border-b md:border-line p-4 md:p-0 md:grid md:grid-cols-[auto_1fr] md:gap-5 md:py-6 md:first:border-t"
                  >
                    <Icon className="w-5 h-5 md:w-6.5 md:h-6.5 text-coral mx-auto md:mx-0 md:mt-1 shrink-0 mb-2 md:mb-0" />
                    <div>
                      <h3 className="text-[.88rem] md:text-lg font-bold text-on-ink md:text-ink mb-1 md:mb-1">
                        {differential.title}
                      </h3>
                      <p className="text-[.72rem] md:text-[.92rem] text-on-ink/70 md:text-muted leading-[1.45] md:leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* desktop: o arco ao lado da lista */}
          <Reveal from="right" className="hidden md:flex items-center">
            <figure className="relative w-full m-0 photo-arch-frame">
              <Image
                src="/photos/atendimento.jpg"
                alt={specializedCare.imageAlt}
                width={1067}
                height={1600}
                sizes="(min-width: 768px) 45vw, 0px"
                className="relative z-[1] w-full max-h-[44vh] object-cover object-[50%_30%] photo-arch"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
