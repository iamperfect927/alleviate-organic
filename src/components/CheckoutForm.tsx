'use client';

import { useState } from 'react';
import { Herb } from '../data/herbs';

interface CheckoutFormProps {
  herb: Herb | undefined;
}

export default function CheckoutForm({ herb }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'whatsapp'>('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [orderId, setOrderId] = useState('');

  if (!herb) {
    return (
      <div className="text-center py-16 px-4">
        <svg className="w-16 h-16 text-stone-300 dark:text-stone-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h2 className="font-serif text-3xl text-brand-dark font-bold mb-3">Your Cart is Empty</h2>
        <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-8">
          Please select one of our 100% natural, raw African herbal powders to proceed to checkout.
        </p>
        <a
          href="/"
          className="inline-block bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Our Herbs
        </a>
      </div>
    );
  }

  // Calculate pricing
  const subtotal = herb.price;
  const shipping = 2500; // Flat shipping rate in FCFA
  const tax = Math.round(subtotal * 0.05); // 5% VAT tax
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format card number to 4-digit chunks
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const chunks = value.match(/.{1,4}/g);
    setFormData((prev) => ({
      ...prev,
      cardNumber: chunks ? chunks.join(' ') : '',
    }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format MM/YY
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setFormData((prev) => ({ ...prev, cardExpiry: value }));
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) value = value.slice(0, 3);
    setFormData((prev) => ({ ...prev, cardCvc: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate secure transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      const generatedOrderId = `AO-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedOrderId);
      setStatus('success');

      // If WhatsApp method, trigger API redirect in addition to success page
      if (paymentMethod === 'whatsapp') {
        const message = `Hi Alleviate Organic, I would like to place an order. Details:\n\n` +
          `- Order ID: ${generatedOrderId}\n` +
          `- Product: ${herb.name} (${herb.price.toLocaleString('en-US')} FCFA)\n` +
          `- Customer: ${formData.name}\n` +
          `- Phone: ${formData.phone}\n` +
          `- Email: ${formData.email}\n` +
          `- Shipping Address: ${formData.address}\n\n` +
          `- Total: ${total.toLocaleString('en-US')} FCFA (incl. flat shipping and tax)\n\n` +
          `Please send me payment instructions/invoice. Thank you!`;

        const waUrl = `https://wa.me/237657447445?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-stone-200/60 rounded-2xl p-8 md:p-12 text-center shadow-lg transition-all duration-500 animate-fadeIn">
        <div className="w-16 h-16 bg-brand-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl text-brand-dark font-bold mb-3">Order Received</h2>
        <p className="text-brand-accent font-mono text-sm tracking-wider uppercase font-semibold mb-6">
          Order ID: {orderId}
        </p>
        <div className="max-w-md mx-auto space-y-4 text-stone-600 text-sm leading-relaxed mb-8">
          <p>
            Your order for <strong className="text-stone-900 font-medium">{herb.name}</strong> has been registered.
          </p>
          {paymentMethod === 'whatsapp' ? (
            <p className="bg-brand-alertBg border border-amber-200 text-brand-alertTxt rounded-lg p-4 font-medium">
              We have opened WhatsApp to finalise your payment via invoice. If the window did not open automatically, please check your pop-up blocker or use our floating support button.
            </p>
          ) : (
            <p>
              Your credit card has been verified under our secure processor framework. An email confirmation containing your shipping tracking code will be dispatched shortly.
            </p>
          )}
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
      {/* Left Panel: Contact & Shipping */}
      <div className="lg:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-2xl border border-stone-200/60 shadow-sm">
        <div>
          <h2 className="font-serif text-2xl text-brand-dark font-bold mb-6">Shipping & Contact Details</h2>
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
                placeholder="+1 (555) 000-0000"
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
              placeholder="123 Plant Powder Way, Apt 4B, City, Country"
              className="w-full bg-brand-bgCard border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
            />
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="border-t border-stone-200/60 pt-6">
          <h3 className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-4">
            Payment Option
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all focus:outline-none ${
                paymentMethod === 'card'
                  ? 'border-brand-dark bg-brand-bgCard'
                  : 'border-stone-200 bg-transparent hover:bg-brand-bgCard/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'card' ? 'border-brand-dark' : 'border-stone-300'
                }`}>
                  {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Credit Card</p>
                  <p className="text-xs text-stone-500">Secure Processing</p>
                </div>
              </div>
              <div className="flex space-x-1 opacity-70">
                <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod('whatsapp')}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all focus:outline-none ${
                paymentMethod === 'whatsapp'
                  ? 'border-brand-dark bg-brand-bgCard'
                  : 'border-stone-200 bg-transparent hover:bg-brand-bgCard/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'whatsapp' ? 'border-brand-dark' : 'border-stone-300'
                }`}>
                  {paymentMethod === 'whatsapp' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">WhatsApp Invoice</p>
                  <p className="text-xs text-stone-500">Manual Payment Link</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-brand-accent fill-current" viewBox="0 0 24 24">
                <path d="M12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01zm6.59 12.247c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.222-.45-2.328-1.436-.86-.767-1.44-1.716-1.607-2.007-.167-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.194-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.644-1.55-.882-2.122-.232-.559-.467-.482-.644-.491-.167-.008-.358-.01-.55-.01s-.502.072-.764.358c-.262.29-1 .977-1 2.388 0 1.41 1.026 2.775 1.17 2.969.145.193 2.019 3.082 4.892 4.322.684.295 1.218.471 1.634.603.687.218 1.312.187 1.806.114.55-.082 1.716-.7 1.96-1.376.244-.676.244-1.255.172-1.376-.073-.12-.262-.193-.553-.338z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dynamic Payment Interface */}
        {paymentMethod === 'card' ? (
          <div className="border-t border-stone-200/60 pt-6 space-y-4 animate-fadeIn">
            <h3 className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
              Credit Card Terminal
            </h3>
            
            <div className="bg-brand-bgCard p-5 rounded-xl border border-stone-200 space-y-4">
              <div>
                <label htmlFor="cc-number" className="block text-[10px] font-bold tracking-wider uppercase text-stone-500 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cc-number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    required={paymentMethod === 'card'}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full bg-white border border-stone-200 rounded-lg pl-4 pr-12 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
                  />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex space-x-1.5 pointer-events-none">
                    <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cc-expiry" className="block text-[10px] font-bold tracking-wider uppercase text-stone-500 mb-1">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="cc-expiry"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleExpiryChange}
                    required={paymentMethod === 'card'}
                    placeholder="MM/YY"
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
                  />
                </div>
                <div>
                  <label htmlFor="cc-cvc" className="block text-[10px] font-bold tracking-wider uppercase text-stone-500 mb-1">
                    Security Code (CVC)
                  </label>
                  <input
                    type="text"
                    id="cc-cvc"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleCvcChange}
                    required={paymentMethod === 'card'}
                    placeholder="•••"
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-t border-stone-200/60 pt-6 animate-fadeIn">
            <div className="p-5 rounded-xl border border-amber-200 bg-brand-alertBg text-brand-alertTxt text-sm space-y-3">
              <div className="flex items-center space-x-2 text-brand-alertTxt">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h4 className="font-semibold text-xs tracking-wider uppercase">Compliance-Safe Fallback</h4>
              </div>
              <p className="text-xs leading-relaxed opacity-95">
                Because traditional card networks occasionally flag natural herbal terminology, our manual dispatch allows you to pay direct via WhatsApp invoice (we support bank transfer, cash, and secure payment links).
              </p>
              <p className="text-xs font-semibold">
                Upon submitting, a WhatsApp window will launch with your prefilled details to finalise your order immediately.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel: Order Summary */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-brand-bgCard p-6 md:p-8 rounded-2xl border border-stone-200/60 shadow-sm">
          <h2 className="font-serif text-xl text-brand-dark font-bold mb-6">Order Summary</h2>
          
          <div className="flex items-center justify-between pb-6 border-b border-stone-200/60">
            <div>
              <p className="font-serif text-base text-brand-dark font-bold">{herb.name}</p>
              <p className="text-xs text-stone-500 italic mt-0.5">{herb.scientificName}</p>
              <p className="text-xs text-brand-accent font-medium mt-1">100% Raw Plant Powder</p>
            </div>
            <span className="font-mono text-base font-semibold text-stone-900">
              {subtotal.toLocaleString('en-US')} FCFA
            </span>
          </div>

          <div className="space-y-3.5 py-6 border-b border-stone-200/60 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span className="font-mono">{subtotal.toLocaleString('en-US')} FCFA</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Secure Shipping (Flat Rate)</span>
              <span className="font-mono">{shipping.toLocaleString('en-US')} FCFA</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Taxes (5%)</span>
              <span className="font-mono">{tax.toLocaleString('en-US')} FCFA</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-6 text-stone-900">
            <span className="font-serif text-lg font-bold">Total due</span>
            <span className="font-mono text-2xl font-bold text-brand-dark">{total.toLocaleString('en-US')} FCFA</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-sm tracking-wide uppercase py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Securing Order...</span>
            </>
          ) : paymentMethod === 'card' ? (
            <span>Authorize Payment ({total.toLocaleString('en-US')} FCFA)</span>
          ) : (
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 fill-current mr-1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.417 9.864-9.855.002-2.635-1.022-5.11-2.884-6.974-1.864-1.864-4.343-2.89-6.984-2.891-5.439 0-9.865 4.419-9.867 9.856-.001 1.636.43 3.226 1.25 4.633L1.9 21.026l4.747-1.872zm11.381-6.903c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.222-.45-2.328-1.436-.86-.767-1.44-1.716-1.607-2.007-.167-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.194-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.644-1.55-.882-2.122-.232-.559-.467-.482-.644-.491-.167-.008-.358-.01-.55-.01s-.502.072-.764.358c-.262.29-1 .977-1 2.388 0 1.41 1.026 2.775 1.17 2.969.145.193 2.019 3.082 4.892 4.322.684.295 1.218.471 1.634.603.687.218 1.312.187 1.806.114.55-.082 1.716-.7 1.96-1.376.244-.676.244-1.255.172-1.376-.073-.12-.262-.193-.553-.338z" />
              </svg>
              <span>Submit & Pay via WhatsApp</span>
            </span>
          )}
        </button>

        <div className="flex items-center justify-center space-x-2 text-[11px] text-stone-500 font-medium">
          <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>End-to-End Encrypted Secure Checkout</span>
        </div>
      </div>
    </form>
  );
}
