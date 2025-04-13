import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    duration: number;
    price: number;
    image: string;
    rating: number;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { language, isRTL } = useLanguage();
  
  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
      return imagePath;
    }
    
    return imagePath;
  };
  
  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-blue transition-colors h-full flex flex-col">
      <div className="relative bg-gray-100">
        <img 
          src={getImageUrl(service.image)} 
          alt={service.name[language]} 
          className="w-full aspect-video object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
            console.log('Image failed to load:', service.image);
          }}
        />
        <div className="absolute top-2 right-2 bg-white/70 rounded-full px-2 py-1 flex items-center gap-1 text-amber-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{service.rating}</span>
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-medium text-salamtak-brown text-lg">
          {service.name[language]}
        </h3>
        
        <p className="text-sm text-salamtak-brown/70 mt-2 mb-3">
          {service.description[language]}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-salamtak-brown/70">
            <Clock size={16} />
            <span className="text-sm">{service.duration} {isRTL ? 'دقيقة' : 'mins'}</span>
          </div>
          <div className="font-bold text-salamtak-blue">
            ${service.price.toFixed(2)}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-salamtak-blue hover:bg-salamtak-blue/90 gap-2"
        >
          <Calendar size={16} />
          <span>{isRTL ? 'احجز الآن' : 'Book Now'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
