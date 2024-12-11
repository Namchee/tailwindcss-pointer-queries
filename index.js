const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant }) => {
  addVariant('pointer-none', '@media (pointer: none)');
  addVariant('pointer-fine', '@media (pointer: fine)');
  addVariant('pointer-coarse', '@media (pointer: coarse)');
  addVariant('pointer-any-fine', '@media (any-pointer: fine)');
  addVariant('pointer-any-coarse', '@media (any-pointer: coarse)');
});
