
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface HealthRecommendation {
  type: 'herb' | 'tea' | 'supplement' | 'service';
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  productId?: string;
  serviceId?: string;
}
