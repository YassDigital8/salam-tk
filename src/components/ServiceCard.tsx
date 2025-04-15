
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

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
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();
  const [calendlyUrl, setCalendlyUrl] = useState<string>('');
  
  const handleBookNow = () => {
    // For demonstration, using a placeholder Calendly URL
    // In a real implementation, this would be replaced with your actual Calendly URL
    // or each service could have its own specific calendly link
    setCalendlyUrl('https://calendly.com/your-account');
    setIsBookingOpen(true);
    
    toast({
      title: isRTL ? 'جاري التحميل...' : 'Loading scheduler...',
      description: isRTL ? 'يرجى الانتظار بينما نقوم بتحميل نظام الحجز' : 'Please wait while we load the booking system',
    });
  };
  
  return (
    <>
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
      
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isRTL ? 'حجز موعد' : 'Schedule Appointment'}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            {calendlyUrl && (
              <iframe 
                src={calendlyUrl}
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Calendly Scheduling"
                className="rounded-md"
              />
            )}
            <div className="text-center text-sm text-salamtak-brown/70">
              {isRTL 
                ? 'يمكنك اختيار الوقت والتاريخ المناسبين لك' 
                : 'Choose a date and time that works for you'}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
