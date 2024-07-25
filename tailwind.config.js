/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
