import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import brandImg from '../../assets/branding.jpg';

export default function BrandingMarketing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Branding & Marketing",
    "provider": {
      "@type": "Organization",
      "name": "AG3 Management LLC"
    },
    "description": "We develop compelling brand positioning and content strategies to ensure your story reaches and resonates with the right audience.",
    "serviceType": "Consulting"
  };

  return (
    <main className="min-h-screen pt-12 pb-24 bg-white">
      <SEO 
        title="Branding & Marketing" 
        description="AG3 Management crafts compelling brand positioning, messaging development, and content strategies to build market authority."
        canonicalPath="/services/branding-marketing"
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <Link to="/services" className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors mb-8 font-bold">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Services
            </Link>
            <h1 className="font-display-sm text-4xl md:text-6xl mb-6 text-on-background tracking-tight leading-tight">Branding & <br className="hidden md:block"/>Marketing</h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              We develop compelling brand positioning and content strategies to ensure your story reaches and resonates with the right audience.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[300px] md:h-[450px] bg-surface-container rounded-lg overflow-hidden border border-outline-variant shadow-lg">
            <img alt="Branding and Marketing" className="w-full h-full object-cover grayscale opacity-90" src={brandImg} />
          </div>
        </div>
      </section>

      {/* Overview & Challenges */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Challenge</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">Struggling for Visibility</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              In a crowded market, simply having a great service or product isn't enough. Organizations often struggle to communicate their value effectively, resulting in low visibility, a lack of credibility, and missed connections with key audiences.
            </p>
          </div>
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Overview</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">Building Market Authority</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              We help you cut through the noise. AG3 crafts compelling brand positioning, develops resonant messaging, and designs comprehensive content strategies that capture attention and build lasting trust.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-lowest py-20 md:py-32 border-y border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display-sm text-3xl md:text-4xl text-on-background tracking-tight">Our Marketing Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">1</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Brand Positioning</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Defining your unique value proposition and distinguishing your organization's voice within the competitive landscape.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">2</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Messaging Development</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Crafting clear, compelling narratives that directly address your audience's pain points and aspirations.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">3</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Content Strategy</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Designing campaigns and educational content that distribute your message across the right channels to maximize reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & CTA */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto pt-20 md:pt-12">
        <div className="bg-on-background text-white rounded-xl p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 grid-texture opacity-10"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display-sm text-3xl md:text-4xl mb-6 tracking-tight">The Outcome</h2>
              <p className="font-body-lg text-lg text-outline-variant leading-relaxed mb-8">
                A powerful digital presence supported by impactful storytelling. You build credibility, establish market authority, and drive sustained audience engagement.
              </p>
              <ul className="space-y-4 font-label-sm text-sm uppercase tracking-widest font-bold text-primary-container">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Campaign Planning</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Impactful Storytelling</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Visibility & Credibility</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start lg:items-center text-left lg:text-center">
              <h3 className="font-headline-lg text-2xl mb-6">Ready to amplify your message?</h3>
              <p className="text-outline-variant mb-10 max-w-sm">Let's build a brand presence that captures your audience's attention.</p>
              <Link to="/contact" className="bg-white text-on-background inline-flex items-center justify-center px-10 py-5 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                Boost Your Brand
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
