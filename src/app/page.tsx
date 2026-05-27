'use client';

import { useState } from 'react';
import Image from 'next/image';
import { herbs } from '../data/herbs';
import { testimonials } from '../data/testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'piles-hemorrhoids' | 'menstrual-cramps'>('all');

  const filteredHerbs = herbs.filter(
    (herb) => activeFilter === 'all' || herb.targetAilment === activeFilter
  );

  // clean, premium botanical and medical-grade SVG paths to replace the emojis
  const trustItems = [
    {
      text: '100% Single-Ingredient',
      icon: (
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      text: 'Zero Additives or Fillers',
      icon: (
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      text: 'Volcanic Soil Sourced, Buea',
      icon: (
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      text: 'Stone-Ground by Hand',
      icon: (
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.57V3m0 0L4.5 7.5M9 3v2.756M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      text: 'Cruelty-Free & Vegan',
      icon: (
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  // Swapped the emojis of certifications trust badges out for elegant, medical-organic SVG icons styled to match the brand accent color
  const standards = [
    { 
      label: '100% Vegan', 
      sub: 'No animal by-products',
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      label: 'Cruelty-Free', 
      sub: 'Never tested on animals',
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h.01M10 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15c-1.5 0-2 .5-2 1s.5 1 2 1 2-.5 2-1-.5-1-2-1z" />
        </svg>
      )
    },
    { 
      label: 'Eco-Conscious', 
      sub: 'Sustainable harvesting',
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7H19M9 11l3 3L22 4" />
        </svg>
      )
    },
    { 
      label: 'Zero Synthetics', 
      sub: 'No artificial compounds',
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    { 
      label: 'Volcanic Origin', 
      sub: 'Mount Fako, Cameroon',
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bgLight">

      {/* ═══════════════════════════════════════════════
          1. HERO SECTION — Emotional Impact
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-bgLight border-b border-stone-200/40 ">
        {/* Ambient glow accents */}
        <div className="absolute top-0 right-0 w-[42rem] h-[42rem] bg-brand-dark/5 rounded-full blur-3xl opacity-0 animate-glow-expand pointer-events-none " />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-alertTxt/5 rounded-full blur-3xl opacity-0 animate-glow-expand animation-delay-300 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-4">

          {/* ── Left: Text Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">

            {/* Eyebrow label */}
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-5 opacity-0 animate-fade-in-up">
              Wild-Harvested · Buea, Cameroon
            </span>

            {/* Headline — Transformation & Benefit */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1] opacity-0 animate-fade-in-up animation-delay-100">
              Nature&apos;s Purest Remedy,{' '}
              <span className="italic font-medium text-brand-accent">
                 From Africa.
              </span>
            </h1>

            {/* Subheadline — Trust & Authenticity */}
            <p className="mt-6 text-base md:text-lg text-stone-700 font-normal leading-[1.75] max-w-xl opacity-0 animate-fade-in-up animation-delay-200">
              Bringing raw, single-ingredient, stone-ground, and absolutely free of chemicals to your doorstep. Targeted relief for Piles/Hemorrhoids and Menstrual Cramp pain.
            </p>

            {/* Trust micro-stats */}
            <div className="mt-8 flex items-center gap-4 md:gap-8 opacity-0 animate-fade-in-up animation-delay-300">
              {[
                { value: '10+', label: 'Happy Customers' },
                { value: '100%', label: 'Natural Ingredients' },
                { value: '0', label: 'Additives or Fillers' },
                { value: '2', label: 'Targeted Ailments' },
              ].map(({ value, label }) => (
                <div key={label} className="text-left">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-brand-dark leading-none">{value}</p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-[0.12em] leading-tight mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons — Clear Hierarchy */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up animation-delay-400">
              {/* Primary CTA */}
              <a
                href="#herbs-section"
                id="hero-shop-cta"
                className="bg-brand-dark hover:bg-emerald-900 text-stone-50 font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              >
                Shop Collection
              </a>
              {/* Secondary CTA */}
              <a
                href="#founder-story"
                id="hero-story-cta"
                className="border-2 border-brand-dark/25 text-brand-dark hover:border-brand-dark hover:bg-brand-dark/5 font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center h-14 flex items-center justify-center focus:outline-none"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* ── Right: Visual Frame ── */}
          <div className="lg:col-span-5 w-full order-1 lg:order-2 opacity-0 animate-fade-in-scale animation-delay-150 flex justify-center lg:justify-end">
            <div className="relative p-2.5 bg-white/40 backdrop-blur-md rounded-2xl md:rounded-3xl border border-stone-200/30 shadow-sm max-w-sm lg:max-w-md w-full">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-brand-accent/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-accent/40 rounded-br-2xl pointer-events-none" />
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-stone-200/40 aspect-[4/5] w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                  <div className="bg-white/85 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm border border-stone-100/60 max-w-[70%]">
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

      {/* ═══════════════════════════════════════════════
          2. TRUST METRICS STRIP — Social Proof Bar
      ═══════════════════════════════════════════════ */}

      <section className="bg-brand-dark py-4 overflow-hidden border-y border-emerald-900/40 select-none">
      <div className="w-full max-w-7xl mx-auto md:px-8">
        
        {/* DESKTOP VIEW: Stands perfectly still, beautifully justified */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {trustItems.map(({ icon, text }, idx) => (
            <div key={`desktop-${text}`} className="flex items-center gap-3 text-stone-200">
              <div className="flex-shrink-0">{icon}</div>
              <span className="text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">{text}</span>
              {idx < trustItems.length - 1 && (
                <span className="text-emerald-800 font-light ml-6 select-none" aria-hidden="true">•</span>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE & TABLET VIEW: Continuous, ultra-smooth looping marquee */}
        <div className="flex lg:hidden w-full relative">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {/* First Loop Pass */}
            {trustItems.map(({ icon, text }, idx) => (
              <div key={`mob1-${idx}`} className="flex items-center gap-3 text-stone-200">
                <div className="flex-shrink-0">{icon}</div>
                <span className="text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">{text}</span>
              </div>
            ))}
            {/* Second Loop Pass (Duplicates content seamlessly to prevent any blank flashes) */}
            {trustItems.map(({ icon, text }, idx) => (
              <div key={`mob2-${idx}`} className="flex items-center gap-3 text-stone-200">
                <div className="flex-shrink-0">{icon}</div>
                <span className="text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

      {/* ═══════════════════════════════════════════════
          3. PURITY MANIFESTO — What We Stand For
      ═══════════════════════════════════════════════ */}
      <section id="our-mission" className="py-16 md:py-24 bg-white border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent">Our Commitment</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-3 leading-tight">
              We Believe Healing Shouldn&apos;t Come With a Warning Label.
            </h2>
            <p className="mt-4 text-base text-stone-700 leading-relaxed">
              The global wellness industry floods products with binders, fillers, and synthetic excipients you cannot pronounce. We built Alleviate Organic to prove that nature, in its original form, is enough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                ),
                iconBg: 'bg-brand-dark/5',
                iconColor: 'text-brand-dark',
                title: '100% Single-Ingredient',
                body: 'One plant. One package. Zero mixtures or multi-herb combos. You always know exactly what you are putting into your body.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                iconBg: 'bg-amber-50',
                iconColor: 'text-amber-600',
                title: 'Sun-Dried & Stone-Ground',
                body: 'No heat extraction, radiation, or chemical processing. Plants are washed in clean water, sun-dehydrated below 40°C, and stone-ground by hand.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                ),
                iconBg: 'bg-stone-100',
                iconColor: 'text-stone-700',
                title: 'Zero Additives or Fillers',
                body: 'No silicon dioxide, magnesium stearate, cellulose, or artificial colorants. What you receive is pure, unadulterated plant matter in its highest therapeutic density — nothing more, nothing less.',
              },
            ].map(({ icon, iconBg, iconColor, title, body }) => (
              <div key={title} className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. FOUNDER STORY — Brand Emotion & Authenticity
      ═══════════════════════════════════════════════ */}
      <section id="founder-story" className="py-16 md:py-24 bg-brand-bgLight border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:max-w-none shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/10 to-transparent" />
                {/* Floating quote card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-stone-100/80">
                    <p className="text-sm font-serif italic text-brand-dark leading-relaxed">
                      &ldquo;I grew up watching my grandmother heal our village with roots from this very mountain. Every bag we sell carries that same trust.&rdquo;
                    </p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-accent mt-3">— Founder, Alleviate Organic</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none hidden lg:block" />
            </div>

            {/* Right: Story */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-6">
                Born on the Slopes of an Active Volcano. Bottled With Ancestral Care.
              </h2>
              <div className="space-y-5 text-base text-stone-700 leading-relaxed">
                <p>
                  Alleviate Organic was born from a simple but radical belief: that the most powerful medicine already exists in nature — it just needs to be treated with respect.
                </p>
                <p>
                  Our roots grow from Buea, a town nestled at the foot of Mount Fako — one of Africa&apos;s most active volcanoes. Its lava-enriched soils produce plants of extraordinary mineral density and therapeutic potency. For generations, local healers have known this. We&apos;re simply making it accessible to the world.
                </p>
                <p>
                  Every single powder we produce is sourced, dried, and ground by hand within 20 kilometers of that mountain. No factories. No chemical processing. No shortcuts. Just raw botanical truth, packaged with integrity.
                </p>
              </div>

              {/* Ethos Pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Ethically Sourced', 'Zero Chemicals', 'Hand-Processed', 'Community-First', 'Volcanic Origin'].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200/70 text-xs font-semibold text-stone-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CERTIFICATIONS TRUST BADGES
      ═══════════════════════════════════════════════ */}
      
      <section className="py-12 bg-white border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-stone-500 mb-8">
          Our Purity Standards
        </p>
        
        {/* Adjusted grid system handles responsiveness flawlessly from mobile up to desktop widths */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {standards.map(({ icon, label, sub }) => (
            <div 
              key={label} 
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-brand-bgLight border border-stone-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Container with a subtle hover color shift */}
              <div className="mb-3 p-2 bg-white rounded-xl shadow-sm border border-stone-100 group-hover:scale-105 transition-transform duration-300">
                {icon}
              </div>
              
              <p className="text-xs font-bold text-brand-dark tracking-wide">{label}</p>
              <p className="text-[10px] text-stone-500 mt-1.5 leading-snug font-medium px-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ═══════════════════════════════════════════════
          6. FILTERABLE PRODUCT GRID
      ═══════════════════════════════════════════════ */}
      <section id="herbs-section" className="py-16 md:py-24 bg-brand-bgLight border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent">The Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-3 leading-tight">
              Single-Ingredient Powders for Targeted Relief
            </h2>
            <p className="mt-4 text-base text-stone-700 leading-relaxed">
              Each powder is formulated for one specific condition. Filter by your health goal and discover the right remedy for your body.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-white rounded-2xl border border-stone-200/60 shadow-sm gap-1">
              {(['all', 'piles-hemorrhoids', 'menstrual-cramps'] as const).map((filter) => {
                const label = filter === 'all' ? 'All Remedies' : filter === 'piles-hemorrhoids' ? 'Piles & Hemorrhoids' : 'Menstrual Cramps';
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 focus:outline-none ${
                      activeFilter === filter
                        ? 'bg-brand-dark text-white shadow-md'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Herbs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredHerbs.map((herb) => {
              // Resolve the image paths matching the files inside your public folder
              const productImageUrl = herb.targetAilment === 'piles-hemorrhoids' 
                ? '/alleviate-organic-pile.png' 
                : '/alleviate-organic-cramp.png';

              return (
                <div
                  key={herb.id}
                  className="bg-white border border-stone-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                >
                  {/* Visual banner */}
                  <div className="relative h-64 w-full bg-emerald-50/30 flex items-center justify-center overflow-hidden border-b border-stone-200/60">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/5 to-transparent z-10" />
                    
                    {/* Optimized Product Pack Mockup Rendering */}
                    <div className="absolute inset-0 w-full h-full p-6 flex items-center justify-center bg-gray-200">
                      <Image
                        src={productImageUrl}
                        alt={`${herb.name} Packaging Preview`}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-7xl) 50vw, 100vw"
                      />
                    </div>

                    <div className="absolute top-4 right-4 bg-brand-dark text-stone-50 font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm z-10">
                      100% Raw Plant
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">
                        {herb.targetAilment === 'piles-hemorrhoids' ? 'Vascular Tone & Relief' : 'Spasmodic & Flow Support'}
                      </span>
                      <span className="font-mono text-xl font-bold text-stone-900 ml-4 shrink-0">
                        {herb.price.toLocaleString('en-US')} FCFA
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-brand-dark leading-snug">{herb.name}</h3>
                    <p className="text-xs italic text-stone-500 mt-1 mb-4">{herb.scientificName}</p>

                    <p className="text-sm leading-relaxed text-stone-700 mb-6 flex-grow">{herb.description}</p>

                    <div className="space-y-2.5 mb-8">
                      {herb.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-stone-800">
                          <div className="w-4 h-4 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card CTAs — Clear Hierarchy */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <a
                        href={`/herbs/${herb.id}`}
                        className="border-2 border-brand-dark/20 text-brand-dark hover:border-brand-dark hover:bg-brand-dark/5 text-center font-semibold text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center focus:outline-none"
                      >
                        View Details
                      </a>
                      <a
                        href={`/checkout?product=${herb.id}`}
                        className="bg-brand-dark hover:bg-emerald-900 text-stone-50 text-center font-bold text-xs tracking-widest uppercase py-3.5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center focus:outline-none"
                      >
                        Order Now →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. PURITY PARALLAX BANNER — Dark Trust Statement
      ═══════════════════════════════════════════════ */}
      <section className="w-full relative overflow-hidden py-20 md:py-40 bg-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-emerald-950/78 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-stone-100">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-6 uppercase inline-block">
            The Alleviate Organic Standard
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            What You See Is Exactly What You Get.
          </h2>
          <p className="text-base md:text-xl text-stone-300 leading-relaxed font-light max-w-2xl mx-auto">
            We do not blend, mix, or alter our powders. No binding agents. No flow chemicals. No synthetic preservatives. Just raw, single-ingredient plant matter — ground directly from the earth and sealed for your healing.
          </p>
          <a
            href="#herbs-section"
            className="mt-10 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Our Remedies
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. TESTIMONIALS — Social Proof
      ═══════════════════════════════════════════════ */}
      <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent">Real People. Real Relief.</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-3 leading-tight">
              Healing Stories From Our Community
            </h2>
            <p className="mt-4 text-base text-stone-700 leading-relaxed">
              These aren&apos;t marketing quotes. They are real words from real people whose lives were touched by the purity of nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-brand-bgLight p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex-grow">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(test.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-[1.8] text-stone-800 italic mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-stone-200/70">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{test.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5">{test.location}</p>
                  </div>
                  {test.verifiedPurchase && (
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-brand-dark tracking-wider uppercase bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1.5 rounded-lg">
                      <svg className="w-3 h-3 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.0" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. CONTACT & LOCATION
      ═══════════════════════════════════════════════ */}
      <section id="contact-section" className="py-16 md:py-24 bg-brand-bgLight">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left: Form */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent">Get in Touch</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-3 mb-4 leading-tight">
                Speak Directly With a Herbalist.
              </h2>
              <p className="text-base text-stone-700 mb-8 leading-relaxed">
                Have questions about dosage, your specific condition, or our sourcing philosophy? We respond to every message personally — no bots, no automated replies.
              </p>
              <ContactForm />
            </div>

            {/* Right: Address Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-white border border-stone-200/60 shadow-sm hover:shadow-lg transition-all duration-300 space-y-6">
                <h3 className="font-serif text-xl font-bold text-brand-dark">Find Us</h3>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-stone-500">Headquarters</h4>
                    <p className="text-sm text-stone-800 mt-1.5 leading-relaxed font-medium">
                      Alleviate Organic Ltd.<br />
                      Biaka Street, Molyko, PMB 237<br />
                      Buea, Southwest Region, Cameroon
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-stone-500">Support Hours</h4>
                    <p className="text-sm text-stone-800 mt-1.5 font-bold">Monday – Friday: 08:00 – 17:00 WAT</p>
                    <p className="text-xs text-stone-500 mt-1">Closed on Weekends & Cameroonian Public Holidays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-stone-500">Email</h4>
                    <p className="text-sm text-stone-800 mt-1.5 font-bold">support@alleviateorganic.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.107 1.522 5.834L.057 23.486a.5.5 0 00.609.61l5.718-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.195-1.453l-.37-.22-3.94 1.017 1.04-3.836-.242-.382A10 10 0 1112 22z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-stone-500">WhatsApp</h4>
                    <p className="text-sm text-stone-800 mt-1.5 font-bold">+237 657 447 445</p>
                    <p className="text-xs text-stone-500 mt-1">Fastest response channel</p>
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
