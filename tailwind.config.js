/** JOPAS — vizuálny systém v4 (technický, modrý, s hĺbkou) */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // svetlé — chladná sivá so vzduchom (nie strohá biela), karty sú biele = hĺbka
        bg: '#ECEEF0',
        surface: '#FFFFFF',
        panel: '#E1E5E8',
        ink: '#13181C',
        body: '#2F363C',
        steel: '#5C656D',
        faint: '#8E979E',

        // tmavé — hlboká „vodárska" modročierna (hero, Prečo, pätička) = kontrast a technika
        navy: '#0E2A3C',
        navy2: '#16384E',

        // akcent — čistá technická modrá (ladí s logom)
        accent: {
          DEFAULT: '#1E84C4',
          deep: '#15689E',
          light: '#54A8DD',
          tint: '#E6F1F8',
        },
        success: '#3C6E4F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        line: 'rgba(19,24,28,0.13)',
        line2: 'rgba(19,24,28,0.07)',
        strong: 'rgba(19,24,28,0.24)',
        invert: 'rgba(255,255,255,0.12)',
        invert2: 'rgba(255,255,255,0.20)',
      },
      borderRadius: { DEFAULT: '5px', sm: '3px', md: '5px', lg: '8px', xl: '12px' },
      boxShadow: {
        soft: '0 1px 2px rgba(19,24,28,0.05), 0 12px 28px -20px rgba(19,24,28,0.35)',
        card: '0 1px 2px rgba(19,24,28,0.04), 0 2px 8px rgba(19,24,28,0.04)',
      },
      maxWidth: { container: '1200px', prose: '640px' },
      letterSpacing: { label: '0.16em' },
      transitionTimingFunction: {
        'out-quad': 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
    },
  },
  plugins: [],
};
