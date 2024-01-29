/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rustica': ['Rustica', 'serif'],
      },
      colors: {
        gray: {
          300: '#D1D5DB',
          500: '#6B7280',
        },
        primary: {
          950: '#07244A',
          900: '#0A3A70',
          800: '#054587',
          700: '#0054AD',
          600: '#0065CB',
          500: '#0A83ED',
          400: '#349EFC',
          300: '#7BBFFE',
          200: '#B9DBFE',
          100: '#DFEDFF',
          50: '#F0F7FF',
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
}

