
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  chronicConditions: z.array(z.string()).optional(),
  vitaminDeficiency: z.string().optional(),
  allergies: z.string().optional(),
  age: z.string().min(1, {
    message: "Age is required",
  }),
  gender: z.enum(["male", "female"]),
  isPregnantOrNursing: z.boolean().optional(),
  weight: z.string().min(1, {
    message: "Weight is required",
  }),
  height: z.string().min(1, {
    message: "Height is required",
  }),
  smoking: z.boolean(),
  alcohol: z.boolean(),
});

const HealthProfile = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chronicConditions: [],
      vitaminDeficiency: "",
      allergies: "",
      age: "",
      gender: "male",
      isPregnantOrNursing: false,
      weight: "",
      height: "",
      smoking: false,
      alcohol: false,
    },
  });

  const gender = form.watch("gender");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Store in localStorage for now (will be replaced with Supabase later)
    localStorage.setItem('healthProfile', JSON.stringify(values));
    
    toast({
      title: isRTL ? "تم حفظ الملف الصحي" : "Health Profile Saved",
      description: isRTL ? "جاري تحويلك إلى الصفحة الرئيسية..." : "Redirecting to home page...",
    });
    
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-salamtak-cream py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-salamtak-green mb-6 text-center">
          {isRTL ? 'الملف الصحي' : 'Health Profile'}
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Age */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'العمر' : 'Age'}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'الجنس' : 'Gender'}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {isRTL ? 'ذكر' : 'Male'}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {isRTL ? 'أنثى' : 'Female'}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pregnant/Nursing (only for females) */}
            {gender === "female" && (
              <FormField
                control={form.control}
                name="isPregnantOrNursing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rtl:space-x-reverse">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      {isRTL ? 'حامل/مرضعة' : 'Pregnant/Nursing'}
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Weight */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'الوزن (كغ)' : 'Weight (kg)'}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Height */}
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'الطول (سم)' : 'Height (cm)'}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Chronic Conditions */}
            <FormField
              control={form.control}
              name="chronicConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'أعراض مزمنة' : 'Chronic Conditions'}</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange([...field.value || [], value])}
                      value={field.value?.[0]}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={isRTL ? "اختر الأعراض" : "Select conditions"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diabetes">{isRTL ? 'سكري' : 'Diabetes'}</SelectItem>
                        <SelectItem value="hypertension">{isRTL ? 'ضغط الدم' : 'Hypertension'}</SelectItem>
                        <SelectItem value="heart">{isRTL ? 'أمراض القلب' : 'Heart Disease'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Vitamin Deficiency */}
            <FormField
              control={form.control}
              name="vitaminDeficiency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'نقص فيتامينات' : 'Vitamin Deficiency'}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={isRTL ? 'اذكر الفيتامينات' : 'List vitamins'} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Allergies */}
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isRTL ? 'الحساسية' : 'Allergies'}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={isRTL ? 'اذكر أنواع الحساسية' : 'List allergies'} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Smoking */}
            <FormField
              control={form.control}
              name="smoking"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rtl:space-x-reverse">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    {isRTL ? 'تدخين' : 'Smoking'}
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Alcohol */}
            <FormField
              control={form.control}
              name="alcohol"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rtl:space-x-reverse">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    {isRTL ? 'كحول' : 'Alcohol'}
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-salamtak-green hover:bg-salamtak-green/90">
              {isRTL ? 'حفظ الملف الصحي' : 'Save Health Profile'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default HealthProfile;
