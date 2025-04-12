
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X, User, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'products', href: '/products' },
    { key: 'services', href: '/services' },
    { key: 'wellness', href: '/wellness' }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="salamtak-container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png" 
                alt="Salamtak Logo" 
                className="h-12 md:h-16" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-salamtak-green hover:text-[#8eca39] transition-colors font-medium"
              >
                {t(item.key)}
              </a>
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
            
            <Button variant="ghost" size="icon" className="text-salamtak-green hover:text-[#8eca39] hover:bg-green-50">
              <User size={20} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
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
          <nav className="md:hidden py-4 border-t border-green-100 mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-salamtak-green hover:text-[#8eca39] transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex space-x-4 rtl:space-x-reverse pt-2 border-t border-green-100">
                <Button variant="ghost" size="icon" className="text-salamtak-green">
                  <Heart size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-salamtak-green">
                  <ShoppingBag size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-salamtak-green">
                  <User size={20} />
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
