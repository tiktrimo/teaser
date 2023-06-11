/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			noto: ['Noto Sans KR', 'sans-serif'],
			lato: ['Lato', 'sans-serif']
		}
	},
	plugins: []
};
