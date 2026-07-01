import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/sections/Stats';
import About from './components/About';
import SkillsChart from './components/SkillsChart';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from './components/SEO';
import { LanguageProvider } from './i18n/LanguageContext';
import { SmoothScrollProvider } from './lib/motion/SmoothScroll';
import { CommandPaletteProvider } from './components/ui/CommandPalette';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <SmoothScrollProvider>
          <CommandPaletteProvider>
            <div className="min-h-screen bg-page text-ink antialiased">
              <SEO />
              <Navigation />
              <main>
                <Hero />
                <Stats />
                <About />
                <Projects />
                <Experience />
                <SkillsChart />
              </main>
              <Contact />
            </div>
          </CommandPaletteProvider>
        </SmoothScrollProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
