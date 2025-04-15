
export interface MoodTrackerProps {
  onMoodSubmit: () => void;
  mood: string;
  setMood: (mood: string) => void;
}

export interface JournalProps {
  onJournalSubmit: () => void;
  journal: string;
  setJournal: (text: string) => void;
}

export interface MeditationSessionsProps {
  language: 'en' | 'ar';
  isRTL: boolean;
}
