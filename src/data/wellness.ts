
export interface Expert {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  specialty: {
    en: string;
    ar: string;
  };
  image: string;
  sessionDuration: number;
}

export interface FitnessProgram {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  level?: {
    en: string;
    ar: string;
  };
  duration: number;
  image: string;
}

export interface MentalWellnessResource {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  duration: number;
  image: string;
}

// Experts data
export const experts: Expert[] = [
  {
    id: 'exp1',
    name: {
      en: 'Dr. Sarah Ahmed',
      ar: 'د. سارة أحمد'
    },
    specialty: {
      en: 'Nutrition Specialist',
      ar: 'أخصائية تغذية'
    },
    image: '/placeholder.svg',
    sessionDuration: 30
  },
  {
    id: 'exp2',
    name: {
      en: 'Dr. Mohammed Ali',
      ar: 'د. محمد علي'
    },
    specialty: {
      en: 'Alternative Medicine',
      ar: 'الطب البديل'
    },
    image: '/placeholder.svg',
    sessionDuration: 45
  },
  {
    id: 'exp3',
    name: {
      en: 'Layla Hassan',
      ar: 'ليلى حسن'
    },
    specialty: {
      en: 'Fitness Trainer',
      ar: 'مدربة لياقة'
    },
    image: '/placeholder.svg',
    sessionDuration: 60
  }
];

// Fitness programs
export const fitnessPrograms: FitnessProgram[] = [
  {
    id: 'fit1',
    name: {
      en: 'Morning Energizer',
      ar: 'منشط الصباح'
    },
    description: {
      en: 'Start your day with this 15-minute energizing routine that will boost your metabolism and mood.',
      ar: 'ابدأ يومك بهذا الروتين المنشط لمدة 15 دقيقة والذي سيعزز عملية الأيض والمزاج.'
    },
    level: {
      en: 'Beginner',
      ar: 'مبتدئ'
    },
    duration: 15,
    image: '/placeholder.svg'
  },
  {
    id: 'fit2',
    name: {
      en: 'Senior Mobility',
      ar: 'تمارين الحركة لكبار السن'
    },
    description: {
      en: 'Gentle exercises designed to improve mobility and reduce joint pain for seniors.',
      ar: 'تمارين لطيفة مصممة لتحسين الحركة وتقليل آلام المفاصل لكبار السن.'
    },
    level: {
      en: 'Easy',
      ar: 'سهل'
    },
    duration: 20,
    image: '/placeholder.svg'
  },
  {
    id: 'fit3',
    name: {
      en: 'Back Pain Relief',
      ar: 'تخفيف آلام الظهر'
    },
    description: {
      en: 'Specialized exercises targeting lower back pain relief and prevention.',
      ar: 'تمارين متخصصة تستهدف تخفيف ومنع آلام أسفل الظهر.'
    },
    level: {
      en: 'Moderate',
      ar: 'متوسط'
    },
    duration: 25,
    image: '/placeholder.svg'
  }
];

// Mental wellness resources
export const mentalWellnessResources: MentalWellnessResource[] = [
  {
    id: 'mw1',
    title: {
      en: 'Morning Meditation',
      ar: 'تأمل الصباح'
    },
    category: {
      en: 'Mindfulness',
      ar: 'اليقظة الذهنية'
    },
    duration: 10,
    image: '/placeholder.svg'
  },
  {
    id: 'mw2',
    title: {
      en: 'Stress Relief',
      ar: 'تخفيف التوتر'
    },
    category: {
      en: 'Breathing',
      ar: 'التنفس'
    },
    duration: 15,
    image: '/placeholder.svg'
  },
  {
    id: 'mw3',
    title: {
      en: 'Sleep Well',
      ar: 'نوم هادئ'
    },
    category: {
      en: 'Relaxation',
      ar: 'استرخاء'
    },
    duration: 20,
    image: '/placeholder.svg'
  },
  {
    id: 'mw4',
    title: {
      en: 'Anxiety Reduction',
      ar: 'تقليل القلق'
    },
    category: {
      en: 'Guided',
      ar: 'موجّه'
    },
    duration: 12,
    image: '/placeholder.svg'
  },
  {
    id: 'mw5',
    title: {
      en: 'Positive Thinking',
      ar: 'التفكير الإيجابي'
    },
    category: {
      en: 'Affirmation',
      ar: 'تأكيدات'
    },
    duration: 8,
    image: '/placeholder.svg'
  },
  {
    id: 'mw6',
    title: {
      en: 'Body Scan',
      ar: 'مسح الجسم'
    },
    category: {
      en: 'Awareness',
      ar: 'الوعي'
    },
    duration: 18,
    image: '/placeholder.svg'
  }
];
