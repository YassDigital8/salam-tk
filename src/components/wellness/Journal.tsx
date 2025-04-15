
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/context/LanguageContext';
import type { JournalProps } from './types';

const Journal: React.FC<JournalProps> = ({ onJournalSubmit, journal, setJournal }) => {
  const { isRTL } = useLanguage();
  
  return (
    <Card className="p-4 border-salamtak-sand">
      <h4 className="text-lg font-medium text-salamtak-brown mb-4">
        {isRTL ? 'التدوين اليومي' : 'Daily Journal'}
      </h4>
      
      <p className="text-sm text-salamtak-brown/70 mb-4">
        {isRTL 
          ? 'دوّن أفكارك ومشاعرك' 
          : 'Write down your thoughts and feelings'}
      </p>
      
      <Textarea 
        placeholder={isRTL ? 'اكتب هنا...' : 'Write here...'}
        className="min-h-[120px] mb-4"
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
      />
      
      <Button 
        className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
        onClick={onJournalSubmit}
      >
        {isRTL ? 'حفظ' : 'Save Entry'}
      </Button>
    </Card>
  );
};

export default Journal;
