import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Smile, Meh, Frown } from 'lucide-react';
import { MoodType, MoodEntry } from './types/mood';
import { v4 as uuidv4 } from '@/utils/uuid';
import MoodHistory from './MoodHistory';

interface MoodTrackerProps {
  onMoodSubmit: (entry: MoodEntry) => void;
  mood: MoodType | '';
  setMood: (mood: MoodType | '') => void;
  moodHistory: MoodEntry[];
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ 
  onMoodSubmit, 
  mood, 
  setMood,
  moodHistory 
}) => {
  const { isRTL } = useLanguage();
  
  const handleMoodChange = (value: string) => {
    setMood(value as MoodType);
  };

  const handleSubmit = () => {
    if (!mood) return;
    
    const entry: MoodEntry = {
      id: uuidv4(),
      mood,
      timestamp: new Date(),
    };
    
    onMoodSubmit(entry);
  };

  const processChartData = () => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    return last7Days.map(date => {
      const dayMoods = moodHistory.filter(entry => 
        entry.timestamp.toISOString().split('T')[0] === date
      );

      return {
        date,
        happy: dayMoods.filter(m => m.mood === 'happy').length || 0,
        neutral: dayMoods.filter(m => m.mood === 'neutral').length || 0,
        sad: dayMoods.filter(m => m.mood === 'sad').length || 0
      };
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 border-salamtak-sand">
        <h4 className="text-lg font-medium text-salamtak-brown mb-4">
          {isRTL ? 'تتبع مزاجك' : 'Track Your Mood'}
        </h4>
        
        <p className="text-sm text-salamtak-brown/70 mb-4">
          {isRTL ? 'كيف تشعر اليوم؟' : 'How are you feeling today?'}
        </p>
        
        <RadioGroup value={mood} onValueChange={handleMoodChange} className="flex justify-center space-x-8 rtl:space-x-reverse mb-6">
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="happy" id="happy" className="sr-only" />
            <Label 
              htmlFor="happy" 
              className={`cursor-pointer p-3 rounded-full border-2 transition-all ${
                mood === 'happy' ? 'border-green-500 bg-green-50' : 'border-transparent'
              }`}
            >
              <Smile size={32} className="text-green-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'سعيد' : 'Happy'}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
            <Label 
              htmlFor="neutral" 
              className={`cursor-pointer p-3 rounded-full border-2 transition-all ${
                mood === 'neutral' ? 'border-amber-500 bg-amber-50' : 'border-transparent'
              }`}
            >
              <Meh size={32} className="text-amber-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'محايد' : 'Neutral'}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <RadioGroupItem value="sad" id="sad" className="sr-only" />
            <Label 
              htmlFor="sad" 
              className={`cursor-pointer p-3 rounded-full border-2 transition-all ${
                mood === 'sad' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
              }`}
            >
              <Frown size={32} className="text-blue-500" />
            </Label>
            <span className="text-sm">{isRTL ? 'حزين' : 'Sad'}</span>
          </div>
        </RadioGroup>
        
        <Button 
          className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
          onClick={handleSubmit}
          disabled={!mood}
        >
          {isRTL ? 'تسجيل المزاج' : 'Log Mood'}
        </Button>
      </Card>

      <MoodHistory data={processChartData()} />
    </div>
  );
};

export default MoodTracker;
