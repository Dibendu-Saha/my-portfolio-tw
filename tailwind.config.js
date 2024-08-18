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
        typing: {
          'from': { width: '0' },
          'to': {  width: '100%' }
        },
        'typing-fast': {
          'from': { width: '0' },
          'to': {  width: '100%' }
        },
        'reveal-right': {
          '0%': { 
            transform: 'translateX(-24px)',
            opacity: '0'
           },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
           }
        },
        'reveal-left': {
          '0%': { 
            transform: 'translateX(24px)',
            opacity: '0'
           },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
           }
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
        }
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        typing: 'typing 3.5s steps(100, end)',
        'typing-fast': 'typing-fast 1.5s steps(100, end)',
        'reveal-right': 'reveal-right 1s ease-out',
        'reveal-left': 'reveal-left 1s ease-out',
        'reveal-up': 'reveal-up 1s ease-out'
      }
    },
  },
  plugins: [],
};
