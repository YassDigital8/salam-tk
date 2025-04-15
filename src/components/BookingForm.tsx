
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, isBefore, isAfter, addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { generateTimeSlots } from '@/utils/timeUtils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
  notes: z.string().optional(),
});

interface BookingFormProps {
  service: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    duration: number;
  };
}

const BookingForm = ({ service }: BookingFormProps) => {
  const { isRTL, language } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
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
        ? `تم حجز ${service.name[language]} في ${format(data.date, 'PPP')} الساعة ${data.time}`
        : `Your ${service.name[language]} appointment has been booked for ${format(data.date, 'PPP')} at ${data.time}`,
    });
    
    setTimeout(() => {
      navigate('/services');
    }, 2000);
  };

  return (
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
                      setCalendarOpen(false);
                    }}
                    disabled={(date) => 
                      isBefore(date, new Date()) || 
                      isAfter(date, addDays(new Date(), 30))
                    }
                    initialFocus
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
  );
};

export default BookingForm;
