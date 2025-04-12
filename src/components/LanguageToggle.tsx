
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-salamtak-brown hover:text-salamtak-green hover:bg-salamtak-cream transition-colors"
    >
      <Languages size={18} />
      <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
