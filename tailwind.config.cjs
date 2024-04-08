/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			black: '#000',
			white: '#fff',
			orange: '#E06330',
			zinc: colors.zinc,
			gray: colors.gray,
			blue: colors.blue,
			red: colors.red,
			green: colors.green,
			yellow: colors.yellow,
			purple: colors.purple,
			pink: colors.pink,
			indigo: colors.indigo,
			slate: colors.slate,
		},
		extend: {
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	
	plugins: [require('@tailwindcss/typography')]
}
