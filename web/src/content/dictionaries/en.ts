import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About BBI", href: "/about" },
      { label: "How we work", href: "/work" },
      { label: "Cases", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Contacts", href: "/contacts" },
    ],
    cta: "Start",
  },
  work: {
    breadcrumb: "How we work",
    hero: {
      eyebrow: "Operating Partner Model",
      title: "6 pillars: one system, not a bundle of services",
      description:
        "We don’t sell operations separately from marketing, or marketing separately from finance. Business is a system. A hole in one pillar collapses the rest. BBI enters all six and builds a single management contour.",
      ctaLabel: "6 PILLARS OF BBI",
    },
    scheme: {
      centerLabel: "Business",
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
        title: "Operational efficiency",
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
          "The business no longer depends on the owner being present. Every process runs by the rules — no matter who is in the office today.",
        resultExpanded: {
          whatWeBuild:
            "Management cadence, SOPs, org chart, RACI, and KPI dashboards. Every owner is assigned; every metric is visible in real time.",
          partnerOutcomes: [
            "The owner spends up to ~10 hours per week on operations instead of constant hands-on control",
            "The business keeps running when a key person is on leave or has left",
            "Decisions follow a protocol — not a call to the owner",
            "Growth scales by design instead of creating a new layer of chaos",
          ],
        },
        broken:
          "Firefighting, chaos, manual control, and dependency on people.",
        actions:
          "We build management architecture: who owns what, how decisions are made, and how execution is controlled. The business runs on rhythm and rules — not mood.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "Org chart with responsibility zones and decision hierarchy",
                "SOPs for key processes",
                "RACI matrix: owner, executor, approver — per process",
                "Management meeting system (cadence): format, participants, cadence, minutes",
              ],
            },
            {
              title: "Metrics & dashboards",
              items: [
                "KPI dashboard: business state on one screen — without manual data collection",
                "Execution control metrics: plan vs. actual on key indicators",
                "Escalation points: when and to whom issues rise — without calling the owner",
              ],
            },
            {
              title: "Also",
              items: [
                "New hire adaptation checklists",
                "Management cadence playbook the team can sustain on its own",
              ],
            },
          ],
        },
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
          "You know the cost of a lead and a client, which channel works — and who owns every account and dataset.",
        resultExpanded: {
          whatWeBuild:
            "End-to-end analytics from first touch to payment, channel audit, acquisition economics, and transferring ownership of all ad accounts and databases to the company.",
          partnerOutcomes: [
            "All access and databases stay with the company — changing an agency does not erase history",
            "A clear picture of which channel earns, which spends, and why",
            "Marketing budget is allocated from data, not gut feel",
            "Lead flow is manageable and forecastable — without a “star” contractor",
          ],
        },
        broken:
          "Budget leakage, no forecasts, and weak effectiveness control.",
        actions:
          "We set up end-to-end analytics, transfer ownership of all accounts and databases, and build a model where every penny ties to outcomes.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "Acquisition channel map with economics: lead cost, CPL, customer cost",
                "Current channel audit: what works, what burns budget — with numbers",
                "Marketing budget allocation model by channels and goals",
                "Playbook for managing ad accounts on the company side",
              ],
            },
            {
              title: "Metrics & dashboards",
              items: [
                "End-to-end analytics dashboard: first touch to payment",
                "Funnel metrics per channel: impressions → leads → qualification → sale",
                "LTV and ROI by customer segments",
              ],
            },
            {
              title: "Also",
              items: [
                "All accounts, databases, and access transferred to the company — documented",
                "Regulation for agencies and contractors: who owns what",
              ],
            },
          ],
        },
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
          "Sales rest on a system, not on two star managers. Results are repeatable and predictable.",
        resultExpanded: {
          whatWeBuild:
            "Scripts, lead-handling standards, CRM control, qualification funnel, and onboarding for new managers.",
          partnerOutcomes: [
            "Sales do not stop when a key manager leaves",
            "A new hire reaches plan-level performance in 2–4 weeks",
            "The owner sees the funnel in real time — without chasing reports",
            "Revenue is predictable: plan vs. actual aligns — not “whatever this month brings”",
          ],
        },
        broken:
          "Dependence on stars and drops when people leave.",
        actions:
          "We build a system where results do not depend on “stars.” Any new manager reaches plan-level performance in 2–4 weeks — by playbook, not by gut feel.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "Sales scripts for each funnel stage and client type",
                "Lead handling regulation: first touch to closed deal",
                "CRM architecture: funnel structure, statuses, fields, automations",
                "New manager onboarding: reach results in 2–4 weeks",
              ],
            },
            {
              title: "Metrics & dashboards",
              items: [
                "Live sales funnel: conversion at each stage",
                "Manager KPIs: plan vs. actual on revenue, deals, conversion",
                "“Lost leads” metric: where and why clients drop off",
              ],
            },
            {
              title: "Also",
              items: [
                "Manager training and certification system",
                "Quality control regulation for calls and chats",
              ],
            },
          ],
        },
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
          "The owner sees real profit, not rough estimates. Decisions are data-driven, not feelings-driven.",
        resultExpanded: {
          whatWeBuild:
            "Management accounting, plan vs. actual, payment calendar, P&L by line of business, and surfacing hidden financial leaks.",
          partnerOutcomes: [
            "“Where is my money?” — answered in minutes, not days",
            "Decisions are based on data, not intuition",
            "Financial holes and hidden leaks are found and closed",
            "The business is ready for investors or banks: numbers are clear and defensible",
          ],
        },
        broken:
          "No single source of truth, cash gaps, blind spots.",
        actions:
          "We set up management accounting and a financial model. The owner sees real profit, cash movement, and cash gaps — early, not after the fact.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "Management P&L by business lines",
                "Cash flow (CF) statement: real picture by period",
                "Payment calendar: cash gaps visible 2–4 weeks ahead",
                "Financial model: breakeven, margin, unit economics",
              ],
            },
            {
              title: "Metrics & dashboards",
              items: [
                "Finance dashboard: revenue, profit, margin, expenses — one screen",
                "Line-of-business view: what earns, what drags profit down",
                "Plan vs. actual on all key financial metrics",
              ],
            },
            {
              title: "Also",
              items: [
                "Report on found financial leaks and how to close them",
                "Finance regulations: who approves what spend, when",
              ],
            },
          ],
        },
      },
      {
        key: "hr",
        title: "HR & team",
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
          "The team is stable: roles are fixed, expertise lives in the system — not in people. Someone leaving is not a disaster.",
        resultExpanded: {
          whatWeBuild:
            "Role profiles, hiring system, onboarding program, performance reviews, and bench coverage for critical functions.",
          partnerOutcomes: [
            "Any departure is a planned handover — not a function collapse",
            "Hiring follows a standard: we take the right people, not “whoever showed up”",
            "New hires plug into the system — they do not break it",
            "Expertise is stored in processes and policies — not in two people’s heads",
          ],
        },
        broken:
          "Turnover, chaotic hiring, dependence on key people.",
        actions:
          "We build HR processes from hiring to evaluation. Expertise lives in the system — not in people. A departure no longer breaks the function.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "Role profiles for key roles: competencies, KPIs, ownership zones",
                "Hiring funnel with evaluation criteria and selection method",
                "Onboarding program: first 30–90 days with checklists and control points",
                "Performance system: outcome metrics and regular reviews",
              ],
            },
            {
              title: "Metrics & dashboards",
              items: [
                "HR dashboard: turnover, time-to-performance, team NPS",
                "Talent bench map: who is ready to grow into which roles",
                "Succession matrix for critical functions",
              ],
            },
            {
              title: "Also",
              items: [
                "Offboarding regulation: handover of tasks, access, and knowledge by protocol",
                "Company knowledge base: expertise captured inside the system",
              ],
            },
          ],
        },
      },
      {
        key: "legal",
        title: "Asset protection",
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
          "Assets, data, and rights belong to the company — legally and technically. Not to individuals or contractors.",
        resultExpanded: {
          whatWeBuild:
            "NDAs, employment agreements, contractor agreements, IP protection, and a legal audit of existing gaps.",
          partnerOutcomes: [
            "Key assets — databases, access, IP, brand — legally belong to the company",
            "An employee or contractor leaving does not threaten the business",
            "Protected against data theft, “irreplaceable” extortion, and loss of client bases",
            "Legal setup is ready for scrutiny from investors, banks, or partners",
          ],
        },
        broken:
          "Lawsuit risks, data leaks, and asset vulnerabilities.",
        actions:
          "We close legal gaps and build a protective perimeter: rights to assets, data, and IP — with the company, not with people and contractors.",
        actionsExpanded: {
          partnerHeading: "What the partner receives:",
          sections: [
            {
              title: "Documents & tools",
              items: [
                "NDAs and confidentiality templates for employees, partners, and contractors",
                "Employment agreements protecting trade secrets and work results",
                "Contractor agreements: rights to deliverables, content, and data — on the company side",
                "Data storage and access regulation: who accesses what, under what terms",
              ],
            },
            {
              title: "Audit & risk maps",
              items: [
                "Legal audit: vulnerability map with closure priorities",
                "Company asset register: what is formalized, what is not, what to fix",
                "IP protection checklist: brand, product, content — formalized as assets",
              ],
            },
            {
              title: "Also",
              items: [
                "Access handover regulation when a contractor changes or an employee leaves",
                "Document pack ready for investor, bank, or partner due diligence",
              ],
            },
          ],
        },
      },
    ],
    results: {
      title: "Valuable end result (VER)",
      description: "What the owner gets from each pillar.",
      badge: "",
      resultModalWhatWeBuild: "What we build",
      resultModalPartnerLabel: "What stays with the partner",
      resultModalCloseLabel: "Close",
    },
    problems: {
      title: "When a pillar is broken",
      description: "Symptoms in each direction when the system fails.",
      badge: "Risks",
    },
    actions: {
      title: "What BBI does concretely in your business",
      description:
        "We don’t give recommendations and leave after diagnostics. Across all six directions we build, implement, and hand over concrete tools — everything stays with the partner after the project.",
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
      title: "We build a business that works not chaotically, but as a manageable and scalable system",
      subtitle:
        "Operating partner for owners and CEOs in Central Asia: we diagnose failure points, design business architecture and implement it together with your team.",
      cta: "Start with diagnostics",
      secondaryCta: "View cases",
      secondaryCtaHref: "/cases",
    },
    icpIntro: {
      eyebrow: "Target audience",
      title: "For whom we work",
      segments: [
        {
          title: "Your business is growing, but you're the busiest person in the company — and the most expensive executor.",
          description: "The system isn't built — the business depends on your presence.",
          details:
            "Not because you manage poorly. Because the system isn't built: decisions loop through you, the team waits for orders instead of acting on protocol. No real weekends. Vacation is phone work in another time zone. Strategy waits for «after the fires» — and the fires don't stop.\n\nReports exist. Numbers exist. Truth doesn't. Sales say one thing, finance another, marketing a third. You decide without knowing which data to trust. Revenue grows. The feeling of control — doesn't.\n\nAs long as you hold it all on yourself, the business doesn't belong to you. It belongs to your presence.",
          pain: "You're not running the business. You're its bottleneck.",
        },
        {
          title: "You scaled the business. Revenue grew. The team grew. So did the problems.",
          description: "Without an operating model you scale losses, not efficiency.",
          details:
            "Eighty people behave like eight: each department in its own reality, no standards, managers build their own «states». You opened a second office and got a second source of chaos: revenue grows but profit «disappears somewhere». Margin falls — for no clear reason. Because without an operating model, scaling isn't growth. It's copying losses.\n\nNo SOP — no standard. No RACI — no clear ownership. No unified metrics — no management. There's only the illusion of growth and a sharply higher load on the owner.",
          pain: "Chaos doesn't scale — or you scale losses.",
        },
        {
          title: "You know the business inside out. The investor doesn't — and that's the problem.",
          description: "A deal needs manageability on paper, not «potential in your head».",
          details:
            "Due diligence doesn't care about your intuition or operating experience. It surfaces holes in accounting, missing rights to assets, opaque processes. «Business in the owner's head» isn't an asset. It's a red flag that pushes valuation down.\n\nNo single financial truth — no basis for the multiple. No ownership of databases, IP, and logins — no guarantees for the buyer. No management structure — no confidence the business survives without you.\n\nThe investor isn't buying your potential. They're buying manageability, transparency, and predictability. If it's not on paper — they either walk away or pay less.",
          pain: "Your business works. But until it's structured as an asset — it's worth less than it should be.",
        },
      ],
      exclude: "Business under 5 years, startups in PMF, one-off consulting, agency services. Or expecting «guarantee growth» without readiness to change the system.",
      excludeLabel: "Not for",
    },
    icp: {
      eyebrow: "Question",
      title: "Is this you?",
      subtitle: "Three typical scenarios. If you recognize yourself — below we explain exactly how we help.",
      cards: [
        {
          title: "You're not running the business. You're its bottleneck.",
          description:
            "Every day you're the final call on everything: from a client discount to a conflict in a department. The company can't decide without you — not on numbers, not on policies. CRM and reports exist on paper, but there's no single source of truth — sales, marketing, and finance live in silos. Instead of a management architecture, you're the 24/7 ops manager.",
          linkLabel: "Learn more",
          href: "/icp/operations",
          modalLead:
            "That's the reality for 80% of business owners. You have to dive into operations, personally watch deals and sales, and build departments. A business that depends on you isn't an asset — it's a cage.",
          symptoms: [
            "You dive into operations, watch deals and sales yourself, and build out teams. A business that depends on you isn't an asset — it's a cage.",
            "Nothing gets decided without your «yes». That's not management. It's an operational swamp.",
            "Without you the business burns. Turn off your phone for three hours — things break: deals slip, mistakes multiply.",
            "You're on 24/7: fires in finance, wrangling contractors… You no longer build strategy, grow, or scale.",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Company age: 5+ years",
            "Scale: $30k–250k/mo",
            "Headcount: 15–80 employees",
            "Stage: growth without manageability",
            "Business type: B2B, B2B/B2C — with a sales function and operations",
          ],
          partnershipResultsLabel: "Partnership outcomes:",
          partnershipResults: [
            "Manageability",
            "Transparency",
            "Ownership of assets",
            "One picture of the numbers",
            "Cadence — management rhythm",
            "Less manual control",
          ],
        },
        {
          title: "Chaos doesn't scale — or you scale losses.",
          description:
            "Company growth doesn't convert into manageability and margin. The team expands, new functions and layers appear, but there's no shared operating envelope. People work in silos like separate teams; each department relies on its own data and view of the goal. You end up scaling not efficiency, but chaos, overspend, and losses.",
          linkLabel: "Learn more",
          href: "/icp/scale",
          modalLead:
            "Without standards and RACI, scaling becomes copying chaos. There's no unified management contour.\n\nDepartments make decisions in different realities, reports contradict each other, and managing profit and quality from one place becomes impossible.",
          symptoms: [
            "You scale existing chaos instead of an operating model",
            "Eighty people repeat the same mistakes in different places",
            "Managers pull the blanket: everyone builds «their empire»",
            "Departments decide in different management logics",
            "Growth paradox: revenue is higher, yet sense of control and actual profit are lower than at a smaller scale",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Age: 5+ years",
            "Scale: $80k–500k/mo",
            "Headcount: 40–200 employees",
            "Stage: scaling (2nd office / branch / new directions / team growth)",
            "Management: the owner already tried to «delegate», but the system didn't stick",
          ],
          partnershipResultsLabel: "Partnership outcomes:",
          partnershipResults: [
            "Scaling operating model",
            "Standards",
            "Single source of truth for metrics",
            "SOP — step-by-step instructions for a specific task",
            "RACI — responsibility assignment matrix",
            "Unified KPIs",
            "Manageable structure",
            "Stable quality",
          ],
        },
        {
          title: "If the business isn't structured as an asset — it's worth less than it should be.",
          description:
            "You know the company through intuition and detail, but that's not what an investor buys. They need a clear, manageable contour — not the owner's verbal explanation. Any due diligence quickly exposes gaps in accounting, contracts, and processes. Until there's a single financial truth, a risk map, and an investor pack, it's almost impossible to justify the valuation and deal terms you want.",
          linkLabel: "Learn more",
          href: "/icp/investor",
          modalLead:
            "Today most of what you know about the company, risks, and customers lives in you and a few key people. For an investor that's a signal: the asset isn't packaged, risks aren't managed, and the system isn't fixed on paper.\n\nUntil there's an investor pack, a risk map, a single financial truth, and clearly documented ownership, any investment conversation starts from a weak position.",
          symptoms: [
            "When preparing for a deal, numbers, contracts, and asset rights turn out scattered across systems and people",
            "Valuation rests on the owner's expectations, not transparent economics: no structured P&L and no single «truth» on margin",
            "The operating model isn't on paper: dependence on the owner and a «hero team» reads to investors as a red flag",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Age: 5+ years",
            "Scale: $150k–1M+/mo",
            "Headcount: 80–500+ employees (what matters is maturity of the task, not size alone)",
            "Stage: preparing for investment / partnership / M&A / credit / major contract",
            "Management: operations exist, but there's no «shop window» — unclear where the money is, where risks are, and who owns what",
          ],
          partnershipResultsLabel: "Partnership outcomes:",
          partnershipResults: [
            "Business as an asset: transparency, protection, managed risks",
            "Single financial truth",
            "Closed vulnerabilities",
            "Investor pack",
            "Ownership + cadence",
          ],
        },
      ],
      ctaLabel: "Discuss your situation",
      modal: {
        scenarioLabel: "Scenario breakdown",
        signsLabel: "Typical signs",
        solutionLabel: "What can be done",
      },
    },
    icpBridge: {
      label: "Answer",
      title: "How do we help?",
      description:
        "We design the target state, immerse in your reality, build the architecture and implement it with you. Not slides «to take away» — work inside the business.",
      highlightPhrase: "work inside the business",
      items: [
        "Diagnose real failure points — finance, processes, sales, team",
        "Design target state for your scale and ambitions",
        "Implement the system in 45–90 days — we do it ourselves, not recommend",
        "Hand over control to your team, stay as partner for resilience",
      ],
      ctaLabel: "Discuss your task",
    },
    whatWeChange: {
      eyebrow: "Our 6 pillars",
      title: "What exactly we change in your business",
      pillars: [
        {
          title: "Operational efficiency",
          subtitle: "Goal: the owner exits manual management",
          items: [
            "Management cadence: meeting system, check-ins, control points",
            "SOPs and org chart: every process described, every owner assigned",
            "Dashboards and KPI panels: the owner sees business health in 5 minutes",
            "Adaptation checklists: a new hire doesn’t break the system",
          ],
        },
        {
          title: "Marketing",
          subtitle: "Goal: every penny you put in is tied to a measurable result",
          items: [
            "Full-funnel analytics: touch to payment — every channel visible",
            "Channel audit: what actually works vs. what burns budget",
            "Ownership of databases, ad accounts, and logins — with the company, not the contractor",
            "A manageable marketing system: not dependent on a single vendor",
          ],
        },
        {
          title: "Sales",
          subtitle: "Goal: the system sells — not individual «stars»",
          items: [
            "Scripts and communication playbooks: results don’t depend on one person’s talent",
            "Building a sales team from scratch or rebuilding an existing one",
            "CRM control: no lost leads, no deals left hanging",
            "Funnel and inbound handling: systematic, not manual",
          ],
        },
        {
          title: "Finance",
          subtitle: "Goal: an honest answer to «Where is my money?»",
          items: [
            "Management accounting: the real economics of the business",
            "Surfacing financial holes, hidden leaks, and theft schemes",
            "Payment calendar: cash gaps visible in advance — not after the fact",
            "Accounting by line of business: which ones earn and which drag you down",
          ],
        },
        {
          title: "HR and team",
          subtitle: "Goal: a reproducible team — one person leaving doesn’t break the system",
          items: [
            "Role profiles and systemic hiring: we hire the right people, not random ones",
            "Onboarding program: a new hire reaches output fast",
            "Evaluation and HR analytics: clear who pulls weight, who holds steady, who drags",
            "Talent bench and succession: critical roles always covered",
          ],
        },
        {
          title: "Legal protection",
          subtitle: "Goal: assets belong to the company — technically and legally",
          items: [
            "NDAs and confidentiality agreements: data and IP protected at the gate",
            "Employment contracts and job descriptions: rights and duties on paper",
            "Personal data consent and contractor agreements",
            "Legal audit: vulnerabilities found, closed, and documented",
          ],
        },
      ],
    },
    whatYouGet: {
      eyebrow: "Outcome",
      title: "What you get from working with us",
      items: [
        "Business runs without you 24/7 — autonomous and protected asset",
        "No one is irreplaceable — system is reproducible, one person's exit isn't a stop",
        "You manage through numbers and rhythm (up to 10 hrs/week), not in operations",
        "Leads, sales and margin manageable — not «hope it works»",
        "Growth is controlled and reproducible",
        "Phased: first critical risks, then standards",
      ],
    },
    process: {
      eyebrow: "Approach",
      title: "How we work",
      approaches: [
        {
          title: "Design",
          description:
            "Define target state and architecture. Not «best practice» — what your business needs.",
        },
        {
          title: "Immerse",
          description:
            "Analyze processes, finance, sales and team. Find bottlenecks and real causes of failures.",
        },
        {
          title: "Build the architecture",
          description:
            "Rhythm, regulations, dashboards, accountability — one system, not scattered «improvements».",
        },
        {
          title: "Implement",
          description:
            "Implement daily, train the team, hand over control. Stay as a partner for resilience.",
        },
      ],
      ctaLabel: "Book a diagnosis",
    },
    whyBbi: {
      eyebrow: "Differentiation",
      title: "Why BBI",
      items: [
        { label: "Not an agency", text: "We don't sell hands and hours. We build systems. Our competitor is chaos and unmanageability, not other contractors." },
        { label: "Not consulting", text: "We don't recommend «to take away». We implement and control ourselves. We stay inside until systems stabilize." },
        { label: "Not autopilot", text: "You need involvement up to 10 hrs/week. Management through numbers — not your disappearance." },
        { label: "Not CEO replacement", text: "We build business autonomy, not dependence on us." },
        { label: "Not «x10 in 30 days»", text: "Growth is controlled and reproducible — system, not magic." },
        { label: "Operating partner", text: "Six directions into one system, on the owner's side." },
      ],
    },
    casesBlog: {
      title: "Cases & Blog",
      casesTitle: "Cases",
      blogTitle: "Blog",
      casesLabel: "All cases",
      blogLabel: "All articles",
      readMore: "Read more",
      ctaLabel: "Discuss your case",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How long does a project take?", a: "Screening is free. Then: diagnosis → project from 45 business days → retainer support. Exact duration depends on scale." },
        { q: "Do you work remotely?", a: "Yes, with regular on-site visits. Process immersion requires presence." },
        { q: "Does a small business fit?", a: "We focus on turnover from $30k/mo and teams of 15+. Business under 5 years or startup in PMF — usually no." },
        { q: "How do you differ from agencies and consultants?", a: "We don't sell hours (agency) or recommend «to take away» (consulting). We implement ourselves and stay until systems stabilize." },
        { q: "When do you refuse?", a: "Owner is not involved. No data access. Agency model needed. Business under 5 years or startup. Expecting «guarantee growth» without readiness to change the system." },
      ],
    },
    finalCta: {
      title: "Business grows — manageability lags? Start with a diagnosis",
      ctaLabel: "Start with diagnosis",
      subtitle: "Understand real failure points, not treat symptoms",
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
    heroNav: {
      prev: "Previous screen",
      next: "Next screen",
      pagesGroup: "Panel pages",
    },
    heroPages: [
      {
        title: "Bold Brands International",
        body:
          "Operating Partner for owners and CEOs. We turn scattered practices into one coherent system: a management loop, financial truth, and protected assets you can lean on for growth.",
      },
      {
        title: "Shield, Leverage, System",
        body:
          "We build the Shield (ownership and asset protection), Leverage (operating system, sales, analytics), and System (management rhythm, standards, RACI) so the business runs on a mechanism, not on “heroes.”",
      },
      {
        title: "The owner’s partner through growth stages",
        body:
          "Our job is to make the business read as a manageable asset: one financial picture, secured rights to key assets, and a system.",
      },
    ],
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
        {
          title: "We stand with the owner and the CEO",
          body:
            "Not a neutral position “between everyone.” We stand with the person who carries real risk—financial, reputational, operational. Their interests drive every decision we make.",
        },
        {
          title: "We stand for an honest view of the business—even when it’s uncomfortable",
          body:
            "Calling problems by their names isn’t harshness—it’s respect. We show where the business really loses money, control, and value. A comfortable illusion costs more than hard truth—in money and time.",
        },
        {
          title: "The system always matters more than talent",
          body:
            "“Irreplaceable” people are risk dressed up as value. We build models where expertise lives in processes and company standards, not in one person’s head. Anyone leaving is a planned handover, not a catastrophe.",
        },
        {
          title: "We know threats from the inside—not from textbooks",
          body:
            "The situations we work with—database theft, extortion by “irreplaceables,” opaque finance schemes, agency dependency—we’ve unpacked in real businesses and faced ourselves. This isn’t theory. It’s practice we can recognize and close before it does damage.",
        },
      ],
    },
    manifesto: {
      title: "What we stand against",
      items: [
        {
          title: "Against empty promises.",
          body:
            "Recommendations, strategies, and pretty decks that never get implemented are an illusion of work. We take responsibility for changes becoming real practice, not files archived for history.",
        },
        {
          title: "Against “services” instead of a system.",
          body:
            "One-off actions with no links between them create local effect and do not change business architecture. We do not just close tasks - we build a management loop where tasks are solved systematically and repeatably.",
        },
        {
          title: "Against dependency on people.",
          body:
            "A business held by two or three key people is not an asset but a vulnerability. Losing one can stop a function or damage client relationships. We build systems that work independently of specific personalities.",
        },
        {
          title: "Against opacity.",
          body:
            "Hidden arrangements, gray finance schemes, and databases or accesses kept by contractors all reduce business value and create risks the owner learns about last. Transparency is not optional - it is a baseline for a manageable business.",
        },
        {
          title: "Against firefighting mode.",
          body:
            "Constant urgent mode leaves no capacity for systemic change. We do not come to survive the next crisis - we come so crises stop being the normal way of working.",
        },
        {
          title: "Against doing the owner's work for them.",
          body:
            "We are not a team replacement and not an external CEO. Our task is to build and transfer a system so the business remains fully independent after we leave. Dependency on BBI after project completion = 0.",
        },
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
    copyright: "© 2024 BBI (Bold Brands International). All rights reserved.",
    tagline: "Bold Brands International — your reliable operational partner.",
    aboutTitle: "About company",
    aboutLinks: [
      { label: "How we work", href: "/work" },
      { label: "Cases", href: "/cases" },
      { label: "Blog", href: "/blog" },
    ],
    socialTitle: "Find us",
    locations: [
      {
        city: "Bishkek",
        address: "Matrosova st., 102",
        phone: "+996 999 99 22 44",
        email: "office.kg@boldbrands.pro",
        socials: {
          instagram: "https://www.instagram.com/boldbrands.international/",
          facebook: "https://www.facebook.com/boldbrands.kg",
          whatsapp: "https://wa.me/996999992244",
        },
      },
      {
        city: "Tashkent",
        address: "Yashnobod district, Yangibozor 1/4",
        phone: "+998 90 054 34 45",
        email: "office.uz@boldbrands.pro",
        socials: {
          instagram: "https://www.instagram.com/boldbrands.uz/",
          facebook: "https://www.facebook.com/profile.php?id=61571120907112&locale=ru_RU",
          telegram: "https://t.me/boldbrandsuz",
        },
      },
    ],
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    workingHoursLabel: "Working hours",
    workingHours: "Mon-Fri: 09:00-18:00",
    privacyLabel: "Privacy policy",
    privacyHref: "/privacy",
  },
  cases: {
    hero: {
      eyebrow: "Real results",
      title: "Cases: systems approach in action",
      description:
        "We show not «we launched ads» but how we built protection, levers and system. Context, problem, BBI action and measurable result.",
      heroImage: "/brand/cases-war-room-hero.png",
    },
    list: {
      sectionTitle: "Relevant cases",
      sectionEyebrow: "Case navigation",
      sectionSubtitle: "Choose a case that fits your context",
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
      infographicForecast: "Before",
      infographicResult: "Result",
      infographicTitle: "Results in numbers",
    },
    items: [
      {
        slug: "med-lab-sla",
        headerImage: "/brand/case-med-lab-header.png",
        company: "Medical laboratory (NDA)",
        industry: "Healthcare services",
        keyResult: "SLA 87%, base reactivation 34%, conversion +21%",
        excerpt: "How to tell systemic error from one-off: we redesigned the commercial block, separated roles — got a managed funnel and predictable pipeline.",
        seoTitle: "Systemic error in sales: lab case — SLA 87%, 34% base reactivation",
        metaDescription:
          "How to tell systemic from one-off: lab case — SLA 87%, order frequency +23%, 34% base reactivation and predictable pipeline.",
        keywords: [
          "medical lab case study",
          "SLA in sales",
          "CRM and SLA",
          "managed sales funnel",
          "systemic error in sales",
          "lead conversion growth",
          "revenue pipeline",
          "leads lost",
          "sales vs marketing",
          "client base reactivation",
          "order frequency growth",
          "LTV growth",
          "SLA control in CRM",
          "commercial block building",
        ],
        h1: "Medical lab case: how to tell systemic error from one-off — and restore revenue control",
        tags: ["Sales", "CRM & SLA", "Operations"],
        industryFilter: "services",
        directionFilter: "sales",
        scaleFilter: "mid",
        context:
          "Medical laboratory. CRM set up, SLA defined, ad campaigns running. But when analyzing effectiveness, most leads were «lost», funnel was unmanaged. Managers said: «marketing brought wrong leads, they're cold». Audit showed: SLA not followed, backlogs accumulating, manager ignored overdue alerts. 31% of leads were trigger requests with contacts (workable and worth working). 59% got only auto-reply — no one followed up. The problem wasn't «lead quality», but that lead handling as a process didn't exist.",
        problem:
          "Systemic error in role assignment: people in sales roles were actually doing admin — taking requests from existing clients, passing to execution, tracking status. Coordinator/admin role, not sales. Admin is reactive: handle the flow, close urgent. Sales is proactive: drive dialogue, bring back to contact, handle objections. Under operational load, admin always picks «urgent», sales gets «leftovers». Not a motivation issue, but an architecture-of-functions issue.",
        whatBbiDid: [
          "Separated functions and assigned measurable outcome to each role — instead of «pushing» people.",
          "Shifted commercial block from «passive order waiting» to revenue management: expansion (new clients) + LTV maximization (base development).",
          "Introduced roles: Hunter (new clients), Farmer (order frequency, retention, reactivation), KAM (key accounts), Administrators (operations without substituting sales).",
          "Made each role «single-outcome» — removed blending where sales got eaten by production firefighting.",
        ],
        resultNumbers: [
          { before: "SLA not met, backlogs normal", after: "SLA 87%", beforeValue: 15, afterValue: 87, label: "SLA" },
          { before: "Conversion: leads dying on auto-replies", after: "+21%", beforeValue: 5, afterValue: 26, label: "Conversion" },
          { before: "Order frequency without base-owning role", after: "+23% first month", beforeValue: 10, afterValue: 33, label: "Order frequency" },
          { before: "Dormant base 4–6 mo. with no returns", after: "34% reactivated", beforeValue: 0, afterValue: 34, label: "Base reactivation" },
        ],
        artifacts: [
          "Hunter / Farmer / KAM / Admin role structure",
          "SLA control in CRM",
          "Lead handling playbooks",
          "Base reactivation process",
        ],
        bbiRole:
          "Separated systemic from one-off. Instead of «punish/train/tighten KPI» we fixed the systemic cause — misdesigned roles. Result: managed funnel, predictable revenue pipeline, cash gaps in acceptable range. BBI redesigned the commercial block, not simulated management.",
        sections: [
          { title: "Client", paragraphs: ["Healthcare / medical laboratory sector."] },
          {
            title: "Request",
            paragraphs: [
              "The company set up CRM, defined SLA, runs regular ad campaigns. But when analyzing campaign effectiveness, most leads were in fact «lost», and the funnel was unmanaged.",
              "The classic conflict started immediately: managers said «marketing brought the wrong people, leads are cold».",
            ],
          },
          {
            title: "What the fact audit showed",
            paragraphs: ["We traced the lead handling chain in CRM and saw the real picture:"],
            bullets: [
              "SLA was not followed by managers, backlogs accumulated.",
              "The manager did not react to overdue notifications in CRM.",
              "31% of leads came with trigger requests and left contacts (i.e. leads worth working with).",
              "59% of leads received only the system auto-reply, after which no one followed up.",
            ],
            paragraphsAfterBullets: [
              "So the problem was not «lead quality» — the problem was that lead handling as a process did not exist.",
            ],
          },
          {
            title: "Why «punish / train / tighten KPI» is not always the answer",
            paragraphs: ["When a business sees leads being lost, the standard toolkit looks like this:"],
            bullets: [
              "train managers in «sales»,",
              "strengthen control,",
              "introduce penalties,",
              "recalculate KPI,",
              "force «calling» and «pushing».",
            ],
            paragraphsAfterBullets: [
              "This works only if the cause is one-off: discipline slipped, team relaxed, manager didn't follow up, one or two people «messing up».",
              "But the key management skill is distinguishing systemic error from one-off.",
              "Because if the cause is systemic, any «tightening» turns into management theater: you'll spend time, get a short-term activity spike, and in 2–3 weeks the system will return to where it was.",
            ],
          },
          {
            title: "What it really was: systemic error in choosing executors",
            paragraphs: [
              "We went deeper into diagnostics and separated symptoms from cause.",
              "It turned out that people in «sales manager» roles were actually doing an administrative function:",
            ],
            bullets: [
              "accepting requests from existing clients,",
              "passing requests for execution,",
              "tracking statuses,",
              "handling operational issues.",
            ],
            paragraphsAfterBullets: [
              "So this was a «coordinator/admin» role, not sales.",
              "And here the systemic role mismatch kicked in:",
              "Admin — reactive role: take the flow, avoid errors, close urgent, «hold operations».",
              "Sales — proactive role: drive dialogue, bring client back into contact, handle objections, push to decision, keep timing.",
              "Under operational load, the admin will always choose «urgent and hot», and sales will be «by default». And it's not a motivation issue. It's an architecture-of-functions issue.",
              "Bottom line: the problem was systemic — not «bad leads» and not «bad managers», but misdesigned roles and accountability.",
            ],
          },
          {
            title: "Solution: redesign the commercial block, not «push» people",
            paragraphs: [
              "Instead of treating the symptom (punish/train), we changed the system — separated functions and assigned measurable outcome to each role.",
              "We shifted the commercial block from a «passive order waiting» model to revenue management via two levers:",
            ],
            bullets: [
              "Expansion — systematic market share capture through new clients (here: segments where the lab objectively benefits from growth).",
              "LTV maximization — developing the current base: order frequency, average check, «sleeping» returns, retention.",
            ],
            paragraphsAfterBullets: [
              "New structure by roles and outcomes:",
              "We separated «sales», «base development» and «operational support» so sales weren't eaten by production firefighting.",
              "1) Hunter Manager (new client acquisition) — responsible for new clients and onboarding them into a regular order cycle.",
              "2) Farmer Manager (current base development) — responsible for share of client spend, order frequency, retention and returns.",
              "3) KAM / Business unit head (key accounts and major contracts) — responsible for strategic relationships and protecting large deals.",
              "4) Administrators (operations and service) — responsible for correct order handling and status communication — but do not substitute sales.",
              "Key point: each role should be «single-outcome». When roles are mixed — the business loses money «in silence», then looks for someone to blame in marketing.",
            ],
          },
          {
            title: "What changed after implementation: results in numbers",
            paragraphs: [
              "When we removed the systemic cause, metrics moved quickly and predictably — because the system started working as a system, not as a set of heroic efforts.",
            ],
            bullets: [
              "SLA leveled at 87% — overdues stopped being the norm, control became regular, lead handling became stable.",
              "That drove a 21% conversion increase: inquiries stopped «dying» on auto-replies and overdues, more leads reached real dialogue and orders.",
              "Order frequency per client grew 23% in the first month — thanks to a role dedicated to base development and returns.",
              "34% of the client base that had gone «dormant» and hadn't ordered in 4–6 months was reactivated — because client return became a process, not chance.",
            ],
            insertInfographic: true,
          },
          {
            title: "Financial effect: cash gaps moved into the «acceptable corridor»",
            paragraphs: [
              "Separately important: SLA improvement and conversion growth brought not only commercial but also financial management impact.",
              "When the funnel became manageable, the company got predictable revenue flow — clear future inflows tied to CRM stages and SLA discipline.",
              "That in turn:",
            ],
            bullets: [
              "reduced recurring cash gaps, because inflows stopped being a «lottery»;",
              "allowed planning payments and procurement not «by feel» but by revenue forecast based on funnel movement;",
              "reduced dependence on manual control and firefighting — money became a consequence of process, not heroics.",
            ],
          },
          {
            title: "Main takeaway",
            paragraphs: [
              "This case is about one thing: you cannot make management decisions without separating systemic from one-off.",
              "If we had gone the typical «managers are to blame — fine/train/tighten KPI» route, the company would have gotten a short-term effect and then returned to the same point, because the architecture of roles and accountability would have stayed the same.",
              "We did otherwise: removed the systemic cause — and got measurable results in SLA, conversions, order frequency, base reactivation and, most importantly, revenue predictability.",
            ],
          },
        ],
      },
    ],
  },
  blog: {
    hero: { title: "Blog & Expertise", description: "Articles on building autonomous and protected business systems." },
    filters: {
      all: "All",
      marketing: "Marketing",
      finance: "Finance",
      operations: "Operations",
    },
    noPosts: "No articles in this category yet.",
    card: { readMore: "Read more" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operations", categoryKey: "operations", title: "5 Steps to Autonomous Management", description: "How to build rhythm, SOP and execution control.", image: "/blog/operations-autonomous.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Download checklist", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostics", categoryKey: "diagnostics", title: "Diagnostics: Uncover Real Problems", description: "Find real failure points in your system.", image: "/blog/diagnostics-analysis.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Book screening", href: "/contacts" } },
      { slug: "ekonomika-kanalov-marketing", category: "Marketing", categoryKey: "marketing", title: "Channel Economics", description: "Full-funnel analytics and manageable growth.", image: "/blog/ekonomika-kanalov.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "sistemnye-prodazhi", category: "Sales", categoryKey: "sales", title: "System Sales Without Stars", description: "Standards, scripts and CRM.", image: "/blog/sistemnye-prodazhi.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "finansovaya-prozrachnost", category: "Finance", categoryKey: "finance", title: "Financial Transparency", description: "One truth in numbers.", image: "/blog/finansovaya-prozrachnost.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
      { slug: "hr-kak-sistema", category: "HR", categoryKey: "hr", title: "HR as a System", description: "Roles, accountability, onboarding.", image: "/blog/hr-kak-sistema.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }] },
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
      successMessage: "Request sent. We'll get back to you shortly.",
      errorMessage: "Could not send the request. Please try again later or contact us directly.",
    },
  },
};
