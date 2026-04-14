export type NavItem = {
  label: string;
  href: string;
};

export type HomeCard = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  /** Признаки / симптомы — для отображения в карточке и модалке */
  symptoms?: string[];
  /** Намёк на решение — показывается в модалке */
  solutionHint?: string;
  /** Модалка: вводный текст вместо заголовка карточки */
  modalLead?: string;
  partnershipCriteriaLabel?: string;
  partnershipCriteria?: string[];
  partnershipResultsLabel?: string;
  partnershipResults?: string[];
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
  /** Rich content for the “подробнее” modal on the valuable-result (ЦКР) cards */
  resultExpanded?: {
    whatWeBuild: string;
    partnerOutcomes: string[];
  };
  /** Expanded “broken” symptoms shown under Подробнее */
  brokenExpanded?: string[];
  /** Structured deliverables for the “what BBI does” cards */
  actionsExpanded?: {
    partnerHeading: string;
    sections: { title: string; items: string[] }[];
  };
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
  /** Current page label in the work hero breadcrumbs */
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHint?: string;
  };
  scheme: {
    centerLabel: string;
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
    resultModalWhatWeBuild: string;
    resultModalPartnerLabel: string;
    resultModalCloseLabel: string;
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
    description?: string;
    bbiTitle: string;
    clientTitle: string;
    bbi: string[];
    client: string[];
    bbiDetailed?: { title: string; description: string }[];
    clientDetailed?: { title: string; description: string }[];
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
  ctaButtonLabel?: string;
  ctaDescription: string;
};

export type AboutPrinciple = {
  title: string;
  body: string;
};

export type AboutManifesto = {
  title: string;
  body: string;
};

export type TeamMember = {
  name: string;
  role: string;
  note: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Абзацы после списка (если нужен порядок: абзацы — список — ещё абзацы) */
  paragraphsAfterBullets?: string[];
  insertInfographic?: boolean;
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
  /** SEO: title страницы */
  seoTitle?: string;
  /** SEO: meta description */
  metaDescription?: string;
  /** SEO: keywords (основные и дополнительные) */
  keywords?: string[];
  /** Кастомный H1 (если не задан — используется company) */
  h1?: string;
  /** Фото только в шапке страницы кейса (не на карточках в списке) */
  headerImage?: string;
  context: string;
  problem: string;
  whatBbiDid: string[];
  resultNumbers: {
    before: string;
    after: string;
    beforeValue?: number;
    afterValue?: number;
    label?: string;
  }[];
  artifacts: string[];
  bbiRole: string;
  /** Дополнительные секции для полной статьи (если заданы — рендерится развёрнутый контент) */
  sections?: CaseStudySection[];
};

export type CasesPage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    /** Фон hero на странице списка кейсов */
    heroImage?: string;
  };
  list: {
    sectionTitle: string;
    sectionEyebrow: string;
    sectionSubtitle: string;
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
    infographicForecast: string;
    infographicResult: string;
    infographicTitle: string;
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
      segments: { title: string; description: string; details?: string; metrics?: string; pain: string }[];
      exclude: string;
      excludeLabel?: string;
    };
    icp: {
      eyebrow: string;
      title: string;
      subtitle?: string;
      cards: HomeCard[];
      ctaLabel?: string;
      modal?: { scenarioLabel: string; signsLabel: string; solutionLabel: string };
    };
    icpBridge: {
      label: string;
      title: string;
      description: string;
      highlightPhrase?: string;
      items?: string[];
      ctaLabel?: string;
    };
    helpAndProcess?: {
      label?: string;
      title: string;
      description?: string;
      stages: {
        title: string;
        description: string;
        result?: string;
        clientGets?: string[];
      }[];
      ctaLabel?: string;
    };
    whatWeChange: {
      eyebrow: string;
      title: string;
      pillars: { title: string; subtitle?: string; items: string[] }[];
    };
    whatYouGet: {
      eyebrow: string;
      title: string;
      subheadline?: string;
      items?: string[];
      cards?: {
        title: string;
        whatItMeans: string;
        clientGets: string[];
        important: string;
      }[];
      finalAccent?: {
        title: string;
        text: string;
        ctaLabel: string;
      };
    };
    process: {
      eyebrow: string;
      title: string;
      approaches: HomeStep[];
      ctaLabel?: string;
    };
    whyBbi: {
      eyebrow?: string;
      title: string;
      subtitle?: string;
      items?: { label: string; text: string }[];
      topCards?: { label: string; intro: string; outcomeBullets: string[] }[];
      wideCard?: { label: string; intro: string; outcomeBullets: string[] };
    };
    casesBlog: {
      title: string;
      casesTitle?: string;
      blogTitle?: string;
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
    heroPages: {
      title: string;
      body: string;
    }[];
    heroNav: {
      prev: string;
      next: string;
      pagesGroup: string;
    };
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
    tagline?: string;
    aboutTitle: string;
    aboutLinks: { label: string; href: string }[];
    socialTitle: string;
    locations: {
      city: string;
      address?: string;
      phone?: string;
      email?: string;
      socials?: { instagram?: string; facebook?: string; whatsapp?: string; telegram?: string };
    }[];
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    workingHoursLabel?: string;
    workingHours?: string;
    privacyLabel?: string;
    privacyHref?: string;
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
  filters: {
    all: string;
    marketing: string;
    finance: string;
    operations: string;
  };
  noPosts: string;
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
    successMessage?: string;
    errorMessage?: string;
  };
};
