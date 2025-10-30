import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/utils/readTime.ts";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://Brian-Kariu.github.io", // Write here your website url
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
