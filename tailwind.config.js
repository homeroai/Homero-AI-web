/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#1a1a1a',       // negro profundo
  			background: '#000000',    // fondo negro puro
  			surface: '#0a0a0a',       // negro muy oscuro para tarjetas
  			accent: '#333333',        // gris muy oscuro (hover)
  			muted: '#666666',         // gris medio para texto
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        homero: {
          purple: '#1a1a1a',        // negro profundo
          purpleDark: '#000000',    // negro puro
          purpleLight: '#333333',   // gris muy oscuro
          base: '#000000',          // fondo negro puro
          text: '#ffffff',          // texto blanco
          white: '#FFFFFF'          // blanco puro
        }
  		},
  		fontFamily: {
  			sans: [
  				'Manrope',
  				'sans-serif'
  			],
  			outfit: [
  				'Outfit',
  				'sans-serif'
  			],
  			manrope: [
  				'Manrope',
  				'sans-serif'
  			],
  			dm: [
  				'DM Sans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} 