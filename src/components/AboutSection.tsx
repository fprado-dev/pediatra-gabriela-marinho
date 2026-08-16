/* eslint-disable @next/next/no-img-element */
'use client';

import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';
import { LATTES_URL } from '@/lib/links';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const { about } = getContent();

  return (
    <section id="sobre" className="screen relative bg-ground">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-20 items-center">
          <Reveal from="left" className="relative max-w-[420px] w-full pr-5 pb-5 photo-arch-frame">
            <img
              src="/photos/sobre.jpg"
              alt={about.imageAlt}
              className="relative z-[1] w-full aspect-[3/4] max-h-[56vh] object-cover object-[50%_18%] photo-arch"
              width={1067}
              height={1600}
            />
            {/* filete coral marcando a base */}
            <span className="absolute left-0 bottom-5 z-[2] w-[42%] h-[2px] bg-coral" />
          </Reveal>

          <Reveal from="right">
            <span className="label block mb-3.5">{about.label}</span>

            <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-bold leading-[1.12] text-ink mb-5">
              {about.subtitle}
            </h2>

            <p className="text-base lg:text-lg text-muted leading-relaxed max-w-[62ch] mb-3.5">
              {about.description1}
            </p>
            <p className="text-base lg:text-lg text-muted leading-relaxed max-w-[62ch]">
              {about.description2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              {about.credentials.map((credential) => (
                <div key={credential.title} className="border-t-2 border-coral pt-3.5">
                  <strong className="block text-lg font-semibold tabular-nums mb-1">
                    {credential.title}
                  </strong>
                  <span className="text-sm text-muted">{credential.description}</span>
                </div>
              ))}
            </div>

            <a
              href={LATTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 pb-0.5 text-sm font-semibold text-brand-deep border-b border-current"
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
