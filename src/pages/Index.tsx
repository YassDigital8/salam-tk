
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
import { products, services, features } from '@/data';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const MainContent = () => {
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const handleExploreProducts = () => {
    toast({
      title: t('exploreProductsTitle'),
      description: t('exploreProductsDescription'),
    });
    navigate('/products');
  };
  
  const handleBookService = () => {
    toast({
      title: t('bookServiceTitle'),
      description: t('bookServiceDescription'),
    });
    navigate('/services');
  };
  
  const featuredProducts = products.filter(product => product.isFeatured);
  
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
                <Button 
                  className="bg-salamtak-green hover:bg-salamtak-green/90 gap-2"
                  onClick={handleExploreProducts}
                >
                  <ShoppingBag size={18} />
                  {t('exploreProducts')}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-salamtak-blue text-salamtak-blue hover:bg-salamtak-blue/10 gap-2 mt-3 sm:mt-0"
                  onClick={handleBookService}
                >
                  <CalendarDays size={18} />
                  {t('bookService')}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/0f9a78a9-8160-4723-9438-c05c95f9ac8e.png" 
                alt="Woman enjoying herbal tea with fresh herbs" 
                className="max-w-[80%] md:max-w-sm xl:max-w-md rounded-2xl shadow-lg"
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
            <Button 
              variant="ghost" 
              className="text-salamtak-green hidden md:flex items-center gap-1"
              onClick={() => navigate('/products')}
            >
              <span>{t('viewAll')}</span>
              <ArrowIcon size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <Button 
              variant="outline" 
              className="text-salamtak-green border-salamtak-green"
              onClick={() => navigate('/products')}
            >
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
            <Button 
              variant="ghost" 
              className="text-salamtak-blue hidden md:flex items-center gap-1"
              onClick={() => navigate('/services')}
            >
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
            <Button 
              variant="outline" 
              className="text-salamtak-blue border-salamtak-blue"
              onClick={() => navigate('/services')}
            >
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-10 md:py-16">
        <div className="salamtak-container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title">{t('featuresTitle')}</h2>
            <p className="section-subtitle text-base md:text-lg">{t('featuresSubtitle')}</p>
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
