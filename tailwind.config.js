/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-marin":"#1C8481",
        "gray":"#545454"
      },
      transitionProperty: {
        'display': 'display',
      }
    },
  },
  plugins: [],
}
