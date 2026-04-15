import React, { useRef } from 'react';
import { Mail, Linkedin, MapPin, Github, Download, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const inView = useInView(footerRef, { threshold: 0.1, once: true });

  const resumeHref = `${import.meta.env.BASE_URL}Tao_Jin_Resume.pdf`;

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={`relative overflow-hidden bg-muted pt-24 md:pt-32 pb-10 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: '-10%',
            left: '20%',
            width: '560px',
            height: '560px',
            background:
              'radial-gradient(circle at center, rgba(0, 122, 255, 0.18) 0%, rgba(0, 122, 255, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-20%',
            right: '10%',
            width: '480px',
            height: '480px',
            background:
              'radial-gradient(circle at center, rgba(175, 82, 222, 0.16) 0%, rgba(175, 82, 222, 0) 60%)',
          }}
        />
      </div>

      <div className="relative max-w-content mx-auto px-6 lg:px-8 text-center">
        <p className="eyebrow mb-4">Get in Touch</p>
        <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-4">
          Ready to generate <span className="text-gradient-apple">insights</span>?
        </h2>
        <p className="text-body text-ink-secondary max-w-xl mx-auto mb-10">
          Open to Business Analyst and Data Analyst roles. Let&apos;s talk about how I can help
          your team turn data into decisions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-14 no-print">
          <a href={`mailto:${CONTACT_INFO.email}`} className="btn-apple">
            <Mail size={16} strokeWidth={2.5} />
            {CONTACT_INFO.email}
          </a>
          <a href={resumeHref} download="Tao_Jin_Resume.pdf" className="btn-ghost">
            <Download size={16} strokeWidth={2.5} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mb-12 text-ink-tertiary">
          <div className="flex items-center gap-2 text-[14px]">
            <MapPin size={14} strokeWidth={2} />
            <span>{CONTACT_INFO.location}</span>
          </div>
          <a
            href={`https://${CONTACT_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass-chip w-10 h-10 rounded-full flex items-center justify-center text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Linkedin size={16} strokeWidth={2} />
          </a>
          <a
            href={`https://${CONTACT_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-chip w-10 h-10 rounded-full flex items-center justify-center text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Github size={16} strokeWidth={2} />
          </a>
          <a
            href={`https://${CONTACT_INFO.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Personal Blog"
            title={CONTACT_INFO.blog}
            className="glass-chip w-10 h-10 rounded-full flex items-center justify-center text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <BookOpen size={16} strokeWidth={2} />
          </a>
        </div>

        <div className="text-[12px] text-ink-tertiary border-t border-hairline/60 pt-8">
          <p>© {new Date().getFullYear()} Tao (Tony) Jin. Designed in the spirit of Apple.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
