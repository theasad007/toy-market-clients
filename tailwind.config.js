/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#222222',
      'pink': {
        100: '#EC3084',
        200: '#ca216d'
      },
      'tahiti': '#3ab7bf',
      'blue': '#039DDD',
      'gray': '#F8F8F8',
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
