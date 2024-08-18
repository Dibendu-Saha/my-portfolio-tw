/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' }
        },
        type: {
          'from': { width: '0' },
          'to': {  width: '100%' }
        },
        'type-fast': {
          'from': { width: '0' },
          'to': {  width: '100%' }
        },
        'reveal-up': {
          'from': { 
            transform: 'translate(-50%, 24px)',
            opacity: '0'
           },
          'to': { 
            transform: 'translate(-50%, 0)',
            opacity: '1'
           }
        },
        'reveal-icons-left': {
          '0%': { 
            transform: 'translateX(24px)',
            opacity: '0'
           },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
           }
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        type: 'type 3.5s steps(100, end)',
        'type-fast': 'type-fast 1.8s steps(100, end)',
        'reveal-right': 'reveal-right 1s ease-out',
        'reveal-left': 'reveal-left 1s ease-out',
        'reveal-up': 'reveal-up 1s ease-out'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
