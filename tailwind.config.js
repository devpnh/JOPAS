/** JOPAS — vizuálny systém v5 „Kotolňa po zotmení"
 *  Tmavý, cinematický, materiálový. Meď = teplo/kúrenie, oceľová modrá = voda,
 *  na teplej takmer-čiernej. Jeden urgentný červený akcent (len havária).
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // tmavé jadro — teplý uhlík, nikdy čistá čierna
        void: '#0B1013',
        char: '#111A1F',
        char2: '#17232A',
        raise: '#1E2C34',

        // text — teplá slonová biela (nie #fff)
        mist: '#ECE6DC',

        // akcent — pálená meď (teplo, kúrenie, hlavné CTA)
        copper: {
          DEFAULT: '#3396D4',
          deep: '#2176AD',
          light: '#74BAEA',
        },
        // sekundárny — tlmená oceľová modrá (voda)
        steel: {
          DEFAULT: '#5E93A8',
          light: '#93BECE',
        },
        // urgencia — vyhradené LEN pre haváriu
        ember: {
          DEFAULT: '#D64A2E',
          deep: '#B23A22',
        },
      },
      textColor: {
        mist: '#ECE6DC',
        fog: 'rgba(236,230,220,0.66)',
        dim: 'rgba(236,230,220,0.44)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        hair: 'rgba(236,230,220,0.10)',
        hair2: 'rgba(236,230,220,0.06)',
        strong: 'rgba(236,230,220,0.20)',
      },
      borderRadius: { DEFAULT: '6px', sm: '4px', md: '8px', lg: '12px', xl: '18px', '2xl': '24px' },
      boxShadow: {
        lift: '0 2px 6px rgba(0,0,0,0.35), 0 20px 50px -24px rgba(0,0,0,0.7)',
        copper: '0 8px 30px -8px rgba(51,150,212,0.45)',
        ember: '0 8px 30px -8px rgba(214,74,46,0.5)',
      },
      maxWidth: { container: '1240px', prose: '640px' },
      letterSpacing: { label: '0.2em', tight2: '-0.03em' },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16,1,0.3,1)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
