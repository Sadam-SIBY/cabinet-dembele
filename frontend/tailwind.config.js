/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdfbf0',
          100: '#faf5d3',
          200: '#f4e89b',
          300: '#edd55a',
          400: '#e8c427',
          500: '#c9a227',
          600: '#a07c1a',
          700: '#7d5e14',
          800: '#624910',
          900: '#4f3b0e',
        },
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9cdff',
          300: '#84a8ff',
          400: '#4c79fa',
          500: '#2251f3',
          600: '#1030e8',
          700: '#0c24d3',
          800: '#0f1e9e',
          900: '#0a1363',
          950: '#060b40',
        },
        cream: '#f8f4ed',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm':    '0 2px 8px rgba(201,162,39,0.25)',
        'gold':       '0 4px 20px rgba(201,162,39,0.35)',
        'gold-lg':    '0 8px 40px rgba(201,162,39,0.45)',
        'card':       '0 4px 24px rgba(10,19,99,0.08)',
        'card-hover': '0 20px 60px rgba(10,19,99,0.18)',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.5s ease-out forwards',
        // Haussmann-style — slow, deliberate, expo-out
        'slide-up':     'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-rise':    'fadeRise 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'scale-reveal': 'scaleReveal 1.2s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'line-grow':    'lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        // Text mask reveal — translateY only (parent clips with overflow:hidden)
        slideUp: {
          '0%':   { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // General elements — opacity + vertical slide
        fadeRise: {
          '0%':   { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Images / large blocks — scale + fade
        scaleReveal: {
          '0%':   { opacity: '0', transform: 'scale(1.07)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Decorative lines — width expand from left
        lineGrow: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left center' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'soft':    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '900':  '900ms',
        '1100': '1100ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}
