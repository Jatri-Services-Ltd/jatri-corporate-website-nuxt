/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6.25',
      },
    },
    extend: {
      colors: {
        corporate: '#f04935',
        primary: '#f04935',
        secondary: '#FEF2F0',
        grey: '#F7F7F7',
        dark: '#151414',
        secondaryDark: '#4D4D4F',
        info: '#1E88E5',
        success: '#48A43F',
        danger: '#EE3420',
        body: '#747476',
      },
      fontFamily: {
        sans: ['Montserrat', 'Myriad Pro'],
        banglaFont: ['SolaimanLipi', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}