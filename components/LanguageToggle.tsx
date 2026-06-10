import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'chip' | 'block';
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', variant = 'chip' }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const next = language === 'en' ? 'zh' : 'en';
  const nextLabel = next === 'zh' ? t.toggle.zh : t.toggle.en;
  const currentLabel = language === 'zh' ? t.toggle.zh : t.toggle.en;

  const baseChip =
    'glass-chip inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[13px] font-semibold text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40';
  const baseBlock =
    'flex items-center justify-center gap-2 w-full rounded-pill border border-hairline/70 bg-white/60 px-4 py-2.5 text-[14px] font-semibold text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${t.toggle.ariaLabel}: ${nextLabel}`}
      title={`${t.toggle.ariaLabel}: ${nextLabel}`}
      className={`${variant === 'chip' ? baseChip : baseBlock} ${className}`.trim()}
    >
      <Languages size={14} strokeWidth={2.4} />
      <span>{currentLabel}</span>
      <span aria-hidden="true" className="text-ink-tertiary">/</span>
      <span aria-hidden="true" className="text-ink-tertiary">{nextLabel}</span>
    </button>
  );
};

export default LanguageToggle;
