/*
 * One-page ATS resumes, formatted to match Cornell_Tao_Jin.docx.
 *
 * Format lifted from the original: Cambria (the file's theme minorFont), 20pt
 * bold centred name, 9.5pt contact line, 11pt bold all-caps section headings
 * with a bottom rule, 10.5pt bold organisation line with a right tab at 10199,
 * italic role line, 9.5pt bullets indented 283 DXA, US Letter with 737/1020
 * margins.
 *
 *   npm install docx && node build_resumes.js
 */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, Tab, TabStopType,
} = require('docx');

const FONT = 'Cambria';
const NAME_SZ = 40;   // 20pt
const HEAD_SZ = 22;   // 11pt   section headings
const ORG_SZ = 21;    // 10.5pt organisation / project title
const BODY_SZ = 18;   // 9pt    bullets, contact, skills
const RIGHT_TAB = 10920;
const LINE = Number(process.env.RESUME_LINE || 200);  // leading, 240 = single

// **bold** and __italic__ inside a plain string.
const runs = (text, base = {}) =>
  text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g).filter(Boolean).map((seg) => {
    const bold = seg.startsWith('**');
    const ital = seg.startsWith('__');
    const body = bold || ital ? seg.slice(2, -2) : seg;
    return new TextRun({
      text: body, font: FONT, size: base.size ?? BODY_SZ,
      bold: bold || !!base.bold, italics: ital || !!base.italics,
    });
  });

const heading = (text) => new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 1 } },
  spacing: { before: 105, after: 40, line: LINE },
  keepNext: true,
  children: [new TextRun({ text, bold: true, size: HEAD_SZ, font: FONT })],
});

// Left text, then right-aligned text at the tab stop — no table, ATS-safe.
const tabbed = (left, right, opts = {}) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  spacing: { before: opts.before ?? 0, after: 0, line: LINE },
  keepNext: true,
  children: [
    ...runs(left, { size: opts.size ?? ORG_SZ }),
    new TextRun({ children: [new Tab()], font: FONT, size: opts.size ?? ORG_SZ }),
    ...runs(right, { size: opts.size ?? ORG_SZ }),
  ],
});

const bullet = (text) => new Paragraph({
  indent: { left: 283, hanging: 142 },
  spacing: { after: 14, line: LINE },
  keepLines: true,
  children: runs('• ' + text),
});

const skill = (label, body) => new Paragraph({
  spacing: { after: 14, line: LINE },
  children: [
    new TextRun({ text: label + ': ', bold: true, size: BODY_SZ, font: FONT }),
    ...runs(body),
  ],
});

// ---------------------------------------------------------------- shared data

const CONTACT = ['Ithaca, NY | 551-405-1324 | jtonyking@hotmail.com',
  'linkedin.com/in/tao-tony-jin-ab771426a | github.com/TonyKing0504'];

const EDUCATION = (cornellCourses) => [
  { school: 'Cornell University', location: 'Ithaca, NY',
    degree: 'Master of Engineering in Systems Engineering', date: 'Sep. 2025 – May 2026' },
  { school: 'University of British Columbia', location: 'Vancouver, BC',
    degree: 'Bachelor of Science: Major in Mathematics', date: 'Sep. 2021 – June 2025',
    courses: 'Relevant Coursework: Statistical Learning, Time Series Analysis, Statistical Inference & '
      + 'Hypothesis Testing, Stochastic Calculus, Linear Programming, Algorithms, Relational Databases.' },
];

const AIFUKU_SQL = 'Wrote and optimized PostgreSQL queries (joins, CTEs, window functions) on a Postgres '
  + '15 source-of-truth database of 9 tables, validating order, receipt, inventory, and ledger data feeding '
  + 'Metabase business intelligence (BI) dashboards and KPI reporting; ran exploratory data analysis '
  + '(EDA) and root cause analysis across 5 linked entities, presented findings and recommendations '
  + 'cross-functionally to non-technical stakeholders, lifting data quality and reporting accuracy.';
const AIFUKU_ETL = 'Built and documented a Mage ETL pipeline pulling statement PDFs from Google Drive, parsed '
  + 'transaction fields with a Gemini Large Language Model (LLM) API and prompt engineering, and output '
  + 'structured JSON for ledger reconciliation, replacing manual data entry with reproducible automation.';

const GROW = {
  org: 'Grow Investment Group', location: 'Shanghai, China',
  role: 'Institutional Sales Department Intern', date: 'May 2024 – Aug. 2024',
  bullets: [
    'Engineered Python (pandas) automation scripts cross-referencing multi-source databases for '
      + 'institutional client due diligence and due diligence questionnaire (DDQ) completion, cutting manual '
      + 'data processing time 15% through systematic data validation.',
    'Authored convertible bond downturn analysis, quantitative market research on macroeconomic, rate, '
      + 'and sentiment data, and product training materials, translating findings into data storytelling '
      + 'for non-technical audiences; drove 9% fewer redemptions, 4% more inquiries, 12% higher conversion.',
  ],
};

const SINOLINK = {
  org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
  role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
  bullets: [
    'Calculated portfolio risk KPIs (Sharpe, Sortino, Beta, volatility) and correlation analysis for '
      + 'stakeholder risk management reports; ran pre-IPO due diligence (~RMB 460M) with rigorous attention '
      + 'to detail and redesigned reporting workflows, improving team efficiency 8%.',
  ],
};

const DIABETES = {
  title: 'Diabetes 30-Day Readmission Risk Modeling',
  tech: 'Python, scikit-learn, XGBoost', date: 'Sep.–Dec. 2025',
  bullets: [
    'Engineered a 160-feature clinical dataset from 101,766 encounters across 130 U.S. hospitals with '
      + 'patient-level train-calibration-test splits preventing data leakage in a reproducible pipeline.',
    'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost with cross-validation '
      + 'and hyperparameter tuning for imbalanced classification (AUROC 0.668, AUPRC 0.230); cut Expected Calibration '
      + 'Error 0.342 to 0.004 by isotonic recalibration, added conformal prediction at 90.1% coverage, ran '
      + 'SHAP explainability and subgroup fairness/bias auditing.',
  ],
};

const OLIST = {
  title: 'Marketplace Retention & Fulfillment Analytics (Olist)',
  tech: 'SQL (DuckDB), Window Functions', date: '',
  bullets: [
    'Built reusable order-, customer-, and item-level SQL data marts from 99,441 orders, aggregating to '
      + 'order grain before joining to prevent double-counted revenue and protect KPI accuracy; ran cohort '
      + 'analysis, customer segmentation, and retention/churn analysis surfacing a 3.0% repeat-purchase rate, '
      + 'a BRL 7.98M one-time-buyer segment, and an 8.1% late-delivery rate tied to weaker reviews, delivered '
      + 'as an executive scorecard and dashboard.',
  ],
};

const KAGGLE = {
  title: 'LLM Metadata Extraction Pipeline (Kaggle)',
  tech: 'Python, NLP, LLM APIs', date: 'Jan.–Mar. 2026',
  bullets: [
    'Built a natural language processing (NLP) pipeline extracting structured SDRF metadata across a '
      + '71-category taxonomy from 107 publications and 1,659 records; root-caused a 0.575 validation-test '
      + 'gap and benchmarked regex versus LLM structured output via the PRIDE REST API.',
  ],
};

const BUSINESS_SKILLS = ['Business & Communication',
  'Stakeholder communication, cross-functional collaboration, requirements gathering, business acumen, presenting to '
  + 'technical/non-technical audiences, technical writing/documentation, data-driven decisions, '
  + 'working through ambiguity. Languages: Chinese (Native), English (Professional), '
  + 'Japanese (Basic)'];

// ------------------------------------------------------------ resume variants

const ANALYST = {
  file: 'Tao_Jin_Resume_DataAnalyst_ATS.docx',
  targetRole: 'Data Analyst / Business Analyst / Business Intelligence Analyst',
  education: EDUCATION('Data Analytics, Optimization, Statistical Modeling, Machine Learning.'),
  experience: [
    { org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [AIFUKU_SQL, AIFUKU_ETL] },
    GROW, SINOLINK,
  ],
  projects: [OLIST, DIABETES, KAGGLE],
  skills: [
    ['Programming', 'Python (pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib), R, SQL (PostgreSQL, '
      + 'Oracle SQL, DuckDB), C++, MATLAB, Git version control, Jupyter'],
    ['Analytics & BI', 'Tableau, Power BI, Excel (pivot tables), dashboard development, data '
      + 'visualization, KPI reporting, cohort analysis, segmentation, retention/churn analysis'],
    ['Statistics & ML', 'Machine learning, statistical modeling, hypothesis testing, statistical '
      + 'significance, A/B testing/experimental design, causal inference, regression, predictive modeling, '
      + 'feature engineering, model evaluation (precision/recall), model calibration, explainability, '
      + 'fairness/bias auditing, time series forecasting (SARIMA, Holt-Winters), optimization'],
    ['Data Engineering & AI', 'ETL/ELT pipelines (Mage), Apache Spark, Snowflake, data warehousing, data modeling, '
      + 'normalization, data quality, data cleaning, Natural Language Processing (NLP), Large Language Models (LLMs), '
      + 'LLM APIs, prompt engineering, REST APIs'],
    BUSINESS_SKILLS,
  ],
};

const SCIENTIST = {
  file: 'Tao_Jin_Resume_DataScientist_ATS.docx',
  targetRole: 'Data Scientist / Machine Learning / Applied Scientist',
  education: EDUCATION('Data Analytics, Machine Learning, Statistical Modeling, Optimization.'),
  experience: [
    { org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [AIFUKU_ETL, AIFUKU_SQL] },
    GROW, SINOLINK,
  ],
  projects: [DIABETES, KAGGLE, OLIST],
  projectsFirst: true,
  skills: [
    ['Programming', 'Python (pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib), R, SQL (PostgreSQL, '
      + 'Oracle SQL, DuckDB), C++, MATLAB, Git version control, Jupyter'],
    ['Machine Learning & Statistics', 'Supervised learning, predictive modeling, regression, feature engineering, '
      + 'model evaluation (precision/recall), model calibration, explainability, fairness/bias auditing, '
      + 'statistical modeling, hypothesis testing, statistical significance, A/B testing/experimental '
      + 'design, causal inference, time series forecasting (SARIMA, Holt-Winters), optimization'],
    ['Data Engineering & AI', 'ETL/ELT pipelines (Mage), Apache Spark, Snowflake, data warehousing, data modeling, '
      + 'normalization, data quality, data cleaning, Natural Language Processing (NLP), Large Language Models (LLMs), '
      + 'LLM APIs, prompt engineering, REST APIs'],
    ['Analytics & BI', 'Tableau, Power BI, Excel (pivot tables), dashboard development, data '
      + 'visualization, KPI reporting, cohort analysis, segmentation, retention/churn analysis'],
    BUSINESS_SKILLS,
  ],
};

// ------------------------------------------------------------------- assembly

function build(cfg) {
  const kids = [];

  kids.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 20, line: LINE },
    children: [new TextRun({ text: 'TAO (TONY) JIN', bold: true, size: NAME_SZ, font: FONT })],
  }));
  CONTACT.forEach((line) => kids.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 0, line: LINE },
    children: [new TextRun({ text: line, size: BODY_SZ, font: FONT })],
  })));

  kids.push(heading('EDUCATION'));
  cfg.education.forEach((e) => {
    kids.push(tabbed(`**${e.school}**`, e.location, { before: 30 }));
    kids.push(tabbed(`__${e.degree}__`, e.date));
    if (e.courses) kids.push(bullet(e.courses));
  });

  const renderExperience = () => {
    kids.push(heading('PROFESSIONAL EXPERIENCE'));
    cfg.experience.forEach((j) => {
      kids.push(tabbed(`**${j.org}**`, j.location, { before: 30 }));
      kids.push(tabbed(`__${j.role}__`, j.date));
      j.bullets.forEach((b) => kids.push(bullet(b)));
    });
  };
  const renderProjects = () => {
    kids.push(heading('PROJECT EXPERIENCE'));
    cfg.projects.forEach((p) => {
      kids.push(tabbed(`**${p.title}** | __${p.tech}__`, p.date, { before: 30 }));
      p.bullets.forEach((b) => kids.push(bullet(b)));
    });
  };

  if (cfg.projectsFirst) { renderProjects(); renderExperience(); }
  else { renderExperience(); renderProjects(); }

  kids.push(heading('TECHNICAL SKILLS'));
  cfg.skills.forEach(([label, body]) => kids.push(skill(label, body)));

  return new Document({
    creator: 'Tao (Tony) Jin',
    title: 'Tao (Tony) Jin — Resume',
    styles: {
      default: {
        document: { run: { font: FONT, size: BODY_SZ }, paragraph: { spacing: { line: LINE } } },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 500, right: 660, bottom: 500, left: 660 },
        },
      },
      children: kids,
    }],
  });
}

// ------------------------------------------------- markdown mirror of the docx

function toMarkdown(cfg) {
  const L = ['# TAO (TONY) JIN', '', ...CONTACT, '', '> Target role: ' + cfg.targetRole, ''];
  L.push('## EDUCATION', '');
  cfg.education.forEach((e) => {
    L.push(`**${e.school}** — ${e.location}`, `*${e.degree}* | ${e.date}`, ...(e.courses ? [`- ${e.courses}`] : []), '');
  });
  const exp = () => {
    L.push('## PROFESSIONAL EXPERIENCE', '');
    cfg.experience.forEach((j) => {
      L.push(`**${j.org}** — ${j.location}`, `*${j.role}* | ${j.date}`, '');
      j.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
  };
  const proj = () => {
    L.push('## PROJECT EXPERIENCE', '');
    cfg.projects.forEach((p) => {
      L.push(`**${p.title}** | *${p.tech}*${p.date ? ' | ' + p.date : ''}`, '');
      p.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
  };
  if (cfg.projectsFirst) { proj(); exp(); } else { exp(); proj(); }
  L.push('## TECHNICAL SKILLS', '');
  cfg.skills.forEach(([k, v]) => L.push(`**${k}:** ${v}`, ''));
  return L.join('\n');
}

(async () => {
  for (const cfg of [ANALYST, SCIENTIST]) {
    const buf = await Packer.toBuffer(build(cfg));
    fs.writeFileSync(`${__dirname}/${cfg.file}`, buf);
    fs.writeFileSync(`${__dirname}/${cfg.file.replace('.docx', '.md')}`, toMarkdown(cfg) + '\n');
    console.log('wrote', cfg.file);
  }
})();
