'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-bgCard border border-brand-dark/10 rounded-xl p-8 text-center shadow-sm transition-all duration-500 animate-fadeIn">
        <div className="w-12 h-12 bg-brand-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-brand-dark font-bold mb-2">Message Received</h3>
        <p className="text-stone-600 text-sm max-w-sm mx-auto">
          Thank you for reaching out to Alleviate Organic. A clean medical botanist from our team will review your message and reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs tracking-wider uppercase font-semibold text-brand-dark hover:text-brand-accent focus:outline-none"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g., Jane Doe"
          className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900 placeholder-stone-400"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="e.g., jane@example.com"
          className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-stone-900 placeholder-stone-400"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold tracking-wider uppercase text-stone-600 mb-2">
          Your Inquiry
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Describe your health goals or ask about specific herbs..."
          className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all resize-none text-stone-900 placeholder-stone-400"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-xs font-medium">An error occurred. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-dark hover:bg-emerald-900 text-stone-50 font-semibold text-sm tracking-wide uppercase py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Verifying Details...</span>
          </>
        ) : (
          <span>Send Secure Message</span>
        )}
      </button>
    </form>
  );
}
