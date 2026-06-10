import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SkillsChart from './components/SkillsChart';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from './components/SEO';
import { LanguageProvider } from './i18n/LanguageContext';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-page text-ink antialiased">
          <SEO />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <SkillsChart />
          </main>
          <Contact />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
