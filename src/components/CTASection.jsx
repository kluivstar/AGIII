import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="cta-section py-16 md:py-24 relative bg-surface-container-lowest border-t border-outline-variant">
      <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="border border-outline-variant p-8 md:p-24 relative overflow-hidden bg-primary shadow-xl shadow-primary/20 rounded-lg">
          <div className="absolute inset-0 grid-texture opacity-10"></div>
          <h2 className="font-display-lg text-3xl md:text-5xl mb-6 md:mb-8 relative z-10 text-white tracking-tighter">Ready to <span className="italic font-medium">execute?</span></h2>
          <p className="font-body-lg text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 md:mb-14 relative z-10 leading-relaxed">Let's discuss how we can help you move past obstacles and turn your concepts into measurable progress.</p>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-[#95da03] text-on-primary-fixed inline-flex items-center justify-center px-10 md:px-16 py-4 md:py-6 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-primary-fixed-dim transition-colors w-full md:w-auto">Start A Conversation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
