module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'audiowide': ['audiowide', 'sans-serif'],
      },
      colors: {
        "ncgx-white": "#fff",
        "ncgx-green": "#49C96D",
        "ncgx-yellow": "yellow",
        "ncgx-light-green": "#BCE3C9",
        "ncgx-text-gray": "#253D4E",
        "ncgx-text-lightgray": "#7E7E7E",
        "ncgx-extralight-green": "#DEF9EC",
        "ncgx-tomato": "#FD6E6E",
        "ncgx-mustard": "#F69941",
      },
      height: {
        "ncgx-60": "60px",
      },
      
    },
  },
  plugins: [],
};
