
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ShoppingBag, User, HeartPulse, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="mobile-nav ios-pb-safe">
      <Link to="/" className="mobile-nav-item text-salamtak-green">
        <Home size={24} />
        <span className="text-xs mt-1">{t('home')}</span>
      </Link>
      <Link to="/products" className="mobile-nav-item text-salamtak-brown">
        <ShoppingBag size={24} />
        <span className="text-xs mt-1">{t('products')}</span>
      </Link>
      <Link to="/services" className="mobile-nav-item text-salamtak-brown">
        <HeartPulse size={24} />
        <span className="text-xs mt-1">{t('services')}</span>
      </Link>
      <Link to="/search" className="mobile-nav-item text-salamtak-brown">
        <Search size={24} />
        <span className="text-xs mt-1">{t('search')}</span>
      </Link>
      <Link to="/profile" className="mobile-nav-item text-salamtak-brown">
        <User size={24} />
        <span className="text-xs mt-1">{t('profile')}</span>
      </Link>
    </nav>
  );
};

export default MobileNavigation;
