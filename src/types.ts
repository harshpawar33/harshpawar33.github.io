export interface ProjectStudy {
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  metric?: string;
  tools: string[];
  imagePath: string;
  resultPlotPath?: string;
  details?: string[];
}

export interface Achievement {
  title: string;
  result: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'paid' | 'university';
  description: string;
  starResult: string;
  highlights?: string[];
  images?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  focusArea?: string;
}

export interface SoftwareCategory {
  category: string;
  tools: string[];
}
