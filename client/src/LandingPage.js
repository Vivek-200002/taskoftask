import React from 'react';
import ProjectsSection from './components/Landing/ProjectsSection';
import ClientsSection from './components/Landing/ClientsSection';
import ContactForm from './components/Landing/ContactForm';
import Newsletter from './components/Landing/Newsletter';
import NewsletterNavbar from './components/Landing/NewsletterNavbar';
import './components/Landing/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <NewsletterNavbar />

      <div className="section-bg">
        <ProjectsSection />
      </div>

      <div className="section-bg">
        <ClientsSection />
      </div>

      <div className="section-bg">
        <ContactForm />
      </div>

      <div className="section-bg">
        <Newsletter />
      </div>
    </div>
  );
}

export default LandingPage;
