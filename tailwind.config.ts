import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		colors: {
			theme_green: "#b0f127",
			theme_dark_gray: "#141414",
			theme_black: "#060606",
		},
		screens: {
			xs: { max: "480px" },
			sm: { max: "768px" },
			tablet: { min: '481px', max: "768px" },
			md: "796px",
		},
	},
	plugins: [],
};
export default config;

