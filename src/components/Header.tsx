'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { 
    cart, 
    cartCount, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const deliveryFee = 2500; // Flat Delivery Rate in FCFA
  const grandTotal = cartTotal > 0 ? cartTotal + deliveryFee : 0;

  return (
    <>
      {/* ═══════════════════════════════════════════════
          GLOBAL NAVIGATION HEADER
      ═══════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 w-full border-b border-stone-200/40 bg-brand-bgLight/85 backdrop-blur-md">
        <div className="mx-auto flex py-3.5 md:py-4 max-w-7xl items-center justify-between px-6 sm:px-8">
          
          {/* Logo & Identity */}
          <a href="/" className="flex items-center space-x-2.5 group focus:outline-none">
            <svg
              className="h-7 w-7 text-brand-dark transition-transform group-hover:rotate-12 duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18M3 12h18M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 7.5c-1.5 2-4.5 2-6 0s-4.5-2-6 0m18 9c-1.5-2-4.5-2-6 0s-4.5 2-6 0"
              />
            </svg>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-dark">
              Alleviate <span className="text-brand-accent font-medium">Organic</span>
            </span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide uppercase text-stone-700">
            <a href="/#herbs-section" className="relative py-1 hover:text-brand-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">
              Remedies
            </a>
            <a href="/#our-mission" className="relative py-1 hover:text-brand-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">
              Our Mission
            </a>
            <a href="/#testimonials" className="relative py-1 hover:text-brand-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">
              Testimonials
            </a>
            <a href="/#contact-section" className="relative py-1 hover:text-brand-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">
              Contact
            </a>
          </nav>

          {/* Action Blocks: Shopping Cart & Drawer Trigger */}
          <div className="flex items-center space-x-3.5">
            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-stone-150 border border-stone-200/50 bg-white/70 hover:shadow-xs transition-all duration-200 text-brand-dark focus:outline-none cursor-pointer"
              aria-label="Open Shopping Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5.5 h-5.5 bg-brand-accent text-white font-mono text-[10px] font-bold rounded-full flex items-center justify-center border border-white animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Shop Button */}
            <a
              href="/#herbs-section"
              className="bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-300 text-center hidden sm:block"
            >
              Order Powder
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:bg-stone-150 rounded-lg md:hidden focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200/40 bg-brand-bgLight px-6 py-4 space-y-3.5 shadow-md flex flex-col font-medium tracking-wide uppercase text-xs text-stone-700 animate-slide-down">
            <a href="/#herbs-section" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors py-1 border-b border-stone-100">
              Remedies
            </a>
            <a href="/#our-mission" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors py-1 border-b border-stone-100">
              Our Mission
            </a>
            <a href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors py-1 border-b border-stone-100">
              Testimonials
            </a>
            <a href="/#contact-section" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors py-1">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════
          SLIDING CART DRAWER (Glassmorphic Drawer)
      ═══════════════════════════════════════════════ */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay background */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-stone-950/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Sliding Drawer Container */}
          <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col z-50 transform transition-transform duration-300 ease-out animate-slide-in-right">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-stone-200/60 flex items-center justify-between bg-brand-bgLight">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h2 className="font-serif text-lg font-bold text-brand-dark">Your Apothecary Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors shadow-xs focus:outline-none cursor-pointer"
                aria-label="Close cart"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-bgLight border border-stone-200/40 flex items-center justify-center text-stone-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Your bag is empty</h3>
                  <p className="text-xs text-stone-500 max-w-[240px] leading-relaxed">
                    Explore our single-ingredient root powders sourced directly from Cameroonian volcanic soil.
                  </p>
                  <a
                    href="/#herbs-section"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200"
                  >
                    Browse Remedies
                  </a>
                </div>
              ) : (
                <div className="divide-y divide-stone-150">
                  {cart.map((item) => {
                    const productImageUrl = item.herb.targetAilment === 'piles-hemorrhoids' 
                      ? '/alleviate-organic-pile.png' 
                      : '/alleviate-organic-cramp.png';

                    return (
                      <div key={item.herb.id} className="py-4.5 flex gap-4 first:pt-0">
                        {/* Thumbnail Image */}
                        <div className="relative w-16 h-20 rounded-lg bg-brand-bgCard border border-stone-200/50 flex-shrink-0 overflow-hidden flex items-center justify-center p-2">
                          <Image
                            src={productImageUrl}
                            alt={item.herb.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>

                        {/* Card metadata & controllers */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xs font-bold text-stone-900 leading-tight">
                                {item.herb.name}
                              </h4>
                              <p className="text-[10px] text-stone-500 italic mt-0.5">
                                {item.herb.scientificName}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.herb.id)}
                              className="text-stone-400 hover:text-rose-600 transition-colors focus:outline-none cursor-pointer"
                              aria-label="Remove item"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>

                          <div className="flex justify-between items-center mt-2">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-stone-200/80 rounded-lg bg-stone-50 shadow-xs overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.herb.id, item.quantity - 1)}
                                className="px-2.5 py-1 text-stone-500 hover:bg-stone-150 hover:text-stone-850 active:scale-95 transition-all text-sm font-semibold cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="px-2.5 text-xs font-mono font-bold text-stone-800 select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.herb.id, item.quantity + 1)}
                                className="px-2.5 py-1 text-stone-500 hover:bg-stone-150 hover:text-stone-850 active:scale-95 transition-all text-sm font-semibold cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            {/* Total item cost */}
                            <span className="font-mono text-xs font-bold text-stone-900">
                              {(item.herb.price * item.quantity).toLocaleString('en-US')} FCFA
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-stone-200/60 bg-brand-bgLight space-y-4">
                <div className="space-y-2 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-stone-900">{cartTotal.toLocaleString('en-US')} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery (Flat Rate)</span>
                    <span className="font-mono text-stone-900">{deliveryFee.toLocaleString('en-US')} FCFA</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-stone-200/40 text-stone-900">
                    <span className="font-serif text-sm font-bold">Total Due</span>
                    <span className="font-mono text-base font-bold text-brand-dark">{grandTotal.toLocaleString('en-US')} FCFA</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-semibold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                >
                  Proceed to Checkout
                </a>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
