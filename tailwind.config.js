/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'netflixBackground': "url('/netflix-background-1024x576.jpg')"
      }
    },
  },
  plugins: [],
}