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
        }
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        typing: 'typing 3.5s steps(85, end)'
      }
    },
  },
  plugins: [],
};
