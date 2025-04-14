
export interface ProductCategory {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  icon: string;
}

export const productCategories: ProductCategory[] = [
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
    icon: 'Cup'
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
