import type { Job, Project, SkillMetric } from '../types';

export type Language = 'en' | 'zh';

export interface ToolStackEntry {
  label: string;
  stack: string;
  value: number;
}

export interface AboutCard {
  title: string;
  description: string;
}

export interface TranslationContent {
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    downloadResume: string;
    backToTop: string;
    mainMenu: string;
  };
  hero: {
    name: string;
    eyebrow: string;
    description: string;
    chips: string[];
    downloadResume: string;
    viewProjects: string;
    linkedin: string;
    github: string;
    blog: string;
  };
  about: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    paragraph1: {
      prefix: string;
      strong1: string;
      middle: string;
      strong2: string;
      suffix: string;
    };
    paragraph2: string;
    cards: AboutCard[];
  };
  projects: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasisPrefix: string;
    headlineEmphasis: string;
    headlineSuffix: string;
    description: string;
    visitLabel: string;
    list: Project[];
  };
  experience: {
    eyebrow: string;
    headline: string;
    description: string;
    list: Job[];
  };
  skills: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    description: string;
    coreCompetencies: string;
    toolStack: string;
    languages: string;
    skillList: SkillMetric[];
    toolStackList: ToolStackEntry[];
    languageList: string[];
  };
  contact: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    headlineSuffix: string;
    description: string;
    emailCta: string;
    downloadResume: string;
    location: string;
    linkedinLabel: string;
    githubLabel: string;
    blogLabel: string;
    copyrightSuffix: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    jobTitle: string;
    ogTitle: string;
    ogDescription: string;
  };
  toggle: {
    ariaLabel: string;
    en: string;
    zh: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      downloadResume: 'Download Resume',
      backToTop: 'Back to top',
      mainMenu: 'Main menu',
    },
    hero: {
      name: 'Tao (Tony) Jin',
      eyebrow: 'Cornell M.Eng Systems Engineering · Class of 2026 · Data Science / Data Analytics',
      description:
        'I turn raw data into decisions that land on the executive agenda — auditable SQL pipelines, calibrated machine-learning models, and research that institutional clients actually act on.',
      chips: ["Cornell M.Eng '26", 'UBC Mathematics', 'Available immediately'],
      downloadResume: 'Download Resume',
      viewProjects: 'View Projects',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      blog: 'Blog',
    },
    about: {
      eyebrow: 'About',
      headlineLead: 'More than an analyst —',
      headlineEmphasis: 'someone who ships decisions.',
      paragraph1: {
        prefix:
          'The work has already run in production: PostgreSQL validation queries keeping Metabase reporting accurate on a 9-table production database, a Mage ETL workflow that parsed statement PDFs into structured JSON for ledger reconciliation, and pre-IPO due diligence that cross-checked ',
        strong1: '20,000+',
        middle:
          ' bank transaction records against company ledgers to flag ',
        strong2: 'dozens',
        suffix:
          ' of large unexplained transactions. My edge is the last mile — turning an analysis into the single sentence a decision-maker can act on in 30 seconds.',
      },
      paragraph2:
        'Cornell M.Eng in Systems Engineering (2026), UBC Mathematics. Actively interviewing for Data Science, Data Analyst, and Business Analyst roles across the U.S., in Vancouver and Toronto, and in mainland China (Beijing, Shanghai, Guangzhou, Hangzhou).',
      cards: [
        {
          title: 'Shipped, not just coded',
          description:
            'SQL validation queries on a 9-table production database and a Mage ETL pipeline that reconciled statement PDFs into structured JSON — work that ran in operations, not demos that die in a notebook.',
        },
        {
          title: 'Bilingual, bicultural',
          description:
            'Native Mandarin, fluent English. Internships in Toronto and Shanghai across tech, asset management, and investment banking — fluent in both North American and Chinese review styles.',
        },
        {
          title: 'Systems, not silos',
          description:
            "M.Eng training in optimization and statistical modeling. I surface the question that should have been asked — not just the one that was.",
        },
      ],
    },
    projects: {
      eyebrow: 'Selected Projects',
      headlineLead: 'Technical depth,',
      headlineEmphasisPrefix: 'business ',
      headlineEmphasis: 'impact',
      headlineSuffix: '.',
      description:
        'Marketplace analytics, machine learning, relational database design, time-series modeling, and NLP extraction — each with a business translation I can give in 30 seconds.',
      visitLabel: 'Visit site',
      list: [
        {
          id: 'olist-marketplace',
          title: 'Olist Marketplace Customer Retention & Fulfillment Analytics',
          role: 'SQL Analytics, BI Dashboard & Business Recommendations',
          tech: ['DuckDB SQL', 'CTEs', 'Window Functions', 'Excel Dashboard'],
          description:
            'Analyzed Brazilian e-commerce marketplace data to connect customer retention, revenue concentration, fulfillment quality, seller/category risk, and satisfaction into an executive-ready action plan.',
          metrics: [
            'Built reusable order, customer, and item-level DuckDB marts from 99,441 orders, aggregating payments, items, and reviews to order grain before joining to prevent inflated revenue.',
            'Identified a 3.0% delivered-customer repeat rate and a BRL 7.98M high-value one-time buyer segment, translating cohort and segmentation analysis into CRM and second-purchase recommendations.',
            'Analyzed 96,478 delivered orders, finding an 8.1% late-delivery rate and materially weaker review scores for late orders, then built a recommendation scorecard for service recovery and seller operations.',
          ],
        },
        {
          id: 'proteomics-kaggle',
          title: 'Proteomics Metadata Extraction — Kaggle Competition',
          role: 'NLP Engineering & Analytical Deep-Dive',
          tech: ['Python', 'NLP', 'LLM', 'difflib', 'pandas'],
          description:
            'Built an NLP pipeline to extract structured SDRF metadata from scientific publications across a 71-field taxonomy and 15 test datasets.',
          metrics: [
            'Analyzed the scoring metric (difflib string similarity clustering, 0.80 threshold) to identify that value normalization — not extraction logic — was the primary score driver.',
            'Identified a 0.575 gap between validation (0.754) and test performance, root-caused to vocabulary overfitting on training data.',
            'Pivoted analysis from rule-based to LLM-based extraction after benchmarking the ceiling of each approach.',
          ],
        },
        {
          id: 'diabetes-readmission',
          title: 'Diabetes Hospital Readmission Risk Modeling',
          role: 'Machine Learning & Clinical Risk Modeling',
          period: 'Sep. 2025 – Present',
          tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP'],
          description:
            'Built a leakage-safe clinical risk modeling pipeline for 30-day diabetes readmission prediction using hospital encounter, diagnosis, medication, and utilization data across a large multi-site U.S. cohort.',
          metrics: [
            'Engineered a 160-feature dataset from 101,766 hospital encounters across 130 U.S. hospitals for 71,518 unique patients, using patient-level 70/10/20 train-calibrate-test splitting to prevent data leakage.',
            'Benchmarked logistic regression, random forest, gradient boosting, and XGBoost for 30-day readmission prediction, with best held-out performance reaching AUROC 0.668 and AUPRC 0.230.',
            'Applied isotonic recalibration to reduce XGBoost Expected Calibration Error from 0.342 to 0.004, implemented split conformal prediction with 90.1% empirical coverage, and ran SHAP interpretability plus subgroup fairness audits.',
          ],
        },
        {
          id: 'food-delivery',
          title: 'Dual-Portal Food Delivery System',
          role: 'Full Stack Engineer & DB Architect',
          tech: ['Oracle SQL', 'Node.js', 'HTML/CSS', 'Database Normalization'],
          description:
            'Designed a robust relational database and dual-portal web app to manage real-time food delivery operations.',
          metrics: [
            'Ensured 100% data integrity via 3NF normalization',
            'Real-time synchronization between UI and Backend',
          ],
        },
        {
          id: 'time-series',
          title: 'Time Series Modeling (Canada Labor)',
          role: 'Data Analyst',
          tech: ['R', 'SARIMA', 'Holt-Winters', 'Statistical Inference'],
          description:
            'Developed predictive models for Canadian working hours to assist in labor resource allocation.',
          metrics: [
            'Optimized AIC parameters for high-accuracy forecasting',
            'Visualized 95% prediction intervals for stakeholders',
          ],
        },
        {
          id: 'bouldering-app',
          title: 'Bouldering Video Analysis — iOS App',
          role: 'Solo Developer · Swift, Vision, on-device CV',
          period: 'Mar 2026 – Jul 2026',
          tech: ['Swift', 'SwiftUI', 'Apple Vision', 'SwiftData', 'Swift Package', 'LLM API'],
          description:
            'A native iOS MVP that turns a single climbing attempt video into specific, plain-language coaching notes. The whole analysis pipeline runs offline on the phone: frame sampling, Apple Vision 2D body-pose extraction, smoothing and pose-quality checks, movement segmentation, feature extraction, then a rule engine that renders feedback in Chinese.',
          metrics: [
            'Roughly 20,700 lines of Swift across 181 files, with the analysis and training logic isolated in a BoulderingKit Swift package (5 domain modules) covered by 191 unit tests.',
            'Local-first by design — SwiftData plus on-device files and Keychain, no account and no cloud sync; optional LLM-enhanced feedback sits behind a provider abstraction and an explicit consent gate.',
            'Ships attempt history, side-by-side comparison, a route-beta planner with manual hold annotation, and a training stats dashboard.',
          ],
        },
        {
          id: 'photo-site',
          title: 'DUNDUN — Photography Site',
          role: 'Solo Developer · Astro, Cloudflare edge',
          period: '2026',
          tech: ['Astro', 'TypeScript', 'Cloudflare Pages', 'Cloudflare R2', 'sharp', 'Edge Functions'],
          description:
            'A live photography site built on a static Astro front end with Cloudflare R2 object storage and Pages Functions at the edge. Public albums stream straight from CDN; private albums are password-gated and served through short-lived signed URLs, so unlisted work is never publicly addressable.',
          metrics: [
            'Live at dundun-photo.com, serving 130+ photos across four albums for roughly $2–5 a month in storage and egress.',
            'A sharp-based sync pipeline generates thumbnails and 2560px display renditions, reads EXIF, and uploads to R2 — cutting one 33 MB frame to 716 KB and keeping full-resolution originals off the public site.',
            'Private-album auth runs at the edge: password → HMAC session cookie → short-lived presigned R2 URL, verified end to end with an 8-case request suite.',
            'Custom scatter gallery with an infinite wrap-around canvas, plus per-album maps that plot where each photo was taken across Iceland, Japan, and Canada.',
          ],
          link: 'https://dundun-photo.com',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      headline: 'Where I learned to ship.',
      description:
        'Data and finance internships in Toronto and Shanghai — SQL pipelines, ETL automation, and client-facing research that reached the Monday-morning meeting.',
      list: [
        {
          id: 'aifuku',
          company: 'Aifuku',
          role: 'Data Science Intern',
          location: 'Toronto, ON',
          period: 'Jan 2025 – May 2025',
          achievements: [
            'Kept Metabase operational reporting accurate by writing complex PostgreSQL validation queries across a 9-table production database, collaborating with the operations team to identify data anomalies and resolve data-quality issues.',
            'Automated ledger reconciliation by building a Mage ETL workflow that parsed bank and credit-card statement PDFs into structured JSON with an LLM (Gemini), reducing manual data entry and processing errors.',
            'Improved data reliability for reporting by performing root cause analysis across 5 linked operational entities, documenting schema and data-quality issues, and communicating fixes cross-functionally.',
          ],
        },
        {
          id: 'grow-investment',
          company: 'Grow Investment Group',
          role: 'Data Analyst Intern',
          location: 'Shanghai, China',
          period: 'May 2024 – Aug 2024',
          achievements: [
            "Developed an internal Python dashboard for the firm's convertible-bond product, turning multi-year daily performance data into KPI metrics, trend, and volatility charts shared by technical and non-technical colleagues.",
            'Completed 10+ institutional due diligence questionnaires (DDQs) of 30–50 questions each by writing clear, concise responses and cross-checking internal records, keeping client-facing documentation accurate and consistent.',
            'Conducted quantitative market research integrating macroeconomic indicators, interest rate trends, and sentiment data; collaborated with senior analysts to deliver analytical reports supporting institutional investment decisions.',
          ],
        },
        {
          id: 'sinolink',
          company: 'Sinolink Securities Co., Ltd.',
          role: 'Investment Banking Intern',
          location: 'Shanghai, China',
          period: 'June 2023 – Aug 2023',
          achievements: [
            'Performed pre-IPO financial due diligence on a Shanghai main-board applicant (planned ~RMB 460M IPO): reviewed 10+ executives’ 3-year bank transaction records (20,000+ entries) against company ledgers, flagging dozens of large unexplained transactions.',
            'Calculated risk and performance metrics (Sharpe, Sortino, beta, volatility, correlation) and visualized trends against benchmarks in risk management reports for stakeholders.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      headlineLead: 'A ',
      headlineEmphasis: 'hybrid skill stack',
      description:
        "Modern business problems need both auditable technical execution and judgment a CEO will cite. I've built both sides.",
      coreCompetencies: 'Core Competencies',
      toolStack: 'Tool Stack',
      languages: 'Languages',
      skillList: [
        { subject: 'Python/R', A: 90, fullMark: 100 },
        { subject: 'SQL/DB', A: 85, fullMark: 100 },
        { subject: 'Data Viz', A: 95, fullMark: 100 },
        { subject: 'Fin. Modeling', A: 80, fullMark: 100 },
        { subject: 'Strategy', A: 85, fullMark: 100 },
        { subject: 'Communication', A: 90, fullMark: 100 },
      ],
      toolStackList: [
        { label: 'Programming & Data', stack: 'SQL, Python, R', value: 90 },
        {
          label: 'Visualization & Reporting',
          stack: 'Excel, Tableau, Power BI, Metabase',
          value: 90,
        },
        {
          label: 'Analytics',
          stack: 'Cohort, Segmentation, Modeling',
          value: 85,
        },
      ],
      languageList: ['Mandarin Chinese (Native)', 'English (Fluent)', 'Japanese (Basic)'],
    },
    contact: {
      eyebrow: 'Get in Touch',
      headlineLead: 'From dashboard ',
      headlineEmphasis: 'to decision',
      headlineSuffix: '.',
      description:
        "Available to start immediately — open to roles anywhere in the U.S., in Vancouver or Toronto, and in Beijing, Shanghai, Guangzhou, or Hangzhou, on-site or remote. Tell me what you're trying to decide — I'll tell you what the data says.",
      emailCta: 'Email me',
      downloadResume: 'Download Resume',
      location: 'U.S. · Vancouver · Toronto · China · Available immediately',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      blogLabel: 'Personal Blog',
      copyrightSuffix: 'Tao (Tony) Jin. Designed & built from scratch.',
    },
    seo: {
      title: 'Tao (Tony) Jin | Data Scientist & Data Analyst (Cornell M.Eng 2026)',
      description:
        'Data Science / Data Analyst portfolio of Tao (Tony) Jin (金韬) — Cornell M.Eng Systems Engineering, available immediately. Production SQL validation, Mage/LLM ETL automation, pre-IPO due diligence, and end-to-end analytics projects.',
      keywords:
        'Data Science, Data Scientist, Data Analyst, Machine Learning, Business Analyst, Python, SQL, PostgreSQL, DuckDB, Tableau, Power BI, Metabase, Excel, ETL, Cornell M.Eng, UBC Math, 2026 graduate, United States, Canada, Vancouver, Toronto, Beijing, Shanghai, Guangzhou, Hangzhou',
      jobTitle: 'Data Scientist & Data Analyst',
      ogTitle: 'Tao (Tony) Jin | From Dashboard to Decision',
      ogDescription:
        'Cornell M.Eng 2026 · UBC Mathematics. Production SQL validation · ETL automation · pre-IPO due diligence · analytics that ships.',
    },
    toggle: {
      ariaLabel: 'Switch language',
      en: 'EN',
      zh: '中文',
    },
  },
  zh: {
    nav: {
      about: '关于我',
      projects: '项目',
      experience: '经历',
      skills: '技能',
      downloadResume: '下载简历',
      backToTop: '回到顶部',
      mainMenu: '主菜单',
    },
    hero: {
      name: '金韬',
      eyebrow: '康奈尔大学系统工程硕士 · 2026 届 · 求职方向:数据科学 / 数据分析',
      description:
        '将业务数据转化为可以落地执行的决策。从可追溯的 SQL 分析流程、经过校准的机器学习模型,到支持机构客户投资判断的研究材料,都已在真实业务与项目中交付落地。',
      chips: ['康奈尔 M.Eng 2026 届', 'UBC 数学 本科', '可立即入职'],
      downloadResume: '下载简历',
      viewProjects: '查看项目',
      linkedin: '领英',
      github: 'GitHub',
      blog: '博客',
    },
    about: {
      eyebrow: '关于我',
      headlineLead: '不止于数据分析,',
      headlineEmphasis: '更能驱动决策落地。',
      paragraph1: {
        prefix:
          '过往实习中交付的成果均已在真实业务场景中落地:用复杂 PostgreSQL 校验查询维护 9 张核心表生产库的 Metabase 报表准确性;搭建 Mage ETL 流程把对账单 PDF 自动解析为结构化 JSON 实现台账对账;在券商投行部交叉核查十余名高管三年期银行流水共 ',
        strong1: '2 万余条',
        middle: '交易记录与公司账目,筛查出 ',
        strong2: '数十笔',
        suffix:
          '大额异常往来。相比单纯的模型搭建,我更擅长将分析结论提炼为管理层能够在短时间内把握并据以决策的关键信息。',
      },
      paragraph2:
        '康奈尔大学系统工程硕士(2026 届)、UBC 数学本科,目前积极寻求数据科学、数据分析与商业分析方向的全职机会。意向工作地覆盖全美、加拿大(温哥华、多伦多)以及中国(北京、上海、广州、杭州),同时也可以考虑远程协作。',
      cards: [
        {
          title: '交付即上线',
          description:
            '在 9 张核心表的生产数据库上编写 SQL 校验查询,并搭建 Mage ETL 流程把对账单 PDF 解析为结构化 JSON——都是在真实运营环境中跑起来的工具,而非停留在课堂或演示层面的原型。',
        },
        {
          title: '中英双语,跨文化协作',
          description:
            '中文为母语,英文达到专业工作水平。实习经历横跨多伦多与上海,覆盖科技公司、资管与券商投行,熟悉北美与国内两地的汇报逻辑与协作节奏,能够在跨境团队之间高效衔接。',
        },
        {
          title: '系统化的思考方式',
          description:
            '系统工程的训练让我在面对问题时,倾向于先梳理背后的业务脉络,思考"更值得被提出的问题是什么",而不仅仅是机械地回答当下被问到的那个。',
        },
      ],
    },
    projects: {
      eyebrow: '精选项目',
      headlineLead: '技术深度,',
      headlineEmphasisPrefix: '服务于 ',
      headlineEmphasis: '商业价值',
      headlineSuffix: '。',
      description:
        '涵盖 marketplace 经营分析、机器学习、关系型数据库设计、时间序列建模以及 NLP 信息抽取等方向。每个项目均以清晰的业务背景为起点,并以可量化的成果为落点。',
      visitLabel: '访问网站',
      list: [
        {
          id: 'olist-marketplace',
          title: 'Olist 巴西电商 Marketplace 留存与履约分析',
          role: 'SQL 商业分析、BI Dashboard 与业务建议',
          tech: ['DuckDB SQL', 'CTE', '窗口函数', 'Excel Dashboard'],
          description:
            '基于巴西电商 marketplace 订单数据,分析客户复购、收入结构、履约质量、卖家/品类风险与用户满意度之间的关系,并整理为面向业务决策的行动建议。',
          metrics: [
            '基于 99,441 笔订单搭建可复用的订单、客户与商品层 DuckDB 分析 mart,先将支付、商品明细和评论聚合到订单粒度后再关联,避免多表 join 导致收入膨胀。',
            '识别出已送达客户复购率仅约 3.0%,同时高价值一次性客户贡献约 BRL 7.98M 支付金额,据此提出 CRM 与二次购买转化建议。',
            '分析 96,478 笔已送达订单后发现晚送达率约 8.1%,且晚送达订单评分明显更低,进一步建立服务补救与卖家运营的 recommendation scorecard。',
          ],
        },
        {
          id: 'proteomics-kaggle',
          title: '蛋白质组学元数据提取 —— Kaggle 竞赛',
          role: 'NLP 工程与分析建模',
          tech: ['Python', 'NLP', 'LLM', 'difflib', 'pandas'],
          description:
            '搭建 NLP 抽取流水线,从科研论文中提取结构化的 SDRF 元数据,覆盖 71 个字段的分类体系与 15 个测试数据集。',
          metrics: [
            '深入分析评分机制(基于 difflib 的字符串相似度聚类,阈值设为 0.80),发现数值规范化而非抽取逻辑才是影响最终得分的核心因素。',
            '识别出验证集(0.754)与测试集之间 0.575 的性能差距,并通过溯源分析定位原因为训练数据上的词表过拟合。',
            '在系统比较两种方法的性能上限后,将抽取方案由基于规则调整为基于大模型,并据此重构了整体流程。',
          ],
        },
        {
          id: 'diabetes-readmission',
          title: '糖尿病住院再入院风险建模',
          role: '机器学习与临床风险建模',
          period: '2025 年 9 月至今',
          tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP'],
          description:
            '基于美国多中心队列的住院、诊断、用药与就诊数据,搭建避免数据泄漏的 30 天糖尿病再入院风险预测流水线。',
          metrics: [
            '基于美国 130 家医院、71,518 名患者共 101,766 次住院记录,构建 160 维特征集,并采用患者层面的 70/10/20 训练/校准/测试划分,有效避免数据泄漏。',
            '对 Logistic 回归、随机森林、梯度提升及 XGBoost 进行基准测试,最终最佳模型在留出集上的 AUROC 达 0.668、AUPRC 达 0.230。',
            '通过等温回归重校准将 XGBoost 的期望校准误差由 0.342 降至 0.004,进一步引入 Split Conformal 预测(经验覆盖率 90.1%),并完成 SHAP 可解释性分析及子群公平性审计。',
          ],
        },
        {
          id: 'food-delivery',
          title: '双端外卖系统',
          role: '全栈工程师与数据库架构',
          tech: ['Oracle SQL', 'Node.js', 'HTML/CSS', '数据库范式化'],
          description: '设计稳定可靠的关系型数据库与双端 Web 应用,支持实时外卖业务的日常运营。',
          metrics: [
            '通过 3NF 范式化设计,确保关键数据的完整性与一致性。',
            '实现前端界面与后端服务之间的实时数据同步,保障业务连续性。',
          ],
        },
        {
          id: 'time-series',
          title: '时间序列建模(加拿大劳动力)',
          role: '数据分析师',
          tech: ['R', 'SARIMA', 'Holt-Winters', '统计推断'],
          description:
            '针对加拿大工时数据搭建时间序列预测模型,辅助相关方进行劳动力资源规划与配置。',
          metrics: [
            '通过优化 AIC 参数提升模型的预测精度。',
            '以可视化方式呈现 95% 置信区间的预测结果,便于相关方理解与沟通。',
          ],
        },
        {
          id: 'bouldering-app',
          title: '抱石动作视频分析 — iOS App',
          role: '独立开发 · Swift、Vision、端侧计算机视觉',
          period: '2026 年 3 月 – 2026 年 7 月',
          tech: ['Swift', 'SwiftUI', 'Apple Vision', 'SwiftData', 'Swift Package', 'LLM API'],
          description:
            '原生 iOS MVP:上传一段攀爬视频,输出具体、可读的中文动作改进建议。整条分析链路完全在手机本地离线运行——抽帧、Apple Vision 2D 人体姿态提取、平滑与姿态质量评估、动作分段、特征工程,最后由规则引擎生成中文反馈。',
          metrics: [
            '约 2.07 万行 Swift、181 个文件;分析与训练逻辑抽离为独立的 BoulderingKit Swift Package(5 个领域模块),由 191 个单元测试覆盖。',
            '本地优先设计:SwiftData + 本地文件 + Keychain,无账号、无云同步;可选的大模型增强反馈置于 provider 抽象层与显式授权开关之后。',
            '已实现尝试历史、双视频对比、含手动标点的路线 beta 规划,以及训练统计面板。',
          ],
        },
        {
          id: 'photo-site',
          title: 'DUNDUN — 摄影作品站',
          role: '独立开发 · Astro、Cloudflare 边缘',
          period: '2026 年',
          tech: ['Astro', 'TypeScript', 'Cloudflare Pages', 'Cloudflare R2', 'sharp', 'Edge Functions'],
          description:
            '已上线的摄影作品站:Astro 静态前端 + Cloudflare R2 对象存储 + 边缘 Pages Functions。公开相册直连 CDN;私密相册经口令鉴权后以短时效签名 URL 分发,未公开的作品在公网上无法被直接寻址。',
          metrics: [
            '已上线 dundun-photo.com,四个相册共 130+ 张照片,存储与流量成本每月约 $2–5。',
            '基于 sharp 的同步管线自动生成缩略图与 2560px 展示图、读取 EXIF 并上传 R2——单张 33MB 原图压至 716KB,全分辨率原图不出现在公网。',
            '私密相册鉴权在边缘完成:口令 → HMAC 会话 cookie → 短时效 R2 预签名 URL,并以 8 项请求用例端到端验证。',
            '自研散布画廊(无限环绕画布),并为每册绘制拍摄地地图,标注冰岛、日本、加拿大各张照片的实际拍摄位置。',
          ],
          link: 'https://dundun-photo.com',
        },
      ],
    },
    experience: {
      eyebrow: '工作经历',
      headline: '在一线业务中积累的实战经验',
      description:
        '实习经历分布在多伦多与上海,涵盖数据科学、数据分析与投资银行——SQL 数据流程、ETL 自动化与数据看板,所交付的成果均被团队在日常工作中直接采用。',
      list: [
        {
          id: 'aifuku',
          company: 'Aifuku',
          role: '数据科学实习生',
          location: '加拿大多伦多',
          period: '2025 年 1 月 – 2025 年 5 月',
          achievements: [
            '通过编写复杂 PostgreSQL 校验查询,维护 9 张核心表生产数据库的 Metabase 运营报表准确性;与运营团队协作定位数据异常、解决数据质量问题。',
            '搭建 Mage ETL 流程,自动解析银行与信用卡对账单 PDF 为结构化 JSON(调用 Gemini 大模型),实现台账对账自动化,减少人工录入与处理错误。',
            '对 5 个关联业务实体进行根因分析,梳理表结构与数据质量问题并跨部门沟通推动修复,提升报表数据可靠性。',
          ],
        },
        {
          id: 'grow-investment',
          company: 'GROW 思睿',
          role: '数据分析实习生',
          location: '中国上海',
          period: '2024 年 5 月 – 2024 年 8 月',
          achievements: [
            '为公司可转债产品搭建内部 Python 数据看板:将多年逐日业绩数据整合为 KPI 指标、趋势与波动率图表,供技术与非技术同事共用同一口径,替代临时翻数据的沟通方式。',
            '配合机构客户对公司的尽职调查,完成 10 余份尽调问卷(DDQ,单份约 30–50 题):撰写清晰、简明的书面答复并交叉核对内部记录,确保客户材料口径准确一致。',
            '整合宏观经济指标、利率走势与市场情绪数据开展量化市场研究,与资深分析师协作输出分析报告,支持机构客户投资决策。',
          ],
        },
        {
          id: 'sinolink',
          company: '国金证券股份有限公司',
          role: '投资银行部实习生',
          location: '中国上海',
          period: '2023 年 6 月 – 2023 年 8 月',
          achievements: [
            '对拟募资约 4.6 亿元的沪主板申报企业开展财务尽职调查,交叉核查十余名高管三年期银行流水(2 万余条交易)与公司账目,筛查出数十笔大额异常往来并形成待落实清单。',
            '计算 Sharpe、Sortino、Beta、波动率与相关性指标,形成组合绩效和风险管理报告,支持内部决策。',
          ],
        },
      ],
    },
    skills: {
      eyebrow: '技能',
      headlineLead: '兼具技术深度',
      headlineEmphasis: '与商业判断',
      description:
        '现代商业问题对分析师的要求是双重的:既需要扎实、可复现的技术能力,也需要能够支持管理层决策的商业判断,二者相辅相成。',
      coreCompetencies: '核心能力',
      toolStack: '工具栈',
      languages: '语言',
      skillList: [
        { subject: 'Python/R', A: 90, fullMark: 100 },
        { subject: 'SQL/数据库', A: 85, fullMark: 100 },
        { subject: '数据可视化', A: 95, fullMark: 100 },
        { subject: '财务建模', A: 80, fullMark: 100 },
        { subject: '战略思维', A: 85, fullMark: 100 },
        { subject: '沟通表达', A: 90, fullMark: 100 },
      ],
      toolStackList: [
        { label: '编程与数据', stack: 'SQL, Python, R', value: 90 },
        { label: '可视化与报表', stack: 'Excel, Tableau, Power BI, Metabase', value: 90 },
        { label: '分析方法', stack: '留存 cohort、客户分层、建模', value: 85 },
      ],
      languageList: ['中文(母语)', '英文(专业工作水平)', '日语(基础)'],
    },
    contact: {
      eyebrow: '联系我',
      headlineLead: '让数据 ',
      headlineEmphasis: '真正驱动决策',
      headlineSuffix: '。',
      description:
        '可立即全职入职,意向工作地覆盖全美、加拿大(温哥华、多伦多)以及中国(北京、上海、广州、杭州),线上线下皆可。欢迎就您关注的业务问题进行交流,我很乐意从数据视角提供一些分析与建议。',
      emailCta: '发邮件联系',
      downloadResume: '下载简历',
      location: '全美 · 温哥华 · 多伦多 · 中国 · 可立即入职',
      linkedinLabel: '领英',
      githubLabel: 'GitHub',
      blogLabel: '个人博客',
      copyrightSuffix: 'Tao (Tony) Jin 版权所有。全站从零设计与构建。',
    },
    seo: {
      title: '金韬 (Tao Jin) | 数据科学 / 数据分析 · 康奈尔 M.Eng · 可立即入职',
      description:
        '金韬 (Tao Jin) 的个人作品集:康奈尔大学系统工程硕士(2026 届)、UBC 数学本科,求职方向数据科学 / 数据分析。实操经验涵盖生产库 SQL 校验、Mage/大模型 ETL 自动化、Pre-IPO 财务尽调,以及端到端的数据分析项目。',
      keywords:
        '数据科学, 数据科学家, 数据分析, 机器学习, 商业分析, Python, SQL, PostgreSQL, DuckDB, Tableau, Power BI, Metabase, Excel, ETL, 康奈尔 M.Eng, UBC 数学, 2026 应届, 全美, 加拿大, 温哥华, 多伦多, 北京, 上海, 广州, 杭州',
      jobTitle: '数据科学家与数据分析师',
      ogTitle: 'Tao (Tony) Jin | 让数据真正驱动决策',
      ogDescription:
        '康奈尔大学系统工程硕士(2026 届)· UBC 数学本科。生产库 SQL 校验 · ETL 自动化 · Pre-IPO 财务尽调 · 能落地的数据分析。',
    },
    toggle: {
      ariaLabel: '切换语言',
      en: 'EN',
      zh: '中文',
    },
  },
};
