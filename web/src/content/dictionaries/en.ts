import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    items: [
      { label: "[EN] Home", href: "/" },
      { label: "[EN] About BBI", href: "/about" },
      { label: "[EN] How We Work", href: "/work" },
      { label: "[EN] Cases", href: "/cases" },
      { label: "[EN] Blog", href: "/blog" },
      { label: "[EN] Contacts", href: "/contacts" },
    ],
    cta: "[EN] Start",
  },
  work: {
    hero: {
      eyebrow: "[EN] Operating Partner Model",
      title: "[EN] 6 pillars: one system, not a bundle of services",
      description:
        "[EN] We don’t sell operations separately from marketing, or marketing separately from finance. Business is a system. A hole in one pillar collapses the rest. BBI enters all six and builds a single management contour.",
      ctaLabel: "[EN] 6 PILLARS OF BBI",
      ctaHint: "[EN] Open the pillars page",
    },
    pillarsIntro: {
      title: "[EN] BBI system",
      description:
        "[EN] BBI unites six directions into one system aligned with the owner’s interests. These are not “services” you buy separately — these are six support points that make the business asset resilient and protected. Resilience is the outcome of all six.",
      detailsLabel: "[EN] Learn more",
    },
    pillars: [
      {
        key: "operations",
        title: "[EN] Operations",
        group: "Leverage",
        groupLabel: "[EN] Leverage",
        summary:
          "[EN] Operating rhythm, SOPs, org structure, KPI panels, and execution control.",
        details: [
          "[EN] Operating rhythm and governance meetings.",
          "[EN] SOPs, checklists, roles and ownership.",
          "[EN] Dashboards, deadlines, and quality control.",
        ],
        result:
          "[EN] The business runs on rhythm and rules, not on team mood.",
        broken:
          "[EN] Firefighting, chaos, manual control, and dependency on people.",
        actions:
          "[EN] We build org structure, regulations, cadence, and control.",
      },
      {
        key: "marketing",
        title: "[EN] Marketing",
        group: "Leverage",
        groupLabel: "[EN] Leverage",
        summary:
          "[EN] Full-funnel analytics, channel economics, predictable demand.",
        details: [
          "[EN] Channel economics and transparent budgets.",
          "[EN] Full-funnel analytics and audit.",
          "[EN] Stable demand without budget leaks.",
        ],
        result:
          "[EN] Clear cost per lead/client and controlled growth.",
        broken:
          "[EN] Budget leakage, no forecasts, and weak effectiveness control.",
        actions:
          "[EN] We set analytics, funnels, budgets, and growth metrics.",
      },
      {
        key: "sales",
        title: "[EN] Sales",
        group: "Leverage",
        groupLabel: "[EN] Leverage",
        summary:
          "[EN] Systemic sales without “stars”: standards, scripts, CRM control.",
        details: [
          "[EN] Communication standards and scripts.",
          "[EN] CRM control, funnel, and lead handling.",
          "[EN] Results stay stable when people change.",
        ],
        result:
          "[EN] Sales are predictable and not tied to individual heroes.",
        broken:
          "[EN] Dependence on stars and drops when people leave.",
        actions:
          "[EN] We build sales system, standards, training, and control.",
      },
      {
        key: "finance",
        title: "[EN] Finance",
        group: "Shield",
        groupLabel: "[EN] Shield",
        summary:
          "[EN] Transparent finance, management accounting, and margin control.",
        details: [
          "[EN] Management accounting and plan-vs-actual.",
          "[EN] Profit and cost transparency.",
          "[EN] Cashflow discipline and risk control.",
        ],
        result:
          "[EN] The owner sees real profit and makes decisions on data.",
        broken:
          "[EN] No single source of truth, cash gaps, blind spots.",
        actions:
          "[EN] We build financial model, reporting, and control rules.",
      },
      {
        key: "hr",
        title: "[EN] HR",
        group: "Shield",
        groupLabel: "[EN] Shield",
        summary:
          "[EN] Structured hiring, onboarding, evaluation, and talent pipeline.",
        details: [
          "[EN] Role profiles and hiring standards.",
          "[EN] Onboarding, training, mentorship.",
          "[EN] Evaluation system and talent growth.",
        ],
        result:
          "[EN] Stable team, fixed roles, growth without system breaks.",
        broken:
          "[EN] Turnover, chaotic hiring, dependence on key people.",
        actions:
          "[EN] We build HR processes, role profiles, and evaluation.",
      },
      {
        key: "legal",
        title: "[EN] Legal protection",
        group: "Shield",
        groupLabel: "[EN] Shield",
        summary:
          "[EN] Asset protection, contracts, IP, and data security.",
        details: [
          "[EN] Contract base and ownership protection.",
          "[EN] Security policies and personal data compliance.",
          "[EN] Legal audit and risk reduction.",
        ],
        result:
          "[EN] The asset is protected: rights, data, and contracts.",
        broken:
          "[EN] Lawsuit risks, data leaks, and asset vulnerabilities.",
        actions:
          "[EN] We close legal risks and build a protective contour.",
      },
    ],
    results: {
      title: "[EN] Valuable end result (VER)",
      description: "[EN] What the owner gets from each pillar.",
      badge: "[EN] VER",
    },
    problems: {
      title: "[EN] When a pillar is broken",
      description: "[EN] Symptoms in each direction when the system fails.",
      badge: "[EN] Risks",
    },
    actions: {
      title: "[EN] What BBI does",
      description: "[EN] How we build the system in each pillar.",
      badge: "[EN] BBI",
    },
    format: {
      title: "[EN] Format",
      description:
        "[EN] BBI is not about tasks or hours. We work as a project for 45+ business days with full immersion.",
      zones: [
        {
          label: "[EN] Green zone (this is BBI)",
          description:
            "[EN] Screening → diagnosis / audit → 45+ day project → retainer role.",
          tone: "green",
        },
        {
          label: "[EN] Yellow zone (allowed as part of the project)",
          description:
            "[EN] SMM, website, CRM — only as elements of the built system.",
          tone: "yellow",
        },
        {
          label: "[EN] Red zone (we do not do this)",
          description:
            "[EN] SMM outsourcing, marketing-as-a-service, brandbook as a service, one-off consulting.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "[EN] Project stages",
      description: "[EN] How the system is built step by step.",
      steps: [
        {
          title: "[EN] Screening (free)",
          description: "[EN] Fit check and problem framing.",
        },
        {
          title: "[EN] Diagnosis / audit",
          description:
            "[EN] Full picture: finance, processes, team, marketing, sales.",
        },
        {
          title: "[EN] System design",
          description:
            "[EN] Architecture of shield, leverage, and the management contour.",
        },
        {
          title: "[EN] Implementation & control (45–90 business days)",
          description:
            "[EN] BBI works inside the business until the system stabilizes.",
        },
        {
          title: "[EN] Retainer role",
          description:
            "[EN] BBI stays as a partner to maintain resilience.",
        },
      ],
    },
    responsibility: {
      title: "[EN] Responsibility",
      bbiTitle: "[EN] BBI is responsible for",
      clientTitle: "[EN] Client is responsible for",
      bbi: [
        "[EN] Management architecture and system",
        "[EN] Asset protection and ownership",
        "[EN] Standards and reproducibility (SOP, playbook, RACI)",
        "[EN] Financial transparency and decision logic",
        "[EN] Change management",
      ],
      client: [
        "[EN] Involvement (up to 10 h/week) and fast decisions",
        "[EN] Transparency and access to data",
        "[EN] Responsible owners for 6 pillars",
        "[EN] Execution inside the business by the client team",
        "[EN] Governance rhythm and discipline",
      ],
    },
    targetState: {
      title: "[EN] Target State",
      minimumTitle: "[EN] Target Minimum (45–90 business days)",
      minimumDescription:
        "[EN] Threat control, single source of truth, system works without the owner.",
      idealTitle: "[EN] Target Ideal (benchmark)",
      idealDescription:
        "[EN] The business is stable, protected, and grows reproducibly, ready for investment.",
    },
    cta: {
      title: "[EN] Start with screening",
      description: "[EN] Free and no obligations.",
      form: {
        name: "[EN] Name",
        phone: "[EN] Phone",
        message: "[EN] Short brief",
        submit: "[EN] Book a screening",
      },
    },
  },
  pillarsPage: {
    title: "[EN] 6 pillars of BBI",
    description:
      "[EN] Six support points that build a resilient and protected business asset.",
    ctaLabel: "[EN] Start with screening",
    ctaDescription: "[EN] We’ll map your gaps in 30 minutes.",
  },
  home: {
    hero: {
      eyebrow: "[EN] Brand Promise",
      title: "[EN] Shield. Leverage. System. for your business",
      subtitle:
        "[EN] BBI is an operating partner for owners and CEOs. We enter the business, surface real issues, and build systems that run without manual control.",
      cta: "[EN] Start with diagnostics",
      secondaryCta: "[EN] Learn more",
    },
    icp: {
      title: "[EN] Is this you?",
      cards: [
        {
          title: "[EN] The business grows, but you put out fires",
          description:
            "[EN] We build operating rhythm and roles so the owner can stop micromanaging.",
          linkLabel: "[EN] Learn more",
          href: "/icp/operations",
        },
        {
          title: "[EN] Scaling chaos means scaling losses",
          description:
            "[EN] We remove bottlenecks, stabilize processes, and lock in growth levers.",
          linkLabel: "[EN] Learn more",
          href: "/icp/scale",
        },
        {
          title: "[EN] Investors need an asset, not the owner’s brain",
          description:
            "[EN] We make the company predictable and transparent for valuation.",
          linkLabel: "[EN] Learn more",
          href: "/icp/investor",
        },
      ],
    },
    process: {
      title: "[EN] How we work",
      stepLabel: "[EN] Step",
      steps: [
        {
          title: "[EN] Screening — do we fit",
          description:
            "[EN] A fast diagnostic session to gauge chaos, team readiness, and growth potential.",
        },
        {
          title: "[EN] Diagnosis / Audit — reveal the real picture",
          description:
            "[EN] We analyze operations, finance, sales, and team to find constraints and growth points.",
        },
        {
          title: "[EN] Project (45–90 working days) — build the system",
          description:
            "[EN] We join as an operating team, implement changes daily, and train your team.",
        },
      ],
    },
    pillars: {
      title: "[EN] Shield. Leverage. Resilience.",
      items: [
        {
          title: "[EN] Shield",
          description:
            "[EN] Asset protection, ownership, legal armor, and transparent finances.",
          linkLabel: "[EN] Learn more",
          href: "/pillars/shield",
        },
        {
          title: "[EN] Leverage",
          description:
            "[EN] Operating cadence, full-funnel analytics, sales system without stars.",
          linkLabel: "[EN] Learn more",
          href: "/pillars/leverage",
        },
        {
          title: "[EN] System",
          description:
            "[EN] Roles fixed, processes standardized, people changes do not break the system.",
          linkLabel: "[EN] Learn more",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "[EN] BBI is not a neutral contractor",
      description:
        "[EN] We take the owner’s side. We speak hard truth, surface vulnerabilities, and fix them systematically.",
    },
  },
  about: {
    who: {
      title: "[EN] Who we are",
      text:
        "[EN] BBI (Bold Brands International) is an Operating Partner (RevOps). We enter the business, surface real issues, and build systems. Not a marketing agency. Not consulting with pretty slides. Not a neutral contractor that leaves after delivery.",
      emphasis:
        "[EN] Key point: BBI is on the owner’s side, not a contractor. There is no neutral position.",
    },
    principles: {
      title: "[EN] Key beliefs",
      items: [
        { text: "[EN] We stand with owners and CEOs who carry full responsibility." },
        { text: "[EN] We choose an honest view of the business, even if painful." },
        { text: "[EN] System matters more than talent." },
        { text: "[EN] Personal experience. We know threats firsthand." },
      ],
    },
    manifesto: {
      title: "[EN] What we stand against",
      items: [
        { text: "[EN] We are against empty hype." },
        { text: "[EN] We are against “services” instead of a system." },
        { text: "[EN] We are against dependency on people." },
        { text: "[EN] We are against opacity." },
        { text: "[EN] We are against firefighting." },
      ],
    },
    team: {
      title: "[EN] Team",
      members: [
        {
          name: "[EN] First Last",
          role: "[EN] CEO",
          note: "[EN] Builds business protection as a system, not services.",
        },
        {
          name: "[EN] First Last",
          role: "[EN] Operating Partner",
          note: "[EN] Leads transformation with accountability for outcomes.",
        },
        {
          name: "[EN] First Last",
          role: "[EN] RevOps Specialist",
          note: "[EN] Sets operational rhythm, analytics, and control.",
        },
        {
          name: "[EN] First Last",
          role: "[EN] RevOps Specialist",
          note: "[EN] Builds sales systems where results beat charisma.",
        },
      ],
    },
    cta: {
      title: "[EN] Want to see if we fit?",
      description: "[EN] Book a screening and we’ll map your gaps and growth.",
      form: {
        name: "[EN] Name",
        phone: "[EN] Phone",
        message: "[EN] Short brief",
        submit: "[EN] Book a screening",
      },
    },
  },
  footer: {
    copyright: "[EN] BBI (Bold Brands International). All rights reserved.",
  },
};
