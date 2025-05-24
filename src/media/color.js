const p = require('tailwindcss/plugin');
module.exports = p(({ addVariant }) => {
  addVariant('color','@media (color)');
  addVariant('color-xxx', '@media (min-color: yyy)')
});
