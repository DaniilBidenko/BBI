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
    breadcrumb: "Qanday ishlaymiz",
    hero: {
      eyebrow: "Ish modeli",
      title: "6 tayanch: bitta tizim, xizmatlar to'plami emas",
      description:
        "Biz operatsiyani marketingdan, marketingni moliyadan ajratib sotmaymiz. Biznes — bu tizim. Bir tayanchdagi teshik boshqalarini ham qulatadi. BBI olti yo'nalishga bir vaqtning o'zida kiradi va yagona boshqaruv konturini quradi.",
      ctaLabel: "6 BBI TAYANCHI",
    },
    scheme: {
      centerLabel: "Biznes",
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
        title: "Operatsion samaradorlik",
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
          "Biznes egasining doimiy ishtirokidagi qo'llab-quvvatlashsiz ham barqaror ishlaydi. Har bir jarayon qoidalarga ko'ra ishlaydi — bugun ofisda kim bo'lishidan qat'iy nazar.",
        resultExpanded: {
          whatWeBuild:
            "Boshqaruv ritmi (cadence), SOP, orgsxema, RACI matritsasi va KPI panellari. Har bir owner tayinlangan; har bir metrika real vaqtda ko'rinadi.",
          partnerOutcomes: [
            "Ega operatsiyaga haftasiga 10 soatgacha sarflaydi — doimiy qo'lda boshqaruv o'rniga",
            "Asosiy odam ta'tilda yoki ketganida ham biznes to'xtamaydi",
            "Qarorlar protokol bo'yicha qabul qilinadi — egaga qo'ng'iroq orqali emas",
            "O'sish model bo'yicha masshtablanadi — yangi xaos darajasi yaratilmaydi",
          ],
        },
        broken:
          "Yong'in o'chirish, xaos, qo'lda boshqaruv va odamga bog'liqlik.",
        actions:
          "Boshqaruv arxitekturasini quramiz: kim nima uchun javobgar, qarorlar qanday qabul qilinadi, ijro qanday nazorat qilinadi. Biznes ritm va qoidalarga ko'ra ishlaydi — kayfiyatga emas.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "Mas'uliyat zonasi va qaror ierarxiyasi bilan orgsxema",
                "Asosiy jarayonlar bo'yicha SOP",
                "Har bir jarayon uchun RACI: owner, ijrochi, tasdiqlovchi",
                "Boshqaruv uchrashuvlari tizimi (cadence): format, ishtirokchilar, chastota, bayonnoma",
              ],
            },
            {
              title: "Metrikalar va panellar",
              items: [
                "KPI-dashboard: biznes holati bitta ekranda — qo'lda yig'masdan",
                "Ijro nazorati metrikalari: asosiy ko'rsatkichlar bo'yicha plan-fakt",
                "Eskalatsiya nuqtalari: qachon va kimga masala ko'tariladi — egaga qo'ng'iroqsiz",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Yangi xodimlarni moslashtirish chek-listlari",
                "Jamoa o'zi saqlaydigan boshqaruv ritmi reglamenti",
              ],
            },
          ],
        },
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
          "Lid va mijoz narxi, qaysi kanal ishlashi va barcha ma'lumotlar hamda kabinetlar kimga tegishli ekanligi aniq.",
        resultExpanded: {
          whatWeBuild:
            "Birinchi tegishdan to'loqgacha skvoznoy analitika, kanallar auditi, jalb iqtisodi va barcha kabinetlar hamda bazalarning kompaniyaga o'tkazilishi.",
          partnerOutcomes: [
            "Barcha kirish va bazalar kompaniyada — agentlik almashsa ham tarix yo'qolmaydi",
            "Qaysi kanal daromad keltirishi, qaysi xarajat va nega — aniq tasvir",
            "Marketing byudjeti intuitsiya emas, ma'lumotlar asosida taqsimlanadi",
            "Lid oqimi boshqariladi va prognozlanadi — «yulduz» podryadchisiz",
          ],
        },
        broken:
          "Byudjet «yo'qoladi», prognoz va nazorat yo'q.",
        actions:
          "Skvoznoy analitikani sozlaymiz, barcha kabinet va bazalarning egalik huquqini o'tkazamiz, har bir tiyin natijaga bog'langan modelni quramiz.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "Har bir kanal iqtisodi bilan jalb kanallari xaritasi: lid narxi, CPL, mijoz narxi",
                "Joriy kanallar auditi: nima ishlaydi, nima byudjetni yo'qotadi — raqamlar bilan",
                "Kanallar va maqsadlar bo'yicha marketing byudjeti taqsimlash modeli",
                "Kompaniya tomonda reklama kabinetlarini boshqarish bo'yicha ko'rsatmalar",
              ],
            },
            {
              title: "Metrikalar va panellar",
              items: [
                "Skvoznoy analitika dashboard: birinchi tegishdan to'loqgacha",
                "Har bir kanal bo'yicha voronka metrikalari: ko'rishlar → lidlar → kvalifikatsiya → sotuv",
                "Mijoz segmentlari bo'yicha LTV va ROI",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Barcha kabinet, baza va kirishlar kompaniyaga o'tkazilgan — hujjatlashtirilgan",
                "Podryadchilar va agentliklar bilan ishlash reglamenti: kim nimaga egalik qiladi",
              ],
            },
          ],
        },
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
          "Savdo tizimda ushlanadi, ikkita «yulduz» menejerda emas. Natija takrorlanadi va prognozlanadi.",
        resultExpanded: {
          whatWeBuild:
            "Skriptlar, lead bilan ishlash standartlari, CRM nazorati, kvalifikatsiya voronkasi va yangi menejerlar uchun onboarding.",
          partnerOutcomes: [
            "Asosiy menejer ketganda ham savdo to'xtamaydi",
            "Yangi xodim 2–4 haftada reja ko'rsatkichlariga chiqadi",
            "Ega voronkani real vaqtda ko'radi — hisobot so'ramasdan",
            "Daromad prognozlanadi: plan-fakt mos keladi — «bu oy qanday chiqadi» emas",
          ],
        },
        broken:
          "«Yulduz»larga bog'liqlik, jamoa almashsa natija tushadi.",
        actions:
          "Natija «yulduzlarga» bog'liq bo'lmagan tizimni quramiz. Har yangi menejer 2–4 haftada reja ko'rsatkichlariga chiqadi — reglament bo'yicha, «ko'z bilan» emas.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "Har bir voronka bosqichi va mijoz turi uchun sotuv skriptlari",
                "Lid bilan ishlash reglamenti: birinchi tegishdan bitim yopilishigacha",
                "CRM-arxitektura: voronka tuzilishi, statuslar, maydonlar, avtomatlashtirishlar",
                "Yangi menejer uchun onboarding: 2–4 haftada natijaga chiqish",
              ],
            },
            {
              title: "Metrikalar va panellar",
              items: [
                "Real vaqtda sotuv voronkasi: har bosqichdagi konversiya",
                "Menejer KPIlari: daromad, bitimlar soni, konversiya bo'yicha plan-fakt",
                "«Yo'qotilgan lidlar» metrikasi: qayerda va nima uchun ketishadi",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Menejerlarni o'qitish va sertifikatlash tizimi",
                "Qo'ng'iroq va yozishmalar sifatini nazorat qilish reglamenti",
              ],
            },
          ],
        },
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
          "Ega real foydani ko'radi, «taxminiy raqamlar» emas. Qarorlar tuyg'uda emas, ma'lumotlarda.",
        resultExpanded: {
          whatWeBuild:
            "Boshqaruv hisobi, plan-fakt, to'lov kalendari, yo'nalishlar bo'yicha hisob va yashirin moliyaviy oqimlarni aniqlash.",
          partnerOutcomes: [
            "«Pulim qayerda?» savoli — 5 daqiqada, 5 kun emas",
            "Qarorlar intuitsiya emas, ma'lumotlar asosida",
            "Moliyaviy teshiklar va yashirin oqimlar topiladi va yopiladi",
            "Investor yoki bank bilan suhbatga tayyor: raqamlar aniq va asoslangan",
          ],
        },
        broken:
          "«Bitta haqiqat» yo'q, kassa uzilishlari, ko'r joylar.",
        actions:
          "Boshqaruv hisobi va moliya modelini sozlaymiz. Ega real foyda, pul harakati va kassa uzilishlarini oldindan ko'radi — keyin emas.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "Biznes yo'nalishlari bo'yicha boshqaruv P&L",
                "Naqd oqim hisoboti (CF): davrlar bo'yicha haqiqiy tasvir",
                "To'lov kalendari: kassa uzilishlari 2–4 hafta oldindan ko'rinadi",
                "Biznes moliya modeli: rentabellik nuqtasi, marja, birlik iqtisodi",
              ],
            },
            {
              title: "Metrikalar va panellar",
              items: [
                "Moliya dashboard: tushum, foyda, marja, xarajatlar — bitta ekranda",
                "Yo'nalishlar bo'yicha hisob: qaysi daromad keltiradi, qaysi tortadi",
                "Barcha asosiy moliya ko'rsatkichlari bo'yicha plan-fakt",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Topilgan moliyaviy oqimlar hisoboti va ularni yopish bo'yicha tavsiyalar",
                "Moliya reglamentlari: xarajatlarni kim, nima va qachon tasdiqlaydi",
              ],
            },
          ],
        },
      },
      {
        key: "hr",
        title: "HR va jamoa",
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
          "Jamoa barqaror: rollar mustahkam, ekspertiza tizimda — odamlarda emas. Xodim ketishi falokat emas.",
        resultExpanded: {
          whatWeBuild:
            "Lavozim profillari, yollash tizimi, onboarding dasturi, baholash tizimi va muhim funksiyalar bo'yicha kadrlar zaxirasi.",
          partnerOutcomes: [
            "Har qanday xodim ketishi — rejalashtirilgan kompetensiya uzatish, funksiya qulashi emas",
            "Yollash standart bo'yicha: keraklarni olamiz — «kim kelsa» emas",
            "Yangi odam tizimni buzmaydi — unga moslashadi",
            "Ekspertiza kompaniya jarayon va reglamentlarida — ikki kishining boshida emas",
          ],
        },
        broken:
          "Kadrlar oqimi, tartibsiz yollash va odamga bog'liqlik.",
        actions:
          "Yollashdan baholashgacha HR-jarayonlarini quramiz. Ekspertiza tizimda — odamlarda emas. Xodim ketishi endi funksiyani buzmaydi.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "Barcha asosiy rollar uchun lavozim profillari: kompetensiyalar, KPI, mas'uliyat zonasi",
                "Baholash mezonlari va tanlash metodikasi bilan yollash voronkasi",
                "Onboarding dasturi: birinchi 30–90 kun rejasi, chek-listlar va nazorat nuqtalari",
                "Xodimlarni baholash tizimi: natija metrikalari va muntazam review",
              ],
            },
            {
              title: "Metrikalar va panellar",
              items: [
                "HR-dashboard: tekshuvchanlik, natijaga chiqish vaqti, jamoa NPS",
                "Kadrlar zaxirasi xaritasi: kim qaysi lavozimlarga o'sishga tayyor",
                "Muhim funksiyalar bo'yicha preemstvenlik matritsasi",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Xodim ketish reglamenti: vazifalar, kirishlar va bilimlarni protokol bo'yicha uzatish",
                "Kompaniya bilimlar bazasi: ekspertiza tizimda saqlanadi",
              ],
            },
          ],
        },
      },
      {
        key: "legal",
        title: "Aktivlarni himoya qilish",
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
          "Aktivlar, ma'lumotlar va huquqlar kompaniyaga tegishli — yuridik va texnik jihatdan. Odamlarga yoki podryadchilarga emas.",
        resultExpanded: {
          whatWeBuild:
            "NDA, mehnat shartnomalari, podryadchi shartnomalari, IP himoyasi va mavjud zaifliklarning yuridik auditi.",
          partnerOutcomes: [
            "Asosiy aktivlar — bazalar, kirishlar, IP (intellektual mulk), brend — yuridik jihatdan kompaniyaga tegishli",
            "Xodim yoki podryadchi ketishi biznesga tahdid yaratmaydi",
            "Ma'lumot o'g'irligi, «almashtirib bo'lmaydiganlar» shantaji va mijoz bazalarini yo'qotishdan himoyalangan",
            "Yuridik kontur investor, bank yoki hamkor tekshiruviga tayyor",
          ],
        },
        broken:
          "Sud risklari, data sizishi va aktiv zaifligi.",
        actions:
          "Yuridik zaifliklarni yopamiz va himoya konturini quramiz: aktivlar, ma'lumotlar va intellektual mulk huquqlari — kompaniyada, odamlar va podryadchilarda emas.",
        actionsExpanded: {
          partnerHeading: "Hamkor nima oladi:",
          sections: [
            {
              title: "Hujjatlar va vositalar",
              items: [
                "NDA va maxfiylik shartnomalari: xodimlar, hamkorlar va podryadchilar uchun shablonlar",
                "Savdo siri va ish natijalari huquqlarini himoya qiluvchi mehnat shartnomalari",
                "Podryadchi shartnomalari: ishlab chiqarish, kontent va ma'lumot huquqlari — kompaniya tomonda",
                "Ma'lumotlarni saqlash va kirish reglamenti: kim, nimaga, qanday shartlarda",
              ],
            },
            {
              title: "Audit va risk xaritalari",
              items: [
                "Yuridik audit: yopish ustuvorligi bilan zaifliklar xaritasi",
                "Kompaniya aktivlari reyestri: nima rasmiylashtirilgan, nima yo'q, nima tuzatish kerak",
                "IP himoya chek-listi: brend, ishlab chiqarish, kontent — aktiv sifatida",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Podryadchi almashganda yoki xodim ishdan bo'lganida kirishlarni uzatish reglamenti",
                "Investor, bank yoki hamkor tekshiruviga tayyor hujjatlar paketi",
              ],
            },
          ],
        },
      },
    ],
    results: {
      title: "Qimmatli yakuniy natija (QYN)",
      description: "Har bir tayanch bo'yicha egaga beriladigan natija.",
      badge: "",
      resultModalWhatWeBuild: "Nima quramiz",
      resultModalPartnerLabel: "Hamkor qoladigan narsa",
      resultModalCloseLabel: "Yopish",
    },
    problems: {
      title: "Tayanch «sinса» nima bo'ladi",
      description:
        "Tizim ishlamasa, har yo'nalishda ko'rinadigan alomatlar.",
      badge: "Risklar",
    },
    actions: {
      title: "BBI biznesingizda aniq nima qiladi",
      description:
        "Biz tavsiya berib diagnostikadan keyin ketmaymiz. Oltita yo'nalishning har birida quramiz, joriy qilamiz va aniq vositalarni topshiramiz — loyiha tugagach ham hamkorda qoladi.",
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
        {
          title: "Biznesingiz o'syapti, lekin kompaniyada eng band odam — siz. Va eng qimmat ijrochi ham siz.",
          description: "Tizim qurilmagan — biznes sizning mavjudligingizga bog'liq.",
          details:
            "Chunki yomon boshqarasiz, demasdan. Chunki tizim qurilmagan: qarorlar sizda yopiladi, jamoa ko'rsatma kutadi, protokol bo'yicha emas. Haqiqiy dam olish yo'q. Ta'til — boshqa vaqt zonasida telefonda ishlash. Strategiya «yong'inlar tugagach»ga qoldiriladi — yong'inlar kamaymaydi.\n\nHisobotlar bor. Raqamlar bor. Haqiqat yo'q. Savdo bir narsa, moliya boshqasi, marketing uchinchi. Qaysi ma'lumotga ishonishni bilmagan holda qaror qabul qilasiz. Tushum o'sadi. Nazorat tuyg'usi — yo'q.\n\nHammasini o'zingizda ushlab turganingizcha, biznes sizga tegishli emas. U sizning mavjudligingizga tegishli.",
          pain: "Siz biznesni boshqarmayapsiz. Siz uning «cho'ntagisiz».",
        },
        {
          title: "Biznesni masshtablagansiz. Tushum o'sdi. Jamoa o'sdi. Muammolar ham.",
          description: "Operatsion model bo'lmasa, samaradorlik emas, yo'qotishlar masshtablanadi.",
          details:
            "80 kishi 8 kabi harakat qiladi: har bir bo'lim o'z realiligida, standartlar yo'q, rahbarlar o'z «davlatlarini» quradi. Ikkinchi ofis ochdingiz va xaosning ikkinchi manbasini oldingiz: tushum o'sadi, lekin foyda «qayerdadir yo'qoladi». Marja tushadi — sababi tushunarsiz. Chunki operatsion modelsiz masshtablash — bu o'sish emas. Bu yo'qotishlarni ko'paytirish.\n\nSOP yo'q — standart yo'q. RACI yo'q — javobgar yo'q. Yagona metrikalar yo'q — boshqaruv yo'q. Faqat o'sish illuziyasi va egasiga yukning keskin oshishi bor.",
          pain: "Xaosni masshtablash mumkin emas. Aks holda zararlarni masshtablaysiz.",
        },
        {
          title: "Biznesni besh barmoqdek bilasiz. Investor — yo'q. Va bu muammo.",
          description: "Bitimda qog'ozda boshqariluvchanlik kerak, «boshdagi potentsial» emas.",
          details:
            "Due diligence sizning intuitivligingiz va tajribangiz bilan qiziqmaydi. U hisobdagi teshiklar, aktivlarga huquq yo'qligi, shaffof bo'lmagan jarayonlarni ochadi. «Biznes egasi boshida» — aktiv emas. Bu bahoni pastga bosadigan qizil bayroq.\n\nYagona moliyaviy «haqiqat» yo'q — multiplikator uchun asos yo'q. Bazalar, IP, kirishlarga ownership yo'q — xaridor uchun kafolat yo'q. Boshqaruv tuzilmasi yo'q — sizsiz biznes omon qolishiga ishonch yo'q.\n\nInvestor sizning potentsialingizni sotib olmaydi. U boshqariluvchanlik, shaffoflik va bashorat qilinadigan natijani sotib oladi. Bu qog'ozda bo'lmasa — u yoki ketadi, yoki kamroq to'laydi.",
          pain: "Biznesingiz ishlaydi. Lekin aktiv sifatida rasmiylashtirilmaguncha — bo'lishi kerak bo'lganidan arzon.",
        },
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
          title: "Siz biznesni boshqarmayapsiz. Siz uning «cho'ntagisiz».",
          description:
            "Har kuni har qanday masalada yakuniy qaror sizdasiz: mijozga chegirmadan tortib bo'limdagi nizo qadar. Kompaniya sizsiz qaror qabul qila olmaydi — raqamlar bo'yicha ham, qoidalarda ham. CRM va hisobotlar shaklanadi, lekin raqamlar bo'yicha «bitta haqiqat» yo'q — savdo, marketing va moliya alohida yashaydi. Boshqaruv arxitekturasi o'rniga siz 24/7 operatsion menejersiz.",
          linkLabel: "Batafsil",
          href: "/icp/operations",
          modalLead:
            "Biznes egalarining 80% uchun shunday. Operatsion masalalarga sho'ng'ishingiz, bitimlar va savdoni o'zingiz kuzatishingiz, bo'limlarni qurishingiz kerak. Sizga bog'liq biznes aktiv emas — qafas.",
          symptoms: [
            "Operatsion masalalarga sho'ng'ishingiz, bitimlar va savdoni o'zingiz kuzatishingiz, bo'limlarni qurishingiz kerak. Sizga bog'liq biznes aktiv emas — qafas.",
            "Sizning «ha»ingizsiz hech qanday qaror qabul qilinmaydi. Bu boshqaruv emas. Bu operatsion botqoq.",
            "Sizsiz biznes yonadi. Telefoni 3 soat o'chirsangiz — buzilishlar boshlanadi: bitimlar uziladi, xatolar ko'payadi.",
            "24/7 ishdasiz: moliyada yong'in, podratchiklar… Endi strategiya qurmaysiz, rivojlanmaysiz va masshtablamaysiz.",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Kompaniya yoshi: 5+ yil",
            "Masshtab: $30k–250k/oy",
            "Shtat: 15–80 xodim",
            "Bosqich: o'sish bor, boshqariluvchanlik yo'q",
            "Biznes turi: B2B, B2B/B2C — savdo bo'limi va operatsion qism bo'lsa",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Boshqariluvchanlik",
            "Shaffoflik",
            "Aktivlarga ownership",
            "Raqamlarning yagona tasviri",
            "Cadence — boshqaruv ritmi",
            "Qo'lda boshqaruv kamroq",
          ],
        },
        {
          title: "Xaosni masshtablash mumkin emas. Aks holda zararlarni masshtablaysiz.",
          description:
            "Kompaniya o'sishi boshqariluvchanlik va marjaga aylanmaydi. Jamoa kengayadi, yangi funksiyalar va darajalar paydo bo'ladi, lekin umumiy operatsion kontur yo'q. Xodimlar ajratilgan jamoalar kabi tarqoq ishlaydi, har bir bo'lim o'z ma'lumotlari va maqsad haqidagi tasavvuriga tayangan. Natijada samaradorlik emas, balki xaos, ortiqcha xarajat va yo'qotishlar masshtablanadi.",
          linkLabel: "Batafsil",
          href: "/icp/scale",
          modalLead:
            "Standartlar va RACI bo'lmasa, masshtablanish xaosni ko'paytirishga aylanadi. Yagona boshqaruv konturi yo'q.\n\nBo'limlar turli realliklarda qaror qabul qiladi, hisobotlar bir-biriga zid chiqadi, foyda va sifatni bitta nuqtadan boshqarish esa imkonsiz bo'lib qoladi.",
          symptoms: [
            "Operatsion model o'rniga mavjud xaos masshtablanadi",
            "80 kishi turli uchastkalarda xuddi xatolarni takrorlaydi",
            "Rahbarlar «cho'ntak tortishadi» — har kim «o'z imperiyasini» quradi",
            "Bo'limlar turli boshqaruv mantiqida qaror qabul qiladi",
            "O'sish paradoksi: aylanma yuqori, lekin nazorat tuyg'usi va haqiqiy foyda kichikroq masshtabdagidan pastroq",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Yosh: 5+ yil",
            "Masshtab: $80k–500k/oy",
            "Shtat: 40–200 xodim",
            "Bosqich: masshtablanish (2-ofis / filial / yangi yo'nalishlar / jamoa o'sishi)",
            "Boshqaruv: egasi allaqachon «delegatsiya qilishni» sinab ko'rgan, lekin tizim mustahkam bo'lmagan",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Masshtablanishning operatsion modeli",
            "Standartlar",
            "Metrikalar bo'yicha yagona haqiqat",
            "SOP — muayyan vazifani bajarish uchun bosqichma-bosqich ko'rsatmalar",
            "RACI — javobgarlikni taqsimlash matritsasi",
            "Yagona KPI",
            "Boshqariladigan tuzilma",
            "Barqaror sifat",
          ],
        },
        {
          title: "Biznes aktiv sifatida rasmiylashtirilmasa — narxi bo'lishi kerak bo'lganidan arzon.",
          description:
            "Kompaniyani intuitiv va detallar darajasida bilasiz, lekin investor buni sotib olmaydi. Unga tushunarli, boshqariladigan kontur kerak — egasining og'zaki tushuntirish emas. Har qanday due diligence tezda hisob, shartnomalar va jarayonlardagi bo'shliqlarni ochadi. Yagona moliyaviy haqiqat, xavflar xaritasi va invest-papkasi bo'lmasa, xohlagan baholash va bitim shartlarini asoslash deyarli mumkin emas.",
          linkLabel: "Batafsil",
          href: "/icp/investor",
          modalLead:
            "Bugun kompaniya, xavflar va mijozlar haqidagi bilimning katta qismi sizda va kalit odamlarda yashaydi. Investor uchun bu signal: aktiv rasmiylashtirilmagan, xavflar boshqarilmaydi, tizim qog'ozda mustahkam emas.\n\nInvest-papkasi, xavflar xaritasi, yagona moliyaviy haqiqat va aniq rasmiylashtirilgan ownership bo'lmasa, investitsiyalar haqidagi har qanday dialog zaif pozitsiyadan boshlanadi.",
          symptoms: [
            "Bitimga tayyorlashda raqamlar, shartnomalar va aktivlarga huquqlar turli tizimlar va odamlarga sochilganligi aniqlanadi",
            "Valuatsiya egasining kutilishlariga quriladi, shaffof iqtisodiyotga emas: tuzilgan P&L yo'q, marja bo'yicha yagona «haqiqat» yo'q",
            "Boshqaruv modeli qog'ozda mustahkam emas: egaga va «qahramonlar jamoasiga» bog'liqlik investor uchun qizil bayroq sifatida qabul qilinadi",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Yosh: 5+ yil",
            "Masshtab: $150k–1M+/oy",
            "Shtat: 80–500+ xodim (muhim bo'lgani hajm emas, vazifaning yoshligi)",
            "Bosqich: investitsiyalar / hamkorlik / M&A / kredit / yirik shartnomaga tayyorlanish",
            "Boshqaruv: operatsionka bor, lekin «vitrina» yo'q — pul va xavflar qayerda, kim nimaga ega — tushunarsiz",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Biznes aktiv sifatida: shaffoflik, himoya, boshqariladigan xavflar",
            "Yagona moliyaviy haqiqat",
            "Yopilgan zaifliklar",
            "Invest-papkasi",
            "Ownership + cadence",
          ],
        },
      ],
      ctaLabel: "Vaziyatingizni muhokama qilish",
      modal: {
        scenarioLabel: "Stsenariy tahlili",
        signsLabel: "Odatiy belgilar",
        solutionLabel: "Nima qilish mumkin",
      },
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
        {
          title: "Operatsion samaradorlik",
          subtitle: "Maqsad: egasi qo'lda boshqaruvdan chiqadi",
          items: [
            "Boshqaruv ritmi (cadence): yig'ilishlar tizimi, chekinlar, nazorat nuqtalari",
            "SOP va org-tuzilma: har bir jarayon tasvirlangan, har bir owner tayinlangan",
            "Dashboardlar va KPI panellari: egasi 5 daqiqada biznes holatini ko'radi",
            "Adaptatsiya chek-listlari: yangi xodim tizimni buzmaydi",
          ],
        },
        {
          title: "Marketing",
          subtitle: "Maqsad: sarflangan har bir tiyin natijaga bog'langan",
          items: [
            "Skvoznoy analitika: tegishdan to'lovgacha — har bir kanal ko'rinadi",
            "Kanallar auditi: nima haqiqatan ishlaydi, nima byudjetni yo'qotadi",
            "Bazalar, kabinetlar va akkauntlarga ownership — kompaniyada, pudratchida emas",
            "Boshqariladigan marketing tizimi: bitta ijrochiga bog'liq emas",
          ],
        },
        {
          title: "Savdo",
          subtitle: "Maqsad: sotadi tizim — alohida «yulduz»lar emas",
          items: [
            "Muloqot skriptlari va reglamentlari: natija aniq inson iqtidoriga bog'liq emas",
            "Savdo bo'limini noldan qurish yoki mavjudini qayta qurish",
            "CRM nazorati: hech qanday lead yo'qolmaydi, hech qanday bitim «osilib» qolmaydi",
            "Voronka va kiruvchi arizalar: tizimli, qo'lda emas",
          ],
        },
        {
          title: "Moliya",
          subtitle: "Maqsad: «Pulim qayerda?» savoliga halol javob",
          items: [
            "Boshqaruv hisobi: biznesning haqiqiy iqtisodiyoti",
            "Moliyaviy teshiklar, yashirin sizilishlar va o'g'irlik sxemalarini ochish",
            "To'lov kalendari: kassa bo'shliqlari oldindan ko'rinadi, keyin emas",
            "Yo'nalishlar bo'yicha hisob: qaysi topadi, qaysi pastga tortadi",
          ],
        },
        {
          title: "HR va jamoa",
          subtitle: "Maqsad: jamoa qayta ishlab chiqariladi — odam ketishi tizimni buzmaydi",
          items: [
            "Lavozim profillari va tizimli yollash: keraklarni olamiz, tasodifiy emas",
            "Onboarding dasturi: yangi xodim tezda natijaga chiqadi",
            "Baholash va HR-analitika: kim tortadi, kim ushlab turadi, kim tormozlayotgani aniq",
            "Kadr zaxirasi va vorislik rejasi: muhim funksiyalar doim yopilgan",
          ],
        },
        {
          title: "Yuridik himoya",
          subtitle: "Maqsad: aktivlar kompaniyaga tegishli — texnik va yuridik jihatdan",
          items: [
            "NDA va maxfiylik shartnomalari: ma'lumotlar va intellektual mulk kirishda himoyalangan",
            "Mehnat shartnomalari va lavozim tavsiflari: huquq va majburiyatlar qog'ozda",
            "Shaxsiy ma'lumotlarni qayta ishlashga rozilik, pudratchilar bilan shartnomalar",
            "Yuridik audit: zaifliklar aniqlangan, yopilgan va hujjatlashtirilgan",
          ],
        },
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
    heroNav: {
      prev: "Oldingi ekran",
      next: "Keyingi ekran",
      pagesGroup: "Blok ekranlari",
    },
    heroPages: [
      {
        title: "Bold Brands International",
        body:
          "Egalar va CEO uchun Operating Partner. Bo‘linib ketgan amaliyotlarni yagona tizimga aylantiramiz: boshqaruv konturi, moliyaviy haqiqat va o‘sishga tayangan himoyalangan aktivlar.",
      },
      {
        title: "Qalqon, Rychag. Tizim",
        body:
          "Qalqon (ownership va aktivlarni himoya qilish), Rychag (operatsion tizim, sotish, analitika) va Tizimni (boshqaruv ritmi, standartlar, RACI) quramiz — biznes «qahramonlarga» emas, mexanizmga tayanadi.",
      },
      {
        title: "O‘sish bosqichlarida egalar hamkori",
        body:
          "Vazifamiz — biznesni boshqariladigan aktiv sifatida ko‘rinishini ta’minlash: yagona moliyaviy rasm, muhim aktivlarga rasmiylashtirilgan huquqlar va tizim.",
      },
    ],
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
        {
          title: "Biz egalar va CEO tomonidamiz",
          body:
            "Bu «hammalar orasida» neytral pozitsiya emas. Haqiqiy xavfni — moliyaviy, obro‘, operatsion — olgan inson tomonida turamiz. Har bir qarorimiz aynan uning manfaatidan kelib chiqadi.",
        },
        {
          title: "Biznesga halol qarashni qo‘llab-quvvatlaymiz — noqulay bo‘lsa ham",
          body:
            "Muammolarni o‘z nomi bilan atash qattiqlik emas — hurmat. Biznes qayerda pul, boshqaruv va qiymat yo‘qotayotganini ko‘rsatamiz. Qulay illyuziya qattiq haqiqatdan qimmatroq — pul va vaqt hisobida.",
        },
        {
          title: "Tizim iste'doddan har doim muhimroq",
          body:
            "«Almashtirib bo‘lmaydigan» odamlar — bu qiymat kiyimiga o‘ralgan xavf. Ekspertiza jarayonlar va kompaniya standartlarida, bitta inson boshida emas. Har bir ketish — falokat emas, rejalashtirilgan topshiruv.",
        },
        {
          title: "Tahdidlarni ichkaridan bilamiz — darsliklardan emas",
          body:
            "Biz ishlaydigan vaziyatlar — ma’lumotlar bazasini o‘g‘irlash, «almashtirib bo‘lmaydiganlar» shantaji, moliyada shaffof bo‘lmagan sxemalar, agentliklarga bog‘liqlik — bularni haqiqiy bizneslarda ochganmiz va o‘zimiz ham duch kelganmiz. Bu nazariya emas. Zarar yetkazishidan oldin aniqlab yopish mumkin bo‘lgan amaliyot.",
        },
      ],
    },
    manifesto: {
      title: "Biz qarshimiz",
      items: [
        {
          title: "Bo'sh va'dalarga qarshimiz.",
          body:
            "Amaliyotga kirmaydigan tavsiyalar, strategiyalar va chiroyli taqdimotlar ish illyuziyasidir. Biz o'zgarishlar real amaliyotga aylanishi uchun javobgarlik olamiz, tarix uchun papkada qolib ketishi uchun emas.",
        },
        {
          title: "Tizim o'rniga «xizmat»ga qarshimiz.",
          body:
            "Bir-biriga ulanmagan bir martalik harakatlar lokal natija beradi, lekin biznes arxitekturasini o'zgartirmaydi. Biz faqat vazifani yopmaymiz - vazifalar tizimli va qayta qo'llanadigan tarzda yechiladigan boshqaruv konturini quramiz.",
        },
        {
          title: "Odamlarga qaramlikka qarshimiz.",
          body:
            "Ikki-uch «kalit» odamga suyanadigan biznes aktiv emas, zaiflikdir. Ulardan biri ketishi funksiyani to'xtatishi yoki mijoz munosabatlarini buzishi mumkin. Biz aniq shaxslardan mustaqil ishlaydigan tizim quramiz.",
        },
        {
          title: "Shaffof emaslikka qarshimiz.",
          body:
            "Yashirin kelishuvlar, «kulrang» moliyaviy sxemalar, pudratchi qo'lida qolgan baza va kirishlar - bularning barchasi biznesning real qiymatini pasaytiradi va egasi eng oxirida biladigan xavflarni yaratadi. Shaffoflik opsiya emas, boshqariladigan biznesning bazasi.",
        },
        {
          title: "Doimiy yong'in o'chirish rejimiga qarshimiz.",
          body:
            "Doimiy «hozir shoshilinchni hal qilamiz» rejimi tizimli o'zgarishlarga resurs qoldirmaydi. Biz navbatdagi inqirozdan omon qolish uchun emas, inqirozlar ish normasi bo'lib qolmasligi uchun kelamiz.",
        },
        {
          title: "Egasi o'rniga ishlashga qarshimiz.",
          body:
            "Biz jamoaning o'rnini bosmaymiz va «tashqi CEO» emasmiz. Vazifamiz - tizimni qurib topshirish, shunda ketganimizdan keyin biznes to'liq mustaqil bo'ladi. Loyiha tugagach BBI ga qaramlik = 0.",
        },
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
    tagline: "Bold Brands International — ishonchli operatsion hamkoringiz.",
    aboutTitle: "Kompaniya haqida",
    aboutLinks: [
      { label: "Qanday ishlaymiz", href: "/work" },
      { label: "Keyslar", href: "/cases" },
      { label: "Blog", href: "/blog" },
    ],
    socialTitle: "Biz",
    locations: [
      {
        city: "Bishkek",
        address: "Matrosova ko'chasi, 102",
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
        city: "Toshkent",
        address: "Yashnobod tumani, Yangibozor 1/4",
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
    list: {
      sectionTitle: "Tegishli keysler",
      sectionEyebrow: "Keyslar bo'yicha navigatsiya",
      sectionSubtitle: "Kontekstingizga mos keysni tanlang",
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
    filters: {
      all: "Barchasi",
      marketing: "Marketing",
      finance: "Moliya",
      operations: "Operatsiya",
    },
    noPosts: "Bu toifada hozircha maqolalar yo'q.",
    card: { readMore: "Batafsil" },
    article: { backToBlog: "← Blog" },
    posts: [
      { slug: "5-shagov-avtonomnoe-upravlenie", category: "Operatsiya", categoryKey: "operations", title: "5 qadam: avtonom boshqaruv", description: "Ritm, SOP va nazorat qanday quriladi.", image: "/blog/operations-autonomous.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Chek-list yuklash", href: "/contacts" } },
      { slug: "diagnostika-problemy-biznesa", category: "Diagnostika", categoryKey: "diagnostics", title: "Diagnostika", description: "Haqiqiy muammolarni topish.", image: "/blog/diagnostics-analysis.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }], cta: { label: "Skriningga yozilish", href: "/contacts" } },
      { slug: "ekonomika-kanalov-marketing", category: "Marketing", categoryKey: "marketing", title: "Kanal iqtisodiyoti", description: "Skvoz analitika va o'sish.", image: "/blog/ekonomika-kanalov.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "sistemnye-prodazhi", category: "Savdo", categoryKey: "sales", title: "Tizimli savdo", description: "Standartlar va CRM.", image: "/blog/sistemnye-prodazhi.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "finansovaya-prozrachnost", category: "Moliya", categoryKey: "finance", title: "Moliyaviy shaffoflik", description: "Yagona haqiqat raqamlarda.", image: "/blog/finansovaya-prozrachnost.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
      { slug: "hr-kak-sistema", category: "HR", categoryKey: "hr", title: "HR tizim sifatida", description: "Rollar va mas'uliyat.", image: "/blog/hr-kak-sistema.png", sections: [{ title: "Umumiy", paragraphs: ["Content placeholder."] }] },
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
