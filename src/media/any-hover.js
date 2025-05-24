const p = require('tailwindcss/plugin');
module.exports = p(({ addVariant }) => {
  addVariant('any-hover-none','@media (any-hover: none)');
  addVariant('any-hover-hover','@media (any-hover: hover)');
});
