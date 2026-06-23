/** JOPAS — vizuálny systém v3 (čistý, modrý, striedmy) */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // neutrály — čisté, chladné, pokojné
        bg: '#F6F7F8',        // základné pozadie
        surface: '#FFFFFF',   // karty / panely
        panel: '#EEF1F3',     // jemný svetlý pás
        ink: '#16191C',       // nadpisy / hlavný text
        body: '#33383D',      // bežný text
        steel: '#5C6268',     // tlmený text
        faint: '#9499A0',     // metadáta
        navy: '#15212E',      // pätička / tmavý podklad (hlboká modrosivá)

        // jediný akcent — dôveryhodná „vodárska" modrá (ladí s logom)
        accent: {
          DEFAULT: '#1B6FAC',
          deep: '#155A8C',
          light: '#2E97D4',
          tint: '#EBF3F9',
          tintdeep: '#DCEAF4',
        },
        success: '#3C6E4F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        line: 'rgba(20,24,28,0.12)',
        line2: 'rgba(20,24,28,0.07)',
        strong: 'rgba(20,24,28,0.22)',
        invert: 'rgba(255,255,255,0.14)',
      },
      borderRadius: { DEFAULT: '6px', sm: '4px', md: '6px', lg: '10px', xl: '14px' },
      boxShadow: {
        soft: '0 1px 2px rgba(20,24,28,0.04), 0 10px 30px -22px rgba(20,24,28,0.30)',
      },
      maxWidth: { container: '1200px', prose: '660px' },
      transitionTimingFunction: {
        'out-quad': 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
    },
  },
  plugins: [],
};
