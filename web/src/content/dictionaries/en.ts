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
        { title: "Owner in growth", description: "Business depends on them.", metrics: "$30k–250k/mo · 15–80 people · 5+ yrs", pain: "Put out fires instead of managing" },
        { title: "Owner scaling", description: "Chaos multiplies.", metrics: "$80k–500k/mo · 40–200 people", pain: "Scale chaos — scale losses" },
        { title: "Owner preparing for investment", description: "Business as an asset.", metrics: "$150k–1M+/mo · 80–500+ people", pain: "Investor needs an asset, not a business in my head" },
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
          title: "Put out fires instead of managing",
          description:
            "Business doesn't run without you. Decisions, fires, manual control — every day. No time for strategy.",
          linkLabel: "Learn more",
          href: "/icp/operations",
        },
        {
          title: "Scale chaos — scale losses",
          description:
            "Growth multiplies problems. New people, departments, processes — chaos grows with revenue.",
          linkLabel: "Learn more",
          href: "/icp/scale",
        },
        {
          title: "Investor needs an asset, not a business in my head",
          description:
            "You know the business inside out. But the investor wants numbers, structure, transparency — not your head.",
          linkLabel: "Learn more",
          href: "/icp/investor",
        },
      ],
      ctaLabel: "Discuss your situation",
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
        { title: "Operations", items: ["Owner exits manual management — business becomes «self-driving»", "Management rhythm, SOPs, org structure, meetings, dashboards, KPIs, adaptation checklists"] },
        { title: "Marketing", items: ["Budget doesn't leak «into nowhere» — you see client cost and leaks", "Full-funnel analytics, channel audit, database ownership"] },
        { title: "Sales", items: ["Result doesn't depend on «stars» — new manager hits targets in 2–4 weeks", "Scripts, regulations, CRM, funnel, lead processing"] },
        { title: "Finance", items: ["Honest answer «Where is my money?» — decisions on data, not intuition", "Management accounting, plan-vs-actual, payment calendar, accounting by area"] },
        { title: "HR", items: ["Team is reproducible — roles fixed, one person's exit doesn't break the system", "Role profiles, systemic hiring, onboarding, evaluation, talent pipeline"] },
        { title: "Legal protection", items: ["Protection from lawsuits, data leaks, and database theft", "NDA, employment contracts, job descriptions, data consent, contractor agreements"] },
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
      infographicForecast: "Before",
      infographicResult: "Result",
      infographicTitle: "Results in numbers",
    },
    items: [
      {
        slug: "med-lab-sla",
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
    card: { readMore: "Read more" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operations", categoryKey: "operations", title: "5 Steps to Autonomous Management", description: "How to build rhythm, SOP and execution control.", image: "/blog/operations-autonomous.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Download checklist", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostics", categoryKey: "diagnostics", title: "Diagnostics: Uncover Real Problems", description: "Find real failure points in your system.", image: "/blog/diagnostics-analysis.png", sections: [{ title: "Overview", paragraphs: ["Content placeholder."] }], cta: { label: "Book screening", href: "/contacts" } },
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
