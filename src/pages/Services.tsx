
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data';
import { ArrowLeft } from 'lucide-react';

const ServicesContent = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-salamtak-light to-white py-8">
        <div className="salamtak-container">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/')}
              className="text-salamtak-brown hover:text-salamtak-green"
            >
              <ArrowLeft size={24} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-salamtak-green mb-2">
                {t('servicesTitle')}
              </h1>
              <p className="text-salamtak-brown/80 max-w-lg">
                {t('servicesSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-8">
        <div className="salamtak-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="max-w-lg mx-auto bg-salamtak-light/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-salamtak-green mb-3">
                {isRTL ? 'تفضل طريقة حجز أخرى؟' : 'Prefer another booking method?'}
              </h3>
              <p className="text-salamtak-brown/80 mb-4">
                {isRTL 
                  ? 'يمكنك أيضًا حجز موعد عن طريق الاتصال بنا مباشرة أو إرسال رسالة'
                  : 'You can also book an appointment by calling us directly or sending a message'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-salamtak-green hover:bg-salamtak-green/90">
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </Button>
                <Button variant="outline" className="border-salamtak-green text-salamtak-green hover:bg-salamtak-green/10">
                  {isRTL ? 'أرسل رسالة' : 'Send Message'}
                </Button>
              </div>
            </div>
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
