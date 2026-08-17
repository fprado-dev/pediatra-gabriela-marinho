import AboutSection from '@/components/AboutSection';
import ConsultationModalitiesSection from '@/components/ConsultationModalitiesSection';
import ConsultationProcessSection from '@/components/ConsultationProcessSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FullpageScroll from '@/components/FullpageScroll';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import ServicesSection from '@/components/ServicesSection';
import SpecializedCareSection from '@/components/SpecializedCareSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      {/* Cada deslize para exatamente em uma seção. Fica aqui, e não no
          globals.css, porque só a home tem seções de tela cheia: solto no
          global o snap obrigatório valia no /bio também e a página grudava
          no rodapé em vez de rolar. */}
      <style>{`
        @media (max-width: 767px) and (prefers-reduced-motion: no-preference) {
          html { scroll-snap-type: y mandatory; scroll-padding-top: 0; }
          main > section { scroll-snap-align: start; scroll-snap-stop: always; }
          footer { scroll-snap-align: end; }
        }
      `}</style>
      <ScrollProgress />
      <Navigation />
      <FullpageScroll />
      <main className="overscroll-y-contain">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecializedCareSection />
        <ConsultationProcessSection />
        <ConsultationModalitiesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
