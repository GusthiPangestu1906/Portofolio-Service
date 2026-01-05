/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      colors: {
        dark: '#090910',
        primary: '#8750f7',
        secondary: '#2a1454',
        text: '#a0a0b0',
        light: '#ffffff',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8750f7 0%, #a855f7 100%)',
        'gradient-text': 'linear-gradient(to right, #8750f7, #ffffff)',
        'gradient-button': 'linear-gradient(to right, #8750f7, #d946ef)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1s infinite',
        'float-fast': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}