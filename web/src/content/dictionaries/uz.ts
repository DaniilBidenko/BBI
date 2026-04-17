import type { Dictionary } from "./types";

export const uz: Dictionary = {
  nav: {
    items: [
      { label: "Uy", href: "/" },
      { label: "Kompaniya haqida", href: "/about" },
      { label: "Biz qanday ishlaymiz", href: "/work" },
      { label: "Ishlar", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Kontaktlar", href: "/contacts" },
    ],
    cta: "Boshlash",
  },
  work: {
    breadcrumb: "Biz qanday ishlaymiz",
    hero: {
      eyebrow: "Ish modeli",
      title: "6 ta ustun: xizmatlar to'plami emas, balki yagona tizim",
      description:
        "Marketing etakchilarni olib keladi, lekin sotish ularni yo'qotadi, chunki hech qanday qoidalar yo'q. Savdo bitimlarni yopadi - moliya daromad qayerdan kelganini tushunmaydi. Operatsion samaradorlik ta'tilga chiqqan ikki kishiga bog'liq.\n\nShuning uchun biz alohida \"xususiyatlar xizmatlarini\" sotmaymiz. Bir ustunni maqsadli takomillashtirish, qolganlari zaif bo'lsa, barqaror natija bermaydi - bu vaqtinchalik ta'sir va yangi ortiqcha yuk nuqtasini beradi.\n\nBBI bir vaqtning o'zida barcha oltita ustunga murojaat qiladi: operatsion mukammallik, marketing, savdo, moliya, HR va aktivlarni himoya qilish.",
      ctaLabel: "BBIning 6 ta ustuni haqida ko'proq o'qing",
      carouselSlides: [
        "Biz operatsiyani marketingdan alohida yoki marketingni moliyadan alohida sotmaymiz. BBI barcha oltita ustunga kiradi va yagona boshqaruv konturini quradi: har bir funksiya boshqalariga metrikalar, javobgarlik va ritm orqali bog'langan.",
        "Biz diagnostikadan boshlaymiz: haqiqiy ildiz sabablarni topamiz — qayerda biznes pul, boshqaruv va qiymat yo'qotadi. Keyin maqsadli arxitektura — bu bo'shliqlarni bartaraf qiladigan va boshqariladigan o'sish uchun ishchi asos yaratadigan operatsion modelni loyihalashtiramiz.",
        "BBI joriy etishning boshidan oxirigacha biznes ichida qoladi — 90+ ish kuni. Bu vaqt ichida o'zgarishlar sxemadan kundalik amaliyotgacha yo'lni bosib o'tadi: uchrashuvlar yangi formatda bo'ladi, qarorlar protokol bo'yicha qabul qilinadi, metrikalar qo'lda emas, tizim tomonidan kuzatiladi. Yangi boshqaruv modeli bizsiz ishlaguncha ketmaymiz.",
      ],
    },
    scheme: {
      centerLabel: "Biznes",
    },
    pillarsIntro: {
      title: "BBI tizimi",
      description:
        "BBI oltita sohani egasining manfaatlariga bo'ysunadigan yagona tizimga birlashtiradi. Bu alohida sotib olinadigan \"xizmatlar\" emas. Bular barqaror va himoyalangan biznes aktivi tayanadigan oltita ustundir. Chidamlilik barcha oltitaning natijasidir.",
      detailsLabel: "batafsil ma'lumot",
    },
    pillars: [
      {
        key: "operations",
        title: "Operatsion samaradorligi",
        group: "Leverage",
        groupLabel: "Tutqich",
        summary:
          "Egasining doimiy ishtirokisiz ishlaydigan biznes - bu baxtsiz hodisa emas, balki arxitektura. Biz boshqaruv ritmini yaratamiz, asosiy jarayonlarni tavsiflaymiz va har bir kishi o'z mas'uliyat sohasi va natija ko'rsatkichlarini biladigan boshqaruv tizimini yaratamiz.",
        details: [
          "Biz nima qilamiz:",
          "Boshqaruv ritmi (kadens): yig'ilishlar, ro'yxatdan o'tish va nazorat punktlari tizimi - \"yoqilganda\" emas, balki jadvalga muvofiq ishlaydi",
          "SOP va qoidalar: asosiy jarayonlar tasvirlangan, egasi tayinlangan, mantiq aniqlangan",
          "Tashkilot sxemasi va mas'uliyat matritsasi (RACI): kim nima uchun javobgar - kulrang joylar yo'q",
          "KPI panellari va asboblar paneli: biznes holati 5 daqiqada ma'lumotlarni qo'lda yig'masdan ko'rinadi",
          "Nazorat ro'yxati: yangi xodim standartlarga muvofiq natijalarga erishadi va \"o'z-o'zidan omon qolmaydi\"",
        ],
        result:
          "Biznes egasining mavjudligiga tayanishni to'xtatadi. Bugun ofisda kim bo'lishidan qat'i nazar, har bir jarayon qoidalarga muvofiq ishlaydi.",
        resultExpanded: {
          whatWeBuild:
            "Boshqaruv ritmi (kadans), SOP, tashkilot diagrammasi, javobgarlik matritsasi (RACI) va KPI panellari. Har bir egasi tayinlangan, har bir ko'rsatkich real vaqtda ko'rinadi.",
          partnerOutcomes: [
            "Egasi doimiy qo'lda boshqarish o'rniga operatsion tizimda haftasiga 10 soatgacha vaqt sarflaydi",
            "Asosiy odam ta'tilda bo'lganida yoki ketganida biznes to'xtamaydi.",
            "Qarorlar egasiga qo'ng'iroq qilish orqali emas, balki protokolga muvofiq qabul qilinadi",
            "O'sish tartibsizlikning yangi darajasini yaratishdan ko'ra, modelga mos keladi",
          ],
        },
        broken:
          "Egasi har bir jarayonda. Usiz hech narsa harakat qilmaydi va har qanday shoshilinch darhol uning telefoniga tushadi.",
        brokenExpanded: [
          "Har kuni \"yong'inlar\" tahlili bilan boshlanadi - strategiya yana qoldiriladi",
          "Qarorlar egasiga tegishli: jamoa uning roziligisiz harakat qilmaydi",
          "Aniq tashkiliy sxema yo‘q – kim nima uchun mas’ul ekanligi noma’lum, mas’uliyat esa loyqa",
          "Asosiy xodim ketdi - va u bilan faqat uning boshida bo'lgan jarayonlar ketdi",
          "Kompaniyaning o'sishi tizimni kengaytirmaydi, faqat tartibsizlikni qo'shadi",
          "Ko'rsatkichlar yo'q: egasi muammolarni asboblar panelidan emas, balki haqiqatdan keyin bilib oladi",
        ],
        actions:
          "Biz boshqaruv arxitekturasini quramiz: kim nima uchun javobgar, qarorlar qanday qabul qilinadi, ijro qanday nazorat qilinadi. Biznes kayfiyatga qarab emas, ritm va qoidalarga muvofiq ishlaydi.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "Mas'uliyat sohalari va qaror qabul qilish ierarxiyasi bilan tashkiliy sxema",
                "Asosiy jarayonlar uchun SOP (standart operatsion protseduralar).",
                "RACI mas'uliyat matritsasi: egasi, ijrochi, tasdiqlovchi - har bir jarayon uchun",
                "Boshqaruv yig'ilishlari tizimi (kadens): format, ishtirokchilar, chastota, protokol",
              ],
            },
            {
              title: "Ko'rsatkichlar va asboblar paneli",
              items: [
                "KPI asboblar paneli: biznes holati bitta ekranda - qo'lda ma'lumotlarni yig'masdan",
                "Amalga oshirishni nazorat qilish ko'rsatkichlari: asosiy ko'rsatkichlarga asoslangan reja-faktlar",
                "Eskalatsiya nuqtalari: qachon va kimga masala qo'yilgan - egasiga qo'ng'iroq qilmasdan",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Yangi xodimlar uchun ishga qabul qilish ro'yxati",
                "Jamoa mustaqil ravishda saqlaydigan boshqaruv ritmi qoidalari",
              ],
            },
          ],
        },
      },
      {
        key: "marketing",
        title: "Marketing",
        group: "Leverage",
        groupLabel: "Tutqich",
        summary:
          "Analitikasiz marketing - bu tumandagi byudjet. Biz har bir investitsiya qilingan rubl natijaga bog'langan tizimni qurmoqdamiz: mijoz qaerdan kelgani, qancha turadi va qaysi kanal haqiqatda ishlashi aniq.",
        details: [
          "Biz nima qilamiz:",
          "Yakuniy tahlil: birinchi tegishdan tortib to to‘lovgacha – har bir kanal ko‘rinadi, har bir yetakchi kuzatiladi",
          "Kanal auditi: haqiqiy mijozlarga nima olib keladi, nima byudjetni isrof qiladi - his-tuyg'ular bilan emas, balki raqamlar bilan",
          "Hisoblar va ma'lumotlar bazalariga egalik qilish: reklama hisoblari, CRM, ma'lumotlar bazalari - agentlikka emas, balki kompaniyaga tegishli",
          "Kanal iqtisodiyoti: sotib olish qiymati, LTV, har bir yo'nalish uchun zararni yo'qotish nuqtasi",
          "Prognoz qilinadigan qo'rg'oshin oqimi: tizim modelga muvofiq ishlaydi va bitta pudratchiga bog'liq emas",
        ],
        result:
          "Etakchi va mijoz qancha turadi, qaysi kanal ishlayotgani va barcha ma'lumotlar va hisoblar kimga tegishli ekanligi aniq.",
        resultExpanded: {
          whatWeBuild:
            "Tegishdan tortib to to'lovgacha bo'lgan yakuniy tahlil, kanal auditi, jalb qilish iqtisodiyoti va barcha hisoblar va ma'lumotlar bazalariga egalik huquqini kompaniyaga o'tkazish.",
          partnerOutcomes: [
            "Barcha kirish va ma'lumotlar bazalari kompaniyaning qo'lida: agentlikni o'zgartirish tarix va ma'lumotlarni qayta tiklamaydi",
            "Aniq rasm: qaysi kanal pul ishlaydi, qaysi pul sarflaydi va nima uchun",
            "Marketing byudjeti sezgi emas, balki ma'lumotlar asosida taqsimlanadi",
            "Biz \"yulduzli\" pudratchiga bog'liq holda, etakchilar oqimini boshqaramiz va bashorat qilamiz",
          ],
        },
        broken:
          "Pul reklamaga ketadi, ammo mijozlar qayerdan kelgani noma'lum. Agentlik xabar beradi, lekin nazorat yo'q.",
        brokenExpanded: [
          "Byudjet \"hissiyotlarga ko'ra\" taqsimlanadi: aslida qaysi kanal ishlashi noma'lum",
          "Yakuniy tahlil yo'q: mijozni jalb qilishning haqiqiy narxini hisoblash mumkin emas",
          "Barcha ofislar, bazalar va kirish pudratchi bilan. O'zgartirish agentligi = tarix va ma'lumotlarning yo'qolishi",
          "Qo'rg'oshinlar oqimini oldindan aytib bo'lmaydi: bir oy qalin, keyingisi bo'sh",
          "Marketing bir shaxsga yoki bitta agentlikka tayanadi - usiz tizim buziladi",
          "Model yo'q: marketing qarorlari moliyaviy natijalar bilan bog'liq emas",
        ],
        actions:
          "Biz yakuniy tahlilni o'rnatamiz, barcha hisoblar va ma'lumotlar bazalariga egalik huquqini o'tkazamiz va har bir tiyin natijaga bog'langan modelni yaratamiz.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "Har birining iqtisodiga ega bo'lgan sotib olish kanallari xaritasi: har bir etakchining narxi, CPL, mijozning narxi",
                "Joriy kanallar auditi: nima ishlaydi, nima byudjetni isrof qiladi - raqamlar bilan",
                "Kanallar va maqsadlar bo'yicha marketing byudjetini taqsimlash modeli",
                "Kompaniya tomonida reklama hisoblarini boshqarish bo'yicha ko'rsatmalar",
              ],
            },
            {
              title: "Ko'rsatkichlar va asboblar paneli",
              items: [
                "End-to-end analitika asboblar paneli: birinchi teginishdan tortib to to'lovgacha",
                "Har bir kanal uchun huni ko'rsatkichlari: taassurotlar → etakchilar → malaka → savdo",
                "Mijoz segmentlari bo'yicha LTV va ROI",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Barcha hisoblar, ma'lumotlar bazalari va kirishlar kompaniyaga o'tkazildi - hujjatlar bilan",
                "Pudratchilar va agentliklar bilan ishlash qoidalari: kimga tegishli",
              ],
            },
          ],
        },
      },
      {
        key: "sales",
        title: "Sotish",
        group: "Leverage",
        groupLabel: "Tutqich",
        summary:
          "Savdo natijalari ikkita \"almashtirilmaydigan\" menejerga bog'liq bo'lsa, bu tizim emas, bu xavf. Biz standartga muvofiq ishlaydigan savdo bo'limini qurmoqdamiz: har qanday yangi xodim rejalashtirilgan ko'rsatkichlarga 2-4 hafta ichida erishadi.",
        details: [
          "Biz nima qilamiz:",
          "Skriptlar va aloqa standartlari: natija ma'lum bir shaxsning iste'dodiga bog'liq emas",
          "Qo'rg'oshin bilan ishlash qoidalari: birinchi tegishdan tortib bitimni yopishgacha - har bir qadam tasvirlangan",
          "CRM nazorati: bitta etakchi yo'qolmaydi, biron bir bitim statussiz \"yopishib qolmaydi\"",
          "Huni va malaka: tizimning o'zi maqsadsiz narsalarni yo'q qiladi va sa'y-harakatlarni sotib oladiganlarga qaratadi",
          "Yangi menejerni ishga qabul qilish: qoidalarga ko'ra, \"buni qanday qilishimni tomosha qilish\" emas.",
        ],
        result:
          "Savdolar ikkita \"yulduzli\" menejerga emas, balki tizimga bog'liq. Natija takrorlanadi va oldindan aytib bo'ladi.",
        resultExpanded: {
          whatWeBuild:
            "Skriptlar, yetakchilar bilan ishlash standartlari, CRM boshqaruvi, malaka hunisi va yangi menejerlar uchun ishga qabul qilish.",
          partnerOutcomes: [
            "Asosiy menejer ketganida savdo to'xtamaydi",
            "Yangi xodim rejalashtirilgan maqsadlarga 2-4 hafta ichida erishadi",
            "Egasi real vaqt rejimida hunini ko'radi - qo'lda hisobot talab qilmasdan",
            "Daromadni bashorat qilish mumkin: \"bu oy qanchalik omadli\" emas, balki reja va haqiqat birlashadi",
          ],
        },
        broken:
          "Savdoni \"ushlab turadigan\" ikkita menejer bor. Agar ular ketsa, daromad yo'qoladi.",
        brokenExpanded: [
          "Natija \"yulduzlarga\" bog'liq: standartlar yo'q, har kim qo'lidan kelganicha sotadi",
          "Yangi menejer bir necha oy davomida suzmoqda: na onboarding, na skriptlar, na tizim",
          "CRM qo'llab-quvvatlanmaydi yoki tartibsiz saqlanadi: etakchilar yo'qoladi, bitimlar statussiz \"yopishib\" qoladi",
          "Standartlar bilan huni yo'q: mijozlar qaysi bosqichda va nima uchun ketishlari noma'lum",
          "Egasi rasmni real vaqtda ko'rmaydi - faqat menejerlarning so'zlari bilan",
          "Daromad prognozi hisob emas, balki taxmindir",
        ],
        actions:
          "Biz natija \"yulduzlarga\" bog'liq bo'lmagan tizimni qurmoqdamiz. Har qanday yangi menejer rejalashtirilgan ko'rsatkichlarga \"ko'z bilan\" emas, balki qoidalarga muvofiq 2-4 hafta ichida erishadi.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "Huni va mijozning har bir bosqichi uchun savdo skriptlari",
                "Qo'rg'oshin bilan ishlash qoidalari: birinchi teginishdan boshlab bitimni yopishgacha",
                "CRM arxitekturasi: huni tuzilishi, holatlar, maydonlar, avtomatlashtirish",
                "Yangi menejer uchun ishga qabul qilish dasturi: 2-4 hafta ichida natijalarga erishish",
              ],
            },
            {
              title: "Ko'rsatkichlar va asboblar paneli",
              items: [
                "Haqiqiy vaqtda savdo huni: har bir bosqichda konversiyalar",
                "Menejerlarning KPIlari: daromadlar bo'yicha reja-faktlar, tranzaktsiyalar soni, konversiya",
                "\"Yo'qotilgan etakchilar\" ko'rsatkichi: mijozlar qaerda va nima uchun ketishadi",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Menejerni tayyorlash va sertifikatlash tizimi",
                "Qo'ng'iroqlar va yozishmalar sifatini nazorat qilish qoidalari",
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
          "\"Oborot bor, lekin qayerdan foyda aniq emas\" - bu odamlar bizga murojaat qiladigan eng keng tarqalgan iboralardan biridir. Biz boshqaruv hisobini qurmoqdamiz, unda egasi moliyaning haqiqiy rasmini ko'radi: talqinsiz, turli odamlardan \"raqamlarning turli xil versiyalari\"siz.",
        details: [
          "Biz nima qilamiz:",
          "Boshqaruv hisobi: hududlar bo'yicha real foyda - buxgalteriya ko'rsatkichlari emas, balki biznes iqtisodiyoti",
          "Reja-fakt va to'lov taqvimi: naqd bo'shliqlar faktdan keyin emas, balki oldindan ko'rinadi",
          "Moliyaviy teshiklarni aniqlash: yashirin qochqinlar, samarasiz xarajatlar, kulrang sxemalar - qattiq va yopiq",
          "Hududlar bo'yicha buxgalteriya hisobi: qaysi biri pul topadi, qaysi biri pastga tortadi",
          "Yagona moliyaviy haqiqat: raqamlarning bitta versiyasi - egasi uchun, jamoa uchun, investor uchun",
        ],
        result:
          "Egasi \"taxminiy raqamlarni\" emas, balki haqiqiy foydani ko'radi. Qarorlar his-tuyg'ularga emas, balki ma'lumotlarga asoslangan holda qabul qilinadi.",
        resultExpanded: {
          whatWeBuild:
            "Boshqaruv hisobi, reja-fakt, to'lov taqvimi, yo'nalish bo'yicha buxgalteriya hisobi va yashirin moliyaviy qochqinlarni aniqlash.",
          partnerOutcomes: [
            "\"Mening pulim qayerda?\" Degan savolga javob. - 5 kun ichida emas, 5 daqiqada",
            "Qarorlar sezgi emas, ma'lumotlar asosida qabul qilinadi.",
            "Moliyaviy teshiklar va yashirin qochqinlar - aniqlangan va yopilgan",
            "Biznes investor yoki bank bilan gaplashishga tayyor: raqamlar aniq va asosli",
          ],
        },
        broken:
          "Aylanma bor, lekin foyda yo'q - yoki qayerga ketgani noma'lum. Moliyaviy ko'rinish xiralashgan.",
        brokenExpanded: [
          "Bir nechta \"raqamlarning versiyalari\": buxgalter bir narsani aytadi, operatsion direktor boshqasini aytadi",
          "Naqd pul bo'shlig'i birdan paydo bo'ladi: hech kim oldindan ogohlantirmagan",
          "Qaysi yo'nalishda pul ishlab, qaysi biri foyda yeyayotgani noma'lum",
          "Yashirin qochqinlar: pul ortiqcha to'langan pudratchilar, samarasiz maqolalar va kulrang sxemalar orqali o'tadi",
          "Qarorlar boshqaruv ma'lumotlariga emas, balki his-tuyg'ularga asoslangan holda qabul qilinadi",
          "Biznes investor yoki bank bilan gaplashishga tayyor emas: raqamlar qo'shilmaydi",
        ],
        actions:
          "Biz boshqaruv hisobi va moliyaviy modelni o'rnatdik. Egasi haqiqiy foyda, pul oqimi va pul bo'shliqlarini oldindan ko'radi, lekin keyin emas.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "Biznes sohasi bo'yicha P&L boshqaruvi (foyda va zarar hisoboti).",
                "Pul oqimi to'g'risidagi hisobot (CF): davrlar bo'yicha haqiqiy rasm",
                "To'lov taqvimi: naqd puldagi bo'shliqlar faktdan 2-4 hafta oldin ko'rinadi",
                "Moliyaviy biznes modeli: zararsizlik nuqtasi, marjinallik, birlik iqtisodiyoti",
              ],
            },
            {
              title: "Ko'rsatkichlar va asboblar paneli",
              items: [
                "Moliyaviy boshqaruv paneli: daromad, foyda, marja, xarajatlar - bitta ekranda",
                "Hududlar bo'yicha buxgalteriya hisobi: qaysi topadi, qaysi pastga tortadi",
                "Barcha asosiy moliyaviy ko'rsatkichlar uchun reja-fakt",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Aniqlangan moliyaviy qochqinlar to'g'risida hisobot va ularni yopish bo'yicha tavsiyalar",
                "Moliyaviy qoidalar: kim, nima va qachon xarajatlarni kelishib oladi",
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
          "Agar asosiy shaxs ketsa va u bilan bir funksiya ketsa, bu HR muammosi emas. Bu arxitektura muammosi. Biz tajriba odamlarga emas, kompaniyaga tegishli bo'lgan tizimni qurmoqdamiz: ishga qabul qilish, moslashtirish va ishlab chiqish standartga muvofiq.",
        details: [
          "Biz nima qilamiz:",
          "Ish profillari: kimni yollash va qanday parametrlar bo'yicha baholash uchun aniq mezonlar",
          "Tizimli ishga qabul qilish: nomzod hunisi, malakasini baholash, protokol qarorlarini qabul qilish",
          "Bortga qabul qilish dasturi: yangi xodim \"tomosha qilish va o'rganish\" emas, balki standartlarga muvofiq natijalarga erishadi.",
          "Baholash tizimi va HR tahlili: kim tortayotgani, kim ushlab turgani, kim o'sishni sekinlashtirayotgani aniq.",
          "Iste'dodlar zaxirasi va voris rejasi: muhim funktsiyalar doimo yopiq",
          "Hamkor uchun nima qoladi:",
          "Har qanday xodimning ketishi - bu funktsiyaning qulashi emas, balki vakolatlarning rejalashtirilgan o'tkazilishi",
          "Ishga qabul qilish standartga muvofiq amalga oshiriladi: biz \"kim kelgan\" emas, to'g'ri odamlarni ishga olamiz.",
          "Yangi odam tizimni buzmaydi - u unga qo'shiladi",
          "Ekspertiza ikki kishining boshida emas, balki kompaniyaning jarayonlari va qoidalarida saqlanadi",
        ],
        result:
          "Jamoa barqaror: rollar belgilangan, tajriba odamlarda emas, tizimda. Xodimning ketishi falokat emas.",
        resultExpanded: {
          whatWeBuild:
            "Ish profillari, ishga qabul qilish tizimi, ishga qabul qilish dasturi, baholash tizimi va muhim vazifalar uchun iqtidorlar fondi.",
          partnerOutcomes: [
            "Har qanday xodimning ketishi - bu funktsiyaning qulashi emas, balki vakolatlarning rejalashtirilgan o'tkazilishi",
            "Ishga qabul qilish standartga muvofiq amalga oshiriladi: biz \"kim kelgan\" emas, to'g'ri odamlarni ishga olamiz.",
            "Yangi odam tizimni buzmaydi - u unga qo'shiladi",
            "Ekspertiza ikki kishining boshida emas, balki kompaniyaning jarayonlari va qoidalarida saqlanadi",
          ],
        },
        broken:
          "Kadrlar almashinuvi to'xtamaydi, ishga yollash - bu lotereya va \"almashib bo'lmaydiganlar\" bu haqda bilishadi va undan foydalanadilar.",
        brokenExpanded: [
          "Ish profillari yo'q: ular \"sezish orqali\" yollashadi - ular noto'g'ri odamlarni yollashadi, vaqt va pulni behuda sarflashadi.",
          "Bortga kirish yo'q: yangi xodim \"o'z-o'zidan omon qoladi\" va natijalarga 2-4 hafta o'rniga 3-4 oy ichida erishadi.",
          "Mutaxassislik tizimda emas, odamlarda saqlanadi: agar odam ketsa, bilim yo'qoladi",
          "\"Kuchli\" xodimlarni shantaj qilib ketishadi, chunki ularsiz funktsiya barbod bo'ladi",
          "Baholash tizimi yo'q: kompaniyani kim tortib olishi va o'rinni kim egallashi noma'lum",
          "Kadrlar zaxirasi yo'q: har qanday ishdan bo'shatish almashtirishni favqulodda qidirishni anglatadi",
        ],
        actions:
          "Biz ishga qabul qilishdan tortib baholashgacha HR jarayonlarini quramiz. Tajriba odamlarda emas, tizimda saqlanadi. Ishni tark etgan xodim endi funktsiyani buzmaydi.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "Barcha asosiy rollar uchun ish profillari: vakolatlar, KPI, mas'uliyat sohalari",
                "Baholash mezonlari va tanlov metodologiyasi bilan yollash hunisi",
                "Bortga qabul qilish dasturi: dastlabki 30-90 kunni nazorat ro'yxatlari va nazorat nuqtalari bilan rejalashtirish",
                "Xodimlarni baholash tizimi: samaradorlik ko'rsatkichlari va muntazam tekshiruv",
              ],
            },
            {
              title: "Ko'rsatkichlar va asboblar paneli",
              items: [
                "HR asboblar paneli: aylanma, natijalarga erishish vaqti, NPS guruhlari",
                "Kadrlar zaxirasi xaritasi: kim o'sishga tayyor va qaysi lavozimlarda",
                "Kritik funksiyalar uchun ketma-ketlik matritsasi",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Xodimlarning chiqish qoidalari: protokol bo'yicha ishlarni, kirishlarni va bilimlarni uzatish",
                "Kompaniya bilimlari bazasi: ekspertiza tizimda qayd qilinadi va saqlanadi",
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
          "Aksariyat egalar qonuniy teshiklar haqida juda kech bo'lganda bilib olishadi: ma'lumotlar bazasi sizib ketgan, pudratchi kirish bilan shantaj qilmoqda, sobiq xodim mijozlarni o'g'irlagan. Huquqiy sxema rasmiyatchilik emas, balki biznesni ushbu stsenariylardan oldindan himoya qiladigan haqiqiy qalqondir.",
        details: [
          "Biz nima qilamiz:",
          "Oshkor qilmaslik to'g'risidagi shartnomalar: ma'lumotlar, mijozlar bazalari va tijorat sirlari kirish joyida himoyalangan.",
          "Mehnat shartnomalari va lavozim tavsiflari: huquq va majburiyatlar qat'iy belgilangan - shantaj uchun asos yo'q",
          "Pudratchilar bilan tuzilgan shartnomalar: ish natijalari, kirishlar va ma'lumotlar bazalariga bo'lgan huquqlar pudratchiga emas, kompaniyaga tegishli",
          "Intellektual mulkni himoya qilish: brend, ishlanmalar, kontent - kompaniya aktivlari sifatida ro'yxatga olingan",
          "Huquqiy audit: mavjud zaifliklar aniqlangan, ustuvor va yopilgan",
        ],
        result:
          "Aktivlar, ma'lumotlar va huquqlar yuridik va texnik jihatdan kompaniyaga tegishli. Odamlar emas, pudratchilar emas.",
        resultExpanded: {
          whatWeBuild:
            "NDAlar, mehnat shartnomalari, pudratchilar bilan shartnomalar, IPni himoya qilish va mavjud zaifliklarning huquqiy auditi.",
          partnerOutcomes: [
            "Barcha asosiy aktivlar - ma'lumotlar bazalari, kirish huquqi, IP (intellektual mulk), brend - qonuniy ravishda kompaniyaga tegishli",
            "Xodim yoki pudratchining ketishi biznes uchun xavf tug'dirmaydi",
            "Biznes ma'lumotlarni o'g'irlashdan, \"almashtirilmaydigan\" shantajlardan va mijozlar bazasini yo'qotishdan himoyalangan",
            "Huquqiy sxema investor, bank yoki sherik tomonidan tekshirishga tayyor",
          ],
        },
        broken:
          "Shartnomalar eskirgan, ma'lumotlar kompaniya tomonidan emas, balki odamlar tomonidan saqlanadi. Bitta oqish va bu allaqachon inqiroz.",
        brokenExpanded: [
          "Mijoz bazalari va kirish - menejerlar yoki pudratchilar tomonidan: ularni istalgan vaqtda \"olib qo'yish\" mumkin",
          "NDAlar ko'rsatish uchun imzolanmaydi yoki imzolanmaydi - haqiqiy yuridik kuchga ega bo'lmagan",
          "Mehnat shartnomalari mehnat natijalari va tijorat sirlariga bo'lgan huquqlarni qamrab olmaydi",
          "Kompaniyaning IP - brendi, ishlanmalari, tarkibi - qonuniy ravishda aktivlar sifatida ro'yxatdan o'tkazilmagan",
          "Pudratchilar shartnomalarsiz yoki barcha huquqlar ular tomonida bo'lgan shartnomalar bilan ishlaydi",
          "Xodim yoki sherik bilan har qanday nizo zaiflikka aylanadi: sudda himoyalanadigan hech narsa yo'q",
        ],
        actions:
          "Biz huquqiy zaifliklarni yopamiz va himoya sxemasini yaratamiz: aktivlar, ma'lumotlar va intellektual mulkka bo'lgan huquqlar odamlar va pudratchilarga emas, balki kompaniyaga tegishli.",
        actionsExpanded: {
          partnerHeading: "Hamkor nimani oladi:",
          sections: [
            {
              title: "Hujjatlar va asboblar",
              items: [
                "NDA va oshkor qilmaslik kelishuvlari: Xodimlar, hamkorlar va pudratchilar uchun shablonlar",
                "Tijorat sirlarini va mehnat natijalariga bo'lgan huquqlarni himoya qiluvchi mehnat shartnomalari",
                "Pudratchilar bilan shartnomalar: ishlanmalar, kontent va ma'lumotlarga bo'lgan huquqlar kompaniya tomonida",
                "Ma'lumotlarni saqlash va ulardan foydalanish qoidalari: kim, nima uchun, qanday sharoitlarda",
              ],
            },
            {
              title: "Audit va xavf xaritalari",
              items: [
                "Huquqiy audit: yopish ustuvorliklari bilan zaifliklar xaritasi",
                "Kompaniya aktivlari reyestri: nima ro'yxatga olingan, nima ro'yxatdan o'tmagan, nima yopilishi kerak",
                "IP himoyasi nazorat ro'yxati: brend, ishlanmalar, kontent - aktivlar sifatida ro'yxatga olingan",
              ],
            },
            {
              title: "Qo'shimcha",
              items: [
                "Pudratchini o'zgartirish yoki xodimni ishdan bo'shatishda kirish huquqini o'tkazish qoidalari",
                "Investor, bank yoki sherik tomonidan tekshirish uchun tayyor hujjatlar to'plami",
              ],
            },
          ],
        },
      },
    ],
    results: {
      title: "Qiymatli yakuniy natija (VAR)",
      description: "Har bir ustun natijasida egasi nima oladi?",
      badge: "",
      resultModalWhatWeBuild: "Biz nima qurmoqdamiz?",
      resultModalPartnerLabel: "Hamkorda nima qoladi?",
      resultModalCloseLabel: "Yopish",
    },
    problems: {
      title: "Ustun \"singan\" bo'lsa nima bo'ladi",
      description:
        "Biznesning oltita ustunining har biri yo'qotish nuqtasi bo'lishi mumkin. Bu inqirozga aylanishidan oldin, ichkaridan shunday ko'rinadi.",
      badge: "Xatarlar",
      detailsExpandedListHeading: "Amaliyotda bu qanday ko'rinadi",
    },
    actions: {
      title: "BBI sizning biznesingizda aynan nima qiladi?",
      description:
        "Biz tavsiyalar bermaymiz va tashxisdan keyin ketmaymiz. Oltita yo'nalishning har biri uchun biz aniq vositalarni quramiz, amalga oshiramiz va topshiramiz - loyihadan keyin hamma narsa sherikda qoladi.",
      badge: "BBI",
    },
    format: {
      title: "Ish formati",
      description:
        "BBI biznesga boshqaruv tizimi arxitektori sifatida kiradi: 90+ ish kuni davomida, toʻliq identifikatsiya va aniq natija uchun javobgarlik. Soatlar va vazifalar emas, balki shartnomada belgilangan biznesning maqsadli holati.",
      zones: [
        {
          label: "Yashil zona - BBI",
          description:
            "Biz bitta formatda ishlaymiz: diagnostika → audit → dizayn → amalga oshirish → himoyalangan va boshqariladigan biznes aktivini uzatish. Har bir bosqich qat'iy ketma-ketlikda. Biz biznesning haqiqiy manzarasini tushunmagunimizcha, “amalga oshirish”ga shoshilmaymiz.",
          tone: "green",
        },
        {
          label: "Sariq zona - loyihaning bir qismi sifatida qabul qilinadi",
          description:
            "Ba'zi vositalar - CRM, veb-sayt, SMM - BBI loyihasining bir qismi bo'lishi mumkin, ammo ular kelishilgan maqsadli natijaga erishish uchun kerak bo'lganda. Mustaqil xizmat sifatida emas. Asbob uchun emas. Muhim qoida: BBI boshqaruv tizimining me'mori bo'lib qoladi. Pudratchilar vosita sifatida ishtirok etadilar - ular funktsiyaning egalari emas, balki ijrochilardir. Loyihadan so'ng barcha kirishlar, ofislar va ma'lumotlar bazalari kompaniyaga tegishli.",
          tone: "yellow",
        },
        {
          label: "Qizil zona - biz buni qilmaymiz",
          description:
            "Biz ba'zi so'rovlarni printsipial jihatdan qabul qilmaymiz - \"qanday qilishni bilmasligimiz\" uchun emas, balki ular bizning modelimizga zid bo'lgani uchun. Agent formati tizimli natijalarni keltirib chiqarmaydi. Bir martalik xizmatlar ildiz muammolarini hal qilmaydi. Biz hech qachon nima qilmaymiz: doimiy funktsiya sifatida SMM va muntazam kontent ishlab chiqarishni saqlab qolish; \"kalit taslim\" reklama / maqsadli; tizimni yaratmasdan, tashqi manbalardan foydalanish; brend kitobi, qadoqlash, veb-sayt loyihadan tashqari alohida xizmat sifatida; tizimni joriy qilmasdan va birlashtirmasdan bir martalik maslahatlar.",
          tone: "red",
        },
      ],
    },
    stages: {
      title: "Biz qanday ishlaymiz: birinchi qo'ng'iroqdan boshlab ishlaydigan tizimgacha",
      description:
        "Har bir bosqich muayyan natijadir, jarayon uchun jarayon emas. Biz ketma-ket harakat qilamiz: avval biz haqiqiy rasmni tushunamiz, keyin loyihalashtiramiz, keyin quramiz. Hech qanday sakrash va \"boshlaymiz va buni aniqlaymiz\".",
      readMoreLabel: "Batafsil",
      whatWeDoHeading: "Biz nima qilamiz",
      detailsListMarker: "Biz nima qilamiz:",
      steps: [
        {
          title: "Diagnostika",
          description:
            "Bir-birimizga to'g'ri ekanligimizni halol tushunish uchun birinchi suhbat. Sotish va va'dalar yo'q. Skrining natijalariga ko'ra aniq qaror bor: \"bizning mijozimiz\", \"bizniki emas\" yoki \"faqat diagnostika\". Noaniq holda \"bu haqda o'ylaymiz\".",
        },
        {
          title: "Audit",
          description:
            "Dalillar bazasi bilan biznesning to'liq tasviri. Sensatsiyalar emas - ma'lumotlar. Jamoa fikri emas - faktlar. Biz nima qilamiz: ma'lumotlarni yig'ish (CRM, moliya, savdo hisobotlari, shartnomalar, reklama hisoblari); jamoa bilan suhbatlar (barcha oltita sohada 5-10 ta asosiy xodim); 6 ta ustun bo'yicha audit (operatsiyalar, moliya, savdo, marketing, HR, aktivlarni himoya qilish); topilmalarni dalillar bazasi bilan yagona hisobotda birlashtirish.",
        },
        {
          title: "Tizim dizayni",
          description:
            "Biz audit natijalarini aniq chizmaga aylantiramiz: biznes qanday bo'lishi kerak, kim nima uchun javobgar va u qanday ko'rsatkichlar bo'yicha boshqariladi. Tavsiyalar emas - ishchi hujjat. Biz nima qilamiz: audit ma'lumotlarini tahlil qilish va egasi bilan dizayn tamoyillarini kelishish; maqsadli tashkiliy sxemani ishlab chiqish (rollar, mas'uliyat sohalari, qarorlar ierarxiyasi); Biz KPI daraxti va asboblar paneli arxitekturasini quramiz; Biz asosiy jarayonlar uchun RACI matritsasini yaratamiz; Biz 90-180 kunlik o'zgarishlarning yo'l xaritasini tuzamiz; Biz SOP va qoidalar shablonlarini tayyorlaymiz.",
        },
        {
          title: "Amalga oshirish va nazorat qilish",
          description:
            "Jamoa biznes ichida ishlaydi va aslida ishlaydigan tizimlarni quradi - ular javondagi papkada o'tirmaydi. Biz nima qilamiz: 1-bosqich - ishga tushirish va ishga tushirish (ustuvorlarni tekshirish, muhim xavflarni yopish, boshqaruv ritmini ishga tushirish); 2-bosqich - qurilish tizimlari (SOP va ustuvor ustunlar bo'yicha qoidalar, CRM mantiqiy va huni, KPI asboblar paneli, HR hujjatlari, moliyaviy vositalar); 3-bosqich - sinov va topshirish (jangovar testlar, jamoaviy tayyorgarlik, o'yin kitobini yakunlash, yakuniy topshirish sessiyasi).",
        },
        {
          title: "Himoyalangan va boshqariladigan biznes aktivini o'tkazish",
          description:
            "BBI bilan sayohatning yakuniy nuqtasi o'tkazish, sotish, kengaytirish yoki investorni jalb qilish mumkin bo'lgan biznesdir. So'z bilan emas, balki hujjatlar, ko'rsatkichlar va ishlaydigan boshqaruv tizimi bilan. Biz biznes mustaqil aktiv sifatida mavjud bo'lgandagina ketamiz - hujjatlar, tizim va tashqi yordamsiz standartga muvofiq ishlaydigan jamoa.",
        },
      ],
    },
    responsibility: {
      title: "Mas'uliyat",
      description:
        "Natijaga har bir tomon o'z zonasini aniq tushungandagina erishiladi. BBI mijozning ishini bajarmaydi - biz sheriklar jamoasi amalga oshiradigan va qo'llab-quvvatlaydigan arxitekturani quramiz.",
      bbiTitle: "BBI uchun javobgardir",
      clientTitle: "Mijoz javobgardir",
      bbi: [
        "Arxitektura va boshqaruv tizimi",
        "Mulk va mulkni himoya qilish",
        "Standartlar va takrorlanuvchanlik (SOP, playbook, RACI)",
        "Moliyaning shaffofligi va qarorlarning mantiqiyligi",
        "O'zgarishlarni boshqarish",
      ],
      client: [
        "Ishtirok etish (haftasiga 10 soatgacha) va tezkor echimlar",
        "Shaffoflik va ma'lumotlarga kirish",
        "6 ta ustun uchun mas'ul shaxslarning mavjudligi",
        "O'zingizning jamoangiz tomonidan biznes doirasida amalga oshirish",
        "Boshqaruv ritmi va intizomini saqlash",
      ],
      bbiDetailed: [
        {
          title: "Arxitektura va boshqaruv tizimi",
          description:
            "Biz operatsion modelni ishlab chiqamiz: kim nima uchun javobgar, qarorlar qanday qabul qilinadi, ijro nazorati qanday tuzilgan. Biz buni tavsiya qilmaymiz - biz ma'lum bir biznes uchun ish sxemasini qurmoqdamiz.",
        },
        {
          title: "Mulk va mulkni himoya qilish",
          description:
            "Barcha aktivlar - hisoblar, ma'lumotlar bazalari, domenlar, IP, shartnomalar - kompaniya mulkiga aylanadi. Biz huquqiy va operatsion himoya tizimini yaratamiz.",
        },
        {
          title: "Standartlar va takrorlanuvchanlik",
          description:
            "Biz SOP, Playbook va RACI ni yaratamiz - hujjatlarga ko'ra, jamoa egasi ishtirokisiz va aniq odamlarga bog'liqsiz ishlaydi.",
        },
        {
          title: "Moliyaning shaffofligi va qarorlarning mantiqiyligi",
          description:
            "Biz boshqaruv hisobini qurmoqdamiz: hamma uchun raqamlarning bitta versiyasi. Qarorlar turli odamlarning his-tuyg'ulari va fikrlariga emas, balki ma'lumotlarga asoslangan holda qabul qilinadi.",
        },
        {
          title: "O'zgarishlarni boshqarish",
          description:
            "Biz jamoani o'zgartirish orqali yo'naltiramiz: o'qitish, kundalik amaliyotda yangi standartlarni birlashtirish, topshirilgunga qadar sinov tizimlari.",
        },
        {
          title: "Kelishilgan CCR ga erishish",
          description:
            "Shartnomada belgilangan asosiy natijaga erishilganda loyiha tugallangan hisoblanadi. Oldin emas.",
        },
      ],
      clientDetailed: [
        {
          title: "Egasining ishtiroki - haftasiga 5-8 soat",
          description:
            "Qaror qabul qiluvchining ishtirokisiz o'zgartirish mumkin emas. Egasi (yoki to'liq delegatsiyaga ega bo'lgan bosh direktor) ish formatlarida mavjud va raqamlar va ritm orqali nazorat qiladi. Har qanday narsa kamroq va amalga oshirish tezligi eksponent ravishda pasayadi.",
        },
        {
          title: "Tez echimlar - 72 soatdan ortiq emas",
          description:
            "Xodimlar uchun vilkalar, kirish huquqini o'tkazish, egalarni tayinlash, byudjet ustuvorliklari - bu qarorlar bir necha hafta kuta olmaydi. Kechiktirish butun tizimni bloklaydi.",
        },
        {
          title: "Shaffoflik va ma'lumotlarga kirish",
          description:
            "CRM, moliyaviy hisobotlar, shartnomalar, reklama hisoblari, tahlillar - BBI tomonidan filtrlashsiz ochiladi. Ma'lumotlarsiz aniq tashxis qo'yish mumkin emas va siz natija uchun javobgar bo'lolmaysiz.",
        },
        {
          title: "6 ta ustun uchun mas'ul odamlarga ega bo'lish",
          description:
            "Har bir soha - operatsiyalar, marketing, savdo, moliya, kadrlar, huquqiy himoya - menejer yoki mas'ul shaxsga ega bo'lishi kerak. Agar u mavjud bo'lmasa, diagnostika bosqichida kritik xavf sifatida qayd etiladi.",
        },
        {
          title: "Jamoa tomonidan biznes doirasida bajarilishi",
          description:
            "Operatsion faoliyat sherikning jamoasi tomonidan amalga oshiriladi. BBI tizimni quradi - u menejerlar o'rnida ishlamaydi va mijozning xodimlarini boshqarmaydi.",
        },
        {
          title: "Boshqaruv ritmi va intizomini saqlash",
          description:
            "Yangi formatlar ishga tushirilgandan so'ng - rejalashtirilgan uchrashuvlar, ko'rsatkichlar bo'yicha monitoring, orqaga qaytish yoki sabotajsiz kelishuvlarni bajarish. Tizim faqat hujjatlarga emas, balki intizomga asoslanadi.",
        },
      ],
      readMoreLabel: "Batafsil",
      readLessLabel: "Yopish",
    },
    pillarCardUi: {
      whatWeBuild: "Nima quramiz",
      partnerWithClient: "Hamkor bilan nima qoladi",
      brokenPracticeHeading: "Amaliyotda qanday ko‘rinadi",
    },
    promises: {
      title: "BBI nimani va'da qilmaydi",
      subtitle: "Noto‘g‘ri kutishlardan qochish uchun — halol:",
      paragraphs: [
        "Biz darhol daromad o‘sishini kafolatlamaymiz. BBI natijasi — boshqariladigan biznes-aktivi. O‘sish tasodifiy emas, balki nazorat qilinadigan va takrorlanadigan bo‘ladi.",
        "Egasisiz «avtopilot» yaratmaymiz. Egasi operatsion kundan chiqadi, lekin raqamlar va ritm orqali boshqaruvda qoladi — bu bir xil emas.",
        "«Bizga shuni qiling» rejimida ishlamaymiz. Faqat kelishilgan qimmatli yakuniy natija mantiqida — tizimdan uzilgan cheksiz vazifalar oqimisiz.",
        "Hammasini bir vaqtning o‘zida o‘zgartirmaymiz. Harakat bosqichma-bosqich: avval tanqidiy tavakkalchiliklar va shaffoflik, keyin standartlar va kengaytirilishi mumkin bo‘lish.",
      ],
    },
    targetState: {
      title: "Istalgan natija (maqsadli davlat)",
      minimumTitle: "Minimal maqsadli (45–90 ish kuni)",
      minimumDescription:
        "Tahdidlarni nazorat qilish, raqamlarda \"bitta haqiqat\", tizim egasisiz buzilmaydi.",
      idealTitle: "Maqsadli ideal (standart)",
      idealDescription:
        "Biznes barqaror, himoyalangan va ko'payib borayotgan, investitsiya qilishga tayyor.",
    },
    cta: {
      title: "Tashxisdan boshlang",
      description: "Bu bepul va sizni hech narsaga majburlamaydi.",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Murojaat haqida qisqacha",
        submit: "Yuborish",
      },
    },
  },
  pillarsPage: {
    title: "BBIning 6 ta ustuni",
    description:
      "Barqaror va himoyalangan biznes aktivini yaratadigan oltita yordam nuqtasi.",
    ctaLabel: "Diagnostika bilan boshlang",
    ctaButtonLabel: "Shaklni to'ldiring",
    ctaDescription: "Keling, 30 daqiqada o'lchov va o'sish nuqtalarini muhokama qilaylik.",
  },
  home: {
    hero: {
      eyebrow: "Brand Promise",
      title:
        "Biz tartibsiz ishlamaydigan,\nbalki boshqariladigan va kengaytiriladigan\ntizim sifatida\nbiznes qurmoqdamiz",
      titleLineBreakMatch: "tartibsiz",
      subtitle:
        "Markaziy Osiyodagi egalar va bosh direktorlar uchun operatsion hamkor: biz muvaffaqiyatsizlik nuqtalarini diagnostika qilamiz, biznes arxitekturasini loyihalashtiramiz va uni jamoangiz bilan birgalikda amalga oshiramiz.",
      cta: "Diagnostika bilan boshlang",
      secondaryCta: "Ishlarni ko'rish",
      secondaryCtaHref: "#cases",
    },
    icpIntro: {
      eyebrow: "Maqsadli auditoriya",
      title: "Biz kim uchunmiz?",
      segments: [
        {
          title: "Sizning biznesingiz rivojlanmoqda, lekin siz kompaniyadagi eng band odamsiz. Va eng qimmat ijrochi.",
          description: "Tizim tuzilmagan - biznes sizning mavjudligingizga tayanadi.",
          details:
            "Siz yomon boshqarayotganingiz uchun emas. Ammo tizim qurilmaganligi sababli: qarorlar sizning ustingizda qabul qilinadi, jamoa ko'rsatmalarni kutadi va protokolga muvofiq harakat qilmaydi. Dam olish kunlari yo'q. Dam olish telefoningizdan boshqa vaqt zonasida ishlashni anglatadi. Strategiya \"yong'inlardan keyin\" ga qoldirildi - ammo yong'inlar kamaymayapti.\n\nHisobotlar bor. Ularning raqamlari bor. Haqiqat yo'q. Savdo bir narsani ko'rsatadi, boshqasini moliyalashtiradi, boshqasini marketing qiladi. Siz qanday ma'lumotlarga ishonishni bilmasdan qaror qabul qilasiz. Biznes rivojlanmoqda. Nazorat hissi yo'q.\n\nAgar siz uni o'zingizda saqlasangiz, biznes sizga tegishli emas. Bu sizning huzuringizga tegishli.",
          pain: "Siz biznes rahbari emassiz. Siz uning to'sig'isiz.",
        },
        {
          title: "Siz biznesingizni kengaytirdingiz. Daromad oshdi. Jamoa o'sdi. Muammolar ham.",
          description: "Operatsion modeli bo'lmasa, samaradorlik emas, chiqindi shkalasi.",
          details:
            "80 kishi o'zini 8 kabi tutadi: har bir bo'lim o'z haqiqatida, standartlar yo'q, menejerlar o'zlarining \"davlatlarini\" quradilar. Siz ikkinchi ofis ochdingiz va tartibsizlikning ikkinchi manbaiga ega bo'ldingiz: daromad o'sib bormoqda, ammo foyda \"bir joyda yo'qolib ketmoqda\". Marjlar pasayib bormoqda - nima uchun aniq emas. Chunki operatsion modelsiz miqyoslash o'sish emas. Bu yo'qotishlarning takrorlanishi.\n\nSOP yo'q - standart yo'q. RACI yo'q - mas'ul shaxs yo'q. Umumiy ko'rsatkichlar yo'q - boshqaruv yo'q. Faqat o'sish xayoloti va egasiga ko'p marta ortib borayotgan yuk bor.",
          pain: "Xaosni ko'paytirish mumkin emas. Aks holda, siz yo'qotishlaringizni oshirasiz.",
        },
        {
          title: "Siz biznesni besh barmoq kabi bilasiz. Investor - yo'q. Va bu muammo.",
          description: "Bitim \"sizning boshingizdagi potentsial\" emas, balki qog'ozda boshqarishni talab qiladi.",
          details:
            "Siz o'z biznesingizni besh barmoqdek bilasiz. Investor - yo'q. Va bu muammo. Xaridor yoki investor kelganda, ular sizning sezgi va tajribangizga qaramaydi. U hujjatlarga qaraydi. Va buxgalteriya hisobidagi teshiklar, ro'yxatga olingan huquqlarga ega bo'lmagan aktivlar, faqat egasining boshida yashaydigan jarayonlar mavjud. \"Boshdagi biznes\" aktiv emas. Bu bahoni pastga tushiradigan yoki muzokaralar oldidan xaridorni qo'rqitadigan qizil bayroqdir.\n\nMoliyaviy \"bitta haqiqat\" yo'q - narxni oqlash yo'q.\nMijozlarning ma'lumotlar bazalari, reklama hisoblari, domenlar menejer yoki pudratchi tomonidan saqlanadi - bu ular kompaniyaga tegishli emasligini anglatadi.\nIP, ishlanmalar va kontent hech qanday joyda qonuniy himoyalanmagan - xaridor ularni biznes bilan birga sotib olayotganiga ishonch hosil qila olmaydi.\nBoshqaruv tuzilmasi yo'q - biznes sizsiz omon qolishiga ishonch yo'q.\nInvestor sizning potentsialingizni sotib olmaydi. U nazorat qilish, shaffoflik va bashorat qilish imkoniyatini sotib oladi. Agar bu qog'ozda bo'lmasa, u ketadi yoki kamroq to'laydi.",
          pain: "Sizning biznesingiz ishlayapti. Ammo u aktiv sifatida ro'yxatga olinmaguncha, u kerak bo'lganidan kamroq turadi.",
        },
      ],
      exclude:
        "5 yilgacha biznes, PMF bo'yicha startaplar, bir martalik maslahatlar, kalit taslim agentlik xizmatlari. Va tizimni o'zgartirishga tayyor bo'lmasdan \"o'sishni kafolatlash\" so'rovi.",
      excludeLabel: "Biz mos emasmiz",
      readMoreLabel: "Batafsil",
    },
    icp: {
      eyebrow: "Savol",
      title: "O'zingizni taniysizmi?",
      subtitle: "Uchta odatiy stsenariy. Agar siz o'zingizni tanisangiz, quyida biz sizga qanday yordam berishimizni aniq aytib beramiz.",
      cards: [
        {
          title: "Siz biznes rahbari emassiz. Siz uning to'sig'isiz.",
          description:
            "Har kuni siz har qanday masala bo'yicha yakuniy vakolat sifatida harakat qilasiz: chegirmadan tortib mijozgacha bo'limdagi mojarogacha. Kompaniya sizsiz qanday qaror qabul qilishni bilmaydi - na raqamlar bo'yicha, na qoidalar bo'yicha. Rasmiy ravishda CRM va hisobotlar mavjud, ammo raqamlarda \"bitta haqiqat\" yo'q - savdo, marketing va moliya alohida yashaydi. Boshqaruv arxitekturasi o'rniga siz 24/7 bosh operatsion menejer sifatida ishlaysiz.",
          linkLabel: "Batafsil ma'lumot",
          href: "/icp/operations",
          modalLead:
            "Bu biznes egalarining 80% haqiqati. Siz operatsion masalalarni o'rganishingiz, tranzaktsiyalar va savdolarni o'zingiz kuzatib borishingiz va bo'limlar qurishingiz kerak. Sizga bog'liq bo'lgan biznes aktiv emas, bu qafas.",
          symptoms: [
            "Siz operatsion masalalarni o'rganishingiz, tranzaktsiyalar va savdolarni o'zingiz kuzatib borishingiz va bo'limlar qurishingiz kerak. Sizga bog'liq bo'lgan biznes aktiv emas, bu qafas.",
            "Sizning \"ha\"siz hech qanday qaror qabul qilinmaydi. Bu boshqaruv emas. Bu operatsion botqoq.",
            "Sizsiz biznes yonmoqda. Telefoningizni 3 soat davomida o'chirib qo'yganingizdan so'ng, muammolar boshlanadi: bitimlar amalga oshmaydi, xatolar ko'payadi.",
            "Ishda 24/7: moliyadagi yong'inni o'chirish, pudratchilar bilan ishlash ... Siz endi strategiyalarni qurmayapsiz, rivojlanmayapsiz va miqyosni oshirmaysiz.",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Kompaniyaning yoshi: 5+ yil",
            "O'lchov: oyiga 30-250 ming dollar",
            "Xodimlar: 15-80 kishi",
            "Bosqich: o'sish bor, lekin nazorat qilish mumkin emas",
            "Biznes turi: B2B, B2B/B2C - bu erda savdo bo'limi va operatsion qism mavjud",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Boshqarish qobiliyati",
            "Shaffoflik",
            "Aktivlarga egalik qilish",
            "Raqamlarning birlashtirilgan tasviri",
            "Kadens - boshqaruv ritmi",
            "Kamroq qo'lda boshqarish",
          ],
        },
        {
          title: "Xaosni ko'paytirish mumkin emas. Aks holda, siz yo'qotishlaringizni oshirasiz.",
          description:
            "Kompaniyaning o'sishi boshqaruv qobiliyatiga va marjaga aylanmaydi. Jamoa kengayib bormoqda, yangi funktsiyalar va darajalar paydo bo'lmoqda, ammo umumiy operatsion sxema yo'q. Xodimlar bir nechta alohida guruhlar kabi siloslarda ishlaydi, har bir bo'lim o'z ma'lumotlariga va maqsad haqidagi g'oyalariga tayanadi. Natijada siz samaradorlikni emas, balki tartibsizlikni, ortiqcha sarf-xarajatlarni va isrofgarchilikni o'lchaysiz.",
          linkLabel: "Batafsil ma'lumot",
          href: "/icp/scale",
          modalLead:
            "Standartlar va RACI bo'lmasa, masshtablash takrorlanuvchi tartibsizlikka aylanadi. Yagona boshqaruv konturi mavjud emas.\n\nBo'limlar turli voqeliklarda qarorlar qabul qiladi, hisobotlar bir-biriga zid keladi va foyda va sifatni bir nuqtadan boshqarish imkonsiz bo'lib qoladi.",
          symptoms: [
            "Operatsion model o'rniga mavjud tartibsizlik miqyosda ko'rsatilgan",
            "80 kishi turli sohalarda bir xil xatolarni takrorlaydi",
            "Rahbarlar adyolni tortib olishmoqda: hamma \"o'z imperiyasini\" qurmoqda",
            "Bo'limlar turli xil boshqaruv mantiqlarida qarorlar qabul qiladilar",
            "O'sishning paradoksi: aylanma yuqori, ammo nazorat hissi va haqiqiy foyda kichikroq miqyosga qaraganda past.",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Yoshi: 5+ yil",
            "O'lchov: oyiga 80-500 ming dollar",
            "Xodimlar: 40-200 kishi",
            "Bosqich: masshtablash (2-ofis/filial/yangi yo'nalishlar/jamoa o'sishi)",
            "Boshqaruv: egasi allaqachon \"delegat\" berishga harakat qilgan, ammo tizim o'z zimmasiga olmadi",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Masshtabli operatsion model",
            "Standartlar",
            "Ko'rsatkichlar bo'yicha yagona haqiqat",
            "SOP - muayyan vazifani bajarish uchun bosqichma-bosqich ko'rsatmalar",
            "RACI - mas'uliyatni taqsimlash matritsasi",
            "Birlashtirilgan KPI",
            "Boshqariladigan tuzilma",
            "Barqaror sifat",
          ],
        },
        {
          title: "Agar sizning biznesingiz aktiv sifatida ro'yxatdan o'tmagan bo'lsa, u kerak bo'lganidan kamroq qiymatga ega.",
          description:
            "Egasining sezgi va \"biz allaqachon hamma narsani bilamiz\" investor uchun argument emas. Uning uchun aniq iqtisod, aktivlarga aniq huquqlar va boshqarilishi mumkin bo'lgan xavflarni ko'rish muhimdir. Tashqi tomon raqamlar va hujjatlarni ko'rishni boshlashi bilanoq, tuzilmagan kelishuvlar, odamlarga qaramlik va buxgalteriya bo'shliqlari paydo bo'ladi. Tizimli moliyaviy rasm va tavsiflangan xavflarsiz sizning kompaniyangiz boshqariladigan aktivga o'xshamaydi, balki egasi atrofidagi amaliyotlar to'plamiga o'xshaydi.",
          linkLabel: "Batafsil ma'lumot",
          href: "/icp/investor",
          modalLead:
            "Bugungi kunda kompaniya, xavflar va mijozlar haqidagi bilimlarning aksariyati siz va asosiy odamlarda yashaydi. Investor uchun bu signal: aktiv ro'yxatdan o'tkazilmaydi, risklar boshqarilmaydi, tizim qog'ozga yozilmaydi.\n\nHech qanday investitsiya papkasi, risklar xaritasi, yagona moliyaviy haqiqat va aniq belgilangan egalik bo'lmasa-da, investitsiyalar bo'yicha har qanday muloqot zaif pozitsiyadan kelib chiqadi.",
          symptoms: [
            "Tranzaktsiyaga tayyorgarlik ko'rayotganda siz raqamlar, shartnomalar va aktivlarga bo'lgan huquqlar turli tizimlar va odamlar bo'ylab tarqalganligini bilib olasiz.",
            "Baholash shaffof iqtisodiyotga emas, balki egasining umidlariga asoslanadi: tuzilgan P&L va marjada yagona \"haqiqat\" mavjud emas.",
            "Boshqaruv modeli qog'ozda belgilanmagan: egasiga va \"qahramonlar jamoasiga\" qaramlik investor tomonidan qizil bayroq sifatida qabul qilinadi.",
          ],
          partnershipCriteriaLabel: "Hamkorlik mezonlari",
          partnershipCriteria: [
            "Yoshi: 5+ yil",
            "O'lchov: oyiga $150k–1M+",
            "Xodimlar: 80-500+ xodim (lekin asosiy narsa hajmi emas, balki vazifaning etukligi)",
            "Bosqich: sarmoyaga tayyorgarlik / hamkorlik / M&A / kredit / yirik shartnoma",
            "Boshqaruv: operatsion tizim mavjud, ammo \"vitrin\" yo'q - investor pul qayerda ekanligini, xavf-xatar va kimga tegishli ekanligini tushunmaydi.",
          ],
          partnershipResultsLabel: "Hamkorlik natijasi:",
          partnershipResults: [
            "Biznes aktiv sifatida: shaffoflik, himoya, boshqariladigan risklar",
            "Yagona moliyaviy haqiqat",
            "Yopiq zaifliklar",
            "Investitsion papka",
            "Owners+cadence",
          ],
        },
      ],
      ctaLabel: "Diagnostika bilan boshlang",
      modal: {
        scenarioLabel: "Ssenariy tahlili",
        signsLabel: "Oddiy belgilar",
        solutionLabel: "Nima qila olasiz",
      },
    },
    icpBridge: {
      label: "Javob",
      title: "Biz qanday yordam bera olamiz?",
      description:
        "Biz maqsadli holatni loyihalashtiramiz, sizning haqiqatingizga sho'ng'iymiz, arxitekturani quramiz va uni siz bilan birga amalga oshiramiz. \"Olib ketish\" slaydlari emas - biznes ichida ishlash.",
      highlightPhrase: "biznes ichida ishlash",
      items: [
        "Biz haqiqiy muvaffaqiyatsizlik nuqtalarini tashxis qilamiz - moliya, jarayonlar, savdo, jamoa",
        "Biz maqsadli holatni sizning ko'lamingiz va ambitsiyalaringizga mos ravishda ishlab chiqamiz",
        "Biz tizimni 45–90 kun ichida amalga oshiramiz — buni tavsiya etmaymiz, o‘zimiz qilamiz",
        "Biz boshqaruvni sizning jamoangizga topshiramiz, barqarorlik uchun sherik bo'lib qolamiz",
      ],
      ctaLabel: "Diagnostika bilan boshlang",
    },
    helpAndProcess: {
      title: "Biznes tizimlarini qanday quramiz",
      description:
        "Biz bosqichlarni, har bir bosqichning natijasini va mijoz nimani qabul qilishini ko'rsatamiz.",
      stages: [
        {
          title: "Diagnostika",
          description:
            "O'zgartirishdan oldin, aniq nima buzilganligini va nima uchun ekanligini tushunishingiz kerak. Biz tuzilgan operatsion auditni o'tkazamiz: biz moliya, jarayonlar, savdo va boshqaruvdagi muvaffaqiyatsizliklarning haqiqiy nuqtalarini aniqlaymiz.",
          result: "Teshiklar xaritasi: raqamlar, jarayonlar, odamlar, aktivlar.",
          clientGets: [
            "Asosiy to'siqlar va ularning manbalari xaritasi",
            "Moliyaviy va operatsion bo'shliqlar: foyda yo'qolgan joyda",
            "Egalik zaif tomonlari: aktivlarga, kirishlarga, ma'lumotlar bazalariga kim egalik qiladi",
            "Baholash bilan tanqidiy xavflar ro'yxati: \"yopilmasa qanday zarar\"",
          ],
        },
        {
          title: "Dizayn",
          description:
            "Diagnostika asosida biz biznesning maqsadli holatini loyihalashtiramiz - sizning miqyosingiz va ambitsiyalaringiz uchun moslashtirilgan boshqariladigan operatsion model. \"O'zgartirish rejasi\" emas, balki ishlaydigan arxitektura: kim nima uchun javobgar, u qanday o'lchanadi, qanday nazorat qilinadi.",
          result: "Yo'l xaritasi: biz nima qilyapmiz, qanday ketma-ketlikda va nima uchun.",
          clientGets: [
            "Asosiy funktsiyalarning ishlashi uchun maqsadli sxema",
            "Boshqaruv sxemasining arxitekturasi: o'lchovlar, egalar, kadans, nazorat nuqtalari",
            "RACI matritsasi: rollar, mas'uliyatlar, egalik zonalari",
            "Muntazam boshqaruvning bo'limlari va konturlari o'rtasidagi o'zaro aloqalar mantig'i",
          ],
        },
        {
          title: "Amalga oshirish",
          description:
            "Biz ishlab chiqilgan modelni kundalik amaliyotga aylantiramiz: biz 45-90 kun davomida jamoa bilan birga ishlaymiz. Biz boshqaruv ritmini, qoidalarni, rollarni va o'lchovlarni ishga tushiramiz, shunda tizim operatsion tizimda ishlaydi - tashqaridan \"tavsiya etilgan\" emas, balki uni amalga oshiruvchilar bilan birga.",
          result: "Tavsiyalardan tortib muntazam ishlash odatiga qadar.",
          clientGets: [
            "Amalga oshirilgan boshqaruv ritmlari va qat'iy kadans",
            "Amaldagi qoidalar va SOPlar; RACI va amalda mulkchilik zonalari",
            "Ko'rsatkichlar, asboblar paneli va eskalatsiya nuqtalari: ularga kim qaraydi, qanchalik tez-tez, og'ish bo'lsa nima qilish kerak",
            "O'zgarishlarni qo'llab-quvvatlash va standartni saqlash uchun jamoaning mas'uliyat sohasi",
          ],
        },
        {
          title: "Biznes tizimini uzatish.",
          description:
            "Biz kelishilgan qimmatli yakuniy natijaga erishilgandan so'ng ketamiz: biz asosiy ishtirokchilarni yangi tizimda ishlashga o'rgatamiz, qoidalarni tuzatamiz, boshqaruv mantig'ini o'tkazamiz va barqarorlikni saqlab qolish uchun hamkor bo'lib qolamiz.",
          result: "Ortimizda qolgan narsa - bu qaramlik emas, balki tizim.",
          clientGets: [
            "Hujjatlar bilan papka tayyor: raqamlar, tuzilma, shartnomalar, kirishlar - hamma narsa tartibda",
            "Jamoa tizim bo'yicha ishlaydi: rollar, KPIlar, kadans belgilangan",
            "Egasi asboblar paneli orqali boshqaradi (haftasiga 10 soatgacha)",
            "Biznes boshqariladigan aktivga o'xshaydi va tegishli tekshiruvdan o'tadi",
          ],
        },
      ],
      ctaLabel: "Ishlarni ko'rish",
    },
    whatWeChange: {
      eyebrow: "Bizning 6 ta ustunimiz",
      title: "BBI bir vaqtning o'zida oltita muhim boshqaruv tugunlarida ishlaydi.",
      pillars: [
        {
          title: "Operatsion samaradorligi",
          subtitle: "Maqsad: egasi qo'lda boshqaruvni qoldiradi",
          items: [
            "Boshqaruv ritmi (kadans): uchrashuvlar tizimi, ro'yxatga olish, nazorat punktlari",
            "SOP va tashkilot diagrammasi: har bir jarayon tavsiflanadi, har bir egasi tayinlanadi",
            "Boshqaruv paneli va KPI panellari: egasi biznes holatini 5 daqiqada ko'radi",
            "Bortga kirishni tekshirish varaqlari: yangi xodim tizimni buzmaydi",
          ],
        },
        {
          title: "Marketing",
          subtitle: "Maqsad: investitsiya qilingan har bir tiyin natijaga bog'liq",
          items: [
            "End-to-end analitika: teginishdan tortib to to'lovgacha - har bir kanal ko'rinadi",
            "Kanal auditi: aslida nima ishlaydi va byudjetni nima sarflaydi",
            "Ma'lumotlar bazalari, hisoblar va hisoblarga egalik - pudratchida emas, balki kompaniyada",
            "Boshqariladigan marketing tizimi: bitta ijrochiga bog'liq emas",
          ],
        },
        {
          title: "Sotish",
          subtitle: "Maqsad: tizim alohida \"yulduzlar\" emas, balki sotadi",
          items: [
            "Skriptlar va muloqot qoidalari: natija ma'lum bir shaxsning iste'dodiga bog'liq emas",
            "Savdo bo'limini noldan qurish yoki mavjudini qayta tiklash",
            "CRM nazorati: bitta etakchi yo'qolmaydi, bitta ham bitim yopishmaydi",
            "Huni va kiruvchi ishlov berish: tizimli, qo'lda emas",
          ],
        },
        {
          title: "Moliya",
          subtitle: "Maqsad: \"Mening pulim qayerda?\" Degan savolga halol javob.",
          items: [
            "Boshqaruv hisobi: biznesning real iqtisodiyoti",
            "Moliyaviy teshiklarni, yashirin qochqinlarni va o'g'irlik sxemalarini aniqlash",
            "To'lov taqvimi: naqd pul bo'shliqlari faktdan keyin emas, balki oldindan ko'rinadi",
            "Hududlar bo'yicha buxgalteriya hisobi: qaysi biri pul topadi, qaysi biri pastga tortadi",
          ],
        },
        {
          title: "HR va jamoa",
          subtitle: "Maqsad: jamoani takrorlash mumkin - odamni tark etish tizimni buzmaydi",
          items: [
            "Ish profillari va tizimli yollash: biz tasodifiy emas, balki to'g'ri bo'lganlarni ishga olamiz",
            "Ishga qabul qilish dasturi: yangi xodim natijalarga erishadi",
            "Baholash tizimi va HR tahlili: kim turtki berayotgani, kim ushlab turgani, kim sekinlashayotgani aniq.",
            "Iste'dodlar zaxirasi va voris rejasi: muhim funktsiyalar doimo yopiq",
          ],
        },
        {
          title: "Aktivlarni himoya qilish",
          subtitle: "Maqsad: aktivlar kompaniyaga tegishli - texnik va qonuniy",
          items: [
            "NDA va oshkor qilmaslik kelishuvlari: ma'lumotlar va intellektual mulk kirishda himoyalangan",
            "Mehnat shartnomalari va lavozim tavsiflari: huquq va majburiyatlar belgilangan",
            "Shaxsiy ma'lumotlarni qayta ishlashga rozilik, pudratchilar bilan tuzilgan shartnomalar",
            "Huquqiy audit: zaifliklar aniqlangan, yopilgan, hujjatlashtirilgan",
          ],
        },
      ],
    },
    whatYouGet: {
      eyebrow: "Natija",
      title: "Biz bilan ishlashdan nimaga erishasiz?",
      subheadline:
        "Tavsiyalar to'plami yoki individual xususiyatlarni yaxshilash emas. Va biznesda ishga tushirilishi, boshqarilishi va rivojlanishi mumkin bo'lgan tizim.",
      ui: {
        readMore: "Batafsil >>",
        whatItMeans: "Bu nimani anglatadi",
        clientGetsHeading: "Mijozda nima qoladi",
        importantPrefix: "Muhim:",
        outcomeEyebrow: "Xulosa",
      },
      cards: [
        {
          title: "Biznes qayerda nazoratni yo'qotayotganining aniq tasviri",
          whatItMeans:
            "Siz \"tartibsizlik tuyg'usi\" ni emas, balki o'ziga xos xaritani ko'rasiz: qarorlar egasiga bog'langan, funksiyalar yakka holda ishlaydi, o'sish barqarorlikni emas, balki allaqachon yo'qotishlarni keltirib chiqaradi.",
          clientGets: [
            "Asosiy to'siqlar xaritasi va ularning asosiy sabablari - alomatlar emas, balki manbalar",
            "Funktsiyalar orasidagi tanqidiy bo'shliqlarning tavsifi: javobgarlik yo'qolgan joyda",
            "Har biri uchun zararni baholash bilan boshqaruv risklari ro'yxati",
            "Ustuvorliklar: avval nimani yopish kerak, keyin nima yopish kerak",
          ],
          important:
            "Ushbu natijaga faqat haqiqiy ma'lumotlarga to'liq kirish bilan erishish mumkin: CRM, moliya, shartnomalar va boshqaruv mantig'i. Shaffoflik bo'lmasa, tashxis qo'yish mumkin emas.",
        },
        {
          title: "Bir-biriga bog'liq bo'lmagan harakatlar to'plami emas, balki biznes arxitekturasi",
          whatItMeans:
            "Siz \"g'oyalar ro'yxati\" ni emas, balki ishlaydigan modelni olasiz: biznes boshqarilishi va barqaror bo'lishi uchun marketing, savdo, moliya, HR va operatsiyalarda nimani o'zgartirish kerak va qanday ketma-ketlikda -.",
          clientGets: [
            "Asosiy funktsiyalar uchun maqsadli ramka doskadagi g'oyalar emas, balki operatsion modeldir.",
            "O'zgarishlarning ustuvor yo'nalishlari bilan yo'l xaritasi: birinchi 45 kun ichida nima amalga oshiriladi, keyin nima",
            "Bo'limlar, rollar va ko'rsatkichlar o'rtasidagi munosabatlar mantig'i",
            "RACI matritsasi: kim mas'ul, kim bajaradi, har bir jarayon uchun kim muvofiqlashtiradi",
          ],
          important:
            "Bu egasi va asosiy menejerlar biznesga mustaqil funktsiyalar to'plami sifatida emas, balki yagona tizim sifatida qarashga tayyor bo'lganda ishlaydi.",
        },
        {
          title: "Amalga oshirish boshqaruv ritmiga keltirildi",
          whatItMeans:
            "Har bir tartibga solish, har bir ritm, har bir ko'rsatkich biznesingizning haqiqiy sharoitida sinovdan o'tkaziladi va shundan keyingina standart sifatida belgilanadi. Operatsion tizim kayfiyat va mavjudligiga bog'liq bo'lishni to'xtatadi - u protokolga muvofiq ishlaydi.",
          clientGets: [
            "Amalga oshirilgan kadens: muntazam uchrashuvlar, ro'yxatga olish, nazorat punktlari",
            "Har bir funktsiya uchun muntazam boshqaruv harakatlari ro'yxati: kim nima qiladi va qaysi chastotada",
            "Nazorat ko'rsatkichlari va kuchayish nuqtalari: tizimning o'zi og'ishlar haqida signal beradi, egasining ishtirokini kutmaydi",
            "Amalga oshirishning har bir bosqichi uchun aniq javobgarlik sohasi: egasi kim, kim ijro etadi, kim tasdiqlaydi",
          ],
          important:
            "Bu natija faqat amalga oshirishning muhim nuqtalarida egasi va asosiy menejerlarning faol ishtirokida mumkin. Xarid bo'lmasa, o'zgarish jamoaning qarshiligiga duch kelgan joyda to'xtab qoladi.",
        },
        {
          title: "Tizimni qanday saqlashni yaxshiroq tushunadigan jamoa",
          whatItMeans:
            "Sizning jamoangiz yangi mantiqda qanday ishlashni, o'zgarishlarni qo'llab-quvvatlashni va qo'lda boshqarishga qaytmaslikni tushunadi. BBIning ketishi yo'qotish emas, balki rejalashtirilgan transfer. Tashqi sherikga qaramlik = 0.",
          clientGets: [
            "O'qitilgan asosiy xodimlar: ularning roli, ko'rsatkichlari va mas'uliyatini tushunish",
            "Ruxsat etilgan ish qoidalari: qoidalar, SOP, o'yin kitobi - ekspertiza odamlarga emas, kompaniyaga tegishli",
            "O'tkazilgan boshqaruv mantig'i: qanday boshqarish kerak, qanday kuchayishi kerak, tizimning degradatsiyasining oldini olish",
            "Tashqi yordamisiz birga ushlab turuvchi boshqaruv tsikli",
          ],
          important:
            "Ta'sir bevosita mijoz tomonidan loyihaga kim kiritilganligiga bog'liq. Agar asosiy ishtirokchilar ishtirok etmasa, tizim ildiz otmaydi. Agar ular ishtirok etsa, ular bizsiz qoladilar va ishlaydilar.",
        },
        {
          title: "Egasining qo'lda ushlab turishiga kamroq bog'liq bo'lgan biznes",
          whatItMeans:
            "Biznes tizim bo'yicha ishlaydi - asboblar paneli, protokollar va boshqaruv ritmi orqali. Egasi Arxitektor rolini tiklaydi: 24/7 operativ yong'inlarni o'chirishdan ko'ra strategiyani boshqarish.",
          clientGets: [
            "Rollar va mas'uliyat sohalari qat'iy belgilangan: har bir jarayonning egasi bor, har bir qarorda aniq protokol mavjud",
            "Boshqaruv qarorlari egasining shaxsiy ishtiroki emas, balki ma'lumotlar asosida qabul qilinadi",
            "Amalga oshirishni oldindan aytish mumkin: standartlar, o'lchovlar va ritm sifatni qo'lda nazorat qilmasdan saqlaydi",
            "O'sishni boshqarish mumkin: miqyoslash modelga amal qiladi va tartibsizlikning yangi darajasini yaratmaydi",
          ],
          important:
            "Bu \"bir hafta ichida tez effekt\" yoki \"egasiz avtopilot\" emas. Bu mulkdorning o'zi tomonidan qo'llab-quvvatlanadigan tizimli amalga oshirish va boshqaruv intizomi natijasidir. Haftada 10 soatgacha - biznesning o'zi ishlagani uchun emas, balki tizim to'g'ri bajarilganligi uchun.",
        },
      ],
      finalAccent: {
        title: "BBI bilan ishlash natijasi himoyalangan va boshqariladigan biznes aktividir",
        text: "BBI bilan ishlash individual xususiyatlarni yaxshilash yoki tavsiyalar bilan maslahatlashish emas. Bu parchalangan boshqaruvdan texnik, qonuniy va operatsion jihatdan egasiga tegishli bo'lgan uzluksiz, shaffof va takrorlanadigan biznes aktiviga o'tishdir.",
        ctaLabel: "Diagnostika bilan boshlang",
      },
    },
    process: {
      eyebrow: "Yondashuv",
      title: "Biz qanday ishlaymiz",
      approaches: [
        {
          title: "Biz dizayn qilamiz",
          description:
            "Biz maqsadli holat va arxitekturani aniqlaymiz. \"odatdagidek\" emas - biznesingiz kerak bo'lganidek.",
        },
        {
          title: "Keling, suvga sho'ng'iymiz",
          description:
            "Biz jarayonlar, moliya, savdo va jamoalarni tahlil qilamiz. Biz qiyinchiliklarni va muvaffaqiyatsizliklarning haqiqiy sabablarini topamiz.",
        },
        {
          title: "Bino arxitekturasi",
          description:
            "Ritm, qoidalar, asboblar paneli, mas'uliyat sohalari - alohida \"yaxshilanishlar\" ga emas, balki yagona tizimga.",
        },
        {
          title: "Amalga oshiramiz",
          description:
            "Biz buni har kuni amalga oshiramiz, jamoani o'rgatamiz, transfer nazorati qilamiz. Biz barqarorlik bo'yicha hamkor bo'lib qolamiz.",
        },
      ],
      ctaLabel: "Diagnostika bilan boshlang",
    },
    whyBbi: {
      title: "Nima uchun BBI agentlik yoki konsalting emas",
      subtitle:
        "Aksariyat pudratchilar alomatlar bilan ishlaydi: reklamani boshlash, strategiya yozish, odamlarni yollash. Ammo tizimli biznes muvaffaqiyatsizliklari chuqurroq yashaydi - boshqaruv bo'shliqlarida, \"almashtirilmaydigan\" ga bog'liqlikda, raqamlarda yagona haqiqat yo'q. Nuqtali echimlar bu erda ishlamaydi. Bizga arxitektura kerak.",
      topCards: [
        {
          label: "Agentlik emas",
          intro:
            "Agentlik ijrochi hisoblanadi. U vazifani oladi, uni bajaradi va KPI haqida hisobot beradi: qamrov, etakchilar, bosishlar. Ammo biznes natijalari uchun javobgarlik egasida qoladi.",
          outcomeBullets: [
            "Har bir funktsiya o'zining \"qora qutisida\" yashaydi: marketing savdoda nima bo'layotganini bilmaydi",
            "Egasi hali ham to'siq bo'lib qolmoqda - endi ham pudratchilar o'rtasida",
            "Asosiy ma'lumotlar, kirish va ishlanmalar kompaniya tomonidan emas, balki agentlik tomonidan saqlanadi",
            "Pudratchi ketganida, natijalar yo'qoladi",
          ],
        },
        {
          label: "Maslahat emas",
          intro:
            "Konsalting - bu tahlilchi. U biznesni o'rganadi, tashxis qo'yadi va tavsiyalar beradi. Amalga oshirish, natijalarga erishish, jamoaning qarshiligi bilan ishlash endi uning zonasi emas.",
          outcomeBullets: [
            "Qarorlar hujjat darajasida qoladi",
            "Jamoa o'zgarishlarni ritmga olib kelmaydi",
            "Egasi yana hamma narsani o'z zimmasiga oladi",
            "Biznes \"nima qilish kerakligini\" tushunadi, lekin barqaror amalga oshirishga o'tmaydi",
          ],
        },
      ],
      wideCard: {
        label: "BBI - operatsion hamkor",
        intro:
          "Biz marketing xizmatlarini sotmaymiz va egasini tavsiyalar bilan yolg'iz qoldirmaymiz. Biz biznesga boshqaruv tizimi arxitektorlari sifatida kiramiz: biz muvaffaqiyatsizliklarning haqiqiy sabablarini ochib beramiz, maqsadli holatni loyihalashtiramiz va o'zgarishlarni jamoa bilan birgalikda amalga oshiramiz. Bizning ishimizdan so'ng, hisobot emas, balki kompaniyaga tegishli ishlaydigan tizim qoladi.",
        outcomeBullets: [
          "Biz diagnostikadan boshlaymiz: biz tizimdagi teshiklarni aniqlaymiz, ularni tegishli nomlari bilan chaqiramiz, asosiy sabablarni aniqlaymiz - alomatlar emas.",
          "Biz maqsadli arxitekturani loyihalashtiramiz: operatsion model, rollar, o'lchovlar, boshqaruv konturlari - egasining miqyosi va ambitsiyalariga ko'ra.",
          "Biz yagona boshqaruv sxemasini qurmoqdamiz: marketing, savdo, moliya, kadrlar va operatsion tizimlar bir xil qoidalar va bir xil raqamlarga muvofiq ishlaydi.",
          "Biz 45-90 ish kuni davomida amalga oshirishga hamroh bo'lamiz: biz buni tavsiya etmaymiz - o'zgarishlar amalda bo'lgunga qadar biz buni jamoa bilan birga qilamiz.",
          "Biz tizimni jamoaga o'tkazamiz: aktivlarga egalik qilish, qoidalar va boshqaruv ritmi biznesda qoladi",
        ],
      },
      approachEyebrow: "Bizning yondashuvimiz",
      comparisonTable: {
        columnHeaders: ["Parametr", "Agentlik", "Konsalting", "BBI operatsion hamkor"],
        rows: [
          ["Rol", "Vazifa bajaruvchisi", "Maslahatchi", "Arxitektor + integrator + amalga oshiruvchi"],
          ["Chuqurlik", "Bitta vosita/kanal", "Tahlil va tavsiyalar", "Butun boshqaruv tizimi"],
          [
            "Mavjudlik",
            "Masofa, vazifa bo'yicha",
            "Sessiyalar va hisobotlar",
            "CCR (qimmatli yakuniy natija) gacha biznes ichida",
          ],
          ["Javobgarlik", "O'z zonasi uchun", "Tavsiyalar uchun", "CCR ga erishish uchun"],
          ["Natija", "Bajarilgan vazifa", "Hujjat/strategiya", "Ishlaydigan tizim"],
          ["Ketgandan keyin", "To'xtaydi", "Hujjat qoladi", "Tizim qoladi"],
        ],
      },
    },
    casesBlog: {
      title: "Holatlar va blog",
      casesTitle: "Ishlar",
      blogTitle: "Blog",
      casesLabel: "Barcha holatlar",
      blogLabel: "Barcha maqolalar",
      readMore: "Batafsil ma'lumot",
      ctaLabel: "Diagnostika bilan boshlang",
    },
    faq: {
      title: "Tez-tez so'raladigan savollar",
      items: [
        { q: "Loyiha qancha davom etadi?", a: "Diagnostika - biznesning maqsadli holatini loyihalash - amalga oshirish (90+ kun) - biznesni himoyalangan va tizimlashtirilgan aktiv sifatida o'tkazish. Aniq vaqt o'lchovga bog'liq." },
        { q: "Masofadan ishlayapsizmi?", a: "Ha, lekin muntazam tashriflar bilan. Jarayonlarga sho'ng'ish ofisda bo'lishni talab qiladi." },
        { q: "Kichik biznes mos keladimi?", a: "Biz oyiga 30 ming dollarlik aylanma va 15 kishilik jamoaga e'tibor qaratamiz. 5 yoshgacha bo'lgan biznes yoki PMF-da startap - odatda emas." },
        { q: "Agentlik va maslahatchilardan nimasi bilan farq qilasiz?", a: "Biz soat sotmaymiz (agentlik). Biz \"olib ketish\" tavsiyalarini bermaymiz (konsalting). Biz buni o'zimiz amalga oshiramiz va tizimlar barqarorlashguncha qolamiz." },
        { q: "Qachon yo'q deysiz?", a: "Egasining aloqasi yo'q. Ma'lumotlarga kirish imkoni yo'q. Bizga agentlik modeli kerak. 5 yilgacha biznes yoki boshlang'ich. Tizimni o'zgartirishga tayyor bo'lmasdan, \"o'sishni kafolatlash\" umidi." },
      ],
    },
    finalCta: {
      title: "Biznes o'sib bormoqda - menejment ularni ushlab turolmaydimi? Tashxisdan boshlang",
      ctaLabel: "Diagnostika bilan boshlang",
      subtitle: "Semptomlarni davolashdan ko'ra, muvaffaqiyatsizlikning haqiqiy nuqtalarini tushuning",
    },
    pillars: {
      title: "Qalqon. Tutqich. Tizim.",
      items: [
        {
          title: "Qalqon",
          description:
            "Aktivlarni himoya qilish, egalik qilish, huquqiy qurollar, shaffof moliya.",
          details:
            "Qalqon \"umuman xavfsizlik\" emas. Biz aktivlarni va nazoratni kompaniyaga o'tkazish haqida gapiryapmiz - biznes odamlarga, pudratchilarga va \"virtual raqamlarga\" bog'liq bo'lmasligi uchun. Biz \"tinchlanmaymiz\" - biz zaifliklarni ochib beramiz va ularni tizim bilan yopamiz: mulk, qonuniy qurol-yarog ', shaffof moliya, kadrlar barqarorligi.",
          linkLabel: "Batafsil ma'lumot",
          href: "/pillars/shield",
        },
        {
          title: "Tutqich",
          description:
            "Operatsion ritm, end-to-end analitika, \"yulduzlar\"siz savdo tizimi.",
          details:
            "Leverage \"biz sizni 10 baravar kuchliroq qilamiz\" emas (bu xavfli va'da). Biz o'lchanadigan natijaga ta'sir qilishi mumkin bo'lgan nazorat nuqtalari haqida gapiramiz: operatsion ritm (kadans), yakuniy tahlil, \"yulduzlarsiz\" savdo tizimi, standartlar va takrorlanuvchanlik.",
          linkLabel: "Batafsil ma'lumot",
          href: "/pillars/leverage",
        },
        {
          title: "Tizim",
          description:
            "Rollar belgilangan, jarayonlar standartlashtirilgan, odamlarni o'zgartirish tizimni buzmaydi.",
          details:
            "Tizim \"qahramonlik\" va qo'lda boshqarishning antitezidir. Biz egasining shaxsiy bosimini boshqaruv ritmi va qoidalari bilan almashtirish haqida gapiramiz. Biz mexanizmni qurmoqdamiz, unda har bir jarayon tasvirlangan, har bir natija bashorat qilinadigan va xodimning ketishi biznes uchun to'xtash signali emas, balki \"vakolatlarning rejalashtirilgan o'tkazilishi\" hisoblanadi.",
          linkLabel: "Batafsil ma'lumot",
          href: "/pillars/system",
        },
      ],
    },
    position: {
      title: "BBI neytral pudratchi emas",
      description:
        "Biz egasining tomonini olamiz. Biz qattiq haqiqatni aytamiz, zaifliklarni ochib beramiz va ularni tizimli ravishda tuzatamiz - biznes avtonom aktivga aylanadi.",
    },
  },
  about: {
    heroNav: {
      prev: "Oldingi ekran",
      next: "Keyingi ekran",
      pagesGroup: "Ekranlarni bloklash",
    },
    heroPages: [
      {
        title: "Bold Brands International",
        body:
          "Egalari va bosh direktorlar uchun operatsion hamkor. Biz turli xil amaliyotlardan yaxlit tizimni yig'amiz: boshqaruv sxemasi, moliyaviy haqiqat va o'sish uchun tayanishi mumkin bo'lgan himoyalangan aktivlar.",
      },
      {
        title: "Qalqon, tutqich. Tizim",
        body:
          "Biz Shield (egalik va aktivlarni himoya qilish), Lever (operatsion tizim, savdo, tahlil) va Tizimni (boshqaruv ritmi, standartlar, RACI) qurmoqdamiz, shunda biznes “qahramonlar”ga emas, mexanizmga tayanadi.",
      },
      {
        title: "O'sish bosqichlarida egasining sherigi",
        body:
          "Bizning vazifamiz biznesni boshqariladigan aktivga o'xshatishdir: yagona moliyaviy rasm, asosiy aktivlarga ro'yxatdan o'tgan huquqlar va tizim bilan.",
      },
    ],
    who: {
      title: "Biz kimmiz?",
      text:
        "BBI (Bold Brands International) - Operatsion hamkor (RevOps). Biz reklama qilmaymiz, SMM sotmaymiz va strategiya taqdimoti bilan cheklanmaymiz. Bizning mas'uliyat sohamiz - biznesni egasi raqamlar va tizim orqali boshqaradigan avtonom va himoyalangan aktivga aylantirishdir.",
      emphasis:
        "BBI pudratchi yoki “uchinchi tomon” emas. Biz egasi va uning biznesi yonida turib, uning aktivlari, maʼlumotlari va nazorat qilinishini doimiy ravishda himoya qilamiz.",
    },
    principles: {
      title: "Asosiy e'tiqodlar",
      items: [
        {
          title: "Biz egasi va bosh direktor tomonidamiz",
          body:
            "\"Hamma o'rtasida\" neytral pozitsiya emas. Biz haqiqiy tavakkalchilikni o'z zimmasiga olgan odam tomonini olamiz - moliyaviy, obro'li, operatsion. Bizning har bir qarorimizni uning manfaatlari belgilaydi.",
        },
        {
          title: "Biz biznesga halol qarash tarafdorimiz - hatto noqulay bo'lsa ham",
          body:
            "Muammolarni ularning nomi bilan chaqirish - qo'pollik emas, balki hurmat. Biz biznes qayerda haqiqatan ham pul, boshqaruv qobiliyati va qiymatini yo'qotayotganini ko'rsatamiz. Qulay illyuziya qattiq haqiqatdan qimmatroq - pul va vaqt bilan.",
        },
        {
          title: "Tizim iste'doddan muhimroq - har doim",
          body:
            "\"O'rnini almashtirib bo'lmaydigan\" odamlar xavf sifatida qiymat sifatida yashiringan. Biz tajriba bir kishining boshida emas, balki kompaniya jarayonlari va standartlarida joylashgan modellarni yaratamiz. Har qanday xodimning ketishi falokat emas, balki rejalashtirilgan o'tishdir.",
        },
        {
          title: "Biz tahdidlarni darsliklardan emas, balki ichimizdan bilamiz",
          body:
            "Biz ishlayotgan vaziyatlar - ma'lumotlar bazalarini o'g'irlash, \"almashtirilmaydigan\" shantaj, noaniq moliyaviy sxemalar, agentliklarga qaramlik - biz haqiqiy biznesda duch kelganmiz va bunga o'zimiz duch kelganmiz. Bu nazariya emas. Bu biz tanib olishimiz va zarar keltirmasdan oldin to'xtatishimiz mumkin bo'lgan amaliyotdir.",
        },
      ],
    },
    manifesto: {
      title: "Biz nimaga qarshimiz?",
      items: [
        {
          title: "Bo'sh va'dalarga qarshi.",
          body:
            "Amalga oshirilmaydigan tavsiyalar, strategiyalar va \"chiroyli taqdimotlar\" ishning illyuziyasidir. Biz o'zgarishlarning amalda qo'llanilishini va \"tarix uchun\" jildiga tushmasligini ta'minlash uchun mas'uliyatni o'z zimmamizga olamiz.",
        },
        {
          title: "Tizim o'rniga \"xizmatlar\" ga qarshi.",
          body:
            "Bir-biri bilan aloqa qilmasdan bir martalik harakatlar mahalliy ta'sirga ega va biznes arxitekturasini o'zgartirmaydi. Biz \"muammolarni yopmaymiz\" - biz muammolar tizimli va takrorlanadigan tarzda hal qilinadigan boshqaruv sxemasini quramiz.",
        },
        {
          title: "Odamlarga qaramlikka qarshi.",
          body:
            "Ikki yoki uchta \"asosiy\" odamlarga tayanadigan biznes aktiv emas, balki zaiflikdir. Ulardan birining ketishi funktsiyani to'xtatishi yoki mijozlar bilan munosabatlarni buzishi mumkin. Biz aniq shaxslardan mustaqil ishlaydigan tizimni qurmoqdamiz.",
        },
        {
          title: "Shaffoflikka qarshi.",
          body:
            "Yashirin kelishuvlar, \"kulrang\" moliyaviy sxemalar, ma'lumotlar bazalari va \"pudratchi\" kirish - bularning barchasi biznesning haqiqiy qiymatini pasaytiradi va egasi oxirgi marta bilishi mumkin bo'lgan xavflarni keltirib chiqaradi. Shaffoflik variant emas, balki boshqariladigan biznes uchun asosiy shartdir.",
        },
        {
          title: "Yong'inga qarshi.",
          body:
            "Doimiy \"shoshilinch hal qilish\" rejimi tizimli o'zgarishlar uchun resurslarni qoldirmaydi. Biz keyingi inqirozga qarshi turish uchun kelmayapmiz - inqirozlar odatiy holga aylanmasligi uchun kelamiz.",
        },
        {
          title: "Egasi \"uchun\" ishlashga qarshi.",
          body:
            "Biz jamoani almashtiruvchi yoki “tashqi bosh direktor” emasmiz. Bizning vazifamiz - biz ketganimizdan keyin biznes butunlay mustaqil bo'lib qolishi uchun tizimni qurish va o'tkazish. Loyiha tugagandan so'ng BBIga bog'liqlik = 0.",
        },
      ],
    },
    team: {
      title: "Jamoa",
      members: [
        {
          name: "Ism familiyasi",
          role: "CEO",
          note: "Biznesni himoya qilishni xizmatlar majmui emas, balki tizim sifatida quradi.",
        },
        {
          name: "Ism familiyasi",
          role: "Operating Partner",
          note: "Transformatsiyaga rahbarlik qiladi va jarayon uchun emas, balki natija uchun javobgardir.",
        },
        {
          name: "Ism familiyasi",
          role: "RevOps mutaxassisi",
          note: "Operatsiyalarda ritm, tahlil va nazoratni quradi.",
        },
        {
          name: "Ism familiyasi",
          role: "RevOps mutaxassisi",
          note: "Natijalar xarizmadan ko'ra muhimroq bo'lgan savdo tizimini quradi.",
        },
      ],
    },
    cta: {
      title: "Bir-birimizga to'g'ri ekanligimizni bilmoqchimisiz?",
      description: "diagnostikadan boshlang",
      form: {
        name: "Ism",
        phone: "Telefon",
        message: "Murojaat haqida qisqacha",
        submit: "yuborish",
      },
    },
  },
  footer: {
    copyright: "© 2026 BBI (Bold Brands International). Barcha huquqlar himoyalangan.",
    tagline: "Bold Brands International sizning ishonchli operatsion hamkoringizdir.",
    aboutTitle: "Kompaniya haqida",
    aboutLinks: [
      { label: "Biz qanday ishlaymiz", href: "/work" },
      { label: "Ishlar", href: "/cases" },
      { label: "Blog", href: "/blog" },
    ],
    socialTitle: "Biz",
    locations: [
      {
        city: "Bishkek",
        address: "st. Matrosova, 102-uy",
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
    workingHoursLabel: "Biz ishlayapmiz",
    workingHours: "Dushanba-Jum: 09:00-18:00",
    privacyLabel: "Maxfiylik siyosati",
    privacyHref: "/privacy",
  },
  cases: {
    hero: {
      eyebrow: "Haqiqiy natijalar",
      title: "Holatlar: harakatda tizimli yondashuv",
      description:
        "Biz \"reklamani ishga tushirdik\" emas, balki himoya, tutqichlar va tizimni qanday qurganimizni ko'rsatamiz. Kontekst, muammo, BBI harakati va o'lchanadigan natija.",
      heroImage: "/brand/cases-war-room-hero.png",
    },
    list: {
      sectionTitle: "Tegishli holatlar",
      sectionEyebrow: "Ish navigatsiyasi",
      sectionSubtitle: "Kontekstingiz uchun vaziyatni tanlang",
    },
    filters: {
      industry: "Sanoat",
      direction: "Yo'nalish",
      scale: "Masshtab",
      all: "Hammasi",
    },
    filterLabels: {
      retail: "Chakana savdo",
      fAndB: "HoReCa / F&B",
      services: "Xizmatlar",
      ecom: "E-commerce",
      other: "Boshqa",
      operations: "OS",
      marketing: "Marketing",
      sales: "Sotish",
      finance: "Moliya",
      hr: "HR",
      legal: "Huquqiy himoya",
      smb: "SMB",
      mid: "Mid-market",
      enterprise: "Enterprise",
    },
    card: { readMore: "Batafsil ma'lumot" },
    noResults: "Tanlangan filtrlar asosida hech qanday holat topilmadi.",
    caseDetail: {
      backToCases: "← Ishlar",
      context: "Kontekst",
      problem: "Muammo",
      whatBbiDid: "BBI nima qildi?",
      result: "Natija",
      artifacts: "Artefaktlar",
      bbiRole: "BBI ning roli",
      infographicForecast: "Kimga",
      infographicResult: "Natija",
      infographicTitle: "Natijalar raqamlarda",
    },
    items: [
      {
        slug: "med-lab-sla",
        headerImage: "/brand/case-med-lab-header.png",
        company: "Tibbiy laboratoriya (NDA)",
        industry: "Tibbiy xizmatlar",
        keyResult: "SLA 87%, ma'lumotlar bazasining 34% qayta faollashishi, konvertatsiya +21%",
        excerpt: "Tizim xatosini shaxsiy xatodan qanday ajratish mumkin: biz tijorat blokini qayta loyihalashtirdik, rollarni ajratdik - biz boshqariladigan huni va prognoz qilinadigan quvur liniyasiga ega bo'ldik.",
        seoTitle: "Sotishdagi tizim xatosi: laboratoriya ishi - SLA 87%, bazaning 34% qayta faollashishi",
        metaDescription:
          "Tizim xatosini shaxsiy xatodan qanday ajratish mumkin: laboratoriya ishi - SLA 87%, buyurtma chastotasi + 23%, ma'lumotlar bazasining 34% qayta faollashishi va prognoz qilinadigan quvur liniyasi.",
        keywords: [
          "tibbiy laboratoriya ishi",
          "Savdoda SLA",
          "CRM va SLA",
          "boshqariladigan savdo huni",
          "savdodagi tizim xatosi",
          "qo'rg'oshin konvertatsiyasining ortishi",
          "daromad bo'yicha quvur liniyasi",
          "o'tkazgichlar drenajlangan",
          "savdo bo'limi va marketing",
          "mijoz bazasini qayta faollashtirish",
          "buyurtma chastotasini oshirish",
          "LTV o'sishi",
          "CRM-da SLA nazorati",
          "tijorat blokini qurish",
        ],
        h1: "Tibbiy laboratoriya ishi: tizim xatosini shaxsiy xatodan qanday ajratish va daromadni nazoratga qaytarish",
        tags: ["Sotish", "CRM va SLA", "OS"],
        industryFilter: "services",
        directionFilter: "sales",
        scaleFilter: "mid",
        context:
          "Tibbiy laboratoriya. CRM o'rnatildi, SLAlar o'rnatildi, reklama kampaniyalari olib borilmoqda. Ammo samaradorlikni tahlil qilganda, ko'pchilik etakchilar \"birlashtirilgan\", huni boshqarilmagani ma'lum bo'ldi. Menejerlar aytadilar: \"marketing noto'g'ri odamlarni olib keldi, etakchilar sovuq\". Audit shuni ko'rsatdiki, SLAlar bajarilmagan, kechikishlar to'plangan va menejer bildirishnomalarga javob bermagan. Potentsiallarning 31% kontaktlar orqali so'rovlarni keltirib chiqaradi (siz ular bilan ishlashingiz mumkin va kerak). 59% faqat avtomatik javob oldi - hech kim ular bilan ishlamadi. Muammo \"qo'rg'oshin sifati\" emas, balki jarayon sifatida etakchi boshqaruv mavjud emas.",
        problem:
          "Ijrochilarni tanlashda tizimli xato: savdo menejerlari lavozimiga ma'muriy funktsiyalarga ega bo'lgan odamlar tayinlandi - doimiy mijozlarning so'rovlarini qabul qilish, ularni bajarish uchun o'tkazish va vaziyatni qo'llab-quvvatlash. Sotuvchi emas, koordinator/administratorning roli. Administrator reaktiv: oqimni qabul qiling, shoshilinchni yoping. Savdo faol: dialog o'tkazing, aloqaga qayting, rad etishga qarshi turing. Operatsion yuk mavjud bo'lganda, ma'mur har doim \"shoshilinch\", sotishni - \"qoldiq asosida\" tanlaydi. Motivatsiya masalasi emas, balki funktsiya arxitekturasi haqida.",
        whatBbiDid: [
          "Biz funktsiyalarni ajratdik va har bir rolga odamlarni \"mustahkamlash\" o'rniga o'lchanadigan natijani belgiladik.",
          "Biz tijorat blokini \"buyurtmalarni passiv kutish\" modelidan daromadlarni boshqarishga o'tkazdik: kengaytirish (yangi mijozlar) + LTV maksimallashtirish (bazaviy rivojlanish).",
          "Quyidagi rollar joriy etildi: Hunter (yangi mijozlar), Fermer (buyurtma chastotasi, ushlab turish, qayta faollashtirish), KAM (asosiy mijozlar), Administratorlar (sotishni almashtirmasdan operatsion tizim).",
          "Biz har bir rolni natijaga ko'ra \"bitta vazifa\" qildik - biz ishlab chiqarish aylanmasi savdoni yeb qo'ygan chalkashlikni olib tashladik.",
        ],
        resultNumbers: [
          { before: "SLAlar bajarilmadi, kechikishlar odatiy holdir", after: "SLA 87%", beforeValue: 15, afterValue: 87, label: "SLA" },
          { before: "Konvertatsiya: avtomatik javoblar bo'yicha etakchilar nobud bo'ldi", after: "+21%", beforeValue: 5, afterValue: 26, label: "Konvertatsiya" },
          { before: "Baza uchun rolsiz buyurtmalar chastotasi", after: "Birinchi oyda +23%", beforeValue: 10, afterValue: 33, label: "Buyurtma chastotasi" },
          { before: "Uyquning asosi 4-6 oy. qaytarilmaydi", after: "Qayta faollashtirilgan 34%", beforeValue: 0, afterValue: 34, label: "Baza reaktivatsiyasi" },
        ],
        artifacts: [
          "Rol tuzilishi Ovchi/Fermer/KAM/Admin",
          "CRM-da SLA nazorati",
          "Qo'rg'oshinni qayta ishlash qoidalari",
          "Ma'lumotlar bazasini qayta faollashtirish jarayoni",
        ],
        bbiRole:
          "Biz tizimlini xususiydan ajratdik. \"KPIlarni jazolash/o'rgatish/qattiqlash\" o'rniga ular tizimli sababni - noto'g'ri ishlab chiqilgan rollarni yo'q qilishdi. Natija: nazorat qilinadigan huni, bashorat qilinadigan daromad quvuri, maqbul diapazondagi naqd bo'shliqlar. BBI boshqaruvga taqlid qilishdan ko'ra, tijorat bo'linmasini qayta ishlab chiqdi.",
        sections: [
          {
            title: "Mijoz",
            paragraphs: ["Tibbiy laboratoriya sohasi."],
          },
          {
            title: "So'rov",
            paragraphs: [
              "Kompaniya CRM-ni o'rnatdi, SLA-ni o'rnatdi va muntazam reklama kampaniyalarini yo'lga qo'ydi. Ammo reklama kampaniyalarining samaradorligini tahlil qilganda, ko'pchilik etakchilar aslida \"birlashtirilgan\" va hunining o'zi boshqarilmagani ma'lum bo'ldi.",
              "Klassik to'qnashuv darhol boshlandi: menejerlar \"marketing noto'g'ri yo'l-yo'riqlarni olib keldi, etakchilar sovuq edi\" dedi.",
            ],
          },
          {
            title: "Fakt auditi nimani ko'rsatdi",
            paragraphs: [
              "Biz CRM-da so'rovlarni qayta ishlash zanjirini ko'tardik va haqiqiy rasmni ko'rdik:",
            ],
            bullets: [
              "SLAs menejerlar tomonidan bajarilmagan va kechikishlar to'plangan.",
              "Menejer CRMda muddati o'tgan to'lovlar haqidagi bildirishnomalarga javob bermadi.",
              "Potentsiallarning 31% trigger soʻrovlari bilan kelgan va oʻz kontaktlarini tark etgan (yaʼni, bular siz ishlashingiz mumkin boʻlgan va kerak boʻlgan yetakchilar edi).",
              "Etakchilarning 59 foizi faqat tizim avtomatik javobini oldi, shundan so'ng hech kim ularga ergashmadi.",
            ],
            paragraphsAfterBullets: [
              "Ya'ni, muammo \"qo'rg'oshin sifati\" emas edi - muammo etakchilar bilan jarayon sifatida ishlash mavjud emas edi.",
            ],
          },
          {
            title: "Nima uchun \"jazolash / o'rgatish / KPIlarni kuchaytirish\" har doim ham yechim emas",
            paragraphs: [
              "Agar korxona qo'rg'oshin oqimini ko'rsa, standart chora-tadbirlar to'plami quyidagicha ko'rinadi:",
            ],
            bullets: [
              "menejerlarni \"savdo\" bo'yicha o'qitish,",
              "nazoratni kuchaytirish,",
              "bonuslarni kamaytirishni joriy etish,",
              "KPIlarni qayta hisoblash,",
              "ularni \"qo'ng'iroq qilish\" va \"bosim qilish\" ga majburlash.",
            ],
            paragraphsAfterBullets: [
              "Bu faqat sabab shaxsiy bo'lsa ishlaydi: intizom pasaygan, jamoa bo'shashgan, menejer past ishlagan, bir yoki ikkita xodim buzilib ketgan.",
              "Ammo asosiy boshqaruv mahorati tizimli xatoni shaxsiy xatodan ajratishdir.",
              "Agar sabab tizimli bo'lsa, har qanday \"mustahkamlash\" nazorat taqlidiga aylanadi: siz vaqtni behuda sarflaysiz, faollikning qisqa muddatli o'sishiga erishasiz va 2-3 haftadan so'ng tizim avvalgi holatiga qaytadi.",
            ],
          },
          {
            title: "Aslida nima bo'ldi: ijrochilarni tanlashda tizimli xato",
            paragraphs: [
              "Biz tashxisga chuqurroq kirib bordik va alomatlarni sababdan ajratdik.",
              "Ma'lum bo'lishicha, tarixan ma'muriy funktsiyani bajargan odamlar \"savdo menejerlari\" roliga tayinlangan:",
            ],
            bullets: [
              "doimiy mijozlardan qabul qilingan so'rovlar,",
              "ijro etish uchun ariza topshirgan,",
              "maqom bilan birga,",
              "operatsion masalalarni hal qildi.",
            ],
            paragraphsAfterBullets: [
              "Ya'ni, bu sotuvchi emas, balki \"xizmat koordinatori/administratori\" roli edi.",
              "Va bu erda rollarning tizimli nomuvofiqligi paydo bo'ldi:",
              "Administrator reaktiv roldir: oqimni qabul qilish, xatolarni oldini olish, shoshilinch ravishda yopish, \"operatsion tizimning ishlashini ta'minlash\".",
              "Savdo - bu faol rol: dialog o'tkazing, mijozni qayta aloqaga keltiring, rad etishga dosh bering, yechimga kelgunga qadar turting, vaqtni hurmat qiling.",
              "Operatsion yuklash sharoitida ma'mur har doim \"shoshilinch va oxirgi daqiqa\" ni tanlaydi va savdo \"qoldiq asosida\" bo'ladi. Va bu motivatsiya masalasi emas. Bu funktsiya arxitekturasi muammosi.",
              "Tashxis natijasi: muammo tizimli edi - \"yomon etakchilar\" yoki \"yomon menejerlar\" emas, balki noto'g'ri ishlab chiqilgan rollar va majburiyatlar.",
            ],
          },
          {
            title: "Yechim: Odamlarni \"mustahkamlash\" emas, balki tijorat blokini qayta loyihalash",
            paragraphs: [
              "Alomatni davolash o'rniga (jazolash/poezd) biz tizimni o'zgartirdik - funktsiyalarni ajratdik va har bir rolga o'lchanadigan natijani tayinladik.",
              "Biz tijorat bo'linmasini \"buyurtmalarni passiv kutish\" modelidan daromadlarni boshqarish modeliga ikkita asosiy dastak orqali o'tkazdik:",
            ],
            bullets: [
              "Kengayish - bu yangi mijozlar orqali bozor ulushini muntazam ravishda qo'lga kiritish (bizning holatlarimizda, laboratoriya o'sishi ob'ektiv ravishda foydali bo'lgan segmentlar).",
              "LTV maksimallashtirish - joriy bazani rivojlantirish: chastotani oshirish, o'rtacha tekshirish, shpallardan qaytish, ushlab turish.",
            ],
            paragraphsAfterBullets: [
              "Rol va natijalar bo'yicha yangi tuzilma:",
              "Biz \"sotish\", \"bazaviy ishlab chiqish\" va \"operativ qo'llab-quvvatlash\" funktsiyalarini ajratdik, shuning uchun sotish ishlab chiqarish aylanmasi bilan \"yeb ketmaydi\".",
              "1) Menejer-Hunter (yangi mijozlarni jalb qilish) - yangi mijozlar va ularning muntazam buyurtma aylanishiga kirishi uchun javobgardir.",
              "2) Menejer-Fermer (joriy bazani ishlab chiqish) - mijozning xaridlaridagi ulushini oshirish, buyurtmalar chastotasi, saqlash va qaytarish uchun javobgardir.",
              "3) KAM / Line menejeri (asosiy mijozlar va yirik shartnomalar) - strategik munosabatlar va yirik shartnomalarni himoya qilish uchun javobgardir.",
              "4) Administratorlar (OT va xizmat) - buyurtmalarni to'g'ri qayta ishlash va maqom bo'yicha aloqa sifati uchun javobgardir - lekin savdoni almashtirmaydi.",
              "Asosiy nuqta: natijalar bo'yicha har bir rol \"bitta vazifa\" bo'lishi kerak. Rollar aralashib ketganda, biznes \"jimlikda\" pul yo'qotadi va keyin marketingda aybdorlarni qidiradi.",
            ],
          },
          {
            title: "Amalga oshirilgandan keyin nima o'zgardi: natijalar raqamlarda",
            paragraphs: [
              "Tizimli sababni olib tashlaganimizda, ko'rsatkichlar tez va bashoratli tarzda harakat qildi - chunki tizim qahramonona harakatlar to'plami sifatida emas, balki tizim sifatida ishlay boshladi.",
            ],
            bullets: [
              "SLA 87% ga tenglashdi - kechikishlar endi odatiy hol emas edi, nazorat muntazam bo'lib qoldi, qo'rg'oshinni qayta ishlash barqaror bo'ldi.",
              "Bu konversiyalarning 21% ga o'sishiga olib keldi: avtomatik javoblar va kechikishlar tufayli so'rovlar \"o'lishni\" to'xtatdi, ko'proq mijozlar haqiqiy dialog va buyurtmaga erishdilar.",
              "Bir mijozdan buyurtmalar chastotasi birinchi oyda 23% ga oshdi - bu ma'lumotlar bazasini ishlab chiqish va qaytarish uchun maxsus mas'ul bo'lgan rolning paydo bo'lishi tufayli.",
              "Mijozlar bazasining 34 foizi qayta ishga tushirildi, u \"uyqu rejimiga\" o'tdi va 4-6 oy davomida buyurtma bermadi - chunki mijozlarni qaytarish baxtsiz hodisa emas, balki jarayonga aylandi.",
            ],
            insertInfographic: true,
          },
          {
            title: "Moliyaviy ta'sir: naqd bo'shliqlar \"qabul qilinadigan chegaraga\" kirdi",
            paragraphs: [
              "Shuni ta'kidlash kerakki, SLAni yaxshilash va konversiyalarni oshirish nafaqat tijorat, balki moliyaviy va boshqaruv ta'siriga ham ega edi.",
              "Huni boshqarish mumkin bo'lganda, kompaniya bashorat qilinadigan daromad oqimini oldi - CRM bosqichlari va SLA intizomi bilan bog'liq bo'lgan kelajakdagi daromadlarning aniq hajmi.",
              "Bu o'z navbatida:",
            ],
            bullets: [
              "takroriy pul bo'shliqlari kamaytirildi, chunki tushumlar endi \"lotereya\" emas edi;",
              "to'lovlar va xaridlarni \"hissiyot orqali\" emas, balki huni harakatidan kelib chiqqan holda daromad prognozi bilan rejalashtirish imkonini berdi;",
              "qo'lda boshqarish va shoshilinch ishlarga bog'liqlikni kamaytirish - pul qahramonlik emas, balki jarayonning natijasi bo'ldi.",
            ],
          },
          {
            title: "Asosiy xulosa",
            paragraphs: [
              "Bu holat bitta narsaga bog'liq: siz tizimli va shaxsiyni ajratmasdan boshqaruv qarorlarini qabul qila olmaysiz.",
              "Agar biz odatdagi \"menejerlar aybdor - biz KPIlarni yaxshilaymiz/o'qitamiz/mustahkamlaymiz\" yo'liga ergashgan bo'lsak, kompaniya qisqa muddatli ta'sirga ega bo'ladi va keyin o'sha nuqtaga qaytadi, chunki rollar va mas'uliyatlar arxitekturasi bir xil bo'lib qoladi.",
              "Biz buni boshqacha qildik: tizimli sababni yo‘q qildik va SLA, konversiyalar, buyurtmalar chastotasi, ma’lumotlar bazasini qayta faollashtirish va eng muhimi, daromadni bashorat qilish bo‘yicha o‘lchanadigan natijalarga erishdik.",
            ],
          },
        ],
      },
    ],
  },
  blog: {
    hero: {
      title: "Blog va tajriba",
      description: "Avtonom va xavfsiz biznes tizimlarini qurish haqida maqolalar.",
    },
    filters: {
      all: "Hammasi",
      marketing: "Marketing",
      finance: "Moliya",
      operations: "OS",
    },
    noPosts: "Ushbu turkumda hali maqolalar mavjud emas.",
    card: { readMore: "Batafsil ma'lumot" },
    article: { backToBlog: "← Blog" },
    posts: [
      {
        slug: "5-shagov-avtonomnoe-upravlenie",
        category: "OS",
        categoryKey: "operations",
        title: "Avtonom haydash uchun 5 qadam",
        description: "Biznes egasining qo'l aralashuvisiz ishlashi uchun ritm, SOP va ijro nazoratini qanday qurish kerak.",
        image: "/blog/operations-autonomous.png",
        sections: [
          {
            title: "Nega “direktor” muammoni hal qilmaydi?",
            paragraphs: [
              "Avtonom boshqaruv \"yaxshi direktorni yollash\" haqida emas. Biz tizim haqida gapiramiz: uchrashuvlar ritmi, SOPlar, KPI panellari va ijroni nazorat qilish. Barcha oltita ustunlar birgalikda ishlaganda, egasi operatsiya xonasidan uzoqlashishi va strategiyaga e'tibor qaratishi mumkin.",
              "Klassik xato - bu tizimni odam bilan almashtirish. Direktor \"hamma narsani boshida saqlasa\"-da, biznes bir kishiga bog'liq. Tizim qahramonlarsiz ishlaydi.",
            ],
            image: "/blog/director-problem.png",
          },
          {
            title: "1-qadam: Yoriqlar diagnostikasi",
            paragraphs: [
              "“Qaror → ijro → nazorat” zanjiridagi uzilishlar qayerda? Ko'pincha qarorlar yig'ilishlarda qabul qilinadi, lekin ular bajarilmaydi. Yoki nazorat haqiqatdan ajralgan - hisobotlar faktlarga to'g'ri kelmaydigan rasmni chizadi.",
              "Diagnostika shuni ko'rsatadi: kim nima uchun javobgar, javobgarlik qanday o'tkaziladi, ma'lumot qayerda yo'qoladi. Ushbu kartasiz har qanday yaxshilanishlar ko'r-ko'rona suratga olinadi.",
            ],
            image: "/blog/steps-alt-1.png",
          },
          {
            title: "2-qadam: Boshqaruv ritmi",
            paragraphs: [
              "Haftalik rejalashtirish uchrashuvlari, oylik sharhlar, har chorakda strategik sessiyalar. Ritm bashoratlilikni yaratadi: jamoa qachon va nimani muhokama qilishni va qanday qarorlar qabul qilishni biladi.",
              "Ritm \"uchrashuv uchun yig'ilish\" emas. Har bir tadbirning maqsadi, kun tartibi va kutilgan natijasi bor. Aks holda, bu shunchaki vaqtni behuda sarflash.",
            ],
            image: "/blog/steps-alt-2.png",
          },
          {
            title: "3-qadam: SOP va nazorat ro'yxatlari",
            paragraphs: [
              "Jarayonlar yangi odam kirishi va topshiriqni ko'rsatmalarga muvofiq bajarishi uchun tasvirlangan bo'lishi kerak. SOP byurokratiya emas, balki takrorlanuvchanlik kafolati.",
              "Tekshirish ro'yxatlari muhim bosqichlarni qayd etadi. Ular fikrlashning o'rnini bosmaydi, lekin unutilgan qadamlarni yo'q qiladi va \"Men buni siz qilgan deb o'yladim\".",
            ],
            image: "/blog/sop-step-3.png",
          },
          {
            title: "4 va 5-qadam: asboblar paneli va bajarilishini nazorat qilish",
            paragraphs: [
              "Raqamlarda bitta \"haqiqat\": moliya, huni, operatsion tizim. Excel fayllarisiz va \"har kim o'z yo'lida hisoblaydi\". Boshqaruv panellari tafsilotlarga sho'ng'imasdan egasiga shaffoflikni beradi.",
              "Ijroni nazorat qilish - bu \"ular buni amalga oshirishiga umid qilish\" emas, balki muddatlar, holatlar va kuchayishlarni qayd etish tizimi. Vazifa kechikdimi? Tizim signallari. Javobgar shaxs aniq.",
            ],
            image: "/blog/step-4-5-dashboards.png",
          },
        ],
        cta: { label: "Tekshirish ro'yxatini yuklab olish", href: "/contacts" },
      },
      {
        slug: "diagnostika-problemy-biznesa",
        category: "Diagnostika",
        categoryKey: "diagnostics",
        title: "Diagnostika: haqiqiy biznes muammolarini qanday aniqlash mumkin",
        description: "Nima uchun \"hamma narsa yomon\" kamdan-kam hollarda to'g'ri va tizimdagi haqiqiy muvaffaqiyatsizlik nuqtalarini qanday topish mumkin.",
        image: "/blog/diagnostics-analysis.png",
        sections: [
          {
            title: "Diagnostika nima uchun kerak?",
            paragraphs: [
              "Diagnostika \"aybdorni topish\" haqida emas. Bu tizim qayerda ishlamay qolganini tushunish haqida. Ko'pincha egasi \"nimadir noto'g'ri\" deb hisoblaydi: daromad bor, lekin foyda yo'qoladi; Buyruq ishlayotganga o'xshaydi, ammo natija yo'q. Sababi loyqa.",
              "Tashxissiz har qanday davolanish taxminiydir. Siz odamlarni o'zgartirishingiz, yangi vositalarni kiritishingiz mumkin, ammo muammoning ildizi topilmasa, alomatlar qaytadi.",
            ],
            image: "/blog/diagnostics-why-search.png",
          },
          {
            title: "Nosozlik signallarining uch turi",
            paragraphs: [
              "Raqamlardagi tartibsizlik birinchi signaldir. Agar turli bo'limlarda moliya boshqacha hisoblansa, bitta rasm yo'q. Qarorlar ko'r-ko'rona qabul qilinadi, prognozlar faktlarga mos kelmaydi.",
              "Odamlarga qaramlik ikkinchi o'rinda turadi. Bir kishi asosiy jarayonni boshida saqlasa, biznes mo'rt bo'ladi. Uning ketishi, kasalligi yoki charchashi = butun zanjirning buzilishi.",
              "Hunining shaffofligi uchinchi. Mijozlar qayerdan keladi? Qo'rg'oshin qancha turadi? Har bir bosqichda konvertatsiya darajasi qanday? Javoblar yo'q - faqat sezgi va umid.",
            ],
            image: "/blog/diagnostics-signals.png",
          },
          {
            title: "Diagnostik xarita sifatida oltita ustun",
            paragraphs: [
              "BBI diagnostikani oltita ustun prizmasi orqali olib boradi: operatsiyalar, marketing, savdo, moliya, HR, yuridik. himoya qilish. Har bir ustun xavf zonasi va o'sish nuqtasidir.",
              "Birida muvaffaqiyatsizlik boshqalarga olib keladi. Sotishdagi muammolar marketing yoki operatsiyalar natijasi bo'lishi mumkin. Diagnostika munosabatlar va ustuvorliklarni ko'rsatadi.",
            ],
            image: "/blog/diagnostics-pillars-map.png",
          },
        ],
        cta: { label: "Diagnostika bilan boshlang", href: "/contacts" },
      },
      {
        slug: "ekonomika-kanalov-marketing",
        category: "Marketing",
        categoryKey: "marketing",
        title: "Kanal iqtisodiyoti: byudjetni behuda sarflashni qanday to'xtatish kerak",
        description: "\"Reklamani ishga tushiring va kuting\" o'rniga end-to-end analitika, CAC, LTV va boshqariladigan o'sish.",
        image: "/blog/ekonomika-kanalov-reshenie.png",
        sections: [
          {
            title: "Nima uchun raqamlarsiz marketing lotereya",
            paragraphs: [
              "Kanal iqtisodiyotisiz marketing - bu lotereya. Pul Yandex, Google, ijtimoiy tarmoqlarga ketadi, ammo qaysi kanal to'lashi va qaysi biri oddiygina byudjetni \"yeyishi\" aniq emas. Zararli CAC bilan daromadning o'sishi muvaffaqiyat illyuziyasidir.",
              "\"Biz marketingga sarmoya kiritamiz\" - bu strategiya emas. Siz bilishingiz kerak: har bir kanaldan qo'rg'oshin qancha turadi, mijozning LTV qiymati qancha, kanal o'z hayoti davomida o'zini o'zi to'laydimi yoki yo'qmi.",
            ],
            image: "/blog/marketing-bez-tsifr-lotereya.png",
          },
          {
            title: "Asos sifatida yakuniy tahlil",
            paragraphs: [
              "Bosishdan to to'lovgacha: qaysi kanal olib bordi, qo'rg'oshin qancha turadi, mijozning LTV qancha. Yakuniy tahlillarsiz qarorlar his-tuyg'ular va hisobotlar asosida turli metodologiyalar bilan qabul qilinadi.",
              "Yakuniy tahlilni o'rnatish birinchi qadamdir. Shundan keyingina kanal boshqaruvi va prognoz qilingan o'sish haqida gapirish mumkin.",
            ],
            image: "/blog/skvoznaya-analitika-barchart.png",
          },
          {
            title: "CAC, LTV va boshqariladigan o'sish",
            paragraphs: [
              "CAC (mijozni sotib olish qiymati) va LTV (umr bo'yi qiymati) asosiy ko'rsatkichlardir. Agar CAC LTV dan oshsa, o'sish foydasiz bo'ladi. Hatto daromad o'sishi bilan ham.",
              "Boshqariladigan o'sish - natijani taxmin qilish mumkin bo'lganda. Kanalni ishga tushirdi, o'lchadi, o'lchadi yoki o'chirildi. \"Umid qilamanki, otadi\" va \"yana bir oy kutamiz\".",
            ],
            image: "/blog/cac-ltv-upravlyaemyj-rost.png",
          },
        ],
      },
      {
        slug: "sistemnye-prodazhi",
        category: "Sotish",
        categoryKey: "sales",
        title: "\"Yulduzlar\"siz tizimli savdo",
        description: "Menejerning xarizmasiga qarab o'rniga standartlar, skriptlar va CRM.",
        image: "/blog/sistemnye-prodazhi-process-chain.png",
        sections: [
          {
            title: "Tizim savdosi nima",
            paragraphs: [
              "Tizimli savdo - natija ma'lum bir shaxsga bog'liq bo'lmaganda. Aloqa standartlari, skriptlar, CRM va huni nazorati takrorlanadigan natijani yaratadi. Qisqa vaqt ichida yangi menejer kelib, maqbul raqamlarni joylashtirishi mumkin.",
              "Bu \"ijodkorlikni o'ldirish\" yoki \"hammani bir xil gapirishga majbur qilish\" haqida emas. Biz baza haqida gapiramiz: qo'rg'oshinni qanday qayta ishlash, hunining qaysi bosqichlari, uni etkazib berishga qanday o'tkazish.",
            ],
            image: "/blog/sistemnye-prodazhi-checklist.png",
          },
          {
            title: "\"Yulduzlar\" muammosi",
            paragraphs: [
              "Bitta menejer bitimlarning 80 foizini bajaradi - tanish rasm. Uning ketishi, ta'til yoki charchash = falokat. Biznes bir kishining garovidir.",
              "Tizim natijalarni yo'qotmasdan odamlarni o'zgartirish va almashtirish imkonini beradi. \"Boshqa yulduzni topish\" uchun emas, balki natija xarizma emas, balki jarayondan kelib chiqadigan huni qurish uchun.",
            ],
            image: "/blog/sistemnye-prodazhi-zvezdy-lovushka.png",
          },
          {
            title: "CRM boshqaruv vositasi sifatida",
            paragraphs: [
              "CRM bu “hisobotlar uchun asos” emas, balki boshqaruv vositasidir. Huni, qo'rg'oshinni qayta ishlash vaqti, bosqichlarda konvertatsiya qilish. Hamma narsani o'lchash mumkin. Kim tiqilib qoldi, qayerda darboğaz, kim o'z vaqtida yo'qotmaydi.",
              "BBI savdoni tizim sifatida quradi: birinchi kontakt skriptlaridan tortib yetkazib berishgacha. \"Iqtidorga tayanish\" emas, balki leverage.",
            ],
            image: "/blog/crm-element-kontrolya.png",
          },
        ],
      },
      {
        slug: "finansovaya-prozrachnost",
        category: "Moliya",
        categoryKey: "finance",
        title: "Moliyaviy shaffoflik: raqamlarda bitta haqiqat",
        description: "Egasi turli bo'limlarning versiyalarini emas, balki haqiqiy rasmni ko'rishi uchun buxgalteriya hisobini qanday yig'ish kerak.",
        image: "/blog/finansovaya-prozrachnost-podpis.png",
        sections: [
          {
            title: "\"Bir haqiqat\" nimani anglatadi?",
            paragraphs: [
              "Raqamlarda bitta haqiqat shundaki, moliya bir xilda, \"CFO versiyasi\" va \"OS versiyasi\"siz ko'rib chiqiladi. Egasi bitta rasmni ko'radi: daromad, xarajatlar, marja, pul oqimi.",
              "Hozirgi kunda bu ko'pincha boshqacha sodir bo'ladi: moliya bir raqamni beradi, operatsiyalar boshqasini beradi, savdo uchinchisini beradi. Uchrashuvda \"haqiqat\" ning uchta versiyasi mavjud. Tumanda qarorlar qabul qilinadi.",
            ],
            image: "/blog/finansovaya-odna-pravda.png",
          },
          {
            title: "Parchalangan buxgalteriya hisobi va uning oqibatlari",
            paragraphs: [
              "Har bir bo'lim boshqacha hisoblaydi. Excel fayllari ko'payadi, metodologiyalar farqlanadi. Natijada bir-biriga zid bo'lgan hisobotlar va noto'g'ri qarorlar.",
              "Buxgalteriya hisobi standartlari, xaridlarni nazorat qilish, xarajatlar, marjalar - barchasi yagona tizimda bo'lishi kerak. Boshqa hisobotlar emas, asboblar paneli.",
            ],
            image: "/blog/finansovaya-fragmentirovannyj-uchet.png",
          },
          {
            title: "Moliya ustunlar asosi sifatida",
            paragraphs: [
              "Moliya BBIning oltita ustunidan biridir. Bu erda shaffofliksiz, qolgan ustunlar qum ustiga qurilgan. Moliyaviy rasmni ko'rmasdan marketing, savdo yoki operatsion qarorlar qabul qilish mumkin emas.",
            ],
            image: "/blog/finansy-osnova-stolpov.png",
          },
        ],
      },
      {
        slug: "hr-kak-sistema",
        category: "HR",
        categoryKey: "hr",
        title: "HR tizim sifatida: \"odamlarni toping\" emas, balki barqarorlikni yarating",
        description: "Rollar, mas'uliyat sohalari, ishga kirishish va jamoa o'zgarganda buzilmaydigan madaniyat.",
        image: "/blog/hr-kak-sistema-ustojchivost.png",
        sections: [
          {
            title: "HR nafaqat ishga qabul qilish bilan bog'liq",
            paragraphs: [
              "HR bu \"yaxshi odamlarni topish\" haqida emas. Biz tizim haqida gapiramiz: rollar, mas'uliyat sohalari, bortga kirish, madaniyat. Jamoa takrorlanadigan bo'lishi kerak. Agar asosiy shaxs ketgan bo'lsa, jarayon aniq qoidalarga muvofiq boshqasiga o'tkazilishi mumkin.",
              "Tizimsiz tanlash bir martalik echimlarni beradi. Odamlarni almashtirishda tizim barqaror.",
            ],
            image: "/blog/hr-ne-tolko-podbor.png",
          },
          {
            title: "RACI, ko'rsatmalar va chegaralar",
            paragraphs: [
              "RACI, ish ta'riflari, aniq chegaralar - bu \"almashib bo'lmaydigan\" xodimlarga qaramlikni kamaytiradi. Har qanday jarayonni tasvirlash va etkazish mumkin.",
              "Agar \"faqat Vasya qanday ishlashini bilsa\", bu Vasyaning noyob qobiliyatlari haqida emas, balki hujjatlashtirilgan jarayonlarning etishmasligi haqida.",
            ],
            image: "/blog/crm-instrument-kontrolya.png",
          },
          {
            title: "Bortga kirish va madaniyat",
            paragraphs: [
              "Onboarding - yangi odam tizimga qanday kiradi. Agar u \"o'zini o'zi aniqlashi\" yoki \"boshqalar nima qilayotganini ko'rishi\" kerak bo'lsa, tizim buzilgan. Onboarding tuzilgan bo'lishi kerak.",
              "HR ustun sifatida katta rasmning bir qismidir. Barqaror jamoa bo'lmasa, operatsiyalar, savdo va marketing xavf ostida ishlaydi. Bir qadam qolganda zanjir uziladi.",
            ],
            image: "/blog/hr-onboarding-kultura.png",
          },
        ],
      },
    ],
  },
  contacts: {
    hero: {
      eyebrow: "Skrining",
      title: "Ko'rish uchun ro'yxatdan o'ting",
      description:
        "Shaklni to'ldiring - biz 24 soat ichida siz bilan bog'lanamiz va miqyos, o'sish sohalari va hamkorlik imkoniyatlarini muhokama qilamiz.",
    },
    form: {
      name: "Ism",
      company: "Kompaniya/biznes",
      contact: "Telefon yoki messenjer",
      turnoverTeamSize: "Aylanma yoki jamoa hajmi (ixtiyoriy)",
      request: "Murojaat haqida qisqacha",
      submit: "Yuborish",
      successMessage: "Ariza yuborildi. Tez orada siz bilan bog'lanamiz.",
      errorMessage: "Ariza topshirilmadi. Keyinroq qayta urinib ko'ring yoki bizga to'g'ridan-to'g'ri yozing.",
    },
  },
  ui: {
    notFoundTitle: "Sahifa topilmadi",
    notFoundDescription: "Havolani tekshiring yoki asosiy sahifaga qayting.",
    notFoundHome: "Bosh sahifaga",
    searchPlaceholder: "Qidiruv",
    searchSubmit: "Toping",
    footerLogoAria: "BBI — bosh sahifaga",
    contactsConsentBeforeLink:
      "«Yuborish» tugmasini bosgan holda men ",
    contactsConsentLinkText: "shaxsiy ma'lumotlarimni qayta ishlashga rozilik beraman",
    contactsConsentAfterLink: ".",
    privacyModalCloseAria: "Maxfiylik siyosati oynasini yoping",
    privacyPageTitle: "Maxfiylik siyosati",
    privacyModalTitle: "Maxfiylik siyosati",
  },
};
