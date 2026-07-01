import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { RESUME_FILES } from '../constants';
import LanguageToggle from './LanguageToggle';
import { useSmoothScroll } from '../lib/motion/SmoothScroll';
import { useCommandPalette } from './ui/CommandPalette';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { t, language } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const palette = useCommandPalette();
  const logoName = language === 'zh' ? '金韬' : 'Tao Jin';

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 200 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id: string) => {
    scrollTo(id, { focus: true });
    setIsOpen(false);
  };

  const navLinks = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.skills, id: 'skills' },
  ];

  const resume = RESUME_FILES[language];
  const resumeHref = `${import.meta.env.BASE_URL}${resume.file}`;

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-[transform,background-color,border-color] duration-300 ease-expo ${
        hidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled ? 'bg-page/80 backdrop-blur-md border-hairline' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-grid mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 font-display font-medium text-[16px] tracking-tight text-ink hover:text-accent transition-colors rounded"
            aria-label={t.nav.backToTop}
          >
            {logoName}<span className="text-accent">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => goToSection(link.id)}
                  className="font-mono text-[13px] text-ink-secondary hover:text-ink px-3 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={palette.open}
                className="ml-2 inline-flex items-center gap-2 rounded-control border border-hairline px-2.5 py-1.5 font-mono text-[12px] text-ink-secondary hover:text-ink hover:border-hairline-strong transition-colors"
                aria-label="Open command menu (Cmd+K)"
              >
                <span>⌘K</span>
              </button>
              <LanguageToggle className="ml-1" />
              <a href={resumeHref} download={resume.download} className="btn-primary ml-2">
                <Download size={14} strokeWidth={2} aria-hidden="true" />
                {t.nav.downloadResume}
              </a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={palette.open}
              className="inline-flex items-center rounded-control border border-hairline px-2 py-1.5 font-mono text-[12px] text-ink-secondary"
              aria-label="Open command menu (Cmd+K)"
            >
              ⌘K
            </button>
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink hover:text-accent transition-colors"
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
        <div className="lg:hidden bg-page/95 backdrop-blur-md border-t border-hairline">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="font-mono text-ink-secondary hover:text-ink block w-full text-left px-3 py-2.5 rounded-md text-[15px] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href={resumeHref}
              download={resume.download}
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2 w-full justify-center"
            >
              <Download size={16} strokeWidth={2} aria-hidden="true" />
              {t.nav.downloadResume}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
