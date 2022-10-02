/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Roboto'],
    },
    colors:{
      
      'text':'#727171',
      'dark': '#2f3337',
      'white': '#ffffff',
      'grey': '#9a9a9a',
      'midgrey':'#e5e7eb',
      'lowgrey':'#cbcedd',
      'black':'#000000',
      'red':'#ee0707',
      'yellow':'#eed907',
      'blue':'#26b4ff',
      'pink':'#e707ee',
  },
    extend: {},
  },
  plugins: [],
}
