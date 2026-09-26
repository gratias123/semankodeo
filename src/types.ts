export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'design' | 'hardware';
  categoryLabel: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  linkText?: string;
  linkUrl?: string;
  highlights: string[];
}

export interface ToolItem {
  name: string;
  category: 'dev' | 'design' | 'hardware' | 'ai';
  categoryLabel: string;
  description: string;
  isPrimary?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  description: string;
  points?: string[];
}

export interface TrainingItem {
  title: string;
  duration?: string;
  description: string;
  skills: string[];
  hasAttestation?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
