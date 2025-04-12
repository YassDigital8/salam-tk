
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
    <header className="bg-salamtak-light sticky top-0 z-50 shadow-sm">
      <div className="salamtak-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2004b7be-7bdf-4f8a-8e28-797373031c0e.png" 
                alt="Salamtak Logo" 
                className="h-10 md:h-12" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-salamtak-brown hover:text-salamtak-green transition-colors font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            
            <Button variant="ghost" size="icon" className="text-salamtak-brown hover:text-salamtak-green hover:bg-salamtak-cream">
              <Heart size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-salamtak-brown hover:text-salamtak-green hover:bg-salamtak-cream">
              <ShoppingBag size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-salamtak-brown hover:text-salamtak-green hover:bg-salamtak-cream">
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
              className="text-salamtak-brown"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-salamtak-sand mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-salamtak-brown hover:text-salamtak-green transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex space-x-4 rtl:space-x-reverse pt-2 border-t border-salamtak-sand">
                <Button variant="ghost" size="icon" className="text-salamtak-brown">
                  <Heart size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-salamtak-brown">
                  <ShoppingBag size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-salamtak-brown">
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
