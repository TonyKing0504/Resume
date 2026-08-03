# North America Data Analyst / Data Scientist JD Keyword Research — 2026

Research basis: 2026 job postings and JD templates aggregated from Indeed, Glassdoor, Built In,
Simplify, ZipRecruiter, Toptal, DataCamp, KORE1, and 2026 ATS keyword studies (LoopCV, TechieCV,
ResumeAdapter, 22skills). See "Sources" at the bottom.

The purpose of this file is to be the **checklist** the resume is written against. Every Tier 1 and
Tier 2 term below should appear at least once *in context* (attached to a metric or a decision), not
just in a skills list — that is what 2026 ATS scoring rewards and what keyword-stuffing detection
punishes.

---

## 1. How 2026 ATS actually scores

Key findings that shaped the resume design:

- **Mirror the employer's exact wording.** Modern ATS uses ML for contextual relevance and does not
  reliably resolve synonyms. If the JD says "experimentation," write "experimentation," not just
  "A/B testing."
- **Include the acronym AND the spelled-out form** the first time: "Exploratory Data Analysis (EDA)",
  "Large Language Models (LLMs)", "Extract, Transform, Load (ETL)".
- **Target 25–40 relevant terms** spread across summary + skills + bullets. Repeating a bare list
  triggers keyword-manipulation detection.
- **Every keyword needs a metric or an outcome** attached at least once in Experience or Projects.
- **Format:** single column, no tables/text boxes/columns/icons/graphics/headers-footers, standard
  section headings, 10–12pt standard font, 1–2 pages. PDF by default, DOCX when the posting asks.
- ATS increasingly cross-references the resume against LinkedIn and job-title progression — keep the
  LinkedIn profile consistent with these bullets.

## 2. Frequency tiers

### Tier 1 — appears in >60% of DA/DS postings (must-have)

| Keyword | Notes from 2026 postings |
|---|---|
| SQL | #1 filter. 80%+ of DA postings. ATS also looks for complexity signals: **joins, CTEs, window functions, query optimization, subqueries** |
| Python | ~70% of DS postings; ~50% of DA |
| R | Frequently paired as "Python and/or R" |
| Excel / Google Sheets | 60%+ of DA postings; **pivot tables, lookup formulas** |
| Dashboards / Business Intelligence (BI) | Tableau, Power BI, Looker, Metabase |
| Data visualization | Named separately from BI tools |
| Statistical analysis / statistical modeling | Universal |
| Machine learning | Universal in DS; common in DA |
| Data cleaning / wrangling / data quality / data validation | Universal |
| ETL / ELT / data pipelines | Rising fast into Tier 1 for DA too |
| Exploratory Data Analysis (EDA) | Standard |
| KPI / metrics definition | "Partner with stakeholders to define KPIs" is near-boilerplate |
| Stakeholder communication | The single most-cited soft skill of 2026 |
| Cross-functional collaboration | Near-boilerplate |
| Present findings to non-technical stakeholders | Verbatim JD phrase — use it verbatim |
| Reporting / ad hoc analysis | Standard |
| Documentation | "Maintain documentation for data definitions and report logic" |

### Tier 2 — 40–60% of postings (high value)

A/B testing · experimentation · experimental design · hypothesis testing · statistical significance ·
predictive modeling · classification · regression · feature engineering · model evaluation
(AUROC / AUPRC / precision / recall) · cross-validation · data storytelling · cohort analysis ·
customer segmentation · retention / churn analysis · forecasting · time series · Git / version control ·
data modeling · relational databases · database normalization · data warehousing · root cause analysis ·
data-driven decision making · business acumen · XGBoost · gradient boosting · random forest ·
logistic regression · scikit-learn · pandas / NumPy · Jupyter · reproducible pipelines · automation

### Tier 3 — differentiators and fast-rising

- **GenAI cluster (2026's biggest riser):** Large Language Models (LLMs), LLM APIs, prompt engineering,
  RAG (Retrieval-Augmented Generation), structured output extraction, LLM evaluation, AI agents,
  LangChain, vector databases, Hugging Face
- **Natural Language Processing (NLP)**
- **Responsible-ML cluster:** model calibration, conformal prediction, SHAP, explainability /
  interpretability, fairness auditing, bias auditing, model monitoring
- **Causal inference**, quasi-experimental methods, treatment effect estimation
- **Modern data stack:** Snowflake (~29–31%), dbt (~24%), Airflow (~29%), Databricks (~17–29%),
  Apache Spark (~39%), BigQuery, Redshift, Kafka
- **Cloud:** AWS, GCP, Azure
- **MLOps:** CI/CD, model deployment, Docker, monitoring
- **Apps:** Streamlit, Dash
- **Optimization / linear programming** (rarer, but a Cornell Systems Engineering differentiator)

### The four 2026 Data Scientist profiles

Postings now cluster into four archetypes. Knowing which one a posting is helps you pick a version:

1. **Analytics-leaning** — SQL, dbt, experimentation → use the **Data Analyst** version
2. **Classical** — causal inference, A/B testing at scale → **Data Scientist** version
3. **ML-forward** — production model development → **Data Scientist** version
4. **Applied GenAI** — LLM evals, RAG, agent design → **Data Scientist** version, lead with the
   Kaggle LLM project

All four share statistical fundamentals and Python fluency.

## 3. Soft-skill keywords (explicitly requested)

2026 JDs treat these as hard requirements, not garnish. Verbatim phrases seen in postings:

**Communication**
- "Excellent written and verbal communication skills"
- "Present complex analysis clearly to technical and non-technical stakeholders"
- "Communicate findings to non-technical stakeholders"
- "Translate business questions into analytical solutions"
- "Data storytelling" / "turn raw numbers into a clear narrative that drives decisions"
- "Decision-ready formats"

**Writing**
- "Technical documentation" / "create documentation that allows stakeholders to replicate the analysis"
- "Maintain documentation for data definitions, report logic, and dashboard ownership"
- "Authored analytical reports" / "written reports and recommendations"

**Leadership / ownership**
- "Lead analytical initiatives" · "own reporting for a business function" · "mentor junior analysts"
- "Self-starter" · "natural curiosity" · "self-directed" · "drive business impact"
- "Secure resources" / "motivate action"

**Collaboration**
- "Strong desire to work in cross-functional teams"
- "Collaborate with software engineers, product managers, and business analysts"
- "Partner with stakeholders"

**Judgment**
- "Great attention to detail" · "comfort dealing with high amounts of ambiguity"
- "Business acumen" — understanding company goals so the analysis answers questions that matter
- "Catch data quality issues and edge cases before they distort conclusions"

**Engineering discipline** (newer, from 2026 DS internship JDs)
- "Version control, reproducible pipelines, documentation, and basic monitoring metrics"
- "Take a model from notebook → reproducible pipeline"

## 4. Coverage audit against Tony's evidence

### Covered — backed by real evidence, woven into bullets

SQL (PostgreSQL, Oracle SQL, DuckDB), joins, CTEs, window functions, data marts, data modeling,
3NF normalization, relational databases, Python, pandas, NumPy, scikit-learn, XGBoost, SHAP,
Matplotlib, R, C++, MATLAB, LaTeX, ETL pipelines, Mage, automation, data quality, data validation,
data cleaning, EDA, statistical modeling, hypothesis testing, regression, logistic regression,
random forest, gradient boosting, classification, predictive modeling, feature engineering,
cross-validation, model evaluation, AUROC, AUPRC, model calibration, conformal prediction,
explainability, fairness/bias auditing, time series forecasting, SARIMA, Holt-Winters, prediction
intervals, cohort analysis, customer segmentation, retention analysis, root cause analysis, KPI
reporting, dashboards, Metabase, Tableau, Excel, BI, NLP, LLMs, LLM APIs, Gemini, prompt engineering,
structured output, REST API integration, Git, Jupyter, Node.js, JSON, optimization, linear
programming, stochastic modeling, stakeholder communication, cross-functional collaboration,
data storytelling, executive reporting, technical writing/documentation, business acumen,
attention to detail, bilingual.

**That is 70+ distinct Tier 1–3 terms**, comfortably above the 25–40 target.

### NOT covered — real gaps, deliberately not fabricated

These are high-frequency 2026 keywords with **no supporting evidence** in your history. I did not add
them, because a resume that wins the ATS but collapses in a screening call is a net loss.

| Gap | JD frequency | Fastest honest fix |
|---|---|---|
| **Power BI** | Very high (often "Tableau *or* Power BI") | Free Power BI Desktop; rebuild the Olist dashboard in it — ~1 weekend. Highest ROI item on this list. |
| **Snowflake / dbt** | ~29% / ~24% | Snowflake free trial + dbt Core on the Olist data. Named the highest-leverage 2026 combo. |
| **Airflow** | ~29% | You already built a Mage ETL DAG — porting it to Airflow is a small step and unlocks the keyword. |
| **Spark / Databricks** | ~39% / ~17–29% | Databricks Community Edition; run the 101,766-row diabetes set in PySpark. |
| **Cloud (AWS / GCP / Azure)** | Very high | Even one deployed project + a cloud practitioner cert clears the filter. |
| **A/B testing (as lived experience)** | Very high | Currently only supportable from coursework. Design and write up one real experiment analysis. |
| **Causal inference** | High for DS | Add a diff-in-diff or propensity-score analysis to the Olist project. |
| **RAG / LangChain / vector DBs** | Rising fast | You have LLM API + structured output; RAG is the adjacent step. |
| **Streamlit / Dash** | Moderate | Wrap the diabetes model in a Streamlit app — one afternoon. |
| **Formal leadership / mentoring** | Moderate | No club exec, TA, or team-lead record was available. If any exists, it should be added. |

## 5. Per-application workflow

1. Paste the JD into a diff and highlight every noun that is a tool, method, or metric.
2. Pick the version — Analyst or Scientist — using the four-profile map in section 2.
3. Swap in the JD's exact vocabulary where you have a true equivalent (e.g. if the JD says
   "data storytelling," don't leave it as "executive reporting").
4. Reorder the Technical Skills lines so the JD's top-3 tools sit in the first line.
5. Reorder Projects so the most relevant one is first.
6. Match the job title in the summary line to the posting's exact title.
7. Keep the LinkedIn headline and job titles consistent — 2026 ATS cross-references them.

---

## Sources

- [Data Analyst Job Description 2026: Skills & Roadmap — TestLeaf](https://www.testleaf.com/blog/data-analyst-job-description-2026/)
- [Data Analyst Skills 2026: The Complete List Employers Want — LoopCV](https://www.loopcv.pro/skills/data-analyst/)
- [Data Analyst Resume Keywords 2026: Complete ATS Keyword List — LoopCV](https://www.loopcv.pro/guides/resume-keywords-data-analyst/)
- [Stop Rejection: The Data Analyst Job Strategy (2026) — Jobright](https://jobright.ai/blog/data-analyst-jobs-2026/)
- [Data Analyst Job Description Template (2026) — KORE1](https://www.kore1.com/data-analyst-job-description-template/)
- [Data Analyst Job Description [Updated for 2026] — Indeed](https://www.indeed.com/hire/job-description/data-analyst)
- [Data Analyst Job Description Template & Examples [2026] — HONO](https://www.hono.ai/job-description/data-analyst-job-description)
- [Data Scientist Job Description June 2026 — Toptal](https://www.toptal.com/data-science/job-description)
- [How to Write a Data Scientist Job Description in 2026 — DataCamp](https://www.datacamp.com/blog/data-scientist-job-description)
- [Data Scientist Job Market 2026: Analysis, Trends, Opportunities — 365 Data Science](https://365datascience.com/career-advice/data-scientist-job-market/)
- [How to Hire a Data Scientist: 2026 Complete Guide — KORE1](https://www.kore1.com/how-to-hire-data-scientist-2026/)
- [Data Scientist Resume Keywords 2026 — ResumeAdapter](https://www.resumeadapter.com/blog/data-scientist-resume-keywords)
- [Data Scientist Resume Skills & ATS Keywords (2026) — TechieCV](https://www.techiecv.com/resume-skills/data-scientist)
- [Data Analyst Resume Keywords | ATS Optimization Guide 2026 — 22skills](https://www.22skills.com/resume-keywords/data-analyst)
- [Essential Skills for Data Science Professionals in 2026 and Beyond — DASCA](https://www.dasca.org/world-of-data-science/article/essential-skills-for-data-science-professionals-in-2026-and-beyond)
- [12 Data Analyst Skills That Will Get You Hired in 2026 — Dataquest](https://www.dataquest.io/blog/data-analyst-skills/)
- [Data career paths: 2026 job guide — Pluralsight](https://www.pluralsight.com/resources/blog/ai-and-data/data-career-guide)
- [New Grad Data Science & AI/ML Jobs (2026-2027) — Simplify](https://simplify.jobs/l/New-Grad-Data-Science-AI-ML)
- [Data Science Intern (Summer 2026), Johnson & Johnson — TealHQ](https://www.tealhq.com/job/data-science-intern_7ea1ac41457f00d91569664b91761d132df5d)
- [Data Engineer Skills in 2026: $128K Median — InterviewStack](https://interviewstack.io/blog/data-engineer-skills-companies-want-2026)
- [ATS-Friendly Resume Guide (2026): Format, Keywords, Score, and Fixes — OwlApply](https://owlapply.com/en/blog/ats-friendly-resume-guide-2026-format-keywords-score-and-fixes)
- [ATS Resume Best Practices 2026: 20 Tips That Pass Parsers — Resume Optimizer Pro](https://resumeoptimizerpro.com/blog/ats-friendly-resume-tips)
- [AI Engineer Resume Keywords (2026) — ResumeAdapter](https://www.resumeadapter.com/blog/ai-engineer-resume-keywords)
