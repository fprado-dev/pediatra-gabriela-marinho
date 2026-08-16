/* eslint-disable @next/next/no-img-element */
'use client';

import { LATTES_URL } from '@/lib/links';
import { whatsappUrl } from '@/lib/whatsapp';
import { getContent } from '@/lib/content';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const { navigation, hero } = getContent();

const navItems = [
  { href: '#inicio', label: navigation.items.home },
  { href: '#sobre', label: navigation.items.about },
  { href: '#servicos', label: navigation.items.services },
  { href: '#faq', label: navigation.items.faq },
  { href: '#contato', label: navigation.items.contact },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  // solta no topo do hero; vira fixa e só reaparece quando o scroll sobe
  const [pinned, setPinned] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const heroHeight = document.getElementById('inicio')?.offsetHeight ?? window.innerHeight;

      if (y < heroHeight * .5) {
        setPinned(false);
        setHidden(false);
      } else {
        setPinned(true);
        setHidden(!isMenuOpen && y >= lastY);
      }
      lastY = y;

      for (const { href } of navItems) {
        const element = document.getElementById(href.substring(1));
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (y + 100 >= offsetTop && y + 100 < offsetTop + offsetHeight) {
          setActiveSection(href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeSection === href.substring(1)
      ? 'text-brand-deep'
      : 'text-muted hover:text-ink hover:bg-brand-wash'
    }`;

  return (
    <motion.nav
      className={`top-0 inset-x-0 z-50 h-[var(--nav-height)] flex items-center border-b transition-colors ${pinned
        ? 'fixed bg-ground/90 backdrop-blur-md backdrop-saturate-150 border-line'
        : 'absolute bg-transparent border-transparent'
        }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
      transition={{ duration: .4, ease: [.2, .8, .3, 1] }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-20 w-full flex items-center gap-6">
        <button onClick={() => scrollToSection('#inicio')} aria-label={hero.altLogo} className="cursor-pointer">
          <img src="/brand/small-logo.svg" alt={hero.altLogo} className="h-10 w-auto" />
        </button>

        <div className="hidden lg:flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollToSection(item.href)} className={linkClass(item.href)}>
              {item.label}
            </button>
          ))}

          <a
            href={LATTES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-line-strong text-sm font-medium text-muted hover:text-ink hover:bg-brand-wash transition-colors"
          >
            {navigation.lattes}
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral-deep transition-colors"
          >
            <Calendar className="w-4 h-4" />
            {navigation.cta}
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-auto p-2 text-ink cursor-pointer"
          aria-label={isMenuOpen ? navigation.menuClose : navigation.menuOpen}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-[var(--nav-height)] inset-x-0 bg-ground border-b border-line overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3, ease: 'easeInOut' }}
          >
            <div className="px-5 sm:px-8 pb-6 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3.5 border-b border-line text-base font-medium cursor-pointer transition-colors ${activeSection === item.href.substring(1) ? 'text-brand-deep' : 'text-muted'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href={LATTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-3.5 border-b border-line text-base font-medium text-muted"
              >
                {navigation.lattes}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-coral text-white text-base font-semibold"
              >
                <Calendar className="w-5 h-5" />
                {navigation.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
