
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChatMessage } from '@/types/chat';
import ChatInterface from './ChatInterface';
import { v4 as uuidv4 } from '@/utils/uuid';
import BodyModelHeader from './body-model/BodyModelHeader';

interface BodyModelInteractiveProps {
  onClose: () => void;
}

const BodyModelInteractive: React.FC<BodyModelInteractiveProps> = ({ onClose }) => {
  const { isRTL } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuidv4(),
      role: 'assistant',
      content: isRTL 
        ? 'مرحباً! أنا مستشار سلامتك. كيف يمكنني مساعدتك اليوم؟'
        : 'Hello! I am your Salam-tk consultant. How can I help you today?',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
      <DialogContent className="max-w-xl h-[80vh]">
        <BodyModelHeader onClose={onClose} isRTL={isRTL} />
        <div className="flex flex-col h-full">
          <ChatInterface 
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BodyModelInteractive;
