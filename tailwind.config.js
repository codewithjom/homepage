/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#CDD6F4',
            h1: {
              color: '#CDD6F4'
            },
            h2: {
              color: '#CDD6F4'
            },
            h3: {
              color: '#CDD6F4'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
