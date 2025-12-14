const { heroui } = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aptly-regular': ['Aptly Regular', 'serif'],
        'aptly-medium': ['Aptly Medium', 'serif'],
        'aptly-regular-italic': ['Aptly Regular Italic', 'serif'],
        'aptly-medium-italic': ['Aptly Medium Italic', 'serif'],
        'Inter': ['Inter', 'serif']
      },
      screens: {
        'sm': { 'max': '479px' },
        'md': { 'min': '479px', 'max': '767px' },
        'lg': { 'min': '767px', 'max': '991px' },
        'xl': { 'min': '991px' },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        'pulse-shadow': {
          '0%': {
            boxShadow: '0 0 #98fe7f80',
          },
          '100%': {
            boxShadow: '0 0 0 0.5rem #98fe7f00',
          },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-shadow': 'pulse-shadow 2s ease-in-out infinite',
      },

      boxShadow: {
        'custom-blue': '-2px 3px 16px 4px rgba(81, 128, 255, 0.25)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
