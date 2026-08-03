# TAO (TONY) JIN

Ithaca, NY | 551-405-1324 | jtonyking@hotmail.com
linkedin.com/in/tao-tony-jin-ab771426a | github.com/TonyKing0504 | dundun0504.com

> Target role: Data Scientist / Machine Learning / Applied Scientist

## PROFESSIONAL SUMMARY

Data Scientist with a Cornell M.Eng. in Systems Engineering (May 2026) and a UBC B.Sc. in Mathematics, plus three data science, analytics, and quantitative research internships across North America and Asia. Builds end-to-end machine learning pipelines — feature engineering, model benchmarking, calibration, explainability, and fairness auditing — alongside production SQL and Extract-Transform-Load (ETL) workflows. Applies statistical modeling, hypothesis testing, predictive modeling, Natural Language Processing (NLP), and Large Language Model (LLM) APIs to business and clinical problems, communicating results to technical and non-technical stakeholders in decision-ready form. Fluent in English and Mandarin Chinese.

## TECHNICAL SKILLS

**Programming:** Python (pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib), R, SQL (PostgreSQL, Oracle SQL, DuckDB), C++, MATLAB, LaTeX, Jupyter, Git/GitHub version control, Node.js

**Machine Learning:** Supervised learning, binary classification, predictive modeling, logistic regression, random forest, gradient boosting, XGBoost, feature engineering, imbalanced-class handling, cross-validation, hyperparameter tuning, model evaluation (AUROC, AUPRC, precision, recall), model calibration (isotonic, Expected Calibration Error), conformal prediction, SHAP explainability, fairness and bias auditing, data-leakage prevention, reproducible ML pipelines

**Statistics & Experimentation:** Statistical modeling and inference, hypothesis testing, statistical significance, A/B testing and experimental design, regression analysis, descriptive and inferential statistics, time series forecasting (SARIMA, Holt-Winters, AIC, prediction intervals), correlation analysis, stochastic modeling, optimization and linear programming

**NLP & Generative AI:** Natural Language Processing (NLP), Large Language Models (LLMs), LLM APIs (Gemini), prompt engineering, structured output extraction, rule-based and regex extraction, string-similarity matching, text parsing, annotation taxonomies, REST API integration, JSON

**Data Engineering, Analytics & BI:** ETL/ELT pipeline development (Mage), workflow automation, SQL data marts, data modeling, database normalization (3NF), relational databases, data warehousing concepts, data cleaning and wrangling, data validation, data quality auditing, Exploratory Data Analysis (EDA), cohort analysis, customer segmentation, retention and churn analysis, root cause analysis, Tableau, Metabase, Excel (pivot tables, dashboards, scorecards), Matplotlib, dashboard development, KPI reporting, data visualization, data storytelling

**Business & Communication:** Stakeholder communication and management, cross-functional collaboration, requirements gathering, business acumen, presenting to technical and non-technical audiences, technical writing and documentation, data-driven decision making, attention to detail, working through ambiguity

**Languages:** Mandarin Chinese (Native), English (Professional Working Proficiency), Japanese (Basic)

## EDUCATION

**Cornell University** — Ithaca, NY
Master of Engineering in Systems Engineering | Expected May 2026
*Relevant Coursework: Data Analytics, Machine Learning, Statistical Modeling, Optimization*

**University of British Columbia** — Vancouver, BC
Bachelor of Science, Major in Mathematics | Sep. 2021 – June 2025
*Relevant Coursework: Statistical Learning, Time Series Analysis, Statistical Inference & Hypothesis Testing, Stochastic Calculus, Linear Programming, Algorithms & Data Structures, Relational Databases*

## PROJECT EXPERIENCE

**Diabetes 30-Day Hospital Readmission Risk Modeling** | Sep. 2025 – Dec. 2025
*Python, pandas, scikit-learn, XGBoost, SHAP*

- Engineered a 160-feature clinical dataset from 101,766 hospital encounters covering 71,518 unique patients across 130 U.S. hospitals — spanning diagnoses, medications, and utilization metrics — applying patient-level 70/10/20 train-calibration-test splits to prevent data leakage in a reproducible modeling pipeline.
- Benchmarked logistic regression, random forest, gradient boosting, and XGBoost classifiers with cross-validation and hyperparameter tuning for imbalanced binary classification on tabular clinical data, reaching best held-out performance of AUROC 0.668 and AUPRC 0.230.
- Improved reliability and interpretability by applying isotonic recalibration to cut Expected Calibration Error from 0.342 to 0.004, implementing split conformal prediction with 90.1% empirical coverage, and running SHAP feature-importance analysis plus subgroup fairness and bias auditing; documented methodology and limitations in a technical report.

**LLM Metadata Extraction Pipeline — Kaggle Competition** | Jan. 2026 – Mar. 2026
*Python, NLP, LLM APIs, pandas, REST API*

- Built an automated Natural Language Processing (NLP) pipeline to extract structured SDRF metadata across a 71-category annotation taxonomy from 107 scientific publications, processing 1,659 sample records over 15 test datasets.
- Reverse-engineered the competition scoring function (difflib string-similarity clustering at a 0.80 threshold) to root-cause a 0.575 validation-to-test performance gap, isolating vocabulary overfitting and value normalization — not extraction logic — as the primary score driver.
- Benchmarked regex/rule-based extraction against LLM structured output with PRIDE REST API integration and nearest-neighbor training retrieval, quantified each approach's performance ceiling, and recommended the LLM method as optimal.

**E-Commerce Marketplace Retention & Fulfillment Analytics (Olist)**
*SQL (DuckDB), CTEs, Window Functions, Cohort Analysis*

- Designed reusable order-, customer-, and item-level data marts in DuckDB SQL from 99,441 marketplace orders, aggregating payments, items, and reviews to order grain before joining — a data modeling decision that prevented double-counted revenue and protected KPI accuracy.
- Ran cohort analysis, customer segmentation, and retention analysis to surface a 3.0% repeat-purchase rate and a BRL 7.98M high-value one-time-buyer segment, and linked an 8.1% late-delivery rate across 96,478 delivered orders to materially weaker review scores; translated both into an executive-ready recommendation scorecard for CRM, service recovery, and seller operations.

**Additional Projects:** Time Series Forecasting — Canadian Labor Hours (R, SARIMA, Holt-Winters, AIC parameter tuning, 95% prediction intervals for stakeholders) · Dual-Portal Delivery Platform Database Design (Oracle SQL, Node.js, 3NF normalization, referential integrity, real-time synchronization).

## PROFESSIONAL EXPERIENCE

**Aifuku** — Toronto, ON
*Data Science Intern* | Jan. 2025 – May 2025

- Built and documented a 2-block Mage ETL pipeline that retrieved the latest bank and credit-card statement PDFs from Google Drive, applied a Gemini Large Language Model (LLM) API with prompt engineering to parse transaction fields, and output structured JSON for ledger reconciliation — replacing manual data entry with a reproducible, automated workflow.
- Partnered cross-functionally with the operations team to write and optimize PostgreSQL queries (joins, CTEs, aggregations) against a Postgres 15 source-of-truth database of 9 core tables across 4 operational inputs, validating order, receipt, inventory, and ledger data feeding Metabase business intelligence (BI) dashboards and KPI reporting.
- Performed exploratory data analysis (EDA) across 5 linked operational entities — receipts, line items, inventory movements, production batches, and customer orders — running root cause analysis on data quality and schema issues, then presented findings and recommendations to non-technical operations stakeholders to improve reporting accuracy and data integrity.

**Grow Investment Group** — Shanghai, China
*Institutional Sales Department Intern* | May 2024 – Aug. 2024

- Engineered Python (pandas) automation scripts to cross-reference multi-source databases during institutional client due diligence and due diligence questionnaire (DDQ) completion, reducing manual data processing time by 15% while improving data accuracy through systematic validation checks.
- Conducted quantitative market research and statistical analysis integrating macroeconomic indicators, interest rate trends, and market sentiment data; collaborated with senior analysts to author written analytical reports supporting institutional investment decisions.
- Authored a convertible bond market downturn analysis and product training materials for the client-facing sales team, translating quantitative findings into clear data storytelling for a non-technical audience; contributed to a 9% reduction in client redemptions, 4% more client inquiries, and a 12% increase in conversion rates.

**Sinolink Securities Co., Ltd.** — Shanghai, China
*Investment Banking Intern* | June 2023 – Aug. 2023

- Calculated and visualized portfolio performance and risk metrics (Sharpe ratio, Sortino ratio, Beta, volatility) and ran correlation analysis, benchmarking trends against market indices in risk management reports used by internal decision-makers.
- Performed pre-IPO financial due diligence for a Shanghai main-board applicant (planned fundraising ~RMB 460M), reconciling executives' 3-year bank statements against company ledgers with rigorous attention to detail to flag unexplained transactions; redesigned data collection and reporting workflows cross-functionally, improving team operational efficiency by 8%.

