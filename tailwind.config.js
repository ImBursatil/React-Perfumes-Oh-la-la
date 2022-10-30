/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {colors:{
      'my-rose': '#F21365', 'my-warning': '#ffc400',
    }},
  },
  plugins: [],
}
