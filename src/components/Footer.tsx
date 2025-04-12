
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-salamtak-cream text-salamtak-brown pt-10 pb-6">
      <div className="salamtak-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('appName')}</h3>
            <p className="text-sm text-salamtak-brown/80 mb-4">
              {isRTL 
                ? 'سلامتك هو تطبيقك الشامل للعافية الذي يجمع بين المنتجات الطبيعية، وخدمات الطب البديل، وأدوات العافية المخصصة.'
                : 'Salamtak is your comprehensive wellness app combining natural products, alternative medicine services, and personalized wellness tools.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-salamtak-brown hover:text-salamtak-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-salamtak-brown hover:text-salamtak-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-salamtak-brown hover:text-salamtak-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-salamtak-brown/80 hover:text-salamtak-green transition-colors text-sm">
                  {isRTL ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#" className="text-salamtak-brown/80 hover:text-salamtak-green transition-colors text-sm">
                  {isRTL ? 'التواصل' : 'Contact'}
                </a>
              </li>
              <li>
                <a href="#" className="text-salamtak-brown/80 hover:text-salamtak-green transition-colors text-sm">
                  {isRTL ? 'الأسئلة الشائعة' : 'FAQs'}
                </a>
              </li>
              <li>
                <a href="#" className="text-salamtak-brown/80 hover:text-salamtak-green transition-colors text-sm">
                  {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#" className="text-salamtak-brown/80 hover:text-salamtak-green transition-colors text-sm">
                  {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Language */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <address className="text-sm text-salamtak-brown/80 not-italic space-y-2 mb-4">
              <p>{isRTL ? 'البريد الإلكتروني: info@salamtak.com' : 'Email: info@salamtak.com'}</p>
              <p>{isRTL ? 'الهاتف: +123 456 7890' : 'Phone: +123 456 7890'}</p>
            </address>
            <div className="mt-4">
              <h4 className="font-medium mb-1">
                {isRTL ? 'اللغة' : 'Language'}
              </h4>
              <LanguageToggle />
            </div>
          </div>
        </div>
        
        <div className="border-t border-salamtak-sand mt-8 pt-6 text-center text-sm text-salamtak-brown/60">
          <p>© {currentYear} {t('appName')}. {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
