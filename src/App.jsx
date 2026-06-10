import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Insights = lazy(() => import('./pages/Insights'));
const Contact = lazy(() => import('./pages/Contact'));

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const FAQ = lazy(() => import('./pages/FAQ'));
const StrategicPlanning = lazy(() => import('./pages/services/StrategicPlanning'));
const ProjectManagement = lazy(() => import('./pages/services/ProjectManagement'));
const BrandingMarketing = lazy(() => import('./pages/services/BrandingMarketing'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-8 h-8 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services/strategic-planning" element={<StrategicPlanning />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />
            <Route path="/services/branding-marketing" element={<BrandingMarketing />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </Router>
  );
}

export default App;
