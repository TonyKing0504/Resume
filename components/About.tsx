import React, { useRef } from 'react';
import { Target, TrendingUp, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1, once: true });

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
            <p className="eyebrow mb-4">About</p>
            <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.08] tracking-tighter text-ink mb-8">
              Not just an Analyst.
              <br />
              <span className="text-gradient-apple">A Strategic Partner.</span>
            </h2>
            <div className="space-y-5 text-body text-ink-secondary">
              <p>
                I don&apos;t just query databases; I answer business questions. With a background in
                Systems Engineering (Cornell) and Mathematics (UBC), I combine rigorous statistical
                methods with practical business logic — reducing financial selloffs by{' '}
                <strong className="text-ink font-semibold">9%</strong> during market downturns and
                engineering automation tools that boosted operational efficiency by{' '}
                <strong className="text-ink font-semibold">8%</strong>.
              </p>
              <p>
                I am actively seeking Business Analyst or Data Analyst roles where I can leverage
                my full-stack data proficiency — from SQL database design to executive dashboards —
                to drive tangible ROI.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="glass-card p-7">
              <div className="w-11 h-11 rounded-2xl bg-accent-soft/80 flex items-center justify-center mb-4 text-accent shadow-sm">
                <Target size={20} strokeWidth={2} />
              </div>
              <h3 className="text-headline tracking-headline text-ink mb-2">Technical Precision</h3>
              <p className="text-[15px] leading-[1.55] text-ink-secondary">
                Expert in Python, R, and SQL. I build robust pipelines that ensure data integrity
                and reproducibility.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="w-11 h-11 rounded-2xl bg-accent-soft/80 flex items-center justify-center mb-4 text-accent shadow-sm">
                <TrendingUp size={20} strokeWidth={2} />
              </div>
              <h3 className="text-headline tracking-headline text-ink mb-2">Commercial Awareness</h3>
              <p className="text-[15px] leading-[1.55] text-ink-secondary">
                Experience in Investment Banking & Institutional Sales. I understand KPIs, margins,
                and the &quot;So What?&quot; behind the numbers.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="w-11 h-11 rounded-2xl bg-accent-soft/80 flex items-center justify-center mb-4 text-accent shadow-sm">
                <Brain size={20} strokeWidth={2} />
              </div>
              <h3 className="text-headline tracking-headline text-ink mb-2">Systems Thinking</h3>
              <p className="text-[15px] leading-[1.55] text-ink-secondary">
                M.Eng training allows me to view businesses as interconnected systems, optimizing
                for global rather than local maximums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
