import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageToggle from './LanguageToggle';
import { Menu, X, User, ShoppingBag, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'products', href: '/products' },
    { key: 'services', href: '/services' },
    { key: 'wellness', href: '/wellness' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm ios-pt-safe">
      <div className="salamtak-container py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png" 
                alt="Salamtak Logo" 
                className="h-10 md:h-16" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`transition-colors font-medium ${
                  isActive(item.href) 
                    ? 'text-salamtak-green' 
                    : 'text-salamtak-brown hover:text-salamtak-green'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            
            <Button variant="ghost" size="icon" className="text-salamtak-green hover:text-[#8eca39] hover:bg-green-50">
              <Heart size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-salamtak-green hover:text-[#8eca39] hover:bg-green-50">
              <ShoppingBag size={20} />
            </Button>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-salamtak-green hover:text-[#8eca39] hover:bg-green-50">
                <User size={20} />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4 rtl:space-x-reverse">
            {!isMobile && <LanguageToggle />}
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-salamtak-green"
              >
                <Search size={22} />
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-salamtak-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-100 mt-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`transition-colors font-medium px-2 py-1 ${
                    isActive(item.href) 
                      ? 'text-salamtak-green' 
                      : 'text-salamtak-brown hover:text-salamtak-green'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              <LanguageToggle />
              
              <div className="flex space-x-4 rtl:space-x-reverse pt-2 border-t border-green-100">
                <Button variant="ghost" size="icon" className="text-salamtak-green">
                  <Heart size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-salamtak-green">
                  <ShoppingBag size={20} />
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" size="icon" className="text-salamtak-green">
                    <User size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
