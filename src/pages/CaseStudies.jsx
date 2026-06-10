import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <main className="pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Filters */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-10 md:mb-20">
        <div className="border-b border-outline-variant flex gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-2">
          <button className="pb-4 md:pb-6 font-label-md text-sm md:text-base uppercase text-on-background border-b-2 border-on-background whitespace-nowrap font-bold">All Case Studies</button>
          <button className="pb-4 md:pb-6 font-label-md text-sm md:text-base uppercase text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap font-bold">Strategic Planning</button>
          <button className="pb-4 md:pb-6 font-label-md text-sm md:text-base uppercase text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap font-bold">Project Management</button>
          <button className="pb-4 md:pb-6 font-label-md text-sm md:text-base uppercase text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap font-bold">Branding & Marketing</button>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="group relative overflow-hidden bg-white border border-outline-variant shadow-lg rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-[650px] relative overflow-hidden bg-surface-container">
              <img alt="Placeholder Case Study" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPttMifeY7uiSUDm2HBXoQner30D3mo9lDtrkM1HIQWByzukLSr7b394w9Abp2cuLnIzSq4hPZJEuQsL1UqyM7BGGR0J1KWA3Zz52XdovcFxTTfuVTnSlcvfvUKUonpu3Pjg9sbOz4QfmMj9zFlqoX1QLA6Bxkw11m1AsPikF5GnDkPvzIOwWZW_J_-CuLp0zX-R4IuPcWJhBz2am0i7LhDuyIN_MGyh7hefBwzZDTTSwC9mWOLuW0YLdRjjjY_ygFvPiEgvIVg-1o" />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white/95 backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-3 mb-8 md:mb-12">
                  <span className="w-2 md:w-3 h-2 md:h-3 bg-primary-container rounded-full"></span>
                  <span className="font-label-sm text-xs md:text-sm uppercase text-on-surface-variant font-bold tracking-widest">[Client Name Placeholder]</span>
                </div>
                <h2 className="font-display-sm text-3xl md:text-4xl mb-8 md:mb-10 leading-tight text-on-background tracking-tight">Transforming Vision into Value.</h2>
                <div className="space-y-6 md:space-y-8 mb-8 md:mb-16">
                  <div>
                    <span className="font-label-sm text-xs md:text-sm uppercase text-primary-container font-bold block mb-2 tracking-widest">Challenge</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">[Brief description of the initial problem or opportunity the client faced before partnering with AG3.]</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-xs md:text-sm uppercase text-primary-container font-bold block mb-2 tracking-widest">Strategy</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">[How AG3 formulated a tailored vision, market approach, or brand positioning for the client.]</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-xs md:text-sm uppercase text-primary-container font-bold block mb-2 tracking-widest">Execution</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">[The project management and operational steps taken to turn the strategy into measurable progress.]</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-xs md:text-sm uppercase text-primary-container font-bold block mb-2 tracking-widest">Outcome</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">[The actionable, achievable results delivered. E.g., increased revenue, expanded market share.]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Case Studies */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          
          {/* Card 1 */}
          <div className="flex flex-col bg-white hover:-translate-y-2 transition-transform duration-300 rounded-lg overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg group">
            <div className="h-64 md:h-80 relative overflow-hidden bg-surface-container border-b border-outline-variant">
              <div className="absolute inset-0 flex items-center justify-center font-bold text-tertiary">[Image Placeholder]</div>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <span className="font-label-sm text-xs uppercase text-primary-container mb-4 font-bold tracking-widest">Strategic Planning</span>
              <h3 className="font-headline-lg text-2xl mb-6 text-on-background group-hover:text-primary-container transition-colors">[Case Study Title]</h3>
              <div className="space-y-3 mb-8 flex-1">
                <div>
                  <span className="font-bold text-sm">Challenge:</span> <span className="text-on-surface-variant text-sm">[Client challenge placeholder]</span>
                </div>
                <div>
                  <span className="font-bold text-sm">Strategy:</span> <span className="text-on-surface-variant text-sm">[Strategy overview placeholder]</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant flex justify-between items-center mt-auto">
                <div>
                  <div className="font-label-sm text-xs uppercase text-on-surface-variant mb-1 font-bold">Outcome</div>
                  <div className="text-lg font-bold text-on-background">[Key Result]</div>
                </div>
                <span className="material-symbols-outlined text-primary-container text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white hover:-translate-y-2 transition-transform duration-300 rounded-lg overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg group">
            <div className="h-64 md:h-80 relative overflow-hidden bg-surface-container border-b border-outline-variant">
              <div className="absolute inset-0 flex items-center justify-center font-bold text-tertiary">[Image Placeholder]</div>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <span className="font-label-sm text-xs uppercase text-primary-container mb-4 font-bold tracking-widest">Project Management</span>
              <h3 className="font-headline-lg text-2xl mb-6 text-on-background group-hover:text-primary-container transition-colors">[Case Study Title]</h3>
              <div className="space-y-3 mb-8 flex-1">
                <div>
                  <span className="font-bold text-sm">Challenge:</span> <span className="text-on-surface-variant text-sm">[Client challenge placeholder]</span>
                </div>
                <div>
                  <span className="font-bold text-sm">Execution:</span> <span className="text-on-surface-variant text-sm">[Execution overview placeholder]</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant flex justify-between items-center mt-auto">
                <div>
                  <div className="font-label-sm text-xs uppercase text-on-surface-variant mb-1 font-bold">Outcome</div>
                  <div className="text-lg font-bold text-on-background">[Key Result]</div>
                </div>
                <span className="material-symbols-outlined text-primary-container text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white hover:-translate-y-2 transition-transform duration-300 rounded-lg overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg group">
            <div className="h-64 md:h-80 relative overflow-hidden bg-surface-container border-b border-outline-variant">
              <div className="absolute inset-0 flex items-center justify-center font-bold text-tertiary">[Image Placeholder]</div>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <span className="font-label-sm text-xs uppercase text-primary-container mb-4 font-bold tracking-widest">Branding & Marketing</span>
              <h3 className="font-headline-lg text-2xl mb-6 text-on-background group-hover:text-primary-container transition-colors">[Case Study Title]</h3>
              <div className="space-y-3 mb-8 flex-1">
                <div>
                  <span className="font-bold text-sm">Challenge:</span> <span className="text-on-surface-variant text-sm">[Client challenge placeholder]</span>
                </div>
                <div>
                  <span className="font-bold text-sm">Strategy:</span> <span className="text-on-surface-variant text-sm">[Strategy overview placeholder]</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant flex justify-between items-center mt-auto">
                <div>
                  <div className="font-label-sm text-xs uppercase text-on-surface-variant mb-1 font-bold">Outcome</div>
                  <div className="text-lg font-bold text-on-background">[Key Result]</div>
                </div>
                <span className="material-symbols-outlined text-primary-container text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section mt-16 md:mt-32 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="border border-outline-variant rounded-lg bg-surface-container-lowest py-16 md:py-32 px-6 flex flex-col items-center text-center shadow-sm">
          <span className="font-label-sm text-xs uppercase text-primary-container mb-6 block font-bold tracking-widest">Partner With Us</span>
          <h2 className="font-display-sm text-3xl md:text-5xl mb-8 max-w-4xl leading-tight tracking-tight text-on-background">Become our next success story.</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 md:mb-14 max-w-2xl leading-relaxed">Let's discuss how we can help incubate your ideas and transform them into measurable outcomes.</p>
          <div className="flex justify-center w-full sm:w-auto">
            <Link to="/contact" className="bg-on-background text-white px-10 md:px-16 py-4 md:py-6 font-label-md text-sm uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors rounded-sm w-full sm:w-auto">
                Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
