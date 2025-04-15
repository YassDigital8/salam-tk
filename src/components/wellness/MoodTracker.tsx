
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Smile, Meh, Frown } from 'lucide-react';
import type { MoodTrackerProps } from './types';

const MoodTracker: React.FC<MoodTrackerProps> = ({ onMoodSubmit, mood, setMood }) => {
  const { isRTL, t } = useLanguage();
  
  const handleMoodChange = (value: string) => {
    setMood(value);
  };
  
  return (
    <Card className="p-4 border-salamtak-sand">
      <h4 className="text-lg font-medium text-salamtak-brown mb-4">
        {isRTL ? 'تتبع مزاجك' : 'Track Your Mood'}
      </h4>
      
      <p className="text-sm text-salamtak-brown/70 mb-4">
        {isRTL ? 'كيف تشعر اليوم؟' : 'How are you feeling today?'}
      </p>
      
      <div className="mb-4">
        <RadioGroup value={mood} onValueChange={handleMoodChange} className="flex justify-center space-x-8 mb-4">
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="happy" id="happy" className="sr-only" />
            <Label 
              htmlFor="happy" 
              className={`cursor-pointer p-4 rounded-full border-2 transition-all ${
                mood === 'happy' ? 'border-green-500 bg-green-50' : 'border-transparent'
              }`}
            >
              <Smile size={36} className="text-green-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'سعيد' : 'Happy'}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
            <Label 
              htmlFor="neutral" 
              className={`cursor-pointer p-4 rounded-full border-2 transition-all ${
                mood === 'neutral' ? 'border-amber-500 bg-amber-50' : 'border-transparent'
              }`}
            >
              <Meh size={36} className="text-amber-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'محايد' : 'Neutral'}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="sad" id="sad" className="sr-only" />
            <Label 
              htmlFor="sad" 
              className={`cursor-pointer p-4 rounded-full border-2 transition-all ${
                mood === 'sad' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
              }`}
            >
              <Frown size={36} className="text-blue-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'حزين' : 'Sad'}</span>
          </div>
        </RadioGroup>
      </div>
      
      <Button 
        className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
        onClick={onMoodSubmit}
      >
        {isRTL ? 'تسجيل المزاج' : 'Log Mood'}
      </Button>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="link" 
            className="w-full mt-2 text-sm text-salamtak-brown/70"
          >
            {isRTL ? 'عرض سجل المزاج' : 'View Mood History'}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isRTL ? 'سجل المزاج' : 'Mood History'}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-salamtak-brown/70 italic">
              {isRTL 
                ? 'سجل مزاجك لبضعة أيام لرؤية المخطط البياني هنا' 
                : 'Log your mood for a few days to see the chart here'}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default MoodTracker;
