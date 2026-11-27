import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { defineConfig, envField } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'

import react from '@astrojs/react'

export default defineConfig({
	site: 'https://www.brian-kariu.me',
	env: {
		schema: {
			POSTHOG_API_HOST: envField.string({
				context: 'client',
				access: 'public',
				optional: false,
				default: ''
			}),
			POSTHOG_API_TOKEN: envField.string({
				context: 'client',
				access: 'public',
				optional: false,
				default: ''
			})
		}
	},
	base: '/',
	markdown: {
		processor: unified({ remarkPlugins: [remarkReadingTime] }),
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
					dark: 'material-theme-palenight'
				},
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		icon(),
		react()
	]
})
