
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, ShoppingBag, CalendarDays } from 'lucide-react';
import { products, services, features } from '@/data/appData';

const MainContent = () => {
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  return (
    <main className={isMobile ? 'pb-20' : ''}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-salamtak-cream to-salamtak-light py-8 md:py-16">
        <div className="salamtak-container">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-start">
              <h1 className="text-3xl md:text-5xl font-bold text-salamtak-brown mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-base md:text-lg text-salamtak-brown/80 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Button className="bg-salamtak-green hover:bg-salamtak-green/90 gap-2">
                  <ShoppingBag size={18} />
                  {t('exploreProducts')}
                </Button>
                <Button variant="outline" className="border-salamtak-blue text-salamtak-blue hover:bg-salamtak-blue/10 gap-2 mt-3 sm:mt-0">
                  <CalendarDays size={18} />
                  {t('bookService')}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/ea87e48b-85ae-4418-9d93-d86156246dc3.jpg" 
                alt="Wellness herbs and products" 
                className="max-w-[80%] md:max-w-sm xl:max-w-md rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-10 md:py-16">
        <div className="salamtak-container">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="section-title">{t('productsTitle')}</h2>
              <p className="section-subtitle text-base md:text-lg">{t('productsSubtitle')}</p>
            </div>
            <Button variant="ghost" className="text-salamtak-green hidden md:flex items-center gap-1">
              <span>{t('viewAll')}</span>
              <ArrowIcon size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.slice(0, isMobile ? 2 : 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <Button variant="outline" className="text-salamtak-green border-salamtak-green">
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-10 md:py-16 bg-salamtak-light">
        <div className="salamtak-container">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="section-title">{t('servicesTitle')}</h2>
              <p className="section-subtitle text-base md:text-lg">{t('servicesSubtitle')}</p>
            </div>
            <Button variant="ghost" className="text-salamtak-blue hidden md:flex items-center gap-1">
              <span>{t('viewAll')}</span>
              <ArrowIcon size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.slice(0, 2).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <Button variant="outline" className="text-salamtak-blue border-salamtak-blue">
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section with Background Image */}
      <section className="py-10 md:py-16 bg-cover bg-center relative" style={{backgroundImage: 'url("/lovable-uploads/229fc3c8-af9f-43cd-8edc-2e9758391776.jpg")'}}>
        <div className="absolute inset-0 bg-salamtak-green/40 backdrop-blur-sm"></div>
        <div className="salamtak-container relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title text-white">{t('featuresTitle')}</h2>
            <p className="text-white/90 text-base md:text-lg">{t('featuresSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Index;
