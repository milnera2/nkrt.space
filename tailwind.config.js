/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d25633',
        'background-light': '#f5f5f5',
        'background-dark': '#121212',
        'surface-dark': '#1e1e1e',
        'text-light': '#333333',
        'text-dark': '#e0e0e0',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
}
