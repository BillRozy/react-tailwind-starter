/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
    },
    spacing: {
      '100': '8px',
      '150': '12px',
      '200': '16px',
      '300': '24px',
      '400': '32px',
      '500': '40px',
      '1600': '128px',
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px'
    },
  },
  plugins: [],
}

