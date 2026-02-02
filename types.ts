export interface Project {
  id: string;
  title: string;
  role: string;
  tech: string[];
  description: string;
  metrics: string[];
  link?: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}