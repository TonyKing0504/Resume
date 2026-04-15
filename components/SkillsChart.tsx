import React, { useRef } from 'react';
import { SKILL_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const TOOL_STACK: { label: string; stack: string; value: number }[] = [
  { label: 'Data Engineering & Analysis', stack: 'Python, R, SQL', value: 90 },
  { label: 'Visualization & BI', stack: 'Tableau, D3, Recharts', value: 95 },
  { label: 'Mathematical & Systems', stack: 'Stochastic Calculus, Optimization', value: 85 },
];

const LANGUAGES: string[] = ['Chinese (Native)', 'English (Professional)', 'Japanese (Basic)'];

const SkillsChart: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`relative overflow-hidden py-24 md:py-32 bg-page scroll-mt-28 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Ambient orb */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: '20%',
            left: '-10%',
            width: '560px',
            height: '560px',
            background:
              'radial-gradient(circle at center, rgba(90, 200, 250, 0.18) 0%, rgba(90, 200, 250, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-10%',
            right: '-10%',
            width: '580px',
            height: '580px',
            background:
              'radial-gradient(circle at center, rgba(0, 122, 255, 0.16) 0%, rgba(0, 122, 255, 0) 60%)',
          }}
        />
      </div>

      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-4">
            The <span className="text-gradient-apple">Hybrid Profile</span>
          </h2>
          <p className="text-body text-ink-secondary">
            Modern problems require a blend of hard technical skills and soft business strategy.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Skill bar grid */}
            <div>
              <h3 className="text-headline tracking-headline text-ink mb-8">Core Competencies</h3>
              <div className="space-y-6">
                {SKILL_DATA.map((skill) => {
                  const pct = Math.round((skill.A / skill.fullMark) * 100);
                  return (
                    <div key={skill.subject}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-[15px] font-medium text-ink">{skill.subject}</span>
                        <span className="text-[13px] font-medium text-ink-tertiary">{pct}%</span>
                      </div>
                      <div
                        className="h-1 w-full rounded-full bg-hairline/60 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={pct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.subject}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-[#5856D6] transition-[width] duration-700 ease-apple"
                          style={{ width: inView ? `${pct}%` : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tool stack + languages */}
            <div>
              <h3 className="text-headline tracking-headline text-ink mb-8">Tool Stack</h3>
              <div className="space-y-6">
                {TOOL_STACK.map((tool) => (
                  <div key={tool.label}>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <span className="text-[15px] font-medium text-ink">{tool.label}</span>
                      <span className="text-[13px] font-medium text-accent text-right">
                        {tool.stack}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-hairline/60 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-[#5856D6] transition-[width] duration-700 ease-apple"
                        style={{ width: inView ? `${tool.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-hairline/60">
                <h4 className="text-[15px] font-semibold text-ink mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <span
                      key={lang}
                      className="glass-chip inline-flex items-center rounded-pill px-3.5 py-1.5 text-[13px] font-medium text-ink-secondary"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
