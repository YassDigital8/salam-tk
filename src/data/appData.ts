
// Mock data for the application

// Product Categories
export const productCategories = [
  {
    id: 'herbs',
    name: {
      en: 'Herbs & Spices',
      ar: 'الأعشاب والتوابل'
    },
    icon: 'Leaf'
  },
  {
    id: 'tea',
    name: {
      en: 'Tea & Infusions',
      ar: 'الشاي والمشروبات العشبية'
    },
    icon: 'Coffee'
  },
  {
    id: 'cosmetics',
    name: {
      en: 'Natural Cosmetics',
      ar: 'مستحضرات التجميل الطبيعية'
    },
    icon: 'Sparkles'
  },
  {
    id: 'supplements',
    name: {
      en: 'Supplements',
      ar: 'المكملات الغذائية'
    },
    icon: 'Pill'
  },
  {
    id: 'home',
    name: {
      en: 'Home & Lifestyle',
      ar: 'المنزل ونمط الحياة'
    },
    icon: 'Home'
  }
];

// Products
export const products = [
  {
    id: 'prod1',
    name: {
      en: 'Organic Chamomile',
      ar: 'البابونج العضوي'
    },
    description: {
      en: 'Calming herb, perfect for relaxation and sleep.',
      ar: 'عشبة مهدئة، مثالية للاسترخاء والنوم.'
    },
    category: 'herbs',
    price: 12.99,
    image: '/lovable-uploads/fd86b7c9-e0fe-418e-a0a5-6fdc7415ca09.jpg',
    rating: 4.7
  },
  {
    id: 'prod2',
    name: {
      en: 'Rose Hip Tea',
      ar: 'شاي ثمرة الورد'
    },
    description: {
      en: 'Rich in vitamin C and antioxidants.',
      ar: 'غني بفيتامين C ومضادات الأكسدة.'
    },
    category: 'tea',
    price: 15.99,
    image: '/lovable-uploads/3240d530-74cd-4f0c-80bb-3fe2602902c0.jpg',
    rating: 4.5
  },
  {
    id: 'prod3',
    name: {
      en: 'Argan Oil Face Serum',
      ar: 'سيروم الوجه بزيت الأرجان'
    },
    description: {
      en: 'Hydrating and nourishing for all skin types.',
      ar: 'مرطب ومغذي لجميع أنواع البشرة.'
    },
    category: 'cosmetics',
    price: 29.99,
    image: '/lovable-uploads/448e4e23-fcc8-40be-b8bc-ab57f936d7a7.jpg',
    rating: 4.8
  },
  {
    id: 'prod4',
    name: {
      en: 'Vitamin D3 + K2',
      ar: 'فيتامين D3 + K2'
    },
    description: {
      en: 'Support for bone health and immune system.',
      ar: 'دعم لصحة العظام وجهاز المناعة.'
    },
    category: 'supplements',
    price: 22.50,
    image: '/lovable-uploads/ea87e48b-85ae-4418-9d93-d86156246dc3.jpg',
    rating: 4.6
  },
  {
    id: 'prod5',
    name: {
      en: 'Lavender Soy Candle',
      ar: 'شمعة الخزامى النباتية'
    },
    description: {
      en: 'Calming aroma for relaxation and stress relief.',
      ar: 'رائحة مهدئة للاسترخاء وتخفيف التوتر.'
    },
    category: 'home',
    price: 18.99,
    image: '/lovable-uploads/229fc3c8-af9f-43cd-8edc-2e9758391776.jpg',
    rating: 4.9
  },
  {
    id: 'prod6',
    name: {
      en: 'Handcrafted Wooden Cup',
      ar: 'كوب خشبي مصنوع يدويًا'
    },
    description: {
      en: 'Traditional design for hot and cold beverages.',
      ar: 'تصميم تقليدي للمشروبات الساخنة والباردة.'
    },
    category: 'home',
    price: 24.99,
    image: '/lovable-uploads/41c7e988-c548-4ba2-b6ba-aa2c70d60ea7.jpg',
    rating: 4.7
  }
];

// Services
export const services = [
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
    image: '/lovable-uploads/3dd14c91-0af0-4fa0-9455-4b9b47ed7126.jpg',
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
    image: '/lovable-uploads/c7c0c3f8-432e-4a7c-a6d7-692fc954ff85.jpg',
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
    image: '/lovable-uploads/ea87e48b-85ae-4418-9d93-d86156246dc3.jpg',
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
    image: '/lovable-uploads/fd86b7c9-e0fe-418e-a0a5-6fdc7415ca09.jpg',
    rating: 4.6
  }
];

// Wellness Features
export const features = [
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
