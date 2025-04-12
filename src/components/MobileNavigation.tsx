
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ShoppingBag, User, HeartPulse, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="mobile-nav ios-pb-safe">
      <Link to="/" className={`mobile-nav-item ${isActive('/') ? 'text-salamtak-green' : 'text-salamtak-brown'}`}>
        <Home size={24} />
        <span className="text-xs mt-1">{t('home')}</span>
      </Link>
      <Link to="/products" className={`mobile-nav-item ${isActive('/products') ? 'text-salamtak-green' : 'text-salamtak-brown'}`}>
        <ShoppingBag size={24} />
        <span className="text-xs mt-1">{t('products')}</span>
      </Link>
      <Link to="/services" className={`mobile-nav-item ${isActive('/services') ? 'text-salamtak-green' : 'text-salamtak-brown'}`}>
        <HeartPulse size={24} />
        <span className="text-xs mt-1">{t('services')}</span>
      </Link>
      <Link to="/wellness" className={`mobile-nav-item ${isActive('/wellness') ? 'text-salamtak-green' : 'text-salamtak-brown'}`}>
        <Heart size={24} />
        <span className="text-xs mt-1">{t('wellness')}</span>
      </Link>
      <Link to="/profile" className={`mobile-nav-item ${isActive('/profile') ? 'text-salamtak-green' : 'text-salamtak-brown'}`}>
        <User size={24} />
        <span className="text-xs mt-1">{t('profile')}</span>
      </Link>
    </nav>
  );
};

export default MobileNavigation;
