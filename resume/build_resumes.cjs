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

// --------------------------------------------- risk / exposure-management cut
//
// Targeted at insurance & reinsurance Risk Analyst / Exposure Management roles
// (e.g. Everest, Risk Analyst I). Same underlying facts as the other two
// variants, re-angled: the finance internships lead on risk vocabulary, the
// modeling project is framed as model validation and uncertainty
// quantification, and the marketplace project as concentration analysis.
// A summary is included here because this is a pivot application — the screener
// needs one line explaining why a maths/engineering candidate fits.
//
// Nothing insurance-specific is claimed: no catastrophe modeling, no RMS/AIR,
// no reinsurance product knowledge, no ERM. Those are real gaps.

const RISK = {
  file: 'Tao_Jin_Resume_RiskAnalyst.docx',
  targetRole: 'Risk Analyst / Exposure Management / Insurance & Reinsurance Analytics',
  contact: ['Ithaca, NY — open to Warren, NJ or Toronto, ON | 551-405-1324 | jtonyking@hotmail.com',
    'linkedin.com/in/tao-tony-jin-ab771426a | github.com/TonyKing0504'],
  summary: 'Quantitative analyst with a Cornell M.Eng. in Systems Engineering and a UBC B.Sc. in Mathematics, '
    + 'plus three internships spanning portfolio risk metrics, financial due diligence, and production '
    + 'data pipelines. Prepares, validates, and aggregates multi-source data, builds risk reporting for '
    + 'senior stakeholders, and translates quantitative results into actionable insights. Strong Excel, '
    + 'SQL, and Python, resolving data-quality issues independently under deadline.',
  education: [
    { school: 'Cornell University', location: 'Ithaca, NY',
      degree: 'Master of Engineering in Systems Engineering', date: 'Sep. 2025 – May 2026' },
    { school: 'University of British Columbia', location: 'Vancouver, BC',
      degree: 'Bachelor of Science: Major in Mathematics', date: 'Sep. 2021 – June 2025',
      courses: 'Relevant Coursework: Statistical Inference & Hypothesis Testing, Time Series Analysis, '
        + 'Stochastic Calculus, Optimization, Linear Programming, Relational Databases.' },
  ],
  experience: [
    { org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [
        'Prepared, consolidated, and validated operational data across 9 tables and 4 source systems in a '
          + 'Postgres source-of-truth database, writing SQL (joins, CTEs, window functions) to reconcile '
          + 'order, receipt, inventory, and ledger records feeding management dashboards and KPI reporting.',
        'Assessed data quality across 5 linked entities, independently root-caused reconciliation and schema '
          + 'issues, and presented findings to non-technical stakeholders; built and documented an automated '
          + 'ETL pipeline parsing statement documents into structured records, removing manual data entry.',
      ] },
    { org: 'Grow Investment Group', location: 'Shanghai, China',
      role: 'Institutional Sales Department Intern', date: 'May 2024 – Aug. 2024',
      bullets: [
        'Completed institutional client due diligence questionnaires (DDQs), cross-referencing multi-source '
          + 'databases with Python (pandas) automation and systematic validation to keep disclosures accurate, '
          + 'cutting manual data processing time 15%.',
        'Conducted quantitative market research on macroeconomic indicators, interest rate trends, and market '
          + 'sentiment; authored analytical reports and training materials translating findings for '
          + 'non-technical audiences, contributing to 9% fewer redemptions, 4% more inquiries, and 12% '
          + 'higher conversion.',
      ] },
    { org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
      role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
      bullets: [
        'Calculated and monitored portfolio risk metrics — Sharpe, Sortino, Beta, volatility, correlation — '
          + 'benchmarking exposures against market indices and consolidating results into risk management '
          + 'reports and presentations for decision-makers.',
        'Performed pre-IPO financial due diligence (planned raise ~RMB 460M), reconciling multi-year bank '
          + 'statements against ledgers with rigorous attention to detail to escalate unexplained '
          + 'transactions and disclosure discrepancies; standardized data collection and reporting '
          + 'workflows with senior analysts, improving team efficiency 8%.',
      ] },
  ],
  projects: [
    { title: 'Readmission Risk Modeling & Model Validation', tech: 'Python, scikit-learn, XGBoost',
      date: 'Sep.–Dec. 2025',
      bullets: [
        'Built a 160-feature risk model over 101,766 records across 130 sites, benchmarking logistic '
          + 'regression, random forest, gradient boosting, and XGBoost with cross-validation and '
          + 'leakage-safe splitting for out-of-sample validity (AUROC 0.668, AUPRC 0.230).',
        'Validated and recalibrated the selected model, cutting Expected Calibration Error from 0.342 to '
          + '0.004, quantified uncertainty via conformal prediction at 90.1% coverage, and ran '
          + 'driver attribution (SHAP) plus subgroup checks, documented in a written report.',
      ] },
    { title: 'Portfolio Concentration & Fulfillment Risk Analytics (Olist)', tech: 'SQL (DuckDB), Excel',
      date: '',
      bullets: [
        'Aggregated 99,441 transactions into reusable order-, customer-, and item-level data marts, '
          + 'controlling for double-counting at the aggregation grain to protect reported revenue and KPI '
          + 'accuracy; quantified concentration and loss drivers — a BRL 7.98M single-purchase segment, '
          + '3.0% repeat rate, 8.1% late deliveries tied to weaker satisfaction — in an executive scorecard.',
      ] },
  ],
  skills: [
    ['Tools & Programming', 'Microsoft Excel (pivot tables, lookups, dashboards), PowerPoint, Word; SQL (PostgreSQL, Oracle SQL, DuckDB — joins, CTEs, window functions, '
      + 'aggregation); Python (pandas, NumPy, scikit-learn, XGBoost), R, MATLAB, C++, Git, Jupyter'],
    ['Risk & Quantitative Analytics', 'Portfolio risk metrics (Sharpe, Sortino, Beta, volatility, correlation), applied statistics, '
      + 'exposure aggregation and concentration analysis, statistical modeling, hypothesis testing, '
      + 'regression, predictive and risk modeling, model validation and calibration, uncertainty '
      + 'quantification, time series forecasting (SARIMA, Holt-Winters), optimization'],
    ['Data & Reporting', 'Data preparation, validation, reconciliation, and quality assurance; ETL '
      + 'pipelines; management, compliance, and disclosure reporting; dashboards (Tableau, '
      + 'Power BI, Metabase); KPI reporting; data visualization; ad hoc analysis'],
    ['Business & Communication', 'Excellent written, verbal, and presentation skills; stakeholder '
      + 'communication; cross-functional collaboration; translating complex analysis into actionable '
      + 'insights for senior leadership; prioritizing multiple assignments in a fast-paced environment; '
      + 'critical thinking; attention to detail. Languages: Chinese (Native), English (Professional), '
      + 'Japanese (Basic)'],
  ],
};

// --------------------------------------------------- market research cut
//
// Targeted at Fidelity Canada, Market Research Associate (Toronto, J70609).
// The J70609 posting itself could not be retrieved — Workday and the job
// aggregators are blocked by this environment's network policy and the page is
// not indexed. Built instead from the sibling posting on the same team,
// Market Research Analyst (J64794), which reports to the same Director,
// Research: primary research (questionnaire design, sampling, data collection,
// analysis), secondary research for demand analysis and competitive
// positioning, synthesising qualitative and quantitative data, research reports
// and dashboards for stakeholders, and strategic project management. Re-check
// against the real posting before sending.
//
// The angle: Grow Investment Group is the flagship. Quantitative market
// research inside an asset manager, feeding product positioning and business
// development, is exactly this job one market over — and asset-management
// domain knowledge is the differentiator a generic analytics candidate lacks.
//
// Not claimed: questionnaire design, Qualtrics/SPSS or any survey platform,
// moderating qualitative research. Those are real gaps.

const MARKET_RESEARCH = {
  file: 'Tao_Jin_Resume_MarketResearch.docx',
  targetRole: 'Market Research Associate / Analyst — asset management & financial services',
  contact: ['Ithaca, NY — open to Toronto, ON (hybrid) | 551-405-1324 | jtonyking@hotmail.com',
    'linkedin.com/in/tao-tony-jin-ab771426a | github.com/TonyKing0504'],
  summary: 'Quantitative researcher with a Cornell M.Eng. in Systems Engineering and a UBC B.Sc. in '
    + 'Mathematics, and three internships inside asset management and capital markets — including '
    + 'quantitative market research at a Shanghai asset manager whose findings supported product '
    + 'positioning, business development, and client-facing thought leadership. Pairs sophisticated data '
    + 'analysis in SQL, Python, R, and '
    + 'Excel with the writing, visualization, and presentation needed to turn qualitative and '
    + 'quantitative sources into insights senior stakeholders act on. A natural communicator with a strong '
    + 'analytical foundation and genuine curiosity; bilingual in Mandarin and English.',
  education: [
    { school: 'Cornell University', location: 'Ithaca, NY',
      degree: 'Master of Engineering in Systems Engineering', date: 'Sep. 2025 – May 2026' },
    { school: 'University of British Columbia', location: 'Vancouver, BC',
      degree: 'Bachelor of Science: Major in Mathematics', date: 'Sep. 2021 – June 2025',
      courses: 'Relevant Coursework: Statistical Inference & Hypothesis Testing (sampling, estimation), '
        + 'Statistical Learning, Time Series Analysis, Stochastic Calculus, Optimization, Relational '
        + 'Databases.' },
  ],
  experience: [
    { org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [
        'Built the reporting layer operations stakeholders relied on: wrote SQL (joins, '
          + 'CTEs, window functions) across a 9-table source-of-truth database, validated order, receipt, '
          + 'inventory, and ledger data, and maintained Metabase dashboards and KPI reports.',
        'Analyzed 5 linked data sets, independently root-caused data-quality issues, and presented '
          + 'findings and recommendations to non-technical stakeholders; automated a document-parsing '
          + 'pipeline that replaced manual data collection.',
      ] },
    { org: 'Grow Investment Group', location: 'Shanghai, China',
      role: 'Institutional Sales Department Intern', date: 'May 2024 – Aug. 2024',
      bullets: [
        'Conducted quantitative market research for an asset manager’s institutional business, '
          + 'integrating macroeconomic indicators, interest rate trends, and market sentiment data, and '
          + 'authored written research reports that informed institutional investment and positioning '
          + 'decisions.',
        'Produced a convertible bond market downturn analysis and product education materials that '
          + 'translated research findings into a clear narrative for client-facing teams; the program '
          + 'contributed to 9% fewer client redemptions, 4% more inquiries, and 12% higher conversion.',
        'Completed institutional client due diligence questionnaires (DDQs), cross-referencing '
          + 'multi-source databases with Python automation and systematic validation to keep disclosures '
          + 'accurate, cutting manual data processing 15%.',
      ] },
    { org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
      role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
      bullets: [
        'Researched pre-IPO issuers and calculated portfolio risk and performance metrics (Sharpe, '
          + 'Sortino, Beta, volatility, correlation), benchmarking against market indices and presenting '
          + 'results in reports for internal decision-makers.',
      ] },
  ],
  projects: [
    { title: 'Marketplace Demand, Segmentation & Satisfaction Research', tech: 'SQL (DuckDB), Excel',
      date: '',
      bullets: [
        'Analyzed 99,441 transactions to size demand and segment customers, quantifying a 3.0% '
          + 'repeat-purchase rate, a BRL 7.98M single-purchase segment, and an 8.1% late-delivery rate tied '
          + 'to materially weaker satisfaction ratings; synthesized findings into an executive scorecard '
          + 'with prioritized recommendations.',
      ] },
    { title: 'Secondary-Source Synthesis Pipeline (Kaggle)', tech: 'Python, NLP, LLM APIs',
      date: 'Jan.–Mar. 2026',
      bullets: [
        'Synthesized unstructured text from 107 publications into a structured 71-category dataset '
          + 'covering 1,659 records, benchmarking rule-based against LLM extraction and root-causing a '
          + '0.575 validation-test performance gap.',
      ] },
    { title: 'Predictive Modeling & Model Validation', tech: 'Python, scikit-learn, XGBoost',
      date: 'Sep.–Dec. 2025',
      bullets: [
        'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost over 101,766 '
          + 'records with cross-validation, then recalibrated and validated the selected model and ran '
          + 'driver attribution to explain the result.',
      ] },
  ],
  skills: [
    ['Research Methods', 'Quantitative and qualitative analysis, statistical sampling and inference, '
      + 'hypothesis testing, segmentation, demand analysis, cohort and retention analysis, satisfaction '
      + 'and rating data analysis, competitive and secondary research, trend and time series analysis, '
      + 'statistical modeling, regression'],
    ['Analysis & Presentation', 'Microsoft Excel (pivot tables, lookups, dashboards), PowerPoint, Word, '
      + 'Tableau, Power BI, Metabase, data visualization, research reports, executive reporting, '
      + 'dashboards, data storytelling'],
    ['Data & Programming', 'SQL (PostgreSQL, Oracle SQL, DuckDB — joins, CTEs, window functions, '
      + 'aggregation), Python (pandas, NumPy, scikit-learn), R, MATLAB; data collection, validation, and '
      + 'quality assurance; ETL pipelines; Git; Jupyter'],
    ['Industry Knowledge', 'Asset management and financial services, institutional client and sales '
      + 'support, macroeconomic and interest rate analysis, market sentiment, convertible bonds, due '
      + 'diligence questionnaires (DDQs), pre-IPO research'],
    ['Business & Communication', 'Excellent written and oral communication; presenting to technical and '
      + 'non-technical stakeholders; translating analysis into actionable insights; strategic project scheduling and stakeholder management; curiosity; attention to detail; managing multiple priorities to '
      + 'deadline. Languages: Chinese (Native), English (Professional), Japanese (Basic)'],
  ],
};

// ----------------------------------------------- debt capital markets cut
//
// Targeted at TD Securities, Analyst — Canadian Debt Capital Markets (FIG),
// Toronto (R_1503991). That posting could not be retrieved (Workday is blocked
// by this environment's network policy), so this is built from the US sibling,
// Analyst, FIG Debt Capital Markets (DCM), TD Securities: undergraduate degree,
// 2+ years in the financial industry with familiarity of capital markets,
// accounting and corporate finance; strong financial and analytical skills;
// MS Excel; laying out nuanced concepts clearly in PowerPoint and Word;
// specialised knowledge of market data, economic information and industry
// developments; transactions documented and processed accurately and timely.
// Re-check against the real posting before sending.
//
// This one reads as a finance resume, not a data resume. Experience is grouped
// by relevance rather than strictly by date: the investment banking and
// institutional asset management internships lead, and Aifuku follows as
// additional experience, reframed around ledger and statement reconciliation —
// which is the accounting familiarity the posting asks for.
//
// Not claimed: bond origination or syndication, league tables, credit ratings
// analysis, Bloomberg, Series 7/79/SIE/63, CSC. All real gaps.

const DCM = {
  file: 'Tao_Jin_Resume_DebtCapitalMarkets.docx',
  targetRole: 'Analyst — Debt Capital Markets / Investment Banking / Capital Markets',
  contact: ['Ithaca, NY — open to Toronto, ON | 551-405-1324 | jtonyking@hotmail.com',
    'linkedin.com/in/tao-tony-jin-ab771426a | github.com/TonyKing0504'],
  summary: 'Debt capital markets analyst candidate with investment banking and institutional sales internships '
    + 'at financial institutions — a securities firm and an asset manager — spanning debt and equity '
    + 'products, plus a Cornell M.Eng. in Systems Engineering and a UBC B.Sc. in Mathematics. Authored '
    + 'convertible bond market analysis and macroeconomic and interest rate research used by '
    + 'client-facing institutional teams; performed pre-IPO issuer due diligence across cash flow '
    + 'statements and balance sheets; built portfolio risk and performance analytics benchmarked to '
    + 'market indices. Strong Excel, PowerPoint, and Word for written client materials, with SQL and '
    + 'Python for market and transaction data. Fluent Mandarin and English.',
  education: [
    { school: 'Cornell University', location: 'Ithaca, NY',
      degree: 'Master of Engineering in Systems Engineering', date: 'Sep. 2025 – May 2026' },
    { school: 'University of British Columbia', location: 'Vancouver, BC',
      degree: 'Bachelor of Science: Major in Mathematics', date: 'Sep. 2021 – June 2025',
      courses: 'Relevant Coursework: Stochastic Calculus, Statistical Inference & Hypothesis Testing, '
        + 'Time Series Analysis, Optimization, Linear Programming, Statistical Learning.' },
  ],
  experienceHeading: 'CAPITAL MARKETS & FINANCE EXPERIENCE',
  experience: [
    { org: 'Grow Investment Group', location: 'Shanghai, China',
      role: 'Institutional Sales Department Intern', date: 'May 2024 – Aug. 2024',
      bullets: [
        'Authored a convertible bond market downturn analysis and product education materials for '
          + 'client-facing institutional sales, laying out the market move and its implications in clear '
          + 'written form; the program contributed to 9% fewer client redemptions, 4% more inquiries, and '
          + '12% higher conversion.',
        'Conducted quantitative market research integrating macroeconomic indicators, interest rate '
          + 'trends, and market sentiment data, and delivered written research reports supporting '
          + 'institutional investment decisions.',
        'Completed institutional client due diligence questionnaires (DDQs), cross-referencing '
          + 'multi-source records with Python automation and systematic validation to keep disclosures '
          + 'accurate and timely, cutting manual processing 15%.',
      ] },
    { org: 'Sinolink Securities Co., Ltd.', location: 'Shanghai, China',
      role: 'Investment Banking Intern', date: 'June 2023 – Aug. 2023',
      bullets: [
        'Performed pre-IPO financial due diligence for a Shanghai main-board issuer (planned raise ~RMB '
          + '460M), analyzing cash flow statements and balance sheets and reconciling multi-year bank '
          + 'statements against company ledgers to identify and escalate disclosure discrepancies.',
        'Calculated portfolio risk and performance metrics (Sharpe, Sortino, Beta, volatility, '
          + 'correlation) and benchmarked returns against market indices, presenting results in risk '
          + 'management reports for internal decision-makers.',
        'Standardized data collection, verification, and reporting workflows with senior analysts, '
          + 'keeping transaction records documented accurately and on deadline and improving team '
          + 'efficiency 8%.',
      ] },
  ],
  experience2Heading: 'ADDITIONAL EXPERIENCE',
  experience2: [
    { org: 'Aifuku', location: 'Toronto, ON', role: 'Data Science Intern', date: 'Jan. 2025 – May 2025',
      bullets: [
        'Automated reconciliation of bank and credit-card statements against the general ledger, building '
          + 'a pipeline that parsed statement documents into structured transaction records and replaced '
          + 'manual entry; wrote SQL across a 9-table database and maintained management dashboards and '
          + 'KPI reports for operations stakeholders.',
      ] },
  ],
  projectsHeading: 'QUANTITATIVE PROJECTS',
  projects: [
    { title: 'Time Series Forecasting & Uncertainty Quantification', tech: 'R, SARIMA, Holt-Winters',
      date: '',
      bullets: [
        'Built and validated seasonal ARIMA and Holt-Winters models, tuning by AIC and reporting 95% '
          + 'prediction intervals so stakeholders could read forecast uncertainty, not just the point '
          + 'estimate.',
      ] },
    { title: 'Demand & Revenue Concentration Analysis', tech: 'SQL (DuckDB), Excel', date: '',
      bullets: [
        'Analyzed 99,441 transactions in SQL to size demand and quantify revenue concentration — a BRL '
          + '7.98M single-purchase segment and a 3.0% repeat rate — plus an 8.1% service-failure rate tied '
          + 'to materially weaker satisfaction, delivered as an executive scorecard.',
      ] },
  ],
  skillsHeading: 'SKILLS & TECHNICAL',
  skills: [
    ['Capital Markets & Finance', 'Convertible bonds, fixed income and equity products, corporate '
      + 'finance, macroeconomic and interest rate analysis, market data, market sentiment, market and '
      + 'industry developments, financial statement analysis (cash flow, balance sheet) and accounting '
      + 'reconciliation, financial due diligence, pre-IPO issuer diligence, regulatory disclosure and due '
      + 'diligence questionnaires (DDQs), portfolio risk and performance metrics (Sharpe, Sortino, Beta, '
      + 'volatility, correlation), benchmarking to market indices'],
    ['Software', 'Microsoft Excel (pivot tables, lookups, modeling), PowerPoint, Word; SQL (PostgreSQL, '
      + 'Oracle SQL, DuckDB); Python (pandas, NumPy); R; MATLAB; Tableau; Power BI'],
    ['Quantitative Methods', 'Statistical inference and hypothesis testing, regression, time series '
      + 'analysis and forecasting (SARIMA, Holt-Winters), stochastic calculus, optimization and linear '
      + 'programming, statistical modeling, data validation and quality control'],
    ['Professional', 'Written and verbal communication; preparing written materials and client '
      + 'presentations for client-facing teams; accurate and timely documentation; attention to detail; managing '
      + 'multiple deadlines in a fast-paced environment; client and stakeholder support. Languages: '
      + 'Mandarin Chinese (Native), English (Professional), Japanese (Basic)'],
  ],
};

// ------------------------------------------------------------------- assembly

function build(cfg) {
  const kids = [];

  kids.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 20, line: LINE },
    children: [new TextRun({ text: 'TAO (TONY) JIN', bold: true, size: NAME_SZ, font: FONT })],
  }));
  (cfg.contact || CONTACT).forEach((line) => kids.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 0, line: LINE },
    children: [new TextRun({ text: line, size: BODY_SZ, font: FONT })],
  })));

  if (cfg.summary) {
    kids.push(heading('PROFESSIONAL SUMMARY'));
    kids.push(new Paragraph({ spacing: { after: 0, line: LINE }, children: runs(cfg.summary) }));
  }

  kids.push(heading('EDUCATION'));
  cfg.education.forEach((e) => {
    kids.push(tabbed(`**${e.school}**`, e.location, { before: 30 }));
    kids.push(tabbed(`__${e.degree}__`, e.date));
    if (e.courses) kids.push(bullet(e.courses));
  });

  const renderJobs = (jobs, title) => {
    kids.push(heading(title));
    jobs.forEach((j) => {
      kids.push(tabbed(`**${j.org}**`, j.location, { before: 30 }));
      kids.push(tabbed(`__${j.role}__`, j.date));
      j.bullets.forEach((b) => kids.push(bullet(b)));
    });
  };
  const renderExperience = () => {
    renderJobs(cfg.experience, cfg.experienceHeading || 'PROFESSIONAL EXPERIENCE');
    if (cfg.experience2) renderJobs(cfg.experience2, cfg.experience2Heading || 'ADDITIONAL EXPERIENCE');
  };
  const renderProjects = () => {
    kids.push(heading(cfg.projectsHeading || 'PROJECT EXPERIENCE'));
    cfg.projects.forEach((p) => {
      kids.push(tabbed(`**${p.title}** | __${p.tech}__`, p.date, { before: 30 }));
      p.bullets.forEach((b) => kids.push(bullet(b)));
    });
  };

  if (cfg.projectsFirst) { renderProjects(); renderExperience(); }
  else { renderExperience(); renderProjects(); }

  kids.push(heading(cfg.skillsHeading || 'TECHNICAL SKILLS'));
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
  const L = ['# TAO (TONY) JIN', '', ...(cfg.contact || CONTACT), '', '> Target role: ' + cfg.targetRole, ''];
  if (cfg.summary) L.push('## PROFESSIONAL SUMMARY', '', cfg.summary, '');
  L.push('## EDUCATION', '');
  cfg.education.forEach((e) => {
    L.push(`**${e.school}** — ${e.location}`, `*${e.degree}* | ${e.date}`, ...(e.courses ? [`- ${e.courses}`] : []), '');
  });
  const jobs = (list, title) => {
    L.push('## ' + title, '');
    list.forEach((j) => {
      L.push(`**${j.org}** — ${j.location}`, `*${j.role}* | ${j.date}`, '');
      j.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
  };
  const exp = () => {
    jobs(cfg.experience, cfg.experienceHeading || 'PROFESSIONAL EXPERIENCE');
    if (cfg.experience2) jobs(cfg.experience2, cfg.experience2Heading || 'ADDITIONAL EXPERIENCE');
  };
  const proj = () => {
    L.push('## ' + (cfg.projectsHeading || 'PROJECT EXPERIENCE'), '');
    cfg.projects.forEach((p) => {
      L.push(`**${p.title}** | *${p.tech}*${p.date ? ' | ' + p.date : ''}`, '');
      p.bullets.forEach((b) => L.push('- ' + b));
      L.push('');
    });
  };
  if (cfg.projectsFirst) { proj(); exp(); } else { exp(); proj(); }
  L.push('## ' + (cfg.skillsHeading || 'TECHNICAL SKILLS'), '');
  cfg.skills.forEach(([k, v]) => L.push(`**${k}:** ${v}`, ''));
  return L.join('\n');
}

(async () => {
  for (const cfg of [ANALYST, SCIENTIST, RISK, MARKET_RESEARCH, DCM]) {
    const buf = await Packer.toBuffer(build(cfg));
    fs.writeFileSync(`${__dirname}/${cfg.file}`, buf);
    fs.writeFileSync(`${__dirname}/${cfg.file.replace('.docx', '.md')}`, toMarkdown(cfg) + '\n');
    console.log('wrote', cfg.file);
  }
})();
