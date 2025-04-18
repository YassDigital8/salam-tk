
import { BodyPart } from './types';

export const mockBodyParts: BodyPart[] = [
  {
    id: 'head',
    name: {
      en: 'Head',
      ar: 'الرأس'
    },
    remedies: {
      en: ['Lavender Oil', 'Chamomile Tea', 'Ginger'],
      ar: ['زيت اللافندر', 'شاي البابونج', 'زنجبيل']
    }
  },
  {
    id: 'back',
    name: {
      en: 'Back',
      ar: 'الظهر'
    },
    remedies: {
      en: ['Cupping Therapy', 'Arnica Oil', 'Turmeric'],
      ar: ['العلاج بالحجامة', 'زيت الأرنيكا', 'كركم']
    }
  },
  {
    id: 'stomach',
    name: {
      en: 'Stomach',
      ar: 'المعدة'
    },
    remedies: {
      en: ['Peppermint Tea', 'Ginger', 'Chamomile'],
      ar: ['شاي النعناع', 'زنجبيل', 'بابونج']
    }
  }
];
