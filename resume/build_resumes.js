const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  BorderStyle, Tab, TabStopType,
} = require('docx');

// Page 12240 DXA wide, 720 DXA margins => 10800 DXA of content.
const CONTENT_WIDTH = 10800;

const FONT = 'Calibri';
const BODY = 20;   // half-points => 10pt
const NAME = 30;   // 15pt
const SMALL = 18;  // 9pt

const sectionHeading = (text) => new Paragraph({
  spacing: { before: 120, after: 45 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000', space: 1 } },
  children: [new TextRun({ text, bold: true, size: BODY, font: FONT, allCaps: true, characterSpacing: 20 })],
});

// Renders **bold** segments inside a plain string.
const rich = (text, base = {}) => {
  const out = [];
  text.split(/(\*\*[^*]+\*\*)/g).forEach((seg) => {
    if (!seg) return;
    const bold = seg.startsWith('**') && seg.endsWith('**');
    out.push(new TextRun({
      text: bold ? seg.slice(2, -2) : seg,
      bold, size: BODY, font: FONT, ...base,
    }));
  });
  return out;
};

const bullet = (text, last = false, first = false) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: last ? 105 : 18, line: 224 },
  keepLines: true,
  keepNext: false,
  children: rich(text),
});

// "Left text" ..... "Right text" on one line via a right tab stop, no table.
const splitLine = (left, right, opts = {}) => new Paragraph({
  spacing: { after: 0, line: 224 },
  keepNext: opts.keepNext !== false,
  tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
  children: [
    ...rich(left, { italics: !!opts.leftItalic }),
    new TextRun({ children: [new Tab()], size: BODY, font: FONT }),
    new TextRun({ text: right, size: BODY, font: FONT, italics: !!opts.rightItalic }),
  ],
});

const plain = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 0, line: 224 },
  keepNext: !!opts.keepNext,
  children: rich(text, { italics: !!opts.italics }),
});

// ---------------------------------------------------------------- shared data

const CONTACT = [
  'Ithaca, NY  |  551-405-1324  |  jtonyking@hotmail.com',
  'linkedin.com/in/tao-tony-jin-ab771426a  |  github.com/TonyKing0504  |  dundun0504.com',
];

const EDUCATION = (coursework1) => [
  {
    school: 'Cornell University', location: 'Ithaca, NY',
    degree: 'Master of Engineering in Systems Engineering', date: 'Expected May 2026',
    coursework: `Relevant Coursework: ${coursework1}`,
  },
  {
    school: 'University of British Columbia', location: 'Vancouver, BC',
    degree: 'Bachelor of Science, Major in Mathematics', date: 'Sep. 2021 – June 2025',
    coursework: 'Relevant Coursework: Statistical Learning, Time Series Analysis, Statistical Inference & Hypothesis Testing, Stochastic Calculus, Linear Programming, Algorithms & Data Structures, Relational Databases',
  },
];

const AIFUKU_SQL = 'Partnered cross-functionally with the operations team to write and optimize PostgreSQL queries (joins, CTEs, aggregations) against a Postgres 15 source-of-truth database of 9 core tables across 4 operational inputs, validating order, receipt, inventory, and ledger data feeding Metabase business intelligence (BI) dashboards and KPI reporting.';
const AIFUKU_ETL = 'Built and documented a 2-block Mage ETL pipeline that retrieved the latest bank and credit-card statement PDFs from Google Drive, applied a Gemini Large Language Model (LLM) API with prompt engineering to parse transaction fields, and output structured JSON for ledger reconciliation — replacing manual data entry with a reproducible, automated workflow.';
const AIFUKU_EDA = 'Performed exploratory data analysis (EDA) across 5 linked operational entities — receipts, line items, inventory movements, production batches, and customer orders — running root cause analysis on data quality and schema issues, then presented findings and recommendations to non-technical operations stakeholders to improve reporting accuracy and data integrity.';

const GROW = {
  org: 'Grow Investment Group', location: 'Shanghai, China',
  role: 'Institutional Sales Department Intern', date: 'May 2024 – Aug. 2024',
  bullets: [
    'Engineered Python (pandas) automation scripts to cross-reference multi-source databases during institutional client due diligence and due diligence questionnaire (DDQ) completion, reducing manual data processing time by 15% while improving data accuracy through systematic validation checks.',
    'Conducted quantitative market research and statistical analysis integrating macroeconomic indicators, interest rate trends, and market sentiment data; collaborated with senior analysts to author written analytical reports supporting institutional investment decisions.',
    'Authored a convertible bond market downturn analysis and product training materials for the client-facing sales team, translating quantitative findings into clear data storytelling for a non-technical audience; contributed to a 9% reduction in client redemptions, 4% more client inquiries, and a 12% increase in conversion rates.',
  ],
};

const SINOLINK = {
  org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
  role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
  bullets: [
    'Calculated and visualized portfolio performance and risk metrics (Sharpe ratio, Sortino ratio, Beta, volatility) and ran correlation analysis, benchmarking trends against market indices in risk management reports used by internal decision-makers.',
    "Performed pre-IPO financial due diligence for a Shanghai main-board applicant (planned fundraising ~RMB 460M), reconciling a dozen executives' 3-year bank statements against company ledgers with rigorous attention to detail to flag unexplained transactions and disclosure discrepancies.",
    'Redesigned data collection, spreadsheet verification, and reporting workflows through cross-functional collaboration with senior analysts, eliminating duplicate data entry and improving team operational efficiency by 8%; standardized and documented the workflow for team reuse.',
  ],
};

const SINOLINK_DS = {
  org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
  role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
  bullets: [
    'Calculated and visualized portfolio performance and risk metrics (Sharpe ratio, Sortino ratio, Beta, volatility) and ran correlation analysis, benchmarking trends against market indices in risk management reports used by internal decision-makers.',
    "Performed pre-IPO financial due diligence for a Shanghai main-board applicant (planned fundraising ~RMB 460M), reconciling executives' 3-year bank statements against company ledgers with rigorous attention to detail to flag unexplained transactions; redesigned data collection and reporting workflows cross-functionally, improving team operational efficiency by 8%.",
  ],
};

const OLIST_MARTS = 'Designed reusable order-, customer-, and item-level data marts in DuckDB SQL from 99,441 marketplace orders, aggregating payments, items, and reviews to order grain before joining — a data modeling decision that prevented double-counted revenue and protected KPI accuracy.';
const DIABETES_FEATURES = 'Engineered a 160-feature clinical dataset from 101,766 hospital encounters covering 71,518 unique patients across 130 U.S. hospitals — spanning diagnoses, medications, and utilization metrics — applying patient-level 70/10/20 train-calibration-test splits to prevent data leakage in a reproducible modeling pipeline.';
const TIMESERIES = 'Developed and validated SARIMA and Holt-Winters time series forecasting models in R, tuning parameters by AIC and visualizing 95% prediction intervals so stakeholders could quantify forecast uncertainty in labor resource allocation.';

// ------------------------------------------------------------ resume variants

const ANALYST = {
  file: 'Tao_Jin_Resume_DataAnalyst_ATS.docx',
  targetRole: 'Data Analyst / Business Analyst / Business Intelligence Analyst',
  summary: 'Data Analyst with a Cornell M.Eng. in Systems Engineering (May 2026) and a UBC B.Sc. in Mathematics, plus three data, analytics, and financial research internships across North America and Asia. Builds production SQL, automated Extract-Transform-Load (ETL) workflows, business intelligence (BI) dashboards, and KPI reporting that stakeholders use to make decisions. Strengths in SQL, Python, R, Excel, statistical analysis, A/B testing, cohort and retention analysis, and data storytelling, with a record of translating ambiguous business questions into analytical solutions and presenting findings to non-technical stakeholders. Fluent in English and Mandarin Chinese.',
  skills: [
    ['Querying & Databases', 'SQL (PostgreSQL, Oracle SQL, DuckDB) — joins, CTEs, window functions, aggregations, subqueries, query optimization; relational database design, data modeling, database normalization (3NF), data marts, data warehousing concepts'],
    ['Business Intelligence & Visualization', 'Tableau, Metabase, Excel (pivot tables, lookup formulas, dashboards, scorecards), Matplotlib, dashboard development, KPI reporting, executive reporting, data visualization, data storytelling'],
    ['Programming & Analysis', 'Python (pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib), R, C++, MATLAB, LaTeX, Jupyter, Git/GitHub version control'],
    ['Statistics & Analytics Methods', 'Exploratory Data Analysis (EDA), descriptive and inferential statistics, hypothesis testing, statistical significance, A/B testing and experimental design, regression analysis, statistical modeling, time series forecasting (SARIMA, Holt-Winters), cohort analysis, customer segmentation, retention and churn analysis, root cause analysis, correlation analysis, optimization and linear programming'],
    ['Data Engineering & Quality', 'ETL/ELT pipeline development (Mage), workflow automation, data cleaning and wrangling, data validation, data quality auditing, data integrity, reproducible analysis, technical documentation, REST API integration, JSON'],
    ['Machine Learning & AI', 'Supervised learning, classification, predictive modeling, feature engineering, model evaluation (AUROC, AUPRC, precision, recall), cross-validation, model calibration, conformal prediction, SHAP explainability, subgroup fairness and bias auditing, Natural Language Processing (NLP), Large Language Models (LLMs), LLM APIs, prompt engineering, structured output extraction'],
    ['Business & Communication', 'Stakeholder communication and management, cross-functional collaboration, requirements gathering, business acumen, presenting to technical and non-technical audiences, technical writing, data-driven decision making, attention to detail, working through ambiguity'],
    ['Languages', 'Mandarin Chinese (Native), English (Professional Working Proficiency), Japanese (Basic)'],
  ],
  education: EDUCATION('Data Analytics, Optimization, Statistical Modeling, Machine Learning'),
  order: ['experience', 'projects'],
  experience: [
    {
      org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [AIFUKU_SQL, AIFUKU_ETL, AIFUKU_EDA],
    },
    GROW, SINOLINK,
  ],
  projects: [
    {
      title: 'E-Commerce Marketplace Retention & Fulfillment Analytics (Olist)',
      tech: 'SQL (DuckDB), CTEs, Window Functions, Cohort Analysis, Excel Dashboard', date: '',
      bullets: [
        OLIST_MARTS,
        'Ran cohort analysis, customer segmentation, and retention analysis to surface a 3.0% delivered-customer repeat-purchase rate and a BRL 7.98M high-value one-time-buyer segment, converting the insight into CRM and second-purchase campaign recommendations.',
        'Analyzed 96,478 delivered orders to quantify an 8.1% late-delivery rate and its materially weaker review scores, then built an executive-ready recommendation scorecard and Excel dashboard covering service recovery, seller risk, and category operations.',
      ],
    },
    {
      title: 'Diabetes 30-Day Hospital Readmission Risk Model',
      tech: 'Python, pandas, scikit-learn, XGBoost, SHAP', date: 'Sep. 2025 – Dec. 2025',
      bullets: [
        DIABETES_FEATURES,
        'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost classifiers with cross-validation for imbalanced binary classification (best held-out AUROC 0.668, AUPRC 0.230), then applied isotonic recalibration to cut Expected Calibration Error from 0.342 to 0.004 and ran SHAP interpretability plus subgroup fairness auditing.',
      ],
    },
    {
      title: 'LLM Metadata Extraction Pipeline — Kaggle Competition',
      tech: 'Python, NLP, LLM APIs, pandas, REST API', date: 'Jan. 2026 – Mar. 2026',
      bullets: [
        'Built an automated Natural Language Processing (NLP) pipeline extracting structured SDRF metadata across a 71-category annotation taxonomy from 107 scientific publications, processing 1,659 sample records over 15 test datasets.',
        'Reverse-engineered the competition scoring function (difflib string-similarity clustering at a 0.80 threshold) to root-cause a 0.575 validation-to-test performance gap, isolating vocabulary overfitting and value normalization — not extraction logic — as the primary score driver.',
      ],
    },
  ],
  additional: '**Additional Projects:** Time Series Forecasting — Canadian Labor Hours (R, SARIMA, Holt-Winters, AIC parameter tuning, 95% prediction intervals for stakeholders) · Dual-Portal Delivery Platform Database Design (Oracle SQL, Node.js, 3NF normalization, referential integrity, real-time synchronization).',
};

const SCIENTIST = {
  file: 'Tao_Jin_Resume_DataScientist_ATS.docx',
  targetRole: 'Data Scientist / Machine Learning / Applied Scientist',
  summary: 'Data Scientist with a Cornell M.Eng. in Systems Engineering (May 2026) and a UBC B.Sc. in Mathematics, plus three data science, analytics, and quantitative research internships across North America and Asia. Builds end-to-end machine learning pipelines — feature engineering, model benchmarking, calibration, explainability, and fairness auditing — alongside production SQL and Extract-Transform-Load (ETL) workflows. Applies statistical modeling, hypothesis testing, predictive modeling, Natural Language Processing (NLP), and Large Language Model (LLM) APIs to business and clinical problems, communicating results to technical and non-technical stakeholders in decision-ready form. Fluent in English and Mandarin Chinese.',
  skills: [
    ['Programming', 'Python (pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib), R, SQL (PostgreSQL, Oracle SQL, DuckDB), C++, MATLAB, LaTeX, Jupyter, Git/GitHub version control, Node.js'],
    ['Machine Learning', 'Supervised learning, binary classification, predictive modeling, logistic regression, random forest, gradient boosting, XGBoost, feature engineering, imbalanced-class handling, cross-validation, hyperparameter tuning, model evaluation (AUROC, AUPRC, precision, recall), model calibration (isotonic, Expected Calibration Error), conformal prediction, SHAP explainability, fairness and bias auditing, data-leakage prevention, reproducible ML pipelines'],
    ['Statistics & Experimentation', 'Statistical modeling and inference, hypothesis testing, statistical significance, A/B testing and experimental design, regression analysis, descriptive and inferential statistics, time series forecasting (SARIMA, Holt-Winters, AIC, prediction intervals), correlation analysis, stochastic modeling, optimization and linear programming'],
    ['NLP & Generative AI', 'Natural Language Processing (NLP), Large Language Models (LLMs), LLM APIs (Gemini), prompt engineering, structured output extraction, rule-based and regex extraction, string-similarity matching, text parsing, annotation taxonomies, REST API integration, JSON'],
    ['Data Engineering, Analytics & BI', 'ETL/ELT pipeline development (Mage), workflow automation, SQL data marts, data modeling, database normalization (3NF), relational databases, data warehousing concepts, data cleaning and wrangling, data validation, data quality auditing, Exploratory Data Analysis (EDA), cohort analysis, customer segmentation, retention and churn analysis, root cause analysis, Tableau, Metabase, Excel (pivot tables, dashboards, scorecards), Matplotlib, dashboard development, KPI reporting, data visualization, data storytelling'],
    ['Business & Communication', 'Stakeholder communication and management, cross-functional collaboration, requirements gathering, business acumen, presenting to technical and non-technical audiences, technical writing and documentation, data-driven decision making, attention to detail, working through ambiguity'],
    ['Languages', 'Mandarin Chinese (Native), English (Professional Working Proficiency), Japanese (Basic)'],
  ],
  education: EDUCATION('Data Analytics, Machine Learning, Statistical Modeling, Optimization'),
  order: ['projects', 'experience'],
  projects: [
    {
      title: 'Diabetes 30-Day Hospital Readmission Risk Modeling',
      tech: 'Python, pandas, scikit-learn, XGBoost, SHAP', date: 'Sep. 2025 – Dec. 2025',
      bullets: [
        DIABETES_FEATURES,
        'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost classifiers with cross-validation and hyperparameter tuning for imbalanced binary classification on tabular clinical data, reaching best held-out performance of AUROC 0.668 and AUPRC 0.230.',
        'Improved reliability and interpretability by applying isotonic recalibration to cut Expected Calibration Error from 0.342 to 0.004, implementing split conformal prediction with 90.1% empirical coverage, and running SHAP feature-importance analysis plus subgroup fairness and bias auditing; documented methodology and limitations in a technical report.',
      ],
    },
    {
      title: 'LLM Metadata Extraction Pipeline — Kaggle Competition',
      tech: 'Python, NLP, LLM APIs, pandas, REST API', date: 'Jan. 2026 – Mar. 2026',
      bullets: [
        'Built an automated Natural Language Processing (NLP) pipeline to extract structured SDRF metadata across a 71-category annotation taxonomy from 107 scientific publications, processing 1,659 sample records over 15 test datasets.',
        'Reverse-engineered the competition scoring function (difflib string-similarity clustering at a 0.80 threshold) to root-cause a 0.575 validation-to-test performance gap, isolating vocabulary overfitting and value normalization — not extraction logic — as the primary score driver.',
        "Benchmarked regex/rule-based extraction against LLM structured output with PRIDE REST API integration and nearest-neighbor training retrieval, quantified each approach's performance ceiling, and recommended the LLM method as optimal.",
      ],
    },
    {
      title: 'E-Commerce Marketplace Retention & Fulfillment Analytics (Olist)',
      tech: 'SQL (DuckDB), CTEs, Window Functions, Cohort Analysis', date: '',
      bullets: [
        OLIST_MARTS,
        'Ran cohort analysis, customer segmentation, and retention analysis to surface a 3.0% repeat-purchase rate and a BRL 7.98M high-value one-time-buyer segment, and linked an 8.1% late-delivery rate across 96,478 delivered orders to materially weaker review scores; translated both into an executive-ready recommendation scorecard for CRM, service recovery, and seller operations.',
      ],
    },
  ],
  additional: '**Additional Projects:** Time Series Forecasting — Canadian Labor Hours (R, SARIMA, Holt-Winters, AIC parameter tuning, 95% prediction intervals for stakeholders) · Dual-Portal Delivery Platform Database Design (Oracle SQL, Node.js, 3NF normalization, referential integrity, real-time synchronization).',
  experience: [
    {
      org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [AIFUKU_ETL, AIFUKU_SQL, AIFUKU_EDA],
    },
    GROW, SINOLINK_DS,
  ],
};

// ------------------------------------------------------------------- assembly

function build(cfg) {
  const kids = [];

  kids.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [new TextRun({ text: 'TAO (TONY) JIN', bold: true, size: NAME, font: FONT, characterSpacing: 30 })],
  }));
  CONTACT.forEach((line) => kids.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 20 },
    children: [new TextRun({ text: line, size: SMALL, font: FONT })],
  })));

  kids.push(sectionHeading('Professional Summary'));
  kids.push(plain(cfg.summary, { after: 40 }));

  kids.push(sectionHeading('Technical Skills'));
  cfg.skills.forEach(([label, body]) => kids.push(new Paragraph({
    spacing: { after: 30, line: 224 },
    indent: { left: 0, hanging: 0 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: BODY, font: FONT }),
      new TextRun({ text: body, size: BODY, font: FONT }),
    ],
  })));

  kids.push(sectionHeading('Education'));
  cfg.education.forEach((e, i) => {
    kids.push(splitLine(`**${e.school}**`, e.location));
    kids.push(splitLine(e.degree, e.date));
    kids.push(plain(e.coursework, { italics: true, keepNext: i === 0, after: i === cfg.education.length - 1 ? 40 : 90 }));
  });

  const renderExperience = () => {
    kids.push(sectionHeading('Professional Experience'));
    cfg.experience.forEach((j) => {
      kids.push(splitLine(`**${j.org}**`, j.location));
      kids.push(splitLine(j.role, j.date, { leftItalic: true }));
      j.bullets.forEach((b, i) => kids.push(bullet(b, i === j.bullets.length - 1, i === 0)));
    });
  };
  const renderProjects = () => {
    kids.push(sectionHeading('Project Experience'));
    cfg.projects.forEach((p) => {
      kids.push(splitLine(`**${p.title}**`, p.date));
      kids.push(plain(p.tech, { italics: true, keepNext: true }));
      p.bullets.forEach((b, i) => kids.push(bullet(b, i === p.bullets.length - 1, i === 0)));
    });
    if (cfg.additional) kids.push(plain(cfg.additional, { after: 60 }));
  };

  cfg.order.forEach((s) => (s === 'experience' ? renderExperience() : renderProjects()));

  return new Document({
    creator: 'Tao (Tony) Jin',
    title: 'Tao (Tony) Jin — Resume',
    numbering: {
      config: [{
        reference: 'bullets',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 230, hanging: 170 } }, run: { font: FONT, size: BODY } },
        }],
      }],
    },
    styles: { default: { document: { run: { font: FONT, size: BODY }, paragraph: { spacing: { line: 224 } } } } },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 504, right: 720, bottom: 504, left: 720 },
        },
      },
      children: kids,
    }],
  });
}

// ------------------------------------------------- markdown mirror of the docx

function toMarkdown(cfg, title) {
  const L = [];
  L.push('# TAO (TONY) JIN', '');
  L.push(CONTACT[0].replace(/\s{2,}/g, ' '));
  L.push(CONTACT[1].replace(/\s{2,}/g, ' '), '');
  L.push('> Target role: ' + title, '');
  L.push('## PROFESSIONAL SUMMARY', '', cfg.summary, '');
  L.push('## TECHNICAL SKILLS', '');
  cfg.skills.forEach(([k, v]) => L.push('**' + k + ':** ' + v, ''));
  L.push('## EDUCATION', '');
  cfg.education.forEach((e) => {
    L.push('**' + e.school + '** — ' + e.location);
    L.push(e.degree + ' | ' + e.date);
    L.push('*' + e.coursework + '*', '');
  });
  const exp = () => {
    L.push('## PROFESSIONAL EXPERIENCE', '');
    cfg.experience.forEach((j) => {
      L.push('**' + j.org + '** — ' + j.location);
      L.push('*' + j.role + '* | ' + j.date, '');
      j.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
  };
  const proj = () => {
    L.push('## PROJECT EXPERIENCE', '');
    cfg.projects.forEach((pr) => {
      L.push('**' + pr.title + '**' + (pr.date ? ' | ' + pr.date : ''));
      L.push('*' + pr.tech + '*', '');
      pr.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
    if (cfg.additional) L.push(cfg.additional, '');
  };
  cfg.order.forEach((sec) => (sec === 'experience' ? exp() : proj()));
  return L.join('\n');
}

(async () => {
  for (const cfg of [ANALYST, SCIENTIST]) {
    const doc = build(cfg);
    const buf = await Packer.toBuffer(doc);
    fs.writeFileSync(`/home/user/Resume/resume/${cfg.file}`, buf);
    const mdPath = `/home/user/Resume/resume/${cfg.file.replace('.docx', '.md')}`;
    fs.writeFileSync(mdPath, toMarkdown(cfg, cfg.targetRole) + '\n');
    console.log('wrote', cfg.file, 'and', mdPath.split('/').pop());
  }
})();
