import React, { useRef } from 'react';
import { Download, Linkedin, Github, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });

  const resumeHref = `${import.meta.env.BASE_URL}Tao_Jin_Resume.pdf`;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-page pt-36 pb-28 md:pt-44 md:pb-36 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Ambient gradient orbs — adds Apple-style atmospheric depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: '-160px',
            left: '-120px',
            width: '720px',
            height: '720px',
            background:
              'radial-gradient(circle at center, rgba(0, 122, 255, 0.28) 0%, rgba(0, 122, 255, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            top: '120px',
            right: '-160px',
            width: '640px',
            height: '640px',
            background:
              'radial-gradient(circle at center, rgba(175, 82, 222, 0.22) 0%, rgba(175, 82, 222, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-120px',
            left: '25%',
            width: '560px',
            height: '560px',
            background:
              'radial-gradient(circle at center, rgba(90, 200, 250, 0.22) 0%, rgba(90, 200, 250, 0) 60%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow mb-6">
          Cornell Systems Engineering M.Eng · Business Analyst / Data Analyst
        </p>

        <h1 className="text-[52px] sm:text-[64px] md:text-[88px] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
          Tao (Tony) Jin
        </h1>

        <p className="mt-7 mx-auto max-w-[600px] text-body-lg text-ink-secondary">
          I translate data into business decisions — bridging Python automation, SQL architecture,
          and executive-ready insights.
        </p>

        {/* Stats strip — glass credential chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="glass-chip inline-flex items-center rounded-pill px-4 py-2 text-[13px] font-medium text-ink-secondary">
            Cornell M.Eng
          </span>
          <span className="glass-chip inline-flex items-center rounded-pill px-4 py-2 text-[13px] font-medium text-ink-secondary">
            UBC Math
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2">
          <a href={resumeHref} download="Tao_Jin_Resume.pdf" className="btn-apple">
            <Download size={16} strokeWidth={2.5} />
            Download Resume
          </a>
          <button onClick={scrollToProjects} className="btn-ghost" aria-label="View projects">
            View Projects
            <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* Social links — above-the-fold access */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-2.5">
          <a
            href={`https://${CONTACT_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-chip inline-flex items-center gap-2 rounded-pill px-4 py-2.5 text-[13px] font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Linkedin size={14} strokeWidth={2.4} />
            LinkedIn
          </a>
          <a
            href={`https://${CONTACT_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-chip inline-flex items-center gap-2 rounded-pill px-4 py-2.5 text-[13px] font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Github size={14} strokeWidth={2.4} />
            GitHub
          </a>
          <a
            href={`https://${CONTACT_INFO.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-chip inline-flex items-center gap-2 rounded-pill px-4 py-2.5 text-[13px] font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <BookOpen size={14} strokeWidth={2.4} />
            Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
