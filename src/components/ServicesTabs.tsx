'use client';

import { services } from '@/data/services';
import { getContent } from '@/lib/content';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function ServicesTabs() {
  const { services: content } = getContent();
  const [active, setActive] = useState(0);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + services.length) % services.length;
    setActive(next);
    document.getElementById(`svc-tab-${next}`)?.focus();
  };

  return (
    <div className="grid md:grid-cols-[minmax(240px,320px)_1fr] border-t border-on-ink/20">
      {/* índice — no mobile vira acordeão, cada título seguido do próprio painel */}
      <div
        role="tablist"
        aria-label={content.tablistLabel}
        aria-orientation="vertical"
        className="flex flex-col md:border-r md:border-on-ink/20"
      >
        {services.map((service, i) => (
          <div key={service.id} className="contents md:block">
            <button
              id={`svc-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls={`svc-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative w-full text-left text-[.95rem] py-4 pl-6 pr-8 border-b border-on-ink/10 cursor-pointer transition-colors ${active === i
                ? 'text-on-ink font-semibold bg-on-ink/5'
                : 'text-on-ink/55 font-medium hover:text-on-ink/85'
                }`}
            >
              {active === i && (
                <motion.span
                  layoutId="svc-marker"
                  className="absolute left-0 inset-y-0 w-0.5 bg-coral"
                  transition={{ duration: .35, ease: [.2, .8, .3, 1] }}
                />
              )}
              {service.title}
            </button>

            {/* painel inline apenas no mobile */}
            <AnimatePresence initial={false}>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: .35, ease: 'easeInOut' }}
                  className="md:hidden overflow-hidden border-b border-on-ink/10"
                >
                  <div className="px-6 py-6">
                    <Panel service={service} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* detalhe — desktop */}
      <div className="hidden md:block md:p-7 lg:p-10 md:min-h-[21rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={services[active].id}
            id={`svc-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`svc-tab-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .3, ease: [.2, .8, .3, 1] }}
          >
            <Panel service={services[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Panel({ service }: { service: (typeof services)[number]; }) {
  return (
    <>
      <h3 className="text-[clamp(1.35rem,2.2vw,1.9rem)] font-bold text-on-ink mb-2.5 md:block hidden">
        {service.title}
      </h3>
      <p className="text-[.98rem] text-on-ink/65 max-w-[54ch] mb-6 md:mb-8">
        {service.description}
      </p>
      <ul className="list-none p-0 m-0 columns-1 xl:columns-2 gap-10">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="relative pl-[1.15rem] mb-3 text-[.88rem] leading-relaxed text-on-ink/90 break-inside-avoid"
          >
            <span className="absolute left-0 top-[.55em] w-[5px] h-[5px] rounded-full bg-coral" />
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}
