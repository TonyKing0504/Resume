import React, { useRef } from 'react';
import { Activity, Calendar, Database, FileSearch, TrendingUp } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05, once: true });

  const getProjectIcon = (projectId: string) => {
    switch (projectId) {
      case 'proteomics-kaggle':
        return <FileSearch size={20} strokeWidth={2} />;
      case 'diabetes-readmission':
        return <Activity size={20} strokeWidth={2} />;
      case 'food-delivery':
        return <Database size={20} strokeWidth={2} />;
      default:
        return <TrendingUp size={20} strokeWidth={2} />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`relative overflow-hidden py-24 md:py-32 bg-muted scroll-mt-28 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Ambient orbs bleeding behind glass cards */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: '-10%',
            left: '-10%',
            width: '640px',
            height: '640px',
            background:
              'radial-gradient(circle at center, rgba(0, 122, 255, 0.18) 0%, rgba(0, 122, 255, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            top: '30%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle at center, rgba(175, 82, 222, 0.16) 0%, rgba(175, 82, 222, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-10%',
            left: '30%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle at center, rgba(90, 200, 250, 0.14) 0%, rgba(90, 200, 250, 0) 60%)',
          }}
        />
      </div>

      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Selected Projects</p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-4">
            Where technical depth
            <br />
            meets <span className="text-gradient-apple">business impact</span>.
          </h2>
          <p className="text-body text-ink-secondary">
            A selection of work spanning machine learning, database architecture, and statistical
            modeling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="glass-card p-7 md:p-8 flex flex-col">
              <header className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-accent-soft/80 text-accent flex items-center justify-center shadow-sm">
                  {getProjectIcon(project.id)}
                </div>
                {project.period && (
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-ink-tertiary pt-2">
                    <Calendar size={12} strokeWidth={2} />
                    <span>{project.period}</span>
                  </div>
                )}
              </header>

              <h3 className="text-[22px] md:text-[24px] font-semibold tracking-headline text-ink leading-tight">
                {project.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-ink-tertiary">{project.role}</p>

              <p className="mt-5 text-[15px] leading-[1.55] text-ink-secondary">
                {project.description}
              </p>

              {/* Metric callouts */}
              <div className="mt-6 space-y-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-card bg-white/55 backdrop-blur-md border border-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                  >
                    <p className="text-[13px] leading-[1.5] text-ink-secondary">{metric}</p>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill bg-accent-soft/90 text-accent text-[12px] font-medium px-3 py-1 border border-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
