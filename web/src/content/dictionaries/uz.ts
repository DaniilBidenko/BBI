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
  footer: {
    copyright: "[UZ] BBI (Bold Brands International). Barcha huquqlar himoyalangan.",
  },
};
