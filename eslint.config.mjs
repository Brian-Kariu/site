// @ts-check
import astro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'dist/',
			'node_modules/',
			'.astro/',
			'.vercel/',
			'.github/',
			'.changeset/',
			'public/',
			'tina/__generated__/'
		]
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	},
	...astro.configs.recommended,
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro']
			}
		},
		rules: {
			'astro/no-set-html-directive': 'error'
		}
	}
]
