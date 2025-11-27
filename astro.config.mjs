import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/utils/readTime.ts";
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
	site: "https://Brian-Kariu.github.io",
	env: {
		schema: {
			POSTHOG_API_HOST: envField.string({
				context: "client",
				access: "public",
				optional: false,
				default: "",
			}),
			POSTHOG_API_TOKEN: envField.string({
				context: "client",
				access: "public",
				optional: false,
				default: "",
			}),
		},
	},
	base: "/",
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: "material-theme-palenight",
			wrap: true,
		},
	},
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				experimentalThemes: {
					light: "vitesse-light",
					dark: "material-theme-palenight",
				},
				wrap: true,
			},
			drafts: true,
		}),
		sitemap(),
		icon(),
		tailwind(),
		react(),
	],
});
