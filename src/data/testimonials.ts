export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  productPurchased: string;
  verifiedPurchase: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amadi K.",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "I was highly skeptical at first, but after dealing with painful piles for over six months, I decided to try the African Peach Root. Within 4 days of daily morning tea, the vascular swelling and throbbing pain were reduced significantly. It has been a lifesaver.",
    productPurchased: "African Peach Root Powder",
    verifiedPurchase: true
  },
  {
    id: "t2",
    name: "Zola M.",
    location: "Johannesburg, South Africa",
    rating: 5,
    text: "My menstrual cramps were so severe that I regularly missed work. The African Wild Ginger Root Powder has changed my life. I start drinking it two days before my cycle, and my spasms are almost non-existent. No pills, just natural relief.",
    productPurchased: "African Wild Ginger Root Powder",
    verifiedPurchase: true
  },
  {
    id: "t3",
    name: "Fatoumata D.",
    location: "Dakar, Senegal",
    rating: 5,
    text: "Finding actual, unadulterated plant powders is very difficult today. Alleviate Organic's commitment to single-ingredient purity is obvious the second you smell the fresh, earthy aroma of their powders. The quality is unmatched.",
    productPurchased: "African Peach Root Powder",
    verifiedPurchase: true
  }
];
