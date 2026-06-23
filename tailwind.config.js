/** JOPAS — vizuálny systém v2 (jemne industriálny) */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EEE7',     // teplý betón / základné pozadie
        paper2: '#E8E3D9',    // tmavší pás
        ink: '#15171A',       // grafitová takmer-čierna (nadpisy, tmavé sekcie)
        graphite: '#191C1F',  // tmavé sekcie
        body: '#2C3034',      // základný text
        steel: '#595E63',     // tlmený text / labely
        faint: '#8A8F94',     // metadáta
        copper: {
          DEFAULT: '#B0673C', // hlavný akcent (meď / mosadz)
          light: '#C68A5E',
          deep: '#8E4F2A',
          ink: '#6F3D20',
        },
        petrol: '#143A45',    // hlboká petrolejová (voda) — striedmo
        brick: '#AE3B2B',     // havária — tlmená tehlová, nie krikľavá
        success: '#3C6E4F',
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        line: 'rgba(20,22,25,0.16)',
        line2: 'rgba(20,22,25,0.08)',
        strong: 'rgba(20,22,25,0.30)',
        invert: 'rgba(255,255,255,0.14)',
      },
      borderRadius: { DEFAULT: '3px', sm: '2px', md: '4px', lg: '6px' },
      boxShadow: {
        soft: '0 1px 0 rgba(20,22,25,0.04), 0 18px 40px -28px rgba(20,22,25,0.25)',
      },
      maxWidth: { container: '1240px', prose: '680px' },
      letterSpacing: { label: '0.18em' },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16,1,0.3,1)',
        'out-quad': 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
    },
  },
  plugins: [],
};
