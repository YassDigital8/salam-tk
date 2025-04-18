
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BodyVisualizerProps } from './types';

const BodyVisualizer: React.FC<BodyVisualizerProps> = ({ selectedBodyPart, onBodyPartClick, isRTL }) => {
  const [view, setView] = React.useState<'front' | 'back'>('front');

  return (
    <div className="flex flex-col">
      <Tabs defaultValue="front" value={view} onValueChange={(v) => setView(v as 'front' | 'back')}>
        <TabsList className="mb-4">
          <TabsTrigger value="front">{isRTL ? 'أمامي' : 'Front'}</TabsTrigger>
          <TabsTrigger value="back">{isRTL ? 'خلفي' : 'Back'}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="front" className="relative">
          <img 
            src="/lovable-uploads/body-front.png" 
            alt="Front body" 
            className="w-full max-h-[400px] object-contain"
          />
          <div 
            className="absolute w-1/4 h-1/6 top-[10%] left-[37.5%] cursor-pointer hover:bg-salamtak-green/20 rounded-full transition-colors"
            onClick={() => onBodyPartClick('head')}
            style={{ border: selectedBodyPart === 'head' ? '2px solid #1a913d' : 'none' }}
          />
          <div 
            className="absolute w-[30%] h-[20%] top-[45%] left-[35%] cursor-pointer hover:bg-salamtak-green/20 rounded transition-colors"
            onClick={() => onBodyPartClick('stomach')}
            style={{ border: selectedBodyPart === 'stomach' ? '2px solid #1a913d' : 'none' }}
          />
        </TabsContent>
        
        <TabsContent value="back" className="relative">
          <img 
            src="/lovable-uploads/body-back.png" 
            alt="Back body" 
            className="w-full max-h-[400px] object-contain"
          />
          <div 
            className="absolute w-[30%] h-[30%] top-[20%] left-[35%] cursor-pointer hover:bg-salamtak-green/20 rounded transition-colors"
            onClick={() => onBodyPartClick('back')}
            style={{ border: selectedBodyPart === 'back' ? '2px solid #1a913d' : 'none' }}
          />
        </TabsContent>
      </Tabs>
      
      <p className="text-sm text-salamtak-brown/70 mt-2 text-center">
        {isRTL 
          ? 'انقر على منطقة في الجسم أو اكتب مباشرة في المحادثة للحصول على توصيات مخصصة'
          : 'Click on a body area or type directly in the chat for personalized recommendations'
        }
      </p>
    </div>
  );
};

export default BodyVisualizer;
