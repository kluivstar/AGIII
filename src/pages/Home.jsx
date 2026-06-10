import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20 filter grayscale contrast-125 mix-blend-multiply" alt="AG3 Management Strategy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbM-ZnbZf5iRU-Pu068Hpq3o6_QpPgqgFPy3H1T1ZspUl8X72j-SiEmeWKRIQ_G60IgtYvUPct919b_pv2o_IT440xhR7OnSGwVzDR6jZfr-b-QZitd3Ul4HB1sT--DRfwT7-4u0cuOTfLTwVEeohO1OhfNhLMNYPefpW3NVz1DTSS6OaLQsphyUkoM2liMvQtrA6xlurqyhpJHPRwL8vW9hDq9rjIo61gDLvFOzQyMaGqM1X2sm_E6j_YY_T8Pxyh2A7icmBv91z" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:to-white/40"></div>
        </div>
        
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-outline-variant mb-6 md:mb-10 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">AG3 Management LLC</span>
            </div>
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 leading-tight text-on-background tracking-tight">
                Moving You From<br />
                <span className="text-on-background italic font-medium">Ideas to Execution.</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 md:mb-12 leading-relaxed">
                We help individuals, entrepreneurs, nonprofits, and organizations overcome growth obstacles. Partner with us to create structure, gain momentum, and achieve measurable progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-on-background text-white inline-flex items-center justify-center px-10 py-4 font-label-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-colors text-center w-full sm:w-auto">Get Started</Link>
              <Link to="/services" className="border border-outline-variant hover:border-on-background bg-white/50 backdrop-blur-sm inline-flex items-center justify-center px-10 py-4 font-label-sm uppercase tracking-widest transition-all rounded-sm text-center font-bold w-full sm:w-auto">Our Services</Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-square border border-outline-variant p-4 md:p-6 bg-white shadow-xl shadow-neutral-100/50">
              <img alt="Strategic Incubation Concept" className="w-full h-full object-cover filter contrast-125 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIv2MnLYz2K97Zvn_-fqfWnEIb__SAXfOmr3ckOy4NmBNXfSBX9DUJfRyg7j0-jLHvu5nk0x0gzEo93twjUacFs16TgQjBaEews17hz-l5HkBEz32aXxrP_Kezu2fbFZmiK-yCYHo7HtC0jlnzmIhIsaq5ILFR7RvZV8VlnMrwxBw4ru6m4T3pAcck3-hZIw8FGlIZiJppan-E4xXE_yxUyDrcIYyJ3HnezTUB05hUyHCTJQQ9uFy6SA-8W9Gt52U8dY3pzHYnNXi8" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="community-partners border-y border-outline-variant bg-white py-12 md:py-16">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <span className="font-label-sm text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-8">Trusted By Our Community</span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-16 opacity-40">
            <span className="font-display-sm text-lg md:text-xl font-black italic tracking-tighter text-on-background">Quiet Legends</span>
            <span className="font-display-sm text-lg md:text-xl font-black italic tracking-tighter text-on-background">BlueArk</span>
            <span className="font-display-sm text-lg md:text-xl font-black italic tracking-tighter text-on-background">Sparsk Academy</span>
            <span className="font-display-sm text-lg md:text-xl font-black italic tracking-tighter text-on-background">Basketball Farm</span>
            <span className="font-display-sm text-lg md:text-xl font-black italic tracking-tighter text-on-background">Sonsight Wind</span>
          </div>
        </div>
      </section>

      {/* How We Help / Strategic Impact */}
      <section className="strategic-impact py-16 md:py-24 bg-white">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">How We Help</span>
          <h2 className="font-display-sm text-3xl md:text-5xl text-on-background tracking-tight mb-8">Bridging the Gap Between Concept and Reality.</h2>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            We understand that launching a new initiative or expanding an organization is inherently complex. We step in as your strategic partner to provide the missing infrastructure, operational oversight, and market positioning necessary to guarantee your success.
          </p>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="our-expertise py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">Our Expertise</span>
              <h2 className="font-display-sm text-3xl md:text-5xl text-on-background tracking-tight">Overcoming Your Challenges.</h2>
            </div>
            <div className="w-full md:w-auto md:max-w-sm">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                  We know that lack of clarity, limited resources, and operational complexity can stall your vision. Our core services provide the structure you need.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-outline-variant p-8 md:p-12 rounded-lg group hover:border-on-background transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
              <span className="material-symbols-outlined text-primary-fixed text-4xl md:text-5xl mb-6 md:mb-8 block font-light">strategy</span>
              <h3 className="font-headline-lg text-2xl mb-4 text-on-background group-hover:text-primary-container transition-colors">Strategic Planning</h3>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed flex-grow">Overcome lack of clarity with vision development, market analysis, and funding strategies to confidently build your path forward.</p>
              <Link to="/services/strategic-planning" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest group-hover:gap-4 transition-all mt-auto w-fit">
                  Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="bg-white border border-outline-variant p-8 md:p-12 rounded-lg group hover:border-on-background transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
              <span className="material-symbols-outlined text-primary-fixed text-4xl md:text-5xl mb-6 md:mb-8 block font-light">task_alt</span>
              <h3 className="font-headline-lg text-2xl mb-4 text-on-background group-hover:text-primary-container transition-colors">Project Management</h3>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed flex-grow">Solve difficulty executing plans through dedicated program management, budget oversight, and precise timeline execution.</p>
              <Link to="/services/project-management" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest group-hover:gap-4 transition-all mt-auto w-fit">
                  Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="bg-white border border-outline-variant p-8 md:p-12 rounded-lg group hover:border-on-background transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
              <span className="material-symbols-outlined text-primary-fixed text-4xl md:text-5xl mb-6 md:mb-8 block font-light">campaign</span>
              <h3 className="font-headline-lg text-2xl mb-4 text-on-background group-hover:text-primary-container transition-colors">Branding & Marketing</h3>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed flex-grow">Break through growth obstacles by clearly communicating your value, building credibility, and increasing your visibility.</p>
              <Link to="/services/branding-marketing" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest group-hover:gap-4 transition-all mt-auto w-fit">
                  Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process / Client Journey */}
      <section className="client-journey py-16 md:py-24 bg-white">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">Engagement Process</span>
            <h2 className="font-display-sm text-3xl md:text-5xl text-on-background tracking-tight">How We Work Together.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative p-8 border border-outline-variant rounded-lg bg-surface-container-lowest">
              <div className="text-4xl font-black text-on-surface-variant/10 mb-4 select-none">01</div>
              <h3 className="font-headline-lg text-xl mb-3 text-on-background">Discovery</h3>
              <p className="font-body-md text-on-surface-variant">We align on your vision, assess current obstacles, and define clear objectives.</p>
            </div>
            <div className="relative p-8 border border-outline-variant rounded-lg bg-surface-container-lowest">
              <div className="text-4xl font-black text-on-surface-variant/10 mb-4 select-none">02</div>
              <h3 className="font-headline-lg text-xl mb-3 text-on-background">Strategy</h3>
              <p className="font-body-md text-on-surface-variant">We build a comprehensive roadmap, detailing the exact steps to navigate market complexities.</p>
            </div>
            <div className="relative p-8 border border-outline-variant rounded-lg bg-surface-container-lowest">
              <div className="text-4xl font-black text-on-surface-variant/10 mb-4 select-none">03</div>
              <h3 className="font-headline-lg text-xl mb-3 text-on-background">Execution</h3>
              <p className="font-body-md text-on-surface-variant">Our team steps in to oversee timelines, coordinate stakeholders, and implement the plan.</p>
            </div>
            <div className="relative p-8 border border-outline-variant rounded-lg bg-surface-container-lowest">
              <div className="text-4xl font-black text-on-surface-variant/10 mb-4 select-none">04</div>
              <h3 className="font-headline-lg text-xl mb-3 text-on-background">Impact</h3>
              <p className="font-body-md text-on-surface-variant">We amplify your message to build market authority and deliver measurable, sustainable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Organizations */}
      <section className="industries py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-sm text-3xl md:text-5xl text-on-background tracking-tight mb-16">Who We Support.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">person</span>
              <h3 className="font-headline-lg text-xl mb-4">Entrepreneurs</h3>
              <p className="text-on-surface-variant">Helping visionaries structure their ideas into actionable, fundable businesses.</p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">volunteer_activism</span>
              <h3 className="font-headline-lg text-xl mb-4">Nonprofits</h3>
              <p className="text-on-surface-variant">Providing operational strategy and grant management to maximize community impact.</p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">domain</span>
              <h3 className="font-headline-lg text-xl mb-4">Organizations</h3>
              <p className="text-on-surface-variant">Guiding established businesses through complex expansion and branding initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview / Why AG3 */}
      <section className="why-ag3 py-16 md:py-24 bg-white">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">Why Choose AG3</span>
              <h2 className="font-display-sm text-3xl md:text-5xl mb-6 md:mb-10 text-on-background tracking-tight">Your Trusted <span className="font-black italic">Partner.</span></h2>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant mb-10 md:mb-12 leading-relaxed">
                  AG3 Management acts as a business incubator. We believe that every person possesses natural talent and potential. We partner with you to turn those talents into tangible, meaningful results.
              </p>
              <div className="space-y-8 md:space-y-12">
                <div className="flex gap-6 md:gap-8 group">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-outline-variant text-on-background font-bold group-hover:border-on-background group-hover:bg-on-background group-hover:text-white transition-colors rounded-sm">01</div>
                  <div>
                    <h4 className="font-headline-lg text-xl font-bold mb-2 md:mb-3 text-on-background">Human-Centered Incubation</h4>
                    <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">We support individuals and organizations with limited resources, ensuring missed opportunities turn into realized goals.</p>
                  </div>
                </div>
                <div className="flex gap-6 md:gap-8 group">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-outline-variant text-on-background font-bold group-hover:border-on-background group-hover:bg-on-background group-hover:text-white transition-colors rounded-sm">02</div>
                  <div>
                    <h4 className="font-headline-lg text-xl font-bold mb-2 md:mb-3 text-on-background">Proven Support Since 2013</h4>
                    <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">We've helped launch and support brands across America by combining strategic planning with consistent, persistent action.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="border border-outline-variant p-4 bg-white shadow-xl">
                <img alt="Business Collaboration" className="w-full aspect-[4/5] object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AHmLoGouNzV6XhGqvYyQszfTICsGwB6GAyVrCxPVmxFwoXq8pRo44-hWp00kMyboAnDDInn7JjwM9jvlU0FWA8tkzSEFOT7bnVA--8dPw7m5DPM6fLkfzQIJeEL1RYhWZP8a4sSyZ2GLv-aN71N1eQalTr69sPFR9WYYhFArbcq80m-831ql94w0Pd0xgtNfMuUZjUJ25sPJJaq3KwJvohnE8ZartuwBUzKRZbPd3iv0uAFtIj0lpOu1vorToWMji9wjwVKIXH3B" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-on-background p-6 md:p-10 text-white shadow-2xl">
                <div className="text-4xl md:text-5xl font-black mb-1 text-primary-container">10+</div>
                <div className="font-label-sm text-[10px] md:text-xs uppercase tracking-widest opacity-80">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 md:py-24 relative bg-surface-container-lowest border-t border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <div className="border border-outline-variant p-8 md:p-24 relative overflow-hidden bg-primary shadow-xl shadow-primary/20 rounded-lg">
            <div className="absolute inset-0 grid-texture opacity-10"></div>
            <h2 className="font-display-lg text-3xl md:text-5xl mb-6 md:mb-8 relative z-10 text-white tracking-tighter">Ready to <span className="italic font-medium">execute?</span></h2>
            <p className="font-body-lg text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 md:mb-14 relative z-10 leading-relaxed">Let's discuss how we can help you move past obstacles and turn your concepts into measurable progress.</p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-primary-container text-on-primary-fixed inline-flex items-center justify-center px-10 md:px-16 py-4 md:py-6 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-primary-fixed-dim transition-colors w-full md:w-auto">Start A Conversation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview py-16 md:py-24 bg-white border-t border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-sm text-3xl md:text-5xl text-on-background tracking-tight mb-6">Got Questions?</h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto md:text-lg">Learn more about our process, our pricing, and how we handle engagements across different industries.</p>
          <Link to="/faq" className="border border-on-background text-on-background inline-flex items-center justify-center px-10 md:px-16 py-4 md:py-6 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-on-background hover:text-white transition-colors w-full md:w-auto">
            Read the FAQ
          </Link>
        </div>
      </section>
    </main>
  );
}
