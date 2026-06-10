import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.skills, id: 'skills' },
  ];

  const resumeHref = `${import.meta.env.BASE_URL}Cornell_Tao_Jin.docx`;

  return (
    <nav
      className={`fixed w-full z-50 glass-nav transition-all duration-300 ease-apple ${
        scrolled ? 'py-2 shadow-[0_1px_0_rgba(0,0,0,0.04)]' : 'py-2.5'
      }`}
    >
      <div className="max-w-grid mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 font-semibold text-[17px] tracking-headline text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 rounded"
            aria-label={t.nav.backToTop}
          >
            Tao Jin
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[15px] font-medium text-ink hover:text-accent px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  {link.name}
                </button>
              ))}
              <LanguageToggle className="ml-2" />
              <a
                href={resumeHref}
                download="Cornell_Tao_Jin.docx"
                className="ml-3 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-pill text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                <Download size={14} strokeWidth={2.5} />
                {t.nav.downloadResume}
              </a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              aria-label={t.nav.mainMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-hairline/60">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-ink hover:text-accent block w-full text-left px-3 py-2.5 rounded-md text-[16px] font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href={resumeHref}
              download="Cornell_Tao_Jin.docx"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-pill text-[15px] font-semibold"
            >
              <Download size={16} strokeWidth={2.5} />
              {t.nav.downloadResume}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
