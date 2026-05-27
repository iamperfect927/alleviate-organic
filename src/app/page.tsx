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
      <section className="relative overflow-hidden border-b border-stone-200/40 bg-brand-bgLight">

        {/* Ambient glow accents */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-dark/5 rounded-full blur-3xl opacity-0 animate-glow-expand pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-alertTxt/5 rounded-full blur-3xl opacity-0 animate-glow-expand animation-delay-300 pointer-events-none" />

        {/* Main 12-column grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">

          {/* ── Left: Text Column (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.12] opacity-0 animate-fade-in-up animation-delay-100">
              100% Pure African <span className="italic font-medium text-brand-accent">Herbal Powders</span> for Natural Targeted Relief
            </h1>

            {/* Body copy */}
            <p className="mt-6 text-base md:text-lg text-stone-800 font-normal leading-relaxed max-w-xl opacity-0 animate-fade-in-up animation-delay-200">
              Raw, single-ingredient botanical remedies sourced directly from the volcanic soils of Buea, Cameroon. Formulated specifically to soothe Piles/Hemorrhoids and ease intense Menstrual Cramp pain with zero added chemicals.
            </p>

            {/* Trust micro-stats */}
            <div className="mt-8 flex items-center gap-6 opacity-0 animate-fade-in-up animation-delay-300">
              {[
                { value: '100%', label: 'Single-Ingredient' },
                { value: '0', label: 'Additives or Fillers' },
                { value: '2', label: 'Targeted Ailments' },
              ].map(({ value, label }) => (
                <div key={label} className="text-left">
                  <p className="font-serif text-2xl font-bold text-brand-dark">{value}</p>
                  <p className="text-[10px] text-stone-600 uppercase tracking-wider leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-start items-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up animation-delay-400">
              <a
                href="#herbs-section"
                className="bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-base tracking-wide px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center w-full sm:w-auto h-14 flex items-center justify-center focus:outline-none"
              >
                Explore Powders
              </a>
              <a
                href="#our-mission"
                className="border-2 border-brand-dark/20 text-brand-dark hover:border-brand-dark bg-transparent hover:bg-brand-dark/5 font-semibold text-base tracking-wide px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center w-full sm:w-auto h-14 flex items-center justify-center focus:outline-none"
              >
                Our Purity Pledge
              </a>
            </div>
          </div>

          {/* ── Right: Visual Frame (5 cols) ── */}
          <div className="lg:col-span-5 w-full order-1 lg:order-2 opacity-0 animate-fade-in-scale animation-delay-150 flex justify-center lg:justify-end">
            <div className="relative p-2.5 bg-white/40 backdrop-blur-md rounded-2xl md:rounded-3xl border border-stone-200/30 shadow-xs max-w-sm lg:max-w-md w-full">
              {/* Artistic layout guide corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-brand-accent/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-accent/40 rounded-br-2xl pointer-events-none" />

              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-stone-200/40 aspect-[4/5] w-full">
                {/* Botanical background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200)',
                  }}
                />
                {/* Subtle inner vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />

                {/* Lookbook label pinned bottom-left */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                  <div className="bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm border border-stone-100/60 max-w-[70%]">
                    <p className="text-[9px] font-bold tracking-widest uppercase text-brand-accent mb-0.5">Ethically Sourced</p>
                    <p className="text-xs font-semibold text-brand-dark leading-snug">Raw African Botanical Powders</p>
                  </div>
                  <div className="bg-brand-dark text-stone-50 text-[9px] font-bold tracking-widest uppercase px-3 py-2 rounded-lg shadow-md">
                    Zero<br />Additives
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Purity Manifesto / Our Mission Section */}
      <section id="our-mission" className="py-12 md:py-24 bg-white border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              The Alleviate Organic Manifesto
            </h2>
            <p className="mt-4 text-sm md:text-base text-stone-800 leading-relaxed">
              We stand in direct opposition to complex commercial capsule formulas. Nature does not require synthetic excipients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-dark/5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">100% Single-Ingredient</h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                Absolutely zero mixtures or multi-herb combos. We deliver one plant species per package, allowing you to know exactly what is interacting with your biochemistry.
              </p>
            </div>

            <div className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-alertBg rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-brand-alertTxt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">Sun-Dried & Stone-Ground</h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                No heat treatments, chemical extractions, or radiation. Plants are washed, sun-dehydrated below 40°C, and stone-ground by hand to conserve volatile organic compounds.
              </p>
            </div>

            <div className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">Zero Additives or Fillers</h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                Zero silicon dioxide, magnesium stearate, cellulose, or artificial colors. You receive pure, unadulterated plant powder in its highest therapeutic natural density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Grid Component */}
      <section id="herbs-section" className="py-12 md:py-24 bg-brand-bgLight border-t border-b border-stone-200/40 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Targeted Apothecary Powders
            </h2>
            <p className="mt-3 text-sm md:text-base text-stone-800 leading-relaxed">
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
                className="bg-white border border-stone-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Herb visual illustration banner */}
                <div className="relative h-60 w-full bg-emerald-50/40 flex items-center justify-center overflow-hidden border-b border-stone-200/60">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/10 to-transparent"></div>
                  <div className="w-28 h-28 rounded-full border-2 border-brand-dark/15 flex items-center justify-center animate-pulse">
                    <svg className="w-12 h-12 text-brand-dark/60" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C12 22 20 18 20 11C20 6 16 3 12 3C8 3 4 6 4 11C4 18 12 22 12 22Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V22" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7C14 9 17 10 18 11" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11C10 13 7 14 6 15" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14C14 16 16 17 17 18" />
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
                      {herb.price.toLocaleString('en-US')} FCFA
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-dark">
                    {herb.name}
                  </h3>
                  <p className="text-xs italic text-stone-500 mt-1 mb-4">
                    {herb.scientificName}
                  </p>

                  <p className="text-sm leading-relaxed text-stone-800 mb-6 flex-grow font-normal">
                    {herb.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {herb.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2.5 text-sm text-stone-850">
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
                      className="border-2 border-brand-dark/20 text-brand-dark hover:border-brand-dark bg-transparent hover:bg-brand-dark/5 text-center font-semibold text-xs md:text-sm tracking-wider uppercase py-3 rounded-xl transition-all duration-300 flex items-center justify-center focus:outline-none"
                    >
                      View Details
                    </a>
                    <a
                      href={`/checkout?product=${herb.id}`}
                      className="bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-semibold text-xs md:text-sm tracking-wider uppercase py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center focus:outline-none"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Purity Promise Trust Banner */}
      <section className="w-full relative overflow-hidden py-16 md:py-36 bg-emerald-950">
        {/* Background Image with fixed parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2000)',
          }}
        />
        {/* High-Contrast Backdrop Overlay */}
        <div className="absolute inset-0 bg-emerald-950/75 mix-blend-multiply" />

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-stone-100">
          <span className="text-xs font-bold tracking-widest text-brand-accent mb-4 uppercase inline-block">
            The Alleviate Organic Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Zero Concoctions. Zero Compromises.
          </h2>
          <p className="text-base md:text-xl text-stone-200 leading-relaxed font-light max-w-2xl mx-auto">
            Traditional wellness demands absolute purity. We do not blend, mix, or alter our powders with chemical additives, fillers, or binding agents. What you see is 100% what you get—pure, single-ingredient plant matter ground directly from the earth.
          </p>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-24 bg-white border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
              Verified Relief
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark mt-2">
              Reviews From Verified Buyers
            </h2>
            <p className="mt-3 text-sm md:text-base text-stone-850 leading-relaxed">
              Read how unadulterated African plant powders have restored balance for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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

                  <p className="text-sm leading-relaxed text-stone-800 italic mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 mt-auto">
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">{test.name}</h4>
                    <p className="text-xs text-stone-600">{test.location}</p>
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
      <section id="contact-section" className="py-12 md:py-24 bg-brand-bgLight w-full border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl font-bold text-brand-dark mt-2 mb-4">
                Speak with a Botanist
              </h2>
              <p className="text-sm md:text-base text-stone-850 mb-8 leading-relaxed font-normal">
                Have questions about dosage, traditional usage, or our ethically sourced harvesting? Send us an inquiry directly and we will respond immediately.
              </p>
              <ContactForm />
            </div>

            {/* Right Column: Address */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-6">
              <div className="p-8 rounded-2xl bg-white border border-stone-200/60 shadow-sm hover:shadow-lg transition-all duration-300">
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
                      <p className="text-sm text-stone-850 mt-1 leading-relaxed font-normal">
                        Alleviate Organic Ltd.<br />
                        Biaka Street, Molyko, PMB 237<br />
                        Buea, Southwest Region, Cameroon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-5 h-5 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-700">Support Hours</h4>
                      <p className="text-sm text-stone-850 mt-1 leading-relaxed font-semibold">
                        Monday – Friday: 08:00 – 17:00 WAT
                      </p>
                      <p className="text-xs text-stone-600 mt-0.5 font-normal">
                        Closed on Weekends and Cameroonian Public Holidays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-5 h-5 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-700">Electronic Mail</h4>
                      <p className="text-sm text-stone-850 mt-1 font-semibold">
                        support@alleviateorganic.com
                      </p>
                    </div>
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
