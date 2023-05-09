/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'phone': {'max': '550px'},
      's': {'max': '700px'},
      'hm': {'raw': '(max-height: 750px)'},
      'hl': {'raw': '(max-height: 850px)'},
      'l': {'max': '800px'},
    },
    extend: {
      keyframes: {
        rotateSpan: {
          '0%': { transform: 'rotate(0)' },
          '10%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
    height: {
			"5v": "5vh",
			"10v": "10vh",
			"25v": "25vh",
			"65v": "65vh",
      "auto": "auto",
		},
    margin:{
      "5w": "5vw", 
      "0r": "0", 
      "4v": "4vh", 
      "4v": "4vh", 
      "2r":	"2rem",
      "2.5r": "2.5rem",
      "1.25r": "1.25rem",
      "0.625r": "0.625rem",
      "3r" : "3rem"
    },
    colors :{
      "stadiumGreen" : "#3c725b",
      "textBlack" : "#303030",
      "white" : "#ffffff",
      "neutralColor" : "rgb(246,240,234)",
      "neutralLine" : "rgba(246, 229, 212, 1)",
      "bgField" : "#f6f6f9",
    },
  },
  plugins: [],
}

