
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
    id: 'fresh-1',
    name: {
      en: 'Seasonal Berries Mix',
      ar: 'مزيج التوت الموسمي'
    },
    description: {
      en: 'Fresh seasonal berries mix, rich in antioxidants and vitamins.',
      ar: 'مزيج طازج من التوت الموسمي، غني بمضادات الأكسدة والفيتامينات.'
    },
    category: 'fresh-products',
    price: 15.99,
    image: '/lovable-uploads/https://th.bing.com/th/id/OIP.i5P1MGEmIhYxHwpl7S8HKQHaEo?rs=1&pid=ImgDetMain',
    rating: 4.8
  },
  {
    id: 'herb-1',
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
    image: '/placeholder.svg',
    rating: 4.7
  },
  {
    id: 'tea-1',
    name: {
      en: 'Green Tea Premium',
      ar: 'الشاي الأخضر الفاخر'
    },
    description: {
      en: 'High-quality green tea leaves for a refreshing experience.',
      ar: 'أوراق شاي أخضر عالية الجودة لتجربة منعشة.'
    },
    category: 'tea-bags',
    price: 9.99,
    image: '/placeholder.svg',
    rating: 4.9
  },
  {
    id: 'oil-1',
    name: {
      en: 'Lavender Essential Oil',
      ar: 'زيت اللافندر العطري'
    },
    description: {
      en: 'Pure lavender oil for relaxation and aromatherapy.',
      ar: 'زيت لافندر نقي للاسترخاء والعلاج بالروائح.'
    },
    category: 'essential-oils',
    price: 18.50,
    image: '/placeholder.svg',
    rating: 4.8
  },
  {
    id: 'cosmetic-1',
    name: {
      en: 'Natural Moisturizing Cream',
      ar: 'كريم ترطيب طبيعي'
    },
    description: {
      en: 'Hydrating cream made with natural ingredients for all skin types.',
      ar: 'كريم مرطب مصنوع من مكونات طبيعية لجميع أنواع البشرة.'
    },
    category: 'natural-cosmetics',
    price: 24.99,
    image: '/placeholder.svg',
    rating: 4.6
  },
  {
    id: 'scrub-1',
    name: {
      en: 'Coffee Body Scrub',
      ar: 'مقشر الجسم بالقهوة'
    },
    description: {
      en: 'Natural coffee scrub for smooth and rejuvenated skin.',
      ar: 'مقشر طبيعي بالقهوة للحصول على بشرة ناعمة ومتجددة.'
    },
    category: 'natural-scrubs',
    price: 19.99,
    image: '/placeholder.svg',
    rating: 4.7
  },
  {
    id: 'supp-1',
    name: {
      en: 'Immunity Booster Supplements',
      ar: 'مكملات تعزيز المناعة'
    },
    description: {
      en: 'Natural supplement to strengthen your immune system.',
      ar: 'مكمل طبيعي لتقوية جهاز المناعة.'
    },
    category: 'supplements',
    price: 29.99,
    image: '/placeholder.svg',
    rating: 4.5
  },
  {
    id: 'candle-1',
    name: {
      en: 'Lavender Scented Candle',
      ar: 'شمعة معطرة باللافندر'
    },
    description: {
      en: 'Natural lavender candle for a calming atmosphere.',
      ar: 'شمعة لافندر طبيعية لأجواء مهدئة.'
    },
    category: 'scented-candles',
    price: 14.99,
    image: '/placeholder.svg',
    rating: 4.8
  },
  {
    id: 'wood-1',
    name: {
      en: 'Handcrafted Wooden Cup',
      ar: 'كوب خشبي مصنوع يدويًا'
    },
    description: {
      en: 'Traditional design for hot and cold beverages.',
      ar: 'تصميم تقليدي للمشروبات الساخنة والباردة.'
    },
    category: 'wooden-cups',
    price: 24.99,
    image: '/placeholder.svg',
    rating: 4.7
  },
  {
    id: 'seed-1',
    name: {
      en: 'Mint Seedlings',
      ar: 'شتلات النعناع'
    },
    description: {
      en: 'Grow your own fresh mint at home.',
      ar: 'ازرع النعناع الطازج الخاص بك في المنزل.'
    },
    category: 'seedlings',
    price: 8.99,
    image: '/placeholder.svg',
    rating: 4.6
  }
];
