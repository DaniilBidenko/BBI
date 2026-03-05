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
