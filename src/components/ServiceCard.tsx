
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

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
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    // Navigate to the booking page with service ID
    navigate(`/booking/${service.id}`);
    
    toast({
      title: isRTL ? 'جاري الإنتقال إلى صفحة الحجز...' : 'Navigating to booking page...',
      description: isRTL 
        ? 'سيتم تحويلك إلى صفحة حجز الخدمة' 
        : 'You will be redirected to the service booking page',
    });
  };
  
  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-blue transition-colors">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.name[language]} 
          className="w-full aspect-video object-cover"
        />
      </div>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-salamtak-brown">
            {service.name[language]}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{service.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-salamtak-brown/70 mt-1 line-clamp-2">
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
          onClick={handleBookNow}
        >
          <Calendar size={16} />
          <span>{isRTL ? 'احجز الآن' : 'Book Now'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
