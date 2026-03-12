export type NavItem = {
  label: string;
  href: string;
};

export type HomeCard = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export type HomeStep = {
  title: string;
  description: string;
};

export type HomePillar = {
  title: string;
  description: string;
  /** Expanded content shown when "Подробнее" is clicked */
  details?: string;
  linkLabel: string;
  href: string;
};

export type WorkPillar = {
  key: string;
  title: string;
  group: "Shield" | "Leverage" | "Resilience";
  groupLabel: string;
  summary: string;
  details: string[];
  result: string;
  broken: string;
  actions: string;
};

export type WorkZone = {
  label: string;
  description: string;
  tone: "green" | "yellow" | "red";
};

export type WorkStage = {
  title: string;
  description: string;
};

export type WorkPage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHint: string;
  };
  pillarsIntro: {
    title: string;
    description: string;
    detailsLabel: string;
  };
  pillars: WorkPillar[];
  results: {
    title: string;
    description: string;
    badge: string;
  };
  problems: {
    title: string;
    description: string;
    badge: string;
  };
  actions: {
    title: string;
    description: string;
    badge: string;
  };
  format: {
    title: string;
    description: string;
    zones: WorkZone[];
  };
  stages: {
    title: string;
    description: string;
    steps: WorkStage[];
  };
  responsibility: {
    title: string;
    bbiTitle: string;
    clientTitle: string;
    bbi: string[];
    client: string[];
  };
  targetState: {
    title: string;
    minimumTitle: string;
    minimumDescription: string;
    idealTitle: string;
    idealDescription: string;
  };
  cta: {
    title: string;
    description: string;
    form: {
      name: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
};

export type PillarsPage = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaDescription: string;
};

export type AboutPrinciple = {
  text: string;
};

export type AboutManifesto = {
  text: string;
};

export type TeamMember = {
  name: string;
  role: string;
  note: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  keyResult: string;
  excerpt?: string;
  tags: string[];
  industryFilter: string;
  directionFilter: string;
  scaleFilter: string;
  context: string;
  problem: string;
  whatBbiDid: string[];
  resultNumbers: { before: string; after: string }[];
  artifacts: string[];
  bbiRole: string;
};

export type CasesPage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  filters: {
    industry: string;
    direction: string;
    scale: string;
    all: string;
  };
  filterLabels: {
    retail: string;
    fAndB: string;
    services: string;
    ecom: string;
    other: string;
    operations: string;
    marketing: string;
    sales: string;
    finance: string;
    hr: string;
    legal: string;
    smb: string;
    mid: string;
    enterprise: string;
  };
  card: {
    readMore: string;
  };
  noResults: string;
  caseDetail: {
    backToCases: string;
    context: string;
    problem: string;
    whatBbiDid: string;
    result: string;
    artifacts: string;
    bbiRole: string;
  };
};

export type Dictionary = {
  nav: {
    items: NavItem[];
    cta: string;
  };
  work: WorkPage;
  pillarsPage: PillarsPage;
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cta: string;
      secondaryCta: string;
      secondaryCtaHref?: string;
    };
    icpIntro: {
      eyebrow: string;
      title: string;
      segments: { title: string; description: string; metrics?: string; pain: string }[];
      exclude: string;
      excludeLabel?: string;
    };
    icp: {
      eyebrow: string;
      title: string;
      subtitle?: string;
      cards: HomeCard[];
      ctaLabel?: string;
    };
    icpBridge: {
      label: string;
      title: string;
      description: string;
      highlightPhrase?: string;
      items?: string[];
      ctaLabel?: string;
    };
    whatWeChange: {
      eyebrow: string;
      title: string;
      pillars: { title: string; items: string[] }[];
    };
    whatYouGet: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    process: {
      eyebrow: string;
      title: string;
      approaches: HomeStep[];
      ctaLabel?: string;
    };
    whyBbi: {
      eyebrow: string;
      title: string;
      items: { label: string; text: string }[];
    };
    casesBlog: {
      title: string;
      casesLabel: string;
      blogLabel: string;
      readMore: string;
      ctaLabel?: string;
    };
    pillars: {
      title: string;
      items: HomePillar[];
    };
    faq: {
      title: string;
      items: { q: string; a: string }[];
    };
    finalCta: {
      title: string;
      ctaLabel: string;
      subtitle: string;
    };
    position: {
      title: string;
      description: string;
    };
  };
  about: {
    who: {
      title: string;
      text: string;
      emphasis: string;
    };
    principles: {
      title: string;
      items: AboutPrinciple[];
    };
    manifesto: {
      title: string;
      items: AboutManifesto[];
    };
    team: {
      title: string;
      members: TeamMember[];
    };
    cta: {
      title: string;
      description: string;
      form: {
        name: string;
        phone: string;
        message: string;
        submit: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
  cases: CasesPage & { items: CaseStudy[] };
  blog: BlogPage & { posts: BlogPost[] };
  contacts: ContactsPage;
};

export type BlogSection = {
  title?: string;
  paragraphs: string[];
  image?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  categoryKey: string;
  title: string;
  description: string;
  image?: string;
  sections: BlogSection[];
  cta?: { label: string; href: string };
};

export type BlogPage = {
  hero: {
    title: string;
    description: string;
  };
  card: {
    readMore: string;
  };
  article: {
    backToBlog: string;
  };
};

export type ContactsPage = {
  hero: {
    title: string;
    description: string;
    eyebrow: string;
  };
  form: {
    name: string;
    company: string;
    contact: string;
    turnoverTeamSize: string;
    request: string;
    submit: string;
  };
};
