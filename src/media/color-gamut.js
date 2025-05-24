const p = require('tailwindcss/plugin');
module.exports = p(({ addVariant }) => {
  addVariant('gamut-srgb','@media (color-gamut: srgb)');
  addVariant('gamut-p3', '@media (color-gamut: p3)');
  addVariant('gamut-rec2020', '@media (color-gamut: rec2020)');
});
