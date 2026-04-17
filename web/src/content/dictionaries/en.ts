import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About the company", href: "/about" },
      { label: "How we work", href: "/work" },
      { label: "Cases", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Contacts", href: "/contacts" },
    ],
    cta: "Get started",
  },
  work: {
    breadcrumb: "How we work",
    hero: {
      eyebrow: "Work model",
      title: "6 pillars: a single system, not a set of services",
      description:
        "Marketing brings in leads, but sales loses them because there are no regulations. Sales closes deals—finance doesn’t understand where the revenue comes from. Operational efficiency rests on two people who went on vacation.\n\nThis is why we do not sell separate “feature services.” A targeted improvement of one pillar while the rest are weak does not give a sustainable result - it gives a temporary effect and a new point of overload.\n\nBBI addresses all six pillars simultaneously: operational excellence, marketing, sales, finance, HR and asset protection.",
      ctaLabel: "Read more about the 6 pillars of BBI",
      carouselSlides: [
        "We do not sell operations separately from marketing, or marketing separately from finance. BBI enters all six pillars and builds a single management loop: every function is connected to the others through metrics, ownership, and cadence.",
        "We start with diagnostics: we find the real root causes—where the business loses money, control, and value. Then we design the target architecture: an operating model that closes those gaps and creates a working foundation for manageable growth.",
        "BBI stays inside the business for the full implementation—90+ working days. During that time, change moves from diagrams to daily practice: meetings follow a new format, decisions are made by protocol, metrics are tracked by the system rather than by hand. We leave only when the new management model runs without our involvement.",
      ],
    },
    scheme: {
      centerLabel: "Business",
    },
    pillarsIntro: {
      title: "BBI system",
      description:
        "BBI combines six areas into a single system, subordinate to the interests of the owner. These are not “services” that can be purchased individually. These are the six pillars on which a stable and protected business asset rests. Resilience is the result of all six.",
      detailsLabel: "more details",
    },
    pillars: [
      {
        key: "operations",
        title: "Operational efficiency",
        group: "Leverage",
        groupLabel: "Lever",
        summary:
          "A business that operates without the constant involvement of the owner is not an accident, but an architecture. We build a management rhythm, describe key processes and create a control system in which everyone knows their area of ​​responsibility and result metrics.",
        details: [
          "What we do:",
          "Management rhythm (cadence): a system of meetings, check-ins and control points - works according to a schedule, and not “when it lights up”",
          "SOP and regulations: key processes are described, owner is assigned, logic is fixed",
          "Organizational chart and responsibility matrix (RACI): who is responsible for what - no gray areas",
          "KPI panels and dashboards: the state of the business is visible in 5 minutes, without manual data collection",
          "Onboarding checklists: a new employee achieves results according to the standard, and does not “survive on his own”",
        ],
        result:
          "The business ceases to rely on the presence of the owner. Every process works according to the rules - no matter who is in the office today.",
        resultExpanded: {
          whatWeBuild:
            "Management rhythm (cadence), SOP, org chart, responsibility matrix (RACI) and KPI panels. Each owner is assigned, each metric is visible in real time.",
          partnerOutcomes: [
            "The owner spends up to 10 hours a week on the operating system instead of constant manual control",
            "Business doesn't stop when a key person is on vacation or has left.",
            "Decisions are made according to the protocol, and not through a call to the owner",
            "Growth scales with the model rather than creating a new level of chaos",
          ],
        },
        broken:
          "The owner is in every process. Without him, nothing moves, and any urgency immediately flies into his phone.",
        brokenExpanded: [
          "Every day begins with the analysis of “fires” - the strategy is postponed again",
          "Decisions rest with the owner: the team does not act without his approval",
          "There is no clear organizational chart - it is unclear who is responsible for what, and responsibility is blurred",
          "A key employee left - and with him went the processes that were only in his head",
          "The growth of the company does not scale the system, but only adds chaos",
          "There are no metrics: the owner learns about problems after the fact, and not from the dashboard",
        ],
        actions:
          "We build a management architecture: who is responsible for what, how decisions are made, how execution is controlled. Business works according to rhythm and rules, not according to mood.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "Organizational chart with areas of responsibility and decision-making hierarchy",
                "SOP (standard operating procedures) for key processes",
                "RACI responsibility matrix: owner, executor, approver - for each process",
                "System of management meetings (cadence): format, participants, frequency, protocol",
              ],
            },
            {
              title: "Metrics and dashboards",
              items: [
                "KPI dashboard: business status in one screen - without manual data collection",
                "Execution control metrics: plan-facts based on key indicators",
                "Escalation points: when and to whom the issue is raised - without calling the owner",
              ],
            },
            {
              title: "Additionally",
              items: [
                "Onboarding checklists for new employees",
                "Management rhythm regulations that the team maintains independently",
              ],
            },
          ],
        },
      },
      {
        key: "marketing",
        title: "Marketing",
        group: "Leverage",
        groupLabel: "Lever",
        summary:
          "Marketing without analytics is a budget in the fog. We are building a system in which every invested ruble is tied to the result: it is clear where the client came from, how much it cost and which channel actually works.",
        details: [
          "What we do:",
          "End-to-end analytics: from the first touch to payment - every channel is visible, every lead is tracked",
          "Channel audit: what brings real customers, what wastes the budget - with numbers, not feelings",
          "Ownership of accounts and databases: advertising accounts, CRM, databases - belong to the company, not the agency",
          "Channel economics: cost of acquisition, LTV, break-even point for each direction",
          "Predictable lead flow: the system works according to a model and does not depend on one contractor",
        ],
        result:
          "It’s clear how much a lead and a client cost, what channel is working, and who owns all the data and accounts.",
        resultExpanded: {
          whatWeBuild:
            "End-to-end analytics from touch to payment, channel audit, attraction economy and transfer of ownership of all accounts and databases to the company.",
          partnerOutcomes: [
            "All access and databases are in the hands of the company: changing the agency does not reset the history and data",
            "A clear picture: which channel earns, which spends and why",
            "Marketing budget is allocated based on data, not intuition",
            "We manage and predict the flow of leads - without depending on the “star” contractor",
          ],
        },
        broken:
          "Money goes into advertising, but it’s unclear where clients come from. The agency reports, but there is no control.",
        brokenExpanded: [
          "The budget is distributed “according to feelings”: which channel actually works is unknown",
          "No end-to-end analytics: it is impossible to calculate the real cost of attracting a client",
          "All offices, bases and access are with the contractor. Changing agency = loss of history and data",
          "The flow of leads is unpredictable: one month it’s thick, the next it’s empty",
          "Marketing rests on one person or one agency - without him the system falls apart",
          "No model: marketing decisions are not related to financial results",
        ],
        actions:
          "We set up end-to-end analytics, transfer ownership of all accounts and databases, and build a model in which every penny is tied to the result.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "Map of acquisition channels with the economics of each: cost per lead, CPL, customer cost",
                "Audit of current channels: what works, what wastes the budget - with numbers",
                "Model of marketing budget distribution by channels and goals",
                "Instructions for managing advertising accounts on the company's side",
              ],
            },
            {
              title: "Metrics and dashboards",
              items: [
                "End-to-end analytics dashboard: from first touch to payment",
                "Funnel metrics for each channel: impressions → leads → qualification → sales",
                "LTV and ROI by customer segments",
              ],
            },
            {
              title: "Additionally",
              items: [
                "All accounts, databases and accesses have been transferred to the company - with documentation",
                "Regulations for working with contractors and agencies: who owns what",
              ],
            },
          ],
        },
      },
      {
        key: "sales",
        title: "Sales",
        group: "Leverage",
        groupLabel: "Lever",
        summary:
          "When sales results depend on two “irreplaceable” managers, this is not a system, this is a risk. We are building a sales department that works according to the standard: any new employee reaches the planned figures in 2–4 weeks.",
        details: [
          "What we do:",
          "Scripts and communication standards: the result does not depend on the talent of a particular person",
          "Rules for working with a lead: from the first touch to closing the deal - every step is described",
          "CRM control: not a single lead is lost, not a single deal is “stuck” without status",
          "Funnel and qualification: the system itself weeds out non-targets and focuses efforts on those who will buy",
          "Onboarding a new manager: according to regulations, not “watch how I do it”",
        ],
        result:
          "Sales depend on the system, and not on two “star” managers. The result is reproducible and predictable.",
        resultExpanded: {
          whatWeBuild:
            "Scripts, standards for working with leads, CRM control, qualification funnel and onboarding for new managers.",
          partnerOutcomes: [
            "Sales don't stop when a key manager leaves",
            "A new employee reaches planned targets in 2–4 weeks",
            "The owner sees the funnel in real time - without manually requesting reports",
            "Revenue is predictable: the plan and fact converge, and not “how lucky this month”",
          ],
        },
        broken:
          "There are two managers who “hold” sales. If they leave, the revenue will be lost.",
        brokenExpanded: [
          "The result depends on the “stars”: there are no standards, everyone sells as best they can",
          "The new manager has been floating for months: no onboarding, no scripts, no system",
          "CRM is not maintained or is maintained chaotically: leads are lost, deals are “stuck” without status",
          "There is no funnel with standards: it is unclear at what stage clients leave and why",
          "The owner does not see the picture in real time - only in the words of managers",
          "Revenue forecast is a guess, not a calculation",
        ],
        actions:
          "We are building a system in which the result does not depend on the “stars”. Any new manager reaches the planned indicators in 2–4 weeks - according to the regulations, and not “by eye”.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "Sales scripts for each stage of the funnel and type of client",
                "Rules for working with a lead: from the first touch to closing the deal",
                "CRM architecture: funnel structure, statuses, fields, automation",
                "Onboarding program for a new manager: achieving results in 2–4 weeks",
              ],
            },
            {
              title: "Metrics and dashboards",
              items: [
                "Real-time sales funnel: conversions at every stage",
                "Managers' KPIs: plan-facts for revenue, number of transactions, conversion",
                "“Lost leads” metric: where and why clients leave",
              ],
            },
            {
              title: "Additionally",
              items: [
                "Manager training and certification system",
                "Regulations for quality control of calls and correspondence",
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
          "“There is turnover, but where the profit is is unclear” is one of the most common phrases that people come to us with. We are building management accounting in which the owner sees the real picture of finances: without interpretation, without “different versions of numbers” from different people.",
        details: [
          "What we do:",
          "Management accounting: real profit by area - not accounting figures, but business economics",
          "Plan-fact and payment calendar: cash gaps are visible in advance, not after the fact",
          "Identification of financial holes: hidden leaks, ineffective cost items, gray schemes - fixed and closed",
          "Accounting by areas: which one makes money, which one drags down",
          "Single financial truth: one version of the numbers - for the owner, for the team, for the investor",
        ],
        result:
          "The owner sees real profit, and not “approximate figures.” Decisions are made based on data, not feelings.",
        resultExpanded: {
          whatWeBuild:
            "Management accounting, plan-fact, payment calendar, accounting by direction and identifying hidden financial leaks.",
          partnerOutcomes: [
            "The answer to the question “where is my money?” - in 5 minutes, not 5 days",
            "Decisions are made based on data, not intuition.",
            "Financial holes and hidden leaks - identified and closed",
            "Business is ready to talk with an investor or bank: the numbers are clear and justified",
          ],
        },
        broken:
          "There is turnover, but no profit - or it is unclear where it went. The financial picture is blurry.",
        brokenExpanded: [
          "Several “versions of numbers”: the accountant says one thing, the operating director says another",
          "The cash gap appears suddenly: no one warned in advance",
          "It is unclear which direction makes money and which one eats up profits",
          "Hidden leaks: money goes through overpaid contractors, ineffective articles and gray schemes",
          "Decisions are made based on feelings, not management data",
          "Business is not ready to talk with an investor or bank: the numbers don’t add up",
        ],
        actions:
          "We set up management accounting and financial model. The owner sees real profits, cash flow and cash gaps - in advance, and not after the fact.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "Management P&L (profit and loss statement) by business area",
                "Cash flow statement (CF): the real picture by period",
                "Payment calendar: cash gaps are visible 2–4 weeks before the fact",
                "Financial business model: break-even point, marginality, unit economy",
              ],
            },
            {
              title: "Metrics and dashboards",
              items: [
                "Financial dashboard: revenue, profit, margin, expenses - in one screen",
                "Accounting by areas: which earns, which drags down",
                "Plan-fact for all key financial indicators",
              ],
            },
            {
              title: "Additionally",
              items: [
                "Report on identified financial leaks and recommendations for closing them",
                "Financial regulations: who, what and when agrees on expenses",
              ],
            },
          ],
        },
      },
      {
        key: "hr",
        title: "HR and team",
        group: "Shield",
        groupLabel: "Shield",
        summary:
          "If a key person leaves and a function leaves with him, this is not an HR problem. This is an architectural problem. We are building a system in which the expertise belongs to the company, not the people: hiring, adaptation and development work according to the standard.",
        details: [
          "What we do:",
          "Job profiles: clear criteria for who to hire and by what parameters to evaluate",
          "Systematic recruitment: candidate funnel, competency assessment, protocol decision-making",
          "Onboarding program: a new employee achieves results according to the standard, rather than “watching and learning”",
          "Evaluation system and HR analytics: it’s clear who is pulling, who is holding on, who is slowing down growth",
          "Talent reserve and succession plan: critical functions are always closed",
          "What remains for the partner:",
          "The departure of any employee is a planned transfer of competencies, not a collapse of the function",
          "Hiring is carried out according to the standard: we hire the right people, not “who came”",
          "A new person does not break the system - he integrates into it",
          "Expertise is stored in the company's processes and regulations, and not in the heads of two people",
        ],
        result:
          "The team is stable: roles are fixed, expertise lies in the system, not in people. An employee leaving is not a disaster.",
        resultExpanded: {
          whatWeBuild:
            "Job profiles, recruitment system, onboarding program, evaluation system and talent pool for critical functions.",
          partnerOutcomes: [
            "The departure of any employee is a planned transfer of competencies, not a collapse of the function",
            "Hiring is carried out according to the standard: we hire the right people, not “who came”",
            "A new person does not break the system - he integrates into it",
            "Expertise is stored in the company's processes and regulations, and not in the heads of two people",
          ],
        },
        broken:
          "The staff turnover does not stop, hiring is a lottery, and the “irreplaceable” know about it and take advantage of it.",
        brokenExpanded: [
          "There are no job profiles: they hire “by feel” - they hire the wrong people, they waste time and money",
          "There is no onboarding: the new employee “survives on his own” and achieves results in 3–4 months instead of 2–4 weeks",
          "Expertise is stored in people, not in the system: if a person leaves, the knowledge is gone",
          "“Strong” employees are blackmailed into leaving, knowing that without them the function will collapse",
          "There is no evaluation system: it is unclear who really pulls the company and who takes the place",
          "There is no personnel reserve: any dismissal means an emergency search for a replacement",
        ],
        actions:
          "We build HR processes from hiring to assessment. The expertise is stored in the system - not in the people. An employee leaving no longer breaks the function.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "Job profiles for all key roles: competencies, KPIs, areas of responsibility",
                "Hiring funnel with evaluation criteria and selection methodology",
                "Onboarding program: plan for the first 30–90 days with checklists and control points",
                "Personnel evaluation system: performance metrics and regular review",
              ],
            },
            {
              title: "Metrics and dashboards",
              items: [
                "HR dashboard: turnover, time to achieve results, NPS teams",
                "Personnel reserve map: who is ready for growth and in what positions",
                "Succession matrix for critical functions",
              ],
            },
            {
              title: "Additionally",
              items: [
                "Employee exit regulations: transfer of cases, accesses and knowledge according to the protocol",
                "Company knowledge base: expertise is recorded and stored within the system",
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
          "Most owners find out about legal holes when it’s too late: the database has leaked, the contractor is blackmailing with access, a former employee has stolen clients. The legal outline is not a formality, but a real shield that protects the business from these scenarios in advance.",
        details: [
          "What we do:",
          "Non-disclosure agreements: data, customer bases and trade secrets are protected at the entrance",
          "Employment contracts and job descriptions: rights and obligations are fixed - there is no basis for blackmail",
          "Contracts with contractors: rights to work results, accesses and databases belong to the company, not to the contractor",
          "Intellectual property protection: brand, developments, content - registered as company assets",
          "Legal audit: existing vulnerabilities identified, prioritized and closed",
        ],
        result:
          "The assets, data and rights belong to the company - legally and technically. Not people, not contractors.",
        resultExpanded: {
          whatWeBuild:
            "NDAs, employment contracts, contracts with contractors, IP protection and legal audit of existing vulnerabilities.",
          partnerOutcomes: [
            "All key assets - databases, access, IP (intellectual property), brand - legally belong to the company",
            "The departure of an employee or contractor does not pose a threat to the business",
            "Business is protected from data theft, blackmail of “irreplaceables” and loss of customer bases",
            "The legal outline is ready for verification by an investor, bank or partner",
          ],
        },
        broken:
          "The contracts are outdated, the data is stored by people, not by the company. One leak and it’s already a crisis.",
        brokenExpanded: [
          "Client bases and access - from managers or contractors: they can be “taken away” at any time",
          "NDAs are not signed or signed for show - without real legal force",
          "Employment contracts do not cover the rights to work results and trade secrets",
          "The company's IP - brand, developments, content - are not legally registered as assets",
          "Contractors work without contracts or with contracts where all rights are on their side",
          "Any conflict with an employee or partner becomes a vulnerability: there is nothing to defend in court",
        ],
        actions:
          "We close legal vulnerabilities and build a protective circuit: the rights to assets, data and intellectual property belong to the company, and not to people and contractors.",
        actionsExpanded: {
          partnerHeading: "What does the partner receive:",
          sections: [
            {
              title: "Documents and tools",
              items: [
                "NDAs and Non-Disclosure Agreements: Templates for Employees, Partners and Contractors",
                "Employment contracts with protection of trade secrets and rights to work results",
                "Contracts with contractors: rights to developments, content and data are on the company’s side",
                "Regulations for storage and access to data: who, for what, under what conditions",
              ],
            },
            {
              title: "Audit and risk maps",
              items: [
                "Legal audit: map of vulnerabilities with closure priorities",
                "Register of company assets: what is registered, what is not, what needs to be closed",
                "IP protection checklist: brand, developments, content - registered as assets",
              ],
            },
            {
              title: "Additionally",
              items: [
                "Regulations for the transfer of access when changing a contractor or dismissing an employee",
                "A package of documents ready for verification by an investor, bank or partner",
              ],
            },
          ],
        },
      },
    ],
    results: {
      title: "Valuable end result (VAR)",
      description: "What does the owner receive as a result of each pillar?",
      badge: "",
      resultModalWhatWeBuild: "What are we building?",
      resultModalPartnerLabel: "What remains with the partner?",
      resultModalCloseLabel: "Close",
    },
    problems: {
      title: "What happens when a pillar is \"broken\"",
      description:
        "Each of the six pillars of business can be a point of loss. This is what breakdown looks like from the inside - before it becomes a crisis.",
      badge: "Risks",
      detailsExpandedListHeading: "What it looks like in practice",
    },
    actions: {
      title: "What exactly does BBI do in your business?",
      description:
        "We do not give recommendations and do not leave after diagnosis. For each of the six areas, we build, implement and transfer specific tools - everything remains with the partner after the project.",
      badge: "BBI",
    },
    format: {
      title: "Work format",
      description:
        "BBI enters the business as a management system architect: for 90+ working days, with full immersion and responsibility for a specific result. Not hours and tasks - but the target state of the business, which is fixed in the contract.",
      zones: [
        {
          label: "The green zone is BBI",
          description:
            "We work in one format: diagnostics → audit → design → implementation → transfer of a protected and managed business asset. Each stage is strictly sequential. We don't jump to \"implementation\" until we understand the real picture of the business.",
          tone: "green",
        },
        {
          label: "Yellow zone - acceptable as part of the project",
          description:
            "Some tools - CRM, website, SMM - can be part of the BBI project, but only if they are needed to achieve the agreed target result. Not as an independent service. Not for the instrument. Important rule: BBI remains the architect of the management system. Contractors are involved as a tool - they are performers, not owners of the function. After the project, all accesses, offices and databases belong to the company.",
          tone: "yellow",
        },
        {
          label: "Red zone - we don't do this",
          description:
            "We don’t accept some requests on principle - not because we “don’t know how”, but because they contradict our model. The agent format does not produce systematic results. One-time services do not solve root problems. What we never do: maintaining SMM and regular content production as a permanent function; “turnkey” advertising/targeting; outsourced marketing without building a system; brand book, packaging, website as a separate service outside the project; one-time consultations without implementing and consolidating the system.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "How we work: from the first call to a working system",
      description:
        "Each stage is a specific result, not a process for the sake of a process. We move sequentially: first we understand the real picture, then we design, then we build. No jumping around and no “let’s get started and figure it out.”",
      readMoreLabel: "Read more",
      whatWeDoHeading: "What we do",
      detailsListMarker: "What we do:",
      steps: [
        {
          title: "Diagnostics",
          description:
            "The first conversation to honestly understand whether we are right for each other. No sales and no promises. Based on the results of the screening, there is a clear decision: “our client”, “not ours” or “only diagnostics”. Without vague “we’ll think about it.”",
        },
        {
          title: "Audit",
          description:
            "A complete picture of the business with an evidence base. Not sensations - data. Not team opinions - facts. What we do: data collection (CRM, finance, sales reports, contracts, advertising accounts); interviews with the team (5–10 key employees in all six areas); audit on 6 pillars (operations, finance, sales, marketing, HR, asset protection); consolidation of findings into a single report with an evidence base.",
        },
        {
          title: "System design",
          description:
            "We translate the audit findings into a concrete drawing: what the business should look like, who is responsible for what, and by what metrics it is managed. Not recommendations - a working document. What we do: analyze audit data and agree on design principles with the owner; designing a target organizational chart (roles, areas of responsibility, hierarchy of decisions); We build a KPI tree and dashboard architecture; We create a RACI matrix for key processes; We draw up a roadmap of changes for 90–180 days; We prepare SOP and regulations templates.",
        },
        {
          title: "Implementation and control",
          description:
            "The team works within the business and builds systems that actually work—they don’t sit in a folder on a shelf. What we do: stage 1 - onboarding and launch (verification of priorities, closing critical risks, launching the management rhythm); stage 2 - building systems (SOP and regulations on priority pillars, CRM logic and funnel, KPI dashboards, HR documentation, financial instruments); Stage 3 - testing and handover (combat testing, team training, Playbook finalization, final handover session).",
        },
        {
          title: "Transfer of a protected and managed business asset",
          description:
            "The final point of the journey with BBI is a business that can be transferred, sold, scaled, or attracted an investor to it. Not in words, but with documents, metrics and a working management system. We leave only when the business exists as an independent asset - with documents, a system and a team that works according to the standard without external support.",
        },
      ],
    },
    responsibility: {
      title: "Responsibility",
      description:
        "The result is achieved only when each side clearly understands its zone. BBI doesn’t do the client’s work—we build an architecture that the partner’s team implements and supports internally.",
      bbiTitle: "BBI is responsible for",
      clientTitle: "The client is responsible for",
      bbi: [
        "Architecture and control system",
        "Asset and ownership protection",
        "Standards and reproducibility (SOP, playbook, RACI)",
        "Transparency of finances and logic of decisions",
        "Change management",
      ],
      client: [
        "Involvement (up to 10 hours/week) and quick solutions",
        "Transparency and access to data",
        "Availability of responsible persons for 6 pillars",
        "Execution within the business by your own team",
        "Maintaining management rhythm and discipline",
      ],
      bbiDetailed: [
        {
          title: "Architecture and control system",
          description:
            "We design the operating model: who is responsible for what, how decisions are made, how execution control is structured. We do not recommend it - we are building a working scheme for a specific business.",
        },
        {
          title: "Asset and ownership protection",
          description:
            "All assets - accounts, databases, domains, IP, contracts - become the property of the company. We build a legal and operational protection framework.",
        },
        {
          title: "Standards and reproducibility",
          description:
            "We create SOP, Playbook and RACI - documents according to which the team works without the participation of the owner and without dependence on specific people.",
        },
        {
          title: "Transparency of finances and logic of decisions",
          description:
            "We are building management accounting: one version of numbers for everyone. Decisions are made based on data, not on the feelings and opinions of different people.",
        },
        {
          title: "Change management",
          description:
            "We guide the team through transformation: training, consolidating new standards in daily practice, testing systems until handover.",
        },
        {
          title: "Achieving the agreed CCR",
          description:
            "The project is considered completed when the target key result fixed in the contract is achieved. Not before.",
        },
      ],
      clientDetailed: [
        {
          title: "Owner involvement - 5–8 hours per week",
          description:
            "Transformation is impossible without the participation of the decision maker. The owner (or CEO with full delegation) is present in work formats and controls through numbers and rhythm. Anything less and the speed of implementation drops exponentially.",
        },
        {
          title: "Quick solutions - no longer than 72 hours",
          description:
            "Personnel forks, transfer of access, appointment of owners, budget priorities - these decisions cannot wait for weeks. Procrastination blocks the entire system.",
        },
        {
          title: "Transparency and access to data",
          description:
            "CRM, financial reports, contracts, advertising accounts, analytics - are opened by BBI without filtering. Without data, it is impossible to make an accurate diagnosis and you cannot be responsible for the result.",
        },
        {
          title: "Having people responsible for the 6 pillars",
          description:
            "Each area - operations, marketing, sales, finance, HR, legal protection - must have a manager or person in charge. If it is not there, it is recorded as a critical risk at the diagnostic stage.",
        },
        {
          title: "Execution within the business by a team",
          description:
            "Operational activities are carried out by the partner's team. BBI builds a system - it does not work in place of managers and does not manage the client’s employees.",
        },
        {
          title: "Maintaining management rhythm and discipline",
          description:
            "After the launch of new formats - scheduled meetings, monitoring by metrics, fulfillment of agreements without rollbacks or sabotage. The system is based on discipline, not just documents.",
        },
      ],
      readMoreLabel: "Learn more",
      readLessLabel: "Hide",
    },
    pillarCardUi: {
      whatWeBuild: "What we build",
      partnerWithClient: "What stays with the partner",
      brokenPracticeHeading: "What it looks like in practice",
    },
    promises: {
      title: "What BBI does not promise",
      subtitle: "To avoid false expectations — honestly:",
      paragraphs: [
        "We do not guarantee instant revenue growth. BBI’s outcome is a manageable business asset. Growth becomes controllable and repeatable, not random.",
        "We do not create a “no-owner autopilot.” The owner steps out of day-to-day operations but stays in control through numbers and cadence — that is not the same thing.",
        "We do not work in a “just do this for us” mode. Only within the logic of an agreed valuable outcome — without an endless stream of tasks disconnected from the system.",
        "We do not transform everything at once. Movement is phased: first critical risks and transparency, then standards and scalability.",
      ],
    },
    targetState: {
      title: "Desired result (Target State)",
      minimumTitle: "Target Minimum (45–90 working days)",
      minimumDescription:
        "Threat control, “one truth” in numbers, the system does not break down without the owner.",
      idealTitle: "Target Ideal (standard)",
      idealDescription:
        "The business is stable, protected and growing reproducibly, ready for investment.",
    },
    cta: {
      title: "Start with diagnosis",
      description: "It's free and doesn't oblige you to anything.",
      form: {
        name: "Name",
        phone: "Telephone",
        message: "Briefly about the request",
        submit: "Send",
      },
    },
  },
  pillarsPage: {
    title: "6 pillars of BBI",
    description:
      "Six points of support that create a sustainable and protected business asset.",
    ctaLabel: "Start with diagnostics",
    ctaButtonLabel: "Fill out the form",
    ctaDescription: "Let's discuss the scale and growth points in 30 minutes.",
  },
  home: {
    hero: {
      eyebrow: "Brand Promise",
      title:
        "We build a business that works\nnot chaotically, but as a\nmanaged and scalable\nsystem",
      titleLineBreakMatch: "chaotically",
      subtitle:
        "Operating partner for owners and CEOs in Central Asia: we diagnose points of failure, design business architecture and implement it together with your team.",
      cta: "Start with diagnostics",
      secondaryCta: "View cases",
      secondaryCtaHref: "#cases",
    },
    icpIntro: {
      eyebrow: "Target Audience",
      title: "Who are we for?",
      segments: [
        {
          title: "Your business is growing, but you are the busiest person in the company. And the most expensive performer.",
          description: "The system is not built - the business rests on your presence.",
          details:
            "Not because you manage poorly. But because the system is not built: decisions are made on you, the team waits for instructions, and does not act according to the protocol. There are no days off. Vacation means working from your phone in a different time zone. The strategy is postponed until “after the fires” - but the fires are not getting smaller.\n\nThere are reports. They have numbers. There is no truth. Sales show one thing, finance another, marketing another. You make decisions without knowing what data to believe. Business is growing. There is no feeling of control.\n\nAs long as you keep it to yourself, the business does not belong to you. It belongs to your presence.",
          pain: "You are not a business leader. You are his bottleneck.",
        },
        {
          title: "You have scaled your business. Revenue increased. The team has grown. Problems too.",
          description: "Without an operating model, waste scales, not efficiency.",
          details:
            "80 people behave like 8: each department is in its own reality, there are no standards, managers build their own “states”. You opened a second office and got a second source of chaos: revenue is growing, but the profit is “disappearing somewhere.” Margins are falling – it’s not clear why. Because without an operating model, scaling is not growth. This is the replication of losses.\n\nNo SOP - no standard. No RACI - no person in charge. No common metrics - no management. There is only the illusion of growth and a manifold increased burden on the owner.",
          pain: "Chaos cannot be scaled. Otherwise, you scale up your losses.",
        },
        {
          title: "You know the business like the back of your hand. Investor - no. And that's the problem.",
          description: "A deal requires manageability on paper, not “potential in your head.”",
          details:
            "You know your business like the back of your hand. Investor - no. And that's the problem. When a buyer or investor comes along, they don't look at your intuition and experience. He looks at the documents. And there are holes in accounting, assets without registered rights, processes that live only in the head of the owner. “Business in the head” is not an asset. This is a red flag that pushes the appraisal down or scares the buyer away even before negotiations.\n\nThere is no financial “one truth” - there is no justification for the price.\nClient databases, advertising accounts, domains are stored by the manager or contractor - which means they do not belong to the company.\nIP, developments and content are not legally secured anywhere - the buyer cannot be sure that he is buying them along with the business.\nThere is no management structure - there is no confidence that the business will survive without you.\nThe investor is not buying your potential. It buys controllability, transparency and predictability. If this is not on paper, he either leaves or pays less.",
          pain: "Your business is working. But until it is registered as an asset, it costs less than it should.",
        },
      ],
      exclude:
        "Business up to 5 years, startups on PMF, one-time consultations, turnkey agency services. And the request “guarantee growth” without a willingness to change the system.",
      excludeLabel: "We don't fit",
      readMoreLabel: "Read more",
    },
    icp: {
      eyebrow: "Question",
      title: "Do you recognize yourself?",
      subtitle: "Three typical scenarios. If you recognize yourself, below we will tell you exactly how we help.",
      cards: [
        {
          title: "You are not a business leader. You are his bottleneck.",
          description:
            "Every day you act as the final authority on any issue: from a discount to a client to a conflict in the department. The company does not know how to make decisions without you - neither in terms of numbers nor in terms of regulations. Formally there are CRM and reports, but there is no “one truth” in the numbers - sales, marketing and finance live separately. Instead of a management architecture, you act as the chief operations manager 24/7.",
          linkLabel: "More details",
          href: "/icp/operations",
          modalLead:
            "This is the reality of 80% of business owners. You have to delve into operational issues, monitor transactions and sales yourself, and build departments. A business that depends on you is not an asset, it is a cage.",
          symptoms: [
            "You have to delve into operational issues, monitor transactions and sales yourself, and build departments. A business that depends on you is not an asset, it is a cage.",
            "No decision is made without your “yes”. This is not management. This is an operational swamp.",
            "Without you, the business is burning. As soon as you turn off your phone for 3 hours, problems begin: deals fall through, errors multiply.",
            "At work 24/7: putting out the fire in finances, dealing with contractors... You are no longer building strategies, not developing and not scaling.",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Company age: 5+ years",
            "Scale: $30k–250k/month",
            "Staff: 15–80 employees",
            "Stage: there is growth, but no controllability",
            "Type of business: B2B, B2B/B2C - where there is a sales department and an operational part",
          ],
          partnershipResultsLabel: "Partnership result:",
          partnershipResults: [
            "Controllability",
            "Transparency",
            "Ownership of assets",
            "Unified picture of numbers",
            "Cadence - management rhythm",
            "Less manual control",
          ],
        },
        {
          title: "Chaos cannot be scaled. Otherwise, you scale up your losses.",
          description:
            "The company's growth does not translate into manageability and margins. The team is expanding, new functions and levels are appearing, but there is no common operational outline. Employees work in silos, like several isolated teams, each department relying on its own data and ideas about the goal. As a result, you scale not efficiency, but chaos, overspending and waste.",
          linkLabel: "More details",
          href: "/icp/scale",
          modalLead:
            "Without standards and RACI, scaling turns into replicating chaos. There is no single management contour.\n\nDepartments make decisions in different realities, reports conflict with each other, and it becomes impossible to manage profit and quality from a single point.",
          symptoms: [
            "Instead of an operating model, the existing chaos is scaled",
            "80 people reproducing the same errors in different areas",
            "Leaders are pulling the blanket: everyone is building “their own empire”",
            "Departments make decisions in different management logics",
            "The paradox of growth: turnover is higher, but the sense of control and actual profit is lower than at a smaller scale",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Age: 5+ years",
            "Scale: $80k–500k/month",
            "Staff: 40–200 employees",
            "Stage: scaling (2nd office/branch/new directions/team growth)",
            "Management: the owner has already tried to “delegate”, but the system has not taken hold",
          ],
          partnershipResultsLabel: "Partnership result:",
          partnershipResults: [
            "Scaling operating model",
            "Standards",
            "Single truth according to metrics",
            "SOP - step-by-step instructions for performing a specific task",
            "RACI - responsibility distribution matrix",
            "Unified KPIs",
            "Managed structure",
            "Stable quality",
          ],
        },
        {
          title: "If your business is not registered as an asset, it is worth less than it should.",
          description:
            "The owner’s intuition and “we already know everything” are not an argument for the investor. It is important for him to see clear economics, clear rights to assets and manageable risks. As soon as the outside party begins to look at the numbers and documents, unformed agreements, dependence on people and accounting gaps emerge. Without a systemic financial picture and described risks, your company looks not like a managed asset, but like a set of practices around the owner.",
          linkLabel: "More details",
          href: "/icp/investor",
          modalLead:
            "Today, most of the knowledge about the company, risks and customers lives in you and key people. For an investor, this is a signal: the asset is not registered, risks are not managed, the system is not recorded on paper.\n\nWhile there is no investment folder, risk map, unified financial truth and clearly defined ownership, any dialogue about investments comes from a position of weakness.",
          symptoms: [
            "When preparing for a transaction, you discover that numbers, contracts and rights to assets are scattered across different systems and people",
            "Valuation is based on the owner’s expectations, and not on a transparent economy: there is no structured P&L and a single “truth” on the margin",
            "The management model is not fixed on paper: dependence on the owner and the “team of heroes” is perceived by the investor as a red flag",
          ],
          partnershipCriteriaLabel: "Partnership criteria",
          partnershipCriteria: [
            "Age: 5+ years",
            "Scale: $150k–1M+/month",
            "Staff: 80–500+ employees (but the key is not the size, but the maturity of the task)",
            "Stage: preparation for investment / partnership / M&A / loan / large contract",
            "Management: there is an operating system, but there is no “showcase” - the investor does not understand where the money is, the risks and who owns what",
          ],
          partnershipResultsLabel: "Partnership result:",
          partnershipResults: [
            "Business as an asset: transparency, protection, managed risks",
            "Single financial truth",
            "Closed vulnerabilities",
            "Investment folder",
            "Owners+cadence",
          ],
        },
      ],
      ctaLabel: "Start with diagnostics",
      modal: {
        scenarioLabel: "Scenario analysis",
        signsLabel: "Typical signs",
        solutionLabel: "What can you do",
      },
    },
    icpBridge: {
      label: "Answer",
      title: "How can we help?",
      description:
        "We design the target state, immerse ourselves in your reality, build the architecture and implement it together with you. Not “takeaway” slides – work inside the business.",
      highlightPhrase: "work inside the business",
      items: [
        "We diagnose real points of failure - finance, processes, sales, team",
        "We design the target state to suit your scale and ambitions",
        "We implement the system in 45–90 days—we don’t recommend it, we do it ourselves",
        "We transfer control to your team, remain a partner for sustainability",
      ],
      ctaLabel: "Start with diagnostics",
    },
    helpAndProcess: {
      title: "How we build business systems",
      description:
        "We show the stages, the result of each stage and what the client receives.",
      stages: [
        {
          title: "Diagnostics",
          description:
            "Before you change, you need to understand what exactly is broken and why. We conduct a structured operational audit: we reveal real points of failure in finance, processes, sales and management.",
          result: "Map of holes: numbers, processes, people, assets.",
          clientGets: [
            "Map of key bottlenecks and their sources",
            "Financial and operational gaps: where profits are lost",
            "Ownership vulnerabilities: who really holds assets, accesses, databases",
            "List of critical risks with assessment: “what damage if not closed”",
          ],
        },
        {
          title: "Design",
          description:
            "Based on diagnostics, we design the target state of the business - a manageable operating model tailored to your scale and ambitions. Not a “change plan”, but a working architecture: who is responsible for what, how it is measured, how it is controlled.",
          result: "Roadmap: what we are doing, in what sequence and why.",
          clientGets: [
            "Target scheme for the operation of key functions",
            "Architecture of the management circuit: metrics, owners, cadence, control points",
            "RACI matrix: roles, responsibilities, ownership zones",
            "Logic of interrelations between departments and contours of regular management",
          ],
        },
        {
          title: "Implementation",
          description:
            "We translate the designed model into daily practice: we work together with the team for 45–90 days. We launch the management rhythm, regulations, roles and metrics so that the system works in the operating system - not from the outside “recommended”, but together with those who implement it.",
          result: "From recommendations to a regular operating habit.",
          clientGets: [
            "Implemented management rhythms and fixed cadence",
            "Regulations and SOPs in operation; RACI and ownership zones in practice",
            "Metrics, dashboards and escalation points: who looks at them, how often, what to do if there is a deviation",
            "The team’s area of ​​responsibility for supporting changes and maintaining the standard",
          ],
        },
        {
          title: "Business system transfer.",
          description:
            "We leave when an agreed upon valuable end result has been achieved: we train key participants to work in the new system, fix the rules, transfer the control logic and remain a partner to maintain sustainability.",
          result: "What remains behind us is a system, not a dependency.",
          clientGets: [
            "The folder with documents is ready: numbers, structure, contracts, accesses - everything is in order",
            "The team works according to the system: roles, KPIs, cadence are fixed",
            "The owner manages through dashboards (up to 10 hours per week)",
            "The business looks like a managed asset - and undergoes due diligence",
          ],
        },
      ],
      ctaLabel: "View cases",
    },
    whatWeChange: {
      eyebrow: "Our 6 pillars",
      title: "BBI operates simultaneously across six critical control nodes.",
      pillars: [
        {
          title: "Operational efficiency",
          subtitle: "Goal: the owner leaves manual control",
          items: [
            "Management rhythm (cadence): system of meetings, check-ins, control points",
            "SOP and org chart: each process is described, each owner is assigned",
            "Dashboards and KPI panels: the owner sees the state of the business in 5 minutes",
            "Onboarding checklists: a new employee does not destroy the system",
          ],
        },
        {
          title: "Marketing",
          subtitle: "Goal: every penny invested is tied to the result",
          items: [
            "End-to-end analytics: from touch to payment - every channel is visible",
            "Channel audit: what really works and what drains the budget",
            "Ownership of databases, accounts and accounts - on the company, not on the contractor",
            "Managed marketing system: does not depend on one performer",
          ],
        },
        {
          title: "Sales",
          subtitle: "Goal: the system sells, not individual “stars”",
          items: [
            "Scripts and rules of communication: the result does not depend on the talent of a particular person",
            "Building a sales department from scratch or rebuilding an existing one",
            "CRM control: not a single lead is lost, not a single deal gets stuck",
            "Funnel and incoming processing: systemic, not manual",
          ],
        },
        {
          title: "Finance",
          subtitle: "Goal: An honest answer to the question “Where is my money?”",
          items: [
            "Management Accounting: Real Economics of Business",
            "Identifying financial holes, hidden leaks and theft schemes",
            "Payment calendar: cash gaps are visible in advance, not after the fact",
            "Accounting by areas: which one makes money, which one drags down",
          ],
        },
        {
          title: "HR and team",
          subtitle: "Goal: the team is reproducible - leaving a person does not break the system",
          items: [
            "Job profiles and systematic hiring: we hire the right ones, not the random ones",
            "Onboarding program: a new employee achieves results",
            "Evaluation system and HR analytics: it’s clear who is pushing, who is holding on, who is slowing down",
            "Talent reserve and succession plan: critical functions are always closed",
          ],
        },
        {
          title: "Asset protection",
          subtitle: "Purpose: assets belong to the company - technically and legally",
          items: [
            "NDAs and non-disclosure agreements: data and intellectual property are protected at entry",
            "Employment contracts and job descriptions: rights and obligations are fixed",
            "Consent to the processing of personal data, contracts with contractors",
            "Legal audit: vulnerabilities identified, closed, documented",
          ],
        },
      ],
    },
    whatYouGet: {
      eyebrow: "Result",
      title: "What do you get from working with us?",
      subheadline:
        "Not a set of recommendations or individual feature improvements. And a system that can be launched, controlled and developed within a business.",
      ui: {
        readMore: "Read more >>",
        whatItMeans: "What this means",
        clientGetsHeading: "What stays with the client",
        importantPrefix: "Important:",
        outcomeEyebrow: "Summary",
      },
      cards: [
        {
          title: "A clear picture of where the business is losing control",
          whatItMeans:
            "You see not a “sense of chaos”, but a specific map: where decisions are tied to the owner, where functions work in isolation, where growth already creates losses, not sustainability.",
          clientGets: [
            "Map of key bottlenecks and their root causes - not symptoms, but sources",
            "Description of critical gaps between functions: where responsibility is lost",
            "List of management risks with damage assessment for each",
            "Priorities: what to close first, what to close after",
          ],
          important:
            "This result is achievable only with full access to real data: CRM, finance, contracts and management logic. Without transparency, diagnosis is impossible.",
        },
        {
          title: "Business architecture, not a set of unrelated actions",
          whatItMeans:
            "You get not a “list of ideas”, but a working model: what exactly needs to change in marketing, sales, finance, HR and operations - and in what sequence - for the business to become manageable and sustainable.",
          clientGets: [
            "The target framework for key functions is an operating model, not ideas on a whiteboard.",
            "Roadmap of changes with priorities: what is implemented in the first 45 days, what after",
            "Logic of relationships between departments, roles and metrics",
            "RACI matrix: who is responsible, who executes, who coordinates for each process",
          ],
          important:
            "This works when the owner and key managers are willing to look at the business as a single system, and not as a set of independent functions.",
        },
        {
          title: "Implementation brought to a management rhythm",
          whatItMeans:
            "Every regulation, every rhythm, every metric is tested in the real conditions of your business - and only after that is fixed as a standard. The operating system ceases to depend on mood and presence - it works according to the protocol.",
          clientGets: [
            "Implemented cadence: regular meetings, check-ins, control points",
            "List of regular management actions for each function: who does what and at what frequency",
            "Control metrics and escalation points: the system itself signals deviations, does not wait for the owner’s participation",
            "A clear area of ​​responsibility for each stage of implementation: who is the owner, who executes, who approves",
          ],
          important:
            "This result is only possible with the active participation of the owner and key managers at critical points of implementation. Without buy-in, change will stall where it meets resistance from the team.",
        },
        {
          title: "A team that better understands how to maintain the system",
          whatItMeans:
            "Your team understands how to work within the new logic, support changes, and not slip back into manual control. BBI's departure is not a loss, but a planned transfer. Dependence on external partner = 0.",
          clientGets: [
            "Trained key employees: understand their role, metrics and responsibilities",
            "Fixed work rules: regulations, SOP, playbook - expertise belongs to the company, not the people",
            "Transferred control logic: how to control, how to escalate, how to prevent the system from degrading",
            "A management loop that holds together without external support",
          ],
          important:
            "The effect directly depends on who exactly is included in the project on the client’s side. If key participants are not involved, the system does not take root. If they are involved, they stay and work without us.",
        },
        {
          title: "A business that is less dependent on manual holding by the owner",
          whatItMeans:
            "Business works according to a system - through dashboards, protocols and management rhythm. The owner reclaims the role of Architect: managing strategy rather than putting out operational fires 24/7.",
          clientGets: [
            "Roles and areas of responsibility are fixed: each process has an owner, each decision has a clear protocol",
            "Management decisions are made based on data, and not on the personal participation of the owner",
            "Execution is predictable: standards, metrics and rhythm maintain quality without manual control",
            "Growth is manageable: scaling follows the model and does not create a new level of chaos",
          ],
          important:
            "This is not a “quick effect in a week” or “autopilot without an owner.” This is the result of systematic implementation and management discipline, which is supported by the owner himself. Up to 10 hours a week - not because the business works itself, but because the system is done correctly.",
        },
      ],
      finalAccent: {
        title: "The result of working with BBI is a protected and managed business asset",
        text: "Working with BBI is not a set of improvements to individual features or a consultation with recommendations. It is a transition from fragmented management to a seamless, transparent and repeatable business asset that belongs to the owner - technically, legally and operationally.",
        ctaLabel: "Start with diagnostics",
      },
    },
    process: {
      eyebrow: "Approach",
      title: "How we work",
      approaches: [
        {
          title: "We design",
          description:
            "We define the target state and architecture. Not “as is customary” - as your business needs.",
        },
        {
          title: "Let's dive in",
          description:
            "We analyze processes, finances, sales and teams. We find bottlenecks and real causes of failures.",
        },
        {
          title: "Building architecture",
          description:
            "Rhythm, regulations, dashboards, areas of responsibility - into a single system, not into separate “improvements”.",
        },
        {
          title: "Let's implement",
          description:
            "We implement it daily, train the team, transfer control. We remain a partner for sustainability.",
        },
      ],
      ctaLabel: "Start with diagnostics",
    },
    whyBbi: {
      title: "Why BBI is not an agency or consulting",
      subtitle:
        "Most contractors work with symptoms: launching advertising, writing a strategy, hiring people. But systemic business failures live deeper - in management gaps, in dependence on the “irreplaceable”, in the absence of a single truth in the numbers. Point solutions don't work here. We need architecture.",
      topCards: [
        {
          label: "Not an agency",
          intro:
            "The agency is the performer. It takes a task, completes it and reports on its KPIs: coverage, leads, clicks. But responsibility for the results of the business remains with the owner.",
          outcomeBullets: [
            "Each function lives in its own “black box”: marketing does not know what is happening in sales",
            "The owner still remains a bottleneck - now also between contractors",
            "Key data, access and developments are stored by the agency, not by the company",
            "When the contractor leaves, the results go away",
          ],
        },
        {
          label: "Not consulting",
          intro:
            "Consulting is an analyst. He studies the business, formulates a diagnosis and makes recommendations. Implementing, achieving results, working with the team’s resistance is no longer his zone.",
          outcomeBullets: [
            "Decisions remain at document level",
            "The team does not bring the changes to the rhythm",
            "The owner is carrying everything on himself again",
            "Business understands “what to do”, but does not move into sustainable implementation",
          ],
        },
      ],
      wideCard: {
        label: "BBI - operating partner",
        intro:
          "We do not sell marketing services and do not leave the owner alone with recommendations. We enter the business as management system architects: we uncover the real causes of failures, design the target state and implement changes hand in hand with the team. After our work, what remains is not a report - what remains is a working system that belongs to the company.",
        outcomeBullets: [
          "We start with diagnostics: we reveal system holes, call them by their proper names, identify root causes - not symptoms",
          "We design the target architecture: operating model, roles, metrics, control contours - according to the scale and ambitions of the owner",
          "We are building a single management circuit: marketing, sales, finance, HR and operating systems work according to the same rules and the same numbers",
          "We accompany the implementation for 45–90 working days: we do not recommend it - we do it together with the team until the changes become practice",
          "We transfer the system to the team: asset ownership, regulations and management rhythm remain within the business",
        ],
      },
      approachEyebrow: "Our approach",
      comparisonTable: {
        columnHeaders: ["Parameter", "Agency", "Consulting", "BBI operating partner"],
        rows: [
          ["Role", "Task performer", "Advisor", "Architect + integrator + implementer"],
          ["Depth", "One tool/channel", "Analysis and recommendations", "Entire management system"],
          [
            "Presence",
            "Remote, per task",
            "Sessions and reports",
            "Inside the business until the CCR (valuable final result)",
          ],
          ["Responsibility", "For their scope", "For recommendations", "For achieving the CCR"],
          ["Result", "Completed task", "Document/strategy", "Working system"],
          ["After departure", "Stops", "Document remains", "System remains"],
        ],
      },
    },
    casesBlog: {
      title: "Cases and blog",
      casesTitle: "Cases",
      blogTitle: "Blog",
      casesLabel: "All cases",
      blogLabel: "All articles",
      readMore: "More details",
      ctaLabel: "Start with diagnostics",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How long does the project last?", a: "Diagnostics - design of the target state of the business - implementation (90+ days) - transfer of the business as a protected and systematized asset. The exact timing depends on the scale." },
        { q: "Working remotely?", a: "Yes, but with regular visits. Immersion in processes requires presence in the office." },
        { q: "Is a small business suitable?", a: "We focus on a turnover of $30k/month and a team of 15 people. Business under 5 years or a startup on PMF - usually not." },
        { q: "How are you different from agencies and consultants?", a: "We do not sell watches (agency). We do not give “takeaway” recommendations (consulting). We implement it ourselves and stay until the systems are stabilized." },
        { q: "When do you say no?", a: "The owner is not involved. No access to data. We need an agency model. Business up to 5 years or startup. The expectation to “guarantee growth” without the willingness to change the system." },
      ],
    },
    finalCta: {
      title: "Business is growing - management can't keep up? Start with diagnosis",
      ctaLabel: "Start with diagnostics",
      subtitle: "Understand the real points of failure rather than treating the symptoms",
    },
    pillars: {
      title: "Shield. Lever. System.",
      items: [
        {
          title: "Shield",
          description:
            "Asset protection, ownership, legal armor, transparent finances.",
          details:
            "The shield is not “security in general.” We are talking about transferring assets and control to the company - so that the business does not depend on people, contractors and “virtual numbers”. We do not “calm down” - we reveal vulnerabilities and close them with a system: ownership, legal armor, transparent finances, personnel stability.",
          linkLabel: "More details",
          href: "/pillars/shield",
        },
        {
          title: "Lever",
          description:
            "Operational rhythm, end-to-end analytics, sales system without “stars”.",
          details:
            "Leverage is not “we’ll make you 10x stronger” (that’s a dangerous promise). We are talking about control points that can be influenced for a measurable result: operational rhythm (cadence), end-to-end analytics, a sales system without “stars”, standards and reproducibility.",
          linkLabel: "More details",
          href: "/pillars/leverage",
        },
        {
          title: "System",
          description:
            "Roles are fixed, processes are standardized, changing people does not break the system.",
          details:
            "The system is the antithesis of “heroism” and manual control. We are talking about replacing the owner’s personal pressure with management rhythm and regulations. We are building a mechanism where every process is described, every result is predictable, and the departure of an employee is a “planned transfer of competencies” and not a stop signal for the business.",
          linkLabel: "More details",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "BBI is not a neutral contractor",
      description:
        "We take the owner's side. We tell the hard truth, reveal vulnerabilities and fix them systematically - so that the business becomes an autonomous asset.",
    },
  },
  about: {
    heroNav: {
      prev: "Previous screen",
      next: "Next screen",
      pagesGroup: "Block screens",
    },
    heroPages: [
      {
        title: "Bold Brands International",
        body:
          "Operating Partner for owners and CEOs. We assemble a holistic system from disparate practices: a management circuit, financial truth and protected assets that can be relied upon for growth.",
      },
      {
        title: "Shield, Lever. System",
        body:
          "We are building a Shield (ownership and asset protection), a Lever (operating system, sales, analytics) and a System (management rhythm, standards, RACI) so that the business rests on the mechanism, and not on “heroes.”",
      },
      {
        title: "Owner's partner during growth stages",
        body:
          "Our task is to make the business look like a managed asset: with a unified financial picture, registered rights to key assets and a system.",
      },
    ],
    who: {
      title: "Who are we?",
      text:
        "BBI (Bold Brands International) - Operating Partner (RevOps). We do not advertise, do not sell SMM and do not limit ourselves to the presentation of the strategy. Our area of ​​responsibility is to turn a business into an autonomous and protected asset that the owner manages through numbers and a system.",
      emphasis:
        "BBI is not a contractor or a “third party.” We stand by the owner and his business, consistently protecting his assets, data and controllability.",
    },
    principles: {
      title: "Core Beliefs",
      items: [
        {
          title: "We are on the side of the owner and CEO",
          body:
            "Not a neutral position “between everyone.” We take the side of the person who bears the real risk - financial, reputational, operational. It is his interests that determine our every decision.",
        },
        {
          title: "We are for an honest look at business - even when it is inconvenient",
          body:
            "Calling problems by their names is not harshness, but respect. We show where a business is really losing money, manageability and value. A comfortable illusion costs more than the hard truth - in money and time.",
        },
        {
          title: "System is more important than talent - always",
          body:
            "“Irreplaceable” people are risk disguised as value. We build models in which expertise resides in the company's processes and standards, rather than in the head of one person. The departure of any employee is a planned transition, not a disaster.",
        },
        {
          title: "We know the threats from within - not from textbooks",
          body:
            "The situations we work with - theft of databases, blackmail of the “irreplaceable”, opaque financial schemes, dependence on agencies - we have dealt with in real businesses and have encountered this ourselves. This is not a theory. This is a practice that we can recognize and stop before it causes damage.",
        },
      ],
    },
    manifesto: {
      title: "What are we up against?",
      items: [
        {
          title: "Against empty promises.",
          body:
            "Recommendations, strategies and “beautiful presentations” that are not implemented are an illusion of work. We take responsibility for ensuring that changes go into real practice and do not end up in the “for history” folder.",
        },
        {
          title: "Against “services” instead of a system.",
          body:
            "One-time actions without communication with each other have a local effect and do not change the business architecture. We do not “close problems” - we build a management circuit in which problems are solved systematically and reproducibly.",
        },
        {
          title: "Against dependence on people.",
          body:
            "A business that rests on two or three “key” people is not an asset, but a vulnerability. The departure of any one of them can stop the function or destroy customer relationships. We are building a system that works independently of specific individuals.",
        },
        {
          title: "Against opacity.",
          body:
            "Hidden agreements, “gray” financial schemes, databases and “contractor” access - all this reduces the real value of the business and creates risks that the owner is the last to know about. Transparency is not an option, but a basic condition for a managed business.",
        },
        {
          title: "Against fire fighting.",
          body:
            "The constant “solving urgent” mode does not leave resources for systemic changes. We do not come to help withstand the next crisis - we come so that crises cease to be the norm.",
        },
        {
          title: "Against working “for” the owner.",
          body:
            "We are not a team replacement or an “external CEO.” Our task is to build and transfer the system so that after our departure the business remains completely independent. Dependency on BBI after project completion = 0.",
        },
      ],
    },
    team: {
      title: "Team",
      members: [
        {
          name: "First Name Last Name",
          role: "CEO",
          note: "Builds business protection as a system, not a set of services.",
        },
        {
          name: "First Name Last Name",
          role: "Operating Partner",
          note: "Leads the transformation and is responsible for the result, not the process.",
        },
        {
          name: "First Name Last Name",
          role: "RevOps specialist",
          note: "Builds rhythm, analytics and control in operations.",
        },
        {
          name: "First Name Last Name",
          role: "RevOps specialist",
          note: "Builds a sales system where results are more important than charisma.",
        },
      ],
    },
    cta: {
      title: "Do you want to know if we are right for each other?",
      description: "start with diagnostics",
      form: {
        name: "Name",
        phone: "Telephone",
        message: "Briefly about the request",
        submit: "send",
      },
    },
  },
  footer: {
    copyright: "© 2026 BBI (Bold Brands International). All rights reserved.",
    tagline: "Bold Brands International is your trusted operating partner.",
    aboutTitle: "About the company",
    aboutLinks: [
      { label: "How we work", href: "/work" },
      { label: "Cases", href: "/cases" },
      { label: "Blog", href: "/blog" },
    ],
    socialTitle: "We are",
    locations: [
      {
        city: "Bishkek",
        address: "st. Matrosova, house 102",
        phone: "+996 999 99 22 44",
        email: "office.kg@boldbrands.pro",
        socials: {
          instagram: "https://www.instagram.com/boldbrands.international/",
          facebook: "https://www.facebook.com/boldbrands.kg",
          whatsapp: "https://wa.me/996999992244",
          linkedin: "https://www.linkedin.com/in/boldbrands-international-857b78329/",
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
          linkedin: "https://www.linkedin.com/in/boldbrands-international-857b78329/",
        },
      },
    ],
    addressLabel: "Address",
    phoneLabel: "Telephone",
    emailLabel: "E-mail",
    workingHoursLabel: "We are working",
    workingHours: "Mon-Fri: 09:00-18:00",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy",
  },
  cases: {
    hero: {
      eyebrow: "Real results",
      title: "Cases: a systematic approach in action",
      description:
        "We show not “we launched advertising,” but how we built protection, levers and a system. Context, problem, BBI action and measurable outcome.",
      heroImage: "/brand/cases-war-room-hero.png",
    },
    list: {
      sectionTitle: "Relevant cases",
      sectionEyebrow: "Case navigation",
      sectionSubtitle: "Choose a case for your context",
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
      operations: "OS",
      marketing: "Marketing",
      sales: "Sales",
      finance: "Finance",
      hr: "HR",
      legal: "Legal protection",
      smb: "SMB",
      mid: "Mid-market",
      enterprise: "Enterprise",
    },
    card: { readMore: "More details" },
    noResults: "No cases were found based on the selected filters.",
    caseDetail: {
      backToCases: "← Cases",
      context: "Context",
      problem: "Problem",
      whatBbiDid: "What did BBI do?",
      result: "Result",
      artifacts: "Artifacts",
      bbiRole: "Role of the BBI",
      infographicForecast: "To",
      infographicResult: "Result",
      infographicTitle: "Results in numbers",
    },
    items: [
      {
        slug: "med-lab-sla",
        headerImage: "/brand/case-med-lab-header.png",
        company: "Medical laboratory (NDA)",
        industry: "Medical services",
        keyResult: "SLA 87%, reactivation of 34% of the database, conversion +21%",
        excerpt: "How to distinguish a system error from a private one: we redesigned the commercial block, divided the roles - we got a manageable funnel and a predictable pipeline.",
        seoTitle: "System error in sales: laboratory case - SLA 87%, reactivation of 34% of the base",
        metaDescription:
          "How to distinguish a system error from a private one: laboratory case - SLA 87%, order frequency + 23%, reactivation of 34% of the database and a predictable pipeline.",
        keywords: [
          "medical laboratory case",
          "SLA in sales",
          "CRM and SLA",
          "managed sales funnel",
          "system error in sales",
          "increase in lead conversion",
          "pipeline by revenue",
          "leads drained",
          "sales department vs marketing",
          "reactivation of the client base",
          "increase in order frequency",
          "LTV growth",
          "SLA control in CRM",
          "construction of a commercial block",
        ],
        h1: "Case of a medical laboratory: how to distinguish a system error from a private one - and return revenue to control",
        tags: ["Sales", "CRM and SLA", "OS"],
        industryFilter: "services",
        directionFilter: "sales",
        scaleFilter: "mid",
        context:
          "Medical laboratory. CRM is set up, SLAs are set, advertising campaigns are running. But when analyzing the effectiveness, it turned out that most of the leads are “merged”, the funnel is not managed. Managers say: “marketing brought the wrong people, the leads are cold.” The audit showed that SLAs were not met, delays were accumulating, and the manager did not respond to notifications. 31% of leads are triggered requests with contacts (you can and should work with them). 59% received only an automatic response - no one worked with them. The problem is not “lead quality”, but that lead management as a process did not exist.",
        problem:
          "A systemic error in the selection of performers: people with administrative functions were appointed to the role of sales managers - receiving requests from regular customers, transferring them for execution, and providing status support. The role of a coordinator/administrator, not a salesperson. The administrator is reactive: accept the flow, close the urgent one. Sales are proactive: conduct a dialogue, return to contact, withstand refusals. When there is an operational load, the administrator always selects “urgent”, sales – “on a residual basis”. Not a question of motivation, but of function architecture.",
        whatBbiDid: [
          "We divided functions and assigned a measurable result to each role - instead of “strengthening” people.",
          "We transferred the commercial block from the model of “passively waiting for orders” to revenue management: expansion (new clients) + LTV maximization (base development).",
          "The following roles were introduced: Hunter (new clients), Farmer (order frequency, retention, reactivation), KAM (key clients), Administrators (operating system without replacing sales).",
          "We made each role “single-task” based on the result - we removed the confusion, in which sales were eaten up by production turnover.",
        ],
        resultNumbers: [
          { before: "SLAs were not met, delays are the norm", after: "SLA 87%", beforeValue: 15, afterValue: 87, label: "SLA" },
          { before: "Conversion: leads died on auto-responses", after: "+21%", beforeValue: 5, afterValue: 26, label: "Conversion" },
          { before: "Frequency of orders without role per base", after: "+23% in the first month", beforeValue: 10, afterValue: 33, label: "Order frequency" },
          { before: "Sleeping base 4–6 months. no returns", after: "Reactivated 34%", beforeValue: 0, afterValue: 34, label: "Base reactivation" },
        ],
        artifacts: [
          "Role structure Hunter/Farmer/KAM/Admin",
          "SLA control in CRM",
          "Lead processing regulations",
          "Database reactivation process",
        ],
        bbiRole:
          "We separated the systemic from the private. Instead of “punish/train/tighten KPIs”, they eliminated the systemic cause - incorrectly designed roles. Result: a controlled funnel, a predictable revenue pipeline, cash gaps within the acceptable range. BBI redesigned the commercial unit rather than imitating control.",
        sections: [
          {
            title: "Client",
            paragraphs: ["Medical laboratory sphere."],
          },
          {
            title: "Request",
            paragraphs: [
              "The company has set up a CRM, established an SLA, and launches regular advertising campaigns. But when analyzing the effectiveness of advertising campaigns, it turned out that most of the leads were actually “merged”, and the funnel itself was not managed.",
              "The classic conflict began immediately: the managers said that “marketing brought the wrong leads, the leads were cold.”",
            ],
          },
          {
            title: "What the fact audit showed",
            paragraphs: [
              "We raised the chain of processing requests in CRM and saw the real picture:",
            ],
            bullets: [
              "SLAs were not fulfilled by managers, and delays accumulated.",
              "The manager did not respond to notifications about overdue payments in the CRM.",
              "31% of leads came with trigger requests and left their contacts (that is, these were leads with whom you can and should work).",
              "59% of leads received only a system auto-response, after which no one followed up with them.",
            ],
            paragraphsAfterBullets: [
              "That is, the problem was not “lead quality” - the problem was that working with leads as a process did not exist.",
            ],
          },
          {
            title: "Why “punish / train / tighten KPIs” is not always the solution",
            paragraphs: [
              "When a business sees a lead drain, the standard set of measures looks like this:",
            ],
            bullets: [
              "train managers in “sales”,",
              "strengthen control,",
              "introduce a reduction in bonuses,",
              "recalculate KPIs,",
              "force them to “call” and “put the pressure on.”",
            ],
            paragraphsAfterBullets: [
              "This only works if the reason is private: discipline has sagged, the team has relaxed, the manager has under-performed, one or two employees are screwing up.",
              "But a key management skill is to distinguish a systemic error from a private one.",
              "Because if the reason is systemic, any “strengthening” turns into an imitation of control: you will waste time, get a short-term surge in activity, and after 2-3 weeks the system will return to its previous state.",
            ],
          },
          {
            title: "What actually turned out to be: a systemic error in the selection of performers",
            paragraphs: [
              "We went deeper into diagnosis and separated the symptoms from the cause.",
              "It turned out that people who historically performed an administrative function were actually appointed to the role of “sales managers”:",
            ],
            bullets: [
              "accepted requests from regular customers,",
              "submitted a request for execution,",
              "accompanied by status,",
              "solved operational issues.",
            ],
            paragraphsAfterBullets: [
              "That is, it was the role of a “service coordinator/administrator”, not a salesperson.",
              "And here the systemic incompatibility of roles came into play:",
              "The administrator is a reactive role: accept the flow, prevent mistakes, close the urgent, “keep the operating system running.”",
              "Sales is a proactive role: conduct a dialogue, bring the client back into contact, withstand refusals, push until a solution is reached, respect timing.",
              "Under operational load conditions, the administrator will always choose “urgent and last minute”, and sales will become “on a residual basis”. And this is not a question of motivation. This is a function architecture issue.",
              "The result of the diagnosis: the problem was systemic - not “bad leads” or “bad managers”, but incorrectly designed roles and responsibilities.",
            ],
          },
          {
            title: "Solution: Redesign the commercial block, not “strengthen” people",
            paragraphs: [
              "Instead of treating the symptom (punish/train), we changed the system - divided the functions and assigned a measurable result to each role.",
              "We transferred the commercial unit from a model of “passively waiting for orders” to a revenue management model through two key levers:",
            ],
            bullets: [
              "Expansion is a systematic capture of market share through new clients (in our case, segments where it is objectively profitable for the laboratory to grow).",
              "LTV maximization - development of the current base: increase in frequency, average check, returns from sleepers, retention.",
            ],
            paragraphsAfterBullets: [
              "New structure by roles and results:",
              "We separated the functions of “sales”, “base development” and “operational support” so that sales were not “eaten up” by production turnover.",
              "1) Manager-Hunter (attracting new clients) - is responsible for new clients and their launch into the regular order cycle.",
              "2) Manager-Farmer (development of the current base) - responsible for increasing the share in the client’s purchases, frequency of orders, retention and returns.",
              "3) KAM / Line Manager (key clients and major contracts) - responsible for strategic relationships and protection of major contracts.",
              "4) Administrators (OS and service) - are responsible for the correct processing of orders and the quality of communication by status - but do not replace sales.",
              "Key point: each role should be “single-task” in terms of results. When the roles are mixed, a business loses money “in silence” and then looks for those to blame in marketing.",
            ],
          },
          {
            title: "What has changed after implementation: the result in numbers",
            paragraphs: [
              "When we removed the systemic cause, the metrics moved quickly and predictably - because the system began to work as a system, and not as a collection of heroic efforts.",
            ],
            bullets: [
              "The SLA leveled out to 87% - delays were no longer the norm, control became regular, lead processing became stable.",
              "This resulted in an increase in conversions by 21%: requests stopped “dying” due to auto-responses and delays, more leads reached a real dialogue and an order.",
              "The frequency of orders from one client increased by 23% in the first month - due to the emergence of a role responsible specifically for database development and returns.",
              "34% of the customer base was reactivated, which went into “sleep mode” and did not place orders for 4-6 months - because returning customers became a process, not an accident.",
            ],
            insertInfographic: true,
          },
          {
            title: "Financial effect: cash gaps went “into the acceptable range”",
            paragraphs: [
              "It is especially important to note: improving SLA and increasing conversions had not only a commercial, but also a financial and managerial effect.",
              "When the funnel became manageable, the company received a predictable revenue flow - a clear volume of future revenues tied to CRM stages and SLA discipline.",
              "This in turn:",
            ],
            bullets: [
              "reduced recurring cash gaps because receipts were no longer a “lottery”;",
              "made it possible to plan payments and purchases not “by feeling”, but by revenue forecast based on the movement of the funnel;",
              "reduced dependence on manual control and rush jobs - money became a consequence of the process, not heroism.",
            ],
          },
          {
            title: "Main conclusion",
            paragraphs: [
              "This case is about one thing: you cannot make management decisions without separating the systemic from the private.",
              "If we followed the typical path of “managers are to blame - we fine/train/strengthen KPIs,” the company would get a short-term effect and then return to the same point, because the architecture of roles and responsibilities would remain the same.",
              "We did it differently: we eliminated the systemic cause - and got measurable results in SLA, conversions, order frequency, database reactivation and, most importantly, revenue predictability.",
            ],
          },
        ],
      },
    ],
  },
  blog: {
    hero: {
      title: "Blog and expertise",
      description: "Articles about building autonomous and secure business systems.",
    },
    filters: {
      all: "All",
      marketing: "Marketing",
      finance: "Finance",
      operations: "OS",
    },
    noPosts: "There are no articles in this category yet.",
    card: { readMore: "More details" },
    article: { backToBlog: "← Blog" },
    posts: [
      {
        slug: "5-shagov-avtonomnoe-upravlenie",
        category: "OS",
        categoryKey: "operations",
        title: "5 steps to autonomous driving",
        description: "How to build a rhythm, SOP and execution control so that the business operates without the manual intervention of the owner.",
        image: "/blog/operations-autonomous.png",
        sections: [
          {
            title: "Why doesn't the \"director\" solve the problem?",
            paragraphs: [
              "Autonomous management is not about “hiring a good director.” We are talking about the system: the rhythm of meetings, SOPs, KPI panels and execution control. When all six pillars work together, the owner can step away from the operating room and focus on strategy.",
              "A classic mistake is to replace the system with a person. While the director “keeps everything in his head,” the business depends on one person. The system works without heroes.",
            ],
            image: "/blog/director-problem.png",
          },
          {
            title: "Step 1: Diagnosis of ruptures",
            paragraphs: [
              "Where are the breaks in the “decision → execution → control” chain? It often turns out that decisions are made at meetings, but are not followed through. Or control is divorced from reality - reports paint a picture that does not coincide with the facts.",
              "Diagnostics reveals: who is responsible for what, how responsibility is transferred, where information is lost. Without this card, any improvements are shooting blindly.",
            ],
            image: "/blog/steps-alt-1.png",
          },
          {
            title: "Step 2: Management Rhythm",
            paragraphs: [
              "Weekly planning meetings, monthly reviews, quarterly strategic sessions. Rhythm creates predictability: the team knows when and what to discuss and what decisions to make.",
              "Rhythm is not “meeting for the sake of meeting.” Every event has a purpose, an agenda and an expected outcome. Otherwise it's just a waste of time.",
            ],
            image: "/blog/steps-alt-2.png",
          },
          {
            title: "Step 3: SOPs and checklists",
            paragraphs: [
              "Processes must be described so that a new person can enter and perform a task as instructed. SOP is not a bureaucracy, but a guarantee of reproducibility.",
              "Checklists record critical stages. They don't replace thinking, but they do eliminate forgotten steps and \"I thought you did it.\"",
            ],
            image: "/blog/sop-step-3.png",
          },
          {
            title: "Step 4 and 5: Dashboards and execution control",
            paragraphs: [
              "One “truth” in numbers: finances, funnel, operating system. Without Excel files and “everyone counts in their own way.” Dashboards give the owner transparency without diving into the details.",
              "Execution control is not “hoping that they will do it,” but a system for recording deadlines, statuses and escalations. Is the task overdue? The system signals. The person responsible is clear.",
            ],
            image: "/blog/step-4-5-dashboards.png",
          },
        ],
        cta: { label: "Download checklist", href: "/contacts" },
      },
      {
        slug: "diagnostika-problemy-biznesa",
        category: "Diagnostics",
        categoryKey: "diagnostics",
        title: "Diagnostics: how to uncover real business problems",
        description: "Why “everything is bad” is rarely true and how to find the real points of failure in the system.",
        image: "/blog/diagnostics-analysis.png",
        sections: [
          {
            title: "Why is diagnostics needed?",
            paragraphs: [
              "Diagnostics is not about “finding the culprit.” It's about understanding where the system fails. Often the owner feels that “something is wrong”: there is revenue, but the profit is disappearing; The command seems to be working, but there is no result. The reason is blurry.",
              "Without a diagnosis, any treatment is guesswork. You can change people, introduce new tools, but if the root of the problem is not found, the symptoms will return.",
            ],
            image: "/blog/diagnostics-why-search.png",
          },
          {
            title: "Three types of fault signals",
            paragraphs: [
              "Chaos in numbers is the first signal. If finances are calculated differently in different departments, there is no single picture. Decisions are made blindly, forecasts do not match the facts.",
              "Dependence on people is the second. When one person keeps a key process in their head, the business is fragile. His departure, illness or burnout = disruption of the entire chain.",
              "The opacity of the funnel is the third. Where do clients come from? How much does a lead cost? What is the conversion rate at each stage? No answers - only intuition and hope.",
            ],
            image: "/blog/diagnostics-signals.png",
          },
          {
            title: "Six pillars as a diagnostic map",
            paragraphs: [
              "BBI conducts diagnostics through the prism of six pillars: operations, marketing, sales, finance, HR, legal. protection. Each pillar is an area of ​​risk and a point of growth.",
              "A failure in one leads to others. Problems in sales can be a result of marketing or operations. Diagnostics show relationships and priorities.",
            ],
            image: "/blog/diagnostics-pillars-map.png",
          },
        ],
        cta: { label: "Start with diagnostics", href: "/#contact-form" },
      },
      {
        slug: "ekonomika-kanalov-marketing",
        category: "Marketing",
        categoryKey: "marketing",
        title: "Channel economy: how to stop wasting your budget",
        description: "End-to-end analytics, CAC, LTV and managed growth instead of “launch advertising and wait.”",
        image: "/blog/ekonomika-kanalov-reshenie.png",
        sections: [
          {
            title: "Why marketing without numbers is a lottery",
            paragraphs: [
              "Marketing without channel economics is a lottery. Money goes to Yandex, Google, social networks, but it is not clear which channel pays off and which one simply “eats” the budget. Revenue growth with unprofitable CAC is an illusion of success.",
              "“We invest in marketing” is not a strategy. You need to know: how much a lead from each channel costs, what the client’s LTV is, whether the channel pays for itself over its life cycle.",
            ],
            image: "/blog/marketing-bez-tsifr-lotereya.png",
          },
          {
            title: "End-to-end analytics as a basis",
            paragraphs: [
              "From click to payment: which channel led, how much the lead cost, what the client’s LTV is. Without end-to-end analytics, decisions are made based on feelings and reports with different methodologies.",
              "Setting up end-to-end analytics is the first step. Only then can we talk about channel management and projected growth.",
            ],
            image: "/blog/skvoznaya-analitika-barchart.png",
          },
          {
            title: "CAC, LTV and managed growth",
            paragraphs: [
              "CAC (customer acquisition cost) and LTV (lifetime value) are the main metrics. If CAC exceeds LTV, growth is unprofitable. Even with revenue growth.",
              "Managed growth - when you can predict the result. Launched a channel, measured, scaled or turned off. Without “hope it will shoot” and “let’s wait another month.”",
            ],
            image: "/blog/cac-ltv-upravlyaemyj-rost.png",
          },
        ],
      },
      {
        slug: "sistemnye-prodazhi",
        category: "Sales",
        categoryKey: "sales",
        title: "System sales without “stars”",
        description: "Standards, scripts and CRM instead of depending on the charisma of the manager.",
        image: "/blog/sistemnye-prodazhi-process-chain.png",
        sections: [
          {
            title: "What is system sales",
            paragraphs: [
              "Systemic sales - when the result does not depend on a specific person. Communication standards, scripts, CRM and funnel control create a repeatable result. A new manager can come in and post acceptable numbers in a short time.",
              "This is not about “killing creativity” or “making everyone talk the same.” We are talking about the base: how to process a lead, what stages of the funnel, how to transfer it to delivery.",
            ],
            image: "/blog/sistemnye-prodazhi-checklist.png",
          },
          {
            title: "The problem of \"stars\"",
            paragraphs: [
              "One manager handles 80% of deals - a familiar picture. His departure, vacation or burnout = disaster. Business is hostage to one person.",
              "The system allows you to scale and replace people without losing results. Not “to find another star,” but to build a funnel where the result comes from the process, not charisma.",
            ],
            image: "/blog/sistemnye-prodazhi-zvezdy-lovushka.png",
          },
          {
            title: "CRM as a control tool",
            paragraphs: [
              "CRM is not a “base for reports”, but a control tool. Funnel, lead processing time, conversions at stages. Everything is measurable. Who is stuck, where is the bottleneck, who does not close leads on time.",
              "BBI builds sales as a system: from first contact scripts to transfer to delivery. Leverage, not “reliance on talent.”",
            ],
            image: "/blog/crm-element-kontrolya.png",
          },
        ],
      },
      {
        slug: "finansovaya-prozrachnost",
        category: "Finance",
        categoryKey: "finance",
        title: "Financial transparency: one truth in numbers",
        description: "How to collect accounting so that the owner sees the real picture, and not versions of different departments.",
        image: "/blog/finansovaya-prozrachnost-podpis.png",
        sections: [
          {
            title: "What does \"one truth\" mean?",
            paragraphs: [
              "One truth in numbers is when finances are considered uniformly, without a “CFO version” and “OS version.” The owner sees one picture: revenue, costs, margin, cash flow.",
              "Nowadays it often happens differently: finance gives one figure, operations gives another, sales gives a third. There are three versions of the “truth” at the meeting. Decisions are made in the fog.",
            ],
            image: "/blog/finansovaya-odna-pravda.png",
          },
          {
            title: "Fragmented accounting and its consequences",
            paragraphs: [
              "Each department counts differently. Excel files multiply, methodologies vary. The result is conflicting reports and decisions based on inaccuracies.",
              "Accounting standards, procurement control, cost, margins - everything should be in a single system. Dashboards, not miscellaneous reports.",
            ],
            image: "/blog/finansovaya-fragmentirovannyj-uchet.png",
          },
          {
            title: "Finance as the basis of the pillars",
            paragraphs: [
              "Finance is one of the six pillars of BBI. Without transparency here, the remaining pillars are built on sand. It is impossible to make marketing, sales or operations decisions without seeing the financial picture.",
            ],
            image: "/blog/finansy-osnova-stolpov.png",
          },
        ],
      },
      {
        slug: "hr-kak-sistema",
        category: "HR",
        categoryKey: "hr",
        title: "HR as a system: not “find people”, but build sustainability",
        description: "Roles, areas of responsibility, onboarding and a culture that does not break when the team changes.",
        image: "/blog/hr-kak-sistema-ustojchivost.png",
        sections: [
          {
            title: "HR is not just about recruitment",
            paragraphs: [
              "HR is not about “finding good people.” We are talking about the system: roles, areas of responsibility, onboarding, culture. The team must be repeatable. If a key person has left, the process can be transferred to someone else according to clear rules.",
              "Selection without a system provides one-time solutions. The system is stable when changing people.",
            ],
            image: "/blog/hr-ne-tolko-podbor.png",
          },
          {
            title: "RACI, instructions and boundaries",
            paragraphs: [
              "RACI, job descriptions, clear boundaries - this reduces dependence on “irreplaceable” employees. Any process can be described and conveyed.",
              "If “only Vasya knows how it works,” this is not about Vasya’s unique abilities, but about the lack of documented processes.",
            ],
            image: "/blog/crm-instrument-kontrolya.png",
          },
          {
            title: "Onboarding and culture",
            paragraphs: [
              "Onboarding - how a new person enters the system. If he has to “figure it out for himself” or “see what others do,” the system is broken. Onboarding should be structured.",
              "HR as a pillar is part of the big picture. Without a stable team, operations, sales and marketing operate at risk. One step away and the chain breaks.",
            ],
            image: "/blog/hr-onboarding-kultura.png",
          },
        ],
      },
    ],
  },
  contacts: {
    hero: {
      eyebrow: "Screening",
      title: "Sign up for screening",
      description:
        "Fill out the form - we will contact you within 24 hours and discuss the scale, growth areas and the possibility of cooperation.",
    },
    form: {
      name: "Name",
      company: "Company/business",
      contact: "Phone or messenger",
      turnoverTeamSize: "Turnover or team size (optional)",
      request: "Briefly about the request",
      submit: "Send",
      successMessage: "The application has been sent. We will contact you shortly.",
      errorMessage: "Failed to submit application. Try again later or write to us directly.",
    },
  },
  ui: {
    notFoundTitle: "Page not found",
    notFoundDescription: "Check the link or return to the main page.",
    notFoundHome: "Home",
    searchPlaceholder: "Search",
    searchSubmit: "Find",
    footerLogoAria: "BBI - home",
    contactsConsentBeforeLink:
      "By clicking \"Submit\", I give my consent to the ",
    contactsConsentLinkText: "processing of my personal data",
    contactsConsentAfterLink: ".",
    privacyModalCloseAria: "Close privacy policy window",
    privacyPageTitle: "Privacy Policy",
    privacyModalTitle: "Privacy Policy",
  },
};
