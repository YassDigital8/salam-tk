
export interface Service {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  duration: number;
  price: number;
  image: string;
  rating: number;
}

export const services: Service[] = [
  {
    id: 'serv1',
    name: {
      en: 'Cupping Therapy',
      ar: 'العلاج بالحجامة'
    },
    description: {
      en: 'Traditional therapy to improve blood flow and relieve muscle tension.',
      ar: 'علاج تقليدي لتحسين تدفق الدم وتخفيف توتر العضلات.'
    },
    duration: 60,
    price: 75,
    image: '/placeholder.svg',
    rating: 4.8
  },
  {
    id: 'serv2',
    name: {
      en: 'Acupuncture',
      ar: 'الوخز بالإبر'
    },
    description: {
      en: 'Ancient technique to balance energy flow and promote healing.',
      ar: 'تقنية قديمة لموازنة تدفق الطاقة وتعزيز الشفاء.'
    },
    duration: 45,
    price: 90,
    image: '/placeholder.svg',
    rating: 4.9
  },
  {
    id: 'serv3',
    name: {
      en: 'Therapeutic Massage',
      ar: 'التدليك العلاجي'
    },
    description: {
      en: 'Professional massage targeting pain points and promoting relaxation.',
      ar: 'تدليك احترافي يستهدف نقاط الألم ويعزز الاسترخاء.'
    },
    duration: 60,
    price: 85,
    image: '/placeholder.svg',
    rating: 4.7
  },
  {
    id: 'serv4',
    name: {
      en: 'Physiotherapy',
      ar: 'العلاج الطبيعي'
    },
    description: {
      en: 'Assessment and treatment of movement disorders and injuries.',
      ar: 'تقييم وعلاج اضطرابات الحركة والإصابات.'
    },
    duration: 45,
    price: 110,
    image: '/placeholder.svg',
    rating: 4.6
  }
];
