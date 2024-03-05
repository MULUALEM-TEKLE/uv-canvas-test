const { nextui } = require("@nextui-org/react")

module.exports = {
	content: [
		"./src/**/*.{html,js,jsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		// "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
}
