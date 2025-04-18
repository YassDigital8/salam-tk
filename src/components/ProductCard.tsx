import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Star, Plus, Minus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

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
    inStock?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, isRTL } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  
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
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite 
        ? (isRTL ? 'تم إزالة المنتج من المفضلة' : 'Removed from favorites') 
        : (isRTL ? 'تمت إضافة المنتج إلى المفضلة' : 'Added to favorites'),
      description: product.name[language],
    });
  };
  
  const addToCart = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      toast({
        title: isRTL ? 'تسجيل الدخول مطلوب' : 'Authentication Required',
        description: isRTL 
          ? 'يرجى تسجيل الدخول لإضافة المنتجات إلى سلة التسوق' 
          : 'Please sign in to add products to your cart',
      });
      navigate('/auth');
      return;
    }

    toast({
      title: isRTL ? 'تمت الإضافة إلى السلة' : 'Added to cart',
      description: `${product.name[language]} × ${quantity}`,
    });
  };
  
  const viewDetails = () => {
    toast({
      title: isRTL ? 'عرض تفاصيل المنتج' : 'View product details',
      description: product.name[language],
    });
  };
  
  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-green transition-colors h-full flex flex-col">
      <div className="relative cursor-pointer" onClick={viewDetails}>
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full aspect-square object-cover"
          onError={handleImageError}
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute top-2 right-2 ${isFavorite ? 'bg-salamtak-cream text-salamtak-green' : 'bg-white/70 hover:bg-white text-salamtak-brown hover:text-salamtak-green'} rounded-full`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </Button>
        {product.inStock === false && (
          <div className="absolute bottom-0 left-0 right-0 bg-salamtak-brown/80 text-white text-center py-1 text-sm">
            {isRTL ? 'غير متوفر' : 'Out of stock'}
          </div>
        )}
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="flex items-center justify-between cursor-pointer" onClick={viewDetails}>
          <h3 className="font-medium text-salamtak-brown">
            {product.name[language]}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-salamtak-brown/70 mt-1 line-clamp-2 cursor-pointer" onClick={viewDetails}>
          {product.description[language]}
        </p>
        <div className="mt-2 font-bold text-salamtak-green">
          ${product.price.toFixed(2)}
        </div>
        
        {product.inStock !== false && (
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
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-salamtak-green hover:bg-salamtak-green/90 gap-2"
          onClick={addToCart}
          disabled={product.inStock === false}
        >
          <ShoppingBag size={16} />
          <span>{isRTL ? 'أضف إلى السلة' : 'Add to Cart'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
