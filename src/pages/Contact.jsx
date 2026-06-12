import React from 'react';
import SEO from '../components/seo/SEO';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 bg-white">
      <SEO 
        title="Contact Us" 
        description="Ready to start a conversation? Contact AG3 Management LLC to discuss how we can help you overcome obstacles and execute your vision."
        canonicalPath="/contact"
      />
      <section className="contact-section relative flex flex-col lg:flex-row min-h-[calc(100vh-100px)]">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant -translate-x-1/2"></div>

        {/* Contact Info Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-xl mx-auto lg:mx-0">
            <span className="font-label-sm text-xs md:text-sm text-on-surface-variant uppercase tracking-widest mb-6 block border-l-2 border-primary-container pl-4 font-bold">Contact AG3</span>
            <h1 className="font-display-sm text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 text-on-background tracking-tight leading-tight">Start A <br className="hidden md:block" />Conversation.</h1>
            <p className="font-body-lg text-lg md:text-xl text-tertiary mb-16 md:mb-20 leading-relaxed max-w-lg">
                Whether you are an individual with a breakthrough idea or an organization seeking strategic expansion, we are ready to help you overcome obstacles and execute your vision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
              <div>
                <h2 className="font-label-sm text-xs md:text-sm text-on-surface-variant mb-4 tracking-widest font-bold uppercase">Headquarters</h2>
                <p className="font-body-md text-base md:text-lg text-on-background leading-relaxed">
                    82 Wendell Ave. Ste 100<br />
                    Pittsfield, MA 01201 US
                </p>
              </div>
              <div>
                <h2 className="font-label-sm text-xs md:text-sm text-on-surface-variant mb-4 tracking-widest font-bold uppercase">Direct Contact</h2>
                <p className="font-body-md text-base md:text-lg text-on-background leading-relaxed">
                    <a href="mailto:info@ag3management.com" className="hover:text-primary-container transition-colors font-medium">info@ag3management.com</a><br />
                    <a href="tel:2023410757" className="hover:text-primary-container transition-colors font-medium pt-2 block">(202) 341-0757</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 bg-surface-container-lowest flex flex-col justify-center border-t lg:border-t-0 border-outline-variant">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <div className="mb-10 md:mb-14">
              <h2 className="font-display-sm text-3xl md:text-4xl mb-4 text-on-background tracking-tight">Business Inquiry</h2>
              <p className="text-tertiary font-body-md text-base md:text-lg max-w-md leading-relaxed">Tell us about your strategic challenges and requirements to begin the consultative process.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
