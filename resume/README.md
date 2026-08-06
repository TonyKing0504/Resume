# ATS-Optimized One-Page Resumes — 2026 North America Data Analyst / Data Scientist

Two one-page, keyword-maximized resume versions built against 2026 North America job-description
research, formatted to match `public/Cornell_Tao_Jin.docx`.

Both score **104–105 / 109 (95–96%)** on the keyword bank in
[`JD_KEYWORD_RESEARCH.md`](./JD_KEYWORD_RESEARCH.md) at ~650 words — up from 89% density on the
earlier two-page draft.

## Files

| File | Use |
|---|---|
| `Tao_Jin_Resume_DataAnalyst_ATS.pdf` / `.docx` | Data Analyst · Business Analyst · BI Analyst · Product Analyst |
| `Tao_Jin_Resume_DataScientist_ATS.pdf` / `.docx` | Data Scientist · Applied Scientist · ML / Decision Scientist |
| `Tao_Jin_Resume_RiskAnalyst.pdf` / `.docx` | Risk Analyst · Exposure Management · Insurance / Reinsurance analytics |
| `Tao_Jin_Resume_MarketResearch.pdf` / `.docx` | Market Research Associate / Analyst · asset management & financial services |
| `Tao_Jin_Resume_DebtCapitalMarkets.pdf` / `.docx` | Analyst · Debt Capital Markets / investment banking / capital markets |
| `Tao_Jin_Resume_EnergyMarkets.pdf` / `.docx` | Energy Market Associate · demand response & operations analytics |
| `*.md` | Plain-text mirror of each version |
| `JD_KEYWORD_RESEARCH.md` | Keyword bank, frequency tiers, gap list, per-application workflow |
| `build_resumes.cjs` | Generates both `.docx` and both `.md` from one data source |
| `audit_keywords.py` | Scores a PDF against the keyword bank |

**Submit the PDF by default; use the DOCX only when a posting explicitly asks for Word.**

## Formatting — matched to the original resume

Lifted from `public/Cornell_Tao_Jin.docx` so these look like the same person's resume:

| Element | Setting |
|---|---|
| Font | **Cambria** (the original file's theme minor font) |
| Name | 20pt bold, centered |
| Section headings | 11pt bold, all caps, bottom rule |
| Organization / project title | 10.5pt bold, right-tabbed location or date |
| Role line | 10.5pt italic |
| Bullets | 9pt, literal `•`, hanging indent |
| Page | US Letter, single column |

Two deliberate departures, both needed to fit one page with this much content:

- **Body text 9pt** instead of 9.5pt
- **Margins 0.36in top/bottom, 0.46in sides** instead of 0.51in / 0.71in, and leading at 0.83

Section order also matches the original — Education, Experience, Projects, Skills — with no
professional summary. The Data Scientist version puts Projects before Experience, since its modeling
work is the stronger signal for that role.

## Which version to send

| Posting emphasis | Send |
|---|---|
| SQL, dashboards, KPIs, reporting, experimentation | **Data Analyst** |
| Risk, exposure, ERM, insurance / reinsurance | **Risk Analyst** |
| Market/competitive research, survey work, investor or advisor insights | **Market Research** |
| Debt capital markets, investment banking, capital markets | **Debt Capital Markets** |
| Energy markets, demand response, operations analytics | **Energy Markets** |
| Causal inference, A/B testing at scale | **Data Scientist** |
| Production model development | **Data Scientist** |
| LLM evals, RAG, agents | **Data Scientist** (Kaggle LLM project is already first) |

## The Risk Analyst version

Built for the Everest *Risk Analyst I – Exposure Management* posting and reusable for similar
insurance/reinsurance and enterprise-risk roles. Same facts as the other two, re-angled:

- **A professional summary is included** — the other two versions have none. This is a pivot
  application, so the screener needs one line explaining why a maths/engineering candidate belongs in
  exposure management.
- **Sinolink leads on risk vocabulary.** Sharpe, Sortino, Beta, volatility, and correlation are real
  portfolio risk metrics; the bullet now says "calculated and monitored… benchmarking exposures
  against market indices," which is what the role does, one asset class over.
- **Aifuku maps to the first JD responsibility** — "prepare, consolidate, validate, and analyze
  exposure data" is almost word-for-word what he did with order, receipt, inventory, and ledger data.
- **The readmission model is reframed as model validation** — calibration, uncertainty
  quantification, driver attribution. That is the vocabulary of model governance, and it is an
  accurate description of the work.
- **Olist is reframed as concentration analysis** — revenue concentration and loss-driver
  quantification, which is the transferable half of accumulation work.
- **Contact line carries the relocation signal** ("open to Warren, NJ or Toronto, ON") so the hybrid
  requirement is answered before anyone has to ask.

It scores **37/38** on the transferable terms in that JD. Nothing insurance-specific is claimed:
no catastrophe modeling, no Moody's RMS or Verisk AIR, no reinsurance product knowledge, no ERM, no
accumulation management. Those are real gaps, and the resume does not paper over them.

## The Market Research version

Built for Fidelity Canada *Market Research Associate* (Toronto, J70609).

**Caveat on sourcing:** the J70609 posting could not be retrieved — Workday and the job aggregators
are blocked by the build environment's network policy, and the page is not search-indexed. This
version is built from the sibling posting on the same team, *Market Research Analyst* (J64794),
reporting to the same Director, Research. Re-check it against the real posting before sending.

The angle: **Grow Investment Group is the flagship.** Quantitative market research inside an asset
manager, feeding product positioning and business development, is this job one market over — and
asset-management domain knowledge is the differentiator a generic analytics candidate does not have.
Hence the `Industry Knowledge` skills row, which the other versions do not carry.

- The marketplace project becomes **demand, segmentation, and satisfaction research**
- The Kaggle pipeline becomes **secondary-source synthesis** — 107 publications into structured data,
  which is what "synthesizing qualitative and quantitative data" looks like at scale
- The modeling project is cut back to one bullet; it is the least relevant here
- Summary mirrors the posting's own phrase, "a natural communicator with a strong analytical
  foundation and innate curiosity"

Scores **35/35** on the sibling posting's terms. Not claimed: questionnaire design, Qualtrics, SPSS
or any survey platform, focus-group moderation. Those are the real gaps for this role.

**Hard gate:** Fidelity Canada postings state that current work authorization for Canada is required.
Confirm status before applying.

## The Debt Capital Markets version

Built for TD Securities *Analyst — Canadian Debt Capital Markets (FIG)*, Toronto (R_1503991). As
with Fidelity, the posting itself is unreachable behind the network policy, so this is built from the
US sibling, *Analyst, FIG Debt Capital Markets (DCM), TD Securities*. Re-check before sending.

**None of the other four versions could carry this JD.** Measured against a 53-term DCM keyword set:

| Version | Total | DCM core terms |
|---|---|---|
| Data Analyst / Data Scientist | 24% | 2/16 |
| Risk Analyst | 33% | 1/16 |
| Market Research | 39% | 3/16 |
| **Debt Capital Markets** | **66%** | **7/16** |

This one reads as a finance resume, not a data resume:

- **Experience is grouped by relevance, not date.** `CAPITAL MARKETS & FINANCE EXPERIENCE` holds Grow
  and Sinolink; `ADDITIONAL EXPERIENCE` holds Aifuku. Every date is still shown.
- **Aifuku is reframed around reconciliation** — bank and credit-card statements against the general
  ledger — because the posting asks for accounting familiarity and that is what the work was.
- **Sinolink recovers the accounting detail** dropped from the other versions: cash flow statements
  and balance sheets, from the original resume.
- **Grow leads with the convertible bond analysis.** Convertible bonds are a debt capital markets
  product; this is the single most on-point item in the whole history.
- Projects shrink to two one-line quantitative entries.

Not claimed: bond origination, syndication, private placement, liability management, capital
structure advisory, new issues, spreads or yields, league tables, credit ratings analysis, Bloomberg,
financial modeling or comparables, Series 7/79/SIE/63, CSC. That is why DCM core sits at 7/16 rather
than higher — the missing nine are the genuine experience gap, not a keyword oversight.

**Fit warning.** This is the weakest match of the four targeted versions. The posting asks for 2+
years in the financial industry; the record is roughly ten months of internships. TD fills these
seats mostly from its own summer analyst program or from another bank's IB floor. Apply, but treat it
as a reach, and confirm Canadian work authorization first.

## The Energy Markets version

Built for Edgecom Energy *Energy Market Associate* (Toronto, hybrid). Full posting text was supplied,
so no sourcing caveat.

**None of the other five could carry this JD** — measured against a 51-term set built from the
posting, they land at 25–35% with 0–1 of 20 energy-domain terms. This version reaches **72%**, with
Analytics & Ops at **15/15**, Working Style at **13/13**, and Education at **3/3**.

The angle: the role is an operations-analytics loop — run a program, analyse performance and dispatch
data for trends and root causes, turn that into system, workflow and SOP improvements, report to
customers and management. That loop is the strongest single pattern in this history, so the resume
leads with it rather than with tools. Every bullet is now shaped as *analysis → action → measured
result*, which is also the posting's own "self-starter who turns data and event results into
practical, measurable improvements".

Specific hooks:

- **Aifuku** — "identifying trends and root causes… then turned that analysis into action" mirrors two
  responsibilities almost verbatim, and statement-to-ledger reconciliation is settlement verification
  one domain over
- **Time-series forecasting keeps its real title** (Canadian labour hours) but is positioned for the
  5CP forecasting backup duty
- **Olist becomes operational performance and root-cause analysis** — an 8.1% service-failure rate
  traced to downstream customer impact
- **Sinolink leads with workflow standardization and documentation**, the SOP half of the job

**Energy-domain terms sit at 6/20, and that is the honest ceiling.** `energy markets`, `IESO`,
`demand response`, `capacity auction`, `settlement` and `reconciliation` appear — the first four only
once, in the summary, as a stated *target*, not a claim of experience. Not present anywhere:
dispatch, interval meter data, electricity, utility/LDC, PJM, AESO, NYISO, coincident peak, 5CP,
curtailment, enrollment, test events.

**Two required qualifications cannot be met:** 2+ years in energy markets / demand response / the
electricity sector, and working knowledge of the IESO market and DR settlement. The posting requires
a cover letter — that is where the gap gets addressed, not in the resume. IESO publishes its Capacity
Auction rules and DR participation guides publicly; a weekend of study is enough to speak credibly
about qualification, dispatch, and settlement, and for a Series A team that can outweigh a thin
incumbent. Note also that Edgecom states it uses AI tools to screen applications, so keyword
presence matters more here than usual.

## How the keywords are distributed

The skills block carries terms that do **not** already appear in a bullet; the bullets carry the
rest, each attached to a metric or a decision. ATS scores keyword *presence*, not frequency, so
duplicating a term in both places buys nothing and costs space — that principle is what made one page
possible without dropping keywords.

Soft skills use JD phrasing and live in bullets, not just the skills row:

- *stakeholder communication, non-technical* → Aifuku bullet 2 ("presented findings and
  recommendations cross-functionally to non-technical stakeholders")
- *technical writing / documentation* → "Built and documented…", "Authored…"
- *data storytelling* → Grow bullet 2
- *business acumen / data-driven decisions* → Olist scorecard bullet
- *attention to detail* → Sinolink bullet
- *cross-functional collaboration* → Aifuku, Sinolink

## Read before you send

**Four skills are listed without supporting evidence, at your request:** Power BI, Snowflake, Apache
Spark, and causal inference. They appear only in TECHNICAL SKILLS and are deliberately kept out of
every bullet. A screener who sees them may ask about them. Section 4 of the research doc ranks the
fastest way to put a real artifact behind each — Power BI and Snowflake are the two worth doing
first, roughly a weekend and half a day.

Also confirm these readings of your existing material:

1. **Sinolink** — "redesigned reporting workflows" is inferred from "refined data collection and
   reporting methodologies."
2. **Diabetes project** — "cross-validation and hyperparameter tuning" is assumed standard for a
   benchmarking project.
3. **Olist** — listed with an Excel dashboard; confirm the artifact exists.
4. **Tableau** — carried over from your existing skills list.
5. **A/B testing / experimental design** — supported by coursework, not by a shipped experiment.
6. **Grow Investment Group** — title kept exactly as on your existing resume. 2026 ATS cross-checks
   titles against LinkedIn, so keep LinkedIn identical.

Not claimed anywhere: Airflow, dbt, BigQuery, cloud platforms, RAG/LangChain, Streamlit, MLOps, and
any formal leadership or mentoring record.

## Per-application tailoring

1. Highlight every tool, method, and metric noun in the JD.
2. Pick the version using the table above.
3. Swap in the JD's exact vocabulary where you have a true equivalent — 2026 ATS does not reliably
   resolve synonyms.
4. Move the JD's top three tools to the front of the first skills row.
5. Reorder projects so the most relevant is first.

## Rebuilding

`build_resumes.cjs` is the single source of truth for both versions. It is `.cjs` because the repo's
`package.json` sets `"type": "module"`.

```bash
npm install docx
node build_resumes.cjs                    # writes both .docx and both .md
soffice --headless --convert-to pdf --outdir . *.docx
python3 audit_keywords.py *.pdf
```

`RESUME_LINE` overrides the leading (240 = single spacing; default 200). Raise it if you cut content
and want more air; lower it if an edit pushes the page over. Always re-check the page count after
editing — both versions currently fill the page with no slack.

Note: `audit_keywords.py` reads PDFs, where a hyphenated term can wrap across a line break and read
as two tokens. If a keyword shows as missing there, check the `.docx` text before assuming it is
absent.
