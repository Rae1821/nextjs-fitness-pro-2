import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coral: {
          550: '#2fc9d7',
        },
        secondary: {
          550: '#D9D9D9'
        },
        turq: {
          550: "#fb9678"
        },
        green: {
          500: '#00c292'
        },
        yellow: {
          500: '#fec90d'
        },
        neutral: {
          500: '#F2F2F2'
        },
        base: {
          100: '#ffffff',
          200: '#272925',
          300: '#BFBFBF',
        }
      }
    },
  },
  plugins: [],
}
export default config


// "primary": "#2fc9d7",
// "secondary": "#D9D9D9",
// "accent": "#fb9678",
// "success": "#00c292",
// "warning": "#fec90d",
// "neutral": "#F2F2F2",
// "base-100": "#ffffff",
// "base-200": "#272925",
// "base-300": "#BFBFBF",