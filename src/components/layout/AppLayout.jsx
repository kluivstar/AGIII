import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout({ children }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Add padding top to account for fixed navbar. Mobile navbar is h-16, Desktop is md:h-20 */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
