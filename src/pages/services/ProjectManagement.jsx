import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import projectImag from '../../assets/project-management.jpg';

export default function ProjectManagement() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Project Management & Execution",
    "provider": {
      "@type": "Organization",
      "name": "AG3 Management LLC"
    },
    "description": "We act as the operational backbone for our clients, turning complex plans into organized, measurable progress through precise oversight.",
    "serviceType": "Consulting"
  };

  return (
    <main className="min-h-screen pt-12 pb-24 bg-white">
      <SEO 
        title="Project Management & Execution" 
        description="AG3 Management provides rigorous project management consulting to oversee timelines, manage implementations, and coordinate stakeholders."
        canonicalPath="/services/project-management"
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <Link to="/services" className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors mb-8 font-bold">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Services
            </Link>
            <h1 className="font-display-sm text-4xl md:text-6xl mb-6 text-on-background tracking-tight leading-tight">Project Management <br className="hidden md:block"/>& Execution</h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              We act as the operational backbone for our clients, turning complex plans into organized, measurable progress through precise oversight.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[300px] md:h-[450px] bg-surface-container rounded-lg overflow-hidden border border-outline-variant shadow-lg">
            <img alt="Project Execution" className="w-full h-full object-cover grayscale opacity-90" src={projectImag}/>
          </div>
        </div>
      </section>

      {/* Overview & Challenges */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Challenge</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">Operational Complexity</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              Execution is where many great ideas falter. Organizations often face difficulty executing plans due to limited resources, misaligned stakeholders, and the sheer operational complexity of coordinating multiple moving parts across timelines and budgets.
            </p>
          </div>
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold mb-4 block">The Overview</span>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-6 text-on-background">Structured Accountability</h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
              AG3 provides rigorous project coordination and stakeholder management. We oversee timelines, manage program implementation, and handle grant-funded initiatives to ensure your operations are executed flawlessly, on time, and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-lowest py-20 md:py-32 border-y border-outline-variant">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display-sm text-3xl md:text-4xl text-on-background tracking-tight">Our Execution Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">1</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Project Coordination</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Defining scope, establishing workflows, and deploying the right tools to coordinate tasks effectively across the entire team.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">2</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Stakeholder Management</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Aligning all parties—from investors to internal teams—ensuring clear communication and unified objectives.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="text-[120px] font-black text-on-surface-variant/5 absolute -right-4 -bottom-8 leading-none select-none">3</div>
              <h3 className="font-headline-lg text-xl md:text-2xl mb-4 relative z-10 text-on-background">Timeline Oversight</h3>
              <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">Rigorous monitoring of milestones and budgets to prevent scope creep and guarantee on-time delivery of the initiative.</p>
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
                Seamless execution of complex initiatives, strict adherence to budgets, and successful operational rollouts. You gain the momentum necessary to push past obstacles.
              </p>
              <ul className="space-y-4 font-label-sm text-sm uppercase tracking-widest font-bold text-primary-container">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Program Implementation</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Grant-Funded Initiatives</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined">check_circle</span> Operational Execution</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start lg:items-center text-left lg:text-center">
              <h3 className="font-headline-lg text-2xl mb-6">Need operational leverage?</h3>
              <p className="text-outline-variant mb-10 max-w-sm">Partner with us to manage the execution of your most critical projects.</p>
              <Link to="/contact" className="bg-white text-on-background inline-flex items-center justify-center px-10 py-5 font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
