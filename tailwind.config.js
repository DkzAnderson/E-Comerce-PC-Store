/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "nunito" : '"Nunito", sans-serif',
      },
      colors:{
        primary: {
          100: '#b427cb',
          200: '#e9eaed',
          300: '#1eff3b',
          400: '#103397',
          500: '#105b16'
        },
        secondary:{
          100: '#13dfcebd'
        },
        shadow: {
          100: 'gray',
          200: 'black'
        }
      }
    },
  },
  plugins: [],
}
