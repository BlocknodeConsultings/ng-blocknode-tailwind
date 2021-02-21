const { createTrue } = require('typescript');

require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || true;

module.exports = {
  purge:{
    enabled:enablePurge,
    content:[
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
