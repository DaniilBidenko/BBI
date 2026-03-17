import type { Dictionary } from "./types";

export const uz: Dictionary = {
  nav: {
    items: [
      { label: "Bosh sahifa", href: "/" },
      { label: "BBI haqida", href: "/about" },
      { label: "Qanday ishlaymiz", href: "/work" },
      { label: "Keyslar", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Aloqa", href: "/contacts" },
    ],
    cta: "Ishni boshlash",
  },
  work: {
    hero: {
      eyebrow: "Ish modeli",
      title: "6 tayanch: bitta tizim, xizmatlar to'plami emas",
      description:
        "Biz operatsiyani marketingdan, marketingni moliyadan ajratib sotmaymiz. Biznes — bu tizim. Bir tayanchdagi teshik boshqalarini ham qulatadi. BBI olti yo'nalishga bir vaqtning o'zida kiradi va yagona boshqaruv konturini quradi.",
      ctaLabel: "6 BBI TAYANCHI",
      ctaHint: "Tayanchlar sahifasini ochish",
    },
    pillarsIntro: {
      title: "BBI tizimi",
      description:
        "BBI oltita yo'nalishni egalar manfaatiga bo'ysunadigan yagona tizimga birlashtiradi. Bu alohida sotib olinadigan «xizmatlar» emas — barqaror va himoyalangan biznes‑aktivni ushlab turuvchi oltita tayanchdir. Barqarorlik — olti tayanchning natijasi.",
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
          "Boshqaruv ritmi va muntazam yig'ilishlar.",
          "SOP, chek‑listlar, rollar va mas'uliyat.",
          "Dashboardlar, muddat va sifat nazorati.",
        ],
        result:
          "Biznes ritm va qoidalarga ko'ra ishlaydi, kayfiyatga emas.",
        broken:
          "Yong'in o'chirish, xaos, qo'lda boshqaruv va odamga bog'liqlik.",
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
          "Byudjetsiz yo'qotishlarsiz barqaror talab.",
        ],
        result:
          "LID va mijoz narxi aniq, o'sish boshqariladi.",
        broken:
          "Byudjet «yo'qoladi», prognoz va nazorat yo'q.",
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
          "Savdo prognozli va odamga bog'liq emas.",
        broken:
          "«Yulduz»larga bog'liqlik, jamoa almashsa natija tushadi.",
        actions:
          "Savdo tizimi, reglamentlar, o'qitish va nazoratni quramiz.",
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
          "Egasi real foydani ko'radi va qarorlarni raqamlarga tayaydi.",
        broken:
          "«Bitta haqiqat» yo'q, kassa uzilishlari, ko'r joylar.",
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
          "Onboarding, o'qitish, mentoring.",
          "Baholash tizimi va kadrlar o'sishi.",
        ],
        result:
          "Jamoa barqaror, rollar mustahkam, o'sish tizimni buzmaydi.",
        broken:
          "Kadrlar oqimi, tartibsiz yollash va odamga bog'liqlik.",
        actions:
          "HR jarayonlari va rol profillarini quramiz.",
      },
      {
        key: "legal",
        title: "Yuridik himoya",
        group: "Shield",
        groupLabel: "Qalqon",
        summary:
          "Aktiv himoyasi, shartnomalar, IP va ma'lumot xavfsizligi.",
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
      description: "Har bir tayanch bo'yicha egaga beriladigan natija.",
      badge: "QYN",
    },
    problems: {
      title: "Tayanch «sinса» nima bo'ladi",
      description:
        "Tizim ishlamasa, har yo'nalishda ko'rinadigan alomatlar.",
      badge: "Risklar",
    },
    actions: {
      title: "BBI nima qiladi",
      description: "Har bir yo'nalishda tizimni qanday quramiz.",
      badge: "BBI",
    },
    format: {
      title: "Format",
      description:
        "BBI — vazifa yoki soat sotmaydi. 45+ ish kuniga mo'ljallangan loyiha va to'liq sho'ng'ish.",
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
            "To'liq rasm: moliya, jarayonlar, jamoa, marketing, savdo.",
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
          description: "BBI barqarorlik uchun hamkor bo'lib qoladi.",
        },
      ],
    },
    responsibility: {
      title: "Mas'uliyat",
      bbiTitle: "BBI javob beradi",
      clientTitle: "Mijoz javob beradi",
      bbi: [
        "Boshqaruv arxitekturasi va tizimi",
        "Aktiv himoyasi va ownership",
        "Standart va takrorlanish (SOP, playbook, RACI)",
        "Moliya shaffofligi va qarorlar logikasi",
        "O'zgarishlarni boshqarish",
      ],
      client: [
        "Ishtirok (haftasiga 10 soatgacha) va tez qarorlar",
        "Shaffoflik va ma'lumotlarga kirish",
        "6 tayanch bo'yicha mas'ullar",
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
        "Biznes barqaror, himoyalangan, takrorlanib o'sadi va investitsiyaga tayyor.",
    },
    cta: {
      title: "Skriningdan boshlang",
      description: "Bepul va majburiyatsiz.",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Qisqa so'rov",
        submit: "Skriningga yozilish",
      },
    },
  },
  pillarsPage: {
    title: "BBI ning 6 tayanchi",
    description:
      "Barqaror va himoyalangan biznes‑aktivni quradigan oltita tayanch.",
    ctaLabel: "Skriningdan boshlash",
    ctaDescription: "30 daqiqada bo'shliq va o'sishni aniqlaymiz.",
  },
  home: {
    hero: {
      eyebrow: "Brand Promise",
      title: "Biznesni xaotik emas, balki boshqariladigan va masshtablanadigan tizim sifatida quramiz",
      subtitle:
        "Markaziy Osiyodagi egalar va CEOlar uchun operatsion hamkor: nosozlik nuqtalarini aniqlaymiz, biznes arxitekturasini loyihalaymiz va uni jamoangiz bilan birga joriy qilamiz.",
      cta: "Diagnostikadan boshlash",
      secondaryCta: "Keyslarni ko'rish",
      secondaryCtaHref: "/cases",
    },
    icpIntro: {
      eyebrow: "Maqsadli auditoriya",
      title: "Kimlar uchun",
      segments: [
        { title: "Egasi o'sishda", description: "Biznes unda turyapti.", metrics: "$30k–250k/oy · 15–80 kishi · 5+ yil", pain: "Boshqarish o'rniga yong'in o'chiraman" },
        { title: "Egasi kengaytirmoqda", description: "Xaos ko'payadi.", metrics: "$80k–500k/oy · 40–200 kishi", pain: "Xaosni kengaytirsam — zararlarni kengaytiraman" },
        { title: "Egasi investitsiyaga tayyorlanmoqda", description: "Biznes aktiv sifatida.", metrics: "$150k–1M+/oy · 80–500+ kishi", pain: "Investorga mening boshimdagi biznes emas, aktiv kerak" },
      ],
      exclude: "5 yildan kam biznes, PMF bosqichidagi startaplar, bir martalik konsultatsiya, agentlik xizmatlari. Va tizimni o'zgartirishga tayyor emas holda «o'sishni kafolatlang» talabi.",
      excludeLabel: "Mos emas",
    },
    icp: {
      eyebrow: "Savol",
      title: "O'zingizni tanidingizmi?",
      subtitle: "Uch odatiy stsenariy. O'zingizni tanisangiz — pastda qanday yordam berishimizni tushuntiramiz.",
      cards: [
        {
          title: "Boshqarish o'rniga yong'in o'chiraman",
          description:
            "Biznes sizsiz ishlamaydi. Qarorlar, yong'inlar, qo'lda boshqaruv — har kuni. Strategiya uchun vaqt yo'q.",
          linkLabel: "Batafsil",
          href: "/icp/operations",
        },
        {
          title: "Xaosni kengaytirsam — zararlarni kengaytiraman",
          description:
            "O'sish muammolarni ko'paytiradi. Yangi odamlar, bo'limlar, jarayonlar — xaos aylanmaga qo'shimcha o'sadi.",
          linkLabel: "Batafsil",
          href: "/icp/scale",
        },
        {
          title: "Investorga mening boshimdagi biznes emas, aktiv kerak",
          description:
            "Biznesni bilasiz. Lekin investor raqamlar, tuzilma, shaffoflik kerak — boshingiz emas.",
          linkLabel: "Batafsil",
          href: "/icp/investor",
        },
      ],
      ctaLabel: "Vaziyatingizni muhokama qilish",
    },
    icpBridge: {
      label: "Javob",
      title: "Qanday yordam beramiz?",
      description:
        "Maqsadli holatni loyihalaymiz, real holatga sho'ng'iramiz, arxitektura qurib amalga oshiramiz. «Olib ketish» uchun slaydlar emas — biznes ichida ish.",
      highlightPhrase: "biznes ichida ish",
      items: [
        "Haqiqiy nosozlik nuqtalarini diagnostika qilamiz — moliya, jarayonlar, savdo, jamoa",
        "Maqsadli holatni sizning o'lchamingiz va ambitsiyalaringizga loyihalaymiz",
        "Tizimni 45–90 kun ichida joriy qilamiz — tavsiya bermaymiz, o'zimiz qilamiz",
        "Boshqaruvni jamoangizga topshiramiz, barqarorlik uchun hamkor qolamiz",
      ],
      ctaLabel: "Vazifangizni muhokama qilish",
    },
    whatWeChange: {
      eyebrow: "Bizning 6 tayanchimiz",
      title: "Biznesda nimani o'zgartiramiz",
      pillars: [
        { title: "Operatsiya", items: ["Egasi qo'lda boshqaruvdan chiqadi — biznes «o'z-o'zidan» ishlaydi", "Boshqaruv ritmi, SOP, org-tuzilma, yig'ilishlar, dashboardlar, KPI, adaptatsiya chek-listlari"] },
        { title: "Marketing", items: ["Byudjet «yo'qqa» ketmaydi — mijoz narxi va sizilishlar ko'rinadi", "Skvoznoy analitika, kanal auditi, bazalarga egalik"] },
        { title: "Savdo", items: ["Natija «yulduz»larga bog'liq emas — yangi menejer 2–4 haftada natijaga erishadi", "Skriptlar, reglamentlar, CRM, voronka, lead ishlovi"] },
        { title: "Moliya", items: ["«Pulim qayerda?» — halol javob, qarorlar raqamlar asosida", "Boshqaruv hisobi, plan-fakt, to'lov kalendari, yo'nalishlar bo'yicha hisob"] },
        { title: "HR", items: ["Jamoa qayta ishlab chiqariladi — rollar mustahkam, odam ketishi tizimni buzmaydi", "Lavozim profillari, tizimli yollash, onboarding, baholash, kadr zaxirasi"] },
        { title: "Yuridik himoya", items: ["Suddan, ma'lumot sizilishidan va bazalarning o'g'irlanishidan himoya", "NDA, mehnat shartnomalari, lavozim tavsiflari, shaxsiy ma'lumotlarga rozilik, pudratchilar bilan shartnomalar"] },
      ],
    },
    whatYouGet: {
      eyebrow: "Natija",
      title: "Bilanishdan nima olasiz",
      items: [
        "Biznes sizsiz 24/7 ishlaydi — avtonom va himoyalangan aktiv",
        "Hech kim almashtirilmas emas — tizim qayta ishlab chiqariladi, odam ketishi to'xtov emas",
        "Siz raqamlar va ritm orqali boshqarasiz (10 soat/haftagacha), operatsiyada emas",
        "Leadlar, savdo va marja boshqariladi — «ishlashini umid qilamiz» emas",
        "O'sish boshqariladigan va qayta ishlab chiqariladigan",
        "Bosqichma-bosqich: avval kritik risklar, keyin standartlar",
      ],
    },
    process: {
      eyebrow: "Yondashuv",
      title: "Qanday ishlaymiz",
      approaches: [
        {
          title: "Loyihalaymiz",
          description:
            "Maqsadli holat va arxitektura aniqlaymiz. «Qanday qilish kerak» emas — biznesingizga nima kerak.",
        },
        {
          title: "Sho'ng'iramiz",
          description:
            "Jarayonlar, moliya, savdo va jamoani tahlil qilamiz. Tor joylar va haqiqiy sabablarni topamiz.",
        },
        {
          title: "Arxitektura quramiz",
          description:
            "Ritm, qoidalar, dashbordlar, mas'uliyat zonalari — bitta tizimda, ajratilgan «yaxshilanishlar» emas.",
        },
        {
          title: "Amalga oshiramiz",
          description:
            "Har kuni joriy qilamiz, jamoani o'qitamiz, boshqaruvni topshiramiz. Barqarorlik uchun hamkor qolamiz.",
        },
      ],
      ctaLabel: "Diagnostikaga yozilish",
    },
    whyBbi: {
      eyebrow: "Farqlanish",
      title: "Nima uchun BBI",
      items: [
        { label: "Agentlik emas", text: "Qo'l va soat sotmaymiz. Tizim quramiz. Raqibimiz — xaos va boshqarilmaslik, boshqa pudratchilar emas." },
        { label: "Konsultatsiya emas", text: "«Olib ketish» uchun tavsiya bermaymiz. O'zimiz joriy qilamiz va nazorat qilamiz. Barqarorlashguncha ichida qolamiz." },
        { label: "Avtopilot emas", text: "Sizga 10 soat/haftagacha jalb qilish kerak. Raqamlar orqali boshqaruv — siz yo'qolishingiz emas." },
        { label: "CEO o'rni emas", text: "Biznes avtonomligini quramiz, bizga bog'liqlik emas." },
        { label: "«30 kun ichida x10» emas", text: "O'sish boshqariladigan va qayta ishlab chiqariladigan — tizim, sehr emas." },
        { label: "Operatsion hamkor", text: "6 yo'nalishni egasi manfaatiga yagona tizimga birlashtiramiz." },
      ],
    },
    casesBlog: {
      title: "Keyslar va blog",
      casesTitle: "Keyslar",
      blogTitle: "Blog",
      casesLabel: "Barcha keyslar",
      blogLabel: "Barcha maqolalar",
      readMore: "Batafsil",
      ctaLabel: "Keysingizni muhokama qilish",
    },
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        { q: "Loyiha qancha davom etadi?", a: "Skrining bepul. Keyin: diagnostika → 45+ ish kunlari loyiha → abonent qo'llab-quvvatlash. Aniq davr o'lchamga bog'liq." },
        { q: "Uzoqdan ishlaysizmi?", a: "Ha, muntazam tashriflar bilan. Jarayonlarga sho'ng'ish uchun mavjudlik kerak." },
        { q: "Kichik biznes mos keladimi?", a: "Aylanma $30k/oydan va 15+ xodimga qaratamiz. 5 yildan kam biznes yoki PMF startap — odatda yo'q." },
        { q: "Agentliklar va maslahatchilardan qanday farqlanasiz?", a: "Soat sotmaymiz (agentlik), «olib ketish» uchun tavsiya bermaymiz (konsultatsiya). O'zimiz joriy qilamiz va barqarorlashguncha qolamiz." },
        { q: "Qachon rad etasiz?", a: "Egasi jalb qilinmaydi. Ma'lumotlarga kirish yo'q. Agentlik modeli kerak. 5 yildan kam biznes yoki startap. Tizimni o'zgartirishga tayyor emas holda «o'sishni kafolatlang» kutiladi." },
      ],
    },
    finalCta: {
      title: "Biznes o'sadi — boshqaruv yetolmayaptimi? Diagnostikadan boshlang",
      ctaLabel: "Diagnostikadan boshlash",
      subtitle: "Haqiqiy nosozlik nuqtalarini tushunish, alomatlarni davolash emas",
    },
    pillars: {
      title: "Qalqon. Lever. Tizim.",
      items: [
        {
          title: "Qalqon",
          description:
            "Aktivlarni himoya qilish, ownership, yuridik himoya, shaffof moliya.",
          details:
            "Qalqon — bu «umumiy xavfsizlik» emas. Aktivlar va nazoratni kompaniyaga o'tkazish haqida — biznes odamlar, pudratchilar va «virtual raqamlar»dan mustaqil bo'lishi uchun. Biz «tinchlantirmaymiz» — zaifliklarni ochamiz va tizim bilan yopamiz: ownership, yuridik himoya, shaffof moliya, kadrlar barqarorligi.",
          linkLabel: "Batafsil",
          href: "/pillars/shield",
        },
        {
          title: "Lever",
          description:
            "Operatsion ritm, skvoznoy analitika, «yulduzsiz» savdo tizimi.",
          details:
            "Lever — «sizni 10 marta kuchaytiramiz» emas (bu xavfli va'da). O'lchanadigan natija uchun ta'sir qilish mumkin bo'lgan nazorat nuqtalari haqida: operatsion ritm (cadence), skvoznoy analitika, «yulduzsiz» savdo tizimi, standartlar va qayta ishlab chiqarish.",
          linkLabel: "Batafsil",
          href: "/pillars/leverage",
        },
        {
          title: "Tizim",
          description:
            "Rollar mustahkam, jarayonlar standart, odamlar almashsa ham buzilmaydi.",
          details:
            "Tizim — «qahramonlik» va qo'lda boshqaruvning qarama-qarshisi. Egаning shaxsiy bosimini boshqaruv ritmi va qoidalar bilan almashtirish. Har bir jarayon tasvirlangan, har bir natija bashorat qilinadigan mexanizm qurish — xodimning ketishi «rejalashtirilgan kompetensiyalarni o'tkazish», biznes uchun to'xtov emas.",
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
        "Asosiy fikr: BBI egalar tomonida, pudratchi emas. Neytral pozitsiya yo'q.",
    },
    principles: {
      title: "Asosiy e'tiqodlar",
      items: [
        { text: "Biz biznes uchun to'liq mas'ul bo'lgan egalar va CEO tomoni." },
        { text: "Biz halol tahlil tarafdorimiz, og'riqli bo'lsa ham." },
        { text: "Tizim iste'doddan muhim." },
        { text: "Shaxsiy tajriba. Tahdidni yuzma-yuz bilamiz." },
      ],
    },
    manifesto: {
      title: "Biz qarshimiz",
      items: [
        { text: "Biz «havo gap»ga qarshimiz." },
        { text: "Biz «xizmat» o'rniga tizimsizlikka qarshimiz." },
        { text: "Biz odamga bog'liqlikka qarshimiz." },
        { text: "Biz shaffof emaslikka qarshimiz." },
        { text: "Biz doimiy «yong'in o'chirish»ga qarshimiz." },
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
      description: "Skriningga yoziling — bo'shliq va o'sishni aniqlaymiz.",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Qisqa so'rov",
        submit: "Skriningga yozilish",
      },
    },
  },
  footer: {
    copyright: "© 2024 BBI (Bold Brands International). Barcha huquqlar himoyalangan.",
    tagline: "Bold Brands International — tashqi marketing bo'linmangiz.",
    aboutTitle: "Kompaniya haqida",
    aboutLinks: [
      { label: "Biz haqimizda", href: "/about" },
      { label: "Keyslar", href: "/cases" },
      { label: "Sharhlar", href: "/reviews" },
    ],
    servicesTitle: "Xizmatlar",
    servicesLinks: [
      { label: "Brending" },
      { label: "Digital targ'ib" },
      { label: "Video ishlab chiqarish" },
      { label: "Veb-ishlab chiqish va dizayn" },
      { label: "Kompleks marketing qo'llab-quvvatlash" },
      { label: "Avtomatlashtirish va tahlil" },
      { label: "Operativ bosish" },
    ],
    socialTitle: "Biz",
    locations: [
      {
        city: "Bishkek",
        address: "Matrosova ko'chasi, 102",
        phone: "+996 999 99 22 44",
        email: "office.kg@boldbrands.pro",
        socials: {
          instagram: "https://instagram.com",
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/996999992244",
        },
      },
      {
        city: "Toshkent",
        address: "Yashnobod tumani, Yangibozor 1/4",
        phone: "+998 90 054 34 45",
        email: "office.uz@boldbrands.pro",
        socials: {
          instagram: "https://instagram.com",
          facebook: "https://facebook.com",
          telegram: "https://t.me/",
        },
      },
    ],
    addressLabel: "Manzil",
    phoneLabel: "Telefon",
    emailLabel: "Elektron pochta",
    workingHoursLabel: "Ish vaqti",
    workingHours: "Du-Ju: 09:00-18:00",
    privacyLabel: "Maxfiylik siyosati",
    privacyHref: "/privacy",
  },
  cases: {
    hero: {
      eyebrow: "Haqiqiy natijalar",
      title: "Kейslar: tizimli yondashuv amalda",
      description:
        "«Reklama qildik» emas, balki himoya, tayanch va tizimni qanday qurganimizni ko'rsatamiz. Kontekst, muammo, BBI harakati va o'lchanadigan natija.",
    },
    filters: {
      industry: "Sanoat",
      direction: "Yo'nalish",
      scale: "O'lcham",
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
    noResults: "Tanlangan filterlar bo'yicha kейslar topilmadi.",
    caseDetail: {
      backToCases: "← Keyslar",
      context: "Kontekst",
      problem: "Muammo",
      whatBbiDid: "BBI nima qildi",
      result: "Natija",
      artifacts: "Artefaktlar",
      bbiRole: "BBI roli",
      infographicForecast: "Oldin",
      infographicResult: "Natija",
      infographicTitle: "Raqamlarda natijalar",
    },
    items: [
      {
        slug: "med-lab-sla",
        company: "Tibbiy laboratoriya (NDA)",
        industry: "Sog'liqni saqlash xizmatlari",
        keyResult: "SLA 87%, baza reaktivatsiyasi 34%, konversiya +21%",
        excerpt: "Tizimli xatolikni yakka holdan ajratish: tijoriy blokni qayta loyihaladik, rollarni ajratdik — boshqariladigan vornka va bashorat qilinadigan pipeline.",
        seoTitle: "Savdoda tizimli xato: laboratoriya keysi — SLA 87%, baza reaktivatsiyasi 34%",
        metaDescription:
          "Tizimlini yakka holdan ajratish: laboratoriya keysi — SLA 87%, buyurtma chastotasi +23%, baza reaktivatsiyasi 34% va bashorat qilinadigan pipeline.",
        keywords: [
          "tibbiy laboratoriya keysi",
          "savdoda SLA",
          "CRM va SLA",
          "boshqariladigan savdo vornkasi",
          "savdoda tizimli xato",
          "lid konversiyasining o'sishi",
          "daromad pipeline",
          "lidlar yo'qolgan",
          "savdo va marketing",
          "mijozlar bazasini qayta faollashtirish",
          "buyurtma chastotasi o'sishi",
          "LTV o'sishi",
          "CRM da SLA nazorati",
          "tijoriy blok qurish",
        ],
        h1: "Tibbiy laboratoriya keysi: tizimli xatolikni yakka holdan qanday ajratish — va daromadni boshqarishni qaytarish",
        tags: ["Savdo", "CRM va SLA", "Operatsiya"],
        industryFilter: "services",
        directionFilter: "sales",
        scaleFilter: "mid",
        context:
          "Tibbiy laboratoriya. CRM sozlangan, SLA belgilangan, reklama kampaniyalari ishlaydi. Ammo samaradorlikni tahlil qilganda: lidlar ko'pchiligi «yo'qolgan», vornka boshqarilmaydi. Menedjerlar: «marketing noto'g'ri lidlar olib keldi, ular sovuq». Audit ko'rsatdi: SLA bajarilmagan, kechikishlar yig'ilgan, rahbar xabarnomalarga javob bermagan. Lidlarning 31% trigger so'rovlar bilan kontaktlar (ishlash mumkin va kerak). 59% faqat avtojavob oldi — hech kim ishlamadi. Muammo «lid sifatida» emas, balki lidlar bilan ishlash jarayoni mavjud emas edi.",
        problem:
          "Ijrochilarni tanlashda tizimli xato: savdo menedjerlari o'rniga admin funktsiyasi bo'lgan odamlar — muntazam mijozlardan so'rovlarni qabul qilish, ijroga uzatish, status bo'yicha kuzatish. Koordinator/admin roli, savdo emas. Admin reaktiv: oqimni qabul qilish, shoshilinchni yopish. Savdo proaktiv: suhbat olib borish, kontaktga qaytarish, rad etishlarga chiday olish. Operatsion yuk ostida admin har doim «shoshilinch»ni tanlaydi, savdo «qoldiq»da. Motivatsiya masalasi emas, funktsiyalar arxitekturasi masalasi.",
        whatBbiDid: [
          "Funktsiyalarni ajratdik va har bir rol uchun o'lchanadigan natijani belgiladik — odamlarni «zo'rlash» o'rniga.",
          "Tijoriy blokni «passiv buyurtma kutilishi» modelidan daromadni boshqarishga o'tkazdik: ekspansiya (yangi mijozlar) + LTV maksimallashtirish (baza rivoji).",
          "Rollarni joriy qildik: Hunter (yangi mijozlar), Farmer (buyurtma chastotasi, saqlash, reaktivatsiya), KAM (asosiy hisoblar), Administratorlar (operatsiya savdoni almashtirmasdan).",
          "Har bir rolni «bitta natija»da qildik — savdo ishlab chiqarish o'tini bilan yutilgan aralashuvni olib tashladik.",
        ],
        resultNumbers: [
          { before: "SLA bajarilmagan, kechikishlar odat", after: "SLA 87%", beforeValue: 15, afterValue: 87, label: "SLA" },
          { before: "Konversiya: lidlar avtojavobda o'ldi", after: "+21%", beforeValue: 5, afterValue: 26, label: "Konversiya" },
          { before: "Bazaga javobgar rol siz buyurtma chastotasi", after: "birinchi oy +23%", beforeValue: 10, afterValue: 33, label: "Buyurtma chastotasi" },
          { before: "4–6 oy uxlab yotgan baza qaytishsiz", after: "34% reaktivatsiya qilindi", beforeValue: 0, afterValue: 34, label: "Baza reaktivatsiyasi" },
        ],
        artifacts: [
          "Hunter / Farmer / KAM / Admin roli struktura",
          "CRM da SLA nazorati",
          "Lid qayta ishlash rejalari",
          "Baza reaktivatsiya jarayoni",
        ],
        bbiRole:
          "Tizimlini yakka holdan ajratdik. «Jazolash/o'qitish/KPI ni qattiqlashtirish» o'rniga tizimli sababni bartaraf ettik — noto'g'ri loyihalangan rollar. Natija: boshqariladigan vornka, bashorat qilinadigan daromad pipeline, kassa bo'shliqlari ruxsat etilgan diapazonda. BBI tijoriy blokni qayta loyihaladi, boshqaruvni imitatsiya qilmadi.",
        sections: [
          { title: "Mijoz", paragraphs: ["Sog'liqni saqlash / tibbiy laboratoriya sohasi."] },
          {
            title: "So'rov",
            paragraphs: [
              "Kompaniya CRM sozladi, SLA belgiladi, muntazam reklama kampaniyalarini olib bordi. Ammo reklama kampaniyalari samaradorligini tahlil qilganda, lidlarning ko'p qismi haqiqatda «yo'qolgan», vornka boshqarilmas edi.",
              "Klassik konflikt darhol boshlandi: menedjerlar «marketing noto'g'ri odamlarni olib keldi, lidlar sovuq» deb aytishdi.",
            ],
          },
          {
            title: "Faktlar auditi nima ko'rsatdi",
            paragraphs: ["CRM da murojaatlarni qayta ishlash zanjirini ko'tardik va haqiqiy rasmini ko'rdik:"],
            bullets: [
              "SLA menedjerlar tomonidan bajarilmagan, kechikishlar yig'ilgan.",
              "Rahbar CRM dagi kechikishlar haqidagi xabarnomalarga javob bermagan.",
              "Lidlarning 31% trigger so'rovlar bilan kelgan va kontaktlarni qoldirgan (ya'ni ular bilan ishlash mumkin va kerak).",
              "Lidlarning 59% faqat tizim avtojavobini olgan, keyin hech kim ular bilan ishlamagan.",
            ],
            paragraphsAfterBullets: [
              "Demak, muammo «lidlar sifatida» emas edi — muammo shundaki, lidlar bilan ishlash jarayoni mavjud emas edi.",
            ],
          },
          {
            title: "Nima uchun «jazolash / o'qitish / KPI ni qattiqlashtirish» har doim yechim emas",
            paragraphs: ["Biznes lidlarning yo'qolishini ko'rganda, standart choralar to'plami quyidagicha ko'rinadi:"],
            bullets: [
              "menedjerlarni «savdo»ga o'qitish,",
              "nazoratni kuchaytirish,",
              "penaltilarni joriy qilish,",
              "KPI ni qayta hisoblash,",
              "«qo'ng'iroq qilish» va «bosish»ga majburlash.",
            ],
            paragraphsAfterBullets: [
              "Bu faqat sabab yakka holda bo'lsa ishlaydi: intizom tushgan, jamoa bo'shashgan, rahbar bosishmagan, bir-ikki xodim «xato qilgan».",
              "Lekin asosiy boshqaruv ko'nikmasi — tizimli xatolikni yakka holdan ajratish.",
              "Chunki sabab tizimli bo'lsa, har qanday «kuchaytirish» boshqaruv teatriga aylanadi: vaqt sarflaysiz, qisqa muddatli faollik o'sishini olasiz va 2–3 hafta ichida tizim yana avvalgi holatiga qaytadi.",
            ],
          },
          {
            title: "Aslida nima bo'lgan: ijrochilarni tanlashda tizimli xato",
            paragraphs: [
              "Diagnostikaga chuqurroq kirib, simptomlarni sababdan ajratdik.",
              "Ma'lum bo'ldiki, «savdo menedjerlari» rolida haqiqatda ma'muriy funktsiyani bajaradigan odamlar tayinlangan:",
            ],
            bullets: [
              "muntazam mijozlardan so'rovlarni qabul qilish,",
              "ijroga uzatish,",
              "status bo'yicha kuzatish,",
              "operatsion savollarni hal qilish.",
            ],
            paragraphsAfterBullets: [
              "Demak, bu «koordinator/admin» roli edi, savdo emas.",
              "Va bu yerda tizimli rol nomuvofiqligi ishga tushdi:",
              "Admin — reaktiv rol: oqimni qabul qilish, xatolarga yo'l qo'ymaslik, shoshilincni yopish, «operatsiyani ushlab turish».",
              "Savdo — proaktiv rol: suhbat olib borish, mijozni kontaktga qaytarish, rad etishlarga chiday olish, qarorgacha bosish, taymingni saqlash.",
              "Operatsion yuk ostida admin har doim «shoshilinch va qizigan»ni tanlaydi, savdo «qoldiq»da qoladi. Va bu motivatsiya masalasi emas. Bu funktsiyalar arxitekturasi masalasi.",
              "Xulosa: muammo tizimli edi — «yomon lidlar» va «yomon menedjerlar» emas, balki noto'g'ri loyihalangan rollar va mas'uliyat.",
            ],
          },
          {
            title: "Yechim: tijoriy blokni qayta loyihalash, odamlarni «kuchaytirish» emas",
            paragraphs: [
              "Simptomni davolash (jazolash/o'qitish) o'rniga tizimni o'zgartirdik — funktsiyalarni ajratdik va har bir rol uchun o'lchanadigan natijani belgiladik.",
              "Tijoriy blokni «passiv buyurtma kutilishi» modelidan daromadni boshqarish modeliga ikki asosiy rukn orqali o'tkazdik:",
            ],
            bullets: [
              "Ekspansiya — yangi mijozlar orqali bozor ulushini tizimli egallash (bizning holatda — laboratoriyaga objektiv ravishda o'sish foydali bo'lgan segmentlar).",
              "LTV maksimallashtirish — joriy bazani rivojlantirish: chastota o'sishi, o'rtacha chek, «uxlab yotgan» qaytishlar, saqlash.",
            ],
            paragraphsAfterBullets: [
              "Rollar va natijalar bo'yicha yangi tuzilma:",
              "«Savdo», «baza rivoji» va «operatsion qo'llab-quvvatlash» funktsiyalarini ajratdik, savdo ishlab chiqarish o'tini bilan yutilmasin.",
              "1) Hunter Menedjer (yangi mijozlarni jalb qilish) — yangi mijozlar va ularni muntazam buyurtma tsikliga jalb qilish uchun javobgar.",
              "2) Farmer Menedjer (joriy baza rivoji) — mijoz xaridlaridagi ulush, buyurtma chastotasi, saqlash va qaytishlar uchun javobgar.",
              "3) KAM / Yo'nalish rahbari (asosiy mijozlar va yirik shartnomalar) — strategik munosabatlar va yirik shartnomalarni himoya qilish uchun javobgar.",
              "4) Administratorlar (operatsiya va xizmat) — buyurtmalarni to'g'ri qayta ishlash va status bo'yicha kommunikatsiya uchun javobgar — lekin savdoni almashtirmaydi.",
              "Asosiy ma'no: har bir rol «bitta natija»da bo'lishi kerak. Rollar aralashganda — biznes «sukunatda» pul yo'qotadi, keyin marketingda aybdorni qidiradi.",
            ],
          },
          {
            title: "Joriy etilgandan keyin nima o'zgardi: raqamlarda natija",
            paragraphs: [
              "Tizimli sababni olib tashlaganimizda, ko'rsatkichlar tez va bashorat qilinadigan tarzda siljidi — chunki tizim tizim sifatida ishlashni boshladi, geroik harakatlar to'plami emas.",
            ],
            bullets: [
              "SLA 87% gacha tekislandi — kechikishlar odat bo'lishni to'xtatdi, nazorat muntazam bo'ldi, lidlarni qayta ishlash barqaror bo'ldi.",
              "Bu konversiyada 21% o'sish berdi: murojaatlar avtojavoblar va kechikishlarda «o'lmasdan», ko'proq lidlar haqiqiy suhbat va buyurtmagacha yetdi.",
              "Bitta mijozdan buyurtma chastotasi birinchi oyda 23% oshdi — bazani rivojlantirish va qaytishlar uchun javobgar rol paydo bo'lgani uchun.",
              "4–6 oy buyurtma bermagan «uxlab yotgan» mijozlar bazasining 34% reaktivatsiya qilindi — chunki mijozlarni qaytarish jarayon bo'ldi, tasodif emas.",
            ],
            insertInfographic: true,
          },
          {
            title: "Moliyaviy ta'sir: kassa bo'shliqlari «ruxsat etilgan koridor»ga kirgan",
            paragraphs: [
              "Alohida muhim: SLA yaxshilanishi va konversiya o'sishi nafaqat tijoriy, balki moliyaviy boshqaruv ta'sirini ham berdi.",
              "Vornka boshqariladigan bo'lgach, kompaniya bashorat qilinadigan daromad oqimini oldi — CRM bosqichlari va SLA intizomiga bog'langan kelajakdagi tushumlarning aniq hajmi.",
              "Bu o'z navbatida:",
            ],
            bullets: [
              "davriy kassa bo'shliqlarini qisqartirdi, chunki tushumlar «lotereya» bo'lishni to'xtatdi;",
              "to'lovlar va xaridlarni «his-tuyg'u» bo'yicha emas, vornka harakati asosida daromad prognozi bo'yicha rejalashtirishga imkon berdi;",
              "qo'lda boshqaruv va favqulodda vaziyatlardan qat'iy nazar — pul jarayon natijasi bo'ldi, geroizm emas.",
            ],
          },
          {
            title: "Asosiy xulosa",
            paragraphs: [
              "Bu keys bitta narsa haqida: tizimlini yakka holdan ajratmasdan boshqaruv qararlarini qabul qilib bo'lmaydi.",
              "Agar biz odatiy «menedjerlar aybdor — jarima/o'qitish/KPI ni qattiqlashtirish» yo'lini tanlagan bo'lsak, kompaniya qisqa muddatli ta'sir olgan va keyin yana o'sha nuqtaga qaytgan bo'lar edi, chunki rollar va mas'uliyat arxitekturasi o'zgarmagan bo'lardi.",
              "Biz boshqacha qildik: tizimli sababni olib tashladik — va SLA, konversiyalar, buyurtma chastotasi, baza reaktivatsiyasi va eng muhimi daromad bashorat qilinadiganligida o'lchanadigan natijaga erishdik.",
            ],
          },
        ],
      }
    ],
  },
  blog: {
    hero: { title: "Blog va ekspertiza", description: "Mustaqil va himoyalangan biznes tizimlari haqida maqolalar." },
    card: { readMore: "Batafsil" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operatsiya", categoryKey: "operations", title: "5 qadam: avtonom boshqaruv", description: "Ritm, SOP va nazorat qanday quriladi.", image: "/blog/operations-autonomous.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Chek-list yuklash", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostika", categoryKey: "diagnostics", title: "Diagnostika", description: "Haqiqiy muammolarni topish.", image: "/blog/diagnostics-analysis.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Skriningga yozilish", href: "/contacts" } },
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
      successMessage: "So'rov yuborildi. Tez orada siz bilan bog'lanamiz.",
      errorMessage: "So'rovni yuborib bo'lmadi. Keyinroq urinib ko'ring yoki to'g'ridan-to'g'ri yozing.",
    },
  },
};
