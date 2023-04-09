/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      'tablet': '929px',
      colors:{
        'border-color' : '#dbdbdb',
        colorins:'#4cb5f9',
        colorface:'#385185',
        colortext:'#0095f6'
      },
      margin: {
        35: '59px'
      },     
    },
    
  },
  plugins: [
    
  ],
}