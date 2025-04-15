
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Calendar, Clock, Video, User, CheckCircle } from 'lucide-react';
import { experts } from '@/data/wellness'; 
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LiveConsultationSection = () => {
  const { language, isRTL, t } = useLanguage();
  const { toast } = useToast();
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);
  const [consultationDetails, setConsultationDetails] = useState({
    date: '',
    time: '',
    type: 'video',
  });
  
  const handleBookConsultation = () => {
    toast({
      title: isRTL ? 'تم الحجز بنجاح!' : 'Booking successful!',
      description: isRTL 
        ? 'سنرسل تفاصيل الجلسة عبر البريد الإلكتروني' 
        : 'We will send the session details via email',
      variant: 'default',
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-salamtak-green mb-2">
              {isRTL ? 'استشارات مباشرة' : 'Live Consultations'}
            </h3>
            <p className="text-salamtak-brown/80 mb-4">
              {isRTL 
                ? 'تواصل مع خبراء العافية عبر الفيديو أو الدردشة للحصول على نصائح مخصصة.' 
                : 'Connect with wellness experts via video or chat for personalized advice.'}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'استشارات في الطب البديل' : 'Alternative Medicine Consultations'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'استشارات التغذية' : 'Nutrition Consultations'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-salamtak-leaf" />
                <span>{isRTL ? 'استشارات اللياقة البدنية' : 'Fitness Consultations'}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png" 
              alt="Consultation" 
              className="max-w-full rounded-lg shadow-md" 
            />
          </div>
        </div>

        <h3 className="text-lg font-medium text-salamtak-brown mb-4">
          {isRTL ? 'أخصائيونا' : 'Our Experts'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {experts.map(expert => (
            <Card 
              key={expert.id} 
              className={`cursor-pointer transition border hover:border-salamtak-leaf ${
                selectedExpert === expert.id ? 'border-2 border-salamtak-leaf' : ''
              }`}
              onClick={() => setSelectedExpert(expert.id)}
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                    <img 
                      src={expert.image} 
                      alt={expert.name[language]} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-salamtak-brown">
                    {expert.name[language]}
                  </h4>
                  <p className="text-sm text-salamtak-brown/70 mb-2 text-center">
                    {expert.specialty[language]}
                  </p>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-salamtak-brown/70" />
                    <span className="text-xs text-salamtak-brown/70">
                      {expert.sessionDuration} {t('minutes')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full md:w-auto bg-salamtak-blue hover:bg-salamtak-blue/90 flex items-center gap-2"
              disabled={!selectedExpert}
            >
              <Video size={18} />
              <span>{t('bookConsultation')}</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {isRTL ? 'حجز استشارة' : 'Book Consultation'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="date">
                  {isRTL ? 'التاريخ' : 'Date'}
                </Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={consultationDetails.date} 
                  onChange={(e) => setConsultationDetails({
                    ...consultationDetails,
                    date: e.target.value
                  })}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="time">
                  {isRTL ? 'الوقت' : 'Time'}
                </Label>
                <Input 
                  id="time" 
                  type="time" 
                  value={consultationDetails.time} 
                  onChange={(e) => setConsultationDetails({
                    ...consultationDetails,
                    time: e.target.value
                  })}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="type">
                  {isRTL ? 'نوع الاستشارة' : 'Consultation Type'}
                </Label>
                <Select 
                  value={consultationDetails.type}
                  onValueChange={(value) => setConsultationDetails({
                    ...consultationDetails,
                    type: value
                  })}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder={isRTL ? 'اختر نوع الاستشارة' : 'Select consultation type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">
                      {isRTL ? 'مكالمة فيديو' : 'Video Call'}
                    </SelectItem>
                    <SelectItem value="chat">
                      {isRTL ? 'محادثة نصية' : 'Text Chat'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter>
              <DialogClose asChild>
                <Button 
                  variant="secondary" 
                  className="md:mr-2"
                >
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button 
                  className="bg-salamtak-blue hover:bg-salamtak-blue/90"
                  onClick={handleBookConsultation}
                >
                  {isRTL ? 'تأكيد الحجز' : 'Confirm Booking'}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default LiveConsultationSection;
