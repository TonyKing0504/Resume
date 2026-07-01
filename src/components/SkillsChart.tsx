import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const SkillsChart: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`relative py-24 md:py-32 bg-page scroll-mt-28 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">{t.skills.eyebrow}</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.1] tracking-tighter text-ink mb-4">
            {t.skills.headlineLead}
            <span className="text-accent">{t.skills.headlineEmphasis}</span>
          </h2>
          <p className="text-body text-ink-secondary">{t.skills.description}</p>
        </div>

        <div className="panel p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Core competencies */}
            <div>
              <h3 className="eyebrow mb-8">{t.skills.coreCompetencies}</h3>
              <div className="space-y-6">
                {t.skills.skillList.map((skill) => {
                  const pct = Math.round((skill.A / skill.fullMark) * 100);
                  return (
                    <div key={skill.subject}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-[15px] text-ink">{skill.subject}</span>
                        <span className="font-mono text-[12px] text-ink-tertiary">{pct}%</span>
                      </div>
                      <div
                        className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={pct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.subject}
                      >
                        <div
                          className="h-full rounded-full bg-accent transition-[width] duration-700 ease-expo"
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
              <h3 className="eyebrow mb-8">{t.skills.toolStack}</h3>
              <div className="space-y-6">
                {t.skills.toolStackList.map((tool) => (
                  <div key={tool.label}>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <span className="text-[15px] text-ink">{tool.label}</span>
                      <span className="font-mono text-[12px] text-accent text-right">{tool.stack}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent transition-[width] duration-700 ease-expo"
                        style={{ width: inView ? `${tool.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-hairline">
                <h4 className="eyebrow mb-4">{t.skills.languages}</h4>
                <div className="flex flex-wrap gap-2">
                  {t.skills.languageList.map((lang) => (
                    <span key={lang} className="chip">
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
