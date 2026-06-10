import React from 'react';
import { Link } from 'react-router-dom';

export default function StrategicPlanning() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <Link to="/services" className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors mb-8 font-bold">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Services
            </Link>
            <h1 className="font-display-sm text-4xl md:text-6xl mb-6 text-on-background tracking-tight leading-tight">Strategic Planning & <br className="hidden md:block"/>Business Development</h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              We build the foundational roadmap necessary to move your organization confidently from concept to implementation, ensuring sustainable growth and market resilience.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[300px] md:h-[450px] bg-surface-container rounded-lg overflow-hidden border border-outline-variant shadow-lg">
            <img alt="Strategic Planning" className="w-full h-full object-cover grayscale opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1cCLiCDkUFp4PUSSVrTw6XsliE0Y3SLnLutslzK9eDlYnnfbqziVR0R5C61Ay3jBy5p3kIdOLCLk1k19iLC2ELnOhFGQLOJKfpxznMZ0oDTz2S7y1U3RoeI_jKpq1JAS85SfkoBvX57JbYZEqyjKYM2py5-G3xEe0ZPmwUbTgbuMxoikPpO_zXoq9zNuUxlUtHfjtqb99OW9qDBo7V4Y1vv1JfDgjgAWSKrklU_UdT5DiyfySawmVrxiIv3UPUSGiDBMEcuqcgpSs" />
          </div>
        </div>
      </section>

      {/* Overview & Challenges */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Challenge</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">Navigating Uncertainty</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              Many organizations struggle with a lack of clarity regarding their next steps. Without a defined market opportunity or a solid operational plan, even the most innovative ideas fail to gain traction. Limited resources often mean that businesses cannot afford missteps in their growth strategies.
            </p>
          </div>
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Overview</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">A Clear Path Forward</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              AG3 acts as your strategic partner to develop clear, actionable business strategies. We dive deep into market analysis, refine your organizational vision, and structure funding and partnership strategies that create a clear pathway for expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-lowest py-20 md:py-32 border-y border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display-sm text-3xl md:text-4xl text-on-background tracking-tight">Our Strategic Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">1</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Vision Clarification</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">We work closely with leadership to define core objectives and align the organizational vision with tangible business goals.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">2</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Market Opportunities</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Conducting thorough market analysis to identify viable entry points, target demographics, and competitive advantages.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">3</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Operational Planning</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Structuring internal operations, partnership development plans, and ensuring funding readiness for sustainable scaling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & CTA */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto pt-20 md:pt-32">
        <div className="bg-on-background text-white rounded-xl p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 grid-texture opacity-10"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display-sm text-3xl md:text-4xl mb-6 tracking-tight">The Outcome</h2>
              <p className="font-body-lg text-lg text-outline-variant leading-relaxed mb-8">
                Clients walk away with a robust operational plan backed by strategic partnerships and a clear growth trajectory. We ensure you are positioned for long-term sustainability and market leadership.
              </p>
              <ul className="space-y-4 font-label-sm text-sm uppercase tracking-widest font-bold text-primary-container">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Growth Strategy</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Partnership Development</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Business Expansion</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start lg:items-center text-left lg:text-center">
              <h3 className="font-headline-lg text-2xl mb-6">Ready to build your strategy?</h3>
              <p className="text-outline-variant mb-10 max-w-sm">Let's discuss how we can structure your ideas into a concrete business plan.</p>
              <Link to="/contact" className="bg-white text-on-background inline-flex items-center justify-center px-10 py-5 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                Start A Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
