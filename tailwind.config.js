/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD700', // Yellow for light mode
          dark: '#000000', // Black for dark mode
        },
        secondary: {
          light: '#000000', // Black for light mode
          dark: '#FFD700', // Yellow for dark mode
        },
      },
    },
  },
  plugins: [],
}
