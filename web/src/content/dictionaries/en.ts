import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About BBI", href: "/about" },
      { label: "How We Work", href: "/work" },
      { label: "Cases", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Contacts", href: "/contacts" },
    ],
    cta: "Start",
  },
  work: {
    hero: {
      eyebrow: "Operating Partner Model",
      title: "6 pillars: one system, not a bundle of services",
      description:
        "We don’t sell operations separately from marketing, or marketing separately from finance. Business is a system. A hole in one pillar collapses the rest. BBI enters all six and builds a single management contour.",
      ctaLabel: "6 PILLARS OF BBI",
      ctaHint: "Open the pillars page",
    },
    pillarsIntro: {
      title: "BBI system",
      description:
        "BBI unites six directions into one system aligned with the owner’s interests. These are not “services” you buy separately — these are six support points that make the business asset resilient and protected. Resilience is the outcome of all six.",
      detailsLabel: "Learn more",
    },
    pillars: [
      {
        key: "operations",
        title: "Operations",
        group: "Leverage",
        groupLabel: "Leverage",
        summary:
          "Operating rhythm, SOPs, org structure, KPI panels, and execution control.",
        details: [
          "Operating rhythm and governance meetings.",
          "SOPs, checklists, roles and ownership.",
          "Dashboards, deadlines, and quality control.",
        ],
        result:
          "The business runs on rhythm and rules, not on team mood.",
        broken:
          "Firefighting, chaos, manual control, and dependency on people.",
        actions:
          "We build org structure, regulations, cadence, and control.",
      },
      {
        key: "marketing",
        title: "Marketing",
        group: "Leverage",
        groupLabel: "Leverage",
        summary:
          "Full-funnel analytics, channel economics, predictable demand.",
        details: [
          "Channel economics and transparent budgets.",
          "Full-funnel analytics and audit.",
          "Stable demand without budget leaks.",
        ],
        result:
          "Clear cost per lead/client and controlled growth.",
        broken:
          "Budget leakage, no forecasts, and weak effectiveness control.",
        actions:
          "We set analytics, funnels, budgets, and growth metrics.",
      },
      {
        key: "sales",
        title: "Sales",
        group: "Leverage",
        groupLabel: "Leverage",
        summary:
          "Systemic sales without “stars”: standards, scripts, CRM control.",
        details: [
          "Communication standards and scripts.",
          "CRM control, funnel, and lead handling.",
          "Results stay stable when people change.",
        ],
        result:
          "Sales are predictable and not tied to individual heroes.",
        broken:
          "Dependence on stars and drops when people leave.",
        actions:
          "We build sales system, standards, training, and control.",
      },
      {
        key: "finance",
        title: "Finance",
        group: "Shield",
        groupLabel: "Shield",
        summary:
          "Transparent finance, management accounting, and margin control.",
        details: [
          "Management accounting and plan-vs-actual.",
          "Profit and cost transparency.",
          "Cashflow discipline and risk control.",
        ],
        result:
          "The owner sees real profit and makes decisions on data.",
        broken:
          "No single source of truth, cash gaps, blind spots.",
        actions:
          "We build financial model, reporting, and control rules.",
      },
      {
        key: "hr",
        title: "HR",
        group: "Shield",
        groupLabel: "Shield",
        summary:
          "Structured hiring, onboarding, evaluation, and talent pipeline.",
        details: [
          "Role profiles and hiring standards.",
          "Onboarding, training, mentorship.",
          "Evaluation system and talent growth.",
        ],
        result:
          "Stable team, fixed roles, growth without system breaks.",
        broken:
          "Turnover, chaotic hiring, dependence on key people.",
        actions:
          "We build HR processes, role profiles, and evaluation.",
      },
      {
        key: "legal",
        title: "Legal protection",
        group: "Shield",
        groupLabel: "Shield",
        summary:
          "Asset protection, contracts, IP, and data security.",
        details: [
          "Contract base and ownership protection.",
          "Security policies and personal data compliance.",
          "Legal audit and risk reduction.",
        ],
        result:
          "The asset is protected: rights, data, and contracts.",
        broken:
          "Lawsuit risks, data leaks, and asset vulnerabilities.",
        actions:
          "We close legal risks and build a protective contour.",
      },
    ],
    results: {
      title: "Valuable end result (VER)",
      description: "What the owner gets from each pillar.",
      badge: "VER",
    },
    problems: {
      title: "When a pillar is broken",
      description: "Symptoms in each direction when the system fails.",
      badge: "Risks",
    },
    actions: {
      title: "What BBI does",
      description: "How we build the system in each pillar.",
      badge: "BBI",
    },
    format: {
      title: "Format",
      description:
        "BBI is not about tasks or hours. We work as a project for 45+ business days with full immersion.",
      zones: [
        {
          label: "Green zone (this is BBI)",
          description:
            "Screening → diagnosis / audit → 45+ day project → retainer role.",
          tone: "green",
        },
        {
          label: "Yellow zone (allowed as part of the project)",
          description:
            "SMM, website, CRM — only as elements of the built system.",
          tone: "yellow",
        },
        {
          label: "Red zone (we do not do this)",
          description:
            "SMM outsourcing, marketing-as-a-service, brandbook as a service, one-off consulting.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "Project stages",
      description: "How the system is built step by step.",
      steps: [
        {
          title: "Screening (free)",
          description: "Fit check and problem framing.",
        },
        {
          title: "Diagnosis / audit",
          description:
            "Full picture: finance, processes, team, marketing, sales.",
        },
        {
          title: "System design",
          description:
            "Architecture of shield, leverage, and the management contour.",
        },
        {
          title: "Implementation & control (45–90 business days)",
          description:
            "BBI works inside the business until the system stabilizes.",
        },
        {
          title: "Retainer role",
          description:
            "BBI stays as a partner to maintain resilience.",
        },
      ],
    },
    responsibility: {
      title: "Responsibility",
      bbiTitle: "BBI is responsible for",
      clientTitle: "Client is responsible for",
      bbi: [
        "Management architecture and system",
        "Asset protection and ownership",
        "Standards and reproducibility (SOP, playbook, RACI)",
        "Financial transparency and decision logic",
        "Change management",
      ],
      client: [
        "Involvement (up to 10 h/week) and fast decisions",
        "Transparency and access to data",
        "Responsible owners for 6 pillars",
        "Execution inside the business by the client team",
        "Governance rhythm and discipline",
      ],
    },
    targetState: {
      title: "Target State",
      minimumTitle: "Target Minimum (45–90 business days)",
      minimumDescription:
        "Threat control, single source of truth, system works without the owner.",
      idealTitle: "Target Ideal (benchmark)",
      idealDescription:
        "The business is stable, protected, and grows reproducibly, ready for investment.",
    },
    cta: {
      title: "Start with screening",
      description: "Free and no obligations.",
      form: {
        name: "Name",
        phone: "Phone",
        message: "Short brief",
        submit: "Book a screening",
      },
    },
  },
  pillarsPage: {
    title: "6 pillars of BBI",
    description:
      "Six support points that build a resilient and protected business asset.",
    ctaLabel: "Start with screening",
    ctaDescription: "We’ll map your gaps in 30 minutes.",
  },
  home: {
    hero: {
      eyebrow: "Brand Promise",
      title: "Shield. Leverage. System. for your business",
      subtitle:
        "BBI is an operating partner for owners and CEOs. We enter the business, surface real issues, and build systems that run without manual control.",
      cta: "Start with diagnostics",
      secondaryCta: "Learn more",
    },
    icp: {
      eyebrow: "Question",
      title: "Is this you?",
      cards: [
        {
          title: "The business grows, but you put out fires",
          description:
            "We build operating rhythm and roles so the owner can stop micromanaging.",
          linkLabel: "Learn more",
          href: "/icp/operations",
        },
        {
          title: "Scaling chaos means scaling losses",
          description:
            "We remove bottlenecks, stabilize processes, and lock in growth levers.",
          linkLabel: "Learn more",
          href: "/icp/scale",
        },
        {
          title: "Investors need an asset, not the owner’s brain",
          description:
            "We make the company predictable and transparent for valuation.",
          linkLabel: "Learn more",
          href: "/icp/investor",
        },
      ],
    },
    icpBridge: {
      label: "Answer",
      title: "How do we help?",
      description:
        "We design the target state, immerse in your reality, build the architecture and implement it with you. Not slide-deck consulting — operational work inside the business.",
    },
    process: {
      eyebrow: "Approach",
      title: "How we work",
      approaches: [
        {
          title: "Design",
          description:
            "We define the target state and solution architecture. Not «best practice» — what your business actually needs, given scale, team and ambitions.",
        },
        {
          title: "Immerse",
          description:
            "We analyze processes, finance, sales and team. Find growth points, bottlenecks and real causes of failures. No templates — only your data.",
        },
        {
          title: "Build the architecture",
          description:
            "Management rhythm, regulations, dashboards, accountability. All in one system, not scattered «improvements».",
        },
        {
          title: "Implement",
          description:
            "We implement changes daily, train your team, hand over control. BBI stays as a partner for resilience.",
        },
      ],
    },
    casesBlog: {
      title: "Cases & Blog",
      casesLabel: "All cases",
      blogLabel: "All articles",
      readMore: "Read more",
    },
    pillars: {
      title: "Shield. Leverage. System.",
      items: [
        {
          title: "Shield",
          description:
            "Asset protection, ownership, legal armor, and transparent finances.",
          details:
            "Shield is not «safety in general». It’s about moving assets and control into the company — so the business doesn’t depend on people, contractors, or «fictitious numbers». We don’t «reassure» — we surface vulnerabilities and close them with a system: ownership, legal armor, transparent finances, HR stability.",
          linkLabel: "Learn more",
          href: "/pillars/shield",
        },
        {
          title: "Leverage",
          description:
            "Operating cadence, full-funnel analytics, sales system without stars.",
          details:
            "Leverage is not «we’ll empower you 10x» (a dangerous promise). It’s about control points you can influence for measurable results: operating rhythm (cadence), full-funnel analytics, sales system without «stars», standards and reproducibility.",
          linkLabel: "Learn more",
          href: "/pillars/leverage",
        },
        {
          title: "System",
          description:
            "Roles fixed, processes standardized, people changes do not break the system.",
          details:
            "System is the opposite of «heroism» and manual control. It replaces owner pressure with management rhythm and regulations. We build a mechanism where every process is documented, every result predictable, and an employee departure is «planned knowledge transfer», not a stop signal for the business.",
          linkLabel: "Learn more",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "BBI is not a neutral contractor",
      description:
        "We take the owner’s side. We speak hard truth, surface vulnerabilities, and fix them systematically.",
    },
  },
  about: {
    who: {
      title: "Who we are",
      text:
        "BBI (Bold Brands International) is an Operating Partner (RevOps). We enter the business, surface real issues, and build systems. Not a marketing agency. Not consulting with pretty slides. Not a neutral contractor that leaves after delivery.",
      emphasis:
        "Key point: BBI is on the owner’s side, not a contractor. There is no neutral position.",
    },
    principles: {
      title: "Key beliefs",
      items: [
        { text: "We stand with owners and CEOs who carry full responsibility." },
        { text: "We choose an honest view of the business, even if painful." },
        { text: "System matters more than talent." },
        { text: "Personal experience. We know threats firsthand." },
      ],
    },
    manifesto: {
      title: "What we stand against",
      items: [
        { text: "We are against empty hype." },
        { text: "We are against “services” instead of a system." },
        { text: "We are against dependency on people." },
        { text: "We are against opacity." },
        { text: "We are against firefighting." },
      ],
    },
    team: {
      title: "Team",
      members: [
        {
          name: "First Last",
          role: "CEO",
          note: "Builds business protection as a system, not services.",
        },
        {
          name: "First Last",
          role: "Operating Partner",
          note: "Leads transformation with accountability for outcomes.",
        },
        {
          name: "First Last",
          role: "RevOps Specialist",
          note: "Sets operational rhythm, analytics, and control.",
        },
        {
          name: "First Last",
          role: "RevOps Specialist",
          note: "Builds sales systems where results beat charisma.",
        },
      ],
    },
    cta: {
      title: "Want to see if we fit?",
      description: "Book a screening and we’ll map your gaps and growth.",
      form: {
        name: "Name",
        phone: "Phone",
        message: "Short brief",
        submit: "Book a screening",
      },
    },
  },
  footer: {
    copyright: "BBI (Bold Brands International). All rights reserved.",
  },
  cases: {
    hero: {
      eyebrow: "Real results",
      title: "Cases: systems approach in action",
      description:
        "We show not «we launched ads» but how we built protection, levers and system. Context, problem, BBI action and measurable result.",
    },
    filters: {
      industry: "Industry",
      direction: "Direction",
      scale: "Scale",
      all: "All",
    },
    filterLabels: {
      retail: "Retail",
      fAndB: "HoReCa / F&B",
      services: "Services",
      ecom: "E-commerce",
      other: "Other",
      operations: "Operations",
      marketing: "Marketing",
      sales: "Sales",
      finance: "Finance",
      hr: "HR",
      legal: "Legal",
      smb: "SMB",
      mid: "Mid-market",
      enterprise: "Enterprise",
    },
    card: { readMore: "Read more" },
    noResults: "No cases match the selected filters.",
    caseDetail: {
      backToCases: "← Cases",
      context: "Context",
      problem: "Problem",
      whatBbiDid: "What BBI did",
      result: "Result",
      artifacts: "Artifacts",
      bbiRole: "BBI role",
    },
    items: [
      {
        slug: "retail-revops",
        company: "Retail (NDA)",
        industry: "Retail",
        keyResult: "LTV +34%, funnel conversion +22%",
        excerpt: "12-store chain: single truth in numbers and a managed funnel instead of chaos.",
        tags: ["Operations", "Sales", "Marketing"],
        industryFilter: "retail",
        directionFilter: "operations",
        scaleFilter: "mid",
        context:
          "12-store chain, 450M/year revenue. Owner as sole decision center. Finance in Excel, sales without CRM.",
        problem:
          "Chaos in numbers, funnel opacity, owner dependency. Each store calculated differently, no single truth.",
        whatBbiDid: [
          "Built unified data loop: CRM + full-funnel analytics.",
          "Implemented SOP for intake, accounting and control.",
          "Set management rhythm and funnel dashboards.",
        ],
        resultNumbers: [
          { before: "Lead→deal conversion 12%", after: "14.6%" },
          { before: "LTV without system", after: "+34% in 8 mo." },
        ],
        artifacts: ["Intake SOP", "Funnel dashboard", "RACI by store"],
        bbiRole:
          "Ownership: owner got a system that runs without manual control. BBI didn't «launch ads» but built a management loop.",
      },
      {
        slug: "fandb-operations",
        company: "HoReCa (NDA)",
        industry: "HoReCa / F&B",
        keyResult: "Margin +18%, leakage −60%",
        excerpt: "5 venues: transparent cost and procurement control instead of manual accounting.",
        tags: ["Operations", "Finance"],
        industryFilter: "fAndB",
        directionFilter: "operations",
        scaleFilter: "smb",
        context:
          "5 F&B venues. Manual accounting, no cost control, procurement leaks.",
        problem:
          "Cost opacity, dependency on buyer and chef. System «broke» when key people left.",
        whatBbiDid: [
          "Set up standard accounting, procurement and cost control.",
          "Implemented checklists and SOP for kitchen and warehouse.",
        ],
        resultNumbers: [
          { before: "Margin 22%", after: "26%" },
          { before: "Leaks unrecorded", after: "Reduced 60%" },
        ],
        artifacts: ["Procurement SOP", "Kitchen checklists", "Margin dashboard"],
        bbiRole:
          "Ownership: owner sees numbers in real time. BBI built the system, not a substitute for management.",
      },
      {
        slug: "ecom-growth",
        company: "E-commerce (NDA)",
        industry: "E-commerce",
        keyResult: "CAC −25%, ROAS +40%",
        excerpt: "D2C brand: channel economics, full-funnel analytics and manageable growth.",
        tags: ["Marketing", "Sales"],
        industryFilter: "ecom",
        directionFilter: "marketing",
        scaleFilter: "mid",
        context:
          "D2C brand, 80M revenue. Ad spend without clear channel economics.",
        problem:
          "Money went «nowhere», CAC rose, ROAS fell. No unified funnel or full-funnel analytics.",
        whatBbiDid: [
          "Launched full-funnel analytics and channel audit.",
          "Built lead and LTV economics by channel.",
          "Standardized CRM and sales funnel.",
        ],
        resultNumbers: [
          { before: "CAC 3200₽", after: "2400₽" },
          { before: "ROAS 2.1", after: "2.94" },
        ],
        artifacts: ["Full-funnel analytics", "Channel dashboard", "Funnel RACI"],
        bbiRole:
          "Ownership: marketing and sales run as a system with measurable metrics. BBI didn't «pour budget», but built manageable growth.",
      },
    ],
  },
  blog: {
    hero: { title: "Blog & Expertise", description: "Articles on building autonomous and protected business systems." },
    card: { readMore: "Read more" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operations", categoryKey: "operations", title: "5 Steps to Autonomous Management", description: "How to build rhythm, SOP and execution control.", image: "/work/pillars-1.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Download checklist", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostics", categoryKey: "diagnostics", title: "Diagnostics: Uncover Real Problems", description: "Find real failure points in your system.", image: "/brand/decor-pattern.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Book screening", href: "/contacts" } },
      { slug: "ekonomika-kanalov-marketing", category: "Marketing", categoryKey: "marketing", title: "Channel Economics", description: "Full-funnel analytics and manageable growth.", image: "/work/zones.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "sistemnye-prodazhi", category: "Sales", categoryKey: "sales", title: "System Sales Without Stars", description: "Standards, scripts and CRM.", image: "/work/responsibility.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "finansovaya-prozrachnost", category: "Finance", categoryKey: "finance", title: "Financial Transparency", description: "One truth in numbers.", image: "/work/target-state.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "hr-kak-sistema", category: "HR", categoryKey: "hr", title: "HR as a System", description: "Roles, accountability, onboarding.", image: "/work/responsibility.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
    ],
  },
  contacts: {
    hero: {
      eyebrow: "Screening",
      title: "Book a screening",
      description:
        "Fill out the form — we'll get back within 24 hours to discuss scale, growth points and fit.",
    },
    form: {
      name: "Name",
      company: "Company / business",
      contact: "Phone or messenger",
      turnoverTeamSize: "Turnover or team size (optional)",
      request: "Brief about your request",
      submit: "Book a screening",
    },
  },
};
