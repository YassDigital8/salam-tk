
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Star, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

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
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/placeholder.svg';
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
    toast.success(
      isFavorite
        ? isRTL 
          ? `تمت إزالة ${product.name.ar} من المفضلة` 
          : `${product.name.en} removed from favorites`
        : isRTL 
          ? `تمت إضافة ${product.name.ar} إلى المفضلة` 
          : `${product.name.en} added to favorites`
    );
  };

  const addToCart = () => {
    toast.success(
      isRTL 
        ? `تمت إضافة ${quantity} ${product.name.ar} إلى السلة` 
        : `${quantity} ${product.name.en} added to cart`
    );
  };
  
  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-green transition-colors">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full aspect-square object-cover"
          onError={handleImageError}
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute top-2 right-2 bg-white/70 hover:bg-white ${isFavorite ? 'text-red-500' : 'text-salamtak-brown hover:text-salamtak-green'} rounded-full`}
          onClick={toggleFavorite}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </Button>
      </div>
      
      <CardContent className="pt-4">
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
        
        <div className="flex items-center mt-3 border rounded-md w-fit">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 p-0 text-salamtak-brown"
            onClick={decrementQuantity}
          >
            <Minus size={16} />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 p-0 text-salamtak-brown"
            onClick={incrementQuantity}
          >
            <Plus size={16} />
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-salamtak-green hover:bg-salamtak-green/90 gap-2"
          onClick={addToCart}
        >
          <ShoppingBag size={16} />
          <span>{isRTL ? 'أضف إلى السلة' : 'Add to Cart'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
