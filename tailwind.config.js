/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '192px',
        '127': '250px',
        '126': '350px',
        '125': '850px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}