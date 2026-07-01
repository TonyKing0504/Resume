import React, { useRef } from 'react';
import { Target, TrendingUp, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const CARD_ICONS = [
  <Target size={18} strokeWidth={2} />,
  <TrendingUp size={18} strokeWidth={2} />,
  <Brain size={18} strokeWidth={2} />,
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative py-24 md:py-32 bg-page scroll-mt-28 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          <div className="mb-12 lg:mb-0 max-w-content">
            <p className="eyebrow mb-4">{t.about.eyebrow}</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.1] tracking-tighter text-ink mb-8">
              {t.about.headlineLead}
              <br />
              <span className="text-accent">{t.about.headlineEmphasis}</span>
            </h2>
            <div className="space-y-5 text-body text-ink-secondary">
              <p>
                {t.about.paragraph1.prefix}
                <strong className="text-ink font-medium">{t.about.paragraph1.strong1}</strong>
                {t.about.paragraph1.middle}
                <strong className="text-ink font-medium">{t.about.paragraph1.strong2}</strong>
                {t.about.paragraph1.suffix}
              </p>
              <p>{t.about.paragraph2}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {t.about.cards.map((card, index) => (
              <div
                key={card.title}
                className="panel p-6 transition-colors duration-300 ease-expo hover:border-accent/60"
              >
                <div className="w-10 h-10 rounded-control bg-accent-soft flex items-center justify-center mb-4 text-accent border border-accent/20">
                  {CARD_ICONS[index] ?? CARD_ICONS[0]}
                </div>
                <h3 className="font-display text-[19px] font-medium text-ink mb-2">{card.title}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-secondary">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
