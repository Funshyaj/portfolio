/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile':  "url('./assets/bg-mobile.jpg')",
        'hero-pc': "url('./assets/bg-pc.jpg')",
        'hero-tablet': "url('./assets/bg-tab.jpg')",
       

     
        
      }



    },
  },
  plugins: [],
}
