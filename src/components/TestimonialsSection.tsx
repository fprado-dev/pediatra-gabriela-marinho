'use client';

import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import { getContent } from '@/lib/content';

export default function TestimonialsSection() {
  const { testimonials } = getContent();

  return (
    <section id="depoimentos" className="screen bg-ink text-on-ink overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20">
        <Reveal className="max-w-[46rem] mb-8 lg:mb-12">
          <span className="label block mb-3.5 !text-brand">{testimonials.label}</span>
          <h2 className="text-[clamp(1.5rem,3.6vw,2.9rem)] font-bold leading-[1.12] mb-4">
            {testimonials.title}
          </h2>
          <p className="text-[.88rem] md:text-base lg:text-lg text-on-ink/70 max-w-[56ch]">
            {testimonials.subtitle}
          </p>
        </Reveal>
      </div>

      <Marquee speed={55}>
        {testimonials.items.map((item) => (
          <figure
            key={item.name}
            className="w-[340px] shrink-0 m-0 flex flex-col gap-5 p-7 rounded border border-on-ink/20"
          >
            <span aria-hidden="true" className="text-[2.6rem] font-semibold leading-[.5] h-3.5 text-coral">
              &ldquo;
            </span>

            <blockquote className="m-0 flex-1 text-[1.02rem] font-light leading-relaxed tracking-[-.01em]">
              {item.content}
            </blockquote>

            <figcaption className="flex items-center gap-3 pt-4 border-t border-on-ink/15">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-brand/20 text-brand text-sm font-semibold">
                {item.name.charAt(0)}
              </span>
              <span>
                <strong className="block text-[.88rem] font-semibold">{item.name}</strong>
                <span className="text-[.78rem] text-on-ink/60">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
