
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    price: number;
    image: string;
    rating: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, isRTL } = useLanguage();
  
  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-green transition-colors h-full flex flex-col">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full aspect-square object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/70 hover:bg-white text-salamtak-brown hover:text-salamtak-green rounded-full"
        >
          <Heart size={18} />
        </Button>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-salamtak-brown">
            {product.name[language]}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-salamtak-brown/70 mt-1 line-clamp-2">
          {product.description[language]}
        </p>
        <div className="mt-2 font-bold text-salamtak-green">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-salamtak-green hover:bg-salamtak-green/90 gap-2"
        >
          <ShoppingBag size={16} />
          <span>{isRTL ? 'أضف إلى السلة' : 'Add to Cart'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
