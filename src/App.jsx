import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import StrategicPlanning from './pages/services/StrategicPlanning';
import ProjectManagement from './pages/services/ProjectManagement';
import BrandingMarketing from './pages/services/BrandingMarketing';

function App() {
  return (
    <Router>
      <AppLayout>
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
      </AppLayout>
    </Router>
  );
}

export default App;
