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
    };
    icp: {
      title: string;
      cards: HomeCard[];
    };
    process: {
      title: string;
      stepLabel: string;
      steps: HomeStep[];
    };
    pillars: {
      title: string;
      items: HomePillar[];
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
};
