import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

interface TranslationProps {
  [key: string]: {
    en: string;
    ar: string;
  };
}

// Updated translations with new app name
const translations: TranslationProps = {
  appName: {
    en: 'Salam-tak',
    ar: 'سلام-تك',
  },
  home: {
    en: 'Home',
    ar: 'الرئيسية',
  },
  products: {
    en: 'Products',
    ar: 'المنتجات',
  },
  services: {
    en: 'Services',
    ar: 'الخدمات',
  },
  profile: {
    en: 'Profile',
    ar: 'الملف الشخصي',
  },
  wellness: {
    en: 'Wellness',
    ar: 'العافية',
  },
  search: {
    en: 'Search',
    ar: 'بحث',
  },
  heroTitle: {
    en: 'Your Natural Path to Wellness',
    ar: 'طريقك الطبيعي للعافية',
  },
  heroSubtitle: {
    en: 'Discover natural products, alternative medicine services, and personalized wellness tools',
    ar: 'اكتشف المنتجات الطبيعية، وخدمات الطب البديل، وأدوات العافية المخصصة',
  },
  exploreProducts: {
    en: 'Explore Products',
    ar: 'استكشف المنتجات',
  },
  bookService: {
    en: 'Book a Service',
    ar: 'احجز خدمة',
  },
  productsTitle: {
    en: 'Natural Products',
    ar: 'المنتجات الطبيعية',
  },
  productsSubtitle: {
    en: 'Handpicked for your wellness journey',
    ar: 'منتقاة خصيصاً لرحلة عافيتك',
  },
  servicesTitle: {
    en: 'Alternative Medicine',
    ar: 'الطب البديل',
  },
  servicesSubtitle: {
    en: 'Traditional healing for modern wellness',
    ar: 'العلاج التقليدي للعافية المعاصرة',
  },
  featuresTitle: {
    en: 'Wellness Features',
    ar: 'ميزات العافية',
  },
  featuresSubtitle: {
    en: 'Tools to enhance your wellness journey',
    ar: 'أدوات لتعزيز رحلة العافية الخاصة بك',
  },
  consultations: {
    en: 'Live Consultations',
    ar: 'استشارات مباشرة',
  },
  fitnessPrograms: {
    en: 'Fitness Programs',
    ar: 'برامج اللياقة',
  },
  mentalWellness: {
    en: 'Mental Wellness',
    ar: 'العافية النفسية',
  },
  learnMore: {
    en: 'Learn More',
    ar: 'تعرف على المزيد',
  },
  viewAll: {
    en: 'View All',
    ar: 'عرض الكل',
  },
  interactiveBodyModel: {
    en: 'Interactive Body Model',
    ar: 'نموذج الجسم التفاعلي'
  },
  suggestedRemedies: {
    en: 'Suggested Remedies',
    ar: 'العلاجات المقترحة'
  },
  bookConsultation: {
    en: 'Book a Consultation',
    ar: 'احجز استشارة'
  },
  selectBodyPart: {
    en: 'Select a body part',
    ar: 'اختر جزءًا من الجسم'
  },
  addToCart: {
    en: 'Add to Cart',
    ar: 'أضف إلى السلة'
  },
  bookNow: {
    en: 'Book Now',
    ar: 'احجز الآن'
  },
  minutes: {
    en: 'mins',
    ar: 'دقيقة'
  },
  footer: {
    en: 'Salam-tak - Your Natural Path to Wellness',
    ar: 'سلام-تك - طريقك الطبيعي للعافية',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const isRTL = language === 'ar';
  
  // Apply HTML lang and dir attributes
  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
