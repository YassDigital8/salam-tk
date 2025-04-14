import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import FeatureCard from '@/components/FeatureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Heart, Activity } from 'lucide-react';
import { features } from '@/data';

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
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-salamtak-green mb-2">
                        {isRTL ? 'استشارات مباشرة' : 'Live Consultations'}
                      </h3>
                      <p className="text-salamtak-brown/80 mb-4">
                        {isRTL 
                          ? 'تواصل مع خبراء العافية عبر الفيديو أو الدردشة للحصول على نصائح مخصصة.' 
                          : 'Connect with wellness experts via video or chat for personalized advice.'}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'استشارات في الطب البديل' : 'Alternative Medicine Consultations'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'استشارات التغذية' : 'Nutrition Consultations'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'استشارات اللياقة البدنية' : 'Fitness Consultations'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src="/placeholder.svg" alt="Consultation" className="max-w-full rounded-lg shadow-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fitness" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-salamtak-green mb-2">
                        {isRTL ? 'برامج اللياقة المنزلية' : 'Home Fitness Programs'}
                      </h3>
                      <p className="text-salamtak-brown/80 mb-4">
                        {isRTL 
                          ? 'تمارين مخصصة تتكيف مع أهدافك الصحية وقدراتك.' 
                          : 'Customized workouts that adapt to your health goals and abilities.'}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'تمارين منزلية بسيطة' : 'Simple Home Exercises'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'برامج تمارين لكبار السن' : 'Senior-friendly Programs'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'تمارين للآلام المزمنة' : 'Exercises for Chronic Pain'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src="/placeholder.svg" alt="Fitness" className="max-w-full rounded-lg shadow-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mental" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-salamtak-green mb-2">
                        {isRTL ? 'العافية النفسية' : 'Mental Wellness'}
                      </h3>
                      <p className="text-salamtak-brown/80 mb-4">
                        {isRTL 
                          ? 'تتبع حالتك المزاجية ومارس التأمل الموجه لصحة نفسية أفضل.' 
                          : 'Track your mood and practice guided meditation for better mental health.'}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'جلسات تأمل موجهة' : 'Guided Meditations'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'نصائح لتقليل التوتر' : 'Stress Reduction Tips'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-salamtak-green"></div>
                          <span>{isRTL ? 'تتبع الحالة المزاجية' : 'Mood Tracking'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src="/placeholder.svg" alt="Mental wellness" className="max-w-full rounded-lg shadow-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>
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
