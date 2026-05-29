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
    productPurchased: "Organic Pile Relief",
    verifiedPurchase: true
  },
  {
    id: "t2",
    name: "Zola M.",
    location: "Johannesburg, South Africa",
    rating: 5,
    text: "My menstrual cramps were so severe that I regularly missed work. The African Wild Ginger Root Powder has changed my life. I start drinking it two days before my cycle, and my spasms are almost non-existent. No pills, just natural relief.",
    productPurchased: "Organic Menstrual Cramps Relief",
    verifiedPurchase: true
  },
  {
    id: "t3",
    name: "Fatoumata D.",
    location: "Dakar, Senegal",
    rating: 5,
    text: "Finding actual, unadulterated plant powders is very difficult today. Alleviate Organic's commitment to single-ingredient purity is obvious the second you smell the fresh, earthy aroma of their powders. The quality is unmatched.",
    productPurchased: "Organic Pile Relief",
    verifiedPurchase: true
  },
  {
    id: "t4",
    name: "Chioma A.",
    location: "Enugu, Nigeria",
    rating: 5,
    text: "The relief was almost instant. I struggle with severe period pain that makes it hard to even stand up. Drinking the Wild Ginger tea on the first day of my period completely eased the tightness. Incredible natural formula!",
    productPurchased: "Organic Menstrual Cramps Relief",
    verifiedPurchase: true
  },
  {
    id: "t5",
    name: "Kwame O.",
    location: "Accra, Ghana",
    rating: 5,
    text: "I have tried multiple over-the-counter products for hemorrhoids, but nothing compares to this pure, single-ingredient African Peach Root. It reduces the inflammation and discomfort within days without any side effects.",
    productPurchased: "Organic Pile Relief",
    verifiedPurchase: true
  },
  {
    id: "t6",
    name: "Elena B.",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Alleviate Organic is the real deal. No binders, no fillers, and the earthy aroma alone tells you it's 100% pure raw plant root. It is rare to find this quality in modern wellness shops. Highly recommended!",
    productPurchased: "Organic Menstrual Cramps Relief",
    verifiedPurchase: true
  }
];
