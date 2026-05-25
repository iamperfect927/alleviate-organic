'use client';

import { useState } from 'react';
import { herbs } from '../data/herbs';
import { testimonials } from '../data/testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'piles-hemorrhoids' | 'menstrual-cramps'>('all');

  const filteredHerbs = herbs.filter(
    (herb) => activeFilter === 'all' || herb.targetAilment === activeFilter
  );

  return (
    <div className="flex flex-col min-h-screen bg-brand-bgLight">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-brand-bgLight py-20 lg:py-32 border-b border-stone-200/40">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-brand-alertTxt/5 rounded-full blur-3xl opacity-40"></div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-dark/5 border border-brand-dark/10 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">
              100% Raw African Botanicals
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark max-w-4xl mx-auto leading-[1.1]">
            100% Pure, Unadulterated <br className="hidden sm:inline" />
            <span className="text-brand-accent font-medium">African Botanicals</span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Single-ingredient plant powders harvested directly from raw soil, sun-dried, and stone-ground. Absolutely zero concoctions, fillers, binders, or synthetic additions. Pure relief, clinically targeted.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#herbs-section"
              className="w-full sm:w-auto bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Powders
            </a>
            <a
              href="#our-mission"
              className="w-full sm:w-auto border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-lg transition-all duration-300"
            >
              Our Purity Pledge
            </a>
          </div>
        </div>
      </section>

      {/* 2. Purity Manifesto / Our Mission Section */}
      <section id="our-mission" className="py-20 bg-brand-bgCard border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              The Alleviate Organic Manifesto
            </h2>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              We stand in direct opposition to complex commercial capsule formulas. Nature does not require synthetic excipients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow transition-shadow">
              <div className="w-10 h-10 bg-brand-dark/5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">100% Single-Ingredient</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Absolutely zero mixtures or multi-herb combos. We deliver one plant species per package, allowing you to know exactly what is interacting with your biochemistry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow transition-shadow">
              <div className="w-10 h-10 bg-brand-alertBg rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-brand-alertTxt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">Sun-Dried & Stone-Ground</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No heat treatments, chemical extractions, or radiation. Plants are washed, sun-dehydrated below 40°C, and stone-ground by hand to conserve volatile organic compounds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow transition-shadow">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">Zero Additives or Fillers</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero silicon dioxide, magnesium stearate, cellulose, or artificial colors. You receive pure, unadulterated plant powder in its highest therapeutic natural density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Grid Component */}
      <section id="herbs-section" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold text-brand-dark">
            Targeted Apothecary Powders
          </h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Filter our certified single-herb powders by target health goals to find pure comfort.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-brand-bgCard rounded-xl border border-stone-200/40">
            {(['all', 'piles-hemorrhoids', 'menstrual-cramps'] as const).map((filter) => {
              const label = filter === 'all' ? 'All Ailments' : filter === 'piles-hemorrhoids' ? 'Piles / Hemorrhoids' : 'Menstrual Cramps';
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all focus:outline-none ${
                    activeFilter === filter
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-stone-600 bg-brand-bgCard hover:text-stone-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Herbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredHerbs.map((herb) => (
            <div
              key={herb.id}
              className="bg-white border border-stone-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Herb visual illustration banner */}
              <div className="relative h-60 w-full bg-brand-bgCard flex items-center justify-center overflow-hidden border-b border-stone-200/60">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/10 to-transparent"></div>
                <div className="w-28 h-28 rounded-full border-2 border-brand-dark/15 flex items-center justify-center animate-pulse">
                  <svg className="w-14 h-14 text-brand-dark/60" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                  </svg>
                </div>
                {/* Purity Badge */}
                <div className="absolute top-4 right-4 bg-brand-dark text-stone-50 font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full font-bold shadow-sm">
                  100% Raw Plant
                </div>
              </div>

              {/* Info Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
                    {herb.targetAilment === 'piles-hemorrhoids' ? 'Vascular Tone & Relief' : 'Spasmodic & Flow Support'}
                  </span>
                  <span className="font-mono text-xl font-bold text-stone-900">
                    ${herb.price.toFixed(2)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  {herb.name}
                </h3>
                <p className="text-xs italic text-stone-500 mt-1 mb-4">
                  {herb.scientificName}
                </p>

                <p className="text-xs leading-relaxed text-stone-600 mb-6 flex-grow">
                  {herb.description}
                </p>

                <div className="space-y-2 mb-8">
                  {herb.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2.5 text-xs text-stone-700">
                      <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href={`/herbs/${herb.id}`}
                    className="border border-stone-300 text-center hover:bg-brand-bgCard text-stone-700 font-semibold text-xs tracking-wider uppercase py-3 rounded-lg transition-colors"
                  >
                    View Details
                  </a>
                  <a
                    href={`/checkout?product=${herb.id}`}
                    className="bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-semibold text-xs tracking-wider uppercase py-3 rounded-lg shadow-sm hover:shadow transition-all duration-300"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section id="testimonials" className="py-24 bg-brand-bgCard border-t border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
              Verified Relief
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark mt-2">
              Reviews From Verified Buyers
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Read how unadulterated African plant powders have restored balance for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xs leading-relaxed text-stone-600 italic mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">{test.name}</h4>
                    <p className="text-[10px] text-stone-500">{test.location}</p>
                  </div>
                  {test.verifiedPurchase && (
                    <div className="flex items-center space-x-1 text-[9px] font-bold text-brand-dark tracking-wider uppercase bg-brand-accent/10 border border-brand-accent/20 px-2 py-1 rounded">
                      <svg className="w-3 h-3 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.0" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Verified Buyer</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact & Location Block */}
      <section id="contact-section" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark mt-2 mb-4">
              Speak with a Botanist
            </h2>
            <p className="text-sm text-stone-600 mb-8 leading-relaxed">
              Have questions about dosage, traditional usage, or our ethically sourced harvesting? Send us an inquiry directly and we will respond immediately.
            </p>
            <ContactForm />
          </div>

          {/* Right Column: Address */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-6">
            <div className="p-8 rounded-2xl bg-brand-bgCard border border-stone-200/60 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                Corporate Address
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-700">HQ Office</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Alleviate Organic Ltd.<br />
                      Plot 42, Botanical Road, Lekki Phase 1<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-700">Support Hours</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed font-medium">
                      Monday – Friday: 08:00 – 17:00 WAT
                    </p>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      Closed on Weekends and Nigerian Public Holidays
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-700">Electronic Mail</h4>
                    <p className="text-xs text-stone-600 mt-1 font-medium">
                      support@alleviateorganic.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
