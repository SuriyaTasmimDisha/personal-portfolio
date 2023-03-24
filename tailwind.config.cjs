/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#FDF8F0",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
        "white-100": "#f3f3f3",
        "red-100": "#F0122D"
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"dark-hero-pattern": "url('/src/assets/herobg6.png')",
				"light-hero-pattern": "url('/src/assets/herobg8.png')",
			},
		},
	},
	plugins: [],
};
