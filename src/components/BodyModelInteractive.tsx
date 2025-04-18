
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChatMessage } from '@/types/chat';
import ChatInterface from './ChatInterface';
import { v4 as uuidv4 } from '@/utils/uuid';
import BodyModelHeader from './body-model/BodyModelHeader';
import BodyVisualizer from './body-model/BodyVisualizer';
import { mockBodyParts } from './body-model/mockData';

interface BodyModelInteractiveProps {
  onClose: () => void;
}

const BodyModelInteractive: React.FC<BodyModelInteractiveProps> = ({ onClose }) => {
  const { language, isRTL } = useLanguage();
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
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
    
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: isRTL
          ? 'شكراً لمشاركة مشاعرك. بناءً على ما وصفته، أقترح عليك تجربة شاي البابونج المهدئ أو حجز جلسة استشارية مع أخصائي الطب البديل لدينا.'
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
        <BodyModelHeader onClose={onClose} isRTL={isRTL} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-full">
          <BodyVisualizer
            selectedBodyPart={selectedBodyPart}
            onBodyPartClick={handleBodyPartClick}
            isRTL={isRTL}
          />
          
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
