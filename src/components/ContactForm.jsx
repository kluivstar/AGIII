import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
  const {
    values,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  if (submitSuccess) {
    return (
      <div 
        className="p-8 border border-green-600/30 bg-green-50/50 rounded-lg shadow-sm text-center max-w-xl mx-auto lg:mx-0 transition-all duration-300"
        role="alert"
        aria-live="polite"
      >
        <span className="material-symbols-outlined text-green-600 text-5xl mb-4">
          check_circle
        </span>
        <h3 className="font-display-sm text-2xl mb-4 text-on-background">Message Sent!</h3>
        <p className="font-body-md text-tertiary mb-8 leading-relaxed">
          Thank you for contacting AG3 Management. Your inquiry has been received and a member of our team will respond shortly.
        </p>
        <button 
          onClick={resetForm}
          className="bg-on-background text-white inline-flex items-center justify-center px-8 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-neutral-800 transition-colors text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {submitError && (
        <div 
          className="mb-8 p-4 border border-red-600/30 bg-red-50/50 text-red-800 rounded-sm text-sm flex items-start gap-3"
          role="alert"
        >
          <span className="material-symbols-outlined text-red-600 flex-shrink-0">
            error
          </span>
          <span className="font-body-md">{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" noValidate>
        {/* Spam Protection / Honeypot field (hidden from sight, keyboard, and screen readers) */}
        <div className="opacity-0 absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <label htmlFor="botcheck">Do not fill this field if you are a human</label>
          <input 
            type="text" 
            id="botcheck" 
            name="botcheck" 
            value={values.botcheck} 
            onChange={handleChange} 
            tabIndex="-1" 
            autoComplete="off" 
          />
        </div>

        {/* 2 Column fields for name and organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Full Name */}
          <div className="space-y-2">
            <label 
              htmlFor="name" 
              className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
            >
              Full Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              disabled={isSubmitting}
              className={`w-full bg-white border px-4 py-3 md:py-4 transition-colors text-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm ${
                errors.name 
                  ? 'border-red-600 focus:border-red-600 focus:ring-red-600' 
                  : 'border-outline-variant focus:border-on-background'
              }`} 
              placeholder="John Doe" 
            />
            {errors.name && (
              <span id="name-error" className="text-xs text-red-600 font-medium block mt-1">
                {errors.name}
              </span>
            )}
          </div>

          {/* Organization */}
          <div className="space-y-2">
            <label 
              htmlFor="organization" 
              className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
            >
              Organization / Company
            </label>
            <input 
              type="text"
              id="organization"
              name="organization"
              value={values.organization}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white border border-outline-variant px-4 py-3 md:py-4 transition-colors text-on-background focus:border-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm" 
              placeholder="Your Company" 
            />
          </div>
        </div>

        {/* 2 Column fields for email and phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Email Address */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
            >
              Email Address <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={isSubmitting}
              className={`w-full bg-white border px-4 py-3 md:py-4 transition-colors text-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm ${
                errors.email 
                  ? 'border-red-600 focus:border-red-600 focus:ring-red-600' 
                  : 'border-outline-variant focus:border-on-background'
              }`} 
              placeholder="j.doe@company.com" 
            />
            {errors.email && (
              <span id="email-error" className="text-xs text-red-600 font-medium block mt-1">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label 
              htmlFor="phone" 
              className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
            >
              Phone Number
            </label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white border border-outline-variant px-4 py-3 md:py-4 transition-colors text-on-background focus:border-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm" 
              placeholder="(202) 555-0199" 
            />
          </div>
        </div>

        {/* Service Interested In */}
        <div className="space-y-2">
          <label 
            htmlFor="service" 
            className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
          >
            Service Interested In
          </label>
          <div className="relative">
            <select 
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white border border-outline-variant px-4 py-3 md:py-4 transition-colors text-on-background focus:border-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm appearance-none cursor-pointer"
            >
              <option value="">Select a Service...</option>
              <option value="Strategic Planning & Business Development">Strategic Planning & Business Development</option>
              <option value="Project Management & Execution">Project Management & Execution</option>
              <option value="Branding & Marketing">Branding & Marketing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label 
            htmlFor="message" 
            className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold block"
          >
            Message <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea 
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            disabled={isSubmitting}
            rows="5"
            className={`w-full bg-white border px-4 py-3 md:py-4 transition-colors text-on-background focus:outline-none focus:ring-1 focus:ring-on-background rounded-sm resize-y min-h-[120px] ${
              errors.message 
                ? 'border-red-600 focus:border-red-600 focus:ring-red-600' 
                : 'border-outline-variant focus:border-on-background'
            }`} 
            placeholder="Describe your vision, challenges, and requirements..." 
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-red-600 font-medium block mt-1">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-on-background text-white py-4 md:py-5 font-bold uppercase tracking-[0.2em] transition-all flex justify-between items-center px-6 md:px-10 group rounded-sm text-sm md:text-base ${
              isSubmitting ? 'opacity-75 cursor-not-allowed bg-neutral-700' : 'hover:bg-neutral-800'
            }`}
          >
            {isSubmitting ? (
              <>
                Submitting Inquiry...
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              </>
            ) : (
              <>
                Initiate Consultation
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
