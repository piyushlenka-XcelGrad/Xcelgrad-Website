/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: '#5B47F5',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}