import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  const getDesktopLinkClass = ({ isActive }) => 
    `font-label-sm uppercase tracking-wider ${isActive ? 'text-on-background border-b border-on-background pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`;

  const getMobileLinkClass = ({ isActive }) =>
    `font-headline-sm text-3xl font-medium transition-colors ${isActive ? 'text-primary-container' : 'text-on-background'}`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
        <nav className="flex justify-between items-center h-16 md:h-20 px-6 md:px-20 max-w-container-max mx-auto" aria-label="Main Navigation">
          <Link to="/" className="h-8 flex items-center" aria-label="Home">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY5q1CCTtiKkYjdPU1ShGqDxzVA2JqZ3zOhXI4I6r0Hi2vY48Hospvcneu6nX3wM1UlF1CEhdGFz7oy9OuhtFNzCM_6c65SEdR8VTUsunKNOp0oC5AXDZ2btzaqF-3ATbykIvSDPWWeT88xKRE_AYvXXUZQF8dFJQrUYVGHCcm59pI5LwrMnerXBH4XbQVYI4NeD_0xXmZxqzxk2w0dFwe12C9uMqTwB2gK_rYSzcHHdtXMHj9sWzkIWM8WMmAu5PcLva3BEH6Pnh" 
              alt="AGIII Logo" 
              className="h-full w-auto object-contain" 
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={getDesktopLinkClass}>
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={() => navigate('/contact')}
              className="bg-on-background text-white font-label-sm px-6 py-2.5 uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all rounded-sm whitespace-nowrap"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2" 
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-on-background">menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 bg-white z-[60] flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-on-background/5 h-16">
          <Link to="/" onClick={closeMenu}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY5q1CCTtiKkYjdPU1ShGqDxzVA2JqZ3zOhXI4I6r0Hi2vY48Hospvcneu6nX3wM1UlF1CEhdGFz7oy9OuhtFNzCM_6c65SEdR8VTUsunKNOp0oC5AXDZ2btzaqF-3ATbykIvSDPWWeT88xKRE_AYvXXUZQF8dFJQrUYVGHCcm59pI5LwrMnerXBH4XbQVYI4NeD_0xXmZxqzxk2w0dFwe12C9uMqTwB2gK_rYSzcHHdtXMHj9sWzkIWM8WMmAu5PcLva3BEH6Pnh" 
              alt="AGIII Logo" 
              className="h-8 w-auto object-contain" 
            />
          </Link>
          <button 
            className="p-2 -mr-2" 
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <span className="material-symbols-outlined text-on-background">close</span>
          </button>
        </div>
        
        <div className="flex flex-col p-6 space-y-8 mt-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              onClick={closeMenu}
              className={getMobileLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        
        <div className="mt-auto p-6 pb-12">
          <button 
            onClick={() => { closeMenu(); navigate('/contact'); }}
            className="w-full bg-on-background text-white font-label-md py-4 rounded-sm uppercase tracking-widest font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
