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

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
        <SEO />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          {/* Moved SkillsChart to the bottom as requested */}
          <SkillsChart />
        </main>
        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default App;