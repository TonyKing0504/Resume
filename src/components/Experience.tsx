import React, { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-24 md:py-32 bg-page scroll-mt-28 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">{t.experience.eyebrow}</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.1] tracking-tighter text-ink mb-4">
            {t.experience.headline}
          </h2>
          <p className="text-body text-ink-secondary">{t.experience.description}</p>
        </div>

        <div className="divide-y divide-hairline/70">
          {t.experience.list.map((job) => (
            <article
              key={job.id}
              className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 py-10 md:py-12 first:pt-0 last:pb-0"
            >
              {/* Date column */}
              <div className="md:pt-1">
                <p className="eyebrow md:whitespace-nowrap">{job.period}</p>
                <p className="mt-2 flex items-center gap-1 text-[13px] text-ink-tertiary">
                  <MapPin size={12} strokeWidth={2} />
                  {job.location}
                </p>
              </div>

              {/* Content column */}
              <div>
                <h3 className="font-display text-headline tracking-headline text-ink">{job.company}</h3>
                <p className="mt-1 text-[15px] text-ink-secondary font-medium">{job.role}</p>
                <ul className="mt-5 space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start text-[15px] leading-[1.6] text-ink-secondary"
                    >
                      <span
                        className="mr-3 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
