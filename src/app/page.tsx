import AboutSection from '@/components/AboutSection';
import ConsultationProcessSection from '@/components/ConsultationProcessSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicesSection from '@/components/ServicesSection';
import SpecializedCareSection from '@/components/SpecializedCareSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FullpageScroll from '@/components/FullpageScroll';

export default function Home() {
  return (
    <main className="min-h-screen overscroll-y-contain">
      <SchemaMarkup />
      <Navigation />
      <FullpageScroll />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecializedCareSection />
      <ConsultationProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
