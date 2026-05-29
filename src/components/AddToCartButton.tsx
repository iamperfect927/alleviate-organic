'use client';

import { useCart } from '../context/CartContext';
import { Herb } from '../data/herbs';

interface AddToCartButtonProps {
  herb: Herb;
}

export default function AddToCartButton({ herb }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(herb)}
      className="inline-block w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-semibold text-xs tracking-wider uppercase py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 cursor-pointer"
    >
      Add to Apothecary Bag +
    </button>
  );
}
