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
    'inline-flex items-center gap-1.5 whitespace-nowrap rounded-control border border-hairline px-2.5 py-1.5 font-mono text-[12px] text-ink-secondary hover:text-ink hover:border-hairline-strong transition-colors';
  const baseBlock =
    'flex items-center justify-center gap-2 w-full rounded-control border border-hairline bg-white/[0.02] px-4 py-2.5 font-mono text-[13px] text-ink-secondary hover:text-ink hover:border-hairline-strong transition-colors';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${t.toggle.ariaLabel}: ${nextLabel}`}
      title={`${t.toggle.ariaLabel}: ${nextLabel}`}
      className={`${variant === 'chip' ? baseChip : baseBlock} ${className}`.trim()}
    >
      <Languages size={14} strokeWidth={2} aria-hidden="true" />
      <span className="text-ink">{currentLabel}</span>
      <span aria-hidden="true" className="text-ink-tertiary">/</span>
      <span aria-hidden="true" className="text-ink-tertiary">{nextLabel}</span>
    </button>
  );
};

export default LanguageToggle;
