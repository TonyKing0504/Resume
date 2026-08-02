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
      eyebrow: 'Cornell M.Eng Systems Engineering · Graduating May 2026 · Data Science / Data Analytics',
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
          'The work has already run in production: Python tooling that automated cross-database entry for an institutional sales desk, convertible-bond macro research that helped clients cut selloff pressure by ',
        strong1: '9%',
        middle:
          ', and technical marketing for a new bond launch that lifted client conversion by ',
        strong2: '12%',
        suffix:
          ". My edge is the last mile — turning a model's output into the single sentence an executive can decide on in 30 seconds.",
      },
      paragraph2:
        'Graduating May 2026 from Cornell Systems Engineering. Actively interviewing for Data Science, Data Analyst, and Business Analyst roles across the U.S., in Vancouver and Toronto, and in mainland China (Beijing, Shanghai, Guangzhou, Hangzhou).',
      cards: [
        {
          title: 'Shipped, not just coded',
          description:
            'Python and SQL pipelines that passed security review and survived Monday-morning use on a real sales desk — not demos that die in a notebook.',
        },
        {
          title: 'Bilingual, bicultural',
          description:
            'Native Mandarin, professional English. Four summers split between Shanghai desks and Cornell labs — fluent in both the U.S. and China review styles.',
        },
        {
          title: 'Systems, not silos',
          description:
            "M.Eng training in optimization and stochastic modeling. I surface the question that should have been asked — not just the one that was.",
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
            'Wrote PostgreSQL queries with the operations team on a Postgres 15 source-of-truth database spanning 4 operational inputs and 9 core tables, validating orders, receipts, inventory, and ledger data for Metabase reporting.',
            'Built a 2-block Mage ETL workflow to fetch the latest bank or credit-card PDF from Google Drive, parse transaction fields with Gemini, and output structured JSON for ledger reconciliation.',
            'Analyzed 5 linked operational entities — receipts, line items, inventory movements, production batches, and customer orders — collaborating cross-functionally to surface data-quality and schema issues for reporting workflows.',
          ],
        },
        {
          id: 'grow-investment',
          company: 'Grow Investment Group',
          role: 'Institutional Sales Department Intern',
          location: 'Shanghai, China',
          period: 'May 2024 – Aug 2024',
          achievements: [
            'Supported institutional clients’ due diligence on the firm by completing due diligence questionnaires (DDQs), cross-checking internal records to keep responses accurate and consistent.',
            'Conducted quantitative market research integrating macroeconomic indicators, interest rate trends, and sentiment data; collaborated with senior analysts to deliver analytical reports supporting institutional investment decisions.',
            'Produced convertible bond downturn analysis and product training materials; contributed to 9% fewer redemptions, 4% more inquiries, and 12% higher conversion rates.',
          ],
        },
        {
          id: 'sinolink',
          company: 'Sinolink Securities Co., Ltd.',
          role: 'Investment Banking Intern',
          location: 'Shanghai, China',
          period: 'June 2023 – Aug 2023',
          achievements: [
            'Calculated Sharpe, Sortino, Beta, volatility, and correlation metrics; visualized trends against benchmarks in risk management reports supporting internal decisions.',
            'Performed pre-IPO financial due diligence on a Shanghai main-board applicant (planned fundraising ~RMB 460M), cross-checking a dozen executives’ 3-year bank statements against company ledgers to flag large unexplained transactions.',
            'Refined data collection, spreadsheet verification, and reporting workflows through close cross-functional collaboration, cutting duplicate entry and improving team operational efficiency by 8%.',
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
        { label: 'Data Engineering & Analysis', stack: 'Python, R, SQL', value: 90 },
        { label: 'Visualization & BI', stack: 'Tableau, Excel, Matplotlib', value: 95 },
        {
          label: 'Mathematical & Systems',
          stack: 'Stochastic Calculus, Optimization',
          value: 85,
        },
      ],
      languageList: ['Chinese (Fluent)', 'English (Proficient)', 'Japanese (Basic)'],
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
      title: 'Tao (Tony) Jin | Data Scientist & Data Analyst (Cornell M.Eng, May 2026)',
      description:
        'Data Science / Data Analyst portfolio of Tao (Tony) Jin (金韬) — Cornell M.Eng Systems Engineering, available May 2026. Track record: 9% selloff reduction, 12% conversion lift, Python, SQL & ML delivered to live desks.',
      keywords:
        'Data Science, Data Scientist, Data Analyst, Machine Learning, Business Analyst, Python, SQL, Tableau, Financial Modeling, Cornell M.Eng, UBC Math, May 2026 graduate, United States, Canada, Vancouver, Toronto, Beijing, Shanghai, Guangzhou, Hangzhou',
      jobTitle: 'Data Scientist & Data Analyst',
      ogTitle: 'Tao (Tony) Jin | From Dashboard to Decision',
      ogDescription:
        'Cornell M.Eng (May 2026). 9% selloff reduction · 12% conversion lift · Python & SQL shipped to live desks.',
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
      eyebrow: '康奈尔大学系统工程硕士 · 2026 年 5 月毕业 · 求职方向:数据科学 / 数据分析',
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
          '过往实习中交付的成果均已在真实业务场景中得到验证:为机构销售团队搭建的 Python 自动化工具替代了繁琐的跨库手工录入;针对可转债市场下行趋势的研究报告,协助机构客户将抛售压力降低 ',
        strong1: '9%',
        middle: ';为新可转债产品撰写的技术营销材料,推动客户转化率提升 ',
        strong2: '12%',
        suffix:
          '。相比单纯的模型搭建,我更擅长将分析结论提炼为管理层能够在短时间内把握并据以决策的关键信息。',
      },
      paragraph2:
        '2026 年 5 月于康奈尔大学系统工程硕士项目毕业,目前积极寻求数据科学、数据分析与商业分析方向的全职机会。意向工作地覆盖全美、加拿大(温哥华、多伦多)以及中国(北京、上海、广州、杭州),同时也可以考虑远程协作。',
      cards: [
        {
          title: '交付即上线',
          description:
            '所开发的 Python 脚本与 SQL 流程均通过企业内部 IT 审阅,并在一线业务团队长期使用,是经得起日常依赖的实际工具,而非停留在课堂或演示层面的原型。',
        },
        {
          title: '中英双语,跨文化协作',
          description:
            '中文为母语,英文达到专业工作水平。实习经历横跨上海与康奈尔,熟悉中美两地的汇报逻辑与协作节奏,能够在跨境团队之间高效衔接。',
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
      ],
    },
    experience: {
      eyebrow: '工作经历',
      headline: '在一线业务中积累的实战经验',
      description:
        '实习经历分布在多伦多与上海,涵盖数据科学、机构销售与投资银行——SQL 数据流程、ETL 自动化与客户材料,所交付的成果均被团队在日常工作中直接采用。',
      list: [
        {
          id: 'aifuku',
          company: 'Aifuku',
          role: '数据科学实习生',
          location: '加拿大多伦多',
          period: '2025 年 1 月 – 2025 年 5 月',
          achievements: [
            '与运营团队协作编写 PostgreSQL 查询,在覆盖 4 个业务输入、9 张核心表的 Postgres 15 数据底座上校验订单、收据、库存与账目数据,支撑 Metabase 报表。',
            '搭建 2 模块 Mage ETL 流程,从 Google Drive 拉取最新银行/信用卡 PDF,用 Gemini 解析交易字段并输出结构化 JSON,支持账目对账。',
            '分析收据、行项目、库存变动、生产批次与客户订单等 5 类关联业务实体,通过跨团队协作定位报表流程中的数据质量与表结构问题。',
          ],
        },
        {
          id: 'grow-investment',
          company: 'GROW 思睿',
          role: '机构销售部实习生',
          location: '中国上海',
          period: '2024 年 5 月 – 2024 年 8 月',
          achievements: [
            '配合机构客户对公司的尽职调查,负责各类尽调问卷(DDQ)的填写与数据核对,确保答复口径一致。',
            '整合宏观指标、利率走势与市场情绪数据,输出可转债市场分析和产品培训材料,支持机构客户投资沟通并推动赎回率下降 9%、咨询量提升 4%、转化率提升 12%。',
            '将研究结论整理为面向销售团队和客户沟通的材料,提升复杂金融产品信息传达效率,并支持资深分析师形成投资观点。',
          ],
        },
        {
          id: 'sinolink',
          company: '国金证券股份有限公司',
          role: '投资银行部实习生',
          location: '中国上海',
          period: '2023 年 6 月 – 2023 年 8 月',
          achievements: [
            '计算 Sharpe、Sortino、Beta、波动率与相关性指标,形成组合绩效与风险管理报告,支持内部决策。',
            '对拟募资约 4.6 亿元的沪主板申报企业开展财务尽职调查,交叉核查十余名高管三年期银行流水与公司账目,筛查大额异常往来并形成待落实清单。',
            '优化数据采集、表格核验和报告汇总流程,减少重复录入与交叉核对成本,推动团队作业效率提升 8%。',
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
        { label: '数据工程与分析', stack: 'Python, R, SQL', value: 90 },
        { label: '可视化与 BI', stack: 'Tableau, Excel, Matplotlib', value: 95 },
        { label: '数学与系统建模', stack: '随机分析、最优化', value: 85 },
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
      title: '金韬 (Tao Jin) | 数据科学 / 数据分析 · 康奈尔 M.Eng · 2026 年 5 月可入职',
      description:
        '金韬 (Tao Jin) 的个人作品集:康奈尔大学系统工程硕士,2026 年 5 月毕业,求职方向数据科学 / 数据分析。核心成果包括协助机构客户降低抛售压力 9%、推动客户转化率提升 12%,所开发的 Python、SQL 与机器学习工具已在企业业务一线落地使用。',
      keywords:
        '数据科学, 数据科学家, 数据分析, 机器学习, 商业分析, Python, SQL, Tableau, 财务建模, 康奈尔 M.Eng, UBC 数学, 2026 应届, 全美, 加拿大, 温哥华, 多伦多, 北京, 上海, 广州, 杭州',
      jobTitle: '数据科学家与数据分析师',
      ogTitle: 'Tao (Tony) Jin | 让数据真正驱动决策',
      ogDescription:
        '康奈尔大学系统工程硕士(2026 年 5 月)。机构客户抛售压力降低 9% · 产品客户转化率提升 12% · Python 与 SQL 工具已在业务一线落地。',
    },
    toggle: {
      ariaLabel: '切换语言',
      en: 'EN',
      zh: '中文',
    },
  },
};
