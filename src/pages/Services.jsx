import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

export default function Services() {
  return (
    <main>
      <SEO 
        title="Our Services" 
        description="AG3 Management provides comprehensive support structures designed to incubate and accelerate your organization's growth through strategic planning, project management, and branding."
        canonicalPath="/services"
      />
      <section className="services-hero relative min-h-[80vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-margin-desktop bg-white overflow-hidden">
        <div className="absolute inset-0 swiss-grid-line opacity-40 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter relative z-10">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="font-label-md text-xs md:text-sm text-on-surface-variant tracking-[0.4em] uppercase mb-6 md:mb-8 flex items-center gap-4 font-bold">
              <span className="w-8 h-[2px] bg-primary-container"></span> AG3 Management Services
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-10 text-on-background leading-tight tracking-tight">
                Executing <span className="font-black italic block mt-2">Ideas Into Outcomes.</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 md:mb-14 leading-relaxed">
                We know the journey from concept to reality is filled with operational complexity and growth obstacles. We act as a strategic partner, providing the structure and momentum you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link to="/contact" className="bg-on-background text-white inline-flex items-center justify-center font-label-md py-4 md:py-5 px-10 md:px-12 font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all rounded-sm text-center w-full sm:w-auto">Start Your Project</Link>
              <a href="#services-index" className="border border-outline-variant bg-white text-on-background inline-flex items-center justify-center font-label-md py-4 md:py-5 px-10 md:px-12 font-bold uppercase tracking-[0.2em] hover:border-on-background transition-all rounded-sm text-center w-full sm:w-auto">View Services</a>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:flex items-center justify-center relative">
            <div className="w-full aspect-[4/5] border border-outline-variant bg-white p-4 relative overflow-hidden group shadow-xl">
              <img loading="lazy" alt="Strategic Concept" className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCatbsVUAKvnMd21diAyLJ18CClY4TNqII6IuDxK8EsDcaDm4LmsDLZFHtk9fhnym2IbD00jpyuuFwtfdyfVmE6WQoO53BXPgau-nIrSA8B5TZjAQOfaVurZiHLoRa--EYfY_-XMnapjj-LZ1mVABAdIdNbaF5rJnvNcpjBarypsqQCFXIQYcqg9Ubuyo2huWVbaPCZayhGG6hmZ14Ywmb-oOGSXwsG9k_exzATWkkKSI9suVPkh5aJ8Nn-f7AE6UCLlDUWRXbhi3Qf" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-outline-variant">
                <p className="font-label-sm text-xs text-on-background font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-container rounded-full"></span> AG3 Philosophy
                </p>
                <p className="font-body-md text-on-surface font-medium leading-snug italic text-lg">"Execution is the ultimate leverage."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-index" className="services-overview py-16 md:py-24 px-6 md:px-margin-desktop bg-surface-container-lowest border-t border-on-background/5">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
            <div className="max-w-xl">
              <h2 className="font-display-sm text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight text-on-background">Core Services</h2>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">Comprehensive support structures designed to incubate and accelerate your organization's growth.</p>
            </div>
            <div className="font-label-sm text-xs md:text-sm text-on-surface uppercase tracking-[0.3em] font-bold border-b-2 border-primary-container pb-2 hidden md:block">01 — Services Index</div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Strategic Planning */}
            <div className="p-8 md:p-12 bg-white border border-outline-variant rounded-lg shadow-sm flex flex-col lg:flex-row gap-8 md:gap-12 hover:border-on-background transition-colors">
              <div className="lg:w-1/3">
                <span className="material-symbols-outlined text-primary-fixed text-5xl mb-6 block font-light">strategy</span>
                <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 font-bold text-on-background">Strategic Planning & Business Development</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Challenge</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">Lack of clarity and undefined market opportunities can stall even the best ideas before they launch.</p>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">How We Help</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">We develop clear visions, conduct deep market analysis, and structure operational and growth strategies.</p>
                  </div>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Vision Clarification</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Market Opportunities</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Operational Planning</li>
                  </ul>
                </div>
                <div className="space-y-6 flex flex-col justify-between">
                  <div>
                    <div>
                      <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Outcome</h4>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">A robust strategic foundation that secures partnerships, ensures funding readiness, and accelerates growth.</p>
                    </div>
                    <ul className="space-y-3 pt-2 mt-6">
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Partnership Development</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Funding Readiness</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Growth Strategies</li>
                    </ul>
                  </div>
                  <Link to="/services/strategic-planning" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest hover:gap-4 transition-all mt-6 w-fit border-b-2 border-on-background pb-1">
                      Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="p-8 md:p-12 bg-white border border-outline-variant rounded-lg shadow-sm flex flex-col lg:flex-row gap-8 md:gap-12 hover:border-on-background transition-colors">
              <div className="lg:w-1/3">
                <span className="material-symbols-outlined text-primary-fixed text-5xl mb-6 block font-light">task_alt</span>
                <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 font-bold text-on-background">Project Management & Execution</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Challenge</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">Difficulty executing plans due to limited resources, misaligned stakeholders, and operational complexity.</p>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">How We Help</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">We provide the organizational backbone, coordinating stakeholders, overseeing timelines, and managing program implementation.</p>
                  </div>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Project Coordination</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Stakeholder Management</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Timeline Oversight</li>
                  </ul>
                </div>
                <div className="space-y-6 flex flex-col justify-between">
                  <div>
                    <div>
                      <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Outcome</h4>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">Seamless execution of initiatives, strict adherence to budgets, and successful rollouts of complex programs.</p>
                    </div>
                    <ul className="space-y-3 pt-2 mt-6">
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Program Implementation</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Grant-funded Initiatives</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Operational Execution</li>
                    </ul>
                  </div>
                  <Link to="/services/project-management" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest hover:gap-4 transition-all mt-6 w-fit border-b-2 border-on-background pb-1">
                      Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Branding & Marketing */}
            <div className="p-8 md:p-12 bg-white border border-outline-variant rounded-lg shadow-sm flex flex-col lg:flex-row gap-8 md:gap-12 hover:border-on-background transition-colors">
              <div className="lg:w-1/3">
                <span className="material-symbols-outlined text-primary-fixed text-5xl mb-6 block font-light">campaign</span>
                <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 font-bold text-on-background">Branding & Marketing</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Challenge</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">Struggling to communicate value effectively, resulting in low visibility and missed connections with key audiences.</p>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">How We Help</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">We craft compelling brand positioning, develop resonant messaging, and design comprehensive content strategies.</p>
                  </div>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Brand Positioning</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Messaging Development</li>
                    <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Content Strategy</li>
                  </ul>
                </div>
                <div className="space-y-6 flex flex-col justify-between">
                  <div>
                    <div>
                      <h4 className="font-label-sm text-xs uppercase tracking-widest mb-2 font-bold text-primary-container">The Outcome</h4>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">A powerful brand presence that builds trust, clearly communicates value, and drives sustained audience engagement.</p>
                    </div>
                    <ul className="space-y-3 pt-2 mt-6">
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Campaign Planning</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Storytelling</li>
                      <li className="flex items-center gap-3 font-label-sm text-xs text-on-surface uppercase tracking-wider font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Visibility & Credibility</li>
                    </ul>
                  </div>
                  <Link to="/services/branding-marketing" className="inline-flex items-center gap-2 font-label-sm text-xs text-on-background font-bold uppercase tracking-widest hover:gap-4 transition-all mt-6 w-fit border-b-2 border-on-background pb-1">
                      Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-section py-16 md:py-32 px-6 md:px-margin-desktop bg-white border-t border-on-background/5 text-center">
        <div className="max-w-container-max mx-auto">
          <span className="font-label-sm text-xs uppercase tracking-widest mb-6 block font-bold text-primary-container">Take the Next Step</span>
          <h2 className="font-display-sm text-3xl md:text-5xl mb-12 tracking-tight text-on-background">Ready to <span className="font-black italic">execute?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 flex-wrap">
            <Link to="/contact" className="bg-on-background text-white font-label-md py-4 md:py-5 px-10 md:px-14 font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all rounded-sm w-full sm:w-auto">Book Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
