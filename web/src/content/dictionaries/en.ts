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
  footer: {
    copyright: "[EN] BBI (Bold Brands International). All rights reserved.",
  },
};
