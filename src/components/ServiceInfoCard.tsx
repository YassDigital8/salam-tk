
import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceInfoCardProps {
  service: {
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
  };
}

const ServiceInfoCard = ({ service }: ServiceInfoCardProps) => {
  const { language, isRTL } = useLanguage();

  return (
    <Card>
      <CardContent className="p-6">
        <img 
          src={service.image} 
          alt={service.name[language]} 
          className="w-full aspect-video object-cover rounded-md mb-4"
        />
        
        <h3 className="text-xl font-medium text-salamtak-brown mb-2">
          {service.name[language]}
        </h3>
        
        <p className="text-sm text-salamtak-brown/70 mb-4">
          {service.description[language]}
        </p>
        
        <div className="flex items-center gap-2 text-salamtak-brown/70 mb-2">
          <Clock size={16} />
          <span>{service.duration} {isRTL ? 'دقيقة' : 'minutes'}</span>
        </div>
        
        <div className="font-bold text-salamtak-blue">
          ${service.price.toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceInfoCard;
