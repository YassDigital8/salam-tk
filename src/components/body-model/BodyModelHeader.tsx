
import React from 'react';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Bot } from 'lucide-react';
import { BodyModelHeaderProps } from './types';

const BodyModelHeader: React.FC<BodyModelHeaderProps> = ({ onClose, isRTL }) => {
  return (
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
          : 'Tell me how you feel and I\'ll help you find the best natural solutions'
        }
      </p>
    </DialogHeader>
  );
};

export default BodyModelHeader;
