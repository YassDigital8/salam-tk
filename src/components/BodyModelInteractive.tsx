import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { ChatMessage } from '@/types/chat';
import ChatInterface from './ChatInterface';
import { v4 as uuidv4 } from '@/utils/uuid';
import Bot from '@/components/ui/bot';

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
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuidv4(),
      role: 'assistant',
      content: isRTL 
        ? 'مرحباً! أنا مستشار سلامتك. كيف يمكنني مساعدتك اليوم؟ يمكنك النقر على منطقة في الجسم أو إخباري مباشرة عن ما تشعر به.'
        : 'Hello! I am your Salam-tk consultant. How can I help you today? You can click on a body area or tell me directly how you feel.',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBodyPartClick = (partId: string) => {
    setSelectedBodyPart(partId);
    const selectedPart = mockBodyParts.find(part => part.id === partId);
    if (selectedPart) {
      const newMessage: ChatMessage = {
        id: uuidv4(),
        role: 'user',
        content: isRTL 
          ? `أشعر بألم في ${selectedPart.name.ar}`
          : `I have pain in my ${selectedPart.name.en.toLowerCase()}`,
        timestamp: new Date(),
      };
      
      const botResponse: ChatMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: isRTL
          ? `بناءً على ما وصفته، إليك بعض العلاجات المقترحة: ${selectedPart.remedies.ar.join('، ')}`
          : `Based on your description, here are some suggested remedies: ${selectedPart.remedies.en.join(', ')}`,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newMessage, botResponse]);
    }
  };

  const handleSendMessage = (message: string) => {
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content: message,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: isRTL
          ? 'شكراً لم��اركة مشاعرك. بناءً على ما وصفته، أقترح عليك تجربة شاي البابونج المهدئ أو حجز جلسة استشارية مع أخصائي الطب البديل لدينا.'
          : 'Thank you for sharing how you feel. Based on your description, I suggest trying our calming chamomile tea or booking a consultation with our alternative medicine specialist.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-salamtak-blue text-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="text-salamtak-green" size={24} />
              <span>{isRTL ? 'مستشار سلامتك الشخصي' : 'Salam-tk Health Consultant'}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
            </Button>
          </DialogTitle>
          <p className="text-sm text-salamtak-brown/70">
            {isRTL 
              ? 'اخبرني كيف تشعر وسأساعدك في العثور على أفضل الحلول الطبيعية'
              : 'Tell me how you feel and I'll help you find the best natural solutions'
            }
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-full">
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
                  src="/lovable-uploads/body-back.png" 
                  alt="Back body" 
                  className="w-full max-h-[400px] object-contain"
                />
                
                <div 
                  className="absolute w-[30%] h-[30%] top-[20%] left-[35%] cursor-pointer hover:bg-salamtak-green/20 rounded transition-colors"
                  onClick={() => handleBodyPartClick('back')}
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
          
          <div className="flex flex-col h-full">
            <ChatInterface 
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BodyModelInteractive;
