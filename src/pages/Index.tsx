
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, ShoppingBag, CalendarDays } from 'lucide-react';
import { products, services, features } from '@/data/appData';

const MainContent = () => {
  const { t, isRTL } = useLanguage();
  
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-salamtak-cream to-salamtak-light py-16">
        <div className="salamtak-container">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-start">
              <h1 className="text-4xl md:text-5xl font-bold text-salamtak-brown mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-lg text-salamtak-brown/80 mb-8 max-w-lg mx-auto md:mx-0">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-salamtak-green hover:bg-salamtak-green/90 gap-2">
                  <ShoppingBag size={18} />
                  {t('exploreProducts')}
                </Button>
                <Button size="lg" variant="outline" className="border-salamtak-blue text-salamtak-blue hover:bg-salamtak-blue/10 gap-2">
                  <CalendarDays size={18} />
                  {t('bookService')}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Wellness illustration" 
                className="max-w-xs md:max-w-sm xl:max-w-md rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="salamtak-container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="section-title">{t('productsTitle')}</h2>
              <p className="section-subtitle">{t('productsSubtitle')}</p>
            </div>
            <Button variant="ghost" className="text-salamtak-green hidden md:flex items-center gap-1">
              <span>{t('viewAll')}</span>
              <ArrowIcon size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="text-salamtak-green border-salamtak-green">
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-salamtak-light">
        <div className="salamtak-container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="section-title">{t('servicesTitle')}</h2>
              <p className="section-subtitle">{t('servicesSubtitle')}</p>
            </div>
            <Button variant="ghost" className="text-salamtak-blue hidden md:flex items-center gap-1">
              <span>{t('viewAll')}</span>
              <ArrowIcon size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="text-salamtak-blue border-salamtak-blue">
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="salamtak-container">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('featuresTitle')}</h2>
            <p className="section-subtitle">{t('featuresSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
