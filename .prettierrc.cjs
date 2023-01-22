module.exports = {
    plugins: [require('prettier-plugin-tailwindcss'), require.resolve('prettier-plugin-astro')],
    tailwindConfig: './tailwind.config.cjs',
    astroAllowShorthand: true,
}