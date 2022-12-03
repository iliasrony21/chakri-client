/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3C65F5',
          secondary: '#05264E',
          accent: '#F2F6FD',
          neutral: '#3d4451',
          'base-100': '#ffffff'
        }
      },
      'dark',
      'cupcake'
    ]
  },
  plugins: [require('daisyui')]
}
