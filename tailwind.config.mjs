/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9fa',
          100: '#d8f0f3',
          200: '#b3e1e7',
          300: '#7fc9d4',
          400: '#4aaab9',
          500: '#2f8f9e',
          600: '#267383',
          700: '#225d6a',
          800: '#204c57',
          900: '#1d4049',
          950: '#10262c',
        },
        accent: {
          500: '#d98c3f',
          600: '#c1752a',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
