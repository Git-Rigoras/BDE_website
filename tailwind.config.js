/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
	theme: {
		extend: {
			animation: {
				"fade-in-up": "fadeInUp 500ms ease",
			},
			keyframes: {
				fadeInUp: {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0",
					},
				},
			},
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: "#326a51",
					secondary: "#a8e300",
					accent: "#ff6c4b",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
	darkMode: "class",
};
