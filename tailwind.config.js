/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.tsx", "./components/**/*.tsx", "./pages/**/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	darkMode: "class",
};
