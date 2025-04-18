
export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  category: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
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
    image: '/lovable-uploads/babong.jfif',
    rating: 4.7,
    inStock: true,
    isFeatured: true
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
    image: '/lovable-uploads/rose_hip.jfif',
    rating: 4.5,
    inStock: true,
    isFeatured: true
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
    image: '/lovable-uploads/0f9a78a9-8160-4723-9438-c05c95f9ac8e.png',
    rating: 4.8,
    inStock: true,
    isFeatured: true
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
    image: '/lovable-uploads/b07160e0-25de-434c-a82a-40ed23f75748.png',
    rating: 4.6,
    inStock: true
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
    image: '/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png',
    rating: 4.9,
    inStock: true
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
    image: '/lovable-uploads/2004b7be-7bdf-4f8a-8e28-797373031c0e.png',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'prod7',
    name: {
      en: 'Fresh Mint Leaves',
      ar: 'أوراق النعناع الطازجة'
    },
    description: {
      en: 'Freshly harvested mint leaves for tea and cooking.',
      ar: 'أوراق نعناع مقطوفة حديثًا للشاي والطبخ.'
    },
    category: 'herbs',
    price: 8.99,
    image: '/lovable-uploads/0f9a78a9-8160-4723-9438-c05c95f9ac8e.png',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'prod8',
    name: {
      en: 'Basil Seedlings',
      ar: 'شتلات الريحان'
    },
    description: {
      en: 'Organic basil seedlings ready to grow at home.',
      ar: 'شتلات ريحان عضوية جاهزة للنمو في المنزل.'
    },
    category: 'herbs',
    price: 6.50,
    image: '/lovable-uploads/b07160e0-25de-434c-a82a-40ed23f75748.png',
    rating: 4.3,
    inStock: true
  }
];

