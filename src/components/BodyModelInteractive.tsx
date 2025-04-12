
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { X, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';

interface BodyPart {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  remedies: {
    en: string[];
    ar: string[];
  };
}

const mockBodyParts: BodyPart[] = [
  {
    id: 'head',
    name: {
      en: 'Head',
      ar: 'الرأس'
    },
    remedies: {
      en: ['Lavender Oil', 'Chamomile Tea', 'Ginger'],
      ar: ['زيت اللافندر', 'شاي البابونج', 'زنجبيل']
    }
  },
  {
    id: 'back',
    name: {
      en: 'Back',
      ar: 'الظهر'
    },
    remedies: {
      en: ['Cupping Therapy', 'Arnica Oil', 'Turmeric'],
      ar: ['العلاج بالحجامة', 'زيت الأرنيكا', 'كركم']
    }
  },
  {
    id: 'stomach',
    name: {
      en: 'Stomach',
      ar: 'المعدة'
    },
    remedies: {
      en: ['Peppermint Tea', 'Ginger', 'Chamomile'],
      ar: ['شاي النعناع', 'زنجبيل', 'بابونج']
    }
  }
];

interface BodyModelInteractiveProps {
  onClose: () => void;
}

const BodyModelInteractive = ({ onClose }: BodyModelInteractiveProps) => {
  const { t, language, isRTL } = useLanguage();
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [view, setView] = useState<'front' | 'back'>('front');
  
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;
  
  const handleBodyPartClick = (partId: string) => {
    setSelectedBodyPart(partId);
  };
  
  const selectedPartInfo = selectedBodyPart 
    ? mockBodyParts.find(part => part.id === selectedBodyPart) 
    : null;
  
  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-salamtak-blue text-xl flex items-center justify-between">
            <span>{isRTL ? 'نموذج الجسم التفاعلي' : 'Interactive Body Model'}</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
          {/* Body Model */}
          <div className="col-span-3 flex flex-col items-center justify-center">
            <Tabs defaultValue="front" value={view} onValueChange={(v) => setView(v as 'front' | 'back')}>
              <TabsList className="mb-4">
                <TabsTrigger value="front">{isRTL ? 'أمامي' : 'Front'}</TabsTrigger>
                <TabsTrigger value="back">{isRTL ? 'خلفي' : 'Back'}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="front" className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Front body" 
                  className="w-full max-h-[400px] object-contain"
                />
                
                {/* Clickable areas - front view */}
                <div 
                  className="absolute w-1/4 h-1/6 top-[10%] left-[37.5%] cursor-pointer hover:bg-salamtak-green/20 rounded-full transition-colors"
                  onClick={() => handleBodyPartClick('head')}
                  style={{ border: selectedBodyPart === 'head' ? '2px solid #1a913d' : 'none' }}
                />
                <div 
                  className="absolute w-[30%] h-[20%] top-[45%] left-[35%] cursor-pointer hover:bg-salamtak-green/20 rounded transition-colors"
                  onClick={() => handleBodyPartClick('stomach')}
                  style={{ border: selectedBodyPart === 'stomach' ? '2px solid #1a913d' : 'none' }}
                />
              </TabsContent>
              
              <TabsContent value="back" className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Back body" 
                  className="w-full max-h-[400px] object-contain"
                />
                
                {/* Clickable areas - back view */}
                <div 
                  className="absolute w-[30%] h-[30%] top-[20%] left-[35%] cursor-pointer hover:bg-salamtak-green/20 rounded transition-colors"
                  onClick={() => handleBodyPartClick('back')}
                  style={{ border: selectedBodyPart === 'back' ? '2px solid #1a913d' : 'none' }}
                />
              </TabsContent>
            </Tabs>
            
            <p className="text-sm text-salamtak-brown/70 mt-2 flex items-center gap-1">
              <HelpCircle size={14} />
              {isRTL ? 'انقر على منطقة في الجسم للحصول على التوصيات' : 'Click on an area of the body for recommendations'}
            </p>
          </div>
          
          {/* Remedies */}
          <div className="col-span-2 bg-salamtak-cream/50 p-4 rounded-md">
            {selectedPartInfo ? (
              <>
                <h3 className="text-lg font-medium text-salamtak-brown mb-2">
                  {selectedPartInfo.name[language]}
                </h3>
                <hr className="my-2 border-salamtak-brown/20" />
                <h4 className="font-medium text-salamtak-green mb-1">
                  {isRTL ? 'العلاجات المقترحة:' : 'Suggested Remedies:'}
                </h4>
                <ul className="space-y-1">
                  {selectedPartInfo.remedies[language].map((remedy, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronIcon size={16} className="text-salamtak-green" />
                      <span>{remedy}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-4 bg-salamtak-blue hover:bg-salamtak-blue/90"
                >
                  {isRTL ? 'احجز استشارة' : 'Book a Consultation'}
                </Button>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <img 
                  src="/placeholder.svg" 
                  alt="Select body part" 
                  className="w-16 h-16 mb-3 opacity-50" 
                />
                <p className="text-salamtak-brown/70">
                  {isRTL 
                    ? 'يرجى النقر على منطقة في الجسم للحصول على توصيات مخصصة' 
                    : 'Please click on an area of the body for personalized recommendations'}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BodyModelInteractive;
