
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Activity, Heart } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    icon: string;
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { language, t } = useLanguage();
  
  // Map icon strings to components
  const getIcon = (iconName: string) => {
    const icons = {
      'Video': <Video size={32} className="text-salamtak-leaf" />,
      'Activity': <Activity size={32} className="text-salamtak-leaf" />,
      'Heart': <Heart size={32} className="text-salamtak-leaf" />
    };
    return icons[iconName as keyof typeof icons] || null;
  };

  return (
    <Card className="overflow-hidden border-salamtak-sand hover:border-salamtak-leaf transition-colors h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4">
          {getIcon(feature.icon)}
        </div>
        <h3 className="font-medium text-lg text-salamtak-brown mb-2">
          {feature.name[language]}
        </h3>
        <p className="text-sm text-salamtak-brown/70">
          {feature.description[language]}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="outline"
          className="w-full border-salamtak-leaf text-salamtak-brown hover:text-salamtak-leaf"
        >
          {t('learnMore')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
