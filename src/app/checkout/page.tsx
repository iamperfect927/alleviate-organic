import type { Metadata } from 'next';
import { herbs } from '../../data/herbs';
import CheckoutForm from '../../components/CheckoutForm';

export const metadata: Metadata = {
  title: 'Secure Checkout | Alleviate Organic',
  description: 'Complete your order of raw African botanical powders through our compliance-safe secure checkout.',
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const productParam = resolvedSearchParams.product;
  const productId = typeof productParam === 'string' ? productParam : undefined;

  // Retrieve the selected product
  const herb = herbs.find((h) => h.id === productId);

  return (
    <div className="py-12 md:py-24 bg-stone-50/30 dark:bg-stone-900/5 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-500">
            Secure Gateway
          </span>
          <h1 className="font-serif text-3xl font-bold text-stone-900 dark:text-white mt-2">
            Alleviate Organic Checkout
          </h1>
          <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
            Please fill in your billing and shipping parameters. Choose credit card processing or compliance-safe WhatsApp direct invoice.
          </p>
        </div>

        {/* Checkout Main Form Container */}
        <div className="mt-8 max-w-5xl mx-auto">
          <CheckoutForm herb={herb} />
        </div>

      </div>
    </div>
  );
}
