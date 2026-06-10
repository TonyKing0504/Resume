import React, { useRef } from 'react';
import { Target, TrendingUp, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext';

const CARD_ICONS = [
  <Target size={20} strokeWidth={2} />,
  <TrendingUp size={20} strokeWidth={2} />,
  <Brain size={20} strokeWidth={2} />,
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative overflow-hidden py-24 md:py-32 bg-page scroll-mt-28 fade-up ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Ambient orb anchoring the glass cards */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{
            top: '10%',
            right: '-10%',
            width: '640px',
            height: '640px',
            background:
              'radial-gradient(circle at center, rgba(88, 86, 214, 0.18) 0%, rgba(88, 86, 214, 0) 60%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-10%',
            left: '-10%',
            width: '540px',
            height: '540px',
            background:
              'radial-gradient(circle at center, rgba(0, 122, 255, 0.14) 0%, rgba(0, 122, 255, 0) 60%)',
          }}
        />
      </div>

      <div className="relative max-w-grid mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          <div className="mb-12 lg:mb-0 max-w-content">
            <p className="eyebrow mb-4">{t.about.eyebrow}</p>
            <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-8">
              {t.about.headlineLead}
              <br />
              <span className="text-gradient-apple">{t.about.headlineEmphasis}</span>
            </h2>
            <div className="space-y-5 text-body text-ink-secondary">
              <p>
                {t.about.paragraph1.prefix}
                <strong className="text-ink font-semibold">{t.about.paragraph1.strong1}</strong>
                {t.about.paragraph1.middle}
                <strong className="text-ink font-semibold">{t.about.paragraph1.strong2}</strong>
                {t.about.paragraph1.suffix}
              </p>
              <p>{t.about.paragraph2}</p>
            </div>
          </div>

          <div className="grid gap-5">
            {t.about.cards.map((card, index) => (
              <div key={card.title} className="glass-card p-7">
                <div className="w-11 h-11 rounded-2xl bg-accent-soft/80 flex items-center justify-center mb-4 text-accent shadow-sm">
                  {CARD_ICONS[index] ?? CARD_ICONS[0]}
                </div>
                <h3 className="text-headline tracking-headline text-ink mb-2">{card.title}</h3>
                <p className="text-[15px] leading-[1.55] text-ink-secondary">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
