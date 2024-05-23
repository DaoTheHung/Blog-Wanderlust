import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./features/**/*.{ts,tsx}'
	],
	purge: [
		'./src/**/*.html',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.ts',
		'./src/**/*.tsx'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			'gentium-plus': ['Gentium Plus', 'serif']
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				footer1: "url('https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/438216153_913541494115090_9041177873738157076_n.png?stp=dst-png_p130x130&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFXdIrJfIeygJpPSitz--DXIpaqa8ggHUoilqpryCAdSip8qLgwvMCLBTan9u38H10QaAcpsmZPD0b6ySPnwPWh&_nc_ohc=DmLjKBVqpTgQ7kNvgGaI3fd&_nc_oc=Adj129bpodx6UqUAAGg0zRd4ImysWKS5xYsViyHJv5a8Ot7BZXSQVhVQeq7DszpXxL9b0gYP_BeFfuEfANg1aySo&_nc_ht=scontent.fhan17-1.fna&oh=00_AfD20ZlEENIvsXczjEYqeGWaAYk3yeOAGeLhtfZgs061NA&oe=663B75B2')",
				bannerDefault:
					"url('https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1469,h_475,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg')",
				banner: "url('/images/banner/diem-den.png')",
				banne1: "url('/images/banner/tin-tuc.png')",
				banne2: "url('/images/banner/tips-du-lich.png')",
				banne3: "url('/images/banner/am-thuc.png')"
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/line-clamp')
	]
} satisfies Config;

export default config;
