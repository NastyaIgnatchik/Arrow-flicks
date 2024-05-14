/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      'bodyColor': '#F5F5F6',
      'navbarColor':'#f2ebf9',
      'hoverLinksColor':'#e5d5fa',
      'textColor':'#9854F6',
      'paleTextColor':'#7B7C88',
      'noPosterColor':'#EAEBED',
      'noPosterTextColor':'#ACADB9'
    },
    textColor: {
      'bodyColor': '#F5F5F6',
      'navbarColor':'#f2ebf9',
      'hoverLinksColor':'#e5d5fa',
      'textColor':'#9854F6',
      'paleTextColor':'#7B7C88',
      'noPosterColor':'#EAEBED',
      'noPosterTextColor':'#ACADB9'
    },

  },
  plugins: [],
};
