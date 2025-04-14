
export interface Feature {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon: string;
}

export const features: Feature[] = [
  {
    id: 'feat1',
    name: {
      en: 'Live Consultations',
      ar: 'استشارات مباشرة'
    },
    description: {
      en: 'Connect with wellness experts via video or chat for personalized advice.',
      ar: 'تواصل مع خبراء العافية عبر الفيديو أو الدردشة للحصول على نصائح مخصصة.'
    },
    icon: 'Video'
  },
  {
    id: 'feat2',
    name: {
      en: 'Home Fitness Programs',
      ar: 'برامج اللياقة المنزلية'
    },
    description: {
      en: 'Customized workouts that adapt to your health goals and abilities.',
      ar: 'تمارين مخصصة تتكيف مع أهدافك الصحية وقدراتك.'
    },
    icon: 'Activity'
  },
  {
    id: 'feat3',
    name: {
      en: 'Mental Wellness',
      ar: 'العافية النفسية'
    },
    description: {
      en: 'Track your mood and practice guided meditation for better mental health.',
      ar: 'تتبع حالتك المزاجية ومارس التأمل الموجه لصحة نفسية أفضل.'
    },
    icon: 'Heart'
  }
];
