const p = require('tailwindcss/plugin');
module.exports = p(({ addVariant }) => {
  addVariant('aspect-ratio-xxx','@media (aspect-ratio: yyy)');
});
