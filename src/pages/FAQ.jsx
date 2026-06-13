import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does AG3 Management do?",
      answer: "AG3 Management LLC acts as a strategic consulting firm and business incubator. We help individuals, entrepreneurs, and organizations turn their ideas into actionable, measurable outcomes through strategic planning, project management, and branding."
    },
    {
      question: "Who do you work with?",
      answer: "We work with a wide range of clients including ambitious individuals, startups, established businesses, and nonprofits. Our primary focus is on clients who have strong vision but may face challenges with limited resources, lack of clarity, or operational complexity."
    },
    {
      question: "How does the consulting process work?",
      answer: "Our process begins with a deep discovery phase to understand your vision and current obstacles. We then formulate a tailored strategy, move into rigorous project management and execution, and finally amplify your efforts through targeted branding and marketing."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes. Acting as a business incubator is one of our core strengths. We provide the structural support, market analysis, and strategic roadmap that startups need to confidently launch and scale their operations."
    },
    {
      question: "Do you support nonprofits?",
      answer: "Absolutely. We help nonprofits develop sustainable funding strategies, manage grant-funded initiatives, and craft compelling narratives that increase their visibility and community impact."
    },
    {
      question: "How are projects priced?",
      answer: "Because every organization's needs are unique, our pricing is customized based on the scope, duration, and specific requirements of the engagement. We discuss all financial structures transparently during our initial consultation."
    },
    {
      question: "What industries do you support?",
      answer: "We are industry-agnostic. Our foundational business principles—strategic planning, precise execution, and strong market positioning—are effective across various sectors including technology, retail, community development, and professional services."
    },
    {
      question: "How do I get started?",
      answer: "The best way to begin is by initiating a conversation. You can fill out the business inquiry form on our Contact page with details about your current challenges, and we will schedule an introductory consultation to discuss how we can help."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 md:px-margin-desktop bg-surface-container-lowest">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about AG3 Management's consulting services, incubation process, pricing, and how we help organizations achieve their goals."
        canonicalPath="/faq"
        schema={faqSchema}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-label-sm text-xs uppercase tracking-widest mb-6 block font-bold text-primary-container">Support</span>
          <h1 className="font-display-sm text-4xl md:text-5xl mb-6 text-on-background tracking-tight">Frequently Asked Questions</h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">Find answers to common questions about our services, process, and how we help organizations achieve their goals.</p>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-outline-variant rounded-lg bg-white overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-on-background' : 'hover:border-on-background/50'}`}
            >
              <button 
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-headline-lg text-lg md:text-xl font-bold text-on-background pr-8">{faq.question}</span>
                <span className={`material-symbols-outlined text-primary-container transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-8 md:p-12 border border-outline-variant bg-white rounded-lg shadow-sm">
          <h2 className="font-headline-lg text-2xl mb-4 text-on-background">Still have questions?</h2>
          <p className="font-body-md text-on-surface-variant mb-8">We're ready to discuss your specific needs and how we can help.</p>
          <Link to="/contact" className="bg-[#95da03] text-white inline-flex items-center justify-center px-10 py-4 font-label-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
