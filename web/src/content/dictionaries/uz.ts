import type { Dictionary } from "./types";

export const uz: Dictionary = {
  nav: {
    items: [
      { label: "Bosh sahifa", href: "/" },
      { label: "BBI haqida", href: "/about" },
      { label: "Qanday ishlaymiz", href: "/work" },
      { label: "Кейslar", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Aloqa", href: "/contacts" },
    ],
    cta: "Ishni boshlash",
  },
  work: {
    hero: {
      eyebrow: "Ish modeli",
      title: "6 tayanch: bitta tizim, xizmatlar to‘plami emas",
      description:
        "Biz operatsiyani marketingdan, marketingni moliyadan ajratib sotmaymiz. Biznes — bu tizim. Bir tayanchdagi teshik boshqalarini ham qulatadi. BBI olti yo‘nalishga bir vaqtning o‘zida kiradi va yagona boshqaruv konturini quradi.",
      ctaLabel: "6 BBI TAYANCHI",
      ctaHint: "Tayanchlar sahifasini ochish",
    },
    pillarsIntro: {
      title: "BBI tizimi",
      description:
        "BBI oltita yo‘nalishni egalar manfaatiga bo‘ysunadigan yagona tizimga birlashtiradi. Bu alohida sotib olinadigan «xizmatlar» emas — barqaror va himoyalangan biznes‑aktivni ushlab turuvchi oltita tayanchdir. Barqarorlik — olti tayanchning natijasi.",
      detailsLabel: "Batafsil",
    },
    pillars: [
      {
        key: "operations",
        title: "Operatsiya",
        group: "Leverage",
        groupLabel: "Rychag",
        summary:
          "Boshqaruv ritmi, SOP, org‑tuzilma, KPI panellari va ijro nazorati.",
        details: [
          "Boshqaruv ritmi va muntazam yig‘ilishlar.",
          "SOP, chek‑listlar, rollar va mas’uliyat.",
          "Dashboardlar, muddat va sifat nazorati.",
        ],
        result:
          "Biznes ritm va qoidalarga ko‘ra ishlaydi, kayfiyatga emas.",
        broken:
          "Yong‘in o‘chirish, xaos, qo‘lda boshqaruv va odamga bog‘liqlik.",
        actions:
          "Org‑tuzilma, reglamentlar, ritm va nazoratni quramiz.",
      },
      {
        key: "marketing",
        title: "Marketing",
        group: "Leverage",
        groupLabel: "Rychag",
        summary:
          "Skvoznoy analitika, kanal iqtisodi, prognozli talab.",
        details: [
          "Kanal iqtisodi va shaffof byudjet.",
          "Skvoznoy analitika va audit.",
          "Byudjetsiz yo‘qotishlarsiz barqaror talab.",
        ],
        result:
          "LID va mijoz narxi aniq, o‘sish boshqariladi.",
        broken:
          "Byudjet «yo‘qoladi», prognoz va nazorat yo‘q.",
        actions:
          "Analitika, voronka, byudjet va metrikalarni sozlaymiz.",
      },
      {
        key: "sales",
        title: "Savdo",
        group: "Leverage",
        groupLabel: "Rychag",
        summary:
          "«Yulduzsiz» tizimli savdo: standartlar, skriptlar, CRM nazorat.",
        details: [
          "Muloqot standartlari va skriptlar.",
          "CRM nazorat, voronka va lead ishlovi.",
          "Xodim almashsa ham natija saqlanadi.",
        ],
        result:
          "Savdo prognozli va odamga bog‘liq emas.",
        broken:
          "«Yulduz»larga bog‘liqlik, jamoa almashsa natija tushadi.",
        actions:
          "Savdo tizimi, reglamentlar, o‘qitish va nazoratni quramiz.",
      },
      {
        key: "finance",
        title: "Moliya",
        group: "Shield",
        groupLabel: "Qalqon",
        summary:
          "Shaffof moliya, boshqaruv hisobi va marja nazorati.",
        details: [
          "Boshqaruv hisobi va plan‑fakt.",
          "Foyda va xarajat shaffofligi.",
          "Kesh‑flow intizomi va risk nazorati.",
        ],
        result:
          "Egasi real foydani ko‘radi va qarorlarni raqamlarga tayaydi.",
        broken:
          "«Bitta haqiqat» yo‘q, kassa uzilishlari, ko‘r joylar.",
        actions:
          "Moliya modeli, hisobot va nazorat qoidalarini quramiz.",
      },
      {
        key: "hr",
        title: "HR",
        group: "Shield",
        groupLabel: "Qalqon",
        summary:
          "Tizimli yollash, onboarding, baholash va kadr zaxirasi.",
        details: [
          "Lavozim profili va yollash standartlari.",
          "Onboarding, o‘qitish, mentoring.",
          "Baholash tizimi va kadrlar o‘sishi.",
        ],
        result:
          "Jamoa barqaror, rollar mustahkam, o‘sish tizimni buzmaydi.",
        broken:
          "Kadrlar oqimi, tartibsiz yollash va odamga bog‘liqlik.",
        actions:
          "HR jarayonlari va rol profillarini quramiz.",
      },
      {
        key: "legal",
        title: "Yuridik himoya",
        group: "Shield",
        groupLabel: "Qalqon",
        summary:
          "Aktiv himoyasi, shartnomalar, IP va ma’lumot xavfsizligi.",
        details: [
          "Shartnoma bazasi va ownership himoyasi.",
          "Xavfsizlik siyosatlari va personal data.",
          "Yuridik audit va risklarni kamaytirish.",
        ],
        result:
          "Aktiv himoyalangan: huquqlar, data va shartnomalar.",
        broken:
          "Sud risklari, data sizishi va aktiv zaifligi.",
        actions:
          "Yuridik risklarni yopamiz va himoya konturini quramiz.",
      },
    ],
    results: {
      title: "Qimmatli yakuniy natija (QYN)",
      description: "Har bir tayanch bo‘yicha egaga beriladigan natija.",
      badge: "QYN",
    },
    problems: {
      title: "Tayanch «sinса» nima bo‘ladi",
      description:
        "Tizim ishlamasa, har yo‘nalishda ko‘rinadigan alomatlar.",
      badge: "Risklar",
    },
    actions: {
      title: "BBI nima qiladi",
      description: "Har bir yo‘nalishda tizimni qanday quramiz.",
      badge: "BBI",
    },
    format: {
      title: "Format",
      description:
        "BBI — vazifa yoki soat sotmaydi. 45+ ish kuniga mo‘ljallangan loyiha va to‘liq sho‘ng‘ish.",
      zones: [
        {
          label: "Yashil zona (BBI)",
          description:
            "Skrining → diagnostika/audit → 45+ kun loyiha → abonent roli.",
          tone: "green",
        },
        {
          label: "Sariq zona (loyiha ichida mumkin)",
          description:
            "SMM, sayt, CRM — faqat tizim elementi sifatida.",
          tone: "yellow",
        },
        {
          label: "Qizil zona (buni qilmaymiz)",
          description:
            "SMM outsourcing, marketing‑xizmat, brandbook, bir martalik konsultatsiya.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "Loyiha bosqichlari",
      description: "Tizimni bosqichma-bosqich qurish.",
      steps: [
        {
          title: "Skrining (bepul)",
          description: "Tanishtirish, moslik va vazifani aniqlash.",
        },
        {
          title: "Diagnostika / audit",
          description:
            "To‘liq rasm: moliya, jarayonlar, jamoa, marketing, savdo.",
        },
        {
          title: "Tizim dizayni",
          description:
            "Qalqon, leverage va boshqaruv konturi arxitekturasi.",
        },
        {
          title: "Joriy etish va nazorat (45–90 ish kuni)",
          description:
            "BBI biznes ichida ishlaydi, tizim barqarorlashguncha.",
        },
        {
          title: "Abonent roli",
          description: "BBI barqarorlik uchun hamkor bo‘lib qoladi.",
        },
      ],
    },
    responsibility: {
      title: "Mas’uliyat",
      bbiTitle: "BBI javob beradi",
      clientTitle: "Mijoz javob beradi",
      bbi: [
        "Boshqaruv arxitekturasi va tizimi",
        "Aktiv himoyasi va ownership",
        "Standart va takrorlanish (SOP, playbook, RACI)",
        "Moliya shaffofligi va qarorlar logikasi",
        "O‘zgarishlarni boshqarish",
      ],
      client: [
        "Ishtirok (haftasiga 10 soatgacha) va tez qarorlar",
        "Shaffoflik va ma’lumotlarga kirish",
        "6 tayanch bo‘yicha mas’ullar",
        "Ichki jamoa bilan bajarish",
        "Boshqaruv ritmi va intizom",
      ],
    },
    targetState: {
      title: "Target State",
      minimumTitle: "Target Minimum (45–90 ish kuni)",
      minimumDescription:
        "Tahdidlar nazorati, raqamlarda «bitta haqiqat», egasiz ham ishlaydi.",
      idealTitle: "Target Ideal (etalon)",
      idealDescription:
        "Biznes barqaror, himoyalangan, takrorlanib o‘sadi va investitsiyaga tayyor.",
    },
    cta: {
      title: "Skriningdan boshlang",
      description: "Bepul va majburiyatsiz.",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Qisqa so‘rov",
        submit: "Skriningga yozilish",
      },
    },
  },
  pillarsPage: {
    title: "BBI ning 6 tayanchi",
    description:
      "Barqaror va himoyalangan biznes‑aktivni quradigan oltita tayanch.",
    ctaLabel: "Skriningdan boshlash",
    ctaDescription: "30 daqiqada bo‘shliq va o‘sishni aniqlaymiz.",
  },
  home: {
    hero: {
      eyebrow: "Brand Promise",
      title: "Qalqon. Lever. Tizim. biznesingiz uchun",
      subtitle:
        "BBI — egalar va CEOlar uchun operatsion hamkor. Biz biznesga kiramiz, muammolarni ochamiz va qo‘lda boshqaruvisiz ishlaydigan tizim quramiz.",
      cta: "Diagnostikadan boshlash",
      secondaryCta: "Batafsil",
    },
    icp: {
      eyebrow: "Savol",
      title: "O‘zingizni tanidingizmi?",
      cards: [
        {
          title: "Biznes o‘sadi, ammo siz yong‘in o‘chirayapsiz",
          description:
            "Operatsion ritm va rollarni qurib, mikroboshqaruvni bartaraf qilamiz.",
          linkLabel: "Batafsil",
          href: "/icp/operations",
        },
        {
          title: "Xaosni kengaytirish — zararlarni kengaytirish",
          description:
            "Tor joylarni olib tashlaymiz, jarayonlarni barqaror qilamiz.",
          linkLabel: "Batafsil",
          href: "/icp/scale",
        },
        {
          title: "Investor aktivni xohlaydi, egani emas",
          description:
            "Kompaniyani prognozli va shaffof qilamiz.",
          linkLabel: "Batafsil",
          href: "/icp/investor",
        },
      ],
    },
    icpBridge: {
      label: "Javob",
      title: "Qanday yordam beramiz?",
      description:
        "Maqsadli holatni loyihalaymiz, real holatga sho‘ng‘iramiz, arxitektura qurib amalga oshiramiz. Slaydli maslahat emas — biznes ichida operatsion ish.",
    },
    process: {
      eyebrow: "Yondashuv",
      title: "Qanday ishlaymiz",
      approaches: [
        {
          title: "Loyihalaymiz",
          description:
            "Maqsadli holat va yechim arxitekturasini aniqlaymiz. «Qanday qilish kerak» emas — sizning biznesingizga o‘lcham, jamoa va ambitsiyaga qarab.",
        },
        {
          title: "Sho‘ng‘iramiz",
          description:
            "Jarayonlar, moliya, savdo va jamoani tahlil qilamiz. O‘sish nuqtalari, tor joylar va haqiqiy sabablarni topamiz. Shablon yo‘q — faqat sizning ma’lumotlaringiz.",
        },
        {
          title: "Arxitektura quramiz",
          description:
            "Boshqaruv ritmi, qoidalar, dashbordlar, mas’uliyat zonalari. Hammasi bitta tizimda, ajratilgan «yaxshilanishlar» emas.",
        },
        {
          title: "Amalga oshiramiz",
          description:
            "Har kuni o‘zgarishlarni joriy qilamiz, jamoani o‘qitamiz, boshqaruvni topshiramiz. BBI barqarorlik uchun hamkor sifatida qoladi.",
        },
      ],
    },
    casesBlog: {
      title: "Keyslar va blog",
      casesLabel: "Barcha keyslar",
      blogLabel: "Barcha maqolalar",
      readMore: "Batafsil",
    },
    pillars: {
      title: "Qalqon. Lever. Tizim.",
      items: [
        {
          title: "Qalqon",
          description:
            "Aktivlarni himoya qilish, ownership, yuridik himoya, shaffof moliya.",
          details:
            "Qalqon — bu «umumiy xavfsizlik» emas. Aktivlar va nazoratni kompaniyaga o‘tkazish haqida — biznes odamlar, pudratchilar va «virtual raqamlar»dan mustaqil bo‘lishi uchun. Biz «tinchlantirmaymiz» — zaifliklarni ochamiz va tizim bilan yopamiz: ownership, yuridik himoya, shaffof moliya, kadrlar barqarorligi.",
          linkLabel: "Batafsil",
          href: "/pillars/shield",
        },
        {
          title: "Lever",
          description:
            "Operatsion ritm, skvoznoy analitika, «yulduzsiz» savdo tizimi.",
          details:
            "Lever — «sizni 10 marta kuchaytiramiz» emas (bu xavfli va‘da). O‘lchanadigan natija uchun ta‘sir qilish mumkin bo‘lgan nazorat nuqtalari haqida: operatsion ritm (cadence), skvoznoy analitika, «yulduzsiz» savdo tizimi, standartlar va qayta ishlab chiqarish.",
          linkLabel: "Batafsil",
          href: "/pillars/leverage",
        },
        {
          title: "Tizim",
          description:
            "Rollar mustahkam, jarayonlar standart, odamlar almashsa ham buzilmaydi.",
          details:
            "Tizim — «qahramonlik» va qo‘lda boshqaruvning qarama-qarshisi. Egаning shaxsiy bosimini boshqaruv ritmi va qoidalar bilan almashtirish. Har bir jarayon tasvirlangan, har bir natija bashorat qilinadigan mexanizm qurish — xodimning ketishi «rejalashtirilgan kompetensiyalarni o‘tkazish», biznes uchun to‘xtov emas.",
          linkLabel: "Batafsil",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "BBI neytral pudratchi emas",
      description:
        "Biz egalar tomoni. Qattiq haqiqatni aytamiz, zaifliklarni ochamiz va tizimli tuzatamiz.",
    },
  },
  about: {
    who: {
      title: "Biz kimmiz",
      text:
        "BBI (Bold Brands International) — Operating Partner (RevOps). Biz biznesga kiramiz, real muammolarni ochamiz va tizim quramiz. Marketing agentligi emas. Konsalting ham emas. «Neytral pudratchi» ham emas.",
      emphasis:
        "Asosiy fikr: BBI egalar tomonida, pudratchi emas. Neytral pozitsiya yo‘q.",
    },
    principles: {
      title: "Asosiy e’tiqodlar",
      items: [
        { text: "Biz biznes uchun to‘liq mas’ul bo‘lgan egalar va CEO tomoni." },
        { text: "Biz halol tahlil tarafdorimiz, og‘riqli bo‘lsa ham." },
        { text: "Tizim iste’doddan muhim." },
        { text: "Shaxsiy tajriba. Tahdidni yuzma-yuz bilamiz." },
      ],
    },
    manifesto: {
      title: "Biz qarshimiz",
      items: [
        { text: "Biz «havo gap»ga qarshimiz." },
        { text: "Biz «xizmat» o‘rniga tizimsizlikka qarshimiz." },
        { text: "Biz odamga bog‘liqlikka qarshimiz." },
        { text: "Biz shaffof emaslikka qarshimiz." },
        { text: "Biz doimiy «yong‘in o‘chirish»ga qarshimiz." },
      ],
    },
    team: {
      title: "Jamoa",
      members: [
        {
          name: "Ism Familiya",
          role: "CEO",
          note: "Biznes himoyasini tizim sifatida quradi.",
        },
        {
          name: "Ism Familiya",
          role: "Operating Partner",
          note: "Natijaga javob beradi, jarayonga emas.",
        },
        {
          name: "Ism Familiya",
          role: "RevOps mutaxassisi",
          note: "Operatsion ritm, analitika va nazoratni quradi.",
        },
        {
          name: "Ism Familiya",
          role: "RevOps mutaxassisi",
          note: "Savdo tizimini natija uchun quradi.",
        },
      ],
    },
    cta: {
      title: "Mos kelamizmi?",
      description: "Skriningga yoziling — bo‘shliq va o‘sishni aniqlaymiz.",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Qisqa so‘rov",
        submit: "Skriningga yozilish",
      },
    },
  },
  footer: {
    copyright: "BBI (Bold Brands International). Barcha huquqlar himoyalangan.",
  },
  cases: {
    hero: {
      eyebrow: "Haqiqiy natijalar",
      title: "Kейslar: tizimli yondashuv amalda",
      description:
        "«Reklama qildik» emas, balki himoya, tayanch va tizimni qanday qurganimizni ko‘rsatamiz. Kontekst, muammo, BBI harakati va o‘lchanadigan natija.",
    },
    filters: {
      industry: "Sanoat",
      direction: "Yo‘nalish",
      scale: "O‘lcham",
      all: "Barchasi",
    },
    filterLabels: {
      retail: "Chakana",
      fAndB: "HoReCa / F&B",
      services: "Xizmatlar",
      ecom: "E-commerce",
      other: "Boshqa",
      operations: "Operatsiya",
      marketing: "Marketing",
      sales: "Savdo",
      finance: "Moliya",
      hr: "HR",
      legal: "Yuridik",
      smb: "SMB",
      mid: "Mid-market",
      enterprise: "Enterprise",
    },
    card: { readMore: "Batafsil" },
    noResults: "Tanlangan filterlar bo‘yicha kейslar topilmadi.",
    caseDetail: {
      backToCases: "← Keyslar",
      context: "Kontekst",
      problem: "Muammo",
      whatBbiDid: "BBI nima qildi",
      result: "Natija",
      artifacts: "Artefaktlar",
      bbiRole: "BBI roli",
    },
    items: [
      {
        slug: "retail-revops",
        company: "Chakana (NDA)",
        industry: "Chakana",
        keyResult: "LTV +34%, konversiya +22%",
        excerpt: "12 do‘kon: raqamlarda yagona haqiqat va boshqariladigan vornka.",
        tags: ["Operatsiya", "Savdo", "Marketing"],
        industryFilter: "retail",
        directionFilter: "operations",
        scaleFilter: "mid",
        context:
          "12 do‘kon tarmog‘i, 450 mln yillik daromad. Egasi yagona qaror markazi. Moliya Excelda, CRM siz savdo.",
        problem:
          "Raqamlarda tartibsizlik, vornka noaniq, egaga bog‘liqlik. Har do‘kon alohida hisoblagan.",
        whatBbiDid: [
          "CRM + vornka analitikasi bilan birlashtirilgan ma’lumot konturi qurildi.",
          "Qabul, hisob va nazorat uchun SOP joriy etildi.",
          "Boshqaruv ritmi va vornka dashbordlari qurildi.",
        ],
        resultNumbers: [
          { before: "Lid→savdo 12%", after: "14.6%" },
          { before: "Tizimsiz LTV", after: "8 oyda +34%" },
        ],
        artifacts: ["Qabul SOP", "Vornka dashbord", "Do‘kon RACI"],
        bbiRole:
          "Ownership: egasi qo‘lda nazoratsiz ishlaydigan tizim oldi. BBI «reklama qilmadi», balki boshqaruv konturini qurdi.",
      },
      {
        slug: "fandb-operations",
        company: "HoReCa (NDA)",
        industry: "HoReCa / F&B",
        keyResult: "Marja +18%, oqim −60%",
        excerpt: "5 ta joy: aniq xarajat va xarid nazorati.",
        tags: ["Operatsiya", "Moliya"],
        industryFilter: "fAndB",
        directionFilter: "operations",
        scaleFilter: "smb",
        context:
          "5 ta ovqatlanish joyi. Qo‘lda hisob, xarajat nazorati yo‘q, xarid oqimlari.",
        problem:
          "Xarajat noaniq, xaridor va oshpazga bog‘liqlik. Asosiy odamlar ketganda tizim «singan».",
        whatBbiDid: [
          "Standart hisob, xarid va xarajat nazoratini sozladik.",
          "Oshxona va ombor uchun chek-list va SOP joriy etildi.",
        ],
        resultNumbers: [
          { before: "Marja 22%", after: "26%" },
          { before: "Oqimlar yozilmagan", after: "60% kamaydi" },
        ],
        artifacts: ["Xarid SOP", "Oshxona chek-list", "Marja dashbord"],
        bbiRole:
          "Ownership: egasi raqamlarni real vaqtda ko‘radi. BBI tizimni qurdi, boshqaruvni almashtirmadi.",
      },
      {
        slug: "ecom-growth",
        company: "E-commerce (NDA)",
        industry: "E-commerce",
        keyResult: "CAC −25%, ROAS +40%",
        excerpt: "D2C brend: kanal iqtisodiyoti va boshqariladigan o‘sish.",
        tags: ["Marketing", "Savdo"],
        industryFilter: "ecom",
        directionFilter: "marketing",
        scaleFilter: "mid",
        context:
          "D2C brend, 80 mln daromad. Kanal iqtisodiyotisiz reklama byudjeti.",
        problem:
          "Pul «hech qayerda» ketdi, CAC oshdi, ROAS tushdi. Yagona vornka va skvoz analitika yo‘q.",
        whatBbiDid: [
          "Skvoz analitika va kanal auditi ishga tushirildi.",
          "Kanal bo‘yicha lid va LTV iqtisodiyoti qurildi.",
          "CRM va savdo vornkasi standartlashtirildi.",
        ],
        resultNumbers: [
          { before: "CAC 3200₽", after: "2400₽" },
          { before: "ROAS 2.1", after: "2.94" },
        ],
        artifacts: ["Skvoz analitika", "Kanal dashbord", "Vornka RACI"],
        bbiRole:
          "Ownership: marketing va savdo o‘lchanadigan metrikali tizim sifatida ishlaydi. BBI «byudjet to‘kalmadi», balki boshqariladigan o‘sishni qurdi.",
      },
    ],
  },
  blog: {
    hero: { title: "Blog va ekspertiza", description: "Mustaqil va himoyalangan biznes tizimlari haqida maqolalar." },
    card: { readMore: "Batafsil" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operatsiya", categoryKey: "operations", title: "5 qadam: avtonom boshqaruv", description: "Ritm, SOP va nazorat qanday quriladi.", image: "/work/pillars-1.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Chek-list yuklash", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostika", categoryKey: "diagnostics", title: "Diagnostika", description: "Haqiqiy muammolarni topish.", image: "/brand/decor-pattern.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Skriningga yozilish", href: "/contacts" } },
      { slug: "ekonomika-kanalov-marketing", category: "Marketing", categoryKey: "marketing", title: "Kanal iqtisodiyoti", description: "Skvoz analitika va o'sish.", image: "/work/zones.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "sistemnye-prodazhi", category: "Savdo", categoryKey: "sales", title: "Tizimli savdo", description: "Standartlar va CRM.", image: "/work/responsibility.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "finansovaya-prozrachnost", category: "Moliya", categoryKey: "finance", title: "Moliyaviy shaffoflik", description: "Yagona haqiqat raqamlarda.", image: "/work/target-state.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "hr-kak-sistema", category: "HR", categoryKey: "hr", title: "HR tizim sifatida", description: "Rollar va mas'uliyat.", image: "/work/responsibility.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
    ],
  },
  contacts: {
    hero: {
      eyebrow: "Skrining",
      title: "Skriningga yozilish",
      description:
        "Formani to'ldiring — 24 soat ichida bog'lanamiz va o'lcham, o'sish nuqtalari va hamkorlik imkoniyatini muhokama qilamiz.",
    },
    form: {
      name: "Ism",
      company: "Kompaniya / biznes",
      contact: "Telefon yoki messenjer",
      turnoverTeamSize: "Aylanma yoki jamoa hajmi (ixtiyoriy)",
      request: "So'rov haqida qisqacha",
      submit: "Skriningga yozilish",
    },
  },
};
