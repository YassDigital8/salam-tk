
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Activity, Play, Clock, CheckCircle } from 'lucide-react';
import { fitnessPrograms } from '@/data/wellness';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const FitnessProgramsSection = () => {
  const { language, isRTL, t } = useLanguage();
  const { toast } = useToast();
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  
  const handleStartProgram = (programId: string) => {
    setSelectedProgram(programId);
    toast({
      title: isRTL ? 'تم تسجيلك في البرنامج!' : 'Program added to your profile!',
      description: isRTL 
        ? 'يمكنك الآن متابعة تقدمك' 
        : 'You can now track your progress',
      variant: 'default',
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-salamtak-green mb-2">
              {isRTL ? 'برامج اللياقة المنزلية' : 'Home Fitness Programs'}
            </h3>
            <p className="text-salamtak-brown/80 mb-4">
              {isRTL 
                ? 'تمارين مخصصة تتكيف مع أهدافك الصحية وقدراتك.' 
                : 'Customized workouts that adapt to your health goals and abilities.'}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'تمارين منزلية بسيطة' : 'Simple Home Exercises'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'برامج تمارين لكبار السن' : 'Senior-friendly Programs'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'تمارين للآلام المزمنة' : 'Exercises for Chronic Pain'}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/rose_hip.jfif" 
              alt="Fitness" 
              className="max-w-full rounded-lg shadow-md" 
            />
          </div>
        </div>

        <h3 className="text-lg font-medium text-salamtak-brown mb-4">
          {isRTL ? 'البرامج المتاحة' : 'Available Programs'}
        </h3>
        
        <div className="space-y-4">
          {fitnessPrograms.map(program => (
            <Card 
              key={program.id} 
              className="overflow-hidden border-salamtak-sand hover:border-salamtak-leaf transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative md:col-span-1">
                  <img 
                    src={program.image} 
                    alt={program.name[language]} 
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                  />
                  {program.level && (
                    <Badge 
                      variant="outline" 
                      className="absolute top-2 left-2 bg-white/80"
                    >
                      {program.level[language]}
                    </Badge>
                  )}
                </div>
                
                <div className="p-4 md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-salamtak-brown">
                      {program.name[language]}
                    </h4>
                    <div className="flex items-center gap-1 text-salamtak-brown/70">
                      <Clock size={14} />
                      <span className="text-sm">
                        {program.duration} {isRTL ? 'دقيقة' : 'mins'}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-salamtak-brown/70 mb-4">
                    {program.description[language]}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 border-salamtak-leaf text-salamtak-leaf hover:bg-salamtak-leaf/5"
                        >
                          <Play size={16} />
                          <span>{isRTL ? 'معاينة' : 'Preview'}</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px]">
                        <DialogHeader>
                          <DialogTitle>
                            {program.name[language]} - {isRTL ? 'معاينة' : 'Preview'}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video w-full bg-zinc-950 rounded-md flex items-center justify-center">
                          <Play size={48} className="text-white opacity-80" />
                        </div>
                        <p className="text-sm text-salamtak-brown/70">
                          {isRTL 
                            ? 'هذا عرض توضيحي قصير للبرنامج التدريبي. للوصول إلى البرنامج الكامل، يرجى التسجيل.' 
                            : 'This is a short demonstration of the fitness program. To access the full program, please enroll.'}
                        </p>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      className="bg-salamtak-blue hover:bg-salamtak-blue/90 gap-2"
                      onClick={() => handleStartProgram(program.id)}
                    >
                      <Activity size={16} />
                      <span>
                        {selectedProgram === program.id 
                          ? (isRTL ? 'بدأت البرنامج' : 'Program Started') 
                          : (isRTL ? 'بدء البرنامج' : 'Start Program')}
                      </span>
                    </Button>
                  </div>
                  
                  {selectedProgram === program.id && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-salamtak-brown/70">
                          {isRTL ? 'تقدمك' : 'Your progress'}
                        </span>
                        <span className="text-xs text-salamtak-brown/70">0%</span>
                      </div>
                      <Progress value={0} className="h-1" />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FitnessProgramsSection;
