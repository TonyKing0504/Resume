# ATS-Optimized Resumes — 2026 North America Data Analyst / Data Scientist

Two keyword-maximized resume versions built against 2026 North America job-description research.
Both are 2 pages, single column, and score **105/105 (100%)** on the Tier 1–3 and soft-skill keyword
bank in [`JD_KEYWORD_RESEARCH.md`](./JD_KEYWORD_RESEARCH.md).

## Files

| File | Use |
|---|---|
| `Tao_Jin_Resume_DataAnalyst_ATS.pdf` / `.docx` | Data Analyst · Business Analyst · BI Analyst · Product Analyst |
| `Tao_Jin_Resume_DataScientist_ATS.pdf` / `.docx` | Data Scientist · Applied Scientist · ML / Decision Scientist |
| `*.md` | Plain-text source for each version — edit here, then rebuild |
| `JD_KEYWORD_RESEARCH.md` | The keyword bank, frequency tiers, gap list, and per-application workflow |
| `build_resumes.js` | Regenerates both `.docx` + `.md` from one data source |
| `audit_keywords.py` | Scores a PDF against the keyword bank |

**Submit the PDF by default; use the DOCX only when a posting explicitly asks for Word.**

## Which version to send

2026 Data Scientist postings cluster into four archetypes:

| Posting emphasis | Send |
|---|---|
| SQL, dbt, dashboards, KPIs, experimentation | **Data Analyst** |
| Causal inference, A/B testing at scale | **Data Scientist** |
| Production model development | **Data Scientist** |
| LLM evals, RAG, agents | **Data Scientist** (move the Kaggle LLM project first) |

## How the keywords are distributed

Keywords appear **in context** — attached to a metric or a decision — not only in the skills block.
That is what 2026 ATS contextual-relevance scoring rewards and what keyword-stuffing detection
punishes. Examples:

- *stakeholder communication, non-technical* → Aifuku bullet 3, Grow bullet 3
- *cross-functional collaboration* → Aifuku bullet 1, Sinolink bullet 3
- *technical writing / documentation* → "Authored", "documented", "standardized and documented"
- *data storytelling* → Grow bullet 3
- *business acumen / data-driven decisions* → Olist recommendation scorecard bullets
- *attention to detail* → Sinolink due diligence bullet
- *ambiguity* → summary line, "translating ambiguous business questions"
- *ETL, LLM, prompt engineering* → Aifuku Mage pipeline bullet
- *A/B testing, experimental design* → skills + UBC Statistical Inference coursework

## Verify before you send

These phrases are reasonable readings of your existing material, but confirm each is one you can
defend in an interview. Edit the `.md` and rebuild if any is off:

1. **Sinolink** — "standardized and documented the workflow for team reuse." Inferred from "refined
   data collection, spreadsheet verification, and reporting workflows." Drop the clause if no
   written artifact exists.
2. **Diabetes project** — "cross-validation and hyperparameter tuning" and "documented methodology
   and limitations in a technical report." Standard for a benchmarking course project; confirm both.
3. **Olist** — listed as producing an "Excel dashboard." Confirm the dashboard artifact exists.
4. **Tableau** — carried over from your existing resume's skills list. Be ready for a Tableau
   question, or move it behind Excel/Metabase.
5. **A/B testing and experimental design** — currently supported by coursework, not by a shipped
   experiment. It is truthful as a skill; it is the first thing to convert into real project
   evidence (see gap list).
6. **Grow Investment Group** — job title kept exactly as on your existing resume
   ("Institutional Sales Department Intern"). 2026 ATS increasingly cross-references titles against
   LinkedIn, so keep LinkedIn identical.

## Gaps deliberately not claimed

High-frequency 2026 keywords with no supporting evidence in your history — omitted on purpose,
because a resume that clears the ATS but collapses in the screening call is a net loss. Ranked by
return on effort:

1. **Power BI** — very high JD frequency, ~1 weekend. Rebuild the Olist dashboard in Power BI Desktop.
2. **Cloud (AWS / GCP / Azure)** — one deployed project plus a practitioner cert clears the filter.
3. **Snowflake + dbt** — named the highest-leverage 2026 combination; free tiers cover it.
4. **Airflow** — you already built a Mage ETL DAG; porting it is a short step.
5. **A/B testing as lived experience** — design, run, and write up one real experiment analysis.
6. **Spark / Databricks** — Community Edition; run the 101,766-row diabetes set in PySpark.
7. **Causal inference** — add a diff-in-diff or propensity-score cut to the Olist project.
8. **RAG / LangChain / vector databases** — the adjacent step from your existing LLM API work.
9. **Streamlit** — wrap the diabetes model in an app; one afternoon.
10. **Formal leadership / mentoring** — no TA, club exec, or team-lead record was available. If any
    exists, add it; JDs ask for it and nothing here currently proves it.

## Per-application tailoring

1. Highlight every tool, method, and metric noun in the JD.
2. Pick the version using the table above.
3. Swap in the JD's exact vocabulary wherever you have a true equivalent — 2026 ATS does not
   reliably resolve synonyms, so mirror their wording (if they say "experimentation," write
   "experimentation").
4. Move the JD's top three tools into the first Technical Skills line.
5. Reorder projects so the most relevant one is first.
6. Match the summary's opening job title to the posting's exact title.

## Rebuilding

Edit `build_resumes.js` (single source of truth for both versions), then:

```bash
npm install docx          # once
node build_resumes.js     # writes both .docx and both .md
soffice --headless --convert-to pdf --outdir . *.docx
python3 audit_keywords.py *.pdf
```

Note: `audit_keywords.py` reads the PDF, where a hyphenated term can wrap across a line break and
read as two tokens. If a keyword shows as missing there, check the `.docx` text before assuming it
is absent.

## Formatting rules applied

Single column · no tables, text boxes, columns, icons, graphics, headers, or footers · standard
section headings · Calibri 10pt body / 15pt name · 0.5in side margins · acronyms given with their
spelled-out forms on first use (EDA, ETL, LLM, NLP, BI, DDQ) · `keepNext` so no entry header strands
at a page break · 2 pages.
