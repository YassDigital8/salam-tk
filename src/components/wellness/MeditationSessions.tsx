
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';
import { mentalWellnessResources } from '@/data/wellness';
import type { MeditationSessionsProps } from './types';

const MeditationSessions: React.FC<MeditationSessionsProps> = ({ language, isRTL }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mentalWellnessResources.map(resource => (
        <Card 
          key={resource.id} 
          className="overflow-hidden border-salamtak-sand hover:border-salamtak-leaf transition-colors"
        >
          <div className="relative">
            <img 
              src={resource.image} 
              alt={resource.title[language]} 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <Play size={20} className="text-salamtak-green" />
              </Button>
            </div>
          </div>
          
          <CardContent className="p-4">
            <h5 className="font-medium text-salamtak-brown mb-1">
              {resource.title[language]}
            </h5>
            <div className="flex items-center justify-between">
              <span className="text-xs text-salamtak-brown/70">
                {resource.duration} {isRTL ? 'دقيقة' : 'mins'}
              </span>
              <Badge variant="outline" className="text-xs">
                {resource.category[language]}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MeditationSessions;
