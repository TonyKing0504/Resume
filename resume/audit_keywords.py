import subprocess, re, sys
TIERS = {
"Tier1": ["SQL","Python"," R,","Excel","dashboard","business intelligence","data visualization",
  "statistical","machine learning","data cleaning","data quality","data validation","ETL",
  "pipeline","exploratory data analysis","EDA","KPI","stakeholder","cross-functional",
  "non-technical","reporting","documentation","Tableau"],
"Tier2": ["A/B testing","experimental design","hypothesis testing","statistical significance",
  "predictive modeling","classification","regression","feature engineering","AUROC","AUPRC",
  "precision","recall","cross-validation","data storytelling","cohort analysis","segmentation",
  "retention","churn","forecasting","time series","Git","version control","data modeling",
  "relational database","normalization","data warehousing","root cause","data-driven",
  "business acumen","XGBoost","gradient boosting","random forest","logistic regression",
  "scikit-learn","pandas","NumPy","Jupyter","reproducible","automation","SARIMA","Holt-Winters"],
"Tier3": ["Large Language Model","LLM","prompt engineering","structured output",
  "Natural Language Processing","NLP","calibration","conformal","SHAP","explainability",
  "fairness","bias auditing","REST API","optimization","linear programming","PostgreSQL",
  "Oracle SQL","DuckDB","Metabase","JSON","Node.js","MATLAB","LaTeX","C++"],
"Soft": ["communication","collaboration","presenting","presented","translating","authored",
  "technical writing","attention to detail","ambiguity","requirements gathering","partnered",
  "recommendations","stakeholders","decision","training materials","documented","Fluent"],
}
for f in sys.argv[1:]:
    txt = subprocess.run(["pdftotext",f,"-"],capture_output=True,text=True).stdout
    low = re.sub(r"\s+"," ",txt).lower()
    words = len(re.findall(r"\b[\w'/-]+\b", txt))
    print(f"\n=== {f.split('/')[-1]}  ({words} words) ===")
    total_hit=total=0
    for tier, kws in TIERS.items():
        hits=[k for k in kws if k.lower() in low]
        miss=[k for k in kws if k.lower() not in low]
        total_hit+=len(hits); total+=len(kws)
        print(f"  {tier}: {len(hits)}/{len(kws)}" + (f"   MISSING: {', '.join(miss)}" if miss else "   (all present)"))
    print(f"  TOTAL: {total_hit}/{total} = {100*total_hit//total}%")
