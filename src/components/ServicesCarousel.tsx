'use client';

import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; }>;
  features: string[];
};

export default function ServicesCarousel({ services }: { services: ServiceItem[]; }) {
  const { services: servicesContent } = getContent();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 1;
      if (window.innerWidth >= 1024) {
        newItemsPerPage = 3;
      } else if (window.innerWidth >= 768) {
        newItemsPerPage = 2;
      }

      setItemsPerPage(newItemsPerPage);

      // Adjust index immediately if out of bounds to avoid flash
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, services.length - newItemsPerPage);
        return prev > maxIndex ? maxIndex : prev;
      });
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [services.length]);

  const maxIndex = Math.max(0, services.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  }, [currentIndex, maxIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  }, [currentIndex, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset
    touchStart.current = 0;
    touchEnd.current = 0;
  };

  // Calculate width based on items per page and gap
  // Mobile (1 item): 100%
  // Tablet (2 items): calc((100% - 24px) / 2) -> gap-6 is 24px
  // Desktop (3 items): calc((100% - 64px) / 3) -> gap-8 is 32px * 2 gaps
  const getItemWidth = () => {
    if (itemsPerPage === 1) return '100%';
    if (itemsPerPage === 2) return 'calc(50% - 12px)';
    return 'calc(33.333% - 21.33px)';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative group">
      {/* Carousel Track Container */}
      <div
        className="overflow-hidden py-12 -mx-4 px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex gap-6 md:gap-8"
          initial={false}
          animate={{
            x: `-${currentIndex * (100 / itemsPerPage)}%`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex-shrink-0 relative"
              style={{ width: getItemWidth() }}
            >
              <div className="h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group/card flex flex-col hover:-translate-y-2">

                {/* Icon Header */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover/card:scale-110 transition-transform duration-300 shadow-sm">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6 text-sm lg:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <div className="mt-1 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="group-hover/card:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons - Desktop/Tablet */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all z-10 hidden md:flex hover:scale-110 active:scale-95 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        disabled={currentIndex === 0}
        aria-label={servicesContent.carousel.prev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all z-10 hidden md:flex hover:scale-110 active:scale-95 ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        disabled={currentIndex === maxIndex}
        aria-label={servicesContent.carousel.next}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
              ? 'w-8 bg-white'
              : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`${servicesContent.carousel.page} ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
