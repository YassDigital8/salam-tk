import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data';
import { Calendar } from 'lucide-react';
import BodyModelInteractive from '@/components/BodyModelInteractive';

const ServicesContent = () => {
  const { t, isRTL } = useLanguage();
  const [isModelOpen, setIsModelOpen] = useState(false);
  
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-salamtak-light to-white py-8">
        <div className="salamtak-container">
          <h1 className="text-3xl font-bold text-salamtak-green mb-2">
            {t('servicesTitle')}
          </h1>
          <p className="text-salamtak-brown/80 max-w-lg">
            {t('servicesSubtitle')}
          </p>
          
          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => setIsModelOpen(true)}
              className="bg-salamtak-blue text-white border-salamtak-blue hover:bg-salamtak-blue/90"
            >
              {isRTL ? 'فحص جسمك التفاعلي' : 'Interactive Body Check'}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Body Model Dialog */}
      {isModelOpen && (
        <BodyModelInteractive onClose={() => setIsModelOpen(false)} />
      )}
      
      {/* Services Grid */}
      <section className="py-8">
        <div className="salamtak-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-salamtak-blue hover:bg-salamtak-blue/90 gap-2">
              <Calendar size={18} />
              {isRTL ? 'احجز استشارة' : 'Book a Consultation'}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ServicesContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Services;
