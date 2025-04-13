
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import { features } from '@/data/appData';
import FeatureCard from '@/components/FeatureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Heart, Activity } from 'lucide-react';

const WellnessContent = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-16 relative" 
               style={{backgroundImage: 'url("/lovable-uploads/41c7e988-c548-4ba2-b6ba-aa2c70d60ea7.jpg")'}}>
        <div className="absolute inset-0 bg-salamtak-leaf/50 backdrop-blur-[1px]"></div>
        <div className="salamtak-container relative z-10">
          <div className="max-w-lg bg-white/90 p-6 rounded-lg shadow-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-salamtak-leaf mb-2">
              {t('featuresTitle')}
            </h1>
            <p className="text-salamtak-brown/80">
              {t('featuresSubtitle')}
            </p>
          </div>
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
                      <img src="/lovable-uploads/448e4e23-fcc8-40be-b8bc-ab57f936d7a7.jpg" alt="Consultation" className="max-w-full rounded-lg shadow-md" />
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
                      <img src="/lovable-uploads/fd86b7c9-e0fe-418e-a0a5-6fdc7415ca09.jpg" alt="Fitness" className="max-w-full rounded-lg shadow-md" />
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
                      <img src="/lovable-uploads/3240d530-74cd-4f0c-80bb-3fe2602902c0.jpg" alt="Mental wellness" className="max-w-full rounded-lg shadow-md" />
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
