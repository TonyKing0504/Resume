import { Job, Project, SkillMetric } from './types';

export const CONTACT_INFO = {
  name: "Tao (Tony) Jin",
  phone: "551-405-1324",
  email: "jtonyking@hotmail.com",
  location: "Ithaca, NY",
  linkedin: "linkedin.com/in/tao-jin", // Placeholder
  github: "github.com/taojin", // Placeholder
};

export const SKILL_DATA: SkillMetric[] = [
  { subject: 'Python/R', A: 90, fullMark: 100 },
  { subject: 'SQL/DB', A: 85, fullMark: 100 },
  { subject: 'Data Viz', A: 95, fullMark: 100 },
  { subject: 'Fin. Modeling', A: 80, fullMark: 100 },
  { subject: 'Strategy', A: 85, fullMark: 100 },
  { subject: 'Communication', A: 90, fullMark: 100 },
];

export const EXPERIENCE_DATA: Job[] = [
  {
    id: 'grow-investment',
    company: 'Grow Investment Group',
    role: 'Institutional Sales Dept Intern',
    location: 'Shanghai, China',
    period: 'May 2024 – Aug 2024',
    achievements: [
      'Engineered Python-based API tools to automate data entry, improving workflow efficiency for due diligence processes.',
      'Reduced asset selloffs by 9% by compiling strategic slide decks analyzing macroeconomic indicators (rates, sentiment).',
      'Boosted conversion rates by 12% and inquiries by 4% through the design of technical marketing materials for convertible bond products.'
    ]
  },
  {
    id: 'sinolink',
    company: 'Sinolink Securities Co., Ltd.',
    role: 'Investment Banking Intern',
    location: 'Shanghai, China',
    period: 'June 2023 – Aug 2023',
    achievements: [
      'Streamlined reporting processes and enhanced operational efficiency by 8% through the refinement of data collection methodologies.',
      'Analyzed portfolio performance using Sharpe, Sortino, and Beta metrics, visualizing trends against benchmarks for corporate clients.',
      'Rectified critical financial discrepancies during pre-IPO due diligence for clients with market caps >$7.7M USD.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'food-delivery',
    title: 'Dual-Portal Food Delivery System',
    role: 'Full Stack Engineer & DB Architect',
    tech: ['Oracle SQL', 'Node.js', 'HTML/CSS', 'Database Normalization'],
    description: 'Designed a robust relational database and dual-portal web app to manage real-time food delivery operations.',
    metrics: [
      'Ensured 100% data integrity via 3NF normalization',
      'Real-time synchronization between UI and Backend'
    ]
  },
  {
    id: 'time-series',
    title: 'Time Series Modeling (Canada Labor)',
    role: 'Data Analyst',
    tech: ['R', 'SARIMA', 'Holt-Winters', 'Statistical Inference'],
    description: 'Developed predictive models for Canadian working hours to assist in labor resource allocation.',
    metrics: [
      'Optimized AIC parameters for high-accuracy forecasting',
      'Visualized 95% prediction intervals for stakeholders'
    ]
  }
];