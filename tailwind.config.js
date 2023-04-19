/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#00ADB5',
				secondary: '#393E46',
				neutral: '#222831',
				light: '#FCFCFC',
				accent: '#00FFF5',
			},
		},
		deliciousHamburgers: {
			size: '30px', // must be in px.
			color: '#586061',
			colorLight: '#fff8f4',
			padding: '0px', // must be in px.
			animationSpeed: 1,
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-delicious-hamburgers'),
	],
};
