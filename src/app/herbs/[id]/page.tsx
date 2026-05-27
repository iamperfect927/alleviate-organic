import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { herbs } from '../../../data/herbs';

type Props = {
  params: Promise<{ id: string }>;
};

// 1. Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const herb = herbs.find((h) => h.id === id);
  if (!herb) {
    return {
      title: "Herb Not Found | Alleviate Organic",
      description: "The requested African herbal powder could not be found.",
    };
  }

  const ailmentLabel =
    herb.targetAilment === 'piles-hemorrhoids'
      ? 'Piles / Hemorrhoids Relief'
      : 'Menstrual Cramps Relief';

  return {
    title: `${herb.name} (${herb.scientificName}) | Alleviate Organic`,
    description: `Alleviate Organic | Natural Relief for ${ailmentLabel}. 100% raw, single-ingredient plant powder. Zero additives. Sourced ethically from Africa.`,
  };
}

// 2. Generate Static Params for Ultra-Fast Build Performance
export async function generateStaticParams() {
  return herbs.map((herb) => ({
    id: herb.id,
  }));
}

// 3. Dynamic Page Component
export default async function HerbPage({ params }: Props) {
  const { id } = await params;
  const herb = herbs.find((h) => h.id === id);

  if (!herb) {
    notFound();
  }

  const ailmentName =
    herb.targetAilment === 'piles-hemorrhoids'
      ? 'Piles / Hemorrhoids'
      : 'Menstrual Cramps';

  return (
    <div className="py-12 md:py-20 bg-brand-bgLight flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-stone-600 hover:text-brand-accent mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Apothecary</span>
        </a>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Card & 4-Quadrant Purity Grid */}
          <div className="lg:col-span-6 space-y-10">
            {/* Visual Card */}
            <div className="relative h-96 w-full rounded-2xl bg-brand-bgCard border border-stone-200/60 flex items-center justify-center overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/10 to-transparent"></div>
              
              {/* Concentric rings */}
              <div className="absolute w-64 h-64 border border-brand-dark/5 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border border-brand-dark/10 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-32 h-32 border border-brand-dark/15 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-brand-dark/60" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Herb name overlay */}
              <div className="text-center z-10 px-6">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-brand-accent block mb-2">
                  Ethically Sourced
                </span>
                <p className="font-serif text-3xl font-bold text-brand-dark mb-1">
                  {herb.name}
                </p>
                <p className="text-xs italic text-stone-500">
                  {herb.scientificName}
                </p>
              </div>

              {/* Purity Badge */}
              <div className="absolute top-6 right-6 bg-brand-dark text-stone-50 font-mono text-[9px] tracking-widest uppercase px-4 py-2 rounded-full font-bold shadow-md">
                100% Pure Plant Powder
              </div>
            </div>

            {/* 4-Quadrant Purity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-bgCard p-6 md:p-8 rounded-2xl border border-stone-200/60">
              {[
                { title: 'The Plant Origin', desc: 'Ethically wild-harvested single-species botanicals, sourced from native African soils to ensure peak biological activity.' },
                { title: 'The Processing', desc: 'Dehydrated slowly under natural sunlight and ground using low-friction stone mills. No extreme heat, no radiation.' },
                { title: 'The Final Form', desc: '100% raw, fine botanical powder. Preserves all organic co-factors and secondary metabolites in their natural state.' },
                { title: 'Zero Hidden Additives', desc: 'Absolutely no binding agents, flowing agents, silicon dioxide, preservatives, fillers, or blending ingredients.' },
              ].map(({ title, desc }) => (
                <div key={title} className="space-y-2">
                  <h4 className="font-serif text-sm font-bold text-brand-dark flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span>{title}</span>
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Details, Price, CTA */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header info */}
            <div>
              <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">
                  Targeted Ailment: {ailmentName}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
                {herb.name}
              </h1>
              <p className="text-sm italic text-stone-500 mt-1">
                {herb.scientificName}
              </p>
              <div className="flex items-baseline mt-4 space-x-4">
                <span className="font-mono text-3xl font-bold text-brand-dark">
                  {herb.price.toLocaleString('en-US')} FCFA
                </span>
                <span className="text-xs text-stone-500 tracking-wide">
                  / 100g Resealable Premium Pouch
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-stone-600">
              {herb.description}
            </p>

            {/* Call to action */}
            <div>
              <a
                href={`/checkout?product=${herb.id}`}
                className="inline-block w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-semibold text-xs tracking-wider uppercase py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              >
                Proceed to Order
              </a>
            </div>

            {/* Key Benefits */}
            <div className="border-t border-stone-200/60 pt-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">
                Key Traditional Benefits
              </h3>
              <ul className="space-y-3.5">
                {herb.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs text-stone-700">
                    <svg className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Instructions */}
            <div className="border-t border-stone-200/60 pt-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">
                Traditional Preparation & Dosage Instructions
              </h3>
              <div className="p-5 rounded-xl bg-brand-bgCard border border-stone-200/60 text-xs text-stone-600 leading-relaxed">
                <p>{herb.traditionalUsage}</p>
                <div className="mt-4 flex items-center space-x-2 text-[10px] text-stone-500 font-semibold tracking-wider uppercase">
                  <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Processing: {herb.processingMethod}</span>
                </div>
              </div>
            </div>

            {/* Purity Guarantee Box */}
            <div className="border-t border-stone-200/60 pt-6">
              <div className="p-5 rounded-xl border border-brand-alertTxt/20 bg-brand-alertBg text-xs space-y-2">
                <h4 className="font-bold text-brand-alertTxt uppercase tracking-widest text-[10px] flex items-center space-x-1.5">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Purity & Anti-Additive Pledge</span>
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  {herb.purityGuarantee} Sourced strictly as a single botanical ingredient. We never formulate, alter, or synthesize compounds. What is harvested is exactly what you receive.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
