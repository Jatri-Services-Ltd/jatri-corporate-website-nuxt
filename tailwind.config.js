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
    extend: {
      colors: {
        corporate: '#f04935',
      },
      fontFamily: {
        sans: ['Montserrat', 'Myriad Pro'],
        banglaFont: ['SolaimanLipi', 'serif']
      },
    },
  },
  plugins: [],
}
