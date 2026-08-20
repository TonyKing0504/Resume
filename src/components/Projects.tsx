import React, { useRef, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05, once: true });
  const { t } = useLanguage();

  const [open, setOpen] = useState<Set<string>>(() => {
    const first = t.projects.list[0]?.id;
    return new Set(first ? [first] : []);
  });

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`relative py-24 md:py-32 bg-muted scroll-mt-28 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">{t.projects.eyebrow}</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.1] tracking-tighter text-ink mb-4">
            {t.projects.headlineLead}
            <br />
            {t.projects.headlineEmphasisPrefix}
            <span className="text-accent">{t.projects.headlineEmphasis}</span>
            {t.projects.headlineSuffix}
          </h2>
          <p className="text-body text-ink-secondary">{t.projects.description}</p>
        </div>

        <div>
          {t.projects.list.map((project, index) => {
            const isOpen = open.has(project.id);
            return (
              <article
                key={project.id}
                className="group border-t border-hairline last:border-b last:border-hairline transition-colors duration-300 ease-expo hover:bg-white/[0.012]"
              >
                <button
                  type="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`proj-${project.id}`}
                  className="w-full text-left py-7 flex items-start gap-4"
                >
                  <span className="font-mono text-[12px] text-ink-tertiary w-7 shrink-0 pt-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(20px,3.4vw,28px)] font-medium text-ink leading-tight transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[12px] text-ink-tertiary">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-3 pt-1.5 shrink-0">
                    {project.period && (
                      <span className="hidden sm:block font-mono text-[12px] text-ink-tertiary whitespace-nowrap">
                        {project.period}
                      </span>
                    )}
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={clsx(
                        'text-ink-tertiary transition-transform duration-300 ease-expo group-hover:text-accent',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </div>
                </button>

                <div id={`proj-${project.id}`} className={clsx('proj-detail', isOpen && 'open')}>
                  <div className="proj-detail-inner">
                    <div className="pb-8 sm:pl-11">
                      <p className="text-[15px] leading-[1.6] text-ink-secondary max-w-[70ch]">
                        {project.description}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {project.metrics.map((metric, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-[13.5px] leading-[1.55] text-ink-secondary"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {metric}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {project.tech.map((techItem) => (
                          <span key={techItem} className="chip">
                            {techItem}
                          </span>
                        ))}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="chip text-accent border-accent/40 hover:text-accent-hover hover:border-accent transition-colors"
                          >
                            <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
                            {t.projects.visitLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
