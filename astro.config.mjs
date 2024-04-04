import { defineConfig, squooshImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
	},
	site: 'https://Brian-Kariu.github.io', // Write here your website url
	base: '/blog',
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				},
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})