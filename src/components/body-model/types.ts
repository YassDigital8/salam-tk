
export interface BodyPart {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  remedies: {
    en: string[];
    ar: string[];
  };
}

export interface BodyModelHeaderProps {
  onClose: () => void;
  isRTL: boolean;
}

export interface BodyVisualizerProps {
  selectedBodyPart: string | null;
  onBodyPartClick: (partId: string) => void;
  isRTL: boolean;
}
