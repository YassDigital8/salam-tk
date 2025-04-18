
export type MoodType = 'happy' | 'neutral' | 'sad';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  timestamp: Date;
  note?: string;
}

export interface MoodChartData {
  date: string;
  happy: number;
  neutral: number;
  sad: number;
}
