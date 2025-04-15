
import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import FeatureCard from '@/components/FeatureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Heart, Activity, Calendar, Clock, Play, User, CheckCircle } from 'lucide-react';
import { features } from '@/data';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import LiveConsultationSection from '@/components/wellness/LiveConsultationSection';
import FitnessProgramsSection from '@/components/wellness/FitnessProgramsSection';
import MentalWellnessSection from '@/components/wellness/MentalWellnessSection';

const WellnessContent = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-salamtak-light to-white py-8">
        <div className="salamtak-container">
          <h1 className="text-3xl font-bold text-salamtak-green mb-2">
            {t('featuresTitle')}
          </h1>
          <p className="text-salamtak-brown/80 max-w-lg">
            {t('featuresSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Features Cards */}
      <section className="py-8">
        <div className="salamtak-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-8 bg-salamtak-cream/20">
        <div className="salamtak-container">
          <Tabs defaultValue="consultations">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="consultations" className="flex items-center gap-2">
                <Video size={16} />
                <span>{t('consultations')}</span>
              </TabsTrigger>
              <TabsTrigger value="fitness" className="flex items-center gap-2">
                <Activity size={16} />
                <span>{t('fitnessPrograms')}</span>
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center gap-2">
                <Heart size={16} />
                <span>{t('mentalWellness')}</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="consultations" className="mt-6">
              <LiveConsultationSection />
            </TabsContent>
            
            <TabsContent value="fitness" className="mt-6">
              <FitnessProgramsSection />
            </TabsContent>
            
            <TabsContent value="mental" className="mt-6">
              <MentalWellnessSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

const Wellness = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <WellnessContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Wellness;
