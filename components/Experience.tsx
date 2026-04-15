import React, { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-24 md:py-32 bg-page scroll-mt-28 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-4">
            Professional Experience
          </h2>
          <p className="text-body text-ink-secondary">
            Delivering impact in Investment Banking and Institutional Sales.
          </p>
        </div>

        <div className="divide-y divide-hairline/70">
          {EXPERIENCE_DATA.map((job) => (
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
                <h3 className="text-headline tracking-headline text-ink">
                  {job.company}
                </h3>
                <p className="mt-1 text-[15px] text-ink-secondary font-medium">
                  {job.role}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start text-[15px] leading-[1.6] text-ink-secondary"
                    >
                      <span
                        className="mr-3 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-ink-tertiary"
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
