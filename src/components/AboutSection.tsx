/* eslint-disable @next/next/no-img-element */
'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { LATTES_URL } from '@/lib/links';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const { about } = getContent();

  return (
    <section id="sobre" className="screen relative bg-ink md:bg-ground overflow-hidden">
      {/* mobile: retrato em sangria, texto assentado sobre o véu */}
      <div
        className="bleed-photo md:hidden">
        <img src="/photos/sobre.jpg" alt="" aria-hidden="true" className="object-[50%_4%]" />
      </div>

      <div className="relative z-[1] w-full self-end md:self-auto">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-4 lg:gap-20 items-center">
          {/* desktop: o arco com a moldura deslocada */}
          <Reveal from="left" className="hidden md:block relative max-w-[420px] w-full pr-5 pb-5 photo-arch-frame">
            <img
              src="/photos/sobre.jpg"
              alt={about.imageAlt}
              className="relative z-[1] w-full aspect-[3/4] max-h-[56vh] object-cover object-[50%_18%] photo-arch"
              width={1067}
              height={1600}
            />
            <span className="absolute left-0 bottom-5 z-[2] w-[42%] h-[2px] bg-coral" />
          </Reveal>

          <Reveal from="right">
            <span className="label block mb-2.5 md:mb-3.5">{about.label}</span>

            <h2 className="text-[clamp(1.05rem,3.6vw,2.9rem)] font-bold leading-[1.22] text-on-ink md:text-ink mb-2 md:mb-5">
              {about.subtitle}
            </h2>

            <p className="text-[.71rem] md:text-base lg:text-lg text-on-ink/75 md:text-muted leading-[1.45] md:leading-relaxed max-w-[62ch] mb-2 md:mb-3">
              {about.description1}
            </p>
            <p className="text-[.71rem] md:text-base lg:text-lg text-on-ink/75 md:text-muted leading-[1.45] md:leading-relaxed max-w-[62ch]">
              {about.description2}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-3 md:mt-7">
              {about.credentials.map((credential) => (
                <div key={credential.title} className="border-t-2 border-coral pt-3 md:pt-3.5">
                  <strong className="block text-[.85rem] md:text-lg font-semibold tabular-nums text-on-ink md:text-ink mb-0.5 md:mb-1">
                    {credential.title}
                  </strong>
                  <span className="text-[.66rem] md:text-sm text-on-ink/60 md:text-muted">
                    {credential.description}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={LATTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 md:mt-6 pb-0.5 text-[.78rem] md:text-sm font-semibold text-brand md:text-brand-deep border-b border-current"
            >
              {about.lattesCta}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
