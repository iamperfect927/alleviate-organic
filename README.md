# Alleviate Organic Ltd.

A high-performance, conversion-optimized, and beautifully designed Next.js web application for **Alleviate Organic**, a premium wellness brand presenting 100% pure, single-ingredient African herbal powders ethically wild-harvested from the rich, volcanic soils of **Buea, Southwest Region, Cameroon**.

This digital storefront introduces an immersive, premium lookbook-style editorial flow targeting specific conditions (Piles/Hemorrhoids and Menstrual Cramp Spasms) with zero additives, zero concoctions, and absolute clinical purity.

---

## 🍃 Brand Mission & Sourcing Integrity

Unlike complex multi-herb commercial capsule formulations that rely on synthetic excipients, binders, or artificial fillers, **Alleviate Organic** stands for absolute botanical transparency:
* **Mount Fako Volcanic Origin**: All raw plant powders are ethically sourced and wild-harvested directly from the mineral-dense volcanic soils surrounding Mount Fako (Mount Cameroon) and Southwest Cameroon's active volcanic fertile zones.
* **Cold Stone-Ground Hand Processing**: Harvested roots and rhizomes are washed with pure mountain spring water, sun-dehydrated at low temperatures (below 40°C), and stone-ground by hand to fully preserve fragile volatile organic oils and therapeutic alkaloids.
* **100% Single-Ingredient Guarantee**: Absolutely zero fillers, blending agents, flow chemicals (such as silicon dioxide or magnesium stearate), or synthetic concoctions.

---

## 🎨 Professional UI/UX & Conversion Design System

Built under a premium editorial aesthetic designed to inspire clinical trust and maximize landing-page conversion rates:
* **Glassmorphic Sticky Navigation**: A compact global navbar (`sticky top-0 z-50`) with rich backdrop-blur filters (`backdrop-blur-md`) and responsive padding that rolls seamlessly over body text.
* **Interactive Hover Links**: Dynamic header links utilizing elegant vector underline transitions:
  ```css
  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left
  ```
* **Alternating Section Rhythm**: Guided scroll sequence designed to keep visual momentum alive without layout monotony:
  1. **Hero Header** (`bg-brand-bgLight`) — Left-aligned 12-column grid displaying the primary targeted value proposition.
  2. **Purity Manifesto Grid** (`bg-white`) — Alternating soft light cards (`bg-brand-bgLight`) highlighting single-ingredient stone-ground processing.
  3. **Apothecary Product Grid** (`bg-brand-bgLight`) — A beautiful, interactive, filter-driven grid showcasing available powders, prices, and target ailments.
  4. **Parallax Trust Banner** (`bg-fixed emerald overlay`) — High-contrast full-bleed panoramic Scientific Purity Promise.
  5. **Verified Testimonials Grid** (`bg-white`) — Social proof grid showcasing customer outcomes.
  6. **Physical HQ Contact Split** (`bg-brand-bgLight`) — Split block displaying a stateful contact form and corporate details.
* **Premium Micro-Animations**: Features smooth staggered landing-page transitions (`animate-fade-in-up`, `animate-fade-in-scale`, `animate-glow-expand`) and card elevations (`hover:shadow-xl hover:-translate-y-1`) that make the layout feel alive.
* **Mobile-First Responsiveness**: Stretches action buttons to finger-accessible touchscreen sizes (`w-full md:w-auto h-12`) and dynamically scales vertical gutters down to `py-12` on smartphones.
* **Vector Apothecary Favicon**: Renders a crisp vector brand icon directly from `src/app/icon.svg` featuring deep emerald layers and soft amber leaf waves.

---

## 🇨🇲 Localized Central African Market Integration

The storefront is fully customized to reflect its official headquarters in **Buea, Southwest Region, Cameroon**:
* **Corporate Coordinates**: Updated physical office layouts, electronic mail addresses, support operations (08:00 - 17:00 WAT), Cameroon public holiday rules, and support hotlines to **`+237 657447445`**.
* **Central African CFA Franc (FCFA/XAF)**: Standardized pricing variables to **FCFA** instead of USD across all page models, checkout calculations, and order receipts.
* **Tax & Shipping Rounding**: Established flat-rate local shipping at **`2,500 FCFA`** and integrated whole-integer rounding (`Math.round`) for the `5%` local VAT calculations, aligning with Central African currency subdivisions.
* **Direct WhatsApp Payments**: Integrates a client-side floating support button and a checkout manual dispatch fallback that auto-launches chats with **`+237 657447445`**, pre-filling complete order invoices (Order ID, products, totals) for manual bank transfer or mobile money resolution.
* **Volcanic Zone Compliance Disclaimer**: Upgraded footer disclaimers to protect local traditional medicine guidelines, referencing Mount Fako origins and regulatory oversight from the **Cameroonian Ministry of Public Health (MINSANTE)**.

---

## 🛠️ Technological Stack

* **Framework**: Next.js 16.2.6 (App Router Architecture, Static Site Generation)
* **Language**: TypeScript (Strict typing templates)
* **Styling**: Tailwind CSS (Tailwind v4 standard variable setups inside `src/app/globals.css`)
* **Assets**: Inline custom hand-crafted lightweight SVG graphics and optimized lookbook imagery

---

## 🚀 Running the Storefront Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) (v18+ recommended) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the interactive live application.

### 3. Compile Production Bundle
Next.js will generate static HTML files, optimize vector assets, and compile page endpoints:
```bash
npm run build
```

---

## 📄 Project Directories

```
alleviate-organic/
├── src/
│   ├── app/
│   │   ├── checkout/           # Stateful Checkout Page Route
│   │   ├── herbs/              # Dynamic Dynamic Product Lookbooks
│   │   │   └── [id]/page.tsx
│   │   ├── favicon.ico         # Legacy Favicon
│   │   ├── icon.svg            # Custom Apothecary Vector Favicon (Next.js auto-rendered)
│   │   ├── globals.css         # Tailwind v4 globals, custom themes, & entrance keyframes
│   │   ├── layout.tsx          # Global HTML Shell, Sticky Header, & Compliance Footer
│   │   └── page.tsx            # Homepage Hero, Filter Grid, & Physical Buea Addresses
│   ├── components/
│   │   ├── CheckoutForm.tsx    # Mock Payments & Pre-filled WhatsApp Invoice redirectors
│   │   ├── ContactForm.tsx     # Stateful botanist message dispatchers
│   │   └── WhatsAppButton.tsx  # Context-aware floating support button (+237)
│   └── data/
│       ├── herbs.ts            # Central Herbs Data Array (in FCFA)
│       └── testimonials.ts     # Verified Review Records
├── README.md                   # Project Documentation
├── package.json                # Project configurations & dev dependencies
└── tsconfig.json               # TypeScript rules
```

---

*Formulated by traditional integrity. Standardized by engineering excellence.*
