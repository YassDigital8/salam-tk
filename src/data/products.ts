
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
    image: '/lovable-uploads/rose_hip.jfif',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
    rating: 4.7
  }
];
