/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    colors: {
      'mustard': '#FFD700',
      'slate': '#2D4152',
      'white': '#FFFFFF',
      'yellow': '#FFDF33',
      'orange': '#CCAC00',
      'slate-light': '#2F4B73',
    }
  },
  plugins: [],
}
