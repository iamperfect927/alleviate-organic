import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import { Suspense } from "react";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: {
    template: "%s | Alleviate Organic",
    default: "Alleviate Organic | 100% Pure African Botanicals",
  },
  description:
    "Discover single-ingredient, 100% raw African herbal powders targeting piles, hemorrhoids, and menstrual cramps. Ethically wild-harvested and stone-ground with zero additives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-brand-bgLight text-stone-900">
        <CartProvider>
          {/* Global Navigation Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-grow flex flex-col">{children}</main>

          {/* Global Footer & Medical Disclaimer */}
        <footer className="w-full border-t border-stone-250/40 bg-brand-bgCard dark:bg-stone-900/10 dark:border-stone-850 pt-16 pb-12">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-200/60 dark:border-stone-800/40">
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-lg font-bold tracking-tight text-brand-dark dark:text-white">
                    Alleviate <span className="text-brand-accent font-medium">Organic</span>
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
                  Dedicated to preserving and sharing the unadulterated healing power of single-ingredient African botanicals. Wild-harvested, sun-dried, and stone-ground to retain 100% therapeutic integrity.
                </p>
              </div>
              <div className="md:col-span-3 space-y-4">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-600 dark:text-stone-400">
                  Quick Navigation
                </h4>
                <ul className="space-y-2.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                  <li>
                    <a href="/#herbs-section" className="hover:text-brand-accent transition-colors">
                      Browse Herbal Powders
                    </a>
                  </li>
                  <li>
                    <a href="/#our-mission" className="hover:text-brand-accent transition-colors">
                      The Purity Manifesto
                    </a>
                  </li>
                  <li>
                    <a href="/#testimonials" className="hover:text-brand-accent transition-colors">
                      Customer Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 space-y-4">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-600 dark:text-stone-400">
                  Contact Support
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  support@alleviateorganic.com
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  +237 657447445
                </p>
              </div>
            </div>

            {/* Compliance Medical Disclaimer */}
            <div className="my-10 p-6 rounded-xl bg-brand-alertBg border border-amber-200/80 text-brand-alertTxt text-[11px] leading-relaxed space-y-3 shadow-xs">
              <p className="font-bold uppercase tracking-wider text-[10px] flex items-center space-x-1.5 text-brand-alertTxt">
                <svg className="w-4 h-4 shrink-0 text-brand-alertTxt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Legal Medical Disclaimer & Sourcing Origin</span>
              </p>
              <p className="text-stone-700/95">
                Our single-ingredient herbal powders are 100% raw, pure, and ethically wild-harvested directly from the nutrient-dense volcanic soils of Southwest Cameroon, surrounding the active volcanic zones of Mount Fako. These traditional formulations have not been evaluated by the Ministry of Public Health of Cameroon (MINSANTE), the Food and Drug Administration (FDA), or any other local healthcare regulatory authorities. These products are not intended to diagnose, treat, cure, or prevent any disease. The traditional information supplied on this platform is for educational purposes only and does not constitute professional medical advice.
              </p>
              <p className="text-stone-700/95">
                Please consult a licensed healthcare professional or medical practitioner before incorporating any raw botanicals into your health routine, especially if you are pregnant, nursing, taking prescription medications, or managing chronic pelvic or vascular conditions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-550">
              <p>© {new Date().getFullYear()} Alleviate Organic. All rights reserved.</p>
              <p className="mt-2 sm:mt-0 font-medium tracking-wide">100% PURE BOTANICAL GUARANTEE</p>
            </div>
          </div>
          </footer>

          {/* Dynamic Context-Aware WhatsApp Float Button */}
          <Suspense fallback={null}>
            <WhatsAppButton />
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
