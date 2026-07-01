/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark command-center palette (names kept stable from the old theme;
        // values remapped to the Direction-B dark scheme).
        page: '#0a0b0d', // page canvas
        surface: '#121419', // elevated panel
        'surface-2': '#171a20', // higher panel / hover
        muted: '#101216', // alt section background
        ink: {
          DEFAULT: '#eef0f5',
          secondary: '#9aa0aa',
          tertiary: '#6b7280',
        },
        hairline: {
          DEFAULT: '#23262d',
          strong: '#2e323b',
        },
        accent: {
          DEFAULT: '#6f74f2',
          hover: '#8488f6',
          soft: '#1b1d33',
        },
        status: '#34d399',
      },
      fontFamily: {
        sans: ['Satoshi', '"PingFang SC"', '"Microsoft YaHei"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"PingFang SC"', '"Microsoft YaHei"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'ui-monospace', '"PingFang SC"', '"Microsoft YaHei"', 'monospace'],
      },
      borderRadius: {
        chip: '5px',
        control: '6px',
        card: '8px',
        'card-lg': '12px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.3)',
        glow: '0 0 0 1px rgba(111,116,242,0.35), 0 8px 30px rgba(111,116,242,0.12)',
      },
      letterSpacing: {
        display: '-0.03em',
        tighter: '-0.02em',
        title: '-0.018em',
        headline: '-0.01em',
        eyebrow: '0.08em',
      },
      fontSize: {
        eyebrow: ['0.72rem', { lineHeight: '1.4', fontWeight: '500' }],
        body: ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        headline: ['1.3125rem', { lineHeight: '1.2', fontWeight: '500' }],
        title: ['2.4rem', { lineHeight: '1.1', fontWeight: '500' }],
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
        expo: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      maxWidth: {
        content: '1040px',
        grid: '1200px',
      },
    },
  },
  plugins: [],
};
