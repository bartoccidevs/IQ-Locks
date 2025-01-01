/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-text': 'var(--theme-text)',
        'theme-text-dark': 'var(--theme-text-dark)',
        'theme-text-contrast': 'var(--theme-text-contrast)',
        'theme-background': 'var(--theme-background)',
        'theme-background-dark': 'var(--theme-background-dark)',
        'theme-page': 'var(--theme-page)',
        'theme-page-dark': 'var(--theme-page-dark)',
        'theme-primary': 'var(--theme-primary)',
        'theme-primary-dark': 'var(--theme-primary-dark)',
        'theme-secondary': 'var(--theme-secondary)',
        'theme-secondary-dark': 'var(--theme-secondary-dark)',
        'theme-accent': 'var(--theme-accent)',
        'theme-accent-dark': 'var(--theme-accent-dark)',
        'theme-form': 'var(--theme-form)',
        'theme-form-dark': 'var(--theme-form-dark)',
        'theme-divider': 'var(--theme-divider)',
        'theme-divider-dark': 'var(--theme-divider-dark)'
      },
      fontSize: {
        '3.5xl': '2rem'
      },
      content: {
        'insta': 'url("/assets/icons/instagram.svg")',
        'insta-orange': 'url("/assets/icons/instagram-orange.svg")',
        'insta-dark': 'url("/assets/icons/instagram-dark.svg")',
        'twitter': 'url("/assets/icons/twitter.svg")',
        'twitter-orange': 'url("/assets/icons/twitter-orange.svg")',
        'twitter-dark': 'url("/assets/icons/twitter-dark.svg")',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};