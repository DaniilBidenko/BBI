import type { Dictionary } from "./types";

export const uz: Dictionary = {
  nav: {
    items: [
      { label: "[UZ] Bosh sahifa", href: "/" },
      { label: "[UZ] BBI haqida", href: "/about" },
      { label: "[UZ] Qanday ishlaymiz", href: "/work" },
      { label: "[UZ] Кейslar", href: "/cases" },
      { label: "[UZ] Blog", href: "/blog" },
      { label: "[UZ] Aloqa", href: "/contacts" },
    ],
    cta: "[UZ] Ishni boshlash",
  },
  work: {
    hero: {
      eyebrow: "[UZ] Ish modeli",
      title: "[UZ] 6 tayanch: bitta tizim, xizmatlar to‘plami emas",
      description:
        "[UZ] Biz operatsiyani marketingdan, marketingni moliyadan ajratib sotmaymiz. Biznes — bu tizim. Bir tayanchdagi teshik boshqalarini ham qulatadi. BBI olti yo‘nalishga bir vaqtning o‘zida kiradi va yagona boshqaruv konturini quradi.",
      ctaLabel: "[UZ] 6 BBI TAYANCHI",
      ctaHint: "[UZ] Tayanchlar sahifasini ochish",
    },
    pillarsIntro: {
      title: "[UZ] BBI tizimi",
      description:
        "[UZ] BBI oltita yo‘nalishni egalar manfaatiga bo‘ysunadigan yagona tizimga birlashtiradi. Bu alohida sotib olinadigan «xizmatlar» emas — barqaror va himoyalangan biznes‑aktivni ushlab turuvchi oltita tayanchdir. Barqarorlik — olti tayanchning natijasi.",
      detailsLabel: "[UZ] Batafsil",
    },
    pillars: [
      {
        key: "operations",
        title: "[UZ] Operatsiya",
        group: "Leverage",
        groupLabel: "[UZ] Rychag",
        summary:
          "[UZ] Boshqaruv ritmi, SOP, org‑tuzilma, KPI panellari va ijro nazorati.",
        details: [
          "[UZ] Boshqaruv ritmi va muntazam yig‘ilishlar.",
          "[UZ] SOP, chek‑listlar, rollar va mas’uliyat.",
          "[UZ] Dashboardlar, muddat va sifat nazorati.",
        ],
        result:
          "[UZ] Biznes ritm va qoidalarga ko‘ra ishlaydi, kayfiyatga emas.",
        broken:
          "[UZ] Yong‘in o‘chirish, xaos, qo‘lda boshqaruv va odamga bog‘liqlik.",
        actions:
          "[UZ] Org‑tuzilma, reglamentlar, ritm va nazoratni quramiz.",
      },
      {
        key: "marketing",
        title: "[UZ] Marketing",
        group: "Leverage",
        groupLabel: "[UZ] Rychag",
        summary:
          "[UZ] Skvoznoy analitika, kanal iqtisodi, prognozli talab.",
        details: [
          "[UZ] Kanal iqtisodi va shaffof byudjet.",
          "[UZ] Skvoznoy analitika va audit.",
          "[UZ] Byudjetsiz yo‘qotishlarsiz barqaror talab.",
        ],
        result:
          "[UZ] LID va mijoz narxi aniq, o‘sish boshqariladi.",
        broken:
          "[UZ] Byudjet «yo‘qoladi», prognoz va nazorat yo‘q.",
        actions:
          "[UZ] Analitika, voronka, byudjet va metrikalarni sozlaymiz.",
      },
      {
        key: "sales",
        title: "[UZ] Savdo",
        group: "Leverage",
        groupLabel: "[UZ] Rychag",
        summary:
          "[UZ] «Yulduzsiz» tizimli savdo: standartlar, skriptlar, CRM nazorat.",
        details: [
          "[UZ] Muloqot standartlari va skriptlar.",
          "[UZ] CRM nazorat, voronka va lead ishlovi.",
          "[UZ] Xodim almashsa ham natija saqlanadi.",
        ],
        result:
          "[UZ] Savdo prognozli va odamga bog‘liq emas.",
        broken:
          "[UZ] «Yulduz»larga bog‘liqlik, jamoa almashsa natija tushadi.",
        actions:
          "[UZ] Savdo tizimi, reglamentlar, o‘qitish va nazoratni quramiz.",
      },
      {
        key: "finance",
        title: "[UZ] Moliya",
        group: "Shield",
        groupLabel: "[UZ] Qalqon",
        summary:
          "[UZ] Shaffof moliya, boshqaruv hisobi va marja nazorati.",
        details: [
          "[UZ] Boshqaruv hisobi va plan‑fakt.",
          "[UZ] Foyda va xarajat shaffofligi.",
          "[UZ] Kesh‑flow intizomi va risk nazorati.",
        ],
        result:
          "[UZ] Egasi real foydani ko‘radi va qarorlarni raqamlarga tayaydi.",
        broken:
          "[UZ] «Bitta haqiqat» yo‘q, kassa uzilishlari, ko‘r joylar.",
        actions:
          "[UZ] Moliya modeli, hisobot va nazorat qoidalarini quramiz.",
      },
      {
        key: "hr",
        title: "[UZ] HR",
        group: "Shield",
        groupLabel: "[UZ] Qalqon",
        summary:
          "[UZ] Tizimli yollash, onboarding, baholash va kadr zaxirasi.",
        details: [
          "[UZ] Lavozim profili va yollash standartlari.",
          "[UZ] Onboarding, o‘qitish, mentoring.",
          "[UZ] Baholash tizimi va kadrlar o‘sishi.",
        ],
        result:
          "[UZ] Jamoa barqaror, rollar mustahkam, o‘sish tizimni buzmaydi.",
        broken:
          "[UZ] Kadrlar oqimi, tartibsiz yollash va odamga bog‘liqlik.",
        actions:
          "[UZ] HR jarayonlari va rol profillarini quramiz.",
      },
      {
        key: "legal",
        title: "[UZ] Yuridik himoya",
        group: "Shield",
        groupLabel: "[UZ] Qalqon",
        summary:
          "[UZ] Aktiv himoyasi, shartnomalar, IP va ma’lumot xavfsizligi.",
        details: [
          "[UZ] Shartnoma bazasi va ownership himoyasi.",
          "[UZ] Xavfsizlik siyosatlari va personal data.",
          "[UZ] Yuridik audit va risklarni kamaytirish.",
        ],
        result:
          "[UZ] Aktiv himoyalangan: huquqlar, data va shartnomalar.",
        broken:
          "[UZ] Sud risklari, data sizishi va aktiv zaifligi.",
        actions:
          "[UZ] Yuridik risklarni yopamiz va himoya konturini quramiz.",
      },
    ],
    results: {
      title: "[UZ] Qimmatli yakuniy natija (QYN)",
      description: "[UZ] Har bir tayanch bo‘yicha egaga beriladigan natija.",
      badge: "[UZ] QYN",
    },
    problems: {
      title: "[UZ] Tayanch «sinса» nima bo‘ladi",
      description:
        "[UZ] Tizim ishlamasa, har yo‘nalishda ko‘rinadigan alomatlar.",
      badge: "[UZ] Risklar",
    },
    actions: {
      title: "[UZ] BBI nima qiladi",
      description: "[UZ] Har bir yo‘nalishda tizimni qanday quramiz.",
      badge: "[UZ] BBI",
    },
    format: {
      title: "[UZ] Format",
      description:
        "[UZ] BBI — vazifa yoki soat sotmaydi. 45+ ish kuniga mo‘ljallangan loyiha va to‘liq sho‘ng‘ish.",
      zones: [
        {
          label: "[UZ] Yashil zona (BBI)",
          description:
            "[UZ] Skrining → diagnostika/audit → 45+ kun loyiha → abonent roli.",
          tone: "green",
        },
        {
          label: "[UZ] Sariq zona (loyiha ichida mumkin)",
          description:
            "[UZ] SMM, sayt, CRM — faqat tizim elementi sifatida.",
          tone: "yellow",
        },
        {
          label: "[UZ] Qizil zona (buni qilmaymiz)",
          description:
            "[UZ] SMM outsourcing, marketing‑xizmat, brandbook, bir martalik konsultatsiya.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "[UZ] Loyiha bosqichlari",
      description: "[UZ] Tizimni bosqichma-bosqich qurish.",
      steps: [
        {
          title: "[UZ] Skrining (bepul)",
          description: "[UZ] Tanishtirish, moslik va vazifani aniqlash.",
        },
        {
          title: "[UZ] Diagnostika / audit",
          description:
            "[UZ] To‘liq rasm: moliya, jarayonlar, jamoa, marketing, savdo.",
        },
        {
          title: "[UZ] Tizim dizayni",
          description:
            "[UZ] Qalqon, leverage va boshqaruv konturi arxitekturasi.",
        },
        {
          title: "[UZ] Joriy etish va nazorat (45–90 ish kuni)",
          description:
            "[UZ] BBI biznes ichida ishlaydi, tizim barqarorlashguncha.",
        },
        {
          title: "[UZ] Abonent roli",
          description: "[UZ] BBI barqarorlik uchun hamkor bo‘lib qoladi.",
        },
      ],
    },
    responsibility: {
      title: "[UZ] Mas’uliyat",
      bbiTitle: "[UZ] BBI javob beradi",
      clientTitle: "[UZ] Mijoz javob beradi",
      bbi: [
        "[UZ] Boshqaruv arxitekturasi va tizimi",
        "[UZ] Aktiv himoyasi va ownership",
        "[UZ] Standart va takrorlanish (SOP, playbook, RACI)",
        "[UZ] Moliya shaffofligi va qarorlar logikasi",
        "[UZ] O‘zgarishlarni boshqarish",
      ],
      client: [
        "[UZ] Ishtirok (haftasiga 10 soatgacha) va tez qarorlar",
        "[UZ] Shaffoflik va ma’lumotlarga kirish",
        "[UZ] 6 tayanch bo‘yicha mas’ullar",
        "[UZ] Ichki jamoa bilan bajarish",
        "[UZ] Boshqaruv ritmi va intizom",
      ],
    },
    targetState: {
      title: "[UZ] Target State",
      minimumTitle: "[UZ] Target Minimum (45–90 ish kuni)",
      minimumDescription:
        "[UZ] Tahdidlar nazorati, raqamlarda «bitta haqiqat», egasiz ham ishlaydi.",
      idealTitle: "[UZ] Target Ideal (etalon)",
      idealDescription:
        "[UZ] Biznes barqaror, himoyalangan, takrorlanib o‘sadi va investitsiyaga tayyor.",
    },
    cta: {
      title: "[UZ] Skriningdan boshlang",
      description: "[UZ] Bepul va majburiyatsiz.",
      form: {
        name: "[UZ] Ism",
        phone: "[UZ] Telefon",
        message: "[UZ] Qisqa so‘rov",
        submit: "[UZ] Skriningga yozilish",
      },
    },
  },
  pillarsPage: {
    title: "[UZ] BBI ning 6 tayanchi",
    description:
      "[UZ] Barqaror va himoyalangan biznes‑aktivni quradigan oltita tayanch.",
    ctaLabel: "[UZ] Skriningdan boshlash",
    ctaDescription: "[UZ] 30 daqiqada bo‘shliq va o‘sishni aniqlaymiz.",
  },
  home: {
    hero: {
      eyebrow: "[UZ] Brand Promise",
      title: "[UZ] Qalqon. Lever. Tizim. biznesingiz uchun",
      subtitle:
        "[UZ] BBI — egalar va CEOlar uchun operatsion hamkor. Biz biznesga kiramiz, muammolarni ochamiz va qo‘lda boshqaruvisiz ishlaydigan tizim quramiz.",
      cta: "[UZ] Diagnostikadan boshlash",
      secondaryCta: "[UZ] Batafsil",
    },
    icp: {
      title: "[UZ] O‘zingizni tanidingizmi?",
      cards: [
        {
          title: "[UZ] Biznes o‘sadi, ammo siz yong‘in o‘chirayapsiz",
          description:
            "[UZ] Operatsion ritm va rollarni qurib, mikroboshqaruvni bartaraf qilamiz.",
          linkLabel: "[UZ] Batafsil",
          href: "/icp/operations",
        },
        {
          title: "[UZ] Xaosni kengaytirish — zararlarni kengaytirish",
          description:
            "[UZ] Tor joylarni olib tashlaymiz, jarayonlarni barqaror qilamiz.",
          linkLabel: "[UZ] Batafsil",
          href: "/icp/scale",
        },
        {
          title: "[UZ] Investor aktivni xohlaydi, egani emas",
          description:
            "[UZ] Kompaniyani prognozli va shaffof qilamiz.",
          linkLabel: "[UZ] Batafsil",
          href: "/icp/investor",
        },
      ],
    },
    process: {
      title: "[UZ] Qanday ishlaymiz",
      stepLabel: "[UZ] Bosqich",
      steps: [
        {
          title: "[UZ] Skrining — bir-birimizga mosmizmi?",
          description:
            "[UZ] Tezkor diagnostika: xaos ko‘lami, jamoa tayyorgarligi va o‘sish salohiyati.",
        },
        {
          title: "[UZ] Diagnostika / Audit — real holatni ochish",
          description:
            "[UZ] Operatsiya, moliya, savdo va jamoani tahlil qilib, o‘sish nuqtalarini topamiz.",
        },
        {
          title: "[UZ] Loyiha (45–90 ish kuni) — tizim qurish",
          description:
            "[UZ] Operatsion jamoa sifatida kirib, har kuni o‘zgarishlarni joriy qilamiz.",
        },
      ],
    },
    pillars: {
      title: "[UZ] Qalqon. Lever. Barqarorlik.",
      items: [
        {
          title: "[UZ] Qalqon",
          description:
            "[UZ] Aktivlarni himoya qilish, ownership, yuridik himoya, shaffof moliya.",
          linkLabel: "[UZ] Batafsil",
          href: "/pillars/shield",
        },
        {
          title: "[UZ] Lever",
          description:
            "[UZ] Operatsion ritm, skvoznoy analitika, «yulduzsiz» savdo tizimi.",
          linkLabel: "[UZ] Batafsil",
          href: "/pillars/leverage",
        },
        {
          title: "[UZ] Tizim",
          description:
            "[UZ] Rollar mustahkam, jarayonlar standart, odamlar almashsa ham buzilmaydi.",
          linkLabel: "[UZ] Batafsil",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "[UZ] BBI neytral pudratchi emas",
      description:
        "[UZ] Biz egalar tomoni. Qattiq haqiqatni aytamiz, zaifliklarni ochamiz va tizimli tuzatamiz.",
    },
  },
  about: {
    who: {
      title: "[UZ] Biz kimmiz",
      text:
        "[UZ] BBI (Bold Brands International) — Operating Partner (RevOps). Biz biznesga kiramiz, real muammolarni ochamiz va tizim quramiz. Marketing agentligi emas. Konsalting ham emas. «Neytral pudratchi» ham emas.",
      emphasis:
        "[UZ] Asosiy fikr: BBI egalar tomonida, pudratchi emas. Neytral pozitsiya yo‘q.",
    },
    principles: {
      title: "[UZ] Asosiy e’tiqodlar",
      items: [
        { text: "[UZ] Biz biznes uchun to‘liq mas’ul bo‘lgan egalar va CEO tomoni." },
        { text: "[UZ] Biz halol tahlil tarafdorimiz, og‘riqli bo‘lsa ham." },
        { text: "[UZ] Tizim iste’doddan muhim." },
        { text: "[UZ] Shaxsiy tajriba. Tahdidni yuzma-yuz bilamiz." },
      ],
    },
    manifesto: {
      title: "[UZ] Biz qarshimiz",
      items: [
        { text: "[UZ] Biz «havo gap»ga qarshimiz." },
        { text: "[UZ] Biz «xizmat» o‘rniga tizimsizlikka qarshimiz." },
        { text: "[UZ] Biz odamga bog‘liqlikka qarshimiz." },
        { text: "[UZ] Biz shaffof emaslikka qarshimiz." },
        { text: "[UZ] Biz doimiy «yong‘in o‘chirish»ga qarshimiz." },
      ],
    },
    team: {
      title: "[UZ] Jamoa",
      members: [
        {
          name: "[UZ] Ism Familiya",
          role: "[UZ] CEO",
          note: "[UZ] Biznes himoyasini tizim sifatida quradi.",
        },
        {
          name: "[UZ] Ism Familiya",
          role: "[UZ] Operating Partner",
          note: "[UZ] Natijaga javob beradi, jarayonga emas.",
        },
        {
          name: "[UZ] Ism Familiya",
          role: "[UZ] RevOps mutaxassisi",
          note: "[UZ] Operatsion ritm, analitika va nazoratni quradi.",
        },
        {
          name: "[UZ] Ism Familiya",
          role: "[UZ] RevOps mutaxassisi",
          note: "[UZ] Savdo tizimini natija uchun quradi.",
        },
      ],
    },
    cta: {
      title: "[UZ] Mos kelamizmi?",
      description: "[UZ] Skriningga yoziling — bo‘shliq va o‘sishni aniqlaymiz.",
      form: {
        name: "[UZ] Ism",
        phone: "[UZ] Telefon",
        message: "[UZ] Qisqa so‘rov",
        submit: "[UZ] Skriningga yozilish",
      },
    },
  },
  footer: {
    copyright: "[UZ] BBI (Bold Brands International). Barcha huquqlar himoyalangan.",
  },
};
