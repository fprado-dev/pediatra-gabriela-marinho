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
