/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
	theme: {
		extend: {},
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
