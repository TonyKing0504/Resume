import React, { useRef } from 'react';
import { Download, Linkedin, Github, BookOpen, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CONTACT_INFO, RESUME_FILES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });
  const { t, language } = useLanguage();

  const resume = RESUME_FILES[language];
  const resumeHref = `${import.meta.env.BASE_URL}${resume.file}`;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const socials = [
    { href: `https://${CONTACT_INFO.linkedin}`, label: t.hero.linkedin, Icon: Linkedin },
    { href: `https://${CONTACT_INFO.github}`, label: t.hero.github, Icon: Github },
    { href: `https://${CONTACT_INFO.blog}`, label: t.hero.blog, Icon: BookOpen },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-page pt-36 pb-24 md:pt-44 md:pb-32 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      <div className="grid-bg" aria-hidden="true" />
      <div
        className="glow"
        aria-hidden="true"
        style={{
          top: '-120px',
          left: '-80px',
          width: '520px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(111,116,242,0.22) 0%, rgba(111,116,242,0) 70%)',
        }}
      />

      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <p className="eyebrow mb-6">
          <span className="text-accent">// </span>
          {t.hero.eyebrow}
        </p>

        <h1 className="font-display font-semibold text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.98] tracking-[-0.02em] text-ink max-w-[15ch]">
          {t.hero.name}
        </h1>

        <p className="mt-7 max-w-[640px] text-body-lg text-ink-secondary">{t.hero.description}</p>

        {/* Credential chips */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {t.hero.chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={resumeHref} download={resume.download} className="btn-primary">
            <Download size={15} strokeWidth={2} aria-hidden="true" />
            {t.hero.downloadResume}
          </a>
          <button onClick={scrollToProjects} className="btn-ghost" aria-label={t.hero.viewProjects}>
            {t.hero.viewProjects}
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="chip hover:text-ink hover:border-hairline-strong transition-colors"
            >
              <Icon size={13} strokeWidth={2} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
