/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'md': { 'min': '480px', 'max': '767px' },
        'lg': { 'min': '768px', 'max': '991px' },
        'xl': { 'min': '992px' },
      },
    },
  },
  plugins: []
};
