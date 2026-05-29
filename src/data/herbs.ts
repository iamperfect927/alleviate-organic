export interface Herb {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  targetAilment: 'piles-hemorrhoids' | 'menstrual-cramps' | 'other';
  description: string;
  benefits: string[];
  traditionalUsage: string;
  processingMethod: string;
  purityGuarantee: string;
}

export const herbs: Herb[] = [
  {
    id: "alleviate-organic-pile",
    name: "Organic Pile Relief",
    scientificName: "Nauclea latifolia",
    price: 20000,
    targetAilment: "piles-hemorrhoids",
    description: "Our raw root powder is utilized to target chronic vascular swelling, alleviate localized pelvic discomfort, and promote structural tone in blood vessels.",
    benefits: [
      "Reduces vascular swelling and localized pelvic discomfort",
      "Promotes healthy microcirculation and blood vessel integrity",
      "Soothes inflamed pelvic membranes naturally",
      "Supports bowel regularity and eases bowel movements"
    ],
    traditionalUsage: "Mix 1/2 teaspoon into warm water, herbal tea, or light porridge once daily in the morning. Drink plenty of water throughout the day.",
    processingMethod: "Harvested wild, washed with pure spring water, sun-dried, and stone-ground into a fine powder. Never heated, never filtered.",
    purityGuarantee: "100% pure root powder. Zero binders, zero flow agents, zero added synthetic ingredients."
  },
  {
    id: "alleviate-organic-mentrual-cramps",
    name: "Organic Menstrual Cramps Relief",
    scientificName: "Siphonochilus aethiopicus",
    price: 22000,
    targetAilment: "menstrual-cramps",
    description: "Our single-ingredient root powder is celebrated for its natural antispasmodic properties, helping to soothe intense uterine muscle contractions, ease pelvic tension, and restore natural flow during cycles.",
    benefits: [
      "Relieves intense uterine muscle spasms and cramps",
      "Promotes healthy, balanced pelvic blood circulation",
      "Soothes lower back and abdominal tension",
      "Supports mental clarity and balances cycle fatigue"
    ],
    traditionalUsage: "Stir 1/2 teaspoon into a cup of warm water or organic tea. Consume twice daily, starting 2 days prior to your monthly cycle and during active discomfort.",
    processingMethod: "Ethically wild-harvested, cleaned, sun-dried at low temperatures, and stone-ground to preserve volatile therapeutic oils.",
    purityGuarantee: "100% pure rhizome powder. Absolutely zero fillers, blending agents, or chemical preservatives."
  }
];
