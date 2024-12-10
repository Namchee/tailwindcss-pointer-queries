import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
    addVariant('pointer-none', '@media (pointer: none)');
    addVariant('pointer-fine', '@media (pointer: fine)');
    addVariant('pointer-coarse', '@media (pointer: coarse)');
});
