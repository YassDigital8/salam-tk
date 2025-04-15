
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart, Play, CheckCircle, Smile, Frown, Meh } from 'lucide-react';
import { mentalWellnessResources } from '@/data/wellness';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const MentalWellnessSection = () => {
  const { language, isRTL, t } = useLanguage();
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
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'جلسات تأمل موجهة' : 'Guided Meditations'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'نصائح لتقليل التوتر' : 'Stress Reduction Tips'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'تتبع الحالة المزاجية' : 'Mood Tracking'}</span>
              </li>
            </ul>
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
          {/* Mood Tracker */}
          <Card className="p-4 border-salamtak-sand">
            <h4 className="text-lg font-medium text-salamtak-brown mb-4">
              {isRTL ? 'تتبع مزاجك' : 'Track Your Mood'}
            </h4>
            
            <p className="text-sm text-salamtak-brown/70 mb-4">
              {isRTL 
                ? 'كيف تشعر اليوم؟' 
                : 'How are you feeling today?'}
            </p>
            
            <RadioGroup value={mood} onValueChange={setMood} className="flex space-x-4 mb-4">
              <div className="flex flex-col items-center space-y-2">
                <RadioGroupItem value="happy" id="happy" className="sr-only" />
                <Label 
                  htmlFor="happy" 
                  className={`cursor-pointer p-3 rounded-full border-2 ${
                    mood === 'happy' ? 'border-green-500 bg-green-50' : 'border-transparent'
                  }`}
                >
                  <Smile size={32} className="text-green-500" />
                </Label>
                <span className="text-xs">{isRTL ? 'سعيد' : 'Happy'}</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                <Label 
                  htmlFor="neutral" 
                  className={`cursor-pointer p-3 rounded-full border-2 ${
                    mood === 'neutral' ? 'border-amber-500 bg-amber-50' : 'border-transparent'
                  }`}
                >
                  <Meh size={32} className="text-amber-500" />
                </Label>
                <span className="text-xs">{isRTL ? 'محايد' : 'Neutral'}</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <RadioGroupItem value="sad" id="sad" className="sr-only" />
                <Label 
                  htmlFor="sad" 
                  className={`cursor-pointer p-3 rounded-full border-2 ${
                    mood === 'sad' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                  }`}
                >
                  <Frown size={32} className="text-blue-500" />
                </Label>
                <span className="text-xs">{isRTL ? 'حزين' : 'Sad'}</span>
              </div>
            </RadioGroup>
            
            <Button 
              className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
              onClick={handleTrackMood}
            >
              {isRTL ? 'تسجيل المزاج' : 'Log Mood'}
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="link" 
                  className="w-full mt-2 text-xs text-salamtak-brown/70"
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
          
          {/* Journaling */}
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
              onClick={handleJournalSubmit}
            >
              {isRTL ? 'حفظ' : 'Save Entry'}
            </Button>
          </Card>
        </div>

        <h3 className="text-lg font-medium text-salamtak-brown mt-8 mb-4">
          {isRTL ? 'جلسات التأمل الموجهة' : 'Guided Meditation Sessions'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentalWellnessResources.map(resource => (
            <Card 
              key={resource.id} 
              className="overflow-hidden border-salamtak-sand hover:border-salamtak-leaf transition-colors"
            >
              <div className="relative">
                <img 
                  src={resource.image} 
                  alt={resource.title[language]} 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-white/80 hover:bg-white"
                  >
                    <Play size={20} className="text-salamtak-green" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h5 className="font-medium text-salamtak-brown mb-1">
                  {resource.title[language]}
                </h5>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-salamtak-brown/70">
                    {resource.duration} {isRTL ? 'دقيقة' : 'mins'}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {resource.category[language]}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MentalWellnessSection;
