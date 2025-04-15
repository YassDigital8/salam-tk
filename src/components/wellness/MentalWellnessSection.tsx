
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import MoodTracker from './MoodTracker';
import Journal from './Journal';
import MeditationSessions from './MeditationSessions';

const MentalWellnessSection = () => {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [mood, setMood] = useState<string>('');
  const [journal, setJournal] = useState<string>('');
  
  const handleTrackMood = () => {
    if (!mood) {
      toast({
        title: isRTL ? 'يرجى اختيار مزاجك' : 'Please select your mood',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: isRTL ? 'تم تسجيل مزاجك!' : 'Mood logged successfully!',
      description: isRTL 
        ? 'يمكنك متابعة سجل مزاجك في صفحة الملف الشخصي' 
        : 'You can view your mood history in your profile page',
      variant: 'default',
    });
  };
  
  const handleJournalSubmit = () => {
    if (!journal.trim()) {
      toast({
        title: isRTL ? 'يرجى كتابة شيء في المذكرة' : 'Please write something in your journal',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: isRTL ? 'تم حفظ المذكرة!' : 'Journal entry saved!',
      variant: 'default',
    });
    setJournal('');
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-salamtak-green mb-2">
              {isRTL ? 'العافية النفسية' : 'Mental Wellness'}
            </h3>
            <p className="text-salamtak-brown/80 mb-4">
              {isRTL 
                ? 'تتبع حالتك المزاجية ومارس التأمل الموجه لصحة نفسية أفضل.' 
                : 'Track your mood and practice guided meditation for better mental health.'}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/babong.jfif" 
              alt="Mental wellness" 
              className="max-w-full rounded-lg shadow-md" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MoodTracker 
            mood={mood}
            setMood={setMood}
            onMoodSubmit={handleTrackMood}
          />
          
          <Journal 
            journal={journal}
            setJournal={setJournal}
            onJournalSubmit={handleJournalSubmit}
          />
        </div>

        <h3 className="text-lg font-medium text-salamtak-brown mt-8 mb-4">
          {isRTL ? 'جلسات التأمل الموجهة' : 'Guided Meditation Sessions'}
        </h3>
        
        <MeditationSessions language={language} isRTL={isRTL} />
      </CardContent>
    </Card>
  );
};

export default MentalWellnessSection;
