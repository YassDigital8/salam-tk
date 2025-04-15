import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { format, addDays, isBefore, isAfter, set } from 'date-fns';
import { services } from '@/data';
import { ArrowLeft, CalendarIcon, Clock } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
  notes: z.string().optional(),
});

const generateTimeSlots = (serviceDuration: number) => {
  const slots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += serviceDuration) {
      if (hour === endHour && minute > 0) continue;
      
      const hourFormatted = hour.toString().padStart(2, '0');
      const minuteFormatted = minute.toString().padStart(2, '0');
      
      slots.push(`${hourFormatted}:${minuteFormatted}`);
    }
  }
  
  return slots;
};

const BookingContent = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t, isRTL, language } = useLanguage();
  const { toast } = useToast();
  
  const service = services.find(s => s.id === serviceId);
  
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });
  
  useEffect(() => {
    if (service) {
      const slots = generateTimeSlots(service.duration);
      setTimeSlots(slots);
    }
  }, [service]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Booking data:", data);
    
    toast({
      title: isRTL ? "تم الحجز بنجاح!" : "Booking Successful!",
      description: isRTL 
        ? `تم حجز ${service?.name[language]} في ${format(data.date, 'PPP')} الساعة ${data.time}`
        : `Your ${service?.name[language]} appointment has been booked for ${format(data.date, 'PPP')} at ${data.time}`,
    });
    
    setTimeout(() => {
      navigate('/services');
    }, 2000);
  };
  
  if (!service) {
    return (
      <div className="salamtak-container py-12 text-center">
        <h2 className="text-2xl font-bold text-salamtak-brown mb-4">
          {isRTL ? "الخدمة غير موجودة" : "Service Not Found"}
        </h2>
        <Button onClick={() => navigate('/services')}>
          {isRTL ? "العودة إلى الخدمات" : "Return to Services"}
        </Button>
      </div>
    );
  }
  
  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-gradient-to-b from-salamtak-light to-white py-8">
        <div className="salamtak-container">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/services')}
              className="text-salamtak-brown hover:text-salamtak-green"
            >
              <ArrowLeft size={24} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-salamtak-green mb-2">
                {isRTL ? "حجز خدمة" : "Book Service"}
              </h1>
              <p className="text-salamtak-brown/80 max-w-lg">
                {service.name[language]}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8">
        <div className="salamtak-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <img 
                    src={service.image} 
                    alt={service.name[language]} 
                    className="w-full aspect-video object-cover rounded-md mb-4"
                  />
                  
                  <h3 className="text-xl font-medium text-salamtak-brown mb-2">
                    {service.name[language]}
                  </h3>
                  
                  <p className="text-sm text-salamtak-brown/70 mb-4">
                    {service.description[language]}
                  </p>
                  
                  <div className="flex items-center gap-2 text-salamtak-brown/70 mb-2">
                    <Clock size={16} />
                    <span>{service.duration} {isRTL ? 'دقيقة' : 'minutes'}</span>
                  </div>
                  
                  <div className="font-bold text-salamtak-blue">
                    ${service.price.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>{isRTL ? "اختر التاريخ" : "Select Date"}</FormLabel>
                        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>{isRTL ? "اختر التاريخ" : "Pick a date"}</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => {
                                field.onChange(date);
                                setSelectedDate(date);
                                setCalendarOpen(false);
                              }}
                              disabled={(date) => 
                                isBefore(date, new Date()) || 
                                isAfter(date, addDays(new Date(), 30))
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>{isRTL ? "اختر الوقت" : "Select Time"}</FormLabel>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={field.value === slot ? "default" : "outline"}
                              className={cn(
                                "h-10",
                                field.value === slot && "bg-salamtak-blue"
                              )}
                              onClick={() => field.onChange(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{isRTL ? "الاسم" : "Name"}</FormLabel>
                          <FormControl>
                            <Input placeholder={isRTL ? "أدخل اسمك" : "Enter your name"} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{isRTL ? "البريد الإلكتروني" : "Email"}</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{isRTL ? "رقم الهاتف" : "Phone Number"}</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder={isRTL ? "أدخل رقم هاتفك" : "Enter your phone number"} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{isRTL ? "ملاحظات إضافية" : "Additional Notes"}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={
                              isRTL 
                                ? "أي متطلبات خاصة أو معلومات إضافية" 
                                : "Any special requirements or additional information"
                            } 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
                  >
                    {isRTL ? "تأكيد الحجز" : "Confirm Booking"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Booking = () => {
  const isMobile = useIsMobile();
  
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <BookingContent />
        {!isMobile && <Footer />}
        {isMobile && <MobileNavigation />}
      </div>
    </LanguageProvider>
  );
};

export default Booking;
