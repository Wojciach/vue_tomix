/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        'w': '1',
      }
    },
    letterSpacing: {
      w: '0.3em',
      w2: '0.4em'
    }
  },
  plugins: [],
}