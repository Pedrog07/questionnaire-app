import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
}
export default config
