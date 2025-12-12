/* eslint-disable @next/next/no-img-element */
'use client';

import { Calendar, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Como posso te ajudar' },
  { href: '#faq', label: 'Perguntas Frequentes' },
  { href: '#contato', label: 'Contato' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para meu filho.', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img
            src="/brand/small-logo.svg"
            alt="Gabriela Marinho - Pediatra"
            className="h-10 md:h-10 w-auto"
          />
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeSection === item.href.substring(1)
                    ? 'text-brand bg-brand-soft'
                    : 'text-brand hover:bg-brand-soft'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-details text-white text-sm font-semibold hover:bg-details/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-details/30"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors cursor-pointer ${activeSection === item.href.substring(1)
                  ? 'text-brand bg-brand-soft'
                  : 'text-brand hover:bg-brand-soft'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-details text-white text-base font-semibold hover:bg-details/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-details/30"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
