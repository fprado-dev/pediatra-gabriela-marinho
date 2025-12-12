'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type ServiceItem = {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

export default function ServicesLateralPin({ services }: { services: ServiceItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const indicatorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const indicator = indicatorRef.current
    if (!container || !indicator) return

    const pin = ScrollTrigger.create({
      trigger: container,
      start: 'top top+=64',
      end: 'bottom bottom',
      pin: indicator,
      pinSpacing: false,
    })

    const items = Array.from(container.querySelectorAll('.service-item')) as HTMLElement[]
    const bullets = Array.from(indicator.querySelectorAll('.indicator-bullet')) as HTMLElement[]

    const setActive = (i: number) => {
      bullets.forEach((b, idx) => {
        if (idx === i) {
          b.classList.add('bg-brand')
          b.classList.remove('bg-gray-300')
          b.style.transform = 'scale(1.15)'
        } else {
          b.classList.remove('bg-brand')
          b.classList.add('bg-gray-300')
          b.style.transform = 'scale(1)'
        }
      })
    }

    const triggers = items.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    )

    return () => {
      pin.kill()
      triggers.forEach(t => t.kill())
    }
  }, [services])

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start">
      <div ref={indicatorRef} className="hidden md:flex flex-col items-center py-4">
        <div className="flex flex-col items-center gap-4">
          {services.map((s, i) => (
            <div key={s.id} className="indicator-bullet w-3 h-3 rounded-full bg-gray-300 transition-transform" />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.id} className="service-item bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: 'rgba(168, 201, 245, 0.3)' }}>
              <service.icon className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-xl font-semibold text-details mb-4 text-center break-words">{service.title}</h3>
            <p className="text-text-details mb-6 text-center leading-relaxed break-words">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-text-details break-words">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: 'var(--brand)' }}></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

