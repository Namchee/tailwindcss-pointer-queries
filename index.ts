import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addUtilities }) => {
    addUtilities({
        '.pointer-none': {
            pointerEvents: 'none',
        },
        '.pointer-auto': {
            pointerEvents: 'auto',
        },
    });
});
