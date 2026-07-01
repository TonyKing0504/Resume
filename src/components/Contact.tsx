import React, { useRef } from 'react';
import { Mail, Linkedin, MapPin, Github, Download, BookOpen } from 'lucide-react';
import { CONTACT_INFO, RESUME_FILES } from '../constants';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const inView = useInView(footerRef, { threshold: 0.1, once: true });
  const { t, language } = useLanguage();

  const resume = RESUME_FILES[language];
  const resumeHref = `${import.meta.env.BASE_URL}${resume.file}`;

  const socials = [
    { href: `https://${CONTACT_INFO.linkedin}`, label: t.contact.linkedinLabel, Icon: Linkedin },
    { href: `https://${CONTACT_INFO.github}`, label: t.contact.githubLabel, Icon: Github },
    { href: `https://${CONTACT_INFO.blog}`, label: t.contact.blogLabel, Icon: BookOpen, title: CONTACT_INFO.blog },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={`relative overflow-hidden bg-muted pt-24 md:pt-32 pb-10 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      <div
        className="glow"
        aria-hidden="true"
        style={{
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(111,116,242,0.16) 0%, rgba(111,116,242,0) 70%)',
        }}
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-tighter text-ink mb-4">
          {t.contact.headlineLead}
          <span className="text-accent">{t.contact.headlineEmphasis}</span>
          {t.contact.headlineSuffix}
        </h2>
        <p className="text-body text-ink-secondary max-w-xl mb-10">{t.contact.description}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14 no-print">
          <a href={`mailto:${CONTACT_INFO.email}`} className="btn-primary">
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            {CONTACT_INFO.email}
          </a>
          <a href={resumeHref} download={resume.download} className="btn-ghost">
            <Download size={15} strokeWidth={2} aria-hidden="true" />
            {t.contact.downloadResume}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-12 text-ink-tertiary">
          <div className="flex items-center gap-2 font-mono text-[13px]">
            <MapPin size={14} strokeWidth={2} aria-hidden="true" />
            <span>{t.contact.location}</span>
          </div>
          {socials.map(({ href, label, Icon, title }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={title}
              className="w-10 h-10 rounded-control border border-hairline flex items-center justify-center text-ink-secondary hover:text-ink hover:border-accent transition-colors"
            >
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="font-mono text-[12px] text-ink-tertiary border-t border-hairline pt-8">
          <p>© {new Date().getFullYear()} {t.contact.copyrightSuffix}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
