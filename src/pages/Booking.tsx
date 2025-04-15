
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { services } from '@/data';
import ServiceInfoCard from '@/components/ServiceInfoCard';
import BookingForm from '@/components/BookingForm';

const BookingContent = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { isRTL } = useLanguage();
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="salamtak-container py-12 text-center">
        <h2 className="text-2xl font-bold text-salamtak-brown mb-4">
          {isRTL ? "الخدمة غير موجودة" : "Service Not Found"}
        </h2>
        <Button onClick={() => navigate('/services')}>
          {isRTL ? "العودة إلى الخدمات" : "Return to Services"}
        </Button>
      </div>
    );
  }
  
  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-gradient-to-b from-salamtak-light to-white py-8">
        <div className="salamtak-container">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/services')}
              className="text-salamtak-brown hover:text-salamtak-green"
            >
              <ArrowLeft size={24} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-salamtak-green mb-2">
                {isRTL ? "حجز خدمة" : "Book Service"}
              </h1>
              <p className="text-salamtak-brown/80 max-w-lg">
                {service.name[isRTL ? 'ar' : 'en']}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8">
        <div className="salamtak-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ServiceInfoCard service={service} />
            </div>
            
            <div className="md:col-span-2">
              <BookingForm service={service} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Booking = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <BookingContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Booking;
