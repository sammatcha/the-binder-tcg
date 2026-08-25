import type { TCGSet } from "./types";

export const pokemonSets: TCGSet[] = [
   {
    game: "pokemon",
    name: "30th Celebration",
    slug: "30th-celebration",
    code: "30C",
    era: "Scarlet & Violet",
    type: "anniversary",
    released: "September 16, 2026",
    cardCount: 150,
    products: [
      {
        layout: "full",
        product: {
          slug: "etb",
          name: "Elite Trainer Box",
          back: "etb-back.webp",
        },
      },
      {
        layout: "pair",
        products: [
          { slug: "tech-sticker-lucario", name: "Tech Sticker" },
          { slug: "tech-sticker-exeg" },
        ],
      },
      {
        layout: "pair",
        products: [
          { slug: "2-pk-blister", name: "2-Pack Blister" },
          { slug: "knockout-collection", name: "Knockout Collection" },
        ],
      },
      { layout: "full", product: { slug: "poster-collection", name: "Poster Collection" } },
      {
        layout: "pair",
        products: [
          { slug: "ex-box-sylveon", name: "Ex Box" },
          { slug: "ex-box-greninja" },
        ],
      },
      {
        layout: "pair",
        products: [
          { slug: "binder-collection", name: "Binder Collection" },
          { slug: "booster-bundle", name: "Booster Bundle" },
        ],
      },
      { layout: "full", product: { slug: "mini-tins", name: "Mini Tins" } },
      {
        layout: "pair",
        products: [
          { slug: "battle-deck-espeon", name: "Battle Deck" },
          { slug: "battle-deck-umbreon" },
        ],
      },
      { layout: "full", product: { slug: "ditto-premium-collection", name: "Ditto Premium Collection" } },
      {
        layout: "pair",
        products: [
          { slug: "ultra-premium-collection-day", name: "Ultra Premium Collection Day" },
          { slug: "ultra-premium-collection-night", name: "Ultra Premium Collection Night" },
        ],
      },
      {
        layout: "pair",
        products: [
          { slug: "figure-collection-mew", name: "Figure Collection Mew" },
          { slug: "figure-collection-mew-two", name: "Figure Collection MewTwo" },
        ],
      },
    ],
    
    
  },
  // {
  //   game: "pokemon",
  //   name: "Destined Rivals",
  //   slug: "destined-rivals",
  //   code: "DRI",
  //   era: "Scarlet & Violet",
  //   type: "main",
  //   released: "May 30, 2025",
  //   cardCount: 244,
  // },
  // {
  //   game: "pokemon",
  //   name: "Journey Together",
  //   slug: "journey-together",
  //   code: "JTG",
  //   era: "Scarlet & Violet",
  //   type: "main",
  //   released: "Mar 28, 2025",
  //   cardCount: 159,
  // },
  // {
  //   game: "pokemon",
  //   name: "Prismatic Evolutions",
  //   slug: "prismatic-evolutions",
  //   code: "PRE",
  //   era: "Scarlet & Violet",
  //   type: "special",
  //   released: "Jan 17, 2025",
  //   cardCount: 131,
  // },
  // {
  //   game: "pokemon",
  //   name: "Surging Sparks",
  //   slug: "surging-sparks",
  //   code: "SSP",
  //   era: "Scarlet & Violet",
  //   type: "main",
  //   released: "Nov 8, 2024",
  //   cardCount: 252,
  // },
  // {
  //   game: "pokemon",
  //   name: "Paldean Fates",
  //   slug: "paldean-fates",
  //   code: "PAF",
  //   era: "Scarlet & Violet",
  //   type: "special",
  //   released: "Jan 26, 2024",
  //   cardCount: 245,
  // },
  // {
  //   game: "pokemon",
  //   name: "Crown Zenith",
  //   slug: "crown-zenith",
  //   code: "CRZ",
  //   era: "Sword & Shield",
  //   type: "special",
  //   released: "Jan 20, 2023",
  //   cardCount: 230,
  // },
  // {
  //   game: "pokemon",
  //   name: "Celebrations",
  //   slug: "celebrations",
  //   code: "CEL",
  //   era: "Sword & Shield",
  //   type: "anniversary",
  //   released: "Oct 8, 2021",
  //   cardCount: 50,
  // },
  // {
  //   game: "pokemon",
  //   name: "Cosmic Eclipse",
  //   slug: "cosmic-eclipse",
  //   code: "CEC",
  //   era: "Sun & Moon",
  //   type: "special",
  //   released: "Nov 1, 2019",
  //   cardCount: 236,
  // },
];
