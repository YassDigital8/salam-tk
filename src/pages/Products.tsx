import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import ProductCard from '@/components/ProductCard';
import ProductCategorySelector from '@/components/ProductCategorySelector';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { products, productCategories } from '@/data';
import { useState } from 'react';

const ProductsContent = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.name.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.ar.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-salamtak-light py-8">
        <div className="salamtak-container">
          <h1 className="text-3xl font-bold text-salamtak-green mb-2">
            {t('productsTitle')}
          </h1>
          <p className="text-salamtak-brown/80 max-w-lg">
            {t('productsSubtitle')}
          </p>
        </div>
      </section>
      
      <section className="py-6 border-b border-salamtak-sand">
        <div className="salamtak-container">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search size={18} className="absolute top-1/2 transform -translate-y-1/2 left-3 text-salamtak-brown/50" />
              <Input 
                placeholder={isRTL ? "ابحث عن المنتجات..." : "Search products..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-salamtak-sand"
              />
            </div>
            
            <ProductCategorySelector 
              categories={productCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>
      
      <section className="py-8">
        <div className="salamtak-container">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-salamtak-brown/70">
                {isRTL ? "لا توجد منتجات متطابقة مع البحث" : "No products match your search"}
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                {isRTL ? "مسح البحث" : "Clear Search"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const Products = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ProductsContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Products;
