/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'mono': ['Courier New', 'Courier', 'monospace'],
		},
		extend: {
			colors: {
				"green": {
					"500": "#03FF00"
				},
				"purple": {
					"500": "#FF00FF"
				},
			},
		},
	},
	plugins: [],
}
