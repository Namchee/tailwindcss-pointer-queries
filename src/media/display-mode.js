const p = require('tailwindcss/plugin');
module.exports = p(({ addVariant }) => {
  addVariant('display-browser','@media (display-mode: browser)');
  addVariant('gamut-p3', '@media (color-gamut: p3)');
  addVariant('gamut-rec2020', '@media (color-gamut: rec2020)');
});
