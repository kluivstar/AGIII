import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer w-full pt-20 pb-12 bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-10 max-w-container-max mx-auto">
        
        {/* Brand & Contact */}
        <div className="sm:col-span-2 md:col-span-1 mb-6 md:mb-0">
          <Link to="/" className="h-8 mb-8 flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY5q1CCTtiKkYjdPU1ShGqDxzVA2JqZ3zOhXI4I6r0Hi2vY48Hospvcneu6nX3wM1UlF1CEhdGFz7oy9OuhtFNzCM_6c65SEdR8VTUsunKNOp0oC5AXDZ2btzaqF-3ATbykIvSDPWWeT88xKRE_AYvXXUZQF8dFJQrUYVGHCcm59pI5LwrMnerXBH4XbQVYI4NeD_0xXmZxqzxk2w0dFwe12C9uMqTwB2gK_rYSzcHHdtXMHj9sWzkIWM8WMmAu5PcLva3BEH6Pnh" 
              alt="AG3 Logo" 
              className="h-8 w-auto object-contain" 
            />
          </Link>
          <div className="font-body-md text-on-surface-variant max-w-xs leading-relaxed space-y-2 mb-6">
            <p className="font-bold text-on-background">AG3 Management LLC</p>
            <p>82 Wendell Ave. Ste 100<br/>Pittsfield, MA 01201 US</p>
            <p>Email: <a href="mailto:info@ag3management.com" className="hover:text-primary-container font-medium transition-colors">info@ag3management.com</a></p>
            <p>Phone: <a href="tel:2023410757" className="hover:text-primary-container font-medium transition-colors">(202) 341-0757</a></p>
          </div>
          <Link to="/contact" className="bg-on-background text-white inline-flex items-center justify-center px-6 py-3 font-label-sm uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto text-xs">
            Business Inquiry
          </Link>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h5 className="font-label-sm text-on-background font-bold uppercase tracking-[0.2em] mb-6 text-xs border-b border-outline-variant pb-2 inline-block">Company</h5>
          <Link to="/" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">Home</Link>
          <Link to="/about" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">About</Link>
          <Link to="/services" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">Services</Link>
          <Link to="/case-studies" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">Case Studies</Link>
          <Link to="/contact" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">Contact</Link>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h5 className="font-label-sm text-on-background font-bold uppercase tracking-[0.2em] mb-6 text-xs border-b border-outline-variant pb-2 inline-block">Services</h5>
          <Link to="/services/strategic-planning" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium leading-tight">Strategic Planning &<br/>Business Development</Link>
          <Link to="/services/project-management" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium leading-tight">Project Management &<br/>Execution</Link>
          <Link to="/services/branding-marketing" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium leading-tight">Branding &<br/>Marketing</Link>
        </div>

        {/* Resources Links */}
        <div className="space-y-4">
          <h5 className="font-label-sm text-on-background font-bold uppercase tracking-[0.2em] mb-6 text-xs border-b border-outline-variant pb-2 inline-block">Resources</h5>
          <Link to="/faq" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">FAQ</Link>
          <Link to="/privacy-policy" className="block text-on-surface-variant hover:text-on-background transition-colors text-sm font-medium">Privacy Policy</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-8 px-6 md:px-10 max-w-container-max mx-auto border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-body-md text-xs text-on-surface-variant text-center md:text-left font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} AG3 Management LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
