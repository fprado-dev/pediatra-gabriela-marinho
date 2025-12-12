'use client';

import { services as baseServices } from '@/data/services';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; }>;
  features: string[];
};

export default function ServicesBentoGrid({ services = baseServices }: { services?: ServiceItem[]; }) {
  const items: ServiceItem[] = Array.from({ length: 6 }).map((_, i) => services[i % services.length]);
  const classes = [
    'md:col-span-4 md:row-start-1',
    'md:col-span-6 md:row-start-1',
    'md:col-span-8 md:row-start-2',
    'md:col-span-2 md:row-start-2',
    'md:col-span-5 md:row-start-3',
    'md:col-span-5 md:row-start-3',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-[1fr_1fr_1fr] md:h-[50vh] gap-4">
      {items.map((s, i) => (
        <div key={`${s.id}-${i}`} className={`rounded-xl border border-brand/30 bg-white shadow-sm hover:shadow-md transition-shadow p-6 ${classes[i]}`}>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-brand-soft flex items-center justify-center">
              <s.icon className="w-6 h-6 text-brand" />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-semibold text-details">
                {s.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {s.features.slice(0, 4).map((f, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base text-text-details">
                    <span className="w-2 h-2 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: 'var(--brand)' }}></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
