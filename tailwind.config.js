/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandGrey:'#FAFAFA',
        brandPurple:'#633CFF',
        brandLightPurple:'#EFEBFF',
        brandSoftGrey:'#737373',
        brandDarkGrey:'#333',
        brandDark:'#1A1A1A',
        brandRed:'#EE3939',
        brandBlue:'#2D68FF',
        brandSoftRed:'#FF3939',
        brandBorder:'#D9D9D9'
      },
      boxShadow: {
        'brandShadowDark': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
        'optionShadow': '0px 0px 32px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

