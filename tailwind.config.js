/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        'w': '1',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        myCustom: ['my-custom', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
    letterSpacing: {
      w: '0.3em',
      w2: '0.4em',
      m: '0.1em'
    }
  },
  plugins: [],
}