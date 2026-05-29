'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Herb } from '../data/herbs';
import { useCart } from '../context/CartContext';

interface CheckoutFormProps {
  herb?: Herb | undefined;
}

export default function CheckoutForm({ herb }: CheckoutFormProps) {
  const { cart, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [orderId, setOrderId] = useState('');

  // Build the effective order items: prefer cart if it has items,
  // otherwise fall back to the single `herb` prop (direct link flow)
  const cartItems = cart.length > 0 ? cart : herb ? [{ herb, quantity: 1 }] : [];
  const subtotal = cart.length > 0 ? cartTotal : (herb ? herb.price : 0);
  const delivery = 2500; // Flat delivery rate in FCFA
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <svg className="w-16 h-16 text-stone-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h2 className="font-serif text-3xl text-brand-dark font-bold mb-3">Your Cart is Empty</h2>
        <p className="text-stone-600 max-w-md mx-auto mb-8">
          Please add one of our 100% natural, raw African herbal powders to your bag to proceed to checkout.
        </p>
        <a
          href="/#herbs-section"
          className="inline-block bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Browse Our Remedies
        </a>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const generatedOrderId = `AO-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedOrderId);
      setStatus('success');

      // Build itemized product list for the WhatsApp message
      const itemLines = cartItems
        .map((item) => `  • ${item.herb.name} x${item.quantity} — ${(item.herb.price * item.quantity).toLocaleString('en-US')} FCFA`)
        .join('\n');

      const message =
        `Hi Alleviate Organic, I would like to place an order. Details:\n\n` +
        `Order ID: ${generatedOrderId}\n\n` +
        `ITEMS ORDERED:\n${itemLines}\n\n` +
        `Subtotal: ${subtotal.toLocaleString('en-US')} FCFA\n` +
        `Delivery (Flat Rate): ${delivery.toLocaleString('en-US')} FCFA\n` +
        `TOTAL DUE: ${total.toLocaleString('en-US')} FCFA\n\n` +
        `CUSTOMER DETAILS:\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Shipping Address: ${formData.address}\n\n` +
        `Please send me your payment instructions/invoice. Thank you!`;

      const waUrl = `https://wa.me/237657447445?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');

      // Clear the cart after successful order submission
      clearCart();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-stone-200/60 rounded-2xl p-8 md:p-12 text-center shadow-lg">
        <div className="w-16 h-16 bg-brand-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl text-brand-dark font-bold mb-3">Order Registered</h2>
        <p className="text-brand-accent font-mono text-sm tracking-wider uppercase font-semibold mb-6">
          Order ID: {orderId}
        </p>
        <div className="max-w-md mx-auto space-y-4 text-stone-600 text-sm leading-relaxed mb-8">
          <p>
            Your order for <strong className="text-stone-900 font-semibold">{cartItems.length} item{cartItems.length > 1 ? 's' : ''}</strong> has been registered.
          </p>
          <p className="bg-brand-alertBg border border-amber-200 text-brand-alertTxt rounded-lg p-4 font-medium text-left">
            We have opened WhatsApp to finalize your payment via invoice. If the window did not open automatically, please check your browser&apos;s pop-up blocker or use the floating WhatsApp button below.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

      {/* LEFT PANEL: Contact & Shipping */}
      <div className="lg:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-2xl border border-stone-200/60 shadow-sm">
        <div>
          <h2 className="font-serif text-2xl text-brand-dark font-bold mb-6">Shipping &amp; Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="checkout-name" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="checkout-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className="w-full bg-brand-bgCard border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
              />
            </div>
            <div>
              <label htmlFor="checkout-phone" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="checkout-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+237 6•• ••• •••"
                className="w-full bg-brand-bgCard border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="checkout-email" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="checkout-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
              className="w-full bg-brand-bgCard border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="checkout-address" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
              Shipping Address
            </label>
            <input
              type="text"
              id="checkout-address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Neighborhood, City, Region"
              className="w-full bg-brand-bgCard border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
            />
          </div>
        </div>

        {/* WhatsApp Payment Notice */}
        <div className="border-t border-stone-200/60 pt-6">
          <div className="p-5 rounded-xl border border-amber-200 bg-brand-alertBg text-brand-alertTxt text-sm space-y-3">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01zm6.59 12.247c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.222-.45-2.328-1.436-.86-.767-1.44-1.716-1.607-2.007-.167-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.194-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.644-1.55-.882-2.122-.232-.559-.467-.482-.644-.491-.167-.008-.358-.01-.55-.01s-.502.072-.764.358c-.262.29-1 .977-1 2.388 0 1.41 1.026 2.775 1.17 2.969.145.193 2.019 3.082 4.892 4.322.684.295 1.218.471 1.634.603.687.218 1.312.187 1.806.114.55-.082 1.716-.7 1.96-1.376.244-.676.244-1.255.172-1.376-.073-.12-.262-.193-.553-.338z" />
              </svg>
              <h4 className="font-bold text-xs tracking-wider uppercase">Direct WhatsApp Ordering Enabled</h4>
            </div>
            <p className="text-xs leading-relaxed opacity-95">
              Orders are settled directly via WhatsApp invoice. We support Mobile Money (Momo/OM), direct bank transfers, and local cash pick-up options.
            </p>
            <p className="text-xs font-semibold">
              Upon submittal, your full itemized invoice is automatically forwarded to WhatsApp to complete fulfillment.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Order Summary */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-brand-bgCard p-6 md:p-8 rounded-2xl border border-stone-200/60 shadow-sm">
          <h2 className="font-serif text-xl text-brand-dark font-bold mb-6">
            Order Summary
            <span className="ml-2 text-xs font-sans font-normal text-stone-500 tracking-normal">({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</span>
          </h2>

          {/* Itemized product list */}
          <div className="space-y-4 pb-6 border-b border-stone-200/60">
            {cartItems.map((item) => {
              const productImageUrl = item.herb.targetAilment === 'piles-hemorrhoids'
                ? '/alleviate-organic-pile.png'
                : '/alleviate-organic-cramp.png';
              return (
                <div key={item.herb.id} className="flex items-center gap-4">
                  <div className="relative w-12 h-14 rounded-lg bg-white border border-stone-200/50 shrink-0 overflow-hidden flex items-center justify-center p-1.5">
                    <Image
                      src={productImageUrl}
                      alt={item.herb.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-serif text-sm font-bold text-brand-dark leading-tight">{item.herb.name}</p>
                    <p className="text-[10px] text-stone-500 italic mt-0.5">{item.herb.scientificName}</p>
                    <p className="text-[10px] text-brand-accent font-bold mt-0.5">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-mono text-sm font-bold text-stone-900 shrink-0">
                    {(item.herb.price * item.quantity).toLocaleString('en-US')} FCFA
                  </span>
                </div>
              );
            })}
          </div>

          {/* Pricing breakdown */}
          <div className="space-y-3 py-5 border-b border-stone-200/60 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span className="font-mono text-stone-900">{subtotal.toLocaleString('en-US')} FCFA</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Secure Delivery (Flat Rate)</span>
              <span className="font-mono text-stone-900">{delivery.toLocaleString('en-US')} FCFA</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-5 text-stone-900">
            <span className="font-serif text-lg font-bold">Total due</span>
            <span className="font-mono text-2xl font-bold text-brand-dark">{total.toLocaleString('en-US')} FCFA</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-sm tracking-wide uppercase py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-accent/50 cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Processing Order...</span>
            </>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4 fill-current mr-1.5" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.417 9.864-9.855.002-2.635-1.022-5.11-2.884-6.974-1.864-1.864-4.343-2.89-6.984-2.891-5.439 0-9.865 4.419-9.867 9.856-.001 1.636.43 3.226 1.25 4.633L1.9 21.026l4.747-1.872zm11.381-6.903c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.222-.45-2.328-1.436-.86-.767-1.44-1.716-1.607-2.007-.167-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.194-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.644-1.55-.882-2.122-.232-.559-.467-.482-.644-.491-.167-.008-.358-.01-.55-.01s-.502.072-.764.358c-.262.29-1 .977-1 2.388 0 1.41 1.026 2.775 1.17 2.969.145.193 2.019 3.082 4.892 4.322.684.295 1.218.471 1.634.603.687.218 1.312.187 1.806.114.55-.082 1.716-.7 1.96-1.376.244-.676.244-1.255.172-1.376-.073-.12-.262-.193-.553-.338z" />
              </svg>
              <span>Submit &amp; Pay via WhatsApp</span>
            </span>
          )}
        </button>

        <div className="flex items-center justify-center space-x-2 text-[11px] text-stone-500 font-medium">
          <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>End-to-End Encrypted Messaging Support</span>
        </div>
      </div>
    </form>
  );
}
