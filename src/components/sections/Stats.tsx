import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageContext';
import { useCountUp } from '../../lib/motion/useCountUp';
import Sparkline from '../ui/Sparkline';

const compact = (v: number) =>
  new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(Math.round(v));

interface StatDef {
  target: number;
  format: (v: number) => string;
  label: string;
  spark: number[];
}

const StatPanel: React.FC<{ stat: StatDef; active: boolean }> = ({ stat, active }) => {
  const value = useCountUp(stat.target, active);
  return (
    <div className="panel p-5">
      <p className="eyebrow mb-3">{stat.label}</p>
      <p className="font-display text-[28px] font-semibold text-ink leading-none mb-3 tabular-nums">
        {stat.format(value)}
      </p>
      <Sparkline data={stat.spark} active={active} />
    </div>
  );
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  const { language } = useLanguage();
  const zh = language === 'zh';

  const stats: StatDef[] = [
    {
      target: 0.668,
      format: (v) => v.toFixed(3),
      label: zh ? '最佳模型 AUROC' : 'Best model AUROC',
      spark: [0.42, 0.5, 0.55, 0.61, 0.64, 0.668],
    },
    {
      target: 99441,
      format: compact,
      label: zh ? '建模订单量' : 'Orders modeled',
      spark: [12, 30, 41, 58, 72, 90, 99.4],
    },
    {
      target: 101766,
      format: compact,
      label: zh ? '临床就诊记录' : 'Clinical encounters',
      spark: [20, 35, 44, 60, 78, 92, 101.8],
    },
    {
      target: 5,
      format: (v) => String(Math.round(v)),
      label: zh ? '交付项目' : 'Projects shipped',
      spark: [1, 2, 2, 3, 4, 5],
    },
  ];

  return (
    <section className="bg-page border-y border-hairline">
      <div
        ref={ref}
        className="max-w-grid mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <StatPanel key={stat.label} stat={stat} active={inView} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
