import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InternationalSupport from './components/InternationalSupport';
import ServicesSection from './components/ServicesSection';
import TechStack from './components/TechStack';
import Certificates from './components/Certificates';
import WhyUsAndProcess from './components/WhyUsAndProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { BUSINESS_INFO } from './data/content';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Australian Bookkeeping Support');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('General Advisory Consultation')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with animated counters & quick overview */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Australian & Offshore Bookkeeping')} />

        {/* 2. Global Offshore & Australian Accounting Practice Support */}
        <InternationalSupport onOpenConsultation={() => handleOpenConsultation('Australian Practice Support')} />

        {/* 3. Comprehensive Services: Business Guardian & Wealth Guardian */}
        <ServicesSection onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)} />

        {/* 4. Accounting Technology & Workflow Ecosystem */}
        <TechStack onOpenConsultation={() => handleOpenConsultation('Software Migration & Tech Integration')} />

        {/* 5. Verified Certifications & Professional Standards */}
        <Certificates />

        {/* 6. Why Us, 5-Step Partnership Process & Who We Support */}
        <WhyUsAndProcess />

        {/* 7. Contact Details, Direct Message Form & FAQ Accordion */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation / Scope Estimation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedService}
      />

      {/* Persistent Floating Quick-Action Button for WhatsApp */}
      <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(
            'Hello TrueLibro Team, I would like to inquire about accounting & bookkeeping services.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 group border-2 border-white"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.contact.phone}`}
          aria-label="Call TrueLibro"
          className="w-13 h-13 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 sm:hidden border-2 border-white"
        >
          <Phone className="w-5 h-5 text-rose-400" />
          <span className="sr-only">Call TrueLibro</span>
        </a>
      </aside>
    </div>
  );
}
