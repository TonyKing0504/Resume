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
    role: 'Institutional Sales Department Intern',
    location: 'Shanghai, China',
    period: 'May 2024 – Aug 2024',
    achievements: [
      'Spearheaded in-depth market research to identify investment trends and presented strategic findings to senior analysts, directly supporting institutional client decision-making.',
      'Collaborated with cross-functional teams to conduct due diligence and engineered Python-based API tools to automate data entry from cross-referenced databases, improving workflow efficiency.',
      'Compiled a comprehensive slide deck analyzing the convertible bond market downturn through macroeconomic indicators such as rates and sentiment, helping reduce selloffs by 9%.',
      'Designed technical marketing materials for a new convertible bond product launch and educated sales teams on key features, contributing to a 4% increase in inquiries and a 12% boost in conversion rates.'
    ]
  },
  {
    id: 'sinolink',
    company: 'Sinolink Securities Co., Ltd.',
    role: 'Investment Banking Intern',
    location: 'Shanghai, China',
    period: 'June 2023 – Aug 2023',
    achievements: [
      'Advised corporate clients with market caps up to $7.7M USD during pre-IPO stages by performing financial due diligence, analyzing cash flow statements, and rectifying critical discrepancies.',
      'Refined data collection methodologies for senior analysts, streamlining reporting processes and enhancing operational efficiency by 8%.',
      'Analyzed portfolio performance by calculating key metrics including Sharpe, Sortino, Beta, and Volatility, then visualized trends against benchmarks with time-series plots.',
      'Performed systematic risk evaluation and correlation analysis, presenting findings in comprehensive risk management reports to stakeholders.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'diabetes-readmission',
    title: 'Diabetes Hospital Readmission Risk Modeling',
    role: 'Machine Learning & Clinical Risk Modeling',
    period: 'Sep. 2025 – Present',
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP'],
    description: 'Built a leakage-safe clinical risk modeling pipeline for 30-day diabetes readmission prediction using hospital encounter, diagnosis, medication, and utilization data across a large multi-site U.S. cohort.',
    metrics: [
      'Engineered a 160-feature dataset from 101,766 hospital encounters across 130 U.S. hospitals for 71,518 unique patients, using patient-level 70/10/20 train-calibrate-test splitting to prevent data leakage.',
      'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost for 30-day readmission prediction, with best held-out performance reaching AUROC 0.668 and AUPRC 0.230.',
      'Applied isotonic recalibration to reduce XGBoost Expected Calibration Error from 0.342 to 0.004, implemented split conformal prediction with 90.1% empirical coverage, and ran SHAP interpretability plus subgroup fairness audits.'
    ]
  },
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
