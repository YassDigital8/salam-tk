
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Leaf, Cup, Sparkles, Pill, Home } from 'lucide-react';

interface Category {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  icon: string;
}

interface ProductCategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ProductCategorySelector = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: ProductCategorySelectorProps) => {
  const { language } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Leaf': return <Leaf size={18} />;
      case 'Cup': return <Cup size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Pill': return <Pill size={18} />;
      case 'Home': return <Home size={18} />;
      default: return <Leaf size={18} />;
    }
  };

  return (
    <ScrollArea className="w-full">
      <Tabs 
        defaultValue="all" 
        value={selectedCategory} 
        onValueChange={onSelectCategory}
        className="w-full"
      >
        <TabsList className="w-full flex justify-start overflow-x-auto">
          <TabsTrigger 
            value="all" 
            className="flex items-center gap-1.5"
          >
            {language === 'en' ? 'All' : 'الكل'}
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              className="flex items-center gap-1.5"
            >
              {getIcon(category.icon)}
              {category.name[language]}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </ScrollArea>
  );
};

export default ProductCategorySelector;
