/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 28px 4px rgba(0, 0, 0, 0.1)',
      },
      width:{
        'cmn-width': '100%',
      },
      padding:{
        'cmn-padding': '2%',
      },
      height:
      {'cmn-height': '74%',}
    },
  },
  plugins: [],
}