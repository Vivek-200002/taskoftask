import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing Page Components
import ProjectsSection from './components/Landing/ProjectsSection';
import ClientsSection from './components/Landing/ClientsSection';
import ContactForm from './components/Landing/ContactForm';
import NewsletterNavbar from './components/Landing/Newsletter';

// Admin Panel
import AdminPanel from './components/AdminPanel';

function LandingPage() {
  return (
    <>
      <NewsletterNavbar />
      <ProjectsSection />
      <ClientsSection />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
