import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <section className="about-hero relative pt-32 pb-20 md:pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-primary-container rounded-full"></div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-tertiary">Who We Are</span>
          </div>
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8 leading-tight tracking-tight">
              Transforming Ideas <br /><span className="italic font-light">Into Economic Opportunity.</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-tertiary max-w-2xl leading-relaxed">
              AG3 Management LLC is a consulting firm that helps individuals formulate and execute ideas that create value. We were founded to help people with limited resources develop products, services, brands, and initiatives that positively impact their communities and markets.
          </p>
        </div>
        <div className="mt-12 md:mt-20 w-full aspect-video md:aspect-[21/9] bg-surface-container-low overflow-hidden border border-on-background/5 rounded-lg shadow-sm">
          <img className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" data-alt="AG3 Incubation Center Concept" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6yFG4O56hLaKiqV43cLzChciOW86-JViuGk6E1Sou2InCeWwEQBKnvjzSsDXMQPkF4fhCjjA869LX88owYqCdwI1vVOJZ4jsuv4QXv_vDTfIlSEoGh6L5-0wihWGeBmkBKvtFQ2XQ8vaLUnsHfZuaxw-i3KIN3iYUpjdilQccCfOYyFljY77jD0twCoIZ9OHqlLGePVCBzjWF-88L8Z9VjRShz6ujFRw0C282Lem-GAu6zh8nZPQHYSY4cZKGoSf8njvb0TKofMw" />
        </div>
      </section>

      <section className="about-philosophy py-16 md:py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto border-t border-on-background/5">
        <div className="flex flex-col md:flex-row gap-12 md:gap-gutter">
          <div className="md:w-1/3">
            <h2 className="font-display-sm text-3xl md:text-5xl text-on-background md:sticky md:top-32 tracking-tight">Our <br className="hidden md:block" />Philosophy</h2>
          </div>
          <div className="md:w-2/3 space-y-12 md:space-y-16">
            <p className="font-body-lg text-lg md:text-xl text-tertiary border-l-2 border-primary-container pl-6 md:pl-10 leading-relaxed">
                We believe that every person possesses natural talent and potential. Through sound business principles, consistent action, strategic planning, and shared resources, we help our clients transform their vision into meaningful outcomes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 pt-4 md:pt-8">
              <div className="group">
                <span className="material-symbols-outlined text-on-background/30 group-hover:text-primary-container transition-colors mb-4 md:mb-6 text-4xl">groups</span>
                <h3 className="font-headline-lg text-xl md:text-2xl mb-3">Shared Resources</h3>
                <p className="text-tertiary leading-relaxed">We pool resources to overcome the limitations that often hold back great ideas.</p>
              </div>
              <div className="group">
                <span className="material-symbols-outlined text-on-background/30 group-hover:text-primary-container transition-colors mb-4 md:mb-6 text-4xl">rocket_launch</span>
                <h3 className="font-headline-lg text-xl md:text-2xl mb-3">Consistent Action</h3>
                <p className="text-tertiary leading-relaxed">We focus on execution. A vision is only as powerful as the consistent effort applied to realize it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission py-16 md:py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter">
          <div className="lg:col-span-7 bg-on-background text-white p-10 md:p-16 flex flex-col justify-between min-h-[350px] md:min-h-[450px] rounded-lg shadow-xl">
            <h3 className="font-label-sm text-xs uppercase tracking-widest opacity-50 mb-8">Our Mission</h3>
            <p className="font-headline-lg text-2xl md:text-4xl leading-tight max-w-lg mb-8">
                To act as a business incubator for clients with limited resources, ensuring brilliant ideas are developed into actionable, achievable outcomes.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-8 md:w-12 h-[1px] bg-primary-container"></div>
              <span className="font-label-sm text-xs text-primary-container uppercase tracking-widest font-bold">Empowering Potential</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest border border-on-background/10 p-10 md:p-16 flex flex-col justify-between min-h-[300px] md:min-h-[450px] rounded-lg shadow-sm">
            <h3 className="font-label-sm text-xs uppercase tracking-widest text-tertiary mb-8">Impact & Vision</h3>
            <p className="font-headline-lg text-2xl md:text-3xl text-on-background mb-8 leading-tight">
                Helping individuals and organizations move confidently from concept to implementation, building a legacy of positive market and community impact.
            </p>
            <span className="material-symbols-outlined text-on-background/50 text-5xl mt-auto">north_east</span>
          </div>
        </div>
      </section>

      <section className="about-history py-16 md:py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-white border-t border-on-background/5">
        <h2 className="font-display-sm text-3xl md:text-5xl mb-12 md:mb-20 tracking-tight text-center md:text-left">Since 2013</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-on-background/10 md:-translate-x-1/2"></div>
          <div className="space-y-16 md:space-y-24">
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 pl-12 md:pl-0 md:pr-16 md:text-right">
                <h5 className="font-label-sm text-xs uppercase text-primary-container font-bold mb-2 tracking-widest">2013</h5>
                <h4 className="font-headline-lg text-xl md:text-2xl mb-3 font-bold">Foundation</h4>
                <p className="text-tertiary md:max-w-sm md:ml-auto leading-relaxed">AG3 Management LLC was established to help individuals formulate and develop ideas into actionable value, specifically supporting those with limited resources.</p>
              </div>
              <div className="absolute left-[11px] md:left-1/2 w-4 h-4 bg-on-background rounded-full -translate-x-1/2 border-4 border-white shadow-sm mt-1 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-16 mt-4 md:mt-0 hidden md:block"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
              <div className="absolute left-[11px] md:left-1/2 w-4 h-4 bg-on-background rounded-full -translate-x-1/2 border-4 border-white shadow-sm mt-1 md:mt-0"></div>
              <div className="md:w-1/2 pl-12 md:pl-16">
                <h5 className="font-label-sm text-xs uppercase text-primary-container font-bold mb-2 tracking-widest">Growth</h5>
                <h4 className="font-headline-lg text-xl md:text-2xl mb-3 font-bold">Incubating Success</h4>
                <p className="text-tertiary md:max-w-sm leading-relaxed">Over the years, we've successfully helped launch and support brands across America, guiding them through the complexities of execution and marketing.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 pl-12 md:pl-0 md:pr-16 md:text-right">
                <h5 className="font-label-sm text-xs uppercase text-primary-container font-bold mb-2 tracking-widest">Present</h5>
                <h4 className="font-headline-lg text-xl md:text-2xl mb-3 font-bold">Strategic Partnership</h4>
                <p className="text-tertiary md:max-w-sm md:ml-auto leading-relaxed">Today, we combine strategic planning, project management, and branding to build sustainable economic opportunities for entrepreneurs and organizations alike.</p>
              </div>
              <div className="absolute left-[11px] md:left-1/2 w-4 h-4 bg-on-background rounded-full -translate-x-1/2 border-4 border-white shadow-sm mt-1 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-16 mt-4 md:mt-0 hidden md:block"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-section py-16 md:py-24 bg-surface-container-lowest text-center px-6 border-t border-outline-variant">
        <h2 className="font-display-sm text-3xl md:text-5xl mb-6 tracking-tight text-on-background">Ready to grow?</h2>
        <p className="font-body-lg text-lg md:text-xl text-tertiary max-w-2xl mx-auto mb-10">Let's work together to transform your vision into a meaningful outcome.</p>
        <Link to="/contact" className="bg-on-background text-white inline-flex items-center justify-center px-10 md:px-16 py-4 md:py-6 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto">
            Get Started
        </Link>
      </section>
    </main>
  );
}
