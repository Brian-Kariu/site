/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,md,mdx,ts,jsx,tsx}"],
	theme: {
		screens: {
			"2xs": "360px",
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		colors: {
			black: "#000000",
			white: "#ffffff",
			orange: "#e06330",
			theme: "#92400e",
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
				body: ["Manrope", ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				list: "repeat(auto-fill, minmax(400px, max-content))",
			},
			boxShadow: {
				shadow: "var(--shadow)",
			},
			translate: {
				boxShadowX: "4px",
				boxShadowY: "4px",
				reverseBoxShadowX: "-4px",
				reverseBoxShadowY: "-4px",
			},
			fontWeight: {
				base: "500",
				heading: "700",
			},
			borderRadius: {
				base: "5px",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "#1c1917",
				foreground: "#f5f5f4",
				card: {
					DEFAULT: "#292524",
					foreground: "#f5f5f4",
				},
				popover: {
					DEFAULT: "#292524",
					foreground: "#f5f5f4",
				},
				primary: {
					DEFAULT: "#000000",
					foreground: "#faf7f5",
				},
				secondary: {
					DEFAULT: "#92400e",
					foreground: "#fef3c7",
				},
				muted: {
					DEFAULT: "#292524",
					foreground: "#d6d3d1",
				},
				accent: {
					DEFAULT: "#b45309",
					foreground: "#fef3c7",
				},
				destructive: {
					DEFAULT: "#ef4444",
					foreground: "#ffffff",
				},
				border: "#44403c",
				input: "#44403c",
				ring: "#b91c1c",
				chart: {
					1: "#f87171",
					2: "#ef4444",
					3: "#dc2626",
					4: "#fbbf24",
					5: "#f59e0b",
				},
				main: "var(--main)",
				overlay: "var(--overlay)",
				bg: "var(--bg)",
				bw: "var(--bw)",
				blank: "var(--blank)",
				text: "var(--text)",
				mtext: "var(--mtext)",
				border: "var(--border)",
				ring: "var(--ring)",
				ringOffset: "var(--ring-offset)",
				secondaryBlack: "#212121",
			},
		},
	},

	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
