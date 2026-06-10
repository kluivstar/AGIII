import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-margin-desktop bg-white">
      <div className="max-w-3xl mx-auto">
        <span className="font-label-sm text-xs uppercase tracking-widest mb-6 block font-bold text-primary-container">Legal</span>
        <h1 className="font-display-sm text-4xl md:text-5xl mb-10 text-on-background tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-lg text-on-surface-variant font-body-md leading-relaxed">
          <p className="mb-8">Effective Date: January 1, 2024</p>
          
          <p className="mb-8">
            At AG3 Management LLC ("AG3", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you use our website or engage with our consulting services.
          </p>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. This includes:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and organization name when you fill out our contact or business inquiry forms.</li>
            <li><strong>Project Details:</strong> Information regarding your business goals, challenges, and requirements that you choose to share with us.</li>
          </ul>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>To respond to your inquiries and offer consulting support.</li>
            <li>To send administrative information, such as changes to our terms, conditions, and policies.</li>
            <li>To fulfill and manage any contracts or engagements we have with you.</li>
            <li>To improve our website, marketing efforts, and overall service offerings.</li>
          </ul>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">3. Cookies and Tracking Technologies</h2>
          <p className="mb-8">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. This helps us understand how visitors interact with our website and allows us to provide a better user experience. You can typically choose to set your browser to remove or reject cookies.
          </p>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">4. Analytics and Third-Party Tools</h2>
          <p className="mb-8">
            We use third-party analytics tools to help us measure traffic and usage trends for the service. These tools collect information sent by your device or our service, including the web pages you visit, add-ons, and other information that assists us in improving the service. This information is anonymized and aggregated.
          </p>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">5. Your Data Rights</h2>
          <p className="mb-8">
            Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. If you would like to request to review, update, or delete your personal information, please submit a request using the contact details below.
          </p>

          <h2 className="font-headline-lg text-2xl text-on-background mt-12 mb-6">6. Contact Information</h2>
          <p className="mb-4">If you have questions or comments about this notice, you may email us at:</p>
          <p className="mb-8 font-medium">
            <a href="mailto:info@ag3management.com" className="text-primary-container hover:text-on-background transition-colors">info@ag3management.com</a>
          </p>
          <p className="mb-4">Or by post to:</p>
          <p className="mb-8">
            AG3 Management LLC<br />
            82 Wendell Ave. Ste 100<br />
            Pittsfield, MA 01201 US
          </p>
        </div>
      </div>
    </main>
  );
}
